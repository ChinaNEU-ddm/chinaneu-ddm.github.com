const records = {
  publications: [
    {
      teacher: "shen",
      teacherName: "申德荣",
      authors: "Wenzhou Dou; Derong Shen*; Xiangmin Zhou; Yue Kou; Tiezheng Nie; Hang Cui; Ge Yu",
      title: "Weakly-Supervised Entity Matching via LLM-Guided Data Augmentation and Knowledge Transfer",
      detail: "KBS 2026。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      authors: "Jinfeng Peng; Hanghai Cui; Derong Shen*; Nan Tang; Yue Kou; Tiezheng Nie; Hang Cui; Ge Yu",
      title: "GARF+: self-supervised and interpretable data cleaning with sequence generative adversarial networks",
      detail: "VLDB JOURNAL, 2025。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      authors: "Jiakai Tang; Derong Shen*; Wenzhou Dou; Tiezheng Nie; Yue Kou",
      title: "Towards Long-Text Entity Resolution with Chain-of-Thought Knowledge Augmentation from Large Language Models",
      detail: "DASFAA 2024。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      authors: "Yue Kou; Eryu Jiang; Derong Shen; Xiangmin Zhou; Dong Li; Tiezheng Nie; Ge Yu",
      title: "Counterfactual Path Augmentation for Reinforcement Reasoning in Explainable Recommendation",
      detail: "DASFAA 2025, CCF B 类会议，大会最佳论文。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      authors: "Yue Kou; Yingxuan Du; Derong Shen; Xiangmin Zhou; Dong Li; Tiezheng Nie; Ge Yu",
      title: "Experts2team: Task Relevance-Induced Team Formation by Combining Global Cohesion with Local Decoupling",
      detail: "DASFAA 2025, Singapore, CCF B 类会议。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      authors: "Yue Kou; Dong Li; Derong Shen; Xiangmin Zhou; Tiezheng Nie; Ge Yu",
      title: "Curious or Conservative: Dynamic Curiosity-aware Explainable Recommendation",
      detail: "ACM Transactions on Recommender Systems, 2025。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      authors: "Yimin Hou; Yue Kou*; Derong Shen; Xiangmin Zhou; Dong Li; Tiezheng Nie; Ge Yu",
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
      title: "东北大学优秀毕业论文",
      detail: "2025-01-22。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀毕业论文",
      detail: "2024-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀毕业论文",
      detail: "2022-01-27。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "冶金部优秀论文",
      detail: "2020-01-24。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀毕业论文",
      detail: "2020-01-24。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀毕业论文",
      detail: "2017-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀硕士学位论文",
      detail: "2008-01-24。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀硕士学位论文",
      detail: "2012-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀硕士学位论文",
      detail: "2015-01-21。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀硕士学位论文",
      detail: "2010-01-22。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "NDBC2012 萨师煊优秀学生论文",
      detail: "2012-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀硕士学位论文",
      detail: "2009-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "DASFAA 2025 Best Paper Running-up",
      detail: "2025-01-15。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "APWeb 2016 Best Paper Award Running-up",
      detail: "2016-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "APWeb 2015 Best Paper Award",
      detail: "2015-01-20。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "DASFAA 2015 Best Student Paper Award",
      detail: "2015-01-14。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "辽宁省优秀研究生教材（研究生）",
      detail: "2020-01-23。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学优秀教材（本科）（2024）",
      detail: "2024-01-16。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "东北大学 2014 年度“三八”红旗手",
      detail: "2014-01-09。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "辽宁省优秀研究生团队",
      detail: "2024-01-16。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "辽宁省研究生教学成果二等奖",
      detail: "2022-01-19。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "辽宁省科技进步奖三等奖",
      detail: "2014-01-15。",
    },
    {
      teacher: "shen",
      teacherName: "申德荣",
      title: "教育部自然科学技术二等奖",
      detail: "2007-01-01。",
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
      title: "DASFAA 2025 会议最佳论文",
      detail: "Counterfactual Path Augmentation for Reinforcement Reasoning in Explainable Recommendation。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省自然科学学术成果奖三等奖",
      detail: "面向社交网络的基于约束模式图的团队组建技术。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省研究生教学成果奖二等奖",
      detail: "“教、学、研、产”融合模式下的《分布式数据库》课程体系改革与成效。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "WISA 2021 优秀论文",
      detail: "面向异构信息网络基于多视角嵌入融合的推荐方法。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "WISA 2020 最佳论文",
      detail: "An Explainable Recommendation Method Based on Multi-timeslice Graph Embedding。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省高校教师教学创新大赛三等奖",
      detail: "教学获奖。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省计算机学会学术年会优秀论文二等奖",
      detail: "学术论文获奖。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省计算机学会学术年会优秀论文一等奖",
      detail: "学术论文获奖。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省计算机学会学术年会优秀论文一等奖",
      detail: "学术论文获奖。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "辽宁省科学技术奖三等奖",
      detail: "基于云计算的通用网上阅卷系统。",
    },
    {
      teacher: "kou",
      teacherName: "寇月",
      title: "CNCC 2013 优秀海报",
      detail: "异构网络中关联实体识别模型及增量式验证算法研究。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "辽宁省科技进步奖",
      detail: "2014-01-27，省/市级。",
    },
    {
      teacher: "nie",
      teacherName: "聂铁铮",
      title: "教育部科学技术进步奖一等奖",
      detail: "2016-12-01，省/市级。",
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
        <article class="result-item ${activePanel === "publications" ? "publication-item" : ""}">
          ${activePanel === "publications" ? "" : `<div class="result-meta">${record.teacherName}</div>`}
          <div>
            <h3>${record.title}</h3>
            ${record.authors ? `<p class="authors">作者：${record.authors}</p>` : ""}
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
