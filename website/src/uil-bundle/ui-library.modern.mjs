import e,{useRef as t,useEffect as n,useState as r}from"react";function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},l.apply(null,arguments)}function a(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}const c=["disabled","label","small","theme"];function o(t){const{disabled:n=!1,label:r,small:o=!1,theme:i}=t,s=a(t,c);function u(e){if(!e||n)return;if(7!==e.length)throw new Error("provided hex color must be 7 characters (including #) long");e=e.substring(1,7);const t=[parseInt(e.substring(0,2),16)/255,parseInt(e.substring(2,4),16)/255,parseInt(e.substring(4,6),16)/255].map(e=>e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4));return.2126*t[0]+.7152*t[1]+.0722*t[2]>.179?"#000000":"#ffffff"}const m=function(){if(!i)return{color:"#000000",backgroundColor:void 0,border:void 0};if(i.includes("#"))return{color:u(i),backgroundColor:n?void 0:i,border:"transparent"};switch(i){case"success":return{color:u("#006A4E"),backgroundColor:n?void 0:"#006A4E",border:"transparent"};case"warning":return{color:"#000000",backgroundColor:n?void 0:"#FFD700",border:"transparent"};case"error":return{color:u("#800020"),backgroundColor:n?void 0:"#800020",border:"transparent"};default:throw new Error("invalid theme provided")}}();return e.createElement("button",l({className:n&&!o?"uil-button uil-disabled":n&&o?"uil-button uil-disabled uil-small":o?"uil-button uil-small":"uil-button",style:m,disabled:n},s),r)}const i=["checkColor","checked","onCheck","label","children"];function s(t){const{checkColor:n,checked:r,onCheck:c,label:o,children:s}=t,u=a(t,i);return e.createElement(e.Fragment,null,e.createElement("div",{className:"uil-check-wrapper"},e.createElement("label",{className:"uil-checkbox"},e.createElement("input",l({type:"checkbox",checked:r,onChange:()=>{c(!r)}},u)),e.createElement("div",{className:"uil-checkmark",style:{backgroundColor:n}})),s||e.createElement("span",null,o)))}function u(t){const{src:n,color:r,height:l,width:a}=t;if(!n.includes(".svg"))throw new Error("Provided src is not an svg image");return e.createElement("svg",{"aria-hidden":!0,className:"uil-svg",style:{fill:r,height:`${l}px`,width:`${a}px`}},e.createElement("use",{href:n}))}const m=["iconColor","iconSrc","inputColor","label","toggle","valueChanged"];function d(t){const{iconColor:n,iconSrc:r,inputColor:c,label:o,toggle:i,valueChanged:s}=t,d=a(t,m);return e.createElement("label",{className:"uil-input-wrapper",htmlFor:d.id},e.createElement("input",l({className:"uil-input",onChange:e=>s(e.target.value),placeholder:o,style:{color:c}},d)),r&&e.createElement("div",{className:"uil-icon",onClick:i},e.createElement(u,{src:r,width:24,height:24,color:n})),e.createElement("span",{className:"uil-label",style:{color:c}},o))}function p(e){const r=t(null);return n(()=>{if(r.current)return document.addEventListener("click",t),document.addEventListener("touchend",t),()=>{document.removeEventListener("click",t),document.removeEventListener("touchend",t)};function t(t){r.current&&!r.current.contains(t.target)&&e()}},[e]),r}const h=["tooltipClose","tooltipIcon","tooltipText"];function b(t){const{tooltipClose:n,tooltipIcon:c,tooltipText:o}=t,i=a(t,h),[s,m]=r(!1),b=p(g);function g(){m(!1)}return e.createElement(e.Fragment,null,c?e.createElement("div",{className:"uil-tooltip-wrapper",ref:b},s&&e.createElement("div",{className:"uil-tooltip"},n&&e.createElement("button",{className:"uil-tooltip-button",onClick:g},n),e.createElement("span",null,o)),e.createElement("div",{className:"uil-tooltip-icon",onClick:()=>m(!s)},e.createElement(u,{src:c,height:16,width:16})),e.createElement(d,l({},i))):e.createElement(d,l({},i)))}var g;!function(e){e[e.minLength=0]="minLength",e[e.maxLength=1]="maxLength",e[e.letters=2]="letters",e[e.numbers=3]="numbers",e[e.special=4]="special",e[e.upper=5]="upper"}(g||(g={}));const E=["capsLockWarning","rules","ruleChecked","ruleUnchecked","setFailedRules"];function f(t){const{capsLockWarning:c,rules:o,ruleChecked:i,ruleUnchecked:s,setFailedRules:m}=t,d=a(t,E),[p,h]=r(!1);function f(e){let n;switch(e.type){case g.minLength:n=`[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${e.count},}`;break;case g.maxLength:n=`^[a-zA-Z0-9ßÄäÖöÜü._!"\`'#%&,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{0,${e.count}}$`;break;case g.letters:n=`[a-zA-ZßÄäÖöÜü]{${e.count},}`;break;case g.numbers:n=`[0-9]{${e.count},}`;break;case g.special:n=`[._!"\`'#%&§,:;<>=@{}~\\$\\(\\)\\*\\+\\/\\\\\\?\\[\\]\\^\\|\\-]{${e.count},}`;break;case g.upper:n=`[A-ZÄÖÜ]{${e.count},}`;break;default:n=e.pattern?e.pattern:""}if(""===n)throw new Error(`pattern must not be an empty string. Checked rule: ${e}`);return new RegExp(n).test(t.value)}return n(()=>{!function(){const e=[];o.forEach(t=>{f(t)||e.push(t)}),m(e)}()},[t.value]),n(()=>{function e(e){h(e.getModifierState&&e.getModifierState("CapsLock"))}return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[]),e.createElement(e.Fragment,null,e.createElement("div",null,e.createElement(b,l({},d)),e.createElement("div",{className:"uil-password-rules"},p&&e.createElement("div",{className:"uil-password-rule"},c),o.map((t,n)=>e.createElement("div",{key:n,className:"uil-password-rule"},e.createElement(u,{src:f(t)?i:s,height:12,width:12}),e.createElement("span",null,t.label))))))}var v;function k(t){const{callback:r,cancelLabel:l="",close:a,closeLabel:c,confirm:i,confirmLabel:s="",message:u,timeout:m,title:d,type:p}=t;return n(()=>{if(!m)return;const e=setTimeout(()=>r?r():a(),m);return()=>clearTimeout(e)},[]),e.createElement("div",{className:"uil-modal-wrapper"},e.createElement("div",{className:"uil-modal"},e.createElement("div",{className:function(){switch(p){case v.error:return"uil-header uil-error";case v.success:return"uil-header uil-success";case v.warning:return"uil-header uil-warning";default:return"uil-header"}}()},d),m&&e.createElement("div",{className:"uil-progress-wrapper"},e.createElement("div",{className:"uil-progress-bar",style:{animationDuration:m/1e3+.5+"s"}})),e.createElement("div",{className:"uil-content"},e.createElement("div",null,Array.isArray(u)?u.map((t,n)=>e.createElement("p",{key:n,className:"uil-modal-text"},t)):e.createElement("p",{className:"uil-modal-text"},u)),e.createElement("div",{className:"uil-button-wrapper "+(p!==v.question?"uil-single":"")},p!==v.question&&e.createElement(o,{label:null!=c?c:"",onClick:function(){m&&r?r():a()},type:"button"}),p==v.question&&t.confirm&&e.createElement(e.Fragment,null,e.createElement(o,{label:s,theme:"#00416A",onClick:i,type:"button"}),e.createElement(o,{label:l,onClick:a,type:"button"}))))))}!function(e){e.error="error",e.question="question",e.success="success",e.warning="warning"}(v||(v={}));const w=["callback","modalType"];function C(t){const{callback:n,modalType:r}=t,c=a(t,w);return e.createElement(k,l({type:r},c,{callback:n}))}const y=["cancel"];function N(t){const{cancel:n}=t,r=a(t,y);return e.createElement(k,l({type:v.question,close:n},r))}export{o as CustomButton,s as CustomCheckBox,b as CustomInput,C as NotifyModal,f as PasswordInput,g as PasswordRuleTypes,N as QuestionModal,u as SVG,p as useClickOutsideRef};
//# sourceMappingURL=ui-library.modern.mjs.map
