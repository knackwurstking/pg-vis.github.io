var gr=Object.defineProperty;var Vi=L=>{throw TypeError(L)};var br=(L,t,e)=>t in L?gr(L,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):L[t]=e;var W=(L,t,e)=>br(L,typeof t!="symbol"?t+"":t,e),vr=(L,t,e)=>t.has(L)||Vi("Cannot "+e);var xt=(L,t,e)=>(vr(L,t,"read from private field"),e?e.call(L):t.get(L)),Wi=(L,t,e)=>t.has(L)?Vi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(L):t.set(L,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Gi={onDragStart:null,onDragging:null,onDragEnd:null};function yr(L,t={}){t={...Gi,...t};const e=()=>{const r=[...L.parentNode.children].indexOf(L);L.draggable=!0,L.ondragstart=o=>{o.dataTransfer.effectAllowed="move",o.dataTransfer.dropEffect="move",o.dataTransfer.setData("text/plain",r.toString()),t.onDragStart&&t.onDragStart(r)},L.ondragover=o=>(o.preventDefault(),!1),L.ondragenter=o=>{o.preventDefault(),t.onDragging&&t.onDragging(r)},L.ondrop=o=>{o.preventDefault(),o.dataTransfer.dropEffect="move";const a=parseInt(o.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(a,r)}},s=()=>{L.draggable=!1,L.ondragstart=null,L.ondragover=null,L.ondragenter=null,L.ondrop=null};return e(),{update(n){t={...Gi,...n},s(),e()},destroy:s}}var vt;class pt{constructor(){Wi(this,vt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return xt(this,vt)[t]||(xt(this,vt)[t]=[]),xt(this,vt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!xt(this,vt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let s=!1,n=0;for(const r of xt(this,vt)[t])r===e&&(xt(this,vt)[t].splice(n,1),s=!0),n++;if(!s)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(xt(this,vt)[t])for(const s of xt(this,vt)[t])s(e);return this}}vt=new WeakMap;function Ki(L,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,L.currentTarget.appendChild(e);const s=L.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${s.height/2}px`,e.style.left=`${s.width/2}px`):(e.style.top=`${L.clientY-s.top}px`,e.style.left=`${L.clientX-s.left}px`);const n=Math.max(s.width,s.height)*.02;return e.style.transform=`scale(${n}) translate(0, 0)`,e}function Ji(L){L&&(L.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&L.remove()}),L.style.opacity="0")}const wr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Rt(L,t={}){t={...wr,...t};let e;const s=r=>{e=Ki(r,t)},n=()=>{Ji(e)};return L.classList.add("ripple-container"),L.style.overflow="hidden",t.useClick===!0?L.addEventListener("click",r=>{e=Ki(r,t),Ji(e)}):(L.addEventListener("pointerdown",s),L.addEventListener("pointerup",n),L.addEventListener("pointerleave",n)),()=>{L.classList.remove("ripple-container"),L.removeEventListener("pointerdown",s),L.removeEventListener("pointerup",n),L.removeEventListener("pointerleave",n)}}const ot=String.raw;class Tt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ce=class Ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        `}connectedCallback(){}disconnectedCallback(){}};W(Ce,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Ce)});let ae=Ce;const Ee=class Ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        `}connectedCallback(){}disconnectedCallback(){}};W(Ee,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ee)});let di=Ee;const jt=class jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: flex;
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
        `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0}));break}}};W(jt,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",jt)}),W(jt,"observedAttributes",["noripple"]);let fi=jt;const Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
            <style>
                * {
                    box-sizing: border-box;
                }

                :host {
                    display: block;
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

                ui-svg {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
            </style>

            <ui-svg>
                <slot></slot>
            </ui-svg>
        `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0}));break}}};W(Pt,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Pt)}),W(Pt,"observedAttributes",["noripple"]);let pi=Pt;const Ae=class Ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        `}connectedCallback(){}disconnectedCallback(){}};W(Ae,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ae)});let mi=Ae;const kr=ot`
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
`,qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new Tt,this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){this.root.setAttribute("title",t||"")},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const s=this.root.shadowRoot.querySelector("dialog"),n=s.inert;s.inert=e,t?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=ot`
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
                            ${kr}
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
        `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const s=this.shadowRoot.querySelector("dialog"),n=r=>r.preventDefault();s.addEventListener("cancel",n),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),s.removeEventListener("cancel",n)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":const n=this.shadowRoot.querySelector('[name="title"]');n.innerHTML=s||"";break}}};W(qt,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",qt)}),W(qt,"observedAttributes",["title"]);let Ct=qt;const Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"open":s!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}};W(Ft,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Ft)}),W(Ft,"observedAttributes",["open"]);let le=Ft;const It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setGroupTitle(s);break}}setGroupTitle(t){let e=this.shadowRoot.querySelector(".ui-drawer-group-title");if(!t){e.classList.remove("visible");return}e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}};W(It,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",It)}),W(It,"observedAttributes",["title"]);let Lt=It;const Re=class Re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        `}connectedCallback(){}disconnectedCallback(){}};W(Re,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",Re)});let kt=Re;const Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get flex(){return this.root.getAttribute("flex")},set flex(t){if(!t){this.root.removeAttribute("flex");return}this.root.setAttribute("flex",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style name="flex">
                :host {
                    flex: 1;
                }
            </style>

            <slot></slot>
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"flex":const n=this.shadowRoot.querySelector('style[name="flex"]');n.textContent=`
                    :host {
                        flex: ${s||1};
                    }
                `;break}}};W(Nt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",Nt)}),W(Nt,"observedAttributes",["flex"]);let dt=Nt;const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const n=this.shadowRoot.querySelector('style[name="gap"]');n.textContent=`
                    :host > ::slotted(*) {
                        margin: 0 ${s||0} !important;
                    }
                `;break}}};W($t,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",$t)}),W($t,"observedAttributes",["gap"]);let ue=$t;const Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const n=this.shadowRoot.querySelector('style[name="gap"]');n.textContent=`
                    :host > ::slotted(*) {
                        margin: ${s} 0 !important;
                    }
                `;break}}};W(Ut,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Ut)}),W(Ut,"observedAttributes",["gap"]);let Et=Ut;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRipple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.hasAttribute("ripple")},set ripple(t){if(!t){this.root.removeAttribute("ripple");return}this.root.setAttribute("ripple","")},get primary(){return this.root.getAttribute("primary")},set primary(t){if(!t){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},get secondary(){return this.root.getAttribute("primary")},set secondary(t){if(!t){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"ripple":this.setRipple(s);break;case"primary":this.setPrimary(s);break;case"secondary":this.setSecondary(s);break}}setRipple(t){if(t===null){this.disableRipple();return}this.enableRipple()}setPrimary(t){this.shadowRoot.querySelector("ui-primary").innerHTML=t||""}setSecondary(t){this.shadowRoot.querySelector("ui-secondary").innerHTML=t||""}enableRipple(){if(this.removeRipple||(this.removeRipple=Rt(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.removeRipple&&this.removeRipple(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};W(Zt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Zt)}),W(Zt,"observedAttributes",["ripple","secondary","primary"]);let gi=Zt;const Le=class Le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    font-size: 1.1rem;
                    font-family: var(--ui-fontFamily);
                    font-variation-settings: var(--ui-text-primary-fontVariation);
                }
            </style>

            <slot></slot>
        `}connectedCallback(){}disconnectedCallback(){}};W(Le,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Le)});let bi=Le;const Te=class Te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    font-size: 0.9rem;
                    font-family: var(--ui-fontFamily);
                    font-variation-settings: var(--ui-text-secondary-fontVariation);
                }
            </style>

            <slot></slot>
        `}connectedCallback(){}disconnectedCallback(){}};W(Te,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Te)});let te=Te;const Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get type(){return this.root.getAttribute("type")},set type(t){if(!t){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.root.shadowRoot.querySelector("input").min},set min(t){this.root.shadowRoot.querySelector("input").min=t},get max(){return this.root.shadowRoot.querySelector("input").max},set max(t){this.root.shadowRoot.querySelector("input").max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `;const t=this.shadowRoot.querySelector("input");t.type=this.getAttribute("type")||"text",t.oninput=()=>{this.ui.events.dispatch("input",t.value)},t.onchange=()=>{this.ui.events.dispatch("change",t.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"type":this.setType(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"min":this.setMin(s);break;case"max":this.setMax(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new te,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setType(t){this.shadowRoot.querySelector("input").type=t!==null?t:""}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setMin(t){this.shadowRoot.querySelector("input").min=t}setMax(t){this.shadowRoot.querySelector("input").max=t}};W(Vt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Vt)}),W(Vt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let vi=Vt;const _r=ot`
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
`,ze=class ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};W(ze,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",ze)});let ee=ze;const Be=class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof ee)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
                <div class="icon"><ui-svg>${_r}</ui-svg></div>

                <slot></slot>
            </div>
        `;const t=s=>{const n=async r=>{(r.composedPath()||[]).forEach(o=>{o instanceof ee&&([...this.querySelectorAll("ui-select-option")].forEach(a=>a.removeAttribute("selected")),o.setAttribute("selected",""),this.ui.events.dispatch("change",o))})};this.classList.toggle("open")?(s.stopPropagation(),this.addEventListener("click",n)):setTimeout(()=>this.removeEventListener("click",n))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};W(Be,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Be)});let yi=Be;const ir=ot`
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
`,Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.root.hasAttribute("nosubmit")},set nosubmit(t){if(!t){this.root.removeAttribute("nosubmit");return}this.root.setAttribute("nosubmit","")},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.getAttribute("storagekey")},set storagekey(t){if(!t){this.root.removeAttribute("storagekey");return}this.root.setAttribute("storagekey",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
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
        <ui-icon-button name="submit" ghost>${ir}</ui-icon-button>
      </div>
    `;const t=this.shadowRoot.querySelector('[name="submit"]'),e=this.shadowRoot.querySelector("input");e.type="search",e.addEventListener("keydown",async n=>{this.ui.nosubmit||n.key==="Enter"&&t.click()});let s=null;e.addEventListener("input",async()=>{this.ui.storage&&(s!==null&&clearTimeout(s),s=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,e.value),s=null},250)),this.ui.events.dispatch("input",e.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",e.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"nosubmit":this.setNoSubmit(s);break;case"storagekey":this.setStorageKey(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new te,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setNoSubmit(t){const e=this.shadowRoot.querySelector('[name="submit"]');if(t===null){e.style.display=null;return}e.style.display="none"}setStorageKey(t){if(!this.ui.storage)return;const e=this.shadowRoot.querySelector("input");e.value=localStorage.getItem(this.ui.storageprefix+t)||"",this.ui.events.dispatch("storage",e.value)}};W(Wt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Wt)}),W(Wt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let wi=Wt;const Gt=class Gt extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new pt,get current(){return this.root.getAttribute("current")},set current(t){if(!t){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var s,n;return((n=(s=this.data)==null?void 0:s[t])==null?void 0:n[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"current":s!==null&&this.setCurrent(s);break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.getHref())throw"Missing href attribute!";try{this.data=(await fetch(e.ui.getHref())).json()}catch(s){console.error(s)}this.ui.events.dispatch("change",e)}}};W(Gt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Gt)}),W(Gt,"observedAttributes",["current"]);let ki=Gt;const Oe=class Oe extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};W(Oe,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Oe)});let _i=Oe;const Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){if(!t){this.root.removeAttribute("nobg");return}this.root.setAttribute("nobg","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    position: absolute;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
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
        `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"nobg":this.setNoBg(s);break}}setNoBg(t){if(t===null){this.shadowRoot.querySelector(".background").style.display=null;return}this.shadowRoot.querySelector(".background").style.display="none"}};W(Kt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Kt)}),W(Kt,"observedAttributes",["nobg"]);let ie=Kt;const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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
        `}connectedCallback(){}disconnectedCallback(){}};W(De,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",De)});let At=De;const He=class He extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new pt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,s=!1){if(this.lock)return;const n=this.root.pages[t]();this.root.stack.push(this.root.appendChild(n)),typeof e=="function"&&setTimeout(()=>e(n));let r=null;this.size()>1&&!s&&(r=this.root.stack[this.root.stack.length-2],r.parentElement.removeChild(r)),this.root.dispatchChangeEvent(r),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>
                :host {
                    display: block !important;
                    position: relative !important;
                    width: 100%;
                    height: 100%;
                }
            </style>

            <slot></slot>
        `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};W(He,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",He)});let xi=He;const Jt=class Jt extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new pt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,s=!1){if(s&&this.storageprefix){const n=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=n??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};W(Jt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Jt)}),W(Jt,"observedAttributes",["storageprefix"]);let Si=Jt;const Yt=class Yt extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.ui={root:this,get auto(){return this.root.hasAttribute("auto")},set auto(t){if(!t){this.root.removeAttribute("auto");return}this.root.setAttribute("auto","")},get mode(){return this.root.getAttribute("mode")},set mode(t){if(!t){this.root.removeAttribute("mode");return}this.root.setAttribute("mode",t)},add(t,e){this.root.themes[t]=e},set(t){var s;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((s=this.root.currentTheme)==null?void 0:s.name)==t)return;{const n=document.getElementById("theme");n&&(document.head.removeChild(n),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,s){switch(t){case"auto":this.setAuto(s);break;case"mode":this.setMode(s);break}}setAuto(t,e=document.body){if(t===null){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=s=>{s.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}}};W(Yt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Yt)}),W(Yt,"observedAttributes",["auto","mode"]);let Ci=Yt;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
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

            <slot></slot>
        `}connectedCallback(){}disconnectedCallback(){}};W(Me,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",Me)});let Ei=Me;function xr(){di.register(),ae.register(),fi.register(),pi.register(),mi.register(),Ct.register(),kt.register(),Lt.register(),le.register(),dt.register(),ue.register(),Et.register(),vi.register(),wi.register(),ee.register(),yi.register(),_i.register(),ki.register(),ie.register(),xi.register(),At.register(),Si.register(),Ei.register(),gi.register(),bi.register(),te.register(),Ci.register()}const Sr="modulepreload",Cr=function(L){return"/pg-vis.github.io/"+L},Yi={},Er=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.all(e.map(a=>{if(a=Cr(a),a in Yi)return;Yi[a]=!0;const u=a.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const w=document.createElement("link");if(w.rel=u?"stylesheet":Sr,u||(w.as="script",w.crossOrigin=""),w.href=a,o&&w.setAttribute("nonce",o),document.head.appendChild(w),u)return new Promise((p,b)=>{w.addEventListener("load",p),w.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function Ar(L={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:o}=L;let a,u;const g=async(p=!0)=>{await u};async function w(){if("serviceWorker"in navigator){if(a=await Er(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(p=>{o==null||o(p)}),!a)return;a.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),a.addEventListener("installed",p=>{p.isUpdate||s==null||s()}),a.register({immediate:t}).then(p=>{r?r("/pg-vis.github.io/sw.js",p):n==null||n(p)}).catch(p=>{o==null||o(p)})}}return u=w(),g}const je=class je extends Ct{constructor(t){super(),this.title=t,this.gistID=this.querySelector('ui-input[name="gistID"]'),this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-label
                    secondary="Zum Importieren einer Datei leer lassen"
                ></ui-label>
            </ui-flex-grid-item>

            <ui-flex-grid-item>
                <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
            </ui-flex-grid-item>
        `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title=`Import "${this.title}"`}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};W(je,"register",()=>{customElements.define("import-dialog",je)});let ce=je;const Pe=class Pe extends Ct{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
            </ui-flex-grid-item>
        `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="New Vis Data",this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",s=>(s.unshift({title:this.name.ui.value,data:[]}),s)),this.ui.close()}),this.appendChild(t)}};W(Pe,"register",()=>{customElements.define("new-vis-data-dialog",Pe)});let he=Pe;const qe=class qe extends Ct{constructor(){super(),this.token=this.querySelector('ui-input[name="token"]'),this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-label
                    secondary="Für Schreibzugriff ist ein Token erforderlich."
                ></ui-label>
            </ui-flex-grid-item>

            <ui-flex-grid-item>
                <ui-input name="token" type="text" title="Gist Token"></ui-input>
            </ui-flex-grid-item>
        `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Gist Token"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};W(qe,"register",()=>{customElements.define("push-dialog",qe)});let de=qe;const ht={alertPage:"alert",alertListsPage:"alert-lists",metalSheetListsPage:"metal-sheet-lists",visPage:"vis",productPage:"product",visDataPage:"vis-data"},Fe=class Fe extends At{constructor(){super(),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}},this.render()}render(){this.innerHTML=`
            <ui-flex-grid style="width: 100%; height: 100%;">
                <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

                <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
            </ui-flex-grid>
        `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}connectedCallback(){super.connectedCallback(),this.ui.name=ht.alertPage}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(rr({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};W(Fe,"register",()=>{customElements.define("alert-page",Fe)});let fe=Fe;const Ie=class Ie extends At{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new fe,this.list=null,this.ui={...this.ui,root:this,set(t){const e=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input().ui.storagekey=sr(this.root.list),setTimeout(()=>this.root.renderList())}},this.render()}render(){this.innerHTML=`
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
        `,this.searchBar=this.querySelector("search-bar")}connectedCallback(){super.connectedCallback(),this.ui.name=ht.alertListsPage,this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.ui.active=e,await this.search(e?this.searchBar.ui.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.register("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("alert")}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(s=>{if(!this.searchBar.ui.active){s.style.display="flex";return}if(this.is(this.getAlertFromElement(s),e)){s.style.display="flex";return}s.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),s=new RegExp(this.searchBar.ui.input().ui.value.replaceAll(" ",".*"));for(let n=0;n<this.list.data.length;n++){if(e.active===!0&&!this.is(this.list.data[n],s))return;setTimeout(()=>this.renderListElement(t,this.list.data[n],n<this.list.data.length-1))}}renderListElement(t,e,s){t.appendChild(rr({alert:e,container:"li",hasBorder:s,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const s=[];for(let n=t.from;n<=t.to;n++)s.push(n);return!!`${s.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,s=this.getAlertFromElement(e);this.alertPage.ui.set(s),this.stackLayout.ui.set(ht.alertPage,null,!0)}};W(Ie,"register",()=>{customElements.define("alert-lists-page",Ie)});let pe=Ie;function rr({alert:L,container:t,hasBorder:e=!0,hasRipple:s=!0,onClick:n=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=`
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
`)),r.onclick=n,s&&(Rt(r),r.style.cursor="pointer",r.role="button"),r}function Rr(L){return`AlarmListen_${L.title}.json`}function sr(L){return`${L.title}`}const Ne=class Ne extends ue{constructor(){super(),this.events=new pt,this.render()}render(){this.innerHTML=`
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
        `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)}),this.querySelector('[name="delete-table"]').addEventListener("click",()=>{this.events.dispatch("delete-table",null)})}};W(Ne,"register",()=>{customElements.define("metal-sheet-actions",Ne)});let Ai=Ne;function Ri(L){return`BlechListen_${L.format}_${L.toolID}.json`}function mt(L){return`${L.format}:${L.toolID}`}const $e=class $e extends Ct{constructor(t){super(),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.ui={...this.ui,root:this,set(e,s,n=-1){const r=this.root.querySelector('[name="format"] ui-input');r.ui.value=e;const o=this.root.querySelector('[name="toolID"] ui-input');o.ui.value=s,this.root.querySelector('[name="press"] ui-select').ui.options().forEach(u=>{u.ui.selected=parseInt(u.ui.value)===n}),this.root.originFormat=e,this.root.originToolID=s}},this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=`
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
        `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){switch(super.connectedCallback(),this.mode){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=this.getData();s!==null&&(this.ui.events.dispatch("submit",s),this.ui.close())}),this.appendChild(t)}getData(){var u;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const s=this.querySelector('[name="toolID"] ui-input');t.toolID=s.ui.value;const n=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((u=n.ui.selected())==null?void 0:u.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const r=mt({format:this.originFormat,toolID:this.originToolID}),o=mt(t),a=this.uiStore.ui.get("metalSheetLists").find(g=>this.mode==="edit"&&r===o?!1:mt(g)===o);return a?(e.ui.invalid=a.format===t.format&&a.toolID!==t.toolID,s.ui.invalid=a.toolID===t.toolID,null):t}};W($e,"register",()=>{customElements.define("metal-sheet-create-dialog",$e)});let re=$e;const Ue=class Ue extends Ct{constructor(){super(),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const s=this.root.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=`
                        <ui-input
                            title="${t[n]}"
                            value="${(e==null?void 0:e[n])||""}"
                        ></ui-input>
                    `,s.appendChild(r)}}},this.render()}render(){const t=new Et;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Eintrag bearbeiten"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="destructive">Delete</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const o=r.querySelector("ui-input");s.push(o.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};W(Ue,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",Ue)});let me=Ue;const Ze=class Ze extends Ct{constructor(){super(),this.ui={...this.ui,root:this,set({header:t,data:e=null}){const s=this.root.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=`
                        <ui-input
                            title="${t[n]}"
                            value="${(e==null?void 0:e[n])||""}"
                        ></ui-input>
                    `,s.appendChild(r)}}},this.render()}render(){const t=new Et;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Neuer Eintrag"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const o=r.querySelector("ui-input");s.push(o.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};W(Ze,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",Ze)});let ge=Ze;const Ve=class Ve extends At{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(t)])],Ri(t),{type:"application/json"})],title:"Blech Listen",text:`${t.format} - ${t.toolID} - ${t.date}`}),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const s=mt(t);return e=[...e.filter(n=>mt(n)!==s),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(s=>mt(s)!==t),e))}},this.render()}render(){this.innerHTML=`
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
        `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.list)return;for(const n of this.list.data.table.header){const r=document.createElement("th");r.style.textAlign="center",r.innerHTML=n,t.appendChild(r)}let s=null;for(let n=0;n<this.list.data.table.data.length;n++){const r=document.createElement("tr");r.style.cursor="pointer",r.role="button",r.onclick=()=>this.createModifyEntryDialog(n),e.appendChild(r),yr(r,{onDragEnd:(o,a)=>{if(s!==null){if(s<a){let u=this.list.data.table.data;u=[...u.slice(0,s),...u.slice(s+1,a+1),u[s],...u.slice(a+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(s>a){let u=this.list.data.table.data;u=[...u.slice(0,a),u[s],...u.slice(a,s),...u.slice(s+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(u=>{u.style.background="inherit",u.style.color="inherit"}),s=null}},onDragging:o=>{s!==null&&[...e.children].forEach((a,u)=>{if(u!==o){a.style.background="inherit",a.style.color="inherit";return}a.style.background="var(--ui-primary-bgColor)",a.style.color="var(--ui-primary-color)"})},onDragStart:o=>{s=o}});for(const o of this.list.data.table.data[n]){const a=document.createElement("td");a.style.textAlign="center",a.innerHTML=o,r.appendChild(a)}}}connectedCallback(){super.connectedCallback(),this.ui.name=ht.metalSheetListsPage,this.uiStore.ui.set("edit",{onClick:async()=>{const t=new re("edit");t.ui.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(mt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}createMetalSheetActions(){const t=this.querySelector("metal-sheet-actions");t.events.on("new-entry",()=>this.createNewEntryDialog()),t.events.on("delete-table",()=>{let e="";this.list.toolID?e=`Delete table: ${this.list.format} - ${this.list.toolID}`:e=`Delete table: ${this.list.format}`,window.confirm(e)&&(this.ui.set(null),this.ui.deleteStore(mt(this.list)))})}createModifyEntryDialog(t){const e=new me;e.ui.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",s=>{this.list.data.table.data[t]=s,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new ge;t.ui.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};W(Ve,"register",()=>{customElements.define("metal-sheet-lists-page",Ve)});let be=Ve;function nr({product:L,events:t=null,ripple:e=!0}){const s=document.createElement("div");s.classList.add("vis-item"),s.role="button",s.setAttribute("data-value",L.lotto+" "+L.name+" "+L.format+" "+L.stamp+" "+L.thickness+"mm"),s.style.display="block",s.style.position="relative",s.style.overflow="hidden",s.style.borderTop="1px solid var(--ui-borderColor)",s.style.borderBottom="1px solid var(--ui-borderColor)",s.style.margin="var(--ui-spacing) 0",s.style.cursor="pointer",s.innerHTML=ot`
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
    `;let n;return e&&(n=Rt(s,{useClick:!0})),t!==null&&(s.onclick=()=>{t.dispatch("click",L)}),{destroy:()=>{n&&n()},element:s}}const We=class We extends At{constructor(){super(),this.ui={...this.ui,root:this,set(t){this.root.replaceChild(nr({product:t,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}},this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=ot`
            <style>
                :host {
                    padding-top: var(--ui-app-bar-height);
                }
            </style>
        `}render(){this.innerHTML=`
            <span class="placeholder"></span>
            <div class="content"></div>
        `}connectedCallback(){super.connectedCallback(),this.ui.name=ht.productPage}};W(We,"register",()=>{customElements.define("product-page",We)});let ve=We;const Ge=class Ge extends At{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,this.root.setAppBarTitle(),t===null){this.root.searchBar.ui.input().ui.storagekey=null;return}this.root.searchBar.ui.input().ui.storagekey=or(t)}},this.render()}render(){this.innerHTML=ot`
      <search-bar title="Suche... (RegEx Mode)" active></search-bar>

      <div
        class="no-scrollbar container"
        style="
          position: relative;
          width: 100%;
          height: 100%;
          padding-top: calc(var(--ui-app-bar-height) + var(--search-bar-height));
          overflow: auto;
          scroll-behavior: smooth;
        "
      >
        <div class="list"></div>
      </div>
    `,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.ui.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))})}connectedCallback(){super.connectedCallback(),this.ui.name=ht.visPage,this.stackLayout.ui.register("product",()=>new ve),this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("product")}async update(t=null){console.debug("[VisPage.update]",{regex:t});const e=new ie;e.ui.nobg=!0;const s=this.querySelector(".container");s.appendChild(e);const n=this.querySelector(".list");for(;n.firstChild;)n.removeChild(n.firstChild);if(!this.list)return;const r=new pt;r.on("click",o=>{this.stackLayout.ui.set(ht.productPage,a=>{a.ui.set(o)},!0)});for(let o=0;o<this.list.data.length;o++)(async(a,u)=>{setTimeout(async()=>{const g=nr({product:u,events:r}).element;this.checkItem(g,t),(a>this.list.data.length-1||g.style.display!=="none")&&e.parentElement&&s.removeChild(e),n.appendChild(g)})})(o,this.list.data[o])}async search(t){const e=this.getRegExp(t),s=this.querySelector(".list");console.debug("[VisPage.search]",e);for(const n of[...s.children])this.checkItem(n,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};W(Ge,"register",()=>{customElements.define("vis-page",Ge)});let ye=Ge;function Xi(L){return`Vis_${L.date}.json`}function or(L){return`${L.title}`}const Ke=class Ke extends At{constructor(){super(),this.render()}render(){this.innerHTML=""}connectedCallback(){this.ui.name=ht.visDataPage}};W(Ke,"register",()=>{customElements.define("vis-data-page",Ke)});let we=Ke;const Xt=class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.ui={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=ot`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: none;
          position: absolute;
          top: var(--ui-app-bar-height);
          left: 0;
          right: 0;
          height: var(--ui-search-bar-height);
          padding: var(--ui-spacing);
          overflow: hidden;
        }

        :host([active]) {
          display: block;
        }
      </style>

      <ui-search
        style="z-index: 10;"
        nosubmit
        storage
        storageprefix="pg-vis:search:"
        storagekey=""
      ></ui-search>
    `,this.input=this.shadowRoot.querySelector("ui-search")}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"active":this.setActive(s);break;case"prefix":this.setPrefix(s);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--search-bar-height","0rem"):(this.stackLayout.style.setProperty("--search-bar-height","4.5rem"),this.ui.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};W(Xt,"register",()=>{customElements.define("search-bar",Xt)}),W(Xt,"observedAttributes",["title","active","prefix"]);let Li=Xt;const ar="v0.0.30.dev";function Lr(L){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const s of e.currentTarget.files){const n=new FileReader;n.onload=()=>{if(typeof n.result=="string")try{L(n.result,s)}catch(r){alert(`Parse data failed: ${r}`)}},n.onerror=()=>{alert(`Read file "${s.name}" failed!`)},n.readAsText(s)}},t.click()}function Tr(L){const t=[],e=L.map(s=>`${s.title}`).sort();for(const s of e)t.push(L.find(n=>`${n.title}`===s));return t}function zr(L){let t=[];const e=L.map(s=>mt(s)).sort();for(const s of e)t.push(L.find(n=>mt(n)===s));return t}const Je=class Je extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.onPull=null,this.onPush=null,this.ui={...this.ui,root:this,set(t,e){const s=this.root.querySelector("ui-secondary"),n=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",s.innerHTML=t,n.innerHTML=`Revision: ${e}`):(this.root.style.display="none",s.innerHTML="&nbsp;",n.innerHTML="Revision: -"),this.root.pullButton.onclick=()=>{this.root.onPull&&this.root.onPull(t,e)},this.root.pushButton.onclick=()=>{this.root.onPush&&this.root.onPush(t,e)}},setPullHandler(t){this.root.onPull=t},setPushHandler(t){this.root.onPush=t}},this.render()}render(){this.innerHTML=`
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
        `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}};W(Je,"register",()=>{customElements.define("drawer-gist-item",Je)});let Ti=Je;const Br=ot`
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
`;class Ii{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const s=await e.json();this.data={revision:s.history.length,files:{},owner:{login:s.owner.login}};for(const[n,r]of Object.entries(s.files))this.data.files[n]={filename:r.filename,content:JSON.parse(r.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function Or(L,t,{beforeUpdate:e=null,update:s,updateRevision:n}){const o=await new Ii(L).get();let a=!1;o.revision>t?a=confirm(`Upgrade zu revision "${o.revision}"`):o.revision<t?a=confirm(`Downgrade auf revision "${o.revision}"`):a=confirm(`Already up to date! Reload? (revision: ${o.revision})`),a&&(typeof e=="function"&&await e(),Object.values(o.files).forEach(u=>s(u.content)),n(o.revision))}async function Dr(L,t,e,{getFileName:s,updateRevision:n}){const r=new de;r.ui.events.on("close",()=>{document.body.removeChild(r)}),r.ui.events.on("submit",async o=>{if(!o)return;const a=new Ii(L,o),u=await a.get();if(u.revision>t){alert(`Gist revision is newer then the current revision (${u.revision})`);return}const g=Object.values(u.files).map(b=>JSON.stringify(b.content)).sort(),w=Object.values(e).map(b=>JSON.stringify(b)).sort();if(JSON.stringify(g)===JSON.stringify(w)){alert("Nope, no patching needed... already up to date...");return}const p={};e.forEach(b=>{p[s(b)]={content:JSON.stringify(b)}});for(const b of Object.keys(u.files))Object.hasOwn(p,b)||(p[b]=null);try{console.debug(await a.patch(p))}catch(b){console.error(b);return}n(t+1)}),document.body.appendChild(r),r.ui.open(!0)}const Qt=class Qt extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.ui={...this.ui,root:this,get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=`
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
                        ${Br}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,s){switch(t){case"disabled":this.setDisabled(s);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new ce("Blech Listen");t.ui.events.on("submit",async e=>{if(this.onValidate===null)throw new Error("onValidate callback missing");if(this.onUpdate===null)throw new Error("onUpdate callback missing");if(!e){Lr(async r=>{let o=null;try{o=await this.onValidate(r,null)}catch(a){alert(`Validation failed: ${a}`);return}o!==null&&await this.onUpdate(o)});return}if(this.ui.storegistkey===null)throw new Error("gist-key missing");const s=new Ii(e);let n;try{n=await s.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storegistkey}`]={id:e,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.onValidate(n.files[r].content,s.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const r of Object.values(n.files))await this.onUpdate(r.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};W(Qt,"register",()=>{customElements.define("drawer-import-button",Qt)}),W(Qt,"observedAttributes",["disabled"]);let zi=Qt;const Ye=class Ye extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=`
            <ui-button variant="full" color="secondary">Neu</ui-button>
        `,this.querySelector("ui-button").ui.events.on("click",()=>this.onClick())}onClick(){const t=new re("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",s=>(s=[...s,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],s))}),document.body.appendChild(t),t.ui.open(!0)}};W(Ye,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",Ye)});let Bi=Ye;const Xe=class Xe extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};W(Xe,"register",()=>{customElements.define("drawer-revision",Xe)});let Oi=Xe;const ci=ot`
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
`,Qe=class Qe extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title)}},this.render()}render(){this.innerHTML=`
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
                        ${ci}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t){const e=document.createElement("span");e.innerHTML=` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};W(Qe,"register",()=>{customElements.define("pg-drawer-item-alert-list",Qe)});let ke=Qe;const ti=class ti extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){var s;this.root.data=t;let e=-1;typeof((s=t.data)==null?void 0:s.press)=="number"&&(e=t.data.press),this.root.setText(t.format,t.toolID,e)}},this.render()}render(){this.innerHTML=`
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
                        ${ci}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e,s){const n=document.createElement("span");n.innerHTML=`
            <ui-primary>
                <span>${t}</span>
                <span style="font-size: 0.85em;">
                    ${s>-1?"[P"+s+"]":""}
                </span>
            </ui-primary>
            <br />
        `,n.innerHTML+=ot`
            <ui-secondary>
                <span>${e}</span>
            </ui-secondary>
        `,this.querySelector("ui-button").appendChild(n)}};W(ti,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",ti)});let _e=ti;const ei=class ei extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,null)}},this.render()}render(){this.innerHTML=`
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
                        ${ci}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e=null){const s=document.createElement("span");s.innerHTML=` <ui-primary>${t}</ui-primary> `,e!==null&&(s.innerHTML+=`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(s)}};W(ei,"register",()=>{customElements.define("pg-drawer-item-vis-data",ei)});let xe=ei;const ii=class ii extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,t.data.length)}},this.render()}render(){this.innerHTML=`
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
                        ${ci}
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e){const s=document.createElement("span");s.innerHTML=` <ui-primary>${t}</ui-primary><br /> `,s.innerHTML+=`
            <ui-secondary>${e} Einträge</ui-secondary>
        `,this.querySelector("ui-button").appendChild(s)}};W(ii,"register",()=>{customElements.define("pg-drawer-item-vis",ii)});let Se=ii;const Hr=2,Qi="alert-lists",Mt="alertLists",ri=class ri extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=`
            <drawer-import-button storegistkey="${Qi}"></drawer-import-button>

            <drawer-gist-item></drawer-gist-item>
        `,this.style.position="relative";const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Mt,[])})}connectedCallback(){super.connectedCallback(),this.ui.title="Alarm Listen",this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Mt,this.storeAlertListsHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){const e=s=>new Error(`invalid data for alert:
${JSON.stringify(s,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let s=0;s<t.data.length;s++){const n=t.data[s];if(typeof n.from!="number"||typeof n.to!="number"||typeof n.alert!="string"||!Array.isArray(n.desc)||(typeof n.desc=="string"&&(n.desc=n.desc.split(`
`)),n.desc.filter(r=>typeof r!="string").length))throw e(n)}return t}async update(t){console.debug("[PGDrawerAlertLists.update]",{data:t}),$i(this.uiStore,t,{storeDataKey:Mt,getKey:sr})}async storeGistHandler(t){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),Ni(this.querySelector("drawer-gist-item"),t,{storeGistKey:Qi,storeDataKey:Mt,getFileName:Rr,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(t){if(!t)return;const e=[...this.children].slice(Hr);for(;e.length>0;)this.removeChild(e.pop());for(const s of Tr(t)){const n=new ke;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.alertListsPage,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.title} - ${s.date}`)&&this.uiStore.ui.update(Mt,r=>r.filter(o=>o.title!==s.title))})}}};W(ri,"register",()=>{customElements.define("pg-drawer-alert-lists",ri)});let Di=ri;var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lr(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var ur={exports:{}};(function(L,t){(function(e,s){s()})(St,function(){function e(g,w){return typeof w>"u"?w={autoBom:!1}:typeof w!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),w={autoBom:!w}),w.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function s(g,w,p){var b=new XMLHttpRequest;b.open("GET",g),b.responseType="blob",b.onload=function(){u(b.response,w,p)},b.onerror=function(){console.error("could not download file")},b.send()}function n(g){var w=new XMLHttpRequest;w.open("HEAD",g,!1);try{w.send()}catch{}return 200<=w.status&&299>=w.status}function r(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var w=document.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(w)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof St=="object"&&St.global===St?St:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(g,w,p){var b=o.URL||o.webkitURL,c=document.createElement("a");w=w||g.name||"download",c.download=w,c.rel="noopener",typeof g=="string"?(c.href=g,c.origin===location.origin?r(c):n(c.href)?s(g,w,p):r(c,c.target="_blank")):(c.href=b.createObjectURL(g),setTimeout(function(){b.revokeObjectURL(c.href)},4e4),setTimeout(function(){r(c)},0))}:"msSaveOrOpenBlob"in navigator?function(g,w,p){if(w=w||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(e(g,p),w);else if(n(g))s(g,w,p);else{var b=document.createElement("a");b.href=g,b.target="_blank",setTimeout(function(){r(b)})}}:function(g,w,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof g=="string")return s(g,w,p);var c=g.type==="application/octet-stream",k=/constructor/i.test(o.HTMLElement)||o.safari,h=/CriOS\/[\d]+/.test(navigator.userAgent);if((h||c&&k||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var x=m.result;x=h?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=x:location=x,b=null},m.readAsDataURL(g)}else{var d=o.URL||o.webkitURL,y=d.createObjectURL(g);b?b.location=y:location.href=y,b=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});o.saveAs=u.saveAs=u,L.exports=u})})(ur);var Mr=ur.exports;const cr=lr(Mr);function oe(L){throw new Error('Could not dynamically require "'+L+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var hr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(L,t){(function(e){L.exports=e()})(function(){return function e(s,n,r){function o(g,w){if(!n[g]){if(!s[g]){var p=typeof oe=="function"&&oe;if(!w&&p)return p(g,!0);if(a)return a(g,!0);var b=new Error("Cannot find module '"+g+"'");throw b.code="MODULE_NOT_FOUND",b}var c=n[g]={exports:{}};s[g][0].call(c.exports,function(k){var h=s[g][1][k];return o(h||k)},c,c.exports,e,s,n,r)}return n[g].exports}for(var a=typeof oe=="function"&&oe,u=0;u<r.length;u++)o(r[u]);return o}({1:[function(e,s,n){var r=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(u){for(var g,w,p,b,c,k,h,m=[],d=0,y=u.length,x=y,E=r.getTypeOf(u)!=="string";d<u.length;)x=y-d,p=E?(g=u[d++],w=d<y?u[d++]:0,d<y?u[d++]:0):(g=u.charCodeAt(d++),w=d<y?u.charCodeAt(d++):0,d<y?u.charCodeAt(d++):0),b=g>>2,c=(3&g)<<4|w>>4,k=1<x?(15&w)<<2|p>>6:64,h=2<x?63&p:64,m.push(a.charAt(b)+a.charAt(c)+a.charAt(k)+a.charAt(h));return m.join("")},n.decode=function(u){var g,w,p,b,c,k,h=0,m=0,d="data:";if(u.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===a.charAt(64)&&x--,u.charAt(u.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=o.uint8array?new Uint8Array(0|x):new Array(0|x);h<u.length;)g=a.indexOf(u.charAt(h++))<<2|(b=a.indexOf(u.charAt(h++)))>>4,w=(15&b)<<4|(c=a.indexOf(u.charAt(h++)))>>2,p=(3&c)<<6|(k=a.indexOf(u.charAt(h++))),y[m++]=g,c!==64&&(y[m++]=w),k!==64&&(y[m++]=p);return y}},{"./support":30,"./utils":32}],2:[function(e,s,n){var r=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),u=e("./stream/DataLengthProbe");function g(w,p,b,c,k){this.compressedSize=w,this.uncompressedSize=p,this.crc32=b,this.compression=c,this.compressedContent=k}g.prototype={getContentWorker:function(){var w=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),p=this;return w.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(w,p,b){return w.pipe(new a).pipe(new u("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new u("compressedSize")).withStreamInfo("compression",p)},s.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,n){var r=e("./utils"),o=function(){for(var a,u=[],g=0;g<256;g++){a=g;for(var w=0;w<8;w++)a=1&a?3988292384^a>>>1:a>>>1;u[g]=a}return u}();s.exports=function(a,u){return a!==void 0&&a.length?r.getTypeOf(a)!=="string"?function(g,w,p,b){var c=o,k=b+p;g^=-1;for(var h=b;h<k;h++)g=g>>>8^c[255&(g^w[h])];return-1^g}(0|u,a,a.length,0):function(g,w,p,b){var c=o,k=b+p;g^=-1;for(var h=b;h<k;h++)g=g>>>8^c[255&(g^w.charCodeAt(h))];return-1^g}(0|u,a,a.length,0):0}},{"./utils":32}],5:[function(e,s,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,s,n){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),u=e("./stream/GenericWorker"),g=r?"uint8array":"array";function w(p,b){u.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}n.magic="\b\0",a.inherits(w,u),w.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(g,p.data),!1)},w.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},n.compressWorker=function(p){return new w("Deflate",p)},n.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,n){function r(c,k){var h,m="";for(h=0;h<k;h++)m+=String.fromCharCode(255&c),c>>>=8;return m}function o(c,k,h,m,d,y){var x,E,C=c.file,j=c.compression,O=y!==g.utf8encode,I=a.transformTo("string",y(C.name)),B=a.transformTo("string",g.utf8encode(C.name)),U=C.comment,X=a.transformTo("string",y(U)),_=a.transformTo("string",g.utf8encode(U)),D=B.length!==C.name.length,l=_.length!==U.length,M="",tt="",F="",et=C.dir,N=C.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};k&&!h||(Q.crc32=c.crc32,Q.compressedSize=c.compressedSize,Q.uncompressedSize=c.uncompressedSize);var T=0;k&&(T|=8),O||!D&&!l||(T|=2048);var R=0,Y=0;et&&(R|=16),d==="UNIX"?(Y=798,R|=function(V,at){var ft=V;return V||(ft=at?16893:33204),(65535&ft)<<16}(C.unixPermissions,et)):(Y=20,R|=function(V){return 63&(V||0)}(C.dosPermissions)),x=N.getUTCHours(),x<<=6,x|=N.getUTCMinutes(),x<<=5,x|=N.getUTCSeconds()/2,E=N.getUTCFullYear()-1980,E<<=4,E|=N.getUTCMonth()+1,E<<=5,E|=N.getUTCDate(),D&&(tt=r(1,1)+r(w(I),4)+B,M+="up"+r(tt.length,2)+tt),l&&(F=r(1,1)+r(w(X),4)+_,M+="uc"+r(F.length,2)+F);var G="";return G+=`
\0`,G+=r(T,2),G+=j.magic,G+=r(x,2),G+=r(E,2),G+=r(Q.crc32,4),G+=r(Q.compressedSize,4),G+=r(Q.uncompressedSize,4),G+=r(I.length,2),G+=r(M.length,2),{fileRecord:p.LOCAL_FILE_HEADER+G+I+M,dirRecord:p.CENTRAL_FILE_HEADER+r(Y,2)+G+r(X.length,2)+"\0\0\0\0"+r(R,4)+r(m,4)+I+M+X}}var a=e("../utils"),u=e("../stream/GenericWorker"),g=e("../utf8"),w=e("../crc32"),p=e("../signature");function b(c,k,h,m){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=h,this.encodeFileName=m,this.streamFiles=c,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,u),b.prototype.push=function(c){var k=c.meta.percent||0,h=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(c):(this.bytesWritten+=c.data.length,u.prototype.push.call(this,{data:c.data,meta:{currentFile:this.currentFile,percent:h?(k+100*(h-m-1))/h:100}}))},b.prototype.openedSource=function(c){this.currentSourceOffset=this.bytesWritten,this.currentFile=c.file.name;var k=this.streamFiles&&!c.file.dir;if(k){var h=o(c,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:h.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(c){this.accumulate=!1;var k=this.streamFiles&&!c.file.dir,h=o(c,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(h.dirRecord),k)this.push({data:function(m){return p.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(c),meta:{percent:100}});else for(this.push({data:h.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var c=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var h=this.bytesWritten-c,m=function(d,y,x,E,C){var j=a.transformTo("string",C(E));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(d,2)+r(d,2)+r(y,4)+r(x,4)+r(j.length,2)+j}(this.dirRecords.length,h,c,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(c){this._sources.push(c);var k=this;return c.on("data",function(h){k.processChunk(h)}),c.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),c.on("error",function(h){k.error(h)}),this},b.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(c){var k=this._sources;if(!u.prototype.error.call(this,c))return!1;for(var h=0;h<k.length;h++)try{k[h].error(c)}catch{}return!0},b.prototype.lock=function(){u.prototype.lock.call(this);for(var c=this._sources,k=0;k<c.length;k++)c[k].lock()},s.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,n){var r=e("../compressions"),o=e("./ZipFileWorker");n.generateWorker=function(a,u,g){var w=new o(u.streamFiles,g,u.platform,u.encodeFileName),p=0;try{a.forEach(function(b,c){p++;var k=function(y,x){var E=y||x,C=r[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(c.options.compression,u.compression),h=c.options.compressionOptions||u.compressionOptions||{},m=c.dir,d=c.date;c._compressWorker(k,h).withStreamInfo("file",{name:b,dir:m,date:d,comment:c.comment||"",unixPermissions:c.unixPermissions,dosPermissions:c.dosPermissions}).pipe(w)}),w.entriesCount=p}catch(b){w.error(b)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(o,a){return new r().loadAsync(o,a)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,n){var r=e("./utils"),o=e("./external"),a=e("./utf8"),u=e("./zipEntries"),g=e("./stream/Crc32Probe"),w=e("./nodejsUtils");function p(b){return new o.Promise(function(c,k){var h=b.decompressed.getContentWorker().pipe(new g);h.on("error",function(m){k(m)}).on("end",function(){h.streamInfo.crc32!==b.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):c()}).resume()})}s.exports=function(b,c){var k=this;return c=r.extend(c||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),w.isNode&&w.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",b,!0,c.optimizedBinaryString,c.base64).then(function(h){var m=new u(c);return m.load(h),m}).then(function(h){var m=[o.Promise.resolve(h)],d=h.files;if(c.checkCRC32)for(var y=0;y<d.length;y++)m.push(p(d[y]));return o.Promise.all(m)}).then(function(h){for(var m=h.shift(),d=m.files,y=0;y<d.length;y++){var x=d[y],E=x.fileNameStr,C=r.resolve(x.fileNameStr);k.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:c.createFolders}),x.dir||(k.file(C).unsafeOriginalName=E)}return m.zipComment.length&&(k.comment=m.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,n){var r=e("../utils"),o=e("../stream/GenericWorker");function a(u,g){o.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(g)}r.inherits(a,o),a.prototype._bindStream=function(u){var g=this;(this._stream=u).pause(),u.on("data",function(w){g.push({data:w,meta:{percent:0}})}).on("error",function(w){g.isPaused?this.generatedError=w:g.error(w)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,n){var r=e("readable-stream").Readable;function o(a,u,g){r.call(this,u),this._helper=a;var w=this;a.on("data",function(p,b){w.push(p)||w._helper.pause(),g&&g(b)}).on("error",function(p){w.emit("error",p)}).on("end",function(){w.push(null)})}e("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},s.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,s,n){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,n){function r(C,j,O){var I,B=a.getTypeOf(j),U=a.extend(O||{},w);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(C=d(C)),U.createFolders&&(I=m(C))&&y.call(this,I,!0);var X=B==="string"&&U.binary===!1&&U.base64===!1;O&&O.binary!==void 0||(U.binary=!X),(j instanceof p&&j.uncompressedSize===0||U.dir||!j||j.length===0)&&(U.base64=!1,U.binary=!0,j="",U.compression="STORE",B="string");var _=null;_=j instanceof p||j instanceof u?j:k.isNode&&k.isStream(j)?new h(C,j):a.prepareContent(C,j,U.binary,U.optimizedBinaryString,U.base64);var D=new b(C,_,U);this.files[C]=D}var o=e("./utf8"),a=e("./utils"),u=e("./stream/GenericWorker"),g=e("./stream/StreamHelper"),w=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),c=e("./generate"),k=e("./nodejsUtils"),h=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var j=C.lastIndexOf("/");return 0<j?C.substring(0,j):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},y=function(C,j){return j=j!==void 0?j:w.createFolders,C=d(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:j}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var j,O,I;for(j in this.files)I=this.files[j],(O=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&C(O,I)},filter:function(C){var j=[];return this.forEach(function(O,I){C(O,I)&&j.push(I)}),j},file:function(C,j,O){if(arguments.length!==1)return C=this.root+C,r.call(this,C,j,O),this;if(x(C)){var I=C;return this.filter(function(U,X){return!X.dir&&I.test(U)})}var B=this.files[this.root+C];return B&&!B.dir?B:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(B,U){return U.dir&&C.test(B)});var j=this.root+C,O=y.call(this,j),I=this.clone();return I.root=O.name,I},remove:function(C){C=this.root+C;var j=this.files[C];if(j||(C.slice(-1)!=="/"&&(C+="/"),j=this.files[C]),j&&!j.dir)delete this.files[C];else for(var O=this.filter(function(B,U){return U.name.slice(0,C.length)===C}),I=0;I<O.length;I++)delete this.files[O[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var j,O={};try{if((O=a.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");a.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var I=O.comment||this.comment||"";j=c.generateWorker(this,O,I)}catch(B){(j=new u("error")).error(B)}return new g(j,O.type||"string",O.mimeType)},generateAsync:function(C,j){return this.generateInternalStream(C).accumulate(j)},generateNodeStream:function(C,j){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(j)}};s.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,n){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,n){var r=e("./DataReader");function o(a){r.call(this,a);for(var u=0;u<this.data.length;u++)a[u]=255&a[u]}e("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var u=a.charCodeAt(0),g=a.charCodeAt(1),w=a.charCodeAt(2),p=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===u&&this.data[b+1]===g&&this.data[b+2]===w&&this.data[b+3]===p)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var u=a.charCodeAt(0),g=a.charCodeAt(1),w=a.charCodeAt(2),p=a.charCodeAt(3),b=this.readData(4);return u===b[0]&&g===b[1]&&w===b[2]&&p===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},s.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,s,n){var r=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var u,g=0;for(this.checkOffset(a),u=this.index+a-1;u>=this.index;u--)g=(g<<8)+this.byteAt(u);return this.index+=a,g},readString:function(a){return r.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},s.exports=o},{"../utils":32}],19:[function(e,s,n){var r=e("./Uint8ArrayReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},s.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,n){var r=e("./DataReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},s.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,s,n){var r=e("./ArrayReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},s.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,n){var r=e("../utils"),o=e("../support"),a=e("./ArrayReader"),u=e("./StringReader"),g=e("./NodeBufferReader"),w=e("./Uint8ArrayReader");s.exports=function(p){var b=r.getTypeOf(p);return r.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new g(p):o.uint8array?new w(r.transformTo("uint8array",p)):new a(r.transformTo("array",p)):new u(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,n){var r=e("./GenericWorker"),o=e("../utils");function a(u){r.call(this,"ConvertWorker to "+u),this.destType=u}o.inherits(a,r),a.prototype.processChunk=function(u){this.push({data:o.transformTo(this.destType,u.data),meta:u.meta})},s.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,n){var r=e("./GenericWorker"),o=e("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,r),a.prototype.processChunk=function(u){this.streamInfo.crc32=o(u.data,this.streamInfo.crc32||0),this.push(u)},s.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,n){var r=e("../utils"),o=e("./GenericWorker");function a(u){o.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}r.inherits(a,o),a.prototype.processChunk=function(u){if(u){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+u.data.length}o.prototype.processChunk.call(this,u)},s.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,n){var r=e("../utils"),o=e("./GenericWorker");function a(u){o.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(w){g.dataIsReady=!0,g.data=w,g.max=w&&w.length||0,g.type=r.getTypeOf(w),g.isPaused||g._tickAndRepeat()},function(w){g.error(w)})}r.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,g);break;case"uint8array":u=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":u=this.data.slice(this.index,g)}return this.index=g,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,n){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var u=0;u<this._listeners[o].length;u++)this._listeners[o][u].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(u){a.processChunk(u)}),o.on("end",function(){a.end()}),o.on("error",function(u){a.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},s.exports=r},{}],29:[function(e,s,n){var r=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),u=e("../base64"),g=e("../support"),w=e("../external"),p=null;if(g.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(k,h){return new w.Promise(function(m,d){var y=[],x=k._internalType,E=k._outputType,C=k._mimeType;k.on("data",function(j,O){y.push(j),h&&h(O)}).on("error",function(j){y=[],d(j)}).on("end",function(){try{var j=function(O,I,B){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",I),B);case"base64":return u.encode(I);default:return r.transformTo(O,I)}}(E,function(O,I){var B,U=0,X=null,_=0;for(B=0;B<I.length;B++)_+=I[B].length;switch(O){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for(X=new Uint8Array(_),B=0;B<I.length;B++)X.set(I[B],U),U+=I[B].length;return X;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+O+"'")}}(x,y),C);m(j)}catch(O){d(O)}y=[]}).resume()})}function c(k,h,m){var d=h;switch(h){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=h,this._mimeType=m,r.checkSupport(d),this._worker=k.pipe(new o(d)),k.lock()}catch(y){this._worker=new a("error"),this._worker.error(y)}}c.prototype={accumulate:function(k){return b(this,k)},on:function(k,h){var m=this;return k==="data"?this._worker.on(k,function(d){h.call(m,d.data,d.meta)}):this._worker.on(k,function(){r.delay(h,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},k)}},s.exports=c},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,n){for(var r=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),u=e("./stream/GenericWorker"),g=new Array(256),w=0;w<256;w++)g[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;g[254]=g[254]=1;function p(){u.call(this,"utf-8 decode"),this.leftOver=null}function b(){u.call(this,"utf-8 encode")}n.utf8encode=function(c){return o.nodebuffer?a.newBufferFrom(c,"utf-8"):function(k){var h,m,d,y,x,E=k.length,C=0;for(y=0;y<E;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),C+=m<128?1:m<2048?2:m<65536?3:4;for(h=o.uint8array?new Uint8Array(C):new Array(C),y=x=0;x<C;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),m<128?h[x++]=m:(m<2048?h[x++]=192|m>>>6:(m<65536?h[x++]=224|m>>>12:(h[x++]=240|m>>>18,h[x++]=128|m>>>12&63),h[x++]=128|m>>>6&63),h[x++]=128|63&m);return h}(c)},n.utf8decode=function(c){return o.nodebuffer?r.transformTo("nodebuffer",c).toString("utf-8"):function(k){var h,m,d,y,x=k.length,E=new Array(2*x);for(h=m=0;h<x;)if((d=k[h++])<128)E[m++]=d;else if(4<(y=g[d]))E[m++]=65533,h+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&h<x;)d=d<<6|63&k[h++],y--;1<y?E[m++]=65533:d<65536?E[m++]=d:(d-=65536,E[m++]=55296|d>>10&1023,E[m++]=56320|1023&d)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),r.applyFromCharCode(E)}(c=r.transformTo(o.uint8array?"uint8array":"array",c))},r.inherits(p,u),p.prototype.processChunk=function(c){var k=r.transformTo(o.uint8array?"uint8array":"array",c.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var h=k;(k=new Uint8Array(h.length+this.leftOver.length)).set(this.leftOver,0),k.set(h,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var m=function(y,x){var E;for((x=x||y.length)>y.length&&(x=y.length),E=x-1;0<=E&&(192&y[E])==128;)E--;return E<0||E===0?x:E+g[y[E]]>x?E:x}(k),d=k;m!==k.length&&(o.uint8array?(d=k.subarray(0,m),this.leftOver=k.subarray(m,k.length)):(d=k.slice(0,m),this.leftOver=k.slice(m,k.length))),this.push({data:n.utf8decode(d),meta:c.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=p,r.inherits(b,u),b.prototype.processChunk=function(c){this.push({data:n.utf8encode(c.data),meta:c.meta})},n.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,n){var r=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),u=e("./external");function g(h){return h}function w(h,m){for(var d=0;d<h.length;++d)m[d]=255&h.charCodeAt(d);return m}e("setimmediate"),n.newBlob=function(h,m){n.checkSupport("blob");try{return new Blob([h],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(h),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(h,m,d){var y=[],x=0,E=h.length;if(E<=d)return String.fromCharCode.apply(null,h);for(;x<E;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,h.slice(x,Math.min(x+d,E)))):y.push(String.fromCharCode.apply(null,h.subarray(x,Math.min(x+d,E)))),x+=d;return y.join("")},stringifyByChar:function(h){for(var m="",d=0;d<h.length;d++)m+=String.fromCharCode(h[d]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(h){var m=65536,d=n.getTypeOf(h),y=!0;if(d==="uint8array"?y=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(y=p.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return p.stringifyByChunk(h,d,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(h)}function c(h,m){for(var d=0;d<h.length;d++)m[d]=h[d];return m}n.applyFromCharCode=b;var k={};k.string={string:g,array:function(h){return w(h,new Array(h.length))},arraybuffer:function(h){return k.string.uint8array(h).buffer},uint8array:function(h){return w(h,new Uint8Array(h.length))},nodebuffer:function(h){return w(h,a.allocBuffer(h.length))}},k.array={string:b,array:g,arraybuffer:function(h){return new Uint8Array(h).buffer},uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(h)}},k.arraybuffer={string:function(h){return b(new Uint8Array(h))},array:function(h){return c(new Uint8Array(h),new Array(h.byteLength))},arraybuffer:g,uint8array:function(h){return new Uint8Array(h)},nodebuffer:function(h){return a.newBufferFrom(new Uint8Array(h))}},k.uint8array={string:b,array:function(h){return c(h,new Array(h.length))},arraybuffer:function(h){return h.buffer},uint8array:g,nodebuffer:function(h){return a.newBufferFrom(h)}},k.nodebuffer={string:b,array:function(h){return c(h,new Array(h.length))},arraybuffer:function(h){return k.nodebuffer.uint8array(h).buffer},uint8array:function(h){return c(h,new Uint8Array(h.length))},nodebuffer:g},n.transformTo=function(h,m){if(m=m||"",!h)return m;n.checkSupport(h);var d=n.getTypeOf(m);return k[d][h](m)},n.resolve=function(h){for(var m=h.split("/"),d=[],y=0;y<m.length;y++){var x=m[y];x==="."||x===""&&y!==0&&y!==m.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},n.getTypeOf=function(h){return typeof h=="string"?"string":Object.prototype.toString.call(h)==="[object Array]"?"array":r.nodebuffer&&a.isBuffer(h)?"nodebuffer":r.uint8array&&h instanceof Uint8Array?"uint8array":r.arraybuffer&&h instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(h){if(!r[h.toLowerCase()])throw new Error(h+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(h){var m,d,y="";for(d=0;d<(h||"").length;d++)y+="\\x"+((m=h.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return y},n.delay=function(h,m,d){setImmediate(function(){h.apply(d||null,m||[])})},n.inherits=function(h,m){function d(){}d.prototype=m.prototype,h.prototype=new d},n.extend=function(){var h,m,d={};for(h=0;h<arguments.length;h++)for(m in arguments[h])Object.prototype.hasOwnProperty.call(arguments[h],m)&&d[m]===void 0&&(d[m]=arguments[h][m]);return d},n.prepareContent=function(h,m,d,y,x){return u.Promise.resolve(m).then(function(E){return r.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new u.Promise(function(C,j){var O=new FileReader;O.onload=function(I){C(I.target.result)},O.onerror=function(I){j(I.target.error)},O.readAsArrayBuffer(E)}):E}).then(function(E){var C=n.getTypeOf(E);return C?(C==="arraybuffer"?E=n.transformTo("uint8array",E):C==="string"&&(x?E=o.decode(E):d&&y!==!0&&(E=function(j){return w(j,r.uint8array?new Uint8Array(j.length):new Array(j.length))}(E))),E):u.Promise.reject(new Error("Can't read the data of '"+h+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,n){var r=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),u=e("./zipEntry"),g=e("./support");function w(p){this.files=[],this.loadOptions=p}w.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(p)+")")}},isSignature:function(p,b){var c=this.reader.index;this.reader.setIndex(p);var k=this.reader.readString(4)===b;return this.reader.setIndex(c),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=g.uint8array?"uint8array":"array",c=o.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(c)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,c,k=this.zip64EndOfCentralSize-44;0<k;)p=this.reader.readInt(2),b=this.reader.readInt(4),c=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:c}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var c=this.centralDirOffset+this.centralDirSize;this.zip64&&(c+=20,c+=12+this.zip64EndOfCentralSize);var k=b-c;if(0<k)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(p){this.reader=r(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,n){var r=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),u=e("./crc32"),g=e("./utf8"),w=e("./compressions"),p=e("./support");function b(c,k){this.options=c,this.loadOptions=k}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(c){var k,h;if(c.skip(22),this.fileNameLength=c.readInt(2),h=c.readInt(2),this.fileName=c.readData(this.fileNameLength),c.skip(h),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(m){for(var d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&w[d].magic===m)return w[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,k,c.readData(this.compressedSize))},readCentralPart:function(c){this.versionMadeBy=c.readInt(2),c.skip(2),this.bitFlag=c.readInt(2),this.compressionMethod=c.readString(2),this.date=c.readDate(),this.crc32=c.readInt(4),this.compressedSize=c.readInt(4),this.uncompressedSize=c.readInt(4);var k=c.readInt(2);if(this.extraFieldsLength=c.readInt(2),this.fileCommentLength=c.readInt(2),this.diskNumberStart=c.readInt(2),this.internalFileAttributes=c.readInt(2),this.externalFileAttributes=c.readInt(4),this.localHeaderOffset=c.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");c.skip(k),this.readExtraFields(c),this.parseZIP64ExtraField(c),this.fileComment=c.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var c=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),c==0&&(this.dosPermissions=63&this.externalFileAttributes),c==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var c=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=c.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=c.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=c.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=c.readInt(4))}},readExtraFields:function(c){var k,h,m,d=c.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});c.index+4<d;)k=c.readInt(2),h=c.readInt(2),m=c.readData(h),this.extraFields[k]={id:k,length:h,value:m};c.setIndex(d)},handleUTF8:function(){var c=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var h=o.transformTo(c,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(h)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=o.transformTo(c,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var c=this.extraFields[28789];if(c){var k=r(c.value);return k.readInt(1)!==1||u(this.fileName)!==k.readInt(4)?null:g.utf8decode(k.readData(c.length-5))}return null},findExtraFieldUnicodeComment:function(){var c=this.extraFields[25461];if(c){var k=r(c.value);return k.readInt(1)!==1||u(this.fileComment)!==k.readInt(4)?null:g.utf8decode(k.readData(c.length-5))}return null}},s.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,n){function r(k,h,m){this.name=k,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=h,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),u=e("./utf8"),g=e("./compressedObject"),w=e("./stream/GenericWorker");r.prototype={internalStream:function(k){var h=null,m="string";try{if(!k)throw new Error("No output type specified.");var d=(m=k.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),h=this._decompressWorker();var y=!this._dataBinary;y&&!d&&(h=h.pipe(new u.Utf8EncodeWorker)),!y&&d&&(h=h.pipe(new u.Utf8DecodeWorker))}catch(x){(h=new w("error")).error(x)}return new o(h,m,"")},async:function(k,h){return this.internalStream(k).accumulate(h)},nodeStream:function(k,h){return this.internalStream(k||"nodebuffer").toNodejsStream(h)},_compressWorker:function(k,h){if(this._data instanceof g&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new u.Utf8EncodeWorker)),g.createWorkerFrom(m,k,h)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof w?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},c=0;c<p.length;c++)r.prototype[p[c]]=b;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,n){(function(r){var o,a,u=r.MutationObserver||r.WebKitMutationObserver;if(u){var g=0,w=new u(k),p=r.document.createTextNode("");w.observe(p,{characterData:!0}),o=function(){p.data=g=++g%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var h=r.document.createElement("script");h.onreadystatechange=function(){k(),h.onreadystatechange=null,h.parentNode.removeChild(h),h=null},r.document.documentElement.appendChild(h)}:function(){setTimeout(k,0)};else{var b=new r.MessageChannel;b.port1.onmessage=k,o=function(){b.port2.postMessage(0)}}var c=[];function k(){var h,m;a=!0;for(var d=c.length;d;){for(m=c,c=[],h=-1;++h<d;)m[h]();d=c.length}a=!1}s.exports=function(h){c.push(h)!==1||a||o()}}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,n){var r=e("immediate");function o(){}var a={},u=["REJECTED"],g=["FULFILLED"],w=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,d!==o&&h(this,d)}function b(d,y,x){this.promise=d,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function c(d,y,x){r(function(){var E;try{E=y(x)}catch(C){return a.reject(d,C)}E===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,E)})}function k(d){var y=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof y=="function")return function(){y.apply(d,arguments)}}function h(d,y){var x=!1;function E(O){x||(x=!0,a.reject(d,O))}function C(O){x||(x=!0,a.resolve(d,O))}var j=m(function(){y(C,E)});j.status==="error"&&E(j.value)}function m(d,y){var x={};try{x.value=d(y),x.status="success"}catch(E){x.status="error",x.value=E}return x}(s.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(d()).then(function(){return x})},function(x){return y.resolve(d()).then(function(){throw x})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,y){if(typeof d!="function"&&this.state===g||typeof y!="function"&&this.state===u)return this;var x=new this.constructor(o);return this.state!==w?c(x,this.state===g?d:y,this.outcome):this.queue.push(new b(x,d,y)),x},b.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},b.prototype.otherCallFulfilled=function(d){c(this.promise,this.onFulfilled,d)},b.prototype.callRejected=function(d){a.reject(this.promise,d)},b.prototype.otherCallRejected=function(d){c(this.promise,this.onRejected,d)},a.resolve=function(d,y){var x=m(k,y);if(x.status==="error")return a.reject(d,x.value);var E=x.value;if(E)h(d,E);else{d.state=g,d.outcome=y;for(var C=-1,j=d.queue.length;++C<j;)d.queue[C].callFulfilled(y)}return d},a.reject=function(d,y){d.state=u,d.outcome=y;for(var x=-1,E=d.queue.length;++x<E;)d.queue[x].callRejected(y);return d},p.resolve=function(d){return d instanceof this?d:a.resolve(new this(o),d)},p.reject=function(d){var y=new this(o);return a.reject(y,d)},p.all=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,E=!1;if(!x)return this.resolve([]);for(var C=new Array(x),j=0,O=-1,I=new this(o);++O<x;)B(d[O],O);return I;function B(U,X){y.resolve(U).then(function(_){C[X]=_,++j!==x||E||(E=!0,a.resolve(I,C))},function(_){E||(E=!0,a.reject(I,_))})}},p.race=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,E=!1;if(!x)return this.resolve([]);for(var C=-1,j=new this(o);++C<x;)O=d[C],y.resolve(O).then(function(I){E||(E=!0,a.resolve(j,I))},function(I){E||(E=!0,a.reject(j,I))});var O;return j}},{immediate:36}],38:[function(e,s,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,n){var r=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/messages"),g=e("./zlib/zstream"),w=Object.prototype.toString,p=0,b=-1,c=0,k=8;function h(d){if(!(this instanceof h))return new h(d);this.options=o.assign({level:b,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:c,to:""},d||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var x=r.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==p)throw new Error(u[x]);if(y.header&&r.deflateSetHeader(this.strm,y.header),y.dictionary){var E;if(E=typeof y.dictionary=="string"?a.string2buf(y.dictionary):w.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=r.deflateSetDictionary(this.strm,E))!==p)throw new Error(u[x]);this._dict_set=!0}}function m(d,y){var x=new h(y);if(x.push(d,!0),x.err)throw x.msg||u[x.err];return x.result}h.prototype.push=function(d,y){var x,E,C=this.strm,j=this.options.chunkSize;if(this.ended)return!1;E=y===~~y?y:y===!0?4:0,typeof d=="string"?C.input=a.string2buf(d):w.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new o.Buf8(j),C.next_out=0,C.avail_out=j),(x=r.deflate(C,E))!==1&&x!==p)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(C.output,C.next_out))):this.onData(o.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return E===4?(x=r.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===p):E!==2||(this.onEnd(p),!(C.avail_out=0))},h.prototype.onData=function(d){this.chunks.push(d)},h.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Deflate=h,n.deflate=m,n.deflateRaw=function(d,y){return(y=y||{}).raw=!0,m(d,y)},n.gzip=function(d,y){return(y=y||{}).gzip=!0,m(d,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,n){var r=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/constants"),g=e("./zlib/messages"),w=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function c(h){if(!(this instanceof c))return new c(h);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},h||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||h&&h.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var d=r.inflateInit2(this.strm,m.windowBits);if(d!==u.Z_OK)throw new Error(g[d]);this.header=new p,r.inflateGetHeader(this.strm,this.header)}function k(h,m){var d=new c(m);if(d.push(h,!0),d.err)throw d.msg||g[d.err];return d.result}c.prototype.push=function(h,m){var d,y,x,E,C,j,O=this.strm,I=this.options.chunkSize,B=this.options.dictionary,U=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof h=="string"?O.input=a.binstring2buf(h):b.call(h)==="[object ArrayBuffer]"?O.input=new Uint8Array(h):O.input=h,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new o.Buf8(I),O.next_out=0,O.avail_out=I),(d=r.inflate(O,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&B&&(j=typeof B=="string"?a.string2buf(B):b.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=r.inflateSetDictionary(this.strm,j)),d===u.Z_BUF_ERROR&&U===!0&&(d=u.Z_OK,U=!1),d!==u.Z_STREAM_END&&d!==u.Z_OK)return this.onEnd(d),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&d!==u.Z_STREAM_END&&(O.avail_in!==0||y!==u.Z_FINISH&&y!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(O.output,O.next_out),E=O.next_out-x,C=a.buf2string(O.output,x),O.next_out=E,O.avail_out=I-E,E&&o.arraySet(O.output,O.output,x,E,0),this.onData(C)):this.onData(o.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(U=!0)}while((0<O.avail_in||O.avail_out===0)&&d!==u.Z_STREAM_END);return d===u.Z_STREAM_END&&(y=u.Z_FINISH),y===u.Z_FINISH?(d=r.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===u.Z_OK):y!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(O.avail_out=0))},c.prototype.onData=function(h){this.chunks.push(h)},c.prototype.onEnd=function(h){h===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=h,this.msg=this.strm.msg},n.Inflate=c,n.inflate=k,n.inflateRaw=function(h,m){return(m=m||{}).raw=!0,k(h,m)},n.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(u){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var w=g.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var p in w)w.hasOwnProperty(p)&&(u[p]=w[p])}}return u},n.shrinkBuf=function(u,g){return u.length===g?u:u.subarray?u.subarray(0,g):(u.length=g,u)};var o={arraySet:function(u,g,w,p,b){if(g.subarray&&u.subarray)u.set(g.subarray(w,w+p),b);else for(var c=0;c<p;c++)u[b+c]=g[w+c]},flattenChunks:function(u){var g,w,p,b,c,k;for(g=p=0,w=u.length;g<w;g++)p+=u[g].length;for(k=new Uint8Array(p),g=b=0,w=u.length;g<w;g++)c=u[g],k.set(c,b),b+=c.length;return k}},a={arraySet:function(u,g,w,p,b){for(var c=0;c<p;c++)u[b+c]=g[w+c]},flattenChunks:function(u){return[].concat.apply([],u)}};n.setTyped=function(u){u?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,s,n){var r=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var u=new r.Buf8(256),g=0;g<256;g++)u[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function w(p,b){if(b<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(p,b));for(var c="",k=0;k<b;k++)c+=String.fromCharCode(p[k]);return c}u[254]=u[254]=1,n.string2buf=function(p){var b,c,k,h,m,d=p.length,y=0;for(h=0;h<d;h++)(64512&(c=p.charCodeAt(h)))==55296&&h+1<d&&(64512&(k=p.charCodeAt(h+1)))==56320&&(c=65536+(c-55296<<10)+(k-56320),h++),y+=c<128?1:c<2048?2:c<65536?3:4;for(b=new r.Buf8(y),h=m=0;m<y;h++)(64512&(c=p.charCodeAt(h)))==55296&&h+1<d&&(64512&(k=p.charCodeAt(h+1)))==56320&&(c=65536+(c-55296<<10)+(k-56320),h++),c<128?b[m++]=c:(c<2048?b[m++]=192|c>>>6:(c<65536?b[m++]=224|c>>>12:(b[m++]=240|c>>>18,b[m++]=128|c>>>12&63),b[m++]=128|c>>>6&63),b[m++]=128|63&c);return b},n.buf2binstring=function(p){return w(p,p.length)},n.binstring2buf=function(p){for(var b=new r.Buf8(p.length),c=0,k=b.length;c<k;c++)b[c]=p.charCodeAt(c);return b},n.buf2string=function(p,b){var c,k,h,m,d=b||p.length,y=new Array(2*d);for(c=k=0;c<d;)if((h=p[c++])<128)y[k++]=h;else if(4<(m=u[h]))y[k++]=65533,c+=m-1;else{for(h&=m===2?31:m===3?15:7;1<m&&c<d;)h=h<<6|63&p[c++],m--;1<m?y[k++]=65533:h<65536?y[k++]=h:(h-=65536,y[k++]=55296|h>>10&1023,y[k++]=56320|1023&h)}return w(y,k)},n.utf8border=function(p,b){var c;for((b=b||p.length)>p.length&&(b=p.length),c=b-1;0<=c&&(192&p[c])==128;)c--;return c<0||c===0?b:c+u[p[c]]>b?c:b}},{"./common":41}],43:[function(e,s,n){s.exports=function(r,o,a,u){for(var g=65535&r|0,w=r>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;w=w+(g=g+o[u++]|0)|0,--p;);g%=65521,w%=65521}return g|w<<16|0}},{}],44:[function(e,s,n){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,n){var r=function(){for(var o,a=[],u=0;u<256;u++){o=u;for(var g=0;g<8;g++)o=1&o?3988292384^o>>>1:o>>>1;a[u]=o}return a}();s.exports=function(o,a,u,g){var w=r,p=g+u;o^=-1;for(var b=g;b<p;b++)o=o>>>8^w[255&(o^a[b])];return-1^o}},{}],46:[function(e,s,n){var r,o=e("../utils/common"),a=e("./trees"),u=e("./adler32"),g=e("./crc32"),w=e("./messages"),p=0,b=4,c=0,k=-2,h=-1,m=4,d=2,y=8,x=9,E=286,C=30,j=19,O=2*E+1,I=15,B=3,U=258,X=U+B+1,_=42,D=113,l=1,M=2,tt=3,F=4;function et(i,H){return i.msg=w[H],H}function N(i){return(i<<1)-(4<i?9:0)}function Q(i){for(var H=i.length;0<=--H;)i[H]=0}function T(i){var H=i.state,z=H.pending;z>i.avail_out&&(z=i.avail_out),z!==0&&(o.arraySet(i.output,H.pending_buf,H.pending_out,z,i.next_out),i.next_out+=z,H.pending_out+=z,i.total_out+=z,i.avail_out-=z,H.pending-=z,H.pending===0&&(H.pending_out=0))}function R(i,H){a._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,H),i.block_start=i.strstart,T(i.strm)}function Y(i,H){i.pending_buf[i.pending++]=H}function G(i,H){i.pending_buf[i.pending++]=H>>>8&255,i.pending_buf[i.pending++]=255&H}function V(i,H){var z,v,f=i.max_chain_length,S=i.strstart,P=i.prev_length,q=i.nice_match,A=i.strstart>i.w_size-X?i.strstart-(i.w_size-X):0,$=i.window,K=i.w_mask,Z=i.prev,J=i.strstart+U,nt=$[S+P-1],rt=$[S+P];i.prev_length>=i.good_match&&(f>>=2),q>i.lookahead&&(q=i.lookahead);do if($[(z=H)+P]===rt&&$[z+P-1]===nt&&$[z]===$[S]&&$[++z]===$[S+1]){S+=2,z++;do;while($[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&S<J);if(v=U-(J-S),S=J-U,P<v){if(i.match_start=H,q<=(P=v))break;nt=$[S+P-1],rt=$[S+P]}}while((H=Z[H&K])>A&&--f!=0);return P<=i.lookahead?P:i.lookahead}function at(i){var H,z,v,f,S,P,q,A,$,K,Z=i.w_size;do{if(f=i.window_size-i.lookahead-i.strstart,i.strstart>=Z+(Z-X)){for(o.arraySet(i.window,i.window,Z,Z,0),i.match_start-=Z,i.strstart-=Z,i.block_start-=Z,H=z=i.hash_size;v=i.head[--H],i.head[H]=Z<=v?v-Z:0,--z;);for(H=z=Z;v=i.prev[--H],i.prev[H]=Z<=v?v-Z:0,--z;);f+=Z}if(i.strm.avail_in===0)break;if(P=i.strm,q=i.window,A=i.strstart+i.lookahead,$=f,K=void 0,K=P.avail_in,$<K&&(K=$),z=K===0?0:(P.avail_in-=K,o.arraySet(q,P.input,P.next_in,K,A),P.state.wrap===1?P.adler=u(P.adler,q,K,A):P.state.wrap===2&&(P.adler=g(P.adler,q,K,A)),P.next_in+=K,P.total_in+=K,K),i.lookahead+=z,i.lookahead+i.insert>=B)for(S=i.strstart-i.insert,i.ins_h=i.window[S],i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+B-1])&i.hash_mask,i.prev[S&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=S,S++,i.insert--,!(i.lookahead+i.insert<B)););}while(i.lookahead<X&&i.strm.avail_in!==0)}function ft(i,H){for(var z,v;;){if(i.lookahead<X){if(at(i),i.lookahead<X&&H===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),z!==0&&i.strstart-z<=i.w_size-X&&(i.match_length=V(i,z)),i.match_length>=B)if(v=a._tr_tally(i,i.strstart-i.match_start,i.match_length-B),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=B){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=a._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=i.strstart<B-1?i.strstart:B-1,H===b?(R(i,!0),i.strm.avail_out===0?tt:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:M}function it(i,H){for(var z,v,f;;){if(i.lookahead<X){if(at(i),i.lookahead<X&&H===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=B-1,z!==0&&i.prev_length<i.max_lazy_match&&i.strstart-z<=i.w_size-X&&(i.match_length=V(i,z),i.match_length<=5&&(i.strategy===1||i.match_length===B&&4096<i.strstart-i.match_start)&&(i.match_length=B-1)),i.prev_length>=B&&i.match_length<=i.prev_length){for(f=i.strstart+i.lookahead-B,v=a._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-B),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=f&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=B-1,i.strstart++,v&&(R(i,!1),i.strm.avail_out===0))return l}else if(i.match_available){if((v=a._tr_tally(i,0,i.window[i.strstart-1]))&&R(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return l}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=a._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<B-1?i.strstart:B-1,H===b?(R(i,!0),i.strm.avail_out===0?tt:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:M}function st(i,H,z,v,f){this.good_length=i,this.max_lazy=H,this.nice_length=z,this.max_chain=v,this.func=f}function ct(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*O),this.dyn_dtree=new o.Buf16(2*(2*C+1)),this.bl_tree=new o.Buf16(2*(2*j+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(I+1),this.heap=new o.Buf16(2*E+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*E+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function lt(i){var H;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(H=i.state).pending=0,H.pending_out=0,H.wrap<0&&(H.wrap=-H.wrap),H.status=H.wrap?_:D,i.adler=H.wrap===2?0:1,H.last_flush=p,a._tr_init(H),c):et(i,k)}function yt(i){var H=lt(i);return H===c&&function(z){z.window_size=2*z.w_size,Q(z.head),z.max_lazy_match=r[z.level].max_lazy,z.good_match=r[z.level].good_length,z.nice_match=r[z.level].nice_length,z.max_chain_length=r[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(i.state),H}function bt(i,H,z,v,f,S){if(!i)return k;var P=1;if(H===h&&(H=6),v<0?(P=0,v=-v):15<v&&(P=2,v-=16),f<1||x<f||z!==y||v<8||15<v||H<0||9<H||S<0||m<S)return et(i,k);v===8&&(v=9);var q=new ct;return(i.state=q).strm=i,q.wrap=P,q.gzhead=null,q.w_bits=v,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=f+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+B-1)/B),q.window=new o.Buf8(2*q.w_size),q.head=new o.Buf16(q.hash_size),q.prev=new o.Buf16(q.w_size),q.lit_bufsize=1<<f+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new o.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=H,q.strategy=S,q.method=z,yt(i)}r=[new st(0,0,0,0,function(i,H){var z=65535;for(z>i.pending_buf_size-5&&(z=i.pending_buf_size-5);;){if(i.lookahead<=1){if(at(i),i.lookahead===0&&H===p)return l;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+z;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,R(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-X&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=0,H===b?(R(i,!0),i.strm.avail_out===0?tt:F):(i.strstart>i.block_start&&(R(i,!1),i.strm.avail_out),l)}),new st(4,4,8,4,ft),new st(4,5,16,8,ft),new st(4,6,32,32,ft),new st(4,4,16,16,it),new st(8,16,32,32,it),new st(8,16,128,128,it),new st(8,32,128,256,it),new st(32,128,258,1024,it),new st(32,258,258,4096,it)],n.deflateInit=function(i,H){return bt(i,H,y,15,8,0)},n.deflateInit2=bt,n.deflateReset=yt,n.deflateResetKeep=lt,n.deflateSetHeader=function(i,H){return i&&i.state?i.state.wrap!==2?k:(i.state.gzhead=H,c):k},n.deflate=function(i,H){var z,v,f,S;if(!i||!i.state||5<H||H<0)return i?et(i,k):k;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&H!==b)return et(i,i.avail_out===0?-5:k);if(v.strm=i,z=v.last_flush,v.last_flush=H,v.status===_)if(v.wrap===2)i.adler=0,Y(v,31),Y(v,139),Y(v,8),v.gzhead?(Y(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),Y(v,255&v.gzhead.time),Y(v,v.gzhead.time>>8&255),Y(v,v.gzhead.time>>16&255),Y(v,v.gzhead.time>>24&255),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(Y(v,255&v.gzhead.extra.length),Y(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=g(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,3),v.status=D);else{var P=y+(v.w_bits-8<<4)<<8;P|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(P|=32),P+=31-P%31,v.status=D,G(v,P),v.strstart!==0&&(G(v,i.adler>>>16),G(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(f=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending!==v.pending_buf_size));)Y(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){S=1;break}S=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,Y(v,S)}while(S!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),S===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){S=1;break}S=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,Y(v,S)}while(S!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),S===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&T(i),v.pending+2<=v.pending_buf_size&&(Y(v,255&i.adler),Y(v,i.adler>>8&255),i.adler=0,v.status=D)):v.status=D),v.pending!==0){if(T(i),i.avail_out===0)return v.last_flush=-1,c}else if(i.avail_in===0&&N(H)<=N(z)&&H!==b)return et(i,-5);if(v.status===666&&i.avail_in!==0)return et(i,-5);if(i.avail_in!==0||v.lookahead!==0||H!==p&&v.status!==666){var q=v.strategy===2?function(A,$){for(var K;;){if(A.lookahead===0&&(at(A),A.lookahead===0)){if($===p)return l;break}if(A.match_length=0,K=a._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,K&&(R(A,!1),A.strm.avail_out===0))return l}return A.insert=0,$===b?(R(A,!0),A.strm.avail_out===0?tt:F):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?l:M}(v,H):v.strategy===3?function(A,$){for(var K,Z,J,nt,rt=A.window;;){if(A.lookahead<=U){if(at(A),A.lookahead<=U&&$===p)return l;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=B&&0<A.strstart&&(Z=rt[J=A.strstart-1])===rt[++J]&&Z===rt[++J]&&Z===rt[++J]){nt=A.strstart+U;do;while(Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&Z===rt[++J]&&J<nt);A.match_length=U-(nt-J),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=B?(K=a._tr_tally(A,1,A.match_length-B),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(K=a._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),K&&(R(A,!1),A.strm.avail_out===0))return l}return A.insert=0,$===b?(R(A,!0),A.strm.avail_out===0?tt:F):A.last_lit&&(R(A,!1),A.strm.avail_out===0)?l:M}(v,H):r[v.level].func(v,H);if(q!==tt&&q!==F||(v.status=666),q===l||q===tt)return i.avail_out===0&&(v.last_flush=-1),c;if(q===M&&(H===1?a._tr_align(v):H!==5&&(a._tr_stored_block(v,0,0,!1),H===3&&(Q(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),T(i),i.avail_out===0))return v.last_flush=-1,c}return H!==b?c:v.wrap<=0?1:(v.wrap===2?(Y(v,255&i.adler),Y(v,i.adler>>8&255),Y(v,i.adler>>16&255),Y(v,i.adler>>24&255),Y(v,255&i.total_in),Y(v,i.total_in>>8&255),Y(v,i.total_in>>16&255),Y(v,i.total_in>>24&255)):(G(v,i.adler>>>16),G(v,65535&i.adler)),T(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?c:1)},n.deflateEnd=function(i){var H;return i&&i.state?(H=i.state.status)!==_&&H!==69&&H!==73&&H!==91&&H!==103&&H!==D&&H!==666?et(i,k):(i.state=null,H===D?et(i,-3):c):k},n.deflateSetDictionary=function(i,H){var z,v,f,S,P,q,A,$,K=H.length;if(!i||!i.state||(S=(z=i.state).wrap)===2||S===1&&z.status!==_||z.lookahead)return k;for(S===1&&(i.adler=u(i.adler,H,K,0)),z.wrap=0,K>=z.w_size&&(S===0&&(Q(z.head),z.strstart=0,z.block_start=0,z.insert=0),$=new o.Buf8(z.w_size),o.arraySet($,H,K-z.w_size,z.w_size,0),H=$,K=z.w_size),P=i.avail_in,q=i.next_in,A=i.input,i.avail_in=K,i.next_in=0,i.input=H,at(z);z.lookahead>=B;){for(v=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[v+B-1])&z.hash_mask,z.prev[v&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=v,v++,--f;);z.strstart=v,z.lookahead=B-1,at(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,i.next_in=q,i.input=A,i.avail_in=P,z.wrap=S,c},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,n){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,n){s.exports=function(r,o){var a,u,g,w,p,b,c,k,h,m,d,y,x,E,C,j,O,I,B,U,X,_,D,l,M;a=r.state,u=r.next_in,l=r.input,g=u+(r.avail_in-5),w=r.next_out,M=r.output,p=w-(o-r.avail_out),b=w+(r.avail_out-257),c=a.dmax,k=a.wsize,h=a.whave,m=a.wnext,d=a.window,y=a.hold,x=a.bits,E=a.lencode,C=a.distcode,j=(1<<a.lenbits)-1,O=(1<<a.distbits)-1;t:do{x<15&&(y+=l[u++]<<x,x+=8,y+=l[u++]<<x,x+=8),I=E[y&j];e:for(;;){if(y>>>=B=I>>>24,x-=B,(B=I>>>16&255)===0)M[w++]=65535&I;else{if(!(16&B)){if(!(64&B)){I=E[(65535&I)+(y&(1<<B)-1)];continue e}if(32&B){a.mode=12;break t}r.msg="invalid literal/length code",a.mode=30;break t}U=65535&I,(B&=15)&&(x<B&&(y+=l[u++]<<x,x+=8),U+=y&(1<<B)-1,y>>>=B,x-=B),x<15&&(y+=l[u++]<<x,x+=8,y+=l[u++]<<x,x+=8),I=C[y&O];i:for(;;){if(y>>>=B=I>>>24,x-=B,!(16&(B=I>>>16&255))){if(!(64&B)){I=C[(65535&I)+(y&(1<<B)-1)];continue i}r.msg="invalid distance code",a.mode=30;break t}if(X=65535&I,x<(B&=15)&&(y+=l[u++]<<x,(x+=8)<B&&(y+=l[u++]<<x,x+=8)),c<(X+=y&(1<<B)-1)){r.msg="invalid distance too far back",a.mode=30;break t}if(y>>>=B,x-=B,(B=w-p)<X){if(h<(B=X-B)&&a.sane){r.msg="invalid distance too far back",a.mode=30;break t}if(D=d,(_=0)===m){if(_+=k-B,B<U){for(U-=B;M[w++]=d[_++],--B;);_=w-X,D=M}}else if(m<B){if(_+=k+m-B,(B-=m)<U){for(U-=B;M[w++]=d[_++],--B;);if(_=0,m<U){for(U-=B=m;M[w++]=d[_++],--B;);_=w-X,D=M}}}else if(_+=m-B,B<U){for(U-=B;M[w++]=d[_++],--B;);_=w-X,D=M}for(;2<U;)M[w++]=D[_++],M[w++]=D[_++],M[w++]=D[_++],U-=3;U&&(M[w++]=D[_++],1<U&&(M[w++]=D[_++]))}else{for(_=w-X;M[w++]=M[_++],M[w++]=M[_++],M[w++]=M[_++],2<(U-=3););U&&(M[w++]=M[_++],1<U&&(M[w++]=M[_++]))}break}}break}}while(u<g&&w<b);u-=U=x>>3,y&=(1<<(x-=U<<3))-1,r.next_in=u,r.next_out=w,r.avail_in=u<g?g-u+5:5-(u-g),r.avail_out=w<b?b-w+257:257-(w-b),a.hold=y,a.bits=x}},{}],49:[function(e,s,n){var r=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),u=e("./inffast"),g=e("./inftrees"),w=1,p=2,b=0,c=-2,k=1,h=852,m=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var D;return _&&_.state?(D=_.state,_.total_in=_.total_out=D.total=0,_.msg="",D.wrap&&(_.adler=1&D.wrap),D.mode=k,D.last=0,D.havedict=0,D.dmax=32768,D.head=null,D.hold=0,D.bits=0,D.lencode=D.lendyn=new r.Buf32(h),D.distcode=D.distdyn=new r.Buf32(m),D.sane=1,D.back=-1,b):c}function E(_){var D;return _&&_.state?((D=_.state).wsize=0,D.whave=0,D.wnext=0,x(_)):c}function C(_,D){var l,M;return _&&_.state?(M=_.state,D<0?(l=0,D=-D):(l=1+(D>>4),D<48&&(D&=15)),D&&(D<8||15<D)?c:(M.window!==null&&M.wbits!==D&&(M.window=null),M.wrap=l,M.wbits=D,E(_))):c}function j(_,D){var l,M;return _?(M=new y,(_.state=M).window=null,(l=C(_,D))!==b&&(_.state=null),l):c}var O,I,B=!0;function U(_){if(B){var D;for(O=new r.Buf32(512),I=new r.Buf32(32),D=0;D<144;)_.lens[D++]=8;for(;D<256;)_.lens[D++]=9;for(;D<280;)_.lens[D++]=7;for(;D<288;)_.lens[D++]=8;for(g(w,_.lens,0,288,O,0,_.work,{bits:9}),D=0;D<32;)_.lens[D++]=5;g(p,_.lens,0,32,I,0,_.work,{bits:5}),B=!1}_.lencode=O,_.lenbits=9,_.distcode=I,_.distbits=5}function X(_,D,l,M){var tt,F=_.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new r.Buf8(F.wsize)),M>=F.wsize?(r.arraySet(F.window,D,l-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(M<(tt=F.wsize-F.wnext)&&(tt=M),r.arraySet(F.window,D,l-M,tt,F.wnext),(M-=tt)?(r.arraySet(F.window,D,l-M,M,0),F.wnext=M,F.whave=F.wsize):(F.wnext+=tt,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=tt))),0}n.inflateReset=E,n.inflateReset2=C,n.inflateResetKeep=x,n.inflateInit=function(_){return j(_,15)},n.inflateInit2=j,n.inflate=function(_,D){var l,M,tt,F,et,N,Q,T,R,Y,G,V,at,ft,it,st,ct,lt,yt,bt,i,H,z,v,f=0,S=new r.Buf8(4),P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return c;(l=_.state).mode===12&&(l.mode=13),et=_.next_out,tt=_.output,Q=_.avail_out,F=_.next_in,M=_.input,N=_.avail_in,T=l.hold,R=l.bits,Y=N,G=Q,H=b;t:for(;;)switch(l.mode){case k:if(l.wrap===0){l.mode=13;break}for(;R<16;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(2&l.wrap&&T===35615){S[l.check=0]=255&T,S[1]=T>>>8&255,l.check=a(l.check,S,2,0),R=T=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&T)<<8)+(T>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&T)!=8){_.msg="unknown compression method",l.mode=30;break}if(R-=4,i=8+(15&(T>>>=4)),l.wbits===0)l.wbits=i;else if(i>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<i,_.adler=l.check=1,l.mode=512&T?10:12,R=T=0;break;case 2:for(;R<16;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(l.flags=T,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=T>>8&1),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=a(l.check,S,2,0)),R=T=0,l.mode=3;case 3:for(;R<32;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.head&&(l.head.time=T),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,S[2]=T>>>16&255,S[3]=T>>>24&255,l.check=a(l.check,S,4,0)),R=T=0,l.mode=4;case 4:for(;R<16;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.head&&(l.head.xflags=255&T,l.head.os=T>>8),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=a(l.check,S,2,0)),R=T=0,l.mode=5;case 5:if(1024&l.flags){for(;R<16;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.length=T,l.head&&(l.head.extra_len=T),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=a(l.check,S,2,0)),R=T=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(N<(V=l.length)&&(V=N),V&&(l.head&&(i=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),r.arraySet(l.head.extra,M,F,V,i)),512&l.flags&&(l.check=a(l.check,M,V,F)),N-=V,F+=V,l.length-=V),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(N===0)break t;for(V=0;i=M[F+V++],l.head&&i&&l.length<65536&&(l.head.name+=String.fromCharCode(i)),i&&V<N;);if(512&l.flags&&(l.check=a(l.check,M,V,F)),N-=V,F+=V,i)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(N===0)break t;for(V=0;i=M[F+V++],l.head&&i&&l.length<65536&&(l.head.comment+=String.fromCharCode(i)),i&&V<N;);if(512&l.flags&&(l.check=a(l.check,M,V,F)),N-=V,F+=V,i)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;R<16;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(T!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}R=T=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;R<32;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}_.adler=l.check=d(T),R=T=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=et,_.avail_out=Q,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,2;_.adler=l.check=1,l.mode=12;case 12:if(D===5||D===6)break t;case 13:if(l.last){T>>>=7&R,R-=7&R,l.mode=27;break}for(;R<3;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}switch(l.last=1&T,R-=1,3&(T>>>=1)){case 0:l.mode=14;break;case 1:if(U(l),l.mode=20,D!==6)break;T>>>=2,R-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}T>>>=2,R-=2;break;case 14:for(T>>>=7&R,R-=7&R;R<32;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if((65535&T)!=(T>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&T,R=T=0,l.mode=15,D===6)break t;case 15:l.mode=16;case 16:if(V=l.length){if(N<V&&(V=N),Q<V&&(V=Q),V===0)break t;r.arraySet(tt,M,F,V,et),N-=V,F+=V,Q-=V,et+=V,l.length-=V;break}l.mode=12;break;case 17:for(;R<14;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(l.nlen=257+(31&T),T>>>=5,R-=5,l.ndist=1+(31&T),T>>>=5,R-=5,l.ncode=4+(15&T),T>>>=4,R-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;R<3;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.lens[P[l.have++]]=7&T,T>>>=3,R-=3}for(;l.have<19;)l.lens[P[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,z={bits:l.lenbits},H=g(0,l.lens,0,19,l.lencode,0,l.work,z),l.lenbits=z.bits,H){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;st=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ct=65535&f,!((it=f>>>24)<=R);){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(ct<16)T>>>=it,R-=it,l.lens[l.have++]=ct;else{if(ct===16){for(v=it+2;R<v;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(T>>>=it,R-=it,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}i=l.lens[l.have-1],V=3+(3&T),T>>>=2,R-=2}else if(ct===17){for(v=it+3;R<v;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}R-=it,i=0,V=3+(7&(T>>>=it)),T>>>=3,R-=3}else{for(v=it+7;R<v;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}R-=it,i=0,V=11+(127&(T>>>=it)),T>>>=7,R-=7}if(l.have+V>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;V--;)l.lens[l.have++]=i}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,z={bits:l.lenbits},H=g(w,l.lens,0,l.nlen,l.lencode,0,l.work,z),l.lenbits=z.bits,H){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,z={bits:l.distbits},H=g(p,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,z),l.distbits=z.bits,H){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,D===6)break t;case 20:l.mode=21;case 21:if(6<=N&&258<=Q){_.next_out=et,_.avail_out=Q,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,u(_,G),et=_.next_out,tt=_.output,Q=_.avail_out,F=_.next_in,M=_.input,N=_.avail_in,T=l.hold,R=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;st=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ct=65535&f,!((it=f>>>24)<=R);){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(st&&!(240&st)){for(lt=it,yt=st,bt=ct;st=(f=l.lencode[bt+((T&(1<<lt+yt)-1)>>lt)])>>>16&255,ct=65535&f,!(lt+(it=f>>>24)<=R);){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}T>>>=lt,R-=lt,l.back+=lt}if(T>>>=it,R-=it,l.back+=it,l.length=ct,st===0){l.mode=26;break}if(32&st){l.back=-1,l.mode=12;break}if(64&st){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&st,l.mode=22;case 22:if(l.extra){for(v=l.extra;R<v;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.length+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;st=(f=l.distcode[T&(1<<l.distbits)-1])>>>16&255,ct=65535&f,!((it=f>>>24)<=R);){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(!(240&st)){for(lt=it,yt=st,bt=ct;st=(f=l.distcode[bt+((T&(1<<lt+yt)-1)>>lt)])>>>16&255,ct=65535&f,!(lt+(it=f>>>24)<=R);){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}T>>>=lt,R-=lt,l.back+=lt}if(T>>>=it,R-=it,l.back+=it,64&st){_.msg="invalid distance code",l.mode=30;break}l.offset=ct,l.extra=15&st,l.mode=24;case 24:if(l.extra){for(v=l.extra;R<v;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}l.offset+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(Q===0)break t;if(V=G-Q,l.offset>V){if((V=l.offset-V)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}at=V>l.wnext?(V-=l.wnext,l.wsize-V):l.wnext-V,V>l.length&&(V=l.length),ft=l.window}else ft=tt,at=et-l.offset,V=l.length;for(Q<V&&(V=Q),Q-=V,l.length-=V;tt[et++]=ft[at++],--V;);l.length===0&&(l.mode=21);break;case 26:if(Q===0)break t;tt[et++]=l.length,Q--,l.mode=21;break;case 27:if(l.wrap){for(;R<32;){if(N===0)break t;N--,T|=M[F++]<<R,R+=8}if(G-=Q,_.total_out+=G,l.total+=G,G&&(_.adler=l.check=l.flags?a(l.check,tt,G,et-G):o(l.check,tt,G,et-G)),G=Q,(l.flags?T:d(T))!==l.check){_.msg="incorrect data check",l.mode=30;break}R=T=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;R<32;){if(N===0)break t;N--,T+=M[F++]<<R,R+=8}if(T!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}R=T=0}l.mode=29;case 29:H=1;break t;case 30:H=-3;break t;case 31:return-4;case 32:default:return c}return _.next_out=et,_.avail_out=Q,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,(l.wsize||G!==_.avail_out&&l.mode<30&&(l.mode<27||D!==4))&&X(_,_.output,_.next_out,G-_.avail_out)?(l.mode=31,-4):(Y-=_.avail_in,G-=_.avail_out,_.total_in+=Y,_.total_out+=G,l.total+=G,l.wrap&&G&&(_.adler=l.check=l.flags?a(l.check,tt,G,_.next_out-G):o(l.check,tt,G,_.next_out-G)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(Y==0&&G===0||D===4)&&H===b&&(H=-5),H)},n.inflateEnd=function(_){if(!_||!_.state)return c;var D=_.state;return D.window&&(D.window=null),_.state=null,b},n.inflateGetHeader=function(_,D){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=D).done=!1,b):c},n.inflateSetDictionary=function(_,D){var l,M=D.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?c:l.mode===11&&o(1,D,M,0)!==l.check?-3:X(_,D,M,M)?(l.mode=31,-4):(l.havedict=1,b):c},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,n){var r=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(w,p,b,c,k,h,m,d){var y,x,E,C,j,O,I,B,U,X=d.bits,_=0,D=0,l=0,M=0,tt=0,F=0,et=0,N=0,Q=0,T=0,R=null,Y=0,G=new r.Buf16(16),V=new r.Buf16(16),at=null,ft=0;for(_=0;_<=15;_++)G[_]=0;for(D=0;D<c;D++)G[p[b+D]]++;for(tt=X,M=15;1<=M&&G[M]===0;M--);if(M<tt&&(tt=M),M===0)return k[h++]=20971520,k[h++]=20971520,d.bits=1,0;for(l=1;l<M&&G[l]===0;l++);for(tt<l&&(tt=l),_=N=1;_<=15;_++)if(N<<=1,(N-=G[_])<0)return-1;if(0<N&&(w===0||M!==1))return-1;for(V[1]=0,_=1;_<15;_++)V[_+1]=V[_]+G[_];for(D=0;D<c;D++)p[b+D]!==0&&(m[V[p[b+D]]++]=D);if(O=w===0?(R=at=m,19):w===1?(R=o,Y-=257,at=a,ft-=257,256):(R=u,at=g,-1),_=l,j=h,et=D=T=0,E=-1,C=(Q=1<<(F=tt))-1,w===1&&852<Q||w===2&&592<Q)return 1;for(;;){for(I=_-et,U=m[D]<O?(B=0,m[D]):m[D]>O?(B=at[ft+m[D]],R[Y+m[D]]):(B=96,0),y=1<<_-et,l=x=1<<F;k[j+(T>>et)+(x-=y)]=I<<24|B<<16|U|0,x!==0;);for(y=1<<_-1;T&y;)y>>=1;if(y!==0?(T&=y-1,T+=y):T=0,D++,--G[_]==0){if(_===M)break;_=p[b+m[D]]}if(tt<_&&(T&C)!==E){for(et===0&&(et=tt),j+=l,N=1<<(F=_-et);F+et<M&&!((N-=G[F+et])<=0);)F++,N<<=1;if(Q+=1<<F,w===1&&852<Q||w===2&&592<Q)return 1;k[E=T&C]=tt<<24|F<<16|j-h|0}}return T!==0&&(k[j+T]=_-et<<24|64<<16|0),d.bits=tt,0}},{"../utils/common":41}],51:[function(e,s,n){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,n){var r=e("../utils/common"),o=0,a=1;function u(f){for(var S=f.length;0<=--S;)f[S]=0}var g=0,w=29,p=256,b=p+1+w,c=30,k=19,h=2*b+1,m=15,d=16,y=7,x=256,E=16,C=17,j=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(b+2));u(X);var _=new Array(2*c);u(_);var D=new Array(512);u(D);var l=new Array(256);u(l);var M=new Array(w);u(M);var tt,F,et,N=new Array(c);function Q(f,S,P,q,A){this.static_tree=f,this.extra_bits=S,this.extra_base=P,this.elems=q,this.max_length=A,this.has_stree=f&&f.length}function T(f,S){this.dyn_tree=f,this.max_code=0,this.stat_desc=S}function R(f){return f<256?D[f]:D[256+(f>>>7)]}function Y(f,S){f.pending_buf[f.pending++]=255&S,f.pending_buf[f.pending++]=S>>>8&255}function G(f,S,P){f.bi_valid>d-P?(f.bi_buf|=S<<f.bi_valid&65535,Y(f,f.bi_buf),f.bi_buf=S>>d-f.bi_valid,f.bi_valid+=P-d):(f.bi_buf|=S<<f.bi_valid&65535,f.bi_valid+=P)}function V(f,S,P){G(f,P[2*S],P[2*S+1])}function at(f,S){for(var P=0;P|=1&f,f>>>=1,P<<=1,0<--S;);return P>>>1}function ft(f,S,P){var q,A,$=new Array(m+1),K=0;for(q=1;q<=m;q++)$[q]=K=K+P[q-1]<<1;for(A=0;A<=S;A++){var Z=f[2*A+1];Z!==0&&(f[2*A]=at($[Z]++,Z))}}function it(f){var S;for(S=0;S<b;S++)f.dyn_ltree[2*S]=0;for(S=0;S<c;S++)f.dyn_dtree[2*S]=0;for(S=0;S<k;S++)f.bl_tree[2*S]=0;f.dyn_ltree[2*x]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function st(f){8<f.bi_valid?Y(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function ct(f,S,P,q){var A=2*S,$=2*P;return f[A]<f[$]||f[A]===f[$]&&q[S]<=q[P]}function lt(f,S,P){for(var q=f.heap[P],A=P<<1;A<=f.heap_len&&(A<f.heap_len&&ct(S,f.heap[A+1],f.heap[A],f.depth)&&A++,!ct(S,q,f.heap[A],f.depth));)f.heap[P]=f.heap[A],P=A,A<<=1;f.heap[P]=q}function yt(f,S,P){var q,A,$,K,Z=0;if(f.last_lit!==0)for(;q=f.pending_buf[f.d_buf+2*Z]<<8|f.pending_buf[f.d_buf+2*Z+1],A=f.pending_buf[f.l_buf+Z],Z++,q===0?V(f,A,S):(V(f,($=l[A])+p+1,S),(K=O[$])!==0&&G(f,A-=M[$],K),V(f,$=R(--q),P),(K=I[$])!==0&&G(f,q-=N[$],K)),Z<f.last_lit;);V(f,x,S)}function bt(f,S){var P,q,A,$=S.dyn_tree,K=S.stat_desc.static_tree,Z=S.stat_desc.has_stree,J=S.stat_desc.elems,nt=-1;for(f.heap_len=0,f.heap_max=h,P=0;P<J;P++)$[2*P]!==0?(f.heap[++f.heap_len]=nt=P,f.depth[P]=0):$[2*P+1]=0;for(;f.heap_len<2;)$[2*(A=f.heap[++f.heap_len]=nt<2?++nt:0)]=1,f.depth[A]=0,f.opt_len--,Z&&(f.static_len-=K[2*A+1]);for(S.max_code=nt,P=f.heap_len>>1;1<=P;P--)lt(f,$,P);for(A=J;P=f.heap[1],f.heap[1]=f.heap[f.heap_len--],lt(f,$,1),q=f.heap[1],f.heap[--f.heap_max]=P,f.heap[--f.heap_max]=q,$[2*A]=$[2*P]+$[2*q],f.depth[A]=(f.depth[P]>=f.depth[q]?f.depth[P]:f.depth[q])+1,$[2*P+1]=$[2*q+1]=A,f.heap[1]=A++,lt(f,$,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(rt,gt){var Ot,wt,Dt,ut,se,hi,_t=gt.dyn_tree,Ui=gt.max_code,fr=gt.stat_desc.static_tree,pr=gt.stat_desc.has_stree,mr=gt.stat_desc.extra_bits,Zi=gt.stat_desc.extra_base,Ht=gt.stat_desc.max_length,ne=0;for(ut=0;ut<=m;ut++)rt.bl_count[ut]=0;for(_t[2*rt.heap[rt.heap_max]+1]=0,Ot=rt.heap_max+1;Ot<h;Ot++)Ht<(ut=_t[2*_t[2*(wt=rt.heap[Ot])+1]+1]+1)&&(ut=Ht,ne++),_t[2*wt+1]=ut,Ui<wt||(rt.bl_count[ut]++,se=0,Zi<=wt&&(se=mr[wt-Zi]),hi=_t[2*wt],rt.opt_len+=hi*(ut+se),pr&&(rt.static_len+=hi*(fr[2*wt+1]+se)));if(ne!==0){do{for(ut=Ht-1;rt.bl_count[ut]===0;)ut--;rt.bl_count[ut]--,rt.bl_count[ut+1]+=2,rt.bl_count[Ht]--,ne-=2}while(0<ne);for(ut=Ht;ut!==0;ut--)for(wt=rt.bl_count[ut];wt!==0;)Ui<(Dt=rt.heap[--Ot])||(_t[2*Dt+1]!==ut&&(rt.opt_len+=(ut-_t[2*Dt+1])*_t[2*Dt],_t[2*Dt+1]=ut),wt--)}}(f,S),ft($,nt,f.bl_count)}function i(f,S,P){var q,A,$=-1,K=S[1],Z=0,J=7,nt=4;for(K===0&&(J=138,nt=3),S[2*(P+1)+1]=65535,q=0;q<=P;q++)A=K,K=S[2*(q+1)+1],++Z<J&&A===K||(Z<nt?f.bl_tree[2*A]+=Z:A!==0?(A!==$&&f.bl_tree[2*A]++,f.bl_tree[2*E]++):Z<=10?f.bl_tree[2*C]++:f.bl_tree[2*j]++,$=A,nt=(Z=0)===K?(J=138,3):A===K?(J=6,3):(J=7,4))}function H(f,S,P){var q,A,$=-1,K=S[1],Z=0,J=7,nt=4;for(K===0&&(J=138,nt=3),q=0;q<=P;q++)if(A=K,K=S[2*(q+1)+1],!(++Z<J&&A===K)){if(Z<nt)for(;V(f,A,f.bl_tree),--Z!=0;);else A!==0?(A!==$&&(V(f,A,f.bl_tree),Z--),V(f,E,f.bl_tree),G(f,Z-3,2)):Z<=10?(V(f,C,f.bl_tree),G(f,Z-3,3)):(V(f,j,f.bl_tree),G(f,Z-11,7));$=A,nt=(Z=0)===K?(J=138,3):A===K?(J=6,3):(J=7,4)}}u(N);var z=!1;function v(f,S,P,q){G(f,(g<<1)+(q?1:0),3),function(A,$,K,Z){st(A),Y(A,K),Y(A,~K),r.arraySet(A.pending_buf,A.window,$,K,A.pending),A.pending+=K}(f,S,P)}n._tr_init=function(f){z||(function(){var S,P,q,A,$,K=new Array(m+1);for(A=q=0;A<w-1;A++)for(M[A]=q,S=0;S<1<<O[A];S++)l[q++]=A;for(l[q-1]=A,A=$=0;A<16;A++)for(N[A]=$,S=0;S<1<<I[A];S++)D[$++]=A;for($>>=7;A<c;A++)for(N[A]=$<<7,S=0;S<1<<I[A]-7;S++)D[256+$++]=A;for(P=0;P<=m;P++)K[P]=0;for(S=0;S<=143;)X[2*S+1]=8,S++,K[8]++;for(;S<=255;)X[2*S+1]=9,S++,K[9]++;for(;S<=279;)X[2*S+1]=7,S++,K[7]++;for(;S<=287;)X[2*S+1]=8,S++,K[8]++;for(ft(X,b+1,K),S=0;S<c;S++)_[2*S+1]=5,_[2*S]=at(S,5);tt=new Q(X,O,p+1,b,m),F=new Q(_,I,0,c,m),et=new Q(new Array(0),B,0,k,y)}(),z=!0),f.l_desc=new T(f.dyn_ltree,tt),f.d_desc=new T(f.dyn_dtree,F),f.bl_desc=new T(f.bl_tree,et),f.bi_buf=0,f.bi_valid=0,it(f)},n._tr_stored_block=v,n._tr_flush_block=function(f,S,P,q){var A,$,K=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(Z){var J,nt=4093624447;for(J=0;J<=31;J++,nt>>>=1)if(1&nt&&Z.dyn_ltree[2*J]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(J=32;J<p;J++)if(Z.dyn_ltree[2*J]!==0)return a;return o}(f)),bt(f,f.l_desc),bt(f,f.d_desc),K=function(Z){var J;for(i(Z,Z.dyn_ltree,Z.l_desc.max_code),i(Z,Z.dyn_dtree,Z.d_desc.max_code),bt(Z,Z.bl_desc),J=k-1;3<=J&&Z.bl_tree[2*U[J]+1]===0;J--);return Z.opt_len+=3*(J+1)+5+5+4,J}(f),A=f.opt_len+3+7>>>3,($=f.static_len+3+7>>>3)<=A&&(A=$)):A=$=P+5,P+4<=A&&S!==-1?v(f,S,P,q):f.strategy===4||$===A?(G(f,2+(q?1:0),3),yt(f,X,_)):(G(f,4+(q?1:0),3),function(Z,J,nt,rt){var gt;for(G(Z,J-257,5),G(Z,nt-1,5),G(Z,rt-4,4),gt=0;gt<rt;gt++)G(Z,Z.bl_tree[2*U[gt]+1],3);H(Z,Z.dyn_ltree,J-1),H(Z,Z.dyn_dtree,nt-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,K+1),yt(f,f.dyn_ltree,f.dyn_dtree)),it(f),q&&st(f)},n._tr_tally=function(f,S,P){return f.pending_buf[f.d_buf+2*f.last_lit]=S>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&S,f.pending_buf[f.l_buf+f.last_lit]=255&P,f.last_lit++,S===0?f.dyn_ltree[2*P]++:(f.matches++,S--,f.dyn_ltree[2*(l[P]+p+1)]++,f.dyn_dtree[2*R(S)]++),f.last_lit===f.lit_bufsize-1},n._tr_align=function(f){G(f,2,3),V(f,x,X),function(S){S.bi_valid===16?(Y(S,S.bi_buf),S.bi_buf=0,S.bi_valid=0):8<=S.bi_valid&&(S.pending_buf[S.pending++]=255&S.bi_buf,S.bi_buf>>=8,S.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,s,n){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,n){(function(r){(function(o,a){if(!o.setImmediate){var u,g,w,p,b=1,c={},k=!1,h=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,u={}.toString.call(o.process)==="[object process]"?function(E){process.nextTick(function(){y(E)})}:function(){if(o.postMessage&&!o.importScripts){var E=!0,C=o.onmessage;return o.onmessage=function(){E=!1},o.postMessage("","*"),o.onmessage=C,E}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",x,!1):o.attachEvent("onmessage",x),function(E){o.postMessage(p+E,"*")}):o.MessageChannel?((w=new MessageChannel).port1.onmessage=function(E){y(E.data)},function(E){w.port2.postMessage(E)}):h&&"onreadystatechange"in h.createElement("script")?(g=h.documentElement,function(E){var C=h.createElement("script");C.onreadystatechange=function(){y(E),C.onreadystatechange=null,g.removeChild(C),C=null},g.appendChild(C)}):function(E){setTimeout(y,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),j=0;j<C.length;j++)C[j]=arguments[j+1];var O={callback:E,args:C};return c[b]=O,u(b),b++},m.clearImmediate=d}function d(E){delete c[E]}function y(E){if(k)setTimeout(y,0,E);else{var C=c[E];if(C){k=!0;try{(function(j){var O=j.callback,I=j.args;switch(I.length){case 0:O();break;case 1:O(I[0]);break;case 2:O(I[0],I[1]);break;case 3:O(I[0],I[1],I[2]);break;default:O.apply(a,I)}})(C)}finally{d(E),k=!1}}}}function x(E){E.source===o&&typeof E.data=="string"&&E.data.indexOf(p)===0&&y(+E.data.slice(p.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(hr);var jr=hr.exports;const dr=lr(jr),Pr=3,tr="metal-sheet-lists",zt="metalSheetLists",si=class si extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=`
            <drawer-import-button
                storegistkey="${tr}"
            ></drawer-import-button>

            <drawer-gist-item></drawer-gist-item>

            <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
        `,this.style.position="relative";const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(zt,[])}),t.ui.setExportHandler(async()=>{const e=new dr;for(const n of this.uiStore.ui.get(zt)){const r=Ri(n),o=JSON.stringify(n);e.file(r,o)}const s=await e.generateAsync({type:"blob"});cr.saveAs(s,`blech-listen-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title="Blech Listen",this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(zt,this.storeMetalSheetListsHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){console.debug("[PGDrawerMetalSheetLists.update]",{data:t}),$i(this.uiStore,t,{storeDataKey:zt,getKey:mt})}async storeGistHandler(t){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),Ni(this.querySelector("drawer-gist-item"),t,{storeGistKey:tr,storeDataKey:zt,getFileName:Ri,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:t}),!t)return;const e=[...this.children].slice(Pr);for(;e.length>0;)this.removeChild(e.pop());for(const s of zr(t)){const n=new _e;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.metalSheetListsPage,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.format} - ${s.toolID} - ${s.date}"`)&&this.uiStore.ui.update(zt,r=>{const o=mt(s);return r.filter(a=>mt(a)!==o)})})}}};W(si,"register",()=>{customElements.define("pg-drawer-metal-sheet-lists",si)});let Hi=si;const ni=class ni extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=`
            <drawer-import-button storegistkey="vis-data" disabled></drawer-import-button>

            <ui-drawer-group-item>
                <ui-button name="new" variant="full" color="secondary" disabled>
                    New Data
                </ui-button>
            </ui-drawer-group-item>
        `;const t=this.querySelector("drawer-import-button"),e=this.querySelector("ui-button[name=new]");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),e.ui.events.on("click",this.onClickNewData.bind(this))}connectedCallback(){super.connectedCallback(),this.ui.title="Vis Data",this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){return t}async update(t){}onVisData(t){if(console.debug("[PGDrawerVisData.onVisData]",{lists:t}),!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new xe;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.visDataPage);const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",r=>r.filter(o=>o.title!==s.title))})}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new he;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};W(ni,"register",()=>{customElements.define("pg-drawer-vis-data",ni)});let Mi=ni;const qr=2,er="vis",Bt="vis",oi=class oi extends Lt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Tt,this.render()}render(){this.innerHTML=ot`
      <drawer-import-button
        storegistkey="${er}"
      ></drawer-import-button>
      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Bt,[])}),t.ui.setExportHandler(async()=>{const e=new dr;for(const n of this.uiStore.ui.get(Bt)){const r=Xi(n),o=JSON.stringify(n);e.file(r,o)}const s=await e.generateAsync({type:"blob"});cr.saveAs(s,`vis-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title="Vis",this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Bt,this.storeVisHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async toJSON(t){const e=u=>{const[g,w]=u.split(/[xX]/),p=parseFloat(g),b=parseFloat(w);return!p||!b?`${p}x${b}`:`${p>b?p:b}x${p<b?p:b}`},s=new Date,n=(s.getMonth()+1).toString().padStart(2,"0"),r=s.getDate().toString().padStart(2,"0"),o={date:s.getTime(),title:`${s.getFullYear()}-${n}-${r}`,data:[]},a=t.split(`
`);for(let u=0;u<a.length;u++){if(!a[u])continue;let[g,...w]=a[u].trim().replace(/\t/g," ").split(" ");g=g.trim();const{productName:p,format:b,newRest:c}=(()=>{let m="",d="";for(let y=0;y<w.length;y++)if(w[y].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){d=e(w[y]),w=w.slice(y+1);break}else m+=w[y]+" ";return{productName:m.trim(),format:e(d),newRest:w.map(y=>y.trim()).filter(y=>!!y)}})();if(!b)throw`missing format for "${p}" (lotto: "${g}") in vis (txt) data!`;if(!(c[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${p}" with lotto "${g}"!`;const k=c.shift()||"",h=c.join(" ");o.data.push({lotto:g,name:p,format:b,thickness:parseFloat(k.replaceAll(",",".")),stamp:h})}return o}async validate(t){const e=n=>new Error(`invalid data for product:
${JSON.stringify(n,null,4)}`);let s=null;if(typeof t=="string")try{s=JSON.parse(t)}catch{return await this.toJSON(t)}else s=t;if(typeof s.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof s.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(s.data))throw new Error('invalid data: "data" not from type "array"');for(const n of s.data)if(typeof n.lotto!="string"||typeof n.name!="string"||typeof n.format!="string"||typeof n.thickness!="number"||typeof n.stamp!="string")throw e(n);return s}async update(t){console.debug("[PGDrawerVis.update]",{data:t}),$i(this.uiStore,t,{storeDataKey:Bt,getKey:or})}storeGistHandler(t){console.debug("[PGDrawerVis.storeGistHandler]",{data:t}),Ni(this.querySelector("drawer-gist-item"),t,{storeGistKey:er,storeDataKey:Bt,getFileName:Xi,onUpdate:this.update.bind(this)})}storeVisHandler(t){if(console.debug("[PGDrawerVis.storeVisHandler]",{lists:t}),!t)return;const e=[...this.children].slice(qr);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new Se;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.visPage,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update(Bt,r=>r.filter(o=>o.title!==s.title))})}}};W(oi,"register",()=>{customElements.define("pg-drawer-vis",oi)});let ji=oi;const ai=class ai extends le{constructor(){super(),this.render()}render(){this.innerHTML=`
            <div
                style="
                        font-size: 0.85rem;
                        font-variation-settings: var(--ui-input-fontVariation);
                    "
            >
                ${ar}
            </div>

            <pg-drawer-alert-lists></pg-drawer-alert-lists>
            <pg-drawer-metal-sheet-lists></pg-drawer-metal-sheet-lists>
            <pg-drawer-vis></pg-drawer-vis>
            <pg-drawer-vis-data></pg-drawer-vis-data>
        `}};W(ai,"register",()=>{customElements.define("pg-drawer",ai)});let Pi=ai;function Ni(L,t,{storeGistKey:e,storeDataKey:s,getFileName:n,onUpdate:r}){if(!t)return;const o=document.querySelector("ui-store"),a=t[e];if(!a){L.ui.set(null,null),L.ui.setPullHandler(null),L.ui.setPushHandler(null);return}L.ui.set(a.id,a.revision);let u;const g=()=>{u&&L.removeChild(u),u=new ie,L.appendChild(u)},w=()=>{u&&(L.removeChild(u),u=void 0)};L.ui.setPullHandler(async(p,b)=>{g();try{await Or(p,b,{beforeUpdate:async()=>{o.ui.set(s,[])},update:r,updateRevision:c=>{o.ui.update("gist",k=>(k[e]={id:p,revision:c},k))}})}finally{w()}}),L.ui.setPushHandler(async(p,b)=>{g();try{const c=o.ui.get(s);if(!Array.isArray(c)){alert("No data to push!");return}await Dr(p,b,c,{getFileName:n,updateRevision:k=>{o.ui.update("gist",h=>(h[e]={id:p,revision:k},h))}})}finally{w()}})}function $i(L,t,{storeDataKey:e,getKey:s}){const n=s(t);if(L.ui.get(e).find(r=>s(r)===n)){L.ui.update(e,r=>r.map(o=>s(o)===n?t:o));return}L.ui.update(e,r=>[...r,t])}const Fr=ot`
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
`,Ir=ot`
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
`,Nr=ot`
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
`,$r=ot`
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
`,li=class li extends ae{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=`
            <ui-app-bar-item name="menu" slot="left">
                <ui-icon-button ghost> ${Ir} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="back" slot="left" style="display: none">
                <ui-icon-button ghost> ${Fr} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="title" slot="center">
                <h4 class="title" style="white-space: nowrap;"></h4>
            </ui-app-bar-item>

            <ui-app-bar-item name="edit" slot="right">
                <ui-icon-button ghost> ${Nr} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="share" slot="right">
                <ui-icon-button ghost> ${$r} </ui-icon-button>
            </ui-app-bar-item>

            <ui-app-bar-item name="search" slot="right">
                <ui-icon-button ghost> ${ir} </ui-icon-button>
            </ui-app-bar-item>
        `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top")}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const s=this.uiStore.ui.get("edit").onClick;typeof s=="function"&&s()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var r;const s=((r=this.uiStore.ui.get("share"))==null?void 0:r())||null;if(!s)return;const n=async()=>{const o=document.createElement("a");for(const a of s.files)o.download=a.name,o.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),o.click()};if(!navigator.canShare)return await n();if(navigator.canShare(s)){try{await navigator.share(s)}catch{await n()}return}await n()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",s=>({...s,active:!s.active}))),t}};W(li,"register",()=>{customElements.define("pg-app-bar",li)});let qi=li;const ui=class ui extends HTMLElement{constructor(){super(),this.cleanup=new Tt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=ot`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case ht.alertListsPage:this.setupAlertListsPage();break;case ht.alertPage:this.setupAlertPage();break;case ht.metalSheetListsPage:this.setupMetalSheetListsPage();break;case ht.visPage:this.setupVisPage();break;case ht.productPage:this.setupProductPage();break;case ht.visDataPage:break;default:this.setupNoPage()}}),this.stackLayout.ui.register("alert-lists",()=>new pe),this.stackLayout.ui.register("metal-sheet-lists",()=>new be),this.stackLayout.ui.register("vis",()=>new ye),this.stackLayout.ui.register("vis-data",()=>new we)}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.show()}setupAlertPage(){this.resetAppBar()}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.show()}setupVisPage(){this.resetAppBar()}setupProductPage(){this.resetAppBar()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};W(ui,"register",()=>{customElements.define("pg-app",ui)});let Fi=ui;Ar({onRegistered(L){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${ar}`),await L.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});xr();ce.register();he.register();de.register();fe.register();pe.register();re.register();me.register();ge.register();Ai.register();be.register();ve.register();ye.register();we.register();Di.register();Hi.register();Mi.register();ji.register();Ti.register();zi.register();Bi.register();Oi.register();ke.register();_e.register();xe.register();Se.register();Pi.register();Li.register();qi.register();Fi.register();
