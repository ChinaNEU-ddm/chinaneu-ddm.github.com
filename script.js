const records = {
  publications: [
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "Weakly-Supervised Entity Matching via LLM-Guided Data Augmentation and Knowledge Transfer",
      detail: "KBS 2026。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "GARF+: self-supervised and interpretable data cleaning with sequence generative adversarial networks",
      detail: "VLDB JOURNAL, 2025。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "Towards Long-Text Entity Resolution with Chain-of-Thought Knowledge Augmentation from Large Language Models",
      detail: "DASFAA 2024。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "Counterfactual Path Augmentation for Reinforcement Reasoning in Explainable Recommendation",
      detail: "DASFAA 2025, CCF B 类会议，大会最佳论文。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "Experts2team: Task Relevance-Induced Team Formation by Combining Global Cohesion with Local Decoupling",
      detail: "DASFAA 2025, Singapore, CCF B 类会议。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "Curious or Conservative: Dynamic Curiosity-aware Explainable Recommendation",
      detail: "ACM Transactions on Recommender Systems, 2025。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "LeadFairRec: LLM-enhanced Discriminative Counterfactual Debiasing for Two-sided Fairness in Recommendation",
      detail: "CIKM 2025, CCF B 类会议，通讯作者。",
    },
  ],
  projects: [
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "数据驱动与规则驱动双引擎的增强型数据集成技术",
      detail: "国家自然科学基金面上项目。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "高质量多模态海量数据获取与整合的理论和技术研究",
      detail: "国家重点基础研究发展计划 973 项目。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "基于群组生成机理的可解释群组推荐方法研究",
      detail: "国家自然科学基金面上项目，项目负责人。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "信息网络市场中面向主题域识别的博弈融合方法",
      detail: "国家自然科学基金面上项目，项目负责人。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "异构体系结构的分布式数据存储与管理",
      detail: "国家重点研发计划项目。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "面向大数据融合的区块链数据管理关键技术研究",
      detail: "国家自然科学基金项目。",
    },
  ],
  awards: [
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "教育部自然科学奖二等奖等省部级科学技术奖",
      detail: "个人主页简介显示获省部级科学技术奖 3 项。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "辽宁省优秀研究生团队",
      detail: "个人主页简介显示 2024 年被评为辽宁省优秀研究生团队。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "DASFAA 2025 会议最佳论文",
      detail: "Counterfactual Path Augmentation for Reinforcement Reasoning in Explainable Recommendation。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "2025 CCF 信息系统专委创新设计大赛第一名",
      detail: "指导教师。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省研究生教学成果奖二等奖",
      detail: "“教、学、研、产”融合模式下的《分布式数据库》课程体系改革与成效。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "教育部科技进步一等奖",
      detail: "个人主页获奖信息显示 2016-01 曾获该荣誉。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "辽宁省科技进步三等奖",
      detail: "个人主页获奖信息显示 2012-08 曾获该荣誉。",
    },
  ],
};

const list = document.querySelector("#result-list");
const tabButtons = Array.from(document.querySelectorAll(".tab"));
const filterButtons = Array.from(document.querySelectorAll(".filter"));
let activePanel = "publications";
let activeTeacher = "all";

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
        <article class="result-item">
          <div class="result-meta">${record.teacherName}</div>
          <div>
            <h3>${record.title}</h3>
            <p>${record.detail}</p>
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

renderRecords();
