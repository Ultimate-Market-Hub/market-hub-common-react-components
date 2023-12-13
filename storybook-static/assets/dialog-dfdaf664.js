import{r as i,R as f,a as ee}from"./index-c013ead5.js";import{o as g,s as _e,t as le,D as b,y as T,i as ae,u as H,O as q,M,X as y,d as ge,n as D,N as Ue,T as Ve,p as ve,l as k,I as O,g as he,S as pe,b as qe}from"./use-is-mounted-b8dc6585.js";import{s as Ge,n as B,p as Xe,C as ze,d as V,h as Je,r as Ke}from"./use-owner-3c26545a.js";import{c as G,p as X}from"./hidden-e72868fd.js";import{r as Qe}from"./index-169ee69c.js";function ue(e,t){let n=i.useRef([]),r=g(e);i.useEffect(()=>{let a=[...n.current];for(let[o,l]of t.entries())if(n.current[o]!==l){let u=r(t,a);return n.current=t,u}},[r,...t])}function Ze(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var N=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(N||{});function et(){let e=i.useRef(0);return Ge("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function Ee(e,t,n,r){let a=_e(n);i.useEffect(()=>{e=e??window;function o(l){a.current(l)}return e.addEventListener(t,o,r),()=>e.removeEventListener(t,o,r)},[e,t,r])}function tt(e){function t(){document.readyState!=="loading"&&(e(),document.removeEventListener("DOMContentLoaded",t))}typeof window<"u"&&typeof document<"u"&&(document.addEventListener("DOMContentLoaded",t),t())}function we(e){let t=g(e),n=i.useRef(!1);i.useEffect(()=>(n.current=!1,()=>{n.current=!0,le(()=>{n.current&&t()})}),[t])}function $e(e){if(!e)return new Set;if(typeof e=="function")return new Set(e());let t=new Set;for(let n of e.current)n.current instanceof HTMLElement&&t.add(n.current);return t}let nt="div";var be=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(be||{});function rt(e,t){let n=i.useRef(null),r=T(n,t),{initialFocus:a,containers:o,features:l=30,...u}=e;ae()||(l=1);let s=B(n);at({ownerDocument:s},!!(l&16));let c=ut({ownerDocument:s,container:n,initialFocus:a},!!(l&2));it({ownerDocument:s,container:n,containers:o,previousActiveElement:c},!!(l&8));let d=et(),F=g(p=>{let w=n.current;w&&(S=>S())(()=>{H(d.current,{[N.Forwards]:()=>{q(w,M.First,{skipElements:[p.relatedTarget]})},[N.Backwards]:()=>{q(w,M.Last,{skipElements:[p.relatedTarget]})}})})}),P=Xe(),v=i.useRef(!1),J={ref:r,onKeyDown(p){p.key=="Tab"&&(v.current=!0,P.requestAnimationFrame(()=>{v.current=!1}))},onBlur(p){let w=$e(o);n.current instanceof HTMLElement&&w.add(n.current);let S=p.relatedTarget;S instanceof HTMLElement&&S.dataset.headlessuiFocusGuard!=="true"&&(Te(w,S)||(v.current?q(n.current,H(d.current,{[N.Forwards]:()=>M.Next,[N.Backwards]:()=>M.Previous})|M.WrapAround,{relativeTo:p.target}):p.target instanceof HTMLElement&&D(p.target)))}};return f.createElement(f.Fragment,null,!!(l&4)&&f.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:F,features:X.Focusable}),y({ourProps:J,theirProps:u,defaultTag:nt,name:"FocusTrap"}),!!(l&4)&&f.createElement(G,{as:"button",type:"button","data-headlessui-focus-guard":!0,onFocus:F,features:X.Focusable}))}let ot=b(rt),x=Object.assign(ot,{features:be}),C=[];tt(()=>{function e(t){t.target instanceof HTMLElement&&t.target!==document.body&&C[0]!==t.target&&(C.unshift(t.target),C=C.filter(n=>n!=null&&n.isConnected),C.splice(10))}window.addEventListener("click",e,{capture:!0}),window.addEventListener("mousedown",e,{capture:!0}),window.addEventListener("focus",e,{capture:!0}),document.body.addEventListener("click",e,{capture:!0}),document.body.addEventListener("mousedown",e,{capture:!0}),document.body.addEventListener("focus",e,{capture:!0})});function lt(e=!0){let t=i.useRef(C.slice());return ue(([n],[r])=>{r===!0&&n===!1&&le(()=>{t.current.splice(0)}),r===!1&&n===!0&&(t.current=C.slice())},[e,C,t]),g(()=>{var n;return(n=t.current.find(r=>r!=null&&r.isConnected))!=null?n:null})}function at({ownerDocument:e},t){let n=lt(t);ue(()=>{t||(e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&D(n())},[t]),we(()=>{t&&D(n())})}function ut({ownerDocument:e,container:t,initialFocus:n},r){let a=i.useRef(null),o=ge();return ue(()=>{if(!r)return;let l=t.current;l&&le(()=>{if(!o.current)return;let u=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===u){a.current=u;return}}else if(l.contains(u)){a.current=u;return}n!=null&&n.current?D(n.current):q(l,M.First)===Ue.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),a.current=e==null?void 0:e.activeElement})},[r]),a}function it({ownerDocument:e,container:t,containers:n,previousActiveElement:r},a){let o=ge();Ee(e==null?void 0:e.defaultView,"focus",l=>{if(!a||!o.current)return;let u=$e(n);t.current instanceof HTMLElement&&u.add(t.current);let s=r.current;if(!s)return;let c=l.target;c&&c instanceof HTMLElement?Te(u,c)?(r.current=c,D(c)):(l.preventDefault(),l.stopPropagation(),D(s)):D(r.current)},!0)}function Te(e,t){for(let n of e)if(n.contains(t))return!0;return!1}let ye=i.createContext(!1);function st(){return i.useContext(ye)}function te(e){return f.createElement(ye.Provider,{value:e.force},e.children)}function ct(e){let t=st(),n=i.useContext(Se),r=B(e),[a,o]=i.useState(()=>{if(!t&&n!==null||ve.isServer)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let u=r.createElement("div");return u.setAttribute("id","headlessui-portal-root"),r.body.appendChild(u)});return i.useEffect(()=>{a!==null&&(r!=null&&r.body.contains(a)||r==null||r.body.appendChild(a))},[a,r]),i.useEffect(()=>{t||n!==null&&o(n.current)},[n,o,t]),a}let dt=i.Fragment;function ft(e,t){let n=e,r=i.useRef(null),a=T(Ve(d=>{r.current=d}),t),o=B(r),l=ct(r),[u]=i.useState(()=>{var d;return ve.isServer?null:(d=o==null?void 0:o.createElement("div"))!=null?d:null}),s=i.useContext(ne),c=ae();return k(()=>{!l||!u||l.contains(u)||(u.setAttribute("data-headlessui-portal",""),l.appendChild(u))},[l,u]),k(()=>{if(u&&s)return s.register(u)},[s,u]),we(()=>{var d;!l||!u||(u instanceof Node&&l.contains(u)&&l.removeChild(u),l.childNodes.length<=0&&((d=l.parentElement)==null||d.removeChild(l)))}),c?!l||!u?null:Qe.createPortal(y({ourProps:{ref:a},theirProps:n,defaultTag:dt,name:"Portal"}),u):null}let pt=i.Fragment,Se=i.createContext(null);function mt(e,t){let{target:n,...r}=e,a={ref:T(t)};return f.createElement(Se.Provider,{value:n},y({ourProps:a,theirProps:r,defaultTag:pt,name:"Popover.Group"}))}let ne=i.createContext(null);function gt(){let e=i.useContext(ne),t=i.useRef([]),n=g(o=>(t.current.push(o),e&&e.register(o),()=>r(o))),r=g(o=>{let l=t.current.indexOf(o);l!==-1&&t.current.splice(l,1),e&&e.unregister(o)}),a=i.useMemo(()=>({register:n,unregister:r,portals:t}),[n,r,t]);return[t,i.useMemo(()=>function({children:o}){return f.createElement(ne.Provider,{value:a},o)},[a])]}let vt=b(ft),ht=b(mt),re=Object.assign(vt,{Group:ht}),Ce=i.createContext(null);function Pe(){let e=i.useContext(Ce);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,Pe),t}return e}function Et(){let[e,t]=i.useState([]);return[e.length>0?e.join(" "):void 0,i.useMemo(()=>function(n){let r=g(o=>(t(l=>[...l,o]),()=>t(l=>{let u=l.slice(),s=u.indexOf(o);return s!==-1&&u.splice(s,1),u}))),a=i.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return f.createElement(Ce.Provider,{value:a},n.children)},[t])]}let wt="p";function $t(e,t){let n=O(),{id:r=`headlessui-description-${n}`,...a}=e,o=Pe(),l=T(t);k(()=>o.register(r),[r,o.register]);let u={ref:l,...o.props,id:r};return y({ourProps:u,theirProps:a,slot:o.slot||{},defaultTag:wt,name:o.name||"Description"})}let bt=b($t),Tt=Object.assign(bt,{}),ie=i.createContext(()=>{});ie.displayName="StackContext";var oe=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(oe||{});function yt(){return i.useContext(ie)}function St({children:e,onUpdate:t,type:n,element:r,enabled:a}){let o=yt(),l=g((...u)=>{t==null||t(...u),o(...u)});return k(()=>{let u=a===void 0||a===!0;return u&&l(0,n,r),()=>{u&&l(1,n,r)}},[l,n,r,a]),f.createElement(ie.Provider,{value:l},e)}function Ct(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}const Pt=typeof Object.is=="function"?Object.is:Ct,{useState:Lt,useEffect:Dt,useLayoutEffect:Rt,useDebugValue:Mt}=ee;function kt(e,t,n){const r=t(),[{inst:a},o]=Lt({inst:{value:r,getSnapshot:t}});return Rt(()=>{a.value=r,a.getSnapshot=t,Q(a)&&o({inst:a})},[e,r,t]),Dt(()=>(Q(a)&&o({inst:a}),e(()=>{Q(a)&&o({inst:a})})),[e]),Mt(r),r}function Q(e){const t=e.getSnapshot,n=e.value;try{const r=t();return!Pt(n,r)}catch{return!0}}function Ot(e,t,n){return t()}const Ft=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",xt=!Ft,At=xt?Ot:kt,Nt="useSyncExternalStore"in ee?(e=>e.useSyncExternalStore)(ee):At;function Ht(e){return Nt(e.subscribe,e.getSnapshot,e.getSnapshot)}function Bt(e,t){let n=e(),r=new Set;return{getSnapshot(){return n},subscribe(a){return r.add(a),()=>r.delete(a)},dispatch(a,...o){let l=t[a].call(n,...o);l&&(n=l,r.forEach(u=>u()))}}}function It(){let e;return{before({doc:t}){var n;let r=t.documentElement;e=((n=t.defaultView)!=null?n:window).innerWidth-r.clientWidth},after({doc:t,d:n}){let r=t.documentElement,a=r.clientWidth-r.offsetWidth,o=e-a;n.style(r,"paddingRight",`${o}px`)}}}function jt(){if(!Ze())return{};let e;return{before(){e=window.pageYOffset},after({doc:t,d:n,meta:r}){function a(o){return r.containers.flatMap(l=>l()).some(l=>l.contains(o))}n.microTask(()=>{if(window.getComputedStyle(t.documentElement).scrollBehavior!=="auto"){let l=he();l.style(t.documentElement,"scroll-behavior","auto"),n.add(()=>n.microTask(()=>l.dispose()))}n.style(t.body,"marginTop",`-${e}px`),window.scrollTo(0,0);let o=null;n.addEventListener(t,"click",l=>{if(l.target instanceof HTMLElement)try{let u=l.target.closest("a");if(!u)return;let{hash:s}=new URL(u.href),c=t.querySelector(s);c&&!a(c)&&(o=c)}catch{}},!0),n.addEventListener(t,"touchmove",l=>{l.target instanceof HTMLElement&&!a(l.target)&&l.preventDefault()},{passive:!1}),n.add(()=>{window.scrollTo(0,window.pageYOffset+e),o&&o.isConnected&&(o.scrollIntoView({block:"nearest"}),o=null)})})}}}function Wt(){return{before({doc:e,d:t}){t.style(e.documentElement,"overflow","hidden")}}}function Yt(e){let t={};for(let n of e)Object.assign(t,n(t));return t}let L=Bt(()=>new Map,{PUSH(e,t){var n;let r=(n=this.get(e))!=null?n:{doc:e,count:0,d:he(),meta:new Set};return r.count++,r.meta.add(t),this.set(e,r),this},POP(e,t){let n=this.get(e);return n&&(n.count--,n.meta.delete(t)),this},SCROLL_PREVENT({doc:e,d:t,meta:n}){let r={doc:e,d:t,meta:Yt(n)},a=[jt(),It(),Wt()];a.forEach(({before:o})=>o==null?void 0:o(r)),a.forEach(({after:o})=>o==null?void 0:o(r))},SCROLL_ALLOW({d:e}){e.dispose()},TEARDOWN({doc:e}){this.delete(e)}});L.subscribe(()=>{let e=L.getSnapshot(),t=new Map;for(let[n]of e)t.set(n,n.documentElement.style.overflow);for(let n of e.values()){let r=t.get(n.doc)==="hidden",a=n.count!==0;(a&&!r||!a&&r)&&L.dispatch(n.count>0?"SCROLL_PREVENT":"SCROLL_ALLOW",n),n.count===0&&L.dispatch("TEARDOWN",n)}});function _t(e,t,n){let r=Ht(L),a=e?r.get(e):void 0,o=a?a.count>0:!1;return k(()=>{if(!(!e||!t))return L.dispatch("PUSH",e,n),()=>L.dispatch("POP",e,n)},[t,e]),o}let Z=new Map,A=new Map;function me(e,t=!0){k(()=>{var n;if(!t)return;let r=typeof e=="function"?e():e.current;if(!r)return;function a(){var l;if(!r)return;let u=(l=A.get(r))!=null?l:1;if(u===1?A.delete(r):A.set(r,u-1),u!==1)return;let s=Z.get(r);s&&(s["aria-hidden"]===null?r.removeAttribute("aria-hidden"):r.setAttribute("aria-hidden",s["aria-hidden"]),r.inert=s.inert,Z.delete(r))}let o=(n=A.get(r))!=null?n:0;return A.set(r,o+1),o!==0||(Z.set(r,{"aria-hidden":r.getAttribute("aria-hidden"),inert:r.inert}),r.setAttribute("aria-hidden","true"),r.inert=!0),a},[e,t])}function Ut({defaultContainers:e=[],portals:t,mainTreeNodeRef:n}={}){var r;let a=i.useRef((r=n==null?void 0:n.current)!=null?r:null),o=B(a),l=g(()=>{var u;let s=[];for(let c of e)c!==null&&(c instanceof HTMLElement?s.push(c):"current"in c&&c.current instanceof HTMLElement&&s.push(c.current));if(t!=null&&t.current)for(let c of t.current)s.push(c);for(let c of(u=o==null?void 0:o.querySelectorAll("html > *, body > *"))!=null?u:[])c!==document.body&&c!==document.head&&c instanceof HTMLElement&&c.id!=="headlessui-portal-root"&&(c.contains(a.current)||s.some(d=>c.contains(d))||s.push(c));return s});return{resolveContainers:l,contains:g(u=>l().some(s=>s.contains(u))),mainTreeNodeRef:a,MainTreeNode:i.useMemo(()=>function(){return n!=null?null:f.createElement(G,{features:X.Hidden,ref:a})},[a,n])}}function En(){let e=i.useRef(null);return{mainTreeNodeRef:e,MainTreeNode:i.useMemo(()=>function(){return f.createElement(G,{features:X.Hidden,ref:e})},[e])}}var Vt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(Vt||{}),qt=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(qt||{});let Gt={0(e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},z=i.createContext(null);z.displayName="DialogContext";function I(e){let t=i.useContext(z);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,I),n}return t}function Xt(e,t,n=()=>[document.body]){_t(e,t,r=>{var a;return{containers:[...(a=r.containers)!=null?a:[],n]}})}function zt(e,t){return H(t.type,Gt,e,t)}let Jt="div",Kt=pe.RenderStrategy|pe.Static;function Qt(e,t){var n;let r=O(),{id:a=`headlessui-dialog-${r}`,open:o,onClose:l,initialFocus:u,__demoMode:s=!1,...c}=e,[d,F]=i.useState(0),P=ze();o===void 0&&P!==null&&(o=(P&V.Open)===V.Open);let v=i.useRef(null),J=T(v,t),p=B(v),w=e.hasOwnProperty("open")||P!==null,S=e.hasOwnProperty("onClose");if(!w&&!S)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!w)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!S)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof o!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${o}`);if(typeof l!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${l}`);let h=o?0:1,[j,Le]=i.useReducer(zt,{titleId:null,descriptionId:null,panelRef:i.createRef()}),R=g(()=>l(!1)),se=g(m=>Le({type:0,id:m})),W=ae()?s?!1:h===0:!1,Y=d>1,ce=i.useContext(z)!==null,[De,Re]=gt(),{resolveContainers:K,mainTreeNodeRef:_,MainTreeNode:Me}=Ut({portals:De,defaultContainers:[(n=j.panelRef.current)!=null?n:v.current]}),ke=Y?"parent":"leaf",de=P!==null?(P&V.Closing)===V.Closing:!1,Oe=(()=>ce||de?!1:W)(),Fe=i.useCallback(()=>{var m,$;return($=Array.from((m=p==null?void 0:p.querySelectorAll("body > *"))!=null?m:[]).find(E=>E.id==="headlessui-portal-root"?!1:E.contains(_.current)&&E instanceof HTMLElement))!=null?$:null},[_]);me(Fe,Oe);let xe=(()=>Y?!0:W)(),Ae=i.useCallback(()=>{var m,$;return($=Array.from((m=p==null?void 0:p.querySelectorAll("[data-headlessui-portal]"))!=null?m:[]).find(E=>E.contains(_.current)&&E instanceof HTMLElement))!=null?$:null},[_]);me(Ae,xe);let Ne=(()=>!(!W||Y))();Je(K,R,Ne);let He=(()=>!(Y||h!==0))();Ee(p==null?void 0:p.defaultView,"keydown",m=>{He&&(m.defaultPrevented||m.key===qe.Escape&&(m.preventDefault(),m.stopPropagation(),R()))});let Be=(()=>!(de||h!==0||ce))();Xt(p,Be,K),i.useEffect(()=>{if(h!==0||!v.current)return;let m=new ResizeObserver($=>{for(let E of $){let U=E.target.getBoundingClientRect();U.x===0&&U.y===0&&U.width===0&&U.height===0&&R()}});return m.observe(v.current),()=>m.disconnect()},[h,v,R]);let[Ie,je]=Et(),We=i.useMemo(()=>[{dialogState:h,close:R,setTitleId:se},j],[h,j,R,se]),fe=i.useMemo(()=>({open:h===0}),[h]),Ye={ref:J,id:a,role:"dialog","aria-modal":h===0?!0:void 0,"aria-labelledby":j.titleId,"aria-describedby":Ie};return f.createElement(St,{type:"Dialog",enabled:h===0,element:v,onUpdate:g((m,$)=>{$==="Dialog"&&H(m,{[oe.Add]:()=>F(E=>E+1),[oe.Remove]:()=>F(E=>E-1)})})},f.createElement(te,{force:!0},f.createElement(re,null,f.createElement(z.Provider,{value:We},f.createElement(re.Group,{target:v},f.createElement(te,{force:!1},f.createElement(je,{slot:fe,name:"Dialog.Description"},f.createElement(x,{initialFocus:u,containers:K,features:W?H(ke,{parent:x.features.RestoreFocus,leaf:x.features.All&~x.features.FocusLock}):x.features.None},f.createElement(Re,null,y({ourProps:Ye,theirProps:c,slot:fe,defaultTag:Jt,features:Kt,visible:h===0,name:"Dialog"}))))))))),f.createElement(Me,null))}let Zt="div";function en(e,t){let n=O(),{id:r=`headlessui-dialog-overlay-${n}`,...a}=e,[{dialogState:o,close:l}]=I("Dialog.Overlay"),u=T(t),s=g(d=>{if(d.target===d.currentTarget){if(Ke(d.currentTarget))return d.preventDefault();d.preventDefault(),d.stopPropagation(),l()}}),c=i.useMemo(()=>({open:o===0}),[o]);return y({ourProps:{ref:u,id:r,"aria-hidden":!0,onClick:s},theirProps:a,slot:c,defaultTag:Zt,name:"Dialog.Overlay"})}let tn="div";function nn(e,t){let n=O(),{id:r=`headlessui-dialog-backdrop-${n}`,...a}=e,[{dialogState:o},l]=I("Dialog.Backdrop"),u=T(t);i.useEffect(()=>{if(l.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[l.panelRef]);let s=i.useMemo(()=>({open:o===0}),[o]);return f.createElement(te,{force:!0},f.createElement(re,null,y({ourProps:{ref:u,id:r,"aria-hidden":!0},theirProps:a,slot:s,defaultTag:tn,name:"Dialog.Backdrop"})))}let rn="div";function on(e,t){let n=O(),{id:r=`headlessui-dialog-panel-${n}`,...a}=e,[{dialogState:o},l]=I("Dialog.Panel"),u=T(t,l.panelRef),s=i.useMemo(()=>({open:o===0}),[o]),c=g(d=>{d.stopPropagation()});return y({ourProps:{ref:u,id:r,onClick:c},theirProps:a,slot:s,defaultTag:rn,name:"Dialog.Panel"})}let ln="h2";function an(e,t){let n=O(),{id:r=`headlessui-dialog-title-${n}`,...a}=e,[{dialogState:o,setTitleId:l}]=I("Dialog.Title"),u=T(t);i.useEffect(()=>(l(r),()=>l(null)),[r,l]);let s=i.useMemo(()=>({open:o===0}),[o]);return y({ourProps:{ref:u,id:r},theirProps:a,slot:s,defaultTag:ln,name:"Dialog.Title"})}let un=b(Qt),sn=b(nn),cn=b(on),dn=b(en),fn=b(an),wn=Object.assign(un,{Backdrop:sn,Panel:cn,Overlay:dn,Title:fn,Description:Tt});export{Ee as E,Et as M,wn as _,gt as a,Tt as b,Ut as j,et as n,N as s,En as y};
