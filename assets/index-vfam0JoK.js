var Pe=Object.defineProperty;var Ue=R=>{throw TypeError(R)};var Oe=(R,t,e)=>t in R?Pe(R,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):R[t]=e;var Z=(R,t,e)=>Oe(R,typeof t!="symbol"?t+"":t,e),Fe=(R,t,e)=>t.has(R)||Ue("Cannot "+e);var bt=(R,t,e)=>(Fe(R,t,"read from private field"),e?e.call(R):t.get(R)),Be=(R,t,e)=>t.has(R)?Ue("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(R):t.set(R,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const scriptRel="modulepreload",assetsURL=function(R){return"/pg-vis.github.io/"+R},seen={},__vitePreload=function(t,e,n){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(a=>{if(a=assetsURL(a),a in seen)return;seen[a]=!0;const h=a.endsWith(".css"),m=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const v=document.createElement("link");if(v.rel=h?"stylesheet":scriptRel,h||(v.as="script",v.crossOrigin=""),v.href=a,l&&v.setAttribute("nonce",l),document.head.appendChild(v),h)return new Promise((b,y)=>{v.addEventListener("load",b),v.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${a}`)))})}))}return r.then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function registerSW(R={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:n,onRegistered:r,onRegisteredSW:s,onRegisterError:l}=R;let a,h;const m=async(b=!0)=>{await h};async function v(){if("serviceWorker"in navigator){if(a=await __vitePreload(async()=>{const{Workbox:b}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:b}},[]).then(({Workbox:b})=>new b("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(b=>{l==null||l(b)}),!a)return;a.addEventListener("activated",b=>{(b.isUpdate||b.isExternal)&&window.location.reload()}),a.addEventListener("installed",b=>{b.isUpdate||n==null||n()}),a.register({immediate:t}).then(b=>{s?s("/pg-vis.github.io/sw.js",b):r==null||r(b)}).catch(b=>{l==null||l(b)})}}return h=v(),m}const defaultOptions$1={onDragStart:null,onDragging:null,onDragEnd:null};function create$1(R,t={}){t={...defaultOptions$1,...t};const e=()=>{const s=[...R.parentNode.children].indexOf(R);R.draggable=!0,R.ondragstart=l=>{l.dataTransfer.effectAllowed="move",l.dataTransfer.dropEffect="move",l.dataTransfer.setData("text/plain",s.toString()),t.onDragStart&&t.onDragStart(s)},R.ondragover=l=>(l.preventDefault(),!1),R.ondragenter=l=>{l.preventDefault(),t.onDragging&&t.onDragging(s)},R.ondrop=l=>{l.preventDefault(),l.dataTransfer.dropEffect="move";const a=parseInt(l.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(a,s)}},n=()=>{R.draggable=!1,R.ondragstart=null,R.ondragover=null,R.ondragenter=null,R.ondrop=null};return e(),{update(r){t={...defaultOptions$1,...r},n(),e()},destroy:n}}var pt;class Events{constructor(){Be(this,pt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return bt(this,pt)[t]||(bt(this,pt)[t]=[]),bt(this,pt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!bt(this,pt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let n=!1,r=0;for(const s of bt(this,pt)[t])s===e&&(bt(this,pt)[t].splice(r,1),n=!0),r++;if(!n)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(bt(this,pt)[t])for(const n of bt(this,pt)[t])n(e);return this}}pt=new WeakMap;function rippleStart(R,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,R.currentTarget.appendChild(e);const n=R.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${n.height/2}px`,e.style.left=`${n.width/2}px`):(e.style.top=`${R.clientY-n.top}px`,e.style.left=`${R.clientX-n.left}px`);const r=Math.max(n.width,n.height)*.02;return e.style.transform=`scale(${r}) translate(0, 0)`,e}function rippleStop(R){R&&(R.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&R.remove()}),R.style.opacity="0")}const defaultOptions={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function create(R,t={}){t={...defaultOptions,...t};let e;const n=s=>{e=rippleStart(s,t)},r=()=>{rippleStop(e)};return R.classList.add("ripple-container"),R.style.overflow="hidden",t.useClick===!0?R.addEventListener("click",s=>{e=rippleStart(s,t),rippleStop(e)}):(R.addEventListener("pointerdown",n),R.addEventListener("pointerup",r),R.addEventListener("pointerleave",r)),()=>{R.classList.remove("ripple-container"),R.removeEventListener("pointerdown",n),R.removeEventListener("pointerup",r),R.removeEventListener("pointerleave",r)}}const html=String.raw;class CleanUp{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const defaultFlex="1",content$O=html`
    <style></style>
    <slot></slot>
`,kt=class kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$O,this.ui={root:this,cleanup:new CleanUp,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):defaultFlex},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"flex":this.updateStyle({flex:n||defaultFlex});break}}updateStyle({flex:t=defaultFlex}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};Z(kt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",kt)}),Z(kt,"observedAttributes",["flex"]);let UIFlexGridItem=kt;const defaultGap$1="0",content$N=`
    <style></style>
    <slot></slot>
`,_t=class _t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$N,this.ui={root:this,cleanup:new CleanUp,getGap(){return this.root.getAttribute("gap")||defaultGap$1},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"gap":this.updateStyle({gap:n||defaultGap$1});break}}updateStyle({gap:t=defaultGap$1}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};Z(_t,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",_t)}),Z(_t,"observedAttributes",["gap"]);let UIFlexGridRow=_t;const defaultGap="0",content$M=`
    <style></style>
    <slot></slot>
`,xt=class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$M,this.ui={root:this,cleanup:new CleanUp,getGap(){return this.root.getAttribute("gap")||defaultGap},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"gap":this.updateStyle({gap:n||defaultGap});break}}updateStyle({gap:t=defaultGap}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};Z(xt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",xt)}),Z(xt,"observedAttributes",["gap"]);let UIFlexGrid=xt;const content$L=html`
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
`,Mt=class Mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$L,this.ui={root:this,cleanup:new CleanUp,getLeftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},getCenterSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},getRightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Mt,"register",()=>{UIFlexGridRow.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Mt)});let UIAppBar=Mt;const content$K=html`
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
`,Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$K,this.ui={root:this,cleanup:new CleanUp,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getChild(){return this.root.querySelector("*")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Pt,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Pt)});let UIAppBarItem=Pt;const content$J=html`
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
`,St=class St extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$J,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"no-ripple":n!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":n!==null&&(["primary","secondary","destructive"].includes(n)?this.style.color=null:this.style.color=n);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};Z(St,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",St)}),Z(St,"observedAttributes",["no-ripple","color"]);let UIButton=St;const content$I=html`
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
`,Ct=class Ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$I,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"no-ripple":n!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":n!==null&&(["primary","secondary","destructive"].includes(n)?this.style.color=null:this.style.color=n);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};Z(Ct,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Ct)}),Z(Ct,"observedAttributes",["no-ripple","color"]);let UIIconButton=Ct;const content$H=html`
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
`,Ot=class Ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$H,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Ot,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ot)});let UIContainer=Ot;const content$G=html`
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
`,Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$G}};Z(Ft,"register",()=>{customElements.get("svg-chevron-left")||customElements.define("svg-chevron-left",Ft)});let SvgChevronLeft=Ft;const content$F=html`
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
`,Gt=class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$F}};Z(Gt,"register",()=>{customElements.get("svg-chevron-down")||customElements.define("svg-chevron-down",Gt)});let SvgChevronDown=Gt;const content$E=html`
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
`,Ht=class Ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$E}};Z(Ht,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",Ht)});let SvgClose=Ht;const content$D=html`
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
`,$t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$D}};Z($t,"register",()=>{customElements.get("svg-download")||customElements.define("svg-download",$t)});let SvgDownload=$t;const content$C=html`
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
`,jt=class jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$C}};Z(jt,"register",()=>{customElements.get("svg-pen")||customElements.define("svg-pen",jt)});let SvgPen=jt;const content$B=html`
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
`,Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$B}};Z(Nt,"register",()=>{customElements.get("svg-trash")||customElements.define("svg-trash",Nt)});let SvgTrash=Nt;const content$A=html`
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
`,qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$A}};Z(qt,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",qt)});let SvgSearch=qt;const content$z=html`
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
`,Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$z}};Z(Vt,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",Vt)});let SvgMenu=Vt;const content$y=html`
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
`,Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$y}};Z(Zt,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",Zt)});let SvgShare=Zt;const content$x=html`
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
`,Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$x,this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,events:new Events,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const n=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=n},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const n=this.shadowRoot.querySelector("dialog"),r=s=>{s.preventDefault()};n.addEventListener("cancel",r),this.cleanup.add(()=>{t.removeEventListener("click",e),n.removeEventListener("cancel",r)})}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}};Z(Wt,"register",()=>{SvgClose.register(),UIIconButton.register(),UIFlexGridRow.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",Wt)});let UIDialog=Wt;const zIndex=150,content$w=html`
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
`,It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$w,this.cleanup=new CleanUp,this.ui={root:this,cleanup:new CleanUp,aside:this.shadowRoot.querySelector("aside"),events:new Events,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=n=>{n.stopPropagation(),this.ui.setOpen(!1)},e=n=>{n.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"open":n!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};Z(It,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",It)}),Z(It,"observedAttributes",["open"]);let UIDrawer=It;const content$v=html`
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
`,Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$v,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Kt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",Kt)});let UIDrawerGroupItem=Kt;const content$u=html`
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
`,Et=class Et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$u,this.ui={root:this,cleanup:new CleanUp,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":n===""?this.removeAttribute("title"):n!==null?this.ui.setTitle(n):this.ui.removeTitle();break}}};Z(Et,"register",()=>{UIDrawerGroupItem.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Et)}),Z(Et,"observedAttributes",["title"]);let UIDrawerGroup=Et;const content$t=html`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,Jt=class Jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$t,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Jt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Jt)});let UIPrimary=Jt;const content$s=html`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,Yt=class Yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$s,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(Yt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Yt)});let UISecondary=Yt;const content$r=html`
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
`,At=class At extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$r,this.ui={root:this,cleanup:new CleanUp,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(t=>t.click())},onInputClick:async t=>{t.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(t){if(t===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(t){if(t===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"ripple":n!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=n||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=n||"";break}}};Z(At,"register",()=>{UIPrimary.register(),UISecondary.register(),customElements.get("ui-label")||customElements.define("ui-label",At)}),Z(At,"observedAttributes",["ripple","secondary","primary"]);let UILabel=At;const content$q=html`
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
`,Lt=class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$q,this.ui={root:this,cleanup:new CleanUp,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new Events,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){this.input.value=(t||"").toString()},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":let r=this.querySelector('[slot="title"]');if(n===null&&r&&(this.removeChild(r),r=null),n===null)return;r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=n;break;case"type":this.ui.input.type=n||"text";break;case"value":this.ui.setValue(n);break;case"placeholder":this.ui.input.placeholder=n||"";break;case"invalid":this.ui.input.ariaInvalid=n;break;case"min":this.ui.input.min=n||"";break;case"max":this.ui.input.max=n||"";break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};Z(Lt,"register",()=>{UISecondary.register(),customElements.get("ui-input")||customElements.define("ui-input",Lt)}),Z(Lt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let UIInput=Lt;const content$p=html`
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
`,Xt=class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$p,this.setAttribute("role","button"),this.ui={root:this,getValue(){return this.root.getAttribute("value")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getSelected(){return this.root.hasAttribute("selected")},setSelected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}}}};Z(Xt,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",Xt)});let UISelectOption=Xt;const content$o=html`
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
`,Qt=class Qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$o,this.cleanup=new CleanUp,this.ui={cleanup:new CleanUp,events:new Events,root:this,isOpen(){this.root.hasAttribute("open")},open(){this.root.setAttribute("open","")},close(){this.root.removeAttribute("open")},getOptions(){return[...this.root.children].filter(t=>t instanceof UISelectOption)},getSelectedOption(){try{return this.getOptions().find(t=>!!t.ui.getSelected())||null}catch{return null}}}}connectedCallback(){const t=this.shadowRoot.querySelector(".options"),e=async r=>{(r.composedPath()||[]).forEach(s=>{s instanceof UISelectOption&&([...this.querySelectorAll("ui-select-option")].forEach(l=>l.removeAttribute("selected")),s.setAttribute("selected",""),this.ui.events.dispatch("change",s))})},n=r=>{this.classList.toggle("open")?(r.stopPropagation(),this.addEventListener("click",e)):setTimeout(()=>this.removeEventListener("click",e))};t.addEventListener("click",n),this.cleanup.add(()=>{this.removeEventListener("click",n),t.removeEventListener("click",n)}),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}disconnectedCallback(){this.cleanup.run()}};Z(Qt,"register",()=>{SvgChevronDown.register(),UISelectOption.register(),customElements.get("ui-select")||customElements.define("ui-select",Qt)});let UISelect=Qt;const content$n=html`
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
`,Tt=class Tt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$n,this.ui={root:this,cleanup:new CleanUp,useStorage:!1,storagePrefix:null,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");t.type="text",t.onkeydown=async n=>{this.ui.hasSubmit()&&n.key==="Enter"&&this.ui.submit.click()},t.oninput=async()=>{this.ui.useStorage&&(e!==null&&clearTimeout(e),e=setTimeout(()=>{localStorage.setItem((this.ui.storagePrefix||"")+this.ui.getKey(),t.value),e=null},250)),this.ui.events.dispatch("input",t.value)};let e=null;return t.onchange=async()=>this.ui.events.dispatch("change",t.value),t})(),events:new Events,setKey(t){if(t===null){this.root.removeAttribute("key"),this.setValue("");return}this.root.setAttribute("key",t),this.setValue(localStorage.getItem(this.storagePrefix+this.getKey()))},getKey(){return this.root.getAttribute("key")||""},hasSubmit(){return!!this.submit.parentElement},disableSubmit(){this.hasSubmit()&&this.submit.parentElement.removeChild(this.submit)},enableSubmit(){if(!this.hasSubmit())return;this.root.shadowRoot.querySelector(".container").appendChild(this.submit)},setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){this.input.value=t||""},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"title":let r=this.querySelector('[slot="title"]');n===null&&r&&(this.removeChild(r),r=null),r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=n||"";break;case"value":this.ui.setValue(n);break;case"placeholder":this.ui.input.placeholder=n||"";break;case"invalid":this.ui.input.ariaInvalid=n!==null?"":null;break;case"no-submit":n!==null?this.ui.disableSubmit():this.ui.enableSubmit();break;case"use-storage":this.ui.useStorage=n!==null;break;case"storage-prefix":this.ui.storagePrefix=n;break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};Z(Tt,"register",()=>{UISecondary.register(),UIIconButton.register(),SvgSearch.register(),customElements.get("ui-search")||customElements.define("ui-search",Tt)}),Z(Tt,"observedAttributes",["title","value","placeholder","invalid","no-submit","use-storage","storage-prefix"]);let UISearch=Tt;const content$m=html`
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
`,te=class te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$m,this.ui={cleanup:new CleanUp}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(te,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",te)});let UISpinner=te;const innerHTML=html`
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
`,ee=class ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=innerHTML,this.ui={root:this,cleanup:new CleanUp,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}};Z(ee,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",ee)});let UIStackLayoutPage=ee;const content$l=html`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,Dt=class Dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$l,this.ui={root:this,cleanup:new CleanUp,pages:{},stack:[],onpopstate:null,events:new Events,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=null,n=!1){if(this.lock)return;const r=this.pages[t]();this.stack.push(this.root.appendChild(r)),typeof e=="function"&&setTimeout(()=>e(r));let s=null;this.stack.length>1&&!n&&(s=this.stack[this.stack.length-2],s.parentElement.removeChild(s)),this.dispatchChangeEvent(s),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,e,n){switch(t){case"use-history":n!==null?this.ui.enableHistory():this.ui.disableHistory();break}}};Z(Dt,"register",()=>{UIStackLayoutPage.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Dt)}),Z(Dt,"observedAttributes",["use-history"]);let UIStackLayout=Dt;const Ut=class Ut extends HTMLElement{constructor(){super(),this.ui={root:this,useStorage:!1,storagePrefix:null,stores:{},events:new Events,get(t){return this.stores[t]},set(t,e,n=!1){if(n&&this.storagePrefix){const r=JSON.parse(localStorage.getItem((this.storagePrefix||"")+t.toString())||"null");this.stores[t]=r??e}else this.stores[t]=e;this.useStorage&&localStorage.setItem((this.storagePrefix||"")+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,n=!1){if(typeof e!="function")throw"callback is not a function";return n&&e(this.get(t)),this.events.on(t,e)}}}attributeChangedCallback(t,e,n){switch(t){case"use-storage":this.ui.useStorage=n!==null;break;case"storage-prefix":this.ui.storagePrefix=n;break}}};Z(Ut,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Ut)}),Z(Ut,"observedAttributes",["use-storage","storage-prefix"]);let UIStore=Ut;const Bt=class Bt extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},getMode(t=document.body){return t.getAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}},mediaChangeHandler:t=>{t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},getAuto(){return!!this.media},setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null;return}if(this.setMode(null,e),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},addTheme(t,e){this.themes[t]=e},setTheme(t){var n;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((n=this.currentTheme)==null?void 0:n.name)==t)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}}}attributeChangedCallback(t,e,n){switch(t){case"auto":this.ui.setAuto(n!==null);break;case"mode":this.ui.setMode(n);break}}};Z(Bt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Bt)}),Z(Bt,"observedAttributes",["auto","mode"]);let UIThemeHandler=Bt;const content$k=html`
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
`,ie=class ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$k,this.cleanup=new CleanUp,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={items:{menu:this.shadowRoot.querySelector('[name="menu"]'),back:this.shadowRoot.querySelector('[name="back"]'),title:this.shadowRoot.querySelector('[name="title"]'),edit:this.shadowRoot.querySelector('[name="edit"]'),share:this.shadowRoot.querySelector('[name="share"]'),search:this.shadowRoot.querySelector('[name="search"]')}}}connectedCallback(){this.cleanup.add(this.ui.items.menu.ui.getChild().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0)),this.ui.items.back.ui.getChild().ui.events.on("click",()=>this.stackLayout.ui.goBack()),this.ui.items.edit.ui.getChild().ui.events.on("click",()=>{const t=this.uiStore.ui.get("edit").onClick;typeof t=="function"&&t()}),this.ui.items.share.ui.getChild().ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share"),e=async()=>{const n=document.createElement("a");for(const r of t.files)n.download=r.name,n.href="data:application/json;charset=utf-8,"+encodeURIComponent(await r.text()),n.click()};if(!navigator.canShare)return await e();if(navigator.canShare(t)){try{await navigator.share(t)}catch{await e()}return}await e()}),this.ui.items.search.ui.getChild().ui.events.on("click",()=>this.uiStore.ui.update("search",t=>({...t,active:!t.active}))))}disconnectedCallback(){this.cleanup.run()}};Z(ie,"register",()=>{SvgSearch.register(),SvgShare.register(),SvgChevronLeft.register(),SvgMenu.register(),SvgPen.register(),UIAppBarItem.register(),UIAppBar.register(),UIDrawerGroupItem.register(),UIIconButton.register(),customElements.define("pg-app-bar",ie)});let PGAppBar=ie;function createAlert({alert:R,container:t,hasBorder:e=!0,hasRipple:n=!0,onClick:r=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
        <div class="title">${R.alert}</div>

        <div
            class="number"
            style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
        >
            ${R.from===R.to?R.from:`${R.from}..${R.to}`}
        </div>
    `,s.setAttribute("data-from",R.from.toString()),s.setAttribute("data-to",R.to.toString()),s.setAttribute("data-alert",R.alert),s.setAttribute("data-desc",R.desc.join(`
`)),s.onclick=r,n&&(create(s),s.style.cursor="pointer",s.role="button"),s}function getFileName$1(R){return`AlarmListen_${R.title}.json`}const content$j=html`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,re=class re extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$j,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.ui.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(createAlert({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};Z(re,"register",()=>{UIFlexGrid.register(),UIFlexGridItem.register(),UIStackLayoutPage.register(),customElements.define("alert-page",re)});let AlertPage=re;const searchBarHeight="4.5em",content$i=html`
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
`,ne=class ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$i,this.input=this.shadowRoot.querySelector("ui-search"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,input:this.input,isActive(){return this.root.style.display==="block"},setActive(t){if(t){this.root.style.display="block",this.root.stackLayout.style.setProperty("--search-bar-height",searchBarHeight),this.input.focus();return}this.root.style.display="none",this.root.stackLayout.style.setProperty("--search-bar-height","0rem")},setPrefix(t){this.root.input.ui.storagePrefix="pg-vis:search:"+t}}}};Z(ne,"register",()=>{UISearch.register(),customElements.define("search-bar",ne)});let SearchBar=ne;const content$h=html`
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
`,se=class se extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$h,this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.list=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.searchBar=this.querySelector("search-bar"),this.alertPage=new AlertPage,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){const e=(t==null?void 0:t.title)||"",n=e;this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input.ui.setKey(n),setTimeout(()=>this.root.renderList())}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:e})=>{e===!0?(this.searchBar.ui.setActive(!0),await this.search(this.searchBar.ui.input.ui.getValue())):(this.searchBar.ui.setActive(!1),await this.search(""))});let t=null;this.ui.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),n=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let r=0;r<this.list.data.length;r++){if(e.active===!0&&!this.is(this.list.data[r],n))return;setTimeout(()=>this.renderListElement(t,this.list.data[r],r<this.list.data.length-1))}}renderListElement(t,e,n){t.appendChild(createAlert({alert:e,container:"li",hasBorder:n,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const n=[];for(let r=t.from;r<=t.to;r++)n.push(r);return!!`${n.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,n=this.getAlertFromElement(e);this.alertPage.ui.set(n),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(n=>{if(!this.searchBar.ui.isActive()){n.style.display="flex";return}if(this.is(this.getAlertFromElement(n),e)){n.style.display="flex";return}n.style.display="none"})}};Z(se,"register",()=>{UIStackLayoutPage.register(),SearchBar.register(),AlertPage.register(),customElements.define("alert-lists-page",se)});let AlertListsPage=se;function getKey(R,t){return`${R}:${t}`}function getFileName(R){return`BlechListen_${R.format}_${R.toolID}.json`}const gridContent$5=html`
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
`,oe=class oe extends UIDialog{constructor(t){switch(super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$5,e})()),t){case"create":this.ui.setTitle("Neue Liste");break;case"edit":this.ui.setTitle("Liste Bearbeiten");break}this.ui={...this.ui,root:this,mode:t,originFormat:"",originToolID:"",set(e,n,r=-1){this.root.querySelector('[name="format"] ui-input').ui.setValue(e),this.root.querySelector('[name="toolID"] ui-input').ui.setValue(n),this.root.querySelector('[name="press"] ui-select').ui.getOptions().forEach(h=>{h.ui.setSelected(parseInt(h.ui.getValue())===r)}),this.originFormat=e,this.originToolID=n}},this.uiStore=document.querySelector("ui-store"),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=this.getData();n!==null&&(this.ui.events.dispatch("submit",n),this.ui.close())}),this.appendChild(t)}getData(){var h;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.getValue();const n=this.querySelector('[name="toolID"] ui-input');t.toolID=n.ui.getValue();const r=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((h=r.ui.getSelectedOption())==null?void 0:h.ui.getValue())||"-1",10),t.format==="")return e.ui.setInvalid(!0),null;const s=getKey(this.ui.originFormat,this.ui.originToolID),l=getKey(t.format,t.toolID),a=this.uiStore.ui.get("metalSheetLists").find(m=>this.ui.mode==="edit"&&s===l?!1:getKey(m.format,m.toolID)===l);return a?(e.ui.setInvalid(a.format===t.format&&a.toolID!==t.toolID),n.ui.setInvalid(a.toolID===t.toolID),null):t}};Z(oe,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIButton.register(),UIInput.register(),UILabel.register(),UISelect.register(),customElements.get("metal-sheet-create-dialog")||customElements.define("metal-sheet-create-dialog",oe)});let MetalSheetCreateDialog=oe;const gridContent$4=html``,ae=class ae extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$4,t})()),this.ui.setTitle("Eintrag bearbeiten"),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<t.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
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
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const l=s.querySelector("ui-input");n.push(l.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(t)}};Z(ae,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIButton.register(),UIInput.register(),customElements.get("metal-sheet-modify-entry-dialog")||customElements.define("metal-sheet-modify-entry-dialog",ae)});let MetalSheetModifyEntryDialog=ae;const gridContent$3=html``,le=class le extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$3,t})()),this.ui.setTitle("Neuer Eintrag"),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<t.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
                        <ui-input
                            title="${t[r]}"
                            value="${(e==null?void 0:e[r])||""}"
                        ></ui-input>
                    `,n.appendChild(s)}}},this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const l=s.querySelector("ui-input");n.push(l.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(t)}};Z(le,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIButton.register(),UIInput.register(),customElements.get("metal-sheet-new-entry-dialog")||customElements.define("metal-sheet-new-entry-dialog",le)});let MetalSheetNewEntryDialog=le;const content$g=html`
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
`,ue=class ue extends UIFlexGridRow{constructor(){super(),this.innerHTML=content$g,this.ui={...this.ui,events:new Events}}connectedCallback(){super.connectedCallback();const t=this.querySelector('[name="new-entry"]'),e=this.querySelector('[name="delete-table"]');this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("new-entry",null)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete-table",null)}))}};Z(ue,"register",()=>{UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),customElements.define("metal-sheet-actions",ue)});let MetalSheetActions=ue;const content$f=html`
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
`,ce=class ce extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$f,this.ui.setName("metal-sheet-lists"),this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.root.list)])],getFileName(this.root.list),{type:"application/json"})],title:"Blech Listen",text:`${this.root.list.format} - ${this.root.list.toolID} - ${this.root.list.date}`}),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const n=getKey(t.format,t.toolID);return e=[...e.filter(r=>getKey(r.format,r.toolID)!==n),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(n=>getKey(n.format,n.toolID)!==t),e))}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{getKey(this.list.format,this.list.toolID);const e=new MetalSheetCreateDialog("edit");e.ui.set(this.list.format,this.list.toolID,this.list.data.press),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",n=>{this.ui.deleteStore(getKey(this.list.format,this.list.toolID)),this.list.format=n.format,this.list.toolID=n.toolID,this.list.data.press=n.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}});const t=this.querySelector("metal-sheet-actions");this.ui.cleanup.add(t.ui.events.on("new-entry",()=>this.createNewEntryDialog()),t.ui.events.on("delete-table",()=>{let e="";this.list.toolID?e=`Delete table: ${this.list.format} - ${this.list.toolID}`:e=`Delete table: ${this.list.format}`,window.confirm(e)&&(this.ui.set(null),this.ui.deleteStore(getKey(this.list.format,this.list.toolID)))}))}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}render(){const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(this.list===null)return;for(const r of this.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerHTML=r,t.appendChild(s)}let n=null;for(let r=0;r<this.list.data.table.data.length;r++){const s=document.createElement("tr");s.style.cursor="pointer",s.role="button",s.onclick=()=>this.createModifyEntryDialog(r),e.appendChild(s),create$1(s,{onDragEnd:(l,a)=>{if(n!==null){if(n<a){let h=this.list.data.table.data;h=[...h.slice(0,n),...h.slice(n+1,a+1),h[n],...h.slice(a+1)],this.list.data.table.data=h,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(n>a){let h=this.list.data.table.data;h=[...h.slice(0,a),h[n],...h.slice(a,n),...h.slice(n+1)],this.list.data.table.data=h,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(h=>{h.style.background="inherit",h.style.color="inherit"}),n=null}},onDragging:l=>{n!==null&&[...e.children].forEach((a,h)=>{if(h!==l){a.style.background="inherit",a.style.color="inherit";return}a.style.background="var(--ui-primary-bgColor)",a.style.color="var(--ui-primary-color)"})},onDragStart:l=>{n=l}});for(const l of this.list.data.table.data[r]){const a=document.createElement("td");a.style.textAlign="center",a.innerHTML=l,s.appendChild(a)}}}createModifyEntryDialog(t){const e=new MetalSheetModifyEntryDialog;e.ui.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",n=>{this.list.data.table.data[t]=n,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new MetalSheetNewEntryDialog;t.ui.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};Z(ce,"register",()=>{UIStackLayoutPage.register(),MetalSheetCreateDialog.register(),MetalSheetNewEntryDialog.register(),MetalSheetModifyEntryDialog.register(),MetalSheetActions.register(),customElements.define("metal-sheet-lists-page",ce)});let MetalSheetListsPage=ce;const content$e=html``,he=class he extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$e,this.ui.setName("vis")}};Z(he,"register",()=>{UIStackLayoutPage.register(),customElements.define("vis-page",he)});let VisPage=he;const content$d=html``,de=class de extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$d,this.ui.setName("vis-data")}};Z(de,"register",()=>{UIStackLayoutPage.register(),customElements.define("vis-data-page",de)});let VisDataPage=de;const version="v0.0.21",gridContent$2=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
    </ui-flex-grid-item>
`,pe=class pe extends UIDialog{constructor(t){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$2,e})()),this.ui.setTitle(`Import "${t}"`),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};Z(pe,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIInput.register(),UIButton.register(),UILabel.register(),customElements.get("import-dialog")||customElements.define("import-dialog",pe)});let ImportDialog=pe;const gridContent$1=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
    </ui-flex-grid-item>
`,fe=class fe extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$1,t})()),this.ui.setTitle("Gist Token"),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};Z(fe,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIInput.register(),UIButton.register(),UILabel.register(),customElements.get("push-dialog")||customElements.define("push-dialog",fe)});let PushDialog=fe;function sortAlertLists(R){const t=[],e=R.map(n=>`${n.title}`).sort();for(const n of e)t.push(R.find(r=>`${r.title}`===n));return t}function sortMetalSheetLists(R){let t=[];const e=R.map(n=>getKey(n.format,n.toolID)).sort();for(const n of e)t.push(R.find(r=>getKey(r.format,r.toolID)===n));return t}function importFile(R){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const n of e.currentTarget.files){const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{R(r.result,n)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${n.name}" failed!`)},r.readAsText(n)}},t.click()}const me=class me extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};Z(me,"register",()=>{customElements.get("drawer-revision")||customElements.define("drawer-revision",me)});let DrawerRevision=me;class Gist{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const n=await e.json();this.data={revision:n.history.length,files:{},owner:{login:n.owner.login}};for(const[r,s]of Object.entries(n.files))this.data.files[r]={filename:s.filename,content:JSON.parse(s.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}const content$c=html`
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
`,ge=class ge extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$c,this.style.display="none",this.style.position="relative",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,onPull:null,onPush:null,pullButton:this.querySelector('[name="pull"]'),pushButton:this.querySelector('[name="push"]'),set(t,e){const n=this.root.querySelector("ui-secondary"),r=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",n.innerHTML=t,r.innerHTML=`Revision: ${e}`):(this.root.style.display="none",n.innerHTML="&nbsp;",r.innerHTML="Revision: -"),this.pullButton.onclick=()=>{this.onPull&&this.onPull(t,e)},this.pushButton.onclick=()=>{this.onPush&&this.onPush(t,e)}}}}};Z(ge,"register",()=>{UIDrawerGroupItem.register(),UIFlexGrid.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIPrimary.register(),UISecondary.register(),DrawerRevision.register(),customElements.get("drawer-gist-item")||customElements.define("drawer-gist-item",ge)});let DrawerGistItem=ge;async function gistPull(R,t,{beforeUpdate:e=null,update:n,updateRevision:r}){const l=await new Gist(R).get();l.revision>t?confirm(`Update von revision "${t}" -> "${l.revision}"`)&&(typeof e=="function"&&await e(),Object.values(l.files).forEach(a=>n(a.content)),r(l.revision)):alert("Already up to date")}async function gistPush(R,t,e,{getFileName:n,updateRevision:r}){const s=new PushDialog;s.ui.events.on("close",()=>{document.body.removeChild(s)}),s.ui.events.on("submit",async l=>{if(l===null)return;const a=new Gist(R,l),h=await a.get();if(h.revision>t){alert(`Gist revision is newer then the current revision (${h.revision})`);return}const m=Object.values(h.files).map(y=>JSON.stringify(y.content)).sort(),v=Object.values(e).map(y=>JSON.stringify(y)).sort();if(JSON.stringify(m)===JSON.stringify(v)){alert("Nope, no patching needed... already up to date...");return}const b={};e.forEach(y=>{b[n(y)]={content:JSON.stringify(y)}});for(const y of Object.keys(h.files))Object.hasOwn(b,y)||(b[y]=null);try{console.debug(await a.patch(b))}catch(y){console.error(y);return}r((await a.get()).revision)}),document.body.appendChild(s),s.ui.open(!0)}const content$b=html`
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
`,_DrawerImportButton=class _DrawerImportButton extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$b,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,importButton:this.querySelector("ui-button"),exportButton:this.querySelector("ui-icon-button"),storeGistKey:null,beforeUpdate:null,onValidate:null,onUpdate:null,async setExportHandler(R){if(R===null){this.exportButton.parentElement.style.display="none";return}this.exportButton.parentElement.style.display="flex",this.exportButton.ui.cleanup.run(),this.exportButton.ui.cleanup.add(this.exportButton.ui.events.on("click",R))},setDisabled(R){R?(this.importButton.ui.disable(),this.exportButton.ui.disable()):(this.importButton.ui.enable(),this.exportButton.ui.enable())}}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.importButton.ui.events.on("click",()=>this.import()))}attributeChangedCallback(name,_oldValue,newValue){switch(name){case"store-gist-key":this.ui.storeGistKey=newValue;break;case"on-validate":newValue===null?this.ui.onValidate=null:this.ui.onValidate=eval(newValue);break;case"on-update":newValue===null?this.ui.onUpdate=null:this.ui.onUpdate=eval(newValue);break;case"disabled":this.ui.setDisabled(newValue!==null);break}}async import(){const R=new ImportDialog("Blech Listen");R.ui.events.on("submit",async t=>{if(this.ui.onValidate===null)throw new Error("onValidate callback missing");if(this.ui.onUpdate===null)throw new Error("onUpdate callback missing");if(t===null){importFile(async r=>{let s=JSON.parse(r);try{s=await this.ui.onValidate(s,null)}catch(l){alert(`Validation failed: ${l}`);return}await this.ui.onUpdate(s)});return}if(this.ui.storeGistKey===null)throw new Error("gist-key missing");const e=new Gist(t);let n;try{n=await e.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storeGistKey}`]={id:t,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.ui.onValidate(n.files[r].content,e.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.ui.beforeUpdate=="function"&&await this.ui.beforeUpdate();for(const r of Object.values(n.files))await this.ui.onUpdate(r.content)}),R.ui.events.on("close",()=>{document.body.removeChild(R)}),document.body.appendChild(R),R.ui.open(!0)}};Z(_DrawerImportButton,"register",()=>{SvgDownload.register(),UIButton.register(),UIDrawerGroupItem.register(),UIFlexGridItem.register(),UIFlexGridRow.register(),UIIconButton.register(),ImportDialog.register(),customElements.get("drawer-import-button")||customElements.define("drawer-import-button",_DrawerImportButton)}),Z(_DrawerImportButton,"observedAttributes",["store-gist-key","on-validate","on-update","disabled"]);let DrawerImportButton=_DrawerImportButton;const content$a=html`
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
`,be=class be extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$a,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title)}setText(t){const e=document.createElement("span");e.innerHTML=html` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};Z(be,"register",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-alert-list",be)});let PGDrawerItemAlertList=be;const storeGistKey$1="alert-lists",content$9=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$1}"
    ></drawer-import-button>
    <drawer-gist-item></drawer-gist-item>
`,ve=class ve extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$9,this.style.position="relative",this.ui.setTitle("Alarm Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on("alertLists",this.storeAlertListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set("alertLists",[])},t.ui.onUpdate=this.update.bind(this)}async validate(t){const e=n=>new Error(`invalid data for alert:
${JSON.stringify(n,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let n=0;n<t.data.length;n++){const r=t.data[n];if(typeof r.from!="number"||typeof r.to!="number"||typeof r.alert!="string"||!Array.isArray(r.desc)||(typeof r.desc=="string"&&(r.desc=r.desc.split(`
`)),r.desc.filter(s=>typeof s!="string").length))throw e(r)}return t}async update(t){const e=t.title;if(this.uiStore.ui.get("alertLists").find(n=>n.title===e)){if(!window.confirm(`Replace data: ${t.title}?`))return;this.uiStore.ui.update("alertLists",n=>n.map(r=>r.title===e?t:r));return}this.uiStore.ui.update("alertLists",n=>(n=[...n,t],n))}async storeGistHandler(t){if(console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),!t)return;const e=this.querySelector("drawer-gist-item"),n=t["alert-lists"];if(!n){e.ui.set(null,null),e.ui.onPull=null,e.ui.onPush=null;return}e.ui.set(n.id,n.revision);let r;const s=()=>{r&&e.removeChild(r),r=new UISpinner,e.appendChild(r)},l=()=>{r&&(e.removeChild(r),r=void 0)};e.ui.onPull=async(a,h)=>{s();try{await gistPull(a,h,{beforeUpdate:async()=>{this.uiStore.ui.set("alertLists",[])},update:this.update.bind(this),updateRevision:m=>{this.uiStore.ui.update("gist",v=>(v[storeGistKey$1]={id:a,revision:m},v))}})}finally{l()}},e.ui.onPush=async(a,h)=>{s();try{await gistPush(a,h,this.uiStore.ui.get("alertLists"),{getFileName:getFileName$1,updateRevision:m=>{this.uiStore.ui.update("gist",v=>(v[storeGistKey$1]={id:a,revision:m},v))}})}finally{l()}}}async storeAlertListsHandler(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const n of sortAlertLists(t)){const r=new PGDrawerItemAlertList;r.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",l=>{l.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.title} - ${n.date}`)&&this.uiStore.ui.update("alertLists",s=>s.filter(l=>l.title!==n.title))})),this.appendChild(r)}}};Z(ve,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),UISecondary.register(),DrawerImportButton.register(),DrawerGistItem.register(),PGDrawerItemAlertList.register(),ImportDialog.register(),PushDialog.register(),customElements.define("pg-drawer-alert-lists",ve)});let PGDrawerAlertLists=ve;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(R){return R&&R.__esModule&&Object.prototype.hasOwnProperty.call(R,"default")?R.default:R}var FileSaver_min={exports:{}};(function(R,t){(function(e,n){n()})(commonjsGlobal,function(){function e(m,v){return typeof v>"u"?v={autoBom:!1}:typeof v!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),v={autoBom:!v}),v.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(m.type)?new Blob(["\uFEFF",m],{type:m.type}):m}function n(m,v,b){var y=new XMLHttpRequest;y.open("GET",m),y.responseType="blob",y.onload=function(){h(y.response,v,b)},y.onerror=function(){console.error("could not download file")},y.send()}function r(m){var v=new XMLHttpRequest;v.open("HEAD",m,!1);try{v.send()}catch{}return 200<=v.status&&299>=v.status}function s(m){try{m.dispatchEvent(new MouseEvent("click"))}catch{var v=document.createEvent("MouseEvents");v.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),m.dispatchEvent(v)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof commonjsGlobal=="object"&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,a=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(m,v,b){var y=l.URL||l.webkitURL,c=document.createElement("a");v=v||m.name||"download",c.download=v,c.rel="noopener",typeof m=="string"?(c.href=m,c.origin===location.origin?s(c):r(c.href)?n(m,v,b):s(c,c.target="_blank")):(c.href=y.createObjectURL(m),setTimeout(function(){y.revokeObjectURL(c.href)},4e4),setTimeout(function(){s(c)},0))}:"msSaveOrOpenBlob"in navigator?function(m,v,b){if(v=v||m.name||"download",typeof m!="string")navigator.msSaveOrOpenBlob(e(m,b),v);else if(r(m))n(m,v,b);else{var y=document.createElement("a");y.href=m,y.target="_blank",setTimeout(function(){s(y)})}}:function(m,v,b,y){if(y=y||open("","_blank"),y&&(y.document.title=y.document.body.innerText="downloading..."),typeof m=="string")return n(m,v,b);var c=m.type==="application/octet-stream",w=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||c&&w||a)&&typeof FileReader<"u"){var f=new FileReader;f.onloadend=function(){var x=f.result;x=u?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),y?y.location.href=x:location=x,y=null},f.readAsDataURL(m)}else{var d=l.URL||l.webkitURL,k=d.createObjectURL(m);y?y.location=k:location.href=k,y=null,setTimeout(function(){d.revokeObjectURL(k)},4e4)}});l.saveAs=h.saveAs=h,R.exports=h})})(FileSaver_min);var FileSaver_minExports=FileSaver_min.exports;const FileSaver=getDefaultExportFromCjs(FileSaver_minExports);function commonjsRequire(R){throw new Error('Could not dynamically require "'+R+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jszip_min={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(R,t){(function(e){R.exports=e()})(function(){return function e(n,r,s){function l(m,v){if(!r[m]){if(!n[m]){var b=typeof commonjsRequire=="function"&&commonjsRequire;if(!v&&b)return b(m,!0);if(a)return a(m,!0);var y=new Error("Cannot find module '"+m+"'");throw y.code="MODULE_NOT_FOUND",y}var c=r[m]={exports:{}};n[m][0].call(c.exports,function(w){var u=n[m][1][w];return l(u||w)},c,c.exports,e,n,r,s)}return r[m].exports}for(var a=typeof commonjsRequire=="function"&&commonjsRequire,h=0;h<s.length;h++)l(s[h]);return l}({1:[function(e,n,r){var s=e("./utils"),l=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(h){for(var m,v,b,y,c,w,u,f=[],d=0,k=h.length,x=k,I=s.getTypeOf(h)!=="string";d<h.length;)x=k-d,b=I?(m=h[d++],v=d<k?h[d++]:0,d<k?h[d++]:0):(m=h.charCodeAt(d++),v=d<k?h.charCodeAt(d++):0,d<k?h.charCodeAt(d++):0),y=m>>2,c=(3&m)<<4|v>>4,w=1<x?(15&v)<<2|b>>6:64,u=2<x?63&b:64,f.push(a.charAt(y)+a.charAt(c)+a.charAt(w)+a.charAt(u));return f.join("")},r.decode=function(h){var m,v,b,y,c,w,u=0,f=0,d="data:";if(h.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var k,x=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===a.charAt(64)&&x--,h.charAt(h.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=l.uint8array?new Uint8Array(0|x):new Array(0|x);u<h.length;)m=a.indexOf(h.charAt(u++))<<2|(y=a.indexOf(h.charAt(u++)))>>4,v=(15&y)<<4|(c=a.indexOf(h.charAt(u++)))>>2,b=(3&c)<<6|(w=a.indexOf(h.charAt(u++))),k[f++]=m,c!==64&&(k[f++]=v),w!==64&&(k[f++]=b);return k}},{"./support":30,"./utils":32}],2:[function(e,n,r){var s=e("./external"),l=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),h=e("./stream/DataLengthProbe");function m(v,b,y,c,w){this.compressedSize=v,this.uncompressedSize=b,this.crc32=y,this.compression=c,this.compressedContent=w}m.prototype={getContentWorker:function(){var v=new l(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),b=this;return v.on("end",function(){if(this.streamInfo.data_length!==b.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),v},getCompressedWorker:function(){return new l(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},m.createWorkerFrom=function(v,b,y){return v.pipe(new a).pipe(new h("uncompressedSize")).pipe(b.compressWorker(y)).pipe(new h("compressedSize")).withStreamInfo("compression",b)},n.exports=m},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,n,r){var s=e("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,n,r){var s=e("./utils"),l=function(){for(var a,h=[],m=0;m<256;m++){a=m;for(var v=0;v<8;v++)a=1&a?3988292384^a>>>1:a>>>1;h[m]=a}return h}();n.exports=function(a,h){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(m,v,b,y){var c=l,w=y+b;m^=-1;for(var u=y;u<w;u++)m=m>>>8^c[255&(m^v[u])];return-1^m}(0|h,a,a.length,0):function(m,v,b,y){var c=l,w=y+b;m^=-1;for(var u=y;u<w;u++)m=m>>>8^c[255&(m^v.charCodeAt(u))];return-1^m}(0|h,a,a.length,0):0}},{"./utils":32}],5:[function(e,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(e,n,r){var s=null;s=typeof Promise<"u"?Promise:e("lie"),n.exports={Promise:s}},{lie:37}],7:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=e("pako"),a=e("./utils"),h=e("./stream/GenericWorker"),m=s?"uint8array":"array";function v(b,y){h.call(this,"FlateWorker/"+b),this._pako=null,this._pakoAction=b,this._pakoOptions=y,this.meta={}}r.magic="\b\0",a.inherits(v,h),v.prototype.processChunk=function(b){this.meta=b.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(m,b.data),!1)},v.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},v.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},v.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var b=this;this._pako.onData=function(y){b.push({data:y,meta:b.meta})}},r.compressWorker=function(b){return new v("Deflate",b)},r.uncompressWorker=function(){return new v("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,n,r){function s(c,w){var u,f="";for(u=0;u<w;u++)f+=String.fromCharCode(255&c),c>>>=8;return f}function l(c,w,u,f,d,k){var x,I,C=c.file,P=c.compression,U=k!==m.utf8encode,H=a.transformTo("string",k(C.name)),D=a.transformTo("string",m.utf8encode(C.name)),N=C.comment,X=a.transformTo("string",k(N)),_=a.transformTo("string",m.utf8encode(N)),B=D.length!==C.name.length,o=_.length!==N.length,M="",tt="",G="",et=C.dir,$=C.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};w&&!u||(Q.crc32=c.crc32,Q.compressedSize=c.compressedSize,Q.uncompressedSize=c.uncompressedSize);var L=0;w&&(L|=8),U||!B&&!o||(L|=2048);var A=0,Y=0;et&&(A|=16),d==="UNIX"?(Y=798,A|=function(V,ot){var ct=V;return V||(ct=ot?16893:33204),(65535&ct)<<16}(C.unixPermissions,et)):(Y=20,A|=function(V){return 63&(V||0)}(C.dosPermissions)),x=$.getUTCHours(),x<<=6,x|=$.getUTCMinutes(),x<<=5,x|=$.getUTCSeconds()/2,I=$.getUTCFullYear()-1980,I<<=4,I|=$.getUTCMonth()+1,I<<=5,I|=$.getUTCDate(),B&&(tt=s(1,1)+s(v(H),4)+D,M+="up"+s(tt.length,2)+tt),o&&(G=s(1,1)+s(v(X),4)+_,M+="uc"+s(G.length,2)+G);var W="";return W+=`
\0`,W+=s(L,2),W+=P.magic,W+=s(x,2),W+=s(I,2),W+=s(Q.crc32,4),W+=s(Q.compressedSize,4),W+=s(Q.uncompressedSize,4),W+=s(H.length,2),W+=s(M.length,2),{fileRecord:b.LOCAL_FILE_HEADER+W+H+M,dirRecord:b.CENTRAL_FILE_HEADER+s(Y,2)+W+s(X.length,2)+"\0\0\0\0"+s(A,4)+s(f,4)+H+M+X}}var a=e("../utils"),h=e("../stream/GenericWorker"),m=e("../utf8"),v=e("../crc32"),b=e("../signature");function y(c,w,u,f){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=u,this.encodeFileName=f,this.streamFiles=c,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(y,h),y.prototype.push=function(c){var w=c.meta.percent||0,u=this.entriesCount,f=this._sources.length;this.accumulate?this.contentBuffer.push(c):(this.bytesWritten+=c.data.length,h.prototype.push.call(this,{data:c.data,meta:{currentFile:this.currentFile,percent:u?(w+100*(u-f-1))/u:100}}))},y.prototype.openedSource=function(c){this.currentSourceOffset=this.bytesWritten,this.currentFile=c.file.name;var w=this.streamFiles&&!c.file.dir;if(w){var u=l(c,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},y.prototype.closedSource=function(c){this.accumulate=!1;var w=this.streamFiles&&!c.file.dir,u=l(c,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),w)this.push({data:function(f){return b.DATA_DESCRIPTOR+s(f.crc32,4)+s(f.compressedSize,4)+s(f.uncompressedSize,4)}(c),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},y.prototype.flush=function(){for(var c=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var u=this.bytesWritten-c,f=function(d,k,x,I,C){var P=a.transformTo("string",C(I));return b.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(k,4)+s(x,4)+s(P.length,2)+P}(this.dirRecords.length,u,c,this.zipComment,this.encodeFileName);this.push({data:f,meta:{percent:100}})},y.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},y.prototype.registerPrevious=function(c){this._sources.push(c);var w=this;return c.on("data",function(u){w.processChunk(u)}),c.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),c.on("error",function(u){w.error(u)}),this},y.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},y.prototype.error=function(c){var w=this._sources;if(!h.prototype.error.call(this,c))return!1;for(var u=0;u<w.length;u++)try{w[u].error(c)}catch{}return!0},y.prototype.lock=function(){h.prototype.lock.call(this);for(var c=this._sources,w=0;w<c.length;w++)c[w].lock()},n.exports=y},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,n,r){var s=e("../compressions"),l=e("./ZipFileWorker");r.generateWorker=function(a,h,m){var v=new l(h.streamFiles,m,h.platform,h.encodeFileName),b=0;try{a.forEach(function(y,c){b++;var w=function(k,x){var I=k||x,C=s[I];if(!C)throw new Error(I+" is not a valid compression method !");return C}(c.options.compression,h.compression),u=c.options.compressionOptions||h.compressionOptions||{},f=c.dir,d=c.date;c._compressWorker(w,u).withStreamInfo("file",{name:y,dir:f,date:d,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(v)}),v.entriesCount=b}catch(y){v.error(y)}return v}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new s;for(var a in this)typeof this[a]!="function"&&(l[a]=this[a]);return l}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(l,a){return new s().loadAsync(l,a)},s.external=e("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,n,r){var s=e("./utils"),l=e("./external"),a=e("./utf8"),h=e("./zipEntries"),m=e("./stream/Crc32Probe"),v=e("./nodejsUtils");function b(y){return new l.Promise(function(c,w){var u=y.decompressed.getContentWorker().pipe(new m);u.on("error",function(f){w(f)}).on("end",function(){u.streamInfo.crc32!==y.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):c()}).resume()})}n.exports=function(y,c){var w=this;return c=s.extend(c||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),v.isNode&&v.isStream(y)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",y,!0,c.optimizedBinaryString,c.base64).then(function(u){var f=new h(c);return f.load(u),f}).then(function(u){var f=[l.Promise.resolve(u)],d=u.files;if(c.checkCRC32)for(var k=0;k<d.length;k++)f.push(b(d[k]));return l.Promise.all(f)}).then(function(u){for(var f=u.shift(),d=f.files,k=0;k<d.length;k++){var x=d[k],I=x.fileNameStr,C=s.resolve(x.fileNameStr);w.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:c.createFolders}),x.dir||(w.file(C).unsafeOriginalName=I)}return f.zipComment.length&&(w.comment=f.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,n,r){var s=e("../utils"),l=e("../stream/GenericWorker");function a(h,m){l.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(m)}s.inherits(a,l),a.prototype._bindStream=function(h){var m=this;(this._stream=h).pause(),h.on("data",function(v){m.push({data:v,meta:{percent:0}})}).on("error",function(v){m.isPaused?this.generatedError=v:m.error(v)}).on("end",function(){m.isPaused?m._upstreamEnded=!0:m.end()})},a.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,n,r){var s=e("readable-stream").Readable;function l(a,h,m){s.call(this,h),this._helper=a;var v=this;a.on("data",function(b,y){v.push(b)||v._helper.pause(),m&&m(y)}).on("error",function(b){v.emit("error",b)}).on("end",function(){v.push(null)})}e("../utils").inherits(l,s),l.prototype._read=function(){this._helper.resume()},n.exports=l},{"../utils":32,"readable-stream":16}],14:[function(e,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,l);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,l)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var l=new Buffer(s);return l.fill(0),l},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,n,r){function s(C,P,U){var H,D=a.getTypeOf(P),N=a.extend(U||{},v);N.date=N.date||new Date,N.compression!==null&&(N.compression=N.compression.toUpperCase()),typeof N.unixPermissions=="string"&&(N.unixPermissions=parseInt(N.unixPermissions,8)),N.unixPermissions&&16384&N.unixPermissions&&(N.dir=!0),N.dosPermissions&&16&N.dosPermissions&&(N.dir=!0),N.dir&&(C=d(C)),N.createFolders&&(H=f(C))&&k.call(this,H,!0);var X=D==="string"&&N.binary===!1&&N.base64===!1;U&&U.binary!==void 0||(N.binary=!X),(P instanceof b&&P.uncompressedSize===0||N.dir||!P||P.length===0)&&(N.base64=!1,N.binary=!0,P="",N.compression="STORE",D="string");var _=null;_=P instanceof b||P instanceof h?P:w.isNode&&w.isStream(P)?new u(C,P):a.prepareContent(C,P,N.binary,N.optimizedBinaryString,N.base64);var B=new y(C,_,N);this.files[C]=B}var l=e("./utf8"),a=e("./utils"),h=e("./stream/GenericWorker"),m=e("./stream/StreamHelper"),v=e("./defaults"),b=e("./compressedObject"),y=e("./zipObject"),c=e("./generate"),w=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),f=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var P=C.lastIndexOf("/");return 0<P?C.substring(0,P):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},k=function(C,P){return P=P!==void 0?P:v.createFolders,C=d(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:P}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var I={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var P,U,H;for(P in this.files)H=this.files[P],(U=P.slice(this.root.length,P.length))&&P.slice(0,this.root.length)===this.root&&C(U,H)},filter:function(C){var P=[];return this.forEach(function(U,H){C(U,H)&&P.push(H)}),P},file:function(C,P,U){if(arguments.length!==1)return C=this.root+C,s.call(this,C,P,U),this;if(x(C)){var H=C;return this.filter(function(N,X){return!X.dir&&H.test(N)})}var D=this.files[this.root+C];return D&&!D.dir?D:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(D,N){return N.dir&&C.test(D)});var P=this.root+C,U=k.call(this,P),H=this.clone();return H.root=U.name,H},remove:function(C){C=this.root+C;var P=this.files[C];if(P||(C.slice(-1)!=="/"&&(C+="/"),P=this.files[C]),P&&!P.dir)delete this.files[C];else for(var U=this.filter(function(D,N){return N.name.slice(0,C.length)===C}),H=0;H<U.length;H++)delete this.files[U[H].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var P,U={};try{if((U=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=U.type.toLowerCase(),U.compression=U.compression.toUpperCase(),U.type==="binarystring"&&(U.type="string"),!U.type)throw new Error("No output type specified.");a.checkSupport(U.type),U.platform!=="darwin"&&U.platform!=="freebsd"&&U.platform!=="linux"&&U.platform!=="sunos"||(U.platform="UNIX"),U.platform==="win32"&&(U.platform="DOS");var H=U.comment||this.comment||"";P=c.generateWorker(this,U,H)}catch(D){(P=new h("error")).error(D)}return new m(P,U.type||"string",U.mimeType)},generateAsync:function(C,P){return this.generateInternalStream(C).accumulate(P)},generateNodeStream:function(C,P){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(P)}};n.exports=I},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,n,r){n.exports=e("stream")},{stream:void 0}],17:[function(e,n,r){var s=e("./DataReader");function l(a){s.call(this,a);for(var h=0;h<this.data.length;h++)a[h]=255&a[h]}e("../utils").inherits(l,s),l.prototype.byteAt=function(a){return this.data[this.zero+a]},l.prototype.lastIndexOfSignature=function(a){for(var h=a.charCodeAt(0),m=a.charCodeAt(1),v=a.charCodeAt(2),b=a.charCodeAt(3),y=this.length-4;0<=y;--y)if(this.data[y]===h&&this.data[y+1]===m&&this.data[y+2]===v&&this.data[y+3]===b)return y-this.zero;return-1},l.prototype.readAndCheckSignature=function(a){var h=a.charCodeAt(0),m=a.charCodeAt(1),v=a.charCodeAt(2),b=a.charCodeAt(3),y=this.readData(4);return h===y[0]&&m===y[1]&&v===y[2]&&b===y[3]},l.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,h},n.exports=l},{"../utils":32,"./DataReader":18}],18:[function(e,n,r){var s=e("../utils");function l(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var h,m=0;for(this.checkOffset(a),h=this.index+a-1;h>=this.index;h--)m=(m<<8)+this.byteAt(h);return this.index+=a,m},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},n.exports=l},{"../utils":32}],19:[function(e,n,r){var s=e("./Uint8ArrayReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.readData=function(a){this.checkOffset(a);var h=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,h},n.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,n,r){var s=e("./DataReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},l.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},l.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},l.prototype.readData=function(a){this.checkOffset(a);var h=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,h},n.exports=l},{"../utils":32,"./DataReader":18}],21:[function(e,n,r){var s=e("./ArrayReader");function l(a){s.call(this,a)}e("../utils").inherits(l,s),l.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,h},n.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(e,n,r){var s=e("../utils"),l=e("../support"),a=e("./ArrayReader"),h=e("./StringReader"),m=e("./NodeBufferReader"),v=e("./Uint8ArrayReader");n.exports=function(b){var y=s.getTypeOf(b);return s.checkSupport(y),y!=="string"||l.uint8array?y==="nodebuffer"?new m(b):l.uint8array?new v(s.transformTo("uint8array",b)):new a(s.transformTo("array",b)):new h(b)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,n,r){var s=e("./GenericWorker"),l=e("../utils");function a(h){s.call(this,"ConvertWorker to "+h),this.destType=h}l.inherits(a,s),a.prototype.processChunk=function(h){this.push({data:l.transformTo(this.destType,h.data),meta:h.meta})},n.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,n,r){var s=e("./GenericWorker"),l=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(h){this.streamInfo.crc32=l(h.data,this.streamInfo.crc32||0),this.push(h)},n.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,n,r){var s=e("../utils"),l=e("./GenericWorker");function a(h){l.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}s.inherits(a,l),a.prototype.processChunk=function(h){if(h){var m=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=m+h.data.length}l.prototype.processChunk.call(this,h)},n.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,n,r){var s=e("../utils"),l=e("./GenericWorker");function a(h){l.call(this,"DataWorker");var m=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(v){m.dataIsReady=!0,m.data=v,m.max=v&&v.length||0,m.type=s.getTypeOf(v),m.isPaused||m._tickAndRepeat()},function(v){m.error(v)})}s.inherits(a,l),a.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,m=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,m);break;case"uint8array":h=this.data.subarray(this.index,m);break;case"array":case"nodebuffer":h=this.data.slice(this.index,m)}return this.index=m,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,n,r){function s(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,a){return this._listeners[l].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,a){if(this._listeners[l])for(var h=0;h<this._listeners[l].length;h++)this._listeners[l][h].call(this,a)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var a=this;return l.on("data",function(h){a.processChunk(h)}),l.on("end",function(){a.end()}),l.on("error",function(h){a.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,a){return this.extraStreamInfo[l]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},n.exports=s},{}],29:[function(e,n,r){var s=e("../utils"),l=e("./ConvertWorker"),a=e("./GenericWorker"),h=e("../base64"),m=e("../support"),v=e("../external"),b=null;if(m.nodestream)try{b=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function y(w,u){return new v.Promise(function(f,d){var k=[],x=w._internalType,I=w._outputType,C=w._mimeType;w.on("data",function(P,U){k.push(P),u&&u(U)}).on("error",function(P){k=[],d(P)}).on("end",function(){try{var P=function(U,H,D){switch(U){case"blob":return s.newBlob(s.transformTo("arraybuffer",H),D);case"base64":return h.encode(H);default:return s.transformTo(U,H)}}(I,function(U,H){var D,N=0,X=null,_=0;for(D=0;D<H.length;D++)_+=H[D].length;switch(U){case"string":return H.join("");case"array":return Array.prototype.concat.apply([],H);case"uint8array":for(X=new Uint8Array(_),D=0;D<H.length;D++)X.set(H[D],N),N+=H[D].length;return X;case"nodebuffer":return Buffer.concat(H);default:throw new Error("concat : unsupported type '"+U+"'")}}(x,k),C);f(P)}catch(U){d(U)}k=[]}).resume()})}function c(w,u,f){var d=u;switch(u){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=u,this._mimeType=f,s.checkSupport(d),this._worker=w.pipe(new l(d)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}c.prototype={accumulate:function(w){return y(this,w)},on:function(w,u){var f=this;return w==="data"?this._worker.on(w,function(d){u.call(f,d.data,d.meta)}):this._worker.on(w,function(){s.delay(u,arguments,f)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new b(this,{objectMode:this._outputType!=="nodebuffer"},w)}},n.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(s),r.blob=l.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!e("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(e,n,r){for(var s=e("./utils"),l=e("./support"),a=e("./nodejsUtils"),h=e("./stream/GenericWorker"),m=new Array(256),v=0;v<256;v++)m[v]=252<=v?6:248<=v?5:240<=v?4:224<=v?3:192<=v?2:1;m[254]=m[254]=1;function b(){h.call(this,"utf-8 decode"),this.leftOver=null}function y(){h.call(this,"utf-8 encode")}r.utf8encode=function(c){return l.nodebuffer?a.newBufferFrom(c,"utf-8"):function(w){var u,f,d,k,x,I=w.length,C=0;for(k=0;k<I;k++)(64512&(f=w.charCodeAt(k)))==55296&&k+1<I&&(64512&(d=w.charCodeAt(k+1)))==56320&&(f=65536+(f-55296<<10)+(d-56320),k++),C+=f<128?1:f<2048?2:f<65536?3:4;for(u=l.uint8array?new Uint8Array(C):new Array(C),k=x=0;x<C;k++)(64512&(f=w.charCodeAt(k)))==55296&&k+1<I&&(64512&(d=w.charCodeAt(k+1)))==56320&&(f=65536+(f-55296<<10)+(d-56320),k++),f<128?u[x++]=f:(f<2048?u[x++]=192|f>>>6:(f<65536?u[x++]=224|f>>>12:(u[x++]=240|f>>>18,u[x++]=128|f>>>12&63),u[x++]=128|f>>>6&63),u[x++]=128|63&f);return u}(c)},r.utf8decode=function(c){return l.nodebuffer?s.transformTo("nodebuffer",c).toString("utf-8"):function(w){var u,f,d,k,x=w.length,I=new Array(2*x);for(u=f=0;u<x;)if((d=w[u++])<128)I[f++]=d;else if(4<(k=m[d]))I[f++]=65533,u+=k-1;else{for(d&=k===2?31:k===3?15:7;1<k&&u<x;)d=d<<6|63&w[u++],k--;1<k?I[f++]=65533:d<65536?I[f++]=d:(d-=65536,I[f++]=55296|d>>10&1023,I[f++]=56320|1023&d)}return I.length!==f&&(I.subarray?I=I.subarray(0,f):I.length=f),s.applyFromCharCode(I)}(c=s.transformTo(l.uint8array?"uint8array":"array",c))},s.inherits(b,h),b.prototype.processChunk=function(c){var w=s.transformTo(l.uint8array?"uint8array":"array",c.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var u=w;(w=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),w.set(u,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var f=function(k,x){var I;for((x=x||k.length)>k.length&&(x=k.length),I=x-1;0<=I&&(192&k[I])==128;)I--;return I<0||I===0?x:I+m[k[I]]>x?I:x}(w),d=w;f!==w.length&&(l.uint8array?(d=w.subarray(0,f),this.leftOver=w.subarray(f,w.length)):(d=w.slice(0,f),this.leftOver=w.slice(f,w.length))),this.push({data:r.utf8decode(d),meta:c.meta})},b.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=b,s.inherits(y,h),y.prototype.processChunk=function(c){this.push({data:r.utf8encode(c.data),meta:c.meta})},r.Utf8EncodeWorker=y},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,n,r){var s=e("./support"),l=e("./base64"),a=e("./nodejsUtils"),h=e("./external");function m(u){return u}function v(u,f){for(var d=0;d<u.length;++d)f[d]=255&u.charCodeAt(d);return f}e("setimmediate"),r.newBlob=function(u,f){r.checkSupport("blob");try{return new Blob([u],{type:f})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(u),d.getBlob(f)}catch{throw new Error("Bug : can't construct the Blob.")}}};var b={stringifyByChunk:function(u,f,d){var k=[],x=0,I=u.length;if(I<=d)return String.fromCharCode.apply(null,u);for(;x<I;)f==="array"||f==="nodebuffer"?k.push(String.fromCharCode.apply(null,u.slice(x,Math.min(x+d,I)))):k.push(String.fromCharCode.apply(null,u.subarray(x,Math.min(x+d,I)))),x+=d;return k.join("")},stringifyByChar:function(u){for(var f="",d=0;d<u.length;d++)f+=String.fromCharCode(u[d]);return f},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function y(u){var f=65536,d=r.getTypeOf(u),k=!0;if(d==="uint8array"?k=b.applyCanBeUsed.uint8array:d==="nodebuffer"&&(k=b.applyCanBeUsed.nodebuffer),k)for(;1<f;)try{return b.stringifyByChunk(u,d,f)}catch{f=Math.floor(f/2)}return b.stringifyByChar(u)}function c(u,f){for(var d=0;d<u.length;d++)f[d]=u[d];return f}r.applyFromCharCode=y;var w={};w.string={string:m,array:function(u){return v(u,new Array(u.length))},arraybuffer:function(u){return w.string.uint8array(u).buffer},uint8array:function(u){return v(u,new Uint8Array(u.length))},nodebuffer:function(u){return v(u,a.allocBuffer(u.length))}},w.array={string:y,array:m,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},w.arraybuffer={string:function(u){return y(new Uint8Array(u))},array:function(u){return c(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:m,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},w.uint8array={string:y,array:function(u){return c(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:m,nodebuffer:function(u){return a.newBufferFrom(u)}},w.nodebuffer={string:y,array:function(u){return c(u,new Array(u.length))},arraybuffer:function(u){return w.nodebuffer.uint8array(u).buffer},uint8array:function(u){return c(u,new Uint8Array(u.length))},nodebuffer:m},r.transformTo=function(u,f){if(f=f||"",!u)return f;r.checkSupport(u);var d=r.getTypeOf(f);return w[d][u](f)},r.resolve=function(u){for(var f=u.split("/"),d=[],k=0;k<f.length;k++){var x=f[k];x==="."||x===""&&k!==0&&k!==f.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},r.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(u)?"nodebuffer":s.uint8array&&u instanceof Uint8Array?"uint8array":s.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(u){if(!s[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(u){var f,d,k="";for(d=0;d<(u||"").length;d++)k+="\\x"+((f=u.charCodeAt(d))<16?"0":"")+f.toString(16).toUpperCase();return k},r.delay=function(u,f,d){setImmediate(function(){u.apply(d||null,f||[])})},r.inherits=function(u,f){function d(){}d.prototype=f.prototype,u.prototype=new d},r.extend=function(){var u,f,d={};for(u=0;u<arguments.length;u++)for(f in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],f)&&d[f]===void 0&&(d[f]=arguments[u][f]);return d},r.prepareContent=function(u,f,d,k,x){return h.Promise.resolve(f).then(function(I){return s.blob&&(I instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(I))!==-1)&&typeof FileReader<"u"?new h.Promise(function(C,P){var U=new FileReader;U.onload=function(H){C(H.target.result)},U.onerror=function(H){P(H.target.error)},U.readAsArrayBuffer(I)}):I}).then(function(I){var C=r.getTypeOf(I);return C?(C==="arraybuffer"?I=r.transformTo("uint8array",I):C==="string"&&(x?I=l.decode(I):d&&k!==!0&&(I=function(P){return v(P,s.uint8array?new Uint8Array(P.length):new Array(P.length))}(I))),I):h.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,n,r){var s=e("./reader/readerFor"),l=e("./utils"),a=e("./signature"),h=e("./zipEntry"),m=e("./support");function v(b){this.files=[],this.loadOptions=b}v.prototype={checkSignature:function(b){if(!this.reader.readAndCheckSignature(b)){this.reader.index-=4;var y=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(y)+", expected "+l.pretty(b)+")")}},isSignature:function(b,y){var c=this.reader.index;this.reader.setIndex(b);var w=this.reader.readString(4)===y;return this.reader.setIndex(c),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var b=this.reader.readData(this.zipCommentLength),y=m.uint8array?"uint8array":"array",c=l.transformTo(y,b);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var b,y,c,w=this.zip64EndOfCentralSize-44;0<w;)b=this.reader.readInt(2),y=this.reader.readInt(4),c=this.reader.readData(y),this.zip64ExtensibleData[b]={id:b,length:y,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var b,y;for(b=0;b<this.files.length;b++)y=this.files[b],this.reader.setIndex(y.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),y.readLocalPart(this.reader),y.handleUTF8(),y.processAttributes()},readCentralDir:function(){var b;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(b=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(b);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var b=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(b<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(b);var y=b;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(b=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(b),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var c=this.centralDirOffset+this.centralDirSize;this.zip64&&(c+=20,c+=12+this.zip64EndOfCentralSize);var w=y-c;if(0<w)this.isSignature(y,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(b){this.reader=s(b)},load:function(b){this.prepareReader(b),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=v},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,n,r){var s=e("./reader/readerFor"),l=e("./utils"),a=e("./compressedObject"),h=e("./crc32"),m=e("./utf8"),v=e("./compressions"),b=e("./support");function y(c,w){this.options=c,this.loadOptions=w}y.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(c){var w,u;if(c.skip(22),this.fileNameLength=c.readInt(2),u=c.readInt(2),this.fileName=c.readData(this.fileNameLength),c.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(f){for(var d in v)if(Object.prototype.hasOwnProperty.call(v,d)&&v[d].magic===f)return v[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,c.readData(this.compressedSize))},readCentralPart:function(c){this.versionMadeBy=c.readInt(2),c.skip(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4);var w=c.readInt(2);if(this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");c.skip(w),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var c=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),c==0&&(this.dosPermissions=63&this.externalFileAttributes),c==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=s(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))}},readExtraFields:function(c){var w,u,f,d=c.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});c.index+4<d;)w=c.readInt(2),u=c.readInt(2),f=c.readData(u),this.extraFields[w]={id:w,length:u,value:f};c.setIndex(d)},handleUTF8:function(){var c=b.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=m.utf8decode(this.fileName),this.fileCommentStr=m.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var u=l.transformTo(c,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var f=this.findExtraFieldUnicodeComment();if(f!==null)this.fileCommentStr=f;else{var d=l.transformTo(c,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var c=this.extraFields[28789];if(c){var w=s(c.value);return w.readInt(1)!==1||h(this.fileName)!==w.readInt(4)?null:m.utf8decode(w.readData(c.length-5))}return null},findExtraFieldUnicodeComment:function(){var c=this.extraFields[25461];if(c){var w=s(c.value);return w.readInt(1)!==1||h(this.fileComment)!==w.readInt(4)?null:m.utf8decode(w.readData(c.length-5))}return null}},n.exports=y},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,n,r){function s(w,u,f){this.name=w,this.dir=f.dir,this.date=f.date,this.comment=f.comment,this.unixPermissions=f.unixPermissions,this.dosPermissions=f.dosPermissions,this._data=u,this._dataBinary=f.binary,this.options={compression:f.compression,compressionOptions:f.compressionOptions}}var l=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),h=e("./utf8"),m=e("./compressedObject"),v=e("./stream/GenericWorker");s.prototype={internalStream:function(w){var u=null,f="string";try{if(!w)throw new Error("No output type specified.");var d=(f=w.toLowerCase())==="string"||f==="text";f!=="binarystring"&&f!=="text"||(f="string"),u=this._decompressWorker();var k=!this._dataBinary;k&&!d&&(u=u.pipe(new h.Utf8EncodeWorker)),!k&&d&&(u=u.pipe(new h.Utf8DecodeWorker))}catch(x){(u=new v("error")).error(x)}return new l(u,f,"")},async:function(w,u){return this.internalStream(w).accumulate(u)},nodeStream:function(w,u){return this.internalStream(w||"nodebuffer").toNodejsStream(u)},_compressWorker:function(w,u){if(this._data instanceof m&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var f=this._decompressWorker();return this._dataBinary||(f=f.pipe(new h.Utf8EncodeWorker)),m.createWorkerFrom(f,w,u)},_decompressWorker:function(){return this._data instanceof m?this._data.getContentWorker():this._data instanceof v?this._data:new a(this._data)}};for(var b=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],y=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},c=0;c<b.length;c++)s.prototype[b[c]]=y;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,n,r){(function(s){var l,a,h=s.MutationObserver||s.WebKitMutationObserver;if(h){var m=0,v=new h(w),b=s.document.createTextNode("");v.observe(b,{characterData:!0}),l=function(){b.data=m=++m%2}}else if(s.setImmediate||s.MessageChannel===void 0)l="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var u=s.document.createElement("script");u.onreadystatechange=function(){w(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},s.document.documentElement.appendChild(u)}:function(){setTimeout(w,0)};else{var y=new s.MessageChannel;y.port1.onmessage=w,l=function(){y.port2.postMessage(0)}}var c=[];function w(){var u,f;a=!0;for(var d=c.length;d;){for(f=c,c=[],u=-1;++u<d;)f[u]();d=c.length}a=!1}n.exports=function(u){c.push(u)!==1||a||l()}}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,n,r){var s=e("immediate");function l(){}var a={},h=["REJECTED"],m=["FULFILLED"],v=["PENDING"];function b(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=v,this.queue=[],this.outcome=void 0,d!==l&&u(this,d)}function y(d,k,x){this.promise=d,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function c(d,k,x){s(function(){var I;try{I=k(x)}catch(C){return a.reject(d,C)}I===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,I)})}function w(d){var k=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof k=="function")return function(){k.apply(d,arguments)}}function u(d,k){var x=!1;function I(U){x||(x=!0,a.reject(d,U))}function C(U){x||(x=!0,a.resolve(d,U))}var P=f(function(){k(C,I)});P.status==="error"&&I(P.value)}function f(d,k){var x={};try{x.value=d(k),x.status="success"}catch(I){x.status="error",x.value=I}return x}(n.exports=b).prototype.finally=function(d){if(typeof d!="function")return this;var k=this.constructor;return this.then(function(x){return k.resolve(d()).then(function(){return x})},function(x){return k.resolve(d()).then(function(){throw x})})},b.prototype.catch=function(d){return this.then(null,d)},b.prototype.then=function(d,k){if(typeof d!="function"&&this.state===m||typeof k!="function"&&this.state===h)return this;var x=new this.constructor(l);return this.state!==v?c(x,this.state===m?d:k,this.outcome):this.queue.push(new y(x,d,k)),x},y.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},y.prototype.otherCallFulfilled=function(d){c(this.promise,this.onFulfilled,d)},y.prototype.callRejected=function(d){a.reject(this.promise,d)},y.prototype.otherCallRejected=function(d){c(this.promise,this.onRejected,d)},a.resolve=function(d,k){var x=f(w,k);if(x.status==="error")return a.reject(d,x.value);var I=x.value;if(I)u(d,I);else{d.state=m,d.outcome=k;for(var C=-1,P=d.queue.length;++C<P;)d.queue[C].callFulfilled(k)}return d},a.reject=function(d,k){d.state=h,d.outcome=k;for(var x=-1,I=d.queue.length;++x<I;)d.queue[x].callRejected(k);return d},b.resolve=function(d){return d instanceof this?d:a.resolve(new this(l),d)},b.reject=function(d){var k=new this(l);return a.reject(k,d)},b.all=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,I=!1;if(!x)return this.resolve([]);for(var C=new Array(x),P=0,U=-1,H=new this(l);++U<x;)D(d[U],U);return H;function D(N,X){k.resolve(N).then(function(_){C[X]=_,++P!==x||I||(I=!0,a.resolve(H,C))},function(_){I||(I=!0,a.reject(H,_))})}},b.race=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,I=!1;if(!x)return this.resolve([]);for(var C=-1,P=new this(l);++C<x;)U=d[C],k.resolve(U).then(function(H){I||(I=!0,a.resolve(P,H))},function(H){I||(I=!0,a.reject(P,H))});var U;return P}},{immediate:36}],38:[function(e,n,r){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,n,r){var s=e("./zlib/deflate"),l=e("./utils/common"),a=e("./utils/strings"),h=e("./zlib/messages"),m=e("./zlib/zstream"),v=Object.prototype.toString,b=0,y=-1,c=0,w=8;function u(d){if(!(this instanceof u))return new u(d);this.options=l.assign({level:y,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},d||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var x=s.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(x!==b)throw new Error(h[x]);if(k.header&&s.deflateSetHeader(this.strm,k.header),k.dictionary){var I;if(I=typeof k.dictionary=="string"?a.string2buf(k.dictionary):v.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(x=s.deflateSetDictionary(this.strm,I))!==b)throw new Error(h[x]);this._dict_set=!0}}function f(d,k){var x=new u(k);if(x.push(d,!0),x.err)throw x.msg||h[x.err];return x.result}u.prototype.push=function(d,k){var x,I,C=this.strm,P=this.options.chunkSize;if(this.ended)return!1;I=k===~~k?k:k===!0?4:0,typeof d=="string"?C.input=a.string2buf(d):v.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new l.Buf8(P),C.next_out=0,C.avail_out=P),(x=s.deflate(C,I))!==1&&x!==b)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||I!==4&&I!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(l.shrinkBuf(C.output,C.next_out))):this.onData(l.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return I===4?(x=s.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===b):I!==2||(this.onEnd(b),!(C.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===b&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=u,r.deflate=f,r.deflateRaw=function(d,k){return(k=k||{}).raw=!0,f(d,k)},r.gzip=function(d,k){return(k=k||{}).gzip=!0,f(d,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,n,r){var s=e("./zlib/inflate"),l=e("./utils/common"),a=e("./utils/strings"),h=e("./zlib/constants"),m=e("./zlib/messages"),v=e("./zlib/zstream"),b=e("./zlib/gzheader"),y=Object.prototype.toString;function c(u){if(!(this instanceof c))return new c(u);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},u||{});var f=this.options;f.raw&&0<=f.windowBits&&f.windowBits<16&&(f.windowBits=-f.windowBits,f.windowBits===0&&(f.windowBits=-15)),!(0<=f.windowBits&&f.windowBits<16)||u&&u.windowBits||(f.windowBits+=32),15<f.windowBits&&f.windowBits<48&&!(15&f.windowBits)&&(f.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new v,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,f.windowBits);if(d!==h.Z_OK)throw new Error(m[d]);this.header=new b,s.inflateGetHeader(this.strm,this.header)}function w(u,f){var d=new c(f);if(d.push(u,!0),d.err)throw d.msg||m[d.err];return d.result}c.prototype.push=function(u,f){var d,k,x,I,C,P,U=this.strm,H=this.options.chunkSize,D=this.options.dictionary,N=!1;if(this.ended)return!1;k=f===~~f?f:f===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof u=="string"?U.input=a.binstring2buf(u):y.call(u)==="[object ArrayBuffer]"?U.input=new Uint8Array(u):U.input=u,U.next_in=0,U.avail_in=U.input.length;do{if(U.avail_out===0&&(U.output=new l.Buf8(H),U.next_out=0,U.avail_out=H),(d=s.inflate(U,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&D&&(P=typeof D=="string"?a.string2buf(D):y.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,d=s.inflateSetDictionary(this.strm,P)),d===h.Z_BUF_ERROR&&N===!0&&(d=h.Z_OK,N=!1),d!==h.Z_STREAM_END&&d!==h.Z_OK)return this.onEnd(d),!(this.ended=!0);U.next_out&&(U.avail_out!==0&&d!==h.Z_STREAM_END&&(U.avail_in!==0||k!==h.Z_FINISH&&k!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(U.output,U.next_out),I=U.next_out-x,C=a.buf2string(U.output,x),U.next_out=I,U.avail_out=H-I,I&&l.arraySet(U.output,U.output,x,I,0),this.onData(C)):this.onData(l.shrinkBuf(U.output,U.next_out)))),U.avail_in===0&&U.avail_out===0&&(N=!0)}while((0<U.avail_in||U.avail_out===0)&&d!==h.Z_STREAM_END);return d===h.Z_STREAM_END&&(k=h.Z_FINISH),k===h.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===h.Z_OK):k!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(U.avail_out=0))},c.prototype.onData=function(u){this.chunks.push(u)},c.prototype.onEnd=function(u){u===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},r.Inflate=c,r.inflate=w,r.inflateRaw=function(u,f){return(f=f||{}).raw=!0,w(u,f)},r.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(h){for(var m=Array.prototype.slice.call(arguments,1);m.length;){var v=m.shift();if(v){if(typeof v!="object")throw new TypeError(v+"must be non-object");for(var b in v)v.hasOwnProperty(b)&&(h[b]=v[b])}}return h},r.shrinkBuf=function(h,m){return h.length===m?h:h.subarray?h.subarray(0,m):(h.length=m,h)};var l={arraySet:function(h,m,v,b,y){if(m.subarray&&h.subarray)h.set(m.subarray(v,v+b),y);else for(var c=0;c<b;c++)h[y+c]=m[v+c]},flattenChunks:function(h){var m,v,b,y,c,w;for(m=b=0,v=h.length;m<v;m++)b+=h[m].length;for(w=new Uint8Array(b),m=y=0,v=h.length;m<v;m++)c=h[m],w.set(c,y),y+=c.length;return w}},a={arraySet:function(h,m,v,b,y){for(var c=0;c<b;c++)h[y+c]=m[v+c]},flattenChunks:function(h){return[].concat.apply([],h)}};r.setTyped=function(h){h?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,l)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,a))},r.setTyped(s)},{}],42:[function(e,n,r){var s=e("./common"),l=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var h=new s.Buf8(256),m=0;m<256;m++)h[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;function v(b,y){if(y<65537&&(b.subarray&&a||!b.subarray&&l))return String.fromCharCode.apply(null,s.shrinkBuf(b,y));for(var c="",w=0;w<y;w++)c+=String.fromCharCode(b[w]);return c}h[254]=h[254]=1,r.string2buf=function(b){var y,c,w,u,f,d=b.length,k=0;for(u=0;u<d;u++)(64512&(c=b.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=b.charCodeAt(u+1)))==56320&&(c=65536+(c-55296<<10)+(w-56320),u++),k+=c<128?1:c<2048?2:c<65536?3:4;for(y=new s.Buf8(k),u=f=0;f<k;u++)(64512&(c=b.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=b.charCodeAt(u+1)))==56320&&(c=65536+(c-55296<<10)+(w-56320),u++),c<128?y[f++]=c:(c<2048?y[f++]=192|c>>>6:(c<65536?y[f++]=224|c>>>12:(y[f++]=240|c>>>18,y[f++]=128|c>>>12&63),y[f++]=128|c>>>6&63),y[f++]=128|63&c);return y},r.buf2binstring=function(b){return v(b,b.length)},r.binstring2buf=function(b){for(var y=new s.Buf8(b.length),c=0,w=y.length;c<w;c++)y[c]=b.charCodeAt(c);return y},r.buf2string=function(b,y){var c,w,u,f,d=y||b.length,k=new Array(2*d);for(c=w=0;c<d;)if((u=b[c++])<128)k[w++]=u;else if(4<(f=h[u]))k[w++]=65533,c+=f-1;else{for(u&=f===2?31:f===3?15:7;1<f&&c<d;)u=u<<6|63&b[c++],f--;1<f?k[w++]=65533:u<65536?k[w++]=u:(u-=65536,k[w++]=55296|u>>10&1023,k[w++]=56320|1023&u)}return v(k,w)},r.utf8border=function(b,y){var c;for((y=y||b.length)>b.length&&(y=b.length),c=y-1;0<=c&&(192&b[c])==128;)c--;return c<0||c===0?y:c+h[b[c]]>y?c:y}},{"./common":41}],43:[function(e,n,r){n.exports=function(s,l,a,h){for(var m=65535&s|0,v=s>>>16&65535|0,b=0;a!==0;){for(a-=b=2e3<a?2e3:a;v=v+(m=m+l[h++]|0)|0,--b;);m%=65521,v%=65521}return m|v<<16|0}},{}],44:[function(e,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,n,r){var s=function(){for(var l,a=[],h=0;h<256;h++){l=h;for(var m=0;m<8;m++)l=1&l?3988292384^l>>>1:l>>>1;a[h]=l}return a}();n.exports=function(l,a,h,m){var v=s,b=m+h;l^=-1;for(var y=m;y<b;y++)l=l>>>8^v[255&(l^a[y])];return-1^l}},{}],46:[function(e,n,r){var s,l=e("../utils/common"),a=e("./trees"),h=e("./adler32"),m=e("./crc32"),v=e("./messages"),b=0,y=4,c=0,w=-2,u=-1,f=4,d=2,k=8,x=9,I=286,C=30,P=19,U=2*I+1,H=15,D=3,N=258,X=N+D+1,_=42,B=113,o=1,M=2,tt=3,G=4;function et(i,z){return i.msg=v[z],z}function $(i){return(i<<1)-(4<i?9:0)}function Q(i){for(var z=i.length;0<=--z;)i[z]=0}function L(i){var z=i.state,T=z.pending;T>i.avail_out&&(T=i.avail_out),T!==0&&(l.arraySet(i.output,z.pending_buf,z.pending_out,T,i.next_out),i.next_out+=T,z.pending_out+=T,i.total_out+=T,i.avail_out-=T,z.pending-=T,z.pending===0&&(z.pending_out=0))}function A(i,z){a._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,z),i.block_start=i.strstart,L(i.strm)}function Y(i,z){i.pending_buf[i.pending++]=z}function W(i,z){i.pending_buf[i.pending++]=z>>>8&255,i.pending_buf[i.pending++]=255&z}function V(i,z){var T,g,p=i.max_chain_length,S=i.strstart,O=i.prev_length,F=i.nice_match,E=i.strstart>i.w_size-X?i.strstart-(i.w_size-X):0,j=i.window,K=i.w_mask,q=i.prev,J=i.strstart+N,st=j[S+O-1],rt=j[S+O];i.prev_length>=i.good_match&&(p>>=2),F>i.lookahead&&(F=i.lookahead);do if(j[(T=z)+O]===rt&&j[T+O-1]===st&&j[T]===j[S]&&j[++T]===j[S+1]){S+=2,T++;do;while(j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&j[++S]===j[++T]&&S<J);if(g=N-(J-S),S=J-N,O<g){if(i.match_start=z,F<=(O=g))break;st=j[S+O-1],rt=j[S+O]}}while((z=q[z&K])>E&&--p!=0);return O<=i.lookahead?O:i.lookahead}function ot(i){var z,T,g,p,S,O,F,E,j,K,q=i.w_size;do{if(p=i.window_size-i.lookahead-i.strstart,i.strstart>=q+(q-X)){for(l.arraySet(i.window,i.window,q,q,0),i.match_start-=q,i.strstart-=q,i.block_start-=q,z=T=i.hash_size;g=i.head[--z],i.head[z]=q<=g?g-q:0,--T;);for(z=T=q;g=i.prev[--z],i.prev[z]=q<=g?g-q:0,--T;);p+=q}if(i.strm.avail_in===0)break;if(O=i.strm,F=i.window,E=i.strstart+i.lookahead,j=p,K=void 0,K=O.avail_in,j<K&&(K=j),T=K===0?0:(O.avail_in-=K,l.arraySet(F,O.input,O.next_in,K,E),O.state.wrap===1?O.adler=h(O.adler,F,K,E):O.state.wrap===2&&(O.adler=m(O.adler,F,K,E)),O.next_in+=K,O.total_in+=K,K),i.lookahead+=T,i.lookahead+i.insert>=D)for(S=i.strstart-i.insert,i.ins_h=i.window[S],i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+D-1])&i.hash_mask,i.prev[S&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=S,S++,i.insert--,!(i.lookahead+i.insert<D)););}while(i.lookahead<X&&i.strm.avail_in!==0)}function ct(i,z){for(var T,g;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&z===b)return o;if(i.lookahead===0)break}if(T=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,T=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),T!==0&&i.strstart-T<=i.w_size-X&&(i.match_length=V(i,T)),i.match_length>=D)if(g=a._tr_tally(i,i.strstart-i.match_start,i.match_length-D),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=D){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,T=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else g=a._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(g&&(A(i,!1),i.strm.avail_out===0))return o}return i.insert=i.strstart<D-1?i.strstart:D-1,z===y?(A(i,!0),i.strm.avail_out===0?tt:G):i.last_lit&&(A(i,!1),i.strm.avail_out===0)?o:M}function it(i,z){for(var T,g,p;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&z===b)return o;if(i.lookahead===0)break}if(T=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,T=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=D-1,T!==0&&i.prev_length<i.max_lazy_match&&i.strstart-T<=i.w_size-X&&(i.match_length=V(i,T),i.match_length<=5&&(i.strategy===1||i.match_length===D&&4096<i.strstart-i.match_start)&&(i.match_length=D-1)),i.prev_length>=D&&i.match_length<=i.prev_length){for(p=i.strstart+i.lookahead-D,g=a._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-D),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=p&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,T=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=D-1,i.strstart++,g&&(A(i,!1),i.strm.avail_out===0))return o}else if(i.match_available){if((g=a._tr_tally(i,0,i.window[i.strstart-1]))&&A(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return o}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(g=a._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<D-1?i.strstart:D-1,z===y?(A(i,!0),i.strm.avail_out===0?tt:G):i.last_lit&&(A(i,!1),i.strm.avail_out===0)?o:M}function nt(i,z,T,g,p){this.good_length=i,this.max_lazy=z,this.nice_length=T,this.max_chain=g,this.func=p}function ut(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*U),this.dyn_dtree=new l.Buf16(2*(2*C+1)),this.bl_tree=new l.Buf16(2*(2*P+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(H+1),this.heap=new l.Buf16(2*I+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*I+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(i){var z;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(z=i.state).pending=0,z.pending_out=0,z.wrap<0&&(z.wrap=-z.wrap),z.status=z.wrap?_:B,i.adler=z.wrap===2?0:1,z.last_flush=b,a._tr_init(z),c):et(i,w)}function ft(i){var z=at(i);return z===c&&function(T){T.window_size=2*T.w_size,Q(T.head),T.max_lazy_match=s[T.level].max_lazy,T.good_match=s[T.level].good_length,T.nice_match=s[T.level].nice_length,T.max_chain_length=s[T.level].max_chain,T.strstart=0,T.block_start=0,T.lookahead=0,T.insert=0,T.match_length=T.prev_length=D-1,T.match_available=0,T.ins_h=0}(i.state),z}function dt(i,z,T,g,p,S){if(!i)return w;var O=1;if(z===u&&(z=6),g<0?(O=0,g=-g):15<g&&(O=2,g-=16),p<1||x<p||T!==k||g<8||15<g||z<0||9<z||S<0||f<S)return et(i,w);g===8&&(g=9);var F=new ut;return(i.state=F).strm=i,F.wrap=O,F.gzhead=null,F.w_bits=g,F.w_size=1<<F.w_bits,F.w_mask=F.w_size-1,F.hash_bits=p+7,F.hash_size=1<<F.hash_bits,F.hash_mask=F.hash_size-1,F.hash_shift=~~((F.hash_bits+D-1)/D),F.window=new l.Buf8(2*F.w_size),F.head=new l.Buf16(F.hash_size),F.prev=new l.Buf16(F.w_size),F.lit_bufsize=1<<p+6,F.pending_buf_size=4*F.lit_bufsize,F.pending_buf=new l.Buf8(F.pending_buf_size),F.d_buf=1*F.lit_bufsize,F.l_buf=3*F.lit_bufsize,F.level=z,F.strategy=S,F.method=T,ft(i)}s=[new nt(0,0,0,0,function(i,z){var T=65535;for(T>i.pending_buf_size-5&&(T=i.pending_buf_size-5);;){if(i.lookahead<=1){if(ot(i),i.lookahead===0&&z===b)return o;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var g=i.block_start+T;if((i.strstart===0||i.strstart>=g)&&(i.lookahead=i.strstart-g,i.strstart=g,A(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-X&&(A(i,!1),i.strm.avail_out===0))return o}return i.insert=0,z===y?(A(i,!0),i.strm.avail_out===0?tt:G):(i.strstart>i.block_start&&(A(i,!1),i.strm.avail_out),o)}),new nt(4,4,8,4,ct),new nt(4,5,16,8,ct),new nt(4,6,32,32,ct),new nt(4,4,16,16,it),new nt(8,16,32,32,it),new nt(8,16,128,128,it),new nt(8,32,128,256,it),new nt(32,128,258,1024,it),new nt(32,258,258,4096,it)],r.deflateInit=function(i,z){return dt(i,z,k,15,8,0)},r.deflateInit2=dt,r.deflateReset=ft,r.deflateResetKeep=at,r.deflateSetHeader=function(i,z){return i&&i.state?i.state.wrap!==2?w:(i.state.gzhead=z,c):w},r.deflate=function(i,z){var T,g,p,S;if(!i||!i.state||5<z||z<0)return i?et(i,w):w;if(g=i.state,!i.output||!i.input&&i.avail_in!==0||g.status===666&&z!==y)return et(i,i.avail_out===0?-5:w);if(g.strm=i,T=g.last_flush,g.last_flush=z,g.status===_)if(g.wrap===2)i.adler=0,Y(g,31),Y(g,139),Y(g,8),g.gzhead?(Y(g,(g.gzhead.text?1:0)+(g.gzhead.hcrc?2:0)+(g.gzhead.extra?4:0)+(g.gzhead.name?8:0)+(g.gzhead.comment?16:0)),Y(g,255&g.gzhead.time),Y(g,g.gzhead.time>>8&255),Y(g,g.gzhead.time>>16&255),Y(g,g.gzhead.time>>24&255),Y(g,g.level===9?2:2<=g.strategy||g.level<2?4:0),Y(g,255&g.gzhead.os),g.gzhead.extra&&g.gzhead.extra.length&&(Y(g,255&g.gzhead.extra.length),Y(g,g.gzhead.extra.length>>8&255)),g.gzhead.hcrc&&(i.adler=m(i.adler,g.pending_buf,g.pending,0)),g.gzindex=0,g.status=69):(Y(g,0),Y(g,0),Y(g,0),Y(g,0),Y(g,0),Y(g,g.level===9?2:2<=g.strategy||g.level<2?4:0),Y(g,3),g.status=B);else{var O=k+(g.w_bits-8<<4)<<8;O|=(2<=g.strategy||g.level<2?0:g.level<6?1:g.level===6?2:3)<<6,g.strstart!==0&&(O|=32),O+=31-O%31,g.status=B,W(g,O),g.strstart!==0&&(W(g,i.adler>>>16),W(g,65535&i.adler)),i.adler=1}if(g.status===69)if(g.gzhead.extra){for(p=g.pending;g.gzindex<(65535&g.gzhead.extra.length)&&(g.pending!==g.pending_buf_size||(g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),L(i),p=g.pending,g.pending!==g.pending_buf_size));)Y(g,255&g.gzhead.extra[g.gzindex]),g.gzindex++;g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),g.gzindex===g.gzhead.extra.length&&(g.gzindex=0,g.status=73)}else g.status=73;if(g.status===73)if(g.gzhead.name){p=g.pending;do{if(g.pending===g.pending_buf_size&&(g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),L(i),p=g.pending,g.pending===g.pending_buf_size)){S=1;break}S=g.gzindex<g.gzhead.name.length?255&g.gzhead.name.charCodeAt(g.gzindex++):0,Y(g,S)}while(S!==0);g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),S===0&&(g.gzindex=0,g.status=91)}else g.status=91;if(g.status===91)if(g.gzhead.comment){p=g.pending;do{if(g.pending===g.pending_buf_size&&(g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),L(i),p=g.pending,g.pending===g.pending_buf_size)){S=1;break}S=g.gzindex<g.gzhead.comment.length?255&g.gzhead.comment.charCodeAt(g.gzindex++):0,Y(g,S)}while(S!==0);g.gzhead.hcrc&&g.pending>p&&(i.adler=m(i.adler,g.pending_buf,g.pending-p,p)),S===0&&(g.status=103)}else g.status=103;if(g.status===103&&(g.gzhead.hcrc?(g.pending+2>g.pending_buf_size&&L(i),g.pending+2<=g.pending_buf_size&&(Y(g,255&i.adler),Y(g,i.adler>>8&255),i.adler=0,g.status=B)):g.status=B),g.pending!==0){if(L(i),i.avail_out===0)return g.last_flush=-1,c}else if(i.avail_in===0&&$(z)<=$(T)&&z!==y)return et(i,-5);if(g.status===666&&i.avail_in!==0)return et(i,-5);if(i.avail_in!==0||g.lookahead!==0||z!==b&&g.status!==666){var F=g.strategy===2?function(E,j){for(var K;;){if(E.lookahead===0&&(ot(E),E.lookahead===0)){if(j===b)return o;break}if(E.match_length=0,K=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++,K&&(A(E,!1),E.strm.avail_out===0))return o}return E.insert=0,j===y?(A(E,!0),E.strm.avail_out===0?tt:G):E.last_lit&&(A(E,!1),E.strm.avail_out===0)?o:M}(g,z):g.strategy===3?function(E,j){for(var K,q,J,st,rt=E.window;;){if(E.lookahead<=N){if(ot(E),E.lookahead<=N&&j===b)return o;if(E.lookahead===0)break}if(E.match_length=0,E.lookahead>=D&&0<E.strstart&&(q=rt[J=E.strstart-1])===rt[++J]&&q===rt[++J]&&q===rt[++J]){st=E.strstart+N;do;while(q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&q===rt[++J]&&J<st);E.match_length=N-(st-J),E.match_length>E.lookahead&&(E.match_length=E.lookahead)}if(E.match_length>=D?(K=a._tr_tally(E,1,E.match_length-D),E.lookahead-=E.match_length,E.strstart+=E.match_length,E.match_length=0):(K=a._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++),K&&(A(E,!1),E.strm.avail_out===0))return o}return E.insert=0,j===y?(A(E,!0),E.strm.avail_out===0?tt:G):E.last_lit&&(A(E,!1),E.strm.avail_out===0)?o:M}(g,z):s[g.level].func(g,z);if(F!==tt&&F!==G||(g.status=666),F===o||F===tt)return i.avail_out===0&&(g.last_flush=-1),c;if(F===M&&(z===1?a._tr_align(g):z!==5&&(a._tr_stored_block(g,0,0,!1),z===3&&(Q(g.head),g.lookahead===0&&(g.strstart=0,g.block_start=0,g.insert=0))),L(i),i.avail_out===0))return g.last_flush=-1,c}return z!==y?c:g.wrap<=0?1:(g.wrap===2?(Y(g,255&i.adler),Y(g,i.adler>>8&255),Y(g,i.adler>>16&255),Y(g,i.adler>>24&255),Y(g,255&i.total_in),Y(g,i.total_in>>8&255),Y(g,i.total_in>>16&255),Y(g,i.total_in>>24&255)):(W(g,i.adler>>>16),W(g,65535&i.adler)),L(i),0<g.wrap&&(g.wrap=-g.wrap),g.pending!==0?c:1)},r.deflateEnd=function(i){var z;return i&&i.state?(z=i.state.status)!==_&&z!==69&&z!==73&&z!==91&&z!==103&&z!==B&&z!==666?et(i,w):(i.state=null,z===B?et(i,-3):c):w},r.deflateSetDictionary=function(i,z){var T,g,p,S,O,F,E,j,K=z.length;if(!i||!i.state||(S=(T=i.state).wrap)===2||S===1&&T.status!==_||T.lookahead)return w;for(S===1&&(i.adler=h(i.adler,z,K,0)),T.wrap=0,K>=T.w_size&&(S===0&&(Q(T.head),T.strstart=0,T.block_start=0,T.insert=0),j=new l.Buf8(T.w_size),l.arraySet(j,z,K-T.w_size,T.w_size,0),z=j,K=T.w_size),O=i.avail_in,F=i.next_in,E=i.input,i.avail_in=K,i.next_in=0,i.input=z,ot(T);T.lookahead>=D;){for(g=T.strstart,p=T.lookahead-(D-1);T.ins_h=(T.ins_h<<T.hash_shift^T.window[g+D-1])&T.hash_mask,T.prev[g&T.w_mask]=T.head[T.ins_h],T.head[T.ins_h]=g,g++,--p;);T.strstart=g,T.lookahead=D-1,ot(T)}return T.strstart+=T.lookahead,T.block_start=T.strstart,T.insert=T.lookahead,T.lookahead=0,T.match_length=T.prev_length=D-1,T.match_available=0,i.next_in=F,i.input=E,i.avail_in=O,T.wrap=S,c},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,n,r){n.exports=function(s,l){var a,h,m,v,b,y,c,w,u,f,d,k,x,I,C,P,U,H,D,N,X,_,B,o,M;a=s.state,h=s.next_in,o=s.input,m=h+(s.avail_in-5),v=s.next_out,M=s.output,b=v-(l-s.avail_out),y=v+(s.avail_out-257),c=a.dmax,w=a.wsize,u=a.whave,f=a.wnext,d=a.window,k=a.hold,x=a.bits,I=a.lencode,C=a.distcode,P=(1<<a.lenbits)-1,U=(1<<a.distbits)-1;t:do{x<15&&(k+=o[h++]<<x,x+=8,k+=o[h++]<<x,x+=8),H=I[k&P];e:for(;;){if(k>>>=D=H>>>24,x-=D,(D=H>>>16&255)===0)M[v++]=65535&H;else{if(!(16&D)){if(!(64&D)){H=I[(65535&H)+(k&(1<<D)-1)];continue e}if(32&D){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}N=65535&H,(D&=15)&&(x<D&&(k+=o[h++]<<x,x+=8),N+=k&(1<<D)-1,k>>>=D,x-=D),x<15&&(k+=o[h++]<<x,x+=8,k+=o[h++]<<x,x+=8),H=C[k&U];i:for(;;){if(k>>>=D=H>>>24,x-=D,!(16&(D=H>>>16&255))){if(!(64&D)){H=C[(65535&H)+(k&(1<<D)-1)];continue i}s.msg="invalid distance code",a.mode=30;break t}if(X=65535&H,x<(D&=15)&&(k+=o[h++]<<x,(x+=8)<D&&(k+=o[h++]<<x,x+=8)),c<(X+=k&(1<<D)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(k>>>=D,x-=D,(D=v-b)<X){if(u<(D=X-D)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(B=d,(_=0)===f){if(_+=w-D,D<N){for(N-=D;M[v++]=d[_++],--D;);_=v-X,B=M}}else if(f<D){if(_+=w+f-D,(D-=f)<N){for(N-=D;M[v++]=d[_++],--D;);if(_=0,f<N){for(N-=D=f;M[v++]=d[_++],--D;);_=v-X,B=M}}}else if(_+=f-D,D<N){for(N-=D;M[v++]=d[_++],--D;);_=v-X,B=M}for(;2<N;)M[v++]=B[_++],M[v++]=B[_++],M[v++]=B[_++],N-=3;N&&(M[v++]=B[_++],1<N&&(M[v++]=B[_++]))}else{for(_=v-X;M[v++]=M[_++],M[v++]=M[_++],M[v++]=M[_++],2<(N-=3););N&&(M[v++]=M[_++],1<N&&(M[v++]=M[_++]))}break}}break}}while(h<m&&v<y);h-=N=x>>3,k&=(1<<(x-=N<<3))-1,s.next_in=h,s.next_out=v,s.avail_in=h<m?m-h+5:5-(h-m),s.avail_out=v<y?y-v+257:257-(v-y),a.hold=k,a.bits=x}},{}],49:[function(e,n,r){var s=e("../utils/common"),l=e("./adler32"),a=e("./crc32"),h=e("./inffast"),m=e("./inftrees"),v=1,b=2,y=0,c=-2,w=1,u=852,f=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var B;return _&&_.state?(B=_.state,_.total_in=_.total_out=B.total=0,_.msg="",B.wrap&&(_.adler=1&B.wrap),B.mode=w,B.last=0,B.havedict=0,B.dmax=32768,B.head=null,B.hold=0,B.bits=0,B.lencode=B.lendyn=new s.Buf32(u),B.distcode=B.distdyn=new s.Buf32(f),B.sane=1,B.back=-1,y):c}function I(_){var B;return _&&_.state?((B=_.state).wsize=0,B.whave=0,B.wnext=0,x(_)):c}function C(_,B){var o,M;return _&&_.state?(M=_.state,B<0?(o=0,B=-B):(o=1+(B>>4),B<48&&(B&=15)),B&&(B<8||15<B)?c:(M.window!==null&&M.wbits!==B&&(M.window=null),M.wrap=o,M.wbits=B,I(_))):c}function P(_,B){var o,M;return _?(M=new k,(_.state=M).window=null,(o=C(_,B))!==y&&(_.state=null),o):c}var U,H,D=!0;function N(_){if(D){var B;for(U=new s.Buf32(512),H=new s.Buf32(32),B=0;B<144;)_.lens[B++]=8;for(;B<256;)_.lens[B++]=9;for(;B<280;)_.lens[B++]=7;for(;B<288;)_.lens[B++]=8;for(m(v,_.lens,0,288,U,0,_.work,{bits:9}),B=0;B<32;)_.lens[B++]=5;m(b,_.lens,0,32,H,0,_.work,{bits:5}),D=!1}_.lencode=U,_.lenbits=9,_.distcode=H,_.distbits=5}function X(_,B,o,M){var tt,G=_.state;return G.window===null&&(G.wsize=1<<G.wbits,G.wnext=0,G.whave=0,G.window=new s.Buf8(G.wsize)),M>=G.wsize?(s.arraySet(G.window,B,o-G.wsize,G.wsize,0),G.wnext=0,G.whave=G.wsize):(M<(tt=G.wsize-G.wnext)&&(tt=M),s.arraySet(G.window,B,o-M,tt,G.wnext),(M-=tt)?(s.arraySet(G.window,B,o-M,M,0),G.wnext=M,G.whave=G.wsize):(G.wnext+=tt,G.wnext===G.wsize&&(G.wnext=0),G.whave<G.wsize&&(G.whave+=tt))),0}r.inflateReset=I,r.inflateReset2=C,r.inflateResetKeep=x,r.inflateInit=function(_){return P(_,15)},r.inflateInit2=P,r.inflate=function(_,B){var o,M,tt,G,et,$,Q,L,A,Y,W,V,ot,ct,it,nt,ut,at,ft,dt,i,z,T,g,p=0,S=new s.Buf8(4),O=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return c;(o=_.state).mode===12&&(o.mode=13),et=_.next_out,tt=_.output,Q=_.avail_out,G=_.next_in,M=_.input,$=_.avail_in,L=o.hold,A=o.bits,Y=$,W=Q,z=y;t:for(;;)switch(o.mode){case w:if(o.wrap===0){o.mode=13;break}for(;A<16;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(2&o.wrap&&L===35615){S[o.check=0]=255&L,S[1]=L>>>8&255,o.check=a(o.check,S,2,0),A=L=0,o.mode=2;break}if(o.flags=0,o.head&&(o.head.done=!1),!(1&o.wrap)||(((255&L)<<8)+(L>>8))%31){_.msg="incorrect header check",o.mode=30;break}if((15&L)!=8){_.msg="unknown compression method",o.mode=30;break}if(A-=4,i=8+(15&(L>>>=4)),o.wbits===0)o.wbits=i;else if(i>o.wbits){_.msg="invalid window size",o.mode=30;break}o.dmax=1<<i,_.adler=o.check=1,o.mode=512&L?10:12,A=L=0;break;case 2:for(;A<16;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(o.flags=L,(255&o.flags)!=8){_.msg="unknown compression method",o.mode=30;break}if(57344&o.flags){_.msg="unknown header flags set",o.mode=30;break}o.head&&(o.head.text=L>>8&1),512&o.flags&&(S[0]=255&L,S[1]=L>>>8&255,o.check=a(o.check,S,2,0)),A=L=0,o.mode=3;case 3:for(;A<32;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.head&&(o.head.time=L),512&o.flags&&(S[0]=255&L,S[1]=L>>>8&255,S[2]=L>>>16&255,S[3]=L>>>24&255,o.check=a(o.check,S,4,0)),A=L=0,o.mode=4;case 4:for(;A<16;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.head&&(o.head.xflags=255&L,o.head.os=L>>8),512&o.flags&&(S[0]=255&L,S[1]=L>>>8&255,o.check=a(o.check,S,2,0)),A=L=0,o.mode=5;case 5:if(1024&o.flags){for(;A<16;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.length=L,o.head&&(o.head.extra_len=L),512&o.flags&&(S[0]=255&L,S[1]=L>>>8&255,o.check=a(o.check,S,2,0)),A=L=0}else o.head&&(o.head.extra=null);o.mode=6;case 6:if(1024&o.flags&&($<(V=o.length)&&(V=$),V&&(o.head&&(i=o.head.extra_len-o.length,o.head.extra||(o.head.extra=new Array(o.head.extra_len)),s.arraySet(o.head.extra,M,G,V,i)),512&o.flags&&(o.check=a(o.check,M,V,G)),$-=V,G+=V,o.length-=V),o.length))break t;o.length=0,o.mode=7;case 7:if(2048&o.flags){if($===0)break t;for(V=0;i=M[G+V++],o.head&&i&&o.length<65536&&(o.head.name+=String.fromCharCode(i)),i&&V<$;);if(512&o.flags&&(o.check=a(o.check,M,V,G)),$-=V,G+=V,i)break t}else o.head&&(o.head.name=null);o.length=0,o.mode=8;case 8:if(4096&o.flags){if($===0)break t;for(V=0;i=M[G+V++],o.head&&i&&o.length<65536&&(o.head.comment+=String.fromCharCode(i)),i&&V<$;);if(512&o.flags&&(o.check=a(o.check,M,V,G)),$-=V,G+=V,i)break t}else o.head&&(o.head.comment=null);o.mode=9;case 9:if(512&o.flags){for(;A<16;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(L!==(65535&o.check)){_.msg="header crc mismatch",o.mode=30;break}A=L=0}o.head&&(o.head.hcrc=o.flags>>9&1,o.head.done=!0),_.adler=o.check=0,o.mode=12;break;case 10:for(;A<32;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}_.adler=o.check=d(L),A=L=0,o.mode=11;case 11:if(o.havedict===0)return _.next_out=et,_.avail_out=Q,_.next_in=G,_.avail_in=$,o.hold=L,o.bits=A,2;_.adler=o.check=1,o.mode=12;case 12:if(B===5||B===6)break t;case 13:if(o.last){L>>>=7&A,A-=7&A,o.mode=27;break}for(;A<3;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}switch(o.last=1&L,A-=1,3&(L>>>=1)){case 0:o.mode=14;break;case 1:if(N(o),o.mode=20,B!==6)break;L>>>=2,A-=2;break t;case 2:o.mode=17;break;case 3:_.msg="invalid block type",o.mode=30}L>>>=2,A-=2;break;case 14:for(L>>>=7&A,A-=7&A;A<32;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if((65535&L)!=(L>>>16^65535)){_.msg="invalid stored block lengths",o.mode=30;break}if(o.length=65535&L,A=L=0,o.mode=15,B===6)break t;case 15:o.mode=16;case 16:if(V=o.length){if($<V&&(V=$),Q<V&&(V=Q),V===0)break t;s.arraySet(tt,M,G,V,et),$-=V,G+=V,Q-=V,et+=V,o.length-=V;break}o.mode=12;break;case 17:for(;A<14;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(o.nlen=257+(31&L),L>>>=5,A-=5,o.ndist=1+(31&L),L>>>=5,A-=5,o.ncode=4+(15&L),L>>>=4,A-=4,286<o.nlen||30<o.ndist){_.msg="too many length or distance symbols",o.mode=30;break}o.have=0,o.mode=18;case 18:for(;o.have<o.ncode;){for(;A<3;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.lens[O[o.have++]]=7&L,L>>>=3,A-=3}for(;o.have<19;)o.lens[O[o.have++]]=0;if(o.lencode=o.lendyn,o.lenbits=7,T={bits:o.lenbits},z=m(0,o.lens,0,19,o.lencode,0,o.work,T),o.lenbits=T.bits,z){_.msg="invalid code lengths set",o.mode=30;break}o.have=0,o.mode=19;case 19:for(;o.have<o.nlen+o.ndist;){for(;nt=(p=o.lencode[L&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(ut<16)L>>>=it,A-=it,o.lens[o.have++]=ut;else{if(ut===16){for(g=it+2;A<g;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(L>>>=it,A-=it,o.have===0){_.msg="invalid bit length repeat",o.mode=30;break}i=o.lens[o.have-1],V=3+(3&L),L>>>=2,A-=2}else if(ut===17){for(g=it+3;A<g;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}A-=it,i=0,V=3+(7&(L>>>=it)),L>>>=3,A-=3}else{for(g=it+7;A<g;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}A-=it,i=0,V=11+(127&(L>>>=it)),L>>>=7,A-=7}if(o.have+V>o.nlen+o.ndist){_.msg="invalid bit length repeat",o.mode=30;break}for(;V--;)o.lens[o.have++]=i}}if(o.mode===30)break;if(o.lens[256]===0){_.msg="invalid code -- missing end-of-block",o.mode=30;break}if(o.lenbits=9,T={bits:o.lenbits},z=m(v,o.lens,0,o.nlen,o.lencode,0,o.work,T),o.lenbits=T.bits,z){_.msg="invalid literal/lengths set",o.mode=30;break}if(o.distbits=6,o.distcode=o.distdyn,T={bits:o.distbits},z=m(b,o.lens,o.nlen,o.ndist,o.distcode,0,o.work,T),o.distbits=T.bits,z){_.msg="invalid distances set",o.mode=30;break}if(o.mode=20,B===6)break t;case 20:o.mode=21;case 21:if(6<=$&&258<=Q){_.next_out=et,_.avail_out=Q,_.next_in=G,_.avail_in=$,o.hold=L,o.bits=A,h(_,W),et=_.next_out,tt=_.output,Q=_.avail_out,G=_.next_in,M=_.input,$=_.avail_in,L=o.hold,A=o.bits,o.mode===12&&(o.back=-1);break}for(o.back=0;nt=(p=o.lencode[L&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(nt&&!(240&nt)){for(at=it,ft=nt,dt=ut;nt=(p=o.lencode[dt+((L&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=A);){if($===0)break t;$--,L+=M[G++]<<A,A+=8}L>>>=at,A-=at,o.back+=at}if(L>>>=it,A-=it,o.back+=it,o.length=ut,nt===0){o.mode=26;break}if(32&nt){o.back=-1,o.mode=12;break}if(64&nt){_.msg="invalid literal/length code",o.mode=30;break}o.extra=15&nt,o.mode=22;case 22:if(o.extra){for(g=o.extra;A<g;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.length+=L&(1<<o.extra)-1,L>>>=o.extra,A-=o.extra,o.back+=o.extra}o.was=o.length,o.mode=23;case 23:for(;nt=(p=o.distcode[L&(1<<o.distbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=A);){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(!(240&nt)){for(at=it,ft=nt,dt=ut;nt=(p=o.distcode[dt+((L&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=A);){if($===0)break t;$--,L+=M[G++]<<A,A+=8}L>>>=at,A-=at,o.back+=at}if(L>>>=it,A-=it,o.back+=it,64&nt){_.msg="invalid distance code",o.mode=30;break}o.offset=ut,o.extra=15&nt,o.mode=24;case 24:if(o.extra){for(g=o.extra;A<g;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}o.offset+=L&(1<<o.extra)-1,L>>>=o.extra,A-=o.extra,o.back+=o.extra}if(o.offset>o.dmax){_.msg="invalid distance too far back",o.mode=30;break}o.mode=25;case 25:if(Q===0)break t;if(V=W-Q,o.offset>V){if((V=o.offset-V)>o.whave&&o.sane){_.msg="invalid distance too far back",o.mode=30;break}ot=V>o.wnext?(V-=o.wnext,o.wsize-V):o.wnext-V,V>o.length&&(V=o.length),ct=o.window}else ct=tt,ot=et-o.offset,V=o.length;for(Q<V&&(V=Q),Q-=V,o.length-=V;tt[et++]=ct[ot++],--V;);o.length===0&&(o.mode=21);break;case 26:if(Q===0)break t;tt[et++]=o.length,Q--,o.mode=21;break;case 27:if(o.wrap){for(;A<32;){if($===0)break t;$--,L|=M[G++]<<A,A+=8}if(W-=Q,_.total_out+=W,o.total+=W,W&&(_.adler=o.check=o.flags?a(o.check,tt,W,et-W):l(o.check,tt,W,et-W)),W=Q,(o.flags?L:d(L))!==o.check){_.msg="incorrect data check",o.mode=30;break}A=L=0}o.mode=28;case 28:if(o.wrap&&o.flags){for(;A<32;){if($===0)break t;$--,L+=M[G++]<<A,A+=8}if(L!==(4294967295&o.total)){_.msg="incorrect length check",o.mode=30;break}A=L=0}o.mode=29;case 29:z=1;break t;case 30:z=-3;break t;case 31:return-4;case 32:default:return c}return _.next_out=et,_.avail_out=Q,_.next_in=G,_.avail_in=$,o.hold=L,o.bits=A,(o.wsize||W!==_.avail_out&&o.mode<30&&(o.mode<27||B!==4))&&X(_,_.output,_.next_out,W-_.avail_out)?(o.mode=31,-4):(Y-=_.avail_in,W-=_.avail_out,_.total_in+=Y,_.total_out+=W,o.total+=W,o.wrap&&W&&(_.adler=o.check=o.flags?a(o.check,tt,W,_.next_out-W):l(o.check,tt,W,_.next_out-W)),_.data_type=o.bits+(o.last?64:0)+(o.mode===12?128:0)+(o.mode===20||o.mode===15?256:0),(Y==0&&W===0||B===4)&&z===y&&(z=-5),z)},r.inflateEnd=function(_){if(!_||!_.state)return c;var B=_.state;return B.window&&(B.window=null),_.state=null,y},r.inflateGetHeader=function(_,B){var o;return _&&_.state&&2&(o=_.state).wrap?((o.head=B).done=!1,y):c},r.inflateSetDictionary=function(_,B){var o,M=B.length;return _&&_.state?(o=_.state).wrap!==0&&o.mode!==11?c:o.mode===11&&l(1,B,M,0)!==o.check?-3:X(_,B,M,M)?(o.mode=31,-4):(o.havedict=1,y):c},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,n,r){var s=e("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(v,b,y,c,w,u,f,d){var k,x,I,C,P,U,H,D,N,X=d.bits,_=0,B=0,o=0,M=0,tt=0,G=0,et=0,$=0,Q=0,L=0,A=null,Y=0,W=new s.Buf16(16),V=new s.Buf16(16),ot=null,ct=0;for(_=0;_<=15;_++)W[_]=0;for(B=0;B<c;B++)W[b[y+B]]++;for(tt=X,M=15;1<=M&&W[M]===0;M--);if(M<tt&&(tt=M),M===0)return w[u++]=20971520,w[u++]=20971520,d.bits=1,0;for(o=1;o<M&&W[o]===0;o++);for(tt<o&&(tt=o),_=$=1;_<=15;_++)if($<<=1,($-=W[_])<0)return-1;if(0<$&&(v===0||M!==1))return-1;for(V[1]=0,_=1;_<15;_++)V[_+1]=V[_]+W[_];for(B=0;B<c;B++)b[y+B]!==0&&(f[V[b[y+B]]++]=B);if(U=v===0?(A=ot=f,19):v===1?(A=l,Y-=257,ot=a,ct-=257,256):(A=h,ot=m,-1),_=o,P=u,et=B=L=0,I=-1,C=(Q=1<<(G=tt))-1,v===1&&852<Q||v===2&&592<Q)return 1;for(;;){for(H=_-et,N=f[B]<U?(D=0,f[B]):f[B]>U?(D=ot[ct+f[B]],A[Y+f[B]]):(D=96,0),k=1<<_-et,o=x=1<<G;w[P+(L>>et)+(x-=k)]=H<<24|D<<16|N|0,x!==0;);for(k=1<<_-1;L&k;)k>>=1;if(k!==0?(L&=k-1,L+=k):L=0,B++,--W[_]==0){if(_===M)break;_=b[y+f[B]]}if(tt<_&&(L&C)!==I){for(et===0&&(et=tt),P+=o,$=1<<(G=_-et);G+et<M&&!(($-=W[G+et])<=0);)G++,$<<=1;if(Q+=1<<G,v===1&&852<Q||v===2&&592<Q)return 1;w[I=L&C]=tt<<24|G<<16|P-u|0}}return L!==0&&(w[P+L]=_-et<<24|64<<16|0),d.bits=tt,0}},{"../utils/common":41}],51:[function(e,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,n,r){var s=e("../utils/common"),l=0,a=1;function h(p){for(var S=p.length;0<=--S;)p[S]=0}var m=0,v=29,b=256,y=b+1+v,c=30,w=19,u=2*y+1,f=15,d=16,k=7,x=256,I=16,C=17,P=18,U=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],H=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],N=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(y+2));h(X);var _=new Array(2*c);h(_);var B=new Array(512);h(B);var o=new Array(256);h(o);var M=new Array(v);h(M);var tt,G,et,$=new Array(c);function Q(p,S,O,F,E){this.static_tree=p,this.extra_bits=S,this.extra_base=O,this.elems=F,this.max_length=E,this.has_stree=p&&p.length}function L(p,S){this.dyn_tree=p,this.max_code=0,this.stat_desc=S}function A(p){return p<256?B[p]:B[256+(p>>>7)]}function Y(p,S){p.pending_buf[p.pending++]=255&S,p.pending_buf[p.pending++]=S>>>8&255}function W(p,S,O){p.bi_valid>d-O?(p.bi_buf|=S<<p.bi_valid&65535,Y(p,p.bi_buf),p.bi_buf=S>>d-p.bi_valid,p.bi_valid+=O-d):(p.bi_buf|=S<<p.bi_valid&65535,p.bi_valid+=O)}function V(p,S,O){W(p,O[2*S],O[2*S+1])}function ot(p,S){for(var O=0;O|=1&p,p>>>=1,O<<=1,0<--S;);return O>>>1}function ct(p,S,O){var F,E,j=new Array(f+1),K=0;for(F=1;F<=f;F++)j[F]=K=K+O[F-1]<<1;for(E=0;E<=S;E++){var q=p[2*E+1];q!==0&&(p[2*E]=ot(j[q]++,q))}}function it(p){var S;for(S=0;S<y;S++)p.dyn_ltree[2*S]=0;for(S=0;S<c;S++)p.dyn_dtree[2*S]=0;for(S=0;S<w;S++)p.bl_tree[2*S]=0;p.dyn_ltree[2*x]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function nt(p){8<p.bi_valid?Y(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function ut(p,S,O,F){var E=2*S,j=2*O;return p[E]<p[j]||p[E]===p[j]&&F[S]<=F[O]}function at(p,S,O){for(var F=p.heap[O],E=O<<1;E<=p.heap_len&&(E<p.heap_len&&ut(S,p.heap[E+1],p.heap[E],p.depth)&&E++,!ut(S,F,p.heap[E],p.depth));)p.heap[O]=p.heap[E],O=E,E<<=1;p.heap[O]=F}function ft(p,S,O){var F,E,j,K,q=0;if(p.last_lit!==0)for(;F=p.pending_buf[p.d_buf+2*q]<<8|p.pending_buf[p.d_buf+2*q+1],E=p.pending_buf[p.l_buf+q],q++,F===0?V(p,E,S):(V(p,(j=o[E])+b+1,S),(K=U[j])!==0&&W(p,E-=M[j],K),V(p,j=A(--F),O),(K=H[j])!==0&&W(p,F-=$[j],K)),q<p.last_lit;);V(p,x,S)}function dt(p,S){var O,F,E,j=S.dyn_tree,K=S.stat_desc.static_tree,q=S.stat_desc.has_stree,J=S.stat_desc.elems,st=-1;for(p.heap_len=0,p.heap_max=u,O=0;O<J;O++)j[2*O]!==0?(p.heap[++p.heap_len]=st=O,p.depth[O]=0):j[2*O+1]=0;for(;p.heap_len<2;)j[2*(E=p.heap[++p.heap_len]=st<2?++st:0)]=1,p.depth[E]=0,p.opt_len--,q&&(p.static_len-=K[2*E+1]);for(S.max_code=st,O=p.heap_len>>1;1<=O;O--)at(p,j,O);for(E=J;O=p.heap[1],p.heap[1]=p.heap[p.heap_len--],at(p,j,1),F=p.heap[1],p.heap[--p.heap_max]=O,p.heap[--p.heap_max]=F,j[2*E]=j[2*O]+j[2*F],p.depth[E]=(p.depth[O]>=p.depth[F]?p.depth[O]:p.depth[F])+1,j[2*O+1]=j[2*F+1]=E,p.heap[1]=E++,at(p,j,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],function(rt,ht){var vt,mt,yt,lt,Rt,Le,gt=ht.dyn_tree,Te=ht.max_code,Re=ht.stat_desc.static_tree,ze=ht.stat_desc.has_stree,Me=ht.stat_desc.extra_bits,De=ht.stat_desc.extra_base,wt=ht.stat_desc.max_length,zt=0;for(lt=0;lt<=f;lt++)rt.bl_count[lt]=0;for(gt[2*rt.heap[rt.heap_max]+1]=0,vt=rt.heap_max+1;vt<u;vt++)wt<(lt=gt[2*gt[2*(mt=rt.heap[vt])+1]+1]+1)&&(lt=wt,zt++),gt[2*mt+1]=lt,Te<mt||(rt.bl_count[lt]++,Rt=0,De<=mt&&(Rt=Me[mt-De]),Le=gt[2*mt],rt.opt_len+=Le*(lt+Rt),ze&&(rt.static_len+=Le*(Re[2*mt+1]+Rt)));if(zt!==0){do{for(lt=wt-1;rt.bl_count[lt]===0;)lt--;rt.bl_count[lt]--,rt.bl_count[lt+1]+=2,rt.bl_count[wt]--,zt-=2}while(0<zt);for(lt=wt;lt!==0;lt--)for(mt=rt.bl_count[lt];mt!==0;)Te<(yt=rt.heap[--vt])||(gt[2*yt+1]!==lt&&(rt.opt_len+=(lt-gt[2*yt+1])*gt[2*yt],gt[2*yt+1]=lt),mt--)}}(p,S),ct(j,st,p.bl_count)}function i(p,S,O){var F,E,j=-1,K=S[1],q=0,J=7,st=4;for(K===0&&(J=138,st=3),S[2*(O+1)+1]=65535,F=0;F<=O;F++)E=K,K=S[2*(F+1)+1],++q<J&&E===K||(q<st?p.bl_tree[2*E]+=q:E!==0?(E!==j&&p.bl_tree[2*E]++,p.bl_tree[2*I]++):q<=10?p.bl_tree[2*C]++:p.bl_tree[2*P]++,j=E,st=(q=0)===K?(J=138,3):E===K?(J=6,3):(J=7,4))}function z(p,S,O){var F,E,j=-1,K=S[1],q=0,J=7,st=4;for(K===0&&(J=138,st=3),F=0;F<=O;F++)if(E=K,K=S[2*(F+1)+1],!(++q<J&&E===K)){if(q<st)for(;V(p,E,p.bl_tree),--q!=0;);else E!==0?(E!==j&&(V(p,E,p.bl_tree),q--),V(p,I,p.bl_tree),W(p,q-3,2)):q<=10?(V(p,C,p.bl_tree),W(p,q-3,3)):(V(p,P,p.bl_tree),W(p,q-11,7));j=E,st=(q=0)===K?(J=138,3):E===K?(J=6,3):(J=7,4)}}h($);var T=!1;function g(p,S,O,F){W(p,(m<<1)+(F?1:0),3),function(E,j,K,q){nt(E),Y(E,K),Y(E,~K),s.arraySet(E.pending_buf,E.window,j,K,E.pending),E.pending+=K}(p,S,O)}r._tr_init=function(p){T||(function(){var S,O,F,E,j,K=new Array(f+1);for(E=F=0;E<v-1;E++)for(M[E]=F,S=0;S<1<<U[E];S++)o[F++]=E;for(o[F-1]=E,E=j=0;E<16;E++)for($[E]=j,S=0;S<1<<H[E];S++)B[j++]=E;for(j>>=7;E<c;E++)for($[E]=j<<7,S=0;S<1<<H[E]-7;S++)B[256+j++]=E;for(O=0;O<=f;O++)K[O]=0;for(S=0;S<=143;)X[2*S+1]=8,S++,K[8]++;for(;S<=255;)X[2*S+1]=9,S++,K[9]++;for(;S<=279;)X[2*S+1]=7,S++,K[7]++;for(;S<=287;)X[2*S+1]=8,S++,K[8]++;for(ct(X,y+1,K),S=0;S<c;S++)_[2*S+1]=5,_[2*S]=ot(S,5);tt=new Q(X,U,b+1,y,f),G=new Q(_,H,0,c,f),et=new Q(new Array(0),D,0,w,k)}(),T=!0),p.l_desc=new L(p.dyn_ltree,tt),p.d_desc=new L(p.dyn_dtree,G),p.bl_desc=new L(p.bl_tree,et),p.bi_buf=0,p.bi_valid=0,it(p)},r._tr_stored_block=g,r._tr_flush_block=function(p,S,O,F){var E,j,K=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=function(q){var J,st=4093624447;for(J=0;J<=31;J++,st>>>=1)if(1&st&&q.dyn_ltree[2*J]!==0)return l;if(q.dyn_ltree[18]!==0||q.dyn_ltree[20]!==0||q.dyn_ltree[26]!==0)return a;for(J=32;J<b;J++)if(q.dyn_ltree[2*J]!==0)return a;return l}(p)),dt(p,p.l_desc),dt(p,p.d_desc),K=function(q){var J;for(i(q,q.dyn_ltree,q.l_desc.max_code),i(q,q.dyn_dtree,q.d_desc.max_code),dt(q,q.bl_desc),J=w-1;3<=J&&q.bl_tree[2*N[J]+1]===0;J--);return q.opt_len+=3*(J+1)+5+5+4,J}(p),E=p.opt_len+3+7>>>3,(j=p.static_len+3+7>>>3)<=E&&(E=j)):E=j=O+5,O+4<=E&&S!==-1?g(p,S,O,F):p.strategy===4||j===E?(W(p,2+(F?1:0),3),ft(p,X,_)):(W(p,4+(F?1:0),3),function(q,J,st,rt){var ht;for(W(q,J-257,5),W(q,st-1,5),W(q,rt-4,4),ht=0;ht<rt;ht++)W(q,q.bl_tree[2*N[ht]+1],3);z(q,q.dyn_ltree,J-1),z(q,q.dyn_dtree,st-1)}(p,p.l_desc.max_code+1,p.d_desc.max_code+1,K+1),ft(p,p.dyn_ltree,p.dyn_dtree)),it(p),F&&nt(p)},r._tr_tally=function(p,S,O){return p.pending_buf[p.d_buf+2*p.last_lit]=S>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&S,p.pending_buf[p.l_buf+p.last_lit]=255&O,p.last_lit++,S===0?p.dyn_ltree[2*O]++:(p.matches++,S--,p.dyn_ltree[2*(o[O]+b+1)]++,p.dyn_dtree[2*A(S)]++),p.last_lit===p.lit_bufsize-1},r._tr_align=function(p){W(p,2,3),V(p,x,X),function(S){S.bi_valid===16?(Y(S,S.bi_buf),S.bi_buf=0,S.bi_valid=0):8<=S.bi_valid&&(S.pending_buf[S.pending++]=255&S.bi_buf,S.bi_buf>>=8,S.bi_valid-=8)}(p)}},{"../utils/common":41}],53:[function(e,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,n,r){(function(s){(function(l,a){if(!l.setImmediate){var h,m,v,b,y=1,c={},w=!1,u=l.document,f=Object.getPrototypeOf&&Object.getPrototypeOf(l);f=f&&f.setTimeout?f:l,h={}.toString.call(l.process)==="[object process]"?function(I){process.nextTick(function(){k(I)})}:function(){if(l.postMessage&&!l.importScripts){var I=!0,C=l.onmessage;return l.onmessage=function(){I=!1},l.postMessage("","*"),l.onmessage=C,I}}()?(b="setImmediate$"+Math.random()+"$",l.addEventListener?l.addEventListener("message",x,!1):l.attachEvent("onmessage",x),function(I){l.postMessage(b+I,"*")}):l.MessageChannel?((v=new MessageChannel).port1.onmessage=function(I){k(I.data)},function(I){v.port2.postMessage(I)}):u&&"onreadystatechange"in u.createElement("script")?(m=u.documentElement,function(I){var C=u.createElement("script");C.onreadystatechange=function(){k(I),C.onreadystatechange=null,m.removeChild(C),C=null},m.appendChild(C)}):function(I){setTimeout(k,0,I)},f.setImmediate=function(I){typeof I!="function"&&(I=new Function(""+I));for(var C=new Array(arguments.length-1),P=0;P<C.length;P++)C[P]=arguments[P+1];var U={callback:I,args:C};return c[y]=U,h(y),y++},f.clearImmediate=d}function d(I){delete c[I]}function k(I){if(w)setTimeout(k,0,I);else{var C=c[I];if(C){w=!0;try{(function(P){var U=P.callback,H=P.args;switch(H.length){case 0:U();break;case 1:U(H[0]);break;case 2:U(H[0],H[1]);break;case 3:U(H[0],H[1],H[2]);break;default:U.apply(a,H)}})(C)}finally{d(I),w=!1}}}}function x(I){I.source===l&&typeof I.data=="string"&&I.data.indexOf(b)===0&&k(+I.data.slice(b.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jszip_min);var jszip_minExports=jszip_min.exports;const JSZip=getDefaultExportFromCjs(jszip_minExports),content$8=html`
    <ui-button variant="full" color="secondary">Neu</ui-button>
`,ye=class ye extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$8,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,button:this.querySelector("ui-button")}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}onClick(){const t=new MetalSheetCreateDialog("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",n=>(n=[...n,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],n))}),document.body.appendChild(t),t.ui.open(!0)}};Z(ye,"register",()=>{UIDrawerGroupItem.register(),UIButton.register(),MetalSheetCreateDialog.register(),customElements.get("drawer-new-metal-sheet-list-button")||customElements.define("drawer-new-metal-sheet-list-button",ye)});let DrawerNewMetalSheetListButton=ye;const content$7=html`
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
`,we=class we extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$7,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){var n;this.data=t;let e=-1;typeof((n=t.data)==null?void 0:n.press)=="number"&&(e=t.data.press),this.setText(t.format,t.toolID,e)}setText(t,e,n){const r=document.createElement("span");r.innerHTML=html`
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
        `,this.querySelector("ui-button").appendChild(r)}};Z(we,"register",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-metal-sheet-list",we)});let PGDrawerItemMetalSheetList=we;const storeGistKey="metal-sheet-lists",content$6=html`
    <drawer-import-button
        store-gist-key="${storeGistKey}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>

    <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
`,ke=class ke extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$6,this.style.position="relative",this.ui.setTitle("Blech Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on("metalSheetLists",this.storeMetalSheetListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set("metalSheetLists",[])},t.ui.onUpdate=this.update.bind(this),t.ui.setExportHandler(async()=>{const e=new JSZip;for(const r of this.uiStore.ui.get("metalSheetLists")){const s=getFileName(r),l=JSON.stringify(r);e.file(s,l)}const n=await e.generateAsync({type:"blob"});FileSaver.saveAs(n,`blech-listen-${new Date().getTime()}.zip`)})}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){const e=getKey(t.format,t.toolID);if(this.uiStore.ui.get("metalSheetLists").find(n=>getKey(n.format,n.toolID)===e)){this.uiStore.ui.update("metalSheetLists",n=>n.map(r=>getKey(r.format,r.toolID)===e?t:r));return}this.uiStore.ui.update("metalSheetLists",n=>[...n,t])}async storeGistHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),!t)return;const e=this.querySelector("drawer-gist-item"),n=t["metal-sheet-lists"];if(!n){e.ui.set(null,null),e.ui.onPull=null,e.ui.onPush=null;return}e.ui.set(n.id,n.revision);let r;const s=()=>{r&&e.removeChild(r),r=new UISpinner,e.appendChild(r)},l=()=>{r&&(e.removeChild(r),r=void 0)};e.ui.onPull=async(a,h)=>{s();try{await gistPull(a,h,{beforeUpdate:async()=>{this.uiStore.ui.set("metalSheetLists",[])},update:this.update.bind(this),updateRevision:m=>{this.uiStore.ui.update("gist",v=>(v[storeGistKey]={id:a,revision:m},v))}})}finally{l()}},e.ui.onPush=async(a,h)=>{await gistPush(a,h,this.uiStore.ui.get("metalSheetLists"),{getFileName,updateRevision:m=>{this.uiStore.ui.update("gist",v=>(v[storeGistKey]={id:a,revision:m},v))}})}}async storeMetalSheetListsHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:t}),!t)return;const e=[...this.children].slice(3);for(;e.length>0;)this.removeChild(e.pop());for(const n of sortMetalSheetLists(t)){const r=new PGDrawerItemMetalSheetList;r.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists",l=>{l.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.format} - ${n.toolID} - ${n.date}"`)&&this.uiStore.ui.update("metalSheetLists",s=>{const l=getKey(n.format,n.toolID);return s.filter(a=>getKey(a.format,a.toolID)!==l)})})),this.appendChild(r)}}};Z(ke,"register",()=>{UIDrawerGroup.register(),DrawerImportButton.register(),DrawerGistItem.register(),PGDrawerItemMetalSheetList.register(),ImportDialog.register(),DrawerNewMetalSheetListButton.register(),UISpinner.register(),PushDialog.register(),customElements.define("pg-drawer-metal-sheet-lists",ke)});let PGDrawerMetalSheetLists=ke;const content$5=html`
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
`,_e=class _e extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$5,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const n=document.createElement("span");n.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(n.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(n)}};Z(_e,"regsiter",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-vis",_e)});let PGDrawerItemVis=_e;const content$4=html`
    <drawer-import-button gist-key="vis" disabled></drawer-import-button>
`,xe=class xe extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$4,this.ui.setTitle("Vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this)}async validate(t){return t}async update(t){}onVis(t){if(console.debug("[PGDrawerVis.onVis]",{lists:t}),!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const n of t){const r=new PGDrawerItemVis;r.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("vis",s=>s.filter(l=>l.title!==n.title))}))}}};Z(xe,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),DrawerImportButton.register(),PGDrawerItemVis.register(),customElements.define("pg-drawer-vis",xe)});let PGDrawerVis=xe;const gridContent=html`
    <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
    </ui-flex-grid-item>
`,Se=class Se extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",n=>(n.unshift({title:this.name.ui.getValue(),data:[]}),n)),this.ui.close()}),this.appendChild(t)}};Z(Se,"register",()=>{UIFlexGrid.register(),UIFlexGridItem.register(),UIInput.register(),UIButton.register(),UIStore.register(),UIDialog.register(),customElements.define("new-vis-data-dialog",Se)});let NewVisDataDialog=Se;const content$3=html`
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
`,Ce=class Ce extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$3,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.ui.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const n=document.createElement("span");n.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(n.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(n)}};Z(Ce,"regsiter",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-vis-data",Ce)});let PGDrawerItemVisData=Ce;const content$2=html`
    <drawer-import-button gist-key="vis-data" disabled></drawer-import-button>

    <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
            New Data
        </ui-button>
    </ui-drawer-group-item>
`,Ie=class Ie extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$2,this.ui.setTitle("Vis Data"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}async validate(t){return t}async update(t){}onVisData(t){if(console.debug("[PGDrawerVisData.onVisData]",{lists:t}),!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const n of t){const r=new PGDrawerItemVisData;r.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(l=>l.title!==n.title))}))}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new NewVisDataDialog;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};Z(Ie,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),DrawerImportButton.register(),PGDrawerItemVisData.register(),NewVisDataDialog.register(),customElements.define("pg-drawer-vis-data",Ie)});let PGDrawerVisData=Ie;const content$1=html`
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
`,Ee=class Ee extends UIDrawer{constructor(){super(),this.innerHTML=content$1}getGroup(t){return this.querySelector(`pg-drawer-${t.toString()}`)}};Z(Ee,"register",()=>{UIDrawer.register(),PGDrawerAlertLists.register(),PGDrawerMetalSheetLists.register(),PGDrawerVis.register(),PGDrawerVisData.register(),customElements.define("pg-drawer",Ee)});let PGDrawer=Ee;const content=html`
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
`,Ae=class Ae extends HTMLElement{constructor(){super(),this.innerHTML=content,this.cleanup=new CleanUp,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.stackSize()>1?this.pgAppBar.ui.items.back.ui.enable():this.pgAppBar.ui.items.back.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":this.setupMetalSheetListsPage();break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new AlertListsPage),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new MetalSheetListsPage),this.stackLayout.ui.registerPage("vis",()=>new VisPage),this.stackLayout.ui.registerPage("vis-data",()=>new VisDataPage)}setupMetalSheetListsPage(){this.pgAppBar.ui.items.edit.ui.enable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}setupAlertPage(){this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}setupAlertListsPage(){this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.enable()}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.ui.items.title.ui.getChild().innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.ui.items.share.ui.enable():this.pgAppBar.ui.items.share.ui.disable()}};Z(Ae,"register",()=>{UIStore.register(),UIThemeHandler.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIContainer.register(),UIStackLayout.register(),UIDrawer.register(),UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),PGAppBar.register(),PGDrawer.register(),AlertListsPage.register(),MetalSheetListsPage.register(),VisPage.register(),VisDataPage.register(),customElements.define("pg-app",Ae)});let PGApp=Ae;registerSW({onRegistered(R){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${version}`),await R.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});PGApp.register();
