import{_ as b,c as g,l as w,r,o as c,a as i,b as s,d as e,w as x,n as p,e as h}from"./index-6d179905.js";g({generateMessage:w("zh_TW",{names:{username:"帳號",password:"密碼"}})});const v={methods:{onSubmit(l){const d=this.$loading.show(),{VITE_API:_}={VITE_API:"https://vue3-course-api.hexschool.io/v2",VITE_API_PATH:"practice_chien",BASE_URL:"/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},m=`${_}/admin/signin`;this.$http.post(m,l).then(t=>{const{token:n,expired:o}=t.data;document.cookie=`chienToken = ${n}; expires = ${new Date(o)};`,this.$router.push("/admin/products")}).catch(t=>{alert(`登入失敗，錯誤代碼：${t.response.status}`)}).finally(()=>d.hide())}}},y={class:"d-flex vh-100 justify-content-center align-items-center"},E={class:"container text-center"},V={class:"row justify-content-center"},$=s("h1",{class:"h3 mb-4"},"請先登入",-1),k={class:"col-md-7 col-lg-5"},P={class:"mb-3"},S={class:"form-floating"},I=s("label",{for:"userEmail",class:"form-label"},"帳號 Email",-1),T={key:0,class:"position-absolute top-50 start-100 translate-middle-y p-3"},A=s("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),B=[A],C={class:"mb-4"},D={class:"form-floating"},F=s("label",{for:"userPassword",class:"form-label"},"密碼 Password",-1),M={key:0,class:"position-absolute top-50 start-100 translate-middle-y p-3"},z=s("span",{class:"material-icons-outlined text-danger align-middle"},"error_outline",-1),L=[z],N=s("button",{type:"submit",class:"btn btn-primary w-100 fs-5"},"登入",-1),R=s("p",{class:"text-secondary mt-5"},"© 2023 LHchien.",-1);function j(l,d,_,m,t,n){const o=r("VField"),u=r("ErrorMessage"),f=r("VForm");return c(),i("div",y,[s("div",E,[s("div",V,[$,s("div",k,[e(f,{onSubmit:n.onSubmit},{default:x(({errors:a})=>[s("div",P,[s("div",S,[e(o,{name:"username",type:"email",id:"userEmail",placeholder:"Email address",rules:"required|email",class:p({"border-danger":a.username,"form-control":!0})},null,8,["class"]),I,a.username?(c(),i("div",T,B)):h("",!0)]),e(u,{name:"username",class:"d-block text-danger py-1 text-start"})]),s("div",C,[s("div",D,[e(o,{name:"password",type:"password",id:"userPassword",placeholder:"Password",rules:"required",class:p({"border-danger":a.password,"form-control":!0})},null,8,["class"]),F,a.password?(c(),i("div",M,L)):h("",!0)]),e(u,{name:"password",class:"d-block text-danger py-1 text-start"})]),N]),_:1},8,["onSubmit"])])]),R])])}const H=b(v,[["render",j]]);export{H as default};
