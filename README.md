# StrawServerWeb

稻草空島 StrawServer 官方網站，使用 **Vue 3 + Vite + Vue Router** 打造，並加入細緻的動畫效果（進場、捲動揭示、頁面切換與互動回饋），同時尊重使用者的「減少動態效果」(prefers-reduced-motion) 系統偏好。

## 技術棧

- [Vue 3](https://vuejs.org/)（`<script setup>` 組合式 API）
- [Vite 7](https://vite.dev/)
- [Vue Router 4](https://router.vuejs.org/)

## 頁面

| 路由 | 內容 |
| --- | --- |
| `/` | 首頁：Hero、伺服器 IP 複製、即時伺服器狀態、特色介紹 |
| `/rules` | 伺服器規定 |
| `/membership` | 贊助會員階級 |
| `/about` | 關於我們／團隊 |

## 動畫設計

- **Hero 進場動畫**：標題、按鈕等元素依序淡入上浮（CSS `@keyframes`）。
- **捲動揭示動畫**：自訂指令 `v-reveal`（`src/directives/reveal.js`），以 `IntersectionObserver` 在元素進入視窗時觸發過場，支援 `delay` 參數做出階梯式延遲。
- **頁面切換過場**：`App.vue` 以 `<transition name="page-fade">` 包裹 `router-view`。
- **互動回饋**：卡片 hover 浮起、按鈕點擊縮放、IP 複製成功的彈跳動畫、線上狀態指示燈脈動。
- **背景裝飾**：首頁的漂浮光暈與飄動圖示。
- **無障礙**：所有動畫於 `@media (prefers-reduced-motion: reduce)` 時自動停用或立即顯示。

## 開發指令

```sh
# 安裝相依套件
npm install

# 啟動開發伺服器（含熱重載）
npm run dev

# 建置正式版本至 dist/
npm run build

# 本機預覽正式版本
npm run preview
```

## 部署

專案透過 GitHub Pages 自動部署，設定位於 `.github/workflows/main.yml`，唯一分支為 `main`。
