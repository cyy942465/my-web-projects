import{a as k,o as T,d as p,r as m,e as B}from"./util.f34bf210.js";import C from"./LinkIcon.220cfc82.js";import{_ as w}from"./plugin-vue_export-helper.5a098b48.js";import{a as x,c as d,r as s,A as j,o as H,b as I,B as N,z as S,C as $,u as l,j as z,f as E}from"./vendor.705df165.js";const q=x({props:{target:String,right:{type:Number,default:15},bottom:{type:Number,default:28},visibilityHeight:{type:Number,default:200}},emits:["on-top"],setup(f,{emit:v}){const o=f,b=d(()=>`${o.right}px`),_=d(()=>`${o.bottom}px`),e=s(null),t=s(null),n=s(!1),r=()=>{n.value=e.value.scrollTop>=o.visibilityHeight},g=a=>{const c=Date.now(),h=e.value.scrollTop,u=()=>{const i=(Date.now()-c)/a;i<1?(e.value.scrollTop=h*(1-B(i)),m(u)):e.value.scrollTop=0};m(u)},y=()=>{g(500),v("on-top")};return j(()=>k(t.value,"scroll",p(r,300))),H(()=>{if(t.value=document,e.value=document.documentElement||document.body,o.target){if(e.value=document.querySelector(o.target),!e.value)throw new Error(`Can not find the target element:${o.target}`);t.value=e.value}T(t.value,"scroll",p(r,300))}),(a,c)=>(z(),I("div",{class:S(["mini-web-back-top",n.value?"show":"hidden"]),style:$({right:l(b),bottom:l(_)}),onClick:y},[N(a.$slots,"default",{},()=>[E(l(C),{type:"backTopProp"})],!0)],6))}});var V=w(q,[["__scopeId","data-v-2381abc1"]]);export{V as default};
