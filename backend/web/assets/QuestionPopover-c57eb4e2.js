import{c as p,A as C,r as O,P as u,o as n,K as c,x as i,e as l,F as f,y as b,R as y,H as m,I as x,u as k}from"./index-c3789085.js";var P={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z"}},{tag:"path",attrs:{d:"M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z"}}]},name:"question-circle",theme:"outlined"};const Q=P;function g(r){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?Object(arguments[e]):{},o=Object.keys(t);typeof Object.getOwnPropertySymbols=="function"&&(o=o.concat(Object.getOwnPropertySymbols(t).filter(function(s){return Object.getOwnPropertyDescriptor(t,s).enumerable}))),o.forEach(function(s){N(r,s,t[s])})}return r}function N(r,e,t){return e in r?Object.defineProperty(r,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):r[e]=t,r}var _=function(e,t){var o=g({},e,t.attrs);return p(C,g({},o,{icon:Q}),null)};_.displayName="QuestionCircleOutlined";_.inheritAttrs=!1;const S=_;const j={key:2},w=["src"],V={__name:"QuestionPopover",props:{contents:{type:Array,required:!0},fixedWidth:{type:Boolean,default:!0}},setup(r){const e=r,t=O(["question-popover"]);return e.fixedWidth&&t.value.push("question-popover-fixed-width"),(o,s)=>{const d=u("a-typography-paragraph"),v=u("a-typography-link"),h=u("a-popover");return n(),c(h,{overlayClassName:t.value.join(" ")},{content:i(()=>[(n(!0),l(f,null,b(e.contents,a=>(n(),l(f,{key:a},[typeof a=="string"?(n(),c(d,{key:0},{default:i(()=>[y(m(a),1)]),_:2},1024)):a.type=="link"?(n(),c(d,{key:1},{default:i(()=>[p(v,{href:a.url,target:"_blank"},{default:i(()=>[y(m(a.text),1)]),_:2},1032,["href"])]),_:2},1024)):(n(),l("div",j,[a.type=="image"?(n(),l("img",{key:0,src:a.url},null,8,w)):x("",!0)]))],64))),128))]),default:i(()=>[p(k(S),{style:{margin:"0 2px"}})]),_:1},8,["overlayClassName"])}}};export{V as _};