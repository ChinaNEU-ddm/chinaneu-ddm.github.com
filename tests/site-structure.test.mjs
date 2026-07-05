import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const html = readFileSync(new URL("../index.html", import.meta.url), "utf8");
const js = readFileSync(new URL("../script.js", import.meta.url), "utf8");

const requiredSections = ["overview", "research", "team", "publications", "join"];
for (const section of requiredSections) {
  assert.match(html, new RegExp(`id="${section}"`), `missing #${section} section`);
}

assert.match(html, /class="academic-home"/, "page should use an original academic homepage layout");
assert.match(html, /Intelligent Data Management|数据管理/, "page should keep a clear data-management identity");
assert.match(html, /Selected Publications|代表性论文/, "page should include a publications section");
assert.doesNotMatch(html, /_styles|_scripts|FontAwesome|Roboto Mono|Barlow/, "page should not copy the IDMA template assets");
assert.doesNotMatch(html, /id="news"|Latest News|最新动态/, "page should not include a news section");
assert.doesNotMatch(html, /信息来源|Sources|参考网站|参考：|样例|待确认|待补全|占位/, "page should not include source blocks or placeholder wording");
assert.doesNotMatch(js, /待补全|最终上线前|样例|占位/, "data should not include placeholder wording");

const shenHeroIndex = html.indexOf("申德荣 教授");
const kouHeroIndex = html.indexOf("寇月 教授");
const nieHeroIndex = html.indexOf("聂铁铮 副教授");
assert.ok(shenHeroIndex >= 0 && kouHeroIndex > shenHeroIndex && nieHeroIndex > kouHeroIndex, "hero order should be Shen, Kou, Nie");

const firstRecordTeacher = js.match(/teacherName: "([^"]+)"/)?.[1];
assert.equal(firstRecordTeacher, "申德荣", "records should list Shen first by default");
