"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9988],{9988:(Z,R,h)=>{h.r(R),h.d(R,{startInputShims:()=>X});var A=h(467),l=h(8476),T=h(3982),D=h(1559),p=h(4379);h(9144),h(4346),h(6317),h(8438);const w=new WeakMap,I=(e,t,s,o=0,n=!1)=>{w.has(e)!==s&&(s?k(e,t,o,n):G(e,t))},k=(e,t,s,o=!1)=>{const n=t.parentNode,r=t.cloneNode(!1);r.classList.add("cloned-input"),r.tabIndex=-1,o&&(r.disabled=!0),n.appendChild(r),w.set(e,r);const a="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${a}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=w.get(e);s&&(w.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",W="$ionPaddingTimer",O=(e,t,s)=>{const o=e[W];o&&clearTimeout(o),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[W]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},j=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&O(t,0,s)},{once:!0})};let g=0;const B="data-ionic-skip-scroll-assist",Q=(e,t,s,o,n,r,i,a=!1)=>{const v=r&&(void 0===i||i.mode===p.a.None);let m=!1;const c=void 0!==l.w?l.w.innerHeight:0,f=S=>{!1!==m?N(e,t,s,o,S.detail.keyboardHeight,v,a,c,!1):m=!0},u=()=>{m=!1,null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)},L=function(){var S=(0,A.A)(function*(){t.hasAttribute(B)?t.removeAttribute(B):(N(e,t,s,o,n,v,a,c),null==l.w||l.w.addEventListener("ionKeyboardDidShow",f),e.addEventListener("focusout",u))});return function(){return S.apply(this,arguments)}}();return e.addEventListener("focusin",L),()=>{e.removeEventListener("focusin",L),null==l.w||l.w.removeEventListener("ionKeyboardDidShow",f),e.removeEventListener("focusout",u)}},K=e=>{document.activeElement!==e&&(e.setAttribute(B,"true"),e.focus())},N=function(){var e=(0,A.A)(function*(t,s,o,n,r,i,a=!1,v=0,m=!0){if(!o&&!n)return;const c=((e,t,s,o)=>{var n;return((e,t,s,o)=>{const n=e.top,r=e.bottom,i=t.top,v=i+15,c=Math.min(t.bottom,o-s)-50-r,f=v-n,u=Math.round(c<0?-c:f>0?-f:0),L=Math.min(u,n-i),y=Math.abs(L)/.3;return{scrollAmount:L,scrollDuration:Math.min(400,Math.max(150,y)),scrollPadding:s,inputSafeY:4-(n-v)}})((null!==(n=e.closest("ion-item,[ion-item]"))&&void 0!==n?n:e).getBoundingClientRect(),t.getBoundingClientRect(),s,o)})(t,o||n,r,v);if(o&&Math.abs(c.scrollAmount)<4)return K(s),void(i&&null!==o&&(O(o,g),j(s,o,()=>g=0)));if(I(t,s,!0,c.inputSafeY,a),K(s),(0,D.r)(()=>t.click()),i&&o&&(g=c.scrollPadding,O(o,g)),typeof window<"u"){let f;const u=function(){var S=(0,A.A)(function*(){void 0!==f&&clearTimeout(f),window.removeEventListener("ionKeyboardDidShow",L),window.removeEventListener("ionKeyboardDidShow",u),o&&(yield(0,T.c)(o,0,c.scrollAmount,c.scrollDuration)),I(t,s,!1,c.inputSafeY),K(s),i&&j(s,o,()=>g=0)});return function(){return S.apply(this,arguments)}}(),L=()=>{window.removeEventListener("ionKeyboardDidShow",L),window.addEventListener("ionKeyboardDidShow",u)};if(o){const S=yield(0,T.g)(o);if(m&&c.scrollAmount>S.scrollHeight-S.clientHeight-S.scrollTop)return"password"===s.type?(c.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",L)):window.addEventListener("ionKeyboardDidShow",u),void(f=setTimeout(u,1e3))}u()}});return function(s,o,n,r,i,a){return e.apply(this,arguments)}}(),X=function(){var e=(0,A.A)(function*(t,s){if(void 0===l.d)return;const o="ios"===s,n="android"===s,r=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),a=t.getBoolean("hideCaretOnScroll",o),v=t.getBoolean("inputBlurring",!1),m=t.getBoolean("scrollPadding",!0),c=Array.from(l.d.querySelectorAll("ion-input, ion-textarea")),f=new WeakMap,u=new WeakMap,L=yield p.K.getResizeMode(),S=function(){var _=(0,A.A)(function*(d){yield new Promise(b=>(0,D.c)(d,b));const x=d.shadowRoot||d,M=x.querySelector("input")||x.querySelector("textarea"),P=(0,T.f)(d),F=P?null:d.closest("ion-footer");if(M){if(P&&a&&!f.has(d)){const b=((e,t,s)=>{if(!s||!t)return()=>{};const o=a=>{(e=>e===e.getRootNode().activeElement)(t)&&I(e,t,a)},n=()=>I(e,t,!1),r=()=>o(!0),i=()=>o(!1);return(0,D.a)(s,"ionScrollStart",r),(0,D.a)(s,"ionScrollEnd",i),t.addEventListener("blur",n),()=>{(0,D.b)(s,"ionScrollStart",r),(0,D.b)(s,"ionScrollEnd",i),t.removeEventListener("blur",n)}})(d,M,P);f.set(d,b)}if("date"!==M.type&&"datetime-local"!==M.type&&(P||F)&&i&&!u.has(d)){const b=Q(d,M,P,F,r,m,L,n);u.set(d,b)}}});return function(x){return _.apply(this,arguments)}}();v&&(()=>{let e=!0,t=!1;const s=document;(0,D.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",i=>{if(t)return void(t=!1);const a=s.activeElement;if(!a||a.matches(C))return;const v=i.target;v!==a&&(v.matches(C)||v.closest(C)||(e=!1,setTimeout(()=>{e||a.blur()},50)))},!1)})();for(const _ of c)S(_);l.d.addEventListener("ionInputDidLoad",_=>{S(_.detail)}),l.d.addEventListener("ionInputDidUnload",_=>{(_=>{if(a){const d=f.get(_);d&&d(),f.delete(_)}if(i){const d=u.get(_);d&&d(),u.delete(_)}})(_.detail)})});return function(s,o){return e.apply(this,arguments)}}()}}]);