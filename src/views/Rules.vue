<script setup>
const ruleSections = [
  {
    number: '0',
    title: '封禁期間規定',
    items: [
      '禁止以任何方式繞過封鎖、禁言或其他懲處。',
      '禁止使用分身帳號、他人帳號、VPN、改名等方式逃避處分。',
      '封禁期間若持續規避管理，將視情節延長封禁或永久封禁。',
      '對處分有疑問，請透過官方申訴管道聯絡管理員，禁止在遊戲內或群組內惡意洗版、鬧事。',
    ],
  },
  {
    number: '1',
    title: '聊天規定',
    items: [
      '禁止辱罵、挑釁、嘲諷、歧視或惡意攻擊其他玩家。',
      '禁止騷擾、威脅、跟蹤、洗頻或刻意影響他人遊戲體驗。',
      '禁止散播色情、暴力、仇恨、政治引戰、恐嚇或令人不適的內容。',
      '禁止公開他人個人資料，包括真實姓名、住址、電話、社群帳號、IP、照片等。',
      '禁止以任何形式宣傳其他伺服器、群組、網站或商業內容。',
      '禁止冒充管理員、工作人員或其他玩家。',
      '禁止惡意散播謠言、誤導資訊或造成伺服器混亂。',
    ],
  },
  {
    number: '2',
    title: '遊玩規定',
    items: [
      '禁止使用任何影響伺服器公平性、平衡或正常運行的軟體、模組、材質包、腳本或外掛。',
      '禁止使用作弊功能，包括但不限於飛行、透視、自動挖礦、自動攻擊、連點、礦物追蹤、雷達、瞬移、複製物品等。',
      '禁止惡意破壞地形，例如大範圍亂挖、亂放水岩漿、製造浮空方塊、破壞公共區域景觀等。',
      '禁止偷竊、搶奪、破壞或以任何形式侵犯其他玩家財產。',
      '禁止未經同意進入、修改、破壞他人建築、領地、箱子、機器、農場或紅石設備。',
      '禁止惡意擊殺玩家、設陷阱、堵門、卡重生點，或以任何方式妨礙他人正常遊玩。',
      '禁止利用漏洞、Bug、插件缺陷或伺服器設定錯誤獲取不當利益。',
      '發現漏洞、Bug 或異常狀況時，請立即回報管理員，禁止私自利用或散播方法。',
      '禁止建造造成伺服器嚴重卡頓的裝置，例如超大型紅石機器、高頻紅石、實體堆疊、過量漏斗、過量動物或怪物農場。',
      '公共設施、活動場地、主城、重生點與資源分流區域皆須遵守管理員公告與標示規範。',
    ],
  },
  {
    number: '3',
    title: '申請與帳號規定',
    items: [
      '禁止使用分身帳號申請白名單、活動獎勵、補償、職位或任何特殊權限。',
      '禁止冒用他人身分、提供假資料或惡意隱瞞違規紀錄。',
      '同一玩家原則上只能使用一個主要帳號遊玩，特殊情況需先向管理員說明。',
      '若帳號遭盜用、共用或借給他人造成違規，帳號持有人仍需承擔相關責任。',
    ],
  },
  {
    number: '4',
    title: '交易與經濟規定',
    items: [
      '禁止詐騙、惡意哄抬、惡意壓價或利用不公平資訊欺騙其他玩家。',
      '禁止以現實金錢、虛擬貨幣或其他外部利益交易伺服器內物品、金錢、帳號或權限。',
      '玩家間交易請自行保留證據，例如截圖、聊天紀錄或交易紀錄。',
      '若交易糾紛證據不足，管理員有權不介入或僅作有限處理。',
    ],
  },
  {
    number: '5',
    title: '建築與公共區域規定',
    items: [
      '禁止建造仇恨、色情、歧視、政治引戰、恐嚇或惡意冒犯他人的內容。',
      '禁止在公共道路、主城、傳送點、活動場地附近亂蓋建築或阻擋通行。',
      '大型建築、公共設施、活動場地或可能影響多人的工程，建議先向管理員確認。',
      '長期未使用、明顯廢棄或影響伺服器規劃的建築，管理員有權公告後處理。',
    ],
  },
  {
    number: '6',
    title: '處分規則',
    intro: '違反規定者，管理員將依情節輕重採取以下處分：',
    items: [
      '口頭提醒',
      '警告',
      '禁言',
      '暫時封禁',
      '回收違規所得',
      '回復或移除違規建築、物品、裝置',
      '永久封禁',
    ],
    note: '嚴重違規、惡意破壞、作弊、繞過封鎖、攻擊伺服器或影響大量玩家者，可不經警告直接永久封禁。',
  },
  {
    number: '7',
    title: '申訴與回報',
    items: [
      '若你認為處分有誤，可以透過官方管道提出申訴。',
      '申訴時請提供完整資訊，例如遊戲 ID、事件時間、相關截圖、影片或聊天紀錄。',
      '禁止偽造證據、惡意誣告或利用申訴管道騷擾管理員。',
      '管理員保留最終解釋權與處理權。',
    ],
  },
  {
    number: '8',
    title: '補充說明',
    items: [
      '本規定可能依伺服器狀況、活動內容或版本更新進行調整。',
      '管理員有權針對未明確列出的惡意行為進行判定與處理。',
      '請尊重其他玩家，共同維護友善、公平、穩定的遊戲環境。',
    ],
  },
]
</script>

<template>
  <main class="rules-page">
    <nav class="site-nav" aria-label="主要導覽">
      <RouterLink to="/">首頁</RouterLink>
      <RouterLink to="/rules">伺服器規定</RouterLink>
      <RouterLink to="/membership">會員等級</RouterLink>
      <RouterLink to="/about">關於我們</RouterLink>
    </nav>

    <section class="page-hero">
      <p class="eyebrow">StrawServer Rules</p>
      <h1>吸管伺服器｜伺服器規定</h1>
      <p>
        為了維護良好的遊戲環境，請所有玩家在加入伺服器前詳閱並遵守以下規定。進入伺服器遊玩即代表你已閱讀、理解並同意本規定。
      </p>
      <span class="updated">最後更新：2026 年 5 月 30 日</span>
    </section>

    <section class="rules-list" aria-label="伺服器規定列表">
      <article v-for="section in ruleSections" :key="section.number" class="rule-card">
        <div class="rule-card__header">
          <span class="rule-card__number">{{ section.number }}</span>
          <h2>{{ section.title }}</h2>
        </div>
        <p v-if="section.intro" class="rule-card__intro">{{ section.intro }}</p>
        <ol>
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ol>
        <p v-if="section.note" class="rule-card__note">{{ section.note }}</p>
      </article>
    </section>
  </main>
</template>

<style scoped>
.rules-page {
  min-height: 100vh;
  padding: 28px 22px 64px;
  background: radial-gradient(circle at top left, rgba(255, 209, 102, 0.14), transparent 36%), #0e131d;
}

.site-nav {
  max-width: 1080px;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.site-nav a {
  padding: 10px 16px;
  border-radius: 999px;
  color: #d8dbe5;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-weight: 700;
}

.site-nav a.router-link-active,
.site-nav a:hover {
  color: #17120a;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  border-color: transparent;
}

.page-hero,
.rules-list {
  width: 100%;
  max-width: 1080px;
  margin: 0 auto;
}

.page-hero {
  text-align: center;
  padding: 44px 22px;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 24px 70px rgba(0, 0, 0, 0.28);
}

.eyebrow {
  color: #ffd166;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.page-hero h1 {
  font-size: clamp(32px, 6vw, 54px);
  color: #fff7df;
  margin-bottom: 18px;
}

.page-hero p:not(.eyebrow) {
  max-width: 760px;
  margin: 0 auto;
  color: #b7bdcc;
  line-height: 1.9;
}

.updated {
  display: inline-flex;
  margin-top: 24px;
  padding: 8px 14px;
  border-radius: 999px;
  color: #ffd166;
  background: rgba(255, 209, 102, 0.1);
  border: 1px solid rgba(255, 209, 102, 0.22);
  font-size: 14px;
  font-weight: 700;
}

.rules-list {
  display: grid;
  gap: 18px;
  margin-top: 28px;
}

.rule-card {
  padding: 24px;
  border-radius: 22px;
  background: rgba(255, 255, 255, 0.045);
  border: 1px solid rgba(255, 255, 255, 0.09);
}

.rule-card__header {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;
}

.rule-card__number {
  width: 42px;
  height: 42px;
  display: inline-grid;
  place-items: center;
  border-radius: 14px;
  color: #17120a;
  background: linear-gradient(135deg, #ffd166, #ffae00);
  font-size: 18px;
  font-weight: 900;
  flex: 0 0 auto;
}

.rule-card h2 {
  color: #f5f5f7;
  font-size: clamp(20px, 3vw, 26px);
}

.rule-card__intro,
.rule-card__note {
  color: #cfd3df;
  line-height: 1.8;
  margin-bottom: 12px;
}

.rule-card__note {
  margin: 16px 0 0;
  padding: 14px 16px;
  border-radius: 14px;
  color: #ffd166;
  background: rgba(255, 209, 102, 0.08);
  border: 1px solid rgba(255, 209, 102, 0.18);
}

.rule-card ol {
  display: grid;
  gap: 10px;
  padding-left: 24px;
  color: #aeb5c5;
  line-height: 1.8;
}

.rule-card li::marker {
  color: #ffd166;
  font-weight: 800;
}

@media (max-width: 640px) {
  .rules-page {
    padding-inline: 16px;
  }

  .page-hero,
  .rule-card {
    padding: 22px 18px;
  }

  .rule-card__header {
    align-items: flex-start;
  }
}
</style>
