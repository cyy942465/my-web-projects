import{a as k,r as f,w as x,p as C,m as O,n as S,f as d}from"./vendor.9d984cb0.js";import{i as D,o as w}from"./util.403336f9.js";import{c as j}from"./classnames.cb3d719b.js";import{_ as T}from"./plugin-vue_export-helper.5a098b48.js";const v=new Map;let _;D||(w(document,"mousedown",e=>_=e),w(document,"mouseup",e=>{for(const{DocumentHandler:t}of v.values())t(e,_)}));const V=(e,t)=>{let o=[];return t.arg&&(Array.isArray(t.arg)?o=t.arg:o.push(t.arg)),(p,a)=>{const i=t.instance.popperRef,s=p.target,n=a.target,m=!t||!t.instance,l=!s||!n,r=e.contains(s)||e.contains(n),c=e===s,b=i&&(i.contains(s)||i.contains(n)),y=o.length&&(o.some(u=>u.contains&&(u==null?void 0:u.contains(s)))||o.indexOf(n)>-1);m||l||r||c||y||b||t.value()}},h=(e,t)=>{v.set(e,{DocumentHandler:V(e,t),bindingFn:t.value})},H={beforeMount(e,t){h(e,t)},updated(e,t){h(e,t)},unmounted(e){v.delete(e)}};var g={directive:"clickOutside",directiveOption:H},E=k({props:{placeholder:String,modelValue:String},directives:{[g.directive]:g.directiveOption},emits:["update:modelValue","on-change"],setup(e,{emit:t,slots:o}){const p="The select component should has 'mini-web-option' component as childs!";let a=[];if(o.default&&(a=o.default(),a.filter(c=>!c||c.type.toString()==="Symbol(Comment)").some(c=>c.type!=="mini-web-option")))return console.warn(p);const{placeholder:i}=e,s=f(!1),n=f(e.modelValue),m=()=>{s.value=!1},l={"mini-web-select-icon":!0,"mini-web-select-icon-down":!s.value,"mini-web-select-icon-up":s.value},r=()=>{s.value=!s.value};return x(()=>s.value,c=>{l["mini-web-select-icon-down"]=!s.value,l["mini-web-select-icon-up"]=s.value}),C("select-context",{emit:t,isDown:s,selectValue:n}),()=>O(d("div",{class:"mini-web-select"},[d("div",{class:"mini-web-select-title",placeholder:i,onClick:r},[n.value]),d("i",{class:j(l),onClick:r},null),d("div",{class:"mini-web-select-popper",style:{display:s.value?"block":"none"}},[a])]),[[S("click-outside"),m]])}});var N=T(E,[["__scopeId","data-v-0faef83a"]]);export{N as default};
