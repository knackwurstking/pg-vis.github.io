var Se=Object.defineProperty;var pe=o=>{throw TypeError(o)};var Le=(o,t,e)=>t in o?Se(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>Le(o,typeof t!="symbol"?t+"":t,e),Ee=(o,t,e)=>t.has(o)||pe("Cannot "+e);var E=(o,t,e)=>(Ee(o,t,"read from private field"),e?e.call(o):t.get(o)),ge=(o,t,e)=>t.has(o)?pe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const Ae="modulepreload",Te=function(o){return"/pg-vis.github.io/"+o},me={},Me=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(d=>{if(d=Te(d),d in me)return;me[d]=!0;const L=d.endsWith(".css"),p=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const g=document.createElement("link");if(g.rel=L?"stylesheet":Ae,L||(g.as="script",g.crossOrigin=""),g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),L)return new Promise((c,u)=>{g.addEventListener("load",c),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}return r.then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function $e(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:l}=o;let d,L;const p=async(c=!0)=>{await L};async function g(){if("serviceWorker"in navigator){if(d=await Me(async()=>{const{Workbox:c}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:c}},[]).then(({Workbox:c})=>new c("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(c=>{l==null||l(c)}),!d)return;d.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&window.location.reload()}),d.addEventListener("installed",c=>{c.isUpdate||i==null||i()}),d.register({immediate:t}).then(c=>{s?s("/pg-vis.github.io/sw.js",c):r==null||r(c)}).catch(c=>{l==null||l(c)})}}return L=g(),p}var x;class w{constructor(){ge(this,x,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return E(this,x)[t]||(E(this,x)[t]=[]),E(this,x)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!E(this,x)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,r=0;for(const s of E(this,x)[t])s===e&&(E(this,x)[t].splice(r,1),i=!0),r++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(E(this,x)[t])for(const i of E(this,x)[t])i(e);return this}}x=new WeakMap;function fe(o,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,o.currentTarget.appendChild(e);const i=o.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${o.clientY-i.top}px`,e.style.left=`${o.clientX-i.left}px`);const r=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${r}) translate(0, 0)`,e}function be(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const Re={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Pt(o,t={}){t={...Re,...t};let e;const i=s=>{e=fe(s,t)},r=()=>{be(e)};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.useClick===!0?o.addEventListener("click",s=>{e=fe(s,t),be(e)}):(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",r),o.addEventListener("pointerleave",r)),()=>{o.classList.remove("ripple-container"),o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",r),o.removeEventListener("pointerleave",r)}}const a=String.raw;class h{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Xt="1",He=a`
    <style></style>
    <slot></slot>
`,q=class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=He,this.cleanup=new h,this.ui={root:this,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Xt},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Xt});break}}updateStyle({flex:t=Xt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};n(q,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",q)}),n(q,"observedAttributes",["flex"]);let f=q;const Yt="0",qe=`
    <style></style>
    <slot></slot>
`,B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=qe,this.cleanup=new h,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||Yt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Yt});break}}updateStyle({gap:t=Yt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(B,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",B)}),n(B,"observedAttributes",["gap"]);let A=B;const Zt="0",Be=`
    <style></style>
    <slot></slot>
`,j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Be,this.cleanup=new h,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||Zt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Zt});break}}updateStyle({gap:t=Zt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(j,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",j)}),n(j,"observedAttributes",["gap"]);let M=j;const je=a`
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
            right: 0;
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
`,at=class at extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=je,this.cleanup=new h,this.ui={root:this,getLeftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},getCenterSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},getRightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(at,"register",()=>{A.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",at)});let Kt=at;const Ne=a`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    </style>

    <slot></slot>
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ne,this.cleanup=new h,this.ui={root:this,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getItem(){return this.root.querySelector("*")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(lt,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",lt)});let Qt=lt;const ze=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
`,N=class N extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ze,this.setAttribute("role","button"),this.cleanup=new h,this.ui={root:this,events:new w,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=Pt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(N,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",N)}),n(N,"observedAttributes",["no-ripple","color"]);let b=N;const Ve=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
`,z=class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ve,this.setAttribute("role","button"),this.cleanup=new h,this.ui={root:this,events:new w,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=Pt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(z,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",z)}),n(z,"observedAttributes",["no-ripple","color"]);let S=z;const Oe=a`
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
`,ct=class ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Oe,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(ct,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",ct)});let Gt=ct;const Fe=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M14.5 17L9.5 12L14.5 7"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Fe}};n(ut,"register",()=>{customElements.get("svg-chevron-left")||customElements.define("svg-chevron-left",ut)});let It=ut;const Pe=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M7 17L16.8995 7.10051"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M7 7.00001L16.8995 16.8995"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Pe}};n(ht,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",ht)});let Ut=ht;const Je=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M5 7.5H19L18 21H6L5 7.5Z"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
            <path
                d="M15.5 9.5L15 19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 9.5V19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M8.5 9.5L9 19"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M16 5H19C20.1046 5 21 5.89543 21 7V7.5H3V7C3 5.89543 3.89543 5 5 5H8M16 5L15 3H9L8 5M16 5H8"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Je}};n(dt,"register",()=>{customElements.get("svg-trash")||customElements.define("svg-trash",dt)});let $=dt;const We=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_15_152)">
                <rect width="24" height="24" fill="none"></rect>
                <circle
                    cx="10.5"
                    cy="10.5"
                    r="6.5"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path
                    d="M19.6464 20.3536C19.8417 20.5488 20.1583 20.5488 20.3536 20.3536C20.5488 20.1583 20.5488 19.8417 20.3536 19.6464L19.6464 20.3536ZM20.3536 19.6464L15.3536 14.6464L14.6464 15.3536L19.6464 20.3536L20.3536 19.6464Z"
                    fill="currentColor"
                ></path>
            </g>
            <defs>
                <clipPath id="clip0_15_152">
                    <rect width="24" height="24" fill="none"></rect>
                </clipPath>
            </defs>
        </g>
    </svg>
`,pt=class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=We}};n(pt,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",pt)});let Z=pt;const De=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <rect width="24" height="24" fill="none"></rect>
            <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 15.5H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 8.5H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,gt=class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=De}};n(gt,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",gt)});let _t=gt;const Xe=a`
    <style>
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    </style>

    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
        <g
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
        ></g>
        <g id="SVGRepo_iconCarrier">
            <g clip-path="url(#clip0_15_72)">
                <rect width="24" height="24" fill="none"></rect>
                <circle
                    cx="7"
                    cy="12"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <circle
                    cx="17"
                    cy="6"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path d="M15 7L8.5 11" stroke="currentColor"></path>
                <circle
                    cx="17"
                    cy="18"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
                <path d="M8.5 13.5L15 17" stroke="currentColor"></path>
            </g>
            <defs>
                <clipPath id="clip0_15_72">
                    <rect width="24" height="24" fill="none"></rect>
                </clipPath>
            </defs>
        </g>
    </svg>
`,mt=class mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Xe}};n(mt,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",mt)});let te=mt;const Ye=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
            height: calc(
                100% -
                    (
                        env(safe-area-inset-top, 0) +
                            env(safe-area-inset-bottom, 0) +
                            (var(--ui-spacing) * 2)
                    )
            );

            margin: var(--ui-spacing);
            margin-top: calc(env(safe-area-inset-top, 0) + var(--ui-spacing));
            margin-bottom: calc(
                env(safe-area-inset-bottom, 0) + var(--ui-spacing)
            );
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
                <span style="white-space: nowrap;"
                    ><slot name="title"></slot
                ></span>

                <ui-icon-button
                    style="width: var(--ui-dialog-header-height); height: 100%;"
                    ghost
                >
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
`,ft=class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ye,this.cleanup=new h,this.ui={root:this,events:new w,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const i=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=i},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),r=s=>{s.preventDefault()};i.addEventListener("cancel",r),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",r)})}disconnectedCallback(){this.cleanup.run()}};n(ft,"register",()=>{Ut.register(),S.register(),A.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",ft)});let R=ft;const ve=150,Ze=a`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;

            position: absolute !important;
            z-index: ${ve};
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;

            overflow: hidden;

            transition: left 0s ease 0.5s;
        }

        :host([open]) {
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);

            left: 0;

            transition: none;
        }

        aside {
            position: absolute;
            z-index: ${ve};
            top: 0;
            left: -100%;
            width: 18em;
            max-width: 100%;
            height: 100%;

            overflow-x: hidden;
            overflow-y: auto;

            -ms-overflow-style: none;
            scrollbar-width: none;

            /*
            background-color: var(--ui-card-bgColor);
            color: var(--ui-card-color);
            */
            border-right: 1px solid var(--ui-card-borderColor);
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);

            transition: left 0.5s ease;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`,V=class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ze,this.cleanup=new h,this.ui={root:this,aside:this.shadowRoot.querySelector("aside"),events:new w,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.setOpen(!1)},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};n(V,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",V)}),n(V,"observedAttributes",["open"]);let X=V;const Ke=a`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,bt=class bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ke,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(bt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",bt)});let T=bt;const Qe=a`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,vt=class vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Qe,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(vt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",vt)});let y=vt;const Ge=a`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            position: relative !important;
            display: flex !important;
            flex-direction: row;
            width: 100%;
            padding: var(--ui-spacing);
            border-radius: var(--ui-radius);
        }

        :host > .text {
            display: flex;
            flex: 1;
            flex-direction: column;
            justify-content: center;
            margin-right: var(--ui-spacing);
        }

        :host > .input {
            display: flex;
            align-items: center;
            justify-content: flex-end;
        }
    </style>

    <span class="text">
        <ui-primary></ui-primary>
        <ui-secondary></ui-secondary>
    </span>

    <span class="input">
        <slot name="input"></slot>
        <slot></slot>
    </span>
`,O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ge,this.cleanup=new h,this.ui={root:this,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(t=>t.click())},onInputClick:async t=>{t.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(t){if(t===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(t){if(t===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=Pt(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),[...this.root.querySelectorAll('[slot="input"]')].forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"ripple":i!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=i||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=i||"";break}}};n(O,"register",()=>{T.register(),y.register(),customElements.get("ui-label")||customElements.define("ui-label",O)}),n(O,"observedAttributes",["ripple","secondary","primary"]);let ee=O;const Ie=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
`,yt=class yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ie,this.cleanup=new h,this.ui={root:this,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(yt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",yt)});let m=yt;const Ue=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
`,F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ue,this.cleanup=new h,this.ui={root:this,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};n(F,"register",()=>{m.register(),T.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",F)}),n(F,"observedAttributes",["title"]);let C=F;const _e=a`
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

        :host([invalid]) .container {
            border-color: var(--ui-destructive-bgColor);
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
        <input />
    </div>
`,P=class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=_e,this.cleanup=new h,this.ui={root:this,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new w,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t.toString())},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');if(i===null&&r&&(this.removeChild(r),r=null),i===null)return;r||(r=new y,r.slot="title",this.appendChild(r)),r.innerHTML=i;break;case"type":this.ui.input.type=i||"text";break;case"value":this.ui.input.value=(i||"").toString();break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i;break;case"min":this.ui.input.min=i||"";break;case"max":this.ui.input.max=i||"";break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};n(P,"register",()=>{y.register(),customElements.get("ui-input")||customElements.define("ui-input",P)}),n(P,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let K=P;const ti=a`
    <style>
        * {
            box-sizing: border-box;
        }

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

        :host([invalid]) .container {
            border-color: var(--ui-destructive-bgColor);
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
`,J=class J extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ti,this.cleanup=new h,this.ui={root:this,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type="text",t.onkeydown=e=>{this.ui.hasSubmit()&&e.key==="Enter"&&this.ui.submit.click()},t.oninput=()=>this.ui.events.dispatch("input",t.value),t.onchange=()=>this.ui.events.dispatch("change",t.value),t})(),events:new w,hasSubmit(){return!!this.submit.parentElement},disableSubmit(){this.hasSubmit()&&this.submit.parentElement.removeChild(this.submit)},enableSubmit(){if(!this.hasSubmit())return;this.root.shadowRoot.querySelector(".container").appendChild(this.submit)},setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');i===null&&r&&(this.removeChild(r),r=null),r||(r=new y,r.slot="title",this.appendChild(r)),r.innerHTML=i||"";break;case"value":this.ui.input.value=i||"";break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"no-submit":i!==null?this.ui.disableSubmit():this.ui.enableSubmit();break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};n(J,"register",()=>{y.register(),S.register(),Z.register(),customElements.get("ui-search")||customElements.define("ui-search",J)}),n(J,"observedAttributes",["title","value","placeholder","invalid","no-submit"]);let ie=J;const ei=a`
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
`,wt=class wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ei,this.cleanup=new h,this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(wt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",wt)});let v=wt;const ii=a`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,W=class W extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ii,this.cleanup=new h,this.ui={root:this,pages:{},stack:[],onpopstate:null,events:new w,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=null,i=!1){if(this.lock)return;const r=this.pages[t]();this.stack.push(this.root.appendChild(r)),typeof e=="function"&&setTimeout(()=>e(r));let s=null;this.stack.length>1&&!i&&(s=this.stack[this.stack.length-2],s.parentElement.removeChild(s)),this.dispatchChangeEvent(s),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"use-history":i!==null?this.ui.enableHistory():this.ui.disableHistory();break}}};n(W,"register",()=>{v.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",W)}),n(W,"observedAttributes",["use-history"]);let Q=W;const kt=class kt extends HTMLElement{constructor(){super(),this.ui={root:this,stores:{},events:new w,getLocalStoragePrefix(){return this.root.getAttribute("local-storage-prefix")},setLocalStoragePrefix(t){if(t===null){this.root.removeAttribute("local-storage-prefix");return}this.root.setAttribute("local-storage-prefix",t)},getEnableLocalStorage(){return this.root.hasAttribute("enable-local-storage")},setEnableLocalStorage(t){if(!t){this.root.removeAttribute("enable-local-storage");return}this.root.setAttribute("enable-local-storage","")},get(t){return this.stores[t]},set(t,e,i=!1){if(i&&this.getEnableLocalStorage()){const r=JSON.parse(localStorage.getItem(this.getLocalStoragePrefix()+t.toString())||"null");this.stores[t]=r??e}else this.stores[t]=e;this.getEnableLocalStorage()&&localStorage.setItem(this.getLocalStoragePrefix()+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}}}};n(kt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",kt)});let Y=kt;const D=class D extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},enableAutoMode(){if(this.removeMode(),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},disableAutoMode(){this.removeMedia()},addTheme(t,e){this.themes[t]=e},loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}},mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},removeMode(t=document.body){t.removeAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}},removeMedia(){this.media&&(this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null)}}}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};n(D,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",D)}),n(D,"observedAttributes",["auto","mode"]);let re=D;const ri=a`
    <ui-app-bar style="padding: 0 var(--ui-spacing);" position="top">
        <ui-app-bar-item name="menu" slot="left">
            <ui-icon-button ghost>
                <svg-menu></svg-menu>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="back" slot="left" style="display: none">
            <ui-icon-button ghost>
                <svg-chevron-left></svg-chevron-left>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="title" slot="center">
            <h4 class="title" style="white-space: nowrap;"></h4>
        </ui-app-bar-item>

        <ui-app-bar-item name="share" slot="right">
            <ui-icon-button ghost>
                <svg-share></svg-share>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="search" slot="right">
            <ui-icon-button ghost>
                <svg-search></svg-search>
            </ui-icon-button>
        </ui-app-bar-item>
    </ui-app-bar>
`,xt=class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ri,this.cleanup=new h,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.itemMenu=this.shadowRoot.querySelector('[name="menu"]'),this.itemBack=this.shadowRoot.querySelector('[name="back"]'),this.itemTitle=this.shadowRoot.querySelector('[name="title"]'),this.itemShare=this.shadowRoot.querySelector('[name="share"]'),this.itemSearch=this.shadowRoot.querySelector('[name="search"]')}connectedCallback(){this.cleanup.add(this.itemMenu.ui.getItem().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0))),this.cleanup.add(this.itemBack.ui.getItem().ui.events.on("click",()=>this.stackLayout.ui.goBack())),this.cleanup.add(this.itemShare.ui.getItem().ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share");if(!navigator.canShare){const e=document.createElement("a");for(const i of t.files)e.download=i.name,e.href="data:text/json;charset=utf-8,"+encodeURIComponent(await i.text()),e.click();return}navigator.canShare(t)&&await navigator.share(t)})),this.cleanup.add(this.itemSearch.ui.getItem().ui.events.on("click",()=>this.uiStore.ui.update("search",t=>({...t,active:!t.active}))))}disconnectedCallback(){this.cleanup.run()}};n(xt,"register",()=>{Z.register(),te.register(),It.register(),_t.register(),Qt.register(),Kt.register(),m.register(),S.register(),customElements.define("pg-app-bar",xt)});let se=xt;function ye({alert:o,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:r=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
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
    `,s.setAttribute("data-from",o.from.toString()),s.setAttribute("data-to",o.to.toString()),s.setAttribute("data-alert",o.alert),s.setAttribute("data-desc",o.desc.join(`
`)),s.setAttribute("data-note",o.note||""),s.onclick=r,i&&(Pt(s),s.style.cursor="pointer",s.role="button"),s}const si=a`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,Ct=class Ct extends v{constructor(){super(),this.innerHTML=si,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(ye({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerText=this.alert.desc.join(`
`),t.appendChild(e)}};n(Ct,"register",()=>{M.register(),f.register(),v.register(),customElements.define("alert-page",Ct)});let G=Ct;const we="4.5em",oi=a`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;
            position: absolute;
            top: var(--ui-app-bar-height);
            left: 0;
            right: 0;
            height: ${we};
            display: none;
            padding: var(--ui-spacing);
            overflow: hidden;
        }
    </style>

    <ui-search
        style="z-index: 10;"
        title="Alarmsuche (RegEx Mode)"
        no-submit
    ></ui-search>
`,St=class St extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=oi,this.input=this.shadowRoot.querySelector("ui-search"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,input:this.input,isActive(){return this.root.style.display==="block"},setActive(t){if(t){this.root.style.display="block",this.root.stackLayout.style.setProperty("--search-bar-height",we),this.input.focus();return}this.root.style.display="none",this.root.stackLayout.style.setProperty("--search-bar-height","0rem")}}}};n(St,"register",()=>{ie.register(),customElements.define("search-bar",St)});let oe=St;const ni=a`
    <search-bar></search-bar>

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
`,Lt=class Lt extends v{constructor(){super(),this.innerHTML=ni,this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.alertList=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.searchBar=this.querySelector("search-bar"),this.alertPage=new G,this.ui={...this.ui,root:this,get(){return this.root.alertList},set(t){var e;this.root.alertList=t||null,this.root.uiStore.ui.set("appBarTitle",((e=this.root.alertList)==null?void 0:e.title)||""),this.root.uiStore.ui.set("search",{active:!1}),setTimeout(()=>this.root.renderList())}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:e})=>{e===!0?(this.searchBar.ui.setActive(!0),await this.search(this.searchBar.ui.input.ui.getValue())):(this.searchBar.ui.setActive(!1),await this.search(""))});let t=null;this.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let r=0;r<this.alertList.data.length;r++){if(e.active===!0&&!this.is(this.alertList.data[r],i))return;setTimeout(()=>this.renderListElement(t,this.alertList.data[r],r<this.alertList.data.length-1))}}renderListElement(t,e,i){t.appendChild(ye({alert:e,container:"li",hasBorder:i,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`),note:t.getAttribute("data-note")}}is(t,e){const i=[];for(let r=t.from;r<=t.to;r++)i.push(r);return!!`${i.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromElement(e);this.alertPage.ui.set(i),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(i=>{if(!this.searchBar.ui.isActive()){i.style.display="flex";return}if(this.is(this.getAlertFromElement(i),e)){i.style.display="flex";return}i.style.display="none"})}};n(Lt,"register",()=>{Y.register(),Q.register(),v.register(),oe.register(),G.register(),customElements.define("alert-lists-page",Lt)});let I=Lt;const ai=a``,Et=class Et extends v{constructor(){super(),this.innerHTML=ai,this.ui.setName("metal-sheet-lists")}};n(Et,"register",()=>{v.register(),customElements.define("metal-sheet-lists-page",Et)});let U=Et;const li=a``,At=class At extends v{constructor(){super(),this.innerHTML=li,this.ui.setName("vis")}};n(At,"register",()=>{v.register(),customElements.define("vis-page",At)});let _=At;const ci=a``,Tt=class Tt extends v{constructor(){super(),this.innerHTML=ci,this.ui.setName("vis-data")}};n(Tt,"register",()=>{v.register(),customElements.define("vis-data-page",Tt)});let tt=Tt;const ui="v0.0.5",hi=a`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input
            name="gistID"
            type="text"
            title="Gist ID"
        ></ui-input>
    </ui-flex-grid-item>
`,Mt=class Mt extends R{constructor(t){super(),this.appendChild((()=>{const e=new M;return e.ui.setGap("0.5rem"),e.innerHTML=hi,e})()),this.ui.setTitle(`Import "${t}"`),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new f;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new f;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};n(Mt,"register",()=>{R.register(),M.register(),f.register(),K.register(),b.register(),ee.register(),customElements.define("import-dialog",Mt)});let et=Mt;class di{constructor(t){this.id=t,this.data=null}async get(){if(!this.id)return;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const i=await e.json();this.data={files:{},owner:{login:i.owner.login}};for(const[r,s]of Object.entries(i.files))this.data.files[r]={filename:s.filename,content:JSON.parse(s.content)};return this.data}}function pi(o){const t=[],e=o.map(i=>`${i.title}`).sort();for(const i of e)t.push(o.find(r=>`${r.title}`===i));return t}function Jt(o){const t=document.createElement("input");t.type="file",t.onchange=async e=>{for(const i of e.currentTarget.files){const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{o(r.result,i)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${i.name}" failed!`)},r.readAsText(i)}},t.click()}function gi(o,t,e){const i=`data:${t};charset=utf-8,${encodeURIComponent(e)}`,r=document.createElement("a");r.href=i,r.download=o,r.click()}const mi=a`
    <ui-flex-grid-row>
        <ui-flex-grid-item>
            <ui-button
                style="justify-content: flex-start;"
                variant="ghost"
                color="primary"
            >
            </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item class="flex align-center justify-center" flex="0">
            <ui-icon-button color="destructive" ghost>
                <svg-trash></svg-trash>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,$t=class $t extends m{constructor(){super(),this.innerHTML=mi,this.ui={...this.ui,events:new w},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n($t,"register",()=>{$.register(),m.register(),A.register(),f.register(),b.register(),S.register(),T.register(),y.register(),customElements.define("pg-drawer-item-alert-list",$t)});let it=$t;const fi=a`
    <ui-drawer-group title="Alarm Listen">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary">
                Import
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,Rt=class Rt extends C{constructor(){super(),this.innerHTML=fi,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this))}async onAlertLists(t){if(!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const i of pi(t)){const r=new it;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",l=>{l.ui.set(i)}),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("alertLists",s=>s.filter(l=>l.title!==i.title))})),this.appendChild(r)}}validate(t,e=null){if(typeof t.title!="string")throw'invalid "title"';if(e!==null?t.gistID=e:typeof t.gistID!="string"&&(t.gistID=null),!Array.isArray(t.data))throw'invalid "data" array';for(let i=0;i<t.data.length;i++){const r=t.data[i];if(typeof r.from!="number"||typeof r.to!="number")throw`data entry (index: ${i}): invalid from/to`;if(typeof r.alert!="string")throw`data entry (index: ${i}): invalid alert`;if(!Array.isArray(r.desc))throw`data entry (index: ${i}): invalid desc array`;if(r.desc.filter(s=>typeof s!="string").length)throw`data entry (index: ${i}): invalid desc`;if(typeof r.note!="string"&&r.note)throw`data entry (index: ${i}): invalid note`}return t}async update(t){const e=`${t.title}`;if(this.uiStore.ui.get("alertLists").find(i=>`${i.title}`===e)){if(!window.confirm(`Replace data: ${t.title}?`))return;this.uiStore.ui.update("alertLists",i=>i.map(r=>`${r.title}`===e?t:r));return}this.uiStore.ui.update("alertLists",i=>[...i,t])}async onClickImport(){const t=new et("Alarm Liste");t.ui.events.on("submit",async e=>{if(e===null){Jt(s=>{let l=JSON.parse(s);try{l=this.validate(l,null)}catch(d){alert(`Validation failed: ${d}`)}this.update(l)});return}const i=new di(e);let r;try{r=await i.get()}catch(s){alert(`Something went wrong: ${s}`);return}try{for(const s in r.files)r.files[s].content=this.validate(r.files[s].content,i.id)}catch(s){alert(`Validation failed: ${s}`);return}for(const s of Object.values(r.files))await this.update(s.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};n(Rt,"register",()=>{C.register(),m.register(),b.register(),it.register(),et.register(),customElements.define("pg-drawer-alert-lists",Rt)});let ne=Rt;const bi=a`
    <ui-flex-grid-row>
        <ui-flex-grid-item>
            <ui-button
                style="justify-content: flex-start;"
                variant="ghost"
                color="primary"
            >
            </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item class="flex align-center justify-center" flex="0">
            <ui-icon-button color="destructive" ghost>
                <svg-trash></svg-trash>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Ht=class Ht extends m{constructor(){super(),this.innerHTML=bi,this.ui={...this.ui,events:new w},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Ht,"register",()=>{$.register(),m.register(),A.register(),f.register(),b.register(),S.register(),T.register(),y.register(),customElements.define("pg-drawer-item-metal-sheet-list",Ht)});let rt=Ht;const vi=a`
    <ui-drawer-group title="Blech Listen">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>

        <ui-drawer-group-item>
            <ui-button name="export" variant="full" color="primary" disabled>
                Export
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,qt=class qt extends C{constructor(){super(),this.innerHTML=vi,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickExport.bind(this))}onMetalSheetLists(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new rt;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(l=>l.title!==i.title))})),this.appendChild(r)}}onClickImport(){Jt(e=>{const i=JSON.parse(e);if(!Array.isArray(i))throw"invalid data";for(const r of i){if(typeof r.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(r.header))throw'invalid data type for "header" entry';if(!Array.isArray(r.data))throw'invalid data type for "data" entry';for(const s of r.header)if(typeof s!="string")throw"header(s) needs to be from type string";for(const s of r.data){if(!Array.isArray(s))throw'invalid type for "data" item';for(const l of s)if(typeof l!="string")throw"data item(s) needs to be from type string"}}this.uiStore.ui.set("metalSheetLists",i)})}onClickExport(){const t=new Date,e=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0"),s=`BlechListen_${e}-${i}-${r}.json`;gi(s,"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))}};n(qt,"register",()=>{C.register(),m.register(),b.register(),rt.register(),customElements.define("pg-drawer-metal-sheet-lists",qt)});let ae=qt;const yi=a`
    <ui-flex-grid-row>
        <ui-flex-grid-item>
            <ui-button
                style="justify-content: flex-start;"
                variant="ghost"
                color="primary"
            >
            </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item class="flex align-center justify-center" flex="0">
            <ui-icon-button color="destructive" ghost>
                <svg-trash></svg-trash>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Bt=class Bt extends m{constructor(){super(),this.innerHTML=yi,this.ui={...this.ui,events:new w},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Bt,"regsiter",()=>{$.register(),m.register(),A.register(),f.register(),b.register(),S.register(),T.register(),y.register(),customElements.define("pg-drawer-item-vis",Bt)});let st=Bt;const wi=a`
    <ui-drawer-group title="Vis">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,jt=class jt extends C{constructor(){super(),this.innerHTML=wi,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this))}onVis(t){if(!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new st;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("vis",s=>s.filter(l=>l.title!==i.title))}))}}onClickImport(){Jt((e,i)=>{const r=p=>{const[g,c]=p.split(/[xX]/),u=parseFloat(g),k=parseFloat(c);return!u||!k?`${u}x${k}`:`${u>k?u:k}x${u<k?u:k}`},s=p=>{let g="",c="";for(let u=0;u<p.length;u++)if(p[u].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){c=r(p[u]),p=p.slice(u+1);break}else g+=p[u]+" ";return{productName:g.trim(),format:r(c),newRest:p.map(u=>u.trim()).filter(u=>!!u)}},l=(p,g)=>{if(!g)return;const c={title:p,data:[]},u=g.split(`
`);for(let k=0;k<u.length;k++){if(!u[k])continue;let[H,...ke]=u[k].trim().replace(/\t/g," ").split(" ");H=H.trim();const{productName:Wt,format:de,newRest:Dt}=s(ke);if(!de)throw`missing format for "${Wt}" (lotto: "${H}") in vis (txt) data!`;if(!(Dt[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${Wt}" with lotto "${H}"!`;const xe=Dt.shift()||"",Ce=Dt.join(" ");c.data.push({lotto:H,name:Wt,format:de,thickness:parseFloat(xe.replaceAll(",",".")),stamp:Ce})}return c},d=i.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),L=l(d,e);this.uiStore.ui.update("vis",p=>(p.unshift(L),p))})}};n(jt,"register",()=>{C.register(),m.register(),b.register(),st.register(),customElements.define("pg-drawer-vis",jt)});let le=jt;const ki=a`
    <ui-flex-grid-row>
        <ui-flex-grid-item>
            <ui-button
                style="justify-content: flex-start;"
                variant="ghost"
                color="primary"
            >
            </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item class="flex align-center justify-center" flex="0">
            <ui-icon-button color="destructive" ghost>
                <svg-trash></svg-trash>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Nt=class Nt extends m{constructor(){super(),this.innerHTML=ki,this.ui={...this.ui,events:new w},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Nt,"regsiter",()=>{$.register(),m.register(),A.register(),f.register(),b.register(),S.register(),T.register(),y.register(),customElements.define("pg-drawer-item-vis-data",Nt)});let ot=Nt;const xi=`
    <ui-flex-grid-item>
        <ui-input
            name="title"
            type="text"
            title="Vis Data Title"
        ></ui-input>
    </ui-flex-grid-item>
`,zt=class zt extends R{constructor(){super(),this.appendChild((()=>{const t=new M;return t.ui.setGap("0.5rem"),t.innerHTML=xi,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new f;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new f;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.getValue(),data:[]}),i)),this.ui.close()}),this.appendChild(t)}};n(zt,"register",()=>{M.register(),f.register(),K.register(),b.register(),Y.register(),R.register(),customElements.define("new-vis-data-dialog",zt)});let nt=zt;const Ci=a`
    <ui-drawer-group title="Vis Data">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>

        <ui-drawer-group-item>
            <ui-button name="new" variant="full" color="secondary" disabled>
                New Data
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,Vt=class Vt extends C{constructor(){super(),this.innerHTML=Ci,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this)),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}onVisData(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new ot;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(l=>l.title!==i.title))}))}}onClickImport(){Jt(e=>{const i=JSON.parse(e);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const r of i.data){if(typeof r.key!="string"&&typeof r.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(r.lotto!==null&&typeof r.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(r.format!==null&&typeof r.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(r.thickness!==null&&typeof r.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(r.stamp!==null&&typeof r.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}this.uiStore.ui.update("visData",r=>(r.unshift(i),r))})}onClickNewData(){const t=new nt;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};n(Vt,"register",()=>{C.register(),m.register(),b.register(),ot.register(),nt.register(),customElements.define("pg-drawer-vis-data",Vt)});let ce=Vt;const Si=a`
    <ui-drawer open>
        <div
            style="
                font-size: 0.85rem;
                font-variation-settings: var(--ui-input-fontVariation);
            "
        >
            ${ui}
        </div>

        <pg-drawer-alert-lists></pg-drawer-alert-lists>
        <pg-drawer-metal-sheet-lists></pg-drawer-metal-sheet-lists>
        <pg-drawer-vis></pg-drawer-vis>
        <pg-drawer-vis-data></pg-drawer-vis-data>
    </ui-drawer>
`,Ot=class Ot extends X{constructor(){super(),this.innerHTML=Si}getGroup(t){return this.querySelector(`pg-drawer-${t.toString()}`)}};n(Ot,"register",()=>{X.register(),ne.register(),ae.register(),le.register(),ce.register(),customElements.define("pg-drawer",Ot)});let ue=Ot;const Li=a`
    <ui-store local-storage-prefix="pg-vis:" enable-local-storage></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout
            style="--search-bar-height: 0rem;"
            use-history
        ></ui-stack-layout>
    </ui-container>

    <pg-app-bar></pg-app-bar>
    <pg-drawer></pg-drawer>
`,Ft=class Ft extends HTMLElement{constructor(){super(),this.innerHTML=Li,this.cleanup=new h,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.pgAppBar.itemBack.ui.enable():this.pgAppBar.itemBack.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new I),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new U),this.stackLayout.ui.registerPage("vis",()=>new _),this.stackLayout.ui.registerPage("vis-data",()=>new tt)}setupAlertPage(){this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.disable()}setupAlertListsPage(){this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.enable()}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.disable()}async onAppBarTitle(t){this.pgAppBar.itemTitle.ui.getItem().innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.itemShare.ui.enable():this.pgAppBar.itemShare.ui.disable()}};n(Ft,"register",()=>{Y.register(),re.register(),A.register(),f.register(),Gt.register(),Q.register(),X.register(),C.register(),m.register(),b.register(),S.register(),T.register(),y.register(),se.register(),ue.register(),I.register(),U.register(),_.register(),tt.register(),customElements.define("pg-app",Ft)});let he=Ft;$e({onRegistered(o){setTimeout(async()=>{try{await o.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});he.register();
