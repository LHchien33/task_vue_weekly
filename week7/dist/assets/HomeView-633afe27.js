import{_ as v,r,o as u,a as p,b as t,d as n,w as c,f as m,e as g,F as k,g as l}from"./index-043017a7.js";const b={data(){return{status:!1}},methods:{logout(){const a=this.$loading.show(),s="https://vue3-course-api.hexschool.io/v2/logout";this.$http.post(s).then(e=>{this.$router.push("/login"),setTimeout(()=>alert(e.data.message),500)}).catch(e=>{alert(`登出失敗，錯誤代碼：${e.response.status}`)}).finally(()=>a.hide())}},mounted(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)chienToken\s*\=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const{VITE_API:s}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/task_vue_weekly/week7/dist/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=`${s}/api/user/check`;this.$http.post(e).then(i=>{this.status=!0}).catch(i=>{alert("驗證錯誤，請先登入"),this.$router.push("/login")})}},f={class:"navbar navbar-expand-lg bg-light"},$={class:"container"},w=t("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[t("span",{class:"navbar-toggler-icon"})],-1),V={class:"collapse navbar-collapse",id:"navbarNav"},x={class:"navbar-nav w-100"},T={class:"nav-item"},E={class:"nav-item"},N={class:"nav-item"},R=t("li",{class:"nav-item ms-lg-auto"},[t("a",{href:"https://lhchien33.github.io/task_vue_weekly/week5/index.html",class:"nav-link active"},"購物車")],-1);function A(a,s,e,i,d,h){const o=r("RouterLink"),_=r("RouterView");return u(),p(k,null,[t("header",null,[t("nav",f,[t("div",$,[n(o,{to:"/admin/products",class:"navbar-brand"},{default:c(()=>[l("後台")]),_:1}),w,t("div",V,[t("ul",x,[t("li",T,[n(o,{to:"/admin/products",class:"nav-link active"},{default:c(()=>[l("產品管理")]),_:1})]),t("li",E,[n(o,{to:"/admin/orders",class:"nav-link active"},{default:c(()=>[l("訂單管理")]),_:1})]),t("li",N,[n(o,{to:"",onClick:h.logout,class:"nav-link active"},{default:c(()=>[l("登出")]),_:1},8,["onClick"])]),R])])])])]),d.status?(u(),m(_,{key:0})):g("",!0)],64)}const y=v(b,[["render",A]]);export{y as default};