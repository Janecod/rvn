(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[746],{71935:function(e,t,n){let s=n(51776),l=s.forwardRef(function({title:e,titleId:t,...n},l){return s.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",strokeWidth:1.5,stroke:"currentColor","aria-hidden":"true",ref:l,"aria-labelledby":t},n),e?s.createElement("title",{id:t},e):null,s.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M19.5 8.25l-7.5 7.5-7.5-7.5"}))});e.exports=l},92928:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var s=n(51776),l=n(28757),a=/<(\w+)>(.*?)<\/\1>|<(\w+)\/>/,r=/(?:\r\n|\r|\n)/g;function i(e){var t=e.i18nKey,n=e.values,i=e.components,o=e.fallback,u=e.defaultTrans,c=e.ns,d=(0,l.Z)(c),f=d.t,h=d.lang;return(0,s.useMemo)(function(){var e=f(t,n,{fallback:o,default:u});return i&&0!==i.length?function e(t,n){void 0===n&&(n=[]);var l=t.replace(r,"").split(a);if(1===l.length)return t;var i=[],o=l.shift();return o&&i.push(o),(function e(t){if(!t.length)return[];var n=t.slice(0,4),s=n[0],l=n[1],a=n[2];return[[s||a,l||"",n[3]]].concat(e(t.slice(4,t.length)))})(l).forEach(function(t,l){var a=t[0],r=t[1],o=t[2],u=n[a]||s.createElement(s.Fragment,null);i.push((0,s.cloneElement)(u,{key:l},r?e(r,n):u.props.children)),o&&i.push(o)}),i}(e,i):e},[t,n,i,h])}},50008:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/faq",function(){return n(45728)}])},64844:function(e,t,n){"use strict";var s=n(36734),l=n(73524);let a=e=>{let{className:t}=e;return(0,s.jsx)("div",{className:(0,l.m)("border w-full border-zinc-200 dark:border-zinc-800",t)})};t.Z=a},13639:function(e,t,n){"use strict";var s=n(36734),l=n(51788);let a=e=>{let{children:t}=e;return(0,s.jsx)(l.Z,{children:(0,s.jsx)("div",{className:"max-w-3xl mx-auto",children:t})})};t.Z=a},51788:function(e,t,n){"use strict";var s=n(36734),l=n(55233),a=n(78167);let r=e=>{let{children:t}=e;return(0,s.jsxs)("div",{className:"flex flex-col mx-auto min-h-screen gap-4",children:[(0,s.jsx)(a.Z,{}),(0,s.jsx)("main",{className:"max-w-7xl w-full mx-auto px-4 md:px-8",children:t}),(0,s.jsx)("div",{className:"flex flex-col justify-end grow",children:(0,s.jsx)(l.Z,{})})]})};t.Z=r},14246:function(e,t,n){"use strict";n.d(t,{x:function(){return s}});let s={openGraph:{url:"https://revoke.cash/",images:[{url:"https://revoke.cash/assets/images/revoke-card.png",width:1600,height:900}],site_name:"Revoke.cash",type:"website"},twitter:{handle:"@RoscoKalis",site:"@RevokeCash",cardType:"summary_large_image"},additionalLinkTags:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"apple-touch-icon",href:"/assets/images/apple-touch-icon.png"},{rel:"manifest",href:"/manifest.json"}]}},45728:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return V},default:function(){return A}});var s,l,a,r=n(36734),i=n(64844),o=n(85778),u=n(51776),c=n(1943),d=n(80194),f=n(17729),h=n(86137),m=n(3562),p=n(61526),x=n(69761),q=n(78652),w=n(80509),j=n(15463);let v=null!=(a=u.startTransition)?a:function(e){e()};var g=((s=g||{})[s.Open=0]="Open",s[s.Closed=1]="Closed",s),y=((l=y||{})[l.ToggleDisclosure=0]="ToggleDisclosure",l[l.CloseDisclosure=1]="CloseDisclosure",l[l.SetButtonId=2]="SetButtonId",l[l.SetPanelId=3]="SetPanelId",l[l.LinkPanel=4]="LinkPanel",l[l.UnlinkPanel=5]="UnlinkPanel",l);let _={0:e=>({...e,disclosureState:(0,c.E)(e.disclosureState,{0:1,1:0})}),1:e=>1===e.disclosureState?e:{...e,disclosureState:1},4:e=>!0===e.linkedPanel?e:{...e,linkedPanel:!0},5:e=>!1===e.linkedPanel?e:{...e,linkedPanel:!1},2:(e,t)=>e.buttonId===t.buttonId?e:{...e,buttonId:t.buttonId},3:(e,t)=>e.panelId===t.panelId?e:{...e,panelId:t.panelId}},k=(0,u.createContext)(null);function N(e){let t=(0,u.useContext)(k);if(null===t){let t=Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,N),t}return t}k.displayName="DisclosureContext";let Z=(0,u.createContext)(null);Z.displayName="DisclosureAPIContext";let b=(0,u.createContext)(null);function P(e,t){return(0,c.E)(t.type,_,e,t)}b.displayName="DisclosurePanelContext";let E=u.Fragment,S=d.AN.RenderStrategy|d.AN.Static,I=Object.assign((0,d.yV)(function(e,t){let{defaultOpen:n=!1,...s}=e,l=(0,u.useRef)(null),a=(0,f.T)(t,(0,f.h)(e=>{l.current=e},void 0===e.as||e.as===u.Fragment)),r=(0,u.useRef)(null),i=(0,u.useRef)(null),o=(0,u.useReducer)(P,{disclosureState:n?0:1,linkedPanel:!1,buttonRef:i,panelRef:r,buttonId:null,panelId:null}),[{disclosureState:h,buttonId:m},p]=o,q=(0,j.z)(e=>{p({type:1});let t=(0,w.r)(l);if(!t||!m)return;let n=e?e instanceof HTMLElement?e:e.current instanceof HTMLElement?e.current:t.getElementById(m):t.getElementById(m);null==n||n.focus()}),v=(0,u.useMemo)(()=>({close:q}),[q]),g=(0,u.useMemo)(()=>({open:0===h,close:q}),[h,q]);return u.createElement(k.Provider,{value:o},u.createElement(Z.Provider,{value:v},u.createElement(x.up,{value:(0,c.E)(h,{0:x.ZM.Open,1:x.ZM.Closed})},(0,d.sY)({ourProps:{ref:a},theirProps:s,slot:g,defaultTag:E,name:"Disclosure"}))))}),{Button:(0,d.yV)(function(e,t){let n=(0,h.M)(),{id:s=`headlessui-disclosure-button-${n}`,...l}=e,[a,r]=N("Disclosure.Button"),i=(0,u.useContext)(b),o=null!==i&&i===a.panelId,c=(0,u.useRef)(null),x=(0,f.T)(c,t,o?null:a.buttonRef);(0,u.useEffect)(()=>{if(!o)return r({type:2,buttonId:s}),()=>{r({type:2,buttonId:null})}},[s,r,o]);let w=(0,j.z)(e=>{var t;if(o){if(1===a.disclosureState)return;switch(e.key){case m.R.Space:case m.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0}),null==(t=a.buttonRef.current)||t.focus()}}else switch(e.key){case m.R.Space:case m.R.Enter:e.preventDefault(),e.stopPropagation(),r({type:0})}}),v=(0,j.z)(e=>{e.key===m.R.Space&&e.preventDefault()}),g=(0,j.z)(t=>{var n;(0,p.P)(t.currentTarget)||e.disabled||(o?(r({type:0}),null==(n=a.buttonRef.current)||n.focus()):r({type:0}))}),y=(0,u.useMemo)(()=>({open:0===a.disclosureState}),[a]),_=(0,q.f)(e,c),k=o?{ref:x,type:_,onKeyDown:w,onClick:g}:{ref:x,id:s,type:_,"aria-expanded":e.disabled?void 0:0===a.disclosureState,"aria-controls":a.linkedPanel?a.panelId:void 0,onKeyDown:w,onKeyUp:v,onClick:g};return(0,d.sY)({ourProps:k,theirProps:l,slot:y,defaultTag:"button",name:"Disclosure.Button"})}),Panel:(0,d.yV)(function(e,t){let n=(0,h.M)(),{id:s=`headlessui-disclosure-panel-${n}`,...l}=e,[a,r]=N("Disclosure.Panel"),{close:i}=function e(t){let n=(0,u.useContext)(Z);if(null===n){let n=Error(`<${t} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,e),n}return n}("Disclosure.Panel"),o=(0,f.T)(t,a.panelRef,e=>{v(()=>r({type:e?4:5}))});(0,u.useEffect)(()=>(r({type:3,panelId:s}),()=>{r({type:3,panelId:null})}),[s,r]);let c=(0,x.oJ)(),m=null!==c?(c&x.ZM.Open)===x.ZM.Open:0===a.disclosureState,p=(0,u.useMemo)(()=>({open:0===a.disclosureState,close:i}),[a,i]);return u.createElement(b.Provider,{value:a.panelId},(0,d.sY)({ourProps:{ref:o,id:s},theirProps:l,slot:p,defaultTag:"div",features:S,visible:m,name:"Disclosure.Panel"}))})});var D=n(71935),R=n(73524);let T=e=>{let{question:t,children:n}=e;return(0,r.jsx)(I,{as:"div",className:"py-4",children:e=>{let{open:s}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("dt",{className:"text-lg",children:(0,r.jsxs)(I.Button,{className:"flex gap-2 w-full items-center justify-between text-left",children:[(0,r.jsx)("h4",{children:t}),(0,r.jsx)(D,{className:(0,R.m)(s?"-rotate-180":"rotate-0","h-6 w-6 transform shrink-0")})]})}),(0,r.jsx)(I.Panel,{as:"dd",className:"mt-2 text-base text-zinc-700 dark:text-zinc-300",children:n})]})}})};var C=n(13639),K=n(79874),M=n(14246),z=n(51228),B=n(92928),O=n(28757),L=n(67832),$=n.n(L);let F=()=>{let{t:e}=(0,O.Z)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(z.PB,{...M.x,title:e("faq:meta.title"),description:e("faq:meta.description")}),(0,r.jsxs)(C.Z,{children:[(0,r.jsx)("h1",{children:e("faq:title")}),(0,r.jsx)(i.Z,{className:"mt-4"}),(0,r.jsxs)("dl",{className:"divide-y divide-zinc-200 dark:divide-zinc-800",children:[(0,r.jsx)(T,{question:e("faq:questions.whole_wallet_at_risk.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.whole_wallet_at_risk.answer",components:[(0,r.jsx)("span",{className:"italic"})]})}),(0,r.jsx)(T,{question:e("faq:questions.enough_to_disconnect.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.enough_to_disconnect.answer",components:[(0,r.jsx)("span",{className:"italic"})]})}),(0,r.jsx)(T,{question:e("faq:questions.recover_assets.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.recover_assets.answer",components:[(0,r.jsx)("span",{className:"italic"})]})}),(0,r.jsx)(T,{question:e("faq:questions.sweeper_bot.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.sweeper_bot.answer"})}),(0,r.jsx)(T,{question:e("faq:questions.stolen_through_allowances.question"),children:(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)(B.Z,{i18nKey:"faq:questions.stolen_through_allowances.answer"}),(0,r.jsx)("div",{className:"flex border border-black",children:(0,r.jsx)($(),{src:"/assets/images/how-did-i-get-scammed-light.png",alt:"How Did I Get Scammed?",width:"1024",height:"977"})})]})}),(0,r.jsx)(T,{question:e("faq:questions.hardware_wallets.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.hardware_wallets.answer",components:[(0,r.jsx)("span",{className:"italic"})]})}),(0,r.jsx)(T,{question:e("faq:questions.multiple_allowances.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.multiple_allowances.answer",components:[(0,r.jsx)("span",{className:"italic"})]})}),(0,r.jsx)(T,{question:e("faq:questions.costs.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.costs.answer",components:[(0,r.jsx)(o.Z,{href:"https://gashawk.io",className:"font-medium",underline:"hover",html:!0,external:!0})]})}),(0,r.jsx)(T,{question:e("faq:questions.wallet_mentions_approve.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.wallet_mentions_approve.answer"})}),(0,r.jsx)(T,{question:e("faq:questions.deposited_tokens.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.deposited_tokens.answer"})}),(0,r.jsx)(T,{question:e("faq:questions.which_allowances.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.which_allowances.answer"})}),(0,r.jsx)(T,{question:e("faq:questions.which_chains.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.which_chains.answer",components:[(0,r.jsx)(o.Z,{href:"/extension",className:"font-medium",underline:"hover",html:!0,router:!0}),(0,r.jsx)(o.Z,{href:K.N$,className:"font-medium",underline:"hover",html:!0,external:!0}),(0,r.jsx)(o.Z,{href:K.Vs,className:"font-medium",underline:"hover",html:!0,external:!0})]})}),(0,r.jsx)(T,{question:e("faq:questions.which_domains.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.which_domains.answer",components:[(0,r.jsx)(o.Z,{href:"https://ens.domains",className:"font-medium",underline:"hover",html:!0,external:!0}),(0,r.jsx)(o.Z,{href:"https://unstoppabledomains.com",className:"font-medium",underline:"hover",html:!0,external:!0}),(0,r.jsx)(o.Z,{href:"https://avvy.domains",className:"font-medium",underline:"hover",html:!0,external:!0})]})}),(0,r.jsx)(T,{question:e("faq:questions.other_question.question"),children:(0,r.jsx)(B.Z,{i18nKey:"faq:questions.other_question.answer",components:[(0,r.jsx)(o.Z,{href:K.N$,className:"font-medium",underline:"hover",html:!0,external:!0}),(0,r.jsx)(o.Z,{href:K.Vs,className:"font-medium",underline:"hover",html:!0,external:!0}),(0,r.jsx)(o.Z,{href:"https://kalis.me/unlimited-erc20-allowances/",className:"italic font-medium",underline:"hover",html:!0,external:!0})]})})]})]})]})};var V=!0,A=F}},function(e){e.O(0,[994,345,228,141,774,888,179],function(){return e(e.s=50008)}),_N_E=e.O()}]);