var Br=Object.defineProperty;var or=x=>{throw TypeError(x)};var Dr=(x,t,e)=>t in x?Br(x,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):x[t]=e;var K=(x,t,e)=>Dr(x,typeof t!="symbol"?t+"":t,e),Or=(x,t,e)=>t.has(x)||or("Cannot "+e);var Ct=(x,t,e)=>(Or(x,t,"read from private field"),e?e.call(x):t.get(x)),ar=(x,t,e)=>t.has(x)?or("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(x):t.set(x,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerPolicy&&(s.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?s.credentials="include":n.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=e(n);fetch(n.href,s)}})();const lr={onDragStart:null,onDragging:null,onDragEnd:null};function Mr(x,t={}){t={...lr,...t};const e=()=>{const s=[...x.parentNode.children].indexOf(x);x.draggable=!0,x.ondragstart=o=>{o.dataTransfer.effectAllowed="move",o.dataTransfer.dropEffect="move",o.dataTransfer.setData("text/plain",s.toString()),t.onDragStart&&t.onDragStart(s)},x.ondragover=o=>(o.preventDefault(),!1),x.ondragenter=o=>{o.preventDefault(),t.onDragging&&t.onDragging(s)},x.ondrop=o=>{o.preventDefault(),o.dataTransfer.dropEffect="move";const a=parseInt(o.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(a,s)}},i=()=>{x.draggable=!1,x.ondragstart=null,x.ondragover=null,x.ondragenter=null,x.ondrop=null};return e(),{update(n){t={...lr,...n},i(),e()},destroy:i}}var yt;class pt{constructor(){ar(this,yt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return Ct(this,yt)[t]||(Ct(this,yt)[t]=[]),Ct(this,yt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!Ct(this,yt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,n=0;for(const s of Ct(this,yt)[t])s===e&&(Ct(this,yt)[t].splice(n,1),i=!0),n++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(Ct(this,yt)[t])for(const i of Ct(this,yt)[t])i(e);return this}}yt=new WeakMap;function ur(x,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,x.currentTarget.appendChild(e);const i=x.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${x.clientY-i.top}px`,e.style.left=`${x.clientX-i.left}px`);const n=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${n}) translate(0, 0)`,e}function cr(x){x&&(x.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&x.remove()}),x.style.opacity="0")}const Hr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function At(x,t={}){t={...Hr,...t};let e;const i=s=>{e=ur(s,t)},n=()=>{cr(e)};return x.classList.add("ripple-container"),x.style.overflow="hidden",t.useClick===!0?x.addEventListener("click",s=>{e=ur(s,t),cr(e)}):(x.addEventListener("pointerdown",i),x.addEventListener("pointerup",n),x.addEventListener("pointerleave",n)),()=>{x.classList.remove("ripple-container"),x.removeEventListener("pointerdown",i),x.removeEventListener("pointerup",n),x.removeEventListener("pointerleave",n)}}const $=String.raw,Xi=String.raw;class Rt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Be=class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Be,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Be)});let me=Be;const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(De,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",De)});let ki=De;const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return!this.root.removeRippleCallback},set noripple(t){if(!t){if(this.root.removeRippleCallback)return;this.root.removeRippleCallback=At(this.root)}this.root.removeRippleCallback&&(this.root.removeRippleCallback(),this.root.removeRippleCallback=null)},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=At(this)),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"noripple":this.ui.noripple=i!==null;break}}};K($t,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",$t)}),K($t,"observedAttributes",["noripple"]);let xi=$t;const Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return!this.root.removeRippleCallback},set noripple(t){if(!t){if(this.root.removeRippleCallback)return;this.root.removeRippleCallback=At(this.root)}this.root.removeRippleCallback&&(this.root.removeRippleCallback(),this.root.removeRippleCallback=null)},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
          transition: color 0.5s linear;
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=At(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"noripple":this.ui.noripple=i!==null;break}}};K(Pt,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Pt)}),K(Pt,"observedAttributes",["noripple"]);let _i=Pt;const Oe=class Oe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Oe,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Oe)});let Si=Oe;const qr=$`
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
`,Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new Rt,this.ui={root:this,events:new pt,get title(){return this.root.shadowRoot.querySelector('[name="title"]').innerHTML},set title(t){const e=this.root.shadowRoot.querySelector('[name="title"]');e.innerHTML=t||""},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const i=this.root.shadowRoot.querySelector("dialog"),n=i.inert;i.inert=e,t?i.showModal():i.show(),this.events.dispatch("open",null),i.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=$`
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
              ${qr}
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
    `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),n=s=>s.preventDefault();i.addEventListener("cancel",n),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",n)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break}}};K(Ut,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",Ut)}),K(Ut,"observedAttributes",["title"]);let _t=Ut;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open"),this.events.dispatch("close",this.root);return}this.root.setAttribute("open",""),this.events.dispatch("open",this.root)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};K(Me,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Me)});let ge=Me;const wr=$`
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
`,Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.shadowRoot.querySelector(".title").innerHTML},set title(t){let e=this.root.shadowRoot.querySelector(".title");if(!t){e.classList.remove("visible");return}e.classList.add("visible"),e.innerHTML=$`
          <span
            style="
              font-size: 1.5rem;
              font-weight: 600;
              font-variation-settings: var(--ui-heading-fontVariation);
            "
          >
            ${t}
          </span>
        `},get fold(){return this.root.hasAttribute("fold")},set fold(t){if(!t){this.root.removeAttribute("fold");return}this.root.setAttribute("fold","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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

        .icon {
          transition: transform 0.25s ease;
        }

        :host([fold]) .icon {
          transform: rotate(-90deg);
        }

        :host([fold]) ::slotted(*) {
          display: none !important;
        }
      </style>

      <ul>
        <ui-drawer-group-item
          style="position: relative; border-radius: var(--ui-radius);"
          role="button"
        >
          <ui-flex-grid-row>
            <ui-flex-grid-item class="title"></ui-flex-grid-item>

            <ui-flex-grid-item class="icon" flex="0">
              <ui-svg style="width: 2.5rem; height: 2.5rem;">
                ${wr}
              </ui-svg>
            </ui-flex-grid-item>
          </ui-flex-grid-row>
        </ui-drawer-group-item>

        <slot></slot>
      </ul>
    `;const t=this.shadowRoot.querySelector("ui-drawer-group-item");t.addEventListener("click",()=>{this.ui.fold=!this.ui.fold}),At(t)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break}}};K(Vt,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Vt)}),K(Vt,"observedAttributes",["title"]);let Tt=Vt;const He=class He extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(He,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",He)});let Dt=He;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.flex="1",this.ui={root:this,get flex(){return this.root.flex},set flex(t){this.root.flex=t||"1";const e=this.root.shadowRoot.querySelector('style[name="flex"]');e.textContent=Xi`
          :host {
            flex: ${this.root.flex};
          }
        `}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: block;
        }
      </style>

      <style name="flex">
        :host {
          flex: 1;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"flex":this.ui.flex=i;break}}};K(Zt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",Zt)}),K(Zt,"observedAttributes",["flex"]);let dt=Zt;const Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.gap="0",this.ui={root:this,get gap(){return this.root.gap},set gap(t){this.root.gap=t||"0";const e=this.root.shadowRoot.querySelector('style[name="gap"]');e.textContent=Xi`
          :host > ::slotted(*) {
            margin: 0 ${this.root.gap} !important;
          }
        `},get justify(){return this.root.style.justifyContent},set justify(t){this.root.style.justifyContent=t},get align(){return this.root.style.alignItems},set align(t){this.root.style.alignItems=t}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        * {
          box-sizing: border-box;
        }

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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"gap":this.ui.gap=i;break;case"justify":this.ui.justify=i;break;case"align":this.ui.align=i;break}}};K(Wt,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",Wt)}),K(Wt,"observedAttributes",["gap","justify","align"]);let be=Wt;const Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.gap="0",this.ui={root:this,get gap(){return this.root.gap},set gap(t){this.root.gap=t||"0";const e=this.root.shadowRoot.querySelector('style[name="gap"]');e.textContent=Xi`
          :host > ::slotted(*) {
            margin: ${this.root.gap} 0 !important;
          }
        `}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        * {
          box-sizing: border-box;
        }

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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"gap":this.ui.gap=i;break}}};K(Kt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Kt)}),K(Kt,"observedAttributes",["gap"]);let Lt=Kt;const Gt=class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={label:null,input:null,get primary(){return this.label.ui.primary},set primary(t){this.label.ui.primary=t},get secondary(){return this.label.ui.secondary},set secondary(t){this.label.ui.secondary=t},get value(){return this.input.value},set value(t){this.input.value=t},get checked(){return this.input.checked},set checked(t){this.input.checked=t}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <ui-label ripple>
        <input slot="input" type="checkbox"></input>
      </ui-label>
    `,this.ui.label=this.shadowRoot.querySelector("ui-label"),this.ui.input=this.shadowRoot.querySelector("input")}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"primary":this.ui.primary=i;break;case"secondary":this.ui.primary=i;break;case"value":this.ui.value=i;break;case"checked":this.ui.checked=i!==null;break}}};K(Gt,"register",()=>{customElements.get("ui-check")||customElements.define("ui-check",Gt)}),K(Gt,"observedAttributes",["primary","secondary","value","checked"]);let Ci=Gt;const Yt=class Yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRipple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.running},set ripple(t){if(!t){this.root.disableRipple();return}this.root.enableRipple()},get primary(){return this.root.shadowRoot.querySelector("ui-primary").innerHTML},set primary(t){this.root.shadowRoot.querySelector("ui-primary").innerHTML=t||""},get secondary(){return this.root.shadowRoot.querySelector("ui-secondary").innerHTML},set secondary(t){this.root.shadowRoot.querySelector("ui-secondary").innerHTML=t||""},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"ripple":this.ui.ripple=i!==null;break;case"primary":this.ui.primary=i;break;case"secondary":this.ui.secondary=i;break}}enableRipple(){if(this.removeRipple||(this.removeRipple=At(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.removeRipple&&this.removeRipple(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};K(Yt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Yt)}),K(Yt,"observedAttributes",["ripple","secondary","primary"]);let Ei=Yt;const qe=class qe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        :host {
          font-size: 1.1rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-primary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(qe,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",qe)});let Ai=qe;const je=class je extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        :host {
          font-size: 0.9rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(je,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",je)});let Mt=je;const Jt=class Jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,input:null,get title(){return this.root.getAttribute("title")},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new Mt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get type(){return this.input.type},set type(t){this.input.type=t||""},get value(){return this.input.value},set value(t){this.input.value=t},get placeholder(){return this.input.placeholder},set placeholder(t){this.input.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.input.min},set min(t){this.input.min=t},get max(){return this.input.max},set max(t){this.input.max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `,this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type=this.getAttribute("type")||"text",this.ui.input.oninput=()=>{this.ui.events.dispatch("input",this.ui.input.value)},this.ui.input.onchange=()=>{this.ui.events.dispatch("change",this.ui.input.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"type":this.ui.type=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"min":this.ui.min=i;break;case"max":this.ui.max=i;break}}};K(Jt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Jt)}),K(Jt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Li=Jt;const kr=$`
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
`,Xt=class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.storagekey="",this.ui={root:this,events:new pt,input:null,submit:this.querySelector('[name="submit"]'),get title(){return this.root.querySelector('[slot="title"]').innerHTML},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new Mt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get value(){return this.input.value},set value(t){this.input.value=t},get placeholder(){return this.input.placeholder},set placeholder(t){this.input.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.submit.style.display==="none"},set nosubmit(t){if(!t){this.submit.style.display=null;return}this.submit.style.display="none"},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.storagekey},set storagekey(t){this.root.storagekey=t,this.storage&&(this.value=localStorage.getItem(this.storageprefix+this.root.storagekey)||"",this.events.dispatch("storage",this.value))},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
        <ui-icon-button name="submit" ghost>${kr}</ui-icon-button>
      </div>
    `,this.ui.submit=this.shadowRoot.querySelector('[name="submit"]'),this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type="search",this.ui.input.addEventListener("keydown",async e=>{this.ui.nosubmit||e.key==="Enter"&&this.ui.submit.click()});let t=null;this.ui.input.addEventListener("input",async()=>{this.ui.storage&&(t!==null&&clearTimeout(t),t=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,this.ui.input.value),t=null},250)),this.ui.events.dispatch("input",this.ui.input.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",this.ui.input.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"nosubmit":this.ui.nosubmit=i!==null;break;case"storagekey":this.ui.storagekey=i;break}}};K(Xt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Xt)}),K(Xt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let Ri=Xt;const Ie=class Ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};K(Ie,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",Ie)});let oe=Ie;const Fe=class Fe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof oe)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
        <div class="icon"><ui-svg>${wr}</ui-svg></div>

        <slot></slot>
      </div>
    `;const t=i=>{const n=async s=>{(s.composedPath()||[]).forEach(o=>{o instanceof oe&&([...this.querySelectorAll("ui-select-option")].forEach(a=>a.removeAttribute("selected")),o.setAttribute("selected",""),this.ui.events.dispatch("change",o))})};this.classList.toggle("open")?(i.stopPropagation(),this.addEventListener("click",n)):setTimeout(()=>this.removeEventListener("click",n))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};K(Fe,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Fe)});let Ti=Fe;const Qt=class Qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,textarea:null,get title(){return this.root.getAttribute("title")},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new Mt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get value(){return this.textarea.value},set value(t){this.textarea.value=t},get placeholder(){return this.textarea.placeholder},set placeholder(t){this.textarea.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get rows(){return this.textarea.rows},set rows(t){this.textarea.rows=t},get cols(){return this.textarea.cols},set cols(t){this.textarea.cols=t},focus(t=null){this.root.shadowRoot.querySelector("textarea").focus(t)},blur(){this.root.shadowRoot.querySelector("textarea").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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

        textarea {
          resize: none;
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
          height: 100%;
          border: none;
          border: 1px solid var(--ui-borderColor);
          border-radius: var(--ui-radius);
          transition: border-color 0.25s linear;
        }

        .container:has(textarea:focus) {
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
        <textarea></textarea>
      </div>
    `,this.ui.textarea=this.shadowRoot.querySelector("textarea"),this.ui.textarea.oninput=()=>{this.ui.events.dispatch("input",this.ui.textarea.value)},this.ui.textarea.onchange=()=>{this.ui.events.dispatch("change",this.ui.textarea.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.textarea.ariaInvalid=i!==null?"":null;break;case"rows":this.ui.rows=i!==null?parseFloat(i):null;break;case"cols":this.ui.cols=i!==null?parseFloat(i):null;break}}};K(Qt,"register",()=>{customElements.get("ui-textarea")||customElements.define("ui-textarea",Qt)}),K(Qt,"observedAttributes",["title","value","placeholder","invalid","rows","cols"]);let zi=Qt;const te=class te extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new pt,get current(){return this.root.getAttribute("current")},set current(t){this.root.setCurrent(t||"")},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var i,n;return((n=(i=this.data)==null?void 0:i[t])==null?void 0:n[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"current":this.ui.current=i;break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.href)throw"Missing href attribute!";try{this.data=(await fetch(e.ui.href)).json()}catch(i){console.error(i)}this.ui.events.dispatch("change",e)}}};K(te,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",te)}),K(te,"observedAttributes",["current"]);let Bi=te;const Ne=class Ne extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(Ne,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Ne)});let Di=Ne;const ee=class ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){const e=this.root.shadowRoot.querySelector(".background");if(!t){e.style.display=null;return}e.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"nobg":this.ui.nobg=i!==null;break}}};K(ee,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",ee)}),K(ee,"observedAttributes",["nobg"]);let ae=ee;const ie=class ie extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),this.name=t,this.ui={root:this,get name(){return this.root.name},set name(e){this.name=e||""}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"name":this.ui.name=i;break}}};K(ie,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",ie)}),K(ie,"observedAttributes",["name"]);let wt=ie;const $e=class $e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new pt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,i=!1){if(this.lock)return;const n=this.root.pages[t]();this.root.stack.push(this.root.appendChild(n)),typeof e=="function"&&setTimeout(()=>e(n));let s=null;this.size()>1&&!i&&(s=this.root.stack[this.root.stack.length-2],s.parentElement.removeChild(s)),this.root.dispatchChangeEvent(s),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        :host {
          display: block !important;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};K($e,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",$e)});let Oi=$e;const Pe=class Pe extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new pt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,i=!1){if(i&&this.storageprefix){const n=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=n??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(Pe,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Pe)});let Mi=Pe;const re=class re extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.mode="",this.ui={root:this,get auto(){return!!this.root.media},set auto(t){this.root.setAuto(t)},get mode(){return this.root.mode},set mode(t){this.root.setMode(t)},add(t,e){this.root.themes[t]=e},set(t){var i;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.root.currentTheme)==null?void 0:i.name)==t)return;{const n=document.getElementById("theme");n&&(document.head.removeChild(n),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,i){switch(t){case"auto":this.ui.auto=i!==null;break;case"mode":this.ui.mode=i;break}}setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=i=>{i.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){this.mode=t,this.mode?e.setAttribute("data-theme",t):e.removeAttribute("data-theme")}};K(re,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",re)}),K(re,"observedAttributes",["auto","mode"]);let Hi=re;const Ue=class Ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ue,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",Ue)});let qi=Ue;function jr(){ki.register(),me.register(),xi.register(),_i.register(),Si.register(),_t.register(),Dt.register(),Tt.register(),ge.register(),dt.register(),be.register(),Lt.register(),Ci.register(),Li.register(),Ri.register(),oe.register(),Ti.register(),zi.register(),Di.register(),Bi.register(),ae.register(),Oi.register(),wt.register(),Mi.register(),qi.register(),Ei.register(),Ai.register(),Mt.register(),Hi.register()}const Ir="modulepreload",Fr=function(x){return"/pg-vis.github.io/"+x},hr={},Nr=function(t,e,i){let n=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.all(e.map(a=>{if(a=Fr(a),a in hr)return;hr[a]=!0;const u=a.endsWith(".css"),m=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${m}`))return;const y=document.createElement("link");if(y.rel=u?"stylesheet":Ir,u||(y.as="script",y.crossOrigin=""),y.href=a,o&&y.setAttribute("nonce",o),document.head.appendChild(y),u)return new Promise((p,b)=>{y.addEventListener("load",p),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${a}`)))})}))}return n.then(()=>t()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})};function $r(x={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:n,onRegisteredSW:s,onRegisterError:o}=x;let a,u;const m=async(p=!0)=>{await u};async function y(){if("serviceWorker"in navigator){if(a=await Nr(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(p=>{o==null||o(p)}),!a)return;a.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),a.addEventListener("installed",p=>{p.isUpdate||i==null||i()}),a.register({immediate:t}).then(p=>{s?s("/pg-vis.github.io/sw.js",p):n==null||n(p)}).catch(p=>{o==null||o(p)})}}return u=y(),m}const Ve=class Ve extends _t{constructor(t){super(),this.title=t,this.gistID=null,this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",t.innerHTML=$`
      <ui-flex-grid-item>
        <ui-label
          secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title=`Import "${this.title}"`}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};K(Ve,"register",()=>{customElements.define("import-dialog",Ve)});let ve=Ve;const Pr=$`
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
`;function xr({alert:x,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:n=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=$`
    <div class="title">${x.alert}</div>

    <div
      class="number"
      style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
    >
      ${x.from===x.to?x.from:`${x.from}..${x.to}`}
    </div>
  `,s.setAttribute("role","button"),s.setAttribute("data-from",x.from.toString()),s.setAttribute("data-to",x.to.toString()),s.setAttribute("data-alert",x.alert),s.setAttribute("data-desc",x.desc.join(`
`)),s.onclick=n,i&&(At(s),s.style.cursor="pointer",s.role="button"),s}function Qi({product:x,events:t=null,ripple:e=!0}){const i=document.createElement("li");return i.classList.add("vis-item"),i.role="button",i.setAttribute("data-value",x.lotto+" "+x.name+" "+x.format+" "+x.stamp+" "+x.thickness+"mm"),i.style.display="block",i.style.position="relative",i.style.overflow="hidden",i.style.borderTop="1px solid var(--ui-borderColor)",i.style.borderBottom="1px solid var(--ui-borderColor)",i.style.margin="var(--ui-spacing) 0",i.style.cursor="pointer",i.innerHTML=$`
    <ui-flex-grid>
      <ui-flex-grid-row style="font-size: 1.1rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div
            name="lotto"
            style="font-weight: bold; padding: var(--ui-spacing);"
            align="right"
          >
            ${x.lotto}
          </div>

          <div
            name="name"
            style="font-weight: lighter; padding: var(--ui-spacing);"
          >
            ${x.name}
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>

      <ui-flex-grid-row style="font-size: 0.95rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div name="format" style="padding: var(--ui-spacing);" align="right">
            ${x.format}
          </div>

          <div name="stamp" style="padding: var(--ui-spacing);">
            ${x.stamp}
          </div>

          <div name="thickness" style="padding: var(--ui-spacing);">
            ${x.thickness}mm
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    </ui-flex-grid>
  `,e&&At(i,{useClick:!0}),t&&(i.onclick=()=>{t.dispatch("click",x)}),i}function ue({primary:x,secondary:t=null,onClick:e=null,onDelete:i=null}){const n=new Dt;n.innerHTML=$`
    <ui-flex-grid-row>
      <ui-flex-grid-item>
        <ui-button
          name="item"
          style="justify-content: flex-start;"
          color="primary"
          variant="ghost"
        >
          <span>
            <ui-primary>${x}</ui-primary>
            ${t?$`
                  <br />
                  <ui-secondary>${t}</ui-secondary>
                `:""}
          </span>
        </ui-button>
      </ui-flex-grid-item>

      ${i?$`<ui-flex-grid-item
            name="delete"
            class="flex align-center justify-center"
            flex="0"
          >
            <ui-icon-button color="destructive" ghost>
              ${Pr}
            </ui-icon-button>
          </ui-flex-grid-item>`:""}
    </ui-flex-grid-row>
  `;const s=n.querySelector('[name="delete"]');s&&s.addEventListener("click",i);const o=n.querySelector('[name="item"]');return o&&o.addEventListener("click",e),n}function _r({index:x,entry:t,events:e=null,ripple:i=!0}){const n=document.createElement("li");return n.classList.add("vis-data-item"),n.role="button",n.style.display="block",n.style.position="relative",n.style.overflow="hidden",n.style.borderTop="1px solid var(--ui-borderColor)",n.style.borderBottom="1px solid var(--ui-borderColor)",n.style.margin="var(--ui-spacing) 0",n.style.cursor="pointer",n.innerHTML=$`
    <ui-label
      primary="${t.key.replaceAll(`
`,"<br />")}"
      secondary="${t.value.replaceAll(`
`,"<br />")}"
    ></ui-label>
  `,i&&At(n,{useClick:!0}),e&&(n.onclick=()=>{e.dispatch("click",{index:x,entry:t})}),n}function Ur(x){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const i of e.currentTarget.files){const n=new FileReader;n.onload=()=>{if(typeof n.result=="string")try{x(n.result,i)}catch(s){alert(`Parse data failed: ${s}`)}},n.onerror=()=>{alert(`Read file "${i.name}" failed!`)},n.readAsText(i)}},t.click()}function Vr(x){const t=[],e=x.map(i=>`${i.title}`).sort();for(const i of e)t.push(x.find(n=>`${n.title}`===i));return t}function Zr(x){const t=[],e=x.map(i=>gt(i)).sort();for(const i of e)t.push(x.find(n=>gt(n)===i));return t}function Sr(x){const t=[],e=x.map(i=>bt(i)).sort();for(const i of e)t.push(x.find(n=>bt(n)===i));return t}function tr(x){const t=[],e=x.data.map(i=>pr(i)).sort();for(const i of e)t.push(x.data.find(n=>pr(n)===i));return x.data=t,x}class er{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const i=await e.json();this.data={revision:i.history.length,files:{},owner:{login:i.owner.login}};for(const[n,s]of Object.entries(i.files))this.data.files[n]={filename:s.filename,content:JSON.parse(s.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function Wr(x,t,{beforeUpdate:e=null,update:i,updateRevision:n}){const o=await new er(x).get();let a=!1;o.revision>t?a=confirm(`Upgrade zu revision "${o.revision}"`):o.revision<t?a=confirm(`Downgrade auf revision "${o.revision}"`):a=confirm(`Already up to date! Reload? (revision: ${o.revision})`),a&&(typeof e=="function"&&await e(),Object.values(o.files).forEach(u=>i(u.content)),n(o.revision))}async function Kr(x,t,e,{getFileName:i,updateRevision:n}){const s=new we;s.ui.events.on("close",()=>{document.body.removeChild(s)}),s.ui.events.on("submit",async o=>{if(!o)return;const a=new er(x,o),u=await a.get();if(u.revision>t){alert(`Gist revision is newer then the current revision (${u.revision})`);return}const m=Object.values(u.files).map(b=>JSON.stringify(b.content)).sort(),y=Object.values(e).map(b=>JSON.stringify(b)).sort();if(JSON.stringify(m)===JSON.stringify(y)){alert("Nope, no patching needed... already up to date...");return}const p={};e.forEach(b=>{p[i(b)]={content:JSON.stringify(b)}});for(const b of Object.keys(u.files))Object.hasOwn(p,b)||(p[b]=null);try{console.debug(await a.patch(p))}catch(b){alert(b);return}n(t+1)}),document.body.appendChild(s),s.ui.open(!0)}function vi(x,t,{storeGistKey:e,storeDataKey:i,getFileName:n,onUpdate:s}){if(!t)return;const o=document.querySelector("ui-store"),a=t[e];if(!a){x.ui.set(null,null),x.ui.setPullHandler(null),x.ui.setPushHandler(null);return}x.ui.set(a.id,a.revision);let u;const m=()=>{u&&x.removeChild(u),u=new ae,x.appendChild(u)},y=()=>{u&&(x.removeChild(u),u=void 0)};x.ui.setPullHandler(async(p,b)=>{m();try{await Wr(p,b,{beforeUpdate:async()=>{o.ui.set(i,[])},update:s,updateRevision:h=>{o.ui.update("gist",w=>(w[e]={id:p,revision:h},w))}})}finally{y()}}),x.ui.setPushHandler(async(p,b)=>{m();try{const h=o.ui.get(i);if(!Array.isArray(h)){alert("No data to push!");return}await Kr(p,b,h,{getFileName:n,updateRevision:w=>{o.ui.update("gist",c=>(c[e]={id:p,revision:w},c))}})}finally{y()}})}function ce(x,t,{storeDataKey:e,getKey:i}){const n=i(t);if(x.ui.get(e).find(s=>i(s)===n)){x.ui.update(e,s=>s.map(o=>i(o)===n?t:o));return}x.ui.update(e,s=>[...s,t])}function Gr(x){const t=e=>new Error(`invalid data for alert:
${JSON.stringify(e,null,4)}`);if(typeof(x==null?void 0:x.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(x==null?void 0:x.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(x,"data")||(x.data=[]);for(let e=0;e<x.data.length;e++){const i=x.data[e];if(typeof i.from!="number"||typeof i.to!="number"||typeof i.alert!="string"||!Array.isArray(i.desc)||(typeof i.desc=="string"&&(i.desc=i.desc.split(`
`)),i.desc.filter(n=>typeof n!="string").length))throw t(i)}return x}function Yr(x){if(typeof(x==null?void 0:x.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(x==null?void 0:x.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(x==null?void 0:x.toolID)!="string"&&(x.toolID=""),Object.hasOwn(x,"data")||(x.data={}),typeof x.data.press!="number"&&(x.data.press=-1),Object.hasOwn(x.data,"table")?(Object.hasOwn(x.data.table,"header")||(x.data.table.header=[]),Object.hasOwn(x.data.table,"data")||(x.data.table.data=[])):x.data.table={header:[],data:[]},x}function Jr(x){if(typeof x=="string")try{x=JSON.parse(x)}catch{return ts(x)}else x=x;if(typeof x.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof x.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(x.data))throw new Error('invalid data: "data" not from type "array"');for(const t of x.data)Xr(t);return x}function Xr(x){const t=e=>new Error(`invalid data for product:
${JSON.stringify(e,null,4)}`);if(typeof x.lotto!="string"||typeof x.name!="string"||typeof x.format!="string"||typeof x.thickness!="number"||typeof x.stamp!="string")throw t(x);return x}function Qr(x){return x}function ts(x){const t=a=>{const[u,m]=a.split(/[xX]/),y=parseFloat(u),p=parseFloat(m);return!y||!p?`${y}x${p}`:`${y>p?y:p}x${y<p?y:p}`},e=new Date,i=(e.getMonth()+1).toString().padStart(2,"0"),n=e.getDate().toString().padStart(2,"0"),s={date:e.getTime(),title:`${e.getFullYear()}-${i}-${n}`,data:[]},o=x.split(`
`);for(let a=0;a<o.length;a++){if(!o[a])continue;let[u,...m]=o[a].trim().replace(/\t/g," ").split(" ");u=u.trim();const{productName:y,format:p,newRest:b}=(()=>{let c="",g="";for(let d=0;d<m.length;d++)if(m[d].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){g=t(m[d]),m=m.slice(d+1);break}else c+=m[d]+" ";return{productName:c.trim(),format:t(g),newRest:m.map(d=>d.trim()).filter(d=>!!d)}})();if(!p)throw`missing format for "${y}" (lotto: "${u}") in vis (txt) data!`;if(!(b[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${y}" with lotto "${u}"!`;const h=b.shift()||"",w=b.join(" ");s.data.push({lotto:u,name:y,format:p,thickness:parseFloat(h.replaceAll(",",".")),stamp:w})}return s}function es(x){return`AlarmListen_${x.title}.json`}function Cr(x){return`${x.title}`}function dr(x){return`BlechListen_${x.format}_${x.toolID}.json`}function gt(x){return`${x.format}:${x.toolID}`}function fr(x){return`Vis_${x.date}.json`}function pe(x){return`${x.title}`}function Ft(x){return`${x.name}`}function is(x){return`VisData_${x.title}.json`}function bt(x){return`${x.title}`}function pr(x){return`${x.key}
${x.value}`}const Ze=class Ze extends _t{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.name=null,this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",t.innerHTML=$`
      <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="New Vis Data",this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}const i=bt({title:this.name.ui.value});if(!!this.uiStore.ui.get("visData").find(s=>bt(s)===i)){this.name.ui.invalid=!0;return}this.name.ui.invalid=!1,this.ui.events.dispatch("submit",{title:this.name.ui.value}),this.ui.close()}),this.appendChild(t)}};K(Ze,"register",()=>{customElements.define("new-vis-data-dialog",Ze)});let ye=Ze;const We=class We extends _t{constructor(){super(),this.token=null,this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",t.innerHTML=$`
      <ui-flex-grid-item>
        <ui-label
          secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Gist Token"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};K(We,"register",()=>{customElements.define("push-dialog",We)});let we=We;const Ke=class Ke extends _t{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}shadowRender(){super.shadowRender();const t=this.shadowRoot.querySelector(".footer");t.parentElement.removeChild(t)}render(){this.ui.title="Vis Listen",this.innerHTML=$``;for(const t of this.uiStore.ui.get("visLists")){const e=Ft(t);this.innerHTML+=$`
        <ui-check primary="${t.name}" value="${e}"></ui-check>
      `}}set(t){[...this.querySelectorAll("ui-check")].forEach(e=>{let i=this.getList(e.ui.value);e.ui.checked=this.isBookmark(i,t),e.oninput=()=>{e.ui.checked?i=this.addBookmark(i,t):i=this.removeBookmark(i,t),this.uiStore.ui.update("visLists",n=>n)}})}getList(t){const e=this.uiStore.ui.get("visLists").find(i=>Ft(i)===t);if(!e)throw new Error(`list "${t}" not found`);return e}isBookmark(t,e){return!!(t!=null&&t.data.find(i=>i.name===e.name&&i.lotto===e.lotto&&i.stamp===e.stamp&&i.format===e.format&&i.thickness===e.thickness))}addBookmark(t,e){return this.isBookmark(t,e)||t.data.push(e),t}removeBookmark(t,e){return this.isBookmark(t,e)&&(t.data=t.data.filter(i=>i.name!==e.name||i.lotto!==e.lotto||i.stamp!==e.stamp||i.format!==e.format||i.thickness!==e.thickness)),t}};K(Ke,"register",()=>{customElements.define("bookmark-dialog",Ke)});let ke=Ke;const tt={alert:"alert",alertLists:"alert-lists",metalSheetLists:"metal-sheet-lists",vis:"vis",product:"product",visLists:"vis-lists",visData:"vis-data",visDataEntry:"vis-data-entry"},Ge=class Ge extends wt{constructor(){super(tt.alert),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}},this.render()}render(){this.innerHTML=$`
      <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(xr({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};K(Ge,"register",()=>{customElements.define("alert-page",Ge)});let xe=Ge;const Ye=class Ye extends wt{constructor(){super(tt.alertLists),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new xe,this.list=null,this.ui={...this.ui,root:this,set(t){const e=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.searchBar.ui.input().ui.storagekey=Cr(this.root.list),setTimeout(()=>{this.root.renderList()})}},this.render()}render(){this.innerHTML=$`
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
    `,this.searchBar=this.querySelector("search-bar")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.ui.active=e,await this.search(e?this.searchBar.ui.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.register(tt.alert,()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister(tt.alert)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(i=>{if(!this.searchBar.ui.active){i.style.display="flex";return}if(this.is(this.getAlertFromElement(i),e)){i.style.display="flex";return}i.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.searchBar.ui.input().ui.value.replaceAll(" ",".*"));for(let n=0;n<this.list.data.length;n++){if(e.active===!0&&!this.is(this.list.data[n],i))return;setTimeout(()=>this.renderListElement(t,this.list.data[n],n<this.list.data.length-1))}}renderListElement(t,e,i){t.appendChild(xr({alert:e,container:"li",hasBorder:i,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const i=[];for(let n=t.from;n<=t.to;n++)i.push(n);return!!`${i.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromElement(e);this.alertPage.ui.set(i),this.stackLayout.ui.set(tt.alert,null,!0)}};K(Ye,"register",()=>{customElements.define("alert-lists-page",Ye)});let _e=Ye;const Je=class Je extends be{constructor(){super(),this.events=new pt,this.render()}render(){this.innerHTML=$`
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
    `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)})}};K(Je,"register",()=>{customElements.define("metal-sheet-actions",Je)});let ji=Je;const Xe=class Xe extends _t{constructor(t){super(),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",t.innerHTML=$`
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
    `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){switch(super.connectedCallback(),this.mode){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}}set(t,e,i=-1){const n=this.querySelector('[name="format"] ui-input');n.ui.value=t;const s=this.querySelector('[name="toolID"] ui-input');s.ui.value=e,this.querySelector('[name="press"] ui-select').ui.options().forEach(a=>{a.ui.selected=parseInt(a.ui.value)===i}),this.originFormat=t,this.originToolID=e}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=this.getData();i!==null&&(this.ui.events.dispatch("submit",i),this.ui.close())}),this.appendChild(t)}getData(){var u;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const i=this.querySelector('[name="toolID"] ui-input');t.toolID=i.ui.value;const n=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((u=n.ui.selected())==null?void 0:u.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const s=gt({format:this.originFormat,toolID:this.originToolID}),o=gt(t),a=this.uiStore.ui.get("metalSheetLists").find(m=>this.mode==="edit"&&s===o?!1:gt(m)===o);return a?(e.ui.invalid=a.format===t.format&&a.toolID!==t.toolID,i.ui.invalid=a.toolID===t.toolID,null):t}};K(Xe,"register",()=>{customElements.define("metal-sheet-create-dialog",Xe)});let le=Xe;const Qe=class Qe extends _t{constructor(){super(),this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Eintrag bearbeiten"}set({header:t,data:e=null}){const i=this.querySelector("ui-flex-grid");for(;i.firstChild;)i.removeChild(i.firstChild);for(let n=0;n<t.length;n++){const s=new dt;s.innerHTML=$`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,i.appendChild(s)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="destructive">Delete</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=[],n=this.querySelector("ui-flex-grid");for(const s of[...n.children]){const o=s.querySelector("ui-input");i.push(o.ui.value)}this.ui.events.dispatch("submit",i),this.ui.close()}),this.appendChild(t)}};K(Qe,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",Qe)});let Se=Qe;const ti=class ti extends _t{constructor(){super(),this.render()}render(){const t=new Lt;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Neuer Eintrag"}set({header:t,data:e=null}){const i=this.querySelector("ui-flex-grid");for(;i.firstChild;)i.removeChild(i.firstChild);for(let n=0;n<t.length;n++){const s=new dt;s.innerHTML=$`
        <ui-input title="${t[n]}" value="${(e==null?void 0:e[n])||""}"></ui-input>
      `,i.appendChild(s)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=$`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=[],n=this.querySelector("ui-flex-grid");for(const s of[...n.children]){const o=s.querySelector("ui-input");i.push(o.ui.value)}this.ui.events.dispatch("submit",i),this.ui.close()}),this.appendChild(t)}};K(ti,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",ti)});let Ce=ti;const ei=class ei extends wt{constructor(){super(tt.metalSheetLists),this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const i=gt(t);return e=[...e.filter(n=>gt(n)!==i),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(i=>gt(i)!==t),e))}},this.render()}render(){this.innerHTML=$`
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
    `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.list)return;for(const n of this.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerHTML=n,t.appendChild(s)}let i=null;for(let n=0;n<this.list.data.table.data.length;n++){const s=document.createElement("tr");s.style.cursor="pointer",s.role="button",s.onclick=()=>this.createModifyEntryDialog(n),e.appendChild(s),Mr(s,{onDragEnd:(o,a)=>{if(i!==null){if(i<a){let u=this.list.data.table.data;u=[...u.slice(0,i),...u.slice(i+1,a+1),u[i],...u.slice(a+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(i>a){let u=this.list.data.table.data;u=[...u.slice(0,a),u[i],...u.slice(a,i),...u.slice(i+1)],this.list.data.table.data=u,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(u=>{u.style.background="inherit",u.style.color="inherit"}),i=null}},onDragging:o=>{i!==null&&[...e.children].forEach((a,u)=>{if(u!==o){a.style.background="inherit",a.style.color="inherit";return}a.style.background="var(--ui-primary-bgColor)",a.style.color="var(--ui-primary-color)"})},onDragStart:o=>{i=o}});for(const o of this.list.data.table.data[n]){const a=document.createElement("td");a.style.textAlign="center",a.innerHTML=o,s.appendChild(a)}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const t=new le("edit");t.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(gt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}createMetalSheetActions(){this.querySelector("metal-sheet-actions").events.on("new-entry",()=>this.createNewEntryDialog())}createModifyEntryDialog(t){const e=new Se;e.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",i=>{this.list.data.table.data[t]=i,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new Ce;t.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};K(ei,"register",()=>{customElements.define("metal-sheet-lists-page",ei)});let Ee=ei;const ii=class ii extends wt{constructor(){super(tt.product),this.uiStore=document.querySelector("ui-store"),this.pgAppBar=document.querySelector("pg-app-bar"),this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=$`
      <style>
        :host {
          display: block;
          padding-top: var(--ui-app-bar-height);
        }
      </style>
    `}render(){this.innerHTML=$`
      <ui-flex-grid
        class="no-scrollbar"
        style="width: 100%; height: 100%; overflow: auto;"
        gap="0"
      >
        <ui-flex-grid-item flex="0">
          <span class="placeholder"></span>
        </ui-flex-grid-item>

        <ui-flex-grid-item>
          <ul class="list" style="margin: 0;"></ul>
        </ui-flex-grid-item>
      </ui-flex-grid>
    `}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("bookmark",{active:!1})}set(t){const e=this.querySelector(".placeholder");e.parentElement.replaceChild(Qi({product:t,ripple:!1}),e),this.uiStore.ui.set("bookmark",{active:this.isBookmark(t)}),this.pgAppBar.items.bookmark.ui.child.onclick=()=>{const o=new ke;o.set(t),o.ui.events.on("close",()=>{document.body.removeChild(o),this.uiStore.ui.set("bookmark",{active:this.isBookmark(t)})}),document.body.appendChild(o),o.ui.open(!0)};const i=this.querySelector(".list"),n=Sr(this.uiStore.ui.get("visData"));let s=!1;for(let o of n){s=!1,o=tr(o),i.appendChild(this.createTitleItem(o.title));for(let a=0;a<o.data.length;a++){const u=o.data[a];u.lotto!==null&&!t.lotto.match(new RegExp(u.lotto,"i"))||u.format!==null&&!t.format.match(new RegExp(u.format,"i"))||u.stamp!==null&&!t.stamp.match(new RegExp(u.stamp,"i"))||u.thickness!==null&&!t.thickness.toString().match(new RegExp(u.thickness,"i"))||(s=!0,i.appendChild(_r({index:a,entry:u,events:null,ripple:!1})))}s||i.removeChild(i.lastChild)}}isBookmark(t){const e=this.uiStore.ui.get("visLists");for(const i of e)for(const n of i.data)if(n.name===t.name&&n.lotto===t.lotto&&n.stamp===t.stamp&&n.format===t.format&&n.thickness===t.thickness)return!0;return!1}createTitleItem(t){const e=document.createElement("li");return e.style.textDecoration="underline",e.style.textAlign="center",e.innerHTML=$` <h2>${t}</h2> `,e}};K(ii,"register",()=>{customElements.define("product-page",ii)});let Ae=ii;const ri=class ri extends wt{constructor(){super(tt.vis),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,this.root.setAppBarTitle(),t===null){this.root.searchBar.ui.input().ui.storagekey=null;return}this.root.searchBar.ui.input().ui.storagekey=pe(t)}},this.render()}render(){this.innerHTML=$`
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
        <ul class="list"></ul>
      </div>
    `,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.ui.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))})}connectedCallback(){super.connectedCallback(),this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback()}async update(t=null){const e=new ae;e.ui.nobg=!0;const i=this.querySelector(".container");i.appendChild(e);const n=this.querySelector(".list");for(;n.firstChild;)n.removeChild(n.firstChild);if(!this.list)return;const s=new pt;s.on("click",o=>{this.stackLayout.ui.set(tt.product,a=>{a.set(o)},!0)});for(let o=0;o<this.list.data.length;o++)(async(a,u)=>{setTimeout(async()=>{const m=Qi({product:u,events:s});this.checkItem(m,t),(a>this.list.data.length-1||m.style.display!=="none")&&e.parentElement&&i.removeChild(e),n.appendChild(m)})})(o,this.list.data[o])}async search(t){const e=this.getRegExp(t),i=this.querySelector(".list");for(const n of[...i.children])this.checkItem(n,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};K(ri,"register",()=>{customElements.define("vis-page",ri)});let Le=ri;const rs="visData",si=class si extends wt{constructor(){super(tt.visData),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.data=null,this.onVisData=t=>{this.set(t)},this.render()}render(){this.style.paddingTop="var(--ui-app-bar-height)",this.innerHTML=$`
      <ui-flex-grid-row justify="flex-end" gap="0.25rem">
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

      <ul
        class="no-scrollbar product-list"
        style="
          overflow: hidden;
          overflow-y: auto;
          width: 100%;
          height: calc(100% - 1rem - var(--ui-app-bar-height));
          margin: 0;
        "
      ></ul>
    `,this.uiStore.ui.set("appBarTitle","Vis Data"),this.querySelector('[name="new-entry"]').ui.events.on("click",()=>{this.stackLayout.ui.set(tt.visDataEntry,e=>{e.set(this.data.title,-1,{key:"",value:"",lotto:null,format:null,thickness:null,stamp:null})},!0)})}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on(rs,t=>{const e=bt(this.data);for(const i of t)if(bt(i)===e){this.onVisData(i);return}}))}disconnectedCallback(){this.cleanup.run()}set(t){this.data=tr(t);const e=this.querySelector(".product-list");for(;e.firstChild;)e.removeChild(e.firstChild);this.uiStore.ui.set("appBarTitle",`Vis Data - ${this.data.title}`);const i=new pt;i.on("click",n=>{this.stackLayout.ui.set(tt.visDataEntry,s=>{s.set(this.data.title,n.index,n.entry)},!0)});for(let n=0;n<this.data.data.length;n++){const s=_r({index:n,entry:this.data.data[n],events:i,ripple:!0});e.appendChild(s)}}};K(si,"register",()=>{customElements.define("vis-data-page",si)});let Re=si;const mr="visData",ni=class ni extends wt{constructor(){super(tt.visDataEntry),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.listTitle,this.listEntry,this.listIndex,this.render()}render(){this.style.paddingTop="var(--ui-app-bar-height)",this.style.height="100%",this.innerHTML=$`
      <div
        class="inputs"
        style="
          width: 100%;
          height: calc(100% - 3rem);
          overflow: hidden;
        "
      >
        <div
          class="no-scrollbar"
          style="
            overflow: auto;
            width: 100%;
            height: 100%;
          "
        >
          <ui-input name="key" type="text" title="Key"></ui-input>

          <br />

          <ui-textarea
            name="value"
            type="text"
            title="Value"
            rows="10"
          ></ui-textarea>

          <br />

          <ui-input name="lotto" type="text" title="Lotto"></ui-input>

          <br />

          <ui-input name="format" type="text" title="Format"></ui-input>

          <br />

          <ui-input name="stamp" type="string" title="Stamp"></ui-input>

          <br />

          <ui-input name="thickness" type="string" title="Thickness"></ui-input>
        </div>
      </div>

      <div
        class="actions"
        style="
          width: 100%;
          height: 2.5rem;
          padding-top: var(--ui-spacing);
        "
      >
        <ui-flex-grid-row justify="flex-end" gap="0.25rem">
          <ui-flex-grid-item flex="0">
            <ui-button name="delete" variant="full" color="destructive">
              Delete
            </ui-button>
          </ui-flex-grid-item>

          <ui-flex-grid-item flex="0">
            <ui-button name="submit" variant="full" color="primary">
              Submit
            </ui-button>
          </ui-flex-grid-item>
        </ui-flex-grid-row>
      </div>
    `,this.querySelector('ui-button[name="submit"]').ui.events.on("click",()=>{const i=this.getData();i&&(this.uiStore.ui.update(mr,n=>{const s=bt({title:this.listTitle});return n.map(o=>bt(o)===s?(this.listIndex>-1&&(o.data=o.data.filter((a,u)=>u!==this.listIndex)),{...o,data:[...o.data,i]}):o)}),this.stackLayout.ui.goBack())}),this.querySelector('ui-button[name="delete"]').ui.events.on("click",async()=>{this.uiStore.ui.update(mr,i=>{const n=bt({title:this.listTitle});return i.map(s=>(bt(s)===n&&(s.data=s.data.filter((o,a)=>a!==this.listIndex)),s))}),this.stackLayout.ui.goBack()})}set(t,e,i){var o,a,u,m;this.listTitle=t,this.listEntry=i,this.listIndex=e;let n;n=this.querySelector('ui-input[name="key"]'),n.ui.value=i.key,n=this.querySelector('ui-textarea[name="value"]'),n.ui.value=i.value,n=this.querySelector('ui-input[name="lotto"]'),n.ui.value=((o=i.lotto)==null?void 0:o.replaceAll(".*"," "))||null,n=this.querySelector('ui-input[name="format"]'),n.ui.value=((a=i.format)==null?void 0:a.replaceAll(".*"," "))||null,n=this.querySelector('ui-input[name="stamp"]'),n.ui.value=((u=i.stamp)==null?void 0:u.replaceAll(".*"," "))||null,n=this.querySelector('ui-input[name="thickness"]'),n.ui.value=((m=i.thickness)==null?void 0:m.replaceAll(".*"," "))||null;const s=this.querySelector('ui-button[name="delete"]');s.ui.disabled=!i.key}getData(){var i,n,s,o;const t={key:"",value:"",lotto:null,format:null,thickness:null,stamp:null};let e;return e=this.querySelector('ui-input[name="key"]'),t.key=e.ui.value,!t.key||(e=this.querySelector('ui-textarea[name="value"]'),t.value=e.ui.value,!t.value)?(e.ui.invalid=!0,null):(e=this.querySelector('ui-input[name="lotto"]'),t.lotto=((i=e.ui.value)==null?void 0:i.replace(" ",".*"))||null,e=this.querySelector('ui-input[name="format"]'),t.format=((n=e.ui.value)==null?void 0:n.replace(" ",".*"))||null,e=this.querySelector('ui-input[name="stamp"]'),t.stamp=((s=e.ui.value)==null?void 0:s.replace(" ",".*"))||null,e=this.querySelector('ui-input[name="thickness"]'),t.thickness=((o=e.ui.value)==null?void 0:o.replace(" ",".*"))||null,t)}};K(ni,"register",()=>{customElements.define("vis-data-entry-page",ni)});let Te=ni;const oi=class oi extends wt{constructor(){super(tt.visLists),this._data=null,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}get data(){return this._data}set data(t){this._data=t,this.setAppBarTitle(),this.renderData()}render(){this.innerHTML=$`
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
    `}set(t){this.data=t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.data?`Vis Listen - ${this.data.name}`:"Vis Listen")}renderData(){const t=this.querySelector(".list");for(;t.firstChild;)t.removeChild(t.firstChild);if(!this.data)return;const e=new pt;e.on("click",i=>{this.stackLayout.ui.set(tt.product,n=>{n.set(i)})});for(const i of this.data.data)t.appendChild(Qi({product:i,events:e,ripple:!0}))}};K(oi,"register",()=>{customElements.define("vis-lists-page",oi)});let ze=oi;const Nt="v1.0.0.dev",ss=1,ai=class ai extends ge{constructor(){super(),this.render()}render(){this.innerHTML=$`
      <div
        style="
          font-size: 0.85rem;
          font-variation-settings: var(--ui-input-fontVariation);
        "
      >
        ${Nt}
      </div>

      <pg-drawer-group-alert-lists fold></pg-drawer-group-alert-lists>

      <pg-drawer-group-metal-sheet-lists
        fold
      ></pg-drawer-group-metal-sheet-lists>

      <pg-drawer-group-vis fold></pg-drawer-group-vis>

      <pg-drawer-group-vis-lists fold></pg-drawer-group-vis-lists>

      <pg-drawer-group-vis-data fold></pg-drawer-group-vis-data>
    `}};K(ai,"register",()=>{customElements.define("pg-drawer",ai)});let Ii=ai;const li=class li extends Dt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.onPull=null,this.onPush=null,this.ui={...this.ui,root:this,set(t,e){const i=this.root.querySelector("ui-secondary"),n=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",i.innerHTML=t,n.innerHTML=$`Revision: ${e}`):(this.root.style.display="none",i.innerHTML=$`&nbsp;`,n.innerHTML=$`Revision: -`),this.root.pullButton.onclick=()=>{this.root.onPull&&this.root.onPull(t,e)},this.root.pushButton.onclick=()=>{this.root.onPush&&this.root.onPush(t,e)}},setPullHandler(t){this.root.onPull=t},setPushHandler(t){this.root.onPush=t}},this.render()}render(){this.innerHTML=$`
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
    `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}};K(li,"register",()=>{customElements.define("drawer-gist-item",li)});let Fi=li;const ui=class ui extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};K(ui,"register",()=>{customElements.define("drawer-revision",ui)});let Ni=ui;const gr="Alarm Listen",It="alertLists",ci=class ci extends Tt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onAlertLists=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of Vr(t))this.appendChild(ue({primary:e.title,secondary:null,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(tt.alertLists,n=>{n.ui.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{confirm(`Delete "${e.title} - ${e.date}`)&&this.uiStore.ui.update(It,i=>i.filter(n=>n.title!==e.title))}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:It,getKey:Cr})},this.render()}render(){this.innerHTML=$`
      <pg-drawer-item-import
        storegistkey="${tt.alertLists}"
        title="${gr}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Gr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(It,[])})}connectedCallback(){super.connectedCallback(),this.ui.title=gr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:tt.alertLists,storeDataKey:It,getFileName:es,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(It,this.onAlertLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ci,"register",()=>{customElements.define("pg-drawer-group-alert-lists",ci)});let $i=ci;var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Er(x){return x&&x.__esModule&&Object.prototype.hasOwnProperty.call(x,"default")?x.default:x}var Ar={exports:{}};(function(x,t){(function(e,i){i()})(Et,function(){function e(m,y){return typeof y>"u"?y={autoBom:!1}:typeof y!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),y={autoBom:!y}),y.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(m.type)?new Blob(["\uFEFF",m],{type:m.type}):m}function i(m,y,p){var b=new XMLHttpRequest;b.open("GET",m),b.responseType="blob",b.onload=function(){u(b.response,y,p)},b.onerror=function(){console.error("could not download file")},b.send()}function n(m){var y=new XMLHttpRequest;y.open("HEAD",m,!1);try{y.send()}catch{}return 200<=y.status&&299>=y.status}function s(m){try{m.dispatchEvent(new MouseEvent("click"))}catch{var y=document.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),m.dispatchEvent(y)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Et=="object"&&Et.global===Et?Et:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),u=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(m,y,p){var b=o.URL||o.webkitURL,h=document.createElement("a");y=y||m.name||"download",h.download=y,h.rel="noopener",typeof m=="string"?(h.href=m,h.origin===location.origin?s(h):n(h.href)?i(m,y,p):s(h,h.target="_blank")):(h.href=b.createObjectURL(m),setTimeout(function(){b.revokeObjectURL(h.href)},4e4),setTimeout(function(){s(h)},0))}:"msSaveOrOpenBlob"in navigator?function(m,y,p){if(y=y||m.name||"download",typeof m!="string")navigator.msSaveOrOpenBlob(e(m,p),y);else if(n(m))i(m,y,p);else{var b=document.createElement("a");b.href=m,b.target="_blank",setTimeout(function(){s(b)})}}:function(m,y,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof m=="string")return i(m,y,p);var h=m.type==="application/octet-stream",w=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||h&&w||a)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var S=g.result;S=c?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},g.readAsDataURL(m)}else{var d=o.URL||o.webkitURL,k=d.createObjectURL(m);b?b.location=k:location.href=k,b=null,setTimeout(function(){d.revokeObjectURL(k)},4e4)}});o.saveAs=u.saveAs=u,x.exports=u})})(Ar);var ns=Ar.exports;const ir=Er(ns);function fe(x){throw new Error('Could not dynamically require "'+x+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Lr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(x,t){(function(e){x.exports=e()})(function(){return function e(i,n,s){function o(m,y){if(!n[m]){if(!i[m]){var p=typeof fe=="function"&&fe;if(!y&&p)return p(m,!0);if(a)return a(m,!0);var b=new Error("Cannot find module '"+m+"'");throw b.code="MODULE_NOT_FOUND",b}var h=n[m]={exports:{}};i[m][0].call(h.exports,function(w){var c=i[m][1][w];return o(c||w)},h,h.exports,e,i,n,s)}return n[m].exports}for(var a=typeof fe=="function"&&fe,u=0;u<s.length;u++)o(s[u]);return o}({1:[function(e,i,n){var s=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";n.encode=function(u){for(var m,y,p,b,h,w,c,g=[],d=0,k=u.length,S=k,A=s.getTypeOf(u)!=="string";d<u.length;)S=k-d,p=A?(m=u[d++],y=d<k?u[d++]:0,d<k?u[d++]:0):(m=u.charCodeAt(d++),y=d<k?u.charCodeAt(d++):0,d<k?u.charCodeAt(d++):0),b=m>>2,h=(3&m)<<4|y>>4,w=1<S?(15&y)<<2|p>>6:64,c=2<S?63&p:64,g.push(a.charAt(b)+a.charAt(h)+a.charAt(w)+a.charAt(c));return g.join("")},n.decode=function(u){var m,y,p,b,h,w,c=0,g=0,d="data:";if(u.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(u=u.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(u.charAt(u.length-1)===a.charAt(64)&&S--,u.charAt(u.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=o.uint8array?new Uint8Array(0|S):new Array(0|S);c<u.length;)m=a.indexOf(u.charAt(c++))<<2|(b=a.indexOf(u.charAt(c++)))>>4,y=(15&b)<<4|(h=a.indexOf(u.charAt(c++)))>>2,p=(3&h)<<6|(w=a.indexOf(u.charAt(c++))),k[g++]=m,h!==64&&(k[g++]=y),w!==64&&(k[g++]=p);return k}},{"./support":30,"./utils":32}],2:[function(e,i,n){var s=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),u=e("./stream/DataLengthProbe");function m(y,p,b,h,w){this.compressedSize=y,this.uncompressedSize=p,this.crc32=b,this.compression=h,this.compressedContent=w}m.prototype={getContentWorker:function(){var y=new o(s.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new u("data_length")),p=this;return y.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),y},getCompressedWorker:function(){return new o(s.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},m.createWorkerFrom=function(y,p,b){return y.pipe(new a).pipe(new u("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new u("compressedSize")).withStreamInfo("compression",p)},i.exports=m},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,n){var s=e("./stream/GenericWorker");n.STORE={magic:"\0\0",compressWorker:function(){return new s("STORE compression")},uncompressWorker:function(){return new s("STORE decompression")}},n.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,n){var s=e("./utils"),o=function(){for(var a,u=[],m=0;m<256;m++){a=m;for(var y=0;y<8;y++)a=1&a?3988292384^a>>>1:a>>>1;u[m]=a}return u}();i.exports=function(a,u){return a!==void 0&&a.length?s.getTypeOf(a)!=="string"?function(m,y,p,b){var h=o,w=b+p;m^=-1;for(var c=b;c<w;c++)m=m>>>8^h[255&(m^y[c])];return-1^m}(0|u,a,a.length,0):function(m,y,p,b){var h=o,w=b+p;m^=-1;for(var c=b;c<w;c++)m=m>>>8^h[255&(m^y.charCodeAt(c))];return-1^m}(0|u,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,n){n.base64=!1,n.binary=!1,n.dir=!1,n.createFolders=!0,n.date=null,n.compression=null,n.compressionOptions=null,n.comment=null,n.unixPermissions=null,n.dosPermissions=null},{}],6:[function(e,i,n){var s=null;s=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:s}},{lie:37}],7:[function(e,i,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),u=e("./stream/GenericWorker"),m=s?"uint8array":"array";function y(p,b){u.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}n.magic="\b\0",a.inherits(y,u),y.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(m,p.data),!1)},y.prototype.flush=function(){u.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},y.prototype.cleanUp=function(){u.prototype.cleanUp.call(this),this._pako=null},y.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},n.compressWorker=function(p){return new y("Deflate",p)},n.uncompressWorker=function(){return new y("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,n){function s(h,w){var c,g="";for(c=0;c<w;c++)g+=String.fromCharCode(255&h),h>>>=8;return g}function o(h,w,c,g,d,k){var S,A,E=h.file,q=h.compression,D=k!==m.utf8encode,N=a.transformTo("string",k(E.name)),B=a.transformTo("string",m.utf8encode(E.name)),V=E.comment,Q=a.transformTo("string",k(V)),_=a.transformTo("string",m.utf8encode(V)),O=B.length!==E.name.length,l=_.length!==V.length,H="",it="",F="",rt=E.dir,P=E.date,et={crc32:0,compressedSize:0,uncompressedSize:0};w&&!c||(et.crc32=h.crc32,et.compressedSize=h.compressedSize,et.uncompressedSize=h.uncompressedSize);var T=0;w&&(T|=8),D||!O&&!l||(T|=2048);var R=0,X=0;rt&&(R|=16),d==="UNIX"?(X=798,R|=function(W,lt){var ft=W;return W||(ft=lt?16893:33204),(65535&ft)<<16}(E.unixPermissions,rt)):(X=20,R|=function(W){return 63&(W||0)}(E.dosPermissions)),S=P.getUTCHours(),S<<=6,S|=P.getUTCMinutes(),S<<=5,S|=P.getUTCSeconds()/2,A=P.getUTCFullYear()-1980,A<<=4,A|=P.getUTCMonth()+1,A<<=5,A|=P.getUTCDate(),O&&(it=s(1,1)+s(y(N),4)+B,H+="up"+s(it.length,2)+it),l&&(F=s(1,1)+s(y(Q),4)+_,H+="uc"+s(F.length,2)+F);var G="";return G+=`
\0`,G+=s(T,2),G+=q.magic,G+=s(S,2),G+=s(A,2),G+=s(et.crc32,4),G+=s(et.compressedSize,4),G+=s(et.uncompressedSize,4),G+=s(N.length,2),G+=s(H.length,2),{fileRecord:p.LOCAL_FILE_HEADER+G+N+H,dirRecord:p.CENTRAL_FILE_HEADER+s(X,2)+G+s(Q.length,2)+"\0\0\0\0"+s(R,4)+s(g,4)+N+H+Q}}var a=e("../utils"),u=e("../stream/GenericWorker"),m=e("../utf8"),y=e("../crc32"),p=e("../signature");function b(h,w,c,g){u.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=c,this.encodeFileName=g,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(b,u),b.prototype.push=function(h){var w=h.meta.percent||0,c=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,u.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:c?(w+100*(c-g-1))/c:100}}))},b.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var w=this.streamFiles&&!h.file.dir;if(w){var c=o(h,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(h){this.accumulate=!1;var w=this.streamFiles&&!h.file.dir,c=o(h,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),w)this.push({data:function(g){return p.DATA_DESCRIPTOR+s(g.crc32,4)+s(g.compressedSize,4)+s(g.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var h=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var c=this.bytesWritten-h,g=function(d,k,S,A,E){var q=a.transformTo("string",E(A));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+s(d,2)+s(d,2)+s(k,4)+s(S,4)+s(q.length,2)+q}(this.dirRecords.length,c,h,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(h){this._sources.push(h);var w=this;return h.on("data",function(c){w.processChunk(c)}),h.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),h.on("error",function(c){w.error(c)}),this},b.prototype.resume=function(){return!!u.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(h){var w=this._sources;if(!u.prototype.error.call(this,h))return!1;for(var c=0;c<w.length;c++)try{w[c].error(h)}catch{}return!0},b.prototype.lock=function(){u.prototype.lock.call(this);for(var h=this._sources,w=0;w<h.length;w++)h[w].lock()},i.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,n){var s=e("../compressions"),o=e("./ZipFileWorker");n.generateWorker=function(a,u,m){var y=new o(u.streamFiles,m,u.platform,u.encodeFileName),p=0;try{a.forEach(function(b,h){p++;var w=function(k,S){var A=k||S,E=s[A];if(!E)throw new Error(A+" is not a valid compression method !");return E}(h.options.compression,u.compression),c=h.options.compressionOptions||u.compressionOptions||{},g=h.dir,d=h.date;h._compressWorker(w,c).withStreamInfo("file",{name:b,dir:g,date:d,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(y)}),y.entriesCount=p}catch(b){y.error(b)}return y}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,n){function s(){if(!(this instanceof s))return new s;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new s;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(s.prototype=e("./object")).loadAsync=e("./load"),s.support=e("./support"),s.defaults=e("./defaults"),s.version="3.10.1",s.loadAsync=function(o,a){return new s().loadAsync(o,a)},s.external=e("./external"),i.exports=s},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,n){var s=e("./utils"),o=e("./external"),a=e("./utf8"),u=e("./zipEntries"),m=e("./stream/Crc32Probe"),y=e("./nodejsUtils");function p(b){return new o.Promise(function(h,w){var c=b.decompressed.getContentWorker().pipe(new m);c.on("error",function(g){w(g)}).on("end",function(){c.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}i.exports=function(b,h){var w=this;return h=s.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),y.isNode&&y.isStream(b)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):s.prepareContent("the loaded zip file",b,!0,h.optimizedBinaryString,h.base64).then(function(c){var g=new u(h);return g.load(c),g}).then(function(c){var g=[o.Promise.resolve(c)],d=c.files;if(h.checkCRC32)for(var k=0;k<d.length;k++)g.push(p(d[k]));return o.Promise.all(g)}).then(function(c){for(var g=c.shift(),d=g.files,k=0;k<d.length;k++){var S=d[k],A=S.fileNameStr,E=s.resolve(S.fileNameStr);w.file(E,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:h.createFolders}),S.dir||(w.file(E).unsafeOriginalName=A)}return g.zipComment.length&&(w.comment=g.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,n){var s=e("../utils"),o=e("../stream/GenericWorker");function a(u,m){o.call(this,"Nodejs stream input adapter for "+u),this._upstreamEnded=!1,this._bindStream(m)}s.inherits(a,o),a.prototype._bindStream=function(u){var m=this;(this._stream=u).pause(),u.on("data",function(y){m.push({data:y,meta:{percent:0}})}).on("error",function(y){m.isPaused?this.generatedError=y:m.error(y)}).on("end",function(){m.isPaused?m._upstreamEnded=!0:m.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,n){var s=e("readable-stream").Readable;function o(a,u,m){s.call(this,u),this._helper=a;var y=this;a.on("data",function(p,b){y.push(p)||y._helper.pause(),m&&m(b)}).on("error",function(p){y.emit("error",p)}).on("end",function(){y.push(null)})}e("../utils").inherits(o,s),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,n){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(s,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(s,o);if(typeof s=="number")throw new Error('The "data" argument must not be a number');return new Buffer(s,o)},allocBuffer:function(s){if(Buffer.alloc)return Buffer.alloc(s);var o=new Buffer(s);return o.fill(0),o},isBuffer:function(s){return Buffer.isBuffer(s)},isStream:function(s){return s&&typeof s.on=="function"&&typeof s.pause=="function"&&typeof s.resume=="function"}}},{}],15:[function(e,i,n){function s(E,q,D){var N,B=a.getTypeOf(q),V=a.extend(D||{},y);V.date=V.date||new Date,V.compression!==null&&(V.compression=V.compression.toUpperCase()),typeof V.unixPermissions=="string"&&(V.unixPermissions=parseInt(V.unixPermissions,8)),V.unixPermissions&&16384&V.unixPermissions&&(V.dir=!0),V.dosPermissions&&16&V.dosPermissions&&(V.dir=!0),V.dir&&(E=d(E)),V.createFolders&&(N=g(E))&&k.call(this,N,!0);var Q=B==="string"&&V.binary===!1&&V.base64===!1;D&&D.binary!==void 0||(V.binary=!Q),(q instanceof p&&q.uncompressedSize===0||V.dir||!q||q.length===0)&&(V.base64=!1,V.binary=!0,q="",V.compression="STORE",B="string");var _=null;_=q instanceof p||q instanceof u?q:w.isNode&&w.isStream(q)?new c(E,q):a.prepareContent(E,q,V.binary,V.optimizedBinaryString,V.base64);var O=new b(E,_,V);this.files[E]=O}var o=e("./utf8"),a=e("./utils"),u=e("./stream/GenericWorker"),m=e("./stream/StreamHelper"),y=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),h=e("./generate"),w=e("./nodejsUtils"),c=e("./nodejs/NodejsStreamInputAdapter"),g=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var q=E.lastIndexOf("/");return 0<q?E.substring(0,q):""},d=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},k=function(E,q){return q=q!==void 0?q:y.createFolders,E=d(E),this.files[E]||s.call(this,E,null,{dir:!0,createFolders:q}),this.files[E]};function S(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var q,D,N;for(q in this.files)N=this.files[q],(D=q.slice(this.root.length,q.length))&&q.slice(0,this.root.length)===this.root&&E(D,N)},filter:function(E){var q=[];return this.forEach(function(D,N){E(D,N)&&q.push(N)}),q},file:function(E,q,D){if(arguments.length!==1)return E=this.root+E,s.call(this,E,q,D),this;if(S(E)){var N=E;return this.filter(function(V,Q){return!Q.dir&&N.test(V)})}var B=this.files[this.root+E];return B&&!B.dir?B:null},folder:function(E){if(!E)return this;if(S(E))return this.filter(function(B,V){return V.dir&&E.test(B)});var q=this.root+E,D=k.call(this,q),N=this.clone();return N.root=D.name,N},remove:function(E){E=this.root+E;var q=this.files[E];if(q||(E.slice(-1)!=="/"&&(E+="/"),q=this.files[E]),q&&!q.dir)delete this.files[E];else for(var D=this.filter(function(B,V){return V.name.slice(0,E.length)===E}),N=0;N<D.length;N++)delete this.files[D[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var q,D={};try{if((D=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=D.type.toLowerCase(),D.compression=D.compression.toUpperCase(),D.type==="binarystring"&&(D.type="string"),!D.type)throw new Error("No output type specified.");a.checkSupport(D.type),D.platform!=="darwin"&&D.platform!=="freebsd"&&D.platform!=="linux"&&D.platform!=="sunos"||(D.platform="UNIX"),D.platform==="win32"&&(D.platform="DOS");var N=D.comment||this.comment||"";q=h.generateWorker(this,D,N)}catch(B){(q=new u("error")).error(B)}return new m(q,D.type||"string",D.mimeType)},generateAsync:function(E,q){return this.generateInternalStream(E).accumulate(q)},generateNodeStream:function(E,q){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(q)}};i.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,n){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,n){var s=e("./DataReader");function o(a){s.call(this,a);for(var u=0;u<this.data.length;u++)a[u]=255&a[u]}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var u=a.charCodeAt(0),m=a.charCodeAt(1),y=a.charCodeAt(2),p=a.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===u&&this.data[b+1]===m&&this.data[b+2]===y&&this.data[b+3]===p)return b-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var u=a.charCodeAt(0),m=a.charCodeAt(1),y=a.charCodeAt(2),p=a.charCodeAt(3),b=this.readData(4);return u===b[0]&&m===b[1]&&y===b[2]&&p===b[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,n){var s=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var u,m=0;for(this.checkOffset(a),u=this.index+a-1;u>=this.index;u--)m=(m<<8)+this.byteAt(u);return this.index+=a,m},readString:function(a){return s.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,n){var s=e("./Uint8ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,n){var s=e("./DataReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var u=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,n){var s=e("./ArrayReader");function o(a){s.call(this,a)}e("../utils").inherits(o,s),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var u=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,u},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,n){var s=e("../utils"),o=e("../support"),a=e("./ArrayReader"),u=e("./StringReader"),m=e("./NodeBufferReader"),y=e("./Uint8ArrayReader");i.exports=function(p){var b=s.getTypeOf(p);return s.checkSupport(b),b!=="string"||o.uint8array?b==="nodebuffer"?new m(p):o.uint8array?new y(s.transformTo("uint8array",p)):new a(s.transformTo("array",p)):new u(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,n){n.LOCAL_FILE_HEADER="PK",n.CENTRAL_FILE_HEADER="PK",n.CENTRAL_DIRECTORY_END="PK",n.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",n.ZIP64_CENTRAL_DIRECTORY_END="PK",n.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,n){var s=e("./GenericWorker"),o=e("../utils");function a(u){s.call(this,"ConvertWorker to "+u),this.destType=u}o.inherits(a,s),a.prototype.processChunk=function(u){this.push({data:o.transformTo(this.destType,u.data),meta:u.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,n){var s=e("./GenericWorker"),o=e("../crc32");function a(){s.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,s),a.prototype.processChunk=function(u){this.streamInfo.crc32=o(u.data,this.streamInfo.crc32||0),this.push(u)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,n){var s=e("../utils"),o=e("./GenericWorker");function a(u){o.call(this,"DataLengthProbe for "+u),this.propName=u,this.withStreamInfo(u,0)}s.inherits(a,o),a.prototype.processChunk=function(u){if(u){var m=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=m+u.data.length}o.prototype.processChunk.call(this,u)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,n){var s=e("../utils"),o=e("./GenericWorker");function a(u){o.call(this,"DataWorker");var m=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,u.then(function(y){m.dataIsReady=!0,m.data=y,m.max=y&&y.length||0,m.type=s.getTypeOf(y),m.isPaused||m._tickAndRepeat()},function(y){m.error(y)})}s.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,s.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(s.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var u=null,m=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":u=this.data.substring(this.index,m);break;case"uint8array":u=this.data.subarray(this.index,m);break;case"array":case"nodebuffer":u=this.data.slice(this.index,m)}return this.index=m,this.push({data:u,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,n){function s(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}s.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var u=0;u<this._listeners[o].length;u++)this._listeners[o][u].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(u){a.processChunk(u)}),o.on("end",function(){a.end()}),o.on("error",function(u){a.error(u)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=s},{}],29:[function(e,i,n){var s=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),u=e("../base64"),m=e("../support"),y=e("../external"),p=null;if(m.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,c){return new y.Promise(function(g,d){var k=[],S=w._internalType,A=w._outputType,E=w._mimeType;w.on("data",function(q,D){k.push(q),c&&c(D)}).on("error",function(q){k=[],d(q)}).on("end",function(){try{var q=function(D,N,B){switch(D){case"blob":return s.newBlob(s.transformTo("arraybuffer",N),B);case"base64":return u.encode(N);default:return s.transformTo(D,N)}}(A,function(D,N){var B,V=0,Q=null,_=0;for(B=0;B<N.length;B++)_+=N[B].length;switch(D){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(Q=new Uint8Array(_),B=0;B<N.length;B++)Q.set(N[B],V),V+=N[B].length;return Q;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+D+"'")}}(S,k),E);g(q)}catch(D){d(D)}k=[]}).resume()})}function h(w,c,g){var d=c;switch(c){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=c,this._mimeType=g,s.checkSupport(d),this._worker=w.pipe(new o(d)),w.lock()}catch(k){this._worker=new a("error"),this._worker.error(k)}}h.prototype={accumulate:function(w){return b(this,w)},on:function(w,c){var g=this;return w==="data"?this._worker.on(w,function(d){c.call(g,d.data,d.meta)}):this._worker.on(w,function(){s.delay(c,arguments,g)}),this},resume:function(){return s.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(s.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},w)}},i.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,n){if(n.base64=!0,n.array=!0,n.string=!0,n.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",n.nodebuffer=typeof Buffer<"u",n.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")n.blob=!1;else{var s=new ArrayBuffer(0);try{n.blob=new Blob([s],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(s),n.blob=o.getBlob("application/zip").size===0}catch{n.blob=!1}}}try{n.nodestream=!!e("readable-stream").Readable}catch{n.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,n){for(var s=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),u=e("./stream/GenericWorker"),m=new Array(256),y=0;y<256;y++)m[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;m[254]=m[254]=1;function p(){u.call(this,"utf-8 decode"),this.leftOver=null}function b(){u.call(this,"utf-8 encode")}n.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(w){var c,g,d,k,S,A=w.length,E=0;for(k=0;k<A;k++)(64512&(g=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(d=w.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),k++),E+=g<128?1:g<2048?2:g<65536?3:4;for(c=o.uint8array?new Uint8Array(E):new Array(E),k=S=0;S<E;k++)(64512&(g=w.charCodeAt(k)))==55296&&k+1<A&&(64512&(d=w.charCodeAt(k+1)))==56320&&(g=65536+(g-55296<<10)+(d-56320),k++),g<128?c[S++]=g:(g<2048?c[S++]=192|g>>>6:(g<65536?c[S++]=224|g>>>12:(c[S++]=240|g>>>18,c[S++]=128|g>>>12&63),c[S++]=128|g>>>6&63),c[S++]=128|63&g);return c}(h)},n.utf8decode=function(h){return o.nodebuffer?s.transformTo("nodebuffer",h).toString("utf-8"):function(w){var c,g,d,k,S=w.length,A=new Array(2*S);for(c=g=0;c<S;)if((d=w[c++])<128)A[g++]=d;else if(4<(k=m[d]))A[g++]=65533,c+=k-1;else{for(d&=k===2?31:k===3?15:7;1<k&&c<S;)d=d<<6|63&w[c++],k--;1<k?A[g++]=65533:d<65536?A[g++]=d:(d-=65536,A[g++]=55296|d>>10&1023,A[g++]=56320|1023&d)}return A.length!==g&&(A.subarray?A=A.subarray(0,g):A.length=g),s.applyFromCharCode(A)}(h=s.transformTo(o.uint8array?"uint8array":"array",h))},s.inherits(p,u),p.prototype.processChunk=function(h){var w=s.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var c=w;(w=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),w.set(c,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var g=function(k,S){var A;for((S=S||k.length)>k.length&&(S=k.length),A=S-1;0<=A&&(192&k[A])==128;)A--;return A<0||A===0?S:A+m[k[A]]>S?A:S}(w),d=w;g!==w.length&&(o.uint8array?(d=w.subarray(0,g),this.leftOver=w.subarray(g,w.length)):(d=w.slice(0,g),this.leftOver=w.slice(g,w.length))),this.push({data:n.utf8decode(d),meta:h.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:n.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},n.Utf8DecodeWorker=p,s.inherits(b,u),b.prototype.processChunk=function(h){this.push({data:n.utf8encode(h.data),meta:h.meta})},n.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,n){var s=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),u=e("./external");function m(c){return c}function y(c,g){for(var d=0;d<c.length;++d)g[d]=255&c.charCodeAt(d);return g}e("setimmediate"),n.newBlob=function(c,g){n.checkSupport("blob");try{return new Blob([c],{type:g})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(c),d.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(c,g,d){var k=[],S=0,A=c.length;if(A<=d)return String.fromCharCode.apply(null,c);for(;S<A;)g==="array"||g==="nodebuffer"?k.push(String.fromCharCode.apply(null,c.slice(S,Math.min(S+d,A)))):k.push(String.fromCharCode.apply(null,c.subarray(S,Math.min(S+d,A)))),S+=d;return k.join("")},stringifyByChar:function(c){for(var g="",d=0;d<c.length;d++)g+=String.fromCharCode(c[d]);return g},applyCanBeUsed:{uint8array:function(){try{return s.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return s.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function b(c){var g=65536,d=n.getTypeOf(c),k=!0;if(d==="uint8array"?k=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(k=p.applyCanBeUsed.nodebuffer),k)for(;1<g;)try{return p.stringifyByChunk(c,d,g)}catch{g=Math.floor(g/2)}return p.stringifyByChar(c)}function h(c,g){for(var d=0;d<c.length;d++)g[d]=c[d];return g}n.applyFromCharCode=b;var w={};w.string={string:m,array:function(c){return y(c,new Array(c.length))},arraybuffer:function(c){return w.string.uint8array(c).buffer},uint8array:function(c){return y(c,new Uint8Array(c.length))},nodebuffer:function(c){return y(c,a.allocBuffer(c.length))}},w.array={string:b,array:m,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(c)}},w.arraybuffer={string:function(c){return b(new Uint8Array(c))},array:function(c){return h(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:m,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(new Uint8Array(c))}},w.uint8array={string:b,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:m,nodebuffer:function(c){return a.newBufferFrom(c)}},w.nodebuffer={string:b,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return w.nodebuffer.uint8array(c).buffer},uint8array:function(c){return h(c,new Uint8Array(c.length))},nodebuffer:m},n.transformTo=function(c,g){if(g=g||"",!c)return g;n.checkSupport(c);var d=n.getTypeOf(g);return w[d][c](g)},n.resolve=function(c){for(var g=c.split("/"),d=[],k=0;k<g.length;k++){var S=g[k];S==="."||S===""&&k!==0&&k!==g.length-1||(S===".."?d.pop():d.push(S))}return d.join("/")},n.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":s.nodebuffer&&a.isBuffer(c)?"nodebuffer":s.uint8array&&c instanceof Uint8Array?"uint8array":s.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},n.checkSupport=function(c){if(!s[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},n.MAX_VALUE_16BITS=65535,n.MAX_VALUE_32BITS=-1,n.pretty=function(c){var g,d,k="";for(d=0;d<(c||"").length;d++)k+="\\x"+((g=c.charCodeAt(d))<16?"0":"")+g.toString(16).toUpperCase();return k},n.delay=function(c,g,d){setImmediate(function(){c.apply(d||null,g||[])})},n.inherits=function(c,g){function d(){}d.prototype=g.prototype,c.prototype=new d},n.extend=function(){var c,g,d={};for(c=0;c<arguments.length;c++)for(g in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],g)&&d[g]===void 0&&(d[g]=arguments[c][g]);return d},n.prepareContent=function(c,g,d,k,S){return u.Promise.resolve(g).then(function(A){return s.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new u.Promise(function(E,q){var D=new FileReader;D.onload=function(N){E(N.target.result)},D.onerror=function(N){q(N.target.error)},D.readAsArrayBuffer(A)}):A}).then(function(A){var E=n.getTypeOf(A);return E?(E==="arraybuffer"?A=n.transformTo("uint8array",A):E==="string"&&(S?A=o.decode(A):d&&k!==!0&&(A=function(q){return y(q,s.uint8array?new Uint8Array(q.length):new Array(q.length))}(A))),A):u.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),u=e("./zipEntry"),m=e("./support");function y(p){this.files=[],this.loadOptions=p}y.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(b)+", expected "+o.pretty(p)+")")}},isSignature:function(p,b){var h=this.reader.index;this.reader.setIndex(p);var w=this.reader.readString(4)===b;return this.reader.setIndex(h),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=m.uint8array?"uint8array":"array",h=o.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,h,w=this.zip64EndOfCentralSize-44;0<w;)p=this.reader.readInt(2),b=this.reader.readInt(4),h=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(p=new u({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var w=b-h;if(0<w)this.isSignature(b,a.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(p){this.reader=s(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=y},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,n){var s=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),u=e("./crc32"),m=e("./utf8"),y=e("./compressions"),p=e("./support");function b(h,w){this.options=h,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var w,c;if(h.skip(22),this.fileNameLength=h.readInt(2),c=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(g){for(var d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&y[d].magic===g)return y[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,w,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var w=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(w),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=s(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var w,c,g,d=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<d;)w=h.readInt(2),c=h.readInt(2),g=h.readData(c),this.extraFields[w]={id:w,length:c,value:g};h.setIndex(d)},handleUTF8:function(){var h=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=m.utf8decode(this.fileName),this.fileCommentStr=m.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var c=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var d=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var w=s(h.value);return w.readInt(1)!==1||u(this.fileName)!==w.readInt(4)?null:m.utf8decode(w.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var w=s(h.value);return w.readInt(1)!==1||u(this.fileComment)!==w.readInt(4)?null:m.utf8decode(w.readData(h.length-5))}return null}},i.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,n){function s(w,c,g){this.name=w,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=c,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),u=e("./utf8"),m=e("./compressedObject"),y=e("./stream/GenericWorker");s.prototype={internalStream:function(w){var c=null,g="string";try{if(!w)throw new Error("No output type specified.");var d=(g=w.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),c=this._decompressWorker();var k=!this._dataBinary;k&&!d&&(c=c.pipe(new u.Utf8EncodeWorker)),!k&&d&&(c=c.pipe(new u.Utf8DecodeWorker))}catch(S){(c=new y("error")).error(S)}return new o(c,g,"")},async:function(w,c){return this.internalStream(w).accumulate(c)},nodeStream:function(w,c){return this.internalStream(w||"nodebuffer").toNodejsStream(c)},_compressWorker:function(w,c){if(this._data instanceof m&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new u.Utf8EncodeWorker)),m.createWorkerFrom(g,w,c)},_decompressWorker:function(){return this._data instanceof m?this._data.getContentWorker():this._data instanceof y?this._data:new a(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<p.length;h++)s.prototype[p[h]]=b;i.exports=s},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,n){(function(s){var o,a,u=s.MutationObserver||s.WebKitMutationObserver;if(u){var m=0,y=new u(w),p=s.document.createTextNode("");y.observe(p,{characterData:!0}),o=function(){p.data=m=++m%2}}else if(s.setImmediate||s.MessageChannel===void 0)o="document"in s&&"onreadystatechange"in s.document.createElement("script")?function(){var c=s.document.createElement("script");c.onreadystatechange=function(){w(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},s.document.documentElement.appendChild(c)}:function(){setTimeout(w,0)};else{var b=new s.MessageChannel;b.port1.onmessage=w,o=function(){b.port2.postMessage(0)}}var h=[];function w(){var c,g;a=!0;for(var d=h.length;d;){for(g=h,h=[],c=-1;++c<d;)g[c]();d=h.length}a=!1}i.exports=function(c){h.push(c)!==1||a||o()}}).call(this,typeof Et<"u"?Et:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,n){var s=e("immediate");function o(){}var a={},u=["REJECTED"],m=["FULFILLED"],y=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,d!==o&&c(this,d)}function b(d,k,S){this.promise=d,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function h(d,k,S){s(function(){var A;try{A=k(S)}catch(E){return a.reject(d,E)}A===d?a.reject(d,new TypeError("Cannot resolve promise with itself")):a.resolve(d,A)})}function w(d){var k=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof k=="function")return function(){k.apply(d,arguments)}}function c(d,k){var S=!1;function A(D){S||(S=!0,a.reject(d,D))}function E(D){S||(S=!0,a.resolve(d,D))}var q=g(function(){k(E,A)});q.status==="error"&&A(q.value)}function g(d,k){var S={};try{S.value=d(k),S.status="success"}catch(A){S.status="error",S.value=A}return S}(i.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(d()).then(function(){return S})},function(S){return k.resolve(d()).then(function(){throw S})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,k){if(typeof d!="function"&&this.state===m||typeof k!="function"&&this.state===u)return this;var S=new this.constructor(o);return this.state!==y?h(S,this.state===m?d:k,this.outcome):this.queue.push(new b(S,d,k)),S},b.prototype.callFulfilled=function(d){a.resolve(this.promise,d)},b.prototype.otherCallFulfilled=function(d){h(this.promise,this.onFulfilled,d)},b.prototype.callRejected=function(d){a.reject(this.promise,d)},b.prototype.otherCallRejected=function(d){h(this.promise,this.onRejected,d)},a.resolve=function(d,k){var S=g(w,k);if(S.status==="error")return a.reject(d,S.value);var A=S.value;if(A)c(d,A);else{d.state=m,d.outcome=k;for(var E=-1,q=d.queue.length;++E<q;)d.queue[E].callFulfilled(k)}return d},a.reject=function(d,k){d.state=u,d.outcome=k;for(var S=-1,A=d.queue.length;++S<A;)d.queue[S].callRejected(k);return d},p.resolve=function(d){return d instanceof this?d:a.resolve(new this(o),d)},p.reject=function(d){var k=new this(o);return a.reject(k,d)},p.all=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,A=!1;if(!S)return this.resolve([]);for(var E=new Array(S),q=0,D=-1,N=new this(o);++D<S;)B(d[D],D);return N;function B(V,Q){k.resolve(V).then(function(_){E[Q]=_,++q!==S||A||(A=!0,a.resolve(N,E))},function(_){A||(A=!0,a.reject(N,_))})}},p.race=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,A=!1;if(!S)return this.resolve([]);for(var E=-1,q=new this(o);++E<S;)D=d[E],k.resolve(D).then(function(N){A||(A=!0,a.resolve(q,N))},function(N){A||(A=!0,a.reject(q,N))});var D;return q}},{immediate:36}],38:[function(e,i,n){var s={};(0,e("./lib/utils/common").assign)(s,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=s},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,n){var s=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/messages"),m=e("./zlib/zstream"),y=Object.prototype.toString,p=0,b=-1,h=0,w=8;function c(d){if(!(this instanceof c))return new c(d);this.options=o.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},d||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new m,this.strm.avail_out=0;var S=s.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==p)throw new Error(u[S]);if(k.header&&s.deflateSetHeader(this.strm,k.header),k.dictionary){var A;if(A=typeof k.dictionary=="string"?a.string2buf(k.dictionary):y.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=s.deflateSetDictionary(this.strm,A))!==p)throw new Error(u[S]);this._dict_set=!0}}function g(d,k){var S=new c(k);if(S.push(d,!0),S.err)throw S.msg||u[S.err];return S.result}c.prototype.push=function(d,k){var S,A,E=this.strm,q=this.options.chunkSize;if(this.ended)return!1;A=k===~~k?k:k===!0?4:0,typeof d=="string"?E.input=a.string2buf(d):y.call(d)==="[object ArrayBuffer]"?E.input=new Uint8Array(d):E.input=d,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(q),E.next_out=0,E.avail_out=q),(S=s.deflate(E,A))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&S!==1);return A===4?(S=s.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):A!==2||(this.onEnd(p),!(E.avail_out=0))},c.prototype.onData=function(d){this.chunks.push(d)},c.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},n.Deflate=c,n.deflate=g,n.deflateRaw=function(d,k){return(k=k||{}).raw=!0,g(d,k)},n.gzip=function(d,k){return(k=k||{}).gzip=!0,g(d,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,n){var s=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),u=e("./zlib/constants"),m=e("./zlib/messages"),y=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function h(c){if(!(this instanceof h))return new h(c);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},c||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||c&&c.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var d=s.inflateInit2(this.strm,g.windowBits);if(d!==u.Z_OK)throw new Error(m[d]);this.header=new p,s.inflateGetHeader(this.strm,this.header)}function w(c,g){var d=new h(g);if(d.push(c,!0),d.err)throw d.msg||m[d.err];return d.result}h.prototype.push=function(c,g){var d,k,S,A,E,q,D=this.strm,N=this.options.chunkSize,B=this.options.dictionary,V=!1;if(this.ended)return!1;k=g===~~g?g:g===!0?u.Z_FINISH:u.Z_NO_FLUSH,typeof c=="string"?D.input=a.binstring2buf(c):b.call(c)==="[object ArrayBuffer]"?D.input=new Uint8Array(c):D.input=c,D.next_in=0,D.avail_in=D.input.length;do{if(D.avail_out===0&&(D.output=new o.Buf8(N),D.next_out=0,D.avail_out=N),(d=s.inflate(D,u.Z_NO_FLUSH))===u.Z_NEED_DICT&&B&&(q=typeof B=="string"?a.string2buf(B):b.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=s.inflateSetDictionary(this.strm,q)),d===u.Z_BUF_ERROR&&V===!0&&(d=u.Z_OK,V=!1),d!==u.Z_STREAM_END&&d!==u.Z_OK)return this.onEnd(d),!(this.ended=!0);D.next_out&&(D.avail_out!==0&&d!==u.Z_STREAM_END&&(D.avail_in!==0||k!==u.Z_FINISH&&k!==u.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(D.output,D.next_out),A=D.next_out-S,E=a.buf2string(D.output,S),D.next_out=A,D.avail_out=N-A,A&&o.arraySet(D.output,D.output,S,A,0),this.onData(E)):this.onData(o.shrinkBuf(D.output,D.next_out)))),D.avail_in===0&&D.avail_out===0&&(V=!0)}while((0<D.avail_in||D.avail_out===0)&&d!==u.Z_STREAM_END);return d===u.Z_STREAM_END&&(k=u.Z_FINISH),k===u.Z_FINISH?(d=s.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===u.Z_OK):k!==u.Z_SYNC_FLUSH||(this.onEnd(u.Z_OK),!(D.avail_out=0))},h.prototype.onData=function(c){this.chunks.push(c)},h.prototype.onEnd=function(c){c===u.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},n.Inflate=h,n.inflate=w,n.inflateRaw=function(c,g){return(g=g||{}).raw=!0,w(c,g)},n.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,n){var s=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";n.assign=function(u){for(var m=Array.prototype.slice.call(arguments,1);m.length;){var y=m.shift();if(y){if(typeof y!="object")throw new TypeError(y+"must be non-object");for(var p in y)y.hasOwnProperty(p)&&(u[p]=y[p])}}return u},n.shrinkBuf=function(u,m){return u.length===m?u:u.subarray?u.subarray(0,m):(u.length=m,u)};var o={arraySet:function(u,m,y,p,b){if(m.subarray&&u.subarray)u.set(m.subarray(y,y+p),b);else for(var h=0;h<p;h++)u[b+h]=m[y+h]},flattenChunks:function(u){var m,y,p,b,h,w;for(m=p=0,y=u.length;m<y;m++)p+=u[m].length;for(w=new Uint8Array(p),m=b=0,y=u.length;m<y;m++)h=u[m],w.set(h,b),b+=h.length;return w}},a={arraySet:function(u,m,y,p,b){for(var h=0;h<p;h++)u[b+h]=m[y+h]},flattenChunks:function(u){return[].concat.apply([],u)}};n.setTyped=function(u){u?(n.Buf8=Uint8Array,n.Buf16=Uint16Array,n.Buf32=Int32Array,n.assign(n,o)):(n.Buf8=Array,n.Buf16=Array,n.Buf32=Array,n.assign(n,a))},n.setTyped(s)},{}],42:[function(e,i,n){var s=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var u=new s.Buf8(256),m=0;m<256;m++)u[m]=252<=m?6:248<=m?5:240<=m?4:224<=m?3:192<=m?2:1;function y(p,b){if(b<65537&&(p.subarray&&a||!p.subarray&&o))return String.fromCharCode.apply(null,s.shrinkBuf(p,b));for(var h="",w=0;w<b;w++)h+=String.fromCharCode(p[w]);return h}u[254]=u[254]=1,n.string2buf=function(p){var b,h,w,c,g,d=p.length,k=0;for(c=0;c<d;c++)(64512&(h=p.charCodeAt(c)))==55296&&c+1<d&&(64512&(w=p.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),c++),k+=h<128?1:h<2048?2:h<65536?3:4;for(b=new s.Buf8(k),c=g=0;g<k;c++)(64512&(h=p.charCodeAt(c)))==55296&&c+1<d&&(64512&(w=p.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),c++),h<128?b[g++]=h:(h<2048?b[g++]=192|h>>>6:(h<65536?b[g++]=224|h>>>12:(b[g++]=240|h>>>18,b[g++]=128|h>>>12&63),b[g++]=128|h>>>6&63),b[g++]=128|63&h);return b},n.buf2binstring=function(p){return y(p,p.length)},n.binstring2buf=function(p){for(var b=new s.Buf8(p.length),h=0,w=b.length;h<w;h++)b[h]=p.charCodeAt(h);return b},n.buf2string=function(p,b){var h,w,c,g,d=b||p.length,k=new Array(2*d);for(h=w=0;h<d;)if((c=p[h++])<128)k[w++]=c;else if(4<(g=u[c]))k[w++]=65533,h+=g-1;else{for(c&=g===2?31:g===3?15:7;1<g&&h<d;)c=c<<6|63&p[h++],g--;1<g?k[w++]=65533:c<65536?k[w++]=c:(c-=65536,k[w++]=55296|c>>10&1023,k[w++]=56320|1023&c)}return y(k,w)},n.utf8border=function(p,b){var h;for((b=b||p.length)>p.length&&(b=p.length),h=b-1;0<=h&&(192&p[h])==128;)h--;return h<0||h===0?b:h+u[p[h]]>b?h:b}},{"./common":41}],43:[function(e,i,n){i.exports=function(s,o,a,u){for(var m=65535&s|0,y=s>>>16&65535|0,p=0;a!==0;){for(a-=p=2e3<a?2e3:a;y=y+(m=m+o[u++]|0)|0,--p;);m%=65521,y%=65521}return m|y<<16|0}},{}],44:[function(e,i,n){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,n){var s=function(){for(var o,a=[],u=0;u<256;u++){o=u;for(var m=0;m<8;m++)o=1&o?3988292384^o>>>1:o>>>1;a[u]=o}return a}();i.exports=function(o,a,u,m){var y=s,p=m+u;o^=-1;for(var b=m;b<p;b++)o=o>>>8^y[255&(o^a[b])];return-1^o}},{}],46:[function(e,i,n){var s,o=e("../utils/common"),a=e("./trees"),u=e("./adler32"),m=e("./crc32"),y=e("./messages"),p=0,b=4,h=0,w=-2,c=-1,g=4,d=2,k=8,S=9,A=286,E=30,q=19,D=2*A+1,N=15,B=3,V=258,Q=V+B+1,_=42,O=113,l=1,H=2,it=3,F=4;function rt(r,M){return r.msg=y[M],M}function P(r){return(r<<1)-(4<r?9:0)}function et(r){for(var M=r.length;0<=--M;)r[M]=0}function T(r){var M=r.state,z=M.pending;z>r.avail_out&&(z=r.avail_out),z!==0&&(o.arraySet(r.output,M.pending_buf,M.pending_out,z,r.next_out),r.next_out+=z,M.pending_out+=z,r.total_out+=z,r.avail_out-=z,M.pending-=z,M.pending===0&&(M.pending_out=0))}function R(r,M){a._tr_flush_block(r,0<=r.block_start?r.block_start:-1,r.strstart-r.block_start,M),r.block_start=r.strstart,T(r.strm)}function X(r,M){r.pending_buf[r.pending++]=M}function G(r,M){r.pending_buf[r.pending++]=M>>>8&255,r.pending_buf[r.pending++]=255&M}function W(r,M){var z,v,f=r.max_chain_length,C=r.strstart,j=r.prev_length,I=r.nice_match,L=r.strstart>r.w_size-Q?r.strstart-(r.w_size-Q):0,U=r.window,Y=r.w_mask,Z=r.prev,J=r.strstart+V,at=U[C+j-1],nt=U[C+j];r.prev_length>=r.good_match&&(f>>=2),I>r.lookahead&&(I=r.lookahead);do if(U[(z=M)+j]===nt&&U[z+j-1]===at&&U[z]===U[C]&&U[++z]===U[C+1]){C+=2,z++;do;while(U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&C<J);if(v=V-(J-C),C=J-V,j<v){if(r.match_start=M,I<=(j=v))break;at=U[C+j-1],nt=U[C+j]}}while((M=Z[M&Y])>L&&--f!=0);return j<=r.lookahead?j:r.lookahead}function lt(r){var M,z,v,f,C,j,I,L,U,Y,Z=r.w_size;do{if(f=r.window_size-r.lookahead-r.strstart,r.strstart>=Z+(Z-Q)){for(o.arraySet(r.window,r.window,Z,Z,0),r.match_start-=Z,r.strstart-=Z,r.block_start-=Z,M=z=r.hash_size;v=r.head[--M],r.head[M]=Z<=v?v-Z:0,--z;);for(M=z=Z;v=r.prev[--M],r.prev[M]=Z<=v?v-Z:0,--z;);f+=Z}if(r.strm.avail_in===0)break;if(j=r.strm,I=r.window,L=r.strstart+r.lookahead,U=f,Y=void 0,Y=j.avail_in,U<Y&&(Y=U),z=Y===0?0:(j.avail_in-=Y,o.arraySet(I,j.input,j.next_in,Y,L),j.state.wrap===1?j.adler=u(j.adler,I,Y,L):j.state.wrap===2&&(j.adler=m(j.adler,I,Y,L)),j.next_in+=Y,j.total_in+=Y,Y),r.lookahead+=z,r.lookahead+r.insert>=B)for(C=r.strstart-r.insert,r.ins_h=r.window[C],r.ins_h=(r.ins_h<<r.hash_shift^r.window[C+1])&r.hash_mask;r.insert&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[C+B-1])&r.hash_mask,r.prev[C&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=C,C++,r.insert--,!(r.lookahead+r.insert<B)););}while(r.lookahead<Q&&r.strm.avail_in!==0)}function ft(r,M){for(var z,v;;){if(r.lookahead<Q){if(lt(r),r.lookahead<Q&&M===p)return l;if(r.lookahead===0)break}if(z=0,r.lookahead>=B&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),z!==0&&r.strstart-z<=r.w_size-Q&&(r.match_length=W(r,z)),r.match_length>=B)if(v=a._tr_tally(r,r.strstart-r.match_start,r.match_length-B),r.lookahead-=r.match_length,r.match_length<=r.max_lazy_match&&r.lookahead>=B){for(r.match_length--;r.strstart++,r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart,--r.match_length!=0;);r.strstart++}else r.strstart+=r.match_length,r.match_length=0,r.ins_h=r.window[r.strstart],r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+1])&r.hash_mask;else v=a._tr_tally(r,0,r.window[r.strstart]),r.lookahead--,r.strstart++;if(v&&(R(r,!1),r.strm.avail_out===0))return l}return r.insert=r.strstart<B-1?r.strstart:B-1,M===b?(R(r,!0),r.strm.avail_out===0?it:F):r.last_lit&&(R(r,!1),r.strm.avail_out===0)?l:H}function st(r,M){for(var z,v,f;;){if(r.lookahead<Q){if(lt(r),r.lookahead<Q&&M===p)return l;if(r.lookahead===0)break}if(z=0,r.lookahead>=B&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),r.prev_length=r.match_length,r.prev_match=r.match_start,r.match_length=B-1,z!==0&&r.prev_length<r.max_lazy_match&&r.strstart-z<=r.w_size-Q&&(r.match_length=W(r,z),r.match_length<=5&&(r.strategy===1||r.match_length===B&&4096<r.strstart-r.match_start)&&(r.match_length=B-1)),r.prev_length>=B&&r.match_length<=r.prev_length){for(f=r.strstart+r.lookahead-B,v=a._tr_tally(r,r.strstart-1-r.prev_match,r.prev_length-B),r.lookahead-=r.prev_length-1,r.prev_length-=2;++r.strstart<=f&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),--r.prev_length!=0;);if(r.match_available=0,r.match_length=B-1,r.strstart++,v&&(R(r,!1),r.strm.avail_out===0))return l}else if(r.match_available){if((v=a._tr_tally(r,0,r.window[r.strstart-1]))&&R(r,!1),r.strstart++,r.lookahead--,r.strm.avail_out===0)return l}else r.match_available=1,r.strstart++,r.lookahead--}return r.match_available&&(v=a._tr_tally(r,0,r.window[r.strstart-1]),r.match_available=0),r.insert=r.strstart<B-1?r.strstart:B-1,M===b?(R(r,!0),r.strm.avail_out===0?it:F):r.last_lit&&(R(r,!1),r.strm.avail_out===0)?l:H}function ot(r,M,z,v,f){this.good_length=r,this.max_lazy=M,this.nice_length=z,this.max_chain=v,this.func=f}function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*D),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*q+1)),et(this.dyn_ltree),et(this.dyn_dtree),et(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*A+1),et(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*A+1),et(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ut(r){var M;return r&&r.state?(r.total_in=r.total_out=0,r.data_type=d,(M=r.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?_:O,r.adler=M.wrap===2?0:1,M.last_flush=p,a._tr_init(M),h):rt(r,w)}function kt(r){var M=ut(r);return M===h&&function(z){z.window_size=2*z.w_size,et(z.head),z.max_lazy_match=s[z.level].max_lazy,z.good_match=s[z.level].good_length,z.nice_match=s[z.level].nice_length,z.max_chain_length=s[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(r.state),M}function vt(r,M,z,v,f,C){if(!r)return w;var j=1;if(M===c&&(M=6),v<0?(j=0,v=-v):15<v&&(j=2,v-=16),f<1||S<f||z!==k||v<8||15<v||M<0||9<M||C<0||g<C)return rt(r,w);v===8&&(v=9);var I=new ht;return(r.state=I).strm=r,I.wrap=j,I.gzhead=null,I.w_bits=v,I.w_size=1<<I.w_bits,I.w_mask=I.w_size-1,I.hash_bits=f+7,I.hash_size=1<<I.hash_bits,I.hash_mask=I.hash_size-1,I.hash_shift=~~((I.hash_bits+B-1)/B),I.window=new o.Buf8(2*I.w_size),I.head=new o.Buf16(I.hash_size),I.prev=new o.Buf16(I.w_size),I.lit_bufsize=1<<f+6,I.pending_buf_size=4*I.lit_bufsize,I.pending_buf=new o.Buf8(I.pending_buf_size),I.d_buf=1*I.lit_bufsize,I.l_buf=3*I.lit_bufsize,I.level=M,I.strategy=C,I.method=z,kt(r)}s=[new ot(0,0,0,0,function(r,M){var z=65535;for(z>r.pending_buf_size-5&&(z=r.pending_buf_size-5);;){if(r.lookahead<=1){if(lt(r),r.lookahead===0&&M===p)return l;if(r.lookahead===0)break}r.strstart+=r.lookahead,r.lookahead=0;var v=r.block_start+z;if((r.strstart===0||r.strstart>=v)&&(r.lookahead=r.strstart-v,r.strstart=v,R(r,!1),r.strm.avail_out===0)||r.strstart-r.block_start>=r.w_size-Q&&(R(r,!1),r.strm.avail_out===0))return l}return r.insert=0,M===b?(R(r,!0),r.strm.avail_out===0?it:F):(r.strstart>r.block_start&&(R(r,!1),r.strm.avail_out),l)}),new ot(4,4,8,4,ft),new ot(4,5,16,8,ft),new ot(4,6,32,32,ft),new ot(4,4,16,16,st),new ot(8,16,32,32,st),new ot(8,16,128,128,st),new ot(8,32,128,256,st),new ot(32,128,258,1024,st),new ot(32,258,258,4096,st)],n.deflateInit=function(r,M){return vt(r,M,k,15,8,0)},n.deflateInit2=vt,n.deflateReset=kt,n.deflateResetKeep=ut,n.deflateSetHeader=function(r,M){return r&&r.state?r.state.wrap!==2?w:(r.state.gzhead=M,h):w},n.deflate=function(r,M){var z,v,f,C;if(!r||!r.state||5<M||M<0)return r?rt(r,w):w;if(v=r.state,!r.output||!r.input&&r.avail_in!==0||v.status===666&&M!==b)return rt(r,r.avail_out===0?-5:w);if(v.strm=r,z=v.last_flush,v.last_flush=M,v.status===_)if(v.wrap===2)r.adler=0,X(v,31),X(v,139),X(v,8),v.gzhead?(X(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),X(v,255&v.gzhead.time),X(v,v.gzhead.time>>8&255),X(v,v.gzhead.time>>16&255),X(v,v.gzhead.time>>24&255),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(X(v,255&v.gzhead.extra.length),X(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(r.adler=m(r.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(X(v,0),X(v,0),X(v,0),X(v,0),X(v,0),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,3),v.status=O);else{var j=k+(v.w_bits-8<<4)<<8;j|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(j|=32),j+=31-j%31,v.status=O,G(v,j),v.strstart!==0&&(G(v,r.adler>>>16),G(v,65535&r.adler)),r.adler=1}if(v.status===69)if(v.gzhead.extra){for(f=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),T(r),f=v.pending,v.pending!==v.pending_buf_size));)X(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),T(r),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),T(r),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(r.adler=m(r.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&T(r),v.pending+2<=v.pending_buf_size&&(X(v,255&r.adler),X(v,r.adler>>8&255),r.adler=0,v.status=O)):v.status=O),v.pending!==0){if(T(r),r.avail_out===0)return v.last_flush=-1,h}else if(r.avail_in===0&&P(M)<=P(z)&&M!==b)return rt(r,-5);if(v.status===666&&r.avail_in!==0)return rt(r,-5);if(r.avail_in!==0||v.lookahead!==0||M!==p&&v.status!==666){var I=v.strategy===2?function(L,U){for(var Y;;){if(L.lookahead===0&&(lt(L),L.lookahead===0)){if(U===p)return l;break}if(L.match_length=0,Y=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++,Y&&(R(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===b?(R(L,!0),L.strm.avail_out===0?it:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?l:H}(v,M):v.strategy===3?function(L,U){for(var Y,Z,J,at,nt=L.window;;){if(L.lookahead<=V){if(lt(L),L.lookahead<=V&&U===p)return l;if(L.lookahead===0)break}if(L.match_length=0,L.lookahead>=B&&0<L.strstart&&(Z=nt[J=L.strstart-1])===nt[++J]&&Z===nt[++J]&&Z===nt[++J]){at=L.strstart+V;do;while(Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&Z===nt[++J]&&J<at);L.match_length=V-(at-J),L.match_length>L.lookahead&&(L.match_length=L.lookahead)}if(L.match_length>=B?(Y=a._tr_tally(L,1,L.match_length-B),L.lookahead-=L.match_length,L.strstart+=L.match_length,L.match_length=0):(Y=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++),Y&&(R(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===b?(R(L,!0),L.strm.avail_out===0?it:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?l:H}(v,M):s[v.level].func(v,M);if(I!==it&&I!==F||(v.status=666),I===l||I===it)return r.avail_out===0&&(v.last_flush=-1),h;if(I===H&&(M===1?a._tr_align(v):M!==5&&(a._tr_stored_block(v,0,0,!1),M===3&&(et(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),T(r),r.avail_out===0))return v.last_flush=-1,h}return M!==b?h:v.wrap<=0?1:(v.wrap===2?(X(v,255&r.adler),X(v,r.adler>>8&255),X(v,r.adler>>16&255),X(v,r.adler>>24&255),X(v,255&r.total_in),X(v,r.total_in>>8&255),X(v,r.total_in>>16&255),X(v,r.total_in>>24&255)):(G(v,r.adler>>>16),G(v,65535&r.adler)),T(r),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?h:1)},n.deflateEnd=function(r){var M;return r&&r.state?(M=r.state.status)!==_&&M!==69&&M!==73&&M!==91&&M!==103&&M!==O&&M!==666?rt(r,w):(r.state=null,M===O?rt(r,-3):h):w},n.deflateSetDictionary=function(r,M){var z,v,f,C,j,I,L,U,Y=M.length;if(!r||!r.state||(C=(z=r.state).wrap)===2||C===1&&z.status!==_||z.lookahead)return w;for(C===1&&(r.adler=u(r.adler,M,Y,0)),z.wrap=0,Y>=z.w_size&&(C===0&&(et(z.head),z.strstart=0,z.block_start=0,z.insert=0),U=new o.Buf8(z.w_size),o.arraySet(U,M,Y-z.w_size,z.w_size,0),M=U,Y=z.w_size),j=r.avail_in,I=r.next_in,L=r.input,r.avail_in=Y,r.next_in=0,r.input=M,lt(z);z.lookahead>=B;){for(v=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[v+B-1])&z.hash_mask,z.prev[v&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=v,v++,--f;);z.strstart=v,z.lookahead=B-1,lt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,r.next_in=I,r.input=L,r.avail_in=j,z.wrap=C,h},n.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,n){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,n){i.exports=function(s,o){var a,u,m,y,p,b,h,w,c,g,d,k,S,A,E,q,D,N,B,V,Q,_,O,l,H;a=s.state,u=s.next_in,l=s.input,m=u+(s.avail_in-5),y=s.next_out,H=s.output,p=y-(o-s.avail_out),b=y+(s.avail_out-257),h=a.dmax,w=a.wsize,c=a.whave,g=a.wnext,d=a.window,k=a.hold,S=a.bits,A=a.lencode,E=a.distcode,q=(1<<a.lenbits)-1,D=(1<<a.distbits)-1;t:do{S<15&&(k+=l[u++]<<S,S+=8,k+=l[u++]<<S,S+=8),N=A[k&q];e:for(;;){if(k>>>=B=N>>>24,S-=B,(B=N>>>16&255)===0)H[y++]=65535&N;else{if(!(16&B)){if(!(64&B)){N=A[(65535&N)+(k&(1<<B)-1)];continue e}if(32&B){a.mode=12;break t}s.msg="invalid literal/length code",a.mode=30;break t}V=65535&N,(B&=15)&&(S<B&&(k+=l[u++]<<S,S+=8),V+=k&(1<<B)-1,k>>>=B,S-=B),S<15&&(k+=l[u++]<<S,S+=8,k+=l[u++]<<S,S+=8),N=E[k&D];i:for(;;){if(k>>>=B=N>>>24,S-=B,!(16&(B=N>>>16&255))){if(!(64&B)){N=E[(65535&N)+(k&(1<<B)-1)];continue i}s.msg="invalid distance code",a.mode=30;break t}if(Q=65535&N,S<(B&=15)&&(k+=l[u++]<<S,(S+=8)<B&&(k+=l[u++]<<S,S+=8)),h<(Q+=k&(1<<B)-1)){s.msg="invalid distance too far back",a.mode=30;break t}if(k>>>=B,S-=B,(B=y-p)<Q){if(c<(B=Q-B)&&a.sane){s.msg="invalid distance too far back",a.mode=30;break t}if(O=d,(_=0)===g){if(_+=w-B,B<V){for(V-=B;H[y++]=d[_++],--B;);_=y-Q,O=H}}else if(g<B){if(_+=w+g-B,(B-=g)<V){for(V-=B;H[y++]=d[_++],--B;);if(_=0,g<V){for(V-=B=g;H[y++]=d[_++],--B;);_=y-Q,O=H}}}else if(_+=g-B,B<V){for(V-=B;H[y++]=d[_++],--B;);_=y-Q,O=H}for(;2<V;)H[y++]=O[_++],H[y++]=O[_++],H[y++]=O[_++],V-=3;V&&(H[y++]=O[_++],1<V&&(H[y++]=O[_++]))}else{for(_=y-Q;H[y++]=H[_++],H[y++]=H[_++],H[y++]=H[_++],2<(V-=3););V&&(H[y++]=H[_++],1<V&&(H[y++]=H[_++]))}break}}break}}while(u<m&&y<b);u-=V=S>>3,k&=(1<<(S-=V<<3))-1,s.next_in=u,s.next_out=y,s.avail_in=u<m?m-u+5:5-(u-m),s.avail_out=y<b?b-y+257:257-(y-b),a.hold=k,a.bits=S}},{}],49:[function(e,i,n){var s=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),u=e("./inffast"),m=e("./inftrees"),y=1,p=2,b=0,h=-2,w=1,c=852,g=592;function d(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new s.Buf16(320),this.work=new s.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(_){var O;return _&&_.state?(O=_.state,_.total_in=_.total_out=O.total=0,_.msg="",O.wrap&&(_.adler=1&O.wrap),O.mode=w,O.last=0,O.havedict=0,O.dmax=32768,O.head=null,O.hold=0,O.bits=0,O.lencode=O.lendyn=new s.Buf32(c),O.distcode=O.distdyn=new s.Buf32(g),O.sane=1,O.back=-1,b):h}function A(_){var O;return _&&_.state?((O=_.state).wsize=0,O.whave=0,O.wnext=0,S(_)):h}function E(_,O){var l,H;return _&&_.state?(H=_.state,O<0?(l=0,O=-O):(l=1+(O>>4),O<48&&(O&=15)),O&&(O<8||15<O)?h:(H.window!==null&&H.wbits!==O&&(H.window=null),H.wrap=l,H.wbits=O,A(_))):h}function q(_,O){var l,H;return _?(H=new k,(_.state=H).window=null,(l=E(_,O))!==b&&(_.state=null),l):h}var D,N,B=!0;function V(_){if(B){var O;for(D=new s.Buf32(512),N=new s.Buf32(32),O=0;O<144;)_.lens[O++]=8;for(;O<256;)_.lens[O++]=9;for(;O<280;)_.lens[O++]=7;for(;O<288;)_.lens[O++]=8;for(m(y,_.lens,0,288,D,0,_.work,{bits:9}),O=0;O<32;)_.lens[O++]=5;m(p,_.lens,0,32,N,0,_.work,{bits:5}),B=!1}_.lencode=D,_.lenbits=9,_.distcode=N,_.distbits=5}function Q(_,O,l,H){var it,F=_.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new s.Buf8(F.wsize)),H>=F.wsize?(s.arraySet(F.window,O,l-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(H<(it=F.wsize-F.wnext)&&(it=H),s.arraySet(F.window,O,l-H,it,F.wnext),(H-=it)?(s.arraySet(F.window,O,l-H,H,0),F.wnext=H,F.whave=F.wsize):(F.wnext+=it,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=it))),0}n.inflateReset=A,n.inflateReset2=E,n.inflateResetKeep=S,n.inflateInit=function(_){return q(_,15)},n.inflateInit2=q,n.inflate=function(_,O){var l,H,it,F,rt,P,et,T,R,X,G,W,lt,ft,st,ot,ht,ut,kt,vt,r,M,z,v,f=0,C=new s.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return h;(l=_.state).mode===12&&(l.mode=13),rt=_.next_out,it=_.output,et=_.avail_out,F=_.next_in,H=_.input,P=_.avail_in,T=l.hold,R=l.bits,X=P,G=et,M=b;t:for(;;)switch(l.mode){case w:if(l.wrap===0){l.mode=13;break}for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(2&l.wrap&&T===35615){C[l.check=0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0),R=T=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&T)<<8)+(T>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&T)!=8){_.msg="unknown compression method",l.mode=30;break}if(R-=4,r=8+(15&(T>>>=4)),l.wbits===0)l.wbits=r;else if(r>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<r,_.adler=l.check=1,l.mode=512&T?10:12,R=T=0;break;case 2:for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(l.flags=T,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=T>>8&1),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0,l.mode=3;case 3:for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.head&&(l.head.time=T),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,C[2]=T>>>16&255,C[3]=T>>>24&255,l.check=a(l.check,C,4,0)),R=T=0,l.mode=4;case 4:for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.head&&(l.head.xflags=255&T,l.head.os=T>>8),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0,l.mode=5;case 5:if(1024&l.flags){for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.length=T,l.head&&(l.head.extra_len=T),512&l.flags&&(C[0]=255&T,C[1]=T>>>8&255,l.check=a(l.check,C,2,0)),R=T=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(P<(W=l.length)&&(W=P),W&&(l.head&&(r=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),s.arraySet(l.head.extra,H,F,W,r)),512&l.flags&&(l.check=a(l.check,H,W,F)),P-=W,F+=W,l.length-=W),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(P===0)break t;for(W=0;r=H[F+W++],l.head&&r&&l.length<65536&&(l.head.name+=String.fromCharCode(r)),r&&W<P;);if(512&l.flags&&(l.check=a(l.check,H,W,F)),P-=W,F+=W,r)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(P===0)break t;for(W=0;r=H[F+W++],l.head&&r&&l.length<65536&&(l.head.comment+=String.fromCharCode(r)),r&&W<P;);if(512&l.flags&&(l.check=a(l.check,H,W,F)),P-=W,F+=W,r)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}R=T=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}_.adler=l.check=d(T),R=T=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=rt,_.avail_out=et,_.next_in=F,_.avail_in=P,l.hold=T,l.bits=R,2;_.adler=l.check=1,l.mode=12;case 12:if(O===5||O===6)break t;case 13:if(l.last){T>>>=7&R,R-=7&R,l.mode=27;break}for(;R<3;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}switch(l.last=1&T,R-=1,3&(T>>>=1)){case 0:l.mode=14;break;case 1:if(V(l),l.mode=20,O!==6)break;T>>>=2,R-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}T>>>=2,R-=2;break;case 14:for(T>>>=7&R,R-=7&R;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if((65535&T)!=(T>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&T,R=T=0,l.mode=15,O===6)break t;case 15:l.mode=16;case 16:if(W=l.length){if(P<W&&(W=P),et<W&&(W=et),W===0)break t;s.arraySet(it,H,F,W,rt),P-=W,F+=W,et-=W,rt+=W,l.length-=W;break}l.mode=12;break;case 17:for(;R<14;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(l.nlen=257+(31&T),T>>>=5,R-=5,l.ndist=1+(31&T),T>>>=5,R-=5,l.ncode=4+(15&T),T>>>=4,R-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;R<3;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.lens[j[l.have++]]=7&T,T>>>=3,R-=3}for(;l.have<19;)l.lens[j[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,z={bits:l.lenbits},M=m(0,l.lens,0,19,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;ot=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(ht<16)T>>>=st,R-=st,l.lens[l.have++]=ht;else{if(ht===16){for(v=st+2;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T>>>=st,R-=st,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}r=l.lens[l.have-1],W=3+(3&T),T>>>=2,R-=2}else if(ht===17){for(v=st+3;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}R-=st,r=0,W=3+(7&(T>>>=st)),T>>>=3,R-=3}else{for(v=st+7;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}R-=st,r=0,W=11+(127&(T>>>=st)),T>>>=7,R-=7}if(l.have+W>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;W--;)l.lens[l.have++]=r}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,z={bits:l.lenbits},M=m(y,l.lens,0,l.nlen,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,z={bits:l.distbits},M=m(p,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,z),l.distbits=z.bits,M){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,O===6)break t;case 20:l.mode=21;case 21:if(6<=P&&258<=et){_.next_out=rt,_.avail_out=et,_.next_in=F,_.avail_in=P,l.hold=T,l.bits=R,u(_,G),rt=_.next_out,it=_.output,et=_.avail_out,F=_.next_in,H=_.input,P=_.avail_in,T=l.hold,R=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;ot=(f=l.lencode[T&(1<<l.lenbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(ot&&!(240&ot)){for(ut=st,kt=ot,vt=ht;ot=(f=l.lencode[vt+((T&(1<<ut+kt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}T>>>=ut,R-=ut,l.back+=ut}if(T>>>=st,R-=st,l.back+=st,l.length=ht,ot===0){l.mode=26;break}if(32&ot){l.back=-1,l.mode=12;break}if(64&ot){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&ot,l.mode=22;case 22:if(l.extra){for(v=l.extra;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.length+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;ot=(f=l.distcode[T&(1<<l.distbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(!(240&ot)){for(ut=st,kt=ot,vt=ht;ot=(f=l.distcode[vt+((T&(1<<ut+kt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}T>>>=ut,R-=ut,l.back+=ut}if(T>>>=st,R-=st,l.back+=st,64&ot){_.msg="invalid distance code",l.mode=30;break}l.offset=ht,l.extra=15&ot,l.mode=24;case 24:if(l.extra){for(v=l.extra;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}l.offset+=T&(1<<l.extra)-1,T>>>=l.extra,R-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(et===0)break t;if(W=G-et,l.offset>W){if((W=l.offset-W)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}lt=W>l.wnext?(W-=l.wnext,l.wsize-W):l.wnext-W,W>l.length&&(W=l.length),ft=l.window}else ft=it,lt=rt-l.offset,W=l.length;for(et<W&&(W=et),et-=W,l.length-=W;it[rt++]=ft[lt++],--W;);l.length===0&&(l.mode=21);break;case 26:if(et===0)break t;it[rt++]=l.length,et--,l.mode=21;break;case 27:if(l.wrap){for(;R<32;){if(P===0)break t;P--,T|=H[F++]<<R,R+=8}if(G-=et,_.total_out+=G,l.total+=G,G&&(_.adler=l.check=l.flags?a(l.check,it,G,rt-G):o(l.check,it,G,rt-G)),G=et,(l.flags?T:d(T))!==l.check){_.msg="incorrect data check",l.mode=30;break}R=T=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}R=T=0}l.mode=29;case 29:M=1;break t;case 30:M=-3;break t;case 31:return-4;case 32:default:return h}return _.next_out=rt,_.avail_out=et,_.next_in=F,_.avail_in=P,l.hold=T,l.bits=R,(l.wsize||G!==_.avail_out&&l.mode<30&&(l.mode<27||O!==4))&&Q(_,_.output,_.next_out,G-_.avail_out)?(l.mode=31,-4):(X-=_.avail_in,G-=_.avail_out,_.total_in+=X,_.total_out+=G,l.total+=G,l.wrap&&G&&(_.adler=l.check=l.flags?a(l.check,it,G,_.next_out-G):o(l.check,it,G,_.next_out-G)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(X==0&&G===0||O===4)&&M===b&&(M=-5),M)},n.inflateEnd=function(_){if(!_||!_.state)return h;var O=_.state;return O.window&&(O.window=null),_.state=null,b},n.inflateGetHeader=function(_,O){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=O).done=!1,b):h},n.inflateSetDictionary=function(_,O){var l,H=O.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?h:l.mode===11&&o(1,O,H,0)!==l.check?-3:Q(_,O,H,H)?(l.mode=31,-4):(l.havedict=1,b):h},n.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,n){var s=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],u=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],m=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(y,p,b,h,w,c,g,d){var k,S,A,E,q,D,N,B,V,Q=d.bits,_=0,O=0,l=0,H=0,it=0,F=0,rt=0,P=0,et=0,T=0,R=null,X=0,G=new s.Buf16(16),W=new s.Buf16(16),lt=null,ft=0;for(_=0;_<=15;_++)G[_]=0;for(O=0;O<h;O++)G[p[b+O]]++;for(it=Q,H=15;1<=H&&G[H]===0;H--);if(H<it&&(it=H),H===0)return w[c++]=20971520,w[c++]=20971520,d.bits=1,0;for(l=1;l<H&&G[l]===0;l++);for(it<l&&(it=l),_=P=1;_<=15;_++)if(P<<=1,(P-=G[_])<0)return-1;if(0<P&&(y===0||H!==1))return-1;for(W[1]=0,_=1;_<15;_++)W[_+1]=W[_]+G[_];for(O=0;O<h;O++)p[b+O]!==0&&(g[W[p[b+O]]++]=O);if(D=y===0?(R=lt=g,19):y===1?(R=o,X-=257,lt=a,ft-=257,256):(R=u,lt=m,-1),_=l,q=c,rt=O=T=0,A=-1,E=(et=1<<(F=it))-1,y===1&&852<et||y===2&&592<et)return 1;for(;;){for(N=_-rt,V=g[O]<D?(B=0,g[O]):g[O]>D?(B=lt[ft+g[O]],R[X+g[O]]):(B=96,0),k=1<<_-rt,l=S=1<<F;w[q+(T>>rt)+(S-=k)]=N<<24|B<<16|V|0,S!==0;);for(k=1<<_-1;T&k;)k>>=1;if(k!==0?(T&=k-1,T+=k):T=0,O++,--G[_]==0){if(_===H)break;_=p[b+g[O]]}if(it<_&&(T&E)!==A){for(rt===0&&(rt=it),q+=l,P=1<<(F=_-rt);F+rt<H&&!((P-=G[F+rt])<=0);)F++,P<<=1;if(et+=1<<F,y===1&&852<et||y===2&&592<et)return 1;w[A=T&E]=it<<24|F<<16|q-c|0}}return T!==0&&(w[q+T]=_-rt<<24|64<<16|0),d.bits=it,0}},{"../utils/common":41}],51:[function(e,i,n){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,n){var s=e("../utils/common"),o=0,a=1;function u(f){for(var C=f.length;0<=--C;)f[C]=0}var m=0,y=29,p=256,b=p+1+y,h=30,w=19,c=2*b+1,g=15,d=16,k=7,S=256,A=16,E=17,q=18,D=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(b+2));u(Q);var _=new Array(2*h);u(_);var O=new Array(512);u(O);var l=new Array(256);u(l);var H=new Array(y);u(H);var it,F,rt,P=new Array(h);function et(f,C,j,I,L){this.static_tree=f,this.extra_bits=C,this.extra_base=j,this.elems=I,this.max_length=L,this.has_stree=f&&f.length}function T(f,C){this.dyn_tree=f,this.max_code=0,this.stat_desc=C}function R(f){return f<256?O[f]:O[256+(f>>>7)]}function X(f,C){f.pending_buf[f.pending++]=255&C,f.pending_buf[f.pending++]=C>>>8&255}function G(f,C,j){f.bi_valid>d-j?(f.bi_buf|=C<<f.bi_valid&65535,X(f,f.bi_buf),f.bi_buf=C>>d-f.bi_valid,f.bi_valid+=j-d):(f.bi_buf|=C<<f.bi_valid&65535,f.bi_valid+=j)}function W(f,C,j){G(f,j[2*C],j[2*C+1])}function lt(f,C){for(var j=0;j|=1&f,f>>>=1,j<<=1,0<--C;);return j>>>1}function ft(f,C,j){var I,L,U=new Array(g+1),Y=0;for(I=1;I<=g;I++)U[I]=Y=Y+j[I-1]<<1;for(L=0;L<=C;L++){var Z=f[2*L+1];Z!==0&&(f[2*L]=lt(U[Z]++,Z))}}function st(f){var C;for(C=0;C<b;C++)f.dyn_ltree[2*C]=0;for(C=0;C<h;C++)f.dyn_dtree[2*C]=0;for(C=0;C<w;C++)f.bl_tree[2*C]=0;f.dyn_ltree[2*S]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function ot(f){8<f.bi_valid?X(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function ht(f,C,j,I){var L=2*C,U=2*j;return f[L]<f[U]||f[L]===f[U]&&I[C]<=I[j]}function ut(f,C,j){for(var I=f.heap[j],L=j<<1;L<=f.heap_len&&(L<f.heap_len&&ht(C,f.heap[L+1],f.heap[L],f.depth)&&L++,!ht(C,I,f.heap[L],f.depth));)f.heap[j]=f.heap[L],j=L,L<<=1;f.heap[j]=I}function kt(f,C,j){var I,L,U,Y,Z=0;if(f.last_lit!==0)for(;I=f.pending_buf[f.d_buf+2*Z]<<8|f.pending_buf[f.d_buf+2*Z+1],L=f.pending_buf[f.l_buf+Z],Z++,I===0?W(f,L,C):(W(f,(U=l[L])+p+1,C),(Y=D[U])!==0&&G(f,L-=H[U],Y),W(f,U=R(--I),j),(Y=N[U])!==0&&G(f,I-=P[U],Y)),Z<f.last_lit;);W(f,S,C)}function vt(f,C){var j,I,L,U=C.dyn_tree,Y=C.stat_desc.static_tree,Z=C.stat_desc.has_stree,J=C.stat_desc.elems,at=-1;for(f.heap_len=0,f.heap_max=c,j=0;j<J;j++)U[2*j]!==0?(f.heap[++f.heap_len]=at=j,f.depth[j]=0):U[2*j+1]=0;for(;f.heap_len<2;)U[2*(L=f.heap[++f.heap_len]=at<2?++at:0)]=1,f.depth[L]=0,f.opt_len--,Z&&(f.static_len-=Y[2*L+1]);for(C.max_code=at,j=f.heap_len>>1;1<=j;j--)ut(f,U,j);for(L=J;j=f.heap[1],f.heap[1]=f.heap[f.heap_len--],ut(f,U,1),I=f.heap[1],f.heap[--f.heap_max]=j,f.heap[--f.heap_max]=I,U[2*L]=U[2*j]+U[2*I],f.depth[L]=(f.depth[j]>=f.depth[I]?f.depth[j]:f.depth[I])+1,U[2*j+1]=U[2*I+1]=L,f.heap[1]=L++,ut(f,U,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(nt,mt){var Ht,xt,qt,ct,he,yi,St=mt.dyn_tree,sr=mt.max_code,Rr=mt.stat_desc.static_tree,Tr=mt.stat_desc.has_stree,zr=mt.stat_desc.extra_bits,nr=mt.stat_desc.extra_base,jt=mt.stat_desc.max_length,de=0;for(ct=0;ct<=g;ct++)nt.bl_count[ct]=0;for(St[2*nt.heap[nt.heap_max]+1]=0,Ht=nt.heap_max+1;Ht<c;Ht++)jt<(ct=St[2*St[2*(xt=nt.heap[Ht])+1]+1]+1)&&(ct=jt,de++),St[2*xt+1]=ct,sr<xt||(nt.bl_count[ct]++,he=0,nr<=xt&&(he=zr[xt-nr]),yi=St[2*xt],nt.opt_len+=yi*(ct+he),Tr&&(nt.static_len+=yi*(Rr[2*xt+1]+he)));if(de!==0){do{for(ct=jt-1;nt.bl_count[ct]===0;)ct--;nt.bl_count[ct]--,nt.bl_count[ct+1]+=2,nt.bl_count[jt]--,de-=2}while(0<de);for(ct=jt;ct!==0;ct--)for(xt=nt.bl_count[ct];xt!==0;)sr<(qt=nt.heap[--Ht])||(St[2*qt+1]!==ct&&(nt.opt_len+=(ct-St[2*qt+1])*St[2*qt],St[2*qt+1]=ct),xt--)}}(f,C),ft(U,at,f.bl_count)}function r(f,C,j){var I,L,U=-1,Y=C[1],Z=0,J=7,at=4;for(Y===0&&(J=138,at=3),C[2*(j+1)+1]=65535,I=0;I<=j;I++)L=Y,Y=C[2*(I+1)+1],++Z<J&&L===Y||(Z<at?f.bl_tree[2*L]+=Z:L!==0?(L!==U&&f.bl_tree[2*L]++,f.bl_tree[2*A]++):Z<=10?f.bl_tree[2*E]++:f.bl_tree[2*q]++,U=L,at=(Z=0)===Y?(J=138,3):L===Y?(J=6,3):(J=7,4))}function M(f,C,j){var I,L,U=-1,Y=C[1],Z=0,J=7,at=4;for(Y===0&&(J=138,at=3),I=0;I<=j;I++)if(L=Y,Y=C[2*(I+1)+1],!(++Z<J&&L===Y)){if(Z<at)for(;W(f,L,f.bl_tree),--Z!=0;);else L!==0?(L!==U&&(W(f,L,f.bl_tree),Z--),W(f,A,f.bl_tree),G(f,Z-3,2)):Z<=10?(W(f,E,f.bl_tree),G(f,Z-3,3)):(W(f,q,f.bl_tree),G(f,Z-11,7));U=L,at=(Z=0)===Y?(J=138,3):L===Y?(J=6,3):(J=7,4)}}u(P);var z=!1;function v(f,C,j,I){G(f,(m<<1)+(I?1:0),3),function(L,U,Y,Z){ot(L),X(L,Y),X(L,~Y),s.arraySet(L.pending_buf,L.window,U,Y,L.pending),L.pending+=Y}(f,C,j)}n._tr_init=function(f){z||(function(){var C,j,I,L,U,Y=new Array(g+1);for(L=I=0;L<y-1;L++)for(H[L]=I,C=0;C<1<<D[L];C++)l[I++]=L;for(l[I-1]=L,L=U=0;L<16;L++)for(P[L]=U,C=0;C<1<<N[L];C++)O[U++]=L;for(U>>=7;L<h;L++)for(P[L]=U<<7,C=0;C<1<<N[L]-7;C++)O[256+U++]=L;for(j=0;j<=g;j++)Y[j]=0;for(C=0;C<=143;)Q[2*C+1]=8,C++,Y[8]++;for(;C<=255;)Q[2*C+1]=9,C++,Y[9]++;for(;C<=279;)Q[2*C+1]=7,C++,Y[7]++;for(;C<=287;)Q[2*C+1]=8,C++,Y[8]++;for(ft(Q,b+1,Y),C=0;C<h;C++)_[2*C+1]=5,_[2*C]=lt(C,5);it=new et(Q,D,p+1,b,g),F=new et(_,N,0,h,g),rt=new et(new Array(0),B,0,w,k)}(),z=!0),f.l_desc=new T(f.dyn_ltree,it),f.d_desc=new T(f.dyn_dtree,F),f.bl_desc=new T(f.bl_tree,rt),f.bi_buf=0,f.bi_valid=0,st(f)},n._tr_stored_block=v,n._tr_flush_block=function(f,C,j,I){var L,U,Y=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(Z){var J,at=4093624447;for(J=0;J<=31;J++,at>>>=1)if(1&at&&Z.dyn_ltree[2*J]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(J=32;J<p;J++)if(Z.dyn_ltree[2*J]!==0)return a;return o}(f)),vt(f,f.l_desc),vt(f,f.d_desc),Y=function(Z){var J;for(r(Z,Z.dyn_ltree,Z.l_desc.max_code),r(Z,Z.dyn_dtree,Z.d_desc.max_code),vt(Z,Z.bl_desc),J=w-1;3<=J&&Z.bl_tree[2*V[J]+1]===0;J--);return Z.opt_len+=3*(J+1)+5+5+4,J}(f),L=f.opt_len+3+7>>>3,(U=f.static_len+3+7>>>3)<=L&&(L=U)):L=U=j+5,j+4<=L&&C!==-1?v(f,C,j,I):f.strategy===4||U===L?(G(f,2+(I?1:0),3),kt(f,Q,_)):(G(f,4+(I?1:0),3),function(Z,J,at,nt){var mt;for(G(Z,J-257,5),G(Z,at-1,5),G(Z,nt-4,4),mt=0;mt<nt;mt++)G(Z,Z.bl_tree[2*V[mt]+1],3);M(Z,Z.dyn_ltree,J-1),M(Z,Z.dyn_dtree,at-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,Y+1),kt(f,f.dyn_ltree,f.dyn_dtree)),st(f),I&&ot(f)},n._tr_tally=function(f,C,j){return f.pending_buf[f.d_buf+2*f.last_lit]=C>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&C,f.pending_buf[f.l_buf+f.last_lit]=255&j,f.last_lit++,C===0?f.dyn_ltree[2*j]++:(f.matches++,C--,f.dyn_ltree[2*(l[j]+p+1)]++,f.dyn_dtree[2*R(C)]++),f.last_lit===f.lit_bufsize-1},n._tr_align=function(f){G(f,2,3),W(f,S,Q),function(C){C.bi_valid===16?(X(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,i,n){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,n){(function(s){(function(o,a){if(!o.setImmediate){var u,m,y,p,b=1,h={},w=!1,c=o.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(o);g=g&&g.setTimeout?g:o,u={}.toString.call(o.process)==="[object process]"?function(A){process.nextTick(function(){k(A)})}:function(){if(o.postMessage&&!o.importScripts){var A=!0,E=o.onmessage;return o.onmessage=function(){A=!1},o.postMessage("","*"),o.onmessage=E,A}}()?(p="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(A){o.postMessage(p+A,"*")}):o.MessageChannel?((y=new MessageChannel).port1.onmessage=function(A){k(A.data)},function(A){y.port2.postMessage(A)}):c&&"onreadystatechange"in c.createElement("script")?(m=c.documentElement,function(A){var E=c.createElement("script");E.onreadystatechange=function(){k(A),E.onreadystatechange=null,m.removeChild(E),E=null},m.appendChild(E)}):function(A){setTimeout(k,0,A)},g.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var E=new Array(arguments.length-1),q=0;q<E.length;q++)E[q]=arguments[q+1];var D={callback:A,args:E};return h[b]=D,u(b),b++},g.clearImmediate=d}function d(A){delete h[A]}function k(A){if(w)setTimeout(k,0,A);else{var E=h[A];if(E){w=!0;try{(function(q){var D=q.callback,N=q.args;switch(N.length){case 0:D();break;case 1:D(N[0]);break;case 2:D(N[0],N[1]);break;case 3:D(N[0],N[1],N[2]);break;default:D.apply(a,N)}})(E)}finally{d(A),w=!1}}}}function S(A){A.source===o&&typeof A.data=="string"&&A.data.indexOf(p)===0&&k(+A.data.slice(p.length))}})(typeof self>"u"?s===void 0?this:s:self)}).call(this,typeof Et<"u"?Et:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Lr);var os=Lr.exports;const rr=Er(os),br="Blech Listen",zt="metalSheetLists",hi=class hi extends Tt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onMetalSheetList=t=>{if(!t)throw"no data!";for(;this.children.length>3;)this.removeChild(this.lastChild);for(const e of Zr(t))this.appendChild(ue({primary:`
              ${e.format}
              <span style="font-size: 0.85rem;">
                ${e.data.press>-1?"[P"+e.data.press+"]":""}
              </span>
            `,secondary:`${e.toolID}`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(tt.metalSheetLists,n=>{n.ui.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{confirm(`Delete "${e.format} - ${e.toolID} - ${e.date}"`)&&this.uiStore.ui.update(zt,i=>{const n=gt(e);return i.filter(s=>gt(s)!==n)})}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:zt,getKey:gt})},this.render()}render(){this.innerHTML=$`
      <pg-drawer-item-import
        storegistkey="${tt.metalSheetLists}"
        title="${br}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
      <pg-drawer-item-new type="${zt}"></pg-drawer-item-new>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Yr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(zt,[])}),t.ui.setExportHandler(async()=>{const e=new rr;for(const n of this.uiStore.ui.get(zt)){const s=dr(n),o=JSON.stringify(n);e.file(s,o)}const i=await e.generateAsync({type:"blob"});ir.saveAs(i,`${tt.metalSheetLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=br,this.cleanup.add(this.uiStore.ui.on("gist",t=>{vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:tt.metalSheetLists,storeDataKey:zt,getFileName:dr,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(zt,this.onMetalSheetList))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(hi,"register",()=>{customElements.define("pg-drawer-group-metal-sheet-lists",hi)});let Pi=hi;const vr="Vis",Ot="vis",di=class di extends Tt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Rt,this.onVis=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ue({primary:`${e.title}`,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(tt.vis,n=>{n.ui.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(Ot,i=>{const n=pe(e);return i.filter(s=>pe(s)!==n)})}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Ot,getKey:pe})},this.render()}render(){this.innerHTML=$`
      <pg-drawer-item-import
        storegistkey="${tt.vis}"
        title="${vr}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Jr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Ot,[])}),t.ui.setExportHandler(async()=>{const e=new rr;for(const n of this.uiStore.ui.get(Ot)){const s=fr(n),o=JSON.stringify(n);e.file(s,o)}const i=await e.generateAsync({type:"blob"});ir.saveAs(i,`${tt.vis}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=vr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:tt.vis,storeDataKey:Ot,getFileName:fr,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(Ot,this.onVis))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(di,"register",()=>{customElements.define("pg-drawer-group-vis",di)});let Ui=di;const yr="Vis Data",Bt="visData",fi=class fi extends Tt{constructor(){super(),this.cleanup=new Rt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onVisData=t=>{if(!t)throw"no data!";for(;this.children.length>3;)this.removeChild(this.lastChild);for(let e of Sr(t))e=tr(e),this.appendChild(ue({primary:`${e.title}`,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(tt.visData,n=>{n.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(Bt,i=>i.filter(n=>n.title!==e.title))}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Bt,getKey:bt})},this.render()}render(){this.innerHTML=$`
      <pg-drawer-item-import
        storegistkey="${tt.visData}"
        title="${yr}"
      ></pg-drawer-item-import>

      <pg-drawer-item-new type="${Bt}"></pg-drawer-item-new>

      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Qr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Bt,[])}),t.ui.setExportHandler(async()=>{const e=new rr;for(const n of this.uiStore.ui.get(Bt)){const s=is(n),o=JSON.stringify(n);e.file(s,o)}const i=await e.generateAsync({type:"blob"});ir.saveAs(i,`${tt.visData}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=yr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{vi(this.querySelector("drawer-gist-item"),t,{storeGistKey:tt.visData,storeDataKey:Bt,getFileName:bt,onUpdate:this.onUpdate})}),this.uiStore.ui.on(Bt,this.onVisData))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(fi,"register",()=>{customElements.define("pg-drawer-group-vis-data",fi)});let Vi=fi;const as="Vis Listen",wi="visLists",pi=class pi extends Tt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Rt,this.onVisLists=t=>{if(!t)throw"no data!";for(;this.children.length>0;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ue({primary:e.name,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(tt.visLists,n=>{n.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:e.allowDeletion?()=>{this.uiStore.ui.update(wi,i=>{const n=Ft(e);return i.filter(s=>Ft(s)!==n)})}:null}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:wi,getKey:Ft})},this.render()}render(){this.innerHTML=$``}connectedCallback(){super.connectedCallback(),this.ui.title=as,this.cleanup.add(this.uiStore.ui.on(wi,this.onVisLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(pi,"register",()=>{customElements.define("pg-drawer-group-vis-lists",pi)});let Zi=pi;const ls=$`
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
`,se=class se extends Dt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.ui={...this.ui,root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=$`
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
            ${ls}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,i){switch(t){case"disabled":this.setDisabled(i);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new ve(this.ui.title);t.ui.events.on("submit",async e=>{if(!this.onValidate)throw new Error("onValidate callback missing");if(!this.onUpdate)throw new Error("onUpdate callback missing");if(!e){Ur(async s=>{let o=null;try{o=await this.onValidate(s,null)}catch(a){alert(`Validation failed: ${a}`);return}o!==null&&await this.onUpdate(o)});return}if(this.ui.storegistkey===null)throw new Error("gist-key missing");const i=new er(e);let n;try{n=await i.get(),this.uiStore.ui.update("gist",s=>(s[`${this.ui.storegistkey}`]={id:e,revision:n.revision},s))}catch(s){alert(`Something went wrong: ${s}`);return}try{for(const s in n.files)n.files[s].content=await this.onValidate(n.files[s].content,i.id)}catch(s){alert(`Validation failed: ${s}`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const s of Object.values(n.files))await this.onUpdate(s.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};K(se,"register",()=>{customElements.define("pg-drawer-item-import",se)}),K(se,"observedAttributes",["disabled"]);let Wi=se;const mi=class mi extends Dt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=$`
      <ui-button variant="full" color="secondary">Neue Liste</ui-button>
    `,this.querySelector("ui-button").ui.events.on("click",()=>{switch(this.getAttribute("type")){case"metal-sheet-lists":case"metalSheetLists":this.newMetalSheetLists();break;case"vis-data":case"visData":this.newVisData();break;default:return}})}newMetalSheetLists(){const t=new le("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",i=>(i=[...i,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],i))}),document.body.appendChild(t),t.ui.open(!0)}newVisData(){const t=new ye;t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.uiStore.ui.update("visData",i=>(i.unshift({...e,data:[]}),i))}),document.body.appendChild(t),t.ui.open(!0)}};K(mi,"register",()=>{customElements.define("pg-drawer-item-new",mi)});let Ki=mi;const ne=class ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.ui={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=$`
      <style>
        * {
          box-sizing: border-box;
        }

        :host {
          display: none;
          position: absolute !important;
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
    `,this.input=this.shadowRoot.querySelector("ui-search")}disconnectedCallback(){this.setActive(null)}attributeChangedCallback(t,e,i){switch(t){case"title":this.setTitle(i);break;case"active":this.setActive(i);break;case"prefix":this.setPrefix(i);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--search-bar-height","0rem"):(this.stackLayout.style.setProperty("--search-bar-height","4.5rem"),this.ui.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};K(ne,"register",()=>{customElements.define("search-bar",ne)}),K(ne,"observedAttributes",["title","active","prefix"]);let Gi=ne;const gi=class gi extends HTMLElement{constructor(){super(),this.cleanup=new Rt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=$`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){const t=new Date;this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visLists",[{date:t.getTime(),name:"Presse 0",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 2",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 3",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 4",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 5",allowDeletion:!1,data:[]}],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1),this.uiStore.ui.set("bookmark",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case tt.alertLists:case tt.alert:case tt.metalSheetLists:case tt.vis:case tt.product:case tt.visLists:case tt.visData:case tt.visDataEntry:this.resetAppBar()}switch(t.ui.name){case tt.alertLists:this.pgAppBar.items.search.ui.show();break;case tt.metalSheetLists:this.pgAppBar.items.edit.ui.show();break;case tt.product:this.pgAppBar.items.bookmark.ui.show();break}}),this.stackLayout.ui.register(tt.alertLists,()=>new _e),this.stackLayout.ui.register(tt.metalSheetLists,()=>new Ee),this.stackLayout.ui.register(tt.vis,()=>new Le),this.stackLayout.ui.register(tt.visLists,()=>new ze),this.stackLayout.ui.register(tt.visData,()=>new Re),this.stackLayout.ui.register(tt.product,()=>new Ae),this.stackLayout.ui.register(tt.visDataEntry,()=>new Te)}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide(),this.pgAppBar.items.bookmark.ui.hide()}async onAppBarTitle(t){this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};K(gi,"register",()=>{customElements.define("pg-app",gi)});let Yi=gi;const us=$`
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
        d="M5 19.6693V4C5 3.44772 5.44772 3 6 3H18C18.5523 3 19 3.44772 19 4V19.6693C19 20.131 18.4277 20.346 18.1237 19.9985L12 13L5.87629 19.9985C5.57227 20.346 5 20.131 5 19.6693Z"
        stroke="currentColor"
        stroke-linejoin="round"
      ></path>
    </g>
  </svg>
`,cs=$`
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
`,hs=$`
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
`,ds=$`
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
`,fs=$`
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
`,bi=class bi extends me{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=$`
      <ui-app-bar-item name="menu" slot="left">
        <ui-icon-button ghost> ${hs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="back" slot="left" style="display: none">
        <ui-icon-button ghost> ${cs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="title" slot="center">
        <h4 class="title" style="white-space: nowrap;"></h4>
      </ui-app-bar-item>

      <ui-app-bar-item name="edit" slot="right">
        <ui-icon-button ghost> ${ds} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="share" slot="right">
        <ui-icon-button ghost> ${fs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="search" slot="right">
        <ui-icon-button ghost> ${kr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="bookmark" slot="right">
        <ui-icon-button ghost> ${us} </ui-icon-button>
      </ui-app-bar-item>
    `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem(),bookmark:this.createBookmark()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top"),this.uiStore.ui.events.on("bookmark",t=>{t.active?this.items.bookmark.ui.child.style.color="orange":this.items.bookmark.ui.child.style.color=null})}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const i=this.uiStore.ui.get("edit").onClick;typeof i=="function"&&i()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var s;const i=((s=this.uiStore.ui.get("share"))==null?void 0:s())||null;if(!i)return;const n=async()=>{const o=document.createElement("a");for(const a of i.files)o.download=a.name,o.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),o.click()};if(!navigator.canShare)return await n();if(navigator.canShare(i)){try{await navigator.share(i)}catch{await n()}return}await n()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",i=>({...i,active:!i.active}))),t}createBookmark(){return this.querySelector('[name="bookmark"]')}};K(bi,"register",()=>{customElements.define("pg-app-bar",bi)});let Ji=bi;{const x=localStorage.getItem("pg-vis:version");x!==Nt&&(localStorage.setItem("pg-vis:version",Nt),localStorage.setItem("pg-vis:build",ss.toString()),console.log(`Updated from "${x}" to version "${Nt}"`))}$r({onRegistered(x){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${Nt}`),await x.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});jr();ke.register();ve.register();ye.register();we.register();xe.register();_e.register();le.register();Se.register();Ce.register();ji.register();Ee.register();Ae.register();Le.register();Re.register();Te.register();ze.register();Fi.register();Ni.register();Ki.register();Wi.register();$i.register();Pi.register();Ui.register();Zi.register();Vi.register();Ii.register();Gi.register();Ji.register();Yi.register();
