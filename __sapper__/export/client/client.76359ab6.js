function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(n)}function s(t){return"function"==typeof t}function c(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function a(t,n,r,o){return t[1]&&o?e(r.ctx.slice(),t[1](o(n))):r.ctx}function i(t,e,n,r,o,s,c){const i=function(t,e,n,r){if(t[2]&&r){const o=t[2](r(n));if(void 0===e.dirty)return o;if("object"==typeof o){const t=[],n=Math.max(e.dirty.length,o.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|o[r];return t}return e.dirty|o}return e.dirty}(e,r,o,s);if(i){const o=a(e,n,r,c);t.p(o,i)}}function l(t,e){t.appendChild(e)}function u(t,e,n){t.insertBefore(e,n||null)}function f(t){t.parentNode.removeChild(t)}function p(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function d(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function m(){return h(" ")}function g(){return h("")}function $(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function y(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function v(t){return Array.from(t.childNodes)}function b(t,e,n,r){for(let r=0;r<t.length;r+=1){const o=t[r];if(o.nodeName===e){let e=0;const s=[];for(;e<o.attributes.length;){const t=o.attributes[e++];n[t.name]||s.push(t.name)}for(let t=0;t<s.length;t++)o.removeAttribute(s[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):d(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return h(e)}function w(t){return E(t," ")}function x(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e=document.body){return Array.from(e.querySelectorAll(t))}let _;function A(t){_=t}function R(){if(!_)throw new Error("Function called outside component initialization");return _}function k(){const t=R();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const o=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,o)})}}}const P=[],C=[],L=[],N=[],q=Promise.resolve();let j=!1;function U(t){L.push(t)}let O=!1;const I=new Set;function B(){if(!O){O=!0;do{for(let t=0;t<P.length;t+=1){const e=P[t];A(e),D(e.$$)}for(P.length=0;C.length;)C.pop()();for(let t=0;t<L.length;t+=1){const e=L[t];I.has(e)||(I.add(e),e())}L.length=0}while(P.length);for(;N.length;)N.pop()();j=!1,O=!1,I.clear()}}function D(t){if(null!==t.fragment){t.update(),o(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(U)}}const T=new Set;let H;function J(){H={r:0,c:[],p:H}}function V(){H.r||o(H.c),H=H.p}function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(T.has(t))return;T.add(t),H.c.push(()=>{T.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function W(t,e){const n=e.token={};function r(t,r,o,s){if(e.token!==n)return;e.resolved=s;let c=e.ctx;void 0!==o&&(c=c.slice(),c[o]=s);const a=t&&(e.current=t)(c);let i=!1;e.block&&(e.blocks?e.blocks.forEach((t,n)=>{n!==r&&t&&(J(),M(t,1,1,()=>{e.blocks[n]=null}),V())}):e.block.d(1),a.c(),K(a,1),a.m(e.mount(),e.anchor),i=!0),e.block=a,e.blocks&&(e.blocks[r]=a),i&&B()}if((o=t)&&"object"==typeof o&&"function"==typeof o.then){const n=R();if(t.then(t=>{A(n),r(e.then,1,e.value,t),A(null)},t=>{A(n),r(e.catch,2,e.error,t),A(null)}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}var o}function z(t,e){const n={},r={},o={$$scope:1};let s=t.length;for(;s--;){const c=t[s],a=e[s];if(a){for(const t in c)t in a||(r[t]=1);for(const t in a)o[t]||(n[t]=a[t],o[t]=1);t[s]=a}else for(const t in c)o[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function F(t){return"object"==typeof t&&null!==t?t:{}}function G(t){t&&t.c()}function Y(t,e){t&&t.l(e)}function X(t,e,r){const{fragment:c,on_mount:a,on_destroy:i,after_update:l}=t.$$;c&&c.m(e,r),U(()=>{const e=a.map(n).filter(s);i?i.push(...e):o(e),t.$$.on_mount=[]}),l.forEach(U)}function Q(t,e){const n=t.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Z(t,e){-1===t.$$.dirty[0]&&(P.push(t),j||(j=!0,q.then(B)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function tt(e,n,s,c,a,i,l=[-1]){const u=_;A(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l};let h=!1;if(d.ctx=s?s(e,p,(t,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&a(d.ctx[t],d.ctx[t]=o)&&(d.bound[t]&&d.bound[t](o),h&&Z(e,t)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=v(n.target);d.fragment&&d.fragment.l(t),t.forEach(f)}else d.fragment&&d.fragment.c();n.intro&&K(e.$$.fragment),X(e,n.target,n.anchor),B()}A(u)}class et{$destroy(){Q(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const nt=[];function rt(e,n=t){let r;const o=[];function s(t){if(c(e,t)&&(e=t,r)){const t=!nt.length;for(let t=0;t<o.length;t+=1){const n=o[t];n[1](),nt.push(n,e)}if(t){for(let t=0;t<nt.length;t+=2)nt[t][0](nt[t+1]);nt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(c,a=t){const i=[c,a];return o.push(i),1===o.length&&(r=n(s)||t),c(e),()=>{const t=o.indexOf(i);-1!==t&&o.splice(t,1),0===o.length&&(r(),r=null)}}}}const ot={},st=()=>({});function ct(e){let n,r,o;return{c(){n=d("nav"),r=d("h3"),o=h("All Around the World"),this.h()},l(t){n=b(t,"NAV",{class:!0});var e=v(n);r=b(e,"H3",{class:!0});var s=v(r);o=E(s,"All Around the World"),s.forEach(f),e.forEach(f),this.h()},h(){y(r,"class","svelte-9m2n9i"),y(n,"class","svelte-9m2n9i")},m(t,e){u(t,n,e),l(n,r),l(r,o)},p:t,i:t,o:t,d(t){t&&f(n)}}}class at extends et{constructor(t){super(),tt(this,t,null,ct,c,{})}}function it(t){let e,n,r,o;e=new at({});const s=t[1].default,c=function(t,e,n,r){if(t){const o=a(t,e,n,r);return t[0](o)}}(s,t,t[0],null);return{c(){G(e.$$.fragment),n=m(),r=d("main"),c&&c.c(),this.h()},l(t){Y(e.$$.fragment,t),n=w(t),r=b(t,"MAIN",{class:!0});var o=v(r);c&&c.l(o),o.forEach(f),this.h()},h(){y(r,"class","svelte-1a5sfto")},m(t,s){X(e,t,s),u(t,n,s),u(t,r,s),c&&c.m(r,null),o=!0},p(t,[e]){c&&c.p&&1&e&&i(c,s,t,t[0],e,null,null)},i(t){o||(K(e.$$.fragment,t),K(c,t),o=!0)},o(t){M(e.$$.fragment,t),M(c,t),o=!1},d(t){Q(e,t),t&&f(n),t&&f(r),c&&c.d(t)}}}function lt(t,e,n){let{$$slots:r={},$$scope:o}=e;return t.$set=t=>{"$$scope"in t&&n(0,o=t.$$scope)},[o,r]}class ut extends et{constructor(t){super(),tt(this,t,lt,it,c,{})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=d("pre"),n=h(r)},l(t){e=b(t,"PRE",{});var o=v(e);n=E(o,r),o.forEach(f)},m(t,r){u(t,e,r),l(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&x(n,r)},d(t){t&&f(e)}}}function pt(e){let n,r,o,s,c,a,i,p,$,_=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ft(e);return{c(){r=m(),o=d("h1"),s=h(e[0]),c=m(),a=d("p"),i=h(_),p=m(),A&&A.c(),$=g(),this.h()},l(t){S('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(f),r=w(t),o=b(t,"H1",{class:!0});var n=v(o);s=E(n,e[0]),n.forEach(f),c=w(t),a=b(t,"P",{class:!0});var l=v(a);i=E(l,_),l.forEach(f),p=w(t),A&&A.l(t),$=g(),this.h()},h(){y(o,"class","svelte-8od9u6"),y(a,"class","svelte-8od9u6")},m(t,e){u(t,r,e),u(t,o,e),l(o,s),u(t,c,e),u(t,a,e),l(a,i),u(t,p,e),A&&A.m(t,e),u(t,$,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&x(s,t[0]),2&e&&_!==(_=t[1].message+"")&&x(i,_),t[2]&&t[1].stack?A?A.p(t,e):(A=ft(t),A.c(),A.m($.parentNode,$)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&f(r),t&&f(o),t&&f(c),t&&f(a),t&&f(p),A&&A.d(t),t&&f($)}}}function dt(t,e,n){let{status:r}=e,{error:o}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,o=t.error)},[r,o,!1]}class ht extends et{constructor(t){super(),tt(this,t,dt,pt,c,{status:0,error:1})}}function mt(t){let n,r,o;const s=[t[4].props];var c=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}return c&&(n=new c(a())),{c(){n&&G(n.$$.fragment),r=g()},l(t){n&&Y(n.$$.fragment,t),r=g()},m(t,e){n&&X(n,t,e),u(t,r,e),o=!0},p(t,e){const o=16&e?z(s,[F(t[4].props)]):{};if(c!==(c=t[4].component)){if(n){J();const t=n;M(t.$$.fragment,1,0,()=>{Q(t,1)}),V()}c?(n=new c(a()),G(n.$$.fragment),K(n.$$.fragment,1),X(n,r.parentNode,r)):n=null}else c&&n.$set(o)},i(t){o||(n&&K(n.$$.fragment,t),o=!0)},o(t){n&&M(n.$$.fragment,t),o=!1},d(t){t&&f(r),n&&Q(n,t)}}}function gt(t){let e,n;return e=new ht({props:{error:t[0],status:t[1]}}),{c(){G(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,r){X(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(K(e.$$.fragment,t),n=!0)},o(t){M(e.$$.fragment,t),n=!1},d(t){Q(e,t)}}}function $t(t){let e,n,r,o;const s=[gt,mt],c=[];function a(t,e){return t[0]?0:1}return e=a(t),n=c[e]=s[e](t),{c(){n.c(),r=g()},l(t){n.l(t),r=g()},m(t,n){c[e].m(t,n),u(t,r,n),o=!0},p(t,o){let i=e;e=a(t),e===i?c[e].p(t,o):(J(),M(c[i],1,1,()=>{c[i]=null}),V(),n=c[e],n||(n=c[e]=s[e](t),n.c()),K(n,1),n.m(r.parentNode,r))},i(t){o||(K(n),o=!0)},o(t){M(n),o=!1},d(t){c[e].d(t),t&&f(r)}}}function yt(t){let n,r;const o=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<o.length;t+=1)s=e(s,o[t]);return n=new ut({props:s}),{c(){G(n.$$.fragment)},l(t){Y(n.$$.fragment,t)},m(t,e){X(n,t,e),r=!0},p(t,[e]){const r=12&e?z(o,[4&e&&{segment:t[2][0]},8&e&&F(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(K(n.$$.fragment,t),r=!0)},o(t){M(n.$$.fragment,t),r=!1},d(t){Q(n,t)}}}function vt(t,e,n){let{stores:r}=e,{error:o}=e,{status:s}=e,{segments:c}=e,{level0:a}=e,{level1:i=null}=e,{notify:l}=e;var u,f,p;return u=l,R().$$.after_update.push(u),f=ot,p=r,R().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,o=t.error),"status"in t&&n(1,s=t.status),"segments"in t&&n(2,c=t.segments),"level0"in t&&n(3,a=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[o,s,c,a,i,r,l]}class bt extends et{constructor(t){super(),tt(this,t,vt,yt,c,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[],wt=[{js:()=>import("./index.853ce893.js"),css:[]},{js:()=>import("./[country].4bf43a4a.js"),css:[]}],xt=(St=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/([^\/]+?)\/?$/,parts:[{i:1,params:t=>({country:St(t[1])})}]}]);var St;const _t="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Rt,kt,Pt=!1,Ct=[],Lt="{}";const Nt={page:function(t){const e=rt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:rt(null),session:rt(_t&&_t.session)};let qt,jt;Nt.session.subscribe(async t=>{if(qt=t,!Pt)return;jt=!0;const e=Jt(new URL(location.href)),n=Rt={},{redirect:r,props:o,branch:s}=await Wt(e);n===Rt&&await Mt(r,s,o,e.page)});let Ut,Ot=null;let It,Bt=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Tt={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Jt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(_t.baseUrl))return null;let e=t.pathname.slice(_t.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<xt.length;n+=1){const r=xt[n],o=r.pattern.exec(e);if(o){const n=Ht(t.search),s=r.parts[r.parts.length-1],c=s.params?s.params(o):{},a={host:location.host,path:e,query:n,params:c};return{href:t.href,route:r,match:o,page:a}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Kt(t,e,n,r){if(e)It=e;else{const t=Vt();Tt[It]=t,e=It=++Bt,Tt[It]=n?t:{x:0,y:0}}It=e,At&&Nt.preloading.set(!0);const o=Ot&&Ot.href===t.href?Ot.promise:Wt(t);Ot=null;const s=Rt={},{redirect:c,props:a,branch:i}=await o;if(s===Rt&&(await Mt(c,i,a,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Tt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Tt[It]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Jt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:It},"",t),Kt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(Nt.page.set(r),Nt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:Nt.page.subscribe},preloading:{subscribe:Nt.preloading.subscribe},session:Nt.session},n.level0={props:await kt},n.notify=Nt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}At=new bt({target:Ut,props:n,hydrate:!0})}Ct=e,Lt=JSON.stringify(r.query),Pt=!0,jt=!1}async function Wt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let o=null;const s={error:null,status:200,segments:[r[0]]},c={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(o&&(o.statusCode!==t||o.location!==e))throw new Error("Conflicting redirects");o={statusCode:t,location:e}},error:(t,e)=>{s.error="string"==typeof e?new Error(e):e,s.status=t}};let a;kt||(kt=_t.preloaded[0]||st.call(c,{host:n.host,path:n.path,query:n.query,params:{}},qt));let i=1;try{const o=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;a=await Promise.all(e.parts.map(async(e,a)=>{const f=r[a];if(function(t,e,n,r){if(r!==Lt)return!0;const o=Ct[t];return!!o&&(e!==o.segment||(!(!o.match||JSON.stringify(o.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(a,f,l,o)&&(u=!0),s.segments[i]=r[a+1],!e)return{segment:f};const p=i++;if(!jt&&!u&&Ct[a]&&Ct[a].part===e.i)return Ct[a];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(zt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(wt[e.i]);let m;return m=Pt||!_t.preloaded[a+1]?h?await h.call(c,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},qt):{}:_t.preloaded[a+1],s["level"+p]={component:d,props:m,segment:f,match:l,part:e.i}}))}catch(t){s.error=t,s.status=500,a=[]}return{redirect:o,props:s,branch:a}}function zt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function Gt(t){const e=Jt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Wt(e)),Ot.promise}let Yt;function Xt(t){clearTimeout(Yt),Yt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const s=Jt(o);if(s){Kt(s,null,e.hasAttribute("sapper-noscroll"),o.hash),t.preventDefault(),Dt.pushState({id:It},"",o.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Tt[It]=Vt(),t.state){const e=Jt(new URL(location.href));e?Kt(e,t.state.id):location.href=location.href}else Bt=Bt+1,function(t){It=t}(Bt),Dt.replaceState({id:It},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){Ut=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:Bt},"",e);const n=new URL(location.href);if(_t.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:o,preloaded:s,status:c,error:a}=_t;kt||(kt=s&&s[0]),Mt(null,[],{error:a,status:c,session:o,level0:{props:kt},level1:{props:{status:c,error:a},component:ht},segments:s},{host:e,path:n,query:Ht(r),params:{}})}();const r=Jt(n);return r?Kt(r,Bt,!0,t):void 0});export{V as A,Q as B,z as C,F as D,g as E,p as F,e as G,et as S,m as a,v as b,b as c,f as d,d as e,w as f,E as g,y as h,tt as i,u as j,l as k,x as l,$ as m,t as n,k as o,W as p,S as q,o as r,c as s,h as t,K as u,M as v,G as w,Y as x,X as y,J as z};