var Ve=Object.defineProperty;var Fe=T=>{throw TypeError(T)};var Ze=(T,t,e)=>t in T?Ve(T,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):T[t]=e;var G=(T,t,e)=>Ze(T,typeof t!="symbol"?t+"":t,e),Ke=(T,t,e)=>t.has(T)||Fe("Cannot "+e);var bt=(T,t,e)=>(Ke(T,t,"read from private field"),e?e.call(T):t.get(T)),je=(T,t,e)=>t.has(T)?Fe("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(T):t.set(T,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const scriptRel="modulepreload",assetsURL=function(T){return"/pg-vis.github.io/"+T},seen={},__vitePreload=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=assetsURL(a),a in seen)return;seen[a]=!0;const u=a.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":scriptRel,u||(y.as="script",y.crossOrigin=""),y.href=a,l&&y.setAttribute("nonce",l),document.head.appendChild(y),u)return new Promise((m,v)=>{y.addEventListener("load",m),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function registerSW(T={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:n,onRegistered:r,onRegisteredSW:s,onRegisterError:l}=T;let a,u;const g=async(m=!0)=>{await u};async function y(){if("serviceWorker"in navigator){if(a=await __vitePreload(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(m=>{l==null||l(m)}),!a)return;a.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),a.addEventListener("installed",m=>{m.isUpdate||n==null||n()}),a.register({immediate:t}).then(m=>{s?s("/pg-vis.github.io/sw.js",m):r==null||r(m)}).catch(m=>{l==null||l(m)})}}return u=y(),g}const defaultOptions$1={onDragStart:null,onDragging:null,onDragEnd:null};function create$1(T,t={}){t={...defaultOptions$1,...t};const e=()=>{const s=[...T.parentNode.children].indexOf(T);T.draggable=!0,T.ondragstart=l=>{l.dataTransfer.effectAllowed="move",l.dataTransfer.dropEffect="move",l.dataTransfer.setData("text/plain",s.toString()),t.onDragStart&&t.onDragStart(s)},T.ondragover=l=>(l.preventDefault(),!1),T.ondragenter=l=>{l.preventDefault(),t.onDragging&&t.onDragging(s)},T.ondrop=l=>{l.preventDefault(),l.dataTransfer.dropEffect="move";const a=parseInt(l.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(a,s)}},n=()=>{T.draggable=!1,T.ondragstart=null,T.ondragover=null,T.ondragenter=null,T.ondrop=null};return e(),{update(r){t={...defaultOptions$1,...r},n(),e()},destroy:n}}var pt;class Events{constructor(){je(this,pt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return bt(this,pt)[t]||(bt(this,pt)[t]=[]),bt(this,pt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!bt(this,pt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let n=!1,r=0;for(const s of bt(this,pt)[t])s===e&&(bt(this,pt)[t].splice(r,1),n=!0),r++;if(!n)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(bt(this,pt)[t])for(const n of bt(this,pt)[t])n(e);return this}}pt=new WeakMap;function rippleStart(T,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,T.currentTarget.appendChild(e);const n=T.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${n.height/2}px`,e.style.left=`${n.width/2}px`):(e.style.top=`${T.clientY-n.top}px`,e.style.left=`${T.clientX-n.left}px`);const r=Math.max(n.width,n.height)*.02;return e.style.transform=`scale(${r}) translate(0, 0)`,e}function rippleStop(T){T&&(T.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&T.remove()}),T.style.opacity="0")}const defaultOptions={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function create(T,t={}){t={...defaultOptions,...t};let e;const n=s=>{e=rippleStart(s,t)},r=()=>{rippleStop(e)};return T.classList.add("ripple-container"),T.style.overflow="hidden",t.useClick===!0?T.addEventListener("click",s=>{e=rippleStart(s,t),rippleStop(e)}):(T.addEventListener("pointerdown",n),T.addEventListener("pointerup",r),T.addEventListener("pointerleave",r)),()=>{T.classList.remove("ripple-container"),T.removeEventListener("pointerdown",n),T.removeEventListener("pointerup",r),T.removeEventListener("pointerleave",r)}}const html=String.raw;class CleanUp{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const defaultFlex="1",content$V=html`
    <style></style>
    <slot></slot>
`,kt=class kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$V,this.ui={root:this,cleanup:new CleanUp,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):defaultFlex},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"flex":this.updateStyle({flex:n||defaultFlex});break}}updateStyle({flex:t=defaultFlex}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};G(kt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",kt)}),G(kt,"observedAttributes",["flex"]);let UIFlexGridItem=kt;const defaultGap$1="0",content$U=`
    <style></style>
    <slot></slot>
`,St=class St extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$U,this.ui={root:this,cleanup:new CleanUp,getGap(){return this.root.getAttribute("gap")||defaultGap$1},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"gap":this.updateStyle({gap:n||defaultGap$1});break}}updateStyle({gap:t=defaultGap$1}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};G(St,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",St)}),G(St,"observedAttributes",["gap"]);let UIFlexGridRow=St;const defaultGap="0",content$T=`
    <style></style>
    <slot></slot>
`,xt=class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$T,this.ui={root:this,cleanup:new CleanUp,getGap(){return this.root.getAttribute("gap")||defaultGap},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"gap":this.updateStyle({gap:n||defaultGap});break}}updateStyle({gap:t=defaultGap}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};G(xt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",xt)}),G(xt,"observedAttributes",["gap"]);let UIFlexGrid=xt;const content$S=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: flex !important;
            position: absolute !important;
            z-index: 100;
            background-color: var(--ui-backdrop-bgColor);
            -webkit-backdrop-filter: var(--ui-backdropFilter);
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
`,Ht=class Ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$S,this.ui={root:this,cleanup:new CleanUp,getLeftItems(){return[...this.root.querySelectorAll('[slot="left"]')]},getCenterItems(){return[...this.root.querySelectorAll('[slot="center"]')]},getRightItems(){return[...this.root.querySelectorAll('[slot="right"]')]}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(Ht,"register",()=>{UIFlexGridRow.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Ht)});let UIAppBar=Ht;const content$R=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    </style>

    <slot></slot>
`,Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$R,this.ui={root:this,cleanup:new CleanUp,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getChild(){return this.root.querySelector("*")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(Pt,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Pt)});let UIAppBarItem=Pt;const content$Q=html`
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
`,_t=class _t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$Q,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"no-ripple":n!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":n!==null&&(["primary","secondary","destructive"].includes(n)?this.style.color=null:this.style.color=n);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};G(_t,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",_t)}),G(_t,"observedAttributes",["no-ripple","color"]);let UIButton=_t;const content$P=html`
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
`,Ct=class Ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$P,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"no-ripple":n!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":n!==null&&(["primary","secondary","destructive"].includes(n)?this.style.color=null:this.style.color=n);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};G(Ct,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Ct)}),G(Ct,"observedAttributes",["no-ripple","color"]);let UIIconButton=Ct;const content$O=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;
            width: 100%;
            max-width: 65rem;
            margin: 0 auto !important;
            padding: var(--ui-spacing);
        }
    </style>

    <slot></slot>
`,Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$O,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(Ut,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ut)});let UIContainer=Ut;const content$N=html`
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
                d="M12 6V18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M6 12H18"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$N}};G(Ft,"register",()=>{customElements.get("svg-plus")||customElements.define("svg-plus",Ft)});let SvgPlus=Ft;const content$M=html`
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
`,jt=class jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$M}};G(jt,"register",()=>{customElements.get("svg-chevron-left")||customElements.define("svg-chevron-left",jt)});let SvgChevronLeft=jt;const content$L=html`
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
                d="M17 9.5L12 14.5L7 9.5"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Gt=class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$L}};G(Gt,"register",()=>{customElements.get("svg-chevron-down")||customElements.define("svg-chevron-down",Gt)});let SvgChevronDown=Gt;const content$K=html`
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
`,Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$K}};G(Nt,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",Nt)});let SvgClose=Nt;const content$J=html`
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
                d="M5 12V18C5 18.5523 5.44772 19 6 19H18C18.5523 19 19 18.5523 19 18V12"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
            <path
                d="M12 3L12 15M12 15L16 11M12 15L8 11"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$J}};G(qt,"register",()=>{customElements.get("svg-download")||customElements.define("svg-download",qt)});let SvgDownload=qt;const content$I=html`
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
                d="M15.6287 5.12132L4.31497 16.435M15.6287 5.12132L19.1642 8.65685M15.6287 5.12132L17.0429 3.70711C17.4334 3.31658 18.0666 3.31658 18.4571 3.70711L20.5784 5.82843C20.969 6.21895 20.969 6.85212 20.5784 7.24264L19.1642 8.65685M7.85051 19.9706L4.31497 16.435M7.85051 19.9706L19.1642 8.65685M7.85051 19.9706L3.25431 21.0312L4.31497 16.435"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$I}};G(Vt,"register",()=>{customElements.get("svg-pen")||customElements.define("svg-pen",Vt)});let SvgPen=Vt;const content$H=html`
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
                d="M13 3L16 6L19 9M13 3L5 3L5 21L19 21L19 9M13 3L13 9L19 9"
                stroke="currentColor"
                stroke-linejoin="round"
            ></path>
        </g>
    </svg>
`,Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$H}};G(Zt,"register",()=>{customElements.get("svg-document-new")||customElements.define("svg-document-new",Zt)});let SvgDocumentNew=Zt;const content$G=html`
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
`,Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$G}};G(Kt,"register",()=>{customElements.get("svg-trash")||customElements.define("svg-trash",Kt)});let SvgTrash=Kt;const content$F=html`
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
`,Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$F}};G(Wt,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",Wt)});let SvgSearch=Wt;const content$E=html`
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
                d="M13.5 2L13.9961 1.93798C13.9649 1.68777 13.7522 1.5 13.5 1.5V2ZM10.5 2V1.5C10.2478 1.5 10.0351 1.68777 10.0039 1.93798L10.5 2ZM13.7747 4.19754L13.2786 4.25955C13.3047 4.46849 13.4589 4.63867 13.6642 4.68519L13.7747 4.19754ZM16.2617 5.22838L15.995 5.6513C16.1731 5.76362 16.4024 5.75233 16.5687 5.62306L16.2617 5.22838ZM18.0104 3.86826L18.364 3.51471C18.1857 3.3364 17.9025 3.31877 17.7034 3.47359L18.0104 3.86826ZM20.1317 5.98958L20.5264 6.29655C20.6812 6.09751 20.6636 5.81434 20.4853 5.63603L20.1317 5.98958ZM18.7716 7.73831L18.3769 7.43134C18.2477 7.59754 18.2364 7.82693 18.3487 8.00503L18.7716 7.73831ZM19.8025 10.2253L19.3148 10.3358C19.3613 10.5411 19.5315 10.6953 19.7404 10.7214L19.8025 10.2253ZM22 10.5H22.5C22.5 10.2478 22.3122 10.0351 22.062 10.0039L22 10.5ZM22 13.5L22.062 13.9961C22.3122 13.9649 22.5 13.7522 22.5 13.5H22ZM19.8025 13.7747L19.7404 13.2786C19.5315 13.3047 19.3613 13.4589 19.3148 13.6642L19.8025 13.7747ZM18.7716 16.2617L18.3487 15.995C18.2364 16.1731 18.2477 16.4025 18.3769 16.5687L18.7716 16.2617ZM20.1317 18.0104L20.4853 18.364C20.6636 18.1857 20.6812 17.9025 20.5264 17.7034L20.1317 18.0104ZM18.0104 20.1317L17.7034 20.5264C17.9025 20.6812 18.1857 20.6636 18.364 20.4853L18.0104 20.1317ZM16.2617 18.7716L16.5687 18.3769C16.4024 18.2477 16.1731 18.2364 15.995 18.3487L16.2617 18.7716ZM13.7747 19.8025L13.6642 19.3148C13.4589 19.3613 13.3047 19.5315 13.2786 19.7404L13.7747 19.8025ZM13.5 22V22.5C13.7522 22.5 13.9649 22.3122 13.9961 22.062L13.5 22ZM10.5 22L10.0039 22.062C10.0351 22.3122 10.2478 22.5 10.5 22.5V22ZM10.2253 19.8025L10.7214 19.7404C10.6953 19.5315 10.5411 19.3613 10.3358 19.3148L10.2253 19.8025ZM7.73832 18.7716L8.00504 18.3487C7.82694 18.2364 7.59756 18.2477 7.43135 18.3769L7.73832 18.7716ZM5.98959 20.1317L5.63604 20.4853C5.81435 20.6636 6.09752 20.6812 6.29656 20.5264L5.98959 20.1317ZM3.86827 18.0104L3.4736 17.7034C3.31878 17.9025 3.33641 18.1857 3.51472 18.364L3.86827 18.0104ZM5.22839 16.2617L5.62307 16.5687C5.75234 16.4025 5.76363 16.1731 5.65131 15.995L5.22839 16.2617ZM4.19754 13.7747L4.68519 13.6642C4.63867 13.4589 4.46849 13.3047 4.25955 13.2786L4.19754 13.7747ZM2 13.5H1.5C1.5 13.7522 1.68777 13.9649 1.93798 13.9961L2 13.5ZM2 10.5L1.93798 10.0039C1.68777 10.0351 1.5 10.2478 1.5 10.5H2ZM4.19754 10.2253L4.25955 10.7214C4.46849 10.6953 4.63867 10.5411 4.68519 10.3358L4.19754 10.2253ZM5.22839 7.73831L5.65131 8.00503C5.76363 7.82693 5.75234 7.59755 5.62307 7.43134L5.22839 7.73831ZM3.86827 5.98959L3.51472 5.63603C3.33641 5.81434 3.31878 6.09751 3.47359 6.29656L3.86827 5.98959ZM5.98959 3.86827L6.29656 3.47359C6.09752 3.31878 5.81434 3.33641 5.63604 3.51471L5.98959 3.86827ZM7.73832 5.22839L7.43135 5.62306C7.59755 5.75233 7.82694 5.76363 8.00504 5.6513L7.73832 5.22839ZM10.2253 4.19754L10.3358 4.68519C10.5411 4.63867 10.6953 4.46849 10.7214 4.25955L10.2253 4.19754ZM13.5 1.5H10.5V2.5H13.5V1.5ZM14.2708 4.13552L13.9961 1.93798L13.0039 2.06202L13.2786 4.25955L14.2708 4.13552ZM16.5284 4.80547C15.7279 4.30059 14.8369 3.92545 13.8851 3.70989L13.6642 4.68519C14.503 4.87517 15.2886 5.20583 15.995 5.6513L16.5284 4.80547ZM16.5687 5.62306L18.3174 4.26294L17.7034 3.47359L15.9547 4.83371L16.5687 5.62306ZM17.6569 4.22182L19.7782 6.34314L20.4853 5.63603L18.364 3.51471L17.6569 4.22182ZM19.7371 5.68261L18.3769 7.43134L19.1663 8.04528L20.5264 6.29655L19.7371 5.68261ZM20.2901 10.1149C20.0746 9.16313 19.6994 8.27213 19.1945 7.47158L18.3487 8.00503C18.7942 8.71138 19.1248 9.49695 19.3148 10.3358L20.2901 10.1149ZM22.062 10.0039L19.8645 9.72917L19.7404 10.7214L21.938 10.9961L22.062 10.0039ZM22.5 13.5V10.5H21.5V13.5H22.5ZM19.8645 14.2708L22.062 13.9961L21.938 13.0039L19.7404 13.2786L19.8645 14.2708ZM19.1945 16.5284C19.6994 15.7279 20.0746 14.8369 20.2901 13.8851L19.3148 13.6642C19.1248 14.503 18.7942 15.2886 18.3487 15.995L19.1945 16.5284ZM20.5264 17.7034L19.1663 15.9547L18.3769 16.5687L19.7371 18.3174L20.5264 17.7034ZM18.364 20.4853L20.4853 18.364L19.7782 17.6569L17.6569 19.7782L18.364 20.4853ZM15.9547 19.1663L17.7034 20.5264L18.3174 19.7371L16.5687 18.3769L15.9547 19.1663ZM13.8851 20.2901C14.8369 20.0746 15.7279 19.6994 16.5284 19.1945L15.995 18.3487C15.2886 18.7942 14.503 19.1248 13.6642 19.3148L13.8851 20.2901ZM13.9961 22.062L14.2708 19.8645L13.2786 19.7404L13.0039 21.938L13.9961 22.062ZM10.5 22.5H13.5V21.5H10.5V22.5ZM9.72917 19.8645L10.0039 22.062L10.9961 21.938L10.7214 19.7404L9.72917 19.8645ZM7.4716 19.1945C8.27214 19.6994 9.16314 20.0746 10.1149 20.2901L10.3358 19.3148C9.49696 19.1248 8.71139 18.7942 8.00504 18.3487L7.4716 19.1945ZM6.29656 20.5264L8.04529 19.1663L7.43135 18.3769L5.68262 19.7371L6.29656 20.5264ZM3.51472 18.364L5.63604 20.4853L6.34315 19.7782L4.22183 17.6569L3.51472 18.364ZM4.83372 15.9547L3.4736 17.7034L4.26295 18.3174L5.62307 16.5687L4.83372 15.9547ZM3.70989 13.8851C3.92545 14.8369 4.30059 15.7279 4.80547 16.5284L5.65131 15.995C5.20584 15.2886 4.87517 14.503 4.68519 13.6642L3.70989 13.8851ZM1.93798 13.9961L4.13552 14.2708L4.25955 13.2786L2.06202 13.0039L1.93798 13.9961ZM1.5 10.5V13.5H2.5V10.5H1.5ZM4.13552 9.72917L1.93798 10.0039L2.06202 10.9961L4.25955 10.7214L4.13552 9.72917ZM4.80547 7.47159C4.30059 8.27213 3.92545 9.16313 3.70989 10.1149L4.68519 10.3358C4.87517 9.49696 5.20583 8.71138 5.65131 8.00503L4.80547 7.47159ZM3.47359 6.29656L4.83371 8.04528L5.62307 7.43134L4.26295 5.68262L3.47359 6.29656ZM5.63604 3.51471L3.51472 5.63603L4.22182 6.34314L6.34314 4.22182L5.63604 3.51471ZM8.04529 4.83371L6.29656 3.47359L5.68262 4.26294L7.43135 5.62306L8.04529 4.83371ZM10.1149 3.70989C9.16313 3.92545 8.27214 4.30059 7.4716 4.80547L8.00504 5.6513C8.71139 5.20583 9.49696 4.87517 10.3358 4.68519L10.1149 3.70989ZM10.0039 1.93798L9.72917 4.13552L10.7214 4.25955L10.9961 2.06202L10.0039 1.93798Z"
                fill="currentColor"
            ></path>
            <circle
                cx="12"
                cy="12"
                r="4"
                stroke="currentColor"
                stroke-linejoin="round"
            ></circle>
        </g>
    </svg>
`,Jt=class Jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$E}};G(Jt,"register",()=>{customElements.get("svg-settings")||customElements.define("svg-settings",Jt)});let SvgSettings=Jt;const content$D=html`
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
`,Yt=class Yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$D}};G(Yt,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",Yt)});let SvgMenu=Yt;const content$C=html`
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
`,Xt=class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$C}};G(Xt,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",Xt)});let SvgShare=Xt;const content$B=html`
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
            <g filter="url(#filter0_d_15_286)">
                <path
                    d="M3 8.26667V19C3 19.5523 3.44772 20 4 20H20C20.5523 20 21 19.5523 21 19V8.26667M3 8.26667V5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5V8.26667M3 8.26667H21"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></path>
            </g>
            <g filter="url(#filter1_d_15_286)">
                <circle
                    cx="12"
                    cy="14"
                    r="2"
                    stroke="currentColor"
                    stroke-linejoin="round"
                ></circle>
            </g>
            <g filter="url(#filter2_d_15_286)">
                <path
                    d="M7 2V5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </g>
            <g filter="url(#filter3_d_15_286)">
                <path
                    d="M17 2V5"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                ></path>
            </g>
            <defs>
                <filter
                    id="filter0_d_15_286"
                    x="1.5"
                    y="3.5"
                    width="21"
                    height="19"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter1_d_15_286"
                    x="8.5"
                    y="11.5"
                    width="7"
                    height="7"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter2_d_15_286"
                    x="5.5"
                    y="1.5"
                    width="3"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
                <filter
                    id="filter3_d_15_286"
                    x="15.5"
                    y="1.5"
                    width="3"
                    height="6"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                >
                    <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                    ></feFlood>
                    <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                    ></feColorMatrix>
                    <feOffset dy="1"></feOffset>
                    <feGaussianBlur stdDeviation="0.5"></feGaussianBlur>
                    <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
                    ></feColorMatrix>
                    <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_15_286"
                    ></feBlend>
                    <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_15_286"
                        result="shape"
                    ></feBlend>
                </filter>
            </defs>
        </g>
    </svg>
`,Qt=class Qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$B}};G(Qt,"register",()=>{customElements.get("svg-today")||customElements.define("svg-today",Qt)});let SvgToday=Qt;const content$A=html`
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
`,te=class te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$A,this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const n=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=n},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const n=this.shadowRoot.querySelector("dialog"),r=s=>{s.preventDefault()};n.addEventListener("cancel",r),this.cleanup.add(()=>{t.removeEventListener("click",e),n.removeEventListener("cancel",r)})}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}};G(te,"register",()=>{SvgClose.register(),UIIconButton.register(),UIFlexGridRow.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",te)});let UIDialog=te;const zIndex=150,content$z=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;

            position: absolute !important;
            z-index: ${zIndex};
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;

            overflow: hidden;

            transition: left 0s ease 0.5s;
        }

        :host([open]) {
            background-color: var(--ui-backdrop-bgColor);
            -webkit-backdrop-filter: var(--ui-backdropFilter);
            backdrop-filter: var(--ui-backdropFilter);

            left: 0;

            transition: none;
        }

        aside {
            position: absolute;
            z-index: ${zIndex};
            top: 0;
            left: -100%;
            width: 18em;
            max-width: 100%;
            height: 100%;

            overflow-x: hidden;
            overflow-y: auto;
            scroll-behavior: smooth;

            -ms-overflow-style: none;
            scrollbar-width: none;

            /*
            background-color: var(--ui-card-bgColor);
            color: var(--ui-card-color);
            */
            border-right: 1px solid var(--ui-card-borderColor);
            background-color: var(--ui-backdrop-bgColor);
            -webkit-backdrop-filter: var(--ui-backdropFilter);
            backdrop-filter: var(--ui-backdropFilter);

            transition: left 0.5s ease;
        }

        aside::-webkit-scrollbar {
            display: none;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`,Lt=class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$z,this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,aside:this.shadowRoot.querySelector("aside"),events:new Events,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=n=>{n.stopPropagation(),this.ui.setOpen(!1)},e=n=>{n.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"open":n!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};G(Lt,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Lt)}),G(Lt,"observedAttributes",["open"]);let UIDrawer=Lt;const content$y=html`
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
`,ee=class ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$y,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(ee,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",ee)});let UIDrawerGroupItem=ee;const content$x=html`
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
`,Et=class Et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$x,this.ui={root:this,cleanup:new CleanUp,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":n===""?this.removeAttribute("title"):n!==null?this.ui.setTitle(n):this.ui.removeTitle();break}}};G(Et,"register",()=>{UIDrawerGroupItem.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Et)}),G(Et,"observedAttributes",["title"]);let UIDrawerGroup=Et;const content$w=html`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,ie=class ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$w,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(ie,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",ie)});let UIPrimary=ie;const content$v=html`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,re=class re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$v,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(re,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",re)});let UISecondary=re;const content$u=html`
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
`,At=class At extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$u,this.ui={root:this,cleanup:new CleanUp,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(t=>t.click())},onInputClick:async t=>{t.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(t){if(t===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(t){if(t===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"ripple":n!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=n||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=n||"";break}}};G(At,"register",()=>{UIPrimary.register(),UISecondary.register(),customElements.get("ui-label")||customElements.define("ui-label",At)}),G(At,"observedAttributes",["ripple","secondary","primary"]);let UILabel=At;const content$t=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;
            position: relative;
            width: 100%;
            height: fit-content;
        }

        input {
            width: 100%;
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
            border: 1px solid var(--ui-borderColor);
            border-radius: var(--ui-radius);
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
`,Tt=class Tt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$t,this.ui={root:this,cleanup:new CleanUp,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new Events,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){this.input.value=(t||"").toString()},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":let r=this.querySelector('[slot="title"]');if(n===null&&r&&(this.removeChild(r),r=null),n===null)return;r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=n;break;case"type":this.ui.input.type=n||"text";break;case"value":this.ui.setValue(n);break;case"placeholder":this.ui.input.placeholder=n||"";break;case"invalid":this.ui.input.ariaInvalid=n;break;case"min":this.ui.input.min=n||"";break;case"max":this.ui.input.max=n||"";break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};G(Tt,"register",()=>{UISecondary.register(),customElements.get("ui-input")||customElements.define("ui-input",Tt)}),G(Tt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let UIInput=Tt;const content$s=html`
    <style>
        :host {
            display: none;
            align-items: center;

            padding: var(--ui-spacing);
            padding-right: 2.5rem;

            height: calc(1em * var(--ui-lineHeight) + var(--ui-spacing) * 2);

            white-space: nowrap;
            text-overflow: ellipsis;

            transition:
                background-color 0.25s linear,
                color 0.25s linear;

            overflow: hidden;
        }
    </style>

    <slot></slot>
`,ne=class ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$s,this.setAttribute("role","button"),this.ui={root:this,getValue(){return this.root.getAttribute("value")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getSelected(){return this.root.hasAttribute("selected")},setSelected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}}}};G(ne,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",ne)});let UISelectOption=ne;const content$r=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            --ui-bgColor: "transparent";
            --items-length: 0;

            position: relative !important;
            display: block !important;

            width: 100%;
            height: calc(1em * var(--ui-lineHeight) + var(--ui-spacing) * 2);
            transition: height 0.25s ease;

            background-color: var(--ui-bgColor);
            color: var(--ui-color);

            border: 1px solid var(--ui-borderColor);
            border-radius: var(--ui-radius);

            line-height: 1.15;

            overflow: hidden;

            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-select-fontVariation);
        }

        .options {
            cursor: pointer;
            display: none;
            display: flex;
            flex-direction: column;
            min-height: 100%;
        }

        .icon {
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            right: 0;
            width: 2.5rem;
            height: 100%;
            color: var(--ui-primary-bgColor);
        }

        ::slotted(ui-select-option) {
            display: flex;
        }

        :host(.open) {
            height: calc(
                (1em * var(--ui-lineHeight) + var(--ui-spacing) * 2) *
                    var(--items-length)
            );
        }

        :host(.open) .options {
            display: block;
        }

        :host(.open) .icon {
            display: none;
        }

        :host(.open) ::slotted(ui-select-option[selected]) {
            background-color: var(--ui-primary-bgColor);
            color: var(--ui-primary-color);
        }

        :host(.open) ::slotted(ui-select-option:not([selected]):hover) {
            background-color: hsla(var(--ui-color-hsl), 0.1);
        }

        :host(:not(.open))
            .options:has(> ::slotted(ui-select-option[selected])) {
            display: block;
        }

        :host(:not(.open)) ::slotted(ui-select-option:not([selected])) {
            display: none;
        }
    </style>

    <div class="options">
        <div class="icon"><svg-chevron-down></svg-chevron-down></div>

        <slot></slot>
    </div>
`,se=class se extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$r,this.cleanup=new CleanUp,this.ui={cleanup:new CleanUp,events:new Events,root:this,isOpen(){this.root.hasAttribute("open")},open(){this.root.setAttribute("open","")},close(){this.root.removeAttribute("open")},getOptions(){return[...this.root.children].filter(t=>t instanceof UISelectOption)},getSelectedOption(){try{return this.getOptions().find(t=>!!t.ui.getSelected())||null}catch{return null}}}}connectedCallback(){const t=this.shadowRoot.querySelector(".options"),e=async r=>{(r.composedPath()||[]).forEach(s=>{s instanceof UISelectOption&&([...this.querySelectorAll("ui-select-option")].forEach(l=>l.removeAttribute("selected")),s.setAttribute("selected",""),this.ui.events.dispatch("change",s))})},n=r=>{this.classList.toggle("open")?(r.stopPropagation(),this.addEventListener("click",e)):setTimeout(()=>this.removeEventListener("click",e))};t.addEventListener("click",n),this.cleanup.add(()=>{this.removeEventListener("click",n),t.removeEventListener("click",n)}),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}disconnectedCallback(){this.cleanup.run()}};G(se,"register",()=>{SvgChevronDown.register(),UISelectOption.register(),customElements.get("ui-select")||customElements.define("ui-select",se)});let UISelect=se;const content$q=html`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;
            position: relative;
            width: 100%;
            height: fit-content;
        }

        input {
            width: 100%;
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

        :host(:not([no-submit])) input {
            width: calc(100% - 2rem);
        }

        .container {
            position: relative;
            width: 100%;
            border: none;
            border: 1px solid var(--ui-borderColor);
            border-radius: var(--ui-radius);
            transition: border-color 0.25s linear;
            background-color: var(--ui-backdrop-bgColor);
            -webkit-backdrop-filter: var(--ui-backdropFilter);
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
`,It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$q,this.ui={root:this,cleanup:new CleanUp,useStorage:!1,storagePrefix:null,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");t.type="text",t.onkeydown=async n=>{this.ui.hasSubmit()&&n.key==="Enter"&&this.ui.submit.click()},t.oninput=async()=>{this.ui.useStorage&&(e!==null&&clearTimeout(e),e=setTimeout(()=>{localStorage.setItem((this.ui.storagePrefix||"")+this.ui.getKey(),t.value),e=null},250)),this.ui.events.dispatch("input",t.value)};let e=null;return t.onchange=async()=>this.ui.events.dispatch("change",t.value),t})(),events:new Events,setKey(t){if(t===null){this.root.removeAttribute("key"),this.setValue("");return}this.root.setAttribute("key",t),this.setValue(localStorage.getItem(this.storagePrefix+this.getKey()))},getKey(){return this.root.getAttribute("key")||""},hasSubmit(){return!!this.submit.parentElement},disableSubmit(){this.hasSubmit()&&this.submit.parentElement.removeChild(this.submit)},enableSubmit(){if(!this.hasSubmit())return;this.root.shadowRoot.querySelector(".container").appendChild(this.submit)},setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){this.input.value=t||""},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":let r=this.querySelector('[slot="title"]');n===null&&r&&(this.removeChild(r),r=null),r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=n||"";break;case"value":this.ui.setValue(n);break;case"placeholder":this.ui.input.placeholder=n||"";break;case"invalid":this.ui.input.ariaInvalid=n!==null?"":null;break;case"no-submit":n!==null?this.ui.disableSubmit():this.ui.enableSubmit();break;case"use-storage":this.ui.useStorage=n!==null;break;case"storage-prefix":this.ui.storagePrefix=n;break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};G(It,"register",()=>{UISecondary.register(),UIIconButton.register(),SvgSearch.register(),customElements.get("ui-search")||customElements.define("ui-search",It)}),G(It,"observedAttributes",["title","value","placeholder","invalid","no-submit","use-storage","storage-prefix"]);let UISearch=It;const oe=class oe extends HTMLElement{constructor(){super(),this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){if(t===null){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},getHref(){return this.root.getAttribute("href")},setHref(t){if(t===null){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},getFallback(){return this.root.hasAttribute("fallback")},setFallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}}}};G(oe,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",oe)});let UILangType=oe;const Mt=class Mt extends HTMLElement{constructor(){super(),this.ui={root:this,events:new Events,data:{},langType:null,getCurrent(){return this.root.getAttribute("current")},setCurrent(t){if(t===null){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},getFallbackElement(){return this.root.querySelector("ui-lang-type[fallback]")},new(t,e){this.langType=t,this.data=e,this.events.dispatch("change",this.langType)},get(t,e){var n,r;return((r=(n=this.data)==null?void 0:n[t])==null?void 0:r[e])||null},on(t,e,n=!1){if(typeof e!="function")throw"callback is not a function";return n&&e(this.langType),this.events.on(t,e)}}}attributeChangedCallback(t,e,n){switch(t){case"current":n!==null&&this.loadLanguage(n);break}}async loadLanguage(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.getFallbackElement();if(!e)return;if(!e.ui.getHref())throw"Missing href attribute!";const n=await fetch(e.ui.getHref());this.ui.new(e,await n.json())}};G(Mt,"register",()=>{UILangType.register(),customElements.get("ui-lang")||customElements.define("ui-lang",Mt)}),G(Mt,"observedAttributes",["current"]);let UILang=Mt;const content$p=html`
    <style>
        :host {
            position: absolute;
            width: 100%;
            height: 100%;
        }

        .background {
            z-index: 999;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            background-color: var(--ui-backdrop-bgColor);
            -webkit-backdrop-filter: var(--ui-backdropFilter);
            backdrop-filter: var(--ui-backdropFilter);
        }

        .spinner {
            z-index: 1000;
            content: "";
            box-sizing: border-box;
            position: absolute;
            top: 50%;
            left: 50%;
            width: 2.5rem;
            height: 2.5rem;
            margin-top: -1.25rem;
            margin-left: -1.25rem;
            border-radius: 50%;
            border: 2px solid var(--ui-borderColor);
            border-top-color: var(--ui-primary-bgColor);
            animation: spinner 0.6s linear infinite;
        }

        @keyframes spinner {
            to {
                transform: rotate(360deg);
            }
        }
    </style>

    <div class="background"></div>
    <div class="spinner"></div>
`,ae=class ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$p,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(ae,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",ae)});let UISpinner=ae;const innerHTML=html`
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
`,le=class le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=innerHTML,this.ui={root:this,cleanup:new CleanUp,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};G(le,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",le)});let UIStackLayoutPage=le;const content$o=html`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,Dt=class Dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$o,this.ui={root:this,cleanup:new CleanUp,pages:{},stack:[],onpopstate:null,events:new Events,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=null,n=!1){if(this.lock)return;const r=this.pages[t]();this.stack.push(this.root.appendChild(r)),typeof e=="function"&&setTimeout(()=>e(r));let s=null;this.stack.length>1&&!n&&(s=this.stack[this.stack.length-2],s.parentElement.removeChild(s)),this.dispatchChangeEvent(s),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"use-history":n!==null?this.ui.enableHistory():this.ui.disableHistory();break}}};G(Dt,"register",()=>{UIStackLayoutPage.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Dt)}),G(Dt,"observedAttributes",["use-history"]);let UIStackLayout=Dt;const Bt=class Bt extends HTMLElement{constructor(){super(),this.ui={root:this,useStorage:!1,storagePrefix:null,stores:{},events:new Events,get(t){return this.stores[t]},set(t,e,n=!1){if(n&&this.storagePrefix){const r=JSON.parse(localStorage.getItem((this.storagePrefix||"")+t.toString())||"null");this.stores[t]=r??e}else this.stores[t]=e;this.useStorage&&localStorage.setItem((this.storagePrefix||"")+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,n=!1){if(typeof e!="function")throw"callback is not a function";return n&&e(this.get(t)),this.events.on(t,e)}}}attributeChangedCallback(t,e,n){switch(t){case"use-storage":this.ui.useStorage=n!==null;break;case"storage-prefix":this.ui.storagePrefix=n;break}}};G(Bt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Bt)}),G(Bt,"observedAttributes",["use-storage","storage-prefix"]);let UIStore=Bt;const Rt=class Rt extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},getMode(t=document.body){return t.getAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}},mediaChangeHandler:t=>{t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},getAuto(){return!!this.media},setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null;return}if(this.setMode(null,e),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},addTheme(t,e){this.themes[t]=e},setTheme(t){var n;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((n=this.currentTheme)==null?void 0:n.name)==t)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}}}attributeChangedCallback(t,e,n){switch(t){case"auto":this.ui.setAuto(n!==null);break;case"mode":this.ui.setMode(n);break}}};G(Rt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Rt)}),G(Rt,"observedAttributes",["auto","mode"]);let UIThemeHandler=Rt;function registerComponents(){UIAppBarItem.register(),UIAppBar.register(),UIButton.register(),UIIconButton.register(),UIContainer.register(),UIDialog.register(),UIDrawerGroupItem.register(),UIDrawerGroup.register(),UIDrawer.register(),UIFlexGridItem.register(),UIFlexGridRow.register(),UIFlexGrid.register(),UIInput.register(),UISearch.register(),UISelectOption.register(),UISelect.register(),UILangType.register(),UILang.register(),UISpinner.register(),UIStackLayout.register(),UIStackLayoutPage.register(),UIStore.register(),UILabel.register(),UIPrimary.register(),UISecondary.register(),UIThemeHandler.register()}function registerSVGs(){SvgChevronDown.register(),SvgChevronLeft.register(),SvgClose.register(),SvgDocumentNew.register(),SvgDownload.register(),SvgMenu.register(),SvgPen.register(),SvgPlus.register(),SvgSearch.register(),SvgSettings.register(),SvgShare.register(),SvgToday.register(),SvgTrash.register()}const content$n=html`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,ue=class ue extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$n,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.ui.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(createAlert({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};G(ue,"register",()=>{customElements.define("alert-page",ue)});let AlertPage=ue;const content$m=html`
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
`,ce=class ce extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$m,this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.list=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.searchBar=this.querySelector("search-bar"),this.alertPage=new AlertPage,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){const e=(t==null?void 0:t.title)||"",n=e;this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input.ui.setKey(n),setTimeout(()=>this.root.renderList())}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:e})=>{e===!0?(this.searchBar.ui.setActive(!0),await this.search(this.searchBar.ui.input.ui.getValue())):(this.searchBar.ui.setActive(!1),await this.search(""))});let t=null;this.ui.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),n=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let r=0;r<this.list.data.length;r++){if(e.active===!0&&!this.is(this.list.data[r],n))return;setTimeout(()=>this.renderListElement(t,this.list.data[r],r<this.list.data.length-1))}}renderListElement(t,e,n){t.appendChild(createAlert({alert:e,container:"li",hasBorder:n,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const n=[];for(let r=t.from;r<=t.to;r++)n.push(r);return!!`${n.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,n=this.getAlertFromElement(e);this.alertPage.ui.set(n),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(n=>{if(!this.searchBar.ui.isActive()){n.style.display="flex";return}if(this.is(this.getAlertFromElement(n),e)){n.style.display="flex";return}n.style.display="none"})}};G(ce,"register",()=>{customElements.define("alert-lists-page",ce)});let AlertListsPage=ce;const searchBarHeight="4.5em",content$l=html`
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
            height: ${searchBarHeight};
            display: none;
            padding: var(--ui-spacing);
            overflow: hidden;
        }
    </style>

    <ui-search
        style="z-index: 10;"
        title="Alarmsuche (RegEx Mode)"
        no-submit
        use-storage
        storage-prefix="pg-vis:search:"
        key=""
    ></ui-search>
`,he=class he extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$l,this.input=this.shadowRoot.querySelector("ui-search"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,input:this.input,isActive(){return this.root.style.display==="block"},setActive(t){if(t){this.root.style.display="block",this.root.stackLayout.style.setProperty("--search-bar-height",searchBarHeight),this.input.focus();return}this.root.style.display="none",this.root.stackLayout.style.setProperty("--search-bar-height","0rem")},setPrefix(t){this.root.input.ui.storagePrefix="pg-vis:search:"+t}}}};G(he,"register",()=>{customElements.define("search-bar",he)});let SearchBar=he;function createAlert({alert:T,container:t,hasBorder:e=!0,hasRipple:n=!0,onClick:r=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
        <div class="title">${T.alert}</div>

        <div
            class="number"
            style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
        >
            ${T.from===T.to?T.from:`${T.from}..${T.to}`}
        </div>
    `,s.setAttribute("data-from",T.from.toString()),s.setAttribute("data-to",T.to.toString()),s.setAttribute("data-alert",T.alert),s.setAttribute("data-desc",T.desc.join(`
`)),s.onclick=r,n&&(create(s),s.style.cursor="pointer",s.role="button"),s}function getFileName$2(T){return`AlarmListen_${T.title}.json`}function getKey$2(T){return`${T.title}`}const content$k=html`
    <ui-flex-grid-row style="justify-content: flex-end;" gap="0.25rem">
        <ui-flex-grid-item flex="0">
            <ui-button name="delete-table" variant="full" color="destructive">
                Delete Table
            </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item flex="0">
            <ui-button name="new-entry" variant="full" color="primary">
                Neuer Eintrag
            </ui-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,de=class de extends UIFlexGridRow{constructor(){super(),this.innerHTML=content$k,this.ui={...this.ui,events:new Events}}connectedCallback(){super.connectedCallback();const t=this.querySelector('[name="new-entry"]'),e=this.querySelector('[name="delete-table"]');this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("new-entry",null)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete-table",null)}))}};G(de,"register",()=>{customElements.define("metal-sheet-actions",de)});let MetalSheetActions=de;function getFileName$1(T){return`BlechListen_${T.format}_${T.toolID}.json`}function getKey$1(T){return`${T.format}:${T.toolID}`}const gridContent$5=html`
    <ui-flex-grid-item name="format">
        <ui-input type="text" title="Format"></ui-input>
    </ui-flex-grid-item>

    <ui-flex-grid-item name="toolID">
        <ui-input type="text" title="Tool ID"></ui-input>
    </ui-flex-grid-item>

    <ui-flex-grid-item name="press">
        <ui-label primary="Presse">
            <ui-select slot="input">
                <ui-select-option value="-1" selected>-</ui-select-option>
                <ui-select-option value="0">0</ui-select-option>
                <ui-select-option value="2">2</ui-select-option>
                <ui-select-option value="3">3</ui-select-option>
                <ui-select-option value="4">4</ui-select-option>
                <ui-select-option value="5">5</ui-select-option>
            </ui-select>
        </ui-label>
    </ui-flex-grid-item>
`,pe=class pe extends UIDialog{constructor(t){switch(super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$5,e})()),t){case"create":this.ui.setTitle("Neue Liste");break;case"edit":this.ui.setTitle("Liste Bearbeiten");break}this.ui={...this.ui,root:this,mode:t,originFormat:"",originToolID:"",set(e,n,r=-1){this.root.querySelector('[name="format"] ui-input').ui.setValue(e),this.root.querySelector('[name="toolID"] ui-input').ui.setValue(n),this.root.querySelector('[name="press"] ui-select').ui.getOptions().forEach(u=>{u.ui.setSelected(parseInt(u.ui.getValue())===r)}),this.originFormat=e,this.originToolID=n}},this.uiStore=document.querySelector("ui-store"),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=this.getData();n!==null&&(this.ui.events.dispatch("submit",n),this.ui.close())}),this.appendChild(t)}getData(){var u;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.getValue();const n=this.querySelector('[name="toolID"] ui-input');t.toolID=n.ui.getValue();const r=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((u=r.ui.getSelectedOption())==null?void 0:u.ui.getValue())||"-1",10),t.format==="")return e.ui.setInvalid(!0),null;const s=getKey$1({format:this.ui.originFormat,toolID:this.ui.originToolID}),l=getKey$1(t),a=this.uiStore.ui.get("metalSheetLists").find(g=>this.ui.mode==="edit"&&s===l?!1:getKey$1(g)===l);return a?(e.ui.setInvalid(a.format===t.format&&a.toolID!==t.toolID),n.ui.setInvalid(a.toolID===t.toolID),null):t}};G(pe,"register",()=>{customElements.define("metal-sheet-create-dialog",pe)});let MetalSheetCreateDialog=pe;const gridContent$4=html``,fe=class fe extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$4,t})()),this.ui.setTitle("Eintrag bearbeiten"),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<t.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
                        <ui-input
                            title="${t[r]}"
                            value="${(e==null?void 0:e[r])||""}"
                        ></ui-input>
                    `,n.appendChild(s)}}},this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="destructive">Delete</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const l=s.querySelector("ui-input");n.push(l.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(t)}};G(fe,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",fe)});let MetalSheetModifyEntryDialog=fe;const gridContent$3=html``,me=class me extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$3,t})()),this.ui.setTitle("Neuer Eintrag"),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<t.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
                        <ui-input
                            title="${t[r]}"
                            value="${(e==null?void 0:e[r])||""}"
                        ></ui-input>
                    `,n.appendChild(s)}}},this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const l=s.querySelector("ui-input");n.push(l.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(t)}};G(me,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",me)});let MetalSheetNewEntryDialog=me;const content$j=html`
    <div
        class="no-scrollbar"
        style="
            width: 100%;
            padding-top: var(--ui-app-bar-height);
            overflow-x: auto;
        "
    >
        <table>
            <thead>
                <tr></tr>
            </thead>
            <tbody></tbody>
        </table>
    </div>

    <br />

    <metal-sheet-actions></metal-sheet-actions>
`,ge=class ge extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$j,this.ui.setName("metal-sheet-lists"),this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.root.list)])],getFileName$1(this.root.list),{type:"application/json"})],title:"Blech Listen",text:`${this.root.list.format} - ${this.root.list.toolID} - ${this.root.list.date}`}),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const n=getKey$1(t);return e=[...e.filter(r=>getKey$1(r)!==n),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(n=>getKey$1(n)!==t),e))}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const e=new MetalSheetCreateDialog("edit");e.ui.set(this.list.format,this.list.toolID,this.list.data.press),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",n=>{this.ui.deleteStore(getKey$1(this.list)),this.list.format=n.format,this.list.toolID=n.toolID,this.list.data.press=n.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}});const t=this.querySelector("metal-sheet-actions");this.ui.cleanup.add(t.ui.events.on("new-entry",()=>this.createNewEntryDialog()),t.ui.events.on("delete-table",()=>{let e="";this.list.toolID?e=`Delete table: ${this.list.format} - ${this.list.toolID}`:e=`Delete table: ${this.list.format}`,window.confirm(e)&&(this.ui.set(null),this.ui.deleteStore(getKey$1(this.list)))}))}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}render(){const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(this.list===null)return;for(const r of this.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerHTML=r,t.appendChild(s)}let n=null;for(let r=0;r<this.list.data.table.data.length;r++){const s=document.createElement("tr");s.style.cursor="pointer",s.role="button",s.onclick=()=>this.createModifyEntryDialog(r),e.appendChild(s),create$1(s,{onDragEnd:(l,a)=>{if(n!==null){if(n<a){let u=this.list.data.table.data;u=[...u.slice(0,n),...u.slice(n+1,a+1),u[n],...u.slice(a+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(n>a){let u=this.list.data.table.data;u=[...u.slice(0,a),u[n],...u.slice(a,n),...u.slice(n+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(u=>{u.style.background="inherit",u.style.color="inherit"}),n=null}},onDragging:l=>{n!==null&&[...e.children].forEach((a,u)=>{if(u!==l){a.style.background="inherit",a.style.color="inherit";return}a.style.background="var(--ui-primary-bgColor)",a.style.color="var(--ui-primary-color)"})},onDragStart:l=>{n=l}});for(const l of this.list.data.table.data[r]){const a=document.createElement("td");a.style.textAlign="center",a.innerHTML=l,s.appendChild(a)}}}createModifyEntryDialog(t){const e=new MetalSheetModifyEntryDialog;e.ui.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",n=>{this.list.data.table.data[t]=n,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new MetalSheetNewEntryDialog;t.ui.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};G(ge,"register",()=>{customElements.define("metal-sheet-lists-page",ge)});let MetalSheetListsPage=ge;const shadowContent$1=html`
    <style>
        :host {
            display: block;
            position: relative;
            overflow: hidden;
            border-top: 1px solid var(--ui-borderColor);
            border-bottom: 1px solid var(--ui-borderColor);
            margin: var(--ui-spacing) 0;
            cursor: pointer;
        }
    </style>

    <slot></slot>
`,content$i=html`
    <ui-flex-grid>
        <ui-flex-grid-row style="font-size: 1.1rem;">
            <ui-flex-grid-item class="flex justify-center align-center">
                <vis-item-content
                    name="lotto"
                    style="font-weight: bold;"
                    align="right"
                ></vis-item-content>

                <vis-item-content
                    name="name"
                    style="font-weight: lighter;"
                ></vis-item-content>
            </ui-flex-grid-item>
        </ui-flex-grid-row>

        <ui-flex-grid-row style="font-size: 0.95rem;">
            <ui-flex-grid-item class="flex justify-center align-center">
                <vis-item-content
                    name="format"
                    align="right"
                ></vis-item-content>

                <vis-item-content name="thickness" flex="0"></vis-item-content>

                <vis-item-content name="stamp"></vis-item-content>
            </ui-flex-grid-item>
        </ui-flex-grid-row>
    </ui-flex-grid>
`,zt=class zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=shadowContent$1,this.innerHTML=content$i,this.cleanup=new CleanUp,this.ui={root:this,setLotto(t){this.root.querySelector('[name="lotto"]').innerHTML=t||""},getLotto(){return this.root.querySelector('[name="lotto"]').innerHTML},setName(t){this.root.querySelector('[name="name"]').innerHTML=t||""},getName(){return this.root.querySelector('[name="name"]').innerHTML},setFormat(t){this.root.querySelector('[name="format"]').innerHTML=t||""},getFormat(){return this.root.querySelector('[name="format"]').innerHTML},setThickness(t){const e=this.root.querySelector('[name="thickness"]');t===null||isNaN(t)?e.innerHTML="":e.innerHTML=t.toString()},getThickness(){return parseFloat(this.root.querySelector('[name="thickness"]').innerHTML)},setStamp(t){this.root.querySelector('[name="stamp"]').innerHTML=t||""},getStamp(){return this.root.querySelector('[name="stamp"]').innerHTML},enableClick(){const t=this.root.onClick.bind(this.root);this.root.addEventListener("click",t),this.root.cleanup.add(create(this.root,{useClick:!0})),this.root.cleanup.add(()=>this.root.removeEventListener("click",t)),this.root.style.cursor="pointer"},disableClick(){this.root.cleanup.run(),this.root.style.cursor="default"},open(t){this.root.stackLayout.ui.setPage("product",e=>{e.ui.set(t)},!0)}},this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){this.hasAttribute("noclick")||this.ui.enableClick()}disconnectedCleanup(){this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"lotto":this.ui.setLotto(n);break;case"name":this.ui.setName(n);break;case"format":this.ui.setFormat(n);break;case"thickness":this.ui.setThickness(n!==null?parseFloat(n):NaN);break;case"stamp":this.ui.setStamp(n);break;case"noclick":n!==null?this.ui.disableClick():this.ui.enableClick();break}}onClick(){const t={lotto:this.ui.getLotto(),name:this.ui.getName(),format:this.ui.getFormat(),thickness:this.ui.getThickness(),stamp:this.ui.getStamp()};this.ui.open(t)}};G(zt,"register",()=>{customElements.define("vis-item",zt)}),G(zt,"observedAttributes",["lotto","name","format","thickness","stamp","noclick"]);let VisItem=zt;const shadowContent=html`
    <style>
        :host {
            padding-top: var(--ui-app-bar-height);
        }
    </style>
`,content$h=html`
    <vis-item noclick></vis-item>
    <div class="content"></div>
`,be=class be extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$h,this.shadowRoot.innerHTML+=shadowContent,this.ui={...this.ui,root:this,set(t){const e=this.root.querySelector("vis-item");this.root.querySelector("vis.content"),e.setAttribute("lotto",t.lotto),e.setAttribute("name",t.name),e.setAttribute("format",t.format),e.setAttribute("thickness",t.thickness.toString()),e.setAttribute("stamp",t.stamp)}}}};G(be,"register",()=>{customElements.define("product-page",be)});let ProductPage=be;const content$g=html`
    <div
        class="no-scrollbar"
        style="
            width: 100%;
            height: 100%;
            padding-top: var(--ui-app-bar-height);
            overflow: auto;
            scroll-behavior: smooth;
        "
    >
        <div class="list"></div>
    </div>
`,ve=class ve extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$g,this.ui.setName("vis"),this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,list:null,set(t){if(this.list=t,this.list===null){this.root.uiStore.ui.set("appBarTitle","Vis"),this.root.uiStore.ui.set("share",null);return}this.root.uiStore.ui.set("appBarTitle",`Vis - ${t.title}`),this.root.render(),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.list)])],getFileName(this.list),{type:"application/json"})]})}},this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.stackLayout.ui.registerPage("product",()=>new ProductPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("product"),this.uiStore.ui.set("share",null)}render(){const t=this.ui.list,e=this.querySelector("div.list");for(const n of t.data)setTimeout(()=>{const r=new VisItem;r.ui.setLotto(n.lotto),r.ui.setName(n.name),r.ui.setFormat(n.format),r.ui.setThickness(n.thickness),r.ui.setStamp(n.stamp),e.appendChild(r)})}};G(ve,"register",()=>{customElements.define("vis-page",ve)});let VisPage=ve;function getFileName(T){return`Vis_${T.date}.json`}function getKey(T){return`${T.title}`}const content$f=html``,ye=class ye extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$f,this.ui.setName("vis-data")}};G(ye,"register",()=>{customElements.define("vis-data-page",ye)});let VisDataPage=ye;const version="v0.0.22";function load(T){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const n of e.currentTarget.files){const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{T(r.result,n)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${n.name}" failed!`)},r.readAsText(n)}},t.click()}function alertLists(T){const t=[],e=T.map(n=>`${n.title}`).sort();for(const n of e)t.push(T.find(r=>`${r.title}`===n));return t}function metalSheetLists(T){let t=[];const e=T.map(n=>getKey$1(n)).sort();for(const n of e)t.push(T.find(r=>getKey$1(r)===n));return t}class Gist{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const n=await e.json();this.data={revision:n.history.length,files:{},owner:{login:n.owner.login}};for(const[r,s]of Object.entries(n.files))this.data.files[r]={filename:s.filename,content:JSON.parse(s.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}const gridContent$2=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
    </ui-flex-grid-item>
`,we=class we extends UIDialog{constructor(t){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$2,e})()),this.ui.setTitle(`Import "${t}"`),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};G(we,"register",()=>{customElements.define("import-dialog",we)});let ImportDialog=we;const gridContent$1=html`
    <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
    </ui-flex-grid-item>
`,ke=class ke extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$1,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",n=>(n.unshift({title:this.name.ui.getValue(),data:[]}),n)),this.ui.close()}),this.appendChild(t)}};G(ke,"register",()=>{customElements.define("new-vis-data-dialog",ke)});let NewVisDataDialog=ke;const gridContent=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
    </ui-flex-grid-item>
`,Se=class Se extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent,t})()),this.ui.setTitle("Gist Token"),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};G(Se,"register",()=>{customElements.define("push-dialog",Se)});let PushDialog=Se;const content$e=html`
    <ui-flex-grid gap="0.25rem">
        <ui-flex-grid-item style="position: relative;" gap="0.25rem">
            <div class="flex row align-center justify-between">
                <ui-primary>GistID</ui-primary>
                <drawer-revision></drawer-revision>
            </div>
            <ui-secondary style="overflow-wrap: anywhere;">&nbsp;</ui-secondary>
        </ui-flex-grid-item>

        <ui-flex-grid-row gap="0.25rem">
            <ui-flex-grid-item>
                <ui-button name="pull" variant="full" color="secondary">
                    Pull
                </ui-button>
            </ui-flex-grid-item>

            <ui-flex-grid-item>
                <ui-button name="push" variant="full" color="secondary">
                    Push
                </ui-button>
            </ui-flex-grid-item>
        </ui-flex-grid-row>
    </ui-flex-grid>
`,xe=class xe extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$e,this.style.display="none",this.style.position="relative",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,onPull:null,onPush:null,pullButton:this.querySelector('[name="pull"]'),pushButton:this.querySelector('[name="push"]'),set(t,e){const n=this.root.querySelector("ui-secondary"),r=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",n.innerHTML=t,r.innerHTML=`Revision: ${e}`):(this.root.style.display="none",n.innerHTML="&nbsp;",r.innerHTML="Revision: -"),this.pullButton.onclick=()=>{this.onPull&&this.onPull(t,e)},this.pushButton.onclick=()=>{this.onPush&&this.onPush(t,e)}}}}};G(xe,"register",()=>{customElements.define("drawer-gist-item",xe)});let DrawerGistItem=xe;async function gistPull(T,t,{beforeUpdate:e=null,update:n,updateRevision:r}){const l=await new Gist(T).get();let a=!1;l.revision>t?a=confirm(`Upgrade zu revision "${l.revision}"`):l.revision<t?a=confirm(`Downgrade auf revision "${l.revision}"`):a=confirm(`Already up to date... (revision: ${l.revision}`),a&&(typeof e=="function"&&await e(),Object.values(l.files).forEach(u=>n(u.content)),r(l.revision))}async function gistPush(T,t,e,{getFileName:n,updateRevision:r}){const s=new PushDialog;s.ui.events.on("close",()=>{document.body.removeChild(s)}),s.ui.events.on("submit",async l=>{if(l===null)return;const a=new Gist(T,l),u=await a.get();if(u.revision>t){alert(`Gist revision is newer then the current revision (${u.revision})`);return}const g=Object.values(u.files).map(v=>JSON.stringify(v.content)).sort(),y=Object.values(e).map(v=>JSON.stringify(v)).sort();if(JSON.stringify(g)===JSON.stringify(y)){alert("Nope, no patching needed... already up to date...");return}const m={};e.forEach(v=>{m[n(v)]={content:JSON.stringify(v)}});for(const v of Object.keys(u.files))Object.hasOwn(m,v)||(m[v]=null);try{console.debug(await a.patch(m))}catch(v){console.error(v);return}r(t+1)}),document.body.appendChild(s),s.ui.open(!0)}const content$d=html`
    <ui-flex-grid-row gap="0.25rem">
        <ui-flex-grid-item>
            <ui-button variant="full" color="primary"> Import </ui-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            class="flex align-center justify-center"
            style="display: none;"
            flex="0"
        >
            <ui-icon-button style="width: 2.5rem; height: 2.5rem;" ghost>
                <svg-download></svg-download>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,_DrawerImportButton=class _DrawerImportButton extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$d,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,importButton:this.querySelector("ui-button"),exportButton:this.querySelector("ui-icon-button"),storeGistKey:null,beforeUpdate:null,onValidate:null,onUpdate:null,async setExportHandler(T){if(T===null){this.exportButton.parentElement.style.display="none";return}this.exportButton.parentElement.style.display="flex",this.exportButton.ui.cleanup.run(),this.exportButton.ui.cleanup.add(this.exportButton.ui.events.on("click",T))},setDisabled(T){T?(this.importButton.ui.disable(),this.exportButton.ui.disable()):(this.importButton.ui.enable(),this.exportButton.ui.enable())}}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.importButton.ui.events.on("click",()=>this.import()))}attributeChangedCallback(name,_oldValue,newValue){switch(name){case"store-gist-key":this.ui.storeGistKey=newValue;break;case"on-validate":newValue===null?this.ui.onValidate=null:this.ui.onValidate=eval(newValue);break;case"on-update":newValue===null?this.ui.onUpdate=null:this.ui.onUpdate=eval(newValue);break;case"disabled":this.ui.setDisabled(newValue!==null);break}}async import(){const T=new ImportDialog("Blech Listen");T.ui.events.on("submit",async t=>{if(this.ui.onValidate===null)throw new Error("onValidate callback missing");if(this.ui.onUpdate===null)throw new Error("onUpdate callback missing");if(t===null){load(async r=>{let s=null;try{s=await this.ui.onValidate(r,null)}catch(l){alert(`Validation failed: ${l}`);return}s!==null&&await this.ui.onUpdate(s)});return}if(this.ui.storeGistKey===null)throw new Error("gist-key missing");const e=new Gist(t);let n;try{n=await e.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storeGistKey}`]={id:t,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.ui.onValidate(n.files[r].content,e.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.ui.beforeUpdate=="function"&&await this.ui.beforeUpdate();for(const r of Object.values(n.files))await this.ui.onUpdate(r.content)}),T.ui.events.on("close",()=>{document.body.removeChild(T)}),document.body.appendChild(T),T.ui.open(!0)}};G(_DrawerImportButton,"register",()=>{customElements.define("drawer-import-button",_DrawerImportButton)}),G(_DrawerImportButton,"observedAttributes",["store-gist-key","type","on-validate","on-update","disabled"]);let DrawerImportButton=_DrawerImportButton;const content$c=html`
    <ui-button variant="full" color="secondary">Neu</ui-button>
`,_e=class _e extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$c,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,button:this.querySelector("ui-button")}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}onClick(){const t=new MetalSheetCreateDialog("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",n=>(n=[...n,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],n))}),document.body.appendChild(t),t.ui.open(!0)}};G(_e,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",_e)});let DrawerNewMetalSheetListButton=_e;const Ce=class Ce extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};G(Ce,"register",()=>{customElements.define("drawer-revision",Ce)});let DrawerRevision=Ce;const content$b=html`
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
`,Le=class Le extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$b,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title)}}}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(t){const e=document.createElement("span");e.innerHTML=html` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};G(Le,"register",()=>{customElements.define("pg-drawer-item-alert-list",Le)});let PGDrawerItemAlertList=Le;const content$a=html`
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
`,Ee=class Ee extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$a,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){var n;this.data=t;let e=-1;typeof((n=t.data)==null?void 0:n.press)=="number"&&(e=t.data.press),this.root.setText(t.format,t.toolID,e)}}}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(t,e,n){const r=document.createElement("span");r.innerHTML=html`
            <ui-primary>
                <span>${t}</span>
                <span style="font-size: 0.85em;">
                    ${n>-1?"[P"+n+"]":""}
                </span>
            </ui-primary>
            <br />
        `,r.innerHTML+=html`
            <ui-secondary>
                <span>${e}</span>
            </ui-secondary>
        `,this.querySelector("ui-button").appendChild(r)}};G(Ee,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",Ee)});let PGDrawerItemMetalSheetList=Ee;const content$9=html`
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
`,Ae=class Ae extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$9,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title,null)}}}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(t,e=null){const n=document.createElement("span");n.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(n.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(n)}};G(Ae,"register",()=>{customElements.define("pg-drawer-item-vis-data",Ae)});let PGDrawerItemVisData=Ae;const content$8=html`
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
`,Te=class Te extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$8,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title)}}}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(t){const e=document.createElement("span");e.innerHTML=html` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};G(Te,"register",()=>{customElements.define("pg-drawer-item-vis",Te)});let PGDrawerItemVis=Te;const defaultItems$2=2,storeGistKey$2="alert-lists",storeDataKey$2="alertLists",content$7=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$2}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>
`,Ie=class Ie extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$7,this.style.position="relative",this.ui.setTitle("Alarm Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$2,this.storeAlertListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$2,[])},t.ui.onUpdate=this.update.bind(this)}async validate(t){const e=n=>new Error(`invalid data for alert:
${JSON.stringify(n,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let n=0;n<t.data.length;n++){const r=t.data[n];if(typeof r.from!="number"||typeof r.to!="number"||typeof r.alert!="string"||!Array.isArray(r.desc)||(typeof r.desc=="string"&&(r.desc=r.desc.split(`
`)),r.desc.filter(s=>typeof s!="string").length))throw e(r)}return t}async update(t){console.debug("[PGDrawerAlertLists.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey:storeDataKey$2,getKey:getKey$2})}async storeGistHandler(t){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey:storeGistKey$2,storeDataKey:storeDataKey$2,getFileName:getFileName$2,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(t){if(!t)return;const e=[...this.children].slice(defaultItems$2);for(;e.length>0;)this.removeChild(e.pop());for(const n of alertLists(t)){const r=new PGDrawerItemAlertList;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",l=>{l.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.title} - ${n.date}`)&&this.uiStore.ui.update(storeDataKey$2,s=>s.filter(l=>l.title!==n.title))})),this.appendChild(r)}}};G(Ie,"register",()=>{customElements.define("pg-drawer-alert-lists",Ie)});let PGDrawerAlertLists=Ie;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var FileSaver_min={exports:{}};(function(T,t){(function(e,n){n()})(commonjsGlobal,function(){function e(g,y){return typeof y>"u"?y={autoBom:!1}:typeof y!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),y={autoBom:!y}),y.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function n(g,y,m){var v=new XMLHttpRequest;v.open("GET",g),v.responseType="blob",v.onload=function(){u(v.response,y,m)},v.onerror=function(){console.error("could not download file")},v.send()}function r(g){var y=new XMLHttpRequest;y.open("HEAD",g,!1);try{y.send()}catch{}return 200<=y.status&&299>=y.status}function s(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var y=document.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(y)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof commonjsGlobal=="object"&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(g,y,m){var v=l.URL||l.webkitURL,h=document.createElement("a");y=y||g.name||"download",h.download=y,h.rel="noopener",typeof g=="string"?(h.href=g,h.origin===location.origin?s(h):r(h.href)?n(g,y,m):s(h,h.target="_blank")):(h.href=v.createObjectURL(g),setTimeout(function(){v.revokeObjectURL(h.href)},4e4),setTimeout(function(){s(h)},0))}:"msSaveOrOpenBlob"in navigator?function(g,y,m){if(y=y||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(e(g,m),y);else if(r(g))n(g,y,m);else{var v=document.createElement("a");v.href=g,v.target="_blank",setTimeout(function(){s(v)})}}:function(g,y,m,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof g=="string")return n(g,y,m);var h=g.type==="application/octet-stream",w=/constructor/i.test(l.HTMLElement)||l.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||h&&w||a)&&typeof FileReader<"u"){var f=new FileReader;f.onloadend=function(){var x=f.result;x=c?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=x:location=x,v=null},f.readAsDataURL(g)}else{var d=l.URL||l.webkitURL,k=d.createObjectURL(g);v?v.location=k:location.href=k,v=null,setTimeout(function(){d.revokeObjectURL(k)},4e4)}});l.saveAs=u.saveAs=u,T.exports=u})})(FileSaver_min);var FileSaver_minExports=FileSaver_min.exports;const FileSaver=getDefaultExportFromCjs(FileSaver_minExports);function commonjsRequire(T){throw new Error('Could not dynamically require "'+T+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jszip_min={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(T,t){(function(e){T.exports=e()})(function(){return function e(n,r,s){function l(g,y){if(!r[g]){if(!n[g]){var m=typeof commonjsRequire=="function"&&commonjsRequire;if(!y&&m)return m(g,!0);if(a)return a(g,!0);var v=new Error("Cannot find module '"+g+"'");throw v.code="MODULE_NOT_FOUND",v}var h=r[g]={exports:{}};n[g][0].call(h.exports,function(w){var c=n[g][1][w];return l(c||w)},h,h.exports,e,n,r,s)}return r[g].exports}for(var a=typeof commonjsRequire=="function"&&commonjsRequire,u=0;u<s.length;u++)l(s[u]);return l}({1:[function(e,n,r){var s=e("./utils"),l=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(u){for(var g,y,m,v,h,w,c,f=[],d=0,k=u.length,x=k,L=s.getTypeOf(u)!=="string";d<u.length;)x=k-d,m=L?(g=u[d++],y=d<k?u[d++]:0,d<k?u[d++]:0):(g=u.charCodeAt(d++),y=d<k?u.charCodeAt(d++):0,d<k?u.charCodeAt(d++):0),v=g>>2,h=(3&g)<<4|y>>4,w=1<x?(15&y)<<2|m>>6:64,c=2<x?63&m:64,f.push(a.charAt(v)+a.charAt(h)+a.charAt(w)+a.charAt(c));return f.join("")},r.decode=function(u){var g,y,m,v,h,w,c=0,f=0,d="data:";if(u.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var k,x=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===a.charAt(64)&&x--,u.charAt(u.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=l.uint8array?new Uint8Array(0|x):new Array(0|x);c<u.length;)g=a.indexOf(u.charAt(c++))<<2|(v=a.indexOf(u.charAt(c++)))>>4,y=(15&v)<<4|(h=a.indexOf(u.charAt(c++)))>>2,m=(3&h)<<6|(w=a.indexOf(u.charAt(c++))),k[f++]=g,h!==64&&(k[f++]=y),w!==64&&(k[f++]=m);return k}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),l=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),u=e("./stream/DataLengthProbe");function g(y,m,v,h,w){this.compressedSize=y,this.uncompressedSize=m,this.crc32=v,this.compression=h,this.compressedContent=w}g.prototype={getContentWorker:function(){var y=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),m=this;return y.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),y},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(y,m,v){return y.pipe(new a).pipe(new u("uncompressedSize")).pipe(m.compressWorker(v)).pipe(new u("compressedSize")).withStreamInfo("compression",m)},n.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),l=function(){for(var a,u=[],g=0;g<256;g++){a=g;for(var y=0;y<8;y++)a=1&a?3988292384^a>>>1:a>>>1;u[g]=a}return u}();n.exports=function(a,u){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(g,y,m,v){var h=l,w=v+m;g^=-1;for(var c=v;c<w;c++)g=g>>>8^h[255&(g^y[c])];return-1^g}(0|u,a,a.length,0):function(g,y,m,v){var h=l,w=v+m;g^=-1;for(var c=v;c<w;c++)g=g>>>8^h[255&(g^y.charCodeAt(c))];return-1^g}(0|u,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=e("pako"),a=e("./utils"),u=e("./stream/GenericWorker"),g=s?"uint8array":"array";function y(m,v){u.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=v,this.meta={}}r.magic="\b\0",a.inherits(y,u),y.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(g,m.data),!1)},y.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},y.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},y.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(v){m.push({data:v,meta:m.meta})}},r.compressWorker=function(m){return new y("Deflate",m)},r.uncompressWorker=function(){return new y("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(h,w){var c,f="";for(c=0;c<w;c++)f+=String.fromCharCode(255&h),h>>>=8;return f}function l(h,w,c,f,d,k){var x,L,C=h.file,O=h.compression,B=k!==g.utf8encode,F=a.transformTo("string",k(C.name)),D=a.transformTo("string",g.utf8encode(C.name)),q=C.comment,X=a.transformTo("string",k(q)),S=a.transformTo("string",g.utf8encode(q)),R=D.length!==C.name.length,o=S.length!==q.length,$="",tt="",U="",et=C.dir,j=C.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};w&&!c||(Q.crc32=h.crc32,Q.compressedSize=h.compressedSize,Q.uncompressedSize=h.uncompressedSize);var I=0;w&&(I|=8),B||!R&&!o||(I|=2048);var A=0,Y=0;et&&(A|=16),d==="UNIX"?(Y=798,A|=function(Z,ot){var ct=Z;return Z||(ct=ot?16893:33204),(65535&ct)<<16}(C.unixPermissions,et)):(Y=20,A|=function(Z){return 63&(Z||0)}(C.dosPermissions)),x=j.getUTCHours(),x<<=6,x|=j.getUTCMinutes(),x<<=5,x|=j.getUTCSeconds()/2,L=j.getUTCFullYear()-1980,L<<=4,L|=j.getUTCMonth()+1,L<<=5,L|=j.getUTCDate(),R&&(tt=s(1,1)+s(y(F),4)+D,$+="up"+s(tt.length,2)+tt),o&&(U=s(1,1)+s(y(X),4)+S,$+="uc"+s(U.length,2)+U);var K="";return K+=`
\0`,K+=s(I,2),K+=O.magic,K+=s(x,2),K+=s(L,2),K+=s(Q.crc32,4),K+=s(Q.compressedSize,4),K+=s(Q.uncompressedSize,4),K+=s(F.length,2),K+=s($.length,2),{fileRecord:m.LOCAL_FILE_HEADER+K+F+$,dirRecord:m.CENTRAL_FILE_HEADER+s(Y,2)+K+s(X.length,2)+"\0\0\0\0"+s(A,4)+s(f,4)+F+$+X}}var a=e("../utils"),u=e("../stream/GenericWorker"),g=e("../utf8"),y=e("../crc32"),m=e("../signature");function v(h,w,c,f){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=c,this.encodeFileName=f,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,u),v.prototype.push=function(h){var w=h.meta.percent||0,c=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,u.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:c?(w+100*(c-f-1))/c:100}}))},v.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var w=this.streamFiles&&!h.file.dir;if(w){var c=l(h,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(h){this.accumulate=!1;var w=this.streamFiles&&!h.file.dir,c=l(h,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),w)this.push({data:function(f){return m.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var h=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var c=this.bytesWritten-h,f=function(d,k,x,L,C){var O=a.transformTo("string",C(L));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(k,4)+s(x,4)+s(O.length,2)+O}(this.dirRecords.length,c,h,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(h){this._sources.push(h);var w=this;return h.on("data",function(c){w.processChunk(c)}),h.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),h.on("error",function(c){w.error(c)}),this},v.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(h){var w=this._sources;if(!u.prototype.error.call(this,h))return!1;for(var c=0;c<w.length;c++)try{w[c].error(h)}catch{}return!0},v.prototype.lock=function(){u.prototype.lock.call(this);for(var h=this._sources,w=0;w<h.length;w++)h[w].lock()},n.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),l=e("./ZipFileWorker");r.generateWorker=function(a,u,g){var y=new l(u.streamFiles,g,u.platform,u.encodeFileName),m=0;try{a.forEach(function(v,h){m++;var w=function(k,x){var L=k||x,C=s[L];if(!C)throw new Error(L+" is not a valid compression method !");return C}(h.options.compression,u.compression),c=h.options.compressionOptions||u.compressionOptions||{},f=h.dir,d=h.date;h._compressWorker(w,c).withStreamInfo("file",{name:v,dir:f,date:d,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(y)}),y.entriesCount=m}catch(v){y.error(v)}return y}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var a in this)typeof this[a]!="function"&&(l[a]=this[a]);return l}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(l,a){return new s().loadAsync(l,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),l=e("./external"),a=e("./utf8"),u=e("./zipEntries"),g=e("./stream/Crc32Probe"),y=e("./nodejsUtils");function m(v){return new l.Promise(function(h,w){var c=v.decompressed.getContentWorker().pipe(new g);c.on("error",function(f){w(f)}).on("end",function(){c.streamInfo.crc32!==v.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}n.exports=function(v,h){var w=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),y.isNode&&y.isStream(v)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",v,!0,h.optimizedBinaryString,h.base64).then(function(c){var f=new u(h);return f.load(c),f}).then(function(c){var f=[l.Promise.resolve(c)],d=c.files;if(h.checkCRC32)for(var k=0;k<d.length;k++)f.push(m(d[k]));return l.Promise.all(f)}).then(function(c){for(var f=c.shift(),d=f.files,k=0;k<d.length;k++){var x=d[k],L=x.fileNameStr,C=s.resolve(x.fileNameStr);w.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:h.createFolders}),x.dir||(w.file(C).unsafeOriginalName=L)}return f.zipComment.length&&(w.comment=f.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),l=e("../stream/GenericWorker");function a(u,g){l.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(g)}s.inherits(a,l),a.prototype._bindStream=function(u){var g=this;(this._stream=u).pause(),u.on("data",function(y){g.push({data:y,meta:{percent:0}})}).on("error",function(y){g.isPaused?this.generatedError=y:g.error(y)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},a.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function l(a,u,g){s.call(this,u),this._helper=a;var y=this;a.on("data",function(m,v){y.push(m)||y._helper.pause(),g&&g(v)}).on("error",function(m){y.emit("error",m)}).on("end",function(){y.push(null)})}e("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},n.exports=l},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(C,O,B){var F,D=a.getTypeOf(O),q=a.extend(B||{},y);q.date=q.date||new Date,q.compression!==null&&(q.compression=q.compression.toUpperCase()),typeof q.unixPermissions=="string"&&(q.unixPermissions=parseInt(q.unixPermissions,8)),q.unixPermissions&&16384&q.unixPermissions&&(q.dir=!0),q.dosPermissions&&16&q.dosPermissions&&(q.dir=!0),q.dir&&(C=d(C)),q.createFolders&&(F=f(C))&&k.call(this,F,!0);var X=D==="string"&&q.binary===!1&&q.base64===!1;B&&B.binary!==void 0||(q.binary=!X),(O instanceof m&&O.uncompressedSize===0||q.dir||!O||O.length===0)&&(q.base64=!1,q.binary=!0,O="",q.compression="STORE",D="string");var S=null;S=O instanceof m||O instanceof u?O:w.isNode&&w.isStream(O)?new c(C,O):a.prepareContent(C,O,q.binary,q.optimizedBinaryString,q.base64);var R=new v(C,S,q);this.files[C]=R}var l=e("./utf8"),a=e("./utils"),u=e("./stream/GenericWorker"),g=e("./stream/StreamHelper"),y=e("./defaults"),m=e("./compressedObject"),v=e("./zipObject"),h=e("./generate"),w=e("./nodejsUtils"),c=e("./nodejs/NodejsStreamInputAdapter"),f=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var O=C.lastIndexOf("/");return 0<O?C.substring(0,O):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},k=function(C,O){return O=O!==void 0?O:y.createFolders,C=d(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:O}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var L={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var O,B,F;for(O in this.files)F=this.files[O],(B=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&C(B,F)},filter:function(C){var O=[];return this.forEach(function(B,F){C(B,F)&&O.push(F)}),O},file:function(C,O,B){if(arguments.length!==1)return C=this.root+C,s.call(this,C,O,B),this;if(x(C)){var F=C;return this.filter(function(q,X){return!X.dir&&F.test(q)})}var D=this.files[this.root+C];return D&&!D.dir?D:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(D,q){return q.dir&&C.test(D)});var O=this.root+C,B=k.call(this,O),F=this.clone();return F.root=B.name,F},remove:function(C){C=this.root+C;var O=this.files[C];if(O||(C.slice(-1)!=="/"&&(C+="/"),O=this.files[C]),O&&!O.dir)delete this.files[C];else for(var B=this.filter(function(D,q){return q.name.slice(0,C.length)===C}),F=0;F<B.length;F++)delete this.files[B[F].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var O,B={};try{if((B=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");a.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var F=B.comment||this.comment||"";O=h.generateWorker(this,B,F)}catch(D){(O=new u("error")).error(D)}return new g(O,B.type||"string",B.mimeType)},generateAsync:function(C,O){return this.generateInternalStream(C).accumulate(O)},generateNodeStream:function(C,O){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(O)}};n.exports=L},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function l(a){s.call(this,a);for(var u=0;u<this.data.length;u++)a[u]=255&a[u]}e("../utils").inherits(l,s),l.prototype.byteAt=function(a){return this.data[this.zero+a]},l.prototype.lastIndexOfSignature=function(a){for(var u=a.charCodeAt(0),g=a.charCodeAt(1),y=a.charCodeAt(2),m=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===u&&this.data[v+1]===g&&this.data[v+2]===y&&this.data[v+3]===m)return v-this.zero;return-1},l.prototype.readAndCheckSignature=function(a){var u=a.charCodeAt(0),g=a.charCodeAt(1),y=a.charCodeAt(2),m=a.charCodeAt(3),v=this.readData(4);return u===v[0]&&g===v[1]&&y===v[2]&&m===v[3]},l.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},n.exports=l},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function l(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var u,g=0;for(this.checkOffset(a),u=this.index+a-1;u>=this.index;u--)g=(g<<8)+this.byteAt(u);return this.index+=a,g},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=l},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},n.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},l.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},l.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},l.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},n.exports=l},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},n.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),l=e("../support"),a=e("./ArrayReader"),u=e("./StringReader"),g=e("./NodeBufferReader"),y=e("./Uint8ArrayReader");n.exports=function(m){var v=s.getTypeOf(m);return s.checkSupport(v),v!=="string"||l.uint8array?v==="nodebuffer"?new g(m):l.uint8array?new y(s.transformTo("uint8array",m)):new a(s.transformTo("array",m)):new u(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),l=e("../utils");function a(u){s.call(this,"ConvertWorker to "+u),this.destType=u}l.inherits(a,s),a.prototype.processChunk=function(u){this.push({data:l.transformTo(this.destType,u.data),meta:u.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),l=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(u){this.streamInfo.crc32=l(u.data,this.streamInfo.crc32||0),this.push(u)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),l=e("./GenericWorker");function a(u){l.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(a,l),a.prototype.processChunk=function(u){if(u){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+u.data.length}l.prototype.processChunk.call(this,u)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),l=e("./GenericWorker");function a(u){l.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(y){g.dataIsReady=!0,g.data=y,g.max=y&&y.length||0,g.type=s.getTypeOf(y),g.isPaused||g._tickAndRepeat()},function(y){g.error(y)})}s.inherits(a,l),a.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,g);break;case"uint8array":u=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":u=this.data.slice(this.index,g)}return this.index=g,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,a){return this._listeners[l].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,a){if(this._listeners[l])for(var u=0;u<this._listeners[l].length;u++)this._listeners[l][u].call(this,a)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var a=this;return l.on("data",function(u){a.processChunk(u)}),l.on("end",function(){a.end()}),l.on("error",function(u){a.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,a){return this.extraStreamInfo[l]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),l=e("./ConvertWorker"),a=e("./GenericWorker"),u=e("../base64"),g=e("../support"),y=e("../external"),m=null;if(g.nodestream)try{m=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(w,c){return new y.Promise(function(f,d){var k=[],x=w._internalType,L=w._outputType,C=w._mimeType;w.on("data",function(O,B){k.push(O),c&&c(B)}).on("error",function(O){k=[],d(O)}).on("end",function(){try{var O=function(B,F,D){switch(B){case"blob":return s.newBlob(s.transformTo("arraybuffer",F),D);case"base64":return u.encode(F);default:return s.transformTo(B,F)}}(L,function(B,F){var D,q=0,X=null,S=0;for(D=0;D<F.length;D++)S+=F[D].length;switch(B){case"string":return F.join("");case"array":return Array.prototype.concat.apply([],F);case"uint8array":for(X=new Uint8Array(S),D=0;D<F.length;D++)X.set(F[D],q),q+=F[D].length;return X;case"nodebuffer":return Buffer.concat(F);default:throw new Error("concat : unsupported type '"+B+"'")}}(x,k),C);f(O)}catch(B){d(B)}k=[]}).resume()})}function h(w,c,f){var d=c;switch(c){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=c,this._mimeType=f,s.checkSupport(d),this._worker=w.pipe(new l(d)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}h.prototype={accumulate:function(w){return v(this,w)},on:function(w,c){var f=this;return w==="data"?this._worker.on(w,function(d){c.call(f,d.data,d.meta)}):this._worker.on(w,function(){s.delay(c,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},w)}},n.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),r.blob=l.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),l=e("./support"),a=e("./nodejsUtils"),u=e("./stream/GenericWorker"),g=new Array(256),y=0;y<256;y++)g[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;g[254]=g[254]=1;function m(){u.call(this,"utf-8 decode"),this.leftOver=null}function v(){u.call(this,"utf-8 encode")}r.utf8encode=function(h){return l.nodebuffer?a.newBufferFrom(h,"utf-8"):function(w){var c,f,d,k,x,L=w.length,C=0;for(k=0;k<L;k++)(64512&(f=w.charCodeAt(k)))==55296&&k+1<L&&(64512&(d=w.charCodeAt(k+1)))==56320&&(f=65536+(f-55296<<10)+(d-56320),k++),C+=f<128?1:f<2048?2:f<65536?3:4;for(c=l.uint8array?new Uint8Array(C):new Array(C),k=x=0;x<C;k++)(64512&(f=w.charCodeAt(k)))==55296&&k+1<L&&(64512&(d=w.charCodeAt(k+1)))==56320&&(f=65536+(f-55296<<10)+(d-56320),k++),f<128?c[x++]=f:(f<2048?c[x++]=192|f>>>6:(f<65536?c[x++]=224|f>>>12:(c[x++]=240|f>>>18,c[x++]=128|f>>>12&63),c[x++]=128|f>>>6&63),c[x++]=128|63&f);return c}(h)},r.utf8decode=function(h){return l.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):function(w){var c,f,d,k,x=w.length,L=new Array(2*x);for(c=f=0;c<x;)if((d=w[c++])<128)L[f++]=d;else if(4<(k=g[d]))L[f++]=65533,c+=k-1;else{for(d&=k===2?31:k===3?15:7;1<k&&c<x;)d=d<<6|63&w[c++],k--;1<k?L[f++]=65533:d<65536?L[f++]=d:(d-=65536,L[f++]=55296|d>>10&1023,L[f++]=56320|1023&d)}return L.length!==f&&(L.subarray?L=L.subarray(0,f):L.length=f),s.applyFromCharCode(L)}(h=s.transformTo(l.uint8array?"uint8array":"array",h))},s.inherits(m,u),m.prototype.processChunk=function(h){var w=s.transformTo(l.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var c=w;(w=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),w.set(c,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var f=function(k,x){var L;for((x=x||k.length)>k.length&&(x=k.length),L=x-1;0<=L&&(192&k[L])==128;)L--;return L<0||L===0?x:L+g[k[L]]>x?L:x}(w),d=w;f!==w.length&&(l.uint8array?(d=w.subarray(0,f),this.leftOver=w.subarray(f,w.length)):(d=w.slice(0,f),this.leftOver=w.slice(f,w.length))),this.push({data:r.utf8decode(d),meta:h.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=m,s.inherits(v,u),v.prototype.processChunk=function(h){this.push({data:r.utf8encode(h.data),meta:h.meta})},r.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),l=e("./base64"),a=e("./nodejsUtils"),u=e("./external");function g(c){return c}function y(c,f){for(var d=0;d<c.length;++d)f[d]=255&c.charCodeAt(d);return f}e("setimmediate"),r.newBlob=function(c,f){r.checkSupport("blob");try{return new Blob([c],{type:f})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(c),d.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(c,f,d){var k=[],x=0,L=c.length;if(L<=d)return String.fromCharCode.apply(null,c);for(;x<L;)f==="array"||f==="nodebuffer"?k.push(String.fromCharCode.apply(null,c.slice(x,Math.min(x+d,L)))):k.push(String.fromCharCode.apply(null,c.subarray(x,Math.min(x+d,L)))),x+=d;return k.join("")},stringifyByChar:function(c){for(var f="",d=0;d<c.length;d++)f+=String.fromCharCode(c[d]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(c){var f=65536,d=r.getTypeOf(c),k=!0;if(d==="uint8array"?k=m.applyCanBeUsed.uint8array:d==="nodebuffer"&&(k=m.applyCanBeUsed.nodebuffer),k)for(;1<f;)try{return m.stringifyByChunk(c,d,f)}catch{f=Math.floor(f/2)}return m.stringifyByChar(c)}function h(c,f){for(var d=0;d<c.length;d++)f[d]=c[d];return f}r.applyFromCharCode=v;var w={};w.string={string:g,array:function(c){return y(c,new Array(c.length))},arraybuffer:function(c){return w.string.uint8array(c).buffer},uint8array:function(c){return y(c,new Uint8Array(c.length))},nodebuffer:function(c){return y(c,a.allocBuffer(c.length))}},w.array={string:v,array:g,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(c)}},w.arraybuffer={string:function(c){return v(new Uint8Array(c))},array:function(c){return h(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:g,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(new Uint8Array(c))}},w.uint8array={string:v,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:g,nodebuffer:function(c){return a.newBufferFrom(c)}},w.nodebuffer={string:v,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return w.nodebuffer.uint8array(c).buffer},uint8array:function(c){return h(c,new Uint8Array(c.length))},nodebuffer:g},r.transformTo=function(c,f){if(f=f||"",!c)return f;r.checkSupport(c);var d=r.getTypeOf(f);return w[d][c](f)},r.resolve=function(c){for(var f=c.split("/"),d=[],k=0;k<f.length;k++){var x=f[k];x==="."||x===""&&k!==0&&k!==f.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},r.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(c)?"nodebuffer":s.uint8array&&c instanceof Uint8Array?"uint8array":s.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(c){if(!s[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(c){var f,d,k="";for(d=0;d<(c||"").length;d++)k+="\\x"+((f=c.charCodeAt(d))<16?"0":"")+f.toString(16).toUpperCase();return k},r.delay=function(c,f,d){setImmediate(function(){c.apply(d||null,f||[])})},r.inherits=function(c,f){function d(){}d.prototype=f.prototype,c.prototype=new d},r.extend=function(){var c,f,d={};for(c=0;c<arguments.length;c++)for(f in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],f)&&d[f]===void 0&&(d[f]=arguments[c][f]);return d},r.prepareContent=function(c,f,d,k,x){return u.Promise.resolve(f).then(function(L){return s.blob&&(L instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(L))!==-1)&&typeof FileReader<"u"?new u.Promise(function(C,O){var B=new FileReader;B.onload=function(F){C(F.target.result)},B.onerror=function(F){O(F.target.error)},B.readAsArrayBuffer(L)}):L}).then(function(L){var C=r.getTypeOf(L);return C?(C==="arraybuffer"?L=r.transformTo("uint8array",L):C==="string"&&(x?L=l.decode(L):d&&k!==!0&&(L=function(O){return y(O,s.uint8array?new Uint8Array(O.length):new Array(O.length))}(L))),L):u.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),l=e("./utils"),a=e("./signature"),u=e("./zipEntry"),g=e("./support");function y(m){this.files=[],this.loadOptions=m}y.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(v)+", expected "+l.pretty(m)+")")}},isSignature:function(m,v){var h=this.reader.index;this.reader.setIndex(m);var w=this.reader.readString(4)===v;return this.reader.setIndex(h),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),v=g.uint8array?"uint8array":"array",h=l.transformTo(v,m);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,v,h,w=this.zip64EndOfCentralSize-44;0<w;)m=this.reader.readInt(2),v=this.reader.readInt(4),h=this.reader.readData(v),this.zip64ExtensibleData[m]={id:m,length:v,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,v;for(m=0;m<this.files.length;m++)v=this.files[m],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var v=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var w=v-h;if(0<w)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(m){this.reader=s(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=y},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),l=e("./utils"),a=e("./compressedObject"),u=e("./crc32"),g=e("./utf8"),y=e("./compressions"),m=e("./support");function v(h,w){this.options=h,this.loadOptions=w}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var w,c;if(h.skip(22),this.fileNameLength=h.readInt(2),c=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(f){for(var d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&y[d].magic===f)return y[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var w=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(w),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var w,c,f,d=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<d;)w=h.readInt(2),c=h.readInt(2),f=h.readData(c),this.extraFields[w]={id:w,length:c,value:f};h.setIndex(d)},handleUTF8:function(){var h=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var c=l.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var d=l.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var w=s(h.value);return w.readInt(1)!==1||u(this.fileName)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var w=s(h.value);return w.readInt(1)!==1||u(this.fileComment)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null}},n.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(w,c,f){this.name=w,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=c,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var l=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),u=e("./utf8"),g=e("./compressedObject"),y=e("./stream/GenericWorker");s.prototype={internalStream:function(w){var c=null,f="string";try{if(!w)throw new Error("No output type specified.");var d=(f=w.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),c=this._decompressWorker();var k=!this._dataBinary;k&&!d&&(c=c.pipe(new u.Utf8EncodeWorker)),!k&&d&&(c=c.pipe(new u.Utf8DecodeWorker))}catch(x){(c=new y("error")).error(x)}return new l(c,f,"")},async:function(w,c){return this.internalStream(w).accumulate(c)},nodeStream:function(w,c){return this.internalStream(w||"nodebuffer").toNodejsStream(c)},_compressWorker:function(w,c){if(this._data instanceof g&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new u.Utf8EncodeWorker)),g.createWorkerFrom(f,w,c)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof y?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<m.length;h++)s.prototype[m[h]]=v;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var l,a,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var g=0,y=new u(w),m=s.document.createTextNode("");y.observe(m,{characterData:!0}),l=function(){m.data=g=++g%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var c=s.document.createElement("script");c.onreadystatechange=function(){w(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},s.document.documentElement.appendChild(c)}:function(){setTimeout(w,0)};else{var v=new s.MessageChannel;v.port1.onmessage=w,l=function(){v.port2.postMessage(0)}}var h=[];function w(){var c,f;a=!0;for(var d=h.length;d;){for(f=h,h=[],c=-1;++c<d;)f[c]();d=h.length}a=!1}n.exports=function(c){h.push(c)!==1||a||l()}}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function l(){}var a={},u=["REJECTED"],g=["FULFILLED"],y=["PENDING"];function m(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,d!==l&&c(this,d)}function v(d,k,x){this.promise=d,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function h(d,k,x){s(function(){var L;try{L=k(x)}catch(C){return a.reject(d,C)}L===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,L)})}function w(d){var k=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof k=="function")return function(){k.apply(d,arguments)}}function c(d,k){var x=!1;function L(B){x||(x=!0,a.reject(d,B))}function C(B){x||(x=!0,a.resolve(d,B))}var O=f(function(){k(C,L)});O.status==="error"&&L(O.value)}function f(d,k){var x={};try{x.value=d(k),x.status="success"}catch(L){x.status="error",x.value=L}return x}(n.exports=m).prototype.finally=function(d){if(typeof d!="function")return this;var k=this.constructor;return this.then(function(x){return k.resolve(d()).then(function(){return x})},function(x){return k.resolve(d()).then(function(){throw x})})},m.prototype.catch=function(d){return this.then(null,d)},m.prototype.then=function(d,k){if(typeof d!="function"&&this.state===g||typeof k!="function"&&this.state===u)return this;var x=new this.constructor(l);return this.state!==y?h(x,this.state===g?d:k,this.outcome):this.queue.push(new v(x,d,k)),x},v.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},v.prototype.otherCallFulfilled=function(d){h(this.promise,this.onFulfilled,d)},v.prototype.callRejected=function(d){a.reject(this.promise,d)},v.prototype.otherCallRejected=function(d){h(this.promise,this.onRejected,d)},a.resolve=function(d,k){var x=f(w,k);if(x.status==="error")return a.reject(d,x.value);var L=x.value;if(L)c(d,L);else{d.state=g,d.outcome=k;for(var C=-1,O=d.queue.length;++C<O;)d.queue[C].callFulfilled(k)}return d},a.reject=function(d,k){d.state=u,d.outcome=k;for(var x=-1,L=d.queue.length;++x<L;)d.queue[x].callRejected(k);return d},m.resolve=function(d){return d instanceof this?d:a.resolve(new this(l),d)},m.reject=function(d){var k=new this(l);return a.reject(k,d)},m.all=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,L=!1;if(!x)return this.resolve([]);for(var C=new Array(x),O=0,B=-1,F=new this(l);++B<x;)D(d[B],B);return F;function D(q,X){k.resolve(q).then(function(S){C[X]=S,++O!==x||L||(L=!0,a.resolve(F,C))},function(S){L||(L=!0,a.reject(F,S))})}},m.race=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,L=!1;if(!x)return this.resolve([]);for(var C=-1,O=new this(l);++C<x;)B=d[C],k.resolve(B).then(function(F){L||(L=!0,a.resolve(O,F))},function(F){L||(L=!0,a.reject(O,F))});var B;return O}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),l=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/messages"),g=e("./zlib/zstream"),y=Object.prototype.toString,m=0,v=-1,h=0,w=8;function c(d){if(!(this instanceof c))return new c(d);this.options=l.assign({level:v,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},d||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var x=s.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(x!==m)throw new Error(u[x]);if(k.header&&s.deflateSetHeader(this.strm,k.header),k.dictionary){var L;if(L=typeof k.dictionary=="string"?a.string2buf(k.dictionary):y.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(x=s.deflateSetDictionary(this.strm,L))!==m)throw new Error(u[x]);this._dict_set=!0}}function f(d,k){var x=new c(k);if(x.push(d,!0),x.err)throw x.msg||u[x.err];return x.result}c.prototype.push=function(d,k){var x,L,C=this.strm,O=this.options.chunkSize;if(this.ended)return!1;L=k===~~k?k:k===!0?4:0,typeof d=="string"?C.input=a.string2buf(d):y.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new l.Buf8(O),C.next_out=0,C.avail_out=O),(x=s.deflate(C,L))!==1&&x!==m)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||L!==4&&L!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(l.shrinkBuf(C.output,C.next_out))):this.onData(l.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return L===4?(x=s.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===m):L!==2||(this.onEnd(m),!(C.avail_out=0))},c.prototype.onData=function(d){this.chunks.push(d)},c.prototype.onEnd=function(d){d===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=c,r.deflate=f,r.deflateRaw=function(d,k){return(k=k||{}).raw=!0,f(d,k)},r.gzip=function(d,k){return(k=k||{}).gzip=!0,f(d,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),l=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/constants"),g=e("./zlib/messages"),y=e("./zlib/zstream"),m=e("./zlib/gzheader"),v=Object.prototype.toString;function h(c){if(!(this instanceof h))return new h(c);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},c||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||c&&c.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,f.windowBits);if(d!==u.Z_OK)throw new Error(g[d]);this.header=new m,s.inflateGetHeader(this.strm,this.header)}function w(c,f){var d=new h(f);if(d.push(c,!0),d.err)throw d.msg||g[d.err];return d.result}h.prototype.push=function(c,f){var d,k,x,L,C,O,B=this.strm,F=this.options.chunkSize,D=this.options.dictionary,q=!1;if(this.ended)return!1;k=f===~~f?f:f===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof c=="string"?B.input=a.binstring2buf(c):v.call(c)==="[object ArrayBuffer]"?B.input=new Uint8Array(c):B.input=c,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new l.Buf8(F),B.next_out=0,B.avail_out=F),(d=s.inflate(B,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&D&&(O=typeof D=="string"?a.string2buf(D):v.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,d=s.inflateSetDictionary(this.strm,O)),d===u.Z_BUF_ERROR&&q===!0&&(d=u.Z_OK,q=!1),d!==u.Z_STREAM_END&&d!==u.Z_OK)return this.onEnd(d),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&d!==u.Z_STREAM_END&&(B.avail_in!==0||k!==u.Z_FINISH&&k!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(B.output,B.next_out),L=B.next_out-x,C=a.buf2string(B.output,x),B.next_out=L,B.avail_out=F-L,L&&l.arraySet(B.output,B.output,x,L,0),this.onData(C)):this.onData(l.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(q=!0)}while((0<B.avail_in||B.avail_out===0)&&d!==u.Z_STREAM_END);return d===u.Z_STREAM_END&&(k=u.Z_FINISH),k===u.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===u.Z_OK):k!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(B.avail_out=0))},h.prototype.onData=function(c){this.chunks.push(c)},h.prototype.onEnd=function(c){c===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},r.Inflate=h,r.inflate=w,r.inflateRaw=function(c,f){return(f=f||{}).raw=!0,w(c,f)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(u){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var y=g.shift();if(y){if(typeof y!="object")throw new TypeError(y+"must be non-object");for(var m in y)y.hasOwnProperty(m)&&(u[m]=y[m])}}return u},r.shrinkBuf=function(u,g){return u.length===g?u:u.subarray?u.subarray(0,g):(u.length=g,u)};var l={arraySet:function(u,g,y,m,v){if(g.subarray&&u.subarray)u.set(g.subarray(y,y+m),v);else for(var h=0;h<m;h++)u[v+h]=g[y+h]},flattenChunks:function(u){var g,y,m,v,h,w;for(g=m=0,y=u.length;g<y;g++)m+=u[g].length;for(w=new Uint8Array(m),g=v=0,y=u.length;g<y;g++)h=u[g],w.set(h,v),v+=h.length;return w}},a={arraySet:function(u,g,y,m,v){for(var h=0;h<m;h++)u[v+h]=g[y+h]},flattenChunks:function(u){return[].concat.apply([],u)}};r.setTyped=function(u){u?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,l)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),l=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var u=new s.Buf8(256),g=0;g<256;g++)u[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function y(m,v){if(v<65537&&(m.subarray&&a||!m.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(m,v));for(var h="",w=0;w<v;w++)h+=String.fromCharCode(m[w]);return h}u[254]=u[254]=1,r.string2buf=function(m){var v,h,w,c,f,d=m.length,k=0;for(c=0;c<d;c++)(64512&(h=m.charCodeAt(c)))==55296&&c+1<d&&(64512&(w=m.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),c++),k+=h<128?1:h<2048?2:h<65536?3:4;for(v=new s.Buf8(k),c=f=0;f<k;c++)(64512&(h=m.charCodeAt(c)))==55296&&c+1<d&&(64512&(w=m.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),c++),h<128?v[f++]=h:(h<2048?v[f++]=192|h>>>6:(h<65536?v[f++]=224|h>>>12:(v[f++]=240|h>>>18,v[f++]=128|h>>>12&63),v[f++]=128|h>>>6&63),v[f++]=128|63&h);return v},r.buf2binstring=function(m){return y(m,m.length)},r.binstring2buf=function(m){for(var v=new s.Buf8(m.length),h=0,w=v.length;h<w;h++)v[h]=m.charCodeAt(h);return v},r.buf2string=function(m,v){var h,w,c,f,d=v||m.length,k=new Array(2*d);for(h=w=0;h<d;)if((c=m[h++])<128)k[w++]=c;else if(4<(f=u[c]))k[w++]=65533,h+=f-1;else{for(c&=f===2?31:f===3?15:7;1<f&&h<d;)c=c<<6|63&m[h++],f--;1<f?k[w++]=65533:c<65536?k[w++]=c:(c-=65536,k[w++]=55296|c>>10&1023,k[w++]=56320|1023&c)}return y(k,w)},r.utf8border=function(m,v){var h;for((v=v||m.length)>m.length&&(v=m.length),h=v-1;0<=h&&(192&m[h])==128;)h--;return h<0||h===0?v:h+u[m[h]]>v?h:v}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,l,a,u){for(var g=65535&s|0,y=s>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;y=y+(g=g+l[u++]|0)|0,--m;);g%=65521,y%=65521}return g|y<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var l,a=[],u=0;u<256;u++){l=u;for(var g=0;g<8;g++)l=1&l?3988292384^l>>>1:l>>>1;a[u]=l}return a}();n.exports=function(l,a,u,g){var y=s,m=g+u;l^=-1;for(var v=g;v<m;v++)l=l>>>8^y[255&(l^a[v])];return-1^l}},{}],46:[function(e,n,r){var s,l=e("../utils/common"),a=e("./trees"),u=e("./adler32"),g=e("./crc32"),y=e("./messages"),m=0,v=4,h=0,w=-2,c=-1,f=4,d=2,k=8,x=9,L=286,C=30,O=19,B=2*L+1,F=15,D=3,q=258,X=q+D+1,S=42,R=113,o=1,$=2,tt=3,U=4;function et(i,z){return i.msg=y[z],z}function j(i){return(i<<1)-(4<i?9:0)}function Q(i){for(var z=i.length;0<=--z;)i[z]=0}function I(i){var z=i.state,M=z.pending;M>i.avail_out&&(M=i.avail_out),M!==0&&(l.arraySet(i.output,z.pending_buf,z.pending_out,M,i.next_out),i.next_out+=M,z.pending_out+=M,i.total_out+=M,i.avail_out-=M,z.pending-=M,z.pending===0&&(z.pending_out=0))}function A(i,z){a._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,z),i.block_start=i.strstart,I(i.strm)}function Y(i,z){i.pending_buf[i.pending++]=z}function K(i,z){i.pending_buf[i.pending++]=z>>>8&255,i.pending_buf[i.pending++]=255&z}function Z(i,z){var M,b,p=i.max_chain_length,_=i.strstart,H=i.prev_length,P=i.nice_match,E=i.strstart>i.w_size-X?i.strstart-(i.w_size-X):0,N=i.window,W=i.w_mask,V=i.prev,J=i.strstart+q,st=N[_+H-1],rt=N[_+H];i.prev_length>=i.good_match&&(p>>=2),P>i.lookahead&&(P=i.lookahead);do if(N[(M=z)+H]===rt&&N[M+H-1]===st&&N[M]===N[_]&&N[++M]===N[_+1]){_+=2,M++;do;while(N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&N[++_]===N[++M]&&_<J);if(b=q-(J-_),_=J-q,H<b){if(i.match_start=z,P<=(H=b))break;st=N[_+H-1],rt=N[_+H]}}while((z=V[z&W])>E&&--p!=0);return H<=i.lookahead?H:i.lookahead}function ot(i){var z,M,b,p,_,H,P,E,N,W,V=i.w_size;do{if(p=i.window_size-i.lookahead-i.strstart,i.strstart>=V+(V-X)){for(l.arraySet(i.window,i.window,V,V,0),i.match_start-=V,i.strstart-=V,i.block_start-=V,z=M=i.hash_size;b=i.head[--z],i.head[z]=V<=b?b-V:0,--M;);for(z=M=V;b=i.prev[--z],i.prev[z]=V<=b?b-V:0,--M;);p+=V}if(i.strm.avail_in===0)break;if(H=i.strm,P=i.window,E=i.strstart+i.lookahead,N=p,W=void 0,W=H.avail_in,N<W&&(W=N),M=W===0?0:(H.avail_in-=W,l.arraySet(P,H.input,H.next_in,W,E),H.state.wrap===1?H.adler=u(H.adler,P,W,E):H.state.wrap===2&&(H.adler=g(H.adler,P,W,E)),H.next_in+=W,H.total_in+=W,W),i.lookahead+=M,i.lookahead+i.insert>=D)for(_=i.strstart-i.insert,i.ins_h=i.window[_],i.ins_h=(i.ins_h<<i.hash_shift^i.window[_+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[_+D-1])&i.hash_mask,i.prev[_&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=_,_++,i.insert--,!(i.lookahead+i.insert<D)););}while(i.lookahead<X&&i.strm.avail_in!==0)}function ct(i,z){for(var M,b;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&z===m)return o;if(i.lookahead===0)break}if(M=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,M=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),M!==0&&i.strstart-M<=i.w_size-X&&(i.match_length=Z(i,M)),i.match_length>=D)if(b=a._tr_tally(i,i.strstart-i.match_start,i.match_length-D),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=D){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,M=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else b=a._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(b&&(A(i,!1),i.strm.avail_out===0))return o}return i.insert=i.strstart<D-1?i.strstart:D-1,z===v?(A(i,!0),i.strm.avail_out===0?tt:U):i.last_lit&&(A(i,!1),i.strm.avail_out===0)?o:$}function it(i,z){for(var M,b,p;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&z===m)return o;if(i.lookahead===0)break}if(M=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,M=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=D-1,M!==0&&i.prev_length<i.max_lazy_match&&i.strstart-M<=i.w_size-X&&(i.match_length=Z(i,M),i.match_length<=5&&(i.strategy===1||i.match_length===D&&4096<i.strstart-i.match_start)&&(i.match_length=D-1)),i.prev_length>=D&&i.match_length<=i.prev_length){for(p=i.strstart+i.lookahead-D,b=a._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-D),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=p&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,M=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=D-1,i.strstart++,b&&(A(i,!1),i.strm.avail_out===0))return o}else if(i.match_available){if((b=a._tr_tally(i,0,i.window[i.strstart-1]))&&A(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return o}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(b=a._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<D-1?i.strstart:D-1,z===v?(A(i,!0),i.strm.avail_out===0?tt:U):i.last_lit&&(A(i,!1),i.strm.avail_out===0)?o:$}function nt(i,z,M,b,p){this.good_length=i,this.max_lazy=z,this.nice_length=M,this.max_chain=b,this.func=p}function ut(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*B),this.dyn_dtree=new l.Buf16(2*(2*C+1)),this.bl_tree=new l.Buf16(2*(2*O+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(F+1),this.heap=new l.Buf16(2*L+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*L+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(i){var z;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(z=i.state).pending=0,z.pending_out=0,z.wrap<0&&(z.wrap=-z.wrap),z.status=z.wrap?S:R,i.adler=z.wrap===2?0:1,z.last_flush=m,a._tr_init(z),h):et(i,w)}function ft(i){var z=at(i);return z===h&&function(M){M.window_size=2*M.w_size,Q(M.head),M.max_lazy_match=s[M.level].max_lazy,M.good_match=s[M.level].good_length,M.nice_match=s[M.level].nice_length,M.max_chain_length=s[M.level].max_chain,M.strstart=0,M.block_start=0,M.lookahead=0,M.insert=0,M.match_length=M.prev_length=D-1,M.match_available=0,M.ins_h=0}(i.state),z}function dt(i,z,M,b,p,_){if(!i)return w;var H=1;if(z===c&&(z=6),b<0?(H=0,b=-b):15<b&&(H=2,b-=16),p<1||x<p||M!==k||b<8||15<b||z<0||9<z||_<0||f<_)return et(i,w);b===8&&(b=9);var P=new ut;return(i.state=P).strm=i,P.wrap=H,P.gzhead=null,P.w_bits=b,P.w_size=1<<P.w_bits,P.w_mask=P.w_size-1,P.hash_bits=p+7,P.hash_size=1<<P.hash_bits,P.hash_mask=P.hash_size-1,P.hash_shift=~~((P.hash_bits+D-1)/D),P.window=new l.Buf8(2*P.w_size),P.head=new l.Buf16(P.hash_size),P.prev=new l.Buf16(P.w_size),P.lit_bufsize=1<<p+6,P.pending_buf_size=4*P.lit_bufsize,P.pending_buf=new l.Buf8(P.pending_buf_size),P.d_buf=1*P.lit_bufsize,P.l_buf=3*P.lit_bufsize,P.level=z,P.strategy=_,P.method=M,ft(i)}s=[new nt(0,0,0,0,function(i,z){var M=65535;for(M>i.pending_buf_size-5&&(M=i.pending_buf_size-5);;){if(i.lookahead<=1){if(ot(i),i.lookahead===0&&z===m)return o;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var b=i.block_start+M;if((i.strstart===0||i.strstart>=b)&&(i.lookahead=i.strstart-b,i.strstart=b,A(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-X&&(A(i,!1),i.strm.avail_out===0))return o}return i.insert=0,z===v?(A(i,!0),i.strm.avail_out===0?tt:U):(i.strstart>i.block_start&&(A(i,!1),i.strm.avail_out),o)}),new nt(4,4,8,4,ct),new nt(4,5,16,8,ct),new nt(4,6,32,32,ct),new nt(4,4,16,16,it),new nt(8,16,32,32,it),new nt(8,16,128,128,it),new nt(8,32,128,256,it),new nt(32,128,258,1024,it),new nt(32,258,258,4096,it)],r.deflateInit=function(i,z){return dt(i,z,k,15,8,0)},r.deflateInit2=dt,r.deflateReset=ft,r.deflateResetKeep=at,r.deflateSetHeader=function(i,z){return i&&i.state?i.state.wrap!==2?w:(i.state.gzhead=z,h):w},r.deflate=function(i,z){var M,b,p,_;if(!i||!i.state||5<z||z<0)return i?et(i,w):w;if(b=i.state,!i.output||!i.input&&i.avail_in!==0||b.status===666&&z!==v)return et(i,i.avail_out===0?-5:w);if(b.strm=i,M=b.last_flush,b.last_flush=z,b.status===S)if(b.wrap===2)i.adler=0,Y(b,31),Y(b,139),Y(b,8),b.gzhead?(Y(b,(b.gzhead.text?1:0)+(b.gzhead.hcrc?2:0)+(b.gzhead.extra?4:0)+(b.gzhead.name?8:0)+(b.gzhead.comment?16:0)),Y(b,255&b.gzhead.time),Y(b,b.gzhead.time>>8&255),Y(b,b.gzhead.time>>16&255),Y(b,b.gzhead.time>>24&255),Y(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Y(b,255&b.gzhead.os),b.gzhead.extra&&b.gzhead.extra.length&&(Y(b,255&b.gzhead.extra.length),Y(b,b.gzhead.extra.length>>8&255)),b.gzhead.hcrc&&(i.adler=g(i.adler,b.pending_buf,b.pending,0)),b.gzindex=0,b.status=69):(Y(b,0),Y(b,0),Y(b,0),Y(b,0),Y(b,0),Y(b,b.level===9?2:2<=b.strategy||b.level<2?4:0),Y(b,3),b.status=R);else{var H=k+(b.w_bits-8<<4)<<8;H|=(2<=b.strategy||b.level<2?0:b.level<6?1:b.level===6?2:3)<<6,b.strstart!==0&&(H|=32),H+=31-H%31,b.status=R,K(b,H),b.strstart!==0&&(K(b,i.adler>>>16),K(b,65535&i.adler)),i.adler=1}if(b.status===69)if(b.gzhead.extra){for(p=b.pending;b.gzindex<(65535&b.gzhead.extra.length)&&(b.pending!==b.pending_buf_size||(b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),I(i),p=b.pending,b.pending!==b.pending_buf_size));)Y(b,255&b.gzhead.extra[b.gzindex]),b.gzindex++;b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),b.gzindex===b.gzhead.extra.length&&(b.gzindex=0,b.status=73)}else b.status=73;if(b.status===73)if(b.gzhead.name){p=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),I(i),p=b.pending,b.pending===b.pending_buf_size)){_=1;break}_=b.gzindex<b.gzhead.name.length?255&b.gzhead.name.charCodeAt(b.gzindex++):0,Y(b,_)}while(_!==0);b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),_===0&&(b.gzindex=0,b.status=91)}else b.status=91;if(b.status===91)if(b.gzhead.comment){p=b.pending;do{if(b.pending===b.pending_buf_size&&(b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),I(i),p=b.pending,b.pending===b.pending_buf_size)){_=1;break}_=b.gzindex<b.gzhead.comment.length?255&b.gzhead.comment.charCodeAt(b.gzindex++):0,Y(b,_)}while(_!==0);b.gzhead.hcrc&&b.pending>p&&(i.adler=g(i.adler,b.pending_buf,b.pending-p,p)),_===0&&(b.status=103)}else b.status=103;if(b.status===103&&(b.gzhead.hcrc?(b.pending+2>b.pending_buf_size&&I(i),b.pending+2<=b.pending_buf_size&&(Y(b,255&i.adler),Y(b,i.adler>>8&255),i.adler=0,b.status=R)):b.status=R),b.pending!==0){if(I(i),i.avail_out===0)return b.last_flush=-1,h}else if(i.avail_in===0&&j(z)<=j(M)&&z!==v)return et(i,-5);if(b.status===666&&i.avail_in!==0)return et(i,-5);if(i.avail_in!==0||b.lookahead!==0||z!==m&&b.status!==666){var P=b.strategy===2?function(E,N){for(var W;;){if(E.lookahead===0&&(ot(E),E.lookahead===0)){if(N===m)return o;break}if(E.match_length=0,W=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++,W&&(A(E,!1),E.strm.avail_out===0))return o}return E.insert=0,N===v?(A(E,!0),E.strm.avail_out===0?tt:U):E.last_lit&&(A(E,!1),E.strm.avail_out===0)?o:$}(b,z):b.strategy===3?function(E,N){for(var W,V,J,st,rt=E.window;;){if(E.lookahead<=q){if(ot(E),E.lookahead<=q&&N===m)return o;if(E.lookahead===0)break}if(E.match_length=0,E.lookahead>=D&&0<E.strstart&&(V=rt[J=E.strstart-1])===rt[++J]&&V===rt[++J]&&V===rt[++J]){st=E.strstart+q;do;while(V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&J<st);E.match_length=q-(st-J),E.match_length>E.lookahead&&(E.match_length=E.lookahead)}if(E.match_length>=D?(W=a._tr_tally(E,1,E.match_length-D),E.lookahead-=E.match_length,E.strstart+=E.match_length,E.match_length=0):(W=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++),W&&(A(E,!1),E.strm.avail_out===0))return o}return E.insert=0,N===v?(A(E,!0),E.strm.avail_out===0?tt:U):E.last_lit&&(A(E,!1),E.strm.avail_out===0)?o:$}(b,z):s[b.level].func(b,z);if(P!==tt&&P!==U||(b.status=666),P===o||P===tt)return i.avail_out===0&&(b.last_flush=-1),h;if(P===$&&(z===1?a._tr_align(b):z!==5&&(a._tr_stored_block(b,0,0,!1),z===3&&(Q(b.head),b.lookahead===0&&(b.strstart=0,b.block_start=0,b.insert=0))),I(i),i.avail_out===0))return b.last_flush=-1,h}return z!==v?h:b.wrap<=0?1:(b.wrap===2?(Y(b,255&i.adler),Y(b,i.adler>>8&255),Y(b,i.adler>>16&255),Y(b,i.adler>>24&255),Y(b,255&i.total_in),Y(b,i.total_in>>8&255),Y(b,i.total_in>>16&255),Y(b,i.total_in>>24&255)):(K(b,i.adler>>>16),K(b,65535&i.adler)),I(i),0<b.wrap&&(b.wrap=-b.wrap),b.pending!==0?h:1)},r.deflateEnd=function(i){var z;return i&&i.state?(z=i.state.status)!==S&&z!==69&&z!==73&&z!==91&&z!==103&&z!==R&&z!==666?et(i,w):(i.state=null,z===R?et(i,-3):h):w},r.deflateSetDictionary=function(i,z){var M,b,p,_,H,P,E,N,W=z.length;if(!i||!i.state||(_=(M=i.state).wrap)===2||_===1&&M.status!==S||M.lookahead)return w;for(_===1&&(i.adler=u(i.adler,z,W,0)),M.wrap=0,W>=M.w_size&&(_===0&&(Q(M.head),M.strstart=0,M.block_start=0,M.insert=0),N=new l.Buf8(M.w_size),l.arraySet(N,z,W-M.w_size,M.w_size,0),z=N,W=M.w_size),H=i.avail_in,P=i.next_in,E=i.input,i.avail_in=W,i.next_in=0,i.input=z,ot(M);M.lookahead>=D;){for(b=M.strstart,p=M.lookahead-(D-1);M.ins_h=(M.ins_h<<M.hash_shift^M.window[b+D-1])&M.hash_mask,M.prev[b&M.w_mask]=M.head[M.ins_h],M.head[M.ins_h]=b,b++,--p;);M.strstart=b,M.lookahead=D-1,ot(M)}return M.strstart+=M.lookahead,M.block_start=M.strstart,M.insert=M.lookahead,M.lookahead=0,M.match_length=M.prev_length=D-1,M.match_available=0,i.next_in=P,i.input=E,i.avail_in=H,M.wrap=_,h},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,l){var a,u,g,y,m,v,h,w,c,f,d,k,x,L,C,O,B,F,D,q,X,S,R,o,$;a=s.state,u=s.next_in,o=s.input,g=u+(s.avail_in-5),y=s.next_out,$=s.output,m=y-(l-s.avail_out),v=y+(s.avail_out-257),h=a.dmax,w=a.wsize,c=a.whave,f=a.wnext,d=a.window,k=a.hold,x=a.bits,L=a.lencode,C=a.distcode,O=(1<<a.lenbits)-1,B=(1<<a.distbits)-1;t:do{x<15&&(k+=o[u++]<<x,x+=8,k+=o[u++]<<x,x+=8),F=L[k&O];e:for(;;){if(k>>>=D=F>>>24,x-=D,(D=F>>>16&255)===0)$[y++]=65535&F;else{if(!(16&D)){if(!(64&D)){F=L[(65535&F)+(k&(1<<D)-1)];continue e}if(32&D){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}q=65535&F,(D&=15)&&(x<D&&(k+=o[u++]<<x,x+=8),q+=k&(1<<D)-1,k>>>=D,x-=D),x<15&&(k+=o[u++]<<x,x+=8,k+=o[u++]<<x,x+=8),F=C[k&B];i:for(;;){if(k>>>=D=F>>>24,x-=D,!(16&(D=F>>>16&255))){if(!(64&D)){F=C[(65535&F)+(k&(1<<D)-1)];continue i}s.msg="invalid distance code",a.mode=30;break t}if(X=65535&F,x<(D&=15)&&(k+=o[u++]<<x,(x+=8)<D&&(k+=o[u++]<<x,x+=8)),h<(X+=k&(1<<D)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(k>>>=D,x-=D,(D=y-m)<X){if(c<(D=X-D)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(R=d,(S=0)===f){if(S+=w-D,D<q){for(q-=D;$[y++]=d[S++],--D;);S=y-X,R=$}}else if(f<D){if(S+=w+f-D,(D-=f)<q){for(q-=D;$[y++]=d[S++],--D;);if(S=0,f<q){for(q-=D=f;$[y++]=d[S++],--D;);S=y-X,R=$}}}else if(S+=f-D,D<q){for(q-=D;$[y++]=d[S++],--D;);S=y-X,R=$}for(;2<q;)$[y++]=R[S++],$[y++]=R[S++],$[y++]=R[S++],q-=3;q&&($[y++]=R[S++],1<q&&($[y++]=R[S++]))}else{for(S=y-X;$[y++]=$[S++],$[y++]=$[S++],$[y++]=$[S++],2<(q-=3););q&&($[y++]=$[S++],1<q&&($[y++]=$[S++]))}break}}break}}while(u<g&&y<v);u-=q=x>>3,k&=(1<<(x-=q<<3))-1,s.next_in=u,s.next_out=y,s.avail_in=u<g?g-u+5:5-(u-g),s.avail_out=y<v?v-y+257:257-(y-v),a.hold=k,a.bits=x}},{}],49:[function(e,n,r){var s=e("../utils/common"),l=e("./adler32"),a=e("./crc32"),u=e("./inffast"),g=e("./inftrees"),y=1,m=2,v=0,h=-2,w=1,c=852,f=592;function d(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(S){var R;return S&&S.state?(R=S.state,S.total_in=S.total_out=R.total=0,S.msg="",R.wrap&&(S.adler=1&R.wrap),R.mode=w,R.last=0,R.havedict=0,R.dmax=32768,R.head=null,R.hold=0,R.bits=0,R.lencode=R.lendyn=new s.Buf32(c),R.distcode=R.distdyn=new s.Buf32(f),R.sane=1,R.back=-1,v):h}function L(S){var R;return S&&S.state?((R=S.state).wsize=0,R.whave=0,R.wnext=0,x(S)):h}function C(S,R){var o,$;return S&&S.state?($=S.state,R<0?(o=0,R=-R):(o=1+(R>>4),R<48&&(R&=15)),R&&(R<8||15<R)?h:($.window!==null&&$.wbits!==R&&($.window=null),$.wrap=o,$.wbits=R,L(S))):h}function O(S,R){var o,$;return S?($=new k,(S.state=$).window=null,(o=C(S,R))!==v&&(S.state=null),o):h}var B,F,D=!0;function q(S){if(D){var R;for(B=new s.Buf32(512),F=new s.Buf32(32),R=0;R<144;)S.lens[R++]=8;for(;R<256;)S.lens[R++]=9;for(;R<280;)S.lens[R++]=7;for(;R<288;)S.lens[R++]=8;for(g(y,S.lens,0,288,B,0,S.work,{bits:9}),R=0;R<32;)S.lens[R++]=5;g(m,S.lens,0,32,F,0,S.work,{bits:5}),D=!1}S.lencode=B,S.lenbits=9,S.distcode=F,S.distbits=5}function X(S,R,o,$){var tt,U=S.state;return U.window===null&&(U.wsize=1<<U.wbits,U.wnext=0,U.whave=0,U.window=new s.Buf8(U.wsize)),$>=U.wsize?(s.arraySet(U.window,R,o-U.wsize,U.wsize,0),U.wnext=0,U.whave=U.wsize):($<(tt=U.wsize-U.wnext)&&(tt=$),s.arraySet(U.window,R,o-$,tt,U.wnext),($-=tt)?(s.arraySet(U.window,R,o-$,$,0),U.wnext=$,U.whave=U.wsize):(U.wnext+=tt,U.wnext===U.wsize&&(U.wnext=0),U.whave<U.wsize&&(U.whave+=tt))),0}r.inflateReset=L,r.inflateReset2=C,r.inflateResetKeep=x,r.inflateInit=function(S){return O(S,15)},r.inflateInit2=O,r.inflate=function(S,R){var o,$,tt,U,et,j,Q,I,A,Y,K,Z,ot,ct,it,nt,ut,at,ft,dt,i,z,M,b,p=0,_=new s.Buf8(4),H=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return h;(o=S.state).mode===12&&(o.mode=13),et=S.next_out,tt=S.output,Q=S.avail_out,U=S.next_in,$=S.input,j=S.avail_in,I=o.hold,A=o.bits,Y=j,K=Q,z=v;t:for(;;)switch(o.mode){case w:if(o.wrap===0){o.mode=13;break}for(;A<16;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(2&o.wrap&&I===35615){_[o.check=0]=255&I,_[1]=I>>>8&255,o.check=a(o.check,_,2,0),A=I=0,o.mode=2;break}if(o.flags=0,o.head&&(o.head.done=!1),!(1&o.wrap)||(((255&I)<<8)+(I>>8))%31){S.msg="incorrect header check",o.mode=30;break}if((15&I)!=8){S.msg="unknown compression method",o.mode=30;break}if(A-=4,i=8+(15&(I>>>=4)),o.wbits===0)o.wbits=i;else if(i>o.wbits){S.msg="invalid window size",o.mode=30;break}o.dmax=1<<i,S.adler=o.check=1,o.mode=512&I?10:12,A=I=0;break;case 2:for(;A<16;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(o.flags=I,(255&o.flags)!=8){S.msg="unknown compression method",o.mode=30;break}if(57344&o.flags){S.msg="unknown header flags set",o.mode=30;break}o.head&&(o.head.text=I>>8&1),512&o.flags&&(_[0]=255&I,_[1]=I>>>8&255,o.check=a(o.check,_,2,0)),A=I=0,o.mode=3;case 3:for(;A<32;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.head&&(o.head.time=I),512&o.flags&&(_[0]=255&I,_[1]=I>>>8&255,_[2]=I>>>16&255,_[3]=I>>>24&255,o.check=a(o.check,_,4,0)),A=I=0,o.mode=4;case 4:for(;A<16;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.head&&(o.head.xflags=255&I,o.head.os=I>>8),512&o.flags&&(_[0]=255&I,_[1]=I>>>8&255,o.check=a(o.check,_,2,0)),A=I=0,o.mode=5;case 5:if(1024&o.flags){for(;A<16;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.length=I,o.head&&(o.head.extra_len=I),512&o.flags&&(_[0]=255&I,_[1]=I>>>8&255,o.check=a(o.check,_,2,0)),A=I=0}else o.head&&(o.head.extra=null);o.mode=6;case 6:if(1024&o.flags&&(j<(Z=o.length)&&(Z=j),Z&&(o.head&&(i=o.head.extra_len-o.length,o.head.extra||(o.head.extra=new Array(o.head.extra_len)),s.arraySet(o.head.extra,$,U,Z,i)),512&o.flags&&(o.check=a(o.check,$,Z,U)),j-=Z,U+=Z,o.length-=Z),o.length))break t;o.length=0,o.mode=7;case 7:if(2048&o.flags){if(j===0)break t;for(Z=0;i=$[U+Z++],o.head&&i&&o.length<65536&&(o.head.name+=String.fromCharCode(i)),i&&Z<j;);if(512&o.flags&&(o.check=a(o.check,$,Z,U)),j-=Z,U+=Z,i)break t}else o.head&&(o.head.name=null);o.length=0,o.mode=8;case 8:if(4096&o.flags){if(j===0)break t;for(Z=0;i=$[U+Z++],o.head&&i&&o.length<65536&&(o.head.comment+=String.fromCharCode(i)),i&&Z<j;);if(512&o.flags&&(o.check=a(o.check,$,Z,U)),j-=Z,U+=Z,i)break t}else o.head&&(o.head.comment=null);o.mode=9;case 9:if(512&o.flags){for(;A<16;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(I!==(65535&o.check)){S.msg="header crc mismatch",o.mode=30;break}A=I=0}o.head&&(o.head.hcrc=o.flags>>9&1,o.head.done=!0),S.adler=o.check=0,o.mode=12;break;case 10:for(;A<32;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}S.adler=o.check=d(I),A=I=0,o.mode=11;case 11:if(o.havedict===0)return S.next_out=et,S.avail_out=Q,S.next_in=U,S.avail_in=j,o.hold=I,o.bits=A,2;S.adler=o.check=1,o.mode=12;case 12:if(R===5||R===6)break t;case 13:if(o.last){I>>>=7&A,A-=7&A,o.mode=27;break}for(;A<3;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}switch(o.last=1&I,A-=1,3&(I>>>=1)){case 0:o.mode=14;break;case 1:if(q(o),o.mode=20,R!==6)break;I>>>=2,A-=2;break t;case 2:o.mode=17;break;case 3:S.msg="invalid block type",o.mode=30}I>>>=2,A-=2;break;case 14:for(I>>>=7&A,A-=7&A;A<32;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if((65535&I)!=(I>>>16^65535)){S.msg="invalid stored block lengths",o.mode=30;break}if(o.length=65535&I,A=I=0,o.mode=15,R===6)break t;case 15:o.mode=16;case 16:if(Z=o.length){if(j<Z&&(Z=j),Q<Z&&(Z=Q),Z===0)break t;s.arraySet(tt,$,U,Z,et),j-=Z,U+=Z,Q-=Z,et+=Z,o.length-=Z;break}o.mode=12;break;case 17:for(;A<14;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(o.nlen=257+(31&I),I>>>=5,A-=5,o.ndist=1+(31&I),I>>>=5,A-=5,o.ncode=4+(15&I),I>>>=4,A-=4,286<o.nlen||30<o.ndist){S.msg="too many length or distance symbols",o.mode=30;break}o.have=0,o.mode=18;case 18:for(;o.have<o.ncode;){for(;A<3;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.lens[H[o.have++]]=7&I,I>>>=3,A-=3}for(;o.have<19;)o.lens[H[o.have++]]=0;if(o.lencode=o.lendyn,o.lenbits=7,M={bits:o.lenbits},z=g(0,o.lens,0,19,o.lencode,0,o.work,M),o.lenbits=M.bits,z){S.msg="invalid code lengths set",o.mode=30;break}o.have=0,o.mode=19;case 19:for(;o.have<o.nlen+o.ndist;){for(;nt=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(ut<16)I>>>=it,A-=it,o.lens[o.have++]=ut;else{if(ut===16){for(b=it+2;A<b;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(I>>>=it,A-=it,o.have===0){S.msg="invalid bit length repeat",o.mode=30;break}i=o.lens[o.have-1],Z=3+(3&I),I>>>=2,A-=2}else if(ut===17){for(b=it+3;A<b;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}A-=it,i=0,Z=3+(7&(I>>>=it)),I>>>=3,A-=3}else{for(b=it+7;A<b;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}A-=it,i=0,Z=11+(127&(I>>>=it)),I>>>=7,A-=7}if(o.have+Z>o.nlen+o.ndist){S.msg="invalid bit length repeat",o.mode=30;break}for(;Z--;)o.lens[o.have++]=i}}if(o.mode===30)break;if(o.lens[256]===0){S.msg="invalid code -- missing end-of-block",o.mode=30;break}if(o.lenbits=9,M={bits:o.lenbits},z=g(y,o.lens,0,o.nlen,o.lencode,0,o.work,M),o.lenbits=M.bits,z){S.msg="invalid literal/lengths set",o.mode=30;break}if(o.distbits=6,o.distcode=o.distdyn,M={bits:o.distbits},z=g(m,o.lens,o.nlen,o.ndist,o.distcode,0,o.work,M),o.distbits=M.bits,z){S.msg="invalid distances set",o.mode=30;break}if(o.mode=20,R===6)break t;case 20:o.mode=21;case 21:if(6<=j&&258<=Q){S.next_out=et,S.avail_out=Q,S.next_in=U,S.avail_in=j,o.hold=I,o.bits=A,u(S,K),et=S.next_out,tt=S.output,Q=S.avail_out,U=S.next_in,$=S.input,j=S.avail_in,I=o.hold,A=o.bits,o.mode===12&&(o.back=-1);break}for(o.back=0;nt=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(nt&&!(240&nt)){for(at=it,ft=nt,dt=ut;nt=(p=o.lencode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=A);){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}I>>>=at,A-=at,o.back+=at}if(I>>>=it,A-=it,o.back+=it,o.length=ut,nt===0){o.mode=26;break}if(32&nt){o.back=-1,o.mode=12;break}if(64&nt){S.msg="invalid literal/length code",o.mode=30;break}o.extra=15&nt,o.mode=22;case 22:if(o.extra){for(b=o.extra;A<b;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.length+=I&(1<<o.extra)-1,I>>>=o.extra,A-=o.extra,o.back+=o.extra}o.was=o.length,o.mode=23;case 23:for(;nt=(p=o.distcode[I&(1<<o.distbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(!(240&nt)){for(at=it,ft=nt,dt=ut;nt=(p=o.distcode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=A);){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}I>>>=at,A-=at,o.back+=at}if(I>>>=it,A-=it,o.back+=it,64&nt){S.msg="invalid distance code",o.mode=30;break}o.offset=ut,o.extra=15&nt,o.mode=24;case 24:if(o.extra){for(b=o.extra;A<b;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}o.offset+=I&(1<<o.extra)-1,I>>>=o.extra,A-=o.extra,o.back+=o.extra}if(o.offset>o.dmax){S.msg="invalid distance too far back",o.mode=30;break}o.mode=25;case 25:if(Q===0)break t;if(Z=K-Q,o.offset>Z){if((Z=o.offset-Z)>o.whave&&o.sane){S.msg="invalid distance too far back",o.mode=30;break}ot=Z>o.wnext?(Z-=o.wnext,o.wsize-Z):o.wnext-Z,Z>o.length&&(Z=o.length),ct=o.window}else ct=tt,ot=et-o.offset,Z=o.length;for(Q<Z&&(Z=Q),Q-=Z,o.length-=Z;tt[et++]=ct[ot++],--Z;);o.length===0&&(o.mode=21);break;case 26:if(Q===0)break t;tt[et++]=o.length,Q--,o.mode=21;break;case 27:if(o.wrap){for(;A<32;){if(j===0)break t;j--,I|=$[U++]<<A,A+=8}if(K-=Q,S.total_out+=K,o.total+=K,K&&(S.adler=o.check=o.flags?a(o.check,tt,K,et-K):l(o.check,tt,K,et-K)),K=Q,(o.flags?I:d(I))!==o.check){S.msg="incorrect data check",o.mode=30;break}A=I=0}o.mode=28;case 28:if(o.wrap&&o.flags){for(;A<32;){if(j===0)break t;j--,I+=$[U++]<<A,A+=8}if(I!==(4294967295&o.total)){S.msg="incorrect length check",o.mode=30;break}A=I=0}o.mode=29;case 29:z=1;break t;case 30:z=-3;break t;case 31:return-4;case 32:default:return h}return S.next_out=et,S.avail_out=Q,S.next_in=U,S.avail_in=j,o.hold=I,o.bits=A,(o.wsize||K!==S.avail_out&&o.mode<30&&(o.mode<27||R!==4))&&X(S,S.output,S.next_out,K-S.avail_out)?(o.mode=31,-4):(Y-=S.avail_in,K-=S.avail_out,S.total_in+=Y,S.total_out+=K,o.total+=K,o.wrap&&K&&(S.adler=o.check=o.flags?a(o.check,tt,K,S.next_out-K):l(o.check,tt,K,S.next_out-K)),S.data_type=o.bits+(o.last?64:0)+(o.mode===12?128:0)+(o.mode===20||o.mode===15?256:0),(Y==0&&K===0||R===4)&&z===v&&(z=-5),z)},r.inflateEnd=function(S){if(!S||!S.state)return h;var R=S.state;return R.window&&(R.window=null),S.state=null,v},r.inflateGetHeader=function(S,R){var o;return S&&S.state&&2&(o=S.state).wrap?((o.head=R).done=!1,v):h},r.inflateSetDictionary=function(S,R){var o,$=R.length;return S&&S.state?(o=S.state).wrap!==0&&o.mode!==11?h:o.mode===11&&l(1,R,$,0)!==o.check?-3:X(S,R,$,$)?(o.mode=31,-4):(o.havedict=1,v):h},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(y,m,v,h,w,c,f,d){var k,x,L,C,O,B,F,D,q,X=d.bits,S=0,R=0,o=0,$=0,tt=0,U=0,et=0,j=0,Q=0,I=0,A=null,Y=0,K=new s.Buf16(16),Z=new s.Buf16(16),ot=null,ct=0;for(S=0;S<=15;S++)K[S]=0;for(R=0;R<h;R++)K[m[v+R]]++;for(tt=X,$=15;1<=$&&K[$]===0;$--);if($<tt&&(tt=$),$===0)return w[c++]=20971520,w[c++]=20971520,d.bits=1,0;for(o=1;o<$&&K[o]===0;o++);for(tt<o&&(tt=o),S=j=1;S<=15;S++)if(j<<=1,(j-=K[S])<0)return-1;if(0<j&&(y===0||$!==1))return-1;for(Z[1]=0,S=1;S<15;S++)Z[S+1]=Z[S]+K[S];for(R=0;R<h;R++)m[v+R]!==0&&(f[Z[m[v+R]]++]=R);if(B=y===0?(A=ot=f,19):y===1?(A=l,Y-=257,ot=a,ct-=257,256):(A=u,ot=g,-1),S=o,O=c,et=R=I=0,L=-1,C=(Q=1<<(U=tt))-1,y===1&&852<Q||y===2&&592<Q)return 1;for(;;){for(F=S-et,q=f[R]<B?(D=0,f[R]):f[R]>B?(D=ot[ct+f[R]],A[Y+f[R]]):(D=96,0),k=1<<S-et,o=x=1<<U;w[O+(I>>et)+(x-=k)]=F<<24|D<<16|q|0,x!==0;);for(k=1<<S-1;I&k;)k>>=1;if(k!==0?(I&=k-1,I+=k):I=0,R++,--K[S]==0){if(S===$)break;S=m[v+f[R]]}if(tt<S&&(I&C)!==L){for(et===0&&(et=tt),O+=o,j=1<<(U=S-et);U+et<$&&!((j-=K[U+et])<=0);)U++,j<<=1;if(Q+=1<<U,y===1&&852<Q||y===2&&592<Q)return 1;w[L=I&C]=tt<<24|U<<16|O-c|0}}return I!==0&&(w[O+I]=S-et<<24|64<<16|0),d.bits=tt,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),l=0,a=1;function u(p){for(var _=p.length;0<=--_;)p[_]=0}var g=0,y=29,m=256,v=m+1+y,h=30,w=19,c=2*v+1,f=15,d=16,k=7,x=256,L=16,C=17,O=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],F=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(v+2));u(X);var S=new Array(2*h);u(S);var R=new Array(512);u(R);var o=new Array(256);u(o);var $=new Array(y);u($);var tt,U,et,j=new Array(h);function Q(p,_,H,P,E){this.static_tree=p,this.extra_bits=_,this.extra_base=H,this.elems=P,this.max_length=E,this.has_stree=p&&p.length}function I(p,_){this.dyn_tree=p,this.max_code=0,this.stat_desc=_}function A(p){return p<256?R[p]:R[256+(p>>>7)]}function Y(p,_){p.pending_buf[p.pending++]=255&_,p.pending_buf[p.pending++]=_>>>8&255}function K(p,_,H){p.bi_valid>d-H?(p.bi_buf|=_<<p.bi_valid&65535,Y(p,p.bi_buf),p.bi_buf=_>>d-p.bi_valid,p.bi_valid+=H-d):(p.bi_buf|=_<<p.bi_valid&65535,p.bi_valid+=H)}function Z(p,_,H){K(p,H[2*_],H[2*_+1])}function ot(p,_){for(var H=0;H|=1&p,p>>>=1,H<<=1,0<--_;);return H>>>1}function ct(p,_,H){var P,E,N=new Array(f+1),W=0;for(P=1;P<=f;P++)N[P]=W=W+H[P-1]<<1;for(E=0;E<=_;E++){var V=p[2*E+1];V!==0&&(p[2*E]=ot(N[V]++,V))}}function it(p){var _;for(_=0;_<v;_++)p.dyn_ltree[2*_]=0;for(_=0;_<h;_++)p.dyn_dtree[2*_]=0;for(_=0;_<w;_++)p.bl_tree[2*_]=0;p.dyn_ltree[2*x]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function nt(p){8<p.bi_valid?Y(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function ut(p,_,H,P){var E=2*_,N=2*H;return p[E]<p[N]||p[E]===p[N]&&P[_]<=P[H]}function at(p,_,H){for(var P=p.heap[H],E=H<<1;E<=p.heap_len&&(E<p.heap_len&&ut(_,p.heap[E+1],p.heap[E],p.depth)&&E++,!ut(_,P,p.heap[E],p.depth));)p.heap[H]=p.heap[E],H=E,E<<=1;p.heap[H]=P}function ft(p,_,H){var P,E,N,W,V=0;if(p.last_lit!==0)for(;P=p.pending_buf[p.d_buf+2*V]<<8|p.pending_buf[p.d_buf+2*V+1],E=p.pending_buf[p.l_buf+V],V++,P===0?Z(p,E,_):(Z(p,(N=o[E])+m+1,_),(W=B[N])!==0&&K(p,E-=$[N],W),Z(p,N=A(--P),H),(W=F[N])!==0&&K(p,P-=j[N],W)),V<p.last_lit;);Z(p,x,_)}function dt(p,_){var H,P,E,N=_.dyn_tree,W=_.stat_desc.static_tree,V=_.stat_desc.has_stree,J=_.stat_desc.elems,st=-1;for(p.heap_len=0,p.heap_max=c,H=0;H<J;H++)N[2*H]!==0?(p.heap[++p.heap_len]=st=H,p.depth[H]=0):N[2*H+1]=0;for(;p.heap_len<2;)N[2*(E=p.heap[++p.heap_len]=st<2?++st:0)]=1,p.depth[E]=0,p.opt_len--,V&&(p.static_len-=W[2*E+1]);for(_.max_code=st,H=p.heap_len>>1;1<=H;H--)at(p,N,H);for(E=J;H=p.heap[1],p.heap[1]=p.heap[p.heap_len--],at(p,N,1),P=p.heap[1],p.heap[--p.heap_max]=H,p.heap[--p.heap_max]=P,N[2*E]=N[2*H]+N[2*P],p.depth[E]=(p.depth[H]>=p.depth[P]?p.depth[H]:p.depth[P])+1,N[2*H+1]=N[2*P+1]=E,p.heap[1]=E++,at(p,N,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],function(rt,ht){var vt,mt,yt,lt,$t,He,gt=ht.dyn_tree,Pe=ht.max_code,Ge=ht.stat_desc.static_tree,Ne=ht.stat_desc.has_stree,qe=ht.stat_desc.extra_bits,Ue=ht.stat_desc.extra_base,wt=ht.stat_desc.max_length,Ot=0;for(lt=0;lt<=f;lt++)rt.bl_count[lt]=0;for(gt[2*rt.heap[rt.heap_max]+1]=0,vt=rt.heap_max+1;vt<c;vt++)wt<(lt=gt[2*gt[2*(mt=rt.heap[vt])+1]+1]+1)&&(lt=wt,Ot++),gt[2*mt+1]=lt,Pe<mt||(rt.bl_count[lt]++,$t=0,Ue<=mt&&($t=qe[mt-Ue]),He=gt[2*mt],rt.opt_len+=He*(lt+$t),Ne&&(rt.static_len+=He*(Ge[2*mt+1]+$t)));if(Ot!==0){do{for(lt=wt-1;rt.bl_count[lt]===0;)lt--;rt.bl_count[lt]--,rt.bl_count[lt+1]+=2,rt.bl_count[wt]--,Ot-=2}while(0<Ot);for(lt=wt;lt!==0;lt--)for(mt=rt.bl_count[lt];mt!==0;)Pe<(yt=rt.heap[--vt])||(gt[2*yt+1]!==lt&&(rt.opt_len+=(lt-gt[2*yt+1])*gt[2*yt],gt[2*yt+1]=lt),mt--)}}(p,_),ct(N,st,p.bl_count)}function i(p,_,H){var P,E,N=-1,W=_[1],V=0,J=7,st=4;for(W===0&&(J=138,st=3),_[2*(H+1)+1]=65535,P=0;P<=H;P++)E=W,W=_[2*(P+1)+1],++V<J&&E===W||(V<st?p.bl_tree[2*E]+=V:E!==0?(E!==N&&p.bl_tree[2*E]++,p.bl_tree[2*L]++):V<=10?p.bl_tree[2*C]++:p.bl_tree[2*O]++,N=E,st=(V=0)===W?(J=138,3):E===W?(J=6,3):(J=7,4))}function z(p,_,H){var P,E,N=-1,W=_[1],V=0,J=7,st=4;for(W===0&&(J=138,st=3),P=0;P<=H;P++)if(E=W,W=_[2*(P+1)+1],!(++V<J&&E===W)){if(V<st)for(;Z(p,E,p.bl_tree),--V!=0;);else E!==0?(E!==N&&(Z(p,E,p.bl_tree),V--),Z(p,L,p.bl_tree),K(p,V-3,2)):V<=10?(Z(p,C,p.bl_tree),K(p,V-3,3)):(Z(p,O,p.bl_tree),K(p,V-11,7));N=E,st=(V=0)===W?(J=138,3):E===W?(J=6,3):(J=7,4)}}u(j);var M=!1;function b(p,_,H,P){K(p,(g<<1)+(P?1:0),3),function(E,N,W,V){nt(E),Y(E,W),Y(E,~W),s.arraySet(E.pending_buf,E.window,N,W,E.pending),E.pending+=W}(p,_,H)}r._tr_init=function(p){M||(function(){var _,H,P,E,N,W=new Array(f+1);for(E=P=0;E<y-1;E++)for($[E]=P,_=0;_<1<<B[E];_++)o[P++]=E;for(o[P-1]=E,E=N=0;E<16;E++)for(j[E]=N,_=0;_<1<<F[E];_++)R[N++]=E;for(N>>=7;E<h;E++)for(j[E]=N<<7,_=0;_<1<<F[E]-7;_++)R[256+N++]=E;for(H=0;H<=f;H++)W[H]=0;for(_=0;_<=143;)X[2*_+1]=8,_++,W[8]++;for(;_<=255;)X[2*_+1]=9,_++,W[9]++;for(;_<=279;)X[2*_+1]=7,_++,W[7]++;for(;_<=287;)X[2*_+1]=8,_++,W[8]++;for(ct(X,v+1,W),_=0;_<h;_++)S[2*_+1]=5,S[2*_]=ot(_,5);tt=new Q(X,B,m+1,v,f),U=new Q(S,F,0,h,f),et=new Q(new Array(0),D,0,w,k)}(),M=!0),p.l_desc=new I(p.dyn_ltree,tt),p.d_desc=new I(p.dyn_dtree,U),p.bl_desc=new I(p.bl_tree,et),p.bi_buf=0,p.bi_valid=0,it(p)},r._tr_stored_block=b,r._tr_flush_block=function(p,_,H,P){var E,N,W=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=function(V){var J,st=4093624447;for(J=0;J<=31;J++,st>>>=1)if(1&st&&V.dyn_ltree[2*J]!==0)return l;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return a;for(J=32;J<m;J++)if(V.dyn_ltree[2*J]!==0)return a;return l}(p)),dt(p,p.l_desc),dt(p,p.d_desc),W=function(V){var J;for(i(V,V.dyn_ltree,V.l_desc.max_code),i(V,V.dyn_dtree,V.d_desc.max_code),dt(V,V.bl_desc),J=w-1;3<=J&&V.bl_tree[2*q[J]+1]===0;J--);return V.opt_len+=3*(J+1)+5+5+4,J}(p),E=p.opt_len+3+7>>>3,(N=p.static_len+3+7>>>3)<=E&&(E=N)):E=N=H+5,H+4<=E&&_!==-1?b(p,_,H,P):p.strategy===4||N===E?(K(p,2+(P?1:0),3),ft(p,X,S)):(K(p,4+(P?1:0),3),function(V,J,st,rt){var ht;for(K(V,J-257,5),K(V,st-1,5),K(V,rt-4,4),ht=0;ht<rt;ht++)K(V,V.bl_tree[2*q[ht]+1],3);z(V,V.dyn_ltree,J-1),z(V,V.dyn_dtree,st-1)}(p,p.l_desc.max_code+1,p.d_desc.max_code+1,W+1),ft(p,p.dyn_ltree,p.dyn_dtree)),it(p),P&&nt(p)},r._tr_tally=function(p,_,H){return p.pending_buf[p.d_buf+2*p.last_lit]=_>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&_,p.pending_buf[p.l_buf+p.last_lit]=255&H,p.last_lit++,_===0?p.dyn_ltree[2*H]++:(p.matches++,_--,p.dyn_ltree[2*(o[H]+m+1)]++,p.dyn_dtree[2*A(_)]++),p.last_lit===p.lit_bufsize-1},r._tr_align=function(p){K(p,2,3),Z(p,x,X),function(_){_.bi_valid===16?(Y(_,_.bi_buf),_.bi_buf=0,_.bi_valid=0):8<=_.bi_valid&&(_.pending_buf[_.pending++]=255&_.bi_buf,_.bi_buf>>=8,_.bi_valid-=8)}(p)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(l,a){if(!l.setImmediate){var u,g,y,m,v=1,h={},w=!1,c=l.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(l);f=f&&f.setTimeout?f:l,u={}.toString.call(l.process)==="[object process]"?function(L){process.nextTick(function(){k(L)})}:function(){if(l.postMessage&&!l.importScripts){var L=!0,C=l.onmessage;return l.onmessage=function(){L=!1},l.postMessage("","*"),l.onmessage=C,L}}()?(m="setImmediate$"+Math.random()+"$",l.addEventListener?l.addEventListener("message",x,!1):l.attachEvent("onmessage",x),function(L){l.postMessage(m+L,"*")}):l.MessageChannel?((y=new MessageChannel).port1.onmessage=function(L){k(L.data)},function(L){y.port2.postMessage(L)}):c&&"onreadystatechange"in c.createElement("script")?(g=c.documentElement,function(L){var C=c.createElement("script");C.onreadystatechange=function(){k(L),C.onreadystatechange=null,g.removeChild(C),C=null},g.appendChild(C)}):function(L){setTimeout(k,0,L)},f.setImmediate=function(L){typeof L!="function"&&(L=new Function(""+L));for(var C=new Array(arguments.length-1),O=0;O<C.length;O++)C[O]=arguments[O+1];var B={callback:L,args:C};return h[v]=B,u(v),v++},f.clearImmediate=d}function d(L){delete h[L]}function k(L){if(w)setTimeout(k,0,L);else{var C=h[L];if(C){w=!0;try{(function(O){var B=O.callback,F=O.args;switch(F.length){case 0:B();break;case 1:B(F[0]);break;case 2:B(F[0],F[1]);break;case 3:B(F[0],F[1],F[2]);break;default:B.apply(a,F)}})(C)}finally{d(L),w=!1}}}}function x(L){L.source===l&&typeof L.data=="string"&&L.data.indexOf(m)===0&&k(+L.data.slice(m.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jszip_min);var jszip_minExports=jszip_min.exports;const JSZip=getDefaultExportFromCjs(jszip_minExports),defaultItems$1=3,storeGistKey$1="metal-sheet-lists",storeDataKey$1="metalSheetLists",content$6=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$1}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>

    <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
`,Me=class Me extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$6,this.style.position="relative",this.ui.setTitle("Blech Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$1,this.storeMetalSheetListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$1,[])},t.ui.onUpdate=this.update.bind(this),t.ui.setExportHandler(async()=>{const e=new JSZip;for(const r of this.uiStore.ui.get(storeDataKey$1)){const s=getFileName$1(r),l=JSON.stringify(r);e.file(s,l)}const n=await e.generateAsync({type:"blob"});FileSaver.saveAs(n,`blech-listen-${new Date().getTime()}.zip`)})}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){console.debug("[PGDrawerMetalSheetLists.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey:storeDataKey$1,getKey:getKey$1})}async storeGistHandler(t){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey:storeGistKey$1,storeDataKey:storeDataKey$1,getFileName:getFileName$1,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:t}),!t)return;const e=[...this.children].slice(defaultItems$1);for(;e.length>0;)this.removeChild(e.pop());for(const n of metalSheetLists(t)){const r=new PGDrawerItemMetalSheetList;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists",l=>{l.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.format} - ${n.toolID} - ${n.date}"`)&&this.uiStore.ui.update(storeDataKey$1,s=>{const l=getKey$1(n);return s.filter(a=>getKey$1(a)!==l)})})),this.appendChild(r)}}};G(Me,"register",()=>{customElements.define("pg-drawer-metal-sheet-lists",Me)});let PGDrawerMetalSheetLists=Me;const content$5=html`
    <drawer-import-button gist-key="vis-data" disabled></drawer-import-button>

    <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
            New Data
        </ui-button>
    </ui-drawer-group-item>
`,De=class De extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$5,this.ui.setTitle("Vis Data"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}async validate(t){return t}async update(t){}onVisData(t){if(console.debug("[PGDrawerVisData.onVisData]",{lists:t}),!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const n of t){const r=new PGDrawerItemVisData;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(l=>l.title!==n.title))}))}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new NewVisDataDialog;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};G(De,"register",()=>{customElements.define("pg-drawer-vis-data",De)});let PGDrawerVisData=De;const defaultItems=2,storeGistKey="vis",storeDataKey="vis",content$4=html`
    <drawer-import-button gist-key="${storeGistKey}"></drawer-import-button>
    <drawer-gist-item></drawer-gist-item>
`,Be=class Be extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$4,this.ui.setTitle("Vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey,this.storeVisHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey,[])},t.ui.onUpdate=this.update.bind(this)}async toJSON(t){const e=l=>{const[a,u]=l.split(/[xX]/),g=parseFloat(a),y=parseFloat(u);return!g||!y?`${g}x${y}`:`${g>y?g:y}x${g<y?g:y}`},n=new Date,r={date:n.getTime(),title:`${n.getFullYear()} ${n.getMonth()+1} ${n.getDate()}`,data:[]},s=t.split(`
`);for(let l=0;l<s.length;l++){if(!s[l])continue;let[a,...u]=s[l].trim().replace(/\t/g," ").split(" ");a=a.trim();const{productName:g,format:y,newRest:m}=(()=>{let w="",c="";for(let f=0;f<u.length;f++)if(u[f].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){c=e(u[f]),u=u.slice(f+1);break}else w+=u[f]+" ";return{productName:w.trim(),format:e(c),newRest:u.map(f=>f.trim()).filter(f=>!!f)}})();if(!y)throw`missing format for "${g}" (lotto: "${a}") in vis (txt) data!`;if(!(m[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${g}" with lotto "${a}"!`;const v=m.shift()||"",h=m.join(" ");r.data.push({lotto:a,name:g,format:y,thickness:parseFloat(v.replaceAll(",",".")),stamp:h})}return r}async validate(t){const e=r=>new Error(`invalid data for product:
${JSON.stringify(r,null,4)}`);let n;if(typeof t=="string")try{n=JSON.parse(t)}catch{return await this.toJSON(t)}if(typeof n.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof n.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(n.data))throw new Error('invalid data: "data" not from type "array"');for(const r of n.data)if(typeof r.lotto!="string"||typeof r.name!="string"||typeof r.format!="string"||typeof r.thickness!="number"||typeof r.stamp!="string")throw e(r);return n}async update(t){console.debug("[PGDrawerVis.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey,getKey})}storeGistHandler(t){console.debug("[PGDrawerVis.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey,storeDataKey,getFileName,onUpdate:this.update.bind(this)})}storeVisHandler(t){if(console.debug("[PGDrawerVis.storeVisHandler]",{lists:t}),!t)return;const e=[...this.children].slice(defaultItems);for(;e.length>0;)this.removeChild(e.pop());for(const n of t){const r=new PGDrawerItemVis;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis",l=>{l.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update(storeDataKey,s=>s.filter(l=>l.title!==n.title))})),this.appendChild(r)}}};G(Be,"register",()=>{customElements.define("pg-drawer-vis",Be)});let PGDrawerVis=Be;const content$3=html`
    <ui-drawer open>
        <div
            style="
                font-size: 0.85rem;
                font-variation-settings: var(--ui-input-fontVariation);
            "
        >
            ${version}
        </div>

        <pg-drawer-alert-lists></pg-drawer-alert-lists>
        <pg-drawer-metal-sheet-lists></pg-drawer-metal-sheet-lists>
        <pg-drawer-vis></pg-drawer-vis>
        <pg-drawer-vis-data></pg-drawer-vis-data>
    </ui-drawer>
`,Re=class Re extends UIDrawer{constructor(){super(),this.innerHTML=content$3}getGroup(t){return this.querySelector(`pg-drawer-${t.toString()}`)}};G(Re,"register",()=>{customElements.define("pg-drawer",Re)});let PGDrawer=Re;function storeGistHandler(T,t,{storeGistKey:e,storeDataKey:n,getFileName:r,onUpdate:s}){if(!t)return;const l=document.querySelector("ui-store"),a=t[e];if(!a){T.ui.set(null,null),T.ui.onPull=null,T.ui.onPush=null;return}T.ui.set(a.id,a.revision);let u;const g=()=>{u&&T.removeChild(u),u=new UISpinner,T.appendChild(u)},y=()=>{u&&(T.removeChild(u),u=void 0)};T.ui.onPull=async(m,v)=>{g();try{await gistPull(m,v,{beforeUpdate:async()=>{l.ui.set(n,[])},update:s,updateRevision:h=>{l.ui.update("gist",w=>(w[e]={id:m,revision:h},w))}})}finally{y()}},T.ui.onPush=async(m,v)=>{g();try{await gistPush(m,v,l.ui.get("alertLists"),{getFileName:r,updateRevision:h=>{l.ui.update("gist",w=>(w[e]={id:m,revision:h},w))}})}finally{y()}}}function updateStore(T,t,{storeDataKey:e,getKey:n}){const r=n(t);if(T.ui.get(e).find(s=>n(s)===r)){T.ui.update(e,s=>s.map(l=>n(l)===r?t:l));return}T.ui.update(e,s=>[...s,t])}const content$2=html`
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

        <ui-app-bar-item name="edit" slot="right">
            <ui-icon-button ghost>
                <svg-pen></svg-pen>
            </ui-icon-button>
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
`,ze=class ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$2,this.cleanup=new CleanUp,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={items:{menu:this.shadowRoot.querySelector('[name="menu"]'),back:this.shadowRoot.querySelector('[name="back"]'),title:this.shadowRoot.querySelector('[name="title"]'),edit:this.shadowRoot.querySelector('[name="edit"]'),share:this.shadowRoot.querySelector('[name="share"]'),search:this.shadowRoot.querySelector('[name="search"]')}}}connectedCallback(){this.cleanup.add(this.ui.items.menu.ui.getChild().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0)),this.ui.items.back.ui.getChild().ui.events.on("click",()=>this.stackLayout.ui.goBack()),this.ui.items.edit.ui.getChild().ui.events.on("click",()=>{const t=this.uiStore.ui.get("edit").onClick;typeof t=="function"&&t()}),this.ui.items.share.ui.getChild().ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share"),e=async()=>{const n=document.createElement("a");for(const r of t.files)n.download=r.name,n.href="data:application/json;charset=utf-8,"+encodeURIComponent(await r.text()),n.click()};if(!navigator.canShare)return await e();if(navigator.canShare(t)){try{await navigator.share(t)}catch{await e()}return}await e()}),this.ui.items.search.ui.getChild().ui.events.on("click",()=>this.uiStore.ui.update("search",t=>({...t,active:!t.active}))))}disconnectedCallback(){this.cleanup.run()}};G(ze,"register",()=>{customElements.define("pg-app-bar",ze)});let PGAppBar=ze;const content$1=html`
    <ui-store storage-prefix="pg-vis:" use-storage></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout
            style="--search-bar-height: 0rem;"
            use-history
        ></ui-stack-layout>
    </ui-container>

    <pg-app-bar></pg-app-bar>
    <pg-drawer></pg-drawer>
`,$e=class $e extends HTMLElement{constructor(){super(),this.innerHTML=content$1,this.cleanup=new CleanUp,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.stackSize()>1?this.pgAppBar.ui.items.back.ui.enable():this.pgAppBar.ui.items.back.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"alert":this.setupAlertPage();break;case"metal-sheet-lists":this.setupMetalSheetListsPage();break;case"vis":this.setupVisPage();break;case"product":this.setupProductPage();break;case"vis-data":break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new AlertListsPage),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new MetalSheetListsPage),this.stackLayout.ui.registerPage("vis",()=>new VisPage),this.stackLayout.ui.registerPage("vis-data",()=>new VisDataPage)}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.ui.items.edit.ui.enable()}setupVisPage(){this.resetAppBar(),this.pgAppBar.ui.items.share.ui.enable(),this.pgAppBar.ui.items.search.ui.enable()}setupProductPage(){this.resetAppBar()}setupAlertPage(){this.resetAppBar()}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.ui.items.search.ui.enable()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis")}resetAppBar(){this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.ui.items.title.ui.getChild().innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.ui.items.share.ui.enable():this.pgAppBar.ui.items.share.ui.disable()}};G($e,"register",()=>{customElements.define("pg-app",$e)});let PGApp=$e;const content=html`
    <style>
        :host {
            padding: var(--ui-spacing);
        }
    </style>

    <slot></slot>
`,Oe=class Oe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content}};G(Oe,"register",()=>{customElements.define("vis-item-content",Oe)});let VisItemContent=Oe;registerSW({onRegistered(T){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${version}`),await T.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});registerSVGs();registerComponents();ImportDialog.register();NewVisDataDialog.register();PushDialog.register();AlertPage.register();AlertListsPage.register();SearchBar.register();MetalSheetCreateDialog.register();MetalSheetModifyEntryDialog.register();MetalSheetNewEntryDialog.register();MetalSheetActions.register();MetalSheetListsPage.register();ProductPage.register();VisItemContent.register();VisItem.register();VisPage.register();VisDataPage.register();PGDrawerAlertLists.register();PGDrawerMetalSheetLists.register();PGDrawerVisData.register();PGDrawerVis.register();DrawerGistItem.register();DrawerImportButton.register();DrawerNewMetalSheetListButton.register();DrawerRevision.register();PGDrawerItemAlertList.register();PGDrawerItemMetalSheetList.register();PGDrawerItemVisData.register();PGDrawerItemVis.register();PGDrawer.register();PGAppBar.register();PGApp.register();
