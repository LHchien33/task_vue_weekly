# 2022 Vue 冬季直播班 - 主線任務
此專案為六角學院直播班課程的每週作業任務，主要目標為實作電商網站功能，包含：

* 一般前台使用者
  - [x] 瀏覽產品列表/產品細節
  - [x] 新增/編輯/刪除購物車品項
  - [x] 送出訂單
  - [x] ...
* 後台管理者（需權限）
  - [x] 登入
  - [x] 產品管理：新增/修改/刪除產品
  - [x] ...

## 任務內容

### 第一週 - 關注點分離
>使用靜態資料建立一個產品列表
* 使用者可以查看產品列表
* 使用者可以點擊單一產品，查看詳細資訊

### 第二週 - RESTful API 串接（需權限）
>增加登入流程，串接 API 驗證使用者、取得產品資料
* 使用者可以從登入頁面登入，並轉到後台商品頁面
* 使用者若無登入直接進入商品頁面，會被導回登入頁面
* 使用者可以查看產品列表
* 使用者可以點擊單一產品，查看詳細資訊

### 第三週 - 熟練 Vue.js（需權限）
> 建立一頁式產品管理頁面
* 可以新增、編輯、刪除商品
* 商品啟用、關閉可以使用不同的顏色標示

### 第四週 - 元件（需權限）
> 將功能拆分為元件
* 新增分頁導覽列
* 調整 產品新增/編輯/刪除彈跳視窗 為元件

### 第五週 - 進階語法
> 新增前台購物頁面，含串接 API、表單驗證及 loading 效果
* 使用者可瀏覽產品列表/細節，並加入購物車
* 使用者可新增/編輯/刪除購物車品項
* 使用者可填寫訂單資訊，並送出訂單

### 第六週 - Vite、Vue Router
> 與 Vite、Vue Router 整合，嘗試設定路由
* 使用 Vite 完成路由設定
* 在 Vite 中完成登入、前台表單驗證功能
* 建立 .env 檔案內容