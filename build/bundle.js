var app=function(){"use strict";function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function i(){return Object.create(null)}function s(t){t.forEach(n)}function a(t){return"function"==typeof t}function o(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function l(t,e,n){t.$$.on_destroy.push(function(t,e){const n=t.subscribe(e);return n.unsubscribe?()=>n.unsubscribe():n}(e,n))}function c(t,e,n){if(t){const i=r(t,e,n);return t[0](i)}}function r(t,n,i){return t[1]?e({},e(n.$$scope.ctx,t[1](i?i(n):{}))):n.$$scope.ctx}function p(t,n,i,s){return t[1]?e({},e(n.$$scope.changed||{},t[1](s?s(i):{}))):n.$$scope.changed||{}}function d(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function u(t,e,n){t.insertBefore(e,n||null)}function m(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function h(t){return document.createTextNode(t)}function f(){return h(" ")}function g(){return h("")}function b(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}let $;function w(t){$=t}function k(){if(!$)throw new Error("Function called outside component initialization");return $}function y(t,e){k().$$.context.set(t,e)}function x(t){return k().$$.context.get(t)}const S=[],A=[],R=[],P=[],L=Promise.resolve();let M=!1;function E(t){R.push(t)}function T(){const t=new Set;do{for(;S.length;){const t=S.shift();w(t),N(t.$$)}for(;A.length;)A.pop()();for(let e=0;e<R.length;e+=1){const n=R[e];t.has(n)||(n(),t.add(n))}R.length=0}while(S.length);for(;P.length;)P.pop()();M=!1}function N(t){null!==t.fragment&&(t.update(t.dirty),s(t.before_update),t.fragment&&t.fragment.p(t.dirty,t.ctx),t.dirty=null,t.after_update.forEach(E))}const B=new Set;let _;function H(){_={r:0,c:[],p:_}}function I(){_.r||s(_.c),_=_.p}function O(t,e){t&&t.i&&(B.delete(t),t.i(e))}function W(t,e,n,i){if(t&&t.o){if(B.has(t))return;B.add(t),_.c.push(()=>{B.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}}function J(t){return"object"==typeof t&&null!==t?t:{}}function C(t){t&&t.c()}function D(t,e,i){const{fragment:o,on_mount:l,on_destroy:c,after_update:r}=t.$$;o&&o.m(e,i),E(()=>{const e=l.map(n).filter(a);c?c.push(...e):s(e),t.$$.on_mount=[]}),r.forEach(E)}function U(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx={})}function j(t,e){t.$$.dirty||(S.push(t),M||(M=!0,L.then(T)),t.$$.dirty=i()),t.$$.dirty[e]=!0}function q(e,n,a,o,l,c){const r=$;w(e);const p=n.props||{},d=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:l,bound:i(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(r?r.$$.context:[]),callbacks:i(),dirty:null};let u=!1;d.ctx=a?a(e,p,(t,n,i=n)=>(d.ctx&&l(d.ctx[t],d.ctx[t]=i)&&(d.bound[t]&&d.bound[t](i),u&&j(e,t)),n)):p,d.update(),u=!0,s(d.before_update),d.fragment=!!o&&o(d.ctx),n.target&&(n.hydrate?d.fragment&&d.fragment.l(function(t){return Array.from(t.childNodes)}(n.target)):d.fragment&&d.fragment.c(),n.intro&&O(e.$$.fragment),D(e,n.target,n.anchor),T()),w(r)}class V{$destroy(){U(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const F=[];function K(e,n=t){let i;const s=[];function a(t){if(o(e,t)&&(e=t,i)){const t=!F.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),F.push(n,e)}if(t){for(let t=0;t<F.length;t+=2)F[t][0](F[t+1]);F.length=0}}}return{set:a,update:function(t){a(t(e))},subscribe:function(o,l=t){const c=[o,l];return s.push(c),1===s.length&&(i=n(a)||t),o(e),()=>{const t=s.indexOf(c);-1!==t&&s.splice(t,1),0===s.length&&(i(),i=null)}}}}function z(e,n,i){const o=!Array.isArray(e),l=o?[e]:e,c=n.length<2;return{subscribe:K(i,e=>{let i=!1;const r=[];let p=0,d=t;const u=()=>{if(p)return;d();const i=n(o?r[0]:r,e);c?e(i):d=a(i)?i:t},m=l.map((t,e)=>t.subscribe(t=>{r[e]=t,p&=~(1<<e),i&&u()},()=>{p|=1<<e}));return i=!0,u(),function(){s(m),d()}}).subscribe}}const Q={},G={};function X(t){return{...t.location,state:t.history.state,key:t.history.state&&t.history.state.key||"initial"}}const Y=function(t,e){const n=[];let i=X(t);return{get location(){return i},listen(e){n.push(e);const s=()=>{i=X(t),e({location:i,action:"POP"})};return t.addEventListener("popstate",s),()=>{t.removeEventListener("popstate",s);const i=n.indexOf(e);n.splice(i,1)}},navigate(e,{state:s,replace:a=!1}={}){s={...s,key:Date.now()+""};try{a?t.history.replaceState(s,null,e):t.history.pushState(s,null,e)}catch(n){t.location[a?"replace":"assign"](e)}i=X(t),n.forEach(t=>t({location:i,action:"PUSH"}))}}}(Boolean("undefined"!=typeof window&&window.document&&window.document.createElement)?window:function(t="/"){let e=0;const n=[{pathname:t,search:""}],i=[];return{get location(){return n[e]},addEventListener(t,e){},removeEventListener(t,e){},history:{get entries(){return n},get index(){return e},get state(){return i[e]},pushState(t,s,a){const[o,l=""]=a.split("?");e++,n.push({pathname:o,search:l}),i.push(t)},replaceState(t,s,a){const[o,l=""]=a.split("?");n[e]={pathname:o,search:l},i[e]=t}}}}()),Z=/^:(.+)/,tt=4,et=3,nt=2,it=1,st=1;function at(t){return"*"===t[0]}function ot(t){return t.replace(/(^\/+|\/+$)/g,"").split("/")}function lt(t){return t.replace(/(^\/+|\/+$)/g,"")}function ct(t,e){return{route:t,score:t.default?0:ot(t.path).reduce((t,e)=>(t+=tt,!function(t){return""===t}(e)?!function(t){return Z.test(t)}(e)?at(e)?t-=tt+it:t+=et:t+=nt:t+=st,t),0),index:e}}function rt(t,e){let n,i;const[s]=e.split("?"),a=ot(s),o=""===a[0],l=function(t){return t.map(ct).sort((t,e)=>t.score<e.score?1:t.score>e.score?-1:t.index-e.index)}(t);for(let t=0,s=l.length;t<s;t++){const s=l[t].route;let c=!1;if(s.default){i={route:s,params:{},uri:e};continue}const r=ot(s.path),p={},d=Math.max(a.length,r.length);let u=0;for(;u<d;u++){const t=r[u],e=a[u];if(void 0!==t&&at(t)){p["*"===t?"*":t.slice(1)]=a.slice(u).map(decodeURIComponent).join("/");break}if(void 0===e){c=!0;break}let n=Z.exec(t);if(n&&!o){const t=decodeURIComponent(e);p[n[1]]=t}else if(t!==e){c=!0;break}}if(!c){n={route:s,params:p,uri:"/"+a.slice(0,u).join("/")};break}}return n||i||null}function pt(t,e){return`${lt("/"===e?t:`${lt(t)}/${lt(e)}`)}/`}function dt(t){let e;const n=t.$$slots.default,i=c(n,t,null);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,e){i&&i.p&&t.$$scope&&i.p(p(n,e,t,null),r(n,e,null))},i(t){e||(O(i,t),e=!0)},o(t){W(i,t),e=!1},d(t){i&&i.d(t)}}}function ut(t,e,n){let i,s,a,{basepath:o="/"}=e,{url:c=null}=e;const r=x(Q),p=x(G),d=K([]);l(t,d,t=>n("$routes",a=t));const u=K(null);let m=!1;const v=r||K(c?{pathname:c}:Y.location);l(t,v,t=>n("$location",s=t));const h=p?p.routerBase:K({path:o,uri:o});l(t,h,t=>n("$base",i=t));const f=z([h,u],([t,e])=>{if(null===e)return t;const{path:n}=t,{route:i,uri:s}=e;return{path:i.default?n:i.path.replace(/\*.*$/,""),uri:s}});var g;r||(g=()=>Y.listen(t=>{v.set(t.location)}),k().$$.on_mount.push(g),y(Q,v)),y(G,{activeRoute:u,base:h,routerBase:f,registerRoute:function(t){const{path:e}=i;let{path:n}=t;if(t._path=n,t.path=pt(e,n),"undefined"==typeof window){if(m)return;const e=function(t,e){return rt([t],e)}(t,s.pathname);e&&(u.set(e),m=!0)}else d.update(e=>(e.push(t),e))},unregisterRoute:function(t){d.update(e=>{const n=e.indexOf(t);return e.splice(n,1),e})}});let{$$slots:b={},$$scope:$}=e;return t.$set=t=>{"basepath"in t&&n("basepath",o=t.basepath),"url"in t&&n("url",c=t.url),"$$scope"in t&&n("$$scope",$=t.$$scope)},t.$$.update=(t={$base:1,$routes:1,$location:1})=>{if(t.$base){const{path:t}=i;d.update(e=>(e.forEach(e=>e.path=pt(t,e._path)),e))}if(t.$routes||t.$location){const t=rt(a,s.pathname);u.set(t)}},{basepath:o,url:c,routes:d,location:v,base:h,$$slots:b,$$scope:$}}class mt extends V{constructor(t){super(),q(this,t,ut,dt,o,{basepath:0,url:0})}}const vt=({routeParams:t,$location:e})=>({params:t,location:e}),ht=({routeParams:t,$location:e})=>({params:t,location:e});function ft(t){let e,n,i,s;const a=[bt,gt],o=[];function l(t,e){return null!==e.component?0:1}return e=l(0,t),n=o[e]=a[e](t),{c(){n.c(),i=g()},m(t,n){o[e].m(t,n),u(t,i,n),s=!0},p(t,s){let c=e;(e=l(0,s))===c?o[e].p(t,s):(H(),W(o[c],1,1,()=>{o[c]=null}),I(),(n=o[e])||(n=o[e]=a[e](s)).c(),O(n,1),n.m(i.parentNode,i))},i(t){s||(O(n),s=!0)},o(t){W(n),s=!1},d(t){o[e].d(t),t&&m(i)}}}function gt(t){let e;const n=t.$$slots.default,i=c(n,t,ht);return{c(){i&&i.c()},m(t,n){i&&i.m(t,n),e=!0},p(t,e){i&&i.p&&(t.$$scope||t.routeParams||t.$location)&&i.p(p(n,e,t,vt),r(n,e,ht))},i(t){e||(O(i,t),e=!0)},o(t){W(i,t),e=!1},d(t){i&&i.d(t)}}}function bt(t){let n,i;const s=[{location:t.$location},t.routeParams,t.routeProps];var a=t.component;function o(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(a)var l=new a(o());return{c(){l&&C(l.$$.fragment),n=g()},m(t,e){l&&D(l,t,e),u(t,n,e),i=!0},p(t,e){const i=t.$location||t.routeParams||t.routeProps?function(t,e){const n={},i={},s={$$scope:1};let a=t.length;for(;a--;){const o=t[a],l=e[a];if(l){for(const t in o)t in l||(i[t]=1);for(const t in l)s[t]||(n[t]=l[t],s[t]=1);t[a]=l}else for(const t in o)s[t]=1}for(const t in i)t in n||(n[t]=void 0);return n}(s,[t.$location&&{location:e.$location},t.routeParams&&J(e.routeParams),t.routeProps&&J(e.routeProps)]):{};if(a!==(a=e.component)){if(l){H();const t=l;W(t.$$.fragment,1,0,()=>{U(t,1)}),I()}a?(C((l=new a(o())).$$.fragment),O(l.$$.fragment,1),D(l,n.parentNode,n)):l=null}else a&&l.$set(i)},i(t){i||(l&&O(l.$$.fragment,t),i=!0)},o(t){l&&W(l.$$.fragment,t),i=!1},d(t){t&&m(n),l&&U(l,t)}}}function $t(t){let e,n,i=null!==t.$activeRoute&&t.$activeRoute.route===t.route&&ft(t);return{c(){i&&i.c(),e=g()},m(t,s){i&&i.m(t,s),u(t,e,s),n=!0},p(t,n){null!==n.$activeRoute&&n.$activeRoute.route===n.route?i?(i.p(t,n),O(i,1)):((i=ft(n)).c(),O(i,1),i.m(e.parentNode,e)):i&&(H(),W(i,1,1,()=>{i=null}),I())},i(t){n||(O(i),n=!0)},o(t){W(i),n=!1},d(t){i&&i.d(t),t&&m(e)}}}function wt(t,n,i){let s,a,{path:o=""}=n,{component:c=null}=n;const{registerRoute:r,unregisterRoute:p,activeRoute:u}=x(G);l(t,u,t=>i("$activeRoute",s=t));const m=x(Q);l(t,m,t=>i("$location",a=t));const v={path:o,default:""===o};let h={},f={};var g;r(v),"undefined"!=typeof window&&(g=()=>{p(v)},k().$$.on_destroy.push(g));let{$$slots:b={},$$scope:$}=n;return t.$set=t=>{i("$$props",n=e(e({},n),t)),"path"in t&&i("path",o=t.path),"component"in t&&i("component",c=t.component),"$$scope"in t&&i("$$scope",$=t.$$scope)},t.$$.update=(t={$activeRoute:1,$$props:1})=>{t.$activeRoute&&s&&s.route===v&&i("routeParams",h=s.params);{const{path:t,component:e,...s}=n;i("routeProps",f=s)}},{path:o,component:c,activeRoute:u,location:m,route:v,routeParams:h,routeProps:f,$activeRoute:s,$location:a,$$props:n=d(n),$$slots:b,$$scope:$}}class kt extends V{constructor(t){super(),q(this,t,wt,$t,o,{path:0,component:0})}}function yt(e){let n,i,s,a,o,l,c,r,p,d,h,g,$,w,k,y,x,S,A,R,P;return{c(){n=v("link"),i=f(),s=v("link"),a=f(),o=v("link"),l=f(),(c=v("header")).innerHTML='<h1 class="[ title h1 bold ][ inline-block right-1 vertical-middle ]">Nirmal Lankathilaka</h1> \n    <div class="[ tag-wrapper ][ top-2 vertical-middle ]" style="width: 190px;"><span class="tag medium" style="width: 190px;">Senior software engineer</span></div>',r=f(),(p=v("section")).innerHTML='<a href="https://linkedin.com/in/nirlanka" class="[ gray a ][ right-1 ]">linkedin.com/in/nirlanka</a> \n    <a href="mailto:nir@nirlanka.com" class="[ gray a ]">nir@nirlanka.com</a>',d=f(),(h=v("section")).innerHTML='<p class="thin desc">A computer engineering graduate from the University of Peradeniya with 5 years of experience in full-stack development &amp; design for mobile, web, desktop applications &amp; APIs.</p>',g=f(),($=v("section")).innerHTML='<div class="col10-1 timeline-item"><div class="timeline-graphic"><span class="timeline-circle"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">Today ← Sep. 2019</div> \n        <div class="title bottom-2"><div class="bold dark-purple">Senior software engineer</div> \n            <div class="thin dark-purple">@ <a class="a thin dark-purple" href="http://www.embla.asia/">Embla</a>  <a class="a thin dark-purple" href="http://www.microbuild.no/">/MicroBuild</a></div></div></div> \n    <div class="col10-2 timeline-item"><div class="timeline-graphic"><span class="timeline-dot"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">← Jan. 2017</div> \n        <div class="title bottom-2"><div class="bold dark-purple">Software engineer</div> \n            <div class="thin dark-purple">@ <a class="a thin dark-purple" href="http://www.embla.asia/">Embla</a>  <a class="a thin dark-purple" href="http://www.microbuild.no/">/MicroBuild</a></div></div></div> \n    <div class="col10-2 timeline-item"><div class="timeline-graphic"><span class="timeline-dot"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">Apr. 2016 ← Oct. 2015</div> \n        <div class="title bottom-2"><div class="bold dark-purple">Associate software engineer</div> \n            <div class="thin dark-purple">@ <a class="a thin dark-purple" href="https://www.99xtechnology.com/">99x technology</a>  <a class="a thin dark-purple" href="https://www.boligmappa.no/">/Boligmappa</a></div></div></div> \n    <div class="col10-2 timeline-item"><div class="timeline-graphic"><span class="timeline-dot"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">Apr. 2016 ← Oct. 2015</div> \n        <div class="title bottom-2"><div class="bold dark-purple">BSc. (Computer engineering) \n</div> \n            <div class="thin dark-purple">@ <a class="a thin dark-purple" href="https://eng.pdn.ac.lk/">University of Peradeniya</a> /<a class="a thin dark-purple" href="http://www.ce.pdn.ac.lk/">Engineering Faculty</a></div></div></div> \n    <div class="col10-2 timeline-item"><div class="timeline-graphic"><span class="timeline-dot"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">Mar. 2013 ← Sep. 2011</div> \n        <div class="title bottom-2"><div class="bold dark-purple">Trainee software engineer</div> \n            <div class="thin dark-purple">@ <span class="thin dark-purple" href="https://www.99xtechnology.com/">ePixcell Pvt Ltd</span></div></div></div> \n    <div class="col10-1 timeline-item"><div class="timeline-graphic"><span class="timeline-dot"> </span> \n            <span class="timeline-line"> </span></div> \n        <div class="gray thin bottom-1">Aug. 2011 ← Jan. 2009</div> \n        <div class="title bottom-2"><div class="bold dark-purple">Advanced Levels in mathematics, physics, chemistry</div> \n            <div class="thin dark-purple">(Sri Lanka)</div></div></div>',w=f(),(k=v("section")).innerHTML='<div class="col10-2"><h2 class="title medium dark font-2 bottom-1">Key technology experience</h2></div> \n    <div class="col10-8 tag-list" id="key-tech-exp-list"><temp><div class="tag inline-block">\n                ##<span class="invisible">,</span></div></temp></div>',y=f(),(x=v("section")).innerHTML='<div class="col10-2"><h2 class="title medium dark font-2 bottom-1">Additional experience</h2></div> \n    <div class="col10-8 tag-list" id="additional-tech-exp-list"><temp><div class="[ tag tag-lighter ][ inline-block ]">\n                ##<span class="invisible">,</span></div></temp></div>',S=f(),(A=v("div")).innerHTML='<section class="[ section ][ col10-7 bottom-1 ]"><div class="row10"><div class="col-2"><h2 class="title medium dark font-2 bottom-1">Current project</h2></div></div> \n        \n        <div class="row10 nested"><div class="col10-2"><div class="dark-blue title top-1">2017 — Today</div></div> \n            <div class="col10-8"><h3 class="h3 title dark-blue"><div class="black">Senior software engineer (SE, SSE)</div> \n                    <div>at Embla Software Innovation / MicroBuild (Dørteknikk AS)</div></h3> \n                \n                <div id="microbuild-tech-exp-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">I work for Dørteknikk AS (Norway) to design, develop and maintain a software suite of web, mobile and desktop applications.</p> \n\n                <p class="p">There I work with multiple technologies and is responsible for both web, mobile, desktop and back-end development. I am responsible for requirement gathering and communication with the project owner.</p> \n                <p class="p"><span class="bold">Website:</span> \n                    <a href="http://www.microbuild.no" class="a">microbuild.no</a></p></div></div> \n\n        <div class="row10 nested"><div class="col10-2"><div class="dark-blue title top-1">2015 — 2016</div></div> \n            <div class="col10-8"><h3 class="h3 title dark-blue"><div class="black">Associate software engineer</div> \n                    <div>at 99x Technology / Boligmappa (AS)</div></h3> \n                \n                <div id="x99xt-tech-exp-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">I worked on Boligmappa AS, a suite of web and mobile apps for tracking, management and document-gathering of electrical appliances for Norwegian homes and buildings.</p> \n\n                <p class="p">My responsibilities also included direct communication with clients and the design and development of solutions.</p> \n                <p class="p"><span class="bold">Website:</span> \n                    <a href="https://www.boligmappa.no/" class="a">boligmappa.no</a></p></div></div> \n\n        <div class="row10 nested"><div class="col10-2"><div class="dark-blue title top-1">2011 — 2013</div></div> \n            <div class="col10-8"><h3 class="h3 title dark-blue"><div class="black">Trainee software engineer</div> \n                    <div>at ePixcell Pvt Ltd</div></h3> \n                \n                <div id="epixcell-tech-exp-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">I started as a web designer and developer and moved mainly to web application development.</p> \n\n                <p class="p">We worked with a number of foreign and local clients on web apps and integrations that helped in financial and enterprise solutions.</p></div></div> \n        \n        <div class="row10 top-2"><div class="col-2"><h2 class="title medium dark font-2 bottom-1">Other projects</h2></div></div> \n        \n        <div class="row10 nested"><div class="col10-2"><div class="col10-2"><div class="dark-blue title top-1">2019</div></div></div> \n            <div class="col10-8"><h2 class="dark-purple title h3"><span class="bold">Anantara AR Experience</span> (for Triolly Pvt. Ltd.)</h2> \n                <div id="anantara-tech-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">An augmented-reality virtual tour app for Anantara Kalutara Resort by Anantara Hotels, Resorts &amp; Spas, a successful hotel chain covering a dozen countries.</p> \n                <p class="p">I developed this using the Unity engine, Vuforia augmented reality and .NET. We used BLE Bluetooth beacons for automating the virtual tour experience based on location. I developed the proof-of-concept in React Native and Viro AR.\n                </p> \n                <div class="p"><div><span class="bold">Apple:</span> \n                        <a href="https://apps.apple.com/lk/app/anantara-ar-experience/id1474047633" class="a">Anantara AR Experience on App Store</a></div> \n                    <div><span class="bold">Android:</span> \n                        <a href="https://play.google.com/store/apps/details?id=com.triolly.anantaraexp&amp;hl=en_CA" class="a">Anantara AR Experience on Play Store</a></div></div></div></div> \n\n        <div class="row10 nested"><div class="col10-2"><div class="col10-2"><div class="dark-blue title top-1">2017</div></div></div> \n            <div class="col10-8"><h2 class="dark-purple title h3"><span class="bold">Donate LK</span></h2> \n                <div id="donatelk-tech-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">An augmented-reality virtual tour app for Anantara Kalutara Resort by Anantara Hotels, Resorts &amp; Spas, a successful hotel chain covering a dozen countries.</p> \n                <p class="p">I developed this using the Unity engine, Vuforia augmented reality and .NET. We used BLE Bluetooth beacons for automating the virtual tour experience based on location. I developed the proof-of-concept in React Native and Viro AR.</p></div></div> \n\n        <div class="row10 nested"><div class="col10-2"><div class="col10-2"><div class="dark-blue title top-1">2017</div></div></div> \n            <div class="col10-8"><h2 class="dark-purple title h3"><span class="bold">Ongoing LK</span></h2> \n                <div id="ongoinglk-tech-list" class="tag-list top-1 bottom-1"><temp><div class="[ tag ][ inline-block ]">\n                            ##<span class="invisible">,</span></div></temp></div> \n                \n                <p class="p">Responsive web app and mobile app for keeping up with tickets, offers, and discounts on movies, shows, clothes, dining.</p> \n                <p class="p">I used Angular and Angular Universal for developing and fast-delivering the web application, and NativeScript with Angular for the cross-platform app. We developed the back-end with NodeJS, HapiJS and MongoDB.</p> \n                <p class="p">We adhered to material design guidelines as well as responsive design principals to design a seamless experience between both mobile app and web app.</p></div></div></section> \n    \n    <section class="[ section sidebar ][ col10-3 ]"><h3 class="title medium font-2 top-1 bottom-1">Career status</h3> \n        \n        <div id="career-status-list"><temp><div class="p"><div class="inline-block min-w-100 title dark-purple bold">##</div> \n                    <div class="inline-block min-w-200 break-words">##</div></div></temp></div> \n        \n        <h3 class="title medium font-2 top-1 bottom-1">Links</h3> \n        \n        <div id="web-links-list"><temp><div class="p"><div class="inline-block min-w-100 max-w-100 title dark-purple bold">##</div> \n                    <div class="inline-block min-w-200 max-w-200 break-words"><a href="##" class="a inline">##</a></div></div></temp></div></section>',R=f(),(P=v("div")).textContent=" ",b(n,"rel","stylesheet"),b(n,"type","text/css"),b(n,"href","reset.css"),b(s,"rel","stylesheet"),b(s,"type","text/css"),b(s,"href","simple-grid.css"),b(o,"rel","stylesheet"),b(o,"type","text/css"),b(o,"href","home.css"),b(c,"class","[ section top-1 ]"),b(p,"class","section light top-1"),b(h,"class","[ normal ][ section top-1 ]"),b($,"class","[ section timeline ][ top-2 row10 ]"),b(k,"class","[ section key-tech-exp top-2 ][ row10 ]"),b(x,"class","[ section additional-tech-exp top-1 ][ row10 ]"),b(A,"class","top-2 row10"),b(P,"class","bottom-2")},m(t,e){u(t,n,e),u(t,i,e),u(t,s,e),u(t,a,e),u(t,o,e),u(t,l,e),u(t,c,e),u(t,r,e),u(t,p,e),u(t,d,e),u(t,h,e),u(t,g,e),u(t,$,e),u(t,w,e),u(t,k,e),u(t,y,e),u(t,x,e),u(t,S,e),u(t,A,e),u(t,R,e),u(t,P,e)},p:t,i:t,o:t,d(t){t&&m(n),t&&m(i),t&&m(s),t&&m(a),t&&m(o),t&&m(l),t&&m(c),t&&m(r),t&&m(p),t&&m(d),t&&m(h),t&&m(g),t&&m($),t&&m(w),t&&m(k),t&&m(y),t&&m(x),t&&m(S),t&&m(A),t&&m(R),t&&m(P)}}}function xt(t,e){const n=document.querySelector(`#${t} temp`).innerHTML;document.querySelector(`#${t}`).innerHTML=e.split(", ").map(t=>n.replace("##",t)).join(" ")}function St(t,e){const n=document.querySelector(`#${t} temp`).innerHTML;document.querySelector(`#${t}`).innerHTML=e.map(t=>{let e=n.substr(0);return t.forEach(t=>e=e.replace("##",t)),e}).join(" ")}function At(t){return setTimeout(()=>{xt("key-tech-exp-list","Javascript, C#, Angular, React Native, MongoDB, NodeJS, ASP.NET WebApi2, WPF, Ionic, Microsoft SQL"),xt("additional-tech-exp-list","UX, Svelte, Typescript, Linux, WebTorrent, WebRTC, Python, Unity game engine, web security, compiler design, GraphQL, chat bots, Coffeescript, augmented reality, evolutionary algorithms"),xt("microbuild-tech-exp-list","Angular, ASP.NET WebApi2, MongoDB, Azure, Ionic, Stencil, WebRTC, Android, iOS, WPF"),xt("x99xt-tech-exp-list","AngularJS, NodeJS, ASP.NET WebApi2, MS SQL, SOAP, Xamarin"),xt("epixcell-tech-exp-list","JavaScript, NodeJS, MongoDB, MySQL"),xt("anantara-tech-list","Unity3d, Vuforia, .NET Mono, NodeJS, MongoDB, Android, iOS, React Native, Viro AR"),xt("donatelk-tech-list","React Native, Flow, MongoDB, NodeJS, Microsoft Cognitive Services, Google Maps, Android, iOS"),xt("ongoinglk-tech-list","Angular, Angular Material, NodeJS, MongoDB, NativeScript, HapiJS"),St("career-status-list",[["Role","Senior software engineer"],["Degree","BSc. (computer engineering)"]]),St("web-links-list",[["E-mail","nir@nirlanka.com","mailto:nir@nirlanka.com"],["LinkedIn","linkedin.com/in/nirlanka","https://linkedin.com/in/nirlanka"],["GitHub","github.com/nirlanka","https://github.com/nirlanka"],["Blog","evildino.com","https://evildino.com"],["Stack Overflow","stackoverflow.com/users/1056055/nirmall","https://stackoverflow.com/users/1056055/nirmall"]].map(t=>[t[0],t[2],t[1]]))},0),{}}class Rt extends V{constructor(t){super(),q(this,t,At,yt,o,{})}}function Pt(t){let e;const n=new Rt({});return{c(){C(n.$$.fragment)},m(t,i){D(n,t,i),e=!0},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Lt(t){let e;const n=new kt({props:{path:"",$$slots:{default:[Pt]},$$scope:{ctx:t}}});return{c(){C(n.$$.fragment)},m(t,i){D(n,t,i),e=!0},p(t,e){const i={};t.$$scope&&(i.$$scope={changed:t,ctx:e}),n.$set(i)},i(t){e||(O(n.$$.fragment,t),e=!0)},o(t){W(n.$$.fragment,t),e=!1},d(t){U(n,t)}}}function Mt(t){let e,n;const i=new mt({props:{$$slots:{default:[Lt]},$$scope:{ctx:t}}});return{c(){e=v("main"),C(i.$$.fragment)},m(t,s){u(t,e,s),D(i,e,null),n=!0},p(t,e){const n={};t.$$scope&&(n.$$scope={changed:t,ctx:e}),i.$set(n)},i(t){n||(O(i.$$.fragment,t),n=!0)},o(t){W(i.$$.fragment,t),n=!1},d(t){t&&m(e),U(i)}}}return new class extends V{constructor(t){super(),q(this,t,null,Mt,o,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
