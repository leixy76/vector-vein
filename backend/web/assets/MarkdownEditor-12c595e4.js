import{Z as k,U as w,_ as f,r as x,P as s,a5 as g,o as V,e as b,c as l,x as n,a7 as u,ae as c,u as d,R as M,H as S,a8 as U}from"./index-9df3f13e.js";const R={__name:"MarkdownEditor",props:k({placeholder:{type:String,default:""}},{modelValue:{}}),emits:["update:modelValue"],setup(r){const i=r,{t:m}=w(),o=f(r,"modelValue"),t=x(!1);return(y,e)=>{const p=s("a-checkbox"),v=s("a-form-item-rest"),_=s("a-textarea"),h=g("highlight");return V(),b("div",null,[l(v,null,{default:n(()=>[l(p,{checked:t.value,"onUpdate:checked":e[0]||(e[0]=a=>t.value=a)},{default:n(()=>[M(S(d(m)("common.preview")),1)]),_:1},8,["checked"])]),_:1}),u(l(_,{value:o.value,"onUpdate:value":e[1]||(e[1]=a=>o.value=a),autoSize:{minRows:3,maxRows:10},placeholder:i.placeholder},null,8,["value","placeholder"]),[[c,!t.value]]),u(l(d(U),{source:o.value,"onUpdate:source":e[2]||(e[2]=a=>o.value=a),class:"custom-scrollbar markdown-body custom-hljs"},null,8,["source"]),[[h],[c,t.value]])])}}};export{R as _};