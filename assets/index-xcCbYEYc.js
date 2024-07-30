var Sr=Object.defineProperty;var Ji=S=>{throw TypeError(S)};var Cr=(S,t,e)=>t in S?Sr(S,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):S[t]=e;var K=(S,t,e)=>Cr(S,typeof t!="symbol"?t+"":t,e),Er=(S,t,e)=>t.has(S)||Ji("Cannot "+e);var xt=(S,t,e)=>(Er(S,t,"read from private field"),e?e.call(S):t.get(S)),Yi=(S,t,e)=>t.has(S)?Ji("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(S):t.set(S,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=e(n);fetch(n.href,r)}})();const Xi={onDragStart:null,onDragging:null,onDragEnd:null};function Ar(S,t={}){t={...Xi,...t};const e=()=>{const r=[...S.parentNode.children].indexOf(S);S.draggable=!0,S.ondragstart=o=>{o.dataTransfer.effectAllowed="move",o.dataTransfer.dropEffect="move",o.dataTransfer.setData("text/plain",r.toString()),t.onDragStart&&t.onDragStart(r)},S.ondragover=o=>(o.preventDefault(),!1),S.ondragenter=o=>{o.preventDefault(),t.onDragging&&t.onDragging(r)},S.ondrop=o=>{o.preventDefault(),o.dataTransfer.dropEffect="move";const a=parseInt(o.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(a,r)}},s=()=>{S.draggable=!1,S.ondragstart=null,S.ondragover=null,S.ondragenter=null,S.ondrop=null};return e(),{update(n){t={...Xi,...n},s(),e()},destroy:s}}var vt;class pt{constructor(){Yi(this,vt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return xt(this,vt)[t]||(xt(this,vt)[t]=[]),xt(this,vt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!xt(this,vt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let s=!1,n=0;for(const r of xt(this,vt)[t])r===e&&(xt(this,vt)[t].splice(n,1),s=!0),n++;if(!s)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(xt(this,vt)[t])for(const s of xt(this,vt)[t])s(e);return this}}vt=new WeakMap;function Qi(S,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,S.currentTarget.appendChild(e);const s=S.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${s.height/2}px`,e.style.left=`${s.width/2}px`):(e.style.top=`${S.clientY-s.top}px`,e.style.left=`${S.clientX-s.left}px`);const n=Math.max(s.width,s.height)*.02;return e.style.transform=`scale(${n}) translate(0, 0)`,e}function tr(S){S&&(S.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&S.remove()}),S.style.opacity="0")}const Lr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Tt(S,t={}){t={...Lr,...t};let e;const s=r=>{e=Qi(r,t)},n=()=>{tr(e)};return S.classList.add("ripple-container"),S.style.overflow="hidden",t.useClick===!0?S.addEventListener("click",r=>{e=Qi(r,t),tr(e)}):(S.addEventListener("pointerdown",s),S.addEventListener("pointerup",n),S.addEventListener("pointerleave",n)),()=>{S.classList.remove("ripple-container"),S.removeEventListener("pointerdown",s),S.removeEventListener("pointerup",n),S.removeEventListener("pointerleave",n)}}const P=String.raw;class Rt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ee=class Ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ee,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Ee)});let le=Ee;const Ae=class Ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ae,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ae)});let mi=Ae;const qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this,{centered:!0}));break}}};K(qt,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",qt)}),K(qt,"observedAttributes",["noripple"]);let gi=qt;const It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this,{centered:!0}));break}}};K(It,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",It)}),K(It,"observedAttributes",["noripple"]);let bi=It;const Le=class Le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Le,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Le)});let vi=Le;const Rr=P`
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
`,Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new Rt,this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){this.root.setAttribute("title",t||"")},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const s=this.root.shadowRoot.querySelector("dialog"),n=s.inert;s.inert=e,t?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=P`
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
              ${Rr}
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
    `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const s=this.shadowRoot.querySelector("dialog"),n=r=>r.preventDefault();s.addEventListener("cancel",n),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),s.removeEventListener("cancel",n)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":const n=this.shadowRoot.querySelector('[name="title"]');n.innerHTML=s||"";break}}};K(Ft,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",Ft)}),K(Ft,"observedAttributes",["title"]);let Ct=Ft;const Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"open":s!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}};K(Nt,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Nt)}),K(Nt,"observedAttributes",["open"]);let ue=Nt;const cr=P`
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
`,Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get fold(){return this.root.hasAttribute("fold")},set fold(t){if(!t){this.root.removeAttribute("fold");return}this.root.setAttribute("fold","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
                ${cr}
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
        `}};K(Pt,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Pt)}),K(Pt,"observedAttributes",["title"]);let Lt=Pt;const Re=class Re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Re,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",Re)});let yt=Re;const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get flex(){return this.root.getAttribute("flex")},set flex(t){if(!t){this.root.removeAttribute("flex");return}this.root.setAttribute("flex",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
                `;break}}};K($t,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",$t)}),K($t,"observedAttributes",["flex"]);let dt=$t;const Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
                `;break}}};K(Ut,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",Ut)}),K(Ut,"observedAttributes",["gap"]);let ce=Ut;const Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
                `;break}}};K(Vt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Vt)}),K(Vt,"observedAttributes",["gap"]);let Et=Vt;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRipple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.hasAttribute("ripple")},set ripple(t){if(!t){this.root.removeAttribute("ripple");return}this.root.setAttribute("ripple","")},get primary(){return this.root.getAttribute("primary")},set primary(t){if(!t){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},get secondary(){return this.root.getAttribute("primary")},set secondary(t){if(!t){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"ripple":this.setRipple(s);break;case"primary":this.setPrimary(s);break;case"secondary":this.setSecondary(s);break}}setRipple(t){if(t===null){this.disableRipple();return}this.enableRipple()}setPrimary(t){this.shadowRoot.querySelector("ui-primary").innerHTML=t||""}setSecondary(t){this.shadowRoot.querySelector("ui-secondary").innerHTML=t||""}enableRipple(){if(this.removeRipple||(this.removeRipple=Tt(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.removeRipple&&this.removeRipple(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};K(Zt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Zt)}),K(Zt,"observedAttributes",["ripple","secondary","primary"]);let yi=Zt;const Te=class Te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
      <style>
        :host {
          font-size: 1.1rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-primary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(Te,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Te)});let wi=Te;const ze=class ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
      <style>
        :host {
          font-size: 0.9rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(ze,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",ze)});let ee=ze;const Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get type(){return this.root.getAttribute("type")},set type(t){if(!t){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.root.shadowRoot.querySelector("input").min},set min(t){this.root.shadowRoot.querySelector("input").min=t},get max(){return this.root.shadowRoot.querySelector("input").max},set max(t){this.root.shadowRoot.querySelector("input").max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `;const t=this.shadowRoot.querySelector("input");t.type=this.getAttribute("type")||"text",t.oninput=()=>{this.ui.events.dispatch("input",t.value)},t.onchange=()=>{this.ui.events.dispatch("change",t.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"type":this.setType(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"min":this.setMin(s);break;case"max":this.setMax(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new ee,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setType(t){this.shadowRoot.querySelector("input").type=t!==null?t:""}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setMin(t){this.shadowRoot.querySelector("input").min=t}setMax(t){this.shadowRoot.querySelector("input").max=t}};K(Wt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Wt)}),K(Wt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let ki=Wt;const Be=class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};K(Be,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",Be)});let ie=Be;const Oe=class Oe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof ie)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
        <div class="icon"><ui-svg>${cr}</ui-svg></div>

        <slot></slot>
      </div>
    `;const t=s=>{const n=async r=>{(r.composedPath()||[]).forEach(o=>{o instanceof ie&&([...this.querySelectorAll("ui-select-option")].forEach(a=>a.removeAttribute("selected")),o.setAttribute("selected",""),this.ui.events.dispatch("change",o))})};this.classList.toggle("open")?(s.stopPropagation(),this.addEventListener("click",n)):setTimeout(()=>this.removeEventListener("click",n))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};K(Oe,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Oe)});let _i=Oe;const hr=P`
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
`,Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.root.hasAttribute("nosubmit")},set nosubmit(t){if(!t){this.root.removeAttribute("nosubmit");return}this.root.setAttribute("nosubmit","")},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.getAttribute("storagekey")},set storagekey(t){if(!t){this.root.removeAttribute("storagekey");return}this.root.setAttribute("storagekey",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
        <ui-icon-button name="submit" ghost>${hr}</ui-icon-button>
      </div>
    `;const t=this.shadowRoot.querySelector('[name="submit"]'),e=this.shadowRoot.querySelector("input");e.type="search",e.addEventListener("keydown",async n=>{this.ui.nosubmit||n.key==="Enter"&&t.click()});let s=null;e.addEventListener("input",async()=>{this.ui.storage&&(s!==null&&clearTimeout(s),s=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,e.value),s=null},250)),this.ui.events.dispatch("input",e.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",e.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"nosubmit":this.setNoSubmit(s);break;case"storagekey":this.setStorageKey(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new ee,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setNoSubmit(t){const e=this.shadowRoot.querySelector('[name="submit"]');if(t===null){e.style.display=null;return}e.style.display="none"}setStorageKey(t){if(!this.ui.storage)return;const e=this.shadowRoot.querySelector("input");e.value=localStorage.getItem(this.ui.storageprefix+t)||"",this.ui.events.dispatch("storage",e.value)}};K(Kt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Kt)}),K(Kt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let xi=Kt;const Gt=class Gt extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new pt,get current(){return this.root.getAttribute("current")},set current(t){if(!t){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var s,n;return((n=(s=this.data)==null?void 0:s[t])==null?void 0:n[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"current":s!==null&&this.setCurrent(s);break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.href)throw"Missing href attribute!";try{this.data=(await fetch(e.ui.href)).json()}catch(s){console.error(s)}this.ui.events.dispatch("change",e)}}};K(Gt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Gt)}),K(Gt,"observedAttributes",["current"]);let Si=Gt;const He=class He extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(He,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",He)});let Ci=He;const Jt=class Jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){if(!t){this.root.removeAttribute("nobg");return}this.root.setAttribute("nobg","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"nobg":this.setNoBg(s);break}}setNoBg(t){if(t===null){this.shadowRoot.querySelector(".background").style.display=null;return}this.shadowRoot.querySelector(".background").style.display="none"}};K(Jt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Jt)}),K(Jt,"observedAttributes",["nobg"]);let re=Jt;const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(De,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",De)});let At=De;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new pt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,s=!1){if(this.lock)return;const n=this.root.pages[t]();this.root.stack.push(this.root.appendChild(n)),typeof e=="function"&&setTimeout(()=>e(n));let r=null;this.size()>1&&!s&&(r=this.root.stack[this.root.stack.length-2],r.parentElement.removeChild(r)),this.root.dispatchChangeEvent(r),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
      <style>
        :host {
          display: block !important;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};K(Me,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Me)});let Ei=Me;const Yt=class Yt extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new pt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,s=!1){if(s&&this.storageprefix){const n=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=n??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(Yt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Yt)}),K(Yt,"observedAttributes",["storageprefix"]);let Ai=Yt;const Xt=class Xt extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.ui={root:this,get auto(){return this.root.hasAttribute("auto")},set auto(t){if(!t){this.root.removeAttribute("auto");return}this.root.setAttribute("auto","")},get mode(){return this.root.getAttribute("mode")},set mode(t){if(!t){this.root.removeAttribute("mode");return}this.root.setAttribute("mode",t)},add(t,e){this.root.themes[t]=e},set(t){var s;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((s=this.root.currentTheme)==null?void 0:s.name)==t)return;{const n=document.getElementById("theme");n&&(document.head.removeChild(n),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,s){switch(t){case"auto":this.setAuto(s);break;case"mode":this.setMode(s);break}}setAuto(t,e=document.body){if(t===null){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=s=>{s.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}}};K(Xt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Xt)}),K(Xt,"observedAttributes",["auto","mode"]);let Li=Xt;const je=class je extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(je,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",je)});let Ri=je;function Tr(){mi.register(),le.register(),gi.register(),bi.register(),vi.register(),Ct.register(),yt.register(),Lt.register(),ue.register(),dt.register(),ce.register(),Et.register(),ki.register(),xi.register(),ie.register(),_i.register(),Ci.register(),Si.register(),re.register(),Ei.register(),At.register(),Ai.register(),Ri.register(),yi.register(),wi.register(),ee.register(),Li.register()}const zr="modulepreload",Br=function(S){return"/pg-vis.github.io/"+S},er={},Or=function(t,e,s){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),o=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));n=Promise.all(e.map(a=>{if(a=Br(a),a in er)return;er[a]=!0;const c=a.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${g}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":zr,c||(y.as="script",y.crossOrigin=""),y.href=a,o&&y.setAttribute("nonce",o),document.head.appendChild(y),c)return new Promise((p,b)=>{y.addEventListener("load",p),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(r=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=r,window.dispatchEvent(o),!o.defaultPrevented)throw r})};function Hr(S={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:n,onRegisteredSW:r,onRegisterError:o}=S;let a,c;const g=async(p=!0)=>{await c};async function y(){if("serviceWorker"in navigator){if(a=await Or(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(p=>{o==null||o(p)}),!a)return;a.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),a.addEventListener("installed",p=>{p.isUpdate||s==null||s()}),a.register({immediate:t}).then(p=>{r?r("/pg-vis.github.io/sw.js",p):n==null||n(p)}).catch(p=>{o==null||o(p)})}}return c=y(),g}const qe=class qe extends Ct{constructor(t){super(),this.title=t,this.gistID=null,this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=P`
      <ui-flex-grid-item>
        <ui-label
          secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title=`Import "${this.title}"`}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};K(qe,"register",()=>{customElements.define("import-dialog",qe)});let he=qe;const Ie=class Ie extends Ct{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.name=null,this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=P`
      <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="New Vis Data",this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",s=>(s.unshift({title:this.name.ui.value,data:[]}),s)),this.ui.close()}),this.appendChild(t)}};K(Ie,"register",()=>{customElements.define("new-vis-data-dialog",Ie)});let de=Ie;const Fe=class Fe extends Ct{constructor(){super(),this.token=null,this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=P`
      <ui-flex-grid-item>
        <ui-label
          secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Gist Token"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};K(Fe,"register",()=>{customElements.define("push-dialog",Fe)});let fe=Fe;const ot={alert:"alert",alertLists:"alert-lists",metalSheetLists:"metal-sheet-lists",vis:"vis",product:"product",visLists:"vis-lists",visData:"vis-data"},Ne=class Ne extends At{constructor(){super(),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}},this.render()}render(){this.innerHTML=P`
      <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}connectedCallback(){super.connectedCallback(),this.ui.name=ot.alert}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(dr({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};K(Ne,"register",()=>{customElements.define("alert-page",Ne)});let pe=Ne;const Pe=class Pe extends At{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new pe,this.list=null,this.ui={...this.ui,root:this,set(t){const e=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.uiStore.ui.set("search",{active:!1}),this.root.searchBar.ui.input().ui.storagekey=fr(this.root.list),setTimeout(()=>this.root.renderList())}},this.render()}render(){this.innerHTML=P`
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
    `,this.searchBar=this.querySelector("search-bar")}connectedCallback(){super.connectedCallback(),this.ui.name=ot.alertLists,this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.ui.active=e,await this.search(e?this.searchBar.ui.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.register("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("alert")}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(s=>{if(!this.searchBar.ui.active){s.style.display="flex";return}if(this.is(this.getAlertFromElement(s),e)){s.style.display="flex";return}s.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),s=new RegExp(this.searchBar.ui.input().ui.value.replaceAll(" ",".*"));for(let n=0;n<this.list.data.length;n++){if(e.active===!0&&!this.is(this.list.data[n],s))return;setTimeout(()=>this.renderListElement(t,this.list.data[n],n<this.list.data.length-1))}}renderListElement(t,e,s){t.appendChild(dr({alert:e,container:"li",hasBorder:s,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const s=[];for(let n=t.from;n<=t.to;n++)s.push(n);return!!`${s.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,s=this.getAlertFromElement(e);this.alertPage.ui.set(s),this.stackLayout.ui.set(ot.alert,null,!0)}};K(Pe,"register",()=>{customElements.define("alert-lists-page",Pe)});let me=Pe;function dr({alert:S,container:t,hasBorder:e=!0,hasRipple:s=!0,onClick:n=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=P`
    <div class="title">${S.alert}</div>

    <div
      class="number"
      style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
    >
      ${S.from===S.to?S.from:`${S.from}..${S.to}`}
    </div>
  `,r.setAttribute("data-from",S.from.toString()),r.setAttribute("data-to",S.to.toString()),r.setAttribute("data-alert",S.alert),r.setAttribute("data-desc",S.desc.join(`
`)),r.onclick=n,s&&(Tt(r),r.style.cursor="pointer",r.role="button"),r}function Dr(S){return`AlarmListen_${S.title}.json`}function fr(S){return`${S.title}`}const $e=class $e extends ce{constructor(){super(),this.events=new pt,this.render()}render(){this.innerHTML=P`
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
    `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)})}};K($e,"register",()=>{customElements.define("metal-sheet-actions",$e)});let Ti=$e;function ir(S){return`BlechListen_${S.format}_${S.toolID}.json`}function gt(S){return`${S.format}:${S.toolID}`}const Ue=class Ue extends Ct{constructor(t){super(),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.render()}render(){const t=new Et;t.ui.gap="0.5rem",t.innerHTML=P`
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
    `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){switch(super.connectedCallback(),this.mode){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}}set(t,e,s=-1){const n=this.querySelector('[name="format"] ui-input');n.ui.value=t;const r=this.querySelector('[name="toolID"] ui-input');r.ui.value=e,this.querySelector('[name="press"] ui-select').ui.options().forEach(a=>{a.ui.selected=parseInt(a.ui.value)===s}),this.originFormat=t,this.originToolID=e}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=this.getData();s!==null&&(this.ui.events.dispatch("submit",s),this.ui.close())}),this.appendChild(t)}getData(){var c;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const s=this.querySelector('[name="toolID"] ui-input');t.toolID=s.ui.value;const n=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((c=n.ui.selected())==null?void 0:c.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const r=gt({format:this.originFormat,toolID:this.originToolID}),o=gt(t),a=this.uiStore.ui.get("metalSheetLists").find(g=>this.mode==="edit"&&r===o?!1:gt(g)===o);return a?(e.ui.invalid=a.format===t.format&&a.toolID!==t.toolID,s.ui.invalid=a.toolID===t.toolID,null):t}};K(Ue,"register",()=>{customElements.define("metal-sheet-create-dialog",Ue)});let se=Ue;const Ve=class Ve extends Ct{constructor(){super(),this.render()}render(){const t=new Et;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Eintrag bearbeiten"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=P`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="destructive">Delete</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const o=r.querySelector("ui-input");s.push(o.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};K(Ve,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",Ve)});let ge=Ve;const Ze=class Ze extends Ct{constructor(){super(),this.render()}render(){const t=new Et;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Neuer Eintrag"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let n=0;n<t.length;n++){const r=new dt;r.innerHTML=P`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=P`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],n=this.querySelector("ui-flex-grid");for(const r of[...n.children]){const o=r.querySelector("ui-input");s.push(o.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};K(Ze,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",Ze)});let be=Ze;const We=class We extends At{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const s=gt(t);return e=[...e.filter(n=>gt(n)!==s),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(s=>gt(s)!==t),e))}},this.render()}render(){this.innerHTML=P`
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
    `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.list)return;for(const n of this.list.data.table.header){const r=document.createElement("th");r.style.textAlign="center",r.innerHTML=n,t.appendChild(r)}let s=null;for(let n=0;n<this.list.data.table.data.length;n++){const r=document.createElement("tr");r.style.cursor="pointer",r.role="button",r.onclick=()=>this.createModifyEntryDialog(n),e.appendChild(r),Ar(r,{onDragEnd:(o,a)=>{if(s!==null){if(s<a){let c=this.list.data.table.data;c=[...c.slice(0,s),...c.slice(s+1,a+1),c[s],...c.slice(a+1)],this.list.data.table.data=c,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(s>a){let c=this.list.data.table.data;c=[...c.slice(0,a),c[s],...c.slice(a,s),...c.slice(s+1)],this.list.data.table.data=c,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(c=>{c.style.background="inherit",c.style.color="inherit"}),s=null}},onDragging:o=>{s!==null&&[...e.children].forEach((a,c)=>{if(c!==o){a.style.background="inherit",a.style.color="inherit";return}a.style.background="var(--ui-primary-bgColor)",a.style.color="var(--ui-primary-color)"})},onDragStart:o=>{s=o}});for(const o of this.list.data.table.data[n]){const a=document.createElement("td");a.style.textAlign="center",a.innerHTML=o,r.appendChild(a)}}}connectedCallback(){super.connectedCallback(),this.ui.name=ot.metalSheetLists,this.uiStore.ui.set("edit",{onClick:async()=>{const t=new se("edit");t.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(gt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}createMetalSheetActions(){this.querySelector("metal-sheet-actions").events.on("new-entry",()=>this.createNewEntryDialog())}createModifyEntryDialog(t){const e=new ge;e.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",s=>{this.list.data.table.data[t]=s,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new be;t.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};K(We,"register",()=>{customElements.define("metal-sheet-lists-page",We)});let ve=We;function pr({product:S,events:t=null,ripple:e=!0}){const s=document.createElement("div");s.classList.add("vis-item"),s.role="button",s.setAttribute("data-value",S.lotto+" "+S.name+" "+S.format+" "+S.stamp+" "+S.thickness+"mm"),s.style.display="block",s.style.position="relative",s.style.overflow="hidden",s.style.borderTop="1px solid var(--ui-borderColor)",s.style.borderBottom="1px solid var(--ui-borderColor)",s.style.margin="var(--ui-spacing) 0",s.style.cursor="pointer",s.innerHTML=P`
    <ui-flex-grid>
      <ui-flex-grid-row style="font-size: 1.1rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div
            name="lotto"
            style="font-weight: bold; padding: var(--ui-spacing);"
            align="right"
          >
            ${S.lotto}
          </div>

          <div
            name="name"
            style="font-weight: lighter; padding: var(--ui-spacing);"
          >
            ${S.name}
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>

      <ui-flex-grid-row style="font-size: 0.95rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div name="format" style="padding: var(--ui-spacing);" align="right">
            ${S.format}
          </div>

          <div name="stamp" style="padding: var(--ui-spacing);">
            ${S.stamp}
          </div>

          <div name="thickness" style="padding: var(--ui-spacing);">
            ${S.thickness}mm
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    </ui-flex-grid>
  `;let n;return e&&(n=Tt(s,{useClick:!0})),t!==null&&(s.onclick=()=>{t.dispatch("click",S)}),{destroy:()=>{n&&n()},element:s}}function rr(S){return`Vis_${S.date}.json`}function mr(S){return`${S.title}`}const Ke=class Ke extends At{constructor(){super(),this.ui={...this.ui,root:this,set(t){this.root.replaceChild(pr({product:t,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}},this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=P`
      <style>
        :host {
          padding-top: var(--ui-app-bar-height);
        }
      </style>
    `}render(){this.innerHTML=P`
      <span class="placeholder"></span>
      <div class="content"></div>
    `}connectedCallback(){super.connectedCallback(),this.ui.name=ot.product}};K(Ke,"register",()=>{customElements.define("product-page",Ke)});let ye=Ke;const Ge=class Ge extends At{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,this.root.setAppBarTitle(),t===null){this.root.searchBar.ui.input().ui.storagekey=null;return}this.root.searchBar.ui.input().ui.storagekey=mr(t)}},this.render()}render(){this.innerHTML=P`
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
    `,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.ui.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))})}connectedCallback(){super.connectedCallback(),this.ui.name=ot.vis,this.stackLayout.ui.register("product",()=>new ye),this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("product")}async update(t=null){console.debug("[VisPage.update]",{regex:t});const e=new re;e.ui.nobg=!0;const s=this.querySelector(".container");s.appendChild(e);const n=this.querySelector(".list");for(;n.firstChild;)n.removeChild(n.firstChild);if(!this.list)return;const r=new pt;r.on("click",o=>{this.stackLayout.ui.set(ot.product,a=>{a.ui.set(o)},!0)});for(let o=0;o<this.list.data.length;o++)(async(a,c)=>{setTimeout(async()=>{const g=pr({product:c,events:r}).element;this.checkItem(g,t),(a>this.list.data.length-1||g.style.display!=="none")&&e.parentElement&&s.removeChild(e),n.appendChild(g)})})(o,this.list.data[o])}async search(t){const e=this.getRegExp(t),s=this.querySelector(".list");console.debug("[VisPage.search]",e);for(const n of[...s.children])this.checkItem(n,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};K(Ge,"register",()=>{customElements.define("vis-page",Ge)});let we=Ge;const Je=class Je extends At{constructor(){super(),this.render()}render(){this.innerHTML=P``}connectedCallback(){this.ui.name=ot.visData}};K(Je,"register",()=>{customElements.define("vis-data-page",Je)});let ke=Je;const gr="v0.0.31.dev",Ye=class Ye extends ue{constructor(){super(),this.render()}render(){this.innerHTML=P`
      <div
        style="
          font-size: 0.85rem;
          font-variation-settings: var(--ui-input-fontVariation);
        "
      >
        ${gr}
      </div>

      <pg-drawer-group-alert-lists fold></pg-drawer-group-alert-lists>

      <pg-drawer-group-metal-sheet-lists
        fold
      ></pg-drawer-group-metal-sheet-lists>

      <pg-drawer-group-vis fold></pg-drawer-group-vis>

      <pg-drawer-group-vis-lists fold></pg-drawer-group-vis-lists>

      <pg-drawer-group-vis-data fold></pg-drawer-group-vis-data>
    `}};K(Ye,"register",()=>{customElements.define("pg-drawer",Ye)});let zi=Ye;class Ui{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const s=await e.json();this.data={revision:s.history.length,files:{},owner:{login:s.owner.login}};for(const[n,r]of Object.entries(s.files))this.data.files[n]={filename:r.filename,content:JSON.parse(r.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function Mr(S,t,{beforeUpdate:e=null,update:s,updateRevision:n}){const o=await new Ui(S).get();let a=!1;o.revision>t?a=confirm(`Upgrade zu revision "${o.revision}"`):o.revision<t?a=confirm(`Downgrade auf revision "${o.revision}"`):a=confirm(`Already up to date! Reload? (revision: ${o.revision})`),a&&(typeof e=="function"&&await e(),Object.values(o.files).forEach(c=>s(c.content)),n(o.revision))}async function jr(S,t,e,{getFileName:s,updateRevision:n}){const r=new fe;r.ui.events.on("close",()=>{document.body.removeChild(r)}),r.ui.events.on("submit",async o=>{if(!o)return;const a=new Ui(S,o),c=await a.get();if(c.revision>t){alert(`Gist revision is newer then the current revision (${c.revision})`);return}const g=Object.values(c.files).map(b=>JSON.stringify(b.content)).sort(),y=Object.values(e).map(b=>JSON.stringify(b)).sort();if(JSON.stringify(g)===JSON.stringify(y)){alert("Nope, no patching needed... already up to date...");return}const p={};e.forEach(b=>{p[s(b)]={content:JSON.stringify(b)}});for(const b of Object.keys(c.files))Object.hasOwn(p,b)||(p[b]=null);try{console.debug(await a.patch(p))}catch(b){console.error(b);return}n(t+1)}),document.body.appendChild(r),r.ui.open(!0)}function Vi(S,t,{storeGistKey:e,storeDataKey:s,getFileName:n,onUpdate:r}){if(!t)return;const o=document.querySelector("ui-store"),a=t[e];if(!a){S.ui.set(null,null),S.ui.setPullHandler(null),S.ui.setPushHandler(null);return}S.ui.set(a.id,a.revision);let c;const g=()=>{c&&S.removeChild(c),c=new re,S.appendChild(c)},y=()=>{c&&(S.removeChild(c),c=void 0)};S.ui.setPullHandler(async(p,b)=>{g();try{await Mr(p,b,{beforeUpdate:async()=>{o.ui.set(s,[])},update:r,updateRevision:h=>{o.ui.update("gist",w=>(w[e]={id:p,revision:h},w))}})}finally{y()}}),S.ui.setPushHandler(async(p,b)=>{g();try{const h=o.ui.get(s);if(!Array.isArray(h)){alert("No data to push!");return}await jr(p,b,h,{getFileName:n,updateRevision:w=>{o.ui.update("gist",u=>(u[e]={id:p,revision:w},u))}})}finally{y()}})}function di(S,t,{storeDataKey:e,getKey:s}){const n=s(t);if(S.ui.get(e).find(r=>s(r)===n)){S.ui.update(e,r=>r.map(o=>s(o)===n?t:o));return}S.ui.update(e,r=>[...r,t])}const Xe=class Xe extends yt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.onPull=null,this.onPush=null,this.ui={...this.ui,root:this,set(t,e){const s=this.root.querySelector("ui-secondary"),n=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",s.innerHTML=t,n.innerHTML=P`Revision: ${e}`):(this.root.style.display="none",s.innerHTML=P`&nbsp;`,n.innerHTML=P`Revision: -`),this.root.pullButton.onclick=()=>{this.root.onPull&&this.root.onPull(t,e)},this.root.pushButton.onclick=()=>{this.root.onPush&&this.root.onPush(t,e)}},setPullHandler(t){this.root.onPull=t},setPushHandler(t){this.root.onPush=t}},this.render()}render(){this.innerHTML=P`
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
    `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}};K(Xe,"register",()=>{customElements.define("drawer-gist-item",Xe)});let Bi=Xe;const Qe=class Qe extends yt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=P`
      <ui-button variant="full" color="secondary">Neu</ui-button>
    `,this.querySelector("ui-button").ui.events.on("click",()=>this.onClick())}onClick(){const t=new se("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",s=>(s=[...s,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],s))}),document.body.appendChild(t),t.ui.open(!0)}};K(Qe,"register",()=>{customElements.define("drawer-new-metal-sheet-list-button",Qe)});let Oi=Qe;const ti=class ti extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};K(ti,"register",()=>{customElements.define("drawer-revision",ti)});let Hi=ti;const fi=P`
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
`,ei=class ei extends yt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title)}},this.render()}render(){this.innerHTML=P`
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
            ${fi}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t){const e=document.createElement("span");e.innerHTML=P` <ui-primary>${t}</ui-primary> `,this.querySelector("ui-button").appendChild(e)}};K(ei,"register",()=>{customElements.define("pg-drawer-item-alert-list",ei)});let _e=ei;const ii=class ii extends yt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){var s;this.root.data=t;let e=-1;typeof((s=t.data)==null?void 0:s.press)=="number"&&(e=t.data.press),this.root.setText(t.format,t.toolID,e)}},this.render()}render(){this.innerHTML=P`
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
            ${fi}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e,s){const n=document.createElement("span");n.innerHTML=P`
      <ui-primary>
        <span>${t}</span>
        <span style="font-size: 0.85em;">
          ${s>-1?"[P"+s+"]":""}
        </span>
      </ui-primary>
      <br />
    `,n.innerHTML+=P`
      <ui-secondary>
        <span>${e}</span>
      </ui-secondary>
    `,this.querySelector("ui-button").appendChild(n)}};K(ii,"register",()=>{customElements.define("pg-drawer-item-metal-sheet-list",ii)});let xe=ii;const ri=class ri extends yt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,t.data.length)}},this.render()}render(){this.innerHTML=P`
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
            ${fi}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e){const s=document.createElement("span");s.innerHTML=P` <ui-primary>${t}</ui-primary><br /> `,s.innerHTML+=P`
      <ui-secondary>${e} Einträge</ui-secondary>
    `,this.querySelector("ui-button").appendChild(s)}};K(ri,"register",()=>{customElements.define("pg-drawer-item-vis",ri)});let Se=ri;const si=class si extends yt{constructor(){super(),this.data=null,this.ui={...this.ui,root:this,events:new pt,set(t){this.root.data=t,this.root.setText(t.title,null)}},this.render()}render(){this.innerHTML=P`
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
            ${fi}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `;const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)}),e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)})}setText(t,e=null){const s=document.createElement("span");s.innerHTML=P` <ui-primary>${t}</ui-primary> `,e!==null&&(s.innerHTML+=P`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(s)}};K(si,"register",()=>{customElements.define("pg-drawer-item-vis-data",si)});let Ce=si;function qr(S){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const s of e.currentTarget.files){const n=new FileReader;n.onload=()=>{if(typeof n.result=="string")try{S(n.result,s)}catch(r){alert(`Parse data failed: ${r}`)}},n.onerror=()=>{alert(`Read file "${s.name}" failed!`)},n.readAsText(s)}},t.click()}function Ir(S){const t=[],e=S.map(s=>`${s.title}`).sort();for(const s of e)t.push(S.find(n=>`${n.title}`===s));return t}function Fr(S){let t=[];const e=S.map(s=>gt(s)).sort();for(const s of e)t.push(S.find(n=>gt(n)===s));return t}function br(S){const t=e=>new Error(`invalid data for product:
${JSON.stringify(e,null,4)}`);if(typeof S.lotto!="string"||typeof S.name!="string"||typeof S.format!="string"||typeof S.thickness!="number"||typeof S.stamp!="string")throw t(S);return S}function Nr(S){if(typeof S=="string")try{S=JSON.parse(S)}catch{return $r(S)}else S=S;if(typeof S.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof S.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(S.data))throw new Error('invalid data: "data" not from type "array"');for(const t of S.data)br(t);return S}function Pr(S){if(typeof S=="string"&&(S=JSON.parse(S)),typeof S.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof S.name!="string")throw new Error('invalid data: missing "name" from type "string"');if(typeof S.allowDeletion!="boolean"&&(S.allowDeletion=!0),!Array.isArray(S.data))throw new Error('invalid data: "data" from type "array"');for(const t of S.data)br(t);return S}function $r(S){const t=a=>{const[c,g]=a.split(/[xX]/),y=parseFloat(c),p=parseFloat(g);return!y||!p?`${y}x${p}`:`${y>p?y:p}x${y<p?y:p}`},e=new Date,s=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),r={date:e.getTime(),title:`${e.getFullYear()}-${s}-${n}`,data:[]},o=S.split(`
`);for(let a=0;a<o.length;a++){if(!o[a])continue;let[c,...g]=o[a].trim().replace(/\t/g," ").split(" ");c=c.trim();const{productName:y,format:p,newRest:b}=(()=>{let u="",m="";for(let d=0;d<g.length;d++)if(g[d].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){m=t(g[d]),g=g.slice(d+1);break}else u+=g[d]+" ";return{productName:u.trim(),format:t(m),newRest:g.map(d=>d.trim()).filter(d=>!!d)}})();if(!p)throw`missing format for "${y}" (lotto: "${c}") in vis (txt) data!`;if(!(b[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${y}" with lotto "${c}"!`;const h=b.shift()||"",w=b.join(" ");r.data.push({lotto:c,name:y,format:p,thickness:parseFloat(h.replaceAll(",",".")),stamp:w})}return r}const sr="Alarm Listen",Ur=2,Mt="alertLists",ni=class ni extends Lt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=P`
      <pg-drawer-item-import
        storegistkey="${ot.alertLists}"
        title="${sr}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Mt,[])})}connectedCallback(){super.connectedCallback(),this.ui.title=sr,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Mt,this.storeAlertListsHandler.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){const e=s=>new Error(`invalid data for alert:
${JSON.stringify(s,null,4)}`);if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(t,"data")||(t.data=[]);for(let s=0;s<t.data.length;s++){const n=t.data[s];if(typeof n.from!="number"||typeof n.to!="number"||typeof n.alert!="string"||!Array.isArray(n.desc)||(typeof n.desc=="string"&&(n.desc=n.desc.split(`
`)),n.desc.filter(r=>typeof r!="string").length))throw e(n)}return t}async update(t){console.debug("[PGDrawerAlertLists.update]",{data:t}),di(this.uiStore,t,{storeDataKey:Mt,getKey:fr})}async storeGistHandler(t){console.debug("[PGDrawerAlertLists.storeGistHandler]",{data:t}),Vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:ot.alertLists,storeDataKey:Mt,getFileName:Dr,onUpdate:this.update.bind(this)})}async storeAlertListsHandler(t){if(!t)throw"no data!";const e=[...this.children].slice(Ur);for(;e.length>0;)this.removeChild(e.pop());for(const s of Ir(t)){const n=new _e;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ot.alertLists,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.title} - ${s.date}`)&&this.uiStore.ui.update(Mt,r=>r.filter(o=>o.title!==s.title))})}}};K(ni,"register",()=>{customElements.define("pg-drawer-group-alert-lists",ni)});let Di=ni;var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function vr(S){return S&&S.__esModule&&Object.prototype.hasOwnProperty.call(S,"default")?S.default:S}var yr={exports:{}};(function(S,t){(function(e,s){s()})(St,function(){function e(g,y){return typeof y>"u"?y={autoBom:!1}:typeof y!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),y={autoBom:!y}),y.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function s(g,y,p){var b=new XMLHttpRequest;b.open("GET",g),b.responseType="blob",b.onload=function(){c(b.response,y,p)},b.onerror=function(){console.error("could not download file")},b.send()}function n(g){var y=new XMLHttpRequest;y.open("HEAD",g,!1);try{y.send()}catch{}return 200<=y.status&&299>=y.status}function r(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var y=document.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(y)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof St=="object"&&St.global===St?St:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(g,y,p){var b=o.URL||o.webkitURL,h=document.createElement("a");y=y||g.name||"download",h.download=y,h.rel="noopener",typeof g=="string"?(h.href=g,h.origin===location.origin?r(h):n(h.href)?s(g,y,p):r(h,h.target="_blank")):(h.href=b.createObjectURL(g),setTimeout(function(){b.revokeObjectURL(h.href)},4e4),setTimeout(function(){r(h)},0))}:"msSaveOrOpenBlob"in navigator?function(g,y,p){if(y=y||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(e(g,p),y);else if(n(g))s(g,y,p);else{var b=document.createElement("a");b.href=g,b.target="_blank",setTimeout(function(){r(b)})}}:function(g,y,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof g=="string")return s(g,y,p);var h=g.type==="application/octet-stream",w=/constructor/i.test(o.HTMLElement)||o.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||h&&w||a)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var x=m.result;x=u?x:x.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=x:location=x,b=null},m.readAsDataURL(g)}else{var d=o.URL||o.webkitURL,k=d.createObjectURL(g);b?b.location=k:location.href=k,b=null,setTimeout(function(){d.revokeObjectURL(k)},4e4)}});o.saveAs=c.saveAs=c,S.exports=c})})(yr);var Vr=yr.exports;const Zi=vr(Vr);function ae(S){throw new Error('Could not dynamically require "'+S+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var wr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(S,t){(function(e){S.exports=e()})(function(){return function e(s,n,r){function o(g,y){if(!n[g]){if(!s[g]){var p=typeof ae=="function"&&ae;if(!y&&p)return p(g,!0);if(a)return a(g,!0);var b=new Error("Cannot find module '"+g+"'");throw b.code="MODULE_NOT_FOUND",b}var h=n[g]={exports:{}};s[g][0].call(h.exports,function(w){var u=s[g][1][w];return o(u||w)},h,h.exports,e,s,n,r)}return n[g].exports}for(var a=typeof ae=="function"&&ae,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,s,n){var r=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(c){for(var g,y,p,b,h,w,u,m=[],d=0,k=c.length,x=k,A=r.getTypeOf(c)!=="string";d<c.length;)x=k-d,p=A?(g=c[d++],y=d<k?c[d++]:0,d<k?c[d++]:0):(g=c.charCodeAt(d++),y=d<k?c.charCodeAt(d++):0,d<k?c.charCodeAt(d++):0),b=g>>2,h=(3&g)<<4|y>>4,w=1<x?(15&y)<<2|p>>6:64,u=2<x?63&p:64,m.push(a.charAt(b)+a.charAt(h)+a.charAt(w)+a.charAt(u));return m.join("")},n.decode=function(c){var g,y,p,b,h,w,u=0,m=0,d="data:";if(c.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var k,x=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===a.charAt(64)&&x--,c.charAt(c.length-2)===a.charAt(64)&&x--,x%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|x):new Array(0|x);u<c.length;)g=a.indexOf(c.charAt(u++))<<2|(b=a.indexOf(c.charAt(u++)))>>4,y=(15&b)<<4|(h=a.indexOf(c.charAt(u++)))>>2,p=(3&h)<<6|(w=a.indexOf(c.charAt(u++))),k[m++]=g,h!==64&&(k[m++]=y),w!==64&&(k[m++]=p);return k}},{"./support":30,"./utils":32}],2:[function(e,s,n){var r=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function g(y,p,b,h,w){this.compressedSize=y,this.uncompressedSize=p,this.crc32=b,this.compression=h,this.compressedContent=w}g.prototype={getContentWorker:function(){var y=new o(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return y.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),y},getCompressedWorker:function(){return new o(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(y,p,b){return y.pipe(new a).pipe(new c("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},s.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,n){var r=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,n){var r=e("./utils"),o=function(){for(var a,c=[],g=0;g<256;g++){a=g;for(var y=0;y<8;y++)a=1&a?3988292384^a>>>1:a>>>1;c[g]=a}return c}();s.exports=function(a,c){return a!==void 0&&a.length?r.getTypeOf(a)!=="string"?function(g,y,p,b){var h=o,w=b+p;g^=-1;for(var u=b;u<w;u++)g=g>>>8^h[255&(g^y[u])];return-1^g}(0|c,a,a.length,0):function(g,y,p,b){var h=o,w=b+p;g^=-1;for(var u=b;u<w;u++)g=g>>>8^h[255&(g^y.charCodeAt(u))];return-1^g}(0|c,a,a.length,0):0}},{"./utils":32}],5:[function(e,s,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,s,n){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),c=e("./stream/GenericWorker"),g=r?"uint8array":"array";function y(p,b){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}n.magic="\b\0",a.inherits(y,c),y.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(g,p.data),!1)},y.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},y.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},y.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},n.compressWorker=function(p){return new y("Deflate",p)},n.uncompressWorker=function(){return new y("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,n){function r(h,w){var u,m="";for(u=0;u<w;u++)m+=String.fromCharCode(255&h),h>>>=8;return m}function o(h,w,u,m,d,k){var x,A,E=h.file,j=h.compression,O=k!==g.utf8encode,N=a.transformTo("string",k(E.name)),B=a.transformTo("string",g.utf8encode(E.name)),V=E.comment,Q=a.transformTo("string",k(V)),_=a.transformTo("string",g.utf8encode(V)),H=B.length!==E.name.length,l=_.length!==V.length,M="",et="",F="",it=E.dir,$=E.date,tt={crc32:0,compressedSize:0,uncompressedSize:0};w&&!u||(tt.crc32=h.crc32,tt.compressedSize=h.compressedSize,tt.uncompressedSize=h.uncompressedSize);var T=0;w&&(T|=8),O||!H&&!l||(T|=2048);var R=0,X=0;it&&(R|=16),d==="UNIX"?(X=798,R|=function(W,lt){var ft=W;return W||(ft=lt?16893:33204),(65535&ft)<<16}(E.unixPermissions,it)):(X=20,R|=function(W){return 63&(W||0)}(E.dosPermissions)),x=$.getUTCHours(),x<<=6,x|=$.getUTCMinutes(),x<<=5,x|=$.getUTCSeconds()/2,A=$.getUTCFullYear()-1980,A<<=4,A|=$.getUTCMonth()+1,A<<=5,A|=$.getUTCDate(),H&&(et=r(1,1)+r(y(N),4)+B,M+="up"+r(et.length,2)+et),l&&(F=r(1,1)+r(y(Q),4)+_,M+="uc"+r(F.length,2)+F);var G="";return G+=`
\0`,G+=r(T,2),G+=j.magic,G+=r(x,2),G+=r(A,2),G+=r(tt.crc32,4),G+=r(tt.compressedSize,4),G+=r(tt.uncompressedSize,4),G+=r(N.length,2),G+=r(M.length,2),{fileRecord:p.LOCAL_FILE_HEADER+G+N+M,dirRecord:p.CENTRAL_FILE_HEADER+r(X,2)+G+r(Q.length,2)+"\0\0\0\0"+r(R,4)+r(m,4)+N+M+Q}}var a=e("../utils"),c=e("../stream/GenericWorker"),g=e("../utf8"),y=e("../crc32"),p=e("../signature");function b(h,w,u,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=u,this.encodeFileName=m,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,c),b.prototype.push=function(h){var w=h.meta.percent||0,u=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,c.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:u?(w+100*(u-m-1))/u:100}}))},b.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var w=this.streamFiles&&!h.file.dir;if(w){var u=o(h,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(h){this.accumulate=!1;var w=this.streamFiles&&!h.file.dir,u=o(h,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),w)this.push({data:function(m){return p.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var h=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var u=this.bytesWritten-h,m=function(d,k,x,A,E){var j=a.transformTo("string",E(A));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(d,2)+r(d,2)+r(k,4)+r(x,4)+r(j.length,2)+j}(this.dirRecords.length,u,h,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(h){this._sources.push(h);var w=this;return h.on("data",function(u){w.processChunk(u)}),h.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),h.on("error",function(u){w.error(u)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(h){var w=this._sources;if(!c.prototype.error.call(this,h))return!1;for(var u=0;u<w.length;u++)try{w[u].error(h)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var h=this._sources,w=0;w<h.length;w++)h[w].lock()},s.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,n){var r=e("../compressions"),o=e("./ZipFileWorker");n.generateWorker=function(a,c,g){var y=new o(c.streamFiles,g,c.platform,c.encodeFileName),p=0;try{a.forEach(function(b,h){p++;var w=function(k,x){var A=k||x,E=r[A];if(!E)throw new Error(A+" is not a valid compression method !");return E}(h.options.compression,c.compression),u=h.options.compressionOptions||c.compressionOptions||{},m=h.dir,d=h.date;h._compressWorker(w,u).withStreamInfo("file",{name:b,dir:m,date:d,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(y)}),y.entriesCount=p}catch(b){y.error(b)}return y}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,n){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new r;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(o,a){return new r().loadAsync(o,a)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,n){var r=e("./utils"),o=e("./external"),a=e("./utf8"),c=e("./zipEntries"),g=e("./stream/Crc32Probe"),y=e("./nodejsUtils");function p(b){return new o.Promise(function(h,w){var u=b.decompressed.getContentWorker().pipe(new g);u.on("error",function(m){w(m)}).on("end",function(){u.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}s.exports=function(b,h){var w=this;return h=r.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),y.isNode&&y.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",b,!0,h.optimizedBinaryString,h.base64).then(function(u){var m=new c(h);return m.load(u),m}).then(function(u){var m=[o.Promise.resolve(u)],d=u.files;if(h.checkCRC32)for(var k=0;k<d.length;k++)m.push(p(d[k]));return o.Promise.all(m)}).then(function(u){for(var m=u.shift(),d=m.files,k=0;k<d.length;k++){var x=d[k],A=x.fileNameStr,E=r.resolve(x.fileNameStr);w.file(E,x.decompressed,{binary:!0,optimizedBinaryString:!0,date:x.date,dir:x.dir,comment:x.fileCommentStr.length?x.fileCommentStr:null,unixPermissions:x.unixPermissions,dosPermissions:x.dosPermissions,createFolders:h.createFolders}),x.dir||(w.file(E).unsafeOriginalName=A)}return m.zipComment.length&&(w.comment=m.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,n){var r=e("../utils"),o=e("../stream/GenericWorker");function a(c,g){o.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(g)}r.inherits(a,o),a.prototype._bindStream=function(c){var g=this;(this._stream=c).pause(),c.on("data",function(y){g.push({data:y,meta:{percent:0}})}).on("error",function(y){g.isPaused?this.generatedError=y:g.error(y)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,n){var r=e("readable-stream").Readable;function o(a,c,g){r.call(this,c),this._helper=a;var y=this;a.on("data",function(p,b){y.push(p)||y._helper.pause(),g&&g(b)}).on("error",function(p){y.emit("error",p)}).on("end",function(){y.push(null)})}e("../utils").inherits(o,r),o.prototype._read=function(){this._helper.resume()},s.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,s,n){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,o);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,o)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var o=new Buffer(r);return o.fill(0),o},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,n){function r(E,j,O){var N,B=a.getTypeOf(j),V=a.extend(O||{},y);V.date=V.date||new Date,V.compression!==null&&(V.compression=V.compression.toUpperCase()),typeof V.unixPermissions=="string"&&(V.unixPermissions=parseInt(V.unixPermissions,8)),V.unixPermissions&&16384&V.unixPermissions&&(V.dir=!0),V.dosPermissions&&16&V.dosPermissions&&(V.dir=!0),V.dir&&(E=d(E)),V.createFolders&&(N=m(E))&&k.call(this,N,!0);var Q=B==="string"&&V.binary===!1&&V.base64===!1;O&&O.binary!==void 0||(V.binary=!Q),(j instanceof p&&j.uncompressedSize===0||V.dir||!j||j.length===0)&&(V.base64=!1,V.binary=!0,j="",V.compression="STORE",B="string");var _=null;_=j instanceof p||j instanceof c?j:w.isNode&&w.isStream(j)?new u(E,j):a.prepareContent(E,j,V.binary,V.optimizedBinaryString,V.base64);var H=new b(E,_,V);this.files[E]=H}var o=e("./utf8"),a=e("./utils"),c=e("./stream/GenericWorker"),g=e("./stream/StreamHelper"),y=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),h=e("./generate"),w=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),m=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var j=E.lastIndexOf("/");return 0<j?E.substring(0,j):""},d=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},k=function(E,j){return j=j!==void 0?j:y.createFolders,E=d(E),this.files[E]||r.call(this,E,null,{dir:!0,createFolders:j}),this.files[E]};function x(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var j,O,N;for(j in this.files)N=this.files[j],(O=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&E(O,N)},filter:function(E){var j=[];return this.forEach(function(O,N){E(O,N)&&j.push(N)}),j},file:function(E,j,O){if(arguments.length!==1)return E=this.root+E,r.call(this,E,j,O),this;if(x(E)){var N=E;return this.filter(function(V,Q){return!Q.dir&&N.test(V)})}var B=this.files[this.root+E];return B&&!B.dir?B:null},folder:function(E){if(!E)return this;if(x(E))return this.filter(function(B,V){return V.dir&&E.test(B)});var j=this.root+E,O=k.call(this,j),N=this.clone();return N.root=O.name,N},remove:function(E){E=this.root+E;var j=this.files[E];if(j||(E.slice(-1)!=="/"&&(E+="/"),j=this.files[E]),j&&!j.dir)delete this.files[E];else for(var O=this.filter(function(B,V){return V.name.slice(0,E.length)===E}),N=0;N<O.length;N++)delete this.files[O[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var j,O={};try{if((O=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");a.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var N=O.comment||this.comment||"";j=h.generateWorker(this,O,N)}catch(B){(j=new c("error")).error(B)}return new g(j,O.type||"string",O.mimeType)},generateAsync:function(E,j){return this.generateInternalStream(E).accumulate(j)},generateNodeStream:function(E,j){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(j)}};s.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,n){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,n){var r=e("./DataReader");function o(a){r.call(this,a);for(var c=0;c<this.data.length;c++)a[c]=255&a[c]}e("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var c=a.charCodeAt(0),g=a.charCodeAt(1),y=a.charCodeAt(2),p=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===g&&this.data[b+2]===y&&this.data[b+3]===p)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var c=a.charCodeAt(0),g=a.charCodeAt(1),y=a.charCodeAt(2),p=a.charCodeAt(3),b=this.readData(4);return c===b[0]&&g===b[1]&&y===b[2]&&p===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},s.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,s,n){var r=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var c,g=0;for(this.checkOffset(a),c=this.index+a-1;c>=this.index;c--)g=(g<<8)+this.byteAt(c);return this.index+=a,g},readString:function(a){return r.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},s.exports=o},{"../utils":32}],19:[function(e,s,n){var r=e("./Uint8ArrayReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},s.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,n){var r=e("./DataReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var c=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},s.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,s,n){var r=e("./ArrayReader");function o(a){r.call(this,a)}e("../utils").inherits(o,r),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,c},s.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,n){var r=e("../utils"),o=e("../support"),a=e("./ArrayReader"),c=e("./StringReader"),g=e("./NodeBufferReader"),y=e("./Uint8ArrayReader");s.exports=function(p){var b=r.getTypeOf(p);return r.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new g(p):o.uint8array?new y(r.transformTo("uint8array",p)):new a(r.transformTo("array",p)):new c(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,n){var r=e("./GenericWorker"),o=e("../utils");function a(c){r.call(this,"ConvertWorker to "+c),this.destType=c}o.inherits(a,r),a.prototype.processChunk=function(c){this.push({data:o.transformTo(this.destType,c.data),meta:c.meta})},s.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,n){var r=e("./GenericWorker"),o=e("../crc32");function a(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,r),a.prototype.processChunk=function(c){this.streamInfo.crc32=o(c.data,this.streamInfo.crc32||0),this.push(c)},s.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,n){var r=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}r.inherits(a,o),a.prototype.processChunk=function(c){if(c){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+c.data.length}o.prototype.processChunk.call(this,c)},s.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,n){var r=e("../utils"),o=e("./GenericWorker");function a(c){o.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(y){g.dataIsReady=!0,g.data=y,g.max=y&&y.length||0,g.type=r.getTypeOf(y),g.isPaused||g._tickAndRepeat()},function(y){g.error(y)})}r.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,g);break;case"uint8array":c=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":c=this.data.slice(this.index,g)}return this.index=g,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,n){function r(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var c=0;c<this._listeners[o].length;c++)this._listeners[o][c].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(c){a.processChunk(c)}),o.on("end",function(){a.end()}),o.on("error",function(c){a.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},s.exports=r},{}],29:[function(e,s,n){var r=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),c=e("../base64"),g=e("../support"),y=e("../external"),p=null;if(g.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,u){return new y.Promise(function(m,d){var k=[],x=w._internalType,A=w._outputType,E=w._mimeType;w.on("data",function(j,O){k.push(j),u&&u(O)}).on("error",function(j){k=[],d(j)}).on("end",function(){try{var j=function(O,N,B){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",N),B);case"base64":return c.encode(N);default:return r.transformTo(O,N)}}(A,function(O,N){var B,V=0,Q=null,_=0;for(B=0;B<N.length;B++)_+=N[B].length;switch(O){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(Q=new Uint8Array(_),B=0;B<N.length;B++)Q.set(N[B],V),V+=N[B].length;return Q;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+O+"'")}}(x,k),E);m(j)}catch(O){d(O)}k=[]}).resume()})}function h(w,u,m){var d=u;switch(u){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=u,this._mimeType=m,r.checkSupport(d),this._worker=w.pipe(new o(d)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}h.prototype={accumulate:function(w){return b(this,w)},on:function(w,u){var m=this;return w==="data"?this._worker.on(w,function(d){u.call(m,d.data,d.meta)}):this._worker.on(w,function(){r.delay(u,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},w)}},s.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var r=new ArrayBuffer(0);try{n.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(r),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,n){for(var r=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),c=e("./stream/GenericWorker"),g=new Array(256),y=0;y<256;y++)g[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;g[254]=g[254]=1;function p(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}n.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(w){var u,m,d,k,x,A=w.length,E=0;for(k=0;k<A;k++)(64512&(m=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(d=w.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),k++),E+=m<128?1:m<2048?2:m<65536?3:4;for(u=o.uint8array?new Uint8Array(E):new Array(E),k=x=0;x<E;k++)(64512&(m=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(d=w.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),k++),m<128?u[x++]=m:(m<2048?u[x++]=192|m>>>6:(m<65536?u[x++]=224|m>>>12:(u[x++]=240|m>>>18,u[x++]=128|m>>>12&63),u[x++]=128|m>>>6&63),u[x++]=128|63&m);return u}(h)},n.utf8decode=function(h){return o.nodebuffer?r.transformTo("nodebuffer",h).toString("utf-8"):function(w){var u,m,d,k,x=w.length,A=new Array(2*x);for(u=m=0;u<x;)if((d=w[u++])<128)A[m++]=d;else if(4<(k=g[d]))A[m++]=65533,u+=k-1;else{for(d&=k===2?31:k===3?15:7;1<k&&u<x;)d=d<<6|63&w[u++],k--;1<k?A[m++]=65533:d<65536?A[m++]=d:(d-=65536,A[m++]=55296|d>>10&1023,A[m++]=56320|1023&d)}return A.length!==m&&(A.subarray?A=A.subarray(0,m):A.length=m),r.applyFromCharCode(A)}(h=r.transformTo(o.uint8array?"uint8array":"array",h))},r.inherits(p,c),p.prototype.processChunk=function(h){var w=r.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var u=w;(w=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),w.set(u,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var m=function(k,x){var A;for((x=x||k.length)>k.length&&(x=k.length),A=x-1;0<=A&&(192&k[A])==128;)A--;return A<0||A===0?x:A+g[k[A]]>x?A:x}(w),d=w;m!==w.length&&(o.uint8array?(d=w.subarray(0,m),this.leftOver=w.subarray(m,w.length)):(d=w.slice(0,m),this.leftOver=w.slice(m,w.length))),this.push({data:n.utf8decode(d),meta:h.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=p,r.inherits(b,c),b.prototype.processChunk=function(h){this.push({data:n.utf8encode(h.data),meta:h.meta})},n.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,n){var r=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),c=e("./external");function g(u){return u}function y(u,m){for(var d=0;d<u.length;++d)m[d]=255&u.charCodeAt(d);return m}e("setimmediate"),n.newBlob=function(u,m){n.checkSupport("blob");try{return new Blob([u],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(u),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,m,d){var k=[],x=0,A=u.length;if(A<=d)return String.fromCharCode.apply(null,u);for(;x<A;)m==="array"||m==="nodebuffer"?k.push(String.fromCharCode.apply(null,u.slice(x,Math.min(x+d,A)))):k.push(String.fromCharCode.apply(null,u.subarray(x,Math.min(x+d,A)))),x+=d;return k.join("")},stringifyByChar:function(u){for(var m="",d=0;d<u.length;d++)m+=String.fromCharCode(u[d]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(u){var m=65536,d=n.getTypeOf(u),k=!0;if(d==="uint8array"?k=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(k=p.applyCanBeUsed.nodebuffer),k)for(;1<m;)try{return p.stringifyByChunk(u,d,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(u)}function h(u,m){for(var d=0;d<u.length;d++)m[d]=u[d];return m}n.applyFromCharCode=b;var w={};w.string={string:g,array:function(u){return y(u,new Array(u.length))},arraybuffer:function(u){return w.string.uint8array(u).buffer},uint8array:function(u){return y(u,new Uint8Array(u.length))},nodebuffer:function(u){return y(u,a.allocBuffer(u.length))}},w.array={string:b,array:g,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(u)}},w.arraybuffer={string:function(u){return b(new Uint8Array(u))},array:function(u){return h(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:g,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return a.newBufferFrom(new Uint8Array(u))}},w.uint8array={string:b,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:g,nodebuffer:function(u){return a.newBufferFrom(u)}},w.nodebuffer={string:b,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return w.nodebuffer.uint8array(u).buffer},uint8array:function(u){return h(u,new Uint8Array(u.length))},nodebuffer:g},n.transformTo=function(u,m){if(m=m||"",!u)return m;n.checkSupport(u);var d=n.getTypeOf(m);return w[d][u](m)},n.resolve=function(u){for(var m=u.split("/"),d=[],k=0;k<m.length;k++){var x=m[k];x==="."||x===""&&k!==0&&k!==m.length-1||(x===".."?d.pop():d.push(x))}return d.join("/")},n.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":r.nodebuffer&&a.isBuffer(u)?"nodebuffer":r.uint8array&&u instanceof Uint8Array?"uint8array":r.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(u){if(!r[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(u){var m,d,k="";for(d=0;d<(u||"").length;d++)k+="\\x"+((m=u.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return k},n.delay=function(u,m,d){setImmediate(function(){u.apply(d||null,m||[])})},n.inherits=function(u,m){function d(){}d.prototype=m.prototype,u.prototype=new d},n.extend=function(){var u,m,d={};for(u=0;u<arguments.length;u++)for(m in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],m)&&d[m]===void 0&&(d[m]=arguments[u][m]);return d},n.prepareContent=function(u,m,d,k,x){return c.Promise.resolve(m).then(function(A){return r.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new c.Promise(function(E,j){var O=new FileReader;O.onload=function(N){E(N.target.result)},O.onerror=function(N){j(N.target.error)},O.readAsArrayBuffer(A)}):A}).then(function(A){var E=n.getTypeOf(A);return E?(E==="arraybuffer"?A=n.transformTo("uint8array",A):E==="string"&&(x?A=o.decode(A):d&&k!==!0&&(A=function(j){return y(j,r.uint8array?new Uint8Array(j.length):new Array(j.length))}(A))),A):c.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,n){var r=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),c=e("./zipEntry"),g=e("./support");function y(p){this.files=[],this.loadOptions=p}y.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(p)+")")}},isSignature:function(p,b){var h=this.reader.index;this.reader.setIndex(p);var w=this.reader.readString(4)===b;return this.reader.setIndex(h),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=g.uint8array?"uint8array":"array",h=o.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,h,w=this.zip64EndOfCentralSize-44;0<w;)p=this.reader.readInt(2),b=this.reader.readInt(4),h=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var w=b-h;if(0<w)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(p){this.reader=r(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=y},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,n){var r=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),c=e("./crc32"),g=e("./utf8"),y=e("./compressions"),p=e("./support");function b(h,w){this.options=h,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var w,u;if(h.skip(22),this.fileNameLength=h.readInt(2),u=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(m){for(var d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&y[d].magic===m)return y[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var w=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(w),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=r(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var w,u,m,d=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<d;)w=h.readInt(2),u=h.readInt(2),m=h.readData(u),this.extraFields[w]={id:w,length:u,value:m};h.setIndex(d)},handleUTF8:function(){var h=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var u=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var w=r(h.value);return w.readInt(1)!==1||c(this.fileName)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var w=r(h.value);return w.readInt(1)!==1||c(this.fileComment)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null}},s.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,n){function r(w,u,m){this.name=w,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=u,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),c=e("./utf8"),g=e("./compressedObject"),y=e("./stream/GenericWorker");r.prototype={internalStream:function(w){var u=null,m="string";try{if(!w)throw new Error("No output type specified.");var d=(m=w.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),u=this._decompressWorker();var k=!this._dataBinary;k&&!d&&(u=u.pipe(new c.Utf8EncodeWorker)),!k&&d&&(u=u.pipe(new c.Utf8DecodeWorker))}catch(x){(u=new y("error")).error(x)}return new o(u,m,"")},async:function(w,u){return this.internalStream(w).accumulate(u)},nodeStream:function(w,u){return this.internalStream(w||"nodebuffer").toNodejsStream(u)},_compressWorker:function(w,u){if(this._data instanceof g&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),g.createWorkerFrom(m,w,u)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof y?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<p.length;h++)r.prototype[p[h]]=b;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,n){(function(r){var o,a,c=r.MutationObserver||r.WebKitMutationObserver;if(c){var g=0,y=new c(w),p=r.document.createTextNode("");y.observe(p,{characterData:!0}),o=function(){p.data=g=++g%2}}else if(r.setImmediate||r.MessageChannel===void 0)o="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var u=r.document.createElement("script");u.onreadystatechange=function(){w(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},r.document.documentElement.appendChild(u)}:function(){setTimeout(w,0)};else{var b=new r.MessageChannel;b.port1.onmessage=w,o=function(){b.port2.postMessage(0)}}var h=[];function w(){var u,m;a=!0;for(var d=h.length;d;){for(m=h,h=[],u=-1;++u<d;)m[u]();d=h.length}a=!1}s.exports=function(u){h.push(u)!==1||a||o()}}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,n){var r=e("immediate");function o(){}var a={},c=["REJECTED"],g=["FULFILLED"],y=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,d!==o&&u(this,d)}function b(d,k,x){this.promise=d,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof x=="function"&&(this.onRejected=x,this.callRejected=this.otherCallRejected)}function h(d,k,x){r(function(){var A;try{A=k(x)}catch(E){return a.reject(d,E)}A===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,A)})}function w(d){var k=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof k=="function")return function(){k.apply(d,arguments)}}function u(d,k){var x=!1;function A(O){x||(x=!0,a.reject(d,O))}function E(O){x||(x=!0,a.resolve(d,O))}var j=m(function(){k(E,A)});j.status==="error"&&A(j.value)}function m(d,k){var x={};try{x.value=d(k),x.status="success"}catch(A){x.status="error",x.value=A}return x}(s.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var k=this.constructor;return this.then(function(x){return k.resolve(d()).then(function(){return x})},function(x){return k.resolve(d()).then(function(){throw x})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,k){if(typeof d!="function"&&this.state===g||typeof k!="function"&&this.state===c)return this;var x=new this.constructor(o);return this.state!==y?h(x,this.state===g?d:k,this.outcome):this.queue.push(new b(x,d,k)),x},b.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},b.prototype.otherCallFulfilled=function(d){h(this.promise,this.onFulfilled,d)},b.prototype.callRejected=function(d){a.reject(this.promise,d)},b.prototype.otherCallRejected=function(d){h(this.promise,this.onRejected,d)},a.resolve=function(d,k){var x=m(w,k);if(x.status==="error")return a.reject(d,x.value);var A=x.value;if(A)u(d,A);else{d.state=g,d.outcome=k;for(var E=-1,j=d.queue.length;++E<j;)d.queue[E].callFulfilled(k)}return d},a.reject=function(d,k){d.state=c,d.outcome=k;for(var x=-1,A=d.queue.length;++x<A;)d.queue[x].callRejected(k);return d},p.resolve=function(d){return d instanceof this?d:a.resolve(new this(o),d)},p.reject=function(d){var k=new this(o);return a.reject(k,d)},p.all=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,A=!1;if(!x)return this.resolve([]);for(var E=new Array(x),j=0,O=-1,N=new this(o);++O<x;)B(d[O],O);return N;function B(V,Q){k.resolve(V).then(function(_){E[Q]=_,++j!==x||A||(A=!0,a.resolve(N,E))},function(_){A||(A=!0,a.reject(N,_))})}},p.race=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var x=d.length,A=!1;if(!x)return this.resolve([]);for(var E=-1,j=new this(o);++E<x;)O=d[E],k.resolve(O).then(function(N){A||(A=!0,a.resolve(j,N))},function(N){A||(A=!0,a.reject(j,N))});var O;return j}},{immediate:36}],38:[function(e,s,n){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,n){var r=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/messages"),g=e("./zlib/zstream"),y=Object.prototype.toString,p=0,b=-1,h=0,w=8;function u(d){if(!(this instanceof u))return new u(d);this.options=o.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},d||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var x=r.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(x!==p)throw new Error(c[x]);if(k.header&&r.deflateSetHeader(this.strm,k.header),k.dictionary){var A;if(A=typeof k.dictionary=="string"?a.string2buf(k.dictionary):y.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(x=r.deflateSetDictionary(this.strm,A))!==p)throw new Error(c[x]);this._dict_set=!0}}function m(d,k){var x=new u(k);if(x.push(d,!0),x.err)throw x.msg||c[x.err];return x.result}u.prototype.push=function(d,k){var x,A,E=this.strm,j=this.options.chunkSize;if(this.ended)return!1;A=k===~~k?k:k===!0?4:0,typeof d=="string"?E.input=a.string2buf(d):y.call(d)==="[object ArrayBuffer]"?E.input=new Uint8Array(d):E.input=d,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(j),E.next_out=0,E.avail_out=j),(x=r.deflate(E,A))!==1&&x!==p)return this.onEnd(x),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&x!==1);return A===4?(x=r.deflateEnd(this.strm),this.onEnd(x),this.ended=!0,x===p):A!==2||(this.onEnd(p),!(E.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Deflate=u,n.deflate=m,n.deflateRaw=function(d,k){return(k=k||{}).raw=!0,m(d,k)},n.gzip=function(d,k){return(k=k||{}).gzip=!0,m(d,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,n){var r=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),c=e("./zlib/constants"),g=e("./zlib/messages"),y=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function h(u){if(!(this instanceof h))return new h(u);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},u||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||u&&u.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var d=r.inflateInit2(this.strm,m.windowBits);if(d!==c.Z_OK)throw new Error(g[d]);this.header=new p,r.inflateGetHeader(this.strm,this.header)}function w(u,m){var d=new h(m);if(d.push(u,!0),d.err)throw d.msg||g[d.err];return d.result}h.prototype.push=function(u,m){var d,k,x,A,E,j,O=this.strm,N=this.options.chunkSize,B=this.options.dictionary,V=!1;if(this.ended)return!1;k=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof u=="string"?O.input=a.binstring2buf(u):b.call(u)==="[object ArrayBuffer]"?O.input=new Uint8Array(u):O.input=u,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new o.Buf8(N),O.next_out=0,O.avail_out=N),(d=r.inflate(O,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&B&&(j=typeof B=="string"?a.string2buf(B):b.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=r.inflateSetDictionary(this.strm,j)),d===c.Z_BUF_ERROR&&V===!0&&(d=c.Z_OK,V=!1),d!==c.Z_STREAM_END&&d!==c.Z_OK)return this.onEnd(d),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&d!==c.Z_STREAM_END&&(O.avail_in!==0||k!==c.Z_FINISH&&k!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(x=a.utf8border(O.output,O.next_out),A=O.next_out-x,E=a.buf2string(O.output,x),O.next_out=A,O.avail_out=N-A,A&&o.arraySet(O.output,O.output,x,A,0),this.onData(E)):this.onData(o.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(V=!0)}while((0<O.avail_in||O.avail_out===0)&&d!==c.Z_STREAM_END);return d===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(d=r.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===c.Z_OK):k!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(O.avail_out=0))},h.prototype.onData=function(u){this.chunks.push(u)},h.prototype.onEnd=function(u){u===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},n.Inflate=h,n.inflate=w,n.inflateRaw=function(u,m){return(m=m||{}).raw=!0,w(u,m)},n.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,n){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(c){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var y=g.shift();if(y){if(typeof y!="object")throw new TypeError(y+"must be non-object");for(var p in y)y.hasOwnProperty(p)&&(c[p]=y[p])}}return c},n.shrinkBuf=function(c,g){return c.length===g?c:c.subarray?c.subarray(0,g):(c.length=g,c)};var o={arraySet:function(c,g,y,p,b){if(g.subarray&&c.subarray)c.set(g.subarray(y,y+p),b);else for(var h=0;h<p;h++)c[b+h]=g[y+h]},flattenChunks:function(c){var g,y,p,b,h,w;for(g=p=0,y=c.length;g<y;g++)p+=c[g].length;for(w=new Uint8Array(p),g=b=0,y=c.length;g<y;g++)h=c[g],w.set(h,b),b+=h.length;return w}},a={arraySet:function(c,g,y,p,b){for(var h=0;h<p;h++)c[b+h]=g[y+h]},flattenChunks:function(c){return[].concat.apply([],c)}};n.setTyped=function(c){c?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(r)},{}],42:[function(e,s,n){var r=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var c=new r.Buf8(256),g=0;g<256;g++)c[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function y(p,b){if(b<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,r.shrinkBuf(p,b));for(var h="",w=0;w<b;w++)h+=String.fromCharCode(p[w]);return h}c[254]=c[254]=1,n.string2buf=function(p){var b,h,w,u,m,d=p.length,k=0;for(u=0;u<d;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),u++),k+=h<128?1:h<2048?2:h<65536?3:4;for(b=new r.Buf8(k),u=m=0;m<k;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),u++),h<128?b[m++]=h:(h<2048?b[m++]=192|h>>>6:(h<65536?b[m++]=224|h>>>12:(b[m++]=240|h>>>18,b[m++]=128|h>>>12&63),b[m++]=128|h>>>6&63),b[m++]=128|63&h);return b},n.buf2binstring=function(p){return y(p,p.length)},n.binstring2buf=function(p){for(var b=new r.Buf8(p.length),h=0,w=b.length;h<w;h++)b[h]=p.charCodeAt(h);return b},n.buf2string=function(p,b){var h,w,u,m,d=b||p.length,k=new Array(2*d);for(h=w=0;h<d;)if((u=p[h++])<128)k[w++]=u;else if(4<(m=c[u]))k[w++]=65533,h+=m-1;else{for(u&=m===2?31:m===3?15:7;1<m&&h<d;)u=u<<6|63&p[h++],m--;1<m?k[w++]=65533:u<65536?k[w++]=u:(u-=65536,k[w++]=55296|u>>10&1023,k[w++]=56320|1023&u)}return y(k,w)},n.utf8border=function(p,b){var h;for((b=b||p.length)>p.length&&(b=p.length),h=b-1;0<=h&&(192&p[h])==128;)h--;return h<0||h===0?b:h+c[p[h]]>b?h:b}},{"./common":41}],43:[function(e,s,n){s.exports=function(r,o,a,c){for(var g=65535&r|0,y=r>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;y=y+(g=g+o[c++]|0)|0,--p;);g%=65521,y%=65521}return g|y<<16|0}},{}],44:[function(e,s,n){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,n){var r=function(){for(var o,a=[],c=0;c<256;c++){o=c;for(var g=0;g<8;g++)o=1&o?3988292384^o>>>1:o>>>1;a[c]=o}return a}();s.exports=function(o,a,c,g){var y=r,p=g+c;o^=-1;for(var b=g;b<p;b++)o=o>>>8^y[255&(o^a[b])];return-1^o}},{}],46:[function(e,s,n){var r,o=e("../utils/common"),a=e("./trees"),c=e("./adler32"),g=e("./crc32"),y=e("./messages"),p=0,b=4,h=0,w=-2,u=-1,m=4,d=2,k=8,x=9,A=286,E=30,j=19,O=2*A+1,N=15,B=3,V=258,Q=V+B+1,_=42,H=113,l=1,M=2,et=3,F=4;function it(i,D){return i.msg=y[D],D}function $(i){return(i<<1)-(4<i?9:0)}function tt(i){for(var D=i.length;0<=--D;)i[D]=0}function T(i){var D=i.state,z=D.pending;z>i.avail_out&&(z=i.avail_out),z!==0&&(o.arraySet(i.output,D.pending_buf,D.pending_out,z,i.next_out),i.next_out+=z,D.pending_out+=z,i.total_out+=z,i.avail_out-=z,D.pending-=z,D.pending===0&&(D.pending_out=0))}function R(i,D){a._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,D),i.block_start=i.strstart,T(i.strm)}function X(i,D){i.pending_buf[i.pending++]=D}function G(i,D){i.pending_buf[i.pending++]=D>>>8&255,i.pending_buf[i.pending++]=255&D}function W(i,D){var z,v,f=i.max_chain_length,C=i.strstart,q=i.prev_length,I=i.nice_match,L=i.strstart>i.w_size-Q?i.strstart-(i.w_size-Q):0,U=i.window,J=i.w_mask,Z=i.prev,Y=i.strstart+V,at=U[C+q-1],st=U[C+q];i.prev_length>=i.good_match&&(f>>=2),I>i.lookahead&&(I=i.lookahead);do if(U[(z=D)+q]===st&&U[z+q-1]===at&&U[z]===U[C]&&U[++z]===U[C+1]){C+=2,z++;do;while(U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&C<Y);if(v=V-(Y-C),C=Y-V,q<v){if(i.match_start=D,I<=(q=v))break;at=U[C+q-1],st=U[C+q]}}while((D=Z[D&J])>L&&--f!=0);return q<=i.lookahead?q:i.lookahead}function lt(i){var D,z,v,f,C,q,I,L,U,J,Z=i.w_size;do{if(f=i.window_size-i.lookahead-i.strstart,i.strstart>=Z+(Z-Q)){for(o.arraySet(i.window,i.window,Z,Z,0),i.match_start-=Z,i.strstart-=Z,i.block_start-=Z,D=z=i.hash_size;v=i.head[--D],i.head[D]=Z<=v?v-Z:0,--z;);for(D=z=Z;v=i.prev[--D],i.prev[D]=Z<=v?v-Z:0,--z;);f+=Z}if(i.strm.avail_in===0)break;if(q=i.strm,I=i.window,L=i.strstart+i.lookahead,U=f,J=void 0,J=q.avail_in,U<J&&(J=U),z=J===0?0:(q.avail_in-=J,o.arraySet(I,q.input,q.next_in,J,L),q.state.wrap===1?q.adler=c(q.adler,I,J,L):q.state.wrap===2&&(q.adler=g(q.adler,I,J,L)),q.next_in+=J,q.total_in+=J,J),i.lookahead+=z,i.lookahead+i.insert>=B)for(C=i.strstart-i.insert,i.ins_h=i.window[C],i.ins_h=(i.ins_h<<i.hash_shift^i.window[C+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[C+B-1])&i.hash_mask,i.prev[C&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=C,C++,i.insert--,!(i.lookahead+i.insert<B)););}while(i.lookahead<Q&&i.strm.avail_in!==0)}function ft(i,D){for(var z,v;;){if(i.lookahead<Q){if(lt(i),i.lookahead<Q&&D===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),z!==0&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z)),i.match_length>=B)if(v=a._tr_tally(i,i.strstart-i.match_start,i.match_length-B),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=B){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=a._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=i.strstart<B-1?i.strstart:B-1,D===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:M}function rt(i,D){for(var z,v,f;;){if(i.lookahead<Q){if(lt(i),i.lookahead<Q&&D===p)return l;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=B-1,z!==0&&i.prev_length<i.max_lazy_match&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z),i.match_length<=5&&(i.strategy===1||i.match_length===B&&4096<i.strstart-i.match_start)&&(i.match_length=B-1)),i.prev_length>=B&&i.match_length<=i.prev_length){for(f=i.strstart+i.lookahead-B,v=a._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-B),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=f&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=B-1,i.strstart++,v&&(R(i,!1),i.strm.avail_out===0))return l}else if(i.match_available){if((v=a._tr_tally(i,0,i.window[i.strstart-1]))&&R(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return l}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=a._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<B-1?i.strstart:B-1,D===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?l:M}function nt(i,D,z,v,f){this.good_length=i,this.max_lazy=D,this.nice_length=z,this.max_chain=v,this.func=f}function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*O),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*j+1)),tt(this.dyn_ltree),tt(this.dyn_dtree),tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*A+1),tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*A+1),tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ut(i){var D;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(D=i.state).pending=0,D.pending_out=0,D.wrap<0&&(D.wrap=-D.wrap),D.status=D.wrap?_:H,i.adler=D.wrap===2?0:1,D.last_flush=p,a._tr_init(D),h):it(i,w)}function wt(i){var D=ut(i);return D===h&&function(z){z.window_size=2*z.w_size,tt(z.head),z.max_lazy_match=r[z.level].max_lazy,z.good_match=r[z.level].good_length,z.nice_match=r[z.level].nice_length,z.max_chain_length=r[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(i.state),D}function bt(i,D,z,v,f,C){if(!i)return w;var q=1;if(D===u&&(D=6),v<0?(q=0,v=-v):15<v&&(q=2,v-=16),f<1||x<f||z!==k||v<8||15<v||D<0||9<D||C<0||m<C)return it(i,w);v===8&&(v=9);var I=new ht;return(i.state=I).strm=i,I.wrap=q,I.gzhead=null,I.w_bits=v,I.w_size=1<<I.w_bits,I.w_mask=I.w_size-1,I.hash_bits=f+7,I.hash_size=1<<I.hash_bits,I.hash_mask=I.hash_size-1,I.hash_shift=~~((I.hash_bits+B-1)/B),I.window=new o.Buf8(2*I.w_size),I.head=new o.Buf16(I.hash_size),I.prev=new o.Buf16(I.w_size),I.lit_bufsize=1<<f+6,I.pending_buf_size=4*I.lit_bufsize,I.pending_buf=new o.Buf8(I.pending_buf_size),I.d_buf=1*I.lit_bufsize,I.l_buf=3*I.lit_bufsize,I.level=D,I.strategy=C,I.method=z,wt(i)}r=[new nt(0,0,0,0,function(i,D){var z=65535;for(z>i.pending_buf_size-5&&(z=i.pending_buf_size-5);;){if(i.lookahead<=1){if(lt(i),i.lookahead===0&&D===p)return l;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+z;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,R(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-Q&&(R(i,!1),i.strm.avail_out===0))return l}return i.insert=0,D===b?(R(i,!0),i.strm.avail_out===0?et:F):(i.strstart>i.block_start&&(R(i,!1),i.strm.avail_out),l)}),new nt(4,4,8,4,ft),new nt(4,5,16,8,ft),new nt(4,6,32,32,ft),new nt(4,4,16,16,rt),new nt(8,16,32,32,rt),new nt(8,16,128,128,rt),new nt(8,32,128,256,rt),new nt(32,128,258,1024,rt),new nt(32,258,258,4096,rt)],n.deflateInit=function(i,D){return bt(i,D,k,15,8,0)},n.deflateInit2=bt,n.deflateReset=wt,n.deflateResetKeep=ut,n.deflateSetHeader=function(i,D){return i&&i.state?i.state.wrap!==2?w:(i.state.gzhead=D,h):w},n.deflate=function(i,D){var z,v,f,C;if(!i||!i.state||5<D||D<0)return i?it(i,w):w;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&D!==b)return it(i,i.avail_out===0?-5:w);if(v.strm=i,z=v.last_flush,v.last_flush=D,v.status===_)if(v.wrap===2)i.adler=0,X(v,31),X(v,139),X(v,8),v.gzhead?(X(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),X(v,255&v.gzhead.time),X(v,v.gzhead.time>>8&255),X(v,v.gzhead.time>>16&255),X(v,v.gzhead.time>>24&255),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(X(v,255&v.gzhead.extra.length),X(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=g(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(X(v,0),X(v,0),X(v,0),X(v,0),X(v,0),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,3),v.status=H);else{var q=k+(v.w_bits-8<<4)<<8;q|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(q|=32),q+=31-q%31,v.status=H,G(v,q),v.strstart!==0&&(G(v,i.adler>>>16),G(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(f=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending!==v.pending_buf_size));)X(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&T(i),v.pending+2<=v.pending_buf_size&&(X(v,255&i.adler),X(v,i.adler>>8&255),i.adler=0,v.status=H)):v.status=H),v.pending!==0){if(T(i),i.avail_out===0)return v.last_flush=-1,h}else if(i.avail_in===0&&$(D)<=$(z)&&D!==b)return it(i,-5);if(v.status===666&&i.avail_in!==0)return it(i,-5);if(i.avail_in!==0||v.lookahead!==0||D!==p&&v.status!==666){var I=v.strategy===2?function(L,U){for(var J;;){if(L.lookahead===0&&(lt(L),L.lookahead===0)){if(U===p)return l;break}if(L.match_length=0,J=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++,J&&(R(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===b?(R(L,!0),L.strm.avail_out===0?et:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?l:M}(v,D):v.strategy===3?function(L,U){for(var J,Z,Y,at,st=L.window;;){if(L.lookahead<=V){if(lt(L),L.lookahead<=V&&U===p)return l;if(L.lookahead===0)break}if(L.match_length=0,L.lookahead>=B&&0<L.strstart&&(Z=st[Y=L.strstart-1])===st[++Y]&&Z===st[++Y]&&Z===st[++Y]){at=L.strstart+V;do;while(Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Z===st[++Y]&&Y<at);L.match_length=V-(at-Y),L.match_length>L.lookahead&&(L.match_length=L.lookahead)}if(L.match_length>=B?(J=a._tr_tally(L,1,L.match_length-B),L.lookahead-=L.match_length,L.strstart+=L.match_length,L.match_length=0):(J=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++),J&&(R(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===b?(R(L,!0),L.strm.avail_out===0?et:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?l:M}(v,D):r[v.level].func(v,D);if(I!==et&&I!==F||(v.status=666),I===l||I===et)return i.avail_out===0&&(v.last_flush=-1),h;if(I===M&&(D===1?a._tr_align(v):D!==5&&(a._tr_stored_block(v,0,0,!1),D===3&&(tt(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),T(i),i.avail_out===0))return v.last_flush=-1,h}return D!==b?h:v.wrap<=0?1:(v.wrap===2?(X(v,255&i.adler),X(v,i.adler>>8&255),X(v,i.adler>>16&255),X(v,i.adler>>24&255),X(v,255&i.total_in),X(v,i.total_in>>8&255),X(v,i.total_in>>16&255),X(v,i.total_in>>24&255)):(G(v,i.adler>>>16),G(v,65535&i.adler)),T(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?h:1)},n.deflateEnd=function(i){var D;return i&&i.state?(D=i.state.status)!==_&&D!==69&&D!==73&&D!==91&&D!==103&&D!==H&&D!==666?it(i,w):(i.state=null,D===H?it(i,-3):h):w},n.deflateSetDictionary=function(i,D){var z,v,f,C,q,I,L,U,J=D.length;if(!i||!i.state||(C=(z=i.state).wrap)===2||C===1&&z.status!==_||z.lookahead)return w;for(C===1&&(i.adler=c(i.adler,D,J,0)),z.wrap=0,J>=z.w_size&&(C===0&&(tt(z.head),z.strstart=0,z.block_start=0,z.insert=0),U=new o.Buf8(z.w_size),o.arraySet(U,D,J-z.w_size,z.w_size,0),D=U,J=z.w_size),q=i.avail_in,I=i.next_in,L=i.input,i.avail_in=J,i.next_in=0,i.input=D,lt(z);z.lookahead>=B;){for(v=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[v+B-1])&z.hash_mask,z.prev[v&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=v,v++,--f;);z.strstart=v,z.lookahead=B-1,lt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,i.next_in=I,i.input=L,i.avail_in=q,z.wrap=C,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,n){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,n){s.exports=function(r,o){var a,c,g,y,p,b,h,w,u,m,d,k,x,A,E,j,O,N,B,V,Q,_,H,l,M;a=r.state,c=r.next_in,l=r.input,g=c+(r.avail_in-5),y=r.next_out,M=r.output,p=y-(o-r.avail_out),b=y+(r.avail_out-257),h=a.dmax,w=a.wsize,u=a.whave,m=a.wnext,d=a.window,k=a.hold,x=a.bits,A=a.lencode,E=a.distcode,j=(1<<a.lenbits)-1,O=(1<<a.distbits)-1;t:do{x<15&&(k+=l[c++]<<x,x+=8,k+=l[c++]<<x,x+=8),N=A[k&j];e:for(;;){if(k>>>=B=N>>>24,x-=B,(B=N>>>16&255)===0)M[y++]=65535&N;else{if(!(16&B)){if(!(64&B)){N=A[(65535&N)+(k&(1<<B)-1)];continue e}if(32&B){a.mode=12;break t}r.msg="invalid literal/length code",a.mode=30;break t}V=65535&N,(B&=15)&&(x<B&&(k+=l[c++]<<x,x+=8),V+=k&(1<<B)-1,k>>>=B,x-=B),x<15&&(k+=l[c++]<<x,x+=8,k+=l[c++]<<x,x+=8),N=E[k&O];i:for(;;){if(k>>>=B=N>>>24,x-=B,!(16&(B=N>>>16&255))){if(!(64&B)){N=E[(65535&N)+(k&(1<<B)-1)];continue i}r.msg="invalid distance code",a.mode=30;break t}if(Q=65535&N,x<(B&=15)&&(k+=l[c++]<<x,(x+=8)<B&&(k+=l[c++]<<x,x+=8)),h<(Q+=k&(1<<B)-1)){r.msg="invalid distance too far back",a.mode=30;break t}if(k>>>=B,x-=B,(B=y-p)<Q){if(u<(B=Q-B)&&a.sane){r.msg="invalid distance too far back",a.mode=30;break t}if(H=d,(_=0)===m){if(_+=w-B,B<V){for(V-=B;M[y++]=d[_++],--B;);_=y-Q,H=M}}else if(m<B){if(_+=w+m-B,(B-=m)<V){for(V-=B;M[y++]=d[_++],--B;);if(_=0,m<V){for(V-=B=m;M[y++]=d[_++],--B;);_=y-Q,H=M}}}else if(_+=m-B,B<V){for(V-=B;M[y++]=d[_++],--B;);_=y-Q,H=M}for(;2<V;)M[y++]=H[_++],M[y++]=H[_++],M[y++]=H[_++],V-=3;V&&(M[y++]=H[_++],1<V&&(M[y++]=H[_++]))}else{for(_=y-Q;M[y++]=M[_++],M[y++]=M[_++],M[y++]=M[_++],2<(V-=3););V&&(M[y++]=M[_++],1<V&&(M[y++]=M[_++]))}break}}break}}while(c<g&&y<b);c-=V=x>>3,k&=(1<<(x-=V<<3))-1,r.next_in=c,r.next_out=y,r.avail_in=c<g?g-c+5:5-(c-g),r.avail_out=y<b?b-y+257:257-(y-b),a.hold=k,a.bits=x}},{}],49:[function(e,s,n){var r=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),c=e("./inffast"),g=e("./inftrees"),y=1,p=2,b=0,h=-2,w=1,u=852,m=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function x(_){var H;return _&&_.state?(H=_.state,_.total_in=_.total_out=H.total=0,_.msg="",H.wrap&&(_.adler=1&H.wrap),H.mode=w,H.last=0,H.havedict=0,H.dmax=32768,H.head=null,H.hold=0,H.bits=0,H.lencode=H.lendyn=new r.Buf32(u),H.distcode=H.distdyn=new r.Buf32(m),H.sane=1,H.back=-1,b):h}function A(_){var H;return _&&_.state?((H=_.state).wsize=0,H.whave=0,H.wnext=0,x(_)):h}function E(_,H){var l,M;return _&&_.state?(M=_.state,H<0?(l=0,H=-H):(l=1+(H>>4),H<48&&(H&=15)),H&&(H<8||15<H)?h:(M.window!==null&&M.wbits!==H&&(M.window=null),M.wrap=l,M.wbits=H,A(_))):h}function j(_,H){var l,M;return _?(M=new k,(_.state=M).window=null,(l=E(_,H))!==b&&(_.state=null),l):h}var O,N,B=!0;function V(_){if(B){var H;for(O=new r.Buf32(512),N=new r.Buf32(32),H=0;H<144;)_.lens[H++]=8;for(;H<256;)_.lens[H++]=9;for(;H<280;)_.lens[H++]=7;for(;H<288;)_.lens[H++]=8;for(g(y,_.lens,0,288,O,0,_.work,{bits:9}),H=0;H<32;)_.lens[H++]=5;g(p,_.lens,0,32,N,0,_.work,{bits:5}),B=!1}_.lencode=O,_.lenbits=9,_.distcode=N,_.distbits=5}function Q(_,H,l,M){var et,F=_.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new r.Buf8(F.wsize)),M>=F.wsize?(r.arraySet(F.window,H,l-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(M<(et=F.wsize-F.wnext)&&(et=M),r.arraySet(F.window,H,l-M,et,F.wnext),(M-=et)?(r.arraySet(F.window,H,l-M,M,0),F.wnext=M,F.whave=F.wsize):(F.wnext+=et,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=et))),0}n.inflateReset=A,n.inflateReset2=E,n.inflateResetKeep=x,n.inflateInit=function(_){return j(_,15)},n.inflateInit2=j,n.inflate=function(_,H){var l,M,et,F,it,$,tt,T,R,X,G,W,lt,ft,rt,nt,ht,ut,wt,bt,i,D,z,v,f=0,C=new r.Buf8(4),q=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return h;(l=_.state).mode===12&&(l.mode=13),it=_.next_out,et=_.output,tt=_.avail_out,F=_.next_in,M=_.input,$=_.avail_in,T=l.hold,R=l.bits,X=$,G=tt,D=b;t:for(;;)switch(l.mode){case w:if(l.wrap===0){l.mode=13;break}for(;R<16;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(2&l.wrap&&T===35615){C[l.check=0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0),R=T=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&T)<<8)+(T>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&T)!=8){_.msg="unknown compression method",l.mode=30;break}if(R-=4,i=8+(15&(T>>>=4)),l.wbits===0)l.wbits=i;else if(i>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<i,_.adler=l.check=1,l.mode=512&T?10:12,R=T=0;break;case 2:for(;R<16;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(l.flags=T,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=T>>8&1),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0,l.mode=3;case 3:for(;R<32;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.head&&(l.head.time=T),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,C[2]=T>>>16&255,C[3]=T>>>24&255,l.check=a(l.check,C,4,0)),R=T=0,l.mode=4;case 4:for(;R<16;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.head&&(l.head.xflags=255&T,l.head.os=T>>8),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0,l.mode=5;case 5:if(1024&l.flags){for(;R<16;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.length=T,l.head&&(l.head.extra_len=T),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&($<(W=l.length)&&(W=$),W&&(l.head&&(i=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),r.arraySet(l.head.extra,M,F,W,i)),512&l.flags&&(l.check=a(l.check,M,W,F)),$-=W,F+=W,l.length-=W),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if($===0)break t;for(W=0;i=M[F+W++],l.head&&i&&l.length<65536&&(l.head.name+=String.fromCharCode(i)),i&&W<$;);if(512&l.flags&&(l.check=a(l.check,M,W,F)),$-=W,F+=W,i)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if($===0)break t;for(W=0;i=M[F+W++],l.head&&i&&l.length<65536&&(l.head.comment+=String.fromCharCode(i)),i&&W<$;);if(512&l.flags&&(l.check=a(l.check,M,W,F)),$-=W,F+=W,i)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;R<16;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(T!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}R=T=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;R<32;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}_.adler=l.check=d(T),R=T=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=$,l.hold=T,l.bits=R,2;_.adler=l.check=1,l.mode=12;case 12:if(H===5||H===6)break t;case 13:if(l.last){T>>>=7&R,R-=7&R,l.mode=27;break}for(;R<3;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}switch(l.last=1&T,R-=1,3&(T>>>=1)){case 0:l.mode=14;break;case 1:if(V(l),l.mode=20,H!==6)break;T>>>=2,R-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}T>>>=2,R-=2;break;case 14:for(T>>>=7&R,R-=7&R;R<32;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if((65535&T)!=(T>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&T,R=T=0,l.mode=15,H===6)break t;case 15:l.mode=16;case 16:if(W=l.length){if($<W&&(W=$),tt<W&&(W=tt),W===0)break t;r.arraySet(et,M,F,W,it),$-=W,F+=W,tt-=W,it+=W,l.length-=W;break}l.mode=12;break;case 17:for(;R<14;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(l.nlen=257+(31&T),T>>>=5,R-=5,l.ndist=1+(31&T),T>>>=5,R-=5,l.ncode=4+(15&T),T>>>=4,R-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;R<3;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.lens[q[l.have++]]=7&T,T>>>=3,R-=3}for(;l.have<19;)l.lens[q[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,z={bits:l.lenbits},D=g(0,l.lens,0,19,l.lencode,0,l.work,z),l.lenbits=z.bits,D){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;nt=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ht=65535&f,!((rt=f>>>24)<=R);){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(ht<16)T>>>=rt,R-=rt,l.lens[l.have++]=ht;else{if(ht===16){for(v=rt+2;R<v;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(T>>>=rt,R-=rt,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}i=l.lens[l.have-1],W=3+(3&T),T>>>=2,R-=2}else if(ht===17){for(v=rt+3;R<v;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}R-=rt,i=0,W=3+(7&(T>>>=rt)),T>>>=3,R-=3}else{for(v=rt+7;R<v;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}R-=rt,i=0,W=11+(127&(T>>>=rt)),T>>>=7,R-=7}if(l.have+W>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;W--;)l.lens[l.have++]=i}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,z={bits:l.lenbits},D=g(y,l.lens,0,l.nlen,l.lencode,0,l.work,z),l.lenbits=z.bits,D){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,z={bits:l.distbits},D=g(p,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,z),l.distbits=z.bits,D){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,H===6)break t;case 20:l.mode=21;case 21:if(6<=$&&258<=tt){_.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=$,l.hold=T,l.bits=R,c(_,G),it=_.next_out,et=_.output,tt=_.avail_out,F=_.next_in,M=_.input,$=_.avail_in,T=l.hold,R=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;nt=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ht=65535&f,!((rt=f>>>24)<=R);){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(nt&&!(240&nt)){for(ut=rt,wt=nt,bt=ht;nt=(f=l.lencode[bt+((T&(1<<ut+wt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(rt=f>>>24)<=R);){if($===0)break t;$--,T+=M[F++]<<R,R+=8}T>>>=ut,R-=ut,l.back+=ut}if(T>>>=rt,R-=rt,l.back+=rt,l.length=ht,nt===0){l.mode=26;break}if(32&nt){l.back=-1,l.mode=12;break}if(64&nt){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&nt,l.mode=22;case 22:if(l.extra){for(v=l.extra;R<v;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.length+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;nt=(f=l.distcode[T&(1<<l.distbits)-1])>>>16&255,ht=65535&f,!((rt=f>>>24)<=R);){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(!(240&nt)){for(ut=rt,wt=nt,bt=ht;nt=(f=l.distcode[bt+((T&(1<<ut+wt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(rt=f>>>24)<=R);){if($===0)break t;$--,T+=M[F++]<<R,R+=8}T>>>=ut,R-=ut,l.back+=ut}if(T>>>=rt,R-=rt,l.back+=rt,64&nt){_.msg="invalid distance code",l.mode=30;break}l.offset=ht,l.extra=15&nt,l.mode=24;case 24:if(l.extra){for(v=l.extra;R<v;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}l.offset+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(tt===0)break t;if(W=G-tt,l.offset>W){if((W=l.offset-W)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}lt=W>l.wnext?(W-=l.wnext,l.wsize-W):l.wnext-W,W>l.length&&(W=l.length),ft=l.window}else ft=et,lt=it-l.offset,W=l.length;for(tt<W&&(W=tt),tt-=W,l.length-=W;et[it++]=ft[lt++],--W;);l.length===0&&(l.mode=21);break;case 26:if(tt===0)break t;et[it++]=l.length,tt--,l.mode=21;break;case 27:if(l.wrap){for(;R<32;){if($===0)break t;$--,T|=M[F++]<<R,R+=8}if(G-=tt,_.total_out+=G,l.total+=G,G&&(_.adler=l.check=l.flags?a(l.check,et,G,it-G):o(l.check,et,G,it-G)),G=tt,(l.flags?T:d(T))!==l.check){_.msg="incorrect data check",l.mode=30;break}R=T=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;R<32;){if($===0)break t;$--,T+=M[F++]<<R,R+=8}if(T!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}R=T=0}l.mode=29;case 29:D=1;break t;case 30:D=-3;break t;case 31:return-4;case 32:default:return h}return _.next_out=it,_.avail_out=tt,_.next_in=F,_.avail_in=$,l.hold=T,l.bits=R,(l.wsize||G!==_.avail_out&&l.mode<30&&(l.mode<27||H!==4))&&Q(_,_.output,_.next_out,G-_.avail_out)?(l.mode=31,-4):(X-=_.avail_in,G-=_.avail_out,_.total_in+=X,_.total_out+=G,l.total+=G,l.wrap&&G&&(_.adler=l.check=l.flags?a(l.check,et,G,_.next_out-G):o(l.check,et,G,_.next_out-G)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(X==0&&G===0||H===4)&&D===b&&(D=-5),D)},n.inflateEnd=function(_){if(!_||!_.state)return h;var H=_.state;return H.window&&(H.window=null),_.state=null,b},n.inflateGetHeader=function(_,H){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=H).done=!1,b):h},n.inflateSetDictionary=function(_,H){var l,M=H.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?h:l.mode===11&&o(1,H,M,0)!==l.check?-3:Q(_,H,M,M)?(l.mode=31,-4):(l.havedict=1,b):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,n){var r=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(y,p,b,h,w,u,m,d){var k,x,A,E,j,O,N,B,V,Q=d.bits,_=0,H=0,l=0,M=0,et=0,F=0,it=0,$=0,tt=0,T=0,R=null,X=0,G=new r.Buf16(16),W=new r.Buf16(16),lt=null,ft=0;for(_=0;_<=15;_++)G[_]=0;for(H=0;H<h;H++)G[p[b+H]]++;for(et=Q,M=15;1<=M&&G[M]===0;M--);if(M<et&&(et=M),M===0)return w[u++]=20971520,w[u++]=20971520,d.bits=1,0;for(l=1;l<M&&G[l]===0;l++);for(et<l&&(et=l),_=$=1;_<=15;_++)if($<<=1,($-=G[_])<0)return-1;if(0<$&&(y===0||M!==1))return-1;for(W[1]=0,_=1;_<15;_++)W[_+1]=W[_]+G[_];for(H=0;H<h;H++)p[b+H]!==0&&(m[W[p[b+H]]++]=H);if(O=y===0?(R=lt=m,19):y===1?(R=o,X-=257,lt=a,ft-=257,256):(R=c,lt=g,-1),_=l,j=u,it=H=T=0,A=-1,E=(tt=1<<(F=et))-1,y===1&&852<tt||y===2&&592<tt)return 1;for(;;){for(N=_-it,V=m[H]<O?(B=0,m[H]):m[H]>O?(B=lt[ft+m[H]],R[X+m[H]]):(B=96,0),k=1<<_-it,l=x=1<<F;w[j+(T>>it)+(x-=k)]=N<<24|B<<16|V|0,x!==0;);for(k=1<<_-1;T&k;)k>>=1;if(k!==0?(T&=k-1,T+=k):T=0,H++,--G[_]==0){if(_===M)break;_=p[b+m[H]]}if(et<_&&(T&E)!==A){for(it===0&&(it=et),j+=l,$=1<<(F=_-it);F+it<M&&!(($-=G[F+it])<=0);)F++,$<<=1;if(tt+=1<<F,y===1&&852<tt||y===2&&592<tt)return 1;w[A=T&E]=et<<24|F<<16|j-u|0}}return T!==0&&(w[j+T]=_-it<<24|64<<16|0),d.bits=et,0}},{"../utils/common":41}],51:[function(e,s,n){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,n){var r=e("../utils/common"),o=0,a=1;function c(f){for(var C=f.length;0<=--C;)f[C]=0}var g=0,y=29,p=256,b=p+1+y,h=30,w=19,u=2*b+1,m=15,d=16,k=7,x=256,A=16,E=17,j=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(b+2));c(Q);var _=new Array(2*h);c(_);var H=new Array(512);c(H);var l=new Array(256);c(l);var M=new Array(y);c(M);var et,F,it,$=new Array(h);function tt(f,C,q,I,L){this.static_tree=f,this.extra_bits=C,this.extra_base=q,this.elems=I,this.max_length=L,this.has_stree=f&&f.length}function T(f,C){this.dyn_tree=f,this.max_code=0,this.stat_desc=C}function R(f){return f<256?H[f]:H[256+(f>>>7)]}function X(f,C){f.pending_buf[f.pending++]=255&C,f.pending_buf[f.pending++]=C>>>8&255}function G(f,C,q){f.bi_valid>d-q?(f.bi_buf|=C<<f.bi_valid&65535,X(f,f.bi_buf),f.bi_buf=C>>d-f.bi_valid,f.bi_valid+=q-d):(f.bi_buf|=C<<f.bi_valid&65535,f.bi_valid+=q)}function W(f,C,q){G(f,q[2*C],q[2*C+1])}function lt(f,C){for(var q=0;q|=1&f,f>>>=1,q<<=1,0<--C;);return q>>>1}function ft(f,C,q){var I,L,U=new Array(m+1),J=0;for(I=1;I<=m;I++)U[I]=J=J+q[I-1]<<1;for(L=0;L<=C;L++){var Z=f[2*L+1];Z!==0&&(f[2*L]=lt(U[Z]++,Z))}}function rt(f){var C;for(C=0;C<b;C++)f.dyn_ltree[2*C]=0;for(C=0;C<h;C++)f.dyn_dtree[2*C]=0;for(C=0;C<w;C++)f.bl_tree[2*C]=0;f.dyn_ltree[2*x]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function nt(f){8<f.bi_valid?X(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function ht(f,C,q,I){var L=2*C,U=2*q;return f[L]<f[U]||f[L]===f[U]&&I[C]<=I[q]}function ut(f,C,q){for(var I=f.heap[q],L=q<<1;L<=f.heap_len&&(L<f.heap_len&&ht(C,f.heap[L+1],f.heap[L],f.depth)&&L++,!ht(C,I,f.heap[L],f.depth));)f.heap[q]=f.heap[L],q=L,L<<=1;f.heap[q]=I}function wt(f,C,q){var I,L,U,J,Z=0;if(f.last_lit!==0)for(;I=f.pending_buf[f.d_buf+2*Z]<<8|f.pending_buf[f.d_buf+2*Z+1],L=f.pending_buf[f.l_buf+Z],Z++,I===0?W(f,L,C):(W(f,(U=l[L])+p+1,C),(J=O[U])!==0&&G(f,L-=M[U],J),W(f,U=R(--I),q),(J=N[U])!==0&&G(f,I-=$[U],J)),Z<f.last_lit;);W(f,x,C)}function bt(f,C){var q,I,L,U=C.dyn_tree,J=C.stat_desc.static_tree,Z=C.stat_desc.has_stree,Y=C.stat_desc.elems,at=-1;for(f.heap_len=0,f.heap_max=u,q=0;q<Y;q++)U[2*q]!==0?(f.heap[++f.heap_len]=at=q,f.depth[q]=0):U[2*q+1]=0;for(;f.heap_len<2;)U[2*(L=f.heap[++f.heap_len]=at<2?++at:0)]=1,f.depth[L]=0,f.opt_len--,Z&&(f.static_len-=J[2*L+1]);for(C.max_code=at,q=f.heap_len>>1;1<=q;q--)ut(f,U,q);for(L=Y;q=f.heap[1],f.heap[1]=f.heap[f.heap_len--],ut(f,U,1),I=f.heap[1],f.heap[--f.heap_max]=q,f.heap[--f.heap_max]=I,U[2*L]=U[2*q]+U[2*I],f.depth[L]=(f.depth[q]>=f.depth[I]?f.depth[q]:f.depth[I])+1,U[2*q+1]=U[2*I+1]=L,f.heap[1]=L++,ut(f,U,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(st,mt){var Ot,kt,Ht,ct,ne,pi,_t=mt.dyn_tree,Ki=mt.max_code,kr=mt.stat_desc.static_tree,_r=mt.stat_desc.has_stree,xr=mt.stat_desc.extra_bits,Gi=mt.stat_desc.extra_base,Dt=mt.stat_desc.max_length,oe=0;for(ct=0;ct<=m;ct++)st.bl_count[ct]=0;for(_t[2*st.heap[st.heap_max]+1]=0,Ot=st.heap_max+1;Ot<u;Ot++)Dt<(ct=_t[2*_t[2*(kt=st.heap[Ot])+1]+1]+1)&&(ct=Dt,oe++),_t[2*kt+1]=ct,Ki<kt||(st.bl_count[ct]++,ne=0,Gi<=kt&&(ne=xr[kt-Gi]),pi=_t[2*kt],st.opt_len+=pi*(ct+ne),_r&&(st.static_len+=pi*(kr[2*kt+1]+ne)));if(oe!==0){do{for(ct=Dt-1;st.bl_count[ct]===0;)ct--;st.bl_count[ct]--,st.bl_count[ct+1]+=2,st.bl_count[Dt]--,oe-=2}while(0<oe);for(ct=Dt;ct!==0;ct--)for(kt=st.bl_count[ct];kt!==0;)Ki<(Ht=st.heap[--Ot])||(_t[2*Ht+1]!==ct&&(st.opt_len+=(ct-_t[2*Ht+1])*_t[2*Ht],_t[2*Ht+1]=ct),kt--)}}(f,C),ft(U,at,f.bl_count)}function i(f,C,q){var I,L,U=-1,J=C[1],Z=0,Y=7,at=4;for(J===0&&(Y=138,at=3),C[2*(q+1)+1]=65535,I=0;I<=q;I++)L=J,J=C[2*(I+1)+1],++Z<Y&&L===J||(Z<at?f.bl_tree[2*L]+=Z:L!==0?(L!==U&&f.bl_tree[2*L]++,f.bl_tree[2*A]++):Z<=10?f.bl_tree[2*E]++:f.bl_tree[2*j]++,U=L,at=(Z=0)===J?(Y=138,3):L===J?(Y=6,3):(Y=7,4))}function D(f,C,q){var I,L,U=-1,J=C[1],Z=0,Y=7,at=4;for(J===0&&(Y=138,at=3),I=0;I<=q;I++)if(L=J,J=C[2*(I+1)+1],!(++Z<Y&&L===J)){if(Z<at)for(;W(f,L,f.bl_tree),--Z!=0;);else L!==0?(L!==U&&(W(f,L,f.bl_tree),Z--),W(f,A,f.bl_tree),G(f,Z-3,2)):Z<=10?(W(f,E,f.bl_tree),G(f,Z-3,3)):(W(f,j,f.bl_tree),G(f,Z-11,7));U=L,at=(Z=0)===J?(Y=138,3):L===J?(Y=6,3):(Y=7,4)}}c($);var z=!1;function v(f,C,q,I){G(f,(g<<1)+(I?1:0),3),function(L,U,J,Z){nt(L),X(L,J),X(L,~J),r.arraySet(L.pending_buf,L.window,U,J,L.pending),L.pending+=J}(f,C,q)}n._tr_init=function(f){z||(function(){var C,q,I,L,U,J=new Array(m+1);for(L=I=0;L<y-1;L++)for(M[L]=I,C=0;C<1<<O[L];C++)l[I++]=L;for(l[I-1]=L,L=U=0;L<16;L++)for($[L]=U,C=0;C<1<<N[L];C++)H[U++]=L;for(U>>=7;L<h;L++)for($[L]=U<<7,C=0;C<1<<N[L]-7;C++)H[256+U++]=L;for(q=0;q<=m;q++)J[q]=0;for(C=0;C<=143;)Q[2*C+1]=8,C++,J[8]++;for(;C<=255;)Q[2*C+1]=9,C++,J[9]++;for(;C<=279;)Q[2*C+1]=7,C++,J[7]++;for(;C<=287;)Q[2*C+1]=8,C++,J[8]++;for(ft(Q,b+1,J),C=0;C<h;C++)_[2*C+1]=5,_[2*C]=lt(C,5);et=new tt(Q,O,p+1,b,m),F=new tt(_,N,0,h,m),it=new tt(new Array(0),B,0,w,k)}(),z=!0),f.l_desc=new T(f.dyn_ltree,et),f.d_desc=new T(f.dyn_dtree,F),f.bl_desc=new T(f.bl_tree,it),f.bi_buf=0,f.bi_valid=0,rt(f)},n._tr_stored_block=v,n._tr_flush_block=function(f,C,q,I){var L,U,J=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(Z){var Y,at=4093624447;for(Y=0;Y<=31;Y++,at>>>=1)if(1&at&&Z.dyn_ltree[2*Y]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(Y=32;Y<p;Y++)if(Z.dyn_ltree[2*Y]!==0)return a;return o}(f)),bt(f,f.l_desc),bt(f,f.d_desc),J=function(Z){var Y;for(i(Z,Z.dyn_ltree,Z.l_desc.max_code),i(Z,Z.dyn_dtree,Z.d_desc.max_code),bt(Z,Z.bl_desc),Y=w-1;3<=Y&&Z.bl_tree[2*V[Y]+1]===0;Y--);return Z.opt_len+=3*(Y+1)+5+5+4,Y}(f),L=f.opt_len+3+7>>>3,(U=f.static_len+3+7>>>3)<=L&&(L=U)):L=U=q+5,q+4<=L&&C!==-1?v(f,C,q,I):f.strategy===4||U===L?(G(f,2+(I?1:0),3),wt(f,Q,_)):(G(f,4+(I?1:0),3),function(Z,Y,at,st){var mt;for(G(Z,Y-257,5),G(Z,at-1,5),G(Z,st-4,4),mt=0;mt<st;mt++)G(Z,Z.bl_tree[2*V[mt]+1],3);D(Z,Z.dyn_ltree,Y-1),D(Z,Z.dyn_dtree,at-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,J+1),wt(f,f.dyn_ltree,f.dyn_dtree)),rt(f),I&&nt(f)},n._tr_tally=function(f,C,q){return f.pending_buf[f.d_buf+2*f.last_lit]=C>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&C,f.pending_buf[f.l_buf+f.last_lit]=255&q,f.last_lit++,C===0?f.dyn_ltree[2*q]++:(f.matches++,C--,f.dyn_ltree[2*(l[q]+p+1)]++,f.dyn_dtree[2*R(C)]++),f.last_lit===f.lit_bufsize-1},n._tr_align=function(f){G(f,2,3),W(f,x,Q),function(C){C.bi_valid===16?(X(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,s,n){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,n){(function(r){(function(o,a){if(!o.setImmediate){var c,g,y,p,b=1,h={},w=!1,u=o.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(o);m=m&&m.setTimeout?m:o,c={}.toString.call(o.process)==="[object process]"?function(A){process.nextTick(function(){k(A)})}:function(){if(o.postMessage&&!o.importScripts){var A=!0,E=o.onmessage;return o.onmessage=function(){A=!1},o.postMessage("","*"),o.onmessage=E,A}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",x,!1):o.attachEvent("onmessage",x),function(A){o.postMessage(p+A,"*")}):o.MessageChannel?((y=new MessageChannel).port1.onmessage=function(A){k(A.data)},function(A){y.port2.postMessage(A)}):u&&"onreadystatechange"in u.createElement("script")?(g=u.documentElement,function(A){var E=u.createElement("script");E.onreadystatechange=function(){k(A),E.onreadystatechange=null,g.removeChild(E),E=null},g.appendChild(E)}):function(A){setTimeout(k,0,A)},m.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var E=new Array(arguments.length-1),j=0;j<E.length;j++)E[j]=arguments[j+1];var O={callback:A,args:E};return h[b]=O,c(b),b++},m.clearImmediate=d}function d(A){delete h[A]}function k(A){if(w)setTimeout(k,0,A);else{var E=h[A];if(E){w=!0;try{(function(j){var O=j.callback,N=j.args;switch(N.length){case 0:O();break;case 1:O(N[0]);break;case 2:O(N[0],N[1]);break;case 3:O(N[0],N[1],N[2]);break;default:O.apply(a,N)}})(E)}finally{d(A),w=!1}}}}function x(A){A.source===o&&typeof A.data=="string"&&A.data.indexOf(p)===0&&k(+A.data.slice(p.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(wr);var Zr=wr.exports;const Wi=vr(Zr),nr="Blech Listen",Wr=3,zt="metalSheetLists",oi=class oi extends Lt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=P`
      <pg-drawer-item-import
        storegistkey="${ot.metalSheetLists}"
        title="${nr}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>

      <drawer-new-metal-sheet-list-button></drawer-new-metal-sheet-list-button>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(zt,[])}),t.ui.setExportHandler(async()=>{const e=new Wi;for(const n of this.uiStore.ui.get(zt)){const r=ir(n),o=JSON.stringify(n);e.file(r,o)}const s=await e.generateAsync({type:"blob"});Zi.saveAs(s,`${ot.metalSheetLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=nr,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(zt,this.storeMetalSheetListsHandler.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){if(typeof(t==null?void 0:t.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(t==null?void 0:t.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(t==null?void 0:t.toolID)!="string"&&(t.toolID=""),Object.hasOwn(t,"data")||(t.data={}),typeof t.data.press!="number"&&(t.data.press=-1),Object.hasOwn(t.data,"table")?(Object.hasOwn(t.data.table,"header")||(t.data.table.header=[]),Object.hasOwn(t.data.table,"data")||(t.data.table.data=[])):t.data.table={header:[],data:[]},t}async update(t){console.debug("[PGDrawerMetalSheetLists.update]",{data:t}),di(this.uiStore,t,{storeDataKey:zt,getKey:gt})}async storeGistHandler(t){console.debug("[PGDrawerMetalSheetLists.storeGistHandler]",{data:t}),Vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:ot.metalSheetLists,storeDataKey:zt,getFileName:ir,onUpdate:this.update.bind(this)})}async storeMetalSheetListsHandler(t){if(!t)throw"no data!";const e=[...this.children].slice(Wr);for(;e.length>0;)this.removeChild(e.pop());for(const s of Fr(t)){const n=new xe;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ot.metalSheetLists,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{confirm(`Delete "${s.format} - ${s.toolID} - ${s.date}"`)&&this.uiStore.ui.update(zt,r=>{const o=gt(s);return r.filter(a=>gt(a)!==o)})})}}};K(oi,"register",()=>{customElements.define("pg-drawer-group-metal-sheet-lists",oi)});let Mi=oi;const or="Vis",Kr=2,Bt="vis",ai=class ai extends Lt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Rt,this.render()}render(){this.innerHTML=P`
      <pg-drawer-item-import
        storegistkey="${ot.vis}"
        title="${or}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Nr),t.ui.setUpdateHandler(this.update.bind(this)),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Bt,[])}),t.ui.setExportHandler(async()=>{const e=new Wi;for(const n of this.uiStore.ui.get(Bt)){const r=rr(n),o=JSON.stringify(n);e.file(r,o)}const s=await e.generateAsync({type:"blob"});Zi.saveAs(s,`${ot.vis}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=or,this.cleanup.add(this.uiStore.ui.on("gist",this.storeGistHandler.bind(this),!0),this.uiStore.ui.on(Bt,this.storeVisHandler.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async update(t){console.debug("[PGDrawerVis.update]",{data:t}),di(this.uiStore,t,{storeDataKey:Bt,getKey:mr})}storeGistHandler(t){console.debug("[PGDrawerVis.storeGistHandler]",{data:t}),Vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:ot.vis,storeDataKey:Bt,getFileName:rr,onUpdate:this.update.bind(this)})}storeVisHandler(t){if(!t)throw"no data!";const e=[...this.children].slice(Kr);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new Se;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ot.vis,o=>{o.ui.set(s)});const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update(Bt,r=>r.filter(o=>o.title!==s.title))})}}};K(ai,"register",()=>{customElements.define("pg-drawer-group-vis",ai)});let ji=ai;const ar="Vis Data",Gr=2,lr="visData",li=class li extends Lt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=P`
      <pg-drawer-item-import
        storegistkey="${ot.visData}"
        title="${ar}"
        disabled
      ></pg-drawer-item-import>

      <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
          New Data
        </ui-button>
      </ui-drawer-group-item>
    `;const t=this.querySelector("pg-drawer-item-import"),e=this.querySelector("ui-button[name=new]");t.ui.setValidateHandler(this.validate.bind(this)),t.ui.setUpdateHandler(this.update.bind(this)),e.ui.events.on("click",this.onClickNewData.bind(this))}connectedCallback(){super.connectedCallback(),this.ui.title=ar,this.cleanup.add(this.uiStore.ui.on(lr,this.onVisData.bind(this)))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}async validate(t){return t}async update(t){}onVisData(t){if(!t)throw"no data!";const e=[...this.children].slice(Gr);for(;e.length>0;)this.removeChild(e.pop());for(const s of t){const n=new Ce;n.ui.set(s),this.appendChild(n),n.ui.events.on("click",()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(ot.visData);const r=document.querySelector("pg-drawer");r.ui.open=!1}),n.ui.events.on("delete",()=>{this.uiStore.ui.update(lr,r=>r.filter(o=>o.title!==s.title))})}}onClickNewData(){console.debug("[PGDrawerVisData.onClickNewData]");const t=new de;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};K(li,"register",()=>{customElements.define("pg-drawer-group-vis-data",li)});let qi=li;function Jr(S){return`VisLists_${S.name}.json`}function Yr(S){return`${S.name}`}const ur="Vis Listen",jt="visLists",ui=class ui extends Lt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Rt,this.onVisLists=t=>{if(!t)throw"no data!";for(;this.children.length>1;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(Xr({primary:e.name,secondary:`${e.data.length} Einträge`,onClick:()=>{console.warn("[PGDrawerVisLists] Clicked item...")},onDelete:e.allowDeletion?()=>{console.warn("[PGDrawerVisLists] Clicked deletion")}:null}).element)},this.render()}render(){this.innerHTML=P`
      <pg-drawer-item-import
        title="${ur}"
        storegistkey="${jt}"
      ></pg-drawer-item-import>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Pr),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(jt,[])}),t.ui.setUpdateHandler(e=>{di(this.uiStore,e,{storeDataKey:jt,getKey:Yr})}),t.ui.setExportHandler(async()=>{const e=new Wi;for(const n of this.uiStore.ui.get(jt)){const r=Jr(n),o=JSON.stringify(n);e.file(r,o)}const s=await e.generateAsync({type:"blob"});Zi.saveAs(s,`${ot.visLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=ur,this.cleanup.add(this.uiStore.ui.on(jt,this.onVisLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ui,"register",()=>{customElements.define("pg-drawer-group-vis-lists",ui)});let Ii=ui;function Xr({primary:S,secondary:t,onClick:e,onDelete:s=null}){const n=new yt;n.innerHTML=P`
    <ui-flex-grid-row>
      <ui-flex-grid-item>
        <ui-button
          name="item"
          style="justify-content: flex-start;"
          color="primary"
          variant="ghost"
        >
          <span>
            <ui-primary>${S}</ui-primary>
            <br />
            <ui-secondary>${t}</ui-secondary>
          </span>
        </ui-button>
      </ui-flex-grid-item>

      ${s?P`<ui-flex-grid-item name="delete">
            <!-- TODO: Add a delete icon button here -->
          </ui-flex-grid-item>`:""}
    </ui-flex-grid-row>
  `;const r=n.querySelector('[name="delete"]');r&&r.addEventListener("click",s);const o=n.querySelector('[name="item"]');return o&&o.addEventListener("click",e),{destroy:()=>{n.parentElement&&n.parentElement.removeChild(n)},element:n}}const Qr=P`
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
`,Qt=class Qt extends yt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.ui={...this.ui,root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=P`
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
            ${Qr}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,s){switch(t){case"disabled":this.setDisabled(s);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new he(this.ui.title);t.ui.events.on("submit",async e=>{if(!this.onValidate)throw new Error("onValidate callback missing");if(!this.onUpdate)throw new Error("onUpdate callback missing");if(!e){qr(async r=>{let o=null;try{o=await this.onValidate(r,null)}catch(a){alert(`Validation failed: ${a}`);return}o!==null&&await this.onUpdate(o)});return}if(this.ui.storegistkey===null)throw new Error("gist-key missing");const s=new Ui(e);let n;try{n=await s.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storegistkey}`]={id:e,revision:n.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in n.files)n.files[r].content=await this.onValidate(n.files[r].content,s.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const r of Object.values(n.files))await this.onUpdate(r.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};K(Qt,"register",()=>{customElements.define("pg-drawer-item-import",Qt)}),K(Qt,"observedAttributes",["disabled"]);let Fi=Qt;const te=class te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.ui={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=P`
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
    `,this.input=this.shadowRoot.querySelector("ui-search")}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"active":this.setActive(s);break;case"prefix":this.setPrefix(s);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--search-bar-height","0rem"):(this.stackLayout.style.setProperty("--search-bar-height","4.5rem"),this.ui.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};K(te,"register",()=>{customElements.define("search-bar",te)}),K(te,"observedAttributes",["title","active","prefix"]);let Ni=te;const ts=P`
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
`,es=P`
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
`,is=P`
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
`,rs=P`
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
`,ci=class ci extends le{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=P`
      <ui-app-bar-item name="menu" slot="left">
        <ui-icon-button ghost> ${es} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="back" slot="left" style="display: none">
        <ui-icon-button ghost> ${ts} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="title" slot="center">
        <h4 class="title" style="white-space: nowrap;"></h4>
      </ui-app-bar-item>

      <ui-app-bar-item name="edit" slot="right">
        <ui-icon-button ghost> ${is} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="share" slot="right">
        <ui-icon-button ghost> ${rs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="search" slot="right">
        <ui-icon-button ghost> ${hr} </ui-icon-button>
      </ui-app-bar-item>
    `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top")}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const s=this.uiStore.ui.get("edit").onClick;typeof s=="function"&&s()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var r;const s=((r=this.uiStore.ui.get("share"))==null?void 0:r())||null;if(!s)return;const n=async()=>{const o=document.createElement("a");for(const a of s.files)o.download=a.name,o.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),o.click()};if(!navigator.canShare)return await n();if(navigator.canShare(s)){try{await navigator.share(s)}catch{await n()}return}await n()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",s=>({...s,active:!s.active}))),t}};K(ci,"register",()=>{customElements.define("pg-app-bar",ci)});let Pi=ci;const hi=class hi extends HTMLElement{constructor(){super(),this.cleanup=new Rt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=P`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){const t=new Date;this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visLists",[{date:t.getTime(),name:"Presse 0",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 2",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 3",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 4",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 5",allowDeletion:!1,data:[]}],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(console.debug('[PGApp.createStackLayout "change"]',{newPage:t}),this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case ot.alertLists:this.setupAlertListsPage();break;case ot.alert:this.setupAlertPage();break;case ot.metalSheetLists:this.setupMetalSheetListsPage();break;case ot.vis:this.setupVisPage();break;case ot.product:this.setupProductPage();break;case ot.visData:break;default:this.setupNoPage()}}),this.stackLayout.ui.register("alert-lists",()=>new me),this.stackLayout.ui.register("metal-sheet-lists",()=>new ve),this.stackLayout.ui.register("vis",()=>new we),this.stackLayout.ui.register("vis-data",()=>new ke)}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.show()}setupAlertPage(){this.resetAppBar()}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.show()}setupVisPage(){this.resetAppBar()}setupProductPage(){this.resetAppBar()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide()}async onAppBarTitle(t){console.debug("[PGApp.onAppBarTitle]",{title:t}),this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){console.debug("[PGApp.onShare]",{data:t}),t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};K(hi,"register",()=>{customElements.define("pg-app",hi)});let $i=hi;Hr({onRegistered(S){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${gr}`),await S.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Tr();he.register();de.register();fe.register();pe.register();me.register();se.register();ge.register();be.register();Ti.register();ve.register();ye.register();we.register();ke.register();Bi.register();Oi.register();Hi.register();_e.register();xe.register();Ce.register();Se.register();Fi.register();Di.register();Mi.register();ji.register();Ii.register();qi.register();zi.register();Ni.register();Pi.register();$i.register();
