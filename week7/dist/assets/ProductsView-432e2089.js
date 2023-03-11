import{_ as y,o as a,a as d,b as e,h as x,n as _,F as V,i as I,t as g,M as E,c as T,l as A,r as f,d as u,w as C,e as p,g as b,j as w,v as D,k as S,m as $,f as N,p as L}from"./index-970302d7.js";const R={props:["has_pre","total_pages","current_page","has_next"],emits:["switchPage"],methods:{switchPage(o){o!==this.current_page&&this.$emit("switchPage",o)}}},F={class:"pagination"},O=e("span",{"aria-hidden":"true"},"«",-1),q=[O],B=["onClick"],H=e("span",{"aria-hidden":"true"},"»",-1),z=[H];function j(o,s,c,h,t,l){return a(),d("ul",F,[e("li",{class:_(["page-item",{disabled:!c.has_pre}])},[e("a",{class:"page-link",href:"#","aria-label":"Previous",onClick:s[0]||(s[0]=x(r=>l.switchPage(c.current_page-1),["prevent"]))},q)],2),(a(!0),d(V,null,I(c.total_pages,r=>(a(),d("li",{key:r,class:_(["page-item",{active:r===c.current_page}])},[e("a",{class:"page-link",href:"#",onClick:x(m=>l.switchPage(r),["prevent"])},g(r),9,B)],2))),128)),e("li",{class:_(["page-item",{disabled:!c.has_next}])},[e("a",{class:"page-link",href:"#","aria-label":"Next",onClick:s[1]||(s[1]=x(r=>l.switchPage(c.current_page+1),["prevent"]))},z)],2)])}const W=y(R,[["render",j]]),M={mounted(){this.modal=new E(this.$refs.modal)},methods:{openModal(){this.modal.show()},hideModal(){this.modal.hide()}}};T({generateMessage:A("zh_TW",{names:{imageUrl:"主要圖片",title:"標題",category:"分類",unit:"單位",origin_price:"原價",price:"售價",description:"產品描述",content:"說明內容"}})});const G={mixins:[M],props:["temp","isNew"],emits:["updateProd"],data(){return{modal:{},tempProduct:this.temp,previewImg:{},imgFile:{},isLoading:!1,isDisabled:!1}},watch:{temp(o){this.tempProduct=o}},methods:{onSubmit(o){this.$emit("updateProd",this.tempProduct,this.tempProduct.id)},previewUpload(o){this.imgFile=o.target.files[0],this.previewImg.url=URL.createObjectURL(o.target.files[0]),this.previewImg.alt=o.target.files[0].name},clearImg(o){o==="preview"?this.previewImg={}:o==="link"&&(this.tempProduct.imageUrl="")},uploadImg(){this.isLoading=!0,this.isDisabled=!0;const o=new FormData;o.append("file-to-upload",this.imgFile);const{VITE_API:s,VITE_API_PATH:c}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/task_vue_weekly/week7/dist",MODE:"production",DEV:!1,PROD:!0,SSR:!1},h=`${s}/api/${c}/admin/upload`;this.$http.post(h,o).then(t=>{this.previewImg={},this.tempProduct.imageUrl=t.data.imageUrl,console.log(this.tempProduct.imageUrl),alert("成功上傳圖片")}).catch(t=>{alert(`圖片上傳失敗，錯誤代碼：${t.response.status}`)}).finally(()=>{this.isLoading=!1,this.isDisabled=!1})}}},J={ref:"modal",class:"modal fade","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1"},K={class:"modal-dialog modal-xl modal-dialog-scrollable"},Q={class:"modal-header bg-dark"},X={class:"modal-title text-light",id:"productModalLabel"},Y={key:0},Z={key:1},ee=["onClick"],te={class:"modal-body"},se={class:"container-fluid"},oe={class:"row"},le={class:"col-md-4"},ie={class:"mb-5"},ne=e("h3",{class:"mb-0 fs-5"},[b("主要圖片"),e("span",{class:"text-danger ms-1"},"*")],-1),ae=e("label",{for:"imageUrl",class:"form-label mt-2 mb-1"},"請輸入圖片連結",-1),de={class:"position-relative mb-1"},re={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},ce=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),ue=[ce],me=e("label",{for:"uploadImageUrl",class:"form-label mt-2 mb-1"},"或上傳圖片",-1),pe={key:0,for:"uploadImageUrl",class:"form-label mb-1 btn btn-outline-secondary w-100 position-relative"},_e={key:1,class:"position-relative"},he=["src","alt"],be=e("span",{class:"position-absolute top-0 badge text-bg-light opacity-50 fs-6 m-1"},"上傳預覽",-1),ge=["disabled"],ve={key:0,class:"position-relative"},fe=["src"],Pe=e("span",{class:"position-absolute top-0 badge text-bg-light opacity-50 fs-6 m-1"},"主要圖片",-1),ye=e("h3",{class:"mb-3"},"多圖新增",-1),ke=["onUpdate:modelValue"],xe=["src"],we=["onClick"],Ve=e("hr",{class:"my-4"},null,-1),Ie={class:"col-md-8"},Ue={class:"mb-3"},Me=e("label",{for:"title",class:"form-label"},[b("標題"),e("span",{class:"text-danger ms-1"},"*")],-1),Ee={class:"position-relative mb-1"},Te={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},Ae=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),Ce=[Ae],De={class:"mb-3 row"},Se={class:"col"},$e=e("label",{for:"category",class:"form-label"},[b("分類"),e("span",{class:"text-danger ms-1"},"*")],-1),Ne={class:"position-relative mb-1"},Le={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},Re=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),Fe=[Re],Oe={class:"col"},qe=e("label",{for:"unit",class:"form-label"},[b("單位"),e("span",{class:"text-danger ms-1"},"*")],-1),Be={class:"position-relative mb-1"},He={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},ze=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),je=[ze],We={class:"mb-3 row"},Ge={class:"col"},Je=e("label",{for:"origin_price",class:"form-label"},[b("原價"),e("span",{class:"text-danger ms-1"},"*")],-1),Ke={class:"position-relative mb-1"},Qe={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},Xe=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),Ye=[Xe],Ze={class:"col"},et=e("label",{for:"price",class:"form-label"},[b("售價"),e("span",{class:"text-danger ms-1"},"*")],-1),tt={class:"position-relative mb-1"},st={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},ot=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),lt=[ot],it={class:"mb-3"},nt=e("label",{for:"description",class:"form-label"},[b("產品描述"),e("span",{class:"text-danger ms-1"},"*")],-1),at={class:"position-relative mb-1"},dt={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},rt=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),ct=[rt],ut={class:"mb-3"},mt=e("label",{for:"content",class:"form-label"},[b("說明內容"),e("span",{class:"text-danger ms-1"},"*")],-1),pt={class:"position-relative mb-1"},_t={key:0,class:"position-absolute top-50 end-0 translate-middle-y px-3 pb-1"},ht=e("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),bt=[ht],gt={class:"form-check"},vt=e("label",{class:"form-check-label",for:"is_enable"},"是否啟用",-1),ft={class:"modal-footer"},Pt=["onClick"],yt=e("button",{type:"submit",class:"btn btn-primary"},"確認",-1);function kt(o,s,c,h,t,l){const r=f("VField"),m=f("ErrorMessage"),v=f("VForm");return a(),d("div",J,[e("div",K,[u(v,{onSubmit:l.onSubmit,class:"modal-content border-0"},{default:C(({errors:n,handleReset:P})=>[e("div",Q,[e("h5",X,[c.isNew?(a(),d("span",Y,"新增產品")):(a(),d("span",Z,"編輯產品"))]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close",onClick:()=>{P(),t.previewImg={}}},null,8,ee)]),e("div",te,[e("div",se,[e("div",oe,[e("div",le,[e("div",ie,[ne,ae,e("div",de,[u(r,{type:"text",name:"imageUrl",id:"imageUrl",class:_(["form-control",{"border-danger":n.imageUrl}]),placeholder:"請輸入圖片連結",rules:"required",modelValue:t.tempProduct.imageUrl,"onUpdate:modelValue":s[0]||(s[0]=i=>t.tempProduct.imageUrl=i)},null,8,["modelValue","class"]),n.imageUrl?(a(),d("div",re,ue)):p("",!0)]),u(m,{name:"imageUrl",class:"d-block mb-0 text-danger"}),e("form",null,[me,t.previewImg.url?p("",!0):(a(),d("label",pe,[b("選擇圖片 "),e("input",{type:"file",id:"uploadImageUrl",class:"opacity-0 position-absolute start-0",onChange:s[1]||(s[1]=i=>l.previewUpload(i))},null,32)])),t.previewImg.url?(a(),d("div",_e,[e("img",{src:t.previewImg.url,alt:t.previewImg.alt,class:"d-block mb-1 w-100"},null,8,he),be,e("span",{class:"position-absolute top-0 start-100 translate-middle rounded-circle badge text-bg-danger pointer",onClick:s[2]||(s[2]=i=>l.clearImg("preview"))},"x")])):p("",!0),t.previewImg.url?(a(),d("div",{key:2,class:_({spinner:t.isLoading})},[e("button",{type:"button",class:"btn btn-secondary w-100",onClick:s[3]||(s[3]=(...i)=>l.uploadImg&&l.uploadImg(...i)),disabled:t.isDisabled},"確定上傳",8,ge)],2)):p("",!0)]),t.tempProduct.imageUrl&&!t.previewImg.url?(a(),d("div",ve,[e("img",{src:t.tempProduct.imageUrl,alt:"主要圖片",class:"d-block w-100 my-3"},null,8,fe),Pe,e("span",{class:"position-absolute top-0 start-100 translate-middle rounded-circle badge text-bg-danger pointer",onClick:s[4]||(s[4]=i=>l.clearImg("link"))},"x")])):p("",!0)]),e("div",null,[ye,(a(!0),d(V,null,I(t.tempProduct.imagesUrl,(i,k)=>(a(),d("div",{key:i},[w(e("input",{type:"text",name:"imagesUrl",class:"form-control mb-2",placeholder:"請輸入圖片連結","onUpdate:modelValue":U=>t.tempProduct.imagesUrl[k]=U},null,8,ke),[[D,t.tempProduct.imagesUrl[k]]]),w(e("img",{class:"mb-2 w-100",src:i,alt:"圖片"},null,8,xe),[[$,i]]),e("button",{type:"button",class:"btn btn-outline-danger w-100",onClick:U=>t.tempProduct.imagesUrl.splice(k,1)},"刪除圖片",8,we),Ve]))),128)),e("button",{type:"button",class:"btn btn-outline-primary w-100",onClick:s[5]||(s[5]=i=>t.tempProduct.imagesUrl.push(""))},"新增更多圖片")])]),e("div",Ie,[e("div",Ue,[Me,e("div",Ee,[u(r,{type:"text",name:"title",id:"title",class:_(["form-control",{"border-danger":n.title}]),placeholder:"請輸入標題",rules:"required",modelValue:t.tempProduct.title,"onUpdate:modelValue":s[6]||(s[6]=i=>t.tempProduct.title=i)},null,8,["modelValue","class"]),n.title?(a(),d("div",Te,Ce)):p("",!0)]),u(m,{name:"title",class:"d-block mb-0 text-danger"})]),e("div",De,[e("div",Se,[$e,e("div",Ne,[u(r,{type:"text",name:"category",id:"category",class:_(["form-control",{"border-danger":n.category}]),placeholder:"請輸入分類",rules:"required",modelValue:t.tempProduct.category,"onUpdate:modelValue":s[7]||(s[7]=i=>t.tempProduct.category=i)},null,8,["modelValue","class"]),n.category?(a(),d("div",Le,Fe)):p("",!0)]),u(m,{name:"category",class:"d-block mb-0 text-danger"})]),e("div",Oe,[qe,e("div",Be,[u(r,{type:"text",name:"unit",id:"unit",class:_(["form-control",{"border-danger":n.unit}]),placeholder:"請輸入單位",rules:"required",modelValue:t.tempProduct.unit,"onUpdate:modelValue":s[8]||(s[8]=i=>t.tempProduct.unit=i)},null,8,["modelValue","class"]),n.unit?(a(),d("div",He,je)):p("",!0)]),u(m,{name:"unit",class:"d-block mb-0 text-danger"})])]),e("div",We,[e("div",Ge,[Je,e("div",Ke,[u(r,{type:"text",name:"origin_price",id:"origin_price",class:_(["form-control",{"border-danger":n.origin_price}]),placeholder:"請輸入原價",rules:"required|min_value:0",modelValue:t.tempProduct.origin_price,"onUpdate:modelValue":s[9]||(s[9]=i=>t.tempProduct.origin_price=i),modelModifiers:{number:!0}},null,8,["modelValue","class"]),n.origin_price?(a(),d("div",Qe,Ye)):p("",!0)]),u(m,{name:"origin_price",class:"d-block mb-0 text-danger"})]),e("div",Ze,[et,e("div",tt,[u(r,{type:"text",name:"price",id:"price",class:_(["form-control",{"border-danger":n.price}]),placeholder:"請輸入售價",rules:"required|min_value:0",modelValue:t.tempProduct.price,"onUpdate:modelValue":s[10]||(s[10]=i=>t.tempProduct.price=i),modelModifiers:{number:!0}},null,8,["modelValue","class"]),n.price?(a(),d("div",st,lt)):p("",!0)]),u(m,{name:"price",class:"d-block mb-0 text-danger"})])]),e("div",it,[nt,e("div",at,[u(r,{as:"textarea",name:"description",id:"description",rows:"3",class:_(["form-control",{"border-danger":n.description}]),placeholder:"請輸入產品描述",rules:"required",modelValue:t.tempProduct.description,"onUpdate:modelValue":s[11]||(s[11]=i=>t.tempProduct.description=i)},null,8,["modelValue","class"]),n.description?(a(),d("div",dt,ct)):p("",!0)]),u(m,{name:"description",class:"d-block mb-0 text-danger"})]),e("div",ut,[mt,e("div",pt,[u(r,{as:"textarea",name:"content",id:"content",rows:"3",class:_(["form-control",{"border-danger":n.content}]),placeholder:"請輸入說明內容",rules:"required",modelValue:t.tempProduct.content,"onUpdate:modelValue":s[12]||(s[12]=i=>t.tempProduct.content=i)},null,8,["modelValue","class"]),n.content?(a(),d("div",_t,bt)):p("",!0)]),u(m,{name:"content",class:"d-block mb-0 text-danger"})]),e("div",gt,[w(e("input",{type:"checkbox",name:"is_enabled",id:"is_enable",class:"form-check-input","onUpdate:modelValue":s[13]||(s[13]=i=>t.tempProduct.is_enabled=i)},null,512),[[S,t.tempProduct.is_enabled]]),vt])])])])]),e("div",ft,[e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:()=>{P(),t.previewImg={}}},"取消",8,Pt),yt])]),_:1},8,["onSubmit"])])],512)}const xt=y(G,[["render",kt]]),wt={mixins:[M],emits:["delProduct"],props:["temp"],data(){return{modal:{}}}},Vt={ref:"modal",class:"modal fade","data-bs-keyboard":"false",tabindex:"-1"},It={class:"modal-dialog"},Ut={class:"modal-content border-0"},Mt=e("div",{class:"modal-header bg-danger"},[e("h5",{class:"modal-title text-light",id:"productModalLabel"},[e("span",null,"刪除產品")]),e("button",{type:"button",class:"btn-close btn-close-white","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Et={class:"modal-body"},Tt={class:"text-danger"},At={class:"modal-footer"},Ct=e("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消",-1);function Dt(o,s,c,h,t,l){return a(),d("div",Vt,[e("div",It,[e("div",Ut,[Mt,e("div",Et,[e("p",null,[b("是否刪除 "),e("span",Tt,g(c.temp.title),1),b(" 商品（刪除後將無法恢復）")])]),e("div",At,[Ct,e("button",{type:"button",class:"btn btn-danger",onClick:s[0]||(s[0]=r=>o.$emit("delProduct",c.temp.id))},"確認刪除")])])])],512)}const St=y(wt,[["render",Dt]]),$t={components:{Pagination:W,ProductModal:xt,DelModal:St},data(){return{products:[],tempProduct:{},pagination:{},isNew:""}},methods:{getProducts(o=1){const s=this.$loading.show(),{VITE_API:c,VITE_API_PATH:h}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/task_vue_weekly/week7/dist",MODE:"production",DEV:!1,PROD:!0,SSR:!1},t=`${c}/api/${h}/admin/products?page=${o}`;this.$http.get(t).then(l=>{this.products=l.data.products,this.pagination=l.data.pagination}).catch(l=>{alert(`取得產品失敗，錯誤代碼：${l.response.status}`)}).finally(()=>s.hide())},openModal(o,s){if(this.tempProduct={...s},o==="del"){this.$refs.delModal.openModal();return}else o==="new"?(this.isNew=!0,this.tempProduct={imagesUrl:[]}):o==="edit"&&(this.isNew=!1);this.$refs.productModal.openModal()},updateProd(o,s){const c=this.$loading.show(),{VITE_API:h,VITE_API_PATH:t}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/task_vue_weekly/week7/dist",MODE:"production",DEV:!1,PROD:!0,SSR:!1};let l=`${h}/api/${t}/admin/product`,r="post",m="新增";this.isNew===!1&&(l+=`/${s}`,r="put",m="編輯"),this.$http[r](l,{data:{...o}}).then(v=>{setTimeout(()=>alert(`${v.data.message}`),1e3),this.$refs.productModal.hideModal(),this.getProducts()}).catch(v=>{alert(`${m}產品失敗，錯誤代碼：${v.response.status}`)}).finally(()=>c.hide())},delProduct(o){const s=this.$loading.show(),{VITE_API:c,VITE_API_PATH:h}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/task_vue_weekly/week7/dist",MODE:"production",DEV:!1,PROD:!0,SSR:!1},t=`${c}/api/${h}/admin/product/${o}`;this.$http.delete(t).then(l=>{setTimeout(()=>alert(`${l.data.message}`),1e3),this.$refs.delModal.hideModal(),this.getProducts()}).catch(l=>{alert(`刪除產品失敗，錯誤代碼：${l.response.status}`)}).finally(()=>s.hide())}},mounted(){this.getProducts()}},Nt={class:"container py-5"},Lt=e("h2",{class:"mb-3'"},"產品列表",-1),Rt={class:"position-relative py-3"},Ft={class:"table align-middle"},Ot=e("thead",null,[e("tr",null,[e("th",null,"分類"),e("th",null,"產品名稱"),e("th",null,"原價"),e("th",null,"售價"),e("th",null,"是否啟用"),e("th",null,"編輯")])],-1),qt=["onClick"],Bt=["onClick"];function Ht(o,s,c,h,t,l){const r=f("Pagination"),m=f("ProductModal"),v=f("DelModal");return a(),d("div",Nt,[Lt,e("div",Rt,[e("button",{type:"button",onClick:s[0]||(s[0]=n=>l.openModal("new")),class:"position-absolute bottom-100 end-0 btn btn-primary"},"建立新的產品"),e("table",Ft,[Ot,e("tbody",null,[(a(!0),d(V,null,I(t.products,n=>(a(),d("tr",{key:n.id},[e("td",null,g(n.category),1),e("td",null,g(n.title),1),e("td",null,g(n.origin_price),1),e("td",null,g(n.price),1),e("td",{class:_([n.is_enabled?"text-success":"text-danger"])},g(n.is_enabled?"啟用":"未啟用"),3),e("td",null,[e("button",{type:"button",class:"mb-1 mb-md-0 btn btn-outline-primary me-2",onClick:P=>l.openModal("edit",n)},"編輯",8,qt),e("button",{type:"button",class:"btn btn-outline-danger",onClick:P=>l.openModal("del",n)},"刪除",8,Bt)])]))),128))])])]),e("p",null,"此頁共有 "+g(t.products.length)+" 項產品",1),t.pagination.total_pages?(a(),N(r,L({key:0},t.pagination,{onSwitchPage:l.getProducts}),null,16,["onSwitchPage"])):p("",!0),u(m,{ref:"productModal",temp:{...t.tempProduct},isNew:t.isNew,onUpdateProd:l.updateProd},null,8,["temp","isNew","onUpdateProd"]),u(v,{ref:"delModal",temp:{...t.tempProduct},onDelProduct:l.delProduct},null,8,["temp","onDelProduct"])])}const jt=y($t,[["render",Ht]]);export{jt as default};