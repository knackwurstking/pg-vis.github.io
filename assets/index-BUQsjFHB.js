var wt=Object.defineProperty;var bt=o=>{throw TypeError(o)};var kt=(o,t,e)=>t in o?wt(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>kt(o,typeof t!="symbol"?t+"":t,e),St=(o,t,e)=>t.has(o)||bt("Cannot "+e);var p=(o,t,e)=>(St(o,t,"read from private field"),e?e.call(o):t.get(o)),vt=(o,t,e)=>t.has(o)?bt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(o):t.set(o,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const scriptRel="modulepreload",assetsURL=function(o){return"/pg-vis.github.io/"+o},seen={},__vitePreload=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(l=>{if(l=assetsURL(l),l in seen)return;seen[l]=!0;const u=l.endsWith(".css"),ft=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${ft}`))return;const d=document.createElement("link");if(d.rel=u?"stylesheet":scriptRel,u||(d.as="script",d.crossOrigin=""),d.href=l,a&&d.setAttribute("nonce",a),document.head.appendChild(d),u)return new Promise((c,yt)=>{d.addEventListener("load",c),d.addEventListener("error",()=>yt(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function registerSW(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=o;let l,u;const ft=async(c=!0)=>{await u};async function d(){if("serviceWorker"in navigator){if(l=await __vitePreload(async()=>{const{Workbox:c}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:c}},[]).then(({Workbox:c})=>new c("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(c=>{a==null||a(c)}),!l)return;l.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&window.location.reload()}),l.addEventListener("installed",c=>{c.isUpdate||i==null||i()}),l.register({immediate:t}).then(c=>{s?s("/pg-vis.github.io/sw.js",c):r==null||r(c)}).catch(c=>{a==null||a(c)})}}return u=d(),ft}const defaultOptions$1={onDragStart:null,onDragging:null,onDragEnd:null};function create$1(o,t={}){t={...defaultOptions$1,...t};const e=()=>{const s=[...o.parentNode.children].indexOf(o);o.draggable=!0,o.ondragstart=a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData("text/plain",s.toString()),t.onDragStart&&t.onDragStart(s)},o.ondragover=a=>(a.preventDefault(),!1),o.ondragenter=a=>{a.preventDefault(),t.onDragging&&t.onDragging(s)},o.ondrop=a=>{a.preventDefault(),a.dataTransfer.dropEffect="move";const l=parseInt(a.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(l,s)}},i=()=>{o.draggable=!1,o.ondragstart=null,o.ondragover=null,o.ondragenter=null,o.ondrop=null};return e(),{update(r){t={...defaultOptions$1,...r},i(),e()},destroy:i}}var h;class Events{constructor(){vt(this,h,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return p(this,h)[t]||(p(this,h)[t]=[]),p(this,h)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!p(this,h)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,r=0;for(const s of p(this,h)[t])s===e&&(p(this,h)[t].splice(r,1),i=!0),r++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(p(this,h)[t])for(const i of p(this,h)[t])i(e);return this}}h=new WeakMap;function rippleStart(o,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,o.currentTarget.appendChild(e);const i=o.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${o.clientY-i.top}px`,e.style.left=`${o.clientX-i.left}px`);const r=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${r}) translate(0, 0)`,e}function rippleStop(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const defaultOptions={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function create(o,t={}){t={...defaultOptions,...t};let e;const i=s=>{e=rippleStart(s,t)},r=()=>{rippleStop(e)};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.useClick===!0?o.addEventListener("click",s=>{e=rippleStart(s,t),rippleStop(e)}):(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",r),o.addEventListener("pointerleave",r)),()=>{o.classList.remove("ripple-container"),o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",r),o.removeEventListener("pointerleave",r)}}const html=String.raw;class CleanUp{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const defaultFlex="1",content$M=html`
    <style></style>
    <slot></slot>
`,g=class g extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$M,this.cleanup=new CleanUp,this.ui={root:this,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):defaultFlex},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||defaultFlex});break}}updateStyle({flex:t=defaultFlex}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};n(g,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",g)}),n(g,"observedAttributes",["flex"]);let UIFlexGridItem=g;const defaultGap$1="0",content$L=`
    <style></style>
    <slot></slot>
`,m=class m extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$L,this.cleanup=new CleanUp,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||defaultGap$1},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||defaultGap$1});break}}updateStyle({gap:t=defaultGap$1}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(m,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",m)}),n(m,"observedAttributes",["gap"]);let UIFlexGridRow=m;const defaultGap="0",content$K=`
    <style></style>
    <slot></slot>
`,f=class f extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$K,this.cleanup=new CleanUp,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||defaultGap},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||defaultGap});break}}updateStyle({gap:t=defaultGap}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(f,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",f)}),n(f,"observedAttributes",["gap"]);let UIFlexGrid=f;const content$J=html`
    <style>
        * { box-sizing: border-box; }

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
`,E=class E extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$J,this.cleanup=new CleanUp,this.ui={root:this,getLeftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},getCenterSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},getRightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(E,"register",()=>{UIFlexGridRow.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",E)});let UIAppBar=E;const content$I=html`
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
`,A=class A extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$I,this.cleanup=new CleanUp,this.ui={root:this,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getChild(){return this.root.querySelector("*")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(A,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",A)});let UIAppBarItem=A;const content$H=html`
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
`,b=class b extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$H,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(b,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",b)}),n(b,"observedAttributes",["no-ripple","color"]);let UIButton=b;const content$G=html`
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
`,v=class v extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$G,this.setAttribute("role","button"),this.cleanup=new CleanUp,this.ui={root:this,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(v,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",v)}),n(v,"observedAttributes",["no-ripple","color"]);let UIIconButton=v;const content$F=html`
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
`,T=class T extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$F,this.cleanup=new CleanUp,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(T,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",T)});let UIContainer=T;const content$E=html`
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
`,$=class $ extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$E}};n($,"register",()=>{customElements.get("svg-chevron-left")||customElements.define("svg-chevron-left",$)});let SvgChevronLeft=$;const content$D=html`
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
`,D=class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$D}};n(D,"register",()=>{customElements.get("svg-chevron-down")||customElements.define("svg-chevron-down",D)});let SvgChevronDown=D;const content$C=html`
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
`,U=class U extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$C}};n(U,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",U)});let SvgClose=U;const content$B=html`
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
`,M=class M extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$B}};n(M,"register",()=>{customElements.get("svg-pen")||customElements.define("svg-pen",M)});let SvgPen=M;const content$A=html`
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
`,H=class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$A}};n(H,"register",()=>{customElements.get("svg-trash")||customElements.define("svg-trash",H)});let SvgTrash=H;const content$z=html`
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
`,G=class G extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$z}};n(G,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",G)});let SvgSearch=G;const content$y=html`
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
`,R=class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$y}};n(R,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",R)});let SvgMenu=R;const content$x=html`
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
`,q=class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$x}};n(q,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",q)});let SvgShare=q;const content$w=html`
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
`,B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$w,this.cleanup=new CleanUp,this.ui={root:this,events:new Events,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const i=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=i},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),r=s=>{s.preventDefault()};i.addEventListener("cancel",r),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",r)})}disconnectedCallback(){this.cleanup.run()}};n(B,"register",()=>{SvgClose.register(),UIIconButton.register(),UIFlexGridRow.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",B)});let UIDialog=B;const zIndex=150,content$v=html`
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

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`,y=class y extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$v,this.cleanup=new CleanUp,this.ui={root:this,aside:this.shadowRoot.querySelector("aside"),events:new Events,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.setOpen(!1)},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};n(y,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",y)}),n(y,"observedAttributes",["open"]);let UIDrawer=y;const content$u=html`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,P=class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$u,this.cleanup=new CleanUp,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(P,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",P)});let UIPrimary=P;const content$t=html`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,V=class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$t,this.cleanup=new CleanUp,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(V,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",V)});let UISecondary=V;const content$s=html`
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
`,w=class w extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$s,this.cleanup=new CleanUp,this.ui={root:this,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(t=>t.click())},onInputClick:async t=>{t.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(t){if(t===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(t){if(t===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"ripple":i!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=i||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=i||"";break}}};n(w,"register",()=>{UIPrimary.register(),UISecondary.register(),customElements.get("ui-label")||customElements.define("ui-label",w)}),n(w,"observedAttributes",["ripple","secondary","primary"]);let UILabel=w;const content$r=html`
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
`,F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$r,this.cleanup=new CleanUp,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(F,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",F)});let UIDrawerGroupItem=F;const content$q=html`
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
`,k=class k extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$q,this.cleanup=new CleanUp,this.ui={root:this,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};n(k,"register",()=>{UIDrawerGroupItem.register(),UIPrimary.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",k)}),n(k,"observedAttributes",["title"]);let UIDrawerGroup=k;const content$p=html`
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
`,S=class S extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$p,this.cleanup=new CleanUp,this.ui={root:this,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new Events,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){this.input.value=(t||"").toString()},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');if(i===null&&r&&(this.removeChild(r),r=null),i===null)return;r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=i;break;case"type":this.ui.input.type=i||"text";break;case"value":this.ui.setValue(i);break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i;break;case"min":this.ui.input.min=i||"";break;case"max":this.ui.input.max=i||"";break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};n(S,"register",()=>{UISecondary.register(),customElements.get("ui-input")||customElements.define("ui-input",S)}),n(S,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let UIInput=S;const content$o=html`
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
`,j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$o,this.setAttribute("role","button"),this.ui={root:this,getValue(){return this.root.getAttribute("value")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getSelected(){return this.root.hasAttribute("selected")},setSelected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}}}};n(j,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",j)});let UISelectOption=j;const content$n=html`
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
`,N=class N extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$n,this.cleanup=new CleanUp,this.ui={events:new Events,root:this,isOpen(){this.root.hasAttribute("open")},open(){this.root.setAttribute("open","")},close(){this.root.removeAttribute("open")},getOptions(){return[...this.root.children].filter(t=>t instanceof UISelectOption)},getSelectedOption(){try{return this.getOptions().find(t=>!!t.ui.getSelected())||null}catch{return null}}}}connectedCallback(){const t=this.shadowRoot.querySelector(".options"),e=async r=>{(r.composedPath()||[]).forEach(s=>{s instanceof UISelectOption&&([...this.querySelectorAll("ui-select-option")].forEach(a=>a.removeAttribute("selected")),s.setAttribute("selected",""),this.ui.events.dispatch("change",s))})},i=r=>{this.classList.toggle("open")?(r.stopPropagation(),this.addEventListener("click",e)):setTimeout(()=>this.removeEventListener("click",e))};t.addEventListener("click",i),this.cleanup.add(()=>{this.removeEventListener("click",i),t.removeEventListener("click",i)}),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}disconnectedCallback(){this.cleanup.run()}};n(N,"register",()=>{SvgChevronDown.register(),UISelectOption.register(),customElements.get("ui-select")||customElements.define("ui-select",N)});let UISelect=N;const content$m=html`
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
`,x=class x extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$m,this.cleanup=new CleanUp,this.ui={root:this,useStorage:!1,storagePrefix:null,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");t.type="text",t.onkeydown=async i=>{this.ui.hasSubmit()&&i.key==="Enter"&&this.ui.submit.click()},t.oninput=async()=>{this.ui.useStorage&&(e!==null&&clearTimeout(e),e=setTimeout(()=>{localStorage.setItem((this.ui.storagePrefix||"")+this.ui.getKey(),t.value),e=null},250)),this.ui.events.dispatch("input",t.value)};let e=null;return t.onchange=async()=>this.ui.events.dispatch("change",t.value),t})(),events:new Events,setKey(t){if(t===null){this.root.removeAttribute("key"),this.setValue("");return}this.root.setAttribute("key",t),this.setValue(localStorage.getItem(this.storagePrefix+this.getKey()))},getKey(){return this.root.getAttribute("key")||""},hasSubmit(){return!!this.submit.parentElement},disableSubmit(){this.hasSubmit()&&this.submit.parentElement.removeChild(this.submit)},enableSubmit(){if(!this.hasSubmit())return;this.root.shadowRoot.querySelector(".container").appendChild(this.submit)},setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){this.input.value=t||""},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');i===null&&r&&(this.removeChild(r),r=null),r||(r=new UISecondary,r.slot="title",this.appendChild(r)),r.innerHTML=i||"";break;case"value":this.ui.setValue(i);break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"no-submit":i!==null?this.ui.disableSubmit():this.ui.enableSubmit();break;case"use-storage":this.ui.useStorage=i!==null;break;case"storage-prefix":this.ui.storagePrefix=i;break}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};n(x,"register",()=>{UISecondary.register(),UIIconButton.register(),SvgSearch.register(),customElements.get("ui-search")||customElements.define("ui-search",x)}),n(x,"observedAttributes",["title","value","placeholder","invalid","no-submit","use-storage","storage-prefix"]);let UISearch=x;const innerHTML=html`
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
`,O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=innerHTML,this.cleanup=new CleanUp,this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(O,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",O)});let UIStackLayoutPage=O;const content$l=html`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,C=class C extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$l,this.cleanup=new CleanUp,this.ui={root:this,pages:{},stack:[],onpopstate:null,events:new Events,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=null,i=!1){if(this.lock)return;const r=this.pages[t]();this.stack.push(this.root.appendChild(r)),typeof e=="function"&&setTimeout(()=>e(r));let s=null;this.stack.length>1&&!i&&(s=this.stack[this.stack.length-2],s.parentElement.removeChild(s)),this.dispatchChangeEvent(s),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"use-history":i!==null?this.ui.enableHistory():this.ui.disableHistory();break}}};n(C,"register",()=>{UIStackLayoutPage.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",C)}),n(C,"observedAttributes",["use-history"]);let UIStackLayout=C;const I=class I extends HTMLElement{constructor(){super(),this.ui={root:this,useStorage:!1,storagePrefix:null,stores:{},events:new Events,get(t){return this.stores[t]},set(t,e,i=!1){if(i&&this.storagePrefix){const r=JSON.parse(localStorage.getItem((this.storagePrefix||"")+t.toString())||"null");this.stores[t]=r??e}else this.stores[t]=e;this.useStorage&&localStorage.setItem((this.storagePrefix||"")+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}}}attributeChangedCallback(t,e,i){switch(t){case"use-storage":this.ui.useStorage=i!==null;break;case"storage-prefix":this.ui.storagePrefix=i;break}}};n(I,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",I)}),n(I,"observedAttributes",["use-storage","storage-prefix"]);let UIStore=I;const L=class L extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},getMode(t=document.body){return t.getAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}},mediaChangeHandler:t=>{t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},getAuto(){return!!this.media},setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null;return}if(this.setMode(null,e),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},addTheme(t,e){this.themes[t]=e},setTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}}}attributeChangedCallback(t,e,i){switch(t){case"auto":this.ui.setAuto(i!==null);break;case"mode":this.ui.setMode(i);break}}};n(L,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",L)}),n(L,"observedAttributes",["auto","mode"]);let UIThemeHandler=L;const content$k=html`
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
`,z=class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$k,this.cleanup=new CleanUp,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={items:{menu:this.shadowRoot.querySelector('[name="menu"]'),back:this.shadowRoot.querySelector('[name="back"]'),title:this.shadowRoot.querySelector('[name="title"]'),edit:this.shadowRoot.querySelector('[name="edit"]'),share:this.shadowRoot.querySelector('[name="share"]'),search:this.shadowRoot.querySelector('[name="search"]')}}}connectedCallback(){this.cleanup.add(this.ui.items.menu.ui.getChild().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0)),this.ui.items.back.ui.getChild().ui.events.on("click",()=>this.stackLayout.ui.goBack()),this.ui.items.edit.ui.getChild().ui.events.on("click",()=>{const t=this.uiStore.ui.get("edit").onClick;typeof t=="function"&&t()}),this.ui.items.share.ui.getChild().ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share");if(!navigator.canShare(t)){const e=document.createElement("a");for(const i of t.files)e.download=i.name,e.href="data:application/json;charset=utf-8,"+encodeURIComponent(await i.text()),e.click();return}await navigator.share(t)}),this.ui.items.search.ui.getChild().ui.events.on("click",()=>this.uiStore.ui.update("search",t=>({...t,active:!t.active}))))}disconnectedCallback(){this.cleanup.run()}};n(z,"register",()=>{SvgSearch.register(),SvgShare.register(),SvgChevronLeft.register(),SvgMenu.register(),SvgPen.register(),UIAppBarItem.register(),UIAppBar.register(),UIDrawerGroupItem.register(),UIIconButton.register(),customElements.define("pg-app-bar",z)});let PGAppBar=z;function createAlert({alert:o,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:r=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
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
`)),s.setAttribute("data-note",o.note||""),s.onclick=r,i&&(create(s),s.style.cursor="pointer",s.role="button"),s}const content$j=html`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,K=class K extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$j,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(createAlert({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerText=this.alert.desc.join(`
`),t.appendChild(e)}};n(K,"register",()=>{UIFlexGrid.register(),UIFlexGridItem.register(),UIStackLayoutPage.register(),customElements.define("alert-page",K)});let AlertPage=K;const searchBarHeight="4.5em",content$i=html`
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
`,J=class J extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=content$i,this.input=this.shadowRoot.querySelector("ui-search"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,input:this.input,isActive(){return this.root.style.display==="block"},setActive(t){if(t){this.root.style.display="block",this.root.stackLayout.style.setProperty("--search-bar-height",searchBarHeight),this.input.focus();return}this.root.style.display="none",this.root.stackLayout.style.setProperty("--search-bar-height","0rem")},setPrefix(t){this.root.input.ui.storagePrefix="pg-vis:search:"+t}}}};n(J,"register",()=>{UISearch.register(),customElements.define("search-bar",J)});let SearchBar=J;const content$h=html`
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
`,W=class W extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$h,this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.list=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.searchBar=this.querySelector("search-bar"),this.alertPage=new AlertPage,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){const e=(t==null?void 0:t.title)||"",i=e;this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input.ui.setKey(i),setTimeout(()=>this.root.renderList())}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:e})=>{e===!0?(this.searchBar.ui.setActive(!0),await this.search(this.searchBar.ui.input.ui.getValue())):(this.searchBar.ui.setActive(!1),await this.search(""))});let t=null;this.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let r=0;r<this.list.data.length;r++){if(e.active===!0&&!this.is(this.list.data[r],i))return;setTimeout(()=>this.renderListElement(t,this.list.data[r],r<this.list.data.length-1))}}renderListElement(t,e,i){t.appendChild(createAlert({alert:e,container:"li",hasBorder:i,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`),note:t.getAttribute("data-note")}}is(t,e){const i=[];for(let r=t.from;r<=t.to;r++)i.push(r);return!!`${i.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromElement(e);this.alertPage.ui.set(i),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(i=>{if(!this.searchBar.ui.isActive()){i.style.display="flex";return}if(this.is(this.getAlertFromElement(i),e)){i.style.display="flex";return}i.style.display="none"})}};n(W,"register",()=>{UIStackLayoutPage.register(),SearchBar.register(),AlertPage.register(),customElements.define("alert-lists-page",W)});let AlertListsPage=W;function getKey(o){return`${o.format}:${o.toolID}`}function getFileName(o){return`BlechListen_${o.format}_${o.toolID}_${o.date}.json`}const gridContent$3=html`
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
`,Y=class Y extends UIDialog{constructor(t="Neue Liste"){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$3,e})()),this.ui.setTitle(t),this.ui={...this.ui,root:this,set(e){this.root.querySelector('[name="format"] ui-input').ui.setValue(e.format),this.root.querySelector('[name="toolID"] ui-input').ui.setValue(e.toolID),this.root.querySelector('[name="press"] ui-select').ui.getOptions().find(a=>parseInt(a.ui.getValue(),10)===e.data.press)}},this.uiStore=document.querySelector("ui-store"),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=this.getData();i!==null&&(this.ui.events.dispatch("submit",i),this.ui.close())}),this.appendChild(t)}getData(){var l;const t={date:(()=>{const u=new Date;return`${u.getFullYear()}-${u.getMonth()+1}-${u.getDate()}`})(),format:"",toolID:"",gistID:"",data:{press:-1,note:"",table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.getValue();const i=this.querySelector('[name="toolID"] ui-input');t.toolID=i.ui.getValue();const r=this.querySelector('[name="press"] ui-select');if(t.data.press=parseInt(((l=r.ui.getSelectedOption())==null?void 0:l.ui.getValue())||"-1",10),t.format==="")return e.ui.setInvalid(!0),null;const s=getKey(t),a=this.uiStore.ui.get("metalSheetLists").find(u=>getKey(u)===s);return a?(e.ui.setInvalid(a.format===t.format&&a.toolID!==t.toolID),i.ui.setInvalid(a.toolID===t.toolID),null):t}};n(Y,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIButton.register(),UIInput.register(),UILabel.register(),UISelect.register(),customElements.get("create-metal-sheet-dialog")||customElements.define("create-metal-sheet-dialog",Y)});let CreateMetalSheetDialog=Y;const gridContent$2=html``,Z=class Z extends UIDialog{constructor(t="Neuer Eintrag"){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$2,e})()),this.ui.setTitle(t),this.ui={...this.ui,root:this,set({header:e,data:i=null}){const r=this.root.querySelector("ui-flex-grid");for(;r.firstChild;)r.removeChild(r.firstChild);for(let s=0;s<e.length;s++){const a=new UIFlexGridItem;a.innerHTML=html`
                        <ui-input
                            title="${e[s]}"
                            value="${(i==null?void 0:i[s])||""}"
                        ></ui-input>
                    `,r.appendChild(a)}}},this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const a=s.querySelector("ui-input");i.push(a.ui.getValue())}this.ui.events.dispatch("submit",i),this.ui.close()}),this.appendChild(t)}};n(Z,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIButton.register(),UIInput.register(),customElements.get("new-metal-sheet-entry-dialog")||customElements.define("new-metal-sheet-entry-dialog",Z)});let NewMetalSheetEntryDialog=Z;const content$g=html`
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
`,X=class X extends UIFlexGridRow{constructor(){super(),this.innerHTML=content$g,this.ui={...this.ui,events:new Events}}connectedCallback(){super.connectedCallback();const t=this.querySelector('[name="new-entry"]'),e=this.querySelector('[name="delete-table"]');this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("new-entry",null)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete-table",null)}))}};n(X,"register",()=>{UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),customElements.define("metal-sheet-actions",X)});let MetalSheetActions=X;const content$f=html`
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
`,Q=class Q extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$f,this.ui.setName("metal-sheet-lists"),this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${t.format} - ${t.toolID}`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.root.list)])],getFileName(this.root.list),{type:"application/json"})],title:"Blech Listen",text:`${this.root.list.format} - ${this.root.list.toolID} - ${this.root.list.date}`}),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{const i=getKey(t);return[...e.filter(r=>getKey(r)!==i),t]})}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const e=new CreateMetalSheetDialog("Liste Bearbeiten");e.ui.set(this.list),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",i=>{i!==null&&(this.ui.set(i),this.ui.updateStore(i))}),document.body.appendChild(e),e.ui.open(!0)}});const t=this.querySelector("metal-sheet-actions");this.cleanup.add(t.ui.events.on("new-entry",()=>this.createNewEntryDialog()),t.ui.events.on("delete-table",()=>{let e="";this.list.toolID?e=`Delete table: ${this.list.format} - ${this.list.toolID}`:e=`Delete table: ${this.list.format}`,window.confirm(e)&&(this.ui.set(null),this.uiStore.ui.update("metalSheetLists",i=>{const r=getKey(this.list);return i.filter(s=>getKey(s)!==r)}))}))}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}render(){const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(this.list===null)return;for(const r of this.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerText=r,t.appendChild(s)}let i=null;for(let r=0;r<this.list.data.table.data.length;r++){const s=document.createElement("tr");s.onclick=()=>this.createEditEntryDialog(r),e.appendChild(s),create$1(s,{onDragEnd:(a,l)=>{if(i!==null){if(i<l){let u=this.list.data.table.data;u=[...u.slice(0,i),...u.slice(i+1,l+1),u[i],...u.slice(l+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(i>l){let u=this.list.data.table.data;u=[...u.slice(0,l),u[i],...u.slice(l,i),...u.slice(i+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(u=>{u.style.background="inherit",u.style.color="inherit"}),i=null}},onDragging:a=>{i!==null&&[...e.children].forEach((l,u)=>{if(u!==a){l.style.background="inherit",l.style.color="inherit";return}l.style.background="var(--ui-primary-bgColor)",l.style.color="var(--ui-primary-color)"})},onDragStart:a=>{i=a}});for(const a of this.list.data.table.data[r]){const l=document.createElement("td");l.style.textAlign="center",l.innerText=a,s.appendChild(l)}}}createEditEntryDialog(t){const e=new NewMetalSheetEntryDialog("Eintrag bearbeiten");e.ui.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",i=>{this.list.data.table.data[t]=i,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new NewMetalSheetEntryDialog;t.ui.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};n(Q,"register",()=>{UIStackLayoutPage.register(),CreateMetalSheetDialog.register(),NewMetalSheetEntryDialog.register(),MetalSheetActions.register(),customElements.define("metal-sheet-lists-page",Q)});let MetalSheetListsPage=Q;const content$e=html``,_=class _ extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$e,this.ui.setName("vis")}};n(_,"register",()=>{UIStackLayoutPage.register(),customElements.define("vis-page",_)});let VisPage=_;const content$d=html``,tt=class tt extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$d,this.ui.setName("vis-data")}};n(tt,"register",()=>{UIStackLayoutPage.register(),customElements.define("vis-data-page",tt)});let VisDataPage=tt;const version="v0.0.15",gridContent$1=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
    </ui-flex-grid-item>
`,et=class et extends UIDialog{constructor(t){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$1,e})()),this.ui.setTitle(`Import "${t}"`),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.getValue()||null),this.ui.close()}),this.appendChild(t)}};n(et,"register",()=>{UIDialog.register(),UIFlexGrid.register(),UIFlexGridItem.register(),UIInput.register(),UIButton.register(),UILabel.register(),customElements.get("import-dialog")||customElements.define("import-dialog",et)});let ImportDialog=et;function sortAlertLists(o){const t=[],e=o.map(i=>`${i.title}`).sort();for(const i of e)t.push(o.find(r=>`${r.title}`===i));return t}function sortMetalSheetLists(o){let t=[];const e=o.map(i=>getKey(i)).sort();for(const i of e)t.push(o.find(r=>getKey(r)===i));return t}function importFile(o){const t=document.createElement("input");t.type="file",t.onchange=async e=>{for(const i of e.currentTarget.files){const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{o(r.result,i)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${i.name}" failed!`)},r.readAsText(i)}},t.click()}const it=class it extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};n(it,"register",()=>{customElements.get("drawer-revision")||customElements.define("drawer-revision",it)});let DrawerRevision=it;const content$c=html`
    <ui-flex-grid gap="0.25rem">
        <ui-flex-grid-item style="position: relative;" gap="0.25rem">
            <div class="flex row align-center justify-between">
                <ui-primary>GistID</ui-primary>
                <drawer-revision></drawer-revision>
            </div>
            <ui-secondary style="overflow-wrap: anywhere;"></ui-secondary>
        </ui-flex-grid-item>

        <ui-flex-grid-row gap="0.25rem">
            <ui-flex-grid-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="secondary"
                    disabled
                >
                    Pull
                </ui-button>
            </ui-flex-grid-item>

            <ui-flex-grid-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="secondary"
                    disabled
                >
                    Push
                </ui-button>
            </ui-flex-grid-item>
        </ui-flex-grid-row>
    </ui-flex-grid>
`,rt=class rt extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$c,this.ui={...this.ui,root:this,set(t,e){t?this.root.style.display="block":this.root.style.display="none";const i=this.root.querySelector("ui-secondary");i.innerText=t||"";const r=this.root.querySelector("drawer-revision");e===null?r.innerHTML="":r.innerHTML=`Revision: ${e}`}}}};n(rt,"register",()=>{UIDrawerGroupItem.register(),UIFlexGrid.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIPrimary.register(),UISecondary.register(),DrawerRevision.register(),customElements.get("drawer-gist-item")||customElements.define("drawer-gist-item",rt)});let DrawerGistItem=rt;class Gist{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const i=await e.json();this.data={revision:i.history.length,files:{},owner:{login:i.owner.login}};for(const[r,s]of Object.entries(i.files))this.data.files[r]={filename:s.filename,content:JSON.parse(s.content)};return this.data}async patch(t){if(!this.id||this.token!==null)return;const e=`https://api.github.com/gists/${this.id}`,r=await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json();return console.warn("[Gist] PATCH",r),r}}const content$b=html`
    <ui-button variant="full" color="primary"> Import </ui-button>
`,_DrawerImportButton=class _DrawerImportButton extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$b,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,storeGistKey:null,onValidate:null,onUpdate:null,button:this.querySelector("ui-button"),setDisabled(o){const t=this.root.querySelector("ui-button");o?t.ui.disable():t.ui.enable()}}}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}attributeChangedCallback(name,_oldValue,newValue){switch(name){case"store-gist-key":this.ui.storeGistKey=newValue;break;case"on-validate":newValue===null?this.ui.onValidate=null:this.ui.onValidate=eval(newValue);break;case"on-update":newValue===null?this.ui.onUpdate=null:this.ui.onUpdate=eval(newValue);break;case"disabled":this.ui.setDisabled(newValue!==null);break}}async onClick(){const o=new ImportDialog("Blech Listen");o.ui.events.on("submit",async t=>{if(this.ui.onValidate===null)throw new Error("onValidate callback missing");if(this.ui.onUpdate===null)throw new Error("onUpdate callback missing");if(t===null){importFile(async r=>{let s=JSON.parse(r);try{s=await this.ui.onValidate(s,null)}catch(a){alert(`Validation failed: ${a}`);return}await this.ui.onUpdate(s)});return}if(this.ui.storeGistKey===null)throw new Error("gist-key missing");const e=new Gist(t);let i;try{i=await e.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storeGistKey}`]={id:t,revision:i.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in i.files)i.files[r].content=await this.ui.onValidate(i.files[r].content,e.id)}catch(r){alert(`Validation failed: ${r}`);return}for(const r of Object.values(i.files))await this.ui.onUpdate(r.content)}),o.ui.events.on("close",()=>{document.body.removeChild(o)}),document.body.appendChild(o),o.ui.open(!0)}};n(_DrawerImportButton,"register",()=>{UIDrawerGroupItem.register(),UIButton.register(),ImportDialog.register(),customElements.get("drawer-import-button")||customElements.define("drawer-import-button",_DrawerImportButton)}),n(_DrawerImportButton,"observedAttributes",["store-gist-key","on-validate","on-update","disabled"]);let DrawerImportButton=_DrawerImportButton;const content$a=html`
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
`,st=class st extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$a,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title)}setText(t){const e=document.createElement("span");e.innerHTML=html` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};n(st,"register",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-alert-list",st)});let PGDrawerItemAlertList=st;async function enableGistItem(o,t){this.querySelector("drawer-gist-item").ui.set(o,t)}async function disableGistItem(){this.querySelector("drawer-gist-item").ui.set(null,null)}const content$9=html`
    <drawer-import-button store-gist-key="alert-lists"></drawer-import-button>
    <drawer-gist-item style="display: none;"></drawer-gist-item>
`,ot=class ot extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$9,this.style.position="relative",this.ui.setTitle("Alarm Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("gist",e=>{if(!e)return;const i=e["alert-lists"];i?enableGistItem.bind(this)(i.id,i.revision):disableGistItem.bind(this)()}),this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this)}async validate(t,e=null){const i=r=>new Error(`invalid data for alert:
${JSON.stringify(r,null,4)}`);if(typeof(t==null?void 0:t.date)!="string")throw new Error('invalid data: missing "date" from type "string"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');typeof(t==null?void 0:t.gistID)!="string"&&(t.gistID=e),Object.hasOwn(t,"data")||(t.data=[]);for(let r=0;r<t.data.length;r++){const s=t.data[r];if(typeof s.from!="number"||typeof s.to!="number"||typeof s.alert!="string"||!Array.isArray(s.desc)||(typeof s.desc=="string"&&(s.desc=s.desc.split(`
`)),s.desc.filter(a=>typeof a!="string").length)||typeof s.note!="string"&&s.note)throw i(s)}return t}async update(t){const e=t.title;if(this.uiStore.ui.get("alertLists").find(i=>i.title===e)){if(!window.confirm(`Replace data: ${t.title}?`))return;this.uiStore.ui.update("alertLists",i=>i.map(r=>r.title===e?t:r));return}this.uiStore.ui.update("alertLists",i=>[...i,t])}async onAlertLists(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of sortAlertLists(t)){const r=new PGDrawerItemAlertList;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",a=>{a.ui.set(i)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("alertLists",s=>s.filter(a=>a.title!==i.title))})),this.appendChild(r)}}};n(ot,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),UISecondary.register(),DrawerImportButton.register(),DrawerGistItem.register(),PGDrawerItemAlertList.register(),ImportDialog.register(),customElements.define("pg-drawer-alert-lists",ot)});let PGDrawerAlertLists=ot;const content$8=html`
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
`,nt=class nt extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$8,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.format,t.toolID,t.data.press)}setText(t,e,i){const r=document.createElement("span");r.innerHTML=html` <ui-primary>${t}</ui-primary><br />`,r.innerHTML+=html`
            <ui-secondary>
                <span>${e}</span>
                <span>${i>-1?"[P"+i+"]":""}</span>
            </ui-secondary>
        `,this.querySelector("ui-button").appendChild(r)}};n(nt,"register",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-metal-sheet-list",nt)});let PGDrawerItemMetalSheetList=nt;const content$7=html`
    <ui-button variant="full" color="secondary">Neu</ui-button>
`,at=class at extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$7,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,button:this.querySelector("ui-button")}}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}onClick(){const t=new CreateMetalSheetDialog;t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",i=>[...i,e])}),document.body.appendChild(t),t.ui.open(!0)}};n(at,"register",()=>{UIDrawerGroupItem.register(),UIButton.register(),CreateMetalSheetDialog.register(),customElements.get("drawer-new-metal-sheet-list-button")||customElements.define("drawer-new-metal-sheet-list-button",at)});let DrawerNewMetalSheetListButton=at;const content$6=html`
    <drawer-import-button
        store-gist-key="metal-sheet-lists"
    ></drawer-import-button>
    <drawer-gist-item style="display: none;"></drawer-gist-item>
    <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
`,lt=class lt extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$6,this.style.position="relative",this.ui.setTitle("Blech Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("gist",e=>{if(!e)return;const i=e["metal-sheet-lists"];i?enableGistItem.bind(this)(i.id,i.revision):disableGistItem.bind(this)()},!0),this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this)}async validate(t,e=null){if(typeof(t==null?void 0:t.date)!="string")throw new Error('invalid data: missing "date" from type "string"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),typeof(t==null?void 0:t.gistID)!="string"&&(t.gistID=e),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),typeof t.data.note!="string"&&(t.data.note=""),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){const e=getKey(t);if(this.uiStore.ui.get("metalSheetLists").find(i=>getKey(i)===e)){if(!window.confirm(`Replace data: "${t.format} - ${t.toolID}"?`))return;this.uiStore.ui.update("metalSheetLists",i=>i.map(r=>getKey(r)===e?t:r));return}this.uiStore.ui.update("metalSheetLists",i=>[...i,t])}async onMetalSheetLists(t){if(!t)return;const e=[...this.children].slice(3);for(;e.length>0;)this.removeChild(e.pop());for(const i of sortMetalSheetLists(t)){const r=new PGDrawerItemMetalSheetList;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists",a=>{a.ui.set(i)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(a=>getKey(a)!==getKey(i)))})),this.appendChild(r)}}};n(lt,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),DrawerImportButton.register(),DrawerGistItem.register(),PGDrawerItemMetalSheetList.register(),ImportDialog.register(),DrawerNewMetalSheetListButton.register(),customElements.define("pg-drawer-metal-sheet-lists",lt)});let PGDrawerMetalSheetLists=lt;const content$5=html`
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
`,ut=class ut extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$5,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(ut,"regsiter",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-vis",ut)});let PGDrawerItemVis=ut;const content$4=html`
    <drawer-import-button gist-key="vis" disabled></drawer-import-button>
`,ct=class ct extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$4,this.ui.setTitle("Vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this)}async validate(t,e=null){return t}async update(t){}onVis(t){if(!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new PGDrawerItemVis;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("vis",s=>s.filter(a=>a.title!==i.title))}))}}};n(ct,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),DrawerImportButton.register(),PGDrawerItemVis.register(),customElements.define("pg-drawer-vis",ct)});let PGDrawerVis=ct;const gridContent=html`
    <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
    </ui-flex-grid-item>
`,ht=class ht extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.getValue(),data:[]}),i)),this.ui.close()}),this.appendChild(t)}};n(ht,"register",()=>{UIFlexGrid.register(),UIFlexGridItem.register(),UIInput.register(),UIButton.register(),UIStore.register(),UIDialog.register(),customElements.define("new-vis-data-dialog",ht)});let NewVisDataDialog=ht;const content$3=html`
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
`,dt=class dt extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$3,this.ui={...this.ui,events:new Events},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(dt,"regsiter",()=>{SvgTrash.register(),UIDrawerGroupItem.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),customElements.define("pg-drawer-item-vis-data",dt)});let PGDrawerItemVisData=dt;const content$2=html`
    <drawer-import-button gist-key="vis-data" disabled></drawer-import-button>

    <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
            New Data
        </ui-button>
    </ui-drawer-group-item>
`,pt=class pt extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$2,this.ui.setTitle("Vis Data"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}async validate(t,e=null){return t}async update(t){}onVisData(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new PGDrawerItemVisData;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(a=>a.title!==i.title))}))}}onClickNewData(){const t=new NewVisDataDialog;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};n(pt,"register",()=>{UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),DrawerImportButton.register(),PGDrawerItemVisData.register(),NewVisDataDialog.register(),customElements.define("pg-drawer-vis-data",pt)});let PGDrawerVisData=pt;const content$1=html`
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
`,gt=class gt extends UIDrawer{constructor(){super(),this.innerHTML=content$1}getGroup(t){return this.querySelector(`pg-drawer-${t.toString()}`)}};n(gt,"register",()=>{UIDrawer.register(),PGDrawerAlertLists.register(),PGDrawerMetalSheetLists.register(),PGDrawerVis.register(),PGDrawerVisData.register(),customElements.define("pg-drawer",gt)});let PGDrawer=gt;const content=html`
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
`,mt=class mt extends HTMLElement{constructor(){super(),this.innerHTML=content,this.cleanup=new CleanUp,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.pgAppBar.ui.items.back.ui.enable():this.pgAppBar.ui.items.back.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":this.setupMetalSheetListsPage();break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new AlertListsPage),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new MetalSheetListsPage),this.stackLayout.ui.registerPage("vis",()=>new VisPage),this.stackLayout.ui.registerPage("vis-data",()=>new VisDataPage)}setupMetalSheetListsPage(){this.pgAppBar.ui.items.edit.ui.enable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}setupAlertPage(){this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}setupAlertListsPage(){this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.enable()}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgAppBar.ui.items.edit.ui.disable(),this.pgAppBar.ui.items.share.ui.disable(),this.pgAppBar.ui.items.search.ui.disable()}async onAppBarTitle(t){this.pgAppBar.ui.items.title.ui.getChild().innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.ui.items.share.ui.enable():this.pgAppBar.ui.items.share.ui.disable()}};n(mt,"register",()=>{UIStore.register(),UIThemeHandler.register(),UIFlexGridRow.register(),UIFlexGridItem.register(),UIContainer.register(),UIStackLayout.register(),UIDrawer.register(),UIDrawerGroup.register(),UIDrawerGroupItem.register(),UIButton.register(),UIIconButton.register(),UIPrimary.register(),UISecondary.register(),PGAppBar.register(),PGDrawer.register(),AlertListsPage.register(),MetalSheetListsPage.register(),VisPage.register(),VisDataPage.register(),customElements.define("pg-app",mt)});let PGApp=mt;registerSW({onRegistered(o){setTimeout(async()=>{try{await o.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});PGApp.register();
