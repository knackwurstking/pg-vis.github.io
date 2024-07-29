var kr=Object.defineProperty;var Zi=L=>{throw TypeError(L)};var _r=(L,t,e)=>t in L?kr(L,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):L[t]=e;var G=(L,t,e)=>_r(L,typeof t!="symbol"?t+"":t,e),xr=(L,t,e)=>t.has(L)||Zi("Cannot "+e);var xt=(L,t,e)=>(xr(L,t,"read from private field"),e?e.call(L):t.get(L)),Vi=(L,t,e)=>t.has(L)?Zi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(L):t.set(L,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Wi={onDragStart:null,onDragging:null,onDragEnd:null};function Sr(L,t={}){t={...Wi,...t};const e=()=>{const r=[...L.parentNode.children].indexOf(L);L.draggable=!0,L.ondragstart=a=>{a.dataTransfer.effectAllowed="move",a.dataTransfer.dropEffect="move",a.dataTransfer.setData("text/plain",r.toString()),t.onDragStart&&t.onDragStart(r)},L.ondragover=a=>(a.preventDefault(),!1),L.ondragenter=a=>{a.preventDefault(),t.onDragging&&t.onDragging(r)},L.ondrop=a=>{a.preventDefault(),a.dataTransfer.dropEffect="move";const o=parseInt(a.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(o,r)}},s=()=>{L.draggable=!1,L.ondragstart=null,L.ondragover=null,L.ondragenter=null,L.ondrop=null};return e(),{update(n){t={...Wi,...n},s(),e()},destroy:s}}var vt;class pt{constructor(){Vi(this,vt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return xt(this,vt)[t]||(xt(this,vt)[t]=[]),xt(this,vt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!xt(this,vt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let s=!1,n=0;for(const r of xt(this,vt)[t])r===e&&(xt(this,vt)[t].splice(n,1),s=!0),n++;if(!s)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(xt(this,vt)[t])for(const s of xt(this,vt)[t])s(e);return this}}vt=new WeakMap;function Gi(L,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,L.currentTarget.appendChild(e);const s=L.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${s.height/2}px`,e.style.left=`${s.width/2}px`):(e.style.top=`${L.clientY-s.top}px`,e.style.left=`${L.clientX-s.left}px`);const n=Math.max(s.width,s.height)*.02;return e.style.transform=`scale(${n}) translate(0, 0)`,e}function Ki(L){L&&(L.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&L.remove()}),L.style.opacity="0")}const Cr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Rt(L,t={}){t={...Cr,...t};let e;const s=r=>{e=Gi(r,t)},n=()=>{Ki(e)};return L.classList.add("ripple-container"),L.style.overflow="hidden",t.useClick===!0?L.addEventListener("click",r=>{e=Gi(r,t),Ki(e)}):(L.addEventListener("pointerdown",s),L.addEventListener("pointerup",n),L.addEventListener("pointerleave",n)),()=>{L.classList.remove("ripple-container"),L.removeEventListener("pointerdown",s),L.removeEventListener("pointerup",n),L.removeEventListener("pointerleave",n)}}const U=String.raw;class Tt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ce=class Ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}};G(Ce,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Ce)});let ae=Ce;const Ae=class Ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}};G(Ae,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ae)});let di=Ae;const jt=class jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0}));break}}};G(jt,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",jt)}),G(jt,"observedAttributes",["noripple"]);let fi=jt;const Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Rt(this,{centered:!0}));break}}};G(Pt,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Pt)}),G(Pt,"observedAttributes",["noripple"]);let pi=Pt;const Ee=class Ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}};G(Ee,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ee)});let mi=Ee;const Ar=U`
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
`,qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new Tt,this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){this.root.setAttribute("title",t||"")},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const s=this.root.shadowRoot.querySelector("dialog"),n=s.inert;s.inert=e,t?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=U`
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
                env(safe-area-inset-top, 0) + env(safe-area-inset-bottom, 0) +
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
              ${Ar}
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
    `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const s=this.shadowRoot.querySelector("dialog"),n=r=>r.preventDefault();s.addEventListener("cancel",n),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),s.removeEventListener("cancel",n)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":const n=this.shadowRoot.querySelector('[name="title"]');n.innerHTML=s||"";break}}};G(qt,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",qt)}),G(qt,"observedAttributes",["title"]);let Ct=qt;const Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"open":s!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}};G(Ft,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Ft)}),G(Ft,"observedAttributes",["open"]);let le=Ft;const or=U`
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
`,It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get fold(){return this.root.hasAttribute("fold")},set fold(t){if(!t){this.root.removeAttribute("fold");return}this.root.setAttribute("fold","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        * {
          box-sizing: border-box;
        }

        ul {
          list-style: none;
          padding: var(--ui-spacing);
          overflow: hidden;
          border-bottom: 1px solid var(--ui-borderColor);
        }

        ui-drawer-group-item {
          display: flex;
          cursor: pointer;
        }

        .title:not(.visible) {
          display: none;
        }

        :host([fold]) .icon {
          transform: rotate(-90deg);
        }

        :host([fold]) ::slotted(*) {
          display: none !important;
        }
      </style>

      <ul>
        <ui-drawer-group-item>
          <ui-flex-grid-row>
            <ui-flex-grid-item class="title"></ui-flex-grid-item>

            <ui-flex-grid-item class="icon" flex="0">
              <ui-svg style="width: 2.5rem; height: 2.5rem;">
                ${or}
              </ui-svg>
            </ui-flex-grid-item>
          </ui-flex-grid-row>
        </ui-drawer-group-item>

        <slot></slot>
      </ul>
    `,this.shadowRoot.querySelector("ui-drawer-group-item").addEventListener("click",()=>{this.ui.fold=!this.ui.fold})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setGroupTitle(s);break}}setGroupTitle(t){let e=this.shadowRoot.querySelector(".title");if(!t){e.classList.remove("visible");return}e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}};G(It,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",It)}),G(It,"observedAttributes",["title"]);let Lt=It;const Re=class Re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: block;
          width: 100%;
        }

        li {
          padding: var(--ui-spacing) calc(var(--ui-spacing) * 1.5);
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          width: 100%;
        }

        ::slotted(*) {
          width: 100%;
        }
      </style>

      <li>
        <slot></slot>
      </li>
    `}connectedCallback(){}disconnectedCallback(){}};G(Re,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",Re)});let kt=Re;const Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get flex(){return this.root.getAttribute("flex")},set flex(t){if(!t){this.root.removeAttribute("flex");return}this.root.setAttribute("flex",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
                `;break}}};G(Nt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",Nt)}),G(Nt,"observedAttributes",["flex"]);let dt=Nt;const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
                `;break}}};G($t,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",$t)}),G($t,"observedAttributes",["gap"]);let ue=$t;const Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
                `;break}}};G(Ut,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Ut)}),G(Ut,"observedAttributes",["gap"]);let At=Ut;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRipple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.hasAttribute("ripple")},set ripple(t){if(!t){this.root.removeAttribute("ripple");return}this.root.setAttribute("ripple","")},get primary(){return this.root.getAttribute("primary")},set primary(t){if(!t){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},get secondary(){return this.root.getAttribute("primary")},set secondary(t){if(!t){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"ripple":this.setRipple(s);break;case"primary":this.setPrimary(s);break;case"secondary":this.setSecondary(s);break}}setRipple(t){if(t===null){this.disableRipple();return}this.enableRipple()}setPrimary(t){this.shadowRoot.querySelector("ui-primary").innerHTML=t||""}setSecondary(t){this.shadowRoot.querySelector("ui-secondary").innerHTML=t||""}enableRipple(){if(this.removeRipple||(this.removeRipple=Rt(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.removeRipple&&this.removeRipple(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};G(Zt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Zt)}),G(Zt,"observedAttributes",["ripple","secondary","primary"]);let gi=Zt;const Le=class Le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        :host {
          font-size: 1.1rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-primary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};G(Le,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Le)});let bi=Le;const Te=class Te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        :host {
          font-size: 0.9rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};G(Te,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Te)});let te=Te;const Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get type(){return this.root.getAttribute("type")},set type(t){if(!t){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.root.shadowRoot.querySelector("input").min},set min(t){this.root.shadowRoot.querySelector("input").min=t},get max(){return this.root.shadowRoot.querySelector("input").max},set max(t){this.root.shadowRoot.querySelector("input").max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `;const t=this.shadowRoot.querySelector("input");t.type=this.getAttribute("type")||"text",t.oninput=()=>{this.ui.events.dispatch("input",t.value)},t.onchange=()=>{this.ui.events.dispatch("change",t.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"type":this.setType(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"min":this.setMin(s);break;case"max":this.setMax(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new te,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setType(t){this.shadowRoot.querySelector("input").type=t!==null?t:""}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setMin(t){this.shadowRoot.querySelector("input").min=t}setMax(t){this.shadowRoot.querySelector("input").max=t}};G(Vt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Vt)}),G(Vt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let vi=Vt;const ze=class ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};G(ze,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",ze)});let ee=ze;const Be=class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof ee)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
        <div class="icon"><ui-svg>${or}</ui-svg></div>

        <slot></slot>
      </div>
    `;const t=s=>{const n=async r=>{(r.composedPath()||[]).forEach(a=>{a instanceof ee&&([...this.querySelectorAll("ui-select-option")].forEach(o=>o.removeAttribute("selected")),a.setAttribute("selected",""),this.ui.events.dispatch("change",a))})};this.classList.toggle("open")?(s.stopPropagation(),this.addEventListener("click",n)):setTimeout(()=>this.removeEventListener("click",n))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};G(Be,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Be)});let yi=Be;const ar=U`
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
`,Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.root.hasAttribute("nosubmit")},set nosubmit(t){if(!t){this.root.removeAttribute("nosubmit");return}this.root.setAttribute("nosubmit","")},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.getAttribute("storagekey")},set storagekey(t){if(!t){this.root.removeAttribute("storagekey");return}this.root.setAttribute("storagekey",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
        <ui-icon-button name="submit" ghost>${ar}</ui-icon-button>
      </div>
    `;const t=this.shadowRoot.querySelector('[name="submit"]'),e=this.shadowRoot.querySelector("input");e.type="search",e.addEventListener("keydown",async n=>{this.ui.nosubmit||n.key==="Enter"&&t.click()});let s=null;e.addEventListener("input",async()=>{this.ui.storage&&(s!==null&&clearTimeout(s),s=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,e.value),s=null},250)),this.ui.events.dispatch("input",e.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",e.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"nosubmit":this.setNoSubmit(s);break;case"storagekey":this.setStorageKey(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new te,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setNoSubmit(t){const e=this.shadowRoot.querySelector('[name="submit"]');if(t===null){e.style.display=null;return}e.style.display="none"}setStorageKey(t){if(!this.ui.storage)return;const e=this.shadowRoot.querySelector("input");e.value=localStorage.getItem(this.ui.storageprefix+t)||"",this.ui.events.dispatch("storage",e.value)}};G(Wt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Wt)}),G(Wt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let wi=Wt;const Gt=class Gt extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new pt,get current(){return this.root.getAttribute("current")},set current(t){if(!t){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var s,n;return((n=(s=this.data)==null?void 0:s[t])==null?void 0:n[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"current":s!==null&&this.setCurrent(s);break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.href)throw"Missing href attribute!";try{this.data=(await fetch(e.ui.href)).json()}catch(s){console.error(s)}this.ui.events.dispatch("change",e)}}};G(Gt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Gt)}),G(Gt,"observedAttributes",["current"]);let ki=Gt;const Oe=class Oe extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};G(Oe,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Oe)});let _i=Oe;const Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){if(!t){this.root.removeAttribute("nobg");return}this.root.setAttribute("nobg","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"nobg":this.setNoBg(s);break}}setNoBg(t){if(t===null){this.shadowRoot.querySelector(".background").style.display=null;return}this.shadowRoot.querySelector(".background").style.display="none"}};G(Kt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Kt)}),G(Kt,"observedAttributes",["nobg"]);let ie=Kt;const He=class He extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `}connectedCallback(){}disconnectedCallback(){}};G(He,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",He)});let Et=He;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new pt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,s=!1){if(this.lock)return;const n=this.root.pages[t]();this.root.stack.push(this.root.appendChild(n)),typeof e=="function"&&setTimeout(()=>e(n));let r=null;this.size()>1&&!s&&(r=this.root.stack[this.root.stack.length-2],r.parentElement.removeChild(r)),this.root.dispatchChangeEvent(r),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        :host {
          display: block !important;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};G(Me,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Me)});let xi=Me;const Jt=class Jt extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new pt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,s=!1){if(s&&this.storageprefix){const n=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=n??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};G(Jt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Jt)}),G(Jt,"observedAttributes",["storageprefix"]);let Si=Jt;const Yt=class Yt extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.ui={root:this,get auto(){return this.root.hasAttribute("auto")},set auto(t){if(!t){this.root.removeAttribute("auto");return}this.root.setAttribute("auto","")},get mode(){return this.root.getAttribute("mode")},set mode(t){if(!t){this.root.removeAttribute("mode");return}this.root.setAttribute("mode",t)},add(t,e){this.root.themes[t]=e},set(t){var s;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((s=this.root.currentTheme)==null?void 0:s.name)==t)return;{const n=document.getElementById("theme");n&&(document.head.removeChild(n),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,s){switch(t){case"auto":this.setAuto(s);break;case"mode":this.setMode(s);break}}setAuto(t,e=document.body){if(t===null){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=s=>{s.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}}};G(Yt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Yt)}),G(Yt,"observedAttributes",["auto","mode"]);let Ci=Yt;const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
      <style>
        :host {
          display: block;
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
    `}connectedCallback(){}disconnectedCallback(){}};G(De,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",De)});let Ai=De;function Er(){di.register(),ae.register(),fi.register(),pi.register(),mi.register(),Ct.register(),kt.register(),Lt.register(),le.register(),dt.register(),ue.register(),At.register(),vi.register(),wi.register(),ee.register(),yi.register(),_i.register(),ki.register(),ie.register(),xi.register(),Et.register(),Si.register(),Ai.register(),gi.register(),bi.register(),te.register(),Ci.register()}const Rr="modulepreload",Lr=function(L){return"/pg-vis.github.io/"+L},Ji={},Tr=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),a=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.all(e.map(o=>{if(o=Lr(o),o in Ji)return;Ji[o]=!0;const h=o.endsWith(".css"),g=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${g}`))return;const w=document.createElement("link");if(w.rel=h?"stylesheet":Rr,h||(w.as="script",w.crossOrigin=""),w.href=o,a&&w.setAttribute("nonce",a),document.head.appendChild(w),h)return new Promise((p,b)=>{w.addEventListener("load",p),w.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${o}`)))})}))}return n.then(()=>t()).catch(r=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=r,window.dispatchEvent(a),!a.defaultPrevented)throw r})};function zr(L={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:a}=L;let o,h;const g=async(p=!0)=>{await h};async function w(){if("serviceWorker"in navigator){if(o=await Tr(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(p=>{a==null||a(p)}),!o)return;o.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),o.addEventListener("installed",p=>{p.isUpdate||s==null||s()}),o.register({immediate:t}).then(p=>{r?r("/pg-vis.github.io/sw.js",p):n==null||n(p)}).catch(p=>{a==null||a(p)})}}return h=w(),g}const je=class je extends Ct{constructor(t){super(),this.title=t,this.gistID=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=U`
      <ui-flex-grid-item>
        <ui-label
          secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title=`Import "${this.title}"`}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};G(je,"register",()=>{customElements.define("import-dialog",je)});let ce=je;const Pe=class Pe extends Ct{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.name=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=U`
      <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="New Vis Data",this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",s=>(s.unshift({title:this.name.ui.value,data:[]}),s)),this.ui.close()}),this.appendChild(t)}};G(Pe,"register",()=>{customElements.define("new-vis-data-dialog",Pe)});let he=Pe;const qe=class qe extends Ct{constructor(){super(),this.token=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=U`
      <ui-flex-grid-item>
        <ui-label
          secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Gist Token"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};G(qe,"register",()=>{customElements.define("push-dialog",qe)});let de=qe;const ht={alertPage:"alert",alertListsPage:"alert-lists",metalSheetListsPage:"metal-sheet-lists",visPage:"vis",productPage:"product",visDataPage:"vis-data"},Fe=class Fe extends Et{constructor(){super(),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}},this.render()}render(){this.innerHTML=U`
      <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}connectedCallback(){super.connectedCallback(),this.ui.name=ht.alertPage}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(lr({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};G(Fe,"register",()=>{customElements.define("alert-page",Fe)});let fe=Fe;const Ie=class Ie extends Et{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new fe,this.list=null,this.ui={...this.ui,root:this,set(t){const e=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input().ui.storagekey=ur(this.root.list),setTimeout(()=>this.root.renderList())}},this.render()}render(){this.innerHTML=U`
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
    `,this.searchBar=this.querySelector("search-bar")}connectedCallback(){super.connectedCallback(),this.ui.name=ht.alertListsPage,this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.ui.active=e,await this.search(e?this.searchBar.ui.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.register("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("alert")}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(s=>{if(!this.searchBar.ui.active){s.style.display="flex";return}if(this.is(this.getAlertFromElement(s),e)){s.style.display="flex";return}s.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),s=new RegExp(this.searchBar.ui.input().ui.value.replaceAll(" ",".*"));for(let n=0;n<this.list.data.length;n++){if(e.active===!0&&!this.is(this.list.data[n],s))return;setTimeout(()=>this.renderListElement(t,this.list.data[n],n<this.list.data.length-1))}}renderListElement(t,e,s){t.appendChild(lr({alert:e,container:"li",hasBorder:s,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const s=[];for(let n=t.from;n<=t.to;n++)s.push(n);return!!`${s.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,s=this.getAlertFromElement(e);this.alertPage.ui.set(s),this.stackLayout.ui.set(ht.alertPage,null,!0)}};G(Ie,"register",()=>{customElements.define("alert-lists-page",Ie)});let pe=Ie;function lr({alert:L,container:t,hasBorder:e=!0,hasRipple:s=!0,onClick:n=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=U`
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
`)),r.onclick=n,s&&(Rt(r),r.style.cursor="pointer",r.role="button"),r}function Br(L){return`AlarmListen_${L.title}.json`}function ur(L){return`${L.title}`}const Ne=class Ne extends ue{constructor(){super(),this.events=new pt,this.render()}render(){this.innerHTML=U`
      <ui-flex-grid-row style="justify-content: flex-end;" gap="0.25rem">
        <ui-flex-grid-item flex="0">
          <ui-button
            name="new-entry"
            style="text-wrap: nowrap;"
            variant="full"
            color="primary"
          >
            Neuer Eintrag
          </ui-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)})}};G(Ne,"register",()=>{customElements.define("metal-sheet-actions",Ne)});let Ei=Ne;function Yi(L){return`BlechListen_${L.format}_${L.toolID}.json`}function gt(L){return`${L.format}:${L.toolID}`}const $e=class $e extends Ct{constructor(t){super(),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=U`
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
    `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){switch(super.connectedCallback(),this.mode){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}}set(t,e,s=-1){const n=this.querySelector('[name="format"] ui-input');n.ui.value=t;const r=this.querySelector('[name="toolID"] ui-input');r.ui.value=e,this.querySelector('[name="press"] ui-select').ui.options().forEach(o=>{o.ui.selected=parseInt(o.ui.value)===s}),this.originFormat=t,this.originToolID=e}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=this.getData();s!==null&&(this.ui.events.dispatch("submit",s),this.ui.close())}),this.appendChild(t)}getData(){var h;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const s=this.querySelector('[name="toolID"] ui-input');t.toolID=s.ui.value;const n=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((h=n.ui.selected())==null?void 0:h.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const r=gt({format:this.originFormat,toolID:this.originToolID}),a=gt(t),o=this.uiStore.ui.get("metalSheetLists").find(g=>this.mode==="edit"&&r===a?!1:gt(g)===a);return o?(e.ui.invalid=o.format===t.format&&o.toolID!==t.toolID,s.ui.invalid=o.toolID===t.toolID,null):t}};G($e,"register",()=>{customElements.define("metal-sheet-create-dialog",$e)});let re=$e;const Ue=class Ue extends Ct{constructor(){super(),this.render()}render(){const t=new At;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Eintrag bearbeiten"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=U`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="destructive">Delete</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const a=r.querySelector("ui-input");s.push(a.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};G(Ue,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",Ue)});let me=Ue;const Ze=class Ze extends Ct{constructor(){super(),this.render()}render(){const t=new At;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Neuer Eintrag"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=U`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=U`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const a=r.querySelector("ui-input");s.push(a.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};G(Ze,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",Ze)});let ge=Ze;const Ve=class Ve extends Et{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const s=gt(t);return e=[...e.filter(n=>gt(n)!==s),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(s=>gt(s)!==t),e))}},this.render()}render(){this.innerHTML=U`
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
    `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.list)return;for(const n of this.list.data.table.header){const r=document.createElement("th");r.style.textAlign="center",r.innerHTML=n,t.appendChild(r)}let s=null;for(let n=0;n<this.list.data.table.data.length;n++){const r=document.createElement("tr");r.style.cursor="pointer",r.role="button",r.onclick=()=>this.createModifyEntryDialog(n),e.appendChild(r),Sr(r,{onDragEnd:(a,o)=>{if(s!==null){if(s<o){let h=this.list.data.table.data;h=[...h.slice(0,s),...h.slice(s+1,o+1),h[s],...h.slice(o+1)],this.list.data.table.data=h,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(s>o){let h=this.list.data.table.data;h=[...h.slice(0,o),h[s],...h.slice(o,s),...h.slice(s+1)],this.list.data.table.data=h,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(h=>{h.style.background="inherit",h.style.color="inherit"}),s=null}},onDragging:a=>{s!==null&&[...e.children].forEach((o,h)=>{if(h!==a){o.style.background="inherit",o.style.color="inherit";return}o.style.background="var(--ui-primary-bgColor)",o.style.color="var(--ui-primary-color)"})},onDragStart:a=>{s=a}});for(const a of this.list.data.table.data[n]){const o=document.createElement("td");o.style.textAlign="center",o.innerHTML=a,r.appendChild(o)}}}connectedCallback(){super.connectedCallback(),this.ui.name=ht.metalSheetListsPage,this.uiStore.ui.set("edit",{onClick:async()=>{const t=new re("edit");t.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(gt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}createMetalSheetActions(){this.querySelector("metal-sheet-actions").events.on("new-entry",()=>this.createNewEntryDialog())}createModifyEntryDialog(t){const e=new me;e.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",s=>{this.list.data.table.data[t]=s,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new ge;t.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};G(Ve,"register",()=>{customElements.define("metal-sheet-lists-page",Ve)});let be=Ve;function cr({product:L,events:t=null,ripple:e=!0}){const s=document.createElement("div");s.classList.add("vis-item"),s.role="button",s.setAttribute("data-value",L.lotto+" "+L.name+" "+L.format+" "+L.stamp+" "+L.thickness+"mm"),s.style.display="block",s.style.position="relative",s.style.overflow="hidden",s.style.borderTop="1px solid var(--ui-borderColor)",s.style.borderBottom="1px solid var(--ui-borderColor)",s.style.margin="var(--ui-spacing) 0",s.style.cursor="pointer",s.innerHTML=U`
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
          <div name="format" style="padding: var(--ui-spacing);" align="right">
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
  `;let n;return e&&(n=Rt(s,{useClick:!0})),t!==null&&(s.onclick=()=>{t.dispatch("click",L)}),{destroy:()=>{n&&n()},element:s}}function Xi(L){return`Vis_${L.date}.json`}function hr(L){return`${L.title}`}const We=class We extends Et{constructor(){super(),this.ui={...this.ui,root:this,set(t){this.root.replaceChild(cr({product:t,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}},this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=U`
      <style>
        :host {
          padding-top: var(--ui-app-bar-height);
        }
      </style>
    `}render(){this.innerHTML=U`
      <span class="placeholder"></span>
      <div class="content"></div>
    `}connectedCallback(){super.connectedCallback(),this.ui.name=ht.productPage}};G(We,"register",()=>{customElements.define("product-page",We)});let ve=We;const Ge=class Ge extends Et{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,this.root.setAppBarTitle(),t===null){this.root.searchBar.ui.input().ui.storagekey=null;return}this.root.searchBar.ui.input().ui.storagekey=hr(t)}},this.render()}render(){this.innerHTML=U`
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
    `,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.ui.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))})}connectedCallback(){super.connectedCallback(),this.ui.name=ht.visPage,this.stackLayout.ui.register("product",()=>new ve),this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("product")}async update(t=null){console.debug("[VisPage.update]",{regex:t});const e=new ie;e.ui.nobg=!0;const s=this.querySelector(".container");s.appendChild(e);const n=this.querySelector(".list");for(;n.firstChild;)n.removeChild(n.firstChild);if(!this.list)return;const r=new pt;r.on("click",a=>{this.stackLayout.ui.set(ht.productPage,o=>{o.ui.set(a)},!0)});for(let a=0;a<this.list.data.length;a++)(async(o,h)=>{setTimeout(async()=>{const g=cr({product:h,events:r}).element;this.checkItem(g,t),(o>this.list.data.length-1||g.style.display!=="none")&&e.parentElement&&s.removeChild(e),n.appendChild(g)})})(a,this.list.data[a])}async search(t){const e=this.getRegExp(t),s=this.querySelector(".list");console.debug("[VisPage.search]",e);for(const n of[...s.children])this.checkItem(n,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};G(Ge,"register",()=>{customElements.define("vis-page",Ge)});let ye=Ge;const Ke=class Ke extends Et{constructor(){super(),this.render()}render(){this.innerHTML=U``}connectedCallback(){this.ui.name=ht.visDataPage}};G(Ke,"register",()=>{customElements.define("vis-data-page",Ke)});let we=Ke;const dr="v0.0.31.dev";function Or(L){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const s of e.currentTarget.files){const n=new FileReader;n.onload=()=>{if(typeof n.result=="string")try{L(n.result,s)}catch(r){alert(`Parse data failed: ${r}`)}},n.onerror=()=>{alert(`Read file "${s.name}" failed!`)},n.readAsText(s)}},t.click()}function Hr(L){const t=[],e=L.map(s=>`${s.title}`).sort();for(const s of e)t.push(L.find(n=>`${n.title}`===s));return t}function Mr(L){let t=[];const e=L.map(s=>gt(s)).sort();for(const s of e)t.push(L.find(n=>gt(n)===s));return t}const Je=class Je extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.onPull=null,this.onPush=null,this.ui={...this.ui,root:this,set(t,e){const s=this.root.querySelector("ui-secondary"),n=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",s.innerHTML=t,n.innerHTML=U`Revision: ${e}`):(this.root.style.display="none",s.innerHTML=U`&nbsp;`,n.innerHTML=U`Revision: -`),this.root.pullButton.onclick=()=>{this.root.onPull&&this.root.onPull(t,e)},this.root.pushButton.onclick=()=>{this.root.onPush&&this.root.onPush(t,e)}},setPullHandler(t){this.root.onPull=t},setPushHandler(t){this.root.onPush=t}},this.render()}render(){this.innerHTML=U`
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
    `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}};G(Je,"register",()=>{customElements.define("drawer-gist-item",Je)});let Ri=Je;const Dr=U`
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
`;class Fi{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const s=await e.json();this.data={revision:s.history.length,files:{},owner:{login:s.owner.login}};for(const[n,r]of Object.entries(s.files))this.data.files[n]={filename:r.filename,content:JSON.parse(r.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function jr(L,t,{beforeUpdate:e=null,update:s,updateRevision:n}){const a=await new Fi(L).get();let o=!1;a.revision>t?o=confirm(`Upgrade zu revision "${a.revision}"`):a.revision<t?o=confirm(`Downgrade auf revision "${a.revision}"`):o=confirm(`Already up to date! Reload? (revision: ${a.revision})`),o&&(typeof e=="function"&&await e(),Object.values(a.files).forEach(h=>s(h.content)),n(a.revision))}async function Pr(L,t,e,{getFileName:s,updateRevision:n}){const r=new de;r.ui.events.on("close",()=>{document.body.removeChild(r)}),r.ui.events.on("submit",async a=>{if(!a)return;const o=new Fi(L,a),h=await o.get();if(h.revision>t){alert(`Gist revision is newer then the current revision (${h.revision})`);return}const g=Object.values(h.files).map(b=>JSON.stringify(b.content)).sort(),w=Object.values(e).map(b=>JSON.stringify(b)).sort();if(JSON.stringify(g)===JSON.stringify(w)){alert("Nope, no patching needed... already up to date...");return}const p={};e.forEach(b=>{p[s(b)]={content:JSON.stringify(b)}});for(const b of Object.keys(h.files))Object.hasOwn(p,b)||(p[b]=null);try{console.debug(await o.patch(p))}catch(b){console.error(b);return}n(t+1)}),document.body.appendChild(r),r.ui.open(!0)}const Xt=class Xt extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.ui={...this.ui,root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=U`
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
            ${Dr}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,s){switch(t){case"disabled":this.setDisabled(s);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new ce(this.ui.title);t.ui.events.on("submit",async e=>{if(this.onValidate===null)throw new Error("onValidate callback missing");if(this.onUpdate===null)throw new Error("onUpdate callback missing");if(!e){Or(async r=>{let a=null;try{a=await this.onValidate(r,null)}catch(o){alert(`Validation failed: ${o}`);return}a!==null&&await this.onUpdate(a)});return}if(this.ui.storegistkey===null)throw new Error("gist-key missing");const s=new Fi(e);let n;try{n=await s.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storegistkey}`]={id:e,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.onValidate(n.files[r].content,s.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const r of Object.values(n.files))await this.onUpdate(r.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};G(Xt,"register",()=>{customElements.define("drawer-import-button",Xt)}),G(Xt,"observedAttributes",["disabled"]);let Li=Xt;const Ye=class Ye extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=U`
      <ui-button variant="full" color="secondary">Neu</ui-button>
    `,this.querySelector("ui-button").ui.events.on("click",()=>this.onClick())}onClick(){const t=new re("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",s=>(s=[...s,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],s))}),document.body.appendChild(t),t.ui.open(!0)}};G(Ye,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",Ye)});let Ti=Ye;const Xe=class Xe extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};G(Xe,"register",()=>{customElements.define("drawer-revision",Xe)});let zi=Xe;const ci=U`
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
`,Qe=class Qe extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title)}},this.render()}render(){this.innerHTML=U`
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
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t){const e=document.createElement("span");e.innerHTML=U` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};G(Qe,"register",()=>{customElements.define("pg-drawer-item-alert-list",Qe)});let ke=Qe;const ti=class ti extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){var s;this.root.data=t;let e=-1;typeof((s=t.data)==null?void 0:s.press)=="number"&&(e=t.data.press),this.root.setText(t.format,t.toolID,e)}},this.render()}render(){this.innerHTML=U`
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
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e,s){const n=document.createElement("span");n.innerHTML=U`
      <ui-primary>
        <span>${t}</span>
        <span style="font-size: 0.85em;">
          ${s>-1?"[P"+s+"]":""}
        </span>
      </ui-primary>
      <br />
    `,n.innerHTML+=U`
      <ui-secondary>
        <span>${e}</span>
      </ui-secondary>
    `,this.querySelector("ui-button").appendChild(n)}};G(ti,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",ti)});let _e=ti;const ei=class ei extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,t.data.length)}},this.render()}render(){this.innerHTML=U`
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
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e){const s=document.createElement("span");s.innerHTML=U` <ui-primary>${t}</ui-primary><br /> `,s.innerHTML+=U`
      <ui-secondary>${e} Einträge</ui-secondary>
    `,this.querySelector("ui-button").appendChild(s)}};G(ei,"register",()=>{customElements.define("pg-drawer-item-vis",ei)});let xe=ei;const ii=class ii extends kt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,null)}},this.render()}render(){this.innerHTML=U`
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
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e=null){const s=document.createElement("span");s.innerHTML=U` <ui-primary>${t}</ui-primary> `,e!==null&&(s.innerHTML+=U`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(s)}};G(ii,"register",()=>{customElements.define("pg-drawer-item-vis-data",ii)});let Se=ii;const Qi="Alarm Listen",qr=2,tr="alert-lists",Dt="alertLists",ri=class ri extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=U`
      <drawer-import-button
        storegistkey="${tr}"
        title="${Qi}"
      ></drawer-import-button>

      <drawer-gist-item></drawer-gist-item>
    `,this.style.position="relative";const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Dt,[])})}connectedCallback(){super.connectedCallback(),this.ui.title=Qi,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Dt,this.storeAlertListsHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){const e=s=>new Error(`invalid data for alert:
${JSON.stringify(s,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let s=0;s<t.data.length;s++){const n=t.data[s];if(typeof n.from!="number"||typeof n.to!="number"||typeof n.alert!="string"||!Array.isArray(n.desc)||(typeof n.desc=="string"&&(n.desc=n.desc.split(`
`)),n.desc.filter(r=>typeof r!="string").length))throw e(n)}return t}async update(t){console.debug("[PGDrawerAlertLists.update]",{data:t}),Ni(this.uiStore,t,{storeDataKey:Dt,getKey:ur})}async storeGistHandler(t){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),Ii(this.querySelector("drawer-gist-item"),t,{storeGistKey:tr,storeDataKey:Dt,getFileName:Br,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(t){if(!t)return;const e=[...this.children].slice(qr);for(;e.length>0;)this.removeChild(e.pop());for(const s of Hr(t)){const n=new ke;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.alertListsPage,a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.title} - ${s.date}`)&&this.uiStore.ui.update(Dt,r=>r.filter(a=>a.title!==s.title))})}}};G(ri,"register",()=>{customElements.define("pg-drawer-alert-lists",ri)});let Bi=ri;var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fr(L){return L&&L.__esModule&&Object.prototype.hasOwnProperty.call(L,"default")?L.default:L}var pr={exports:{}};(function(L,t){(function(e,s){s()})(St,function(){function e(g,w){return typeof w>"u"?w={autoBom:!1}:typeof w!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),w={autoBom:!w}),w.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function s(g,w,p){var b=new XMLHttpRequest;b.open("GET",g),b.responseType="blob",b.onload=function(){h(b.response,w,p)},b.onerror=function(){console.error("could not download file")},b.send()}function n(g){var w=new XMLHttpRequest;w.open("HEAD",g,!1);try{w.send()}catch{}return 200<=w.status&&299>=w.status}function r(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var w=document.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(w)}}var a=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof St=="object"&&St.global===St?St:void 0,o=a.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),h=a.saveAs||(typeof window!="object"||window!==a?function(){}:"download"in HTMLAnchorElement.prototype&&!o?function(g,w,p){var b=a.URL||a.webkitURL,u=document.createElement("a");w=w||g.name||"download",u.download=w,u.rel="noopener",typeof g=="string"?(u.href=g,u.origin===location.origin?r(u):n(u.href)?s(g,w,p):r(u,u.target="_blank")):(u.href=b.createObjectURL(g),setTimeout(function(){b.revokeObjectURL(u.href)},4e4),setTimeout(function(){r(u)},0))}:"msSaveOrOpenBlob"in navigator?function(g,w,p){if(w=w||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(e(g,p),w);else if(n(g))s(g,w,p);else{var b=document.createElement("a");b.href=g,b.target="_blank",setTimeout(function(){r(b)})}}:function(g,w,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof g=="string")return s(g,w,p);var u=g.type==="application/octet-stream",k=/constructor/i.test(a.HTMLElement)||a.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||u&&k||o)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var x=m.result;x=c?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=x:location=x,b=null},m.readAsDataURL(g)}else{var d=a.URL||a.webkitURL,y=d.createObjectURL(g);b?b.location=y:location.href=y,b=null,setTimeout(function(){d.revokeObjectURL(y)},4e4)}});a.saveAs=h.saveAs=h,L.exports=h})})(pr);var Fr=pr.exports;const mr=fr(Fr);function oe(L){throw new Error('Could not dynamically require "'+L+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var gr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(L,t){(function(e){L.exports=e()})(function(){return function e(s,n,r){function a(g,w){if(!n[g]){if(!s[g]){var p=typeof oe=="function"&&oe;if(!w&&p)return p(g,!0);if(o)return o(g,!0);var b=new Error("Cannot find module '"+g+"'");throw b.code="MODULE_NOT_FOUND",b}var u=n[g]={exports:{}};s[g][0].call(u.exports,function(k){var c=s[g][1][k];return a(c||k)},u,u.exports,e,s,n,r)}return n[g].exports}for(var o=typeof oe=="function"&&oe,h=0;h<r.length;h++)a(r[h]);return a}({1:[function(e,s,n){var r=e("./utils"),a=e("./support"),o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(h){for(var g,w,p,b,u,k,c,m=[],d=0,y=h.length,x=y,A=r.getTypeOf(h)!=="string";d<h.length;)x=y-d,p=A?(g=h[d++],w=d<y?h[d++]:0,d<y?h[d++]:0):(g=h.charCodeAt(d++),w=d<y?h.charCodeAt(d++):0,d<y?h.charCodeAt(d++):0),b=g>>2,u=(3&g)<<4|w>>4,k=1<x?(15&w)<<2|p>>6:64,c=2<x?63&p:64,m.push(o.charAt(b)+o.charAt(u)+o.charAt(k)+o.charAt(c));return m.join("")},n.decode=function(h){var g,w,p,b,u,k,c=0,m=0,d="data:";if(h.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var y,x=3*(h=h.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(h.charAt(h.length-1)===o.charAt(64)&&x--,h.charAt(h.length-2)===o.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(y=a.uint8array?new Uint8Array(0|x):new Array(0|x);c<h.length;)g=o.indexOf(h.charAt(c++))<<2|(b=o.indexOf(h.charAt(c++)))>>4,w=(15&b)<<4|(u=o.indexOf(h.charAt(c++)))>>2,p=(3&u)<<6|(k=o.indexOf(h.charAt(c++))),y[m++]=g,u!==64&&(y[m++]=w),k!==64&&(y[m++]=p);return y}},{"./support":30,"./utils":32}],2:[function(e,s,n){var r=e("./external"),a=e("./stream/DataWorker"),o=e("./stream/Crc32Probe"),h=e("./stream/DataLengthProbe");function g(w,p,b,u,k){this.compressedSize=w,this.uncompressedSize=p,this.crc32=b,this.compression=u,this.compressedContent=k}g.prototype={getContentWorker:function(){var w=new a(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new h("data_length")),p=this;return w.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new a(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(w,p,b){return w.pipe(new o).pipe(new h("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new h("compressedSize")).withStreamInfo("compression",p)},s.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,n){var r=e("./utils"),a=function(){for(var o,h=[],g=0;g<256;g++){o=g;for(var w=0;w<8;w++)o=1&o?3988292384^o>>>1:o>>>1;h[g]=o}return h}();s.exports=function(o,h){return o!==void 0&&o.length?r.getTypeOf(o)!=="string"?function(g,w,p,b){var u=a,k=b+p;g^=-1;for(var c=b;c<k;c++)g=g>>>8^u[255&(g^w[c])];return-1^g}(0|h,o,o.length,0):function(g,w,p,b){var u=a,k=b+p;g^=-1;for(var c=b;c<k;c++)g=g>>>8^u[255&(g^w.charCodeAt(c))];return-1^g}(0|h,o,o.length,0):0}},{"./utils":32}],5:[function(e,s,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,s,n){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",a=e("pako"),o=e("./utils"),h=e("./stream/GenericWorker"),g=r?"uint8array":"array";function w(p,b){h.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}n.magic="\b\0",o.inherits(w,h),w.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(o.transformTo(g,p.data),!1)},w.prototype.flush=function(){h.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){h.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new a[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},n.compressWorker=function(p){return new w("Deflate",p)},n.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,n){function r(u,k){var c,m="";for(c=0;c<k;c++)m+=String.fromCharCode(255&u),u>>>=8;return m}function a(u,k,c,m,d,y){var x,A,C=u.file,j=u.compression,O=y!==g.utf8encode,I=o.transformTo("string",y(C.name)),B=o.transformTo("string",g.utf8encode(C.name)),Z=C.comment,Q=o.transformTo("string",y(Z)),_=o.transformTo("string",g.utf8encode(Z)),H=B.length!==C.name.length,l=_.length!==Z.length,D="",et="",F="",it=C.dir,N=C.date,tt={crc32:0,compressedSize:0,uncompressedSize:0};k&&!c||(tt.crc32=u.crc32,tt.compressedSize=u.compressedSize,tt.uncompressedSize=u.uncompressedSize);var T=0;k&&(T|=8),O||!H&&!l||(T|=2048);var R=0,X=0;it&&(R|=16),d==="UNIX"?(X=798,R|=function(W,at){var ft=W;return W||(ft=at?16893:33204),(65535&ft)<<16}(C.unixPermissions,it)):(X=20,R|=function(W){return 63&(W||0)}(C.dosPermissions)),x=N.getUTCHours(),x<<=6,x|=N.getUTCMinutes(),x<<=5,x|=N.getUTCSeconds()/2,A=N.getUTCFullYear()-1980,A<<=4,A|=N.getUTCMonth()+1,A<<=5,A|=N.getUTCDate(),H&&(et=r(1,1)+r(w(I),4)+B,D+="up"+r(et.length,2)+et),l&&(F=r(1,1)+r(w(Q),4)+_,D+="uc"+r(F.length,2)+F);var K="";return K+=`
\0`,K+=r(T,2),K+=j.magic,K+=r(x,2),K+=r(A,2),K+=r(tt.crc32,4),K+=r(tt.compressedSize,4),K+=r(tt.uncompressedSize,4),K+=r(I.length,2),K+=r(D.length,2),{fileRecord:p.LOCAL_FILE_HEADER+K+I+D,dirRecord:p.CENTRAL_FILE_HEADER+r(X,2)+K+r(Q.length,2)+"\0\0\0\0"+r(R,4)+r(m,4)+I+D+Q}}var o=e("../utils"),h=e("../stream/GenericWorker"),g=e("../utf8"),w=e("../crc32"),p=e("../signature");function b(u,k,c,m){h.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=c,this.encodeFileName=m,this.streamFiles=u,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}o.inherits(b,h),b.prototype.push=function(u){var k=u.meta.percent||0,c=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(u):(this.bytesWritten+=u.data.length,h.prototype.push.call(this,{data:u.data,meta:{currentFile:this.currentFile,percent:c?(k+100*(c-m-1))/c:100}}))},b.prototype.openedSource=function(u){this.currentSourceOffset=this.bytesWritten,this.currentFile=u.file.name;var k=this.streamFiles&&!u.file.dir;if(k){var c=a(u,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(u){this.accumulate=!1;var k=this.streamFiles&&!u.file.dir,c=a(u,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),k)this.push({data:function(m){return p.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(u),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var u=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var c=this.bytesWritten-u,m=function(d,y,x,A,C){var j=o.transformTo("string",C(A));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(d,2)+r(d,2)+r(y,4)+r(x,4)+r(j.length,2)+j}(this.dirRecords.length,c,u,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(u){this._sources.push(u);var k=this;return u.on("data",function(c){k.processChunk(c)}),u.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),u.on("error",function(c){k.error(c)}),this},b.prototype.resume=function(){return!!h.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(u){var k=this._sources;if(!h.prototype.error.call(this,u))return!1;for(var c=0;c<k.length;c++)try{k[c].error(u)}catch{}return!0},b.prototype.lock=function(){h.prototype.lock.call(this);for(var u=this._sources,k=0;k<u.length;k++)u[k].lock()},s.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,n){var r=e("../compressions"),a=e("./ZipFileWorker");n.generateWorker=function(o,h,g){var w=new a(h.streamFiles,g,h.platform,h.encodeFileName),p=0;try{o.forEach(function(b,u){p++;var k=function(y,x){var A=y||x,C=r[A];if(!C)throw new Error(A+" is not a valid compression method !");return C}(u.options.compression,h.compression),c=u.options.compressionOptions||h.compressionOptions||{},m=u.dir,d=u.date;u._compressWorker(k,c).withStreamInfo("file",{name:b,dir:m,date:d,comment:u.comment||"",unixPermissions:u.unixPermissions,dosPermissions:u.dosPermissions}).pipe(w)}),w.entriesCount=p}catch(b){w.error(b)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var a=new r;for(var o in this)typeof this[o]!="function"&&(a[o]=this[o]);return a}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(a,o){return new r().loadAsync(a,o)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,n){var r=e("./utils"),a=e("./external"),o=e("./utf8"),h=e("./zipEntries"),g=e("./stream/Crc32Probe"),w=e("./nodejsUtils");function p(b){return new a.Promise(function(u,k){var c=b.decompressed.getContentWorker().pipe(new g);c.on("error",function(m){k(m)}).on("end",function(){c.streamInfo.crc32!==b.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):u()}).resume()})}s.exports=function(b,u){var k=this;return u=r.extend(u||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:o.utf8decode}),w.isNode&&w.isStream(b)?a.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",b,!0,u.optimizedBinaryString,u.base64).then(function(c){var m=new h(u);return m.load(c),m}).then(function(c){var m=[a.Promise.resolve(c)],d=c.files;if(u.checkCRC32)for(var y=0;y<d.length;y++)m.push(p(d[y]));return a.Promise.all(m)}).then(function(c){for(var m=c.shift(),d=m.files,y=0;y<d.length;y++){var x=d[y],A=x.fileNameStr,C=r.resolve(x.fileNameStr);k.file(C,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:u.createFolders}),x.dir||(k.file(C).unsafeOriginalName=A)}return m.zipComment.length&&(k.comment=m.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,n){var r=e("../utils"),a=e("../stream/GenericWorker");function o(h,g){a.call(this,"Nodejs stream input adapter for "+h),this._upstreamEnded=!1,this._bindStream(g)}r.inherits(o,a),o.prototype._bindStream=function(h){var g=this;(this._stream=h).pause(),h.on("data",function(w){g.push({data:w,meta:{percent:0}})}).on("error",function(w){g.isPaused?this.generatedError=w:g.error(w)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},o.prototype.pause=function(){return!!a.prototype.pause.call(this)&&(this._stream.pause(),!0)},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=o},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,n){var r=e("readable-stream").Readable;function a(o,h,g){r.call(this,h),this._helper=o;var w=this;o.on("data",function(p,b){w.push(p)||w._helper.pause(),g&&g(b)}).on("error",function(p){w.emit("error",p)}).on("end",function(){w.push(null)})}e("../utils").inherits(a,r),a.prototype._read=function(){this._helper.resume()},s.exports=a},{"../utils":32,"readable-stream":16}],14:[function(e,s,n){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,a){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,a);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,a)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var a=new Buffer(r);return a.fill(0),a},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,n){function r(C,j,O){var I,B=o.getTypeOf(j),Z=o.extend(O||{},w);Z.date=Z.date||new Date,Z.compression!==null&&(Z.compression=Z.compression.toUpperCase()),typeof Z.unixPermissions=="string"&&(Z.unixPermissions=parseInt(Z.unixPermissions,8)),Z.unixPermissions&&16384&Z.unixPermissions&&(Z.dir=!0),Z.dosPermissions&&16&Z.dosPermissions&&(Z.dir=!0),Z.dir&&(C=d(C)),Z.createFolders&&(I=m(C))&&y.call(this,I,!0);var Q=B==="string"&&Z.binary===!1&&Z.base64===!1;O&&O.binary!==void 0||(Z.binary=!Q),(j instanceof p&&j.uncompressedSize===0||Z.dir||!j||j.length===0)&&(Z.base64=!1,Z.binary=!0,j="",Z.compression="STORE",B="string");var _=null;_=j instanceof p||j instanceof h?j:k.isNode&&k.isStream(j)?new c(C,j):o.prepareContent(C,j,Z.binary,Z.optimizedBinaryString,Z.base64);var H=new b(C,_,Z);this.files[C]=H}var a=e("./utf8"),o=e("./utils"),h=e("./stream/GenericWorker"),g=e("./stream/StreamHelper"),w=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),u=e("./generate"),k=e("./nodejsUtils"),c=e("./nodejs/NodejsStreamInputAdapter"),m=function(C){C.slice(-1)==="/"&&(C=C.substring(0,C.length-1));var j=C.lastIndexOf("/");return 0<j?C.substring(0,j):""},d=function(C){return C.slice(-1)!=="/"&&(C+="/"),C},y=function(C,j){return j=j!==void 0?j:w.createFolders,C=d(C),this.files[C]||r.call(this,C,null,{dir:!0,createFolders:j}),this.files[C]};function x(C){return Object.prototype.toString.call(C)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(C){var j,O,I;for(j in this.files)I=this.files[j],(O=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&C(O,I)},filter:function(C){var j=[];return this.forEach(function(O,I){C(O,I)&&j.push(I)}),j},file:function(C,j,O){if(arguments.length!==1)return C=this.root+C,r.call(this,C,j,O),this;if(x(C)){var I=C;return this.filter(function(Z,Q){return!Q.dir&&I.test(Z)})}var B=this.files[this.root+C];return B&&!B.dir?B:null},folder:function(C){if(!C)return this;if(x(C))return this.filter(function(B,Z){return Z.dir&&C.test(B)});var j=this.root+C,O=y.call(this,j),I=this.clone();return I.root=O.name,I},remove:function(C){C=this.root+C;var j=this.files[C];if(j||(C.slice(-1)!=="/"&&(C+="/"),j=this.files[C]),j&&!j.dir)delete this.files[C];else for(var O=this.filter(function(B,Z){return Z.name.slice(0,C.length)===C}),I=0;I<O.length;I++)delete this.files[O[I].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(C){var j,O={};try{if((O=o.extend(C||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:a.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");o.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var I=O.comment||this.comment||"";j=u.generateWorker(this,O,I)}catch(B){(j=new h("error")).error(B)}return new g(j,O.type||"string",O.mimeType)},generateAsync:function(C,j){return this.generateInternalStream(C).accumulate(j)},generateNodeStream:function(C,j){return(C=C||{}).type||(C.type="nodebuffer"),this.generateInternalStream(C).toNodejsStream(j)}};s.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,n){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,n){var r=e("./DataReader");function a(o){r.call(this,o);for(var h=0;h<this.data.length;h++)o[h]=255&o[h]}e("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data[this.zero+o]},a.prototype.lastIndexOfSignature=function(o){for(var h=o.charCodeAt(0),g=o.charCodeAt(1),w=o.charCodeAt(2),p=o.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===h&&this.data[b+1]===g&&this.data[b+2]===w&&this.data[b+3]===p)return b-this.zero;return-1},a.prototype.readAndCheckSignature=function(o){var h=o.charCodeAt(0),g=o.charCodeAt(1),w=o.charCodeAt(2),p=o.charCodeAt(3),b=this.readData(4);return h===b[0]&&g===b[1]&&w===b[2]&&p===b[3]},a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return[];var h=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,h},s.exports=a},{"../utils":32,"./DataReader":18}],18:[function(e,s,n){var r=e("../utils");function a(o){this.data=o,this.length=o.length,this.index=0,this.zero=0}a.prototype={checkOffset:function(o){this.checkIndex(this.index+o)},checkIndex:function(o){if(this.length<this.zero+o||o<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+o+"). Corrupted zip ?")},setIndex:function(o){this.checkIndex(o),this.index=o},skip:function(o){this.setIndex(this.index+o)},byteAt:function(){},readInt:function(o){var h,g=0;for(this.checkOffset(o),h=this.index+o-1;h>=this.index;h--)g=(g<<8)+this.byteAt(h);return this.index+=o,g},readString:function(o){return r.transformTo("string",this.readData(o))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var o=this.readInt(4);return new Date(Date.UTC(1980+(o>>25&127),(o>>21&15)-1,o>>16&31,o>>11&31,o>>5&63,(31&o)<<1))}},s.exports=a},{"../utils":32}],19:[function(e,s,n){var r=e("./Uint8ArrayReader");function a(o){r.call(this,o)}e("../utils").inherits(a,r),a.prototype.readData=function(o){this.checkOffset(o);var h=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,h},s.exports=a},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,n){var r=e("./DataReader");function a(o){r.call(this,o)}e("../utils").inherits(a,r),a.prototype.byteAt=function(o){return this.data.charCodeAt(this.zero+o)},a.prototype.lastIndexOfSignature=function(o){return this.data.lastIndexOf(o)-this.zero},a.prototype.readAndCheckSignature=function(o){return o===this.readData(4)},a.prototype.readData=function(o){this.checkOffset(o);var h=this.data.slice(this.zero+this.index,this.zero+this.index+o);return this.index+=o,h},s.exports=a},{"../utils":32,"./DataReader":18}],21:[function(e,s,n){var r=e("./ArrayReader");function a(o){r.call(this,o)}e("../utils").inherits(a,r),a.prototype.readData=function(o){if(this.checkOffset(o),o===0)return new Uint8Array(0);var h=this.data.subarray(this.zero+this.index,this.zero+this.index+o);return this.index+=o,h},s.exports=a},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,n){var r=e("../utils"),a=e("../support"),o=e("./ArrayReader"),h=e("./StringReader"),g=e("./NodeBufferReader"),w=e("./Uint8ArrayReader");s.exports=function(p){var b=r.getTypeOf(p);return r.checkSupport(b),b!=="string"||a.uint8array?b==="nodebuffer"?new g(p):a.uint8array?new w(r.transformTo("uint8array",p)):new o(r.transformTo("array",p)):new h(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,n){var r=e("./GenericWorker"),a=e("../utils");function o(h){r.call(this,"ConvertWorker to "+h),this.destType=h}a.inherits(o,r),o.prototype.processChunk=function(h){this.push({data:a.transformTo(this.destType,h.data),meta:h.meta})},s.exports=o},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,n){var r=e("./GenericWorker"),a=e("../crc32");function o(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(o,r),o.prototype.processChunk=function(h){this.streamInfo.crc32=a(h.data,this.streamInfo.crc32||0),this.push(h)},s.exports=o},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,n){var r=e("../utils"),a=e("./GenericWorker");function o(h){a.call(this,"DataLengthProbe for "+h),this.propName=h,this.withStreamInfo(h,0)}r.inherits(o,a),o.prototype.processChunk=function(h){if(h){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+h.data.length}a.prototype.processChunk.call(this,h)},s.exports=o},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,n){var r=e("../utils"),a=e("./GenericWorker");function o(h){a.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,h.then(function(w){g.dataIsReady=!0,g.data=w,g.max=w&&w.length||0,g.type=r.getTypeOf(w),g.isPaused||g._tickAndRepeat()},function(w){g.error(w)})}r.inherits(o,a),o.prototype.cleanUp=function(){a.prototype.cleanUp.call(this),this.data=null},o.prototype.resume=function(){return!!a.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},o.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},o.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var h=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":h=this.data.substring(this.index,g);break;case"uint8array":h=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":h=this.data.slice(this.index,g)}return this.index=g,this.push({data:h,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=o},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,n){function r(a){this.name=a||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(a){this.emit("data",a)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(a){this.emit("error",a)}return!0},error:function(a){return!this.isFinished&&(this.isPaused?this.generatedError=a:(this.isFinished=!0,this.emit("error",a),this.previous&&this.previous.error(a),this.cleanUp()),!0)},on:function(a,o){return this._listeners[a].push(o),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(a,o){if(this._listeners[a])for(var h=0;h<this._listeners[a].length;h++)this._listeners[a][h].call(this,o)},pipe:function(a){return a.registerPrevious(this)},registerPrevious:function(a){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=a.streamInfo,this.mergeStreamInfo(),this.previous=a;var o=this;return a.on("data",function(h){o.processChunk(h)}),a.on("end",function(){o.end()}),a.on("error",function(h){o.error(h)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var a=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),a=!0),this.previous&&this.previous.resume(),!a},flush:function(){},processChunk:function(a){this.push(a)},withStreamInfo:function(a,o){return this.extraStreamInfo[a]=o,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var a in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,a)&&(this.streamInfo[a]=this.extraStreamInfo[a])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var a="Worker "+this.name;return this.previous?this.previous+" -> "+a:a}},s.exports=r},{}],29:[function(e,s,n){var r=e("../utils"),a=e("./ConvertWorker"),o=e("./GenericWorker"),h=e("../base64"),g=e("../support"),w=e("../external"),p=null;if(g.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(k,c){return new w.Promise(function(m,d){var y=[],x=k._internalType,A=k._outputType,C=k._mimeType;k.on("data",function(j,O){y.push(j),c&&c(O)}).on("error",function(j){y=[],d(j)}).on("end",function(){try{var j=function(O,I,B){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",I),B);case"base64":return h.encode(I);default:return r.transformTo(O,I)}}(A,function(O,I){var B,Z=0,Q=null,_=0;for(B=0;B<I.length;B++)_+=I[B].length;switch(O){case"string":return I.join("");case"array":return Array.prototype.concat.apply([],I);case"uint8array":for(Q=new Uint8Array(_),B=0;B<I.length;B++)Q.set(I[B],Z),Z+=I[B].length;return Q;case"nodebuffer":return Buffer.concat(I);default:throw new Error("concat : unsupported type '"+O+"'")}}(x,y),C);m(j)}catch(O){d(O)}y=[]}).resume()})}function u(k,c,m){var d=c;switch(c){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=c,this._mimeType=m,r.checkSupport(d),this._worker=k.pipe(new a(d)),k.lock()}catch(y){this._worker=new o("error"),this._worker.error(y)}}u.prototype={accumulate:function(k){return b(this,k)},on:function(k,c){var m=this;return k==="data"?this._worker.on(k,function(d){c.call(m,d.data,d.meta)}):this._worker.on(k,function(){r.delay(c,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},k)}},s.exports=u},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var a=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);a.append(r),n.blob=a.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,n){for(var r=e("./utils"),a=e("./support"),o=e("./nodejsUtils"),h=e("./stream/GenericWorker"),g=new Array(256),w=0;w<256;w++)g[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;g[254]=g[254]=1;function p(){h.call(this,"utf-8 decode"),this.leftOver=null}function b(){h.call(this,"utf-8 encode")}n.utf8encode=function(u){return a.nodebuffer?o.newBufferFrom(u,"utf-8"):function(k){var c,m,d,y,x,A=k.length,C=0;for(y=0;y<A;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<A&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),C+=m<128?1:m<2048?2:m<65536?3:4;for(c=a.uint8array?new Uint8Array(C):new Array(C),y=x=0;x<C;y++)(64512&(m=k.charCodeAt(y)))==55296&&y+1<A&&(64512&(d=k.charCodeAt(y+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),y++),m<128?c[x++]=m:(m<2048?c[x++]=192|m>>>6:(m<65536?c[x++]=224|m>>>12:(c[x++]=240|m>>>18,c[x++]=128|m>>>12&63),c[x++]=128|m>>>6&63),c[x++]=128|63&m);return c}(u)},n.utf8decode=function(u){return a.nodebuffer?r.transformTo("nodebuffer",u).toString("utf-8"):function(k){var c,m,d,y,x=k.length,A=new Array(2*x);for(c=m=0;c<x;)if((d=k[c++])<128)A[m++]=d;else if(4<(y=g[d]))A[m++]=65533,c+=y-1;else{for(d&=y===2?31:y===3?15:7;1<y&&c<x;)d=d<<6|63&k[c++],y--;1<y?A[m++]=65533:d<65536?A[m++]=d:(d-=65536,A[m++]=55296|d>>10&1023,A[m++]=56320|1023&d)}return A.length!==m&&(A.subarray?A=A.subarray(0,m):A.length=m),r.applyFromCharCode(A)}(u=r.transformTo(a.uint8array?"uint8array":"array",u))},r.inherits(p,h),p.prototype.processChunk=function(u){var k=r.transformTo(a.uint8array?"uint8array":"array",u.data);if(this.leftOver&&this.leftOver.length){if(a.uint8array){var c=k;(k=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),k.set(c,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var m=function(y,x){var A;for((x=x||y.length)>y.length&&(x=y.length),A=x-1;0<=A&&(192&y[A])==128;)A--;return A<0||A===0?x:A+g[y[A]]>x?A:x}(k),d=k;m!==k.length&&(a.uint8array?(d=k.subarray(0,m),this.leftOver=k.subarray(m,k.length)):(d=k.slice(0,m),this.leftOver=k.slice(m,k.length))),this.push({data:n.utf8decode(d),meta:u.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=p,r.inherits(b,h),b.prototype.processChunk=function(u){this.push({data:n.utf8encode(u.data),meta:u.meta})},n.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,n){var r=e("./support"),a=e("./base64"),o=e("./nodejsUtils"),h=e("./external");function g(c){return c}function w(c,m){for(var d=0;d<c.length;++d)m[d]=255&c.charCodeAt(d);return m}e("setimmediate"),n.newBlob=function(c,m){n.checkSupport("blob");try{return new Blob([c],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(c),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(c,m,d){var y=[],x=0,A=c.length;if(A<=d)return String.fromCharCode.apply(null,c);for(;x<A;)m==="array"||m==="nodebuffer"?y.push(String.fromCharCode.apply(null,c.slice(x,Math.min(x+d,A)))):y.push(String.fromCharCode.apply(null,c.subarray(x,Math.min(x+d,A)))),x+=d;return y.join("")},stringifyByChar:function(c){for(var m="",d=0;d<c.length;d++)m+=String.fromCharCode(c[d]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,o.allocBuffer(1)).length===1}catch{return!1}}()}};function b(c){var m=65536,d=n.getTypeOf(c),y=!0;if(d==="uint8array"?y=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(y=p.applyCanBeUsed.nodebuffer),y)for(;1<m;)try{return p.stringifyByChunk(c,d,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(c)}function u(c,m){for(var d=0;d<c.length;d++)m[d]=c[d];return m}n.applyFromCharCode=b;var k={};k.string={string:g,array:function(c){return w(c,new Array(c.length))},arraybuffer:function(c){return k.string.uint8array(c).buffer},uint8array:function(c){return w(c,new Uint8Array(c.length))},nodebuffer:function(c){return w(c,o.allocBuffer(c.length))}},k.array={string:b,array:g,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return o.newBufferFrom(c)}},k.arraybuffer={string:function(c){return b(new Uint8Array(c))},array:function(c){return u(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:g,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return o.newBufferFrom(new Uint8Array(c))}},k.uint8array={string:b,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:g,nodebuffer:function(c){return o.newBufferFrom(c)}},k.nodebuffer={string:b,array:function(c){return u(c,new Array(c.length))},arraybuffer:function(c){return k.nodebuffer.uint8array(c).buffer},uint8array:function(c){return u(c,new Uint8Array(c.length))},nodebuffer:g},n.transformTo=function(c,m){if(m=m||"",!c)return m;n.checkSupport(c);var d=n.getTypeOf(m);return k[d][c](m)},n.resolve=function(c){for(var m=c.split("/"),d=[],y=0;y<m.length;y++){var x=m[y];x==="."||x===""&&y!==0&&y!==m.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},n.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":r.nodebuffer&&o.isBuffer(c)?"nodebuffer":r.uint8array&&c instanceof Uint8Array?"uint8array":r.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(c){if(!r[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(c){var m,d,y="";for(d=0;d<(c||"").length;d++)y+="\\x"+((m=c.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return y},n.delay=function(c,m,d){setImmediate(function(){c.apply(d||null,m||[])})},n.inherits=function(c,m){function d(){}d.prototype=m.prototype,c.prototype=new d},n.extend=function(){var c,m,d={};for(c=0;c<arguments.length;c++)for(m in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],m)&&d[m]===void 0&&(d[m]=arguments[c][m]);return d},n.prepareContent=function(c,m,d,y,x){return h.Promise.resolve(m).then(function(A){return r.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new h.Promise(function(C,j){var O=new FileReader;O.onload=function(I){C(I.target.result)},O.onerror=function(I){j(I.target.error)},O.readAsArrayBuffer(A)}):A}).then(function(A){var C=n.getTypeOf(A);return C?(C==="arraybuffer"?A=n.transformTo("uint8array",A):C==="string"&&(x?A=a.decode(A):d&&y!==!0&&(A=function(j){return w(j,r.uint8array?new Uint8Array(j.length):new Array(j.length))}(A))),A):h.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,n){var r=e("./reader/readerFor"),a=e("./utils"),o=e("./signature"),h=e("./zipEntry"),g=e("./support");function w(p){this.files=[],this.loadOptions=p}w.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+a.pretty(b)+", expected "+a.pretty(p)+")")}},isSignature:function(p,b){var u=this.reader.index;this.reader.setIndex(p);var k=this.reader.readString(4)===b;return this.reader.setIndex(u),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=g.uint8array?"uint8array":"array",u=a.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(u)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,u,k=this.zip64EndOfCentralSize-44;0<k;)p=this.reader.readInt(2),b=this.reader.readInt(4),u=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:u}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(o.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(o.CENTRAL_FILE_HEADER);)(p=new h({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(o.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,o.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(o.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===a.MAX_VALUE_16BITS||this.diskWithCentralDirStart===a.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===a.MAX_VALUE_16BITS||this.centralDirRecords===a.MAX_VALUE_16BITS||this.centralDirSize===a.MAX_VALUE_32BITS||this.centralDirOffset===a.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,o.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(o.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var u=this.centralDirOffset+this.centralDirSize;this.zip64&&(u+=20,u+=12+this.zip64EndOfCentralSize);var k=b-u;if(0<k)this.isSignature(b,o.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(p){this.reader=r(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,n){var r=e("./reader/readerFor"),a=e("./utils"),o=e("./compressedObject"),h=e("./crc32"),g=e("./utf8"),w=e("./compressions"),p=e("./support");function b(u,k){this.options=u,this.loadOptions=k}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(u){var k,c;if(u.skip(22),this.fileNameLength=u.readInt(2),c=u.readInt(2),this.fileName=u.readData(this.fileNameLength),u.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(m){for(var d in w)if(Object.prototype.hasOwnProperty.call(w,d)&&w[d].magic===m)return w[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+a.pretty(this.compressionMethod)+" unknown (inner file : "+a.transformTo("string",this.fileName)+")");this.decompressed=new o(this.compressedSize,this.uncompressedSize,this.crc32,k,u.readData(this.compressedSize))},readCentralPart:function(u){this.versionMadeBy=u.readInt(2),u.skip(2),this.bitFlag=u.readInt(2),this.compressionMethod=u.readString(2),this.date=u.readDate(),this.crc32=u.readInt(4),this.compressedSize=u.readInt(4),this.uncompressedSize=u.readInt(4);var k=u.readInt(2);if(this.extraFieldsLength=u.readInt(2),this.fileCommentLength=u.readInt(2),this.diskNumberStart=u.readInt(2),this.internalFileAttributes=u.readInt(2),this.externalFileAttributes=u.readInt(4),this.localHeaderOffset=u.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");u.skip(k),this.readExtraFields(u),this.parseZIP64ExtraField(u),this.fileComment=u.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var u=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),u==0&&(this.dosPermissions=63&this.externalFileAttributes),u==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var u=r(this.extraFields[1].value);this.uncompressedSize===a.MAX_VALUE_32BITS&&(this.uncompressedSize=u.readInt(8)),this.compressedSize===a.MAX_VALUE_32BITS&&(this.compressedSize=u.readInt(8)),this.localHeaderOffset===a.MAX_VALUE_32BITS&&(this.localHeaderOffset=u.readInt(8)),this.diskNumberStart===a.MAX_VALUE_32BITS&&(this.diskNumberStart=u.readInt(4))}},readExtraFields:function(u){var k,c,m,d=u.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});u.index+4<d;)k=u.readInt(2),c=u.readInt(2),m=u.readData(c),this.extraFields[k]={id:k,length:c,value:m};u.setIndex(d)},handleUTF8:function(){var u=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var c=a.transformTo(u,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=a.transformTo(u,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var u=this.extraFields[28789];if(u){var k=r(u.value);return k.readInt(1)!==1||h(this.fileName)!==k.readInt(4)?null:g.utf8decode(k.readData(u.length-5))}return null},findExtraFieldUnicodeComment:function(){var u=this.extraFields[25461];if(u){var k=r(u.value);return k.readInt(1)!==1||h(this.fileComment)!==k.readInt(4)?null:g.utf8decode(k.readData(u.length-5))}return null}},s.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,n){function r(k,c,m){this.name=k,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=c,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var a=e("./stream/StreamHelper"),o=e("./stream/DataWorker"),h=e("./utf8"),g=e("./compressedObject"),w=e("./stream/GenericWorker");r.prototype={internalStream:function(k){var c=null,m="string";try{if(!k)throw new Error("No output type specified.");var d=(m=k.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),c=this._decompressWorker();var y=!this._dataBinary;y&&!d&&(c=c.pipe(new h.Utf8EncodeWorker)),!y&&d&&(c=c.pipe(new h.Utf8DecodeWorker))}catch(x){(c=new w("error")).error(x)}return new a(c,m,"")},async:function(k,c){return this.internalStream(k).accumulate(c)},nodeStream:function(k,c){return this.internalStream(k||"nodebuffer").toNodejsStream(c)},_compressWorker:function(k,c){if(this._data instanceof g&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new h.Utf8EncodeWorker)),g.createWorkerFrom(m,k,c)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof w?this._data:new o(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},u=0;u<p.length;u++)r.prototype[p[u]]=b;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,n){(function(r){var a,o,h=r.MutationObserver||r.WebKitMutationObserver;if(h){var g=0,w=new h(k),p=r.document.createTextNode("");w.observe(p,{characterData:!0}),a=function(){p.data=g=++g%2}}else if(r.setImmediate||r.MessageChannel===void 0)a="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var c=r.document.createElement("script");c.onreadystatechange=function(){k(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},r.document.documentElement.appendChild(c)}:function(){setTimeout(k,0)};else{var b=new r.MessageChannel;b.port1.onmessage=k,a=function(){b.port2.postMessage(0)}}var u=[];function k(){var c,m;o=!0;for(var d=u.length;d;){for(m=u,u=[],c=-1;++c<d;)m[c]();d=u.length}o=!1}s.exports=function(c){u.push(c)!==1||o||a()}}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,n){var r=e("immediate");function a(){}var o={},h=["REJECTED"],g=["FULFILLED"],w=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,d!==a&&c(this,d)}function b(d,y,x){this.promise=d,typeof y=="function"&&(this.onFulfilled=y,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function u(d,y,x){r(function(){var A;try{A=y(x)}catch(C){return o.reject(d,C)}A===d?o.reject(d,new TypeError("Cannot resolve promise with itself")):o.resolve(d,A)})}function k(d){var y=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof y=="function")return function(){y.apply(d,arguments)}}function c(d,y){var x=!1;function A(O){x||(x=!0,o.reject(d,O))}function C(O){x||(x=!0,o.resolve(d,O))}var j=m(function(){y(C,A)});j.status==="error"&&A(j.value)}function m(d,y){var x={};try{x.value=d(y),x.status="success"}catch(A){x.status="error",x.value=A}return x}(s.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var y=this.constructor;return this.then(function(x){return y.resolve(d()).then(function(){return x})},function(x){return y.resolve(d()).then(function(){throw x})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,y){if(typeof d!="function"&&this.state===g||typeof y!="function"&&this.state===h)return this;var x=new this.constructor(a);return this.state!==w?u(x,this.state===g?d:y,this.outcome):this.queue.push(new b(x,d,y)),x},b.prototype.callFulfilled=function(d){o.resolve(this.promise,d)},b.prototype.otherCallFulfilled=function(d){u(this.promise,this.onFulfilled,d)},b.prototype.callRejected=function(d){o.reject(this.promise,d)},b.prototype.otherCallRejected=function(d){u(this.promise,this.onRejected,d)},o.resolve=function(d,y){var x=m(k,y);if(x.status==="error")return o.reject(d,x.value);var A=x.value;if(A)c(d,A);else{d.state=g,d.outcome=y;for(var C=-1,j=d.queue.length;++C<j;)d.queue[C].callFulfilled(y)}return d},o.reject=function(d,y){d.state=h,d.outcome=y;for(var x=-1,A=d.queue.length;++x<A;)d.queue[x].callRejected(y);return d},p.resolve=function(d){return d instanceof this?d:o.resolve(new this(a),d)},p.reject=function(d){var y=new this(a);return o.reject(y,d)},p.all=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,A=!1;if(!x)return this.resolve([]);for(var C=new Array(x),j=0,O=-1,I=new this(a);++O<x;)B(d[O],O);return I;function B(Z,Q){y.resolve(Z).then(function(_){C[Q]=_,++j!==x||A||(A=!0,o.resolve(I,C))},function(_){A||(A=!0,o.reject(I,_))})}},p.race=function(d){var y=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,A=!1;if(!x)return this.resolve([]);for(var C=-1,j=new this(a);++C<x;)O=d[C],y.resolve(O).then(function(I){A||(A=!0,o.resolve(j,I))},function(I){A||(A=!0,o.reject(j,I))});var O;return j}},{immediate:36}],38:[function(e,s,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,n){var r=e("./zlib/deflate"),a=e("./utils/common"),o=e("./utils/strings"),h=e("./zlib/messages"),g=e("./zlib/zstream"),w=Object.prototype.toString,p=0,b=-1,u=0,k=8;function c(d){if(!(this instanceof c))return new c(d);this.options=a.assign({level:b,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:u,to:""},d||{});var y=this.options;y.raw&&0<y.windowBits?y.windowBits=-y.windowBits:y.gzip&&0<y.windowBits&&y.windowBits<16&&(y.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var x=r.deflateInit2(this.strm,y.level,y.method,y.windowBits,y.memLevel,y.strategy);if(x!==p)throw new Error(h[x]);if(y.header&&r.deflateSetHeader(this.strm,y.header),y.dictionary){var A;if(A=typeof y.dictionary=="string"?o.string2buf(y.dictionary):w.call(y.dictionary)==="[object ArrayBuffer]"?new Uint8Array(y.dictionary):y.dictionary,(x=r.deflateSetDictionary(this.strm,A))!==p)throw new Error(h[x]);this._dict_set=!0}}function m(d,y){var x=new c(y);if(x.push(d,!0),x.err)throw x.msg||h[x.err];return x.result}c.prototype.push=function(d,y){var x,A,C=this.strm,j=this.options.chunkSize;if(this.ended)return!1;A=y===~~y?y:y===!0?4:0,typeof d=="string"?C.input=o.string2buf(d):w.call(d)==="[object ArrayBuffer]"?C.input=new Uint8Array(d):C.input=d,C.next_in=0,C.avail_in=C.input.length;do{if(C.avail_out===0&&(C.output=new a.Buf8(j),C.next_out=0,C.avail_out=j),(x=r.deflate(C,A))!==1&&x!==p)return this.onEnd(x),!(this.ended=!0);C.avail_out!==0&&(C.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(o.buf2binstring(a.shrinkBuf(C.output,C.next_out))):this.onData(a.shrinkBuf(C.output,C.next_out)))}while((0<C.avail_in||C.avail_out===0)&&x!==1);return A===4?(x=r.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===p):A!==2||(this.onEnd(p),!(C.avail_out=0))},c.prototype.onData=function(d){this.chunks.push(d)},c.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Deflate=c,n.deflate=m,n.deflateRaw=function(d,y){return(y=y||{}).raw=!0,m(d,y)},n.gzip=function(d,y){return(y=y||{}).gzip=!0,m(d,y)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,n){var r=e("./zlib/inflate"),a=e("./utils/common"),o=e("./utils/strings"),h=e("./zlib/constants"),g=e("./zlib/messages"),w=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function u(c){if(!(this instanceof u))return new u(c);this.options=a.assign({chunkSize:16384,windowBits:0,to:""},c||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||c&&c.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var d=r.inflateInit2(this.strm,m.windowBits);if(d!==h.Z_OK)throw new Error(g[d]);this.header=new p,r.inflateGetHeader(this.strm,this.header)}function k(c,m){var d=new u(m);if(d.push(c,!0),d.err)throw d.msg||g[d.err];return d.result}u.prototype.push=function(c,m){var d,y,x,A,C,j,O=this.strm,I=this.options.chunkSize,B=this.options.dictionary,Z=!1;if(this.ended)return!1;y=m===~~m?m:m===!0?h.Z_FINISH:h.Z_NO_FLUSH,typeof c=="string"?O.input=o.binstring2buf(c):b.call(c)==="[object ArrayBuffer]"?O.input=new Uint8Array(c):O.input=c,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new a.Buf8(I),O.next_out=0,O.avail_out=I),(d=r.inflate(O,h.Z_NO_FLUSH))===h.Z_NEED_DICT&&B&&(j=typeof B=="string"?o.string2buf(B):b.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=r.inflateSetDictionary(this.strm,j)),d===h.Z_BUF_ERROR&&Z===!0&&(d=h.Z_OK,Z=!1),d!==h.Z_STREAM_END&&d!==h.Z_OK)return this.onEnd(d),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&d!==h.Z_STREAM_END&&(O.avail_in!==0||y!==h.Z_FINISH&&y!==h.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=o.utf8border(O.output,O.next_out),A=O.next_out-x,C=o.buf2string(O.output,x),O.next_out=A,O.avail_out=I-A,A&&a.arraySet(O.output,O.output,x,A,0),this.onData(C)):this.onData(a.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(Z=!0)}while((0<O.avail_in||O.avail_out===0)&&d!==h.Z_STREAM_END);return d===h.Z_STREAM_END&&(y=h.Z_FINISH),y===h.Z_FINISH?(d=r.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===h.Z_OK):y!==h.Z_SYNC_FLUSH||(this.onEnd(h.Z_OK),!(O.avail_out=0))},u.prototype.onData=function(c){this.chunks.push(c)},u.prototype.onEnd=function(c){c===h.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=a.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},n.Inflate=u,n.inflate=k,n.inflateRaw=function(c,m){return(m=m||{}).raw=!0,k(c,m)},n.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(h){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var w=g.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var p in w)w.hasOwnProperty(p)&&(h[p]=w[p])}}return h},n.shrinkBuf=function(h,g){return h.length===g?h:h.subarray?h.subarray(0,g):(h.length=g,h)};var a={arraySet:function(h,g,w,p,b){if(g.subarray&&h.subarray)h.set(g.subarray(w,w+p),b);else for(var u=0;u<p;u++)h[b+u]=g[w+u]},flattenChunks:function(h){var g,w,p,b,u,k;for(g=p=0,w=h.length;g<w;g++)p+=h[g].length;for(k=new Uint8Array(p),g=b=0,w=h.length;g<w;g++)u=h[g],k.set(u,b),b+=u.length;return k}},o={arraySet:function(h,g,w,p,b){for(var u=0;u<p;u++)h[b+u]=g[w+u]},flattenChunks:function(h){return[].concat.apply([],h)}};n.setTyped=function(h){h?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,a)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,o))},n.setTyped(r)},{}],42:[function(e,s,n){var r=e("./common"),a=!0,o=!0;try{String.fromCharCode.apply(null,[0])}catch{a=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{o=!1}for(var h=new r.Buf8(256),g=0;g<256;g++)h[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function w(p,b){if(b<65537&&(p.subarray&&o||!p.subarray&&a))return String.fromCharCode.apply(null,r.shrinkBuf(p,b));for(var u="",k=0;k<b;k++)u+=String.fromCharCode(p[k]);return u}h[254]=h[254]=1,n.string2buf=function(p){var b,u,k,c,m,d=p.length,y=0;for(c=0;c<d;c++)(64512&(u=p.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=p.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),y+=u<128?1:u<2048?2:u<65536?3:4;for(b=new r.Buf8(y),c=m=0;m<y;c++)(64512&(u=p.charCodeAt(c)))==55296&&c+1<d&&(64512&(k=p.charCodeAt(c+1)))==56320&&(u=65536+(u-55296<<10)+(k-56320),c++),u<128?b[m++]=u:(u<2048?b[m++]=192|u>>>6:(u<65536?b[m++]=224|u>>>12:(b[m++]=240|u>>>18,b[m++]=128|u>>>12&63),b[m++]=128|u>>>6&63),b[m++]=128|63&u);return b},n.buf2binstring=function(p){return w(p,p.length)},n.binstring2buf=function(p){for(var b=new r.Buf8(p.length),u=0,k=b.length;u<k;u++)b[u]=p.charCodeAt(u);return b},n.buf2string=function(p,b){var u,k,c,m,d=b||p.length,y=new Array(2*d);for(u=k=0;u<d;)if((c=p[u++])<128)y[k++]=c;else if(4<(m=h[c]))y[k++]=65533,u+=m-1;else{for(c&=m===2?31:m===3?15:7;1<m&&u<d;)c=c<<6|63&p[u++],m--;1<m?y[k++]=65533:c<65536?y[k++]=c:(c-=65536,y[k++]=55296|c>>10&1023,y[k++]=56320|1023&c)}return w(y,k)},n.utf8border=function(p,b){var u;for((b=b||p.length)>p.length&&(b=p.length),u=b-1;0<=u&&(192&p[u])==128;)u--;return u<0||u===0?b:u+h[p[u]]>b?u:b}},{"./common":41}],43:[function(e,s,n){s.exports=function(r,a,o,h){for(var g=65535&r|0,w=r>>>16&65535|0,p=0;o!==0;){for(o-=p=2e3<o?2e3:o;w=w+(g=g+a[h++]|0)|0,--p;);g%=65521,w%=65521}return g|w<<16|0}},{}],44:[function(e,s,n){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,n){var r=function(){for(var a,o=[],h=0;h<256;h++){a=h;for(var g=0;g<8;g++)a=1&a?3988292384^a>>>1:a>>>1;o[h]=a}return o}();s.exports=function(a,o,h,g){var w=r,p=g+h;a^=-1;for(var b=g;b<p;b++)a=a>>>8^w[255&(a^o[b])];return-1^a}},{}],46:[function(e,s,n){var r,a=e("../utils/common"),o=e("./trees"),h=e("./adler32"),g=e("./crc32"),w=e("./messages"),p=0,b=4,u=0,k=-2,c=-1,m=4,d=2,y=8,x=9,A=286,C=30,j=19,O=2*A+1,I=15,B=3,Z=258,Q=Z+B+1,_=42,H=113,l=1,D=2,et=3,F=4;function it(i,M){return i.msg=w[M],M}function N(i){return(i<<1)-(4<i?9:0)}function tt(i){for(var M=i.length;0<=--M;)i[M]=0}function T(i){var M=i.state,z=M.pending;z>i.avail_out&&(z=i.avail_out),z!==0&&(a.arraySet(i.output,M.pending_buf,M.pending_out,z,i.next_out),i.next_out+=z,M.pending_out+=z,i.total_out+=z,i.avail_out-=z,M.pending-=z,M.pending===0&&(M.pending_out=0))}function R(i,M){o._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,M),i.block_start=i.strstart,T(i.strm)}function X(i,M){i.pending_buf[i.pending++]=M}function K(i,M){i.pending_buf[i.pending++]=M>>>8&255,i.pending_buf[i.pending++]=255&M}function W(i,M){var z,v,f=i.max_chain_length,S=i.strstart,P=i.prev_length,q=i.nice_match,E=i.strstart>i.w_size-Q?i.strstart-(i.w_size-Q):0,$=i.window,J=i.w_mask,V=i.prev,Y=i.strstart+Z,ot=$[S+P-1],st=$[S+P];i.prev_length>=i.good_match&&(f>>=2),q>i.lookahead&&(q=i.lookahead);do if($[(z=M)+P]===st&&$[z+P-1]===ot&&$[z]===$[S]&&$[++z]===$[S+1]){S+=2,z++;do;while($[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&$[++S]===$[++z]&&S<Y);if(v=Z-(Y-S),S=Y-Z,P<v){if(i.match_start=M,q<=(P=v))break;ot=$[S+P-1],st=$[S+P]}}while((M=V[M&J])>E&&--f!=0);return P<=i.lookahead?P:i.lookahead}function at(i){var M,z,v,f,S,P,q,E,$,J,V=i.w_size;do{if(f=i.window_size-i.lookahead-i.strstart,i.strstart>=V+(V-Q)){for(a.arraySet(i.window,i.window,V,V,0),i.match_start-=V,i.strstart-=V,i.block_start-=V,M=z=i.hash_size;v=i.head[--M],i.head[M]=V<=v?v-V:0,--z;);for(M=z=V;v=i.prev[--M],i.prev[M]=V<=v?v-V:0,--z;);f+=V}if(i.strm.avail_in===0)break;if(P=i.strm,q=i.window,E=i.strstart+i.lookahead,$=f,J=void 0,J=P.avail_in,$<J&&(J=$),z=J===0?0:(P.avail_in-=J,a.arraySet(q,P.input,P.next_in,J,E),P.state.wrap===1?P.adler=h(P.adler,q,J,E):P.state.wrap===2&&(P.adler=g(P.adler,q,J,E)),P.next_in+=J,P.total_in+=J,J),i.lookahead+=z,i.lookahead+i.insert>=B)for(S=i.strstart-i.insert,i.ins_h=i.window[S],i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[S+B-1])&i.hash_mask,i.prev[S&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=S,S++,i.insert--,!(i.lookahead+i.insert<B)););}while(i.lookahead<Q&&i.strm.avail_in!==0)}function ft(i,M){for(var z,v;;){if(i.lookahead<Q){if(at(i),i.lookahead<Q&&M===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),z!==0&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z)),i.match_length>=B)if(v=o._tr_tally(i,i.strstart-i.match_start,i.match_length-B),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=B){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=o._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=i.strstart<B-1?i.strstart:B-1,M===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:D}function rt(i,M){for(var z,v,f;;){if(i.lookahead<Q){if(at(i),i.lookahead<Q&&M===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=B-1,z!==0&&i.prev_length<i.max_lazy_match&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z),i.match_length<=5&&(i.strategy===1||i.match_length===B&&4096<i.strstart-i.match_start)&&(i.match_length=B-1)),i.prev_length>=B&&i.match_length<=i.prev_length){for(f=i.strstart+i.lookahead-B,v=o._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-B),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=f&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=B-1,i.strstart++,v&&(R(i,!1),i.strm.avail_out===0))return l}else if(i.match_available){if((v=o._tr_tally(i,0,i.window[i.strstart-1]))&&R(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return l}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=o._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<B-1?i.strstart:B-1,M===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:D}function nt(i,M,z,v,f){this.good_length=i,this.max_lazy=M,this.nice_length=z,this.max_chain=v,this.func=f}function ct(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=y,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new a.Buf16(2*O),this.dyn_dtree=new a.Buf16(2*(2*C+1)),this.bl_tree=new a.Buf16(2*(2*j+1)),tt(this.dyn_ltree),tt(this.dyn_dtree),tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new a.Buf16(I+1),this.heap=new a.Buf16(2*A+1),tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new a.Buf16(2*A+1),tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function lt(i){var M;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(M=i.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?_:H,i.adler=M.wrap===2?0:1,M.last_flush=p,o._tr_init(M),u):it(i,k)}function yt(i){var M=lt(i);return M===u&&function(z){z.window_size=2*z.w_size,tt(z.head),z.max_lazy_match=r[z.level].max_lazy,z.good_match=r[z.level].good_length,z.nice_match=r[z.level].nice_length,z.max_chain_length=r[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(i.state),M}function bt(i,M,z,v,f,S){if(!i)return k;var P=1;if(M===c&&(M=6),v<0?(P=0,v=-v):15<v&&(P=2,v-=16),f<1||x<f||z!==y||v<8||15<v||M<0||9<M||S<0||m<S)return it(i,k);v===8&&(v=9);var q=new ct;return(i.state=q).strm=i,q.wrap=P,q.gzhead=null,q.w_bits=v,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=f+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+B-1)/B),q.window=new a.Buf8(2*q.w_size),q.head=new a.Buf16(q.hash_size),q.prev=new a.Buf16(q.w_size),q.lit_bufsize=1<<f+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new a.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=M,q.strategy=S,q.method=z,yt(i)}r=[new nt(0,0,0,0,function(i,M){var z=65535;for(z>i.pending_buf_size-5&&(z=i.pending_buf_size-5);;){if(i.lookahead<=1){if(at(i),i.lookahead===0&&M===p)return l;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+z;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,R(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-Q&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=0,M===b?(R(i,!0),i.strm.avail_out===0?et:F):(i.strstart>i.block_start&&(R(i,!1),i.strm.avail_out),l)}),new nt(4,4,8,4,ft),new nt(4,5,16,8,ft),new nt(4,6,32,32,ft),new nt(4,4,16,16,rt),new nt(8,16,32,32,rt),new nt(8,16,128,128,rt),new nt(8,32,128,256,rt),new nt(32,128,258,1024,rt),new nt(32,258,258,4096,rt)],n.deflateInit=function(i,M){return bt(i,M,y,15,8,0)},n.deflateInit2=bt,n.deflateReset=yt,n.deflateResetKeep=lt,n.deflateSetHeader=function(i,M){return i&&i.state?i.state.wrap!==2?k:(i.state.gzhead=M,u):k},n.deflate=function(i,M){var z,v,f,S;if(!i||!i.state||5<M||M<0)return i?it(i,k):k;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&M!==b)return it(i,i.avail_out===0?-5:k);if(v.strm=i,z=v.last_flush,v.last_flush=M,v.status===_)if(v.wrap===2)i.adler=0,X(v,31),X(v,139),X(v,8),v.gzhead?(X(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),X(v,255&v.gzhead.time),X(v,v.gzhead.time>>8&255),X(v,v.gzhead.time>>16&255),X(v,v.gzhead.time>>24&255),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(X(v,255&v.gzhead.extra.length),X(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=g(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(X(v,0),X(v,0),X(v,0),X(v,0),X(v,0),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,3),v.status=H);else{var P=y+(v.w_bits-8<<4)<<8;P|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(P|=32),P+=31-P%31,v.status=H,K(v,P),v.strstart!==0&&(K(v,i.adler>>>16),K(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(f=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending!==v.pending_buf_size));)X(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){S=1;break}S=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,X(v,S)}while(S!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),S===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){S=1;break}S=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,X(v,S)}while(S!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),S===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&T(i),v.pending+2<=v.pending_buf_size&&(X(v,255&i.adler),X(v,i.adler>>8&255),i.adler=0,v.status=H)):v.status=H),v.pending!==0){if(T(i),i.avail_out===0)return v.last_flush=-1,u}else if(i.avail_in===0&&N(M)<=N(z)&&M!==b)return it(i,-5);if(v.status===666&&i.avail_in!==0)return it(i,-5);if(i.avail_in!==0||v.lookahead!==0||M!==p&&v.status!==666){var q=v.strategy===2?function(E,$){for(var J;;){if(E.lookahead===0&&(at(E),E.lookahead===0)){if($===p)return l;break}if(E.match_length=0,J=o._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++,J&&(R(E,!1),E.strm.avail_out===0))return l}return E.insert=0,$===b?(R(E,!0),E.strm.avail_out===0?et:F):E.last_lit&&(R(E,!1),E.strm.avail_out===0)?l:D}(v,M):v.strategy===3?function(E,$){for(var J,V,Y,ot,st=E.window;;){if(E.lookahead<=Z){if(at(E),E.lookahead<=Z&&$===p)return l;if(E.lookahead===0)break}if(E.match_length=0,E.lookahead>=B&&0<E.strstart&&(V=st[Y=E.strstart-1])===st[++Y]&&V===st[++Y]&&V===st[++Y]){ot=E.strstart+Z;do;while(V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&V===st[++Y]&&Y<ot);E.match_length=Z-(ot-Y),E.match_length>E.lookahead&&(E.match_length=E.lookahead)}if(E.match_length>=B?(J=o._tr_tally(E,1,E.match_length-B),E.lookahead-=E.match_length,E.strstart+=E.match_length,E.match_length=0):(J=o._tr_tally(E,0,E.window[E.strstart]),E.lookahead--,E.strstart++),J&&(R(E,!1),E.strm.avail_out===0))return l}return E.insert=0,$===b?(R(E,!0),E.strm.avail_out===0?et:F):E.last_lit&&(R(E,!1),E.strm.avail_out===0)?l:D}(v,M):r[v.level].func(v,M);if(q!==et&&q!==F||(v.status=666),q===l||q===et)return i.avail_out===0&&(v.last_flush=-1),u;if(q===D&&(M===1?o._tr_align(v):M!==5&&(o._tr_stored_block(v,0,0,!1),M===3&&(tt(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),T(i),i.avail_out===0))return v.last_flush=-1,u}return M!==b?u:v.wrap<=0?1:(v.wrap===2?(X(v,255&i.adler),X(v,i.adler>>8&255),X(v,i.adler>>16&255),X(v,i.adler>>24&255),X(v,255&i.total_in),X(v,i.total_in>>8&255),X(v,i.total_in>>16&255),X(v,i.total_in>>24&255)):(K(v,i.adler>>>16),K(v,65535&i.adler)),T(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?u:1)},n.deflateEnd=function(i){var M;return i&&i.state?(M=i.state.status)!==_&&M!==69&&M!==73&&M!==91&&M!==103&&M!==H&&M!==666?it(i,k):(i.state=null,M===H?it(i,-3):u):k},n.deflateSetDictionary=function(i,M){var z,v,f,S,P,q,E,$,J=M.length;if(!i||!i.state||(S=(z=i.state).wrap)===2||S===1&&z.status!==_||z.lookahead)return k;for(S===1&&(i.adler=h(i.adler,M,J,0)),z.wrap=0,J>=z.w_size&&(S===0&&(tt(z.head),z.strstart=0,z.block_start=0,z.insert=0),$=new a.Buf8(z.w_size),a.arraySet($,M,J-z.w_size,z.w_size,0),M=$,J=z.w_size),P=i.avail_in,q=i.next_in,E=i.input,i.avail_in=J,i.next_in=0,i.input=M,at(z);z.lookahead>=B;){for(v=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[v+B-1])&z.hash_mask,z.prev[v&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=v,v++,--f;);z.strstart=v,z.lookahead=B-1,at(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,i.next_in=q,i.input=E,i.avail_in=P,z.wrap=S,u},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,n){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,n){s.exports=function(r,a){var o,h,g,w,p,b,u,k,c,m,d,y,x,A,C,j,O,I,B,Z,Q,_,H,l,D;o=r.state,h=r.next_in,l=r.input,g=h+(r.avail_in-5),w=r.next_out,D=r.output,p=w-(a-r.avail_out),b=w+(r.avail_out-257),u=o.dmax,k=o.wsize,c=o.whave,m=o.wnext,d=o.window,y=o.hold,x=o.bits,A=o.lencode,C=o.distcode,j=(1<<o.lenbits)-1,O=(1<<o.distbits)-1;t:do{x<15&&(y+=l[h++]<<x,x+=8,y+=l[h++]<<x,x+=8),I=A[y&j];e:for(;;){if(y>>>=B=I>>>24,x-=B,(B=I>>>16&255)===0)D[w++]=65535&I;else{if(!(16&B)){if(!(64&B)){I=A[(65535&I)+(y&(1<<B)-1)];continue e}if(32&B){o.mode=12;break t}r.msg="invalid literal/length code",o.mode=30;break t}Z=65535&I,(B&=15)&&(x<B&&(y+=l[h++]<<x,x+=8),Z+=y&(1<<B)-1,y>>>=B,x-=B),x<15&&(y+=l[h++]<<x,x+=8,y+=l[h++]<<x,x+=8),I=C[y&O];i:for(;;){if(y>>>=B=I>>>24,x-=B,!(16&(B=I>>>16&255))){if(!(64&B)){I=C[(65535&I)+(y&(1<<B)-1)];continue i}r.msg="invalid distance code",o.mode=30;break t}if(Q=65535&I,x<(B&=15)&&(y+=l[h++]<<x,(x+=8)<B&&(y+=l[h++]<<x,x+=8)),u<(Q+=y&(1<<B)-1)){r.msg="invalid distance too far back",o.mode=30;break t}if(y>>>=B,x-=B,(B=w-p)<Q){if(c<(B=Q-B)&&o.sane){r.msg="invalid distance too far back",o.mode=30;break t}if(H=d,(_=0)===m){if(_+=k-B,B<Z){for(Z-=B;D[w++]=d[_++],--B;);_=w-Q,H=D}}else if(m<B){if(_+=k+m-B,(B-=m)<Z){for(Z-=B;D[w++]=d[_++],--B;);if(_=0,m<Z){for(Z-=B=m;D[w++]=d[_++],--B;);_=w-Q,H=D}}}else if(_+=m-B,B<Z){for(Z-=B;D[w++]=d[_++],--B;);_=w-Q,H=D}for(;2<Z;)D[w++]=H[_++],D[w++]=H[_++],D[w++]=H[_++],Z-=3;Z&&(D[w++]=H[_++],1<Z&&(D[w++]=H[_++]))}else{for(_=w-Q;D[w++]=D[_++],D[w++]=D[_++],D[w++]=D[_++],2<(Z-=3););Z&&(D[w++]=D[_++],1<Z&&(D[w++]=D[_++]))}break}}break}}while(h<g&&w<b);h-=Z=x>>3,y&=(1<<(x-=Z<<3))-1,r.next_in=h,r.next_out=w,r.avail_in=h<g?g-h+5:5-(h-g),r.avail_out=w<b?b-w+257:257-(w-b),o.hold=y,o.bits=x}},{}],49:[function(e,s,n){var r=e("../utils/common"),a=e("./adler32"),o=e("./crc32"),h=e("./inffast"),g=e("./inftrees"),w=1,p=2,b=0,u=-2,k=1,c=852,m=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function y(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var H;return _&&_.state?(H=_.state,_.total_in=_.total_out=H.total=0,_.msg="",H.wrap&&(_.adler=1&H.wrap),H.mode=k,H.last=0,H.havedict=0,H.dmax=32768,H.head=null,H.hold=0,H.bits=0,H.lencode=H.lendyn=new r.Buf32(c),H.distcode=H.distdyn=new r.Buf32(m),H.sane=1,H.back=-1,b):u}function A(_){var H;return _&&_.state?((H=_.state).wsize=0,H.whave=0,H.wnext=0,x(_)):u}function C(_,H){var l,D;return _&&_.state?(D=_.state,H<0?(l=0,H=-H):(l=1+(H>>4),H<48&&(H&=15)),H&&(H<8||15<H)?u:(D.window!==null&&D.wbits!==H&&(D.window=null),D.wrap=l,D.wbits=H,A(_))):u}function j(_,H){var l,D;return _?(D=new y,(_.state=D).window=null,(l=C(_,H))!==b&&(_.state=null),l):u}var O,I,B=!0;function Z(_){if(B){var H;for(O=new r.Buf32(512),I=new r.Buf32(32),H=0;H<144;)_.lens[H++]=8;for(;H<256;)_.lens[H++]=9;for(;H<280;)_.lens[H++]=7;for(;H<288;)_.lens[H++]=8;for(g(w,_.lens,0,288,O,0,_.work,{bits:9}),H=0;H<32;)_.lens[H++]=5;g(p,_.lens,0,32,I,0,_.work,{bits:5}),B=!1}_.lencode=O,_.lenbits=9,_.distcode=I,_.distbits=5}function Q(_,H,l,D){var et,F=_.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new r.Buf8(F.wsize)),D>=F.wsize?(r.arraySet(F.window,H,l-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(D<(et=F.wsize-F.wnext)&&(et=D),r.arraySet(F.window,H,l-D,et,F.wnext),(D-=et)?(r.arraySet(F.window,H,l-D,D,0),F.wnext=D,F.whave=F.wsize):(F.wnext+=et,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=et))),0}n.inflateReset=A,n.inflateReset2=C,n.inflateResetKeep=x,n.inflateInit=function(_){return j(_,15)},n.inflateInit2=j,n.inflate=function(_,H){var l,D,et,F,it,N,tt,T,R,X,K,W,at,ft,rt,nt,ct,lt,yt,bt,i,M,z,v,f=0,S=new r.Buf8(4),P=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return u;(l=_.state).mode===12&&(l.mode=13),it=_.next_out,et=_.output,tt=_.avail_out,F=_.next_in,D=_.input,N=_.avail_in,T=l.hold,R=l.bits,X=N,K=tt,M=b;t:for(;;)switch(l.mode){case k:if(l.wrap===0){l.mode=13;break}for(;R<16;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(2&l.wrap&&T===35615){S[l.check=0]=255&T,S[1]=T>>>8&255,l.check=o(l.check,S,2,0),R=T=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&T)<<8)+(T>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&T)!=8){_.msg="unknown compression method",l.mode=30;break}if(R-=4,i=8+(15&(T>>>=4)),l.wbits===0)l.wbits=i;else if(i>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<i,_.adler=l.check=1,l.mode=512&T?10:12,R=T=0;break;case 2:for(;R<16;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(l.flags=T,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=T>>8&1),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=o(l.check,S,2,0)),R=T=0,l.mode=3;case 3:for(;R<32;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.head&&(l.head.time=T),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,S[2]=T>>>16&255,S[3]=T>>>24&255,l.check=o(l.check,S,4,0)),R=T=0,l.mode=4;case 4:for(;R<16;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.head&&(l.head.xflags=255&T,l.head.os=T>>8),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=o(l.check,S,2,0)),R=T=0,l.mode=5;case 5:if(1024&l.flags){for(;R<16;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.length=T,l.head&&(l.head.extra_len=T),512&l.flags&&(S[0]=255&T,S[1]=T>>>8&255,l.check=o(l.check,S,2,0)),R=T=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(N<(W=l.length)&&(W=N),W&&(l.head&&(i=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),r.arraySet(l.head.extra,D,F,W,i)),512&l.flags&&(l.check=o(l.check,D,W,F)),N-=W,F+=W,l.length-=W),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(N===0)break t;for(W=0;i=D[F+W++],l.head&&i&&l.length<65536&&(l.head.name+=String.fromCharCode(i)),i&&W<N;);if(512&l.flags&&(l.check=o(l.check,D,W,F)),N-=W,F+=W,i)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(N===0)break t;for(W=0;i=D[F+W++],l.head&&i&&l.length<65536&&(l.head.comment+=String.fromCharCode(i)),i&&W<N;);if(512&l.flags&&(l.check=o(l.check,D,W,F)),N-=W,F+=W,i)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;R<16;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(T!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}R=T=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;R<32;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}_.adler=l.check=d(T),R=T=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,2;_.adler=l.check=1,l.mode=12;case 12:if(H===5||H===6)break t;case 13:if(l.last){T>>>=7&R,R-=7&R,l.mode=27;break}for(;R<3;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}switch(l.last=1&T,R-=1,3&(T>>>=1)){case 0:l.mode=14;break;case 1:if(Z(l),l.mode=20,H!==6)break;T>>>=2,R-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}T>>>=2,R-=2;break;case 14:for(T>>>=7&R,R-=7&R;R<32;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if((65535&T)!=(T>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&T,R=T=0,l.mode=15,H===6)break t;case 15:l.mode=16;case 16:if(W=l.length){if(N<W&&(W=N),tt<W&&(W=tt),W===0)break t;r.arraySet(et,D,F,W,it),N-=W,F+=W,tt-=W,it+=W,l.length-=W;break}l.mode=12;break;case 17:for(;R<14;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(l.nlen=257+(31&T),T>>>=5,R-=5,l.ndist=1+(31&T),T>>>=5,R-=5,l.ncode=4+(15&T),T>>>=4,R-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;R<3;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.lens[P[l.have++]]=7&T,T>>>=3,R-=3}for(;l.have<19;)l.lens[P[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,z={bits:l.lenbits},M=g(0,l.lens,0,19,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;nt=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ct=65535&f,!((rt=f>>>24)<=R);){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(ct<16)T>>>=rt,R-=rt,l.lens[l.have++]=ct;else{if(ct===16){for(v=rt+2;R<v;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(T>>>=rt,R-=rt,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}i=l.lens[l.have-1],W=3+(3&T),T>>>=2,R-=2}else if(ct===17){for(v=rt+3;R<v;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}R-=rt,i=0,W=3+(7&(T>>>=rt)),T>>>=3,R-=3}else{for(v=rt+7;R<v;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}R-=rt,i=0,W=11+(127&(T>>>=rt)),T>>>=7,R-=7}if(l.have+W>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;W--;)l.lens[l.have++]=i}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,z={bits:l.lenbits},M=g(w,l.lens,0,l.nlen,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,z={bits:l.distbits},M=g(p,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,z),l.distbits=z.bits,M){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,H===6)break t;case 20:l.mode=21;case 21:if(6<=N&&258<=tt){_.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,h(_,K),it=_.next_out,et=_.output,tt=_.avail_out,F=_.next_in,D=_.input,N=_.avail_in,T=l.hold,R=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;nt=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ct=65535&f,!((rt=f>>>24)<=R);){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(nt&&!(240&nt)){for(lt=rt,yt=nt,bt=ct;nt=(f=l.lencode[bt+((T&(1<<lt+yt)-1)>>lt)])>>>16&255,ct=65535&f,!(lt+(rt=f>>>24)<=R);){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}T>>>=lt,R-=lt,l.back+=lt}if(T>>>=rt,R-=rt,l.back+=rt,l.length=ct,nt===0){l.mode=26;break}if(32&nt){l.back=-1,l.mode=12;break}if(64&nt){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&nt,l.mode=22;case 22:if(l.extra){for(v=l.extra;R<v;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.length+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;nt=(f=l.distcode[T&(1<<l.distbits)-1])>>>16&255,ct=65535&f,!((rt=f>>>24)<=R);){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(!(240&nt)){for(lt=rt,yt=nt,bt=ct;nt=(f=l.distcode[bt+((T&(1<<lt+yt)-1)>>lt)])>>>16&255,ct=65535&f,!(lt+(rt=f>>>24)<=R);){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}T>>>=lt,R-=lt,l.back+=lt}if(T>>>=rt,R-=rt,l.back+=rt,64&nt){_.msg="invalid distance code",l.mode=30;break}l.offset=ct,l.extra=15&nt,l.mode=24;case 24:if(l.extra){for(v=l.extra;R<v;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}l.offset+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(tt===0)break t;if(W=K-tt,l.offset>W){if((W=l.offset-W)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}at=W>l.wnext?(W-=l.wnext,l.wsize-W):l.wnext-W,W>l.length&&(W=l.length),ft=l.window}else ft=et,at=it-l.offset,W=l.length;for(tt<W&&(W=tt),tt-=W,l.length-=W;et[it++]=ft[at++],--W;);l.length===0&&(l.mode=21);break;case 26:if(tt===0)break t;et[it++]=l.length,tt--,l.mode=21;break;case 27:if(l.wrap){for(;R<32;){if(N===0)break t;N--,T|=D[F++]<<R,R+=8}if(K-=tt,_.total_out+=K,l.total+=K,K&&(_.adler=l.check=l.flags?o(l.check,et,K,it-K):a(l.check,et,K,it-K)),K=tt,(l.flags?T:d(T))!==l.check){_.msg="incorrect data check",l.mode=30;break}R=T=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;R<32;){if(N===0)break t;N--,T+=D[F++]<<R,R+=8}if(T!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}R=T=0}l.mode=29;case 29:M=1;break t;case 30:M=-3;break t;case 31:return-4;case 32:default:return u}return _.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=N,l.hold=T,l.bits=R,(l.wsize||K!==_.avail_out&&l.mode<30&&(l.mode<27||H!==4))&&Q(_,_.output,_.next_out,K-_.avail_out)?(l.mode=31,-4):(X-=_.avail_in,K-=_.avail_out,_.total_in+=X,_.total_out+=K,l.total+=K,l.wrap&&K&&(_.adler=l.check=l.flags?o(l.check,et,K,_.next_out-K):a(l.check,et,K,_.next_out-K)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(X==0&&K===0||H===4)&&M===b&&(M=-5),M)},n.inflateEnd=function(_){if(!_||!_.state)return u;var H=_.state;return H.window&&(H.window=null),_.state=null,b},n.inflateGetHeader=function(_,H){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=H).done=!1,b):u},n.inflateSetDictionary=function(_,H){var l,D=H.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?u:l.mode===11&&a(1,H,D,0)!==l.check?-3:Q(_,H,D,D)?(l.mode=31,-4):(l.havedict=1,b):u},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,n){var r=e("../utils/common"),a=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],o=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],h=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(w,p,b,u,k,c,m,d){var y,x,A,C,j,O,I,B,Z,Q=d.bits,_=0,H=0,l=0,D=0,et=0,F=0,it=0,N=0,tt=0,T=0,R=null,X=0,K=new r.Buf16(16),W=new r.Buf16(16),at=null,ft=0;for(_=0;_<=15;_++)K[_]=0;for(H=0;H<u;H++)K[p[b+H]]++;for(et=Q,D=15;1<=D&&K[D]===0;D--);if(D<et&&(et=D),D===0)return k[c++]=20971520,k[c++]=20971520,d.bits=1,0;for(l=1;l<D&&K[l]===0;l++);for(et<l&&(et=l),_=N=1;_<=15;_++)if(N<<=1,(N-=K[_])<0)return-1;if(0<N&&(w===0||D!==1))return-1;for(W[1]=0,_=1;_<15;_++)W[_+1]=W[_]+K[_];for(H=0;H<u;H++)p[b+H]!==0&&(m[W[p[b+H]]++]=H);if(O=w===0?(R=at=m,19):w===1?(R=a,X-=257,at=o,ft-=257,256):(R=h,at=g,-1),_=l,j=c,it=H=T=0,A=-1,C=(tt=1<<(F=et))-1,w===1&&852<tt||w===2&&592<tt)return 1;for(;;){for(I=_-it,Z=m[H]<O?(B=0,m[H]):m[H]>O?(B=at[ft+m[H]],R[X+m[H]]):(B=96,0),y=1<<_-it,l=x=1<<F;k[j+(T>>it)+(x-=y)]=I<<24|B<<16|Z|0,x!==0;);for(y=1<<_-1;T&y;)y>>=1;if(y!==0?(T&=y-1,T+=y):T=0,H++,--K[_]==0){if(_===D)break;_=p[b+m[H]]}if(et<_&&(T&C)!==A){for(it===0&&(it=et),j+=l,N=1<<(F=_-it);F+it<D&&!((N-=K[F+it])<=0);)F++,N<<=1;if(tt+=1<<F,w===1&&852<tt||w===2&&592<tt)return 1;k[A=T&C]=et<<24|F<<16|j-c|0}}return T!==0&&(k[j+T]=_-it<<24|64<<16|0),d.bits=et,0}},{"../utils/common":41}],51:[function(e,s,n){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,n){var r=e("../utils/common"),a=0,o=1;function h(f){for(var S=f.length;0<=--S;)f[S]=0}var g=0,w=29,p=256,b=p+1+w,u=30,k=19,c=2*b+1,m=15,d=16,y=7,x=256,A=16,C=17,j=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],I=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],Z=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(b+2));h(Q);var _=new Array(2*u);h(_);var H=new Array(512);h(H);var l=new Array(256);h(l);var D=new Array(w);h(D);var et,F,it,N=new Array(u);function tt(f,S,P,q,E){this.static_tree=f,this.extra_bits=S,this.extra_base=P,this.elems=q,this.max_length=E,this.has_stree=f&&f.length}function T(f,S){this.dyn_tree=f,this.max_code=0,this.stat_desc=S}function R(f){return f<256?H[f]:H[256+(f>>>7)]}function X(f,S){f.pending_buf[f.pending++]=255&S,f.pending_buf[f.pending++]=S>>>8&255}function K(f,S,P){f.bi_valid>d-P?(f.bi_buf|=S<<f.bi_valid&65535,X(f,f.bi_buf),f.bi_buf=S>>d-f.bi_valid,f.bi_valid+=P-d):(f.bi_buf|=S<<f.bi_valid&65535,f.bi_valid+=P)}function W(f,S,P){K(f,P[2*S],P[2*S+1])}function at(f,S){for(var P=0;P|=1&f,f>>>=1,P<<=1,0<--S;);return P>>>1}function ft(f,S,P){var q,E,$=new Array(m+1),J=0;for(q=1;q<=m;q++)$[q]=J=J+P[q-1]<<1;for(E=0;E<=S;E++){var V=f[2*E+1];V!==0&&(f[2*E]=at($[V]++,V))}}function rt(f){var S;for(S=0;S<b;S++)f.dyn_ltree[2*S]=0;for(S=0;S<u;S++)f.dyn_dtree[2*S]=0;for(S=0;S<k;S++)f.bl_tree[2*S]=0;f.dyn_ltree[2*x]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function nt(f){8<f.bi_valid?X(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function ct(f,S,P,q){var E=2*S,$=2*P;return f[E]<f[$]||f[E]===f[$]&&q[S]<=q[P]}function lt(f,S,P){for(var q=f.heap[P],E=P<<1;E<=f.heap_len&&(E<f.heap_len&&ct(S,f.heap[E+1],f.heap[E],f.depth)&&E++,!ct(S,q,f.heap[E],f.depth));)f.heap[P]=f.heap[E],P=E,E<<=1;f.heap[P]=q}function yt(f,S,P){var q,E,$,J,V=0;if(f.last_lit!==0)for(;q=f.pending_buf[f.d_buf+2*V]<<8|f.pending_buf[f.d_buf+2*V+1],E=f.pending_buf[f.l_buf+V],V++,q===0?W(f,E,S):(W(f,($=l[E])+p+1,S),(J=O[$])!==0&&K(f,E-=D[$],J),W(f,$=R(--q),P),(J=I[$])!==0&&K(f,q-=N[$],J)),V<f.last_lit;);W(f,x,S)}function bt(f,S){var P,q,E,$=S.dyn_tree,J=S.stat_desc.static_tree,V=S.stat_desc.has_stree,Y=S.stat_desc.elems,ot=-1;for(f.heap_len=0,f.heap_max=c,P=0;P<Y;P++)$[2*P]!==0?(f.heap[++f.heap_len]=ot=P,f.depth[P]=0):$[2*P+1]=0;for(;f.heap_len<2;)$[2*(E=f.heap[++f.heap_len]=ot<2?++ot:0)]=1,f.depth[E]=0,f.opt_len--,V&&(f.static_len-=J[2*E+1]);for(S.max_code=ot,P=f.heap_len>>1;1<=P;P--)lt(f,$,P);for(E=Y;P=f.heap[1],f.heap[1]=f.heap[f.heap_len--],lt(f,$,1),q=f.heap[1],f.heap[--f.heap_max]=P,f.heap[--f.heap_max]=q,$[2*E]=$[2*P]+$[2*q],f.depth[E]=(f.depth[P]>=f.depth[q]?f.depth[P]:f.depth[q])+1,$[2*P+1]=$[2*q+1]=E,f.heap[1]=E++,lt(f,$,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(st,mt){var Ot,wt,Ht,ut,se,hi,_t=mt.dyn_tree,$i=mt.max_code,vr=mt.stat_desc.static_tree,yr=mt.stat_desc.has_stree,wr=mt.stat_desc.extra_bits,Ui=mt.stat_desc.extra_base,Mt=mt.stat_desc.max_length,ne=0;for(ut=0;ut<=m;ut++)st.bl_count[ut]=0;for(_t[2*st.heap[st.heap_max]+1]=0,Ot=st.heap_max+1;Ot<c;Ot++)Mt<(ut=_t[2*_t[2*(wt=st.heap[Ot])+1]+1]+1)&&(ut=Mt,ne++),_t[2*wt+1]=ut,$i<wt||(st.bl_count[ut]++,se=0,Ui<=wt&&(se=wr[wt-Ui]),hi=_t[2*wt],st.opt_len+=hi*(ut+se),yr&&(st.static_len+=hi*(vr[2*wt+1]+se)));if(ne!==0){do{for(ut=Mt-1;st.bl_count[ut]===0;)ut--;st.bl_count[ut]--,st.bl_count[ut+1]+=2,st.bl_count[Mt]--,ne-=2}while(0<ne);for(ut=Mt;ut!==0;ut--)for(wt=st.bl_count[ut];wt!==0;)$i<(Ht=st.heap[--Ot])||(_t[2*Ht+1]!==ut&&(st.opt_len+=(ut-_t[2*Ht+1])*_t[2*Ht],_t[2*Ht+1]=ut),wt--)}}(f,S),ft($,ot,f.bl_count)}function i(f,S,P){var q,E,$=-1,J=S[1],V=0,Y=7,ot=4;for(J===0&&(Y=138,ot=3),S[2*(P+1)+1]=65535,q=0;q<=P;q++)E=J,J=S[2*(q+1)+1],++V<Y&&E===J||(V<ot?f.bl_tree[2*E]+=V:E!==0?(E!==$&&f.bl_tree[2*E]++,f.bl_tree[2*A]++):V<=10?f.bl_tree[2*C]++:f.bl_tree[2*j]++,$=E,ot=(V=0)===J?(Y=138,3):E===J?(Y=6,3):(Y=7,4))}function M(f,S,P){var q,E,$=-1,J=S[1],V=0,Y=7,ot=4;for(J===0&&(Y=138,ot=3),q=0;q<=P;q++)if(E=J,J=S[2*(q+1)+1],!(++V<Y&&E===J)){if(V<ot)for(;W(f,E,f.bl_tree),--V!=0;);else E!==0?(E!==$&&(W(f,E,f.bl_tree),V--),W(f,A,f.bl_tree),K(f,V-3,2)):V<=10?(W(f,C,f.bl_tree),K(f,V-3,3)):(W(f,j,f.bl_tree),K(f,V-11,7));$=E,ot=(V=0)===J?(Y=138,3):E===J?(Y=6,3):(Y=7,4)}}h(N);var z=!1;function v(f,S,P,q){K(f,(g<<1)+(q?1:0),3),function(E,$,J,V){nt(E),X(E,J),X(E,~J),r.arraySet(E.pending_buf,E.window,$,J,E.pending),E.pending+=J}(f,S,P)}n._tr_init=function(f){z||(function(){var S,P,q,E,$,J=new Array(m+1);for(E=q=0;E<w-1;E++)for(D[E]=q,S=0;S<1<<O[E];S++)l[q++]=E;for(l[q-1]=E,E=$=0;E<16;E++)for(N[E]=$,S=0;S<1<<I[E];S++)H[$++]=E;for($>>=7;E<u;E++)for(N[E]=$<<7,S=0;S<1<<I[E]-7;S++)H[256+$++]=E;for(P=0;P<=m;P++)J[P]=0;for(S=0;S<=143;)Q[2*S+1]=8,S++,J[8]++;for(;S<=255;)Q[2*S+1]=9,S++,J[9]++;for(;S<=279;)Q[2*S+1]=7,S++,J[7]++;for(;S<=287;)Q[2*S+1]=8,S++,J[8]++;for(ft(Q,b+1,J),S=0;S<u;S++)_[2*S+1]=5,_[2*S]=at(S,5);et=new tt(Q,O,p+1,b,m),F=new tt(_,I,0,u,m),it=new tt(new Array(0),B,0,k,y)}(),z=!0),f.l_desc=new T(f.dyn_ltree,et),f.d_desc=new T(f.dyn_dtree,F),f.bl_desc=new T(f.bl_tree,it),f.bi_buf=0,f.bi_valid=0,rt(f)},n._tr_stored_block=v,n._tr_flush_block=function(f,S,P,q){var E,$,J=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(V){var Y,ot=4093624447;for(Y=0;Y<=31;Y++,ot>>>=1)if(1&ot&&V.dyn_ltree[2*Y]!==0)return a;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return o;for(Y=32;Y<p;Y++)if(V.dyn_ltree[2*Y]!==0)return o;return a}(f)),bt(f,f.l_desc),bt(f,f.d_desc),J=function(V){var Y;for(i(V,V.dyn_ltree,V.l_desc.max_code),i(V,V.dyn_dtree,V.d_desc.max_code),bt(V,V.bl_desc),Y=k-1;3<=Y&&V.bl_tree[2*Z[Y]+1]===0;Y--);return V.opt_len+=3*(Y+1)+5+5+4,Y}(f),E=f.opt_len+3+7>>>3,($=f.static_len+3+7>>>3)<=E&&(E=$)):E=$=P+5,P+4<=E&&S!==-1?v(f,S,P,q):f.strategy===4||$===E?(K(f,2+(q?1:0),3),yt(f,Q,_)):(K(f,4+(q?1:0),3),function(V,Y,ot,st){var mt;for(K(V,Y-257,5),K(V,ot-1,5),K(V,st-4,4),mt=0;mt<st;mt++)K(V,V.bl_tree[2*Z[mt]+1],3);M(V,V.dyn_ltree,Y-1),M(V,V.dyn_dtree,ot-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,J+1),yt(f,f.dyn_ltree,f.dyn_dtree)),rt(f),q&&nt(f)},n._tr_tally=function(f,S,P){return f.pending_buf[f.d_buf+2*f.last_lit]=S>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&S,f.pending_buf[f.l_buf+f.last_lit]=255&P,f.last_lit++,S===0?f.dyn_ltree[2*P]++:(f.matches++,S--,f.dyn_ltree[2*(l[P]+p+1)]++,f.dyn_dtree[2*R(S)]++),f.last_lit===f.lit_bufsize-1},n._tr_align=function(f){K(f,2,3),W(f,x,Q),function(S){S.bi_valid===16?(X(S,S.bi_buf),S.bi_buf=0,S.bi_valid=0):8<=S.bi_valid&&(S.pending_buf[S.pending++]=255&S.bi_buf,S.bi_buf>>=8,S.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,s,n){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,n){(function(r){(function(a,o){if(!a.setImmediate){var h,g,w,p,b=1,u={},k=!1,c=a.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(a);m=m&&m.setTimeout?m:a,h={}.toString.call(a.process)==="[object process]"?function(A){process.nextTick(function(){y(A)})}:function(){if(a.postMessage&&!a.importScripts){var A=!0,C=a.onmessage;return a.onmessage=function(){A=!1},a.postMessage("","*"),a.onmessage=C,A}}()?(p="setImmediate$"+Math.random()+"$",a.addEventListener?a.addEventListener("message",x,!1):a.attachEvent("onmessage",x),function(A){a.postMessage(p+A,"*")}):a.MessageChannel?((w=new MessageChannel).port1.onmessage=function(A){y(A.data)},function(A){w.port2.postMessage(A)}):c&&"onreadystatechange"in c.createElement("script")?(g=c.documentElement,function(A){var C=c.createElement("script");C.onreadystatechange=function(){y(A),C.onreadystatechange=null,g.removeChild(C),C=null},g.appendChild(C)}):function(A){setTimeout(y,0,A)},m.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var C=new Array(arguments.length-1),j=0;j<C.length;j++)C[j]=arguments[j+1];var O={callback:A,args:C};return u[b]=O,h(b),b++},m.clearImmediate=d}function d(A){delete u[A]}function y(A){if(k)setTimeout(y,0,A);else{var C=u[A];if(C){k=!0;try{(function(j){var O=j.callback,I=j.args;switch(I.length){case 0:O();break;case 1:O(I[0]);break;case 2:O(I[0],I[1]);break;case 3:O(I[0],I[1],I[2]);break;default:O.apply(o,I)}})(C)}finally{d(A),k=!1}}}}function x(A){A.source===a&&typeof A.data=="string"&&A.data.indexOf(p)===0&&y(+A.data.slice(p.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(gr);var Ir=gr.exports;const br=fr(Ir),er="Blech Listen",Nr=3,ir="metal-sheet-lists",zt="metalSheetLists",si=class si extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=U`
      <drawer-import-button
        storegistkey="${ir}"
        title="${er}"
      ></drawer-import-button>

      <drawer-gist-item></drawer-gist-item>

      <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
    `,this.style.position="relative";const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(zt,[])}),t.ui.setExportHandler(async()=>{const e=new br;for(const n of this.uiStore.ui.get(zt)){const r=Yi(n),a=JSON.stringify(n);e.file(r,a)}const s=await e.generateAsync({type:"blob"});mr.saveAs(s,`blech-listen-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=er,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(zt,this.storeMetalSheetListsHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){console.debug("[PGDrawerMetalSheetLists.update]",{data:t}),Ni(this.uiStore,t,{storeDataKey:zt,getKey:gt})}async storeGistHandler(t){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),Ii(this.querySelector("drawer-gist-item"),t,{storeGistKey:ir,storeDataKey:zt,getFileName:Yi,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(t){if(console.debug("[PGDrawerMetalSheetLists.storeMetalSheetListsHandler]",{lists:t}),!t)return;const e=[...this.children].slice(Nr);for(;e.length>0;)this.removeChild(e.pop());for(const s of Mr(t)){const n=new _e;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.metalSheetListsPage,a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.format} - ${s.toolID} - ${s.date}"`)&&this.uiStore.ui.update(zt,r=>{const a=gt(s);return r.filter(o=>gt(o)!==a)})})}}};G(si,"register",()=>{customElements.define("pg-drawer-metal-sheet-lists",si)});let Oi=si;const rr="Vis Data",ni=class ni extends Lt{constructor(){super(),this.cleanup=new Tt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=U`
      <drawer-import-button
        storegistkey="vis-data"
        title="${rr}"
        disabled
      ></drawer-import-button>

      <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
          New Data
        </ui-button>
      </ui-drawer-group-item>
    `;const t=this.querySelector("drawer-import-button"),e=this.querySelector("ui-button[name=new]");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),e.ui.events.on("click",this.onClickNewData.bind(this))}connectedCallback(){super.connectedCallback(),this.ui.title=rr,this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){return t}async update(t){}onVisData(t){if(console.debug("[PGDrawerVisData.onVisData]",{lists:t}),!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new Se;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.visDataPage);const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",r=>r.filter(a=>a.title!==s.title))})}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new he;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};G(ni,"register",()=>{customElements.define("pg-drawer-vis-data",ni)});let Hi=ni;const sr="Vis",$r=2,nr="vis",Bt="vis",oi=class oi extends Lt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Tt,this.render()}render(){this.innerHTML=U`
      <drawer-import-button
        storegistkey="${nr}"
        title="${sr}"
      ></drawer-import-button>
      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("drawer-import-button");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Bt,[])}),t.ui.setExportHandler(async()=>{const e=new br;for(const n of this.uiStore.ui.get(Bt)){const r=Xi(n),a=JSON.stringify(n);e.file(r,a)}const s=await e.generateAsync({type:"blob"});mr.saveAs(s,`vis-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=sr,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Bt,this.storeVisHandler.bind(this),!0))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async toJSON(t){const e=h=>{const[g,w]=h.split(/[xX]/),p=parseFloat(g),b=parseFloat(w);return!p||!b?`${p}x${b}`:`${p>b?p:b}x${p<b?p:b}`},s=new Date,n=(s.getMonth()+1).toString().padStart(2,"0"),r=s.getDate().toString().padStart(2,"0"),a={date:s.getTime(),title:`${s.getFullYear()}-${n}-${r}`,data:[]},o=t.split(`
`);for(let h=0;h<o.length;h++){if(!o[h])continue;let[g,...w]=o[h].trim().replace(/\t/g," ").split(" ");g=g.trim();const{productName:p,format:b,newRest:u}=(()=>{let m="",d="";for(let y=0;y<w.length;y++)if(w[y].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){d=e(w[y]),w=w.slice(y+1);break}else m+=w[y]+" ";return{productName:m.trim(),format:e(d),newRest:w.map(y=>y.trim()).filter(y=>!!y)}})();if(!b)throw`missing format for "${p}" (lotto: "${g}") in vis (txt) data!`;if(!(u[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${p}" with lotto "${g}"!`;const k=u.shift()||"",c=u.join(" ");a.data.push({lotto:g,name:p,format:b,thickness:parseFloat(k.replaceAll(",",".")),stamp:c})}return a}async validate(t){const e=n=>new Error(`invalid data for product:
${JSON.stringify(n,null,4)}`);let s=null;if(typeof t=="string")try{s=JSON.parse(t)}catch{return await this.toJSON(t)}else s=t;if(typeof s.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof s.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(s.data))throw new Error('invalid data: "data" not from type "array"');for(const n of s.data)if(typeof n.lotto!="string"||typeof n.name!="string"||typeof n.format!="string"||typeof n.thickness!="number"||typeof n.stamp!="string")throw e(n);return s}async update(t){console.debug("[PGDrawerVis.update]",{data:t}),Ni(this.uiStore,t,{storeDataKey:Bt,getKey:hr})}storeGistHandler(t){console.debug("[PGDrawerVis.storeGistHandler]",{data:t}),Ii(this.querySelector("drawer-gist-item"),t,{storeGistKey:nr,storeDataKey:Bt,getFileName:Xi,onUpdate:this.update.bind(this)})}storeVisHandler(t){if(console.debug("[PGDrawerVis.storeVisHandler]",{lists:t}),!t)return;const e=[...this.children].slice($r);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new xe;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ht.visPage,a=>{a.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update(Bt,r=>r.filter(a=>a.title!==s.title))})}}};G(oi,"register",()=>{customElements.define("pg-drawer-vis",oi)});let Mi=oi;const ai=class ai extends le{constructor(){super(),this.render()}render(){this.innerHTML=U`
      <div
        style="
          font-size: 0.85rem;
          font-variation-settings: var(--ui-input-fontVariation);
        "
      >
        ${dr}
      </div>

      <pg-drawer-alert-lists fold></pg-drawer-alert-lists>
      <pg-drawer-metal-sheet-lists fold></pg-drawer-metal-sheet-lists>
      <pg-drawer-vis fold></pg-drawer-vis>
      <pg-drawer-vis-data fold></pg-drawer-vis-data>
    `}};G(ai,"register",()=>{customElements.define("pg-drawer",ai)});let Di=ai;function Ii(L,t,{storeGistKey:e,storeDataKey:s,getFileName:n,onUpdate:r}){if(!t)return;const a=document.querySelector("ui-store"),o=t[e];if(!o){L.ui.set(null,null),L.ui.setPullHandler(null),L.ui.setPushHandler(null);return}L.ui.set(o.id,o.revision);let h;const g=()=>{h&&L.removeChild(h),h=new ie,L.appendChild(h)},w=()=>{h&&(L.removeChild(h),h=void 0)};L.ui.setPullHandler(async(p,b)=>{g();try{await jr(p,b,{beforeUpdate:async()=>{a.ui.set(s,[])},update:r,updateRevision:u=>{a.ui.update("gist",k=>(k[e]={id:p,revision:u},k))}})}finally{w()}}),L.ui.setPushHandler(async(p,b)=>{g();try{const u=a.ui.get(s);if(!Array.isArray(u)){alert("No data to push!");return}await Pr(p,b,u,{getFileName:n,updateRevision:k=>{a.ui.update("gist",c=>(c[e]={id:p,revision:k},c))}})}finally{w()}})}function Ni(L,t,{storeDataKey:e,getKey:s}){const n=s(t);if(L.ui.get(e).find(r=>s(r)===n)){L.ui.update(e,r=>r.map(a=>s(a)===n?t:a));return}L.ui.update(e,r=>[...r,t])}const Qt=class Qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.ui={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=U`
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
    `,this.input=this.shadowRoot.querySelector("ui-search")}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"active":this.setActive(s);break;case"prefix":this.setPrefix(s);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--search-bar-height","0rem"):(this.stackLayout.style.setProperty("--search-bar-height","4.5rem"),this.ui.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};G(Qt,"register",()=>{customElements.define("search-bar",Qt)}),G(Qt,"observedAttributes",["title","active","prefix"]);let ji=Qt;const Ur=U`
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
`,Zr=U`
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
`,Vr=U`
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
`,Wr=U`
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
`,li=class li extends ae{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=U`
      <ui-app-bar-item name="menu" slot="left">
        <ui-icon-button ghost> ${Zr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="back" slot="left" style="display: none">
        <ui-icon-button ghost> ${Ur} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="title" slot="center">
        <h4 class="title" style="white-space: nowrap;"></h4>
      </ui-app-bar-item>

      <ui-app-bar-item name="edit" slot="right">
        <ui-icon-button ghost> ${Vr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="share" slot="right">
        <ui-icon-button ghost> ${Wr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="search" slot="right">
        <ui-icon-button ghost> ${ar} </ui-icon-button>
      </ui-app-bar-item>
    `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top")}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const s=this.uiStore.ui.get("edit").onClick;typeof s=="function"&&s()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var r;const s=((r=this.uiStore.ui.get("share"))==null?void 0:r())||null;if(!s)return;const n=async()=>{const a=document.createElement("a");for(const o of s.files)a.download=o.name,a.href="data:application/json;charset=utf-8,"+encodeURIComponent(await o.text()),a.click()};if(!navigator.canShare)return await n();if(navigator.canShare(s)){try{await navigator.share(s)}catch{await n()}return}await n()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",s=>({...s,active:!s.active}))),t}};G(li,"register",()=>{customElements.define("pg-app-bar",li)});let Pi=li;const ui=class ui extends HTMLElement{constructor(){super(),this.cleanup=new Tt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=U`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case ht.alertListsPage:this.setupAlertListsPage();break;case ht.alertPage:this.setupAlertPage();break;case ht.metalSheetListsPage:this.setupMetalSheetListsPage();break;case ht.visPage:this.setupVisPage();break;case ht.productPage:this.setupProductPage();break;case ht.visDataPage:break;default:this.setupNoPage()}}),this.stackLayout.ui.register("alert-lists",()=>new pe),this.stackLayout.ui.register("metal-sheet-lists",()=>new be),this.stackLayout.ui.register("vis",()=>new ye),this.stackLayout.ui.register("vis-data",()=>new we)}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.show()}setupAlertPage(){this.resetAppBar()}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.show()}setupVisPage(){this.resetAppBar()}setupProductPage(){this.resetAppBar()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};G(ui,"register",()=>{customElements.define("pg-app",ui)});let qi=ui;zr({onRegistered(L){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${dr}`),await L.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Er();ce.register();he.register();de.register();fe.register();pe.register();re.register();me.register();ge.register();Ei.register();be.register();ve.register();ye.register();we.register();Bi.register();Oi.register();Hi.register();Mi.register();Ri.register();Li.register();Ti.register();zi.register();ke.register();_e.register();Se.register();xe.register();Di.register();ji.register();Pi.register();qi.register();
