"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2076],{1086:(C,E,a)=>{a.d(E,{I:()=>c,a:()=>t,b:()=>o,c:()=>i,d:()=>f,h:()=>v});var h=a(8438),c=function(s){return s.Heavy="HEAVY",s.Medium="MEDIUM",s.Light="LIGHT",s}(c||{});const n={getEngine(){const s=(0,h.g)();if(null!=s&&s.isPluginAvailable("Haptics"))return s.Plugins.Haptics},available(){if(!this.getEngine())return!1;const e=(0,h.g)();return"web"!==(null==e?void 0:e.getPlatform())||typeof navigator<"u"&&void 0!==navigator.vibrate},impact(s){const e=this.getEngine();e&&e.impact({style:s.style})},notification(s){const e=this.getEngine();e&&e.notification({type:s.type})},selection(){this.impact({style:c.Light})},selectionStart(){const s=this.getEngine();s&&s.selectionStart()},selectionChanged(){const s=this.getEngine();s&&s.selectionChanged()},selectionEnd(){const s=this.getEngine();s&&s.selectionEnd()}},r=()=>n.available(),i=()=>{r()&&n.selection()},t=()=>{r()&&n.selectionStart()},o=()=>{r()&&n.selectionChanged()},v=()=>{r()&&n.selectionEnd()},f=s=>{r()&&n.impact(s)}},1622:(C,E,a)=>{a.r(E),a.d(E,{KEYBOARD_DID_CLOSE:()=>r,KEYBOARD_DID_OPEN:()=>n,copyVisualViewport:()=>M,keyboardDidClose:()=>u,keyboardDidOpen:()=>_,keyboardDidResize:()=>y,resetKeyboardAssist:()=>f,setKeyboardClose:()=>p,setKeyboardOpen:()=>d,startKeyboardAssist:()=>s,trackViewportChanges:()=>O});var h=a(4379);a(8438),a(8476);const n="ionKeyboardDidShow",r="ionKeyboardDidHide";let t={},o={},v=!1;const f=()=>{t={},o={},v=!1},s=g=>{if(h.K.getEngine())e(g);else{if(!g.visualViewport)return;o=M(g.visualViewport),g.visualViewport.onresize=()=>{O(g),_()||y(g)?d(g):u(g)&&p(g)}}},e=g=>{g.addEventListener("keyboardDidShow",D=>d(g,D)),g.addEventListener("keyboardDidHide",()=>p(g))},d=(g,D)=>{m(g,D),v=!0},p=g=>{w(g),v=!1},_=()=>!v&&t.width===o.width&&(t.height-o.height)*o.scale>150,y=g=>v&&!u(g),u=g=>v&&o.height===g.innerHeight,m=(g,D)=>{const P=new CustomEvent(n,{detail:{keyboardHeight:D?D.keyboardHeight:g.innerHeight-o.height}});g.dispatchEvent(P)},w=g=>{const D=new CustomEvent(r);g.dispatchEvent(D)},O=g=>{t=Object.assign({},o),o=M(g.visualViewport)},M=g=>({width:Math.round(g.width),height:Math.round(g.height),offsetTop:g.offsetTop,offsetLeft:g.offsetLeft,pageTop:g.pageTop,pageLeft:g.pageLeft,scale:g.scale})},2935:(C,E,a)=>{a.d(E,{w:()=>h});const h=(n,r,i)=>{if(typeof MutationObserver>"u")return;const t=new MutationObserver(o=>{i(c(o,r))});return t.observe(n,{childList:!0,subtree:!0}),t},c=(n,r)=>{let i;return n.forEach(t=>{for(let o=0;o<t.addedNodes.length;o++)i=l(t.addedNodes[o],r)||i}),i},l=(n,r)=>{if(1!==n.nodeType)return;const i=n;return(i.tagName===r.toUpperCase()?[i]:Array.from(i.querySelectorAll(r))).find(o=>o.value===i.value)}},3126:(C,E,a)=>{a.r(E),a.d(E,{startFocusVisible:()=>n});const h="ion-focused",l=["Tab","ArrowDown","Space","Escape"," ","Shift","Enter","ArrowLeft","ArrowRight","ArrowUp","Home","End"],n=r=>{let i=[],t=!0;const o=r?r.shadowRoot:document,v=r||document.body,f=y=>{i.forEach(u=>u.classList.remove(h)),y.forEach(u=>u.classList.add(h)),i=y},s=()=>{t=!1,f([])},e=y=>{t=l.includes(y.key),t||f([])},d=y=>{if(t&&void 0!==y.composedPath){const u=y.composedPath().filter(m=>!!m.classList&&m.classList.contains("ion-focusable"));f(u)}},p=()=>{o.activeElement===v&&f([])};return o.addEventListener("keydown",e),o.addEventListener("focusin",d),o.addEventListener("focusout",p),o.addEventListener("touchstart",s,{passive:!0}),o.addEventListener("mousedown",s),{destroy:()=>{o.removeEventListener("keydown",e),o.removeEventListener("focusin",d),o.removeEventListener("focusout",p),o.removeEventListener("touchstart",s),o.removeEventListener("mousedown",s)},setFocus:f}}},3351:(C,E,a)=>{a.d(E,{g:()=>h});const h=(i,t,o,v,f)=>l(i[1],t[1],o[1],v[1],f).map(s=>c(i[0],t[0],o[0],v[0],s)),c=(i,t,o,v,f)=>f*(3*t*Math.pow(f-1,2)+f*(-3*o*f+3*o+v*f))-i*Math.pow(f-1,3),l=(i,t,o,v,f)=>r((v-=f)-3*(o-=f)+3*(t-=f)-(i-=f),3*o-6*t+3*i,3*t-3*i,i).filter(e=>e>=0&&e<=1),r=(i,t,o,v)=>{if(0===i)return((i,t,o)=>{const v=t*t-4*i*o;return v<0?[]:[(-t+Math.sqrt(v))/(2*i),(-t-Math.sqrt(v))/(2*i)]})(t,o,v);const f=(3*(o/=i)-(t/=i)*t)/3,s=(2*t*t*t-9*t*o+27*(v/=i))/27;if(0===f)return[Math.pow(-s,1/3)];if(0===s)return[Math.sqrt(-f),-Math.sqrt(-f)];const e=Math.pow(s/2,2)+Math.pow(f/3,3);if(0===e)return[Math.pow(s/2,.5)-t/3];if(e>0)return[Math.pow(-s/2+Math.sqrt(e),1/3)-Math.pow(s/2+Math.sqrt(e),1/3)-t/3];const d=Math.sqrt(Math.pow(-f/3,3)),p=Math.acos(-s/(2*Math.sqrt(Math.pow(-f/3,3)))),_=2*Math.pow(d,1/3);return[_*Math.cos(p/3)-t/3,_*Math.cos((p+2*Math.PI)/3)-t/3,_*Math.cos((p+4*Math.PI)/3)-t/3]}},3982:(C,E,a)=>{a.d(E,{I:()=>i,a:()=>f,b:()=>r,c:()=>d,d:()=>_,f:()=>s,g:()=>v,i:()=>o,p:()=>p,r:()=>y,s:()=>e});var h=a(467),c=a(1559),l=a(9144);const r="ion-content",i=".ion-content-scroll-host",t=`${r}, ${i}`,o=u=>"ION-CONTENT"===u.tagName,v=function(){var u=(0,h.A)(function*(m){return o(m)?(yield new Promise(w=>(0,c.c)(m,w)),m.getScrollElement()):m});return function(w){return u.apply(this,arguments)}}(),f=u=>u.querySelector(i)||u.querySelector(t),s=u=>u.closest(t),e=(u,m)=>o(u)?u.scrollToTop(m):Promise.resolve(u.scrollTo({top:0,left:0,behavior:m>0?"smooth":"auto"})),d=(u,m,w,O)=>o(u)?u.scrollByPoint(m,w,O):Promise.resolve(u.scrollBy({top:w,left:m,behavior:O>0?"smooth":"auto"})),p=u=>(0,l.b)(u,r),_=u=>{if(o(u)){const w=u.scrollY;return u.scrollY=!1,w}return u.style.setProperty("overflow","hidden"),!0},y=(u,m)=>{o(u)?u.scrollY=m:u.style.removeProperty("overflow")}},3992:(C,E,a)=>{a.d(E,{a:()=>h,b:()=>d,c:()=>t,d:()=>p,e:()=>P,f:()=>i,g:()=>_,h:()=>l,i:()=>c,j:()=>g,k:()=>D,l:()=>o,m:()=>s,n:()=>y,o:()=>f,p:()=>r,q:()=>n,r:()=>M,s:()=>L,t:()=>e,u:()=>w,v:()=>O,w:()=>v,x:()=>u,y:()=>m});const h="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-miterlimit='10' stroke-width='48' d='M244 400L100 256l144-144M120 256h292' class='ionicon-fill-none'/></svg>",c="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 268l144 144 144-144M256 392V100' class='ionicon-fill-none'/></svg>",l="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M368 64L144 256l224 192V64z'/></svg>",n="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 144l192 224 192-224H64z'/></svg>",r="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M448 368L256 144 64 368h384z'/></svg>",i="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M416 128L192 384l-96-96' class='ionicon-fill-none ionicon-stroke-width'/></svg>",t="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M328 112L184 256l144 144' class='ionicon-fill-none'/></svg>",o="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M112 184l144 144 144-144' class='ionicon-fill-none'/></svg>",v="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M136 208l120-104 120 104M136 304l120 104 120-104' stroke-width='48' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none'/></svg>",f="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",s="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' stroke-width='48' d='M184 112l144 144-144 144' class='ionicon-fill-none'/></svg>",e="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z'/></svg>",d="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm75.31 260.69a16 16 0 11-22.62 22.62L256 278.63l-52.69 52.68a16 16 0 01-22.62-22.62L233.37 256l-52.68-52.69a16 16 0 0122.62-22.62L256 233.37l52.69-52.68a16 16 0 0122.62 22.62L278.63 256z'/></svg>",p="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z'/></svg>",_="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='192' stroke-linecap='round' stroke-linejoin='round' class='ionicon-fill-none ionicon-stroke-width'/></svg>",y="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='48'/><circle cx='416' cy='256' r='48'/><circle cx='96' cy='256' r='48'/></svg>",u="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><circle cx='256' cy='256' r='64'/><path d='M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96c-42.52 0-84.33 12.15-124.27 36.11-40.73 24.43-77.63 60.12-109.68 106.07a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416c46.71 0 93.81-14.43 136.2-41.72 38.46-24.77 72.72-59.66 99.08-100.92a32.2 32.2 0 00-.1-34.76zM256 352a96 96 0 1196-96 96.11 96.11 0 01-96 96z'/></svg>",m="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M432 448a15.92 15.92 0 01-11.31-4.69l-352-352a16 16 0 0122.62-22.62l352 352A16 16 0 01432 448zM248 315.85l-51.79-51.79a2 2 0 00-3.39 1.69 64.11 64.11 0 0053.49 53.49 2 2 0 001.69-3.39zM264 196.15L315.87 248a2 2 0 003.4-1.69 64.13 64.13 0 00-53.55-53.55 2 2 0 00-1.72 3.39z'/><path d='M491 273.36a32.2 32.2 0 00-.1-34.76c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.68 96a226.54 226.54 0 00-71.82 11.79 4 4 0 00-1.56 6.63l47.24 47.24a4 4 0 003.82 1.05 96 96 0 01116 116 4 4 0 001.05 3.81l67.95 68a4 4 0 005.4.24 343.81 343.81 0 0067.24-77.4zM256 352a96 96 0 01-93.3-118.63 4 4 0 00-1.05-3.81l-66.84-66.87a4 4 0 00-5.41-.23c-24.39 20.81-47 46.13-67.67 75.72a31.92 31.92 0 00-.64 35.54c26.41 41.33 60.39 76.14 98.28 100.65C162.06 402 207.92 416 255.68 416a238.22 238.22 0 0072.64-11.55 4 4 0 001.61-6.64l-47.47-47.46a4 4 0 00-3.81-1.05A96 96 0 01256 352z'/></svg>",w="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-miterlimit='10' d='M80 160h352M80 256h352M80 352h352' class='ionicon-fill-none ionicon-stroke-width'/></svg>",O="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M64 384h384v-42.67H64zm0-106.67h384v-42.66H64zM64 128v42.67h384V128z'/></svg>",M="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M400 256H112' class='ionicon-fill-none ionicon-stroke-width'/></svg>",g="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='round' stroke-linejoin='round' d='M96 256h320M96 176h320M96 336h320' class='ionicon-fill-none ionicon-stroke-width'/></svg>",D="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path stroke-linecap='square' stroke-linejoin='round' stroke-width='44' d='M118 304h276M118 208h276' class='ionicon-fill-none'/></svg>",L="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z' stroke-miterlimit='10' class='ionicon-fill-none ionicon-stroke-width'/><path stroke-linecap='round' stroke-miterlimit='10' d='M338.29 338.29L448 448' class='ionicon-fill-none ionicon-stroke-width'/></svg>",P="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' class='ionicon' viewBox='0 0 512 512'><path d='M464 428L339.92 303.9a160.48 160.48 0 0030.72-94.58C370.64 120.37 298.27 48 209.32 48S48 120.37 48 209.32s72.37 161.32 161.32 161.32a160.48 160.48 0 0094.58-30.72L428 464zM209.32 319.69a110.38 110.38 0 11110.37-110.37 110.5 110.5 0 01-110.37 110.37z'/></svg>"},4379:(C,E,a)=>{a.d(E,{K:()=>n,a:()=>l});var h=a(8438),c=function(r){return r.Unimplemented="UNIMPLEMENTED",r.Unavailable="UNAVAILABLE",r}(c||{}),l=function(r){return r.Body="body",r.Ionic="ionic",r.Native="native",r.None="none",r}(l||{});const n={getEngine(){const r=(0,h.g)();if(null!=r&&r.isPluginAvailable("Keyboard"))return r.Plugins.Keyboard},getResizeMode(){const r=this.getEngine();return null!=r&&r.getResizeMode?r.getResizeMode().catch(i=>{if(i.code!==c.Unimplemented)throw i}):Promise.resolve(void 0)}}},4731:(C,E,a)=>{a.d(E,{c:()=>i});var h=a(467),c=a(8476),l=a(4379);const n=t=>{if(void 0===c.d||t===l.a.None||void 0===t)return null;const o=c.d.querySelector("ion-app");return null!=o?o:c.d.body},r=t=>{const o=n(t);return null===o?0:o.clientHeight},i=function(){var t=(0,h.A)(function*(o){let v,f,s,e;const d=function(){var m=(0,h.A)(function*(){const w=yield l.K.getResizeMode(),O=void 0===w?void 0:w.mode;v=()=>{void 0===e&&(e=r(O)),s=!0,p(s,O)},f=()=>{s=!1,p(s,O)},null==c.w||c.w.addEventListener("keyboardWillShow",v),null==c.w||c.w.addEventListener("keyboardWillHide",f)});return function(){return m.apply(this,arguments)}}(),p=(m,w)=>{o&&o(m,_(w))},_=m=>{if(0===e||e===r(m))return;const w=n(m);return null!==w?new Promise(O=>{const g=new ResizeObserver(()=>{w.clientHeight===e&&(g.disconnect(),O())});g.observe(w)}):void 0};return yield d(),{init:d,destroy:()=>{null==c.w||c.w.removeEventListener("keyboardWillShow",v),null==c.w||c.w.removeEventListener("keyboardWillHide",f),v=f=void 0},isKeyboardVisible:()=>s}});return function(v){return t.apply(this,arguments)}}()},5083:(C,E,a)=>{a.d(E,{i:()=>h});const h=c=>c&&""!==c.dir?"rtl"===c.dir.toLowerCase():"rtl"===(null==document?void 0:document.dir.toLowerCase())},5098:(C,E,a)=>{a.d(E,{c:()=>n,g:()=>r});var h=a(8476),c=a(1559),l=a(9144);const n=(t,o,v)=>{let f,s;if(void 0!==h.w&&"MutationObserver"in h.w){const _=Array.isArray(o)?o:[o];f=new MutationObserver(y=>{for(const u of y)for(const m of u.addedNodes)if(m.nodeType===Node.ELEMENT_NODE&&_.includes(m.slot))return v(),void(0,c.r)(()=>e(m))}),f.observe(t,{childList:!0,subtree:!0})}const e=_=>{var y;s&&(s.disconnect(),s=void 0),s=new MutationObserver(u=>{v();for(const m of u)for(const w of m.removedNodes)w.nodeType===Node.ELEMENT_NODE&&w.slot===o&&p()}),s.observe(null!==(y=_.parentElement)&&void 0!==y?y:_,{subtree:!0,childList:!0})},p=()=>{s&&(s.disconnect(),s=void 0)};return{destroy:()=>{f&&(f.disconnect(),f=void 0),p()}}},r=(t,o,v)=>{const f=null==t?0:t.toString().length,s=i(f,o);if(void 0===v)return s;try{return v(f,o)}catch(e){return(0,l.a)("Exception in provided `counterFormatter`.",e),s}},i=(t,o)=>`${t} / ${o}`},5572:(C,E,a)=>{a.d(E,{c:()=>h,i:()=>c});const h=(l,n,r)=>"function"==typeof r?r(l,n):"string"==typeof r?l[r]===n[r]:Array.isArray(n)?n.includes(l):l===n,c=(l,n,r)=>void 0!==l&&(Array.isArray(l)?l.some(i=>h(i,n,r)):h(l,n,r))},6664:(C,E,a)=>{a.r(E),a.d(E,{createSwipeBackGesture:()=>r});var h=a(1559),c=a(5083),l=a(8607);a(1970);const r=(i,t,o,v,f)=>{const s=i.ownerDocument.defaultView;let e=(0,c.i)(i);const p=w=>e?-w.deltaX:w.deltaX;return(0,l.createGesture)({el:i,gestureName:"goback-swipe",gesturePriority:101,threshold:10,canStart:w=>(e=(0,c.i)(i),(w=>{const{startX:M}=w;return e?M>=s.innerWidth-50:M<=50})(w)&&t()),onStart:o,onMove:w=>{const M=p(w)/s.innerWidth;v(M)},onEnd:w=>{const O=p(w),M=s.innerWidth,g=O/M,D=(w=>e?-w.velocityX:w.velocityX)(w),P=D>=0&&(D>.2||O>M/2),A=(P?1-g:g)*M;let x=0;if(A>5){const B=A/Math.abs(D);x=Math.min(B,540)}f(P,g<=0?.01:(0,h.j)(0,g,.9999),x)}})}},7383:(C,E,a)=>{a.d(E,{c:()=>l});var h=a(8476),c=a(1559);const l=(n,r,i)=>{let t;const o=()=>!(void 0===r()||void 0!==n.label||null===i()),f=()=>{const e=r();if(void 0===e)return;if(!o())return void e.style.removeProperty("width");const d=i().scrollWidth;if(0===d&&null===e.offsetParent&&void 0!==h.w&&"IntersectionObserver"in h.w){if(void 0!==t)return;const p=t=new IntersectionObserver(_=>{1===_[0].intersectionRatio&&(f(),p.disconnect(),t=void 0)},{threshold:.01,root:n});p.observe(e)}else e.style.setProperty("width",.75*d+"px")};return{calculateNotchWidth:()=>{o()&&(0,c.r)(()=>{f()})},destroy:()=>{t&&(t.disconnect(),t=void 0)}}}},7838:(C,E,a)=>{a.d(E,{c:()=>c});var h=a(467);const c=()=>{let l;return{lock:function(){var r=(0,h.A)(function*(){const i=l;let t;return l=new Promise(o=>t=o),void 0!==i&&(yield i),t});return function(){return r.apply(this,arguments)}}()}}},7895:(C,E,a)=>{a.d(E,{S:()=>c});const c={bubbles:{dur:1e3,circles:9,fn:(l,n,r)=>{const i=l*n/r-l+"ms",t=2*Math.PI*n/r;return{r:5,style:{top:32*Math.sin(t)+"%",left:32*Math.cos(t)+"%","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(l,n,r)=>{const i=n/r,t=l*i-l+"ms",o=2*Math.PI*i;return{r:5,style:{top:32*Math.sin(o)+"%",left:32*Math.cos(o)+"%","animation-delay":t}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,n)=>({r:6,style:{left:32-32*n+"%","animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:8,fn:(l,n,r)=>({y1:14,y2:26,style:{transform:`rotate(${360/r*n+(n<r/2?180:-180)}deg)`,"animation-delay":l*n/r-l+"ms"}})},"lines-small":{dur:1e3,lines:8,fn:(l,n,r)=>({y1:12,y2:20,style:{transform:`rotate(${360/r*n+(n<r/2?180:-180)}deg)`,"animation-delay":l*n/r-l+"ms"}})},"lines-sharp":{dur:1e3,lines:12,fn:(l,n,r)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":l*n/r-l+"ms"}})},"lines-sharp-small":{dur:1e3,lines:12,fn:(l,n,r)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":l*n/r-l+"ms"}})}}},8438:(C,E,a)=>{a.d(E,{g:()=>c});var h=a(8476);const c=()=>{if(void 0!==h.w)return h.w.Capacitor}},8472:(C,E,a)=>{a.d(E,{u:()=>o});var h=a(467),c=a(9498),l=a(8152),n=a(7638),r=a(6454),i=a(6340),t=a(8831);let o=(()=>{var v;class f{constructor(e,d,p,_,y,u){this.auth=e,this.firestore=d,this.router=p,this.afs=_,this.afAuth=y,this.injector=u}register(e,d,p,_){var y=this;return(0,h.A)(function*(){try{const u=yield(0,l.eJ)(y.auth,e,d),m=u.user.uid;return yield(0,n.BN)((0,n.H9)(y.firestore,`users/${m}`),{user:_,email:e,userType:p}),u.user}catch(u){throw console.error("Error en el registro:",u),u}})()}login(e,d){var p=this;return(0,h.A)(function*(){try{return(yield(0,l.x9)(p.auth,e,d)).user}catch(_){throw console.error("Error en el login:",_),_}})()}getUserData(e){var d=this;return(0,h.A)(function*(){try{const p=(0,n.H9)(d.firestore,`users/${e}`),_=yield(0,n.x7)(p);return _.exists()?_.data():null}catch(p){return console.error("Error obteniendo datos del usuario:",p),null}})()}getPropertyById(e){var d=this;return(0,h.A)(function*(){try{const p=(0,n.H9)(d.firestore,`properties/${e}`),_=yield(0,n.x7)(p);return _.exists()?_.data():null}catch(p){return console.error("Error obteniendo la propiedad:",p),null}})()}createCita(e,d,p,_,y){var u=this;return(0,h.A)(function*(){try{const m={ownerId:e,userId:d,propertyId:p,fecha:_,hora:y,status:"pendiente"};return(yield(0,n.gS)((0,n.rJ)(u.firestore,"citas"),m)).id}catch(m){throw console.error("Error al crear la cita:",m),m}})()}getCitasSentByCurrentUser(){var e=this;return(0,h.A)(function*(){try{const d=e.auth.currentUser;if(!d)throw new Error("No hay un usuario autenticado actualmente.");const p=d.uid,_=(0,n.rJ)(e.firestore,"citas"),y=(0,n.P)(_,(0,n._M)("userId","==",p)),u=yield(0,n.GG)(y);return yield Promise.all(u.docs.map(function(){var w=(0,h.A)(function*(O){const M={id:O.id,...O.data()};let g=null;M.propertyId&&(g=yield e.getPropertyById(M.propertyId));let D=null;return M.ownerId&&(D=yield e.getUserData(M.ownerId)),{...M,propertyData:g,ownerData:D}});return function(O){return w.apply(this,arguments)}}()))}catch(d){throw console.error("Error obteniendo las citas del usuario actual (userId):",d),d}})()}getCitasOfCurrentUser(){var e=this;return(0,h.A)(function*(){try{const d=e.auth.currentUser;if(!d)throw new Error("No hay un usuario autenticado actualmente.");const p=d.uid,_=(0,n.rJ)(e.firestore,"citas"),y=(0,n.P)(_,(0,n._M)("ownerId","==",p)),u=yield(0,n.GG)(y);return yield Promise.all(u.docs.map(function(){var w=(0,h.A)(function*(O){const M={id:O.id,...O.data()};let g=null,D=null;return M.propertyId&&(g=yield e.getPropertyById(M.propertyId)),M.userId&&(D=yield e.getUserData(M.userId)),{...M,propertyData:g,userData:D}});return function(O){return w.apply(this,arguments)}}()))}catch(d){throw console.error("Error obteniendo las citas del usuario actual:",d),d}})()}updateCitaStatus(e,d){var p=this;return(0,h.A)(function*(){try{const _=(0,n.H9)(p.firestore,`citas/${e}`);yield(0,n.mZ)(_,{status:d})}catch(_){throw console.error("Error actualizando el status de la cita:",_),_}})()}getUserProperties(){var e=this;return(0,h.A)(function*(){const d=e.auth.currentUser;if(!d||!d.uid)throw new Error("Usuario no autenticado");const p=(0,n.rJ)(e.firestore,"properties"),_=(0,n.P)(p,(0,n._M)("ownerId","==",d.uid));return(yield(0,n.GG)(_)).docs.map(m=>({id:m.id,...m.data()}))})()}updateProperty(e,d){return(0,c.N4e)(this.injector,()=>this.afs.doc(`properties/${e}`).update(d))}deleteProperty(e){return(0,c.N4e)(this.injector,()=>this.afs.doc(`properties/${e}`).delete())}logout(){var e=this;return(0,h.A)(function*(){yield(0,l.CI)(e.auth),e.router.navigate(["/login"])})()}}return(v=f).\u0275fac=function(e){return new(e||v)(c.KVO(l.Nj),c.KVO(n._7),c.KVO(r.Ix),c.KVO(i.Qe),c.KVO(t.DS),c.KVO(c.zZn))},v.\u0275prov=c.jDH({token:v,factory:v.\u0275fac,providedIn:"root"}),f})()},8976:(C,E,a)=>{a.d(E,{c:()=>n});var h=a(6317),c=a(1086),l=a(8607);const n=(r,i)=>{let t,o;const v=(e,d,p)=>{if(typeof document>"u")return;const _=document.elementFromPoint(e,d);_&&i(_)&&!_.disabled?_!==t&&(s(),f(_,p)):s()},f=(e,d)=>{t=e,o||(o=t);const p=t;(0,h.w)(()=>p.classList.add("ion-activated")),d()},s=(e=!1)=>{if(!t)return;const d=t;(0,h.w)(()=>d.classList.remove("ion-activated")),e&&o!==t&&t.click(),t=void 0};return(0,l.createGesture)({el:r,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>v(e.currentX,e.currentY,c.a),onMove:e=>v(e.currentX,e.currentY,c.b),onEnd:()=>{s(!0),(0,c.h)(),o=void 0}})}}}]);