var fe=Object.defineProperty;var be=(r,t,e)=>t in r?fe(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var a=(r,t,e)=>(be(r,typeof t!="symbol"?t+"":t,e),e),_t=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var n=(r,t,e)=>(_t(r,t,"read from private field"),e?e.call(r):t.get(r)),b=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},v=(r,t,e,i)=>(_t(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const ve="modulepreload",we=function(r){return"/pg-vis.github.io/"+r},te={},ye=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));s=Promise.all(e.map(d=>{if(d=we(d),d in te)return;te[d]=!0;const p=d.endsWith(".css"),f=p?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${f}`))return;const m=document.createElement("link");if(m.rel=p?"stylesheet":ve,p||(m.as="script",m.crossOrigin=""),m.href=d,l&&m.setAttribute("nonce",l),document.head.appendChild(m),p)return new Promise((h,c)=>{m.addEventListener("load",h),m.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${d}`)))})}))}return s.then(()=>t()).catch(o=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o})};function ke(r={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:o,onRegisterError:l}=r;let d,p,f;const m=async(c=!0)=>{await p,await(f==null?void 0:f())};async function h(){if("serviceWorker"in navigator){if(d=await ye(()=>import("./workbox-window.prod.es5-D5gOYdM7.js"),[]).then(({Workbox:c})=>new c("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(c=>{l==null||l(c)}),!d)return;f=async()=>{await(d==null?void 0:d.messageSkipWaiting())};{let c=!1;const x=()=>{c=!0,d==null||d.addEventListener("controlling",L=>{L.isUpdate&&window.location.reload()}),e==null||e()};d.addEventListener("installed",L=>{typeof L.isUpdate>"u"?typeof L.isExternal<"u"?L.isExternal?x():!c&&(i==null||i()):L.isExternal?window.location.reload():!c&&(i==null||i()):L.isUpdate||i==null||i()}),d.addEventListener("waiting",x),d.addEventListener("externalwaiting",x)}d.register({immediate:t}).then(c=>{o?o("/pg-vis.github.io/sw.js",c):s==null||s(c)}).catch(c=>{l==null||l(c)})}}return p=h(),m}var w;class T{constructor(){b(this,w,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return n(this,w)[t]||(n(this,w)[t]=[]),n(this,w)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!n(this,w)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,s=0;for(const o of n(this,w)[t])o===e&&(n(this,w)[t].splice(s,1),i=!0),s++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(n(this,w)[t])for(const i of n(this,w)[t])i(e);return this}}w=new WeakMap;function ee(r,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,r.currentTarget.appendChild(e);const i=r.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${r.clientY-i.top}px`,e.style.left=`${r.clientX-i.left}px`);const s=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function ie(r){r&&(r.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&r.remove()}),r.style.opacity="0")}const xe={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Qt(r,t={}){t={...xe,...t};let e;const i=o=>{e=ee(o,t)},s=()=>{ie(e)};return r.classList.add("ripple-container"),r.style.overflow="hidden",t.useClick===!0?r.addEventListener("click",o=>{e=ee(o,t),ie(e)}):(r.addEventListener("pointerdown",i),r.addEventListener("pointerup",s),r.addEventListener("pointerleave",s)),()=>{r.classList.remove("ripple-container"),r.removeEventListener("pointerdown",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointerleave",s)}}const u=String.raw;class g{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}async run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{await this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Tt="1",Le=u`
<style></style>
<slot></slot>
`;let Ce=class{constructor(t){this.root=t}get flex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Tt}set flex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}};const j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Le,this.cleanup=new g,this.ui=new Ce(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Tt});break}}updateStyle({flex:t=Tt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};a(j,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",j)}),a(j,"observedAttributes",["flex"]);let q=j;const Ht="0",Se=u`
<style></style>
<slot></slot>
`;let Ee=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||Ht}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Se,this.cleanup=new g,this.ui=new Ee(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Ht});break}}updateStyle({gap:t=Ht}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(B,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",B)}),a(B,"observedAttributes",["gap"]);let W=B;const $t="0",Me=u`
<style></style>
<slot></slot>
`;let Ae=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||$t}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const P=class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Me,this.cleanup=new g,this.ui=new Ae(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||$t});break}}updateStyle({gap:t=$t}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(P,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",P)}),a(P,"observedAttributes",["gap"]);let Q=P;const Te=u`
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
`;var H,oe;let He=(oe=class{constructor(t){b(this,H,void 0);v(this,H,t)}getLeftSlot(){return[...n(this,H).querySelectorAll('[slot="left"]')]}getCenterSlot(){return[...n(this,H).querySelectorAll('[slot="center"]')]}getRightSlot(){return[...n(this,H).querySelectorAll('[slot="right"]')]}},H=new WeakMap,oe);const rt=class rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Te,this.cleanup=new g,this.ui=new He(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(rt,"register",()=>{W.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",rt)});let Rt=rt;const $e=u`
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
`;let Re=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new T,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get variant(){return this.root.getAttribute("variant")}set variant(t){this.root.setAttribute("variant",t)}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Qt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=$e,this.setAttribute("role","button"),this.cleanup=new g,this.ui=new Re(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};a(F,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",F)}),a(F,"observedAttributes",["no-ripple","color"]);let U=F;const qe=u`
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
`;let Ne=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new T,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get ghost(){return this.root.hasAttribute("ghost")}set ghost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Qt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const I=class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=qe,this.setAttribute("role","button"),this.cleanup=new g,this.ui=new Ne(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};a(I,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",I)}),a(I,"observedAttributes",["no-ripple","color"]);let X=I;const De=u`
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
`,ot=class ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=De,this.cleanup=new g}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(ot,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",ot)});let qt=ot;const ze=u`
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
    xmlns="http://www.w3.org/2000/svg"
>

    <g id="Complete">
        <g data-name="add" id="add">
            <g>
                <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2" x1="12" x2="12" y1="19" y2="5"
                />

                <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2" x1="5" x2="19" y1="12" y2="12"
                />
            </g>
        </g>
    </g>
</svg>
`,nt=class nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ze}};a(nt,"register",()=>{customElements.get("svg-add")||customElements.define("svg-add",nt)});let Nt=nt;const je=u`
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
`,at=class at extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=je}};a(at,"register",()=>{customElements.get("svg-back-arrow")||customElements.define("svg-back-arrow",at)});let Dt=at;const Be=u`
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
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Be}};a(lt,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",lt)});let zt=lt;const Pe=u`
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
        d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M21 21H12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>;
`,ct=class ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Pe}};a(ct,"register",()=>{customElements.get("svg-edit")||customElements.define("svg-edit",ct)});let jt=ct;const Fe=u`
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
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Fe}};a(ut,"register",()=>{customElements.get("svg-recycle")||customElements.define("svg-recycle",ut)});let Bt=ut;const Ie=u`
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
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ie}};a(ht,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",ht)});let Pt=ht;const Ve=u`
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
`,dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ve}};a(dt,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",dt)});let Ft=dt;const Oe=u`
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
`,pt=class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Oe}};a(pt,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",pt)});let It=pt;const Ge=u`
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
`;var E,y,M,ne;let Ze=(ne=class{constructor(t,e){b(this,E,void 0);b(this,y,void 0);b(this,M,void 0);v(this,E,t),v(this,y,e),this.events=new T,v(this,M,document.createElement("h4")),n(this,M).slot="title",n(this,E).appendChild(n(this,M))}get fullscreen(){return n(this,E).hasAttribute("fullscreen")}set fullscreen(t){t?n(this,E).setAttribute("fullscreen",""):n(this,E).removeAttribute("fullscreen")}get title(){return n(this,M).innerText}set title(t){n(this,M).innerText=t}getDialogElement(){return n(this,y)}open(t=!1,e=!0){const i=n(this,y).inert;n(this,y).inert=e,t?n(this,y).showModal():n(this,y).show(),this.events.dispatch("open",null),n(this,y).inert=i}close(){n(this,y).close(),this.events.dispatch("close",null)}},E=new WeakMap,y=new WeakMap,M=new WeakMap,ne);const mt=class mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ge,this.cleanup=new g,this.ui=new Ze(this,this.shadowRoot.querySelector("dialog"))}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),s=o=>{o.preventDefault()};i.addEventListener("cancel",s),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",s)})}disconnectedCallback(){this.cleanup.run()}};a(mt,"register",()=>{X.register(),zt.register(),W.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",mt)});let Vt=mt;const se=150,ue=document.createElement("template");ue.innerHTML=`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: block;

            position: absolute;
            z-index: ${se};
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
            z-index: ${se};
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
`;let Je=class{constructor(t){this.root=t,this.aside=this.root.shadowRoot.querySelector("aside"),this.events=new T}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const V=class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ue.content.cloneNode(!0)),this.cleanup=new g,this.ui=new Je(this)}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.open=!1},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};a(V,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",V)}),a(V,"observedAttributes",["open"]);let Ot=V;const We=u`
<style>
    :host {
        font-size: 1.1rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-primary-fontVariation);
    }
</style>

<slot></slot>
`,gt=class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=We,this.cleanup=new g}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(gt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",gt)});let Gt=gt;const Xe=u`
<style>
    :host {
        font-size: 0.9rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-secondary-fontVariation);
    }
</style>

<slot></slot>
`,ft=class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Xe,this.cleanup=new g}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(ft,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",ft)});let z=ft;const he=document.createElement("template");he.innerHTML=`
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
`;let Ye=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const bt=class bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(he.content.cloneNode(!0)),this.cleanup=new g,this.ui=new Ye(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(bt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",bt)});let Y=bt;const de=document.createElement("template");de.innerHTML=`
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
`;let Ke=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get title(){return this.root.getAttribute("title")||null}set title(t){t?this.root.setAttribute("title",t):this.root.removeAttribute("title")}setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}};const O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(de.content.cloneNode(!0)),this.cleanup=new g,this.ui=new Ke(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};a(O,"register",()=>{Y.register(),Gt.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",O)}),a(O,"observedAttributes",["title"]);let Zt=O;const pe=document.createElement("template");pe.innerHTML=`
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
`;let Qe=class{constructor(t){this.root=t,this.events=new T,this.input=this.root.shadowRoot.querySelector("input"),this.input.type=this.root.getAttribute("type")||"text",this.input.oninput=()=>this.events.dispatch("input",this.value),this.input.onchange=()=>this.events.dispatch("change",this.value)}set title(t){let e=this.root.querySelector('[slot="title"]');t===null&&e&&(this.root.removeChild(e),e=null),e||(e=new z,e.slot="title",this.root.appendChild(e)),e.innerHTML=t||""}get title(){var t;return((t=this.root.querySelector('[slot="title"]'))==null?void 0:t.innerHTML)||null}set type(t){this.input.type=t}get type(){return this.input.type||"text"}set value(t){this.input.value=t}get value(){switch(this.input.type){case"number":return this.input.value?new Number(this.input.value):NaN;default:return this.input.value}}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){this.input.ariaInvalid=t?"":null}get invalid(){return this.input.ariaInvalid!==null}set min(t){this.input.min=t}get min(){switch(this.input.type){case"number":return this.input.min?new Number(this.input.min):NaN;default:return this.input.min}}set max(t){this.input.max=t}get max(){switch(this.input.type){case"number":return this.input.max?new Number(this.input.max):NaN;default:return this.input.max}}};const G=class G extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(pe.content.cloneNode(!0)),this.cleanup=new g,this.ui=new Qe(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"type":i===null?this.ui.type="text":this.ui.type=i;break;case"value":this.ui.value=this.parseNewValue(i);break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.invalid=i!==null;break;case"min":this.ui.min=this.parseNewValue(i);break;case"max":this.ui.max=this.parseNewValue(i);break}}parseNewValue(t){switch(this.ui.type){case"number":return t?new Number(t):NaN;default:return t||""}}};a(G,"register",()=>{z.register(),customElements.get("ui-input")||customElements.define("ui-input",G)}),a(G,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Jt=G;const Ue=u`
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
        <input />
        <ui-icon-button ghost>
            <svg-search></svg-search>
        </ui-icon-button>
    </div>
`;let _e=class{constructor(t){this.root=t,this.events=new T,this.submit=this.root.shadowRoot.querySelector("ui-icon-button"),this.submit.ui.events.on("click",()=>{this.events.dispatch("submit",this.value)}),this.input=this.root.shadowRoot.querySelector("input"),this.input.type="text",this.input.onkeydown=e=>{e.key==="Enter"&&this.submit.click()}}set title(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)}get title(){return this.root.getAttribute("title")}set value(t){this.input.value=t}get value(){return this.input.value}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){t?this.root.setAttribute("invalid",""):this.root.removeAttribute("invalid")}get invalid(){return this.input.ariaInvalid!==null}};const Z=class Z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ue,this.cleanup=new g,this.ui=new _e(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let s=this.querySelector('[slot="title"]');i===null&&s&&(this.removeChild(s),s=null),s||(s=new z,s.slot="title",this.appendChild(s)),s.innerHTML=i||"";break;case"value":this.ui.value=i||"";break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break}}};a(Z,"register",()=>{z.register(),X.register(),Pt.register(),customElements.get("ui-search")||customElements.define("ui-search",Z)}),a(Z,"observedAttributes",["title","value","placeholder","invalid"]);let Wt=Z;const ti=u`
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
`;var N,ae;let ei=(ae=class{constructor(t){b(this,N,void 0);v(this,N,t)}get name(){return n(this,N).getAttribute("name")}set name(t){n(this,N).setAttribute("name",t)}},N=new WeakMap,ae);const vt=class vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ti,this.cleanup=new g,this.ui=new ei(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(vt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",vt)});let R=vt;const ii=u`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`;var A,$,D,le;let si=(le=class{constructor(t){b(this,A,void 0);b(this,$,!1);b(this,D,{});v(this,A,t),this.events=new T,this.stack=[]}registerPage(t,e){n(this,D)[t]=e}unregisterPage(t){delete n(this,D)[t]}lock(){v(this,$,!0)}unlock(){v(this,$,!1)}clearStack(){for(;this.stackSize()>0;)n(this,A).removeChild(this.stack.pop())}stackSize(){return this.stack.length}goBack(){if(!this.stack.length||n(this,$))return;const t=this.stack.pop(),e=n(this,A).removeChild(t);this.stack.length&&n(this,A).appendChild(this.stack[this.stack.length-1]),this.dispatchChangeEvent(e)}setPage(t){if(!n(this,$)){if(this.stack.push(n(this,A).appendChild(n(this,D)[t]())),this.stack.length>1){const e=this.stack[this.stack.length-2];e.parentElement.removeChild(e)}this.dispatchChangeEvent(null)}}async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}},A=new WeakMap,$=new WeakMap,D=new WeakMap,le);const wt=class wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ii,this.cleanup=new g,this.ui=new si(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(wt,"register",()=>{R.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",wt)});let Xt=wt;var C,S,ce;let ri=(ce=class{constructor(t){b(this,C,void 0);b(this,S,{});v(this,C,t),this.events=new T}get localStoragePrefix(){return n(this,C).getAttribute("local-storage-prefix")}set localStoragePrefix(t){n(this,C).setAttribute("local-storage-prefix",t)}get enableLocalStorage(){return n(this,C).hasAttribute("enable-local-storage")}set enableLocalStorage(t){t?n(this,C).setAttribute("enable-local-storage",""):n(this,C).removeAttribute("enable-local-storage")}get(t){return n(this,S)[t]}set(t,e,i=!1){if(i&&this.enableLocalStorage){const s=JSON.parse(localStorage.getItem(this.localStoragePrefix+t.toString())||"null");n(this,S)[t]=s??e}else n(this,S)[t]=e;this.enableLocalStorage&&localStorage.setItem(this.localStoragePrefix+t.toString(),JSON.stringify(n(this,S)[t])),this.events.dispatch(t,n(this,S)[t])}update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(n(this,S)[t]))}on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}},C=new WeakMap,S=new WeakMap,ce);const yt=class yt extends HTMLElement{constructor(){super(),this.ui=new ri(this)}};a(yt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",yt)});let K=yt;var k;class oi{constructor(){b(this,k,null);this.currentTheme=null,this.themes={}}enableAutoMode(){if(this.removeMode(),n(this,k)){this.mediaChangeHandler(n(this,k));return}v(this,k,window.matchMedia("(prefers-color-scheme: dark)")),n(this,k).addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(n(this,k))}disableAutoMode(){this.removeMedia()}addTheme(t,e){this.themes[t]=e}loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const s=document.getElementById("theme");s&&(document.head.removeChild(s),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")}removeMode(t=document.body){t.removeAttribute("data-theme")}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}}removeMedia(){n(this,k)&&(n(this,k).removeEventListener("change",this.mediaChangeHandler),v(this,k,null))}}k=new WeakMap;const J=class J extends HTMLElement{constructor(){super(),this.ui=new oi}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};a(J,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",J)}),a(J,"observedAttributes",["auto","mode"]);let Yt=J;const kt=class kt extends Vt{constructor(){super(),this.ui.title="New Vis Data",this.uiStore=document.querySelector("ui-store"),this.name,this.createContent(),this.createActions()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createContent(){const t=new Q;t.ui.gap="0.5",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-input
                    name="title"
                    type="text"
                    title="Vis Data Title"
                ></ui-input>
            </ui-flex-grid-item>
        `,this.name=t.querySelector('ui-input[name="title"]'),this.appendChild(t)}createActions(){let t=new q;t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="secondary"
                variant="full"
            >Cancel</ui-button>
        `;let e=t.querySelector("ui-button");e.ui.events.on("click",()=>{this.ui.close()}),t=new q,t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="primary"
            >Submit</ui-button>
        `,e=t.querySelector("ui-button"),e.ui.events.on("click",()=>{if(this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.value,data:[]}),i)),this.ui.close()})}};a(kt,"register",()=>{Q.register(),q.register(),Jt.register(),U.register(),K.register(),customElements.define("new-vis-data-dialog",kt)});let _=kt;const re="3.5em",ni=u`
    <div
        class="no-scrollbar"
        style="
            width: 100%;
            height: 100%;
            padding-top: var(--ui-app-bar-height);
            padding-bottom: ${re};
            overflow: auto;
            scroll-behavior: smooth;
        "
    >
        <ul></ul>
    </div>

    <div
        style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: ${re};
        "
    >
        <ui-search
            title="Alarmsuche (RegEx Mode)"
        ></ui-search>
    </div>
`,xt=class xt extends R{constructor(t){super(),this.innerHTML=ni,this.ui.name="alert-lists",this.uiStore=t,this._alertList=null,this.search=this.querySelector("ui-search")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.search.ui.events.on("submit",t=>{[...this.querySelector("ul").children].forEach(e=>{const i=this.getAlertFromLI(e);this.is(i,new RegExp(t.replaceAll(" ",".*")))?e.style.display="flex":e.style.display="none"})}))}get alertList(){return this._alertList}set alertList(t){this._alertList=t||null,setTimeout(()=>this.renderList())}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);this.alertList.data.forEach((e,i)=>{setTimeout(()=>{const s=document.createElement("li");s.className="alert flex row nowrap align-center justify-between",s.style.overflow="hidden",s.style.position="relative",i<this.alertList.data.length-1&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
                    <div class="title">${e.alert}</div>

                    <div
                        class="number"
                        style="
                            color: var(--ui-primary-bgColor, red);
                            font-weight: bold;
                        "
                    >
                        ${e.from===e.to?e.from:`${e.from}..${e.to}`}
                    </div>
                `,s.setAttribute("data-from",e.from.toString()),s.setAttribute("data-to",e.to.toString()),s.setAttribute("data-alert",e.alert),s.setAttribute("data-desc",e.desc.join(`
`)),s.onclick=this.onClick.bind(this),Qt(s),t.appendChild(s)})})}getAlertFromLI(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){return!!`${t.from}..${t.to} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromLI(e);console.warn(i)}};a(xt,"register",()=>{K.register(),Wt.register(),customElements.define("alert-lists-page",xt)});let tt=xt;const ai=u`
`,Lt=class Lt extends R{constructor(){super(),this.innerHTML=ai,this.ui.name="metal-sheet-lists"}};a(Lt,"register",()=>{customElements.define("metal-sheet-lists-page",Lt)});let et=Lt;const li=u`
`,Ct=class Ct extends R{constructor(){super(),this.innerHTML=li,this.ui.name="vis"}};a(Ct,"register",()=>{customElements.define("vis-page",Ct)});let it=Ct;const ci=u`
`,St=class St extends R{constructor(){super(),this.innerHTML=ci,this.ui.name="vis-data"}};a(St,"register",()=>{customElements.define("vis-data-page",St)});let st=St;const ui=u`
    <ui-store
        local-storage-prefix="pg-vis:"
        enable-local-storage
    ></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout></ui-stack-layout>
    </ui-container>

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
            name="edit"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-edit></svg-edit>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="add"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-add></svg-add>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-app-bar>

    <ui-drawer open>
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
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="export"
                    variant="full"
                    color="primary"
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
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="new"
                    variant="full"
                    color="secondary"
                >New Data</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>
    </ui-drawer>
`,Et=class Et extends HTMLElement{constructor(){super(),this.innerHTML=ui,this.cleanup=new g,this.createStore(),this.createStackLayout(),this.uiAppBarItems={menu:this.querySelector('ui-app-bar [name="menu"] ui-icon-button'),back:this.querySelector('ui-app-bar [name="back"] ui-icon-button'),title:this.querySelector('ui-app-bar [name="title"] .title'),share:this.querySelector('ui-app-bar [name="share"] ui-icon-button'),edit:this.querySelector('ui-app-bar [name="edit"] ui-icon-button'),add:this.querySelector('ui-app-bar [name="add"] ui-icon-button')},this.uiDrawer=this.querySelector("ui-drawer"),this.uiDrawerGroups={alertLists:this.querySelector('ui-drawer [name="alert-lists"]'),metalSheetLists:this.querySelector('ui-drawer [name="metal-sheet-lists"]'),vis:this.querySelector('ui-drawer [name="vis"]'),visData:this.querySelector('ui-drawer [name="vis-data"]')},this.uiButtonImportAlertList=this.uiDrawerGroups.alertLists.querySelector('ui-button[name="import"]'),this.uiButtonImportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="import"]'),this.uiButtonExportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="export"]'),this.uiButtonImportVis=this.uiDrawerGroups.vis.querySelector('ui-button[name="import"]'),this.uiButtonImportVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="import"]'),this.uiButtonNewVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="new"]')}connectedCallback(){this.setupNoPage(),this.uiDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.cleanup.add(this.uiAppBarItems.menu.ui.events.on("click",()=>{this.uiDrawer.ui.open=!0})),this.cleanup.add(this.uiButtonImportAlertList.ui.events.on("click",async()=>{this.import(hi)})),this.cleanup.add(this.uiButtonImportMetalSheetLists.ui.events.on("click",async()=>{this.import(di)})),this.cleanup.add(this.uiButtonExportMetalSheetLists.ui.events.on("click",async()=>{this.export(this.getFileName("metalSheetLists"),"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))})),this.cleanup.add(this.uiButtonImportVis.ui.events.on("click",async()=>{this.import(pi)})),this.cleanup.add(this.uiButtonImportVisData.ui.events.on("click",async()=>{this.import(mi)})),this.cleanup.add(this.uiButtonNewVisData.ui.events.on("click",async()=>{const t=new _;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}))}disconnectedCallback(){this.cleanup.run()}setupNoPage(){this.uiAppBarItems.title.innerHTML="PG: Vis (v0.0.0)",this.uiAppBarItems.back.parentElement.style.display="none",this.uiAppBarItems.share.parentElement.style.display="none",this.uiAppBarItems.edit.parentElement.style.display="none",this.uiAppBarItems.add.parentElement.style.display="none"}createStore(){this.uiStore=this.querySelector("ui-store"),this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0)}createStackLayout(){this.stackLayout=this.querySelector("ui-stack-layout"),this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.uiAppBarItems.back.parentElement.style.display="none":this.uiAppBarItems.back.parentElement.style.display="block",!t){this.setupNoPage();return}switch(t.ui.name){case"alert-lists-page":break;case"metal-sheet-lists-page":break;case"vis-page":break;case"vis-data-page":break;default:this.setupNoPage()}}),this.pages={alertLists:new tt(this.uiStore),metalSheetLists:new et,vis:new it,visData:new st},this.stackLayout.ui.registerPage(this.pages.alertLists.ui.name,()=>this.pages.alertLists),this.stackLayout.ui.registerPage(this.pages.metalSheetLists.ui.name,()=>this.pages.metalSheetLists),this.stackLayout.ui.registerPage(this.pages.vis.ui.name,()=>this.pages.vis),this.stackLayout.ui.registerPage(this.pages.visData.ui.name,()=>this.pages.visData)}createDrawerItem(t,e,i){const s=new Y;s.innerHTML=`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-button
                        style="justify-content: flex-start;"
                        variant="ghost"
                        color="primary"
                    >
                        ${t}
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
        `;const o=s.querySelector("ui-button");e?o.ui.events.on("click",()=>{this.uiDrawer.ui.open=!1,e&&e()}):o.ui.disable();const l=s.querySelector("ui-icon-button");return i?l.ui.events.on("click",()=>{s.parentElement.removeChild(s),i&&i()}):l.ui.disable(),s}export(t,e,i){const s=`data:${e};charset=utf-8,${encodeURIComponent(i)}`,o=document.createElement("a");o.href=s,o.download=t,o.click()}import(t){const e=document.createElement("input");e.type="file",e.onchange=i=>{const s=i.currentTarget.files[0];if(!s)return;const o=new FileReader;o.onload=()=>{if(typeof o.result=="string")try{t(s,o.result,this.uiStore)}catch(l){alert(`Parse data failed: ${l}`)}},o.onerror=()=>{alert(`Read file "${s.name}" failed!`)},o.readAsText(s)},e.click()}getFileName(t){const e=new Date,i=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");switch(t){case"metalSheetLists":return`BlechListen_${i}-${s}-${o}.json`;default:return t}}onAlertLists(t){const e=[...this.uiDrawerGroups.alertLists.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.alertLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.alertLists.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.pages.alertLists.alertList=i,this.stackLayout.ui.setPage(this.pages.alertLists.ui.name)},()=>{this.uiStore.ui.update("alertLists",s=>s.filter(o=>o.title!==i.title))}))}onMetalSheetLists(t){const e=[...this.uiDrawerGroups.metalSheetLists.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.metalSheetLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.metalSheetLists.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.metalSheetLists.ui.name)},()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(o=>o.title!==i.title))}))}onVis(t){const e=[...this.uiDrawerGroups.vis.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.vis.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.vis.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.vis.ui.name)},()=>{this.uiStore.ui.update("vis",s=>s.filter(o=>o.title!==i.title))}))}onVisData(t){const e=[...this.uiDrawerGroups.visData.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.visData.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.visData.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.visData.ui.name)},()=>{this.uiStore.ui.update("visData",s=>s.filter(o=>o.title!==i.title))}))}};a(Et,"register",()=>{Ft.register(),Dt.register(),It.register(),jt.register(),Nt.register(),Bt.register(),K.register(),Yt.register(),Rt.register(),W.register(),q.register(),qt.register(),Xt.register(),Ot.register(),Zt.register(),Y.register(),U.register(),X.register(),_.register(),tt.register(),et.register(),it.register(),st.register(),customElements.define("pg-app",Et)});let Kt=Et;function hi(r,t,e){const i=JSON.parse(t);if(typeof i.timestamp!="number")throw"invalid timestamp";if(typeof i.title!="string")throw"invalid title";if(typeof i.value!="string"||!i.value)throw"invalid value";if(!Array.isArray(i.data))throw"invalid data array";for(let s=0;s<i.data.length;s++){const o=i.data[s];if(typeof o.from!="number"||typeof o.to!="number")throw`data entry (index: ${s}): invalid from/to`;if(typeof o.alert!="string")throw`data entry (index: ${s}): invalid alert`;if(!Array.isArray(o.desc))throw`data entry (index: ${s}): invalid desc array`;if(o.desc.filter(l=>typeof l!="string").length)throw`data entry (index: ${s}): invalid desc`}e.ui.update("alertLists",s=>[...s,i])}function di(r,t,e){const i=JSON.parse(t);if(!Array.isArray(i))throw"invalid data";for(const s of i){if(typeof s.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(s.header))throw'invalid data type for "header" entry';if(!Array.isArray(s.data))throw'invalid data type for "data" entry';for(const o of s.header)if(typeof o!="string")throw"header(s) needs to be from type string";for(const o of s.data){if(!Array.isArray(o))throw'invalid type for "data" item';for(const l of o)if(typeof l!="string")throw"data item(s) needs to be from type string"}}e.ui.set("metalSheetLists",i)}function pi(r,t,e){const i=p=>{const[f,m]=p.split(/[xX]/),h=parseFloat(f),c=parseFloat(m);return!h||!c?`${h}x${c}`:`${h>c?h:c}x${h<c?h:c}`},s=p=>{let f="",m="";for(let h=0;h<p.length;h++)if(p[h].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){m=i(p[h]),p=p.slice(h+1);break}else f+=p[h]+" ";return{productName:f.trim(),format:i(m),newRest:p.map(h=>h.trim()).filter(h=>!!h)}},o=(p,f)=>{if(!f)return;const m={title:p,data:[]},h=f.split(`
`);for(let c=0;c<h.length;c++){if(!h[c])continue;let[x,...L]=h[c].trim().replace(/\t/g," ").split(" ");x=x.trim();const{productName:Mt,format:Ut,newRest:At}=s(L);if(!Ut)throw`missing format for "${Mt}" (lotto: "${x}") in vis (txt) data!`;if(!(At[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${Mt}" with lotto "${x}"!`;const me=At.shift()||"",ge=At.join(" ");m.data.push({lotto:x,name:Mt,format:Ut,thickness:parseFloat(me.replaceAll(",",".")),stamp:ge})}return m},l=r.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),d=o(l,t);e.ui.update("vis",p=>(p.unshift(d),p))}function mi(r,t,e){const i=JSON.parse(t);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const s of i.data){if(typeof s.key!="string"&&typeof s.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(s.lotto!==null&&typeof s.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(s.format!==null&&typeof s.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(s.thickness!==null&&typeof s.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(s.stamp!==null&&typeof s.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}e.ui.update("visData",s=>(s.unshift(i),s))}ke({immediate:!0,onRegistered(r){console.warn("register..."),r.update()}});Kt.register();
