import { writeFile } from "node:fs/promises";

const TEACHERS = [
  {
    id: "shen",
    name: "申德荣",
    sources: {
      publications: "http://faculty.neu.edu.cn/shendr/zh_CN/lwcg/112099/list/index.htm",
      projects: "http://faculty.neu.edu.cn/shendr/zh_CN/kyxm/112102/list/index.htm",
      awards: "http://faculty.neu.edu.cn/shendr/zh_CN/hjxx/112110/list/index.htm",
    },
  },
  {
    id: "kou",
    name: "寇月",
    sources: {
      publications: "http://faculty.neu.edu.cn/kouyue/zh_CN/lwcg/55203/list/index.htm",
      projects: "http://faculty.neu.edu.cn/kouyue/zh_CN/kyxm/55206/list/index.htm",
      awards: "http://faculty.neu.edu.cn/kouyue/zh_CN/hjxx/55214/list/index.htm",
    },
  },
  {
    id: "nie",
    name: "聂铁铮",
    sources: {
      publications: "http://faculty.neu.edu.cn/nietiezheng/zh_CN/lwcg/145859/list/index.htm",
      projects: "http://faculty.neu.edu.cn/nietiezheng/zh_CN/kyxm/145862/list/index.htm",
      awards: "http://faculty.neu.edu.cn/nietiezheng/zh_CN/hjxx/145870/list/index.htm",
    },
  },
];

const CATEGORIES = {
  publications: {
    path: "data/publications.json",
    segment: "lwcg",
    parser: parsePublication,
  },
  projects: {
    path: "data/projects.json",
    segment: "kyxm",
    parser: parseGeneralRecord,
  },
  awards: {
    path: "data/awards.json",
    segment: "hjxx",
    parser: parseGeneralRecord,
  },
};

const MAX_PAGES_PER_SOURCE = 10;

async function fetchText(url) {
  const response = await fetch(url, {
    headers: {
      "user-agent": "ChinaNEU-DDM-GitHub-Pages-Updater/1.0",
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${url}: ${response.status}`);
  }

  return response.text();
}

function decodeEntities(value) {
  return value
    .replace(/&nbsp;/gi, " ")
    .replace(/&amp;/gi, "&")
    .replace(/&lt;/gi, "<")
    .replace(/&gt;/gi, ">")
    .replace(/&quot;/gi, '"')
    .replace(/&#39;/gi, "'")
    .replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)))
    .replace(/&#x([0-9a-f]+);/gi, (_, code) => String.fromCodePoint(Number.parseInt(code, 16)));
}

function cleanText(html) {
  return decodeEntities(html)
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\u00a0/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function normalizeUrl(baseUrl, href) {
  try {
    return new URL(href, baseUrl).href;
  } catch {
    return "";
  }
}

function extractAnchors(html, baseUrl) {
  const anchors = [];
  const anchorPattern = /<a\b[^>]*href=(["'])(.*?)\1[^>]*>([\s\S]*?)<\/a>/gi;
  let match;

  while ((match = anchorPattern.exec(html)) !== null) {
    anchors.push({
      href: normalizeUrl(baseUrl, decodeEntities(match[2])),
      text: cleanText(match[3]),
    });
  }

  return anchors;
}

function collectListPageUrls(html, baseUrl, segment) {
  const urls = new Set([baseUrl]);

  for (const anchor of extractAnchors(html, baseUrl)) {
    if (anchor.href.includes(`/${segment}/`) && /\/list\/\d+\.htm$/.test(anchor.href)) {
      urls.add(anchor.href);
    }
  }

  return [...urls].slice(0, MAX_PAGES_PER_SOURCE);
}

async function collectSourcePages(baseUrl, segment) {
  const pending = [baseUrl];
  const seen = new Set();
  const pages = [];

  while (pending.length > 0 && seen.size < MAX_PAGES_PER_SOURCE) {
    const pageUrl = pending.shift();
    if (!pageUrl || seen.has(pageUrl)) {
      continue;
    }

    seen.add(pageUrl);
    const html = await fetchText(pageUrl);
    pages.push({ html, url: pageUrl });

    for (const nextUrl of collectListPageUrls(html, pageUrl, segment)) {
      if (!seen.has(nextUrl) && !pending.includes(nextUrl)) {
        pending.push(nextUrl);
      }
    }
  }

  return pages.sort((a, b) => getPageNumber(a.url) - getPageNumber(b.url));
}

function extractEntries(html, pageUrl, segment) {
  return extractAnchors(html, pageUrl)
    .filter((anchor) => anchor.href.includes(`/${segment}/`) && anchor.href.includes("/content/"))
    .map((anchor) => anchor.text)
    .filter(Boolean);
}

function stripIndex(value) {
  return value.replace(/^\s*\[\d+\]\s*/, "").trim();
}

function getPageNumber(url) {
  const match = url.match(/\/list\/(\d+)\.htm$/);
  return match ? Number(match[1]) : 1;
}

function withChinesePeriod(value) {
  if (!value) {
    return "";
  }
  return /[。.!！?？]$/.test(value) ? value : `${value}。`;
}

function normalizeAuthors(value) {
  return value
    .replace(/,+/g, ",")
    .replace(/\s*[,;；]\s*/g, "; ")
    .replace(/(?:;\s*){2,}/g, "; ")
    .replace(/^;\s*|\s*;$/g, "")
    .trim();
}

function parsePublication(text) {
  const body = stripIndex(text);
  const firstDot = body.indexOf(".");

  if (firstDot < 0) {
    return {
      title: body,
      authors: "",
      detail: "",
    };
  }

  const authors = normalizeAuthors(body.slice(0, firstDot));
  const remaining = body.slice(firstDot + 1).trim();
  const secondDot = remaining.indexOf(".");

  const mergedAuthorTitle = body.slice(0, firstDot).match(/^(.+\*)([A-Z][^.;]+:[^.]*)$/);
  if (mergedAuthorTitle) {
    return {
      title: mergedAuthorTitle[2].trim(),
      authors: normalizeAuthors(mergedAuthorTitle[1]),
      detail: withChinesePeriod(remaining),
    };
  }

  if (secondDot < 0) {
    return {
      title: remaining,
      authors,
      detail: "",
    };
  }

  return {
    title: remaining.slice(0, secondDot).trim(),
    authors,
    detail: withChinesePeriod(remaining.slice(secondDot + 1).trim()),
  };
}

function parseGeneralRecord(text) {
  const body = stripIndex(text);
  const parenthesized = body.match(/^(.+?)[（(](.+)[）)]$/);

  if (parenthesized) {
    return {
      title: parenthesized[1].trim(),
      detail: withChinesePeriod(parenthesized[2].trim()),
    };
  }

  const parts = body
    .split(/[，,]/)
    .map((part) => part.trim())
    .filter(Boolean);

  if (parts.length > 1) {
    return {
      title: parts[0],
      detail: withChinesePeriod(parts.slice(1).join("，")),
    };
  }

  return {
    title: body,
    detail: "",
  };
}

async function scrapeCategory(categoryKey, category) {
  const records = [];
  const seen = new Set();

  for (const teacher of TEACHERS) {
    const pages = await collectSourcePages(teacher.sources[categoryKey], category.segment);

    for (const page of pages) {
      for (const entryText of extractEntries(page.html, page.url, category.segment)) {
        const parsed = category.parser(entryText);
        const title = parsed.title?.trim();
        if (!title) {
          continue;
        }

        const key = `${teacher.id}:${entryText}`;
        if (seen.has(key)) {
          continue;
        }
        seen.add(key);

        records.push({
          teacher: teacher.id,
          teacherName: teacher.name,
          ...parsed,
        });
      }
    }
  }

  return records;
}

async function main() {
  for (const [categoryKey, category] of Object.entries(CATEGORIES)) {
    const records = await scrapeCategory(categoryKey, category);
    await writeFile(category.path, `${JSON.stringify(records, null, 2)}\n`, "utf8");
    console.log(`Updated ${category.path}: ${records.length} records`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
