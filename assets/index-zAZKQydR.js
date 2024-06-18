var _t=Object.defineProperty;var te=(o,t,e)=>t in o?_t(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var a=(o,t,e)=>(te(o,typeof t!="symbol"?t+"":t,e),e),ee=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var v=(o,t,e)=>(ee(o,t,"read from private field"),e?e.call(o):t.get(o)),Gt=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const ie="modulepreload",se=function(o){return"/pg-vis.github.io/"+o},Jt={},re=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),n=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));s=Promise.all(e.map(h=>{if(h=se(h),h in Jt)return;Jt[h]=!0;const c=h.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${f}`))return;const p=document.createElement("link");if(p.rel=c?"stylesheet":ie,c||(p.as="script",p.crossOrigin=""),p.href=h,n&&p.setAttribute("nonce",n),document.head.appendChild(p),c)return new Promise((l,g)=>{p.addEventListener("load",l),p.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${h}`)))})}))}return s.then(()=>t()).catch(r=>{const n=new Event("vite:preloadError",{cancelable:!0});if(n.payload=r,window.dispatchEvent(n),!n.defaultPrevented)throw r})};function oe(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:r,onRegisterError:n}=o;let h,c;const f=async(l=!0)=>{await c};async function p(){if("serviceWorker"in navigator){if(h=await re(()=>import("./workbox-window.prod.es5-D5gOYdM7.js"),[]).then(({Workbox:l})=>new l("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(l=>{n==null||n(l)}),!h)return;h.addEventListener("activated",l=>{(l.isUpdate||l.isExternal)&&window.location.reload()}),h.addEventListener("installed",l=>{l.isUpdate||i==null||i()}),h.register({immediate:t}).then(l=>{r?r("/pg-vis.github.io/sw.js",l):s==null||s(l)}).catch(l=>{n==null||n(l)})}}return c=p(),f}var b;class y{constructor(){Gt(this,b,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return v(this,b)[t]||(v(this,b)[t]=[]),v(this,b)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!v(this,b)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,s=0;for(const r of v(this,b)[t])r===e&&(v(this,b)[t].splice(s,1),i=!0),s++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(v(this,b)[t])for(const i of v(this,b)[t])i(e);return this}}b=new WeakMap;function Zt(o,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,o.currentTarget.appendChild(e);const i=o.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${o.clientY-i.top}px`,e.style.left=`${o.clientX-i.left}px`);const s=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function Wt(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const ae={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function jt(o,t={}){t={...ae,...t};let e;const i=r=>{e=Zt(r,t)},s=()=>{Wt(e)};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.useClick===!0?o.addEventListener("click",r=>{e=Zt(r,t),Wt(e)}):(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",s),o.addEventListener("pointerleave",s)),()=>{o.classList.remove("ripple-container"),o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",s),o.removeEventListener("pointerleave",s)}}const u=String.raw;class d{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ct="1",ne=u`
    <style></style>
    <slot></slot>
`,A=class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ne,this.cleanup=new d,this.ui={root:this,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Ct},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Ct});break}}updateStyle({flex:t=Ct}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};a(A,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",A)}),a(A,"observedAttributes",["flex"]);let w=A;const xt="0",le=`
    <style></style>
    <slot></slot>
`,E=class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=le,this.cleanup=new d,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||xt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||xt});break}}updateStyle({gap:t=xt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(E,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",E)}),a(E,"observedAttributes",["gap"]);let P=E;const Lt="0",ue=`
    <style></style>
    <slot></slot>
`,T=class T extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ue,this.cleanup=new d,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||Lt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Lt});break}}updateStyle({gap:t=Lt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(T,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",T)}),a(T,"observedAttributes",["gap"]);let B=T;const ce=u`
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
`,K=class K extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ce,this.cleanup=new d,this.ui={getLeftSlot:()=>[...this.querySelectorAll('[slot="left"]')],getCenterSlot:()=>[...this.querySelectorAll('[slot="center"]')],getRightSlot:()=>[...this.querySelectorAll('[slot="right"]')]}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(K,"register",()=>{P.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",K)});let St=K;const he=u`
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
`,Q=class Q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=he,this.cleanup=new d,this.ui={enable:()=>{this.style.display="flex"},disable:()=>{this.style.display="none"}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}get item(){return this.querySelector("*")}};a(Q,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Q)});let At=Q;const de=u`
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
`,M=class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=de,this.setAttribute("role","button"),this.cleanup=new d,this.ui={root:this,events:new y,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=jt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};a(M,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",M)}),a(M,"observedAttributes",["no-ripple","color"]);let z=M;const pe=u`
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
`,$=class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=pe,this.setAttribute("role","button"),this.cleanup=new d,this.ui={root:this,events:new y,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=jt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};a($,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",$)}),a($,"observedAttributes",["no-ripple","color"]);let C=$;const ge=u`
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
`,I=class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ge,this.cleanup=new d,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(I,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",I)});let Et=I;const me=u`
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
`,U=class U extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=me}};a(U,"register",()=>{customElements.get("svg-back-arrow")||customElements.define("svg-back-arrow",U)});let Tt=U;const fe=u`
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
`,_=class _ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=fe}};a(_,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",_)});let Mt=_;const be=u`
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
`,tt=class tt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=be}};a(tt,"register",()=>{customElements.get("svg-recycle")||customElements.define("svg-recycle",tt)});let $t=tt;const ve=u`
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
`,et=class et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ve}};a(et,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",et)});let V=et;const ye=u`
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
`,it=class it extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ye}};a(it,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",it)});let Ht=it;const we=u`
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
`,st=class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=we}};a(st,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",st)});let Rt=st;const ke=u`
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
`,rt=class rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ke,this.cleanup=new d,this.ui={root:this,events:new y,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const i=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=i},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),s=r=>{r.preventDefault()};i.addEventListener("cancel",s),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",s)}),console.debug(this.shadowRoot.querySelector("svg-close"))}disconnectedCallback(){this.cleanup.run()}};a(rt,"register",()=>{Mt.register(),C.register(),P.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",rt)});let F=rt;const Yt=150,Ce=u`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;

            position: absolute !important;
            z-index: ${Yt};
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
            z-index: ${Yt};
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

            transition: left 0.5s ease;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`,H=class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ce,this.cleanup=new d,this.ui={root:this,aside:this.shadowRoot.querySelector("aside"),events:new y,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.setOpen(!1)},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};a(H,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",H)}),a(H,"observedAttributes",["open"]);let Dt=H;const xe=u`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,ot=class ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=xe,this.cleanup=new d,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(ot,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",ot)});let j=ot;const Le=u`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,at=class at extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Le,this.cleanup=new d,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(at,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",at)});let k=at;const Se=u`
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
`,nt=class nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Se,this.cleanup=new d,this.ui={root:this,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(nt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",nt)});let x=nt;const Ae=u`
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
`,R=class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ae,this.cleanup=new d,this.ui={root:this,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};a(R,"register",()=>{x.register(),j.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",R)}),a(R,"observedAttributes",["title"]);let qt=R;const Ee=u`
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
`,D=class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ee,this.cleanup=new d,this.ui={root:this,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new y,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t.toString())},getValue(){const t=this.root.getAttribute("value");switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let s=this.querySelector('[slot="title"]');if(i===null&&s&&(this.removeChild(s),s=null),i===null)return;s||(s=new k,s.slot="title",this.appendChild(s)),s.innerHTML=i;break;case"type":this.ui.input.value=i||"text";break;case"value":this.ui.input.value=(i||"").toString();break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i;break;case"min":this.ui.input.min=i||"";break;case"max":this.ui.input.max=i||"";break}}};a(D,"register",()=>{k.register(),customElements.get("ui-input")||customElements.define("ui-input",D)}),a(D,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Nt=D;const Te=u`
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
`,q=class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Te,this.cleanup=new d,this.ui={root:this,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type="text",t.onkeydown=e=>{e.key==="Enter"&&this.ui.submit.click()},t})(),events:new y,setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getValue(){return this.root.getAttribute("value")},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let s=this.querySelector('[slot="title"]');i===null&&s&&(this.removeChild(s),s=null),s||(s=new k,s.slot="title",this.appendChild(s)),s.innerHTML=i||"";break;case"value":this.ui.input.value=i||"";break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break}}};a(q,"register",()=>{k.register(),C.register(),V.register(),customElements.get("ui-search")||customElements.define("ui-search",q)}),a(q,"observedAttributes",["title","value","placeholder","invalid"]);let Pt=q;const Me=u`
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
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Me,this.cleanup=new d,this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(lt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",lt)});let m=lt;const $e=u`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=$e,this.cleanup=new d,this.ui={root:this,pages:{},stack:[],events:new y,lock:!1,registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!this.stack.length||this.lock)return;const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=!1){if(this.lock)return;this.stack.push(this.root.appendChild(this.pages[t]()));let i=null;this.stack.length>1&&!e&&(i=this.stack[this.stack.length-2],i.parentElement.removeChild(i)),this.dispatchChangeEvent(i)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(ut,"register",()=>{m.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",ut)});let O=ut;const ct=class ct extends HTMLElement{constructor(){super(),this.ui={root:this,stores:{},events:new y,getLocalStoragePrefix(){return this.root.getAttribute("local-storage-prefix")},setLocalStoragePrefix(t){if(t===null){this.root.removeAttribute("local-storage-prefix");return}this.root.setAttribute("local-storage-prefix",t)},getEnableLocalStorage(){return this.root.hasAttribute("enable-local-storage")},setEnableLocalStorage(t){if(!t){this.root.removeAttribute("enable-local-storage");return}this.root.setAttribute("enable-local-storage","")},get(t){return this.stores[t]},set(t,e,i=!1){if(i&&this.enableLocalStorage){const s=JSON.parse(localStorage.getItem(this.localStoragePrefix+t.toString())||"null");this.stores[t]=s??e}else this.stores[t]=e;this.enableLocalStorage&&localStorage.setItem(this.localStoragePrefix+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}}}};a(ct,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",ct)});let L=ct;const N=class N extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},enableAutoMode(){if(this.removeMode(),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},disableAutoMode(){this.removeMedia()},addTheme(t,e){this.themes[t]=e},loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const s=document.getElementById("theme");s&&(document.head.removeChild(s),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}},mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},removeMode(t=document.body){t.removeAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}},removeMedia(){this.media&&(this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null)}}}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};a(N,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",N)}),a(N,"observedAttributes",["auto","mode"]);let Bt=N;const Xt="4.5em",He=u`
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
            height: ${Xt};
            display: none;
            padding: var(--ui-spacing);
            overflow: hidden;
        }
    </style>

    <ui-search title="Alarmsuche (RegEx Mode)"></ui-search>
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=He,this.uiStore=document.querySelector("ui-store"),this.cleanup=new d,this.input=this.shadowRoot.querySelector("ui-search")}connectedCallback(){const t=i=>{this.uiStore.ui.update("search",s=>(s.value=i,s))},e=i=>{this.input.ui.getValue()!==i.value&&this.input.ui.setValue(i.value)};this.cleanup.add(this.uiStore.ui.on("search",e)),this.cleanup.add(this.input.ui.events.on("submit",t))}};a(ht,"register",()=>{Pt.register(),customElements.define("pg-search-bar",ht)});let zt=ht;const Re=u`
    <ui-app-bar style="padding: 0 var(--ui-spacing);" position="top">
        <ui-app-bar-item name="menu" slot="left">
            <ui-icon-button ghost>
                <svg-menu></svg-menu>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="back" slot="left" style="display: none">
            <ui-icon-button ghost>
                <svg-back-arrow></svg-back-arrow>
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
`,dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Re,this.cleanup=new d,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("ui-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.pgSearchBar=document.querySelector("pg-search-bar"),this.itemMenu=this.shadowRoot.querySelector('[name="menu"]'),this.itemBack=this.shadowRoot.querySelector('[name="back"]'),this.itemTitle=this.shadowRoot.querySelector('[name="title"]'),this.itemShare=this.shadowRoot.querySelector('[name="share"]'),this.itemSearch=this.shadowRoot.querySelector('[name="search"]')}connectedCallback(){this.cleanup.add(this.itemMenu.item.ui.events.on("click",()=>{this.uiDrawer.ui.setOpen(!0)})),this.cleanup.add(this.itemBack.item.ui.events.on("click",()=>{this.stackLayout.ui.goBack()})),this.cleanup.add(this.itemShare.item.ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share");if(!navigator.canShare){const e=document.createElement("a");for(const i of t.files)e.download=i.name,e.href="data:text/json;charset=utf-8,"+encodeURIComponent(await i.text()),e.click();return}navigator.canShare(t)&&await navigator.share(t)})),this.cleanup.add(this.itemSearch.item.ui.events.on("click",()=>{if(this.pgSearchBar.style.display==="block"){this.pgSearchBar.style.display="none",this.stackLayout.parentElement.style.setProperty("--search-bar-height","0rem"),this.uiStore.ui.update("search",t=>(t.active=!1,t));return}this.pgSearchBar.style.display="block",this.pgSearchBar.input.ui.input.focus(),this.stackLayout.parentElement.style.setProperty("--search-bar-height",Xt),this.uiStore.ui.update("search",t=>(t.active=!0,t))}))}disconnectedCallback(){this.cleanup.run()}};a(dt,"register",()=>{V.register(),Rt.register(),Tt.register(),Ht.register(),At.register(),St.register(),x.register(),C.register(),customElements.define("pg-app-bar",dt)});let Vt=dt;const De=`
    <ui-flex-grid-item>
        <ui-input
            name="title"
            type="text"
            title="Vis Data Title"
        ></ui-input>
    </ui-flex-grid-item>
`,pt=class pt extends F{constructor(){super(),this.appendChild((()=>{const t=new B;return t.ui.setGap("0.5rem"),t.innerHTML=De,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new w;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new w;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.getValue(),data:[]}),i)),this.ui.close()}),this.appendChild(t)}};a(pt,"register",()=>{B.register(),w.register(),Nt.register(),z.register(),L.register(),F.register(),customElements.define("new-vis-data-dialog",pt)});let G=pt;function Kt({alert:o,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:s=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=`
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
`)),r.setAttribute("data-note",o.note||""),r.onclick=s,i&&(jt(r),r.style.cursor="pointer",r.role="button"),r}const qe=u`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>

        <ui-flex-grid-item class="note"> </ui-flex-grid-item>
    </ui-flex-grid>
`,gt=class gt extends m{constructor(t){super(),this.innerHTML=qe,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.events=new y,this.alert=null,this.uiStore=t}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}set(t){this.alert=t,this.createAlertItem(),this.createDescItem(),this.createNoteItem()}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(Kt({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerText=this.alert.desc.join(`
`),t.appendChild(e)}createNoteItem(){const t=this.querySelector("ui-flex-grid-item.note");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;let e=null;const i=async r=>{const n=r.currentTarget.value;e!==null&&clearTimeout(e),e=setTimeout(()=>{this.alert.note=n},250)},s=document.createElement("textarea");s.style.width="100%",s.style.height="100%",s.style.resize="none",s.value=this.alert.note||"",s.oninput=i,t.appendChild(s)}};a(gt,"register",()=>{L.register(),B.register(),w.register(),m.register(),customElements.define("alert-page",gt)});let J=gt;const Ne=u`
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
`,mt=class mt extends m{constructor(t){super(),this.innerHTML=Ne,this.ui.setName("alert-lists"),this.uiStore=t,this._alertList=null,this.pages={alert:new J(t)},this.stackLayout=document.querySelector("ui-stack-layout"),this.stackLayout.ui.registerPage(this.pages.alert.ui.getName(),()=>this.pages.alert)}get alertList(){return this._alertList}set alertList(t){this._alertList=t||null,this.uiStore.ui.update("search",e=>(e.value="",e)),setTimeout(()=>this.renderList())}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("search",this.onSearch.bind(this))),this.cleanup.add(this.pages.alert.events.on("change",this.onAlertPageChange.bind(this))),this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("share",null)}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.uiStore.ui.get("search").value.replaceAll(" ",".*"));for(let s=0;s<this.alertList.data.length;s++){if(e.value!==""&&e.active&&!this.is(this.alertList.data[s],i))return;setTimeout(()=>this.renderListElement(t,this.alertList.data[s],s<this.alertList.data.length-1))}}renderListElement(t,e,i){t.appendChild(Kt({alert:e,container:"li",hasBorder:i,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`),note:t.getAttribute("data-note")}}is(t,e){return!!`${t.from}..${t.to} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromElement(e);this.pages.alert.set(i),this.stackLayout.ui.setPage(this.pages.alert.ui.getName(),!0)}async onSearch({active:t,value:e}){console.debug(`[AlertListsPage] on: search: ${e}`);const i=new RegExp(e.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(s=>{if(!t){s.style.display="flex";return}if(this.is(this.getAlertFromElement(s),i)){s.style.display="flex";return}s.style.display="none"})}async onAlertLists(){console.debug('[AlertListsPage] on: "alertLists": update share');const t=new Date,e=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0"),s=t.getDate().toString().padStart(2,"0");this.uiStore.ui.set("share",{title:"Alarm Liste",text:this.alertList.user?`${this.alertList.title}`:`${this.alertList.title} - ${this.alertList.user}`,files:[new File([JSON.stringify(this.alertList)],`AlarmListe_${this.alertList.title}_${this.alertList.user||""}_${e}-${i}-${s}.json`,{type:"text/json",lastModified:t.getTime()})]})}async onAlertPageChange(){console.debug('[AlertListsPage] on: alert page change, update "alertLists"'),this.uiStore.ui.update("alertLists",t=>{const e=t.findIndex(i=>i.title===this.alertList.title);return e>=0&&(t[e]=this.alertList),t})}};a(mt,"register",()=>{L.register(),O.register(),m.register(),J.register(),customElements.define("alert-lists-page",mt)});let Z=mt;const Pe=u``,ft=class ft extends m{constructor(){super(),this.innerHTML=Pe,this.ui.setName("metal-sheet-lists")}};a(ft,"register",()=>{m.register(),customElements.define("metal-sheet-lists-page",ft)});let W=ft;const Be=u``,bt=class bt extends m{constructor(){super(),this.innerHTML=Be,this.ui.setName("vis")}};a(bt,"register",()=>{m.register(),customElements.define("vis-page",bt)});let Y=bt;const ze=u``,vt=class vt extends m{constructor(){super(),this.innerHTML=ze,this.ui.setName("vis-data")}};a(vt,"register",()=>{m.register(),customElements.define("vis-data-page",vt)});let X=vt;function Ve(o){const t=o.map(i=>`${i.title}:${i.user}`).sort(),e=[];for(const i of t)e.push(o.find(s=>`${s.title}:${s.user}`===i));return e}function Fe(o,t,e){const i=JSON.parse(t);if(typeof i.title!="string")throw'invalid "title"';if(typeof i.user!="string"&&i.user)throw'invalid "user"';if(i.user||(i.user=null),!Array.isArray(i.data))throw'invalid "data" array';for(let r=0;r<i.data.length;r++){const n=i.data[r];if(typeof n.from!="number"||typeof n.to!="number")throw`data entry (index: ${r}): invalid from/to`;if(typeof n.alert!="string")throw`data entry (index: ${r}): invalid alert`;if(!Array.isArray(n.desc))throw`data entry (index: ${r}): invalid desc array`;if(n.desc.filter(h=>typeof h!="string").length)throw`data entry (index: ${r}): invalid desc`;if(typeof n.note!="string"&&n.note)throw`data entry (index: ${r}): invalid note`}const s=`${i.title}:${i.user}`;if(e.ui.get("alertLists").find(r=>`${r.title}:${r.user}`===s)){if(!window.confirm(`Replace data: ${i.title} (user: ${i.user||""})?`))return;e.ui.update("alertLists",r=>r.map(n=>`${n.title}:${n.user}`===s?i:n));return}e.ui.update("alertLists",r=>[...r,i])}function je(o,t,e){const i=JSON.parse(t);if(!Array.isArray(i))throw"invalid data";for(const s of i){if(typeof s.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(s.header))throw'invalid data type for "header" entry';if(!Array.isArray(s.data))throw'invalid data type for "data" entry';for(const r of s.header)if(typeof r!="string")throw"header(s) needs to be from type string";for(const r of s.data){if(!Array.isArray(r))throw'invalid type for "data" item';for(const n of r)if(typeof n!="string")throw"data item(s) needs to be from type string"}}e.ui.set("metalSheetLists",i)}function Oe(o,t,e){const i=c=>{const[f,p]=c.split(/[xX]/),l=parseFloat(f),g=parseFloat(p);return!l||!g?`${l}x${g}`:`${l>g?l:g}x${l<g?l:g}`},s=c=>{let f="",p="";for(let l=0;l<c.length;l++)if(c[l].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){p=i(c[l]),c=c.slice(l+1);break}else f+=c[l]+" ";return{productName:f.trim(),format:i(p),newRest:c.map(l=>l.trim()).filter(l=>!!l)}},r=(c,f)=>{if(!f)return;const p={title:c,data:[]},l=f.split(`
`);for(let g=0;g<l.length;g++){if(!l[g])continue;let[S,...Qt]=l[g].trim().replace(/\t/g," ").split(" ");S=S.trim();const{productName:wt,format:Ot,newRest:kt}=s(Qt);if(!Ot)throw`missing format for "${wt}" (lotto: "${S}") in vis (txt) data!`;if(!(kt[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${wt}" with lotto "${S}"!`;const It=kt.shift()||"",Ut=kt.join(" ");p.data.push({lotto:S,name:wt,format:Ot,thickness:parseFloat(It.replaceAll(",",".")),stamp:Ut})}return p},n=o.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),h=r(n,t);e.ui.update("vis",c=>(c.unshift(h),c))}function Ge(o,t,e){const i=JSON.parse(t);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const s of i.data){if(typeof s.key!="string"&&typeof s.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(s.lotto!==null&&typeof s.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(s.format!==null&&typeof s.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(s.thickness!==null&&typeof s.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(s.stamp!==null&&typeof s.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}e.ui.update("visData",s=>(s.unshift(i),s))}const Je="v0.0.1",Ze=u`
    <ui-store local-storage-prefix="pg-vis:" enable-local-storage></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="--search-bar-height: 0rem; width: 100%; height: 100%;">
        <ui-stack-layout></ui-stack-layout>
    </ui-container>

    <pg-app-bar></pg-app-bar>
    <pg-search-bar></pg-search-bar>

    <ui-drawer open>
        <div
            style="
                font-size: 0.85rem;
                font-variation-settings: var(--ui-input-fontVariation);
            "
        >
            ${Je}
        </div>

        <ui-drawer-group name="alert-lists" title="Alarm Listen">
            <ui-drawer-group-item>
                <ui-button name="import" variant="full" color="primary"
                    >Import</ui-button
                >
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group name="metal-sheet-lists" title="Blech Listen">
            <ui-drawer-group-item>
                <ui-button name="import" variant="full" color="primary" disabled
                    >Import</ui-button
                >
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button name="export" variant="full" color="primary" disabled
                    >Export</ui-button
                >
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group name="vis" title="Vis">
            <ui-drawer-group-item>
                <ui-button name="import" variant="full" color="primary" disabled
                    >Import</ui-button
                >
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group name="vis-data" title="Vis Data">
            <ui-drawer-group-item>
                <ui-button name="import" variant="full" color="primary" disabled
                    >Import</ui-button
                >
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button name="new" variant="full" color="secondary" disabled
                    >New Data</ui-button
                >
            </ui-drawer-group-item>
        </ui-drawer-group>
    </ui-drawer>
`,yt=class yt extends HTMLElement{constructor(){super(),this.innerHTML=Ze,this.cleanup=new d,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.pages,this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgSearchBar=this.querySelector("pg-search-bar"),this.pgAppBar=this.querySelector("pg-app-bar"),this.uiDrawer=this.querySelector("ui-drawer"),this.uiDrawerGroups={alertLists:this.querySelector('ui-drawer [name="alert-lists"]'),metalSheetLists:this.querySelector('ui-drawer [name="metal-sheet-lists"]'),vis:this.querySelector('ui-drawer [name="vis"]'),visData:this.querySelector('ui-drawer [name="vis-data"]')},this.uiButtonImportAlertList=this.uiDrawerGroups.alertLists.querySelector('ui-button[name="import"]'),this.uiButtonImportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="import"]'),this.uiButtonExportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="export"]'),this.uiButtonImportVis=this.uiDrawerGroups.vis.querySelector('ui-button[name="import"]'),this.uiButtonImportVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="import"]'),this.uiButtonNewVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="new"]')}connectedCallback(){this.uiDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.cleanup.add(this.uiButtonImportAlertList.ui.events.on("click",this.onClickDrawerImportAlertList.bind(this))),this.cleanup.add(this.uiButtonImportMetalSheetLists.ui.events.on("click",this.onClickDrawerImportMetalSheets.bind(this))),this.cleanup.add(this.uiButtonExportMetalSheetLists.ui.events.on("click",this.onClickDrawerExportMetalSheetLists.bind(this))),this.cleanup.add(this.uiButtonImportVis.ui.events.on("click",this.onClickDrawerImportVis.bind(this))),this.cleanup.add(this.uiButtonImportVisData.ui.events.on("click",this.onClickDrawerImportVisData.bind(this))),this.cleanup.add(this.uiButtonNewVisData.ui.events.on("click",this.onClickDrawerNewVisData.bind(this))),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.pgAppBar.itemBack.ui.enable():this.pgAppBar.itemBack.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.pages={alertLists:new Z(this.uiStore),metalSheetLists:new W,vis:new Y,visData:new X},this.stackLayout.ui.registerPage(this.pages.alertLists.ui.getName(),()=>this.pages.alertLists),this.stackLayout.ui.registerPage(this.pages.metalSheetLists.ui.getName(),()=>this.pages.metalSheetLists),this.stackLayout.ui.registerPage(this.pages.vis.ui.getName(),()=>this.pages.vis),this.stackLayout.ui.registerPage(this.pages.visData.ui.getName(),()=>this.pages.visData)}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1,value:""},!1)}createDrawerItem({primary:t,secondary:e=null,onClick:i=null,onDelete:s=null}){const r=new x;r.innerHTML=`
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
        `;const n=r.querySelector("ui-button");i?n.ui.events.on("click",()=>{this.uiDrawer.ui.setOpen(!1),i()}):n.ui.disable();const h=r.querySelector("ui-icon-button");return s?h.ui.events.on("click",()=>{r.parentElement.removeChild(r),s()}):h.ui.disable(),r}export(t,e,i){const s=`data:${e};charset=utf-8,${encodeURIComponent(i)}`,r=document.createElement("a");r.href=s,r.download=t,r.click()}getFileName(t){const e=new Date,i=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),r=e.getDate().toString().padStart(2,"0");switch(t){case"metalSheetLists":return`BlechListen_${i}-${s}-${r}.json`;default:return t}}import(t){const e=document.createElement("input");e.type="file",e.onchange=i=>{const s=i.currentTarget.files[0];if(!s)return;const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{t(s,r.result,this.uiStore)}catch(n){alert(`Parse data failed: ${n}`)}},r.onerror=()=>{alert(`Read file "${s.name}" failed!`)},r.readAsText(s)},e.click()}setupAlertPage(){this.pgAppBar.itemSearch.ui.disable()}setupAlertListsPage(){var t;this.uiStore.ui.set("appBarTitle",`${(t=this.pages.alertLists.alertList)==null?void 0:t.title}`),this.pgAppBar.itemSearch.ui.enable()}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.uiStore.ui.set("share",null),this.pgAppBar.itemSearch.ui.disable()}async onAlertLists(t){console.debug('[PGApp] on: "alertLists"',t);const e=[...this.uiDrawerGroups.alertLists.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.alertLists.removeChild(e.pop());for(const i of Ve(t))this.uiDrawerGroups.alertLists.appendChild(this.createDrawerItem({primary:i.title,secondary:i.user||null,onClick:()=>{this.stackLayout.ui.clearStack(),this.pages.alertLists.alertList=i,this.stackLayout.ui.setPage(this.pages.alertLists.ui.getName())},onDelete:()=>{this.uiStore.ui.update("alertLists",s=>s.filter(r=>!(r.title===i.title&&r.user===i.user)))}}))}async onMetalSheetLists(t){console.debug('[PGApp] on: "metalSheetLists"',t);const e=[...this.uiDrawerGroups.metalSheetLists.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.metalSheetLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.metalSheetLists.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.metalSheetLists.ui.getName())},onDelete:()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(r=>r.title!==i.title))}}))}async onVis(t){console.debug('[PGApp] on: "vis"',t);const e=[...this.uiDrawerGroups.vis.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.vis.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.vis.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.vis.ui.getName())},onDelete:()=>{this.uiStore.ui.update("vis",s=>s.filter(r=>r.title!==i.title))}}))}async onVisData(t){console.debug('[PGApp] on: "visData"',t);const e=[...this.uiDrawerGroups.visData.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.visData.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.visData.appendChild(this.createDrawerItem({primary:i.title,onClick:()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.visData.ui.getName())},onDelete:()=>{this.uiStore.ui.update("visData",s=>s.filter(r=>r.title!==i.title))}}))}async onAppBarTitle(t){console.debug(`[PGApp] on: "appBarTitle": set app-bar title "${t||""}"`),this.pgAppBar.itemTitle.item.innerHTML=t||""}async onShare(t){console.debug('[PGApp] on: "share": show/hide share button',t),t!==null?this.pgAppBar.itemShare.ui.enable():this.pgAppBar.itemShare.ui.disable()}async onClickDrawerImportAlertList(){console.debug('[PGApp] on: drawer import button (alert-lists) "click"'),this.import(Fe)}async onClickDrawerImportMetalSheets(){console.debug('[PGApp] on: drawer import button (metal-sheet-lists) "click"'),this.import(je)}async onClickDrawerExportMetalSheetLists(){console.debug('[PGApp] on: drawer export button (metal-sheet-lists) "click"'),this.export(this.getFileName("metalSheetLists"),"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))}async onClickDrawerImportVis(){console.debug('[PGApp] on: drawer import button (vis) "click"'),this.import(Oe)}async onClickDrawerImportVisData(){console.debug('[PGApp] on: drawer import button (vis-data) "click"'),this.import(Ge)}async onClickDrawerNewVisData(){console.debug('[PGApp] on: drawer new button (vis-data) "click"');const t=new G;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};a(yt,"register",()=>{$t.register(),L.register(),Bt.register(),P.register(),w.register(),Et.register(),O.register(),Dt.register(),qt.register(),x.register(),z.register(),C.register(),j.register(),k.register(),zt.register(),Vt.register(),G.register(),Z.register(),W.register(),Y.register(),X.register(),customElements.define("pg-app",yt)});let Ft=yt;oe({onRegistered(o){setTimeout(async()=>{try{await o.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Ft.register();
