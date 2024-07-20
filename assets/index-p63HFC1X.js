var Re=Object.defineProperty;var Ae=T=>{throw TypeError(T)};var Be=(T,e,t)=>e in T?Re(T,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):T[e]=t;var R=(T,e,t)=>Be(T,typeof e!="symbol"?e+"":e,t),ze=(T,e,t)=>e.has(T)||Ae("Cannot "+t);var bt=(T,e,t)=>(ze(T,e,"read from private field"),t?t.call(T):e.get(T)),Te=(T,e,t)=>e.has(T)?Ae("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(T):e.set(T,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const defaultOptions$1={onDragStart:null,onDragging:null,onDragEnd:null};function create$1(T,e={}){e={...defaultOptions$1,...e};const t=()=>{const s=[...T.parentNode.children].indexOf(T);T.draggable=!0,T.ondragstart=a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData("text/plain",s.toString()),e.onDragStart&&e.onDragStart(s)},T.ondragover=a=>(a.preventDefault(),!1),T.ondragenter=a=>{a.preventDefault(),e.onDragging&&e.onDragging(s)},T.ondrop=a=>{a.preventDefault(),a.dataTransfer.dropEffect="move";const l=parseInt(a.dataTransfer.getData("text/plain"),10);e.onDragEnd&&e.onDragEnd(l,s)}},n=()=>{T.draggable=!1,T.ondragstart=null,T.ondragover=null,T.ondragenter=null,T.ondrop=null};return t(),{update(r){e={...defaultOptions$1,...r},n(),t()},destroy:n}}var pt;class Events{constructor(){Te(this,pt,{})}on(e,t){if(typeof t!="function")throw`invalid event listener passed for "${e.toString()}" event!`;return bt(this,pt)[e]||(bt(this,pt)[e]=[]),bt(this,pt)[e].push(t),()=>{this.off(e,t)}}off(e,t){if(!bt(this,pt)[e])throw`no listeners found for ${e.toString()}, there is nothing to delete`;let n=!1,r=0;for(const s of bt(this,pt)[e])s===t&&(bt(this,pt)[e].splice(r,1),n=!0),r++;if(!n)throw`listener not found for ${e.toString()}, there is nothing to delete`;return this}dispatch(e,t){if(t===void 0)throw"data is undefined!";if(bt(this,pt)[e])for(const n of bt(this,pt)[e])n(t);return this}}pt=new WeakMap;function rippleStart(T,e){const t=document.createElement("div");t.classList.add("ripple"),t.style.position="absolute",t.style.color="inherit",t.style.borderRadius="50%",t.style.pointerEvents="none",t.style.width="100px",t.style.height="100px",t.style.marginTop="-50px",t.style.marginLeft="-50px",t.style.opacity=`${e.opacity}`,t.style.backgroundColor=e.color,t.style.transform="scale(0) translate(0, 0)",t.style.transition=`transform ${e.spreadDuration} ${e.spreadTiming} 0s,opacity ${e.clearDuration} ${e.clearTiming} 0s`,T.currentTarget.appendChild(t);const n=T.currentTarget.getBoundingClientRect();e.centered?(t.style.top=`${n.height/2}px`,t.style.left=`${n.width/2}px`):(t.style.top=`${T.clientY-n.top}px`,t.style.left=`${T.clientX-n.left}px`);const r=Math.max(n.width,n.height)*.02;return t.style.transform=`scale(${r}) translate(0, 0)`,t}function rippleStop(T){T&&(T.addEventListener("transitionend",e=>{e.propertyName==="opacity"&&T.remove()}),T.style.opacity="0")}const defaultOptions={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function create(T,e={}){e={...defaultOptions,...e};let t;const n=s=>{t=rippleStart(s,e)},r=()=>{rippleStop(t)};return T.classList.add("ripple-container"),T.style.overflow="hidden",e.useClick===!0?T.addEventListener("click",s=>{t=rippleStart(s,e),rippleStop(t)}):(T.addEventListener("pointerdown",n),T.addEventListener("pointerup",r),T.addEventListener("pointerleave",r)),()=>{T.classList.remove("ripple-container"),T.removeEventListener("pointerdown",n),T.removeEventListener("pointerup",r),T.removeEventListener("pointerleave",r)}}const html=String.raw,css=String.raw;class CleanUp{constructor(){this.callbacks=[]}add(...e){this.callbacks.push(...e)}run(){for(let e=0;e<this.callbacks.length;e++)if(this.callbacks[e]!==null)try{this.callbacks[e](),this.callbacks[e]=null}catch(t){console.error("cleanup error:",t)}this.callbacks=this.callbacks.filter(e=>e!==null)}}const vt=class vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")||vt.defaultAttr.position},set position(e){if(e===null&&(e=vt.defaultAttr.position),e===null){this.root.removeAttribute("position");return}this.root.setAttribute("position",e)}},this.shadowRender(),this.render()}shadowRender(){this.shadowRoot.innerHTML=html`
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
        `;for(const[e,t]of Object.entries(vt.defaultAttr))!this.hasAttribute(e)&&t!==null&&this.setAttribute(e,t)}render(){}};R(vt,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",vt)}),R(vt,"defaultAttr",{position:"top"});let UIAppBar=vt;const Ut=class Ut extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
        * {
            box-sizing: border-box;
        }

        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getChild(){return this.root.querySelector("*")}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Ut,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ut)});let UIAppBarItem=Ut;const Ct=class Ct extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.setAttribute("role","button"),this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}},this.cleanup=new CleanUp,this.shadowRender()}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"no-ripple":r!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":r!==null&&(["primary","secondary","destructive"].includes(r)?this.style.color=null:this.style.color=r);break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};R(Ct,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",Ct)}),R(Ct,"observedAttributes",["no-ripple","color"]);let UIButton=Ct;const Et=class Et extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html` <ui-svg><slot></slot></ui-svg> `);this.attachShadow({mode:"open"}),this.setAttribute("role","button"),this.ui={root:this,cleanup:new CleanUp,events:new Events,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}},this.cleanup=new CleanUp,this.shadowRender()}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"no-ripple":r!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":r!==null&&(["primary","secondary","destructive"].includes(r)?this.style.color=null:this.style.color=r);break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};R(Et,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Et)}),R(Et,"observedAttributes",["no-ripple","color"]);let UIIconButton=Et;const Ft=class Ft extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html` <slot></slot> `);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Ft,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ft)});let UIContainer=Ft;const svgClose=html`
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
`,Ht=class Ht extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
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
    `);this.attachShadow({mode:"open"}),this.ui={root:this,shadowAttr:{title:""},cleanup:new CleanUp,events:new Events,title:null,dialog:null,getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){var t;return((t=this.title)==null?void 0:t.innerText)||""},setTitle(t){this.title.innerText=this.shadowAttr.title=t},getDialogElement(){return this.dialog},open(t=!1,n=!0){const r=this.dialog.inert;this.dialog.inert=n,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=r},close(){this.dialog.close(),this.events.dispatch("close",null)}},this.cleanup=new CleanUp,this.render({...this.ui.shadowAttr})}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),n=()=>{this.ui.close()};t.addEventListener("click",n);const r=this.shadowRoot.querySelector("dialog"),s=a=>{a.preventDefault()};r.addEventListener("cancel",s),this.cleanup.add(()=>{t.removeEventListener("click",n),r.removeEventListener("cancel",s)})}disconnectedCallback(){this.ui.cleanup.run(),this.cleanup.run()}render({title:t}){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `,this.ui.dialog=this.shadowRoot.querySelector("dialog"),this.ui.title=this.shadowRoot.querySelector('[name="title"]'),this.ui.setTitle(t)}};R(Ht,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",Ht)});let UIDialog=Ht;const At=class At extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
                width: 20rem; /* TODO: Get drawer width from attr (render) */
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
        `);R(this,"shadowTemplate",()=>html`
        <aside>
            <slot></slot>
        </aside>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,events:new Events,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}},this.shadowRender()}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"open":r!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `;const t=this.shadowRoot.querySelector("aside");this.addEventListener("click",()=>{this.ui.setOpen(!1)}),t.addEventListener("click",n=>{n.stopPropagation()})}};R(At,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",At)}),R(At,"observedAttributes",["open"]);let UIDrawer=At;const Tt=class Tt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <ul>
            <ui-drawer-group-item class="ui-drawer-group-title">
            </ui-drawer-group-item>

            <slot></slot>
        </ul>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let n=this.root.shadowRoot.querySelector(".ui-drawer-group-title");n.classList.add("visible"),n.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"title":r===""?this.removeAttribute("title"):r!==null?this.ui.setTitle(r):this.ui.removeTitle();break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Tt,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Tt)}),R(Tt,"observedAttributes",["title"]);let UIDrawerGroup=Tt;const jt=class jt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <li>
            <slot></slot>
        </li>
    `);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(jt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",jt)});let UIDrawerGroupItem=jt;const yt=class yt extends HTMLElement{constructor(){super();R(this,"shadowCSS",({flex:t})=>css`
        :host {
            flex: ${t};
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,shadowAttr:{flex:yt.defaultFlex},getFlex(){return this.shadowAttr.flex},setFlex(t){this.shadowAttr.flex=t||yt.defaultFlex,this.root.shadowRender({...this.shadowAttr})}},this.shadowRender({...this.ui.shadowAttr})}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"flex":this.ui.setFlex(r);break}}shadowRender({flex:t}){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS({flex:t}).trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(yt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",yt)}),R(yt,"observedAttributes",["flex"]),R(yt,"defaultFlex","1");let UIFlexGridItem=yt;const wt=class wt extends HTMLElement{constructor(){super();R(this,"shadowCSS",({gap:t})=>css`
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
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,shadowAttr:{gap:wt.defaultGap},getGap(){return this.shadowAttr.gap},setGap(t){this.shadowAttr.gap=t||wt.defaultGap,this.root.shadowRender({...this.shadowAttr})}},this.shadowRender({...this.ui.shadowAttr})}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"gap":this.ui.setGap(r);break}}shadowRender({gap:t}){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS({gap:t}).trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(wt,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",wt)}),R(wt,"observedAttributes",["gap"]),R(wt,"defaultGap","0");let UIFlexGridRow=wt;const kt=class kt extends HTMLElement{constructor(){super();R(this,"shadowCSS",({gap:t})=>css`
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
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,shadowAttr:{gap:kt.defaultGap},getGap(){return this.shadowAttr.gap},setGap(t){this.shadowAttr.gap=t||kt.defaultGap,this.root.shadowRender({...this.shadowAttr})}},this.shadowRender({...this.ui.shadowAttr})}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"gap":this.ui.setGap(r);break}}shadowRender({gap:t}){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS({gap:t}).trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(kt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",kt)}),R(kt,"observedAttributes",["gap"]),R(kt,"defaultGap","0");let UIFlexGrid=kt;const Nt=class Nt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Nt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Nt)});let UIPrimary=Nt;const Gt=class Gt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Gt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Gt)});let UISecondary=Gt;const Lt=class Lt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <span class="text">
            <ui-primary></ui-primary>
            <ui-secondary></ui-secondary>
        </span>

        <span class="input">
            <slot name="input"></slot>
            <slot></slot>
        </span>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,running:!1,removeRipple:null,onClick:async()=>{this.ui.getInputSlot().forEach(t=>t.click())},onInputClick:async t=>{t.stopPropagation()},getPrimary(){return this.root.getAttribute("primary")},setPrimary(t){if(t===null){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},getSecondary(){return this.root.getAttribute("secondary")},setSecondary(t){if(t===null){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},getInputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]},enableRipple(){this.removeRipple||(this.removeRipple=create(this.root),this.root.style.cursor="pointer",this.startInputHandling())},disableRipple(){this.removeRipple&&this.removeRipple(),this.stopInputHandling()},startInputHandling(){this.running||(this.root.addEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.addEventListener("click",this.onInputClick)}),this.running=!0)},stopInputHandling(){this.root.removeEventListener("click",this.onClick),this.getInputSlot().forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"ripple":r!==null?this.ui.enableRipple():this.ui.disableRipple();break;case"primary":this.shadowRoot.querySelector("ui-primary").innerHTML=r||"";break;case"secondary":this.shadowRoot.querySelector("ui-secondary").innerHTML=r||"";break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Lt,"register",()=>{UIPrimary.register(),UISecondary.register(),customElements.get("ui-label")||customElements.define("ui-label",Lt)}),R(Lt,"observedAttributes",["ripple","secondary","primary"]);let UILabel=Lt;const It=class It extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <div class="container">
            <slot name="title"></slot>
            <input />
        </div>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,input:null,events:new Events,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){this.input.value=(t||"").toString()},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"title":let s=this.querySelector('[slot="title"]');if(r===null&&s&&(this.removeChild(s),s=null),r===null)return;s||(s=new UISecondary,s.slot="title",this.appendChild(s)),s.innerHTML=r;break;case"type":this.ui.input.type=r||"text";break;case"value":this.ui.setValue(r);break;case"placeholder":this.ui.input.placeholder=r||"";break;case"invalid":this.ui.input.ariaInvalid=r;break;case"min":this.ui.input.min=r||"";break;case"max":this.ui.input.max=r||"";break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `,this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type=this.getAttribute("type")||"text",this.ui.input.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),this.ui.input.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue())}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};R(It,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",It)}),R(It,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let UIInput=It;const svgChevronDown=html`
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
`,qt=class qt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.setAttribute("role","button"),this.ui={root:this,getValue(){return this.root.getAttribute("value")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getSelected(){return this.root.hasAttribute("selected")},setSelected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(qt,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",qt)});let UISelectOption=qt;const Vt=class Vt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <div class="options">
            <div class="icon"><ui-svg>${svgChevronDown}</ui-svg></div>

            <slot></slot>
        </div>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,events:new Events,isOpen(){this.root.hasAttribute("open")},open(){this.root.setAttribute("open","")},close(){this.root.removeAttribute("open")},getOptions(){return[...this.root.children].filter(t=>t instanceof UISelectOption)},getSelectedOption(){try{return this.getOptions().find(t=>!!t.ui.getSelected())||null}catch{return null}}},this.cleanup=new CleanUp,this.shadowRender()}connectedCallback(){const t=this.shadowRoot.querySelector(".options"),n=async s=>{(s.composedPath()||[]).forEach(a=>{a instanceof UISelectOption&&([...this.querySelectorAll("ui-select-option")].forEach(l=>l.removeAttribute("selected")),a.setAttribute("selected",""),this.ui.events.dispatch("change",a))})},r=s=>{this.classList.toggle("open")?(s.stopPropagation(),this.addEventListener("click",n)):setTimeout(()=>this.removeEventListener("click",n))};t.addEventListener("click",r),this.cleanup.add(()=>{this.removeEventListener("click",r),t.removeEventListener("click",r)}),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}disconnectedCallback(){this.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Vt,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Vt)});let UISelect=Vt;const svgSearch=html`
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
`,Dt=class Dt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <div class="container">
            <slot name="title"></slot>
            <input type="search" />
            <ui-icon-button ghost>${svgSearch}</ui-icon-button>
        </div>
    `);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,useStorage:!1,storagePrefix:null,submit:null,input:null,events:new Events,setKey(t){if(t===null){this.root.removeAttribute("key"),this.setValue("");return}this.root.setAttribute("key",t),this.setValue(localStorage.getItem(this.storagePrefix+this.getKey()))},getKey(){return this.root.getAttribute("key")||""},hasSubmit(){return!!this.submit.parentElement},disableSubmit(){this.hasSubmit()&&this.submit.parentElement.removeChild(this.submit)},enableSubmit(){if(!this.hasSubmit())return;this.root.shadowRoot.querySelector(".container").appendChild(this.submit)},setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){this.input.value=t||""},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"title":let s=this.querySelector('[slot="title"]');r===null&&s&&(this.removeChild(s),s=null),s||(s=new UISecondary,s.slot="title",this.appendChild(s)),s.innerHTML=r||"";break;case"value":this.ui.setValue(r);break;case"placeholder":this.ui.input.placeholder=r||"";break;case"invalid":this.ui.input.ariaInvalid=r!==null?"":null;break;case"no-submit":r!==null?this.ui.disableSubmit():this.ui.enableSubmit();break;case"use-storage":this.ui.useStorage=r!==null;break;case"storage-prefix":this.ui.storagePrefix=r;break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `,this.ui.submit=this.shadowRoot.querySelector("ui-icon-button"),this.ui.submit.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())});{this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type="text",this.ui.input.onkeydown=async n=>{this.ui.hasSubmit()&&n.key==="Enter"&&this.ui.submit.click()},this.ui.input.oninput=async()=>{this.ui.useStorage&&(t!==null&&clearTimeout(t),t=setTimeout(()=>{localStorage.setItem((this.ui.storagePrefix||"")+this.ui.getKey(),this.ui.input.value),t=null},250)),this.ui.events.dispatch("input",this.ui.input.value)};let t=null;this.ui.input.onchange=async()=>this.ui.events.dispatch("change",this.ui.input.value)}}focus(t=null){this.shadowRoot.querySelector("input").focus(t)}blur(){this.shadowRoot.querySelector("input").blur()}};R(Dt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Dt)}),R(Dt,"observedAttributes",["title","value","placeholder","invalid","no-submit","use-storage","storage-prefix"]);let UISearch=Dt;const Kt=class Kt extends HTMLElement{constructor(){super(),this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(e){if(e===null){this.root.removeAttribute("name");return}this.root.setAttribute("name",e)},getHref(){return this.root.getAttribute("href")},setHref(e){if(e===null){this.root.removeAttribute("href");return}this.root.setAttribute("href",e)},getFallback(){return this.root.hasAttribute("fallback")},setFallback(e){if(!e){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}}}};R(Kt,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Kt)});let UILangType=Kt;const Rt=class Rt extends HTMLElement{constructor(){super(),this.ui={root:this,events:new Events,data:{},langType:null,getCurrent(){return this.root.getAttribute("current")},setCurrent(e){if(e===null){this.root.removeAttribute("current");return}this.root.setAttribute("current",e)},getFallbackElement(){return this.root.querySelector("ui-lang-type[fallback]")},new(e,t){this.langType=e,this.data=t,this.events.dispatch("change",this.langType)},get(e,t){var n,r;return((r=(n=this.data)==null?void 0:n[e])==null?void 0:r[t])||null},on(e,t,n=!1){if(typeof t!="function")throw"callback is not a function";return n&&t(this.langType),this.events.on(e,t)}}}attributeChangedCallback(e,t,n){switch(e){case"current":n!==null&&this.loadLanguage(n);break}}async loadLanguage(e){const t=this.querySelector(`ui-lang-type[name="${e}"]`)||this.ui.getFallbackElement();if(!t)return;if(!t.ui.getHref())throw"Missing href attribute!";const n=await fetch(t.ui.getHref());this.ui.new(t,await n.json())}};R(Rt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Rt)}),R(Rt,"observedAttributes",["current"]);let UILang=Rt;const Zt=class Zt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`
        <div class="background"></div>
        <div class="spinner"></div>
    `);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Zt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Zt)});let UISpinner=Zt;const Wt=class Wt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
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
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Wt,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",Wt)});let UIStackLayoutPage=Wt;const Bt=class Bt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={root:this,cleanup:new CleanUp,pages:{},stack:[],onpopstate:null,events:new Events,lock:!1,enableHistory(){this.onpopstate===null&&(this.onpopstate=async()=>{this._goBack()},window.addEventListener("popstate",this.onpopstate))},disableHistory(){this.onpopstate===null&&window.removeEventListener("popstate",this.onpopstate)},usesHistory(){return this.onpopstate!==null},registerPage(t,n){this.pages[t]=n},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!(!this.stack.length||this.lock)){if(this.onpopstate!==null){history.back();return}this._goBack()}},_goBack(){const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,n=null,r=!1){if(this.lock)return;const s=this.pages[t]();this.stack.push(this.root.appendChild(s)),typeof n=="function"&&setTimeout(()=>n(s));let a=null;this.stack.length>1&&!r&&(a=this.stack[this.stack.length-2],a.parentElement.removeChild(a)),this.dispatchChangeEvent(a),this.onpopstate!==null&&history.pushState(null,document.title,location.href)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}attributeChangedCallback(t,n,r){switch(t){case"use-history":r!==null?this.ui.enableHistory():this.ui.disableHistory();break}}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Bt,"register",()=>{UIStackLayoutPage.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Bt)}),R(Bt,"observedAttributes",["use-history"]);let UIStackLayout=Bt;const zt=class zt extends HTMLElement{constructor(){super(),this.ui={root:this,useStorage:!1,storagePrefix:null,stores:{},events:new Events,get(e){return this.stores[e]},set(e,t,n=!1){if(n&&this.storagePrefix){const r=JSON.parse(localStorage.getItem((this.storagePrefix||"")+e.toString())||"null");this.stores[e]=r??t}else this.stores[e]=t;this.useStorage&&localStorage.setItem((this.storagePrefix||"")+e.toString(),JSON.stringify(this.stores[e])),this.events.dispatch(e,this.stores[e])},update(e,t){if(typeof t!="function")throw"callback is not a function";this.set(e,t(this.stores[e]))},on(e,t,n=!1){if(typeof t!="function")throw"callback is not a function";return n&&t(this.get(e)),this.events.on(e,t)}}}attributeChangedCallback(e,t,n){switch(e){case"use-storage":this.ui.useStorage=n!==null;break;case"storage-prefix":this.ui.storagePrefix=n;break}}};R(zt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",zt)}),R(zt,"observedAttributes",["use-storage","storage-prefix"]);let UIStore=zt;const Ot=class Ot extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},getMode(e=document.body){return e.getAttribute("data-theme")},setMode(e,t=document.body){switch(e){case"dark":t.setAttribute("data-theme",e);break;case"light":t.setAttribute("data-theme",e);break;default:t.removeAttribute("data-theme")}},mediaChangeHandler:e=>{e.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},getAuto(){return!!this.media},setAuto(e,t=document.body){if(!e){if(!this.media)return;this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null;return}if(this.setMode(null,t),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},addTheme(e,t){this.themes[e]=t},setTheme(e){var n;if(!this.themes[e])throw`theme "${e}" is missing in this.themes`;if(((n=this.currentTheme)==null?void 0:n.name)==e)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const t=document.createElement("link");t.id="theme",t.rel="stylesheet",t.href=this.themes[e],document.head.appendChild(t),this.currentTheme={name:e,href:this.themes[e]}}}}attributeChangedCallback(e,t,n){switch(e){case"auto":this.ui.setAuto(n!==null);break;case"mode":this.ui.setMode(n);break}}};R(Ot,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Ot)}),R(Ot,"observedAttributes",["auto","mode"]);let UIThemeHandler=Ot;const Jt=class Jt extends HTMLElement{constructor(){super();R(this,"shadowCSS",()=>css`
        :host {
            width: 100%;
            height: 100%;
            color: inherit;
        }

        svg {
            width: 100%;
            height: 100%;
        }
    `);R(this,"shadowTemplate",()=>html`<slot></slot>`);this.attachShadow({mode:"open"}),this.ui={cleanup:new CleanUp},this.shadowRender()}connectedCallback(){}disconnectedCallback(){this.ui.cleanup.run()}shadowRender(){this.shadowRoot.innerHTML=`
            <style>${this.shadowCSS().trim()}</style>
            ${this.shadowTemplate().trim()}
        `}};R(Jt,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",Jt)});let UISvg=Jt;function register(){UIAppBarItem.register(),UIAppBar.register(),UIButton.register(),UIIconButton.register(),UIContainer.register(),UIDialog.register(),UIDrawerGroupItem.register(),UIDrawerGroup.register(),UIDrawer.register(),UIFlexGridItem.register(),UIFlexGridRow.register(),UIFlexGrid.register(),UIInput.register(),UISearch.register(),UISelectOption.register(),UISelect.register(),UILangType.register(),UILang.register(),UISpinner.register(),UIStackLayout.register(),UIStackLayoutPage.register(),UIStore.register(),UISvg.register(),UILabel.register(),UIPrimary.register(),UISecondary.register(),UIThemeHandler.register()}const scriptRel="modulepreload",assetsURL=function(T){return"/pg-vis.github.io/"+T},seen={},__vitePreload=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),a=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(t.map(l=>{if(l=assetsURL(l),l in seen)return;seen[l]=!0;const h=l.endsWith(".css"),b=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${b}`))return;const w=document.createElement("link");if(w.rel=h?"stylesheet":scriptRel,h||(w.as="script",w.crossOrigin=""),w.href=l,a&&w.setAttribute("nonce",a),document.head.appendChild(w),h)return new Promise((f,g)=>{w.addEventListener("load",f),w.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}return r.then(()=>e()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};function registerSW(T={}){const{immediate:e=!1,onNeedRefresh:t,onOfflineReady:n,onRegistered:r,onRegisteredSW:s,onRegisterError:a}=T;let l,h;const b=async(f=!0)=>{await h};async function w(){if("serviceWorker"in navigator){if(l=await __vitePreload(async()=>{const{Workbox:f}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:f}},[]).then(({Workbox:f})=>new f("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(f=>{a==null||a(f)}),!l)return;l.addEventListener("activated",f=>{(f.isUpdate||f.isExternal)&&window.location.reload()}),l.addEventListener("installed",f=>{f.isUpdate||n==null||n()}),l.register({immediate:e}).then(f=>{s?s("/pg-vis.github.io/sw.js",f):r==null||r(f)}).catch(f=>{a==null||a(f)})}}return h=w(),b}const gridContent$5=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
    </ui-flex-grid-item>
`,Yt=class Yt extends UIDialog{constructor(e){super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$5,t})()),this.ui.setTitle(`Import "${e}"`),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.getValue()||null),this.ui.close()}),this.appendChild(e)}};R(Yt,"register",()=>{customElements.define("import-dialog",Yt)});let ImportDialog=Yt;const gridContent$4=html`
    <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
    </ui-flex-grid-item>
`,Xt=class Xt extends UIDialog{constructor(){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$4,e})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",n=>(n.unshift({title:this.name.ui.getValue(),data:[]}),n)),this.ui.close()}),this.appendChild(e)}};R(Xt,"register",()=>{customElements.define("new-vis-data-dialog",Xt)});let NewVisDataDialog=Xt;const gridContent$3=html`
    <ui-flex-grid-item>
        <ui-label
            secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
    </ui-flex-grid-item>

    <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
    </ui-flex-grid-item>
`,Qt=class Qt extends UIDialog{constructor(){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$3,e})()),this.ui.setTitle("Gist Token"),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.getValue()||null),this.ui.close()}),this.appendChild(e)}};R(Qt,"register",()=>{customElements.define("push-dialog",Qt)});let PushDialog=Qt;const content$g=html`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,te=class te extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$g,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(e){this.root.alert=e,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.ui.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const e=this.querySelector("ui-flex-grid-item.alert");for(;e.firstChild;)e.removeChild(e.firstChild);this.alert!==null&&e.appendChild(createAlert({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const e=this.querySelector("ui-flex-grid-item.desc");for(;e.firstChild;)e.removeChild(e.firstChild);if(this.alert===null)return;const t=document.createElement("p");t.style.padding="var(--ui-spacing)",t.innerHTML=this.alert.desc.join(`
`),e.appendChild(t)}};R(te,"register",()=>{customElements.define("alert-page",te)});let AlertPage=te;const ee=class ee extends UIStackLayoutPage{constructor(){super();R(this,"template",()=>html`
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
    `);this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.list=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new AlertPage,this.ui={...this.ui,root:this,get(){return this.root.list},set(t){const n=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",n),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input.ui.setKey(getKey$2(this.root.list)),setTimeout(()=>this.root.renderList())}},this.render()}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",async({active:n})=>{this.searchBar.ui.active=n,await this.search(n?this.searchBar.ui.input.ui.getValue():"")});let t=null;this.ui.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async n=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(n)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}render(){this.innerHTML=`${this.template().trim()}`,this.searchBar=this.querySelector("search-bar")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const n=this.uiStore.ui.get("search"),r=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let s=0;s<this.list.data.length;s++){if(n.active===!0&&!this.is(this.list.data[s],r))return;setTimeout(()=>this.renderListElement(t,this.list.data[s],s<this.list.data.length-1))}}renderListElement(t,n,r){t.appendChild(createAlert({alert:n,container:"li",hasBorder:r,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,n){const r=[];for(let s=t.from;s<=t.to;s++)r.push(s);return!!`${r.join(",")} ${t.alert}`.match(n)}async onClick(t){const n=t.currentTarget,r=this.getAlertFromElement(n);this.alertPage.ui.set(r),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const n=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(r=>{if(!this.searchBar.ui.active){r.style.display="flex";return}if(this.is(this.getAlertFromElement(r),n)){r.style.display="flex";return}r.style.display="none"})}};R(ee,"register",()=>{customElements.define("alert-lists-page",ee)});let AlertListsPage=ee;function createAlert({alert:T,container:e,hasBorder:t=!0,hasRipple:n=!0,onClick:r=null}){const s=document.createElement(e);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",t&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
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
`)),s.onclick=r,n&&(create(s),s.style.cursor="pointer",s.role="button"),s}function getFileName$2(T){return`AlarmListen_${T.title}.json`}function getKey$2(T){return`${T.title}`}const content$f=html`
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
`,ie=class ie extends UIFlexGridRow{constructor(){super(),this.innerHTML=content$f,this.ui={...this.ui,events:new Events}}connectedCallback(){super.connectedCallback();const e=this.querySelector('[name="new-entry"]'),t=this.querySelector('[name="delete-table"]');this.ui.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("new-entry",null)}),t.ui.events.on("click",()=>{this.ui.events.dispatch("delete-table",null)}))}};R(ie,"register",()=>{customElements.define("metal-sheet-actions",ie)});let MetalSheetActions=ie;function getFileName$1(T){return`BlechListen_${T.format}_${T.toolID}.json`}function getKey$1(T){return`${T.format}:${T.toolID}`}const gridContent$2=html`
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
`,re=class re extends UIDialog{constructor(e){switch(super(),this.appendChild((()=>{const t=new UIFlexGrid;return t.ui.setGap("0.5rem"),t.innerHTML=gridContent$2,t})()),e){case"create":this.ui.setTitle("Neue Liste");break;case"edit":this.ui.setTitle("Liste Bearbeiten");break}this.ui={...this.ui,root:this,mode:e,originFormat:"",originToolID:"",set(t,n,r=-1){this.root.querySelector('[name="format"] ui-input').ui.setValue(t),this.root.querySelector('[name="toolID"] ui-input').ui.setValue(n),this.root.querySelector('[name="press"] ui-select').ui.getOptions().forEach(h=>{h.ui.setSelected(parseInt(h.ui.getValue())===r)}),this.originFormat=t,this.originToolID=n}},this.uiStore=document.querySelector("ui-store"),this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{const n=this.getData();n!==null&&(this.ui.events.dispatch("submit",n),this.ui.close())}),this.appendChild(e)}getData(){var h;const e={format:"",toolID:"",press:-1},t=this.querySelector('[name="format"] ui-input');e.format=t.ui.getValue();const n=this.querySelector('[name="toolID"] ui-input');e.toolID=n.ui.getValue();const r=this.querySelector('[name="press"] ui-select');if(e.press=parseInt(((h=r.ui.getSelectedOption())==null?void 0:h.ui.getValue())||"-1",10),e.format==="")return t.ui.setInvalid(!0),null;const s=getKey$1({format:this.ui.originFormat,toolID:this.ui.originToolID}),a=getKey$1(e),l=this.uiStore.ui.get("metalSheetLists").find(b=>this.ui.mode==="edit"&&s===a?!1:getKey$1(b)===a);return l?(t.ui.setInvalid(l.format===e.format&&l.toolID!==e.toolID),n.ui.setInvalid(l.toolID===e.toolID),null):e}};R(re,"register",()=>{customElements.define("metal-sheet-create-dialog",re)});let MetalSheetCreateDialog=re;const gridContent$1=html``,se=class se extends UIDialog{constructor(){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent$1,e})()),this.ui.setTitle("Eintrag bearbeiten"),this.ui={...this.ui,root:this,set({header:e,data:t=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<e.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
                        <ui-input
                            title="${e[r]}"
                            value="${(t==null?void 0:t[r])||""}"
                        ></ui-input>
                    `,n.appendChild(s)}}},this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createDeleteButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="destructive">Delete</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const a=s.querySelector("ui-input");n.push(a.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(e)}};R(se,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",se)});let MetalSheetModifyEntryDialog=se;const gridContent=html``,ne=class ne extends UIDialog{constructor(){super(),this.appendChild((()=>{const e=new UIFlexGrid;return e.ui.setGap("0.5rem"),e.innerHTML=gridContent,e})()),this.ui.setTitle("Neuer Eintrag"),this.ui={...this.ui,root:this,set({header:e,data:t=null}){const n=this.root.querySelector("ui-flex-grid");for(;n.firstChild;)n.removeChild(n.firstChild);for(let r=0;r<e.length;r++){const s=new UIFlexGridItem;s.innerHTML=html`
                        <ui-input
                            title="${e[r]}"
                            value="${(t==null?void 0:t[r])||""}"
                        ></ui-input>
                    `,n.appendChild(s)}}},this.createCancelButton(),this.createSubmitButton()}createCancelButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(e)}createSubmitButton(){const e=new UIFlexGridItem;e.slot="actions",e.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,e.querySelector("ui-button").ui.events.on("click",()=>{const n=[],r=this.querySelector("ui-flex-grid");for(const s of[...r.children]){const a=s.querySelector("ui-input");n.push(a.ui.getValue())}this.ui.events.dispatch("submit",n),this.ui.close()}),this.appendChild(e)}};R(ne,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",ne)});let MetalSheetNewEntryDialog=ne;const content$e=html`
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
`,oe=class oe extends UIStackLayoutPage{constructor(){super(),this.ui.setName("metal-sheet-lists"),this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,list:null,get(){return this.list},set(e){if(this.list=e,e===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let t=e.format;e.toolID&&(t=`${t} - ${e.toolID}`),e.data.press>-1&&(t=`${t} [P${e.data.press}]`),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.list)])],getFileName$1(this.list),{type:"application/json"})],title:"Blech Listen",text:`${this.list.format} - ${this.list.toolID} - ${this.list.date}`}),this.root.uiStore.ui.set("appBarTitle",t),this.root.render()},updateStore(e){this.root.uiStore.ui.update("metalSheetLists",t=>{e.date=new Date().getTime();const n=getKey$1(e);return t=[...t.filter(r=>getKey$1(r)!==n),e],t})},deleteStore(e){this.root.uiStore.ui.update("metalSheetLists",t=>(t=t.filter(n=>getKey$1(n)!==e),t))}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const e=new MetalSheetCreateDialog("edit");e.ui.set(this.ui.list.format,this.ui.list.toolID,this.ui.list.data.press),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",t=>{this.ui.deleteStore(getKey$1(this.ui.list)),this.ui.list.format=t.format,this.ui.list.toolID=t.toolID,this.ui.list.data.press=t.press,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(e),e.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}render(){this.innerHTML=content$e,this.createMetalSheetActions();const e=this.querySelector("thead > tr"),t=this.querySelector("tbody");for(;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)t.removeChild(t.firstChild);if(!this.ui.list)return;for(const r of this.ui.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerHTML=r,e.appendChild(s)}let n=null;for(let r=0;r<this.ui.list.data.table.data.length;r++){const s=document.createElement("tr");s.style.cursor="pointer",s.role="button",s.onclick=()=>this.createModifyEntryDialog(r),t.appendChild(s),create$1(s,{onDragEnd:(a,l)=>{if(n!==null){if(n<l){let h=this.ui.list.data.table.data;h=[...h.slice(0,n),...h.slice(n+1,l+1),h[n],...h.slice(l+1)],this.ui.list.data.table.data=h,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}else if(n>l){let h=this.ui.list.data.table.data;h=[...h.slice(0,l),h[n],...h.slice(l,n),...h.slice(n+1)],this.ui.list.data.table.data=h,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}[...t.children].forEach(h=>{h.style.background="inherit",h.style.color="inherit"}),n=null}},onDragging:a=>{n!==null&&[...t.children].forEach((l,h)=>{if(h!==a){l.style.background="inherit",l.style.color="inherit";return}l.style.background="var(--ui-primary-bgColor)",l.style.color="var(--ui-primary-color)"})},onDragStart:a=>{n=a}});for(const a of this.ui.list.data.table.data[r]){const l=document.createElement("td");l.style.textAlign="center",l.innerHTML=a,s.appendChild(l)}}}createMetalSheetActions(){const e=this.querySelector("metal-sheet-actions");e.ui.events.on("new-entry",()=>this.createNewEntryDialog()),e.ui.events.on("delete-table",()=>{let t="";this.ui.list.toolID?t=`Delete table: ${this.ui.list.format} - ${this.ui.list.toolID}`:t=`Delete table: ${this.ui.list.format}`,window.confirm(t)&&(this.ui.set(null),this.ui.deleteStore(getKey$1(this.ui.list)))})}createModifyEntryDialog(e){const t=new MetalSheetModifyEntryDialog;t.ui.set({header:this.ui.list.data.table.header,data:this.ui.list.data.table.data[e]}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",n=>{this.ui.list.data.table.data[e]=n,this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),t.ui.events.on("delete",()=>{this.ui.list.data.table.data=[...this.ui.list.data.table.data.slice(0,e),...this.ui.list.data.table.data.slice(e+1)],this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(t),t.ui.open(!0)}createNewEntryDialog(){const e=new MetalSheetNewEntryDialog;e.ui.set({header:this.ui.list.data.table.header,data:null}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",t=>{this.ui.list.data.table.data.push(t),this.ui.set(this.ui.list),this.ui.updateStore(this.ui.list)}),document.body.appendChild(e),e.ui.open(!0)}};R(oe,"register",()=>{customElements.define("metal-sheet-lists-page",oe)});let MetalSheetListsPage=oe;function createVisItem({product:T,events:e=null,ripple:t=!0}){const n=document.createElement("div");n.classList.add("vis-item"),n.role="button",n.setAttribute("data-value",T.lotto+" "+T.name+" "+T.format+" "+T.stamp+" "+T.thickness+"mm"),n.style.display="block",n.style.position="relative",n.style.overflow="hidden",n.style.borderTop="1px solid var(--ui-borderColor)",n.style.borderBottom="1px solid var(--ui-borderColor)",n.style.margin="var(--ui-spacing) 0",n.style.cursor="pointer",n.innerHTML=html`
        <ui-flex-grid>
            <ui-flex-grid-row style="font-size: 1.1rem;">
                <ui-flex-grid-item class="flex justify-center align-center">
                    <div
                        name="lotto"
                        style="font-weight: bold; padding: var(--ui-spacing);"
                        align="right"
                    >
                        ${T.lotto}
                    </div>

                    <div
                        name="name"
                        style="font-weight: lighter; padding: var(--ui-spacing);"
                    >
                        ${T.name}
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
                        ${T.format}
                    </div>

                    <div name="stamp" style="padding: var(--ui-spacing);">
                        ${T.stamp}
                    </div>

                    <div name="thickness" style="padding: var(--ui-spacing);">
                        ${T.thickness}mm
                    </div>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        </ui-flex-grid>
    `;let r;return t&&(r=create(n,{useClick:!0})),e!==null&&(n.onclick=()=>{e.dispatch("click",T)}),{destroy:()=>{r&&r()},element:n}}const shadowContent=html`
    <style>
        :host {
            padding-top: var(--ui-app-bar-height);
        }
    </style>
`,content$d=html`
    <span class="placeholder"></span>
    <div class="content"></div>
`,ae=class ae extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$d,this.shadowRoot.innerHTML+=shadowContent,this.ui.setName("product"),this.ui={...this.ui,root:this,set(e){this.root.replaceChild(createVisItem({product:e,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}}}};R(ae,"register",()=>{customElements.define("product-page",ae)});let ProductPage=ae;const le=class le extends UIStackLayoutPage{constructor(){super();R(this,"template",()=>html`
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
    `);this.ui.setName("vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={...this.ui,root:this,list:null,set(t){if(this.list=t,this.root.setAppBarTitle(),this.list===null){this.root.uiStore.ui.set("share",null),this.root.searchBar.ui.input.ui.setKey(null);return}this.root.update(),this.root.searchBar.ui.input.ui.setKey(getKey(this.list)),this.root.uiStore.ui.set("share",{files:[new File([new Blob([JSON.stringify(this.list)])],getFileName(this.list),{type:"application/json"})]})}},this.render()}connectedCallback(){super.connectedCallback(),this.stackLayout.ui.registerPage("product",()=>new ProductPage),this.setAppBarTitle(),this.uiStore.ui.on("search",({active:t})=>{this.searchBar.ui.active=t,setTimeout(()=>{this.search(t?this.searchBar.ui.input.ui.getValue():"")})}),this.uiStore.ui.set("search",{active:!1})}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("product"),this.uiStore.ui.set("share",null)}update(){const t=this.querySelector(".list");for(;t.firstChild;)t.removeChild(t.firstChild);if(!this.ui.list)return;const n=new Events;n.on("click",r=>{this.stackLayout.ui.setPage("product",s=>{s.ui.set(r)},!0)});for(const r of this.ui.list.data)setTimeout(()=>{t.appendChild(createVisItem({product:r,events:n}).element)})}render(){this.innerHTML=`${this.template().trim()}`,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input.ui.events.on("input",async n=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(n)},250)})}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.ui.list?`Vis - ${this.ui.list.title}`:"Vis")}async search(t){const n=new RegExp(t.replaceAll(" ",".*"),"i"),r=this.querySelector(".list");for(const s of[...r.children])setTimeout(()=>{if(!this.searchBar.ui.active){s.style.display="block";return}if(s.getAttribute("data-value").match(n)){s.style.display="block";return}s.style.display="none"});[...r.children].forEach(s=>{})}};R(le,"register",()=>{customElements.define("vis-page",le)});let VisPage=le;function getFileName(T){return`Vis_${T.date}.json`}function getKey(T){return`${T.title}`}const content$c=html``,ue=class ue extends UIStackLayoutPage{constructor(){super(),this.innerHTML=content$c,this.ui.setName("vis-data")}};R(ue,"register",()=>{customElements.define("vis-data-page",ue)});let VisDataPage=ue;const Pt=class Pt extends HTMLElement{constructor(){super();R(this,"css",({height:t})=>css`
        * {
            box-sizing: border-box;
        }

        :host {
            display: none;
            position: absolute;
            top: var(--ui-app-bar-height);
            left: 0;
            right: 0;
            height: ${t};
            padding: var(--ui-spacing);
            overflow: hidden;
        }

        :host([active]) {
            display: block;
        }
    `);R(this,"template",({title:t})=>html`
        <ui-search
            style="z-index: 10;"
            title="${t}"
            no-submit
            use-storage
            storage-prefix="pg-vis:search:"
            key=""
        ></ui-search>
    `);this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,attr:{height:"4.5rem",title:""},input:null,get active(){return this.root.hasAttribute("active")},set active(t){if(t){this.root.setAttribute("active",""),this.root.stackLayout.style.setProperty("--search-bar-height",this.attr.height),this.input.focus();return}this.root.removeAttribute("active"),this.root.stackLayout.style.setProperty("--search-bar-height","0rem")},get prefix(){return this.input.ui.storagePrefix},set prefix(t){this.input.ui.storagePrefix="pg-vis:search:"+t}},this.render({...this.ui.attr})}attributeChangedCallback(t,n,r){switch(t){case"title":this.ui.input.ui.setTitle(r||"");break}}render({height:t,title:n}){this.shadowRoot.innerHTML=`
            <style>${this.css({height:t}).trim()}</style>
            ${this.template({title:n}).trim()}
        `,this.ui.input=this.shadowRoot.querySelector("ui-search")}};R(Pt,"register",()=>{customElements.define("search-bar",Pt)}),R(Pt,"observedAttributes",["title"]);let SearchBar=Pt;const version="v0.0.29.dev";function load(T){const e=document.createElement("input");e.type="file",e.multiple=!0,e.onchange=async t=>{for(const n of t.currentTarget.files){const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{T(r.result,n)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${n.name}" failed!`)},r.readAsText(n)}},e.click()}function alertLists(T){const e=[],t=T.map(n=>`${n.title}`).sort();for(const n of t)e.push(T.find(r=>`${r.title}`===n));return e}function metalSheetLists(T){let e=[];const t=T.map(n=>getKey$1(n)).sort();for(const n of t)e.push(T.find(r=>getKey$1(r)===n));return e}const ce=class ce extends UIDrawerGroupItem{constructor(){super();R(this,"template",()=>html`
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
    `);this.style.display="none",this.style.position="relative",this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,onPull:null,onPush:null,pullButton:null,pushButton:null,set(t,n){const r=this.root.querySelector("ui-secondary"),s=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",r.innerHTML=t,s.innerHTML=`Revision: ${n}`):(this.root.style.display="none",r.innerHTML="&nbsp;",s.innerHTML="Revision: -"),this.pullButton.onclick=()=>{this.onPull&&this.onPull(t,n)},this.pushButton.onclick=()=>{this.onPush&&this.onPush(t,n)}}},this.render()}render(){this.innerHTML=`${this.template().trim()}`,this.ui.pullButton=this.querySelector('[name="pull"]'),this.ui.pushButton=this.querySelector('[name="push"]')}};R(ce,"register",()=>{customElements.define("drawer-gist-item",ce)});let DrawerGistItem=ce;class Gist{constructor(e,t=null){this.id=e,this.token=t,this.data=null}async get(){if(!this.id)return null;const e=`https://api.github.com/gists/${this.id}`,t=await fetch(e);if(!t.ok)throw`request to "${e}" failed with "${t.statusText}"!`;const n=await t.json();this.data={revision:n.history.length,files:{},owner:{login:n.owner.login}};for(const[r,s]of Object.entries(n.files))this.data.files[r]={filename:s.filename,content:JSON.parse(s.content)};return this.data}async patch(e){if(!this.id||this.token===null)return null;const t=`https://api.github.com/gists/${this.id}`;return await(await fetch(t,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:e})})).json()}}async function gistPull(T,e,{beforeUpdate:t=null,update:n,updateRevision:r}){const a=await new Gist(T).get();let l=!1;a.revision>e?l=confirm(`Upgrade zu revision "${a.revision}"`):a.revision<e?l=confirm(`Downgrade auf revision "${a.revision}"`):l=confirm(`Already up to date! Reload? (revision: ${a.revision})`),l&&(typeof t=="function"&&await t(),Object.values(a.files).forEach(h=>n(h.content)),r(a.revision))}async function gistPush(T,e,t,{getFileName:n,updateRevision:r}){const s=new PushDialog;s.ui.events.on("close",()=>{document.body.removeChild(s)}),s.ui.events.on("submit",async a=>{if(a===null)return;const l=new Gist(T,a),h=await l.get();if(h.revision>e){alert(`Gist revision is newer then the current revision (${h.revision})`);return}const b=Object.values(h.files).map(g=>JSON.stringify(g.content)).sort(),w=Object.values(t).map(g=>JSON.stringify(g)).sort();if(JSON.stringify(b)===JSON.stringify(w)){alert("Nope, no patching needed... already up to date...");return}const f={};t.forEach(g=>{f[n(g)]={content:JSON.stringify(g)}});for(const g of Object.keys(h.files))Object.hasOwn(f,g)||(f[g]=null);try{console.debug(await l.patch(f))}catch(g){console.error(g);return}r(e+1)}),document.body.appendChild(s),s.ui.open(!0)}const svgDownload=html`
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
`,_DrawerImportButton=class _DrawerImportButton extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$b,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,importButton:this.querySelector("ui-button"),exportButton:this.querySelector("ui-icon-button"),storeGistKey:null,beforeUpdate:null,onValidate:null,onUpdate:null,async setExportHandler(T){if(T===null){this.exportButton.parentElement.style.display="none";return}this.exportButton.parentElement.style.display="flex",this.exportButton.ui.cleanup.run(),this.exportButton.ui.cleanup.add(this.exportButton.ui.events.on("click",T))},setDisabled(T){T?(this.importButton.ui.disable(),this.exportButton.ui.disable()):(this.importButton.ui.enable(),this.exportButton.ui.enable())}}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.importButton.ui.events.on("click",()=>this.import()))}attributeChangedCallback(name,_oldValue,newValue){switch(name){case"store-gist-key":this.ui.storeGistKey=newValue;break;case"on-validate":newValue===null?this.ui.onValidate=null:this.ui.onValidate=eval(newValue);break;case"on-update":newValue===null?this.ui.onUpdate=null:this.ui.onUpdate=eval(newValue);break;case"disabled":this.ui.setDisabled(newValue!==null);break}}async import(){const T=new ImportDialog("Blech Listen");T.ui.events.on("submit",async e=>{if(this.ui.onValidate===null)throw new Error("onValidate callback missing");if(this.ui.onUpdate===null)throw new Error("onUpdate callback missing");if(e===null){load(async r=>{let s=null;try{s=await this.ui.onValidate(r,null)}catch(a){alert(`Validation failed: ${a}`);return}s!==null&&await this.ui.onUpdate(s)});return}if(this.ui.storeGistKey===null)throw new Error("gist-key missing");const t=new Gist(e);let n;try{n=await t.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storeGistKey}`]={id:e,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.ui.onValidate(n.files[r].content,t.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.ui.beforeUpdate=="function"&&await this.ui.beforeUpdate();for(const r of Object.values(n.files))await this.ui.onUpdate(r.content)}),T.ui.events.on("close",()=>{document.body.removeChild(T)}),document.body.appendChild(T),T.ui.open(!0)}};R(_DrawerImportButton,"register",()=>{customElements.define("drawer-import-button",_DrawerImportButton)}),R(_DrawerImportButton,"observedAttributes",["store-gist-key","type","on-validate","on-update","disabled"]);let DrawerImportButton=_DrawerImportButton;const content$a=html`
    <ui-button variant="full" color="secondary">Neu</ui-button>
`,he=class he extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$a,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,button:this.querySelector("ui-button")}}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.ui.button.ui.events.on("click",()=>this.onClick()))}onClick(){const e=new MetalSheetCreateDialog("create");e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",t=>{t!==null&&this.uiStore.ui.update("metalSheetLists",n=>(n=[...n,{date:new Date().getTime(),format:t.format,toolID:t.toolID,data:{press:t.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],n))}),document.body.appendChild(e),e.ui.open(!0)}};R(he,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",he)});let DrawerNewMetalSheetListButton=he;const de=class de extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};R(de,"register",()=>{customElements.define("drawer-revision",de)});let DrawerRevision=de;const svgTrash=html`
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
`,pe=class pe extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$9,this.ui={...this.ui,root:this,events:new Events,data:null,set(e){this.data=e,this.root.setText(e.title)}}}connectedCallback(){super.connectedCallback();const e=this.querySelector("ui-button"),t=this.querySelector("ui-icon-button");this.ui.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),t.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(e){const t=document.createElement("span");t.innerHTML=html` <ui-primary>${e}</ui-primary> `,this.querySelector("ui-button").appendChild(t)}};R(pe,"register",()=>{customElements.define("pg-drawer-item-alert-list",pe)});let PGDrawerItemAlertList=pe;const content$8=html`
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
`,fe=class fe extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$8,this.ui={...this.ui,root:this,events:new Events,data:null,set(e){var n;this.data=e;let t=-1;typeof((n=e.data)==null?void 0:n.press)=="number"&&(t=e.data.press),this.root.setText(e.format,e.toolID,t)}}}connectedCallback(){super.connectedCallback();const e=this.querySelector("ui-button"),t=this.querySelector("ui-icon-button");this.ui.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),t.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(e,t,n){const r=document.createElement("span");r.innerHTML=html`
            <ui-primary>
                <span>${e}</span>
                <span style="font-size: 0.85em;">
                    ${n>-1?"[P"+n+"]":""}
                </span>
            </ui-primary>
            <br />
        `,r.innerHTML+=html`
            <ui-secondary>
                <span>${t}</span>
            </ui-secondary>
        `,this.querySelector("ui-button").appendChild(r)}};R(fe,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",fe)});let PGDrawerItemMetalSheetList=fe;const content$7=html`
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
`,me=class me extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$7,this.ui={...this.ui,root:this,events:new Events,data:null,set(e){this.data=e,this.root.setText(e.title,null)}}}connectedCallback(){super.connectedCallback();const e=this.querySelector("ui-button"),t=this.querySelector("ui-icon-button");this.ui.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),t.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(e,t=null){const n=document.createElement("span");n.innerHTML=html` <ui-primary>${e}</ui-primary> `,t!==null&&(n.innerHTML+=html`<ui-secondary>${t}</ui-secondary>`),this.querySelector("ui-button").appendChild(n)}};R(me,"register",()=>{customElements.define("pg-drawer-item-vis-data",me)});let PGDrawerItemVisData=me;const content$6=html`
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
`,ge=class ge extends UIDrawerGroupItem{constructor(){super(),this.innerHTML=content$6,this.ui={...this.ui,root:this,events:new Events,data:null,set(e){this.data=e,this.root.setText(e.title,e.data.length)}}}connectedCallback(){super.connectedCallback();const e=this.querySelector("ui-button"),t=this.querySelector("ui-icon-button");this.ui.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.ui.data)}),t.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.ui.data)}))}setText(e,t){const n=document.createElement("span");n.innerHTML=html` <ui-primary>${e}</ui-primary><br /> `,n.innerHTML+=html`
            <ui-secondary>${t} Einträge</ui-secondary>
        `,this.querySelector("ui-button").appendChild(n)}};R(ge,"register",()=>{customElements.define("pg-drawer-item-vis",ge)});let PGDrawerItemVis=ge;const defaultItems$2=2,storeGistKey$2="alert-lists",storeDataKey$2="alertLists",content$5=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$2}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>
`,be=class be extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$5,this.style.position="relative",this.ui.setTitle("Alarm Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$2,this.storeAlertListsHandler.bind(this),!0));const e=this.querySelector("drawer-import-button");e.ui.onValidate=this.validate.bind(this),e.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$2,[])},e.ui.onUpdate=this.update.bind(this)}async validate(e){const t=n=>new Error(`invalid data for alert:
${JSON.stringify(n,null,4)}`);if(typeof(e==null?void 0:e.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(e==null?void 0:e.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(e,"data")||(e.data=[]);for(let n=0;n<e.data.length;n++){const r=e.data[n];if(typeof r.from!="number"||typeof r.to!="number"||typeof r.alert!="string"||!Array.isArray(r.desc)||(typeof r.desc=="string"&&(r.desc=r.desc.split(`
`)),r.desc.filter(s=>typeof s!="string").length))throw t(r)}return e}async update(e){console.debug("[PGDrawerAlertLists.update]",{data:e}),updateStore(this.uiStore,e,{storeDataKey:storeDataKey$2,getKey:getKey$2})}async storeGistHandler(e){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:e}),storeGistHandler(this.querySelector("drawer-gist-item"),e,{storeGistKey:storeGistKey$2,storeDataKey:storeDataKey$2,getFileName:getFileName$2,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(e){if(!e)return;const t=[...this.children].slice(defaultItems$2);for(;t.length>0;)this.removeChild(t.pop());for(const n of alertLists(e)){const r=new PGDrawerItemAlertList;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",a=>{a.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.title} - ${n.date}`)&&this.uiStore.ui.update(storeDataKey$2,s=>s.filter(a=>a.title!==n.title))})),this.appendChild(r)}}};R(be,"register",()=>{customElements.define("pg-drawer-alert-lists",be)});let PGDrawerAlertLists=be;var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function getDefaultExportFromCjs(T){return T&&T.__esModule&&Object.prototype.hasOwnProperty.call(T,"default")?T.default:T}var FileSaver_min={exports:{}};(function(T,e){(function(t,n){n()})(commonjsGlobal,function(){function t(b,w){return typeof w>"u"?w={autoBom:!1}:typeof w!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),w={autoBom:!w}),w.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function n(b,w,f){var g=new XMLHttpRequest;g.open("GET",b),g.responseType="blob",g.onload=function(){h(g.response,w,f)},g.onerror=function(){console.error("could not download file")},g.send()}function r(b){var w=new XMLHttpRequest;w.open("HEAD",b,!1);try{w.send()}catch{}return 200<=w.status&&299>=w.status}function s(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var w=document.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(w)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof commonjsGlobal=="object"&&commonjsGlobal.global===commonjsGlobal?commonjsGlobal:void 0,l=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!l?function(b,w,f){var g=a.URL||a.webkitURL,u=document.createElement("a");w=w||b.name||"download",u.download=w,u.rel="noopener",typeof b=="string"?(u.href=b,u.origin===location.origin?s(u):r(u.href)?n(b,w,f):s(u,u.target="_blank")):(u.href=g.createObjectURL(b),setTimeout(function(){g.revokeObjectURL(u.href)},4e4),setTimeout(function(){s(u)},0))}:"msSaveOrOpenBlob"in navigator?function(b,w,f){if(w=w||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(t(b,f),w);else if(r(b))n(b,w,f);else{var g=document.createElement("a");g.href=b,g.target="_blank",setTimeout(function(){s(g)})}}:function(b,w,f,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),typeof b=="string")return n(b,w,f);var u=b.type==="application/octet-stream",k=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||u&&k||l)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var _=m.result;_=c?_:_.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=_:location=_,g=null},m.readAsDataURL(b)}else{var d=a.URL||a.webkitURL,y=d.createObjectURL(b);g?g.location=y:location.href=y,g=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});a.saveAs=h.saveAs=h,T.exports=h})})(FileSaver_min);var FileSaver_minExports=FileSaver_min.exports;const FileSaver=getDefaultExportFromCjs(FileSaver_minExports);function commonjsRequire(T){throw new Error('Could not dynamically require "'+T+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var jszip_min={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(T,e){(function(t){T.exports=t()})(function(){return function t(n,r,s){function a(b,w){if(!r[b]){if(!n[b]){var f=typeof commonjsRequire=="function"&&commonjsRequire;if(!w&&f)return f(b,!0);if(l)return l(b,!0);var g=new Error("Cannot find module '"+b+"'");throw g.code="MODULE_NOT_FOUND",g}var u=r[b]={exports:{}};n[b][0].call(u.exports,function(k){var c=n[b][1][k];return a(c||k)},u,u.exports,t,n,r,s)}return r[b].exports}for(var l=typeof commonjsRequire=="function"&&commonjsRequire,h=0;h<s.length;h++)a(s[h]);return a}({1:[function(t,n,r){var s=t("./utils"),a=t("./support"),l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";r.encode=function(h){for(var b,w,f,g,u,k,c,m=[],d=0,y=h.length,_=y,E=s.getTypeOf(h)!=="string";d<h.length;)_=y-d,f=E?(b=h[d++],w=d<y?h[d++]:0,d<y?h[d++]:0):(b=h.charCodeAt(d++),w=d<y?h.charCodeAt(d++):0,d<y?h.charCodeAt(d++):0),g=b>>2,u=(3&b)<<4|w>>4,k=1<_?(15&w)<<2|f>>6:64,c=2<_?63&f:64,m.push(l.charAt(g)+l.charAt(u)+l.charAt(k)+l.charAt(c));return m.join("")},r.decode=function(h){var b,w,f,g,u,k,c=0,m=0,d="data:";if(h.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var y,_=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===l.charAt(64)&&_--,h.charAt(h.length-2)===l.charAt(64)&&_--,_%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=a.uint8array?new Uint8Array(0|_):new Array(0|_);c<h.length;)b=l.indexOf(h.charAt(c++))<<2|(g=l.indexOf(h.charAt(c++)))>>4,w=(15&g)<<4|(u=l.indexOf(h.charAt(c++)))>>2,f=(3&u)<<6|(k=l.indexOf(h.charAt(c++))),y[m++]=b,u!==64&&(y[m++]=w),k!==64&&(y[m++]=f);return y}},{"./support":30,"./utils":32}],2:[function(t,n,r){var s=t("./external"),a=t("./stream/DataWorker"),l=t("./stream/Crc32Probe"),h=t("./stream/DataLengthProbe");function b(w,f,g,u,k){this.compressedSize=w,this.uncompressedSize=f,this.crc32=g,this.compression=u,this.compressedContent=k}b.prototype={getContentWorker:function(){var w=new a(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),f=this;return w.on("end",function(){if(this.streamInfo.data_length!==f.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new a(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(w,f,g){return w.pipe(new l).pipe(new h("uncompressedSize")).pipe(f.compressWorker(g)).pipe(new h("compressedSize")).withStreamInfo("compression",f)},n.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(t,n,r){var s=t("./stream/GenericWorker");r.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},r.DEFLATE=t("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(t,n,r){var s=t("./utils"),a=function(){for(var l,h=[],b=0;b<256;b++){l=b;for(var w=0;w<8;w++)l=1&l?3988292384^l>>>1:l>>>1;h[b]=l}return h}();n.exports=function(l,h){return l!==void 0&&l.length?s.getTypeOf(l)!=="string"?function(b,w,f,g){var u=a,k=g+f;b^=-1;for(var c=g;c<k;c++)b=b>>>8^u[255&(b^w[c])];return-1^b}(0|h,l,l.length,0):function(b,w,f,g){var u=a,k=g+f;b^=-1;for(var c=g;c<k;c++)b=b>>>8^u[255&(b^w.charCodeAt(c))];return-1^b}(0|h,l,l.length,0):0}},{"./utils":32}],5:[function(t,n,r){r.base64=!1,r.binary=!1,r.dir=!1,r.createFolders=!0,r.date=null,r.compression=null,r.compressionOptions=null,r.comment=null,r.unixPermissions=null,r.dosPermissions=null},{}],6:[function(t,n,r){var s=null;s=typeof Promise<"u"?Promise:t("lie"),n.exports={Promise:s}},{lie:37}],7:[function(t,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=t("pako"),l=t("./utils"),h=t("./stream/GenericWorker"),b=s?"uint8array":"array";function w(f,g){h.call(this,"FlateWorker/"+f),this._pako=null,this._pakoAction=f,this._pakoOptions=g,this.meta={}}r.magic="\b\0",l.inherits(w,h),w.prototype.processChunk=function(f){this.meta=f.meta,this._pako===null&&this._createPako(),this._pako.push(l.transformTo(b,f.data),!1)},w.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var f=this;this._pako.onData=function(g){f.push({data:g,meta:f.meta})}},r.compressWorker=function(f){return new w("Deflate",f)},r.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(t,n,r){function s(u,k){var c,m="";for(c=0;c<k;c++)m+=String.fromCharCode(255&u),u>>>=8;return m}function a(u,k,c,m,d,y){var _,E,C=u.file,M=u.compression,z=y!==b.utf8encode,j=l.transformTo("string",y(C.name)),B=l.transformTo("string",b.utf8encode(C.name)),q=C.comment,X=l.transformTo("string",y(q)),S=l.transformTo("string",b.utf8encode(q)),O=B.length!==C.name.length,o=S.length!==q.length,$="",tt="",H="",et=C.dir,N=C.date,Q={crc32:0,compressedSize:0,uncompressedSize:0};k&&!c||(Q.crc32=u.crc32,Q.compressedSize=u.compressedSize,Q.uncompressedSize=u.uncompressedSize);var I=0;k&&(I|=8),z||!O&&!o||(I|=2048);var L=0,Y=0;et&&(L|=16),d==="UNIX"?(Y=798,L|=function(K,ot){var ct=K;return K||(ct=ot?16893:33204),(65535&ct)<<16}(C.unixPermissions,et)):(Y=20,L|=function(K){return 63&(K||0)}(C.dosPermissions)),_=N.getUTCHours(),_<<=6,_|=N.getUTCMinutes(),_<<=5,_|=N.getUTCSeconds()/2,E=N.getUTCFullYear()-1980,E<<=4,E|=N.getUTCMonth()+1,E<<=5,E|=N.getUTCDate(),O&&(tt=s(1,1)+s(w(j),4)+B,$+="up"+s(tt.length,2)+tt),o&&(H=s(1,1)+s(w(X),4)+S,$+="uc"+s(H.length,2)+H);var Z="";return Z+=`
\0`,Z+=s(I,2),Z+=M.magic,Z+=s(_,2),Z+=s(E,2),Z+=s(Q.crc32,4),Z+=s(Q.compressedSize,4),Z+=s(Q.uncompressedSize,4),Z+=s(j.length,2),Z+=s($.length,2),{fileRecord:f.LOCAL_FILE_HEADER+Z+j+$,dirRecord:f.CENTRAL_FILE_HEADER+s(Y,2)+Z+s(X.length,2)+"\0\0\0\0"+s(L,4)+s(m,4)+j+$+X}}var l=t("../utils"),h=t("../stream/GenericWorker"),b=t("../utf8"),w=t("../crc32"),f=t("../signature");function g(u,k,c,m){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=c,this.encodeFileName=m,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}l.inherits(g,h),g.prototype.push=function(u){var k=u.meta.percent||0,c=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,h.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:c?(k+100*(c-m-1))/c:100}}))},g.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var k=this.streamFiles&&!u.file.dir;if(k){var c=a(u,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},g.prototype.closedSource=function(u){this.accumulate=!1;var k=this.streamFiles&&!u.file.dir,c=a(u,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),k)this.push({data:function(m){return f.DATA_DESCRIPTOR+s(m.crc32,4)+s(m.compressedSize,4)+s(m.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},g.prototype.flush=function(){for(var u=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var c=this.bytesWritten-u,m=function(d,y,_,E,C){var M=l.transformTo("string",C(E));return f.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(y,4)+s(_,4)+s(M.length,2)+M}(this.dirRecords.length,c,u,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},g.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},g.prototype.registerPrevious=function(u){this._sources.push(u);var k=this;return u.on("data",function(c){k.processChunk(c)}),u.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),u.on("error",function(c){k.error(c)}),this},g.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},g.prototype.error=function(u){var k=this._sources;if(!h.prototype.error.call(this,u))return!1;for(var c=0;c<k.length;c++)try{k[c].error(u)}catch{}return!0},g.prototype.lock=function(){h.prototype.lock.call(this);for(var u=this._sources,k=0;k<u.length;k++)u[k].lock()},n.exports=g},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(t,n,r){var s=t("../compressions"),a=t("./ZipFileWorker");r.generateWorker=function(l,h,b){var w=new a(h.streamFiles,b,h.platform,h.encodeFileName),f=0;try{l.forEach(function(g,u){f++;var k=function(y,_){var E=y||_,C=s[E];if(!C)throw new Error(E+" is not a valid compression method !");return C}(u.options.compression,h.compression),c=u.options.compressionOptions||h.compressionOptions||{},m=u.dir,d=u.date;u._compressWorker(k,c).withStreamInfo("file",{name:g,dir:m,date:d,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(w)}),w.entriesCount=f}catch(g){w.error(g)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(t,n,r){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new s;for(var l in this)typeof this[l]!="function"&&(a[l]=this[l]);return a}}(s.prototype=t("./object")).loadAsync=t("./load"),s.support=t("./support"),s.defaults=t("./defaults"),s.version="3.10.1",s.loadAsync=function(a,l){return new s().loadAsync(a,l)},s.external=t("./external"),n.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(t,n,r){var s=t("./utils"),a=t("./external"),l=t("./utf8"),h=t("./zipEntries"),b=t("./stream/Crc32Probe"),w=t("./nodejsUtils");function f(g){return new a.Promise(function(u,k){var c=g.decompressed.getContentWorker().pipe(new b);c.on("error",function(m){k(m)}).on("end",function(){c.streamInfo.crc32!==g.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}n.exports=function(g,u){var k=this;return u=s.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:l.utf8decode}),w.isNode&&w.isStream(g)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",g,!0,u.optimizedBinaryString,u.base64).then(function(c){var m=new h(u);return m.load(c),m}).then(function(c){var m=[a.Promise.resolve(c)],d=c.files;if(u.checkCRC32)for(var y=0;y<d.length;y++)m.push(f(d[y]));return a.Promise.all(m)}).then(function(c){for(var m=c.shift(),d=m.files,y=0;y<d.length;y++){var _=d[y],E=_.fileNameStr,C=s.resolve(_.fileNameStr);k.file(C,_.decompressed,{binary:!0,optimizedBinaryString:!0,date:_.date,dir:_.dir,comment:_.fileCommentStr.length?_.fileCommentStr:null,unixPermissions:_.unixPermissions,dosPermissions:_.dosPermissions,createFolders:u.createFolders}),_.dir||(k.file(C).unsafeOriginalName=E)}return m.zipComment.length&&(k.comment=m.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(t,n,r){var s=t("../utils"),a=t("../stream/GenericWorker");function l(h,b){a.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(b)}s.inherits(l,a),l.prototype._bindStream=function(h){var b=this;(this._stream=h).pause(),h.on("data",function(w){b.push({data:w,meta:{percent:0}})}).on("error",function(w){b.isPaused?this.generatedError=w:b.error(w)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},l.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},n.exports=l},{"../stream/GenericWorker":28,"../utils":32}],13:[function(t,n,r){var s=t("readable-stream").Readable;function a(l,h,b){s.call(this,h),this._helper=l;var w=this;l.on("data",function(f,g){w.push(f)||w._helper.pause(),b&&b(g)}).on("error",function(f){w.emit("error",f)}).on("end",function(){w.push(null)})}t("../utils").inherits(a,s),a.prototype._read=function(){this._helper.resume()},n.exports=a},{"../utils":32,"readable-stream":16}],14:[function(t,n,r){n.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,a);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,a)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var a=new Buffer(s);return a.fill(0),a},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(t,n,r){function s(C,M,z){var j,B=l.getTypeOf(M),q=l.extend(z||{},w);q.date=q.date||new Date,q.compression!==null&&(q.compression=q.compression.toUpperCase()),typeof q.unixPermissions=="string"&&(q.unixPermissions=parseInt(q.unixPermissions,8)),q.unixPermissions&&16384&q.unixPermissions&&(q.dir=!0),q.dosPermissions&&16&q.dosPermissions&&(q.dir=!0),q.dir&&(C=d(C)),q.createFolders&&(j=m(C))&&y.call(this,j,!0);var X=B==="string"&&q.binary===!1&&q.base64===!1;z&&z.binary!==void 0||(q.binary=!X),(M instanceof f&&M.uncompressedSize===0||q.dir||!M||M.length===0)&&(q.base64=!1,q.binary=!0,M="",q.compression="STORE",B="string");var S=null;S=M instanceof f||M instanceof h?M:k.isNode&&k.isStream(M)?new c(C,M):l.prepareContent(C,M,q.binary,q.optimizedBinaryString,q.base64);var O=new g(C,S,q);this.files[C]=O}var a=t("./utf8"),l=t("./utils"),h=t("./stream/GenericWorker"),b=t("./stream/StreamHelper"),w=t("./defaults"),f=t("./compressedObject"),g=t("./zipObject"),u=t("./generate"),k=t("./nodejsUtils"),c=t("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var M=C.lastIndexOf("/");return 0<M?C.substring(0,M):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},y=function(C,M){return M=M!==void 0?M:w.createFolders,C=d(C),this.files[C]||s.call(this,C,null,{dir:!0,createFolders:M}),this.files[C]};function _(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var M,z,j;for(M in this.files)j=this.files[M],(z=M.slice(this.root.length,M.length))&&M.slice(0,this.root.length)===this.root&&C(z,j)},filter:function(C){var M=[];return this.forEach(function(z,j){C(z,j)&&M.push(j)}),M},file:function(C,M,z){if(arguments.length!==1)return C=this.root+C,s.call(this,C,M,z),this;if(_(C)){var j=C;return this.filter(function(q,X){return!X.dir&&j.test(q)})}var B=this.files[this.root+C];return B&&!B.dir?B:null},folder:function(C){if(!C)return this;if(_(C))return this.filter(function(B,q){return q.dir&&C.test(B)});var M=this.root+C,z=y.call(this,M),j=this.clone();return j.root=z.name,j},remove:function(C){C=this.root+C;var M=this.files[C];if(M||(C.slice(-1)!=="/"&&(C+="/"),M=this.files[C]),M&&!M.dir)delete this.files[C];else for(var z=this.filter(function(B,q){return q.name.slice(0,C.length)===C}),j=0;j<z.length;j++)delete this.files[z[j].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var M,z={};try{if((z=l.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=z.type.toLowerCase(),z.compression=z.compression.toUpperCase(),z.type==="binarystring"&&(z.type="string"),!z.type)throw new Error("No output type specified.");l.checkSupport(z.type),z.platform!=="darwin"&&z.platform!=="freebsd"&&z.platform!=="linux"&&z.platform!=="sunos"||(z.platform="UNIX"),z.platform==="win32"&&(z.platform="DOS");var j=z.comment||this.comment||"";M=u.generateWorker(this,z,j)}catch(B){(M=new h("error")).error(B)}return new b(M,z.type||"string",z.mimeType)},generateAsync:function(C,M){return this.generateInternalStream(C).accumulate(M)},generateNodeStream:function(C,M){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(M)}};n.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(t,n,r){n.exports=t("stream")},{stream:void 0}],17:[function(t,n,r){var s=t("./DataReader");function a(l){s.call(this,l);for(var h=0;h<this.data.length;h++)l[h]=255&l[h]}t("../utils").inherits(a,s),a.prototype.byteAt=function(l){return this.data[this.zero+l]},a.prototype.lastIndexOfSignature=function(l){for(var h=l.charCodeAt(0),b=l.charCodeAt(1),w=l.charCodeAt(2),f=l.charCodeAt(3),g=this.length-4;0<=g;--g)if(this.data[g]===h&&this.data[g+1]===b&&this.data[g+2]===w&&this.data[g+3]===f)return g-this.zero;return-1},a.prototype.readAndCheckSignature=function(l){var h=l.charCodeAt(0),b=l.charCodeAt(1),w=l.charCodeAt(2),f=l.charCodeAt(3),g=this.readData(4);return h===g[0]&&b===g[1]&&w===g[2]&&f===g[3]},a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},n.exports=a},{"../utils":32,"./DataReader":18}],18:[function(t,n,r){var s=t("../utils");function a(l){this.data=l,this.length=l.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(l){this.checkIndex(this.index+l)},checkIndex:function(l){if(this.length<this.zero+l||l<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+l+"). Corrupted zip ?")},setIndex:function(l){this.checkIndex(l),this.index=l},skip:function(l){this.setIndex(this.index+l)},byteAt:function(){},readInt:function(l){var h,b=0;for(this.checkOffset(l),h=this.index+l-1;h>=this.index;h--)b=(b<<8)+this.byteAt(h);return this.index+=l,b},readString:function(l){return s.transformTo("string",this.readData(l))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var l=this.readInt(4);return new Date(Date.UTC(1980+(l>>25&127),(l>>21&15)-1,l>>16&31,l>>11&31,l>>5&63,(31&l)<<1))}},n.exports=a},{"../utils":32}],19:[function(t,n,r){var s=t("./Uint8ArrayReader");function a(l){s.call(this,l)}t("../utils").inherits(a,s),a.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},n.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(t,n,r){var s=t("./DataReader");function a(l){s.call(this,l)}t("../utils").inherits(a,s),a.prototype.byteAt=function(l){return this.data.charCodeAt(this.zero+l)},a.prototype.lastIndexOfSignature=function(l){return this.data.lastIndexOf(l)-this.zero},a.prototype.readAndCheckSignature=function(l){return l===this.readData(4)},a.prototype.readData=function(l){this.checkOffset(l);var h=this.data.slice(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},n.exports=a},{"../utils":32,"./DataReader":18}],21:[function(t,n,r){var s=t("./ArrayReader");function a(l){s.call(this,l)}t("../utils").inherits(a,s),a.prototype.readData=function(l){if(this.checkOffset(l),l===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+l);return this.index+=l,h},n.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(t,n,r){var s=t("../utils"),a=t("../support"),l=t("./ArrayReader"),h=t("./StringReader"),b=t("./NodeBufferReader"),w=t("./Uint8ArrayReader");n.exports=function(f){var g=s.getTypeOf(f);return s.checkSupport(g),g!=="string"||a.uint8array?g==="nodebuffer"?new b(f):a.uint8array?new w(s.transformTo("uint8array",f)):new l(s.transformTo("array",f)):new h(f)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(t,n,r){r.LOCAL_FILE_HEADER="PK",r.CENTRAL_FILE_HEADER="PK",r.CENTRAL_DIRECTORY_END="PK",r.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",r.ZIP64_CENTRAL_DIRECTORY_END="PK",r.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(t,n,r){var s=t("./GenericWorker"),a=t("../utils");function l(h){s.call(this,"ConvertWorker to "+h),this.destType=h}a.inherits(l,s),l.prototype.processChunk=function(h){this.push({data:a.transformTo(this.destType,h.data),meta:h.meta})},n.exports=l},{"../utils":32,"./GenericWorker":28}],25:[function(t,n,r){var s=t("./GenericWorker"),a=t("../crc32");function l(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}t("../utils").inherits(l,s),l.prototype.processChunk=function(h){this.streamInfo.crc32=a(h.data,this.streamInfo.crc32||0),this.push(h)},n.exports=l},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(t,n,r){var s=t("../utils"),a=t("./GenericWorker");function l(h){a.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}s.inherits(l,a),l.prototype.processChunk=function(h){if(h){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+h.data.length}a.prototype.processChunk.call(this,h)},n.exports=l},{"../utils":32,"./GenericWorker":28}],27:[function(t,n,r){var s=t("../utils"),a=t("./GenericWorker");function l(h){a.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(w){b.dataIsReady=!0,b.data=w,b.max=w&&w.length||0,b.type=s.getTypeOf(w),b.isPaused||b._tickAndRepeat()},function(w){b.error(w)})}s.inherits(l,a),l.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},l.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},l.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},l.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,b);break;case"uint8array":h=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":h=this.data.slice(this.index,b)}return this.index=b,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},n.exports=l},{"../utils":32,"./GenericWorker":28}],28:[function(t,n,r){function s(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,l){return this._listeners[a].push(l),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,l){if(this._listeners[a])for(var h=0;h<this._listeners[a].length;h++)this._listeners[a][h].call(this,l)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var l=this;return a.on("data",function(h){l.processChunk(h)}),a.on("end",function(){l.end()}),a.on("error",function(h){l.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,l){return this.extraStreamInfo[a]=l,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},n.exports=s},{}],29:[function(t,n,r){var s=t("../utils"),a=t("./ConvertWorker"),l=t("./GenericWorker"),h=t("../base64"),b=t("../support"),w=t("../external"),f=null;if(b.nodestream)try{f=t("../nodejs/NodejsStreamOutputAdapter")}catch{}function g(k,c){return new w.Promise(function(m,d){var y=[],_=k._internalType,E=k._outputType,C=k._mimeType;k.on("data",function(M,z){y.push(M),c&&c(z)}).on("error",function(M){y=[],d(M)}).on("end",function(){try{var M=function(z,j,B){switch(z){case"blob":return s.newBlob(s.transformTo("arraybuffer",j),B);case"base64":return h.encode(j);default:return s.transformTo(z,j)}}(E,function(z,j){var B,q=0,X=null,S=0;for(B=0;B<j.length;B++)S+=j[B].length;switch(z){case"string":return j.join("");case"array":return Array.prototype.concat.apply([],j);case"uint8array":for(X=new Uint8Array(S),B=0;B<j.length;B++)X.set(j[B],q),q+=j[B].length;return X;case"nodebuffer":return Buffer.concat(j);default:throw new Error("concat : unsupported type '"+z+"'")}}(_,y),C);m(M)}catch(z){d(z)}y=[]}).resume()})}function u(k,c,m){var d=c;switch(c){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=c,this._mimeType=m,s.checkSupport(d),this._worker=k.pipe(new a(d)),k.lock()}catch(y){this._worker=new l("error"),this._worker.error(y)}}u.prototype={accumulate:function(k){return g(this,k)},on:function(k,c){var m=this;return k==="data"?this._worker.on(k,function(d){c.call(m,d.data,d.meta)}):this._worker.on(k,function(){s.delay(c,arguments,m)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new f(this,{objectMode:this._outputType!=="nodebuffer"},k)}},n.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(t,n,r){if(r.base64=!0,r.array=!0,r.string=!0,r.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",r.nodebuffer=typeof Buffer<"u",r.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")r.blob=!1;else{var s=new ArrayBuffer(0);try{r.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(s),r.blob=a.getBlob("application/zip").size===0}catch{r.blob=!1}}}try{r.nodestream=!!t("readable-stream").Readable}catch{r.nodestream=!1}},{"readable-stream":16}],31:[function(t,n,r){for(var s=t("./utils"),a=t("./support"),l=t("./nodejsUtils"),h=t("./stream/GenericWorker"),b=new Array(256),w=0;w<256;w++)b[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;b[254]=b[254]=1;function f(){h.call(this,"utf-8 decode"),this.leftOver=null}function g(){h.call(this,"utf-8 encode")}r.utf8encode=function(u){return a.nodebuffer?l.newBufferFrom(u,"utf-8"):function(k){var c,m,d,y,_,E=k.length,C=0;for(y=0;y<E;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),C+=m<128?1:m<2048?2:m<65536?3:4;for(c=a.uint8array?new Uint8Array(C):new Array(C),y=_=0;_<C;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<E&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),m<128?c[_++]=m:(m<2048?c[_++]=192|m>>>6:(m<65536?c[_++]=224|m>>>12:(c[_++]=240|m>>>18,c[_++]=128|m>>>12&63),c[_++]=128|m>>>6&63),c[_++]=128|63&m);return c}(u)},r.utf8decode=function(u){return a.nodebuffer?s.transformTo("nodebuffer",u).toString("utf-8"):function(k){var c,m,d,y,_=k.length,E=new Array(2*_);for(c=m=0;c<_;)if((d=k[c++])<128)E[m++]=d;else if(4<(y=b[d]))E[m++]=65533,c+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&c<_;)d=d<<6|63&k[c++],y--;1<y?E[m++]=65533:d<65536?E[m++]=d:(d-=65536,E[m++]=55296|d>>10&1023,E[m++]=56320|1023&d)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),s.applyFromCharCode(E)}(u=s.transformTo(a.uint8array?"uint8array":"array",u))},s.inherits(f,h),f.prototype.processChunk=function(u){var k=s.transformTo(a.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var c=k;(k=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),k.set(c,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var m=function(y,_){var E;for((_=_||y.length)>y.length&&(_=y.length),E=_-1;0<=E&&(192&y[E])==128;)E--;return E<0||E===0?_:E+b[y[E]]>_?E:_}(k),d=k;m!==k.length&&(a.uint8array?(d=k.subarray(0,m),this.leftOver=k.subarray(m,k.length)):(d=k.slice(0,m),this.leftOver=k.slice(m,k.length))),this.push({data:r.utf8decode(d),meta:u.meta})},f.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:r.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},r.Utf8DecodeWorker=f,s.inherits(g,h),g.prototype.processChunk=function(u){this.push({data:r.utf8encode(u.data),meta:u.meta})},r.Utf8EncodeWorker=g},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(t,n,r){var s=t("./support"),a=t("./base64"),l=t("./nodejsUtils"),h=t("./external");function b(c){return c}function w(c,m){for(var d=0;d<c.length;++d)m[d]=255&c.charCodeAt(d);return m}t("setimmediate"),r.newBlob=function(c,m){r.checkSupport("blob");try{return new Blob([c],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(c),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var f={stringifyByChunk:function(c,m,d){var y=[],_=0,E=c.length;if(E<=d)return String.fromCharCode.apply(null,c);for(;_<E;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,c.slice(_,Math.min(_+d,E)))):y.push(String.fromCharCode.apply(null,c.subarray(_,Math.min(_+d,E)))),_+=d;return y.join("")},stringifyByChar:function(c){for(var m="",d=0;d<c.length;d++)m+=String.fromCharCode(c[d]);return m},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,l.allocBuffer(1)).length===1}catch{return!1}}()}};function g(c){var m=65536,d=r.getTypeOf(c),y=!0;if(d==="uint8array"?y=f.applyCanBeUsed.uint8array:d==="nodebuffer"&&(y=f.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return f.stringifyByChunk(c,d,m)}catch{m=Math.floor(m/2)}return f.stringifyByChar(c)}function u(c,m){for(var d=0;d<c.length;d++)m[d]=c[d];return m}r.applyFromCharCode=g;var k={};k.string={string:b,array:function(c){return w(c,new Array(c.length))},arraybuffer:function(c){return k.string.uint8array(c).buffer},uint8array:function(c){return w(c,new Uint8Array(c.length))},nodebuffer:function(c){return w(c,l.allocBuffer(c.length))}},k.array={string:g,array:b,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return l.newBufferFrom(c)}},k.arraybuffer={string:function(c){return g(new Uint8Array(c))},array:function(c){return u(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:b,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return l.newBufferFrom(new Uint8Array(c))}},k.uint8array={string:g,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:b,nodebuffer:function(c){return l.newBufferFrom(c)}},k.nodebuffer={string:g,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return k.nodebuffer.uint8array(c).buffer},uint8array:function(c){return u(c,new Uint8Array(c.length))},nodebuffer:b},r.transformTo=function(c,m){if(m=m||"",!c)return m;r.checkSupport(c);var d=r.getTypeOf(m);return k[d][c](m)},r.resolve=function(c){for(var m=c.split("/"),d=[],y=0;y<m.length;y++){var _=m[y];_==="."||_===""&&y!==0&&y!==m.length-1||(_===".."?d.pop():d.push(_))}return d.join("/")},r.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":s.nodebuffer&&l.isBuffer(c)?"nodebuffer":s.uint8array&&c instanceof Uint8Array?"uint8array":s.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},r.checkSupport=function(c){if(!s[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},r.MAX_VALUE_16BITS=65535,r.MAX_VALUE_32BITS=-1,r.pretty=function(c){var m,d,y="";for(d=0;d<(c||"").length;d++)y+="\\x"+((m=c.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return y},r.delay=function(c,m,d){setImmediate(function(){c.apply(d||null,m||[])})},r.inherits=function(c,m){function d(){}d.prototype=m.prototype,c.prototype=new d},r.extend=function(){var c,m,d={};for(c=0;c<arguments.length;c++)for(m in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],m)&&d[m]===void 0&&(d[m]=arguments[c][m]);return d},r.prepareContent=function(c,m,d,y,_){return h.Promise.resolve(m).then(function(E){return s.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new h.Promise(function(C,M){var z=new FileReader;z.onload=function(j){C(j.target.result)},z.onerror=function(j){M(j.target.error)},z.readAsArrayBuffer(E)}):E}).then(function(E){var C=r.getTypeOf(E);return C?(C==="arraybuffer"?E=r.transformTo("uint8array",E):C==="string"&&(_?E=a.decode(E):d&&y!==!0&&(E=function(M){return w(M,s.uint8array?new Uint8Array(M.length):new Array(M.length))}(E))),E):h.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(t,n,r){var s=t("./reader/readerFor"),a=t("./utils"),l=t("./signature"),h=t("./zipEntry"),b=t("./support");function w(f){this.files=[],this.loadOptions=f}w.prototype={checkSignature:function(f){if(!this.reader.readAndCheckSignature(f)){this.reader.index-=4;var g=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(g)+", expected "+a.pretty(f)+")")}},isSignature:function(f,g){var u=this.reader.index;this.reader.setIndex(f);var k=this.reader.readString(4)===g;return this.reader.setIndex(u),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var f=this.reader.readData(this.zipCommentLength),g=b.uint8array?"uint8array":"array",u=a.transformTo(g,f);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var f,g,u,k=this.zip64EndOfCentralSize-44;0<k;)f=this.reader.readInt(2),g=this.reader.readInt(4),u=this.reader.readData(g),this.zip64ExtensibleData[f]={id:f,length:g,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var f,g;for(f=0;f<this.files.length;f++)g=this.files[f],this.reader.setIndex(g.localHeaderOffset),this.checkSignature(l.LOCAL_FILE_HEADER),g.readLocalPart(this.reader),g.handleUTF8(),g.processAttributes()},readCentralDir:function(){var f;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(l.CENTRAL_FILE_HEADER);)(f=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(f);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var f=this.reader.lastIndexOfSignature(l.CENTRAL_DIRECTORY_END);if(f<0)throw this.isSignature(0,l.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(f);var g=f;if(this.checkSignature(l.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(f=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(f),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,l.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(l.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var k=g-u;if(0<k)this.isSignature(g,l.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(f){this.reader=s(f)},load:function(f){this.prepareReader(f),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},n.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(t,n,r){var s=t("./reader/readerFor"),a=t("./utils"),l=t("./compressedObject"),h=t("./crc32"),b=t("./utf8"),w=t("./compressions"),f=t("./support");function g(u,k){this.options=u,this.loadOptions=k}g.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var k,c;if(u.skip(22),this.fileNameLength=u.readInt(2),c=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(m){for(var d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&w[d].magic===m)return w[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new l(this.compressedSize,this.uncompressedSize,this.crc32,k,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var k=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(k),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=s(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var k,c,m,d=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<d;)k=u.readInt(2),c=u.readInt(2),m=u.readData(c),this.extraFields[k]={id:k,length:c,value:m};u.setIndex(d)},handleUTF8:function(){var u=f.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var c=a.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=a.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var k=s(u.value);return k.readInt(1)!==1||h(this.fileName)!==k.readInt(4)?null:b.utf8decode(k.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var k=s(u.value);return k.readInt(1)!==1||h(this.fileComment)!==k.readInt(4)?null:b.utf8decode(k.readData(u.length-5))}return null}},n.exports=g},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(t,n,r){function s(k,c,m){this.name=k,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=c,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=t("./stream/StreamHelper"),l=t("./stream/DataWorker"),h=t("./utf8"),b=t("./compressedObject"),w=t("./stream/GenericWorker");s.prototype={internalStream:function(k){var c=null,m="string";try{if(!k)throw new Error("No output type specified.");var d=(m=k.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),c=this._decompressWorker();var y=!this._dataBinary;y&&!d&&(c=c.pipe(new h.Utf8EncodeWorker)),!y&&d&&(c=c.pipe(new h.Utf8DecodeWorker))}catch(_){(c=new w("error")).error(_)}return new a(c,m,"")},async:function(k,c){return this.internalStream(k).accumulate(c)},nodeStream:function(k,c){return this.internalStream(k||"nodebuffer").toNodejsStream(c)},_compressWorker:function(k,c){if(this._data instanceof b&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new h.Utf8EncodeWorker)),b.createWorkerFrom(m,k,c)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof w?this._data:new l(this._data)}};for(var f=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],g=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<f.length;u++)s.prototype[f[u]]=g;n.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(t,n,r){(function(s){var a,l,h=s.MutationObserver||s.WebKitMutationObserver;if(h){var b=0,w=new h(k),f=s.document.createTextNode("");w.observe(f,{characterData:!0}),a=function(){f.data=b=++b%2}}else if(s.setImmediate||s.MessageChannel===void 0)a="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var c=s.document.createElement("script");c.onreadystatechange=function(){k(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},s.document.documentElement.appendChild(c)}:function(){setTimeout(k,0)};else{var g=new s.MessageChannel;g.port1.onmessage=k,a=function(){g.port2.postMessage(0)}}var u=[];function k(){var c,m;l=!0;for(var d=u.length;d;){for(m=u,u=[],c=-1;++c<d;)m[c]();d=u.length}l=!1}n.exports=function(c){u.push(c)!==1||l||a()}}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(t,n,r){var s=t("immediate");function a(){}var l={},h=["REJECTED"],b=["FULFILLED"],w=["PENDING"];function f(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,d!==a&&c(this,d)}function g(d,y,_){this.promise=d,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof _=="function"&&(this.onRejected=_,this.callRejected=this.otherCallRejected)}function u(d,y,_){s(function(){var E;try{E=y(_)}catch(C){return l.reject(d,C)}E===d?l.reject(d,new TypeError("Cannot resolve promise with itself")):l.resolve(d,E)})}function k(d){var y=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof y=="function")return function(){y.apply(d,arguments)}}function c(d,y){var _=!1;function E(z){_||(_=!0,l.reject(d,z))}function C(z){_||(_=!0,l.resolve(d,z))}var M=m(function(){y(C,E)});M.status==="error"&&E(M.value)}function m(d,y){var _={};try{_.value=d(y),_.status="success"}catch(E){_.status="error",_.value=E}return _}(n.exports=f).prototype.finally=function(d){if(typeof d!="function")return this;var y=this.constructor;return this.then(function(_){return y.resolve(d()).then(function(){return _})},function(_){return y.resolve(d()).then(function(){throw _})})},f.prototype.catch=function(d){return this.then(null,d)},f.prototype.then=function(d,y){if(typeof d!="function"&&this.state===b||typeof y!="function"&&this.state===h)return this;var _=new this.constructor(a);return this.state!==w?u(_,this.state===b?d:y,this.outcome):this.queue.push(new g(_,d,y)),_},g.prototype.callFulfilled=function(d){l.resolve(this.promise,d)},g.prototype.otherCallFulfilled=function(d){u(this.promise,this.onFulfilled,d)},g.prototype.callRejected=function(d){l.reject(this.promise,d)},g.prototype.otherCallRejected=function(d){u(this.promise,this.onRejected,d)},l.resolve=function(d,y){var _=m(k,y);if(_.status==="error")return l.reject(d,_.value);var E=_.value;if(E)c(d,E);else{d.state=b,d.outcome=y;for(var C=-1,M=d.queue.length;++C<M;)d.queue[C].callFulfilled(y)}return d},l.reject=function(d,y){d.state=h,d.outcome=y;for(var _=-1,E=d.queue.length;++_<E;)d.queue[_].callRejected(y);return d},f.resolve=function(d){return d instanceof this?d:l.resolve(new this(a),d)},f.reject=function(d){var y=new this(a);return l.reject(y,d)},f.all=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=d.length,E=!1;if(!_)return this.resolve([]);for(var C=new Array(_),M=0,z=-1,j=new this(a);++z<_;)B(d[z],z);return j;function B(q,X){y.resolve(q).then(function(S){C[X]=S,++M!==_||E||(E=!0,l.resolve(j,C))},function(S){E||(E=!0,l.reject(j,S))})}},f.race=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var _=d.length,E=!1;if(!_)return this.resolve([]);for(var C=-1,M=new this(a);++C<_;)z=d[C],y.resolve(z).then(function(j){E||(E=!0,l.resolve(M,j))},function(j){E||(E=!0,l.reject(M,j))});var z;return M}},{immediate:36}],38:[function(t,n,r){var s={};(0,t("./lib/utils/common").assign)(s,t("./lib/deflate"),t("./lib/inflate"),t("./lib/zlib/constants")),n.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(t,n,r){var s=t("./zlib/deflate"),a=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/messages"),b=t("./zlib/zstream"),w=Object.prototype.toString,f=0,g=-1,u=0,k=8;function c(d){if(!(this instanceof c))return new c(d);this.options=a.assign({level:g,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},d||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var _=s.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(_!==f)throw new Error(h[_]);if(y.header&&s.deflateSetHeader(this.strm,y.header),y.dictionary){var E;if(E=typeof y.dictionary=="string"?l.string2buf(y.dictionary):w.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(_=s.deflateSetDictionary(this.strm,E))!==f)throw new Error(h[_]);this._dict_set=!0}}function m(d,y){var _=new c(y);if(_.push(d,!0),_.err)throw _.msg||h[_.err];return _.result}c.prototype.push=function(d,y){var _,E,C=this.strm,M=this.options.chunkSize;if(this.ended)return!1;E=y===~~y?y:y===!0?4:0,typeof d=="string"?C.input=l.string2buf(d):w.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(M),C.next_out=0,C.avail_out=M),(_=s.deflate(C,E))!==1&&_!==f)return this.onEnd(_),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(l.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&_!==1);return E===4?(_=s.deflateEnd(this.strm),this.onEnd(_),this.ended=!0,_===f):E!==2||(this.onEnd(f),!(C.avail_out=0))},c.prototype.onData=function(d){this.chunks.push(d)},c.prototype.onEnd=function(d){d===f&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},r.Deflate=c,r.deflate=m,r.deflateRaw=function(d,y){return(y=y||{}).raw=!0,m(d,y)},r.gzip=function(d,y){return(y=y||{}).gzip=!0,m(d,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(t,n,r){var s=t("./zlib/inflate"),a=t("./utils/common"),l=t("./utils/strings"),h=t("./zlib/constants"),b=t("./zlib/messages"),w=t("./zlib/zstream"),f=t("./zlib/gzheader"),g=Object.prototype.toString;function u(c){if(!(this instanceof u))return new u(c);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},c||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||c&&c.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,m.windowBits);if(d!==h.Z_OK)throw new Error(b[d]);this.header=new f,s.inflateGetHeader(this.strm,this.header)}function k(c,m){var d=new u(m);if(d.push(c,!0),d.err)throw d.msg||b[d.err];return d.result}u.prototype.push=function(c,m){var d,y,_,E,C,M,z=this.strm,j=this.options.chunkSize,B=this.options.dictionary,q=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof c=="string"?z.input=l.binstring2buf(c):g.call(c)==="[object ArrayBuffer]"?z.input=new Uint8Array(c):z.input=c,z.next_in=0,z.avail_in=z.input.length;do{if(z.avail_out===0&&(z.output=new a.Buf8(j),z.next_out=0,z.avail_out=j),(d=s.inflate(z,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&B&&(M=typeof B=="string"?l.string2buf(B):g.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=s.inflateSetDictionary(this.strm,M)),d===h.Z_BUF_ERROR&&q===!0&&(d=h.Z_OK,q=!1),d!==h.Z_STREAM_END&&d!==h.Z_OK)return this.onEnd(d),!(this.ended=!0);z.next_out&&(z.avail_out!==0&&d!==h.Z_STREAM_END&&(z.avail_in!==0||y!==h.Z_FINISH&&y!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(_=l.utf8border(z.output,z.next_out),E=z.next_out-_,C=l.buf2string(z.output,_),z.next_out=E,z.avail_out=j-E,E&&a.arraySet(z.output,z.output,_,E,0),this.onData(C)):this.onData(a.shrinkBuf(z.output,z.next_out)))),z.avail_in===0&&z.avail_out===0&&(q=!0)}while((0<z.avail_in||z.avail_out===0)&&d!==h.Z_STREAM_END);return d===h.Z_STREAM_END&&(y=h.Z_FINISH),y===h.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===h.Z_OK):y!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(z.avail_out=0))},u.prototype.onData=function(c){this.chunks.push(c)},u.prototype.onEnd=function(c){c===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},r.Inflate=u,r.inflate=k,r.inflateRaw=function(c,m){return(m=m||{}).raw=!0,k(c,m)},r.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(t,n,r){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";r.assign=function(h){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var w=b.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var f in w)w.hasOwnProperty(f)&&(h[f]=w[f])}}return h},r.shrinkBuf=function(h,b){return h.length===b?h:h.subarray?h.subarray(0,b):(h.length=b,h)};var a={arraySet:function(h,b,w,f,g){if(b.subarray&&h.subarray)h.set(b.subarray(w,w+f),g);else for(var u=0;u<f;u++)h[g+u]=b[w+u]},flattenChunks:function(h){var b,w,f,g,u,k;for(b=f=0,w=h.length;b<w;b++)f+=h[b].length;for(k=new Uint8Array(f),b=g=0,w=h.length;b<w;b++)u=h[b],k.set(u,g),g+=u.length;return k}},l={arraySet:function(h,b,w,f,g){for(var u=0;u<f;u++)h[g+u]=b[w+u]},flattenChunks:function(h){return[].concat.apply([],h)}};r.setTyped=function(h){h?(r.Buf8=Uint8Array,r.Buf16=Uint16Array,r.Buf32=Int32Array,r.assign(r,a)):(r.Buf8=Array,r.Buf16=Array,r.Buf32=Array,r.assign(r,l))},r.setTyped(s)},{}],42:[function(t,n,r){var s=t("./common"),a=!0,l=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{l=!1}for(var h=new s.Buf8(256),b=0;b<256;b++)h[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function w(f,g){if(g<65537&&(f.subarray&&l||!f.subarray&&a))return String.fromCharCode.apply(null,s.shrinkBuf(f,g));for(var u="",k=0;k<g;k++)u+=String.fromCharCode(f[k]);return u}h[254]=h[254]=1,r.string2buf=function(f){var g,u,k,c,m,d=f.length,y=0;for(c=0;c<d;c++)(64512&(u=f.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=f.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),y+=u<128?1:u<2048?2:u<65536?3:4;for(g=new s.Buf8(y),c=m=0;m<y;c++)(64512&(u=f.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=f.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),u<128?g[m++]=u:(u<2048?g[m++]=192|u>>>6:(u<65536?g[m++]=224|u>>>12:(g[m++]=240|u>>>18,g[m++]=128|u>>>12&63),g[m++]=128|u>>>6&63),g[m++]=128|63&u);return g},r.buf2binstring=function(f){return w(f,f.length)},r.binstring2buf=function(f){for(var g=new s.Buf8(f.length),u=0,k=g.length;u<k;u++)g[u]=f.charCodeAt(u);return g},r.buf2string=function(f,g){var u,k,c,m,d=g||f.length,y=new Array(2*d);for(u=k=0;u<d;)if((c=f[u++])<128)y[k++]=c;else if(4<(m=h[c]))y[k++]=65533,u+=m-1;else{for(c&=m===2?31:m===3?15:7;1<m&&u<d;)c=c<<6|63&f[u++],m--;1<m?y[k++]=65533:c<65536?y[k++]=c:(c-=65536,y[k++]=55296|c>>10&1023,y[k++]=56320|1023&c)}return w(y,k)},r.utf8border=function(f,g){var u;for((g=g||f.length)>f.length&&(g=f.length),u=g-1;0<=u&&(192&f[u])==128;)u--;return u<0||u===0?g:u+h[f[u]]>g?u:g}},{"./common":41}],43:[function(t,n,r){n.exports=function(s,a,l,h){for(var b=65535&s|0,w=s>>>16&65535|0,f=0;l!==0;){for(l-=f=2e3<l?2e3:l;w=w+(b=b+a[h++]|0)|0,--f;);b%=65521,w%=65521}return b|w<<16|0}},{}],44:[function(t,n,r){n.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(t,n,r){var s=function(){for(var a,l=[],h=0;h<256;h++){a=h;for(var b=0;b<8;b++)a=1&a?3988292384^a>>>1:a>>>1;l[h]=a}return l}();n.exports=function(a,l,h,b){var w=s,f=b+h;a^=-1;for(var g=b;g<f;g++)a=a>>>8^w[255&(a^l[g])];return-1^a}},{}],46:[function(t,n,r){var s,a=t("../utils/common"),l=t("./trees"),h=t("./adler32"),b=t("./crc32"),w=t("./messages"),f=0,g=4,u=0,k=-2,c=-1,m=4,d=2,y=8,_=9,E=286,C=30,M=19,z=2*E+1,j=15,B=3,q=258,X=q+B+1,S=42,O=113,o=1,$=2,tt=3,H=4;function et(i,P){return i.msg=w[P],P}function N(i){return(i<<1)-(4<i?9:0)}function Q(i){for(var P=i.length;0<=--P;)i[P]=0}function I(i){var P=i.state,D=P.pending;D>i.avail_out&&(D=i.avail_out),D!==0&&(a.arraySet(i.output,P.pending_buf,P.pending_out,D,i.next_out),i.next_out+=D,P.pending_out+=D,i.total_out+=D,i.avail_out-=D,P.pending-=D,P.pending===0&&(P.pending_out=0))}function L(i,P){l._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,P),i.block_start=i.strstart,I(i.strm)}function Y(i,P){i.pending_buf[i.pending++]=P}function Z(i,P){i.pending_buf[i.pending++]=P>>>8&255,i.pending_buf[i.pending++]=255&P}function K(i,P){var D,v,p=i.max_chain_length,x=i.strstart,U=i.prev_length,F=i.nice_match,A=i.strstart>i.w_size-X?i.strstart-(i.w_size-X):0,G=i.window,W=i.w_mask,V=i.prev,J=i.strstart+q,nt=G[x+U-1],rt=G[x+U];i.prev_length>=i.good_match&&(p>>=2),F>i.lookahead&&(F=i.lookahead);do if(G[(D=P)+U]===rt&&G[D+U-1]===nt&&G[D]===G[x]&&G[++D]===G[x+1]){x+=2,D++;do;while(G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&G[++x]===G[++D]&&x<J);if(v=q-(J-x),x=J-q,U<v){if(i.match_start=P,F<=(U=v))break;nt=G[x+U-1],rt=G[x+U]}}while((P=V[P&W])>A&&--p!=0);return U<=i.lookahead?U:i.lookahead}function ot(i){var P,D,v,p,x,U,F,A,G,W,V=i.w_size;do{if(p=i.window_size-i.lookahead-i.strstart,i.strstart>=V+(V-X)){for(a.arraySet(i.window,i.window,V,V,0),i.match_start-=V,i.strstart-=V,i.block_start-=V,P=D=i.hash_size;v=i.head[--P],i.head[P]=V<=v?v-V:0,--D;);for(P=D=V;v=i.prev[--P],i.prev[P]=V<=v?v-V:0,--D;);p+=V}if(i.strm.avail_in===0)break;if(U=i.strm,F=i.window,A=i.strstart+i.lookahead,G=p,W=void 0,W=U.avail_in,G<W&&(W=G),D=W===0?0:(U.avail_in-=W,a.arraySet(F,U.input,U.next_in,W,A),U.state.wrap===1?U.adler=h(U.adler,F,W,A):U.state.wrap===2&&(U.adler=b(U.adler,F,W,A)),U.next_in+=W,U.total_in+=W,W),i.lookahead+=D,i.lookahead+i.insert>=B)for(x=i.strstart-i.insert,i.ins_h=i.window[x],i.ins_h=(i.ins_h<<i.hash_shift^i.window[x+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[x+B-1])&i.hash_mask,i.prev[x&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=x,x++,i.insert--,!(i.lookahead+i.insert<B)););}while(i.lookahead<X&&i.strm.avail_in!==0)}function ct(i,P){for(var D,v;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&P===f)return o;if(i.lookahead===0)break}if(D=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,D=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),D!==0&&i.strstart-D<=i.w_size-X&&(i.match_length=K(i,D)),i.match_length>=B)if(v=l._tr_tally(i,i.strstart-i.match_start,i.match_length-B),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=B){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,D=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=l._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(L(i,!1),i.strm.avail_out===0))return o}return i.insert=i.strstart<B-1?i.strstart:B-1,P===g?(L(i,!0),i.strm.avail_out===0?tt:H):i.last_lit&&(L(i,!1),i.strm.avail_out===0)?o:$}function it(i,P){for(var D,v,p;;){if(i.lookahead<X){if(ot(i),i.lookahead<X&&P===f)return o;if(i.lookahead===0)break}if(D=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,D=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=B-1,D!==0&&i.prev_length<i.max_lazy_match&&i.strstart-D<=i.w_size-X&&(i.match_length=K(i,D),i.match_length<=5&&(i.strategy===1||i.match_length===B&&4096<i.strstart-i.match_start)&&(i.match_length=B-1)),i.prev_length>=B&&i.match_length<=i.prev_length){for(p=i.strstart+i.lookahead-B,v=l._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-B),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=p&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,D=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=B-1,i.strstart++,v&&(L(i,!1),i.strm.avail_out===0))return o}else if(i.match_available){if((v=l._tr_tally(i,0,i.window[i.strstart-1]))&&L(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return o}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=l._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<B-1?i.strstart:B-1,P===g?(L(i,!0),i.strm.avail_out===0?tt:H):i.last_lit&&(L(i,!1),i.strm.avail_out===0)?o:$}function st(i,P,D,v,p){this.good_length=i,this.max_lazy=P,this.nice_length=D,this.max_chain=v,this.func=p}function ut(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*z),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*M+1)),Q(this.dyn_ltree),Q(this.dyn_dtree),Q(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(j+1),this.heap=new a.Buf16(2*E+1),Q(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*E+1),Q(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function at(i){var P;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(P=i.state).pending=0,P.pending_out=0,P.wrap<0&&(P.wrap=-P.wrap),P.status=P.wrap?S:O,i.adler=P.wrap===2?0:1,P.last_flush=f,l._tr_init(P),u):et(i,k)}function ft(i){var P=at(i);return P===u&&function(D){D.window_size=2*D.w_size,Q(D.head),D.max_lazy_match=s[D.level].max_lazy,D.good_match=s[D.level].good_length,D.nice_match=s[D.level].nice_length,D.max_chain_length=s[D.level].max_chain,D.strstart=0,D.block_start=0,D.lookahead=0,D.insert=0,D.match_length=D.prev_length=B-1,D.match_available=0,D.ins_h=0}(i.state),P}function dt(i,P,D,v,p,x){if(!i)return k;var U=1;if(P===c&&(P=6),v<0?(U=0,v=-v):15<v&&(U=2,v-=16),p<1||_<p||D!==y||v<8||15<v||P<0||9<P||x<0||m<x)return et(i,k);v===8&&(v=9);var F=new ut;return(i.state=F).strm=i,F.wrap=U,F.gzhead=null,F.w_bits=v,F.w_size=1<<F.w_bits,F.w_mask=F.w_size-1,F.hash_bits=p+7,F.hash_size=1<<F.hash_bits,F.hash_mask=F.hash_size-1,F.hash_shift=~~((F.hash_bits+B-1)/B),F.window=new a.Buf8(2*F.w_size),F.head=new a.Buf16(F.hash_size),F.prev=new a.Buf16(F.w_size),F.lit_bufsize=1<<p+6,F.pending_buf_size=4*F.lit_bufsize,F.pending_buf=new a.Buf8(F.pending_buf_size),F.d_buf=1*F.lit_bufsize,F.l_buf=3*F.lit_bufsize,F.level=P,F.strategy=x,F.method=D,ft(i)}s=[new st(0,0,0,0,function(i,P){var D=65535;for(D>i.pending_buf_size-5&&(D=i.pending_buf_size-5);;){if(i.lookahead<=1){if(ot(i),i.lookahead===0&&P===f)return o;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+D;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,L(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-X&&(L(i,!1),i.strm.avail_out===0))return o}return i.insert=0,P===g?(L(i,!0),i.strm.avail_out===0?tt:H):(i.strstart>i.block_start&&(L(i,!1),i.strm.avail_out),o)}),new st(4,4,8,4,ct),new st(4,5,16,8,ct),new st(4,6,32,32,ct),new st(4,4,16,16,it),new st(8,16,32,32,it),new st(8,16,128,128,it),new st(8,32,128,256,it),new st(32,128,258,1024,it),new st(32,258,258,4096,it)],r.deflateInit=function(i,P){return dt(i,P,y,15,8,0)},r.deflateInit2=dt,r.deflateReset=ft,r.deflateResetKeep=at,r.deflateSetHeader=function(i,P){return i&&i.state?i.state.wrap!==2?k:(i.state.gzhead=P,u):k},r.deflate=function(i,P){var D,v,p,x;if(!i||!i.state||5<P||P<0)return i?et(i,k):k;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&P!==g)return et(i,i.avail_out===0?-5:k);if(v.strm=i,D=v.last_flush,v.last_flush=P,v.status===S)if(v.wrap===2)i.adler=0,Y(v,31),Y(v,139),Y(v,8),v.gzhead?(Y(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),Y(v,255&v.gzhead.time),Y(v,v.gzhead.time>>8&255),Y(v,v.gzhead.time>>16&255),Y(v,v.gzhead.time>>24&255),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(Y(v,255&v.gzhead.extra.length),Y(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=b(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,0),Y(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),Y(v,3),v.status=O);else{var U=y+(v.w_bits-8<<4)<<8;U|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(U|=32),U+=31-U%31,v.status=O,Z(v,U),v.strstart!==0&&(Z(v,i.adler>>>16),Z(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(p=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending!==v.pending_buf_size));)Y(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){p=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending===v.pending_buf_size)){x=1;break}x=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,Y(v,x)}while(x!==0);v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),x===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){p=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),I(i),p=v.pending,v.pending===v.pending_buf_size)){x=1;break}x=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,Y(v,x)}while(x!==0);v.gzhead.hcrc&&v.pending>p&&(i.adler=b(i.adler,v.pending_buf,v.pending-p,p)),x===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&I(i),v.pending+2<=v.pending_buf_size&&(Y(v,255&i.adler),Y(v,i.adler>>8&255),i.adler=0,v.status=O)):v.status=O),v.pending!==0){if(I(i),i.avail_out===0)return v.last_flush=-1,u}else if(i.avail_in===0&&N(P)<=N(D)&&P!==g)return et(i,-5);if(v.status===666&&i.avail_in!==0)return et(i,-5);if(i.avail_in!==0||v.lookahead!==0||P!==f&&v.status!==666){var F=v.strategy===2?function(A,G){for(var W;;){if(A.lookahead===0&&(ot(A),A.lookahead===0)){if(G===f)return o;break}if(A.match_length=0,W=l._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++,W&&(L(A,!1),A.strm.avail_out===0))return o}return A.insert=0,G===g?(L(A,!0),A.strm.avail_out===0?tt:H):A.last_lit&&(L(A,!1),A.strm.avail_out===0)?o:$}(v,P):v.strategy===3?function(A,G){for(var W,V,J,nt,rt=A.window;;){if(A.lookahead<=q){if(ot(A),A.lookahead<=q&&G===f)return o;if(A.lookahead===0)break}if(A.match_length=0,A.lookahead>=B&&0<A.strstart&&(V=rt[J=A.strstart-1])===rt[++J]&&V===rt[++J]&&V===rt[++J]){nt=A.strstart+q;do;while(V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&V===rt[++J]&&J<nt);A.match_length=q-(nt-J),A.match_length>A.lookahead&&(A.match_length=A.lookahead)}if(A.match_length>=B?(W=l._tr_tally(A,1,A.match_length-B),A.lookahead-=A.match_length,A.strstart+=A.match_length,A.match_length=0):(W=l._tr_tally(A,0,A.window[A.strstart]),A.lookahead--,A.strstart++),W&&(L(A,!1),A.strm.avail_out===0))return o}return A.insert=0,G===g?(L(A,!0),A.strm.avail_out===0?tt:H):A.last_lit&&(L(A,!1),A.strm.avail_out===0)?o:$}(v,P):s[v.level].func(v,P);if(F!==tt&&F!==H||(v.status=666),F===o||F===tt)return i.avail_out===0&&(v.last_flush=-1),u;if(F===$&&(P===1?l._tr_align(v):P!==5&&(l._tr_stored_block(v,0,0,!1),P===3&&(Q(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),I(i),i.avail_out===0))return v.last_flush=-1,u}return P!==g?u:v.wrap<=0?1:(v.wrap===2?(Y(v,255&i.adler),Y(v,i.adler>>8&255),Y(v,i.adler>>16&255),Y(v,i.adler>>24&255),Y(v,255&i.total_in),Y(v,i.total_in>>8&255),Y(v,i.total_in>>16&255),Y(v,i.total_in>>24&255)):(Z(v,i.adler>>>16),Z(v,65535&i.adler)),I(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?u:1)},r.deflateEnd=function(i){var P;return i&&i.state?(P=i.state.status)!==S&&P!==69&&P!==73&&P!==91&&P!==103&&P!==O&&P!==666?et(i,k):(i.state=null,P===O?et(i,-3):u):k},r.deflateSetDictionary=function(i,P){var D,v,p,x,U,F,A,G,W=P.length;if(!i||!i.state||(x=(D=i.state).wrap)===2||x===1&&D.status!==S||D.lookahead)return k;for(x===1&&(i.adler=h(i.adler,P,W,0)),D.wrap=0,W>=D.w_size&&(x===0&&(Q(D.head),D.strstart=0,D.block_start=0,D.insert=0),G=new a.Buf8(D.w_size),a.arraySet(G,P,W-D.w_size,D.w_size,0),P=G,W=D.w_size),U=i.avail_in,F=i.next_in,A=i.input,i.avail_in=W,i.next_in=0,i.input=P,ot(D);D.lookahead>=B;){for(v=D.strstart,p=D.lookahead-(B-1);D.ins_h=(D.ins_h<<D.hash_shift^D.window[v+B-1])&D.hash_mask,D.prev[v&D.w_mask]=D.head[D.ins_h],D.head[D.ins_h]=v,v++,--p;);D.strstart=v,D.lookahead=B-1,ot(D)}return D.strstart+=D.lookahead,D.block_start=D.strstart,D.insert=D.lookahead,D.lookahead=0,D.match_length=D.prev_length=B-1,D.match_available=0,i.next_in=F,i.input=A,i.avail_in=U,D.wrap=x,u},r.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(t,n,r){n.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(t,n,r){n.exports=function(s,a){var l,h,b,w,f,g,u,k,c,m,d,y,_,E,C,M,z,j,B,q,X,S,O,o,$;l=s.state,h=s.next_in,o=s.input,b=h+(s.avail_in-5),w=s.next_out,$=s.output,f=w-(a-s.avail_out),g=w+(s.avail_out-257),u=l.dmax,k=l.wsize,c=l.whave,m=l.wnext,d=l.window,y=l.hold,_=l.bits,E=l.lencode,C=l.distcode,M=(1<<l.lenbits)-1,z=(1<<l.distbits)-1;t:do{_<15&&(y+=o[h++]<<_,_+=8,y+=o[h++]<<_,_+=8),j=E[y&M];e:for(;;){if(y>>>=B=j>>>24,_-=B,(B=j>>>16&255)===0)$[w++]=65535&j;else{if(!(16&B)){if(!(64&B)){j=E[(65535&j)+(y&(1<<B)-1)];continue e}if(32&B){l.mode=12;break t}s.msg="invalid literal/length code",l.mode=30;break t}q=65535&j,(B&=15)&&(_<B&&(y+=o[h++]<<_,_+=8),q+=y&(1<<B)-1,y>>>=B,_-=B),_<15&&(y+=o[h++]<<_,_+=8,y+=o[h++]<<_,_+=8),j=C[y&z];i:for(;;){if(y>>>=B=j>>>24,_-=B,!(16&(B=j>>>16&255))){if(!(64&B)){j=C[(65535&j)+(y&(1<<B)-1)];continue i}s.msg="invalid distance code",l.mode=30;break t}if(X=65535&j,_<(B&=15)&&(y+=o[h++]<<_,(_+=8)<B&&(y+=o[h++]<<_,_+=8)),u<(X+=y&(1<<B)-1)){s.msg="invalid distance too far back",l.mode=30;break t}if(y>>>=B,_-=B,(B=w-f)<X){if(c<(B=X-B)&&l.sane){s.msg="invalid distance too far back",l.mode=30;break t}if(O=d,(S=0)===m){if(S+=k-B,B<q){for(q-=B;$[w++]=d[S++],--B;);S=w-X,O=$}}else if(m<B){if(S+=k+m-B,(B-=m)<q){for(q-=B;$[w++]=d[S++],--B;);if(S=0,m<q){for(q-=B=m;$[w++]=d[S++],--B;);S=w-X,O=$}}}else if(S+=m-B,B<q){for(q-=B;$[w++]=d[S++],--B;);S=w-X,O=$}for(;2<q;)$[w++]=O[S++],$[w++]=O[S++],$[w++]=O[S++],q-=3;q&&($[w++]=O[S++],1<q&&($[w++]=O[S++]))}else{for(S=w-X;$[w++]=$[S++],$[w++]=$[S++],$[w++]=$[S++],2<(q-=3););q&&($[w++]=$[S++],1<q&&($[w++]=$[S++]))}break}}break}}while(h<b&&w<g);h-=q=_>>3,y&=(1<<(_-=q<<3))-1,s.next_in=h,s.next_out=w,s.avail_in=h<b?b-h+5:5-(h-b),s.avail_out=w<g?g-w+257:257-(w-g),l.hold=y,l.bits=_}},{}],49:[function(t,n,r){var s=t("../utils/common"),a=t("./adler32"),l=t("./crc32"),h=t("./inffast"),b=t("./inftrees"),w=1,f=2,g=0,u=-2,k=1,c=852,m=592;function d(S){return(S>>>24&255)+(S>>>8&65280)+((65280&S)<<8)+((255&S)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function _(S){var O;return S&&S.state?(O=S.state,S.total_in=S.total_out=O.total=0,S.msg="",O.wrap&&(S.adler=1&O.wrap),O.mode=k,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(c),O.distcode=O.distdyn=new s.Buf32(m),O.sane=1,O.back=-1,g):u}function E(S){var O;return S&&S.state?((O=S.state).wsize=0,O.whave=0,O.wnext=0,_(S)):u}function C(S,O){var o,$;return S&&S.state?($=S.state,O<0?(o=0,O=-O):(o=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?u:($.window!==null&&$.wbits!==O&&($.window=null),$.wrap=o,$.wbits=O,E(S))):u}function M(S,O){var o,$;return S?($=new y,(S.state=$).window=null,(o=C(S,O))!==g&&(S.state=null),o):u}var z,j,B=!0;function q(S){if(B){var O;for(z=new s.Buf32(512),j=new s.Buf32(32),O=0;O<144;)S.lens[O++]=8;for(;O<256;)S.lens[O++]=9;for(;O<280;)S.lens[O++]=7;for(;O<288;)S.lens[O++]=8;for(b(w,S.lens,0,288,z,0,S.work,{bits:9}),O=0;O<32;)S.lens[O++]=5;b(f,S.lens,0,32,j,0,S.work,{bits:5}),B=!1}S.lencode=z,S.lenbits=9,S.distcode=j,S.distbits=5}function X(S,O,o,$){var tt,H=S.state;return H.window===null&&(H.wsize=1<<H.wbits,H.wnext=0,H.whave=0,H.window=new s.Buf8(H.wsize)),$>=H.wsize?(s.arraySet(H.window,O,o-H.wsize,H.wsize,0),H.wnext=0,H.whave=H.wsize):($<(tt=H.wsize-H.wnext)&&(tt=$),s.arraySet(H.window,O,o-$,tt,H.wnext),($-=tt)?(s.arraySet(H.window,O,o-$,$,0),H.wnext=$,H.whave=H.wsize):(H.wnext+=tt,H.wnext===H.wsize&&(H.wnext=0),H.whave<H.wsize&&(H.whave+=tt))),0}r.inflateReset=E,r.inflateReset2=C,r.inflateResetKeep=_,r.inflateInit=function(S){return M(S,15)},r.inflateInit2=M,r.inflate=function(S,O){var o,$,tt,H,et,N,Q,I,L,Y,Z,K,ot,ct,it,st,ut,at,ft,dt,i,P,D,v,p=0,x=new s.Buf8(4),U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!S||!S.state||!S.output||!S.input&&S.avail_in!==0)return u;(o=S.state).mode===12&&(o.mode=13),et=S.next_out,tt=S.output,Q=S.avail_out,H=S.next_in,$=S.input,N=S.avail_in,I=o.hold,L=o.bits,Y=N,Z=Q,P=g;t:for(;;)switch(o.mode){case k:if(o.wrap===0){o.mode=13;break}for(;L<16;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(2&o.wrap&&I===35615){x[o.check=0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0),L=I=0,o.mode=2;break}if(o.flags=0,o.head&&(o.head.done=!1),!(1&o.wrap)||(((255&I)<<8)+(I>>8))%31){S.msg="incorrect header check",o.mode=30;break}if((15&I)!=8){S.msg="unknown compression method",o.mode=30;break}if(L-=4,i=8+(15&(I>>>=4)),o.wbits===0)o.wbits=i;else if(i>o.wbits){S.msg="invalid window size",o.mode=30;break}o.dmax=1<<i,S.adler=o.check=1,o.mode=512&I?10:12,L=I=0;break;case 2:for(;L<16;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(o.flags=I,(255&o.flags)!=8){S.msg="unknown compression method",o.mode=30;break}if(57344&o.flags){S.msg="unknown header flags set",o.mode=30;break}o.head&&(o.head.text=I>>8&1),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),L=I=0,o.mode=3;case 3:for(;L<32;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.head&&(o.head.time=I),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,x[2]=I>>>16&255,x[3]=I>>>24&255,o.check=l(o.check,x,4,0)),L=I=0,o.mode=4;case 4:for(;L<16;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.head&&(o.head.xflags=255&I,o.head.os=I>>8),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),L=I=0,o.mode=5;case 5:if(1024&o.flags){for(;L<16;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.length=I,o.head&&(o.head.extra_len=I),512&o.flags&&(x[0]=255&I,x[1]=I>>>8&255,o.check=l(o.check,x,2,0)),L=I=0}else o.head&&(o.head.extra=null);o.mode=6;case 6:if(1024&o.flags&&(N<(K=o.length)&&(K=N),K&&(o.head&&(i=o.head.extra_len-o.length,o.head.extra||(o.head.extra=new Array(o.head.extra_len)),s.arraySet(o.head.extra,$,H,K,i)),512&o.flags&&(o.check=l(o.check,$,K,H)),N-=K,H+=K,o.length-=K),o.length))break t;o.length=0,o.mode=7;case 7:if(2048&o.flags){if(N===0)break t;for(K=0;i=$[H+K++],o.head&&i&&o.length<65536&&(o.head.name+=String.fromCharCode(i)),i&&K<N;);if(512&o.flags&&(o.check=l(o.check,$,K,H)),N-=K,H+=K,i)break t}else o.head&&(o.head.name=null);o.length=0,o.mode=8;case 8:if(4096&o.flags){if(N===0)break t;for(K=0;i=$[H+K++],o.head&&i&&o.length<65536&&(o.head.comment+=String.fromCharCode(i)),i&&K<N;);if(512&o.flags&&(o.check=l(o.check,$,K,H)),N-=K,H+=K,i)break t}else o.head&&(o.head.comment=null);o.mode=9;case 9:if(512&o.flags){for(;L<16;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(I!==(65535&o.check)){S.msg="header crc mismatch",o.mode=30;break}L=I=0}o.head&&(o.head.hcrc=o.flags>>9&1,o.head.done=!0),S.adler=o.check=0,o.mode=12;break;case 10:for(;L<32;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}S.adler=o.check=d(I),L=I=0,o.mode=11;case 11:if(o.havedict===0)return S.next_out=et,S.avail_out=Q,S.next_in=H,S.avail_in=N,o.hold=I,o.bits=L,2;S.adler=o.check=1,o.mode=12;case 12:if(O===5||O===6)break t;case 13:if(o.last){I>>>=7&L,L-=7&L,o.mode=27;break}for(;L<3;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}switch(o.last=1&I,L-=1,3&(I>>>=1)){case 0:o.mode=14;break;case 1:if(q(o),o.mode=20,O!==6)break;I>>>=2,L-=2;break t;case 2:o.mode=17;break;case 3:S.msg="invalid block type",o.mode=30}I>>>=2,L-=2;break;case 14:for(I>>>=7&L,L-=7&L;L<32;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if((65535&I)!=(I>>>16^65535)){S.msg="invalid stored block lengths",o.mode=30;break}if(o.length=65535&I,L=I=0,o.mode=15,O===6)break t;case 15:o.mode=16;case 16:if(K=o.length){if(N<K&&(K=N),Q<K&&(K=Q),K===0)break t;s.arraySet(tt,$,H,K,et),N-=K,H+=K,Q-=K,et+=K,o.length-=K;break}o.mode=12;break;case 17:for(;L<14;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(o.nlen=257+(31&I),I>>>=5,L-=5,o.ndist=1+(31&I),I>>>=5,L-=5,o.ncode=4+(15&I),I>>>=4,L-=4,286<o.nlen||30<o.ndist){S.msg="too many length or distance symbols",o.mode=30;break}o.have=0,o.mode=18;case 18:for(;o.have<o.ncode;){for(;L<3;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.lens[U[o.have++]]=7&I,I>>>=3,L-=3}for(;o.have<19;)o.lens[U[o.have++]]=0;if(o.lencode=o.lendyn,o.lenbits=7,D={bits:o.lenbits},P=b(0,o.lens,0,19,o.lencode,0,o.work,D),o.lenbits=D.bits,P){S.msg="invalid code lengths set",o.mode=30;break}o.have=0,o.mode=19;case 19:for(;o.have<o.nlen+o.ndist;){for(;st=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=L);){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(ut<16)I>>>=it,L-=it,o.lens[o.have++]=ut;else{if(ut===16){for(v=it+2;L<v;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(I>>>=it,L-=it,o.have===0){S.msg="invalid bit length repeat",o.mode=30;break}i=o.lens[o.have-1],K=3+(3&I),I>>>=2,L-=2}else if(ut===17){for(v=it+3;L<v;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}L-=it,i=0,K=3+(7&(I>>>=it)),I>>>=3,L-=3}else{for(v=it+7;L<v;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}L-=it,i=0,K=11+(127&(I>>>=it)),I>>>=7,L-=7}if(o.have+K>o.nlen+o.ndist){S.msg="invalid bit length repeat",o.mode=30;break}for(;K--;)o.lens[o.have++]=i}}if(o.mode===30)break;if(o.lens[256]===0){S.msg="invalid code -- missing end-of-block",o.mode=30;break}if(o.lenbits=9,D={bits:o.lenbits},P=b(w,o.lens,0,o.nlen,o.lencode,0,o.work,D),o.lenbits=D.bits,P){S.msg="invalid literal/lengths set",o.mode=30;break}if(o.distbits=6,o.distcode=o.distdyn,D={bits:o.distbits},P=b(f,o.lens,o.nlen,o.ndist,o.distcode,0,o.work,D),o.distbits=D.bits,P){S.msg="invalid distances set",o.mode=30;break}if(o.mode=20,O===6)break t;case 20:o.mode=21;case 21:if(6<=N&&258<=Q){S.next_out=et,S.avail_out=Q,S.next_in=H,S.avail_in=N,o.hold=I,o.bits=L,h(S,Z),et=S.next_out,tt=S.output,Q=S.avail_out,H=S.next_in,$=S.input,N=S.avail_in,I=o.hold,L=o.bits,o.mode===12&&(o.back=-1);break}for(o.back=0;st=(p=o.lencode[I&(1<<o.lenbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=L);){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(st&&!(240&st)){for(at=it,ft=st,dt=ut;st=(p=o.lencode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=L);){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}I>>>=at,L-=at,o.back+=at}if(I>>>=it,L-=it,o.back+=it,o.length=ut,st===0){o.mode=26;break}if(32&st){o.back=-1,o.mode=12;break}if(64&st){S.msg="invalid literal/length code",o.mode=30;break}o.extra=15&st,o.mode=22;case 22:if(o.extra){for(v=o.extra;L<v;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.length+=I&(1<<o.extra)-1,I>>>=o.extra,L-=o.extra,o.back+=o.extra}o.was=o.length,o.mode=23;case 23:for(;st=(p=o.distcode[I&(1<<o.distbits)-1])>>>16&255,ut=65535&p,!((it=p>>>24)<=L);){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(!(240&st)){for(at=it,ft=st,dt=ut;st=(p=o.distcode[dt+((I&(1<<at+ft)-1)>>at)])>>>16&255,ut=65535&p,!(at+(it=p>>>24)<=L);){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}I>>>=at,L-=at,o.back+=at}if(I>>>=it,L-=it,o.back+=it,64&st){S.msg="invalid distance code",o.mode=30;break}o.offset=ut,o.extra=15&st,o.mode=24;case 24:if(o.extra){for(v=o.extra;L<v;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}o.offset+=I&(1<<o.extra)-1,I>>>=o.extra,L-=o.extra,o.back+=o.extra}if(o.offset>o.dmax){S.msg="invalid distance too far back",o.mode=30;break}o.mode=25;case 25:if(Q===0)break t;if(K=Z-Q,o.offset>K){if((K=o.offset-K)>o.whave&&o.sane){S.msg="invalid distance too far back",o.mode=30;break}ot=K>o.wnext?(K-=o.wnext,o.wsize-K):o.wnext-K,K>o.length&&(K=o.length),ct=o.window}else ct=tt,ot=et-o.offset,K=o.length;for(Q<K&&(K=Q),Q-=K,o.length-=K;tt[et++]=ct[ot++],--K;);o.length===0&&(o.mode=21);break;case 26:if(Q===0)break t;tt[et++]=o.length,Q--,o.mode=21;break;case 27:if(o.wrap){for(;L<32;){if(N===0)break t;N--,I|=$[H++]<<L,L+=8}if(Z-=Q,S.total_out+=Z,o.total+=Z,Z&&(S.adler=o.check=o.flags?l(o.check,tt,Z,et-Z):a(o.check,tt,Z,et-Z)),Z=Q,(o.flags?I:d(I))!==o.check){S.msg="incorrect data check",o.mode=30;break}L=I=0}o.mode=28;case 28:if(o.wrap&&o.flags){for(;L<32;){if(N===0)break t;N--,I+=$[H++]<<L,L+=8}if(I!==(4294967295&o.total)){S.msg="incorrect length check",o.mode=30;break}L=I=0}o.mode=29;case 29:P=1;break t;case 30:P=-3;break t;case 31:return-4;case 32:default:return u}return S.next_out=et,S.avail_out=Q,S.next_in=H,S.avail_in=N,o.hold=I,o.bits=L,(o.wsize||Z!==S.avail_out&&o.mode<30&&(o.mode<27||O!==4))&&X(S,S.output,S.next_out,Z-S.avail_out)?(o.mode=31,-4):(Y-=S.avail_in,Z-=S.avail_out,S.total_in+=Y,S.total_out+=Z,o.total+=Z,o.wrap&&Z&&(S.adler=o.check=o.flags?l(o.check,tt,Z,S.next_out-Z):a(o.check,tt,Z,S.next_out-Z)),S.data_type=o.bits+(o.last?64:0)+(o.mode===12?128:0)+(o.mode===20||o.mode===15?256:0),(Y==0&&Z===0||O===4)&&P===g&&(P=-5),P)},r.inflateEnd=function(S){if(!S||!S.state)return u;var O=S.state;return O.window&&(O.window=null),S.state=null,g},r.inflateGetHeader=function(S,O){var o;return S&&S.state&&2&(o=S.state).wrap?((o.head=O).done=!1,g):u},r.inflateSetDictionary=function(S,O){var o,$=O.length;return S&&S.state?(o=S.state).wrap!==0&&o.mode!==11?u:o.mode===11&&a(1,O,$,0)!==o.check?-3:X(S,O,$,$)?(o.mode=31,-4):(o.havedict=1,g):u},r.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(t,n,r){var s=t("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],l=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];n.exports=function(w,f,g,u,k,c,m,d){var y,_,E,C,M,z,j,B,q,X=d.bits,S=0,O=0,o=0,$=0,tt=0,H=0,et=0,N=0,Q=0,I=0,L=null,Y=0,Z=new s.Buf16(16),K=new s.Buf16(16),ot=null,ct=0;for(S=0;S<=15;S++)Z[S]=0;for(O=0;O<u;O++)Z[f[g+O]]++;for(tt=X,$=15;1<=$&&Z[$]===0;$--);if($<tt&&(tt=$),$===0)return k[c++]=20971520,k[c++]=20971520,d.bits=1,0;for(o=1;o<$&&Z[o]===0;o++);for(tt<o&&(tt=o),S=N=1;S<=15;S++)if(N<<=1,(N-=Z[S])<0)return-1;if(0<N&&(w===0||$!==1))return-1;for(K[1]=0,S=1;S<15;S++)K[S+1]=K[S]+Z[S];for(O=0;O<u;O++)f[g+O]!==0&&(m[K[f[g+O]]++]=O);if(z=w===0?(L=ot=m,19):w===1?(L=a,Y-=257,ot=l,ct-=257,256):(L=h,ot=b,-1),S=o,M=c,et=O=I=0,E=-1,C=(Q=1<<(H=tt))-1,w===1&&852<Q||w===2&&592<Q)return 1;for(;;){for(j=S-et,q=m[O]<z?(B=0,m[O]):m[O]>z?(B=ot[ct+m[O]],L[Y+m[O]]):(B=96,0),y=1<<S-et,o=_=1<<H;k[M+(I>>et)+(_-=y)]=j<<24|B<<16|q|0,_!==0;);for(y=1<<S-1;I&y;)y>>=1;if(y!==0?(I&=y-1,I+=y):I=0,O++,--Z[S]==0){if(S===$)break;S=f[g+m[O]]}if(tt<S&&(I&C)!==E){for(et===0&&(et=tt),M+=o,N=1<<(H=S-et);H+et<$&&!((N-=Z[H+et])<=0);)H++,N<<=1;if(Q+=1<<H,w===1&&852<Q||w===2&&592<Q)return 1;k[E=I&C]=tt<<24|H<<16|M-c|0}}return I!==0&&(k[M+I]=S-et<<24|64<<16|0),d.bits=tt,0}},{"../utils/common":41}],51:[function(t,n,r){n.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(t,n,r){var s=t("../utils/common"),a=0,l=1;function h(p){for(var x=p.length;0<=--x;)p[x]=0}var b=0,w=29,f=256,g=f+1+w,u=30,k=19,c=2*g+1,m=15,d=16,y=7,_=256,E=16,C=17,M=18,z=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],j=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],X=new Array(2*(g+2));h(X);var S=new Array(2*u);h(S);var O=new Array(512);h(O);var o=new Array(256);h(o);var $=new Array(w);h($);var tt,H,et,N=new Array(u);function Q(p,x,U,F,A){this.static_tree=p,this.extra_bits=x,this.extra_base=U,this.elems=F,this.max_length=A,this.has_stree=p&&p.length}function I(p,x){this.dyn_tree=p,this.max_code=0,this.stat_desc=x}function L(p){return p<256?O[p]:O[256+(p>>>7)]}function Y(p,x){p.pending_buf[p.pending++]=255&x,p.pending_buf[p.pending++]=x>>>8&255}function Z(p,x,U){p.bi_valid>d-U?(p.bi_buf|=x<<p.bi_valid&65535,Y(p,p.bi_buf),p.bi_buf=x>>d-p.bi_valid,p.bi_valid+=U-d):(p.bi_buf|=x<<p.bi_valid&65535,p.bi_valid+=U)}function K(p,x,U){Z(p,U[2*x],U[2*x+1])}function ot(p,x){for(var U=0;U|=1&p,p>>>=1,U<<=1,0<--x;);return U>>>1}function ct(p,x,U){var F,A,G=new Array(m+1),W=0;for(F=1;F<=m;F++)G[F]=W=W+U[F-1]<<1;for(A=0;A<=x;A++){var V=p[2*A+1];V!==0&&(p[2*A]=ot(G[V]++,V))}}function it(p){var x;for(x=0;x<g;x++)p.dyn_ltree[2*x]=0;for(x=0;x<u;x++)p.dyn_dtree[2*x]=0;for(x=0;x<k;x++)p.bl_tree[2*x]=0;p.dyn_ltree[2*_]=1,p.opt_len=p.static_len=0,p.last_lit=p.matches=0}function st(p){8<p.bi_valid?Y(p,p.bi_buf):0<p.bi_valid&&(p.pending_buf[p.pending++]=p.bi_buf),p.bi_buf=0,p.bi_valid=0}function ut(p,x,U,F){var A=2*x,G=2*U;return p[A]<p[G]||p[A]===p[G]&&F[x]<=F[U]}function at(p,x,U){for(var F=p.heap[U],A=U<<1;A<=p.heap_len&&(A<p.heap_len&&ut(x,p.heap[A+1],p.heap[A],p.depth)&&A++,!ut(x,F,p.heap[A],p.depth));)p.heap[U]=p.heap[A],U=A,A<<=1;p.heap[U]=F}function ft(p,x,U){var F,A,G,W,V=0;if(p.last_lit!==0)for(;F=p.pending_buf[p.d_buf+2*V]<<8|p.pending_buf[p.d_buf+2*V+1],A=p.pending_buf[p.l_buf+V],V++,F===0?K(p,A,x):(K(p,(G=o[A])+f+1,x),(W=z[G])!==0&&Z(p,A-=$[G],W),K(p,G=L(--F),U),(W=j[G])!==0&&Z(p,F-=N[G],W)),V<p.last_lit;);K(p,_,x)}function dt(p,x){var U,F,A,G=x.dyn_tree,W=x.stat_desc.static_tree,V=x.stat_desc.has_stree,J=x.stat_desc.elems,nt=-1;for(p.heap_len=0,p.heap_max=c,U=0;U<J;U++)G[2*U]!==0?(p.heap[++p.heap_len]=nt=U,p.depth[U]=0):G[2*U+1]=0;for(;p.heap_len<2;)G[2*(A=p.heap[++p.heap_len]=nt<2?++nt:0)]=1,p.depth[A]=0,p.opt_len--,V&&(p.static_len-=W[2*A+1]);for(x.max_code=nt,U=p.heap_len>>1;1<=U;U--)at(p,G,U);for(A=J;U=p.heap[1],p.heap[1]=p.heap[p.heap_len--],at(p,G,1),F=p.heap[1],p.heap[--p.heap_max]=U,p.heap[--p.heap_max]=F,G[2*A]=G[2*U]+G[2*F],p.depth[A]=(p.depth[U]>=p.depth[F]?p.depth[U]:p.depth[F])+1,G[2*U+1]=G[2*F+1]=A,p.heap[1]=A++,at(p,G,1),2<=p.heap_len;);p.heap[--p.heap_max]=p.heap[1],function(rt,ht){var St,mt,_t,lt,$t,xe,gt=ht.dyn_tree,Ce=ht.max_code,Le=ht.stat_desc.static_tree,Ie=ht.stat_desc.has_stree,De=ht.stat_desc.extra_bits,Ee=ht.stat_desc.extra_base,xt=ht.stat_desc.max_length,Mt=0;for(lt=0;lt<=m;lt++)rt.bl_count[lt]=0;for(gt[2*rt.heap[rt.heap_max]+1]=0,St=rt.heap_max+1;St<c;St++)xt<(lt=gt[2*gt[2*(mt=rt.heap[St])+1]+1]+1)&&(lt=xt,Mt++),gt[2*mt+1]=lt,Ce<mt||(rt.bl_count[lt]++,$t=0,Ee<=mt&&($t=De[mt-Ee]),xe=gt[2*mt],rt.opt_len+=xe*(lt+$t),Ie&&(rt.static_len+=xe*(Le[2*mt+1]+$t)));if(Mt!==0){do{for(lt=xt-1;rt.bl_count[lt]===0;)lt--;rt.bl_count[lt]--,rt.bl_count[lt+1]+=2,rt.bl_count[xt]--,Mt-=2}while(0<Mt);for(lt=xt;lt!==0;lt--)for(mt=rt.bl_count[lt];mt!==0;)Ce<(_t=rt.heap[--St])||(gt[2*_t+1]!==lt&&(rt.opt_len+=(lt-gt[2*_t+1])*gt[2*_t],gt[2*_t+1]=lt),mt--)}}(p,x),ct(G,nt,p.bl_count)}function i(p,x,U){var F,A,G=-1,W=x[1],V=0,J=7,nt=4;for(W===0&&(J=138,nt=3),x[2*(U+1)+1]=65535,F=0;F<=U;F++)A=W,W=x[2*(F+1)+1],++V<J&&A===W||(V<nt?p.bl_tree[2*A]+=V:A!==0?(A!==G&&p.bl_tree[2*A]++,p.bl_tree[2*E]++):V<=10?p.bl_tree[2*C]++:p.bl_tree[2*M]++,G=A,nt=(V=0)===W?(J=138,3):A===W?(J=6,3):(J=7,4))}function P(p,x,U){var F,A,G=-1,W=x[1],V=0,J=7,nt=4;for(W===0&&(J=138,nt=3),F=0;F<=U;F++)if(A=W,W=x[2*(F+1)+1],!(++V<J&&A===W)){if(V<nt)for(;K(p,A,p.bl_tree),--V!=0;);else A!==0?(A!==G&&(K(p,A,p.bl_tree),V--),K(p,E,p.bl_tree),Z(p,V-3,2)):V<=10?(K(p,C,p.bl_tree),Z(p,V-3,3)):(K(p,M,p.bl_tree),Z(p,V-11,7));G=A,nt=(V=0)===W?(J=138,3):A===W?(J=6,3):(J=7,4)}}h(N);var D=!1;function v(p,x,U,F){Z(p,(b<<1)+(F?1:0),3),function(A,G,W,V){st(A),Y(A,W),Y(A,~W),s.arraySet(A.pending_buf,A.window,G,W,A.pending),A.pending+=W}(p,x,U)}r._tr_init=function(p){D||(function(){var x,U,F,A,G,W=new Array(m+1);for(A=F=0;A<w-1;A++)for($[A]=F,x=0;x<1<<z[A];x++)o[F++]=A;for(o[F-1]=A,A=G=0;A<16;A++)for(N[A]=G,x=0;x<1<<j[A];x++)O[G++]=A;for(G>>=7;A<u;A++)for(N[A]=G<<7,x=0;x<1<<j[A]-7;x++)O[256+G++]=A;for(U=0;U<=m;U++)W[U]=0;for(x=0;x<=143;)X[2*x+1]=8,x++,W[8]++;for(;x<=255;)X[2*x+1]=9,x++,W[9]++;for(;x<=279;)X[2*x+1]=7,x++,W[7]++;for(;x<=287;)X[2*x+1]=8,x++,W[8]++;for(ct(X,g+1,W),x=0;x<u;x++)S[2*x+1]=5,S[2*x]=ot(x,5);tt=new Q(X,z,f+1,g,m),H=new Q(S,j,0,u,m),et=new Q(new Array(0),B,0,k,y)}(),D=!0),p.l_desc=new I(p.dyn_ltree,tt),p.d_desc=new I(p.dyn_dtree,H),p.bl_desc=new I(p.bl_tree,et),p.bi_buf=0,p.bi_valid=0,it(p)},r._tr_stored_block=v,r._tr_flush_block=function(p,x,U,F){var A,G,W=0;0<p.level?(p.strm.data_type===2&&(p.strm.data_type=function(V){var J,nt=4093624447;for(J=0;J<=31;J++,nt>>>=1)if(1&nt&&V.dyn_ltree[2*J]!==0)return a;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return l;for(J=32;J<f;J++)if(V.dyn_ltree[2*J]!==0)return l;return a}(p)),dt(p,p.l_desc),dt(p,p.d_desc),W=function(V){var J;for(i(V,V.dyn_ltree,V.l_desc.max_code),i(V,V.dyn_dtree,V.d_desc.max_code),dt(V,V.bl_desc),J=k-1;3<=J&&V.bl_tree[2*q[J]+1]===0;J--);return V.opt_len+=3*(J+1)+5+5+4,J}(p),A=p.opt_len+3+7>>>3,(G=p.static_len+3+7>>>3)<=A&&(A=G)):A=G=U+5,U+4<=A&&x!==-1?v(p,x,U,F):p.strategy===4||G===A?(Z(p,2+(F?1:0),3),ft(p,X,S)):(Z(p,4+(F?1:0),3),function(V,J,nt,rt){var ht;for(Z(V,J-257,5),Z(V,nt-1,5),Z(V,rt-4,4),ht=0;ht<rt;ht++)Z(V,V.bl_tree[2*q[ht]+1],3);P(V,V.dyn_ltree,J-1),P(V,V.dyn_dtree,nt-1)}(p,p.l_desc.max_code+1,p.d_desc.max_code+1,W+1),ft(p,p.dyn_ltree,p.dyn_dtree)),it(p),F&&st(p)},r._tr_tally=function(p,x,U){return p.pending_buf[p.d_buf+2*p.last_lit]=x>>>8&255,p.pending_buf[p.d_buf+2*p.last_lit+1]=255&x,p.pending_buf[p.l_buf+p.last_lit]=255&U,p.last_lit++,x===0?p.dyn_ltree[2*U]++:(p.matches++,x--,p.dyn_ltree[2*(o[U]+f+1)]++,p.dyn_dtree[2*L(x)]++),p.last_lit===p.lit_bufsize-1},r._tr_align=function(p){Z(p,2,3),K(p,_,X),function(x){x.bi_valid===16?(Y(x,x.bi_buf),x.bi_buf=0,x.bi_valid=0):8<=x.bi_valid&&(x.pending_buf[x.pending++]=255&x.bi_buf,x.bi_buf>>=8,x.bi_valid-=8)}(p)}},{"../utils/common":41}],53:[function(t,n,r){n.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(t,n,r){(function(s){(function(a,l){if(!a.setImmediate){var h,b,w,f,g=1,u={},k=!1,c=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,h={}.toString.call(a.process)==="[object process]"?function(E){process.nextTick(function(){y(E)})}:function(){if(a.postMessage&&!a.importScripts){var E=!0,C=a.onmessage;return a.onmessage=function(){E=!1},a.postMessage("","*"),a.onmessage=C,E}}()?(f="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",_,!1):a.attachEvent("onmessage",_),function(E){a.postMessage(f+E,"*")}):a.MessageChannel?((w=new MessageChannel).port1.onmessage=function(E){y(E.data)},function(E){w.port2.postMessage(E)}):c&&"onreadystatechange"in c.createElement("script")?(b=c.documentElement,function(E){var C=c.createElement("script");C.onreadystatechange=function(){y(E),C.onreadystatechange=null,b.removeChild(C),C=null},b.appendChild(C)}):function(E){setTimeout(y,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var C=new Array(arguments.length-1),M=0;M<C.length;M++)C[M]=arguments[M+1];var z={callback:E,args:C};return u[g]=z,h(g),g++},m.clearImmediate=d}function d(E){delete u[E]}function y(E){if(k)setTimeout(y,0,E);else{var C=u[E];if(C){k=!0;try{(function(M){var z=M.callback,j=M.args;switch(j.length){case 0:z();break;case 1:z(j[0]);break;case 2:z(j[0],j[1]);break;case 3:z(j[0],j[1],j[2]);break;default:z.apply(l,j)}})(C)}finally{d(E),k=!1}}}}function _(E){E.source===a&&typeof E.data=="string"&&E.data.indexOf(f)===0&&y(+E.data.slice(f.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof commonjsGlobal<"u"?commonjsGlobal:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(jszip_min);var jszip_minExports=jszip_min.exports;const JSZip=getDefaultExportFromCjs(jszip_minExports),defaultItems$1=3,storeGistKey$1="metal-sheet-lists",storeDataKey$1="metalSheetLists",content$4=html`
    <drawer-import-button
        store-gist-key="${storeGistKey$1}"
    ></drawer-import-button>

    <drawer-gist-item></drawer-gist-item>

    <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
`,ve=class ve extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$4,this.style.position="relative",this.ui.setTitle("Blech Listen"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey$1,this.storeMetalSheetListsHandler.bind(this),!0));const e=this.querySelector("drawer-import-button");e.ui.onValidate=this.validate.bind(this),e.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey$1,[])},e.ui.onUpdate=this.update.bind(this),e.ui.setExportHandler(async()=>{const t=new JSZip;for(const r of this.uiStore.ui.get(storeDataKey$1)){const s=getFileName$1(r),a=JSON.stringify(r);t.file(s,a)}const n=await t.generateAsync({type:"blob"});FileSaver.saveAs(n,`blech-listen-${new Date().getTime()}.zip`)})}async validate(e){if(typeof(e==null?void 0:e.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(e==null?void 0:e.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(e==null?void 0:e.toolID)!="string"&&(e.toolID=""),Object.hasOwn(e,"data")||(e.data={}),typeof e.data.press!="number"&&(e.data.press=-1),Object.hasOwn(e.data,"table")?(Object.hasOwn(e.data.table,"header")||(e.data.table.header=[]),Object.hasOwn(e.data.table,"data")||(e.data.table.data=[])):e.data.table={header:[],data:[]},e}async update(e){console.debug("[PGDrawerMetalSheetLists.update]",{data:e}),updateStore(this.uiStore,e,{storeDataKey:storeDataKey$1,getKey:getKey$1})}async storeGistHandler(e){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:e}),storeGistHandler(this.querySelector("drawer-gist-item"),e,{storeGistKey:storeGistKey$1,storeDataKey:storeDataKey$1,getFileName:getFileName$1,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(e){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:e}),!e)return;const t=[...this.children].slice(defaultItems$1);for(;t.length>0;)this.removeChild(t.pop());for(const n of metalSheetLists(e)){const r=new PGDrawerItemMetalSheetList;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists",a=>{a.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{confirm(`Delete "${n.format} - ${n.toolID} - ${n.date}"`)&&this.uiStore.ui.update(storeDataKey$1,s=>{const a=getKey$1(n);return s.filter(l=>getKey$1(l)!==a)})})),this.appendChild(r)}}};R(ve,"register",()=>{customElements.define("pg-drawer-metal-sheet-lists",ve)});let PGDrawerMetalSheetLists=ve;const content$3=html`
    <drawer-import-button gist-key="vis-data" disabled></drawer-import-button>

    <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
            New Data
        </ui-button>
    </ui-drawer-group-item>
`,ye=class ye extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$3,this.ui.setTitle("Vis Data"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0));const e=this.querySelector("drawer-import-button");e.ui.onValidate=this.validate.bind(this),e.ui.onUpdate=this.update.bind(this),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}async validate(e){return e}async update(e){}onVisData(e){if(console.debug("[PGDrawerVisData.onVisData]",{lists:e}),!e)return;const t=[...this.children].slice(2);for(;t.length>0;)this.removeChild(t.pop());for(const n of e){const r=new PGDrawerItemVisData;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(a=>a.title!==n.title))}))}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const e=new NewVisDataDialog;document.body.appendChild(e),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.open()}};R(ye,"register",()=>{customElements.define("pg-drawer-vis-data",ye)});let PGDrawerVisData=ye;const defaultItems=2,storeGistKey="vis",storeDataKey="vis",content$2=html`
    <drawer-import-button
        store-gist-key="${storeGistKey}"
    ></drawer-import-button>
    <drawer-gist-item></drawer-gist-item>
`,we=class we extends UIDrawerGroup{constructor(){super(),this.innerHTML=content$2,this.ui.setTitle("Vis"),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.ui.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(storeDataKey,this.storeVisHandler.bind(this),!0));const e=this.querySelector("drawer-import-button");e.ui.onValidate=this.validate.bind(this),e.ui.beforeUpdate=async()=>{this.uiStore.ui.set(storeDataKey,[])},e.ui.onUpdate=this.update.bind(this)}async toJSON(e){const t=h=>{const[b,w]=h.split(/[xX]/),f=parseFloat(b),g=parseFloat(w);return!f||!g?`${f}x${g}`:`${f>g?f:g}x${f<g?f:g}`},n=new Date,r=(n.getMonth()+1).toString().padStart(2,"0"),s=n.getDate().toString().padStart(2,"0"),a={date:n.getTime(),title:`${n.getFullYear()}-${r}-${s}`,data:[]},l=e.split(`
`);for(let h=0;h<l.length;h++){if(!l[h])continue;let[b,...w]=l[h].trim().replace(/\t/g," ").split(" ");b=b.trim();const{productName:f,format:g,newRest:u}=(()=>{let m="",d="";for(let y=0;y<w.length;y++)if(w[y].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){d=t(w[y]),w=w.slice(y+1);break}else m+=w[y]+" ";return{productName:m.trim(),format:t(d),newRest:w.map(y=>y.trim()).filter(y=>!!y)}})();if(!g)throw`missing format for "${f}" (lotto: "${b}") in vis (txt) data!`;if(!(u[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${f}" with lotto "${b}"!`;const k=u.shift()||"",c=u.join(" ");a.data.push({lotto:b,name:f,format:g,thickness:parseFloat(k.replaceAll(",",".")),stamp:c})}return a}async validate(e){const t=r=>new Error(`invalid data for product:
${JSON.stringify(r,null,4)}`);let n=null;if(typeof e=="string")try{n=JSON.parse(e)}catch{return await this.toJSON(e)}else n=e;if(typeof n.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof n.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(n.data))throw new Error('invalid data: "data" not from type "array"');for(const r of n.data)if(typeof r.lotto!="string"||typeof r.name!="string"||typeof r.format!="string"||typeof r.thickness!="number"||typeof r.stamp!="string")throw t(r);return n}async update(e){console.debug("[PGDrawerVis.update]",{data:e}),updateStore(this.uiStore,e,{storeDataKey,getKey})}storeGistHandler(e){console.debug("[PGDrawerVis.storeGistHandler]",{data:e}),storeGistHandler(this.querySelector("drawer-gist-item"),e,{storeGistKey,storeDataKey,getFileName,onUpdate:this.update.bind(this)})}storeVisHandler(e){if(console.debug("[PGDrawerVis.storeVisHandler]",{lists:e}),!e)return;const t=[...this.children].slice(defaultItems);for(;t.length>0;)this.removeChild(t.pop());for(const n of e){const r=new PGDrawerItemVis;r.ui.set(n),r.ui.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis",a=>{a.ui.set(n)}),document.querySelector("pg-drawer").ui.setOpen(!1)}),r.ui.events.on("delete",()=>{this.uiStore.ui.update(storeDataKey,s=>s.filter(a=>a.title!==n.title))})),this.appendChild(r)}}};R(we,"register",()=>{customElements.define("pg-drawer-vis",we)});let PGDrawerVis=we;const content$1=html`
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
`,ke=class ke extends UIDrawer{constructor(){super(),this.innerHTML=content$1}};R(ke,"register",()=>{customElements.define("pg-drawer",ke)});let PGDrawer=ke;function storeGistHandler(T,e,{storeGistKey:t,storeDataKey:n,getFileName:r,onUpdate:s}){if(!e)return;const a=document.querySelector("ui-store"),l=e[t];if(!l){T.ui.set(null,null),T.ui.onPull=null,T.ui.onPush=null;return}T.ui.set(l.id,l.revision);let h;const b=()=>{h&&T.removeChild(h),h=new UISpinner,T.appendChild(h)},w=()=>{h&&(T.removeChild(h),h=void 0)};T.ui.onPull=async(f,g)=>{b();try{await gistPull(f,g,{beforeUpdate:async()=>{a.ui.set(n,[])},update:s,updateRevision:u=>{a.ui.update("gist",k=>(k[t]={id:f,revision:u},k))}})}finally{w()}},T.ui.onPush=async(f,g)=>{b();try{const u=a.ui.get(n);if(!Array.isArray(u)){alert("No data to push!");return}await gistPush(f,g,u,{getFileName:r,updateRevision:k=>{a.ui.update("gist",c=>(c[t]={id:f,revision:k},c))}})}finally{w()}}}function updateStore(T,e,{storeDataKey:t,getKey:n}){const r=n(e);if(T.ui.get(t).find(s=>n(s)===r)){T.ui.update(t,s=>s.map(a=>n(a)===r?e:a));return}T.ui.update(t,s=>[...s,e])}const svgChevronLeft=html`
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
`,Se=class Se extends UIAppBar{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout")}render(){super.render(),this.innerHTML=html`
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
        `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}createMenuItem(){const e=this.querySelector('[name="menu"]');return e.ui.getChild().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0)),e}createBackItem(){const e=this.querySelector('[name="back"]');return e.ui.getChild().ui.events.on("click",async()=>this.stackLayout.ui.goBack()),e}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const e=this.querySelector('[name="edit"]');return e.ui.getChild().ui.events.on("click",()=>{const n=this.uiStore.ui.get("edit").onClick;typeof n=="function"&&n()}),e}createShareItem(){const e=this.querySelector('[name="share"]');return e.ui.getChild().ui.events.on("click",async()=>{const n=this.uiStore.ui.get("share"),r=async()=>{const s=document.createElement("a");for(const a of n.files)s.download=a.name,s.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),s.click()};if(!navigator.canShare)return await r();if(navigator.canShare(n)){try{await navigator.share(n)}catch{await r()}return}await r()}),e}createSearchItem(){const e=this.querySelector('[name="search"]');return e.ui.getChild().ui.events.on("click",()=>this.uiStore.ui.update("search",n=>({...n,active:!n.active}))),e}};R(Se,"register",()=>{customElements.define("pg-app-bar",Se)});let PGAppBar=Se;const content=html`
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
`,_e=class _e extends HTMLElement{constructor(){super(),this.innerHTML=content,this.cleanup=new CleanUp,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:e})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:e}),this.stackLayout.ui.stackSize()>1?this.pgAppBar.items.back.ui.enable():this.pgAppBar.items.back.ui.disable(),!e){this.setupNoPage();return}switch(e.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"alert":this.setupAlertPage();break;case"metal-sheet-lists":this.setupMetalSheetListsPage();break;case"vis":this.setupVisPage();break;case"product":this.setupProductPage();break;case"vis-data":break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new AlertListsPage),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new MetalSheetListsPage),this.stackLayout.ui.registerPage("vis",()=>new VisPage),this.stackLayout.ui.registerPage("vis-data",()=>new VisDataPage)}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.enable()}setupVisPage(){this.resetAppBar(),this.pgAppBar.items.share.ui.enable(),this.pgAppBar.items.search.ui.enable()}setupProductPage(){this.resetAppBar()}setupAlertPage(){this.resetAppBar()}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.enable()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.setOpen(!0)}resetAppBar(){this.pgAppBar.items.edit.ui.disable(),this.pgAppBar.items.share.ui.disable(),this.pgAppBar.items.search.ui.disable()}async onAppBarTitle(e){console.debug("[PGApp.onAppBarTitle]",{title:e}),this.pgAppBar.items.title.ui.getChild().innerHTML=e||""}async onShare(e){console.debug("[PGApp.onShare]",{data:e}),e!==null?this.pgAppBar.items.share.ui.enable():this.pgAppBar.items.share.ui.disable()}};R(_e,"register",()=>{customElements.define("pg-app",_e)});let PGApp=_e;registerSW({onRegistered(T){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${version}`),await T.update()}catch(e){console.warn(`Auto update failed: ${e}`)}})}});register();ImportDialog.register();NewVisDataDialog.register();PushDialog.register();AlertPage.register();AlertListsPage.register();MetalSheetCreateDialog.register();MetalSheetModifyEntryDialog.register();MetalSheetNewEntryDialog.register();MetalSheetActions.register();MetalSheetListsPage.register();ProductPage.register();VisPage.register();VisDataPage.register();PGDrawerAlertLists.register();PGDrawerMetalSheetLists.register();PGDrawerVisData.register();PGDrawerVis.register();DrawerGistItem.register();DrawerImportButton.register();DrawerNewMetalSheetListButton.register();DrawerRevision.register();PGDrawerItemAlertList.register();PGDrawerItemMetalSheetList.register();PGDrawerItemVisData.register();PGDrawerItemVis.register();PGDrawer.register();SearchBar.register();PGAppBar.register();PGApp.register();
