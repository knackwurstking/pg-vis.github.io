var ge=Object.defineProperty;var fe=(o,t,e)=>t in o?ge(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(fe(o,typeof t!="symbol"?t+"":t,e),e),Kt=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var a=(o,t,e)=>(Kt(o,t,"read from private field"),e?e.call(o):t.get(o)),f=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)},b=(o,t,e,i)=>(Kt(o,t,"write to private field"),i?i.call(o,e):t.set(o,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const be="modulepreload",ve=function(o){return"/pg-vis.github.io/"+o},Qt={},ye=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.all(e.map(d=>{if(d=ve(d),d in Qt)return;Qt[d]=!0;const h=d.endsWith(".css"),v=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${v}`))return;const p=document.createElement("link");if(p.rel=h?"stylesheet":be,h||(p.as="script",p.crossOrigin=""),p.href=d,l&&p.setAttribute("nonce",l),document.head.appendChild(p),h)return new Promise((u,g)=>{p.addEventListener("load",u),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${d}`)))})}))}return s.then(()=>t()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})};function we(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:l}=o;let d,h;const v=async(u=!0)=>{await h};async function p(){if("serviceWorker"in navigator){if(d=await ye(()=>import("./workbox-window.prod.es5-D5gOYdM7.js"),[]).then(({Workbox:u})=>new u("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(u=>{l==null||l(u)}),!d)return;d.addEventListener("activated",u=>{(u.isUpdate||u.isExternal)&&window.location.reload()}),d.addEventListener("installed",u=>{u.isUpdate||i==null||i()}),d.register({immediate:t}).then(u=>{r?r("/pg-vis.github.io/sw.js",u):s==null||s(u)}).catch(u=>{l==null||l(u)})}}return h=p(),v}var y;class C{constructor(){f(this,y,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return a(this,y)[t]||(a(this,y)[t]=[]),a(this,y)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!a(this,y)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,s=0;for(const r of a(this,y)[t])r===e&&(a(this,y)[t].splice(s,1),i=!0),s++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(a(this,y)[t])for(const i of a(this,y)[t])i(e);return this}}y=new WeakMap;function Ut(o,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,o.currentTarget.appendChild(e);const i=o.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${o.clientY-i.top}px`,e.style.left=`${o.clientX-i.left}px`);const s=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function _t(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const ke={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Yt(o,t={}){t={...ke,...t};let e;const i=r=>{e=Ut(r,t)},s=()=>{_t(e)};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.useClick===!0?o.addEventListener("click",r=>{e=Ut(r,t),_t(e)}):(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",s),o.addEventListener("pointerleave",s)),()=>{o.classList.remove("ripple-container"),o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",s),o.removeEventListener("pointerleave",s)}}const c=String.raw;class m{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ht="1",xe=c`
<style></style>
<slot></slot>
`;let Le=class{constructor(t){this.root=t}get flex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Ht}set flex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}};const B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=xe,this.cleanup=new m,this.ui=new Le(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Ht});break}}updateStyle({flex:t=Ht}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};n(B,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",B)}),n(B,"observedAttributes",["flex"]);let H=B;const Rt="0",Ce=c`
<style></style>
<slot></slot>
`;let Se=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||Rt}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const z=class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ce,this.cleanup=new m,this.ui=new Se(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Rt});break}}updateStyle({gap:t=Rt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                display: flex !important;
                flex-flow: row nowrap;
                position: relative !important;
                width: 100%;
            }

            :host > ::slotted(*) {
                margin: 0 ${t} !important;
            }

            :host > ::slotted(*:first-child) {
                margin-left: 0 !important;
            }

            :host > ::slotted(*:last-child) {
                margin-right: 0 !important;
            }
        `}};n(z,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",z)}),n(z,"observedAttributes",["gap"]);let W=z;const qt="0",Ae=c`
<style></style>
<slot></slot>
`;let Ee=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||qt}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ae,this.cleanup=new m,this.ui=new Ee(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||qt});break}}updateStyle({gap:t=qt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                display: flex !important;
                flex-flow: column nowrap;
                position: relative !important;
                width: 100%;
                height: fit-content;
            }

            :host > ::slotted(*) {
                margin: ${t} 0 !important;
            }

            :host > ::slotted(*:first-child) {
                margin-top: 0 !important;
            }

            :host > ::slotted(*:last-child) {
                margin-bottom: 0 !important;
            }
        `}};n(j,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",j)}),n(j,"observedAttributes",["gap"]);let Y=j;const $e=c`
<style>
    * { box-sizing: border-box; }

    :host {
        display: flex !important;
        position: absolute !important;
        z-index: 100;
        background-color: var(--ui-backdrop-bgColor);
        backdrop-filter: var(--ui-backdropFilter);
        overflow: hidden;
        user-select: none;
    }

    :host([position="top"]) {
        top: 0;
        left: 0;
        width: 100%;
        height: var(--ui-app-bar-height);
        border-bottom: 1px solid var(--ui-borderColor);
    }

    :host > ui-flex-grid-row {
        width: 100%;
        height: 100%;
        align-items: center;
        justify-content: space-between;
    }

    :host > ui-flex-grid-row > * {
        height: 100%;
    }

    :host > ui-flex-grid-row > *:nth-child(1),
    :host > ui-flex-grid-row > *:nth-child(3) {
        width: fit-content;
    }

    :host > ui-flex-grid-row > [slot="left"] {
        margin-left: 0 !important;
    }

    :host > ui-flex-grid-row > [slot="center"] {
        width: 100%;
    }

    :host > ui-flex-grid-row > [slot="right"] {
        margin-right: 0 !important;
        justify-content: flex-end;
    }
</style>

<ui-flex-grid-row gap="0.25rem">
    <ui-flex-grid-row gap="0.25rem">
        <slot name="left"></slot>
    </ui-flex-grid-row>

    <ui-flex-grid-row gap="0.25rem" style="overflow: hidden;">
        <slot name="center"></slot>
    </ui-flex-grid-row>

    <ui-flex-grid-row gap="0.25rem">
        <slot name="right"></slot>
    </ui-flex-grid-row>
</ui-flex-grid-row>
`;var M,ee;let Me=(ee=class{constructor(t){f(this,M,void 0);b(this,M,t)}getLeftSlot(){return[...a(this,M).querySelectorAll('[slot="left"]')]}getCenterSlot(){return[...a(this,M).querySelectorAll('[slot="center"]')]}getRightSlot(){return[...a(this,M).querySelectorAll('[slot="right"]')]}},M=new WeakMap,ee);const nt=class nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=$e,this.cleanup=new m,this.ui=new Me(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(nt,"register",()=>{W.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",nt)});let Nt=nt;const Te=c`
<style>
    * { box-sizing: border-box; }

    :host {
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: relative !important;
        padding: var(--ui-spacing) calc(var(--ui-spacing) * 2.5);
        border: 1px solid currentColor;
        border-radius: var(--ui-radius);
        overflow: hidden;
        text-transform: capitalize;
        cursor: pointer;
        outline: none;
        user-select: none;
        font-size: 1.1rem;
        font-weight: 450;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-button-fontVariation);
    }

    :host([variant="full"]) {
        border: none;
    }

    :host([variant="full"][color="primary"]) {
        background-color: var(--ui-primary-bgColor);
        color: var(--ui-primary-color);
    }

    :host([variant="full"][color="secondary"]) {
        background-color: var(--ui-secondary-bgColor);
        color: var(--ui-secondary-color);
    }

    :host([variant="full"][color="destructive"]) {
        background-color: var(--ui-destructive-bgColor);
        color: var(--ui-destructive-color);
    }

    :host([variant="outline"]) {
        border-color: currentColor;
        background-color: transparent;
    }

    :host([variant="outline"][color="primary"]) {
        color: var(--ui-primary-bgColor);
    }

    :host([variant="outline"][color="secondary"]) {
        color: var(--ui-secondary-bgColor);
    }

    :host([variant="outline"][color="destructive"]) {
        color: var(--ui-destructive-bgColor);
    }

    :host([variant="ghost"]) {
        border-color: transparent;
        background-color: transparent;
        font-weight: 900;
    }

    :host([variant="ghost"][color="primary"]) {
        color: var(--ui-primary-bgColor);
    }

    :host([variant="ghost"][color="secondary"]) {
        color: var(--ui-secondary-bgColor);
    }

    :host([variant="ghost"][color="destructive"]) {
        color: var(--ui-destructive-bgColor);
    }

    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
        background-color: transparent;
        opacity: 0.25;
        cursor: default;
        pointer-events: none;
    }
</style>

<slot></slot>
`;let He=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new C,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get variant(){return this.root.getAttribute("variant")}set variant(t){this.root.setAttribute("variant",t)}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Yt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const G=class G extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Te,this.setAttribute("role","button"),this.cleanup=new m,this.ui=new He(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};n(G,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",G)}),n(G,"observedAttributes",["no-ripple","color"]);let Q=G;const Re=c`
<style>
    * { box-sizing: border-box; }

    :host {
        display: flex !important;
        align-items: center;
        justify-content: center;
        position: relative;
        width: 2rem;
        height: 2rem;
        padding: calc(var(--ui-spacing) / 2);
        border: 1px solid currentColor;
        border-radius: var(--ui-radius);
        outline: none;
        overflow: hidden;
        cursor: pointer;
        user-select: none;
        font-size: 1.1rem;
        font-weight: 450;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-button-fontVariation);
    }

    :host([ghost]) {
        border-color: transparent !important;
        box-shadow: none;
        font-weight: 900;
    }

    :host([color="primary"]) {
        color: var(--ui-primary-bgColor);
        border-color: var(--ui-primary-bgColor);
    }

    :host([color="secondary"]) {
        color: var(--ui-secondary-bgColor);
        border-color: var(--ui-secondary-bgColor);
    }

    :host([color="destructive"]) {
        color: var(--ui-destructive-bgColor);
        border-color: var(--ui-destructive-bgColor);
    }

    /* :disabled */

    :host([disabled]),
    :host([disabled]:hover),
    :host([disabled]:active) {
        opacity: 0.25;
        cursor: default;
        pointer-events: none;
    }
</style>

<slot></slot>
`;let qe=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new C,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get ghost(){return this.root.hasAttribute("ghost")}set ghost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Yt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const I=class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Re,this.setAttribute("role","button"),this.cleanup=new m,this.ui=new qe(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};n(I,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",I)}),n(I,"observedAttributes",["no-ripple","color"]);let X=I;const Ne=c`
<style>
    * { box-sizing: border-box; }

    :host {
        display: block;
        width: 100%;
        max-width: 65rem;
        margin: 0 auto !important;
        padding: var(--ui-spacing);
    }
</style>

<slot></slot>
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ne,this.cleanup=new m}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(lt,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",lt)});let Dt=lt;const De=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 52 52"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"
    />
</svg>
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=De}};n(ut,"register",()=>{customElements.get("svg-back-arrow")||customElements.define("svg-back-arrow",ut)});let Pt=ut;const Pe=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g clip-path="url(#clip0_429_11083)">
        <path
            d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
    <defs>
        <clipPath id="clip0_429_11083">
            <rect width="24" height="24" fill="none" />
        </clipPath>
    </defs>
</svg>
`,ct=class ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Pe}};n(ct,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",ct)});let Bt=ct;const Be=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"
        fill="currentColor"
    />
    <path
        d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"
        fill="currentColor"
    />
</svg>
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Be}};n(ht,"register",()=>{customElements.get("svg-recycle")||customElements.define("svg-recycle",ht)});let zt=ht;const ze=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
`,dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ze}};n(dt,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",dt)});let U=dt;const je=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
`,pt=class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=je}};n(pt,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",pt)});let jt=pt;const Ge=c`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 6.75C15 5.50736 16.0074 4.5 17.25 4.5C18.4926 4.5 19.5 5.50736 19.5 6.75C19.5 7.99264 18.4926 9 17.25 9C16.0074 9 15 7.99264 15 6.75ZM17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 7.00234 13.5249 7.24885 13.5724 7.48722L9.77578 9.78436C9.09337 8.85401 7.99222 8.25 6.75 8.25C4.67893 8.25 3 9.92893 3 12C3 14.0711 4.67893 15.75 6.75 15.75C8.10023 15.75 9.28379 15.0364 9.9441 13.9657L13.5866 16.4451C13.5299 16.7044 13.5 16.9737 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.9988 13.5 14.8907 14.1128 14.2095 15.0546L10.4661 12.5065C10.4884 12.3409 10.5 12.1718 10.5 12C10.5 11.7101 10.4671 11.4279 10.4049 11.1569L14.1647 8.88209C14.8415 9.85967 15.971 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75C21 4.67893 19.3211 3 17.25 3ZM15 17.25C15 16.0074 16.0074 15 17.25 15C18.4926 15 19.5 16.0074 19.5 17.25C19.5 18.4926 18.4926 19.5 17.25 19.5C16.0074 19.5 15 18.4926 15 17.25ZM4.5 12C4.5 10.7574 5.50736 9.75 6.75 9.75C7.99264 9.75 9 10.7574 9 12C9 13.2426 7.99264 14.25 6.75 14.25C5.50736 14.25 4.5 13.2426 4.5 12Z"
        fill="currentColor"
    />
</svg>
`,mt=class mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ge}};n(mt,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",mt)});let Gt=mt;const Ie=c`
<style>
    * { box-sizing: border-box; }

    :host dialog * {
        box-sizing: border-box;
    }

    dialog {
        position: fixed !important;

        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        max-width: 100%;
        max-height: 100%;

        margin: 0;
        padding: 0;

        border: none;
        outline: none;

        background-color: transparent;

        -ms-overflow-style: none;
        scrollbar-width: none;

        z-index: 999;
    }

    dialog::-webkit-scrollbar {
        display: none;
    }

    dialog::backdrop {
        background-color: var(--ui-backdrop-bgColor);
        backdrop-filter: var(--ui-backdropFilter);
    }

    dialog > .container {
        background-color: var(--ui-bgColor);
        color: var(--ui-color);

        border: 1px solid var(--ui-borderColor);
        border-radius: var(--ui-radius);

        padding: var(--ui-spacing);

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        position: relative;
    }

    :host([fullscreen]) dialog {
        width: 100%;
        height: 100%;
    }

    :host([fullscreen]) dialog > .container {
        width: calc(100% - var(--ui-spacing) * 2);
        height: calc(100% - (env(safe-area-inset-top, 0) + env(safe-area-inset-bottom, 0) + (var(--ui-spacing) * 2)));

        margin: var(--ui-spacing);
        margin-top: calc(env(safe-area-inset-top, 0) + var(--ui-spacing));
        margin-bottom: calc(env(safe-area-inset-bottom, 0) + var(--ui-spacing));
    }

    /*
     * Header Styles
     */
  
    .header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-top-right-radius: var(--ui-radius);
        border-top-left-radius: var(--ui-radius);

        width: 100%;
        height: var(--ui-dialog-header-height);
    }

    .header h4 {
        margin: auto 0;
    }

    :host([fullscreen]) .header {
        z-index: 15;
        position: absolute;
        top: var(--ui-spacing);
        right: var(--ui-spacing);
        left: var(--ui-spacing);
        width: calc(100% - var(--ui-spacing) * 2);
    }

    /*
     * Content Styles
     */

    .content {
        padding: var(--ui-spacing);
        height: fit-content;
        min-width: fit-content;
        width: 100%;
    }

    :host([fullscreen]) .content {
        z-index: 10;
        position: absolute;
        top: calc(var(--ui-dialog-header-height) + var(--ui-spacing));
        bottom: calc(var(--ui-dialog-footer-height) + var(--ui-spacing));
        right: var(--ui-spacing);
        left: var(--ui-spacing);
        padding: unset;
        height: unset;
        width: unset;
        min-width: unset;
    }

    /*
     * Footer Styles
     */

    .footer {
        margin-top: var(--ui-spacing);
        border-bottom-right-radius: var(--ui-radius);
        border-bottom-left-radius: var(--ui-radius);

        width: 100%;
        height: var(--ui-dialog-footer-height);
    }

    :host([fullscreen]) .footer {
        z-index: 15;
        position: absolute;
        right: var(--ui-spacing);
        bottom: var(--ui-spacing);
        left: var(--ui-spacing);
        width: calc(100% - var(--ui-spacing) * 2);
    }

    .footer ui-flex-grid-row {
        height: 100%;
        flex-wrap: nowrap;
        justify-content: flex-end;
        align-items: center;
    }
</style>

<dialog>
	<div class="container">
        <div class="header">
            <span style="white-space: nowrap;"><slot name="title"></slot></span>

            <ui-icon-button style="width: var(--ui-dialog-header-height); height: 100%;" ghost>
                <svg-close></svg-close>
            </ui-icon-button>
        </div>

        <div class="content">
            <slot></slot>
        </div>

        <div class="footer">
            <ui-flex-grid-row gap="calc(var(--ui-spacing) / 2)">
                <slot name="actions"></slot>
            </ui-flex-grid-row>
        </div>
	</div>
</dialog>
`;var S,w,A,ie;let Fe=(ie=class{constructor(t,e){f(this,S,void 0);f(this,w,void 0);f(this,A,void 0);b(this,S,t),b(this,w,e),this.events=new C,b(this,A,document.createElement("h4")),a(this,A).slot="title",a(this,S).appendChild(a(this,A))}get fullscreen(){return a(this,S).hasAttribute("fullscreen")}set fullscreen(t){t?a(this,S).setAttribute("fullscreen",""):a(this,S).removeAttribute("fullscreen")}get title(){return a(this,A).innerText}set title(t){a(this,A).innerText=t}getDialogElement(){return a(this,w)}open(t=!1,e=!0){const i=a(this,w).inert;a(this,w).inert=e,t?a(this,w).showModal():a(this,w).show(),this.events.dispatch("open",null),a(this,w).inert=i}close(){a(this,w).close(),this.events.dispatch("close",null)}},S=new WeakMap,w=new WeakMap,A=new WeakMap,ie);const gt=class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ie,this.cleanup=new m,this.ui=new Fe(this,this.shadowRoot.querySelector("dialog"))}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),s=r=>{r.preventDefault()};i.addEventListener("cancel",s),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",s)})}disconnectedCallback(){this.cleanup.run()}};n(gt,"register",()=>{X.register(),Bt.register(),W.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",gt)});let It=gt;const te=150,ae=document.createElement("template");ae.innerHTML=`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: block;

            position: absolute !important;
            z-index: ${te};
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;

            overflow: hidden;

            transition: left 0s ease .5s;
        }

        :host([open]) {
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);

            left: 0;

            transition: none;
        }

        aside {
            position: absolute;
            z-index: ${te};
            top: 0;
            left: -100%;
            width: 18em;
            max-width: 100%;
            height: 100%;

            overflow-x: hidden;
            overflow-y: auto;

            -ms-overflow-style: none;
            scrollbar-width: none;

            background-color: var(--ui-card-bgColor);
            color: var(--ui-card-color);
            border-right: 1px solid var(--ui-card-borderColor);
            /*
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);
            */

            transition: left .5s ease;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`;let Oe=class{constructor(t){this.root=t,this.aside=this.root.shadowRoot.querySelector("aside"),this.events=new C}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ae.content.cloneNode(!0)),this.cleanup=new m,this.ui=new Oe(this)}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.open=!1},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};n(F,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",F)}),n(F,"observedAttributes",["open"]);let Ft=F;const Ve=c`
<style>
    :host {
        font-size: 1.1rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-primary-fontVariation);
    }
</style>

<slot></slot>
`,ft=class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ve,this.cleanup=new m}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(ft,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",ft)});let _=ft;const Je=c`
<style>
    :host {
        font-size: 0.9rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-secondary-fontVariation);
    }
</style>

<slot></slot>
`,bt=class bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Je,this.cleanup=new m}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(bt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",bt)});let R=bt;const ne=document.createElement("template");ne.innerHTML=`
    <style>
        * { box-sizing: border-box; }

        li {
            padding: var(--ui-spacing) calc(var(--ui-spacing) * 1.5);
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
        }

        ::slotted(*) {
            width: 100%;
        }
    </style>

    <li>
        <slot></slot>
    </li>
`;let Ze=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const vt=class vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ne.content.cloneNode(!0)),this.cleanup=new m,this.ui=new Ze(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(vt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",vt)});let K=vt;const le=document.createElement("template");le.innerHTML=`
    <style>
        * { box-sizing: border-box; }

        ul {
            list-style: none;
            padding: var(--ui-spacing);
            overflow: hidden;
        }

        ui-drawer-group-item:not(.visible) {
            display: none;
        }
    </style>

    <ul>
        <ui-drawer-group-item class="ui-drawer-group-title">
        </ui-drawer-group-item>

        <slot></slot>
    </ul>
`;let We=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get title(){return this.root.getAttribute("title")||null}set title(t){t?this.root.setAttribute("title",t):this.root.removeAttribute("title")}setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}};const O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(le.content.cloneNode(!0)),this.cleanup=new m,this.ui=new We(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};n(O,"register",()=>{K.register(),_.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",O)}),n(O,"observedAttributes",["title"]);let Ot=O;const ue=document.createElement("template");ue.innerHTML=`
    <style>
        :host {
            display: block;
            position: relative;
            width: 100%;
        }

        input {
            width: calc(100% - var(--ui-spacing) * 4);
            display: block;
            margin: 0;
            padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);
            border: none !important;
            border-radius: inherit;
            outline: none !important;
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-input-fontVariation);
            accent-color: var(--ui-primary-bgColor);
            background-color: transparent !important;
        }

        .container {
            width: 100%;
            border: none;
            border-bottom: 1px solid var(--ui-borderColor);
            border-radius: 0;
            transition: border-color 0.25s linear;
        }

        .container:has(input:focus) {
            border-color: var(--ui-primary-bgColor);
        }

        .container:has(input[aria-invalid]) {
            border-color: hsl(var(--ui-destructive-bgColor));
        }

        ::slotted([slot="title"]) {
            display: block;
            padding: 0 var(--ui-spacing);
            user-select: none;
            transform: translateY(calc(var(--ui-spacing) / 2));
        }
    </style>

    <div class="container">
        <slot name="title"></slot>
        <input>
    </div>
`;let Ye=class{constructor(t){this.root=t,this.events=new C,this.input=this.root.shadowRoot.querySelector("input"),this.input.type=this.root.getAttribute("type")||"text",this.input.oninput=()=>this.events.dispatch("input",this.value),this.input.onchange=()=>this.events.dispatch("change",this.value)}set title(t){let e=this.root.querySelector('[slot="title"]');t===null&&e&&(this.root.removeChild(e),e=null),e||(e=new R,e.slot="title",this.root.appendChild(e)),e.innerHTML=t||""}get title(){var t;return((t=this.root.querySelector('[slot="title"]'))==null?void 0:t.innerHTML)||null}set type(t){this.input.type=t}get type(){return this.input.type||"text"}set value(t){this.input.value=t}get value(){switch(this.input.type){case"number":return this.input.value?new Number(this.input.value):NaN;default:return this.input.value}}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){this.input.ariaInvalid=t?"":null}get invalid(){return this.input.ariaInvalid!==null}set min(t){this.input.min=t}get min(){switch(this.input.type){case"number":return this.input.min?new Number(this.input.min):NaN;default:return this.input.min}}set max(t){this.input.max=t}get max(){switch(this.input.type){case"number":return this.input.max?new Number(this.input.max):NaN;default:return this.input.max}}};const V=class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ue.content.cloneNode(!0)),this.cleanup=new m,this.ui=new Ye(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"type":i===null?this.ui.type="text":this.ui.type=i;break;case"value":this.ui.value=this.parseNewValue(i);break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.invalid=i!==null;break;case"min":this.ui.min=this.parseNewValue(i);break;case"max":this.ui.max=this.parseNewValue(i);break}}parseNewValue(t){switch(this.ui.type){case"number":return t?new Number(t):NaN;default:return t||""}}};n(V,"register",()=>{R.register(),customElements.get("ui-input")||customElements.define("ui-input",V)}),n(V,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Vt=V;const Xe=c`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: block;
            position: relative;
            width: 100%;
        }

        input {
            width: calc(100% - var(--ui-spacing) * 4);
            display: block;
            margin: 0;
            padding: var(--ui-spacing) calc(var(--ui-spacing) * 2);
            border: none !important;
            border-radius: inherit;
            outline: none !important;
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-input-fontVariation);
            accent-color: var(--ui-primary-bgColor);
            background-color: transparent !important;
        }

        .container {
            position: relative;
            width: 100%;
            border: none;
            border: 1px solid var(--ui-borderColor);
            border-radius: var(--ui-radius);
            transition: border-color 0.25s linear;
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);
        }

        .container:has(input:focus) {
            border-color: var(--ui-primary-bgColor);
        }

        .container:has(input[aria-invalid]) {
            border-color: hsl(var(--ui-destructive-bgColor));
        }

        ::slotted([slot="title"]) {
            display: block;
            padding: 0 var(--ui-spacing);
            user-select: none;
            transform: translateY(calc(var(--ui-spacing) / 2));
        }

        ui-icon-button {
            position: absolute;
            top: 0;
            right: 0;
            height: 100%;
            border-top-left-radius: 0;
            border-bottom-left-radius: 0;
        }
    </style>

    <div class="container">
        <slot name="title"></slot>
        <input type="search" />
        <ui-icon-button ghost>
            <svg-search></svg-search>
        </ui-icon-button>
    </div>
`;let Ke=class{constructor(t){this.root=t,this.events=new C,this.submit=this.root.shadowRoot.querySelector("ui-icon-button"),this.submit.ui.events.on("click",()=>{this.events.dispatch("submit",this.value)}),this.input=this.root.shadowRoot.querySelector("input"),this.input.type="text",this.input.onkeydown=e=>{e.key==="Enter"&&this.submit.click()}}set title(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)}get title(){return this.root.getAttribute("title")}set value(t){this.input.value=t}get value(){return this.input.value}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){t?this.root.setAttribute("invalid",""):this.root.removeAttribute("invalid")}get invalid(){return this.input.ariaInvalid!==null}};const J=class J extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Xe,this.cleanup=new m,this.ui=new Ke(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let s=this.querySelector('[slot="title"]');i===null&&s&&(this.removeChild(s),s=null),s||(s=new R,s.slot="title",this.appendChild(s)),s.innerHTML=i||"";break;case"value":this.ui.value=i||"";break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break}}};n(J,"register",()=>{R.register(),X.register(),U.register(),customElements.get("ui-search")||customElements.define("ui-search",J)}),n(J,"observedAttributes",["title","value","placeholder","invalid"]);let Jt=J;const Qe=c`
    <style>
        :host {
            display: block !important;
            position: absolute !important;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            opacity: 0;
            animation: fade-in 0.5s;
            transition: opacity 0.5s ease;
        }

        :host(:last-child) {
            opacity: 1;
        }

        @keyframes fade-in {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    </style>

    <slot></slot>
`;var q,se;let Ue=(se=class{constructor(t){f(this,q,void 0);b(this,q,t)}get name(){return a(this,q).getAttribute("name")}set name(t){a(this,q).setAttribute("name",t)}},q=new WeakMap,se);const yt=class yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Qe,this.cleanup=new m,this.ui=new Ue(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(yt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",yt)});let $=yt;const _e=c`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`;var E,T,N,re;let ti=(re=class{constructor(t){f(this,E,void 0);f(this,T,!1);f(this,N,{});b(this,E,t),this.events=new C,this.stack=[]}registerPage(t,e){a(this,N)[t]=e}unregisterPage(t){delete a(this,N)[t]}lock(){b(this,T,!0)}unlock(){b(this,T,!1)}clearStack(){for(;this.stackSize()>0;)a(this,E).removeChild(this.stack.pop())}stackSize(){return this.stack.length}goBack(){if(!this.stack.length||a(this,T))return;const t=a(this,E).removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||a(this,E).appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}setPage(t,e=!1){if(a(this,T))return;this.stack.push(a(this,E).appendChild(a(this,N)[t]()));let i=null;this.stack.length>1&&!e&&(i=this.stack[this.stack.length-2],i.parentElement.removeChild(i)),this.dispatchChangeEvent(i)}async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}},E=new WeakMap,T=new WeakMap,N=new WeakMap,re);const wt=class wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=_e,this.cleanup=new m,this.ui=new ti(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(wt,"register",()=>{$.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",wt)});let tt=wt;var x,L,oe;let ei=(oe=class{constructor(t){f(this,x,void 0);f(this,L,{});b(this,x,t),this.events=new C}get localStoragePrefix(){return a(this,x).getAttribute("local-storage-prefix")}set localStoragePrefix(t){a(this,x).setAttribute("local-storage-prefix",t)}get enableLocalStorage(){return a(this,x).hasAttribute("enable-local-storage")}set enableLocalStorage(t){t?a(this,x).setAttribute("enable-local-storage",""):a(this,x).removeAttribute("enable-local-storage")}get(t){return a(this,L)[t]}set(t,e,i=!1){if(i&&this.enableLocalStorage){const s=JSON.parse(localStorage.getItem(this.localStoragePrefix+t.toString())||"null");a(this,L)[t]=s??e}else a(this,L)[t]=e;this.enableLocalStorage&&localStorage.setItem(this.localStoragePrefix+t.toString(),JSON.stringify(a(this,L)[t])),this.events.dispatch(t,a(this,L)[t])}update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(a(this,L)[t]))}on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}},x=new WeakMap,L=new WeakMap,oe);const kt=class kt extends HTMLElement{constructor(){super(),this.ui=new ei(this)}};n(kt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",kt)});let D=kt;var k;class ii{constructor(){f(this,k,null);this.currentTheme=null,this.themes={}}enableAutoMode(){if(this.removeMode(),a(this,k)){this.mediaChangeHandler(a(this,k));return}b(this,k,window.matchMedia("(prefers-color-scheme: dark)")),a(this,k).addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(a(this,k))}disableAutoMode(){this.removeMedia()}addTheme(t,e){this.themes[t]=e}loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const s=document.getElementById("theme");s&&(document.head.removeChild(s),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")}removeMode(t=document.body){t.removeAttribute("data-theme")}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}}removeMedia(){a(this,k)&&(a(this,k).removeEventListener("change",this.mediaChangeHandler),b(this,k,null))}}k=new WeakMap;const Z=class Z extends HTMLElement{constructor(){super(),this.ui=new ii}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};n(Z,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Z)}),n(Z,"observedAttributes",["auto","mode"]);let Zt=Z;const xt=class xt extends It{constructor(){super(),this.ui.title="New Vis Data",this.uiStore=document.querySelector("ui-store"),this.name,this.createContent(),this.createActions()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createContent(){const t=new Y;t.ui.gap="0.5",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-input
                    name="title"
                    type="text"
                    title="Vis Data Title"
                ></ui-input>
            </ui-flex-grid-item>
        `,this.name=t.querySelector('ui-input[name="title"]'),this.appendChild(t)}createActions(){let t=new H;t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="secondary"
                variant="full"
            >Cancel</ui-button>
        `;let e=t.querySelector("ui-button");e.ui.events.on("click",()=>{this.ui.close()}),t=new H,t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="primary"
            >Submit</ui-button>
        `,e=t.querySelector("ui-button"),e.ui.events.on("click",()=>{if(this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.value,data:[]}),i)),this.ui.close()})}};n(xt,"register",()=>{Y.register(),H.register(),Vt.register(),Q.register(),D.register(),customElements.define("new-vis-data-dialog",xt)});let et=xt;function ce({alert:o,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:s=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=`
        <div class="title">${o.alert}</div>

        <div
            class="number"
            style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
        >
            ${o.from===o.to?o.from:`${o.from}..${o.to}`}
        </div>
    `,r.setAttribute("data-from",o.from.toString()),r.setAttribute("data-to",o.to.toString()),r.setAttribute("data-alert",o.alert),r.setAttribute("data-desc",o.desc.join(`
`)),r.setAttribute("data-note",o.note||""),r.onclick=s,i&&(Yt(r),r.style.cursor="pointer",r.role="button"),r}function si({alert:o}){const t=document.createElement("p");return t.style.padding="var(--ui-spacing)",t.innerText=o.desc.join(`
`),t}function ri({alert:o,onInput:t=null}){const e=document.createElement("textarea");return e.style.width="100%",e.style.height="100%",e.style.resize="none",e.value=o.note||"",e.oninput=t,e}const oi=c`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0">
        </ui-flex-grid-item>

        <ui-flex-grid-item class="desc">
        </ui-flex-grid-item>

        <ui-flex-grid-item class="note">
        </ui-flex-grid-item>
    </ui-flex-grid>
`,Lt=class Lt extends ${constructor(t){super(),this.innerHTML=oi,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.name="alert",this.events=new C,this.alert=null,this.uiStore=t}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}set(t){this.alert=t;let e=this.querySelector("ui-flex-grid-item.alert");for(;e.firstChild;)e.removeChild(e.firstChild);if(t===null)return;for(e.appendChild(ce({alert:t,container:"div",hasRipple:!1})),e=this.querySelector("ui-flex-grid-item.desc");e.firstChild;)e.removeChild(e.firstChild);for(e.appendChild(si({alert:t})),e=this.querySelector("ui-flex-grid-item.note");e.firstChild;)e.removeChild(e.firstChild);let i=null;e.appendChild(ri({alert:t,onInput:async s=>{const r=s.currentTarget.value;i!==null&&clearTimeout(i),i=setTimeout(()=>{this.alert.note=r},250)}}))}};n(Lt,"register",()=>{D.register(),Y.register(),H.register(),customElements.define("alert-page",Lt)});let it=Lt;const ai=c`
    <div
        class="no-scrollbar"
        style="
            width: 100%;
            height: 100%;
            padding-top: calc(var(--ui-app-bar-height) + var(--search-bar-height));
            overflow: auto;
            scroll-behavior: smooth;
        "
    >
        <ul></ul>
    </div>
`,Ct=class Ct extends ${constructor(t){super(),this.innerHTML=ai,this.ui.name="alert-lists",this.uiStore=t,this._alertList=null,this.pages={alert:new it(t)},this.stackLayout=document.querySelector("ui-stack-layout"),this.stackLayout.ui.registerPage(this.pages.alert.ui.name,()=>this.pages.alert)}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("search",({active:t,value:e})=>{console.debug(`[AlertListsPage] on: search: ${e}`);const i=new RegExp(e.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(s=>{if(!t){s.style.display="flex";return}if(this.is(this.getAlertFromLI(s),i)){s.style.display="flex";return}s.style.display="none"})})),this.cleanup.add(this.pages.alert.events.on("change",()=>{console.debug('[AlertListsPage] on: alert page change, update "alertLists"'),this.uiStore.ui.update("alertLists",t=>{const e=t.findIndex(i=>i.title===this.alertList.title);return e>=0&&(t[e]=this.alertList),t})})),this.cleanup.add(this.uiStore.ui.on("alertLists",()=>{console.debug('[AlertListsPage] on: "alertLists": update share');const t=new Date,e=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");this.uiStore.ui.set("share",{title:"Alarm Liste",text:this.alertList.user?`${this.alertList.title}`:`${this.alertList.title} - ${this.alertList.user}`,files:[new File([JSON.stringify(this.alertList)],`AlarmListe_${this.alertList.title}_${this.alertList.user||""}_${e}-${i}-${s}.json`,{type:"text/json",lastModified:t.getTime()})]})},!0))}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("share",null)}get alertList(){return this._alertList}set alertList(t){this._alertList=t||null,this.uiStore.ui.update("search",e=>(e.value="",e)),setTimeout(()=>this.renderList())}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.uiStore.ui.get("search").value.replaceAll(" ",".*"));this.alertList.data.forEach((s,r)=>{e.value!==""&&e.active&&!this.is(s,i)||setTimeout(()=>{t.appendChild(ce({alert:s,container:"li",hasBorder:r<this.alertList.data.length-1,onClick:this.onClick.bind(this)}))})})}getAlertFromLI(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`),note:t.getAttribute("data-note")}}is(t,e){return!!`${t.from}..${t.to} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromLI(e);this.pages.alert.set(i),this.stackLayout.ui.setPage(this.pages.alert.ui.name,!0)}};n(Ct,"register",()=>{D.register(),tt.register(),it.register(),customElements.define("alert-lists-page",Ct)});let st=Ct;const ni=c`
`,St=class St extends ${constructor(){super(),this.innerHTML=ni,this.ui.name="metal-sheet-lists"}};n(St,"register",()=>{customElements.define("metal-sheet-lists-page",St)});let rt=St;const li=c`
`,At=class At extends ${constructor(){super(),this.innerHTML=li,this.ui.name="vis"}};n(At,"register",()=>{customElements.define("vis-page",At)});let ot=At;const ui=c`
`,Et=class Et extends ${constructor(){super(),this.innerHTML=ui,this.ui.name="vis-data"}};n(Et,"register",()=>{customElements.define("vis-data-page",Et)});let at=Et;function ci(o){const t=o.map(i=>`${i.title}:${i.user}`).sort(),e=[];for(const i of t)e.push(o.find(s=>`${s.title}:${s.user}`===i));return e}const hi="v0.0.1",he="3.5em",di=c`
    <ui-store
        local-storage-prefix="pg-vis:"
        enable-local-storage
    ></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="--search-bar-height: 0rem; width: 100%; height: 100%;">
        <ui-stack-layout></ui-stack-layout>
    </ui-container>

    <div
        style="
            position: absolute;
            top: var(--ui-app-bar-height);
            left: 0;
            right: 0;
            height: ${he};
            display: none;
            padding: var(--ui-spacing);
        "
    >
        <ui-search
            title="Alarmsuche (RegEx Mode)"
        ></ui-search>
    </div>

    <ui-app-bar
        style="padding: 0 var(--ui-spacing);"
        position="top"
    >
        <ui-flex-grid-item
            name="menu"
            slot="left"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-menu></svg-menu>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="back"
            slot="left"
            class="flex align-center justify-center"
            style="display: none;"
        >
            <ui-icon-button ghost>
                <svg-back-arrow></svg-back-arrow>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="title"
            slot="center"
            class="flex align-center justify-center"
        >
            <h4 class="title" style="white-space: nowrap;"></h4>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="share"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-share></svg-share>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="search"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-search></svg-search>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-app-bar>

    <ui-drawer open>
        <div
            style="
                font-size: 0.85rem;
                font-variation-settings: var(--ui-input-fontVariation);
            "
        >${hi}</div>

        <ui-drawer-group
            name="alert-lists"
            title="Alarm Listen"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                >Import</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="metal-sheet-lists"
            title="Blech Listen"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                    disabled
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="export"
                    variant="full"
                    color="primary"
                    disabled
                >Export</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="vis"
            title="Vis"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                    disabled
                >Import</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="vis-data"
            title="Vis Data"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                    disabled
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="new"
                    variant="full"
                    color="secondary"
                    disabled
                >New Data</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>
    </ui-drawer>
`,$t=class $t extends HTMLElement{constructor(){super(),this.innerHTML=di,this.cleanup=new m,this.uiStore,this.stackLayout,this.pages,this.createStore(),this.createStackLayout(),this.search=this.querySelector("ui-search"),this.uiAppBarItems={menu:this.querySelector('ui-app-bar [name="menu"] ui-icon-button'),back:this.querySelector('ui-app-bar [name="back"] ui-icon-button'),title:this.querySelector('ui-app-bar [name="title"] .title'),share:this.querySelector('ui-app-bar [name="share"] ui-icon-button'),search:this.querySelector('ui-app-bar [name="search"] ui-icon-button')},this.uiDrawer=this.querySelector("ui-drawer"),this.uiDrawerGroups={alertLists:this.querySelector('ui-drawer [name="alert-lists"]'),metalSheetLists:this.querySelector('ui-drawer [name="metal-sheet-lists"]'),vis:this.querySelector('ui-drawer [name="vis"]'),visData:this.querySelector('ui-drawer [name="vis-data"]')},this.uiButtonImportAlertList=this.uiDrawerGroups.alertLists.querySelector('ui-button[name="import"]'),this.uiButtonImportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="import"]'),this.uiButtonExportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="export"]'),this.uiButtonImportVis=this.uiDrawerGroups.vis.querySelector('ui-button[name="import"]'),this.uiButtonImportVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="import"]'),this.uiButtonNewVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="new"]')}connectedCallback(){this.setupNoPage(),this.uiDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("appBarTitle",t=>{console.debug(`[PGApp] on: "appBarTitle": set app-bar title "${t||""}"`),this.uiAppBarItems.title.innerHTML=t||""},!0)),this.cleanup.add(this.uiStore.ui.on("share",t=>{console.debug('[PGApp] on: "share": show/hide share button',t),t!==null?this.uiAppBarItems.share.parentElement.style.display="flex":this.uiAppBarItems.share.parentElement.style.display="none"},!0)),this.cleanup.add(this.uiAppBarItems.menu.ui.events.on("click",()=>{console.debug('[PGApp] on: app-bar menu item "click"'),this.uiDrawer.ui.open=!0})),this.cleanup.add(this.uiAppBarItems.back.ui.events.on("click",()=>{console.debug('[PGApp] on: app-bar back item "click"'),this.stackLayout.ui.goBack()})),this.cleanup.add(this.uiAppBarItems.share.ui.events.on("click",async()=>{console.debug('[PGApp] on: app-bar share item "click"');const t=this.uiStore.ui.get("share");if(!navigator.canShare){const e=document.createElement("a");for(const i of t.files)e.download=i.name,e.href="data:text/json;charset=utf-8,"+encodeURIComponent(await i.text()),e.click();return}navigator.canShare(t)&&await navigator.share(t)})),this.cleanup.add(this.uiAppBarItems.search.ui.events.on("click",async()=>{if(console.debug('[PGApp] on: app-bar share item "click"'),this.search.parentElement.style.display==="block"){this.search.parentElement.style.display="none",this.stackLayout.parentElement.style.setProperty("--search-bar-height","0rem"),this.uiStore.ui.update("search",t=>(t.active=!1,t));return}this.search.parentElement.style.display="block",this.search.ui.input.focus(),this.stackLayout.parentElement.style.setProperty("--search-bar-height",he),this.uiStore.ui.update("search",t=>(t.active=!0,t))})),this.cleanup.add(this.uiButtonImportAlertList.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer import button (alert-lists) "click"'),this.import(pi)})),this.cleanup.add(this.uiButtonImportMetalSheetLists.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer import button (metal-sheet-lists) "click"'),this.import(mi)})),this.cleanup.add(this.uiButtonExportMetalSheetLists.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer export button (metal-sheet-lists) "click"'),this.export(this.getFileName("metalSheetLists"),"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))})),this.cleanup.add(this.uiButtonImportVis.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer import button (vis) "click"'),this.import(gi)})),this.cleanup.add(this.uiButtonImportVisData.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer import button (vis-data) "click"'),this.import(fi)})),this.cleanup.add(this.uiButtonNewVisData.ui.events.on("click",async()=>{console.debug('[PGApp] on: drawer new button (vis-data) "click"');const t=new et;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()})),this.search.ui.events.on("submit",t=>{this.uiStore.ui.update("search",e=>(e.value=t,e))}),this.uiStore.ui.on("search",t=>{this.search.ui.value!==t.value&&(this.search.ui.value=t.value)})}createDrawerItem({primary:t,secondary:e=null,onClick:i=null,onDelete:s=null}){const r=new K;r.innerHTML=`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-button
                        style="justify-content: flex-start;"
                        variant="ghost"
                        color="primary"
                    >
                        <span>
                            ${e!==null?`<ui-primary>${t}</ui-primary><br/><ui-secondary>${e}</ui-secondary>`:`<ui-primary>${t}</ui-primary>`}
                        </span>
                    </ui-button>
                </ui-flex-grid-item>

                <ui-flex-grid-item
                    class="flex align-center justify-center"
                    flex="0"
                >
                    <ui-icon-button color="destructive" ghost>
                        <svg-recycle></svg-recycle>
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const l=r.querySelector("ui-button");i?l.ui.events.on("click",()=>{this.uiDrawer.ui.open=!1,i()}):l.ui.disable();const d=r.querySelector("ui-icon-button");return s?d.ui.events.on("click",()=>{r.parentElement.removeChild(r),s()}):d.ui.disable(),r}createStackLayout(){this.stackLayout=this.querySelector("ui-stack-layout"),this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.uiAppBarItems.back.parentElement.style.display="flex":this.uiAppBarItems.back.parentElement.style.display="none",!t){this.setupNoPage();return}switch(t.ui.name){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.pages={alertLists:new st(this.uiStore),metalSheetLists:new rt,vis:new ot,visData:new at},this.stackLayout.ui.registerPage(this.pages.alertLists.ui.name,()=>this.pages.alertLists),this.stackLayout.ui.registerPage(this.pages.metalSheetLists.ui.name,()=>this.pages.metalSheetLists),this.stackLayout.ui.registerPage(this.pages.vis.ui.name,()=>this.pages.vis),this.stackLayout.ui.registerPage(this.pages.visData.ui.name,()=>this.pages.visData)}createStore(){this.uiStore=this.querySelector("ui-store"),this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1,value:""},!1)}disconnectedCallback(){this.cleanup.run()}export(t,e,i){const s=`data:${e};charset=utf-8,${encodeURIComponent(i)}`,r=document.createElement("a");r.href=s,r.download=t,r.click()}getFileName(t){const e=new Date,i=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");switch(t){case"metalSheetLists":return`BlechListen_${i}-${s}-${r}.json`;default:return t}}import(t){const e=document.createElement("input");e.type="file",e.onchange=i=>{const s=i.currentTarget.files[0];if(!s)return;const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{t(s,r.result,this.uiStore)}catch(l){alert(`Parse data failed: ${l}`)}},r.onerror=()=>{alert(`Read file "${s.name}" failed!`)},r.readAsText(s)},e.click()}onAlertLists(t){console.debug('[PGApp] on: "alertLists"',t);const e=[...this.uiDrawerGroups.alertLists.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.alertLists.removeChild(e.pop());for(const i of ci(t))this.uiDrawerGroups.alertLists.appendChild(this.createDrawerItem({primary:i.title,secondary:i.user||null,onClick:()=>{this.stackLayout.ui.clearStack(),this.pages.alertLists.alertList=i,this.stackLayout.ui.setPage(this.pages.alertLists.ui.name)},onDelete:()=>{this.uiStore.ui.update("alertLists",s=>s.filter(r=>!(r.title===i.title&&r.user===i.user)))}}))}onMetalSheetLists(t){console.debug('[PGApp] on: "metalSheetLists"',t);const e=[...this.uiDrawerGroups.metalSheetLists.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.metalSheetLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.metalSheetLists.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.metalSheetLists.ui.name)},onDelete:()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(r=>r.title!==i.title))}}))}onVis(t){console.debug('[PGApp] on: "vis"',t);const e=[...this.uiDrawerGroups.vis.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.vis.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.vis.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.vis.ui.name)},onDelete:()=>{this.uiStore.ui.update("vis",s=>s.filter(r=>r.title!==i.title))}}))}onVisData(t){console.debug('[PGApp] on: "visData"',t);const e=[...this.uiDrawerGroups.visData.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.visData.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.visData.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.visData.ui.name)},onDelete:()=>{this.uiStore.ui.update("visData",s=>s.filter(r=>r.title!==i.title))}}))}setupAlertPage(){this.uiAppBarItems.search.parentElement.style.display="none"}setupAlertListsPage(){var t;this.uiStore.ui.set("appBarTitle",`${(t=this.pages.alertLists.alertList)==null?void 0:t.title}`),this.uiAppBarItems.search.parentElement.style.display="flex"}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.uiAppBarItems.search.parentElement.style.display="none",this.uiStore.ui.set("share",null)}};n($t,"register",()=>{jt.register(),Pt.register(),Gt.register(),zt.register(),U.register(),D.register(),Zt.register(),Nt.register(),W.register(),H.register(),Dt.register(),tt.register(),Ft.register(),Ot.register(),K.register(),Q.register(),X.register(),_.register(),R.register(),Jt.register(),et.register(),st.register(),rt.register(),ot.register(),at.register(),customElements.define("pg-app",$t)});let Wt=$t;function pi(o,t,e){const i=JSON.parse(t);if(typeof i.title!="string")throw'invalid "title"';if(typeof i.user!="string"&&i.user)throw'invalid "user"';if(i.user||(i.user=null),!Array.isArray(i.data))throw'invalid "data" array';for(let r=0;r<i.data.length;r++){const l=i.data[r];if(typeof l.from!="number"||typeof l.to!="number")throw`data entry (index: ${r}): invalid from/to`;if(typeof l.alert!="string")throw`data entry (index: ${r}): invalid alert`;if(!Array.isArray(l.desc))throw`data entry (index: ${r}): invalid desc array`;if(l.desc.filter(d=>typeof d!="string").length)throw`data entry (index: ${r}): invalid desc`;if(typeof l.note!="string"&&l.note)throw`data entry (index: ${r}): invalid note`}const s=`${i.title}:${i.user}`;if(e.ui.get("alertLists").find(r=>`${r.title}:${r.user}`===s)){if(!window.confirm(`Replace data: ${i.title} (user: ${i.user||""})?`))return;e.ui.update("alertLists",r=>r.map(l=>`${l.title}:${l.user}`===s?i:l));return}e.ui.update("alertLists",r=>[...r,i])}function mi(o,t,e){const i=JSON.parse(t);if(!Array.isArray(i))throw"invalid data";for(const s of i){if(typeof s.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(s.header))throw'invalid data type for "header" entry';if(!Array.isArray(s.data))throw'invalid data type for "data" entry';for(const r of s.header)if(typeof r!="string")throw"header(s) needs to be from type string";for(const r of s.data){if(!Array.isArray(r))throw'invalid type for "data" item';for(const l of r)if(typeof l!="string")throw"data item(s) needs to be from type string"}}e.ui.set("metalSheetLists",i)}function gi(o,t,e){const i=h=>{const[v,p]=h.split(/[xX]/),u=parseFloat(v),g=parseFloat(p);return!u||!g?`${u}x${g}`:`${u>g?u:g}x${u<g?u:g}`},s=h=>{let v="",p="";for(let u=0;u<h.length;u++)if(h[u].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){p=i(h[u]),h=h.slice(u+1);break}else v+=h[u]+" ";return{productName:v.trim(),format:i(p),newRest:h.map(u=>u.trim()).filter(u=>!!u)}},r=(h,v)=>{if(!v)return;const p={title:h,data:[]},u=v.split(`
`);for(let g=0;g<u.length;g++){if(!u[g])continue;let[P,...de]=u[g].trim().replace(/\t/g," ").split(" ");P=P.trim();const{productName:Mt,format:Xt,newRest:Tt}=s(de);if(!Xt)throw`missing format for "${Mt}" (lotto: "${P}") in vis (txt) data!`;if(!(Tt[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${Mt}" with lotto "${P}"!`;const pe=Tt.shift()||"",me=Tt.join(" ");p.data.push({lotto:P,name:Mt,format:Xt,thickness:parseFloat(pe.replaceAll(",",".")),stamp:me})}return p},l=o.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),d=r(l,t);e.ui.update("vis",h=>(h.unshift(d),h))}function fi(o,t,e){const i=JSON.parse(t);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const s of i.data){if(typeof s.key!="string"&&typeof s.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(s.lotto!==null&&typeof s.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(s.format!==null&&typeof s.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(s.thickness!==null&&typeof s.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(s.stamp!==null&&typeof s.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}e.ui.update("visData",s=>(s.unshift(i),s))}we({onRegistered(o){setTimeout(async()=>{try{await o.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Wt.register();
