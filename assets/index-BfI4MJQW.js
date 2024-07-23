var De=Object.defineProperty;var Ae=L=>{throw TypeError(L)};var Be=(L,t,e)=>t in L?De(L,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):L[t]=e;var F=(L,t,e)=>Be(L,typeof t!="symbol"?t+"":t,e),ze=(L,t,e)=>t.has(L)||Ae("Cannot "+e);var bt=(L,t,e)=>(ze(L,t,"read from private field"),e?e.call(L):t.get(L)),Le=(L,t,e)=>t.has(L)?Ae("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(L):t.set(L,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const defaultOptions$1={onDragStart:null,onDragging:null,onDragEnd:null};function create$1(L,t={}){t={...defaultOptions$1,...t};const e=()=>{const r=[...L.parentNode.children].indexOf(L);L.draggable=!0,L.ondragstart=a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData("text/plain",r.toString()),t.onDragStart&&t.onDragStart(r)},L.ondragover=a=>(a.preventDefault(),!1),L.ondragenter=a=>{a.preventDefault(),t.onDragging&&t.onDragging(r)},L.ondrop=a=>{a.preventDefault(),a.dataTransfer.dropEffect="move";const l=parseInt(a.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(l,r)}},s=()=>{L.draggable=!1,L.ondragstart=null,L.ondragover=null,L.ondragenter=null,L.ondrop=null};return e(),{update(n){t={...defaultOptions$1,...n},s(),e()},destroy:s}}var pt;class Events{constructor(){Le(this,pt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return bt(this,pt)[t]||(bt(this,pt)[t]=[]),bt(this,pt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!bt(this,pt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let s=!1,n=0;for(const r of bt(this,pt)[t])r===e&&(bt(this,pt)[t].splice(n,1),s=!0),n++;if(!s)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(bt(this,pt)[t])for(const s of bt(this,pt)[t])s(e);return this}}pt=new WeakMap;function rippleStart(L,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,L.currentTarget.appendChild(e);const s=L.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${s.height/2}px`,e.style.left=`${s.width/2}px`):(e.style.top=`${L.clientY-s.top}px`,e.style.left=`${L.clientX-s.left}px`);const n=Math.max(s.width,s.height)*.02;return e.style.transform=`scale(${n}) translate(0, 0)`,e}function rippleStop(L){L&&(L.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&L.remove()}),L.style.opacity="0")}const defaultOptions={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function create(L,t={}){t={...defaultOptions,...t};let e;const s=r=>{e=rippleStart(r,t)},n=()=>{rippleStop(e)};return L.classList.add("ripple-container"),L.style.overflow="hidden",t.useClick===!0?L.addEventListener("click",r=>{e=rippleStart(r,t),rippleStop(e)}):(L.addEventListener("pointerdown",s),L.addEventListener("pointerup",n),L.addEventListener("pointerleave",n)),()=>{L.classList.remove("ripple-container"),L.removeEventListener("pointerdown",s),L.removeEventListener("pointerup",n),L.removeEventListener("pointerleave",n)}}const html=String.raw;class CleanUp{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
                    padding-left: var(--ui-spacing);
                    padding-right: var(--ui-spacing);
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
        `}render(){}};F($t,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",$t)});let UIAppBar=$t;const Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `}render(){}};F(Ft,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ft)});let UIAppBarItem=Ft;const kt=class kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.renderCleanUp=new CleanUp,this.removeRippleCallback=null,this.ui={root:this,events:new Events,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `}render(){this.renderCleanUp.run(),this.setAttribute("role","button");const t=async()=>this.ui.events.dispatch("click",this);this.renderCleanUp.add(()=>this.removeEventListener("click",t)),this.addEventListener("click",t)}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=create(this,{centered:!0}));break}}};F(kt,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",kt)}),F(kt,"observedAttributes",["noripple"]);let UIButton=kt;const _t=class _t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.renderCleanUp=new CleanUp,this.removeRippleCallback=null,this.ui={root:this,events:new Events,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: flex !important;
                    align-items: center;
                    justify-content: center;
                    position: relative;
                    width: 2.5rem;
                    height: 2.5rem;
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

            <ui-svg>
                <slot></slot>
            </ui-svg>
        `}render(){this.renderCleanUp.run(),this.setAttribute("role","button");const t=async()=>this.ui.events.dispatch("click",this);this.renderCleanUp.add(()=>this.removeEventListener("click",t)),this.addEventListener("click",t)}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=create(this,{centered:!0}));break}}};F(_t,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",_t)}),F(_t,"observedAttributes",["noripple"]);let UIIconButton=_t;const Ht=class Ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `}render(){}};F(Ht,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ht)});let UIContainer=Ht;const svgClose=html`
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
`,St=class St extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new CleanUp,this.ui={root:this,events:new Events,get title(){return this.root.getAttribute("title")},set title(t){this.root.setAttribute("title",t||"")},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const s=this.root.shadowRoot.querySelector("dialog"),n=s.inert;s.inert=e,t?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender(),this.render()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=html`
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
                        <span style="white-space: nowrap;">
                            <h3 name="title"></h3>
                        </span>

                        <ui-icon-button
                            style="width: var(--ui-dialog-header-height); height: 100%;"
                            ghost
                        >
                            ${svgClose}
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
        `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const s=this.shadowRoot.querySelector("dialog"),n=r=>r.preventDefault();s.addEventListener("cancel",n),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),s.removeEventListener("cancel",n)})}render(){}attributeChangedCallback(t,e,s){switch(t){case"title":const n=this.shadowRoot.querySelector('[name="title"]');n.innerHTML=s||"";break}}};F(St,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",St)}),F(St,"observedAttributes",["title"]);let UIDialog=St;const xt=class xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.renderCleanUp=new CleanUp,this.ui={root:this,events:new Events,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: block;

                    position: absolute !important;
                    z-index: 150;
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
                    z-index: 150;
                    top: 0;
                    left: -100%;
                    width: var(--ui-drawer-width, fit-content);
                    max-width: 100%;
                    height: 100%;

                    overflow-x: hidden;
                    overflow-y: auto;
                    scroll-behavior: smooth;

                    -ms-overflow-style: none;
                    scrollbar-width: none;

                    background-color: var(--ui-card-bgColor);
                    color: var(--ui-card-color);

                    /*
                    background-color: var(--ui-backdrop-bgColor);
                    -webkit-backdrop-filter: var(--ui-backdropFilter);
                    backdrop-filter: var(--ui-backdropFilter);
                    */

                    border-right: 1px solid var(--ui-card-borderColor);

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
        `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation())}render(){this.renderCleanUp.run();const t=()=>{this.ui.open=!1};this.addEventListener("click",t),this.renderCleanUp.add(()=>{this.removeEventListener("click",t)})}attributeChangedCallback(t,e,s){switch(t){case"open":s!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}};F(xt,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",xt)}),F(xt,"observedAttributes",["open"]);let UIDrawer=xt;const Ct=class Ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `}render(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setGroupTitle(s);break}}setGroupTitle(t){let e=this.shadowRoot.querySelector(".ui-drawer-group-title");if(!t){e.classList.remove("visible");return}e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}};F(Ct,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Ct)}),F(Ct,"observedAttributes",["title"]);let UIDrawerGroup=Ct;const jt=class jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `}render(){}};F(jt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",jt)});let UIDrawerGroupItem=jt;const Et=class Et extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get flex(){return this.root.getAttribute("flex")},set flex(t){if(!t){this.root.removeAttribute("flex");return}this.root.setAttribute("flex",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
            <style name="flex">
                :host {
                    flex: 1;
                }
            </style>

            <slot></slot>
        `}render(){}attributeChangedCallback(t,e,s){switch(t){case"flex":const n=this.shadowRoot.querySelector('style[name="flex"]');n.textContent=`
                    :host {
                        flex: ${s||1};
                    }
                `;break}}};F(Et,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",Et)}),F(Et,"observedAttributes",["flex"]);let UIFlexGridItem=Et;const At=class At extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: flex !important;
                    flex-flow: row nowrap;
                    position: relative !important;
                    width: 100%;
                }
            </style>

            <style name="gap">
                :host > ::slotted(*) {
                    margin: 0 0 !important;
                }
            </style>

            <style>
                :host > ::slotted(*:first-child) {
                    margin-left: 0 !important;
                }

                :host > ::slotted(*:last-child) {
                    margin-right: 0 !important;
                }
            </style>

            <slot></slot>
        `}render(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const n=this.shadowRoot.querySelector('style[name="gap"]');n.textContent=`
                    :host > ::slotted(*) {
                        margin: 0 ${s||0} !important;
                    }
                `;break}}};F(At,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",At)}),F(At,"observedAttributes",["gap"]);let UIFlexGridRow=At;const Lt=class Lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: flex !important;
                    flex-flow: column nowrap;
                    position: relative !important;
                    width: 100%;
                    height: fit-content;
                }
            </style>

            <style name="gap">
                :host > ::slotted(*) {
                    margin: 0 0 !important;
                }
            </style>

            <style>
                :host > ::slotted(*:first-child) {
                    margin-top: 0 !important;
                }

                :host > ::slotted(*:last-child) {
                    margin-bottom: 0 !important;
                }
            </style>

            <slot></slot>
        `}render(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const n=this.shadowRoot.querySelector('style[name="gap"]');n.textContent=`
                    :host > ::slotted(*) {
                        margin: ${s} 0 !important;
                    }
                `;break}}};F(Lt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Lt)}),F(Lt,"observedAttributes",["gap"]);let UIFlexGrid=Lt;const Nt=class Nt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Nt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Nt)});let UIPrimary=Nt;const qt=class qt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(qt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",qt)});let UISecondary=qt;const Tt=class Tt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
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
    `);F(this,"shadowTemplate",()=>html`
        <span class="text">
            <ui-primary></ui-primary>
            <ui-secondary></ui-secondary>
        </span>

        <span class="input">
            <slot name="input"></slot>
            <slot></slot>
        </span>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(e=>e.click())},onInputClick:async e=>{e.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(e){if(e===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",e)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(e){if(e===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",e)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),this.getInputSlot().forEach(e=>{e.removeEventListener("click",this.onInputClick)}),this.running=!1}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(e,s,n){switch(e){case"ripple":n!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=n||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=n||"";break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Tt,"register",()=>{UIPrimary.register(),UISecondary.register(),customElements.get("ui-label")||customElements.define("ui-label",Tt)}),F(Tt,"observedAttributes",["ripple","secondary","primary"]);let UILabel=Tt;const It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new Events,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get type(){return this.root.getAttribute("type")},set type(t){if(!t){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.root.shadowRoot.querySelector("input").min},set min(t){this.root.shadowRoot.querySelector("input").min=t},get max(){return this.root.shadowRoot.querySelector("input").max},set max(t){this.root.shadowRoot.querySelector("input").max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `;const t=this.shadowRoot.querySelector("input");t.type=this.getAttribute("type")||"text",t.oninput=()=>{this.ui.events.dispatch("input",t.value)},t.onchange=()=>{this.ui.events.dispatch("change",t.value)}}render(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"type":this.setType(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"min":this.setMin(s);break;case"max":this.setMax(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new UISecondary,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setType(t){this.shadowRoot.querySelector("input").type=t!==null?t:""}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setMin(t){this.shadowRoot.querySelector("input").min=t}setMax(t){this.shadowRoot.querySelector("input").max=t}};F(It,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",It)}),F(It,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let UIInput=It;const svgChevronDown=html`
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
`,Gt=class Gt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
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
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.setAttribute("role","button"),this.ui={root:this,getValue(){return this.root.getAttribute("value")},setValue(e){if(e===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",e)},getSelected(){return this.root.hasAttribute("selected")},setSelected(e){if(!e){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Gt,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",Gt)});let UISelectOption=Gt;const Vt=class Vt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
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
    `);F(this,"shadowTemplate",()=>html`
        <div class="options">
            <div class="icon"><ui-svg>${svgChevronDown}</ui-svg></div>

            <slot></slot>
        </div>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,events:new Events,isOpen(){this.root.hasAttribute("open")},open(){this.root.setAttribute("open","")},close(){this.root.removeAttribute("open")},getOptions(){return[...this.root.children].filter(e=>e instanceof UISelectOption)},getSelectedOption(){try{return this.getOptions().find(e=>!!e.ui.getSelected())||null}catch{return null}}},this.cleanup=new CleanUp,this.shadowRender()}connectedCallback(){const e=this.shadowRoot.querySelector(".options"),s=async r=>{(r.composedPath()||[]).forEach(a=>{a instanceof UISelectOption&&([...this.querySelectorAll("ui-select-option")].forEach(l=>l.removeAttribute("selected")),a.setAttribute("selected",""),this.ui.events.dispatch("change",a))})},n=r=>{this.classList.toggle("open")?(r.stopPropagation(),this.addEventListener("click",s)):setTimeout(()=>this.removeEventListener("click",s))};e.addEventListener("click",n),this.cleanup.add(()=>{this.removeEventListener("click",n),e.removeEventListener("click",n)}),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}disconnectedCallback(){this.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Vt,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Vt)});let UISelect=Vt;const svgSearch=html`
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
`,Rt=class Rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new Events,focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.root.hasAttribute("nosubmit")},set nosubmit(t){if(!t){this.root.removeAttribute("nosubmit");return}this.root.setAttribute("nosubmit","")},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.getAttribute("storagekey")},set storagekey(t){if(!t){this.root.removeAttribute("storagekey");return}this.root.setAttribute("storagekey",t)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=`
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

                :host(:not([nosubmit])) input {
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
                <ui-icon-button name="submit" ghost>${svgSearch}</ui-icon-button>
            </div>
        `;const t=this.shadowRoot.querySelector('[name="submit"]'),e=this.shadowRoot.querySelector("input");e.type="search",e.addEventListener("keydown",async n=>{this.ui.nosubmit||n.key==="Enter"&&t.click()});let s=null;e.addEventListener("input",async()=>{this.ui.storage&&(s!==null&&clearTimeout(s),s=setTimeout(()=>{localStorage.setItem((this.ui.storageprefix||"")+this.ui.storagekey,e.value),s=null},250)),this.ui.events.dispatch("input",e.value)}),e.addEventListener("change",async()=>{this.ui.events.dispatch("change",e.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",e.value)})}render(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"nosubmit":this.setNoSubmit(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new UISecondary,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setNoSubmit(t){const e=this.shadowRoot.querySelector('[name="submit"]');if(t===null){e.style.display="none";return}e.style.display=null}};F(Rt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Rt)}),F(Rt,"observedAttributes",["title","value","placeholder","invalid","nosubmit"]);let UISearch=Rt;const Zt=class Zt extends HTMLElement{constructor(){super(),this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){if(t===null){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},getHref(){return this.root.getAttribute("href")},setHref(t){if(t===null){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},getFallback(){return this.root.hasAttribute("fallback")},setFallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}}}};F(Zt,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Zt)});let UILangType=Zt;const Dt=class Dt extends HTMLElement{constructor(){super(),this.ui={root:this,events:new Events,data:{},langType:null,getCurrent(){return this.root.getAttribute("current")},setCurrent(t){if(t===null){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},getFallbackElement(){return this.root.querySelector("ui-lang-type[fallback]")},new(t,e){this.langType=t,this.data=e,this.events.dispatch("change",this.langType)},get(t,e){var s,n;return((n=(s=this.data)==null?void 0:s[t])==null?void 0:n[e])||null},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.langType),this.events.on(t,e)}}}attributeChangedCallback(t,e,s){switch(t){case"current":s!==null&&this.loadLanguage(s);break}}async loadLanguage(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.getFallbackElement();if(!e)return;if(!e.ui.getHref())throw"Missing href attribute!";const s=await fetch(e.ui.getHref());this.ui.new(e,await s.json())}};F(Dt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Dt)}),F(Dt,"observedAttributes",["current"]);let UILang=Dt;const Wt=class Wt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
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
    `);F(this,"shadowTemplate",()=>html`
        <div class="background"></div>
        <div class="spinner"></div>
    `);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Wt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Wt)});let UISpinner=Wt;const Kt=class Kt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
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
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,getName(){return this.root.getAttribute("name")},setName(e){e===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",e)}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Kt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",Kt)});let UIStackLayoutPage=Kt;const Bt=class Bt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,pages:{},stack:[],onpopstate:null,events:new Events,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(e,s){this.pages[e]=s},unregisterPage(e){delete this.pages[e]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const e=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(e)},setPage(e,s=null,n=!1){if(this.lock)return;const r=this.pages[e]();this.stack.push(this.root.appendChild(r)),typeof s=="function"&&setTimeout(()=>s(r));let a=null;this.stack.length>1&&!n&&(a=this.stack[this.stack.length-2],a.parentElement.removeChild(a)),this.dispatchChangeEvent(a),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(e){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:e||this.stack[this.stack.length-2]||null})}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(e,s,n){switch(e){case"use-history":n!==null?this.ui.enableHistory():this.ui.disableHistory();break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Bt,"register",()=>{UIStackLayoutPage.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Bt)}),F(Bt,"observedAttributes",["use-history"]);let UIStackLayout=Bt;const zt=class zt extends HTMLElement{constructor(){super(),this.ui={root:this,useStorage:!1,storagePrefix:null,stores:{},events:new Events,get(t){return this.stores[t]},set(t,e,s=!1){if(s&&this.storagePrefix){const n=JSON.parse(localStorage.getItem((this.storagePrefix||"")+t.toString())||"null");this.stores[t]=n??e}else this.stores[t]=e;this.useStorage&&localStorage.setItem((this.storagePrefix||"")+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.get(t)),this.events.on(t,e)}}}attributeChangedCallback(t,e,s){switch(t){case"use-storage":this.ui.useStorage=s!==null;break;case"storage-prefix":this.ui.storagePrefix=s;break}}};F(zt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",zt)}),F(zt,"observedAttributes",["use-storage","storage-prefix"]);let UIStore=zt;const Pt=class Pt extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},getMode(t=document.body){return t.getAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}},mediaChangeHandler:t=>{t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},getAuto(){return!!this.media},setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null;return}if(this.setMode(null,e),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},addTheme(t,e){this.themes[t]=e},setTheme(t){var s;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((s=this.currentTheme)==null?void 0:s.name)==t)return;{const n=document.getElementById("theme");n&&(document.head.removeChild(n),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}}}attributeChangedCallback(t,e,s){switch(t){case"auto":this.ui.setAuto(s!==null);break;case"mode":this.ui.setMode(s);break}}};F(Pt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Pt)}),F(Pt,"observedAttributes",["auto","mode"]);let UIThemeHandler=Pt;const Jt=class Jt extends HTMLElement{constructor(){super();F(this,"shadowCSS",()=>`
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    `);F(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};F(Jt,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",Jt)});let UISvg=Jt;function register(){UIAppBarItem.register(),UIAppBar.register(),UIButton.register(),UIIconButton.register(),UIContainer.register(),UIDialog.register(),UIDrawerGroupItem.register(),UIDrawerGroup.register(),UIDrawer.register(),UIFlexGridItem.register(),UIFlexGridRow.register(),UIFlexGrid.register(),UIInput.register(),UISearch.register(),UISelectOption.register(),UISelect.register(),UILangType.register(),UILang.register(),UISpinner.register(),UIStackLayout.register(),UIStackLayoutPage.register(),UIStore.register(),UISvg.register(),UILabel.register(),UIPrimary.register(),UISecondary.register(),UIThemeHandler.register()}const scriptRel="modulepreload",assetsURL=function(L){return"/pg-vis.github.io/"+L},seen={},__vitePreload=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.all(e.map(l=>{if(l=assetsURL(l),l in seen)return;seen[l]=!0;const h=l.endsWith(".css"),b=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const w=document.createElement("link");if(w.rel=h?"stylesheet":scriptRel,h||(w.as="script",w.crossOrigin=""),w.href=l,a&&w.setAttribute("nonce",a),document.head.appendChild(w),h)return new Promise((f,g)=>{w.addEventListener("load",f),w.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return n.then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};function registerSW(L={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:a}=L;let l,h;const b=async(f=!0)=>{await h};async function w(){if("serviceWorker"in navigator){if(l=await __vitePreload(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(f=>{a==null||a(f)}),!l)return;l.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),l.addEventListener("installed",f=>{f.isUpdate||s==null||s()}),l.register({immediate:t}).then(f=>{r?r("/pg-vis.github.io/sw.js",f):n==null||n(f)}).catch(f=>{a==null||a(f)})}}return h=w(),b}const gridContent$5=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
    </ui-flex-grid-item>
`,Yt=class Yt extends UIDialog{constructor(t){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.gap="0.5rem",e.innerHTML=gridContent$5,e})()),this.ui.title=`Import "${t}"`,this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};F(Yt,"register",()=>{customElements.define("import-dialog",Yt)});let ImportDialog=Yt;const gridContent$4=html`
    <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
    </ui-flex-grid-item>
`,Xt=class Xt extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.gap="0.5rem",t.innerHTML=gridContent$4,t})()),this.ui.title="New Vis Data",this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",s=>(s.unshift({title:this.name.ui.value,data:[]}),s)),this.ui.close()}),this.appendChild(t)}};F(Xt,"register",()=>{customElements.define("new-vis-data-dialog",Xt)});let NewVisDataDialog=Xt;const gridContent$3=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
    </ui-flex-grid-item>
`,Qt=class Qt extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.gap="0.5rem",t.innerHTML=gridContent$3,t})()),this.ui.title="Gist Token",this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};F(Qt,"register",()=>{customElements.define("push-dialog",Qt)});let PushDialog=Qt;const content$g=html`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,te=class te extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$g,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.ui.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(createAlert({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};F(te,"register",()=>{customElements.define("alert-page",te)});let AlertPage=te;const ee=class ee extends UIStackLayoutPage{constructor(){super();F(this,"template",()=>html`
        <search-bar title="Alarmsuche (RegEx Mode)"></search-bar>

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
    `);this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.list=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new AlertPage,this.ui={...this.ui,root:this,get(){return this.root.list},set(e){const s=(e==null?void 0:e.title)||"";this.root.list=e||null,this.root.uiStore.ui.set("appBarTitle",s),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input.ui.storagekey=getKey$2(this.root.list),setTimeout(()=>this.root.renderList())}},this.render()}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:s})=>{this.searchBar.ui.active=s,await this.search(s?this.searchBar.ui.input.ui.value:"")});let e=null;this.ui.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async s=>{e!==null&&clearTimeout(e),e=setTimeout(async()=>{await this.search(s)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}render(){this.innerHTML=`${this.template().trim()}`,this.searchBar=this.querySelector("search-bar")}async renderList(){const e=this.querySelector("ul");for(;e.children.length>0;)e.removeChild(e.firstChild);const s=this.uiStore.ui.get("search"),n=new RegExp(this.searchBar.ui.input.ui.value.replaceAll(" ",".*"));for(let r=0;r<this.list.data.length;r++){if(s.active===!0&&!this.is(this.list.data[r],n))return;setTimeout(()=>this.renderListElement(e,this.list.data[r],r<this.list.data.length-1))}}renderListElement(e,s,n){e.appendChild(createAlert({alert:s,container:"li",hasBorder:n,onClick:this.onClick.bind(this)}))}getAlertFromElement(e){return{from:parseInt(e.getAttribute("data-from"),10),to:parseInt(e.getAttribute("data-to"),10),alert:e.getAttribute("data-alert"),desc:e.getAttribute("data-desc").split(`
`)}}is(e,s){const n=[];for(let r=e.from;r<=e.to;r++)n.push(r);return!!`${n.join(",")} ${e.alert}`.match(s)}async onClick(e){const s=e.currentTarget,n=this.getAlertFromElement(s);this.alertPage.ui.set(n),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(e){const s=new RegExp(e.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(n=>{if(!this.searchBar.ui.active){n.style.display="flex";return}if(this.is(this.getAlertFromElement(n),s)){n.style.display="flex";return}n.style.display="none"})}};F(ee,"register",()=>{customElements.define("alert-lists-page",ee)});let AlertListsPage=ee;function createAlert({alert:L,container:t,hasBorder:e=!0,hasRipple:s=!0,onClick:n=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=`
        <div class="title">${L.alert}</div>

        <div
            class="number"
            style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
        >
            ${L.from===L.to?L.from:`${L.from}..${L.to}`}
        </div>
    `,r.setAttribute("data-from",L.from.toString()),r.setAttribute("data-to",L.to.toString()),r.setAttribute("data-alert",L.alert),r.setAttribute("data-desc",L.desc.join(`
`)),r.onclick=n,s&&(create(r),r.style.cursor="pointer",r.role="button"),r}function getFileName$2(L){return`AlarmListen_${L.title}.json`}function getKey$2(L){return`${L.title}`}const content$f=html`
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
`,ie=class ie extends UIFlexGridRow{constructor(){super(),this.events=new Events}render(){super.render(),this.innerHTML=content$f,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)}),this.querySelector('[name="delete-table"]').addEventListener("click",()=>{this.events.dispatch("delete-table",null)})}};F(ie,"register",()=>{customElements.define("metal-sheet-actions",ie)});let MetalSheetActions=ie;function getFileName$1(L){return`BlechListen_${L.format}_${L.toolID}.json`}function getKey$1(L){return`${L.format}:${L.toolID}`}const gridContent$2=html`
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
`,re=class re extends UIDialog{constructor(t){switch(super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.gap="0.5rem",e.innerHTML=gridContent$2,e})()),t){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}this.ui={...this.ui,root:this,mode:t,originFormat:"",originToolID:"",set(e,s,n=-1){const r=this.root.querySelector('[name="format"] ui-input');r.ui.value=e;const a=this.root.querySelector('[name="toolID"] ui-input');a.ui.value=s,this.root.querySelector('[name="press"] ui-select').ui.getOptions().forEach(h=>{h.ui.setSelected(parseInt(h.ui.getValue())===n)}),this.originFormat=e,this.originToolID=s}},this.uiStore=document.querySelector("ui-store"),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=this.getData();s!==null&&(this.ui.events.dispatch("submit",s),this.ui.close())}),this.appendChild(t)}getData(){var h;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const s=this.querySelector('[name="toolID"] ui-input');t.toolID=s.ui.value;const n=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((h=n.ui.getSelectedOption())==null?void 0:h.ui.getValue())||"-1",10),t.format==="")return e.ui.invalid=!0,null;const r=getKey$1({format:this.ui.originFormat,toolID:this.ui.originToolID}),a=getKey$1(t),l=this.uiStore.ui.get("metalSheetLists").find(b=>this.ui.mode==="edit"&&r===a?!1:getKey$1(b)===a);return l?(e.ui.invalid=l.format===t.format&&l.toolID!==t.toolID,s.ui.invalid=l.toolID===t.toolID,null):t}};F(re,"register",()=>{customElements.define("metal-sheet-create-dialog",re)});let MetalSheetCreateDialog=re;const gridContent$1=html``,se=class se extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.gap="0.5rem",t.innerHTML=gridContent$1,t})()),this.ui.title="Eintrag bearbeiten",this.ui={...this.ui,root:this,set({header:t,data:e=null}){const s=this.root.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new UIFlexGridItem;r.innerHTML=html`
                        <ui-input
                            title="${t[n]}"
                            value="${(e==null?void 0:e[n])||""}"
                        ></ui-input>
                    `,s.appendChild(r)}}},this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="destructive">Delete</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const a=r.querySelector("ui-input");s.push(a.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};F(se,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",se)});let MetalSheetModifyEntryDialog=se;const gridContent=html``,ne=class ne extends UIDialog{constructor(){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.gap="0.5rem",t.innerHTML=gridContent,t})()),this.ui.title="Neuer Eintrag",this.ui={...this.ui,root:this,set({header:t,data:e=null}){const s=this.root.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new UIFlexGridItem;r.innerHTML=html`
                        <ui-input
                            title="${t[n]}"
                            value="${(e==null?void 0:e[n])||""}"
                        ></ui-input>
                    `,s.appendChild(r)}}},this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new UIFlexGridItem;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const a=r.querySelector("ui-input");s.push(a.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};F(ne,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",ne)});let MetalSheetNewEntryDialog=ne;const content$e=html`
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
`,oe=class oe extends UIStackLayoutPage{constructor(){super(),this.ui.setName("metal-sheet-lists"),this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,list:null,get(){return this.list},set(t){if(this.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.list)])],getFileName$1(this.list),{type:"application/json"})],title:"Blech Listen",text:`${this.list.format} - ${this.list.toolID} - ${this.list.date}`}),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const s=getKey$1(t);return e=[...e.filter(n=>getKey$1(n)!==s),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(s=>getKey$1(s)!==t),e))}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const t=new MetalSheetCreateDialog("edit");t.ui.set(this.ui.list.format,this.ui.list.toolID,this.ui.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(getKey$1(this.ui.list)),this.ui.list.format=e.format,this.ui.list.toolID=e.toolID,this.ui.list.data.press=e.press,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}render(){this.innerHTML=content$e,this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.ui.list)return;for(const n of this.ui.list.data.table.header){const r=document.createElement("th");r.style.textAlign="center",r.innerHTML=n,t.appendChild(r)}let s=null;for(let n=0;n<this.ui.list.data.table.data.length;n++){const r=document.createElement("tr");r.style.cursor="pointer",r.role="button",r.onclick=()=>this.createModifyEntryDialog(n),e.appendChild(r),create$1(r,{onDragEnd:(a,l)=>{if(s!==null){if(s<l){let h=this.ui.list.data.table.data;h=[...h.slice(0,s),...h.slice(s+1,l+1),h[s],...h.slice(l+1)],this.ui.list.data.table.data=h,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}else if(s>l){let h=this.ui.list.data.table.data;h=[...h.slice(0,l),h[s],...h.slice(l,s),...h.slice(s+1)],this.ui.list.data.table.data=h,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}[...e.children].forEach(h=>{h.style.background="inherit",h.style.color="inherit"}),s=null}},onDragging:a=>{s!==null&&[...e.children].forEach((l,h)=>{if(h!==a){l.style.background="inherit",l.style.color="inherit";return}l.style.background="var(--ui-primary-bgColor)",l.style.color="var(--ui-primary-color)"})},onDragStart:a=>{s=a}});for(const a of this.ui.list.data.table.data[n]){const l=document.createElement("td");l.style.textAlign="center",l.innerHTML=a,r.appendChild(l)}}}createMetalSheetActions(){const t=this.querySelector("metal-sheet-actions");t.events.on("new-entry",()=>this.createNewEntryDialog()),t.events.on("delete-table",()=>{let e="";this.ui.list.toolID?e=`Delete table: ${this.ui.list.format} - ${this.ui.list.toolID}`:e=`Delete table: ${this.ui.list.format}`,window.confirm(e)&&(this.ui.set(null),this.ui.deleteStore(getKey$1(this.ui.list)))})}createModifyEntryDialog(t){const e=new MetalSheetModifyEntryDialog;e.ui.set({header:this.ui.list.data.table.header,data:this.ui.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",s=>{this.ui.list.data.table.data[t]=s,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),e.ui.events.on("delete",()=>{this.ui.list.data.table.data=[...this.ui.list.data.table.data.slice(0,t),...this.ui.list.data.table.data.slice(t+1)],this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new MetalSheetNewEntryDialog;t.ui.set({header:this.ui.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.list.data.table.data.push(e),this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(t),t.ui.open(!0)}};F(oe,"register",()=>{customElements.define("metal-sheet-lists-page",oe)});let MetalSheetListsPage=oe;function createVisItem({product:L,events:t=null,ripple:e=!0}){const s=document.createElement("div");s.classList.add("vis-item"),s.role="button",s.setAttribute("data-value",L.lotto+" "+L.name+" "+L.format+" "+L.stamp+" "+L.thickness+"mm"),s.style.display="block",s.style.position="relative",s.style.overflow="hidden",s.style.borderTop="1px solid var(--ui-borderColor)",s.style.borderBottom="1px solid var(--ui-borderColor)",s.style.margin="var(--ui-spacing) 0",s.style.cursor="pointer",s.innerHTML=html`
        <ui-flex-grid>
            <ui-flex-grid-row style="font-size: 1.1rem;">
                <ui-flex-grid-item class="flex justify-center align-center">
                    <div
                        name="lotto"
                        style="font-weight: bold; padding: var(--ui-spacing);"
                        align="right"
                    >
                        ${L.lotto}
                    </div>

                    <div
                        name="name"
                        style="font-weight: lighter; padding: var(--ui-spacing);"
                    >
                        ${L.name}
                    </div>
                </ui-flex-grid-item>
            </ui-flex-grid-row>

            <ui-flex-grid-row style="font-size: 0.95rem;">
                <ui-flex-grid-item class="flex justify-center align-center">
                    <div
                        name="format"
                        style="padding: var(--ui-spacing);"
                        align="right"
                    >
                        ${L.format}
                    </div>

                    <div name="stamp" style="padding: var(--ui-spacing);">
                        ${L.stamp}
                    </div>

                    <div name="thickness" style="padding: var(--ui-spacing);">
                        ${L.thickness}mm
                    </div>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        </ui-flex-grid>
    `;let n;return e&&(n=create(s,{useClick:!0})),t!==null&&(s.onclick=()=>{t.dispatch("click",L)}),{destroy:()=>{n&&n()},element:s}}const shadowContent=html`
    <style>
        :host {
            padding-top: var(--ui-app-bar-height);
        }
    </style>
`,content$d=html`
    <span class="placeholder"></span>
    <div class="content"></div>
`,ae=class ae extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$d,this.shadowRoot.innerHTML+=shadowContent,this.ui.setName("product"),this.ui={...this.ui,root:this,set(t){this.root.replaceChild(createVisItem({product:t,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}}}};F(ae,"register",()=>{customElements.define("product-page",ae)});let ProductPage=ae;const le=class le extends UIStackLayoutPage{constructor(){super();F(this,"template",()=>html`
        <search-bar title="Suche... (RegEx Mode)"></search-bar>

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
            <div class="list"></div>
        </div>
    `);this.ui.setName("vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={...this.ui,root:this,list:null,set(e){if(this.list=e,this.root.setAppBarTitle(),this.list===null){this.root.uiStore.ui.set("share",null),this.root.searchBar.ui.input.ui.storagekey=null;return}this.root.update(),this.root.searchBar.ui.input.ui.storagekey=getKey(this.list),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.list)])],getFileName(this.list),{type:"application/json"})]})}},this.render()}connectedCallback(){super.connectedCallback(),this.stackLayout.ui.registerPage("product",()=>new ProductPage),this.setAppBarTitle(),this.uiStore.ui.on("search",({active:e})=>{this.searchBar.ui.active=e,setTimeout(()=>{this.search(e?this.searchBar.ui.input.ui.value:"")})}),this.uiStore.ui.set("search",{active:!1})}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("product"),this.uiStore.ui.set("share",null)}update(){const e=this.querySelector(".list");for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.ui.list)return;const s=new Events;s.on("click",n=>{this.stackLayout.ui.setPage("product",r=>{r.ui.set(n)},!0)});for(const n of this.ui.list.data)setTimeout(()=>{e.appendChild(createVisItem({product:n,events:s}).element)})}render(){this.innerHTML=`${this.template().trim()}`,this.searchBar=this.querySelector("search-bar");let e=null;this.searchBar.ui.input.ui.events.on("input",async s=>{e!==null&&clearTimeout(e),e=setTimeout(async()=>{await this.search(s)},250)})}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.ui.list?`Vis - ${this.ui.list.title}`:"Vis")}async search(e){const s=new RegExp(e.replaceAll(" ",".*"),"i"),n=this.querySelector(".list");for(const r of[...n.children])setTimeout(()=>{if(!this.searchBar.ui.active){r.style.display="block";return}if(r.getAttribute("data-value").match(s)){r.style.display="block";return}r.style.display="none"})}};F(le,"register",()=>{customElements.define("vis-page",le)});let VisPage=le;function getFileName(L){return`Vis_${L.date}.json`}function getKey(L){return`${L.title}`}const content$c=html``,ue=class ue extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$c,this.ui.setName("vis-data")}};F(ue,"register",()=>{customElements.define("vis-data-page",ue)});let VisDataPage=ue;const Mt=class Mt extends HTMLElement{constructor(){super();F(this,"css",({height:e})=>`
        * {
            box-sizing: border-box;
        }

        :host {
            display: none;
            position: absolute;
            top: var(--ui-app-bar-height);
            left: 0;
            right: 0;
            height: ${e};
            padding: var(--ui-spacing);
            overflow: hidden;
        }

        :host([active]) {
            display: block;
        }
    `);F(this,"template",({title:e})=>html`
        <ui-search
            style="z-index: 10;"
            title="${e}"
            no-submit
            use-storage
            storage-prefix="pg-vis:search:"
            key=""
        ></ui-search>
    `);this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,attr:{height:"4.5rem",title:""},input:null,get active(){return this.root.hasAttribute("active")},set active(e){if(e){this.root.setAttribute("active",""),this.root.stackLayout.style.setProperty("--search-bar-height",this.attr.height),this.input.focus();return}this.root.removeAttribute("active"),this.root.stackLayout.style.setProperty("--search-bar-height","0rem")},get prefix(){return this.input.ui.storageprefix},set prefix(e){this.input.ui.storageprefix="pg-vis:search:"+e}},this.render({...this.ui.attr})}attributeChangedCallback(e,s,n){switch(e){case"title":this.ui.input.ui.title=n||"";break}}render({height:e,title:s}){this.shadowRoot.innerHTML=`
            <style>${this.css({height:e}).trim()}</style>
            ${this.template({title:s}).trim()}
        `,this.ui.input=this.shadowRoot.querySelector("ui-search")}};F(Mt,"register",()=>{customElements.define("search-bar",Mt)}),F(Mt,"observedAttributes",["title"]);let SearchBar=Mt;const version="v0.0.29.dev5";function load(L){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const s of e.currentTarget.files){const n=new FileReader;n.onload=()=>{if(typeof n.result=="string")try{L(n.result,s)}catch(r){alert(`Parse data failed: ${r}`)}},n.onerror=()=>{alert(`Read file "${s.name}" failed!`)},n.readAsText(s)}},t.click()}function alertLists(L){const t=[],e=L.map(s=>`${s.title}`).sort();for(const s of e)t.push(L.find(n=>`${n.title}`===s));return t}function metalSheetLists(L){let t=[];const e=L.map(s=>getKey$1(s)).sort();for(const s of e)t.push(L.find(n=>getKey$1(n)===s));return t}const ce=class ce extends UIDrawerGroupItem{constructor(){super();F(this,"template",()=>html`
        <ui-flex-grid gap="0.25rem">
            <ui-flex-grid-item style="position: relative;" gap="0.25rem">
                <div class="flex row align-center justify-between">
                    <ui-primary>GistID</ui-primary>
                    <drawer-revision></drawer-revision>
                </div>
                <ui-secondary style="overflow-wrap: anywhere;"
                    >&nbsp;</ui-secondary
                >
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
    `);this.style.display="none",this.style.position="relative",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,onPull:null,onPush:null,pullButton:null,pushButton:null,set(e,s){const n=this.root.querySelector("ui-secondary"),r=this.root.querySelector("drawer-revision");e?(this.root.style.display="block",n.innerHTML=e,r.innerHTML=`Revision: ${s}`):(this.root.style.display="none",n.innerHTML="&nbsp;",r.innerHTML="Revision: -"),this.pullButton.onclick=()=>{this.onPull&&this.onPull(e,s)},this.pushButton.onclick=()=>{this.onPush&&this.onPush(e,s)}}},this.render()}render(){super.render(),this.template&&(this.innerHTML=`${this.template().trim()}`,this.ui.pullButton=this.querySelector('[name="pull"]'),this.ui.pushButton=this.querySelector('[name="push"]'))}};F(ce,"register",()=>{customElements.define("drawer-gist-item",ce)});let DrawerGistItem=ce;class Gist{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const s=await e.json();this.data={revision:s.history.length,files:{},owner:{login:s.owner.login}};for(const[n,r]of Object.entries(s.files))this.data.files[n]={filename:r.filename,content:JSON.parse(r.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function gistPull(L,t,{beforeUpdate:e=null,update:s,updateRevision:n}){const a=await new Gist(L).get();let l=!1;a.revision>t?l=confirm(`Upgrade zu revision "${a.revision}"`):a.revision<t?l=confirm(`Downgrade auf revision "${a.revision}"`):l=confirm(`Already up to date! Reload? (revision: ${a.revision})`),l&&(typeof e=="function"&&await e(),Object.values(a.files).forEach(h=>s(h.content)),n(a.revision))}async function gistPush(L,t,e,{getFileName:s,updateRevision:n}){const r=new PushDialog;r.ui.events.on("close",()=>{document.body.removeChild(r)}),r.ui.events.on("submit",async a=>{if(!a)return;const l=new Gist(L,a),h=await l.get();if(h.revision>t){alert(`Gist revision is newer then the current revision (${h.revision})`);return}const b=Object.values(h.files).map(g=>JSON.stringify(g.content)).sort(),w=Object.values(e).map(g=>JSON.stringify(g)).sort();if(JSON.stringify(b)===JSON.stringify(w)){alert("Nope, no patching needed... already up to date...");return}const f={};e.forEach(g=>{f[s(g)]={content:JSON.stringify(g)}});for(const g of Object.keys(h.files))Object.hasOwn(f,g)||(f[g]=null);try{console.debug(await l.patch(f))}catch(g){console.error(g);return}n(t+1)}),document.body.appendChild(r),r.ui.open(!0)}const svgDownload=html`
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
`,content$b=html`
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
                ${svgDownload}
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,_DrawerImportButton=class _DrawerImportButton extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$b,this.uiStore=document.querySelector("ui-store"),this.cleanup=new CleanUp,this.ui={...this.ui,root:this,importButton:this.querySelector("ui-button"),exportButton:this.querySelector("ui-icon-button"),storeGistKey:null,beforeUpdate:null,onValidate:null,onUpdate:null,async setExportHandler(L){if(L===null){this.exportButton.parentElement.style.display="none";return}this.exportButton.parentElement.style.display="flex",this.exportButton.onclick=()=>L()},setDisabled(L){L?(this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0):(this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1)}}}connectedCallback(){this.cleanup.add(this.ui.importButton.ui.events.on("click",()=>this.import()))}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(name,_oldValue,newValue){switch(name){case"store-gist-key":this.ui.storeGistKey=newValue;break;case"on-validate":newValue===null?this.ui.onValidate=null:this.ui.onValidate=eval(newValue);break;case"on-update":newValue===null?this.ui.onUpdate=null:this.ui.onUpdate=eval(newValue);break;case"disabled":this.ui.setDisabled(newValue!==null);break}}async import(){const L=new ImportDialog("Blech Listen");L.ui.events.on("submit",async t=>{if(this.ui.onValidate===null)throw new Error("onValidate callback missing");if(this.ui.onUpdate===null)throw new Error("onUpdate callback missing");if(!t){load(async n=>{let r=null;try{r=await this.ui.onValidate(n,null)}catch(a){alert(`Validation failed: ${a}`);return}r!==null&&await this.ui.onUpdate(r)});return}if(this.ui.storeGistKey===null)throw new Error("gist-key missing");const e=new Gist(t);let s;try{s=await e.get(),this.uiStore.ui.update("gist",n=>(n[`${this.ui.storeGistKey}`]={id:t,revision:s.revision},n))}catch(n){alert(`Something went wrong: ${n}`);return}try{for(const n in s.files)s.files[n].content=await this.ui.onValidate(s.files[n].content,e.id)}catch(n){alert(`Validation failed: ${n}`);return}typeof this.ui.beforeUpdate=="function"&&await this.ui.beforeUpdate();for(const n of Object.values(s.files))await this.ui.onUpdate(n.content)}),L.ui.events.on("close",()=>{document.body.removeChild(L)}),document.body.appendChild(L),L.ui.open(!0)}};F(_DrawerImportButton,"register",()=>{customElements.define("drawer-import-button",_DrawerImportButton)}),F(_DrawerImportButton,"observedAttributes",["store-gist-key","type","on-validate","on-update","disabled"]);let DrawerImportButton=_DrawerImportButton;const content$a=html`
    <ui-button variant="full" color="secondary">Neu</ui-button>
`,he=class he extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$a,this.uiStore=document.querySelector("ui-store"),this.cleanup=new CleanUp,this.ui={...this.ui,root:this,button:this.querySelector("ui-button")}}connectedCallback(){this.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}disconnectedCallback(){this.cleanup.run()}onClick(){const t=new MetalSheetCreateDialog("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",s=>(s=[...s,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],s))}),document.body.appendChild(t),t.ui.open(!0)}};F(he,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",he)});let DrawerNewMetalSheetListButton=he;const de=class de extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};F(de,"register",()=>{customElements.define("drawer-revision",de)});let DrawerRevision=de;const svgTrash=html`
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
`,content$9=html`
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
                ${svgTrash}
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,pe=class pe extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$9,this.cleanup=new CleanUp,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title)}}}connectedCallback(){const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}disconnectedCallback(){this.cleanup.run()}setText(t){const e=document.createElement("span");e.innerHTML=html` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};F(pe,"register",()=>{customElements.define("pg-drawer-item-alert-list",pe)});let PGDrawerItemAlertList=pe;const content$8=html`
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
                ${svgTrash}
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,fe=class fe extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$8,this.cleanup=new CleanUp,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){var s;this.data=t;let e=-1;typeof((s=t.data)==null?void 0:s.press)=="number"&&(e=t.data.press),this.root.setText(t.format,t.toolID,e)}}}connectedCallback(){const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}disconnectedCallback(){this.cleanup.run()}setText(t,e,s){const n=document.createElement("span");n.innerHTML=html`
            <ui-primary>
                <span>${t}</span>
                <span style="font-size: 0.85em;">
                    ${s>-1?"[P"+s+"]":""}
                </span>
            </ui-primary>
            <br />
        `,n.innerHTML+=html`
            <ui-secondary>
                <span>${e}</span>
            </ui-secondary>
        `,this.querySelector("ui-button").appendChild(n)}};F(fe,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",fe)});let PGDrawerItemMetalSheetList=fe;const content$7=html`
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
                ${svgTrash}
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,me=class me extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$7,this.cleanup=new CleanUp,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title,null)}}}connectedCallback(){const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}disconnectedCallback(){this.cleanup.run()}setText(t,e=null){const s=document.createElement("span");s.innerHTML=html` <ui-primary>${t}</ui-primary> `,e!==null&&(s.innerHTML+=html`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(s)}};F(me,"register",()=>{customElements.define("pg-drawer-item-vis-data",me)});let PGDrawerItemVisData=me;const content$6=html`
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
                ${svgTrash}
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,ge=class ge extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$6,this.cleanup=new CleanUp,this.ui={...this.ui,root:this,events:new Events,data:null,set(t){this.data=t,this.root.setText(t.title,t.data.length)}}}connectedCallback(){const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}disconnectedCallback(){this.cleanup.run()}setText(t,e){const s=document.createElement("span");s.innerHTML=html` <ui-primary>${t}</ui-primary><br /> `,s.innerHTML+=html`
            <ui-secondary>${e} Einträge</ui-secondary>
        `,this.querySelector("ui-button").appendChild(s)}};F(ge,"register",()=>{customElements.define("pg-drawer-item-vis",ge)});let PGDrawerItemVis=ge;const defaultItems$2=2,storeGistKey$2="alert-lists",storeDataKey$2="alertLists",content$5=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$2}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>
`,be=class be extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$5,this.style.position="relative",this.ui.title="Alarm Listen",this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$2,this.storeAlertListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$2,[])},t.ui.onUpdate=this.update.bind(this)}async validate(t){const e=s=>new Error(`invalid data for alert:
${JSON.stringify(s,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let s=0;s<t.data.length;s++){const n=t.data[s];if(typeof n.from!="number"||typeof n.to!="number"||typeof n.alert!="string"||!Array.isArray(n.desc)||(typeof n.desc=="string"&&(n.desc=n.desc.split(`
`)),n.desc.filter(r=>typeof r!="string").length))throw e(n)}return t}async update(t){console.debug("[PGDrawerAlertLists.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey:storeDataKey$2,getKey:getKey$2})}async storeGistHandler(t){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey:storeGistKey$2,storeDataKey:storeDataKey$2,getFileName:getFileName$2,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(t){if(!t)return;const e=[...this.children].slice(defaultItems$2);for(;e.length>0;)this.removeChild(e.pop());for(const s of alertLists(t)){const n=new PGDrawerItemAlertList;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.title} - ${s.date}`)&&this.uiStore.ui.update(storeDataKey$2,r=>r.filter(a=>a.title!==s.title))})}}};F(be,"register",()=>{customElements.define("pg-drawer-alert-lists",be)});let PGDrawerAlertLists=be;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var FileSaver_min={exports:{}};(function(L,t){(function(e,s){s()})(commonjsGlobal,function(){function e(b,w){return typeof w>"u"?w={autoBom:!1}:typeof w!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),w={autoBom:!w}),w.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function s(b,w,f){var g=new XMLHttpRequest;g.open("GET",b),g.responseType="blob",g.onload=function(){h(g.response,w,f)},g.onerror=function(){console.error("could not download file")},g.send()}function n(b){var w=new XMLHttpRequest;w.open("HEAD",b,!1);try{w.send()}catch{}return 200<=w.status&&299>=w.status}function r(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var w=document.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(w)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof commonjsGlobal=="object"&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(b,w,f){var g=a.URL||a.webkitURL,u=document.createElement("a");w=w||b.name||"download",u.download=w,u.rel="noopener",typeof b=="string"?(u.href=b,u.origin===location.origin?r(u):n(u.href)?s(b,w,f):r(u,u.target="_blank")):(u.href=g.createObjectURL(b),setTimeout(function(){g.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(b,w,f){if(w=w||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(e(b,f),w);else if(n(b))s(b,w,f);else{var g=document.createElement("a");g.href=b,g.target="_blank",setTimeout(function(){r(g)})}}:function(b,w,f,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof b=="string")return s(b,w,f);var u=b.type==="application/octet-stream",k=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||u&&k||l)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var S=m.result;S=c?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=S:location=S,g=null},m.readAsDataURL(b)}else{var d=a.URL||a.webkitURL,y=d.createObjectURL(b);g?g.location=y:location.href=y,g=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});a.saveAs=h.saveAs=h,L.exports=h})})(FileSaver_min);var FileSaver_minExports=FileSaver_min.exports;const FileSaver=getDefaultExportFromCjs(FileSaver_minExports);function commonjsRequire(L){throw new Error('Could not dynamically require "'+L+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jszip_min={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(L,t){(function(e){L.exports=e()})(function(){return function e(s,n,r){function a(b,w){if(!n[b]){if(!s[b]){var f=typeof commonjsRequire=="function"&&commonjsRequire;if(!w&&f)return f(b,!0);if(l)return l(b,!0);var g=new Error("Cannot find module '"+b+"'");throw g.code="MODULE_NOT_FOUND",g}var u=n[b]={exports:{}};s[b][0].call(u.exports,function(k){var c=s[b][1][k];return a(c||k)},u,u.exports,e,s,n,r)}return n[b].exports}for(var l=typeof commonjsRequire=="function"&&commonjsRequire,h=0;h<r.length;h++)a(r[h]);return a}({1:[function(e,s,n){var r=e("./utils"),a=e("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(h){for(var b,w,f,g,u,k,c,m=[],d=0,y=h.length,S=y,E=r.getTypeOf(h)!=="string";d<h.length;)S=y-d,f=E?(b=h[d++],w=d<y?h[d++]:0,d<y?h[d++]:0):(b=h.charCodeAt(d++),w=d<y?h.charCodeAt(d++):0,d<y?h.charCodeAt(d++):0),g=b>>2,u=(3&b)<<4|w>>4,k=1<S?(15&w)<<2|f>>6:64,c=2<S?63&f:64,m.push(l.charAt(g)+l.charAt(u)+l.charAt(k)+l.charAt(c));return m.join("")},n.decode=function(h){var b,w,f,g,u,k,c=0,m=0,d="data:";if(h.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var y,S=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===l.charAt(64)&&S--,h.charAt(h.length-2)===l.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=a.uint8array?new Uint8Array(0|S):new Array(0|S);c<h.length;)b=l.indexOf(h.charAt(c++))<<2|(g=l.indexOf(h.charAt(c++)))>>4,w=(15&g)<<4|(u=l.indexOf(h.charAt(c++)))>>2,f=(3&u)<<6|(k=l.indexOf(h.charAt(c++))),y[m++]=b,u!==64&&(y[m++]=w),k!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(e,s,n){var r=e("./external"),a=e("./stream/DataWorker"),l=e("./stream/Crc32Probe"),h=e("./stream/DataLengthProbe");function b(w,f,g,u,k){this.compressedSize=w,this.uncompressedSize=f,this.crc32=g,this.compression=u,this.compressedContent=k}b.prototype={getContentWorker:function(){var w=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),f=this;return w.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(w,f,g){return w.pipe(new l).pipe(new h("uncompressedSize")).pipe(f.compressWorker(g)).pipe(new h("compressedSize")).withStreamInfo("compression",f)},s.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,n){var r=e("./utils"),a=function(){for(var l,h=[],b=0;b<256;b++){l=b;for(var w=0;w<8;w++)l=1&l?3988292384^l>>>1:l>>>1;h[b]=l}return h}();s.exports=function(l,h){return l!==void 0&&l.length?r.getTypeOf(l)!=="string"?function(b,w,f,g){var u=a,k=g+f;b^=-1;for(var c=g;c<k;c++)b=b>>>8^u[255&(b^w[c])];return-1^b}(0|h,l,l.length,0):function(b,w,f,g){var u=a,k=g+f;b^=-1;for(var c=g;c<k;c++)b=b>>>8^u[255&(b^w.charCodeAt(c))];return-1^b}(0|h,l,l.length,0):0}},{"./utils":32}],5:[function(e,s,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,s,n){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),l=e("./utils"),h=e("./stream/GenericWorker"),b=r?"uint8array":"array";function w(f,g){h.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=g,this.meta={}}n.magic="\b\0",l.inherits(w,h),w.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(b,f.data),!1)},w.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(g){f.push({data:g,meta:f.meta})}},n.compressWorker=function(f){return new w("Deflate",f)},n.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,n){function r(u,k){var c,m="";for(c=0;c<k;c++)m+=String.fromCharCode(255&u),u>>>=8;return m}function a(u,k,c,m,d,y){var S,E,C=u.file,O=u.compression,B=y!==b.utf8encode,j=l.transformTo("string",y(C.name)),D=l.transformTo("string",b.utf8encode(C.name)),G=C.comment,X=l.transformTo("string",y(G)),_=l.transformTo("string",b.utf8encode(G)),z=D.length!==C.name.length,o=_.length!==G.length,M="",tt="",H="",et=C.dir,N=C.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};k&&!c||(Q.crc32=u.crc32,Q.compressedSize=u.compressedSize,Q.uncompressedSize=u.uncompressedSize);var I=0;k&&(I|=8),B||!z&&!o||(I|=2048);var T=0,Y=0;et&&(T|=16),d==="UNIX"?(Y=798,T|=function(Z,ot){var ct=Z;return Z||(ct=ot?16893:33204),(65535&ct)<<16}(C.unixPermissions,et)):(Y=20,T|=function(Z){return 63&(Z||0)}(C.dosPermissions)),S=N.getUTCHours(),S<<=6,S|=N.getUTCMinutes(),S<<=5,S|=N.getUTCSeconds()/2,E=N.getUTCFullYear()-1980,E<<=4,E|=N.getUTCMonth()+1,E<<=5,E|=N.getUTCDate(),z&&(tt=r(1,1)+r(w(j),4)+D,M+="up"+r(tt.length,2)+tt),o&&(H=r(1,1)+r(w(X),4)+_,M+="uc"+r(H.length,2)+H);var W="";return W+=`
\0`,W+=r(I,2),W+=O.magic,W+=r(S,2),W+=r(E,2),W+=r(Q.crc32,4),W+=r(Q.compressedSize,4),W+=r(Q.uncompressedSize,4),W+=r(j.length,2),W+=r(M.length,2),{fileRecord:f.LOCAL_FILE_HEADER+W+j+M,dirRecord:f.CENTRAL_FILE_HEADER+r(Y,2)+W+r(X.length,2)+"\0\0\0\0"+r(T,4)+r(m,4)+j+M+X}}var l=e("../utils"),h=e("../stream/GenericWorker"),b=e("../utf8"),w=e("../crc32"),f=e("../signature");function g(u,k,c,m){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=c,this.encodeFileName=m,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(g,h),g.prototype.push=function(u){var k=u.meta.percent||0,c=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,h.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:c?(k+100*(c-m-1))/c:100}}))},g.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var k=this.streamFiles&&!u.file.dir;if(k){var c=a(u,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(u){this.accumulate=!1;var k=this.streamFiles&&!u.file.dir,c=a(u,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),k)this.push({data:function(m){return f.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var u=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var c=this.bytesWritten-u,m=function(d,y,S,E,C){var O=l.transformTo("string",C(E));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(d,2)+r(d,2)+r(y,4)+r(S,4)+r(O.length,2)+O}(this.dirRecords.length,c,u,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(u){this._sources.push(u);var k=this;return u.on("data",function(c){k.processChunk(c)}),u.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),u.on("error",function(c){k.error(c)}),this},g.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(u){var k=this._sources;if(!h.prototype.error.call(this,u))return!1;for(var c=0;c<k.length;c++)try{k[c].error(u)}catch{}return!0},g.prototype.lock=function(){h.prototype.lock.call(this);for(var u=this._sources,k=0;k<u.length;k++)u[k].lock()},s.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,n){var r=e("../compressions"),a=e("./ZipFileWorker");n.generateWorker=function(l,h,b){var w=new a(h.streamFiles,b,h.platform,h.encodeFileName),f=0;try{l.forEach(function(g,u){f++;var k=function(y,S){var E=y||S,C=r[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(u.options.compression,h.compression),c=u.options.compressionOptions||h.compressionOptions||{},m=u.dir,d=u.date;u._compressWorker(k,c).withStreamInfo("file",{name:g,dir:m,date:d,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(w)}),w.entriesCount=f}catch(g){w.error(g)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(a,l){return new r().loadAsync(a,l)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,n){var r=e("./utils"),a=e("./external"),l=e("./utf8"),h=e("./zipEntries"),b=e("./stream/Crc32Probe"),w=e("./nodejsUtils");function f(g){return new a.Promise(function(u,k){var c=g.decompressed.getContentWorker().pipe(new b);c.on("error",function(m){k(m)}).on("end",function(){c.streamInfo.crc32!==g.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}s.exports=function(g,u){var k=this;return u=r.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),w.isNode&&w.isStream(g)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",g,!0,u.optimizedBinaryString,u.base64).then(function(c){var m=new h(u);return m.load(c),m}).then(function(c){var m=[a.Promise.resolve(c)],d=c.files;if(u.checkCRC32)for(var y=0;y<d.length;y++)m.push(f(d[y]));return a.Promise.all(m)}).then(function(c){for(var m=c.shift(),d=m.files,y=0;y<d.length;y++){var S=d[y],E=S.fileNameStr,C=r.resolve(S.fileNameStr);k.file(C,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:u.createFolders}),S.dir||(k.file(C).unsafeOriginalName=E)}return m.zipComment.length&&(k.comment=m.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,n){var r=e("../utils"),a=e("../stream/GenericWorker");function l(h,b){a.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(b)}r.inherits(l,a),l.prototype._bindStream=function(h){var b=this;(this._stream=h).pause(),h.on("data",function(w){b.push({data:w,meta:{percent:0}})}).on("error",function(w){b.isPaused?this.generatedError=w:b.error(w)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,n){var r=e("readable-stream").Readable;function a(l,h,b){r.call(this,h),this._helper=l;var w=this;l.on("data",function(f,g){w.push(f)||w._helper.pause(),b&&b(g)}).on("error",function(f){w.emit("error",f)}).on("end",function(){w.push(null)})}e("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},s.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,s,n){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,n){function r(C,O,B){var j,D=l.getTypeOf(O),G=l.extend(B||{},w);G.date=G.date||new Date,G.compression!==null&&(G.compression=G.compression.toUpperCase()),typeof G.unixPermissions=="string"&&(G.unixPermissions=parseInt(G.unixPermissions,8)),G.unixPermissions&&16384&G.unixPermissions&&(G.dir=!0),G.dosPermissions&&16&G.dosPermissions&&(G.dir=!0),G.dir&&(C=d(C)),G.createFolders&&(j=m(C))&&y.call(this,j,!0);var X=D==="string"&&G.binary===!1&&G.base64===!1;B&&B.binary!==void 0||(G.binary=!X),(O instanceof f&&O.uncompressedSize===0||G.dir||!O||O.length===0)&&(G.base64=!1,G.binary=!0,O="",G.compression="STORE",D="string");var _=null;_=O instanceof f||O instanceof h?O:k.isNode&&k.isStream(O)?new c(C,O):l.prepareContent(C,O,G.binary,G.optimizedBinaryString,G.base64);var z=new g(C,_,G);this.files[C]=z}var a=e("./utf8"),l=e("./utils"),h=e("./stream/GenericWorker"),b=e("./stream/StreamHelper"),w=e("./defaults"),f=e("./compressedObject"),g=e("./zipObject"),u=e("./generate"),k=e("./nodejsUtils"),c=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var O=C.lastIndexOf("/");return 0<O?C.substring(0,O):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},y=function(C,O){return O=O!==void 0?O:w.createFolders,C=d(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:O}),this.files[C]};function S(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var O,B,j;for(O in this.files)j=this.files[O],(B=O.slice(this.root.length,O.length))&&O.slice(0,this.root.length)===this.root&&C(B,j)},filter:function(C){var O=[];return this.forEach(function(B,j){C(B,j)&&O.push(j)}),O},file:function(C,O,B){if(arguments.length!==1)return C=this.root+C,r.call(this,C,O,B),this;if(S(C)){var j=C;return this.filter(function(G,X){return!X.dir&&j.test(G)})}var D=this.files[this.root+C];return D&&!D.dir?D:null},folder:function(C){if(!C)return this;if(S(C))return this.filter(function(D,G){return G.dir&&C.test(D)});var O=this.root+C,B=y.call(this,O),j=this.clone();return j.root=B.name,j},remove:function(C){C=this.root+C;var O=this.files[C];if(O||(C.slice(-1)!=="/"&&(C+="/"),O=this.files[C]),O&&!O.dir)delete this.files[C];else for(var B=this.filter(function(D,G){return G.name.slice(0,C.length)===C}),j=0;j<B.length;j++)delete this.files[B[j].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var O,B={};try{if((B=l.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=B.type.toLowerCase(),B.compression=B.compression.toUpperCase(),B.type==="binarystring"&&(B.type="string"),!B.type)throw new Error("No output type specified.");l.checkSupport(B.type),B.platform!=="darwin"&&B.platform!=="freebsd"&&B.platform!=="linux"&&B.platform!=="sunos"||(B.platform="UNIX"),B.platform==="win32"&&(B.platform="DOS");var j=B.comment||this.comment||"";O=u.generateWorker(this,B,j)}catch(D){(O=new h("error")).error(D)}return new b(O,B.type||"string",B.mimeType)},generateAsync:function(C,O){return this.generateInternalStream(C).accumulate(O)},generateNodeStream:function(C,O){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(O)}};s.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,n){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,n){var r=e("./DataReader");function a(l){r.call(this,l);for(var h=0;h<this.data.length;h++)l[h]=255&l[h]}e("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var h=l.charCodeAt(0),b=l.charCodeAt(1),w=l.charCodeAt(2),f=l.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===h&&this.data[g+1]===b&&this.data[g+2]===w&&this.data[g+3]===f)return g-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var h=l.charCodeAt(0),b=l.charCodeAt(1),w=l.charCodeAt(2),f=l.charCodeAt(3),g=this.readData(4);return h===g[0]&&b===g[1]&&w===g[2]&&f===g[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},s.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,s,n){var r=e("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var h,b=0;for(this.checkOffset(l),h=this.index+l-1;h>=this.index;h--)b=(b<<8)+this.byteAt(h);return this.index+=l,b},readString:function(l){return r.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},s.exports=a},{"../utils":32}],19:[function(e,s,n){var r=e("./Uint8ArrayReader");function a(l){r.call(this,l)}e("../utils").inherits(a,r),a.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},s.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,n){var r=e("./DataReader");function a(l){r.call(this,l)}e("../utils").inherits(a,r),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},s.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,s,n){var r=e("./ArrayReader");function a(l){r.call(this,l)}e("../utils").inherits(a,r),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},s.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,n){var r=e("../utils"),a=e("../support"),l=e("./ArrayReader"),h=e("./StringReader"),b=e("./NodeBufferReader"),w=e("./Uint8ArrayReader");s.exports=function(f){var g=r.getTypeOf(f);return r.checkSupport(g),g!=="string"||a.uint8array?g==="nodebuffer"?new b(f):a.uint8array?new w(r.transformTo("uint8array",f)):new l(r.transformTo("array",f)):new h(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,n){var r=e("./GenericWorker"),a=e("../utils");function l(h){r.call(this,"ConvertWorker to "+h),this.destType=h}a.inherits(l,r),l.prototype.processChunk=function(h){this.push({data:a.transformTo(this.destType,h.data),meta:h.meta})},s.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,n){var r=e("./GenericWorker"),a=e("../crc32");function l(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(l,r),l.prototype.processChunk=function(h){this.streamInfo.crc32=a(h.data,this.streamInfo.crc32||0),this.push(h)},s.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,n){var r=e("../utils"),a=e("./GenericWorker");function l(h){a.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}r.inherits(l,a),l.prototype.processChunk=function(h){if(h){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+h.data.length}a.prototype.processChunk.call(this,h)},s.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,n){var r=e("../utils"),a=e("./GenericWorker");function l(h){a.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(w){b.dataIsReady=!0,b.data=w,b.max=w&&w.length||0,b.type=r.getTypeOf(w),b.isPaused||b._tickAndRepeat()},function(w){b.error(w)})}r.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,b);break;case"uint8array":h=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":h=this.data.slice(this.index,b)}return this.index=b,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,n){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var h=0;h<this._listeners[a].length;h++)this._listeners[a][h].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(h){l.processChunk(h)}),a.on("end",function(){l.end()}),a.on("error",function(h){l.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},s.exports=r},{}],29:[function(e,s,n){var r=e("../utils"),a=e("./ConvertWorker"),l=e("./GenericWorker"),h=e("../base64"),b=e("../support"),w=e("../external"),f=null;if(b.nodestream)try{f=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(k,c){return new w.Promise(function(m,d){var y=[],S=k._internalType,E=k._outputType,C=k._mimeType;k.on("data",function(O,B){y.push(O),c&&c(B)}).on("error",function(O){y=[],d(O)}).on("end",function(){try{var O=function(B,j,D){switch(B){case"blob":return r.newBlob(r.transformTo("arraybuffer",j),D);case"base64":return h.encode(j);default:return r.transformTo(B,j)}}(E,function(B,j){var D,G=0,X=null,_=0;for(D=0;D<j.length;D++)_+=j[D].length;switch(B){case"string":return j.join("");case"array":return Array.prototype.concat.apply([],j);case"uint8array":for(X=new Uint8Array(_),D=0;D<j.length;D++)X.set(j[D],G),G+=j[D].length;return X;case"nodebuffer":return Buffer.concat(j);default:throw new Error("concat : unsupported type '"+B+"'")}}(S,y),C);m(O)}catch(B){d(B)}y=[]}).resume()})}function u(k,c,m){var d=c;switch(c){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=c,this._mimeType=m,r.checkSupport(d),this._worker=k.pipe(new a(d)),k.lock()}catch(y){this._worker=new l("error"),this._worker.error(y)}}u.prototype={accumulate:function(k){return g(this,k)},on:function(k,c){var m=this;return k==="data"?this._worker.on(k,function(d){c.call(m,d.data,d.meta)}):this._worker.on(k,function(){r.delay(c,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},k)}},s.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),n.blob=a.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,n){for(var r=e("./utils"),a=e("./support"),l=e("./nodejsUtils"),h=e("./stream/GenericWorker"),b=new Array(256),w=0;w<256;w++)b[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;b[254]=b[254]=1;function f(){h.call(this,"utf-8 decode"),this.leftOver=null}function g(){h.call(this,"utf-8 encode")}n.utf8encode=function(u){return a.nodebuffer?l.newBufferFrom(u,"utf-8"):function(k){var c,m,d,y,S,E=k.length,C=0;for(y=0;y<E;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),C+=m<128?1:m<2048?2:m<65536?3:4;for(c=a.uint8array?new Uint8Array(C):new Array(C),y=S=0;S<C;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),m<128?c[S++]=m:(m<2048?c[S++]=192|m>>>6:(m<65536?c[S++]=224|m>>>12:(c[S++]=240|m>>>18,c[S++]=128|m>>>12&63),c[S++]=128|m>>>6&63),c[S++]=128|63&m);return c}(u)},n.utf8decode=function(u){return a.nodebuffer?r.transformTo("nodebuffer",u).toString("utf-8"):function(k){var c,m,d,y,S=k.length,E=new Array(2*S);for(c=m=0;c<S;)if((d=k[c++])<128)E[m++]=d;else if(4<(y=b[d]))E[m++]=65533,c+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&c<S;)d=d<<6|63&k[c++],y--;1<y?E[m++]=65533:d<65536?E[m++]=d:(d-=65536,E[m++]=55296|d>>10&1023,E[m++]=56320|1023&d)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),r.applyFromCharCode(E)}(u=r.transformTo(a.uint8array?"uint8array":"array",u))},r.inherits(f,h),f.prototype.processChunk=function(u){var k=r.transformTo(a.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var c=k;(k=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),k.set(c,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var m=function(y,S){var E;for((S=S||y.length)>y.length&&(S=y.length),E=S-1;0<=E&&(192&y[E])==128;)E--;return E<0||E===0?S:E+b[y[E]]>S?E:S}(k),d=k;m!==k.length&&(a.uint8array?(d=k.subarray(0,m),this.leftOver=k.subarray(m,k.length)):(d=k.slice(0,m),this.leftOver=k.slice(m,k.length))),this.push({data:n.utf8decode(d),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=f,r.inherits(g,h),g.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,n){var r=e("./support"),a=e("./base64"),l=e("./nodejsUtils"),h=e("./external");function b(c){return c}function w(c,m){for(var d=0;d<c.length;++d)m[d]=255&c.charCodeAt(d);return m}e("setimmediate"),n.newBlob=function(c,m){n.checkSupport("blob");try{return new Blob([c],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(c),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(c,m,d){var y=[],S=0,E=c.length;if(E<=d)return String.fromCharCode.apply(null,c);for(;S<E;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,c.slice(S,Math.min(S+d,E)))):y.push(String.fromCharCode.apply(null,c.subarray(S,Math.min(S+d,E)))),S+=d;return y.join("")},stringifyByChar:function(c){for(var m="",d=0;d<c.length;d++)m+=String.fromCharCode(c[d]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}}()}};function g(c){var m=65536,d=n.getTypeOf(c),y=!0;if(d==="uint8array"?y=f.applyCanBeUsed.uint8array:d==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(c,d,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(c)}function u(c,m){for(var d=0;d<c.length;d++)m[d]=c[d];return m}n.applyFromCharCode=g;var k={};k.string={string:b,array:function(c){return w(c,new Array(c.length))},arraybuffer:function(c){return k.string.uint8array(c).buffer},uint8array:function(c){return w(c,new Uint8Array(c.length))},nodebuffer:function(c){return w(c,l.allocBuffer(c.length))}},k.array={string:g,array:b,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return l.newBufferFrom(c)}},k.arraybuffer={string:function(c){return g(new Uint8Array(c))},array:function(c){return u(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:b,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return l.newBufferFrom(new Uint8Array(c))}},k.uint8array={string:g,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:b,nodebuffer:function(c){return l.newBufferFrom(c)}},k.nodebuffer={string:g,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return k.nodebuffer.uint8array(c).buffer},uint8array:function(c){return u(c,new Uint8Array(c.length))},nodebuffer:b},n.transformTo=function(c,m){if(m=m||"",!c)return m;n.checkSupport(c);var d=n.getTypeOf(m);return k[d][c](m)},n.resolve=function(c){for(var m=c.split("/"),d=[],y=0;y<m.length;y++){var S=m[y];S==="."||S===""&&y!==0&&y!==m.length-1||(S===".."?d.pop():d.push(S))}return d.join("/")},n.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":r.nodebuffer&&l.isBuffer(c)?"nodebuffer":r.uint8array&&c instanceof Uint8Array?"uint8array":r.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(c){if(!r[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(c){var m,d,y="";for(d=0;d<(c||"").length;d++)y+="\\x"+((m=c.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return y},n.delay=function(c,m,d){setImmediate(function(){c.apply(d||null,m||[])})},n.inherits=function(c,m){function d(){}d.prototype=m.prototype,c.prototype=new d},n.extend=function(){var c,m,d={};for(c=0;c<arguments.length;c++)for(m in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],m)&&d[m]===void 0&&(d[m]=arguments[c][m]);return d},n.prepareContent=function(c,m,d,y,S){return h.Promise.resolve(m).then(function(E){return r.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new h.Promise(function(C,O){var B=new FileReader;B.onload=function(j){C(j.target.result)},B.onerror=function(j){O(j.target.error)},B.readAsArrayBuffer(E)}):E}).then(function(E){var C=n.getTypeOf(E);return C?(C==="arraybuffer"?E=n.transformTo("uint8array",E):C==="string"&&(S?E=a.decode(E):d&&y!==!0&&(E=function(O){return w(O,r.uint8array?new Uint8Array(O.length):new Array(O.length))}(E))),E):h.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,n){var r=e("./reader/readerFor"),a=e("./utils"),l=e("./signature"),h=e("./zipEntry"),b=e("./support");function w(f){this.files=[],this.loadOptions=f}w.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(g)+", expected "+a.pretty(f)+")")}},isSignature:function(f,g){var u=this.reader.index;this.reader.setIndex(f);var k=this.reader.readString(4)===g;return this.reader.setIndex(u),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),g=b.uint8array?"uint8array":"array",u=a.transformTo(g,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,g,u,k=this.zip64EndOfCentralSize-44;0<k;)f=this.reader.readInt(2),g=this.reader.readInt(4),u=this.reader.readData(g),this.zip64ExtensibleData[f]={id:f,length:g,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,g;for(f=0;f<this.files.length;f++)g=this.files[f],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(f=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var g=f;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var k=g-u;if(0<k)this.isSignature(g,l.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(f){this.reader=r(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,n){var r=e("./reader/readerFor"),a=e("./utils"),l=e("./compressedObject"),h=e("./crc32"),b=e("./utf8"),w=e("./compressions"),f=e("./support");function g(u,k){this.options=u,this.loadOptions=k}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var k,c;if(u.skip(22),this.fileNameLength=u.readInt(2),c=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(m){for(var d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&w[d].magic===m)return w[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,k,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var k=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(k),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var k,c,m,d=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<d;)k=u.readInt(2),c=u.readInt(2),m=u.readData(c),this.extraFields[k]={id:k,length:c,value:m};u.setIndex(d)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var c=a.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=a.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var k=r(u.value);return k.readInt(1)!==1||h(this.fileName)!==k.readInt(4)?null:b.utf8decode(k.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var k=r(u.value);return k.readInt(1)!==1||h(this.fileComment)!==k.readInt(4)?null:b.utf8decode(k.readData(u.length-5))}return null}},s.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,n){function r(k,c,m){this.name=k,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=c,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),l=e("./stream/DataWorker"),h=e("./utf8"),b=e("./compressedObject"),w=e("./stream/GenericWorker");r.prototype={internalStream:function(k){var c=null,m="string";try{if(!k)throw new Error("No output type specified.");var d=(m=k.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),c=this._decompressWorker();var y=!this._dataBinary;y&&!d&&(c=c.pipe(new h.Utf8EncodeWorker)),!y&&d&&(c=c.pipe(new h.Utf8DecodeWorker))}catch(S){(c=new w("error")).error(S)}return new a(c,m,"")},async:function(k,c){return this.internalStream(k).accumulate(c)},nodeStream:function(k,c){return this.internalStream(k||"nodebuffer").toNodejsStream(c)},_compressWorker:function(k,c){if(this._data instanceof b&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new h.Utf8EncodeWorker)),b.createWorkerFrom(m,k,c)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof w?this._data:new l(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)r.prototype[f[u]]=g;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,n){(function(r){var a,l,h=r.MutationObserver||r.WebKitMutationObserver;if(h){var b=0,w=new h(k),f=r.document.createTextNode("");w.observe(f,{characterData:!0}),a=function(){f.data=b=++b%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var c=r.document.createElement("script");c.onreadystatechange=function(){k(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},r.document.documentElement.appendChild(c)}:function(){setTimeout(k,0)};else{var g=new r.MessageChannel;g.port1.onmessage=k,a=function(){g.port2.postMessage(0)}}var u=[];function k(){var c,m;l=!0;for(var d=u.length;d;){for(m=u,u=[],c=-1;++c<d;)m[c]();d=u.length}l=!1}s.exports=function(c){u.push(c)!==1||l||a()}}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,n){var r=e("immediate");function a(){}var l={},h=["REJECTED"],b=["FULFILLED"],w=["PENDING"];function f(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,d!==a&&c(this,d)}function g(d,y,S){this.promise=d,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function u(d,y,S){r(function(){var E;try{E=y(S)}catch(C){return l.reject(d,C)}E===d?l.reject(d,new TypeError("Cannot resolve promise with itself")):l.resolve(d,E)})}function k(d){var y=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof y=="function")return function(){y.apply(d,arguments)}}function c(d,y){var S=!1;function E(B){S||(S=!0,l.reject(d,B))}function C(B){S||(S=!0,l.resolve(d,B))}var O=m(function(){y(C,E)});O.status==="error"&&E(O.value)}function m(d,y){var S={};try{S.value=d(y),S.status="success"}catch(E){S.status="error",S.value=E}return S}(s.exports=f).prototype.finally=function(d){if(typeof d!="function")return this;var y=this.constructor;return this.then(function(S){return y.resolve(d()).then(function(){return S})},function(S){return y.resolve(d()).then(function(){throw S})})},f.prototype.catch=function(d){return this.then(null,d)},f.prototype.then=function(d,y){if(typeof d!="function"&&this.state===b||typeof y!="function"&&this.state===h)return this;var S=new this.constructor(a);return this.state!==w?u(S,this.state===b?d:y,this.outcome):this.queue.push(new g(S,d,y)),S},g.prototype.callFulfilled=function(d){l.resolve(this.promise,d)},g.prototype.otherCallFulfilled=function(d){u(this.promise,this.onFulfilled,d)},g.prototype.callRejected=function(d){l.reject(this.promise,d)},g.prototype.otherCallRejected=function(d){u(this.promise,this.onRejected,d)},l.resolve=function(d,y){var S=m(k,y);if(S.status==="error")return l.reject(d,S.value);var E=S.value;if(E)c(d,E);else{d.state=b,d.outcome=y;for(var C=-1,O=d.queue.length;++C<O;)d.queue[C].callFulfilled(y)}return d},l.reject=function(d,y){d.state=h,d.outcome=y;for(var S=-1,E=d.queue.length;++S<E;)d.queue[S].callRejected(y);return d},f.resolve=function(d){return d instanceof this?d:l.resolve(new this(a),d)},f.reject=function(d){var y=new this(a);return l.reject(y,d)},f.all=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,E=!1;if(!S)return this.resolve([]);for(var C=new Array(S),O=0,B=-1,j=new this(a);++B<S;)D(d[B],B);return j;function D(G,X){y.resolve(G).then(function(_){C[X]=_,++O!==S||E||(E=!0,l.resolve(j,C))},function(_){E||(E=!0,l.reject(j,_))})}},f.race=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,E=!1;if(!S)return this.resolve([]);for(var C=-1,O=new this(a);++C<S;)B=d[C],y.resolve(B).then(function(j){E||(E=!0,l.resolve(O,j))},function(j){E||(E=!0,l.reject(O,j))});var B;return O}},{immediate:36}],38:[function(e,s,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,n){var r=e("./zlib/deflate"),a=e("./utils/common"),l=e("./utils/strings"),h=e("./zlib/messages"),b=e("./zlib/zstream"),w=Object.prototype.toString,f=0,g=-1,u=0,k=8;function c(d){if(!(this instanceof c))return new c(d);this.options=a.assign({level:g,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},d||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var S=r.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(S!==f)throw new Error(h[S]);if(y.header&&r.deflateSetHeader(this.strm,y.header),y.dictionary){var E;if(E=typeof y.dictionary=="string"?l.string2buf(y.dictionary):w.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(S=r.deflateSetDictionary(this.strm,E))!==f)throw new Error(h[S]);this._dict_set=!0}}function m(d,y){var S=new c(y);if(S.push(d,!0),S.err)throw S.msg||h[S.err];return S.result}c.prototype.push=function(d,y){var S,E,C=this.strm,O=this.options.chunkSize;if(this.ended)return!1;E=y===~~y?y:y===!0?4:0,typeof d=="string"?C.input=l.string2buf(d):w.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(O),C.next_out=0,C.avail_out=O),(S=r.deflate(C,E))!==1&&S!==f)return this.onEnd(S),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&S!==1);return E===4?(S=r.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===f):E!==2||(this.onEnd(f),!(C.avail_out=0))},c.prototype.onData=function(d){this.chunks.push(d)},c.prototype.onEnd=function(d){d===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Deflate=c,n.deflate=m,n.deflateRaw=function(d,y){return(y=y||{}).raw=!0,m(d,y)},n.gzip=function(d,y){return(y=y||{}).gzip=!0,m(d,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,n){var r=e("./zlib/inflate"),a=e("./utils/common"),l=e("./utils/strings"),h=e("./zlib/constants"),b=e("./zlib/messages"),w=e("./zlib/zstream"),f=e("./zlib/gzheader"),g=Object.prototype.toString;function u(c){if(!(this instanceof u))return new u(c);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},c||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||c&&c.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var d=r.inflateInit2(this.strm,m.windowBits);if(d!==h.Z_OK)throw new Error(b[d]);this.header=new f,r.inflateGetHeader(this.strm,this.header)}function k(c,m){var d=new u(m);if(d.push(c,!0),d.err)throw d.msg||b[d.err];return d.result}u.prototype.push=function(c,m){var d,y,S,E,C,O,B=this.strm,j=this.options.chunkSize,D=this.options.dictionary,G=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof c=="string"?B.input=l.binstring2buf(c):g.call(c)==="[object ArrayBuffer]"?B.input=new Uint8Array(c):B.input=c,B.next_in=0,B.avail_in=B.input.length;do{if(B.avail_out===0&&(B.output=new a.Buf8(j),B.next_out=0,B.avail_out=j),(d=r.inflate(B,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&D&&(O=typeof D=="string"?l.string2buf(D):g.call(D)==="[object ArrayBuffer]"?new Uint8Array(D):D,d=r.inflateSetDictionary(this.strm,O)),d===h.Z_BUF_ERROR&&G===!0&&(d=h.Z_OK,G=!1),d!==h.Z_STREAM_END&&d!==h.Z_OK)return this.onEnd(d),!(this.ended=!0);B.next_out&&(B.avail_out!==0&&d!==h.Z_STREAM_END&&(B.avail_in!==0||y!==h.Z_FINISH&&y!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=l.utf8border(B.output,B.next_out),E=B.next_out-S,C=l.buf2string(B.output,S),B.next_out=E,B.avail_out=j-E,E&&a.arraySet(B.output,B.output,S,E,0),this.onData(C)):this.onData(a.shrinkBuf(B.output,B.next_out)))),B.avail_in===0&&B.avail_out===0&&(G=!0)}while((0<B.avail_in||B.avail_out===0)&&d!==h.Z_STREAM_END);return d===h.Z_STREAM_END&&(y=h.Z_FINISH),y===h.Z_FINISH?(d=r.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===h.Z_OK):y!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(B.avail_out=0))},u.prototype.onData=function(c){this.chunks.push(c)},u.prototype.onEnd=function(c){c===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},n.Inflate=u,n.inflate=k,n.inflateRaw=function(c,m){return(m=m||{}).raw=!0,k(c,m)},n.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(h){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var w=b.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var f in w)w.hasOwnProperty(f)&&(h[f]=w[f])}}return h},n.shrinkBuf=function(h,b){return h.length===b?h:h.subarray?h.subarray(0,b):(h.length=b,h)};var a={arraySet:function(h,b,w,f,g){if(b.subarray&&h.subarray)h.set(b.subarray(w,w+f),g);else for(var u=0;u<f;u++)h[g+u]=b[w+u]},flattenChunks:function(h){var b,w,f,g,u,k;for(b=f=0,w=h.length;b<w;b++)f+=h[b].length;for(k=new Uint8Array(f),b=g=0,w=h.length;b<w;b++)u=h[b],k.set(u,g),g+=u.length;return k}},l={arraySet:function(h,b,w,f,g){for(var u=0;u<f;u++)h[g+u]=b[w+u]},flattenChunks:function(h){return[].concat.apply([],h)}};n.setTyped=function(h){h?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,a)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,l))},n.setTyped(r)},{}],42:[function(e,s,n){var r=e("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var h=new r.Buf8(256),b=0;b<256;b++)h[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function w(f,g){if(g<65537&&(f.subarray&&l||!f.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(f,g));for(var u="",k=0;k<g;k++)u+=String.fromCharCode(f[k]);return u}h[254]=h[254]=1,n.string2buf=function(f){var g,u,k,c,m,d=f.length,y=0;for(c=0;c<d;c++)(64512&(u=f.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=f.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),y+=u<128?1:u<2048?2:u<65536?3:4;for(g=new r.Buf8(y),c=m=0;m<y;c++)(64512&(u=f.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=f.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),u<128?g[m++]=u:(u<2048?g[m++]=192|u>>>6:(u<65536?g[m++]=224|u>>>12:(g[m++]=240|u>>>18,g[m++]=128|u>>>12&63),g[m++]=128|u>>>6&63),g[m++]=128|63&u);return g},n.buf2binstring=function(f){return w(f,f.length)},n.binstring2buf=function(f){for(var g=new r.Buf8(f.length),u=0,k=g.length;u<k;u++)g[u]=f.charCodeAt(u);return g},n.buf2string=function(f,g){var u,k,c,m,d=g||f.length,y=new Array(2*d);for(u=k=0;u<d;)if((c=f[u++])<128)y[k++]=c;else if(4<(m=h[c]))y[k++]=65533,u+=m-1;else{for(c&=m===2?31:m===3?15:7;1<m&&u<d;)c=c<<6|63&f[u++],m--;1<m?y[k++]=65533:c<65536?y[k++]=c:(c-=65536,y[k++]=55296|c>>10&1023,y[k++]=56320|1023&c)}return w(y,k)},n.utf8border=function(f,g){var u;for((g=g||f.length)>f.length&&(g=f.length),u=g-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?g:u+h[f[u]]>g?u:g}},{"./common":41}],43:[function(e,s,n){s.exports=function(r,a,l,h){for(var b=65535&r|0,w=r>>>16&65535|0,f=0;l!==0;){for(l-=f=2e3<l?2e3:l;w=w+(b=b+a[h++]|0)|0,--f;);b%=65521,w%=65521}return b|w<<16|0}},{}],44:[function(e,s,n){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,n){var r=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var b=0;b<8;b++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();s.exports=function(a,l,h,b){var w=r,f=b+h;a^=-1;for(var g=b;g<f;g++)a=a>>>8^w[255&(a^l[g])];return-1^a}},{}],46:[function(e,s,n){var r,a=e("../utils/common"),l=e("./trees"),h=e("./adler32"),b=e("./crc32"),w=e("./messages"),f=0,g=4,u=0,k=-2,c=-1,m=4,d=2,y=8,S=9,E=286,C=30,O=19,B=2*E+1,j=15,D=3,G=258,X=G+D+1,_=42,z=113,o=1,M=2,tt=3,H=4;function et(i,P){return i.msg=w[P],P}function N(i){return(i<<1)-(4<i?9:0)}function Q(i){for(var P=i.length;0<=--P;)i[P]=0}function I(i){var P=i.state,R=P.pending;R>i.avail_out&&(R=i.avail_out),R!==0&&(a.arraySet(i.output,P.pending_buf,P.pending_out,R,i.next_out),i.next_out+=R,P.pending_out+=R,i.total_out+=R,i.avail_out-=R,P.pending-=R,P.pending===0&&(P.pending_out=0))}function T(i,P){l._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,P),i.block_start=i.strstart,I(i.strm)}function Y(i,P){i.pending_buf[i.pending++]=P}function W(i,P){i.pending_buf[i.pending++]=P>>>8&255,i.pending_buf[i.pending++]=255&P}function Z(i,P){var R,v,p=i.max_chain_length,x=i.strstart,U=i.prev_length,$=i.nice_match,A=i.strstart>i.w_size-X?i.strstart-(i.w_size-X):0,q=i.window,K=i.w_mask,V=i.prev,J=i.strstart+G,nt=q[x+U-1],rt=q[x+U];i.prev_length>=i.good_match&&(p>>=2),$>i.lookahead&&($=i.lookahead);do if(q[(R=P)+U]===rt&&q[R+U-1]===nt&&q[R]===q[x]&&q[++R]===q[x+1]){x+=2,R++;do;while(q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&q[++x]===q[++R]&&x<J);if(v=G-(J-x),x=J-G,U<v){if(i.match_start=P,$<=(U=v))break;nt=q[x+U-1],rt=q[x+U]}}while((P=V[P&K])>A&&--p!=0);return U<=i.lookahead?U:i.lookahead}function ot(i){var P,R,v,p,x,U,$,A,q,K,V=i.w_size;do{if(p=i.window_size-i.lookahead-i.strstart,i.strstart>=V+(V-X)){for(a.arraySet(i.window,i.window,V,V,0),i.match_start-=V,i.strstart-=V,i.block_start-=V,P=R=i.hash_size;v=i.head[--P],i.head[P]=V<=v?v-V:0,--R;);for(P=R=V;v=i.prev[--P],i.prev[P]=V<=v?v-V:0,--R;);p+=V}if(i.strm.avail_in===0)break;if(U=i.strm,$=i.window,A=i.strstart+i.lookahead,q=p,K=void 0,K=U.avail_in,q<K&&(K=q),R=K===0?0:(U.avail_in-=K,a.arraySet($,U.input,U.next_in,K,A),U.state.wrap===1?U.adler=h(U.adler,$,K,A):U.state.wrap===2&&(U.adler=b(U.adler,$,K,A)),U.next_in+=K,U.total_in+=K,K),i.lookahead+=R,i.lookahead+i.insert>=D)for(x=i.strstart-i.insert,i.ins_h=i.window[x],i.ins_h=(i.ins_h<<i.hash_shift^i.window[x+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[x+D-1])&i.hash_mask,i.prev[x&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=x,x++,i.insert--,!(i.lookahead+i.insert<D)););}while(i.lookahead<X&&i.strm.avail_in!==0)}function ct(i,P){for(var R,v;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&P===f)return o;if(i.lookahead===0)break}if(R=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,R=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),R!==0&&i.strstart-R<=i.w_size-X&&(i.match_length=Z(i,R)),i.match_length>=D)if(v=l._tr_tally(i,i.strstart-i.match_start,i.match_length-D),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=D){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,R=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=l._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(T(i,!1),i.strm.avail_out===0))return o}return i.insert=i.strstart<D-1?i.strstart:D-1,P===g?(T(i,!0),i.strm.avail_out===0?tt:H):i.last_lit&&(T(i,!1),i.strm.avail_out===0)?o:M}function it(i,P){for(var R,v,p;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&P===f)return o;if(i.lookahead===0)break}if(R=0,i.lookahead>=D&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,R=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=D-1,R!==0&&i.prev_length<i.max_lazy_match&&i.strstart-R<=i.w_size-X&&(i.match_length=Z(i,R),i.match_length<=5&&(i.strategy===1||i.match_length===D&&4096<i.strstart-i.match_start)&&(i.match_length=D-1)),i.prev_length>=D&&i.match_length<=i.prev_length){for(p=i.strstart+i.lookahead-D,v=l._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-D),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=p&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+D-1])&i.hash_mask,R=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=D-1,i.strstart++,v&&(T(i,!1),i.strm.avail_out===0))return o}else if(i.match_available){if((v=l._tr_tally(i,0,i.window[i.strstart-1]))&&T(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return o}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=l._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<D-1?i.strstart:D-1,P===g?(T(i,!0),i.strm.avail_out===0?tt:H):i.last_lit&&(T(i,!1),i.strm.avail_out===0)?o:M}function st(i,P,R,v,p){this.good_length=i,this.max_lazy=P,this.nice_length=R,this.max_chain=v,this.func=p}function ut(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*B),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*O+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(j+1),this.heap=new a.Buf16(2*E+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(i){var P;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(P=i.state).pending=0,P.pending_out=0,P.wrap<0&&(P.wrap=-P.wrap),P.status=P.wrap?_:z,i.adler=P.wrap===2?0:1,P.last_flush=f,l._tr_init(P),u):et(i,k)}function ft(i){var P=at(i);return P===u&&function(R){R.window_size=2*R.w_size,Q(R.head),R.max_lazy_match=r[R.level].max_lazy,R.good_match=r[R.level].good_length,R.nice_match=r[R.level].nice_length,R.max_chain_length=r[R.level].max_chain,R.strstart=0,R.block_start=0,R.lookahead=0,R.insert=0,R.match_length=R.prev_length=D-1,R.match_available=0,R.ins_h=0}(i.state),P}function dt(i,P,R,v,p,x){if(!i)return k;var U=1;if(P===c&&(P=6),v<0?(U=0,v=-v):15<v&&(U=2,v-=16),p<1||S<p||R!==y||v<8||15<v||P<0||9<P||x<0||m<x)return et(i,k);v===8&&(v=9);var $=new ut;return(i.state=$).strm=i,$.wrap=U,$.gzhead=null,$.w_bits=v,$.w_size=1<<$.w_bits,$.w_mask=$.w_size-1,$.hash_bits=p+7,$.hash_size=1<<$.hash_bits,$.hash_mask=$.hash_size-1,$.hash_shift=~~(($.hash_bits+D-1)/D),$.window=new a.Buf8(2*$.w_size),$.head=new a.Buf16($.hash_size),$.prev=new a.Buf16($.w_size),$.lit_bufsize=1<<p+6,$.pending_buf_size=4*$.lit_bufsize,$.pending_buf=new a.Buf8($.pending_buf_size),$.d_buf=1*$.lit_bufsize,$.l_buf=3*$.lit_bufsize,$.level=P,$.strategy=x,$.method=R,ft(i)}r=[new st(0,0,0,0,function(i,P){var R=65535;for(R>i.pending_buf_size-5&&(R=i.pending_buf_size-5);;){if(i.lookahead<=1){if(ot(i),i.lookahead===0&&P===f)return o;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+R;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,T(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-X&&(T(i,!1),i.strm.avail_out===0))return o}return i.insert=0,P===g?(T(i,!0),i.strm.avail_out===0?tt:H):(i.strstart>i.block_start&&(T(i,!1),i.strm.avail_out),o)}),new st(4,4,8,4,ct),new st(4,5,16,8,ct),new st(4,6,32,32,ct),new st(4,4,16,16,it),new st(8,16,32,32,it),new st(8,16,128,128,it),new st(8,32,128,256,it),new st(32,128,258,1024,it),new st(32,258,258,4096,it)],n.deflateInit=function(i,P){return dt(i,P,y,15,8,0)},n.deflateInit2=dt,n.deflateReset=ft,n.deflateResetKeep=at,n.deflateSetHeader=function(i,P){return i&&i.state?i.state.wrap!==2?k:(i.state.gzhead=P,u):k},n.deflate=function(i,P){var R,v,p,x;if(!i||!i.state||5<P||P<0)return i?et(i,k):k;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&P!==g)return et(i,i.avail_out===0?-5:k);if(v.strm=i,R=v.last_flush,v.last_flush=P,v.status===_)if(v.wrap===2)i.adler=0,Y(v,31),Y(v,139),Y(v,8),v.gzhead?(Y(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),Y(v,255&v.gzhead.time),Y(v,v.gzhead.time>>8&255),Y(v,v.gzhead.time>>16&255),Y(v,v.gzhead.time>>24&255),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(Y(v,255&v.gzhead.extra.length),Y(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=b(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,3),v.status=z);else{var U=y+(v.w_bits-8<<4)<<8;U|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(U|=32),U+=31-U%31,v.status=z,W(v,U),v.strstart!==0&&(W(v,i.adler>>>16),W(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(p=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending!==v.pending_buf_size));)Y(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){p=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending===v.pending_buf_size)){x=1;break}x=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,Y(v,x)}while(x!==0);v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),x===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){p=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending===v.pending_buf_size)){x=1;break}x=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,Y(v,x)}while(x!==0);v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),x===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&I(i),v.pending+2<=v.pending_buf_size&&(Y(v,255&i.adler),Y(v,i.adler>>8&255),i.adler=0,v.status=z)):v.status=z),v.pending!==0){if(I(i),i.avail_out===0)return v.last_flush=-1,u}else if(i.avail_in===0&&N(P)<=N(R)&&P!==g)return et(i,-5);if(v.status===666&&i.avail_in!==0)return et(i,-5);if(i.avail_in!==0||v.lookahead!==0||P!==f&&v.status!==666){var $=v.strategy===2?function(A,q){for(var K;;){if(A.lookahead===0&&(ot(A),A.lookahead===0)){if(q===f)return o;break}if(A.match_length=0,K=l._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,K&&(T(A,!1),A.strm.avail_out===0))return o}return A.insert=0,q===g?(T(A,!0),A.strm.avail_out===0?tt:H):A.last_lit&&(T(A,!1),A.strm.avail_out===0)?o:M}(v,P):v.strategy===3?function(A,q){for(var K,V,J,nt,rt=A.window;;){if(A.lookahead<=G){if(ot(A),A.lookahead<=G&&q===f)return o;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=D&&0<A.strstart&&(V=rt[J=A.strstart-1])===rt[++J]&&V===rt[++J]&&V===rt[++J]){nt=A.strstart+G;do;while(V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&J<nt);A.match_length=G-(nt-J),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=D?(K=l._tr_tally(A,1,A.match_length-D),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(K=l._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),K&&(T(A,!1),A.strm.avail_out===0))return o}return A.insert=0,q===g?(T(A,!0),A.strm.avail_out===0?tt:H):A.last_lit&&(T(A,!1),A.strm.avail_out===0)?o:M}(v,P):r[v.level].func(v,P);if($!==tt&&$!==H||(v.status=666),$===o||$===tt)return i.avail_out===0&&(v.last_flush=-1),u;if($===M&&(P===1?l._tr_align(v):P!==5&&(l._tr_stored_block(v,0,0,!1),P===3&&(Q(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),I(i),i.avail_out===0))return v.last_flush=-1,u}return P!==g?u:v.wrap<=0?1:(v.wrap===2?(Y(v,255&i.adler),Y(v,i.adler>>8&255),Y(v,i.adler>>16&255),Y(v,i.adler>>24&255),Y(v,255&i.total_in),Y(v,i.total_in>>8&255),Y(v,i.total_in>>16&255),Y(v,i.total_in>>24&255)):(W(v,i.adler>>>16),W(v,65535&i.adler)),I(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?u:1)},n.deflateEnd=function(i){var P;return i&&i.state?(P=i.state.status)!==_&&P!==69&&P!==73&&P!==91&&P!==103&&P!==z&&P!==666?et(i,k):(i.state=null,P===z?et(i,-3):u):k},n.deflateSetDictionary=function(i,P){var R,v,p,x,U,$,A,q,K=P.length;if(!i||!i.state||(x=(R=i.state).wrap)===2||x===1&&R.status!==_||R.lookahead)return k;for(x===1&&(i.adler=h(i.adler,P,K,0)),R.wrap=0,K>=R.w_size&&(x===0&&(Q(R.head),R.strstart=0,R.block_start=0,R.insert=0),q=new a.Buf8(R.w_size),a.arraySet(q,P,K-R.w_size,R.w_size,0),P=q,K=R.w_size),U=i.avail_in,$=i.next_in,A=i.input,i.avail_in=K,i.next_in=0,i.input=P,ot(R);R.lookahead>=D;){for(v=R.strstart,p=R.lookahead-(D-1);R.ins_h=(R.ins_h<<R.hash_shift^R.window[v+D-1])&R.hash_mask,R.prev[v&R.w_mask]=R.head[R.ins_h],R.head[R.ins_h]=v,v++,--p;);R.strstart=v,R.lookahead=D-1,ot(R)}return R.strstart+=R.lookahead,R.block_start=R.strstart,R.insert=R.lookahead,R.lookahead=0,R.match_length=R.prev_length=D-1,R.match_available=0,i.next_in=$,i.input=A,i.avail_in=U,R.wrap=x,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,n){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,n){s.exports=function(r,a){var l,h,b,w,f,g,u,k,c,m,d,y,S,E,C,O,B,j,D,G,X,_,z,o,M;l=r.state,h=r.next_in,o=r.input,b=h+(r.avail_in-5),w=r.next_out,M=r.output,f=w-(a-r.avail_out),g=w+(r.avail_out-257),u=l.dmax,k=l.wsize,c=l.whave,m=l.wnext,d=l.window,y=l.hold,S=l.bits,E=l.lencode,C=l.distcode,O=(1<<l.lenbits)-1,B=(1<<l.distbits)-1;t:do{S<15&&(y+=o[h++]<<S,S+=8,y+=o[h++]<<S,S+=8),j=E[y&O];e:for(;;){if(y>>>=D=j>>>24,S-=D,(D=j>>>16&255)===0)M[w++]=65535&j;else{if(!(16&D)){if(!(64&D)){j=E[(65535&j)+(y&(1<<D)-1)];continue e}if(32&D){l.mode=12;break t}r.msg="invalid literal/length code",l.mode=30;break t}G=65535&j,(D&=15)&&(S<D&&(y+=o[h++]<<S,S+=8),G+=y&(1<<D)-1,y>>>=D,S-=D),S<15&&(y+=o[h++]<<S,S+=8,y+=o[h++]<<S,S+=8),j=C[y&B];i:for(;;){if(y>>>=D=j>>>24,S-=D,!(16&(D=j>>>16&255))){if(!(64&D)){j=C[(65535&j)+(y&(1<<D)-1)];continue i}r.msg="invalid distance code",l.mode=30;break t}if(X=65535&j,S<(D&=15)&&(y+=o[h++]<<S,(S+=8)<D&&(y+=o[h++]<<S,S+=8)),u<(X+=y&(1<<D)-1)){r.msg="invalid distance too far back",l.mode=30;break t}if(y>>>=D,S-=D,(D=w-f)<X){if(c<(D=X-D)&&l.sane){r.msg="invalid distance too far back",l.mode=30;break t}if(z=d,(_=0)===m){if(_+=k-D,D<G){for(G-=D;M[w++]=d[_++],--D;);_=w-X,z=M}}else if(m<D){if(_+=k+m-D,(D-=m)<G){for(G-=D;M[w++]=d[_++],--D;);if(_=0,m<G){for(G-=D=m;M[w++]=d[_++],--D;);_=w-X,z=M}}}else if(_+=m-D,D<G){for(G-=D;M[w++]=d[_++],--D;);_=w-X,z=M}for(;2<G;)M[w++]=z[_++],M[w++]=z[_++],M[w++]=z[_++],G-=3;G&&(M[w++]=z[_++],1<G&&(M[w++]=z[_++]))}else{for(_=w-X;M[w++]=M[_++],M[w++]=M[_++],M[w++]=M[_++],2<(G-=3););G&&(M[w++]=M[_++],1<G&&(M[w++]=M[_++]))}break}}break}}while(h<b&&w<g);h-=G=S>>3,y&=(1<<(S-=G<<3))-1,r.next_in=h,r.next_out=w,r.avail_in=h<b?b-h+5:5-(h-b),r.avail_out=w<g?g-w+257:257-(w-g),l.hold=y,l.bits=S}},{}],49:[function(e,s,n){var r=e("../utils/common"),a=e("./adler32"),l=e("./crc32"),h=e("./inffast"),b=e("./inftrees"),w=1,f=2,g=0,u=-2,k=1,c=852,m=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(_){var z;return _&&_.state?(z=_.state,_.total_in=_.total_out=z.total=0,_.msg="",z.wrap&&(_.adler=1&z.wrap),z.mode=k,z.last=0,z.havedict=0,z.dmax=32768,z.head=null,z.hold=0,z.bits=0,z.lencode=z.lendyn=new r.Buf32(c),z.distcode=z.distdyn=new r.Buf32(m),z.sane=1,z.back=-1,g):u}function E(_){var z;return _&&_.state?((z=_.state).wsize=0,z.whave=0,z.wnext=0,S(_)):u}function C(_,z){var o,M;return _&&_.state?(M=_.state,z<0?(o=0,z=-z):(o=1+(z>>4),z<48&&(z&=15)),z&&(z<8||15<z)?u:(M.window!==null&&M.wbits!==z&&(M.window=null),M.wrap=o,M.wbits=z,E(_))):u}function O(_,z){var o,M;return _?(M=new y,(_.state=M).window=null,(o=C(_,z))!==g&&(_.state=null),o):u}var B,j,D=!0;function G(_){if(D){var z;for(B=new r.Buf32(512),j=new r.Buf32(32),z=0;z<144;)_.lens[z++]=8;for(;z<256;)_.lens[z++]=9;for(;z<280;)_.lens[z++]=7;for(;z<288;)_.lens[z++]=8;for(b(w,_.lens,0,288,B,0,_.work,{bits:9}),z=0;z<32;)_.lens[z++]=5;b(f,_.lens,0,32,j,0,_.work,{bits:5}),D=!1}_.lencode=B,_.lenbits=9,_.distcode=j,_.distbits=5}function X(_,z,o,M){var tt,H=_.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new r.Buf8(H.wsize)),M>=H.wsize?(r.arraySet(H.window,z,o-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):(M<(tt=H.wsize-H.wnext)&&(tt=M),r.arraySet(H.window,z,o-M,tt,H.wnext),(M-=tt)?(r.arraySet(H.window,z,o-M,M,0),H.wnext=M,H.whave=H.wsize):(H.wnext+=tt,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=tt))),0}n.inflateReset=E,n.inflateReset2=C,n.inflateResetKeep=S,n.inflateInit=function(_){return O(_,15)},n.inflateInit2=O,n.inflate=function(_,z){var o,M,tt,H,et,N,Q,I,T,Y,W,Z,ot,ct,it,st,ut,at,ft,dt,i,P,R,v,p=0,x=new r.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return u;(o=_.state).mode===12&&(o.mode=13),et=_.next_out,tt=_.output,Q=_.avail_out,H=_.next_in,M=_.input,N=_.avail_in,I=o.hold,T=o.bits,Y=N,W=Q,P=g;t:for(;;)switch(o.mode){case k:if(o.wrap===0){o.mode=13;break}for(;T<16;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(2&o.wrap&&I===35615){x[o.check=0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0),T=I=0,o.mode=2;break}if(o.flags=0,o.head&&(o.head.done=!1),!(1&o.wrap)||(((255&I)<<8)+(I>>8))%31){_.msg="incorrect header check",o.mode=30;break}if((15&I)!=8){_.msg="unknown compression method",o.mode=30;break}if(T-=4,i=8+(15&(I>>>=4)),o.wbits===0)o.wbits=i;else if(i>o.wbits){_.msg="invalid window size",o.mode=30;break}o.dmax=1<<i,_.adler=o.check=1,o.mode=512&I?10:12,T=I=0;break;case 2:for(;T<16;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(o.flags=I,(255&o.flags)!=8){_.msg="unknown compression method",o.mode=30;break}if(57344&o.flags){_.msg="unknown header flags set",o.mode=30;break}o.head&&(o.head.text=I>>8&1),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),T=I=0,o.mode=3;case 3:for(;T<32;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.head&&(o.head.time=I),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,x[2]=I>>>16&255,x[3]=I>>>24&255,o.check=l(o.check,x,4,0)),T=I=0,o.mode=4;case 4:for(;T<16;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.head&&(o.head.xflags=255&I,o.head.os=I>>8),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),T=I=0,o.mode=5;case 5:if(1024&o.flags){for(;T<16;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.length=I,o.head&&(o.head.extra_len=I),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),T=I=0}else o.head&&(o.head.extra=null);o.mode=6;case 6:if(1024&o.flags&&(N<(Z=o.length)&&(Z=N),Z&&(o.head&&(i=o.head.extra_len-o.length,o.head.extra||(o.head.extra=new Array(o.head.extra_len)),r.arraySet(o.head.extra,M,H,Z,i)),512&o.flags&&(o.check=l(o.check,M,Z,H)),N-=Z,H+=Z,o.length-=Z),o.length))break t;o.length=0,o.mode=7;case 7:if(2048&o.flags){if(N===0)break t;for(Z=0;i=M[H+Z++],o.head&&i&&o.length<65536&&(o.head.name+=String.fromCharCode(i)),i&&Z<N;);if(512&o.flags&&(o.check=l(o.check,M,Z,H)),N-=Z,H+=Z,i)break t}else o.head&&(o.head.name=null);o.length=0,o.mode=8;case 8:if(4096&o.flags){if(N===0)break t;for(Z=0;i=M[H+Z++],o.head&&i&&o.length<65536&&(o.head.comment+=String.fromCharCode(i)),i&&Z<N;);if(512&o.flags&&(o.check=l(o.check,M,Z,H)),N-=Z,H+=Z,i)break t}else o.head&&(o.head.comment=null);o.mode=9;case 9:if(512&o.flags){for(;T<16;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(I!==(65535&o.check)){_.msg="header crc mismatch",o.mode=30;break}T=I=0}o.head&&(o.head.hcrc=o.flags>>9&1,o.head.done=!0),_.adler=o.check=0,o.mode=12;break;case 10:for(;T<32;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}_.adler=o.check=d(I),T=I=0,o.mode=11;case 11:if(o.havedict===0)return _.next_out=et,_.avail_out=Q,_.next_in=H,_.avail_in=N,o.hold=I,o.bits=T,2;_.adler=o.check=1,o.mode=12;case 12:if(z===5||z===6)break t;case 13:if(o.last){I>>>=7&T,T-=7&T,o.mode=27;break}for(;T<3;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}switch(o.last=1&I,T-=1,3&(I>>>=1)){case 0:o.mode=14;break;case 1:if(G(o),o.mode=20,z!==6)break;I>>>=2,T-=2;break t;case 2:o.mode=17;break;case 3:_.msg="invalid block type",o.mode=30}I>>>=2,T-=2;break;case 14:for(I>>>=7&T,T-=7&T;T<32;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if((65535&I)!=(I>>>16^65535)){_.msg="invalid stored block lengths",o.mode=30;break}if(o.length=65535&I,T=I=0,o.mode=15,z===6)break t;case 15:o.mode=16;case 16:if(Z=o.length){if(N<Z&&(Z=N),Q<Z&&(Z=Q),Z===0)break t;r.arraySet(tt,M,H,Z,et),N-=Z,H+=Z,Q-=Z,et+=Z,o.length-=Z;break}o.mode=12;break;case 17:for(;T<14;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(o.nlen=257+(31&I),I>>>=5,T-=5,o.ndist=1+(31&I),I>>>=5,T-=5,o.ncode=4+(15&I),I>>>=4,T-=4,286<o.nlen||30<o.ndist){_.msg="too many length or distance symbols",o.mode=30;break}o.have=0,o.mode=18;case 18:for(;o.have<o.ncode;){for(;T<3;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.lens[U[o.have++]]=7&I,I>>>=3,T-=3}for(;o.have<19;)o.lens[U[o.have++]]=0;if(o.lencode=o.lendyn,o.lenbits=7,R={bits:o.lenbits},P=b(0,o.lens,0,19,o.lencode,0,o.work,R),o.lenbits=R.bits,P){_.msg="invalid code lengths set",o.mode=30;break}o.have=0,o.mode=19;case 19:for(;o.have<o.nlen+o.ndist;){for(;st=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=T);){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(ut<16)I>>>=it,T-=it,o.lens[o.have++]=ut;else{if(ut===16){for(v=it+2;T<v;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(I>>>=it,T-=it,o.have===0){_.msg="invalid bit length repeat",o.mode=30;break}i=o.lens[o.have-1],Z=3+(3&I),I>>>=2,T-=2}else if(ut===17){for(v=it+3;T<v;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}T-=it,i=0,Z=3+(7&(I>>>=it)),I>>>=3,T-=3}else{for(v=it+7;T<v;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}T-=it,i=0,Z=11+(127&(I>>>=it)),I>>>=7,T-=7}if(o.have+Z>o.nlen+o.ndist){_.msg="invalid bit length repeat",o.mode=30;break}for(;Z--;)o.lens[o.have++]=i}}if(o.mode===30)break;if(o.lens[256]===0){_.msg="invalid code -- missing end-of-block",o.mode=30;break}if(o.lenbits=9,R={bits:o.lenbits},P=b(w,o.lens,0,o.nlen,o.lencode,0,o.work,R),o.lenbits=R.bits,P){_.msg="invalid literal/lengths set",o.mode=30;break}if(o.distbits=6,o.distcode=o.distdyn,R={bits:o.distbits},P=b(f,o.lens,o.nlen,o.ndist,o.distcode,0,o.work,R),o.distbits=R.bits,P){_.msg="invalid distances set",o.mode=30;break}if(o.mode=20,z===6)break t;case 20:o.mode=21;case 21:if(6<=N&&258<=Q){_.next_out=et,_.avail_out=Q,_.next_in=H,_.avail_in=N,o.hold=I,o.bits=T,h(_,W),et=_.next_out,tt=_.output,Q=_.avail_out,H=_.next_in,M=_.input,N=_.avail_in,I=o.hold,T=o.bits,o.mode===12&&(o.back=-1);break}for(o.back=0;st=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=T);){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(st&&!(240&st)){for(at=it,ft=st,dt=ut;st=(p=o.lencode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=T);){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}I>>>=at,T-=at,o.back+=at}if(I>>>=it,T-=it,o.back+=it,o.length=ut,st===0){o.mode=26;break}if(32&st){o.back=-1,o.mode=12;break}if(64&st){_.msg="invalid literal/length code",o.mode=30;break}o.extra=15&st,o.mode=22;case 22:if(o.extra){for(v=o.extra;T<v;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.length+=I&(1<<o.extra)-1,I>>>=o.extra,T-=o.extra,o.back+=o.extra}o.was=o.length,o.mode=23;case 23:for(;st=(p=o.distcode[I&(1<<o.distbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=T);){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(!(240&st)){for(at=it,ft=st,dt=ut;st=(p=o.distcode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=T);){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}I>>>=at,T-=at,o.back+=at}if(I>>>=it,T-=it,o.back+=it,64&st){_.msg="invalid distance code",o.mode=30;break}o.offset=ut,o.extra=15&st,o.mode=24;case 24:if(o.extra){for(v=o.extra;T<v;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}o.offset+=I&(1<<o.extra)-1,I>>>=o.extra,T-=o.extra,o.back+=o.extra}if(o.offset>o.dmax){_.msg="invalid distance too far back",o.mode=30;break}o.mode=25;case 25:if(Q===0)break t;if(Z=W-Q,o.offset>Z){if((Z=o.offset-Z)>o.whave&&o.sane){_.msg="invalid distance too far back",o.mode=30;break}ot=Z>o.wnext?(Z-=o.wnext,o.wsize-Z):o.wnext-Z,Z>o.length&&(Z=o.length),ct=o.window}else ct=tt,ot=et-o.offset,Z=o.length;for(Q<Z&&(Z=Q),Q-=Z,o.length-=Z;tt[et++]=ct[ot++],--Z;);o.length===0&&(o.mode=21);break;case 26:if(Q===0)break t;tt[et++]=o.length,Q--,o.mode=21;break;case 27:if(o.wrap){for(;T<32;){if(N===0)break t;N--,I|=M[H++]<<T,T+=8}if(W-=Q,_.total_out+=W,o.total+=W,W&&(_.adler=o.check=o.flags?l(o.check,tt,W,et-W):a(o.check,tt,W,et-W)),W=Q,(o.flags?I:d(I))!==o.check){_.msg="incorrect data check",o.mode=30;break}T=I=0}o.mode=28;case 28:if(o.wrap&&o.flags){for(;T<32;){if(N===0)break t;N--,I+=M[H++]<<T,T+=8}if(I!==(4294967295&o.total)){_.msg="incorrect length check",o.mode=30;break}T=I=0}o.mode=29;case 29:P=1;break t;case 30:P=-3;break t;case 31:return-4;case 32:default:return u}return _.next_out=et,_.avail_out=Q,_.next_in=H,_.avail_in=N,o.hold=I,o.bits=T,(o.wsize||W!==_.avail_out&&o.mode<30&&(o.mode<27||z!==4))&&X(_,_.output,_.next_out,W-_.avail_out)?(o.mode=31,-4):(Y-=_.avail_in,W-=_.avail_out,_.total_in+=Y,_.total_out+=W,o.total+=W,o.wrap&&W&&(_.adler=o.check=o.flags?l(o.check,tt,W,_.next_out-W):a(o.check,tt,W,_.next_out-W)),_.data_type=o.bits+(o.last?64:0)+(o.mode===12?128:0)+(o.mode===20||o.mode===15?256:0),(Y==0&&W===0||z===4)&&P===g&&(P=-5),P)},n.inflateEnd=function(_){if(!_||!_.state)return u;var z=_.state;return z.window&&(z.window=null),_.state=null,g},n.inflateGetHeader=function(_,z){var o;return _&&_.state&&2&(o=_.state).wrap?((o.head=z).done=!1,g):u},n.inflateSetDictionary=function(_,z){var o,M=z.length;return _&&_.state?(o=_.state).wrap!==0&&o.mode!==11?u:o.mode===11&&a(1,z,M,0)!==o.check?-3:X(_,z,M,M)?(o.mode=31,-4):(o.havedict=1,g):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,n){var r=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(w,f,g,u,k,c,m,d){var y,S,E,C,O,B,j,D,G,X=d.bits,_=0,z=0,o=0,M=0,tt=0,H=0,et=0,N=0,Q=0,I=0,T=null,Y=0,W=new r.Buf16(16),Z=new r.Buf16(16),ot=null,ct=0;for(_=0;_<=15;_++)W[_]=0;for(z=0;z<u;z++)W[f[g+z]]++;for(tt=X,M=15;1<=M&&W[M]===0;M--);if(M<tt&&(tt=M),M===0)return k[c++]=20971520,k[c++]=20971520,d.bits=1,0;for(o=1;o<M&&W[o]===0;o++);for(tt<o&&(tt=o),_=N=1;_<=15;_++)if(N<<=1,(N-=W[_])<0)return-1;if(0<N&&(w===0||M!==1))return-1;for(Z[1]=0,_=1;_<15;_++)Z[_+1]=Z[_]+W[_];for(z=0;z<u;z++)f[g+z]!==0&&(m[Z[f[g+z]]++]=z);if(B=w===0?(T=ot=m,19):w===1?(T=a,Y-=257,ot=l,ct-=257,256):(T=h,ot=b,-1),_=o,O=c,et=z=I=0,E=-1,C=(Q=1<<(H=tt))-1,w===1&&852<Q||w===2&&592<Q)return 1;for(;;){for(j=_-et,G=m[z]<B?(D=0,m[z]):m[z]>B?(D=ot[ct+m[z]],T[Y+m[z]]):(D=96,0),y=1<<_-et,o=S=1<<H;k[O+(I>>et)+(S-=y)]=j<<24|D<<16|G|0,S!==0;);for(y=1<<_-1;I&y;)y>>=1;if(y!==0?(I&=y-1,I+=y):I=0,z++,--W[_]==0){if(_===M)break;_=f[g+m[z]]}if(tt<_&&(I&C)!==E){for(et===0&&(et=tt),O+=o,N=1<<(H=_-et);H+et<M&&!((N-=W[H+et])<=0);)H++,N<<=1;if(Q+=1<<H,w===1&&852<Q||w===2&&592<Q)return 1;k[E=I&C]=tt<<24|H<<16|O-c|0}}return I!==0&&(k[O+I]=_-et<<24|64<<16|0),d.bits=tt,0}},{"../utils/common":41}],51:[function(e,s,n){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,n){var r=e("../utils/common"),a=0,l=1;function h(p){for(var x=p.length;0<=--x;)p[x]=0}var b=0,w=29,f=256,g=f+1+w,u=30,k=19,c=2*g+1,m=15,d=16,y=7,S=256,E=16,C=17,O=18,B=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],j=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],D=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],G=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(g+2));h(X);var _=new Array(2*u);h(_);var z=new Array(512);h(z);var o=new Array(256);h(o);var M=new Array(w);h(M);var tt,H,et,N=new Array(u);function Q(p,x,U,$,A){this.static_tree=p,this.extra_bits=x,this.extra_base=U,this.elems=$,this.max_length=A,this.has_stree=p&&p.length}function I(p,x){this.dyn_tree=p,this.max_code=0,this.stat_desc=x}function T(p){return p<256?z[p]:z[256+(p>>>7)]}function Y(p,x){p.pending_buf[p.pending++]=255&x,p.pending_buf[p.pending++]=x>>>8&255}function W(p,x,U){p.bi_valid>d-U?(p.bi_buf|=x<<p.bi_valid&65535,Y(p,p.bi_buf),p.bi_buf=x>>d-p.bi_valid,p.bi_valid+=U-d):(p.bi_buf|=x<<p.bi_valid&65535,p.bi_valid+=U)}function Z(p,x,U){W(p,U[2*x],U[2*x+1])}function ot(p,x){for(var U=0;U|=1&p,p>>>=1,U<<=1,0<--x;);return U>>>1}function ct(p,x,U){var $,A,q=new Array(m+1),K=0;for($=1;$<=m;$++)q[$]=K=K+U[$-1]<<1;for(A=0;A<=x;A++){var V=p[2*A+1];V!==0&&(p[2*A]=ot(q[V]++,V))}}function it(p){var x;for(x=0;x<g;x++)p.dyn_ltree[2*x]=0;for(x=0;x<u;x++)p.dyn_dtree[2*x]=0;for(x=0;x<k;x++)p.bl_tree[2*x]=0;p.dyn_ltree[2*S]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function st(p){8<p.bi_valid?Y(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function ut(p,x,U,$){var A=2*x,q=2*U;return p[A]<p[q]||p[A]===p[q]&&$[x]<=$[U]}function at(p,x,U){for(var $=p.heap[U],A=U<<1;A<=p.heap_len&&(A<p.heap_len&&ut(x,p.heap[A+1],p.heap[A],p.depth)&&A++,!ut(x,$,p.heap[A],p.depth));)p.heap[U]=p.heap[A],U=A,A<<=1;p.heap[U]=$}function ft(p,x,U){var $,A,q,K,V=0;if(p.last_lit!==0)for(;$=p.pending_buf[p.d_buf+2*V]<<8|p.pending_buf[p.d_buf+2*V+1],A=p.pending_buf[p.l_buf+V],V++,$===0?Z(p,A,x):(Z(p,(q=o[A])+f+1,x),(K=B[q])!==0&&W(p,A-=M[q],K),Z(p,q=T(--$),U),(K=j[q])!==0&&W(p,$-=N[q],K)),V<p.last_lit;);Z(p,S,x)}function dt(p,x){var U,$,A,q=x.dyn_tree,K=x.stat_desc.static_tree,V=x.stat_desc.has_stree,J=x.stat_desc.elems,nt=-1;for(p.heap_len=0,p.heap_max=c,U=0;U<J;U++)q[2*U]!==0?(p.heap[++p.heap_len]=nt=U,p.depth[U]=0):q[2*U+1]=0;for(;p.heap_len<2;)q[2*(A=p.heap[++p.heap_len]=nt<2?++nt:0)]=1,p.depth[A]=0,p.opt_len--,V&&(p.static_len-=K[2*A+1]);for(x.max_code=nt,U=p.heap_len>>1;1<=U;U--)at(p,q,U);for(A=J;U=p.heap[1],p.heap[1]=p.heap[p.heap_len--],at(p,q,1),$=p.heap[1],p.heap[--p.heap_max]=U,p.heap[--p.heap_max]=$,q[2*A]=q[2*U]+q[2*$],p.depth[A]=(p.depth[U]>=p.depth[$]?p.depth[U]:p.depth[$])+1,q[2*U+1]=q[2*$+1]=A,p.heap[1]=A++,at(p,q,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],function(rt,ht){var vt,mt,yt,lt,Ot,xe,gt=ht.dyn_tree,Ce=ht.max_code,Te=ht.stat_desc.static_tree,Ie=ht.stat_desc.has_stree,Re=ht.stat_desc.extra_bits,Ee=ht.stat_desc.extra_base,wt=ht.stat_desc.max_length,Ut=0;for(lt=0;lt<=m;lt++)rt.bl_count[lt]=0;for(gt[2*rt.heap[rt.heap_max]+1]=0,vt=rt.heap_max+1;vt<c;vt++)wt<(lt=gt[2*gt[2*(mt=rt.heap[vt])+1]+1]+1)&&(lt=wt,Ut++),gt[2*mt+1]=lt,Ce<mt||(rt.bl_count[lt]++,Ot=0,Ee<=mt&&(Ot=Re[mt-Ee]),xe=gt[2*mt],rt.opt_len+=xe*(lt+Ot),Ie&&(rt.static_len+=xe*(Te[2*mt+1]+Ot)));if(Ut!==0){do{for(lt=wt-1;rt.bl_count[lt]===0;)lt--;rt.bl_count[lt]--,rt.bl_count[lt+1]+=2,rt.bl_count[wt]--,Ut-=2}while(0<Ut);for(lt=wt;lt!==0;lt--)for(mt=rt.bl_count[lt];mt!==0;)Ce<(yt=rt.heap[--vt])||(gt[2*yt+1]!==lt&&(rt.opt_len+=(lt-gt[2*yt+1])*gt[2*yt],gt[2*yt+1]=lt),mt--)}}(p,x),ct(q,nt,p.bl_count)}function i(p,x,U){var $,A,q=-1,K=x[1],V=0,J=7,nt=4;for(K===0&&(J=138,nt=3),x[2*(U+1)+1]=65535,$=0;$<=U;$++)A=K,K=x[2*($+1)+1],++V<J&&A===K||(V<nt?p.bl_tree[2*A]+=V:A!==0?(A!==q&&p.bl_tree[2*A]++,p.bl_tree[2*E]++):V<=10?p.bl_tree[2*C]++:p.bl_tree[2*O]++,q=A,nt=(V=0)===K?(J=138,3):A===K?(J=6,3):(J=7,4))}function P(p,x,U){var $,A,q=-1,K=x[1],V=0,J=7,nt=4;for(K===0&&(J=138,nt=3),$=0;$<=U;$++)if(A=K,K=x[2*($+1)+1],!(++V<J&&A===K)){if(V<nt)for(;Z(p,A,p.bl_tree),--V!=0;);else A!==0?(A!==q&&(Z(p,A,p.bl_tree),V--),Z(p,E,p.bl_tree),W(p,V-3,2)):V<=10?(Z(p,C,p.bl_tree),W(p,V-3,3)):(Z(p,O,p.bl_tree),W(p,V-11,7));q=A,nt=(V=0)===K?(J=138,3):A===K?(J=6,3):(J=7,4)}}h(N);var R=!1;function v(p,x,U,$){W(p,(b<<1)+($?1:0),3),function(A,q,K,V){st(A),Y(A,K),Y(A,~K),r.arraySet(A.pending_buf,A.window,q,K,A.pending),A.pending+=K}(p,x,U)}n._tr_init=function(p){R||(function(){var x,U,$,A,q,K=new Array(m+1);for(A=$=0;A<w-1;A++)for(M[A]=$,x=0;x<1<<B[A];x++)o[$++]=A;for(o[$-1]=A,A=q=0;A<16;A++)for(N[A]=q,x=0;x<1<<j[A];x++)z[q++]=A;for(q>>=7;A<u;A++)for(N[A]=q<<7,x=0;x<1<<j[A]-7;x++)z[256+q++]=A;for(U=0;U<=m;U++)K[U]=0;for(x=0;x<=143;)X[2*x+1]=8,x++,K[8]++;for(;x<=255;)X[2*x+1]=9,x++,K[9]++;for(;x<=279;)X[2*x+1]=7,x++,K[7]++;for(;x<=287;)X[2*x+1]=8,x++,K[8]++;for(ct(X,g+1,K),x=0;x<u;x++)_[2*x+1]=5,_[2*x]=ot(x,5);tt=new Q(X,B,f+1,g,m),H=new Q(_,j,0,u,m),et=new Q(new Array(0),D,0,k,y)}(),R=!0),p.l_desc=new I(p.dyn_ltree,tt),p.d_desc=new I(p.dyn_dtree,H),p.bl_desc=new I(p.bl_tree,et),p.bi_buf=0,p.bi_valid=0,it(p)},n._tr_stored_block=v,n._tr_flush_block=function(p,x,U,$){var A,q,K=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=function(V){var J,nt=4093624447;for(J=0;J<=31;J++,nt>>>=1)if(1&nt&&V.dyn_ltree[2*J]!==0)return a;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return l;for(J=32;J<f;J++)if(V.dyn_ltree[2*J]!==0)return l;return a}(p)),dt(p,p.l_desc),dt(p,p.d_desc),K=function(V){var J;for(i(V,V.dyn_ltree,V.l_desc.max_code),i(V,V.dyn_dtree,V.d_desc.max_code),dt(V,V.bl_desc),J=k-1;3<=J&&V.bl_tree[2*G[J]+1]===0;J--);return V.opt_len+=3*(J+1)+5+5+4,J}(p),A=p.opt_len+3+7>>>3,(q=p.static_len+3+7>>>3)<=A&&(A=q)):A=q=U+5,U+4<=A&&x!==-1?v(p,x,U,$):p.strategy===4||q===A?(W(p,2+($?1:0),3),ft(p,X,_)):(W(p,4+($?1:0),3),function(V,J,nt,rt){var ht;for(W(V,J-257,5),W(V,nt-1,5),W(V,rt-4,4),ht=0;ht<rt;ht++)W(V,V.bl_tree[2*G[ht]+1],3);P(V,V.dyn_ltree,J-1),P(V,V.dyn_dtree,nt-1)}(p,p.l_desc.max_code+1,p.d_desc.max_code+1,K+1),ft(p,p.dyn_ltree,p.dyn_dtree)),it(p),$&&st(p)},n._tr_tally=function(p,x,U){return p.pending_buf[p.d_buf+2*p.last_lit]=x>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&x,p.pending_buf[p.l_buf+p.last_lit]=255&U,p.last_lit++,x===0?p.dyn_ltree[2*U]++:(p.matches++,x--,p.dyn_ltree[2*(o[U]+f+1)]++,p.dyn_dtree[2*T(x)]++),p.last_lit===p.lit_bufsize-1},n._tr_align=function(p){W(p,2,3),Z(p,S,X),function(x){x.bi_valid===16?(Y(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(p)}},{"../utils/common":41}],53:[function(e,s,n){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,n){(function(r){(function(a,l){if(!a.setImmediate){var h,b,w,f,g=1,u={},k=!1,c=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,h={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){y(E)})}:function(){if(a.postMessage&&!a.importScripts){var E=!0,C=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=C,E}}()?(f="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",S,!1):a.attachEvent("onmessage",S),function(E){a.postMessage(f+E,"*")}):a.MessageChannel?((w=new MessageChannel).port1.onmessage=function(E){y(E.data)},function(E){w.port2.postMessage(E)}):c&&"onreadystatechange"in c.createElement("script")?(b=c.documentElement,function(E){var C=c.createElement("script");C.onreadystatechange=function(){y(E),C.onreadystatechange=null,b.removeChild(C),C=null},b.appendChild(C)}):function(E){setTimeout(y,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),O=0;O<C.length;O++)C[O]=arguments[O+1];var B={callback:E,args:C};return u[g]=B,h(g),g++},m.clearImmediate=d}function d(E){delete u[E]}function y(E){if(k)setTimeout(y,0,E);else{var C=u[E];if(C){k=!0;try{(function(O){var B=O.callback,j=O.args;switch(j.length){case 0:B();break;case 1:B(j[0]);break;case 2:B(j[0],j[1]);break;case 3:B(j[0],j[1],j[2]);break;default:B.apply(l,j)}})(C)}finally{d(E),k=!1}}}}function S(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(f)===0&&y(+E.data.slice(f.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jszip_min);var jszip_minExports=jszip_min.exports;const JSZip=getDefaultExportFromCjs(jszip_minExports),defaultItems$1=3,storeGistKey$1="metal-sheet-lists",storeDataKey$1="metalSheetLists",content$4=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$1}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>

    <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
`,ve=class ve extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$4,this.style.position="relative",this.ui.title="Blech Listen",this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$1,this.storeMetalSheetListsHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$1,[])},t.ui.onUpdate=this.update.bind(this),t.ui.setExportHandler(async()=>{const e=new JSZip;for(const n of this.uiStore.ui.get(storeDataKey$1)){const r=getFileName$1(n),a=JSON.stringify(n);e.file(r,a)}const s=await e.generateAsync({type:"blob"});FileSaver.saveAs(s,`blech-listen-${new Date().getTime()}.zip`)})}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){console.debug("[PGDrawerMetalSheetLists.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey:storeDataKey$1,getKey:getKey$1})}async storeGistHandler(t){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey:storeGistKey$1,storeDataKey:storeDataKey$1,getFileName:getFileName$1,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:t}),!t)return;const e=[...this.children].slice(defaultItems$1);for(;e.length>0;)this.removeChild(e.pop());for(const s of metalSheetLists(t)){const n=new PGDrawerItemMetalSheetList;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists",a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.format} - ${s.toolID} - ${s.date}"`)&&this.uiStore.ui.update(storeDataKey$1,r=>{const a=getKey$1(s);return r.filter(l=>getKey$1(l)!==a)})})}}};F(ve,"register",()=>{customElements.define("pg-drawer-metal-sheet-lists",ve)});let PGDrawerMetalSheetLists=ve;const content$3=html`
    <drawer-import-button gist-key="vis-data" disabled></drawer-import-button>

    <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
            New Data
        </ui-button>
    </ui-drawer-group-item>
`,ye=class ye extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$3,this.ui.title="Vis Data",this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){this.ui.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.onUpdate=this.update.bind(this),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}async validate(t){return t}async update(t){}onVisData(t){if(console.debug("[PGDrawerVisData.onVisData]",{lists:t}),!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new PGDrawerItemVisData;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data");const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",r=>r.filter(a=>a.title!==s.title))})}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new NewVisDataDialog;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};F(ye,"register",()=>{customElements.define("pg-drawer-vis-data",ye)});let PGDrawerVisData=ye;const defaultItems=2,storeGistKey="vis",storeDataKey="vis",content$2=html`
    <drawer-import-button
        store-gist-key="${storeGistKey}"
    ></drawer-import-button>
    <drawer-gist-item></drawer-gist-item>
`,we=class we extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$2,this.ui.title="Vis",this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey,this.storeVisHandler.bind(this),!0));const t=this.querySelector("drawer-import-button");t.ui.onValidate=this.validate.bind(this),t.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey,[])},t.ui.onUpdate=this.update.bind(this)}async toJSON(t){const e=h=>{const[b,w]=h.split(/[xX]/),f=parseFloat(b),g=parseFloat(w);return!f||!g?`${f}x${g}`:`${f>g?f:g}x${f<g?f:g}`},s=new Date,n=(s.getMonth()+1).toString().padStart(2,"0"),r=s.getDate().toString().padStart(2,"0"),a={date:s.getTime(),title:`${s.getFullYear()}-${n}-${r}`,data:[]},l=t.split(`
`);for(let h=0;h<l.length;h++){if(!l[h])continue;let[b,...w]=l[h].trim().replace(/\t/g," ").split(" ");b=b.trim();const{productName:f,format:g,newRest:u}=(()=>{let m="",d="";for(let y=0;y<w.length;y++)if(w[y].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){d=e(w[y]),w=w.slice(y+1);break}else m+=w[y]+" ";return{productName:m.trim(),format:e(d),newRest:w.map(y=>y.trim()).filter(y=>!!y)}})();if(!g)throw`missing format for "${f}" (lotto: "${b}") in vis (txt) data!`;if(!(u[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${f}" with lotto "${b}"!`;const k=u.shift()||"",c=u.join(" ");a.data.push({lotto:b,name:f,format:g,thickness:parseFloat(k.replaceAll(",",".")),stamp:c})}return a}async validate(t){const e=n=>new Error(`invalid data for product:
${JSON.stringify(n,null,4)}`);let s=null;if(typeof t=="string")try{s=JSON.parse(t)}catch{return await this.toJSON(t)}else s=t;if(typeof s.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof s.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(s.data))throw new Error('invalid data: "data" not from type "array"');for(const n of s.data)if(typeof n.lotto!="string"||typeof n.name!="string"||typeof n.format!="string"||typeof n.thickness!="number"||typeof n.stamp!="string")throw e(n);return s}async update(t){console.debug("[PGDrawerVis.update]",{data:t}),updateStore(this.uiStore,t,{storeDataKey,getKey})}storeGistHandler(t){console.debug("[PGDrawerVis.storeGistHandler]",{data:t}),storeGistHandler(this.querySelector("drawer-gist-item"),t,{storeGistKey,storeDataKey,getFileName,onUpdate:this.update.bind(this)})}storeVisHandler(t){if(console.debug("[PGDrawerVis.storeVisHandler]",{lists:t}),!t)return;const e=[...this.children].slice(defaultItems);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new PGDrawerItemVis;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis",a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update(storeDataKey,r=>r.filter(a=>a.title!==s.title))})}}};F(we,"register",()=>{customElements.define("pg-drawer-vis",we)});let PGDrawerVis=we;const content$1=html`
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
`,ke=class ke extends UIDrawer{constructor(){super(),this.innerHTML=content$1}};F(ke,"register",()=>{customElements.define("pg-drawer",ke)});let PGDrawer=ke;function storeGistHandler(L,t,{storeGistKey:e,storeDataKey:s,getFileName:n,onUpdate:r}){if(!t)return;const a=document.querySelector("ui-store"),l=t[e];if(!l){L.ui.set(null,null),L.ui.onPull=null,L.ui.onPush=null;return}L.ui.set(l.id,l.revision);let h;const b=()=>{h&&L.removeChild(h),h=new UISpinner,L.appendChild(h)},w=()=>{h&&(L.removeChild(h),h=void 0)};L.ui.onPull=async(f,g)=>{b();try{await gistPull(f,g,{beforeUpdate:async()=>{a.ui.set(s,[])},update:r,updateRevision:u=>{a.ui.update("gist",k=>(k[e]={id:f,revision:u},k))}})}finally{w()}},L.ui.onPush=async(f,g)=>{b();try{const u=a.ui.get(s);if(!Array.isArray(u)){alert("No data to push!");return}await gistPush(f,g,u,{getFileName:n,updateRevision:k=>{a.ui.update("gist",c=>(c[e]={id:f,revision:k},c))}})}finally{w()}}}function updateStore(L,t,{storeDataKey:e,getKey:s}){const n=s(t);if(L.ui.get(e).find(r=>s(r)===n)){L.ui.update(e,r=>r.map(a=>s(a)===n?t:a));return}L.ui.update(e,r=>[...r,t])}const svgChevronLeft=html`
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
`,svgMenu=html`
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
`,svgPen=html`
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
`,svgShare=html`
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
`,_e=class _e extends UIAppBar{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout")}render(){super.render(),this.innerHTML=html`
            <ui-app-bar-item name="menu" slot="left">
                <ui-icon-button ghost> ${svgMenu} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="back" slot="left" style="display: none">
                <ui-icon-button ghost> ${svgChevronLeft} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="title" slot="center">
                <h4 class="title" style="white-space: nowrap;"></h4>
            </ui-app-bar-item>

            <ui-app-bar-item name="edit" slot="right">
                <ui-icon-button ghost> ${svgPen} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="share" slot="right">
                <ui-icon-button ghost> ${svgShare} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="search" slot="right">
                <ui-icon-button ghost> ${svgSearch} </ui-icon-button>
            </ui-app-bar-item>
        `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}connectedCallback(){this.setAttribute("position","top")}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const s=this.uiStore.ui.get("edit").onClick;typeof s=="function"&&s()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{const s=this.uiStore.ui.get("share"),n=async()=>{const r=document.createElement("a");for(const a of s.files)r.download=a.name,r.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),r.click()};if(!navigator.canShare)return await n();if(navigator.canShare(s)){try{await navigator.share(s)}catch{await n()}return}await n()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",s=>({...s,active:!s.active}))),t}};F(_e,"register",()=>{customElements.define("pg-app-bar",_e)});let PGAppBar=_e;const content=html`
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
`,Se=class Se extends HTMLElement{constructor(){super(),this.innerHTML=content,this.cleanup=new CleanUp,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.stackSize()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"alert":this.setupAlertPage();break;case"metal-sheet-lists":this.setupMetalSheetListsPage();break;case"vis":this.setupVisPage();break;case"product":this.setupProductPage();break;case"vis-data":break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new AlertListsPage),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new MetalSheetListsPage),this.stackLayout.ui.registerPage("vis",()=>new VisPage),this.stackLayout.ui.registerPage("vis-data",()=>new VisDataPage)}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.show()}setupVisPage(){this.resetAppBar(),this.pgAppBar.items.share.ui.show(),this.pgAppBar.items.search.ui.show()}setupProductPage(){this.resetAppBar()}setupAlertPage(){this.resetAppBar()}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.show()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};F(Se,"register",()=>{customElements.define("pg-app",Se)});let PGApp=Se;registerSW({onRegistered(L){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${version}`),await L.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});register();ImportDialog.register();NewVisDataDialog.register();PushDialog.register();AlertPage.register();AlertListsPage.register();MetalSheetCreateDialog.register();MetalSheetModifyEntryDialog.register();MetalSheetNewEntryDialog.register();MetalSheetActions.register();MetalSheetListsPage.register();ProductPage.register();VisPage.register();VisDataPage.register();PGDrawerAlertLists.register();PGDrawerMetalSheetLists.register();PGDrawerVisData.register();PGDrawerVis.register();DrawerGistItem.register();DrawerImportButton.register();DrawerNewMetalSheetListButton.register();DrawerRevision.register();PGDrawerItemAlertList.register();PGDrawerItemMetalSheetList.register();PGDrawerItemVisData.register();PGDrawerItemVis.register();PGDrawer.register();SearchBar.register();PGAppBar.register();PGApp.register();
