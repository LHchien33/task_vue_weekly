import{_ as x,P as D,D as E}from"./DelModal-57241aa6.js";import{_ as y,o as l,a as d,b as t,t as n,e as u,F as p,h as $,i as O,j as P,r as f,d as g,f as I,m as V,n as A}from"./index-6d179905.js";const k={methods:{dateConverter(o,c="part"){let i=new Date(o*1e3);const _=[i.getFullYear(),i.getMonth()+1,i.getDate(),i.getHours(),i.getMinutes(),i.getSeconds()],[e,s,a,m,b,r]=_;return c==="whole"?`${e}/${s}/${a} ${m}:${b}:${r}`:`${e}/${s}/${a}`}}},T={props:["temp"],mixins:[x,k],emits:["updatePaid"],data(){return{modal:{},tempOrder:this.temp,isPaid:!1}},watch:{temp(o){this.tempOrder=o,console.log(this.tempOrder)}}},w={ref:"modal",class:"modal fade",id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},C={class:"modal-dialog modal-xl",role:"document"},S={class:"modal-content border-0"},R=t("div",{class:"modal-header bg-dark text-white"},[t("h5",{class:"modal-title",id:"exampleModalLabel"},[t("span",null,"訂單細節")]),t("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),U={class:"modal-body"},B={class:"row"},H={class:"col-md-4"},L=t("h3",null,"用戶資料",-1),N={class:"table"},q={key:0},F=t("th",{style:{width:"100px"}},"姓名",-1),j=t("th",null,"Email",-1),z=t("th",null,"電話",-1),Y=t("th",null,"地址",-1),G={class:"col-md-8"},J=t("h3",null,"訂單細節",-1),K={class:"table"},Q=t("th",{style:{width:"100px"}},"訂單編號",-1),W=t("th",null,"下單時間",-1),X=t("th",null,"付款狀態",-1),Z={key:0,class:"text-success"},tt={key:1,class:"text-danger"},et=t("th",null,"總金額",-1),st=t("h3",null,"選購商品",-1),ot={class:"table"},lt=t("thead",null,[t("tr")],-1),nt={class:"text-end"},dt={class:"d-flex justify-content-end"},at={class:"form-check"},rt={class:"form-check-label",for:"flexCheckDefault"},it={key:0},ct={key:1},_t={class:"modal-footer"},ht=t("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"}," 取消 ",-1);function ut(o,c,i,_,e,s){return l(),d("div",w,[t("div",C,[t("div",S,[R,t("div",U,[t("div",B,[t("div",H,[L,t("table",N,[e.tempOrder.user?(l(),d("tbody",q,[t("tr",null,[F,t("td",null,n(e.tempOrder.user.name),1)]),t("tr",null,[j,t("td",null,n(e.tempOrder.user.email),1)]),t("tr",null,[z,t("td",null,n(e.tempOrder.user.tel),1)]),t("tr",null,[Y,t("td",null,n(e.tempOrder.user.address),1)])])):u("",!0)])]),t("div",G,[J,t("table",K,[t("tbody",null,[t("tr",null,[Q,t("td",null,n(e.tempOrder.id),1)]),t("tr",null,[W,t("td",null,n(o.dateConverter(e.tempOrder.create_at,"whole")),1)]),t("tr",null,[X,t("td",null,[e.tempOrder.is_paid?(l(),d("strong",Z,"已付款")):(l(),d("span",tt,"尚未付款"))])]),t("tr",null,[et,t("td",null,n(`$${e.tempOrder.total}`),1)])])]),st,t("table",ot,[lt,t("tbody",null,[(l(!0),d(p,null,$(e.tempOrder.products,a=>(l(),d("tr",{key:a.id},[t("th",null,n(a.product.title),1),t("td",null,n(a.qty)+" / "+n(a.product.unit),1),t("td",nt,n(`$${a.final_total}`),1)]))),128))])]),t("div",dt,[t("div",at,[O(t("input",{class:"form-check-input",type:"checkbox",value:"",id:"flexCheckDefault","onUpdate:modelValue":c[0]||(c[0]=a=>e.tempOrder.is_paid=a)},null,512),[[P,e.tempOrder.is_paid]]),t("label",rt,[e.tempOrder.is_paid?(l(),d("span",it,"已付款")):(l(),d("span",ct,"未付款"))])])])])])]),t("div",_t,[ht,t("button",{type:"button",class:"btn btn-primary",onClick:c[1]||(c[1]=a=>o.$emit("updatePaid",e.tempOrder))}," 修改付款狀態 ")])])])],512)}const pt=y(T,[["render",ut]]),mt={mixins:[k],data(){return{orders:[],isNew:!1,pagination:{},tempOrder:{}}},components:{Pagination:D,DelModal:E,OrderModal:pt},methods:{getOrders(o=1){const c=this.$loading.show(),{VITE_API:i,VITE_API_PATH:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=`${i}/api/${_}/admin/orders?page=${o}`;this.$http.get(e).then(s=>{this.orders=s.data.orders,this.pagination=s.data.pagination}).catch(s=>{alert(`取得訂單失敗，錯誤代碼：${s.response.status}`)}).finally(()=>c.hide())},openModal(o){this.tempOrder={...o},this.$refs.orderModal.openModal()},openDelOrderModal(o){this.tempOrder={...o},this.$refs.delModal.openModal()},updatePaid(o){const c=this.$loading.show(),{VITE_API:i,VITE_API_PATH:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=`${i}/api/${_}/admin/order/${o.id}`,s={is_paid:o.is_paid};this.$http.put(e,{data:s}).then(a=>{this.getOrders(),this.$refs.orderModal.hideModal(),setTimeout(()=>alert("成功更新付款狀態"),500)}).catch(a=>{alert(`更新付款狀態失敗，錯誤代碼：${a.response.status}`)}).finally(()=>c.hide())},delOrder(o){const c=this.$loading.show(),{VITE_API:i,VITE_API_PATH:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},e=`${i}/api/${_}/admin/order/${o}`;this.$http.delete(e).then(s=>{this.$refs.delModal.hideModal(),this.getOrders(),setTimeout(()=>alert("成功刪除訂單"),500)}).catch(s=>{alert(`刪除訂單失敗，錯誤代碼：${s.response.status}`)}).finally(()=>c.hide())}},mounted(){this.getOrders()}},bt={class:"container"},ft={class:"table mt-4"},$t=t("thead",null,[t("tr",null,[t("th",null,"購買時間"),t("th",null,"Email"),t("th",null,"購買款項"),t("th",null,"應付金額"),t("th",null,"是否付款"),t("th",null,"編輯")])],-1),gt=["textContent"],yt={class:"list-unstyled mb-0"},Ot={class:"mb-0"},Pt={class:"text-right"},kt={class:"form-check form-switch"},vt=["id","onUpdate:modelValue","onChange"],Mt=["for"],xt={key:0},Dt={key:1},Et={class:"btn-group"},It=["onClick"],Vt=["onClick"];function At(o,c,i,_,e,s){const a=f("OrderModal"),m=f("DelModal"),b=f("Pagination");return l(),d("div",bt,[t("table",ft,[$t,t("tbody",null,[(l(!0),d(p,null,$(e.orders,(r,v)=>(l(),d(p,{key:v},[e.orders.length?(l(),d("tr",{key:0,class:A({"text-secondary":!r.is_paid})},[t("td",null,n(o.dateConverter(r.create_at)),1),t("td",null,[r.user?(l(),d("span",{key:0,textContent:n(r.user.email)},null,8,gt)):u("",!0)]),t("td",null,[t("ul",yt,[(l(!0),d(p,null,$(r.products,(h,M)=>(l(),d("li",{key:M},[t("p",Ot,n(h.product.title),1),t("small",null,"數量："+n(h.qty)+n(h.product.unit),1)]))),128))])]),t("td",Pt,n(r.total),1),t("td",null,[t("div",kt,[O(t("input",{type:"checkbox",class:"form-check-input",id:`paidSwitch${r.id}`,"onUpdate:modelValue":h=>r.is_paid=h,onChange:h=>s.updatePaid(r)},null,40,vt),[[P,r.is_paid]]),t("label",{for:`paidSwitch${r.id}`,class:"form-check-label"},[r.is_paid?(l(),d("span",xt,"已付款")):(l(),d("span",Dt,"未付款"))],8,Mt)])]),t("td",null,[t("div",Et,[t("button",{class:"btn btn-outline-primary btn-sm",type:"button",onClick:h=>s.openModal(r)},"檢視 ",8,It),t("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:h=>s.openDelOrderModal(r)},"刪除 ",8,Vt)])])],2)):u("",!0)],64))),128))])]),g(a,{ref:"orderModal",temp:e.tempOrder,onUpdatePaid:s.updatePaid},null,8,["temp","onUpdatePaid"]),g(m,{ref:"delModal",temp:e.tempOrder,onDelData:s.delOrder},null,8,["temp","onDelData"]),e.pagination.total_pages?(l(),I(b,V({key:0},e.pagination,{onSwitchPage:s.getOrders}),null,16,["onSwitchPage"])):u("",!0)])}const Ct=y(mt,[["render",At]]);export{Ct as default};