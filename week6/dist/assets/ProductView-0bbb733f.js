import{_ as p,o as r,c as n,a as e,i as a,t,j as u,v as _,F as h,f as m,d as f}from"./index-f5d8b808.js";const v={data(){return{product:{},selectNum:"",isDisabled:!1}},mounted(){const l=this.$loading.show({container:this.$refs.productLoading}),{id:i}=this.$route.params,d=`https://vue3-course-api.hexschool.io/v2/api/practice_chien/product/${i}`;this.$http.get(d).then(o=>{this.product=o.data.product}).catch(o=>{alert(`${o.response.data.message}，錯誤代碼：${o.response.status}`)}).finally(()=>l.hide())}},b={ref:"productLoading",class:"vl-parent container py-5"},g={class:"row justify-content-center"},y={class:"col-md-4"},x=["src"],N={class:"col-md-5"},k={class:"badge bg-primary rounded-pill mb-3"},D={class:"h6"},V={class:"h5"},w={class:"input-group"},j=e("option",{value:"",selected:"",disabled:""},"請選擇數量",-1),B=["value"],L=["disabled"],U={key:0,class:"fas fa-spinner fa-pulse"};function F(l,i,d,o,s,S){return r(),n("div",b,[e("main",g,[e("div",y,[s.product.imageUrl?(r(),n("img",{key:0,src:s.product.imageUrl,class:"object-fit-cover mb-3",alt:"",style:{"max-height":"400px"}},null,8,x)):a("",!0)]),e("div",N,[e("h2",null,t(s.product.title),1),e("span",k,t(s.product.category),1),e("p",null,"商品描述："+t(s.product.description),1),e("p",null,"商品內容："+t(s.product.content),1),e("del",D,"原價 "+t(s.product.origin_price)+" 元",1),e("div",V,"現在只要 "+t(s.product.price)+" 元",1),e("div",null,[e("div",w,[u(e("select",{class:"form-select","onUpdate:modelValue":i[0]||(i[0]=c=>s.selectNum=c)},[j,(r(),n(h,null,m(10,c=>e("option",{value:c,key:c},t(c),9,B)),64))],512),[[_,s.selectNum,void 0,{number:!0}]]),e("button",{type:"button",class:"btn btn-primary",disabled:s.isDisabled},[f(" 加入購物車 "),s.isDisabled?(r(),n("i",U)):a("",!0)],8,L)])])])])],512)}const E=p(v,[["render",F]]);export{E as default};
