const DATA_FILES = {
  publications: "data/publications.json",
  projects: "data/projects.json",
  awards: "data/awards.json",
};

const list = document.querySelector("#result-list");
const tabButtons = Array.from(document.querySelectorAll(".tab"));
const filterButtons = Array.from(document.querySelectorAll(".filter"));

let records = {
  publications: [],
  projects: [],
  awards: [],
};
let activePanel = "publications";
let activeTeacher = "all";

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[character];
  });
}

async function loadRecords() {
  const entries = await Promise.all(
    Object.entries(DATA_FILES).map(async ([key, url]) => {
      const response = await fetch(url, { cache: "no-store" });
      if (!response.ok) {
        throw new Error(`Failed to load ${url}: ${response.status}`);
      }
      return [key, await response.json()];
    })
  );

  records = Object.fromEntries(entries);
}

function renderRecords() {
  const entries = records[activePanel].filter((record) => {
    return activeTeacher === "all" || record.teacher === activeTeacher;
  });

  if (entries.length === 0) {
    list.innerHTML = '<div class="empty-state">当前筛选条件下没有已录入条目。</div>';
    return;
  }

  list.innerHTML = entries
    .map(
      (record) => `
        <article class="result-item ${activePanel === "publications" ? "publication-item" : ""}">
          ${activePanel === "publications" ? "" : `<div class="result-meta">${escapeHtml(record.teacherName)}</div>`}
          <div>
            <h3>${escapeHtml(record.title)}</h3>
            ${record.authors ? `<p class="authors">作者：${escapeHtml(record.authors)}</p>` : ""}
            ${record.detail ? `<p>${escapeHtml(record.detail)}</p>` : ""}
          </div>
        </article>
      `
    )
    .join("");
}

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activePanel = button.dataset.panel;
    tabButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderRecords();
  });
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeTeacher = button.dataset.teacher;
    filterButtons.forEach((item) => item.classList.toggle("is-active", item === button));
    renderRecords();
  });
});

loadRecords()
  .then(renderRecords)
  .catch((error) => {
    console.error(error);
    list.innerHTML = '<div class="empty-state">成果数据暂时无法加载，请稍后刷新页面。</div>';
  });
