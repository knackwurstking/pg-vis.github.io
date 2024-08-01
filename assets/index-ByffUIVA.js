var yr=Object.defineProperty;var Wi=_=>{throw TypeError(_)};var wr=(_,t,e)=>t in _?yr(_,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):_[t]=e;var K=(_,t,e)=>wr(_,typeof t!="symbol"?t+"":t,e),kr=(_,t,e)=>t.has(_)||Wi("Cannot "+e);var xt=(_,t,e)=>(kr(_,t,"read from private field"),e?e.call(_):t.get(_)),Ki=(_,t,e)=>t.has(_)?Wi("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(_):t.set(_,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const Ji={onDragStart:null,onDragging:null,onDragEnd:null};function _r(_,t={}){t={...Ji,...t};const e=()=>{const r=[..._.parentNode.children].indexOf(_);_.draggable=!0,_.ondragstart=l=>{l.dataTransfer.effectAllowed="move",l.dataTransfer.dropEffect="move",l.dataTransfer.setData("text/plain",r.toString()),t.onDragStart&&t.onDragStart(r)},_.ondragover=l=>(l.preventDefault(),!1),_.ondragenter=l=>{l.preventDefault(),t.onDragging&&t.onDragging(r)},_.ondrop=l=>{l.preventDefault(),l.dataTransfer.dropEffect="move";const n=parseInt(l.dataTransfer.getData("text/plain"),10);t.onDragEnd&&t.onDragEnd(n,r)}},s=()=>{_.draggable=!1,_.ondragstart=null,_.ondragover=null,_.ondragenter=null,_.ondrop=null};return e(),{update(o){t={...Ji,...o},s(),e()},destroy:s}}var vt;class pt{constructor(){Ki(this,vt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return xt(this,vt)[t]||(xt(this,vt)[t]=[]),xt(this,vt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!xt(this,vt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let s=!1,o=0;for(const r of xt(this,vt)[t])r===e&&(xt(this,vt)[t].splice(o,1),s=!0),o++;if(!s)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(xt(this,vt)[t])for(const s of xt(this,vt)[t])s(e);return this}}vt=new WeakMap;function Gi(_,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,_.currentTarget.appendChild(e);const s=_.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${s.height/2}px`,e.style.left=`${s.width/2}px`):(e.style.top=`${_.clientY-s.top}px`,e.style.left=`${_.clientX-s.left}px`);const o=Math.max(s.width,s.height)*.02;return e.style.transform=`scale(${o}) translate(0, 0)`,e}function Yi(_){_&&(_.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&_.remove()}),_.style.opacity="0")}const xr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function zt(_,t={}){t={...xr,...t};let e;const s=r=>{e=Gi(r,t)},o=()=>{Yi(e)};return _.classList.add("ripple-container"),_.style.overflow="hidden",t.useClick===!0?_.addEventListener("click",r=>{e=Gi(r,t),Yi(e)}):(_.addEventListener("pointerdown",s),_.addEventListener("pointerup",o),_.addEventListener("pointerleave",o)),()=>{_.classList.remove("ripple-container"),_.removeEventListener("pointerdown",s),_.removeEventListener("pointerup",o),_.removeEventListener("pointerleave",o)}}const Z=String.raw;class Lt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Ce=class Ce extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ce,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",Ce)});let ce=Ce;const Ae=class Ae extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ae,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Ae)});let hi=Ae;const It=class It extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=zt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=zt(this,{centered:!0}));break}}};K(It,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",It)}),K(It,"observedAttributes",["noripple"]);let di=It;const qt=class qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRippleCallback=null,this.ui={root:this,events:new pt,get noripple(){return this.root.hasAttribute("noripple")},set noripple(t){if(!t){this.root.removeAttribute("noripple");return}this.root.setAttribute("noripple","")},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=zt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"noripple":s!==null?typeof this.removeRippleCallback=="function"&&(this.removeRippleCallback(),this.removeRippleCallback=null):typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=zt(this,{centered:!0}));break}}};K(qt,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",qt)}),K(qt,"observedAttributes",["noripple"]);let fi=qt;const Ee=class Ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Ee,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",Ee)});let pi=Ee;const Sr=Z`
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
`,Ft=class Ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new Lt,this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){this.root.setAttribute("title",t||"")},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(t){if(!t){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},open(t=!1,e=!0){const s=this.root.shadowRoot.querySelector("dialog"),o=s.inert;s.inert=e,t?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=o},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=Z`
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
              ${Sr}
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
    `;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const s=this.shadowRoot.querySelector("dialog"),o=r=>r.preventDefault();s.addEventListener("cancel",o),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),s.removeEventListener("cancel",o)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":const o=this.shadowRoot.querySelector('[name="title"]');o.innerHTML=s||"";break}}};K(Ft,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",Ft)}),K(Ft,"observedAttributes",["title"]);let Ct=Ft;const Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"open":s!==null?this.ui.events.dispatch("open",this):this.ui.events.dispatch("close",this);break}}};K(Nt,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",Nt)}),K(Nt,"observedAttributes",["open"]);let he=Nt;const ar=Z`
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
`,Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get fold(){return this.root.hasAttribute("fold")},set fold(t){if(!t){this.root.removeAttribute("fold");return}this.root.setAttribute("fold","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
        <ui-drawer-group-item role="button">
          <ui-flex-grid-row>
            <ui-flex-grid-item class="title"></ui-flex-grid-item>

            <ui-flex-grid-item class="icon" flex="0">
              <ui-svg style="width: 2.5rem; height: 2.5rem;">
                ${ar}
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
        `}};K(Pt,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Pt)}),K(Pt,"observedAttributes",["title"]);let Et=Pt;const Le=class Le extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(Le,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",Le)});let Bt=Le;const $t=class $t extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get flex(){return this.root.getAttribute("flex")},set flex(t){if(!t){this.root.removeAttribute("flex");return}this.root.setAttribute("flex",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
      <style name="flex">
        :host {
          flex: 1;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"flex":const o=this.shadowRoot.querySelector('style[name="flex"]');o.textContent=`
                    :host {
                        flex: ${s||1};
                    }
                `;break}}};K($t,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",$t)}),K($t,"observedAttributes",["flex"]);let dt=$t;const Ut=class Ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const o=this.shadowRoot.querySelector('style[name="gap"]');o.textContent=`
                    :host > ::slotted(*) {
                        margin: 0 ${s||0} !important;
                    }
                `;break}}};K(Ut,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",Ut)}),K(Ut,"observedAttributes",["gap"]);let de=Ut;const Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get gap(){return this.root.getAttribute("gap")},set gap(t){if(!t){this.root.removeAttribute("gap");return}this.root.setAttribute("gap",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"gap":const o=this.shadowRoot.querySelector('style[name="gap"]');o.textContent=`
                    :host > ::slotted(*) {
                        margin: ${s} 0 !important;
                    }
                `;break}}};K(Vt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Vt)}),K(Vt,"observedAttributes",["gap"]);let At=Vt;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.removeRipple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.hasAttribute("ripple")},set ripple(t){if(!t){this.root.removeAttribute("ripple");return}this.root.setAttribute("ripple","")},get primary(){return this.root.getAttribute("primary")},set primary(t){if(!t){this.root.removeAttribute("primary");return}this.root.setAttribute("primary",t)},get secondary(){return this.root.getAttribute("primary")},set secondary(t){if(!t){this.root.removeAttribute("secondary");return}this.root.setAttribute("secondary",t)},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"ripple":this.setRipple(s);break;case"primary":this.setPrimary(s);break;case"secondary":this.setSecondary(s);break}}setRipple(t){if(t===null){this.disableRipple();return}this.enableRipple()}setPrimary(t){this.shadowRoot.querySelector("ui-primary").innerHTML=t||""}setSecondary(t){this.shadowRoot.querySelector("ui-secondary").innerHTML=t||""}enableRipple(){if(this.removeRipple||(this.removeRipple=zt(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.removeRipple&&this.removeRipple(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};K(Zt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Zt)}),K(Zt,"observedAttributes",["ripple","secondary","primary"]);let mi=Zt;const Re=class Re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
      <style>
        :host {
          font-size: 1.1rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-primary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(Re,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Re)});let gi=Re;const Te=class Te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
      <style>
        :host {
          font-size: 0.9rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};K(Te,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Te)});let ee=Te;const Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get type(){return this.root.getAttribute("type")},set type(t){if(!t){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.root.shadowRoot.querySelector("input").min},set min(t){this.root.shadowRoot.querySelector("input").min=t},get max(){return this.root.shadowRoot.querySelector("input").max},set max(t){this.root.shadowRoot.querySelector("input").max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `;const t=this.shadowRoot.querySelector("input");t.type=this.getAttribute("type")||"text",t.oninput=()=>{this.ui.events.dispatch("input",t.value)},t.onchange=()=>{this.ui.events.dispatch("change",t.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"type":this.setType(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"min":this.setMin(s);break;case"max":this.setMax(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new ee,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setType(t){this.shadowRoot.querySelector("input").type=t!==null?t:""}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setMin(t){this.shadowRoot.querySelector("input").min=t}setMax(t){this.shadowRoot.querySelector("input").max=t}};K(Wt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Wt)}),K(Wt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let bi=Wt;const ze=class ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};K(ze,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",ze)});let ie=ze;const Be=class Be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof ie)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
        <div class="icon"><ui-svg>${ar}</ui-svg></div>

        <slot></slot>
      </div>
    `;const t=s=>{const o=async r=>{(r.composedPath()||[]).forEach(l=>{l instanceof ie&&([...this.querySelectorAll("ui-select-option")].forEach(n=>n.removeAttribute("selected")),l.setAttribute("selected",""),this.ui.events.dispatch("change",l))})};this.classList.toggle("open")?(s.stopPropagation(),this.addEventListener("click",o)):setTimeout(()=>this.removeEventListener("click",o))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};K(Be,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Be)});let vi=Be;const lr=Z`
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
`,Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new pt,focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get value(){return this.root.shadowRoot.querySelector("input").value},set value(t){this.root.shadowRoot.querySelector("input").value=t},get placeholder(){return this.root.getAttribute("placeholder")},set placeholder(t){if(!t){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.root.hasAttribute("nosubmit")},set nosubmit(t){if(!t){this.root.removeAttribute("nosubmit");return}this.root.setAttribute("nosubmit","")},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.getAttribute("storagekey")},set storagekey(t){if(!t){this.root.removeAttribute("storagekey");return}this.root.setAttribute("storagekey",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
        <ui-icon-button name="submit" ghost>${lr}</ui-icon-button>
      </div>
    `;const t=this.shadowRoot.querySelector('[name="submit"]'),e=this.shadowRoot.querySelector("input");e.type="search",e.addEventListener("keydown",async o=>{this.ui.nosubmit||o.key==="Enter"&&t.click()});let s=null;e.addEventListener("input",async()=>{this.ui.storage&&(s!==null&&clearTimeout(s),s=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,e.value),s=null},250)),this.ui.events.dispatch("input",e.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",e.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"value":this.setValue(s);break;case"placeholder":this.setPlaceholder(s);break;case"invalid":this.setInvalid(s);break;case"nosubmit":this.setNoSubmit(s);break;case"storagekey":this.setStorageKey(s);break}}setTitle(t){let e=this.querySelector('[slot="title"]');!t&&e&&this.removeChild(e),t&&(e||(e=new ee,e.slot="title",this.appendChild(e)),e.innerHTML=t)}setValue(t){this.shadowRoot.querySelector("input").value=t}setPlaceholder(t){this.shadowRoot.querySelector("input").placeholder=t||""}setInvalid(t){this.shadowRoot.querySelector("input").ariaInvalid=t}setNoSubmit(t){const e=this.shadowRoot.querySelector('[name="submit"]');if(t===null){e.style.display=null;return}e.style.display="none"}setStorageKey(t){if(!this.ui.storage)return;const e=this.shadowRoot.querySelector("input");e.value=localStorage.getItem(this.ui.storageprefix+t)||"",this.ui.events.dispatch("storage",e.value)}};K(Kt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Kt)}),K(Kt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let yi=Kt;const Jt=class Jt extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new pt,get current(){return this.root.getAttribute("current")},set current(t){if(!t){this.root.removeAttribute("current");return}this.root.setAttribute("current",t)},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var s,o;return((o=(s=this.data)==null?void 0:s[t])==null?void 0:o[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"current":s!==null&&this.setCurrent(s);break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.href)throw"Missing href attribute!";try{this.data=(await fetch(e.ui.href)).json()}catch(s){console.error(s)}this.ui.events.dispatch("change",e)}}};K(Jt,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",Jt)}),K(Jt,"observedAttributes",["current"]);let wi=Jt;const Oe=class Oe extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(Oe,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Oe)});let ki=Oe;const Gt=class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){if(!t){this.root.removeAttribute("nobg");return}this.root.setAttribute("nobg","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,s){switch(t){case"nobg":this.setNoBg(s);break}}setNoBg(t){if(t===null){this.shadowRoot.querySelector(".background").style.display=null;return}this.shadowRoot.querySelector(".background").style.display="none"}};K(Gt,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",Gt)}),K(Gt,"observedAttributes",["nobg"]);let re=Gt;const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(De,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",De)});let kt=De;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new pt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,s=!1){if(this.lock)return;const o=this.root.pages[t]();this.root.stack.push(this.root.appendChild(o)),typeof e=="function"&&setTimeout(()=>e(o));let r=null;this.size()>1&&!s&&(r=this.root.stack[this.root.stack.length-2],r.parentElement.removeChild(r)),this.root.dispatchChangeEvent(r),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
      <style>
        :host {
          display: block !important;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};K(Me,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Me)});let _i=Me;const Yt=class Yt extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new pt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,s=!1){if(s&&this.storageprefix){const o=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=o??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,s=!1){if(typeof e!="function")throw"callback is not a function";return s&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};K(Yt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Yt)}),K(Yt,"observedAttributes",["storageprefix"]);let xi=Yt;const Xt=class Xt extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.ui={root:this,get auto(){return this.root.hasAttribute("auto")},set auto(t){if(!t){this.root.removeAttribute("auto");return}this.root.setAttribute("auto","")},get mode(){return this.root.getAttribute("mode")},set mode(t){if(!t){this.root.removeAttribute("mode");return}this.root.setAttribute("mode",t)},add(t,e){this.root.themes[t]=e},set(t){var s;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((s=this.root.currentTheme)==null?void 0:s.name)==t)return;{const o=document.getElementById("theme");o&&(document.head.removeChild(o),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,s){switch(t){case"auto":this.setAuto(s);break;case"mode":this.setMode(s);break}}setAuto(t,e=document.body){if(t===null){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=s=>{s.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break;default:e.removeAttribute("data-theme")}}};K(Xt,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",Xt)}),K(Xt,"observedAttributes",["auto","mode"]);let Si=Xt;const He=class He extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `}connectedCallback(){}disconnectedCallback(){}};K(He,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",He)});let Ci=He;function Cr(){hi.register(),ce.register(),di.register(),fi.register(),pi.register(),Ct.register(),Bt.register(),Et.register(),he.register(),dt.register(),de.register(),At.register(),bi.register(),yi.register(),ie.register(),vi.register(),ki.register(),wi.register(),re.register(),_i.register(),kt.register(),xi.register(),Ci.register(),mi.register(),gi.register(),ee.register(),Si.register()}const Ar="modulepreload",Er=function(_){return"/pg-vis.github.io/"+_},Xi={},Lr=function(t,e,s){let o=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),l=(r==null?void 0:r.nonce)||(r==null?void 0:r.getAttribute("nonce"));o=Promise.all(e.map(n=>{if(n=Er(n),n in Xi)return;Xi[n]=!0;const c=n.endsWith(".css"),g=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${g}`))return;const y=document.createElement("link");if(y.rel=c?"stylesheet":Ar,c||(y.as="script",y.crossOrigin=""),y.href=n,l&&y.setAttribute("nonce",l),document.head.appendChild(y),c)return new Promise((p,b)=>{y.addEventListener("load",p),y.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${n}`)))})}))}return o.then(()=>t()).catch(r=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=r,window.dispatchEvent(l),!l.defaultPrevented)throw r})};function Rr(_={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:s,onRegistered:o,onRegisteredSW:r,onRegisterError:l}=_;let n,c;const g=async(p=!0)=>{await c};async function y(){if("serviceWorker"in navigator){if(n=await Lr(async()=>{const{Workbox:p}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:p}},[]).then(({Workbox:p})=>new p("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(p=>{l==null||l(p)}),!n)return;n.addEventListener("activated",p=>{(p.isUpdate||p.isExternal)&&window.location.reload()}),n.addEventListener("installed",p=>{p.isUpdate||s==null||s()}),n.register({immediate:t}).then(p=>{r?r("/pg-vis.github.io/sw.js",p):o==null||o(p)}).catch(p=>{l==null||l(p)})}}return c=y(),g}const je=class je extends Ct{constructor(t){super(),this.title=t,this.gistID=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=Z`
      <ui-flex-grid-item>
        <ui-label
          secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title=`Import "${this.title}"`}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};K(je,"register",()=>{customElements.define("import-dialog",je)});let fe=je;const Ie=class Ie extends Ct{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.name=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=Z`
      <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="New Vis Data",this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",s=>(s.unshift({title:this.name.ui.value,data:[]}),s)),this.ui.close()}),this.appendChild(t)}};K(Ie,"register",()=>{customElements.define("new-vis-data-dialog",Ie)});let pe=Ie;const qe=class qe extends Ct{constructor(){super(),this.token=null,this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=Z`
      <ui-flex-grid-item>
        <ui-label
          secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Gist Token"}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};K(qe,"register",()=>{customElements.define("push-dialog",qe)});let me=qe;const rt={alert:"alert",alertLists:"alert-lists",metalSheetLists:"metal-sheet-lists",vis:"vis",product:"product",visLists:"vis-lists",visData:"vis-data"},Tr=Z`
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
`;function ur({alert:_,container:t,hasBorder:e=!0,hasRipple:s=!0,onClick:o=null}){const r=document.createElement(t);return r.className="alert flex row nowrap align-center justify-between",r.style.padding="var(--ui-spacing)",r.style.overflow="hidden",r.style.position="relative",e&&(r.style.borderBottom="1px solid var(--ui-borderColor)"),r.innerHTML=Z`
    <div class="title">${_.alert}</div>

    <div
      class="number"
      style="
                color: var(--ui-primary-bgColor, red);
                font-weight: bold;
            "
    >
      ${_.from===_.to?_.from:`${_.from}..${_.to}`}
    </div>
  `,r.setAttribute("data-from",_.from.toString()),r.setAttribute("data-to",_.to.toString()),r.setAttribute("data-alert",_.alert),r.setAttribute("data-desc",_.desc.join(`
`)),r.onclick=o,s&&(zt(r),r.style.cursor="pointer",r.role="button"),r}function Fi({product:_,events:t=null,ripple:e=!0}){const s=document.createElement("div");s.classList.add("vis-item"),s.role="button",s.setAttribute("data-value",_.lotto+" "+_.name+" "+_.format+" "+_.stamp+" "+_.thickness+"mm"),s.style.display="block",s.style.position="relative",s.style.overflow="hidden",s.style.borderTop="1px solid var(--ui-borderColor)",s.style.borderBottom="1px solid var(--ui-borderColor)",s.style.margin="var(--ui-spacing) 0",s.style.cursor="pointer",s.innerHTML=Z`
    <ui-flex-grid>
      <ui-flex-grid-row style="font-size: 1.1rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div
            name="lotto"
            style="font-weight: bold; padding: var(--ui-spacing);"
            align="right"
          >
            ${_.lotto}
          </div>

          <div
            name="name"
            style="font-weight: lighter; padding: var(--ui-spacing);"
          >
            ${_.name}
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>

      <ui-flex-grid-row style="font-size: 0.95rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div name="format" style="padding: var(--ui-spacing);" align="right">
            ${_.format}
          </div>

          <div name="stamp" style="padding: var(--ui-spacing);">
            ${_.stamp}
          </div>

          <div name="thickness" style="padding: var(--ui-spacing);">
            ${_.thickness}mm
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    </ui-flex-grid>
  `;let o;return e&&(o=zt(s,{useClick:!0})),t!==null&&(s.onclick=()=>{t.dispatch("click",_)}),{destroy:()=>{o&&o()},element:s}}function ne({primary:_,secondary:t=null,onClick:e=null,onDelete:s=null}){const o=new Bt;o.innerHTML=Z`
    <ui-flex-grid-row>
      <ui-flex-grid-item>
        <ui-button
          name="item"
          style="justify-content: flex-start;"
          color="primary"
          variant="ghost"
        >
          <span>
            <ui-primary>${_}</ui-primary>
            ${t?Z`
                  <br />
                  <ui-secondary>${t}</ui-secondary>
                `:""}
          </span>
        </ui-button>
      </ui-flex-grid-item>

      ${s?Z`<ui-flex-grid-item
            name="delete"
            class="flex align-center justify-center"
            flex="0"
          >
            <ui-icon-button color="destructive" ghost>
              ${Tr}
            </ui-icon-button>
          </ui-flex-grid-item>`:""}
    </ui-flex-grid-row>
  `;const r=o.querySelector('[name="delete"]');r&&r.addEventListener("click",s);const l=o.querySelector('[name="item"]');return l&&l.addEventListener("click",e),{destroy:()=>{o.parentElement&&o.parentElement.removeChild(o)},element:o}}function zr(_){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const s of e.currentTarget.files){const o=new FileReader;o.onload=()=>{if(typeof o.result=="string")try{_(o.result,s)}catch(r){alert(`Parse data failed: ${r}`)}},o.onerror=()=>{alert(`Read file "${s.name}" failed!`)},o.readAsText(s)}},t.click()}function Br(_){const t=[],e=_.map(s=>`${s.title}`).sort();for(const s of e)t.push(_.find(o=>`${o.title}`===s));return t}function Or(_){let t=[];const e=_.map(s=>gt(s)).sort();for(const s of e)t.push(_.find(o=>gt(o)===s));return t}class Ni{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const s=await e.json();this.data={revision:s.history.length,files:{},owner:{login:s.owner.login}};for(const[o,r]of Object.entries(s.files))this.data.files[o]={filename:r.filename,content:JSON.parse(r.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`;return await(await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})})).json()}}async function Dr(_,t,{beforeUpdate:e=null,update:s,updateRevision:o}){const l=await new Ni(_).get();let n=!1;l.revision>t?n=confirm(`Upgrade zu revision "${l.revision}"`):l.revision<t?n=confirm(`Downgrade auf revision "${l.revision}"`):n=confirm(`Already up to date! Reload? (revision: ${l.revision})`),n&&(typeof e=="function"&&await e(),Object.values(l.files).forEach(c=>s(c.content)),o(l.revision))}async function Mr(_,t,e,{getFileName:s,updateRevision:o}){const r=new me;r.ui.events.on("close",()=>{document.body.removeChild(r)}),r.ui.events.on("submit",async l=>{if(!l)return;const n=new Ni(_,l),c=await n.get();if(c.revision>t){alert(`Gist revision is newer then the current revision (${c.revision})`);return}const g=Object.values(c.files).map(b=>JSON.stringify(b.content)).sort(),y=Object.values(e).map(b=>JSON.stringify(b)).sort();if(JSON.stringify(g)===JSON.stringify(y)){alert("Nope, no patching needed... already up to date...");return}const p={};e.forEach(b=>{p[s(b)]={content:JSON.stringify(b)}});for(const b of Object.keys(c.files))Object.hasOwn(p,b)||(p[b]=null);try{console.debug(await n.patch(p))}catch(b){console.error(b);return}o(t+1)}),document.body.appendChild(r),r.ui.open(!0)}function Pi(_,t,{storeGistKey:e,storeDataKey:s,getFileName:o,onUpdate:r}){if(!t)return;const l=document.querySelector("ui-store"),n=t[e];if(!n){_.ui.set(null,null),_.ui.setPullHandler(null),_.ui.setPushHandler(null);return}_.ui.set(n.id,n.revision);let c;const g=()=>{c&&_.removeChild(c),c=new re,_.appendChild(c)},y=()=>{c&&(_.removeChild(c),c=void 0)};_.ui.setPullHandler(async(p,b)=>{g();try{await Dr(p,b,{beforeUpdate:async()=>{l.ui.set(s,[])},update:r,updateRevision:h=>{l.ui.update("gist",w=>(w[e]={id:p,revision:h},w))}})}finally{y()}}),_.ui.setPushHandler(async(p,b)=>{g();try{const h=l.ui.get(s);if(!Array.isArray(h)){alert("No data to push!");return}await Mr(p,b,h,{getFileName:o,updateRevision:w=>{l.ui.update("gist",u=>(u[e]={id:p,revision:w},u))}})}finally{y()}})}function li(_,t,{storeDataKey:e,getKey:s}){const o=s(t);if(_.ui.get(e).find(r=>s(r)===o)){_.ui.update(e,r=>r.map(l=>s(l)===o?t:l));return}_.ui.update(e,r=>[...r,t])}function Hr(_){const t=e=>new Error(`invalid data for alert:
${JSON.stringify(e,null,4)}`);if(typeof(_==null?void 0:_.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(_==null?void 0:_.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(_,"data")||(_.data=[]);for(let e=0;e<_.data.length;e++){const s=_.data[e];if(typeof s.from!="number"||typeof s.to!="number"||typeof s.alert!="string"||!Array.isArray(s.desc)||(typeof s.desc=="string"&&(s.desc=s.desc.split(`
`)),s.desc.filter(o=>typeof o!="string").length))throw t(s)}return _}function jr(_){if(typeof(_==null?void 0:_.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(_==null?void 0:_.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(_==null?void 0:_.toolID)!="string"&&(_.toolID=""),Object.hasOwn(_,"data")||(_.data={}),typeof _.data.press!="number"&&(_.data.press=-1),Object.hasOwn(_.data,"table")?(Object.hasOwn(_.data.table,"header")||(_.data.table.header=[]),Object.hasOwn(_.data.table,"data")||(_.data.table.data=[])):_.data.table={header:[],data:[]},_}function Ir(_){if(typeof _=="string")try{_=JSON.parse(_)}catch{return Nr(_)}else _=_;if(typeof _.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof _.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(_.data))throw new Error('invalid data: "data" not from type "array"');for(const t of _.data)cr(t);return _}function cr(_){const t=e=>new Error(`invalid data for product:
${JSON.stringify(e,null,4)}`);if(typeof _.lotto!="string"||typeof _.name!="string"||typeof _.format!="string"||typeof _.thickness!="number"||typeof _.stamp!="string")throw t(_);return _}function qr(_){if(typeof _=="string"&&(_=JSON.parse(_)),typeof _.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof _.name!="string")throw new Error('invalid data: missing "name" from type "string"');if(typeof _.allowDeletion!="boolean"&&(_.allowDeletion=!0),!Array.isArray(_.data))throw new Error('invalid data: "data" from type "array"');for(const t of _.data)cr(t);return _}function Fr(_){return _}function Nr(_){const t=n=>{const[c,g]=n.split(/[xX]/),y=parseFloat(c),p=parseFloat(g);return!y||!p?`${y}x${p}`:`${y>p?y:p}x${y<p?y:p}`},e=new Date,s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0"),r={date:e.getTime(),title:`${e.getFullYear()}-${s}-${o}`,data:[]},l=_.split(`
`);for(let n=0;n<l.length;n++){if(!l[n])continue;let[c,...g]=l[n].trim().replace(/\t/g," ").split(" ");c=c.trim();const{productName:y,format:p,newRest:b}=(()=>{let u="",m="";for(let d=0;d<g.length;d++)if(g[d].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){m=t(g[d]),g=g.slice(d+1);break}else u+=g[d]+" ";return{productName:u.trim(),format:t(m),newRest:g.map(d=>d.trim()).filter(d=>!!d)}})();if(!p)throw`missing format for "${y}" (lotto: "${c}") in vis (txt) data!`;if(!(b[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${y}" with lotto "${c}"!`;const h=b.shift()||"",w=b.join(" ");r.data.push({lotto:c,name:y,format:p,thickness:parseFloat(h.replaceAll(",",".")),stamp:w})}return r}function Pr(_){return`AlarmListen_${_.title}.json`}function hr(_){return`${_.title}`}function Qi(_){return`BlechListen_${_.format}_${_.toolID}.json`}function gt(_){return`${_.format}:${_.toolID}`}function tr(_){return`Vis_${_.date}.json`}function ue(_){return`${_.title}`}function $r(_){return`VisLists_${_.name}.json`}function ci(_){return`${_.name}`}const Fe=class Fe extends kt{constructor(){super(),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}},this.render()}render(){this.innerHTML=Z`
      <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}connectedCallback(){super.connectedCallback(),this.ui.name=rt.alert}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(ur({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};K(Fe,"register",()=>{customElements.define("alert-page",Fe)});let ge=Fe;const Ne=class Ne extends kt{constructor(){super(),this.cleanup=new Lt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.alertPage=new ge,this.list=null,this.ui={...this.ui,root:this,set(t){const e=(t==null?void 0:t.title)||"";this.root.list=t||null,this.root.uiStore.ui.set("appBarTitle",e),this.root.searchBar.ui.input().ui.storagekey=hr(this.root.list),setTimeout(()=>{this.root.renderList()})}},this.render()}render(){this.innerHTML=Z`
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
    `,this.searchBar=this.querySelector("search-bar")}connectedCallback(){super.connectedCallback(),this.ui.name=rt.alertLists,this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.ui.active=e,await this.search(e?this.searchBar.ui.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.register("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister("alert")}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(s=>{if(!this.searchBar.ui.active){s.style.display="flex";return}if(this.is(this.getAlertFromElement(s),e)){s.style.display="flex";return}s.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),s=new RegExp(this.searchBar.ui.input().ui.value.replaceAll(" ",".*"));for(let o=0;o<this.list.data.length;o++){if(e.active===!0&&!this.is(this.list.data[o],s))return;setTimeout(()=>this.renderListElement(t,this.list.data[o],o<this.list.data.length-1))}}renderListElement(t,e,s){t.appendChild(ur({alert:e,container:"li",hasBorder:s,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){const s=[];for(let o=t.from;o<=t.to;o++)s.push(o);return!!`${s.join(",")} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,s=this.getAlertFromElement(e);this.alertPage.ui.set(s),this.stackLayout.ui.set(rt.alert,null,!0)}};K(Ne,"register",()=>{customElements.define("alert-lists-page",Ne)});let be=Ne;const Pe=class Pe extends de{constructor(){super(),this.events=new pt,this.render()}render(){this.innerHTML=Z`
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
    `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)})}};K(Pe,"register",()=>{customElements.define("metal-sheet-actions",Pe)});let Ai=Pe;const $e=class $e extends Ct{constructor(t){super(),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.render()}render(){const t=new At;t.ui.gap="0.5rem",t.innerHTML=Z`
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
    `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){switch(super.connectedCallback(),this.mode){case"create":this.ui.title="Neue Liste";break;case"edit":this.ui.title="Liste Bearbeiten";break}}set(t,e,s=-1){const o=this.querySelector('[name="format"] ui-input');o.ui.value=t;const r=this.querySelector('[name="toolID"] ui-input');r.ui.value=e,this.querySelector('[name="press"] ui-select').ui.options().forEach(n=>{n.ui.selected=parseInt(n.ui.value)===s}),this.originFormat=t,this.originToolID=e}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=this.getData();s!==null&&(this.ui.events.dispatch("submit",s),this.ui.close())}),this.appendChild(t)}getData(){var c;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const s=this.querySelector('[name="toolID"] ui-input');t.toolID=s.ui.value;const o=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((c=o.ui.selected())==null?void 0:c.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const r=gt({format:this.originFormat,toolID:this.originToolID}),l=gt(t),n=this.uiStore.ui.get("metalSheetLists").find(g=>this.mode==="edit"&&r===l?!1:gt(g)===l);return n?(e.ui.invalid=n.format===t.format&&n.toolID!==t.toolID,s.ui.invalid=n.toolID===t.toolID,null):t}};K($e,"register",()=>{customElements.define("metal-sheet-create-dialog",$e)});let se=$e;const Ue=class Ue extends Ct{constructor(){super(),this.render()}render(){const t=new At;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Eintrag bearbeiten"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let o=0;o<t.length;o++){const r=new dt;r.innerHTML=Z`
        <ui-input title="${t[o]}" value="${(e==null?void 0:e[o])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="destructive">Delete</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],o=this.querySelector("ui-flex-grid");for(const r of[...o.children]){const l=r.querySelector("ui-input");s.push(l.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};K(Ue,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",Ue)});let ve=Ue;const Ve=class Ve extends Ct{constructor(){super(),this.render()}render(){const t=new At;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.ui.title="Neuer Eintrag"}set({header:t,data:e=null}){const s=this.querySelector("ui-flex-grid");for(;s.firstChild;)s.removeChild(s.firstChild);for(let o=0;o<t.length;o++){const r=new dt;r.innerHTML=Z`
        <ui-input title="${t[o]}" value="${(e==null?void 0:e[o])||""}"></ui-input>
      `,s.appendChild(r)}}createCancelButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new dt;t.slot="actions",t.innerHTML=Z`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const s=[],o=this.querySelector("ui-flex-grid");for(const r of[...o.children]){const l=r.querySelector("ui-input");s.push(l.ui.value)}this.ui.events.dispatch("submit",s),this.ui.close()}),this.appendChild(t)}};K(Ve,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",Ve)});let ye=Ve;const Ze=class Ze extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,t===null){this.root.uiStore.ui.set("share",null),this.root.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.root.uiStore.ui.set("appBarTitle",e),this.root.render()},updateStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const s=gt(t);return e=[...e.filter(o=>gt(o)!==s),t],e})},deleteStore(t){this.root.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(s=>gt(s)!==t),e))}},this.render()}render(){this.innerHTML=Z`
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
    `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(!this.list)return;for(const o of this.list.data.table.header){const r=document.createElement("th");r.style.textAlign="center",r.innerHTML=o,t.appendChild(r)}let s=null;for(let o=0;o<this.list.data.table.data.length;o++){const r=document.createElement("tr");r.style.cursor="pointer",r.role="button",r.onclick=()=>this.createModifyEntryDialog(o),e.appendChild(r),_r(r,{onDragEnd:(l,n)=>{if(s!==null){if(s<n){let c=this.list.data.table.data;c=[...c.slice(0,s),...c.slice(s+1,n+1),c[s],...c.slice(n+1)],this.list.data.table.data=c,this.ui.set(this.list),this.ui.updateStore(this.list)}else if(s>n){let c=this.list.data.table.data;c=[...c.slice(0,n),c[s],...c.slice(n,s),...c.slice(s+1)],this.list.data.table.data=c,this.ui.set(this.list),this.ui.updateStore(this.list)}[...e.children].forEach(c=>{c.style.background="inherit",c.style.color="inherit"}),s=null}},onDragging:l=>{s!==null&&[...e.children].forEach((n,c)=>{if(c!==l){n.style.background="inherit",n.style.color="inherit";return}n.style.background="var(--ui-primary-bgColor)",n.style.color="var(--ui-primary-color)"})},onDragStart:l=>{s=l}});for(const l of this.list.data.table.data[o]){const n=document.createElement("td");n.style.textAlign="center",n.innerHTML=l,r.appendChild(n)}}}connectedCallback(){super.connectedCallback(),this.ui.name=rt.metalSheetLists,this.uiStore.ui.set("edit",{onClick:async()=>{const t=new se("edit");t.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.ui.deleteStore(gt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null),this.uiStore.ui.set("share",null)}createMetalSheetActions(){this.querySelector("metal-sheet-actions").events.on("new-entry",()=>this.createNewEntryDialog())}createModifyEntryDialog(t){const e=new ve;e.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",s=>{this.list.data.table.data[t]=s,this.ui.set(this.list),this.ui.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new ye;t.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.ui.set(this.list),this.ui.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};K(Ze,"register",()=>{customElements.define("metal-sheet-lists-page",Ze)});let we=Ze;const We=class We extends kt{constructor(){super(),this.ui={...this.ui,root:this,set(t){this.root.replaceChild(Fi({product:t,ripple:!1}).element,this.root.querySelector(".placeholder")),this.root.querySelector("vis.content")}},this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=Z`
      <style>
        :host {
          padding-top: var(--ui-app-bar-height);
        }
      </style>
    `}render(){this.innerHTML=Z`
      <span class="placeholder"></span>
      <div class="content"></div>
    `}connectedCallback(){super.connectedCallback(),this.ui.name=rt.product}};K(We,"register",()=>{customElements.define("product-page",We)});let ke=We;const Ke=class Ke extends kt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.ui={...this.ui,root:this,set(t){if(this.root.list=t,this.root.setAppBarTitle(),t===null){this.root.searchBar.ui.input().ui.storagekey=null;return}this.root.searchBar.ui.input().ui.storagekey=ue(t)}},this.render()}render(){this.innerHTML=Z`
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
    `,this.searchBar=this.querySelector("search-bar");let t=null;this.searchBar.ui.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.ui.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))})}connectedCallback(){super.connectedCallback(),this.ui.name=rt.vis,this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback()}async update(t=null){const e=new re;e.ui.nobg=!0;const s=this.querySelector(".container");s.appendChild(e);const o=this.querySelector(".list");for(;o.firstChild;)o.removeChild(o.firstChild);if(!this.list)return;const r=new pt;r.on("click",l=>{this.stackLayout.ui.set(rt.product,n=>{n.ui.set(l)},!0)});for(let l=0;l<this.list.data.length;l++)(async(n,c)=>{setTimeout(async()=>{const g=Fi({product:c,events:r}).element;this.checkItem(g,t),(n>this.list.data.length-1||g.style.display!=="none")&&e.parentElement&&s.removeChild(e),o.appendChild(g)})})(l,this.list.data[l])}async search(t){const e=this.getRegExp(t),s=this.querySelector(".list");for(const o of[...s.children])this.checkItem(o,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};K(Ke,"register",()=>{customElements.define("vis-page",Ke)});let _e=Ke;const Je=class Je extends kt{constructor(){super(),this.render()}render(){this.innerHTML=Z``}connectedCallback(){this.ui.name=rt.visData}};K(Je,"register",()=>{customElements.define("vis-data-page",Je)});let xe=Je;const dr="v0.0.31.dev3",Ge=class Ge extends he{constructor(){super(),this.render()}render(){this.innerHTML=Z`
      <div
        style="
          font-size: 0.85rem;
          font-variation-settings: var(--ui-input-fontVariation);
        "
      >
        ${dr}
      </div>

      <pg-drawer-group-alert-lists fold></pg-drawer-group-alert-lists>

      <pg-drawer-group-metal-sheet-lists
        fold
      ></pg-drawer-group-metal-sheet-lists>

      <pg-drawer-group-vis fold></pg-drawer-group-vis>

      <pg-drawer-group-vis-lists fold></pg-drawer-group-vis-lists>

      <pg-drawer-group-vis-data fold></pg-drawer-group-vis-data>
    `}};K(Ge,"register",()=>{customElements.define("pg-drawer",Ge)});let Ei=Ge;const Ye=class Ye extends Bt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.onPull=null,this.onPush=null,this.ui={...this.ui,root:this,set(t,e){const s=this.root.querySelector("ui-secondary"),o=this.root.querySelector("drawer-revision");t?(this.root.style.display="block",s.innerHTML=t,o.innerHTML=Z`Revision: ${e}`):(this.root.style.display="none",s.innerHTML=Z`&nbsp;`,o.innerHTML=Z`Revision: -`),this.root.pullButton.onclick=()=>{this.root.onPull&&this.root.onPull(t,e)},this.root.pushButton.onclick=()=>{this.root.onPush&&this.root.onPush(t,e)}},setPullHandler(t){this.root.onPull=t},setPushHandler(t){this.root.onPush=t}},this.render()}render(){this.innerHTML=Z`
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
    `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}};K(Ye,"register",()=>{customElements.define("drawer-gist-item",Ye)});let Li=Ye;const Xe=class Xe extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};K(Xe,"register",()=>{customElements.define("drawer-revision",Xe)});let Ri=Xe;const er="Alarm Listen",jt="alertLists",Qe=class Qe extends Et{constructor(){super(),this.cleanup=new Lt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onAlertLists=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of Br(t))this.appendChild(ne({primary:e.title,secondary:null,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(rt.alertLists,o=>{o.ui.set(e)});const s=document.querySelector("pg-drawer");s.ui.open=!1},onDelete:()=>{confirm(`Delete "${e.title} - ${e.date}`)&&this.uiStore.ui.update(jt,s=>s.filter(o=>o.title!==e.title))}}).element)},this.onUpdate=t=>{li(this.uiStore,t,{storeDataKey:jt,getKey:hr})},this.render()}render(){this.innerHTML=Z`
      <pg-drawer-item-import
        storegistkey="${rt.alertLists}"
        title="${er}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Hr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(jt,[])})}connectedCallback(){super.connectedCallback(),this.ui.title=er,this.cleanup.add(this.uiStore.ui.on("gist",t=>{Pi(this.querySelector("drawer-gist-item"),t,{storeGistKey:rt.alertLists,storeDataKey:jt,getFileName:Pr,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(jt,this.onAlertLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(Qe,"register",()=>{customElements.define("pg-drawer-group-alert-lists",Qe)});let Ti=Qe;var St=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function fr(_){return _&&_.__esModule&&Object.prototype.hasOwnProperty.call(_,"default")?_.default:_}var pr={exports:{}};(function(_,t){(function(e,s){s()})(St,function(){function e(g,y){return typeof y>"u"?y={autoBom:!1}:typeof y!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),y={autoBom:!y}),y.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(g.type)?new Blob(["\uFEFF",g],{type:g.type}):g}function s(g,y,p){var b=new XMLHttpRequest;b.open("GET",g),b.responseType="blob",b.onload=function(){c(b.response,y,p)},b.onerror=function(){console.error("could not download file")},b.send()}function o(g){var y=new XMLHttpRequest;y.open("HEAD",g,!1);try{y.send()}catch{}return 200<=y.status&&299>=y.status}function r(g){try{g.dispatchEvent(new MouseEvent("click"))}catch{var y=document.createEvent("MouseEvents");y.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),g.dispatchEvent(y)}}var l=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof St=="object"&&St.global===St?St:void 0,n=l.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),c=l.saveAs||(typeof window!="object"||window!==l?function(){}:"download"in HTMLAnchorElement.prototype&&!n?function(g,y,p){var b=l.URL||l.webkitURL,h=document.createElement("a");y=y||g.name||"download",h.download=y,h.rel="noopener",typeof g=="string"?(h.href=g,h.origin===location.origin?r(h):o(h.href)?s(g,y,p):r(h,h.target="_blank")):(h.href=b.createObjectURL(g),setTimeout(function(){b.revokeObjectURL(h.href)},4e4),setTimeout(function(){r(h)},0))}:"msSaveOrOpenBlob"in navigator?function(g,y,p){if(y=y||g.name||"download",typeof g!="string")navigator.msSaveOrOpenBlob(e(g,p),y);else if(o(g))s(g,y,p);else{var b=document.createElement("a");b.href=g,b.target="_blank",setTimeout(function(){r(b)})}}:function(g,y,p,b){if(b=b||open("","_blank"),b&&(b.document.title=b.document.body.innerText="downloading..."),typeof g=="string")return s(g,y,p);var h=g.type==="application/octet-stream",w=/constructor/i.test(l.HTMLElement)||l.safari,u=/CriOS\/[\d]+/.test(navigator.userAgent);if((u||h&&w||n)&&typeof FileReader<"u"){var m=new FileReader;m.onloadend=function(){var S=m.result;S=u?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),b?b.location.href=S:location=S,b=null},m.readAsDataURL(g)}else{var d=l.URL||l.webkitURL,k=d.createObjectURL(g);b?b.location=k:location.href=k,b=null,setTimeout(function(){d.revokeObjectURL(k)},4e4)}});l.saveAs=c.saveAs=c,_.exports=c})})(pr);var Ur=pr.exports;const $i=fr(Ur);function le(_){throw new Error('Could not dynamically require "'+_+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var mr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(_,t){(function(e){_.exports=e()})(function(){return function e(s,o,r){function l(g,y){if(!o[g]){if(!s[g]){var p=typeof le=="function"&&le;if(!y&&p)return p(g,!0);if(n)return n(g,!0);var b=new Error("Cannot find module '"+g+"'");throw b.code="MODULE_NOT_FOUND",b}var h=o[g]={exports:{}};s[g][0].call(h.exports,function(w){var u=s[g][1][w];return l(u||w)},h,h.exports,e,s,o,r)}return o[g].exports}for(var n=typeof le=="function"&&le,c=0;c<r.length;c++)l(r[c]);return l}({1:[function(e,s,o){var r=e("./utils"),l=e("./support"),n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";o.encode=function(c){for(var g,y,p,b,h,w,u,m=[],d=0,k=c.length,S=k,E=r.getTypeOf(c)!=="string";d<c.length;)S=k-d,p=E?(g=c[d++],y=d<k?c[d++]:0,d<k?c[d++]:0):(g=c.charCodeAt(d++),y=d<k?c.charCodeAt(d++):0,d<k?c.charCodeAt(d++):0),b=g>>2,h=(3&g)<<4|y>>4,w=1<S?(15&y)<<2|p>>6:64,u=2<S?63&p:64,m.push(n.charAt(b)+n.charAt(h)+n.charAt(w)+n.charAt(u));return m.join("")},o.decode=function(c){var g,y,p,b,h,w,u=0,m=0,d="data:";if(c.substr(0,d.length)===d)throw new Error("Invalid base64 input, it looks like a data url.");var k,S=3*(c=c.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(c.charAt(c.length-1)===n.charAt(64)&&S--,c.charAt(c.length-2)===n.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(k=l.uint8array?new Uint8Array(0|S):new Array(0|S);u<c.length;)g=n.indexOf(c.charAt(u++))<<2|(b=n.indexOf(c.charAt(u++)))>>4,y=(15&b)<<4|(h=n.indexOf(c.charAt(u++)))>>2,p=(3&h)<<6|(w=n.indexOf(c.charAt(u++))),k[m++]=g,h!==64&&(k[m++]=y),w!==64&&(k[m++]=p);return k}},{"./support":30,"./utils":32}],2:[function(e,s,o){var r=e("./external"),l=e("./stream/DataWorker"),n=e("./stream/Crc32Probe"),c=e("./stream/DataLengthProbe");function g(y,p,b,h,w){this.compressedSize=y,this.uncompressedSize=p,this.crc32=b,this.compression=h,this.compressedContent=w}g.prototype={getContentWorker:function(){var y=new l(r.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new c("data_length")),p=this;return y.on("end",function(){if(this.streamInfo.data_length!==p.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),y},getCompressedWorker:function(){return new l(r.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},g.createWorkerFrom=function(y,p,b){return y.pipe(new n).pipe(new c("uncompressedSize")).pipe(p.compressWorker(b)).pipe(new c("compressedSize")).withStreamInfo("compression",p)},s.exports=g},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,s,o){var r=e("./stream/GenericWorker");o.STORE={magic:"\0\0",compressWorker:function(){return new r("STORE compression")},uncompressWorker:function(){return new r("STORE decompression")}},o.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,s,o){var r=e("./utils"),l=function(){for(var n,c=[],g=0;g<256;g++){n=g;for(var y=0;y<8;y++)n=1&n?3988292384^n>>>1:n>>>1;c[g]=n}return c}();s.exports=function(n,c){return n!==void 0&&n.length?r.getTypeOf(n)!=="string"?function(g,y,p,b){var h=l,w=b+p;g^=-1;for(var u=b;u<w;u++)g=g>>>8^h[255&(g^y[u])];return-1^g}(0|c,n,n.length,0):function(g,y,p,b){var h=l,w=b+p;g^=-1;for(var u=b;u<w;u++)g=g>>>8^h[255&(g^y.charCodeAt(u))];return-1^g}(0|c,n,n.length,0):0}},{"./utils":32}],5:[function(e,s,o){o.base64=!1,o.binary=!1,o.dir=!1,o.createFolders=!0,o.date=null,o.compression=null,o.compressionOptions=null,o.comment=null,o.unixPermissions=null,o.dosPermissions=null},{}],6:[function(e,s,o){var r=null;r=typeof Promise<"u"?Promise:e("lie"),s.exports={Promise:r}},{lie:37}],7:[function(e,s,o){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",l=e("pako"),n=e("./utils"),c=e("./stream/GenericWorker"),g=r?"uint8array":"array";function y(p,b){c.call(this,"FlateWorker/"+p),this._pako=null,this._pakoAction=p,this._pakoOptions=b,this.meta={}}o.magic="\b\0",n.inherits(y,c),y.prototype.processChunk=function(p){this.meta=p.meta,this._pako===null&&this._createPako(),this._pako.push(n.transformTo(g,p.data),!1)},y.prototype.flush=function(){c.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},y.prototype.cleanUp=function(){c.prototype.cleanUp.call(this),this._pako=null},y.prototype._createPako=function(){this._pako=new l[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var p=this;this._pako.onData=function(b){p.push({data:b,meta:p.meta})}},o.compressWorker=function(p){return new y("Deflate",p)},o.uncompressWorker=function(){return new y("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,s,o){function r(h,w){var u,m="";for(u=0;u<w;u++)m+=String.fromCharCode(255&h),h>>>=8;return m}function l(h,w,u,m,d,k){var S,E,A=h.file,j=h.compression,O=k!==g.utf8encode,N=n.transformTo("string",k(A.name)),B=n.transformTo("string",g.utf8encode(A.name)),U=A.comment,Q=n.transformTo("string",k(U)),x=n.transformTo("string",g.utf8encode(U)),D=B.length!==A.name.length,a=x.length!==U.length,H="",et="",F="",it=A.dir,P=A.date,tt={crc32:0,compressedSize:0,uncompressedSize:0};w&&!u||(tt.crc32=h.crc32,tt.compressedSize=h.compressedSize,tt.uncompressedSize=h.uncompressedSize);var T=0;w&&(T|=8),O||!D&&!a||(T|=2048);var R=0,X=0;it&&(R|=16),d==="UNIX"?(X=798,R|=function(W,lt){var ft=W;return W||(ft=lt?16893:33204),(65535&ft)<<16}(A.unixPermissions,it)):(X=20,R|=function(W){return 63&(W||0)}(A.dosPermissions)),S=P.getUTCHours(),S<<=6,S|=P.getUTCMinutes(),S<<=5,S|=P.getUTCSeconds()/2,E=P.getUTCFullYear()-1980,E<<=4,E|=P.getUTCMonth()+1,E<<=5,E|=P.getUTCDate(),D&&(et=r(1,1)+r(y(N),4)+B,H+="up"+r(et.length,2)+et),a&&(F=r(1,1)+r(y(Q),4)+x,H+="uc"+r(F.length,2)+F);var J="";return J+=`
\0`,J+=r(T,2),J+=j.magic,J+=r(S,2),J+=r(E,2),J+=r(tt.crc32,4),J+=r(tt.compressedSize,4),J+=r(tt.uncompressedSize,4),J+=r(N.length,2),J+=r(H.length,2),{fileRecord:p.LOCAL_FILE_HEADER+J+N+H,dirRecord:p.CENTRAL_FILE_HEADER+r(X,2)+J+r(Q.length,2)+"\0\0\0\0"+r(R,4)+r(m,4)+N+H+Q}}var n=e("../utils"),c=e("../stream/GenericWorker"),g=e("../utf8"),y=e("../crc32"),p=e("../signature");function b(h,w,u,m){c.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=w,this.zipPlatform=u,this.encodeFileName=m,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}n.inherits(b,c),b.prototype.push=function(h){var w=h.meta.percent||0,u=this.entriesCount,m=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,c.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:u?(w+100*(u-m-1))/u:100}}))},b.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var w=this.streamFiles&&!h.file.dir;if(w){var u=l(h,w,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:u.fileRecord,meta:{percent:0}})}else this.accumulate=!0},b.prototype.closedSource=function(h){this.accumulate=!1;var w=this.streamFiles&&!h.file.dir,u=l(h,w,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(u.dirRecord),w)this.push({data:function(m){return p.DATA_DESCRIPTOR+r(m.crc32,4)+r(m.compressedSize,4)+r(m.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:u.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},b.prototype.flush=function(){for(var h=this.bytesWritten,w=0;w<this.dirRecords.length;w++)this.push({data:this.dirRecords[w],meta:{percent:100}});var u=this.bytesWritten-h,m=function(d,k,S,E,A){var j=n.transformTo("string",A(E));return p.CENTRAL_DIRECTORY_END+"\0\0\0\0"+r(d,2)+r(d,2)+r(k,4)+r(S,4)+r(j.length,2)+j}(this.dirRecords.length,u,h,this.zipComment,this.encodeFileName);this.push({data:m,meta:{percent:100}})},b.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},b.prototype.registerPrevious=function(h){this._sources.push(h);var w=this;return h.on("data",function(u){w.processChunk(u)}),h.on("end",function(){w.closedSource(w.previous.streamInfo),w._sources.length?w.prepareNextSource():w.end()}),h.on("error",function(u){w.error(u)}),this},b.prototype.resume=function(){return!!c.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},b.prototype.error=function(h){var w=this._sources;if(!c.prototype.error.call(this,h))return!1;for(var u=0;u<w.length;u++)try{w[u].error(h)}catch{}return!0},b.prototype.lock=function(){c.prototype.lock.call(this);for(var h=this._sources,w=0;w<h.length;w++)h[w].lock()},s.exports=b},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,s,o){var r=e("../compressions"),l=e("./ZipFileWorker");o.generateWorker=function(n,c,g){var y=new l(c.streamFiles,g,c.platform,c.encodeFileName),p=0;try{n.forEach(function(b,h){p++;var w=function(k,S){var E=k||S,A=r[E];if(!A)throw new Error(E+" is not a valid compression method !");return A}(h.options.compression,c.compression),u=h.options.compressionOptions||c.compressionOptions||{},m=h.dir,d=h.date;h._compressWorker(w,u).withStreamInfo("file",{name:b,dir:m,date:d,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(y)}),y.entriesCount=p}catch(b){y.error(b)}return y}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,s,o){function r(){if(!(this instanceof r))return new r;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var l=new r;for(var n in this)typeof this[n]!="function"&&(l[n]=this[n]);return l}}(r.prototype=e("./object")).loadAsync=e("./load"),r.support=e("./support"),r.defaults=e("./defaults"),r.version="3.10.1",r.loadAsync=function(l,n){return new r().loadAsync(l,n)},r.external=e("./external"),s.exports=r},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,s,o){var r=e("./utils"),l=e("./external"),n=e("./utf8"),c=e("./zipEntries"),g=e("./stream/Crc32Probe"),y=e("./nodejsUtils");function p(b){return new l.Promise(function(h,w){var u=b.decompressed.getContentWorker().pipe(new g);u.on("error",function(m){w(m)}).on("end",function(){u.streamInfo.crc32!==b.decompressed.crc32?w(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}s.exports=function(b,h){var w=this;return h=r.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:n.utf8decode}),y.isNode&&y.isStream(b)?l.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):r.prepareContent("the loaded zip file",b,!0,h.optimizedBinaryString,h.base64).then(function(u){var m=new c(h);return m.load(u),m}).then(function(u){var m=[l.Promise.resolve(u)],d=u.files;if(h.checkCRC32)for(var k=0;k<d.length;k++)m.push(p(d[k]));return l.Promise.all(m)}).then(function(u){for(var m=u.shift(),d=m.files,k=0;k<d.length;k++){var S=d[k],E=S.fileNameStr,A=r.resolve(S.fileNameStr);w.file(A,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:h.createFolders}),S.dir||(w.file(A).unsafeOriginalName=E)}return m.zipComment.length&&(w.comment=m.zipComment),w})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,s,o){var r=e("../utils"),l=e("../stream/GenericWorker");function n(c,g){l.call(this,"Nodejs stream input adapter for "+c),this._upstreamEnded=!1,this._bindStream(g)}r.inherits(n,l),n.prototype._bindStream=function(c){var g=this;(this._stream=c).pause(),c.on("data",function(y){g.push({data:y,meta:{percent:0}})}).on("error",function(y){g.isPaused?this.generatedError=y:g.error(y)}).on("end",function(){g.isPaused?g._upstreamEnded=!0:g.end()})},n.prototype.pause=function(){return!!l.prototype.pause.call(this)&&(this._stream.pause(),!0)},n.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},s.exports=n},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,s,o){var r=e("readable-stream").Readable;function l(n,c,g){r.call(this,c),this._helper=n;var y=this;n.on("data",function(p,b){y.push(p)||y._helper.pause(),g&&g(b)}).on("error",function(p){y.emit("error",p)}).on("end",function(){y.push(null)})}e("../utils").inherits(l,r),l.prototype._read=function(){this._helper.resume()},s.exports=l},{"../utils":32,"readable-stream":16}],14:[function(e,s,o){s.exports={isNode:typeof Buffer<"u",newBufferFrom:function(r,l){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(r,l);if(typeof r=="number")throw new Error('The "data" argument must not be a number');return new Buffer(r,l)},allocBuffer:function(r){if(Buffer.alloc)return Buffer.alloc(r);var l=new Buffer(r);return l.fill(0),l},isBuffer:function(r){return Buffer.isBuffer(r)},isStream:function(r){return r&&typeof r.on=="function"&&typeof r.pause=="function"&&typeof r.resume=="function"}}},{}],15:[function(e,s,o){function r(A,j,O){var N,B=n.getTypeOf(j),U=n.extend(O||{},y);U.date=U.date||new Date,U.compression!==null&&(U.compression=U.compression.toUpperCase()),typeof U.unixPermissions=="string"&&(U.unixPermissions=parseInt(U.unixPermissions,8)),U.unixPermissions&&16384&U.unixPermissions&&(U.dir=!0),U.dosPermissions&&16&U.dosPermissions&&(U.dir=!0),U.dir&&(A=d(A)),U.createFolders&&(N=m(A))&&k.call(this,N,!0);var Q=B==="string"&&U.binary===!1&&U.base64===!1;O&&O.binary!==void 0||(U.binary=!Q),(j instanceof p&&j.uncompressedSize===0||U.dir||!j||j.length===0)&&(U.base64=!1,U.binary=!0,j="",U.compression="STORE",B="string");var x=null;x=j instanceof p||j instanceof c?j:w.isNode&&w.isStream(j)?new u(A,j):n.prepareContent(A,j,U.binary,U.optimizedBinaryString,U.base64);var D=new b(A,x,U);this.files[A]=D}var l=e("./utf8"),n=e("./utils"),c=e("./stream/GenericWorker"),g=e("./stream/StreamHelper"),y=e("./defaults"),p=e("./compressedObject"),b=e("./zipObject"),h=e("./generate"),w=e("./nodejsUtils"),u=e("./nodejs/NodejsStreamInputAdapter"),m=function(A){A.slice(-1)==="/"&&(A=A.substring(0,A.length-1));var j=A.lastIndexOf("/");return 0<j?A.substring(0,j):""},d=function(A){return A.slice(-1)!=="/"&&(A+="/"),A},k=function(A,j){return j=j!==void 0?j:y.createFolders,A=d(A),this.files[A]||r.call(this,A,null,{dir:!0,createFolders:j}),this.files[A]};function S(A){return Object.prototype.toString.call(A)==="[object RegExp]"}var E={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(A){var j,O,N;for(j in this.files)N=this.files[j],(O=j.slice(this.root.length,j.length))&&j.slice(0,this.root.length)===this.root&&A(O,N)},filter:function(A){var j=[];return this.forEach(function(O,N){A(O,N)&&j.push(N)}),j},file:function(A,j,O){if(arguments.length!==1)return A=this.root+A,r.call(this,A,j,O),this;if(S(A)){var N=A;return this.filter(function(U,Q){return!Q.dir&&N.test(U)})}var B=this.files[this.root+A];return B&&!B.dir?B:null},folder:function(A){if(!A)return this;if(S(A))return this.filter(function(B,U){return U.dir&&A.test(B)});var j=this.root+A,O=k.call(this,j),N=this.clone();return N.root=O.name,N},remove:function(A){A=this.root+A;var j=this.files[A];if(j||(A.slice(-1)!=="/"&&(A+="/"),j=this.files[A]),j&&!j.dir)delete this.files[A];else for(var O=this.filter(function(B,U){return U.name.slice(0,A.length)===A}),N=0;N<O.length;N++)delete this.files[O[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(A){var j,O={};try{if((O=n.extend(A||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:l.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");n.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var N=O.comment||this.comment||"";j=h.generateWorker(this,O,N)}catch(B){(j=new c("error")).error(B)}return new g(j,O.type||"string",O.mimeType)},generateAsync:function(A,j){return this.generateInternalStream(A).accumulate(j)},generateNodeStream:function(A,j){return(A=A||{}).type||(A.type="nodebuffer"),this.generateInternalStream(A).toNodejsStream(j)}};s.exports=E},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,s,o){s.exports=e("stream")},{stream:void 0}],17:[function(e,s,o){var r=e("./DataReader");function l(n){r.call(this,n);for(var c=0;c<this.data.length;c++)n[c]=255&n[c]}e("../utils").inherits(l,r),l.prototype.byteAt=function(n){return this.data[this.zero+n]},l.prototype.lastIndexOfSignature=function(n){for(var c=n.charCodeAt(0),g=n.charCodeAt(1),y=n.charCodeAt(2),p=n.charCodeAt(3),b=this.length-4;0<=b;--b)if(this.data[b]===c&&this.data[b+1]===g&&this.data[b+2]===y&&this.data[b+3]===p)return b-this.zero;return-1},l.prototype.readAndCheckSignature=function(n){var c=n.charCodeAt(0),g=n.charCodeAt(1),y=n.charCodeAt(2),p=n.charCodeAt(3),b=this.readData(4);return c===b[0]&&g===b[1]&&y===b[2]&&p===b[3]},l.prototype.readData=function(n){if(this.checkOffset(n),n===0)return[];var c=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,c},s.exports=l},{"../utils":32,"./DataReader":18}],18:[function(e,s,o){var r=e("../utils");function l(n){this.data=n,this.length=n.length,this.index=0,this.zero=0}l.prototype={checkOffset:function(n){this.checkIndex(this.index+n)},checkIndex:function(n){if(this.length<this.zero+n||n<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+n+"). Corrupted zip ?")},setIndex:function(n){this.checkIndex(n),this.index=n},skip:function(n){this.setIndex(this.index+n)},byteAt:function(){},readInt:function(n){var c,g=0;for(this.checkOffset(n),c=this.index+n-1;c>=this.index;c--)g=(g<<8)+this.byteAt(c);return this.index+=n,g},readString:function(n){return r.transformTo("string",this.readData(n))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var n=this.readInt(4);return new Date(Date.UTC(1980+(n>>25&127),(n>>21&15)-1,n>>16&31,n>>11&31,n>>5&63,(31&n)<<1))}},s.exports=l},{"../utils":32}],19:[function(e,s,o){var r=e("./Uint8ArrayReader");function l(n){r.call(this,n)}e("../utils").inherits(l,r),l.prototype.readData=function(n){this.checkOffset(n);var c=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,c},s.exports=l},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,s,o){var r=e("./DataReader");function l(n){r.call(this,n)}e("../utils").inherits(l,r),l.prototype.byteAt=function(n){return this.data.charCodeAt(this.zero+n)},l.prototype.lastIndexOfSignature=function(n){return this.data.lastIndexOf(n)-this.zero},l.prototype.readAndCheckSignature=function(n){return n===this.readData(4)},l.prototype.readData=function(n){this.checkOffset(n);var c=this.data.slice(this.zero+this.index,this.zero+this.index+n);return this.index+=n,c},s.exports=l},{"../utils":32,"./DataReader":18}],21:[function(e,s,o){var r=e("./ArrayReader");function l(n){r.call(this,n)}e("../utils").inherits(l,r),l.prototype.readData=function(n){if(this.checkOffset(n),n===0)return new Uint8Array(0);var c=this.data.subarray(this.zero+this.index,this.zero+this.index+n);return this.index+=n,c},s.exports=l},{"../utils":32,"./ArrayReader":17}],22:[function(e,s,o){var r=e("../utils"),l=e("../support"),n=e("./ArrayReader"),c=e("./StringReader"),g=e("./NodeBufferReader"),y=e("./Uint8ArrayReader");s.exports=function(p){var b=r.getTypeOf(p);return r.checkSupport(b),b!=="string"||l.uint8array?b==="nodebuffer"?new g(p):l.uint8array?new y(r.transformTo("uint8array",p)):new n(r.transformTo("array",p)):new c(p)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,s,o){o.LOCAL_FILE_HEADER="PK",o.CENTRAL_FILE_HEADER="PK",o.CENTRAL_DIRECTORY_END="PK",o.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",o.ZIP64_CENTRAL_DIRECTORY_END="PK",o.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,s,o){var r=e("./GenericWorker"),l=e("../utils");function n(c){r.call(this,"ConvertWorker to "+c),this.destType=c}l.inherits(n,r),n.prototype.processChunk=function(c){this.push({data:l.transformTo(this.destType,c.data),meta:c.meta})},s.exports=n},{"../utils":32,"./GenericWorker":28}],25:[function(e,s,o){var r=e("./GenericWorker"),l=e("../crc32");function n(){r.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(n,r),n.prototype.processChunk=function(c){this.streamInfo.crc32=l(c.data,this.streamInfo.crc32||0),this.push(c)},s.exports=n},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,s,o){var r=e("../utils"),l=e("./GenericWorker");function n(c){l.call(this,"DataLengthProbe for "+c),this.propName=c,this.withStreamInfo(c,0)}r.inherits(n,l),n.prototype.processChunk=function(c){if(c){var g=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=g+c.data.length}l.prototype.processChunk.call(this,c)},s.exports=n},{"../utils":32,"./GenericWorker":28}],27:[function(e,s,o){var r=e("../utils"),l=e("./GenericWorker");function n(c){l.call(this,"DataWorker");var g=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,c.then(function(y){g.dataIsReady=!0,g.data=y,g.max=y&&y.length||0,g.type=r.getTypeOf(y),g.isPaused||g._tickAndRepeat()},function(y){g.error(y)})}r.inherits(n,l),n.prototype.cleanUp=function(){l.prototype.cleanUp.call(this),this.data=null},n.prototype.resume=function(){return!!l.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,r.delay(this._tickAndRepeat,[],this)),!0)},n.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(r.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},n.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var c=null,g=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":c=this.data.substring(this.index,g);break;case"uint8array":c=this.data.subarray(this.index,g);break;case"array":case"nodebuffer":c=this.data.slice(this.index,g)}return this.index=g,this.push({data:c,meta:{percent:this.max?this.index/this.max*100:0}})},s.exports=n},{"../utils":32,"./GenericWorker":28}],28:[function(e,s,o){function r(l){this.name=l||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}r.prototype={push:function(l){this.emit("data",l)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(l){this.emit("error",l)}return!0},error:function(l){return!this.isFinished&&(this.isPaused?this.generatedError=l:(this.isFinished=!0,this.emit("error",l),this.previous&&this.previous.error(l),this.cleanUp()),!0)},on:function(l,n){return this._listeners[l].push(n),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(l,n){if(this._listeners[l])for(var c=0;c<this._listeners[l].length;c++)this._listeners[l][c].call(this,n)},pipe:function(l){return l.registerPrevious(this)},registerPrevious:function(l){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=l.streamInfo,this.mergeStreamInfo(),this.previous=l;var n=this;return l.on("data",function(c){n.processChunk(c)}),l.on("end",function(){n.end()}),l.on("error",function(c){n.error(c)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var l=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),l=!0),this.previous&&this.previous.resume(),!l},flush:function(){},processChunk:function(l){this.push(l)},withStreamInfo:function(l,n){return this.extraStreamInfo[l]=n,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var l in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,l)&&(this.streamInfo[l]=this.extraStreamInfo[l])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var l="Worker "+this.name;return this.previous?this.previous+" -> "+l:l}},s.exports=r},{}],29:[function(e,s,o){var r=e("../utils"),l=e("./ConvertWorker"),n=e("./GenericWorker"),c=e("../base64"),g=e("../support"),y=e("../external"),p=null;if(g.nodestream)try{p=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function b(w,u){return new y.Promise(function(m,d){var k=[],S=w._internalType,E=w._outputType,A=w._mimeType;w.on("data",function(j,O){k.push(j),u&&u(O)}).on("error",function(j){k=[],d(j)}).on("end",function(){try{var j=function(O,N,B){switch(O){case"blob":return r.newBlob(r.transformTo("arraybuffer",N),B);case"base64":return c.encode(N);default:return r.transformTo(O,N)}}(E,function(O,N){var B,U=0,Q=null,x=0;for(B=0;B<N.length;B++)x+=N[B].length;switch(O){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(Q=new Uint8Array(x),B=0;B<N.length;B++)Q.set(N[B],U),U+=N[B].length;return Q;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+O+"'")}}(S,k),A);m(j)}catch(O){d(O)}k=[]}).resume()})}function h(w,u,m){var d=u;switch(u){case"blob":case"arraybuffer":d="uint8array";break;case"base64":d="string"}try{this._internalType=d,this._outputType=u,this._mimeType=m,r.checkSupport(d),this._worker=w.pipe(new l(d)),w.lock()}catch(k){this._worker=new n("error"),this._worker.error(k)}}h.prototype={accumulate:function(w){return b(this,w)},on:function(w,u){var m=this;return w==="data"?this._worker.on(w,function(d){u.call(m,d.data,d.meta)}):this._worker.on(w,function(){r.delay(u,arguments,m)}),this},resume:function(){return r.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(w){if(r.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new p(this,{objectMode:this._outputType!=="nodebuffer"},w)}},s.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,s,o){if(o.base64=!0,o.array=!0,o.string=!0,o.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",o.nodebuffer=typeof Buffer<"u",o.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")o.blob=!1;else{var r=new ArrayBuffer(0);try{o.blob=new Blob([r],{type:"application/zip"}).size===0}catch{try{var l=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);l.append(r),o.blob=l.getBlob("application/zip").size===0}catch{o.blob=!1}}}try{o.nodestream=!!e("readable-stream").Readable}catch{o.nodestream=!1}},{"readable-stream":16}],31:[function(e,s,o){for(var r=e("./utils"),l=e("./support"),n=e("./nodejsUtils"),c=e("./stream/GenericWorker"),g=new Array(256),y=0;y<256;y++)g[y]=252<=y?6:248<=y?5:240<=y?4:224<=y?3:192<=y?2:1;g[254]=g[254]=1;function p(){c.call(this,"utf-8 decode"),this.leftOver=null}function b(){c.call(this,"utf-8 encode")}o.utf8encode=function(h){return l.nodebuffer?n.newBufferFrom(h,"utf-8"):function(w){var u,m,d,k,S,E=w.length,A=0;for(k=0;k<E;k++)(64512&(m=w.charCodeAt(k)))==55296&&k+1<E&&(64512&(d=w.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),k++),A+=m<128?1:m<2048?2:m<65536?3:4;for(u=l.uint8array?new Uint8Array(A):new Array(A),k=S=0;S<A;k++)(64512&(m=w.charCodeAt(k)))==55296&&k+1<E&&(64512&(d=w.charCodeAt(k+1)))==56320&&(m=65536+(m-55296<<10)+(d-56320),k++),m<128?u[S++]=m:(m<2048?u[S++]=192|m>>>6:(m<65536?u[S++]=224|m>>>12:(u[S++]=240|m>>>18,u[S++]=128|m>>>12&63),u[S++]=128|m>>>6&63),u[S++]=128|63&m);return u}(h)},o.utf8decode=function(h){return l.nodebuffer?r.transformTo("nodebuffer",h).toString("utf-8"):function(w){var u,m,d,k,S=w.length,E=new Array(2*S);for(u=m=0;u<S;)if((d=w[u++])<128)E[m++]=d;else if(4<(k=g[d]))E[m++]=65533,u+=k-1;else{for(d&=k===2?31:k===3?15:7;1<k&&u<S;)d=d<<6|63&w[u++],k--;1<k?E[m++]=65533:d<65536?E[m++]=d:(d-=65536,E[m++]=55296|d>>10&1023,E[m++]=56320|1023&d)}return E.length!==m&&(E.subarray?E=E.subarray(0,m):E.length=m),r.applyFromCharCode(E)}(h=r.transformTo(l.uint8array?"uint8array":"array",h))},r.inherits(p,c),p.prototype.processChunk=function(h){var w=r.transformTo(l.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(l.uint8array){var u=w;(w=new Uint8Array(u.length+this.leftOver.length)).set(this.leftOver,0),w.set(u,this.leftOver.length)}else w=this.leftOver.concat(w);this.leftOver=null}var m=function(k,S){var E;for((S=S||k.length)>k.length&&(S=k.length),E=S-1;0<=E&&(192&k[E])==128;)E--;return E<0||E===0?S:E+g[k[E]]>S?E:S}(w),d=w;m!==w.length&&(l.uint8array?(d=w.subarray(0,m),this.leftOver=w.subarray(m,w.length)):(d=w.slice(0,m),this.leftOver=w.slice(m,w.length))),this.push({data:o.utf8decode(d),meta:h.meta})},p.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:o.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},o.Utf8DecodeWorker=p,r.inherits(b,c),b.prototype.processChunk=function(h){this.push({data:o.utf8encode(h.data),meta:h.meta})},o.Utf8EncodeWorker=b},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,s,o){var r=e("./support"),l=e("./base64"),n=e("./nodejsUtils"),c=e("./external");function g(u){return u}function y(u,m){for(var d=0;d<u.length;++d)m[d]=255&u.charCodeAt(d);return m}e("setimmediate"),o.newBlob=function(u,m){o.checkSupport("blob");try{return new Blob([u],{type:m})}catch{try{var d=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return d.append(u),d.getBlob(m)}catch{throw new Error("Bug : can't construct the Blob.")}}};var p={stringifyByChunk:function(u,m,d){var k=[],S=0,E=u.length;if(E<=d)return String.fromCharCode.apply(null,u);for(;S<E;)m==="array"||m==="nodebuffer"?k.push(String.fromCharCode.apply(null,u.slice(S,Math.min(S+d,E)))):k.push(String.fromCharCode.apply(null,u.subarray(S,Math.min(S+d,E)))),S+=d;return k.join("")},stringifyByChar:function(u){for(var m="",d=0;d<u.length;d++)m+=String.fromCharCode(u[d]);return m},applyCanBeUsed:{uint8array:function(){try{return r.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return r.nodebuffer&&String.fromCharCode.apply(null,n.allocBuffer(1)).length===1}catch{return!1}}()}};function b(u){var m=65536,d=o.getTypeOf(u),k=!0;if(d==="uint8array"?k=p.applyCanBeUsed.uint8array:d==="nodebuffer"&&(k=p.applyCanBeUsed.nodebuffer),k)for(;1<m;)try{return p.stringifyByChunk(u,d,m)}catch{m=Math.floor(m/2)}return p.stringifyByChar(u)}function h(u,m){for(var d=0;d<u.length;d++)m[d]=u[d];return m}o.applyFromCharCode=b;var w={};w.string={string:g,array:function(u){return y(u,new Array(u.length))},arraybuffer:function(u){return w.string.uint8array(u).buffer},uint8array:function(u){return y(u,new Uint8Array(u.length))},nodebuffer:function(u){return y(u,n.allocBuffer(u.length))}},w.array={string:b,array:g,arraybuffer:function(u){return new Uint8Array(u).buffer},uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return n.newBufferFrom(u)}},w.arraybuffer={string:function(u){return b(new Uint8Array(u))},array:function(u){return h(new Uint8Array(u),new Array(u.byteLength))},arraybuffer:g,uint8array:function(u){return new Uint8Array(u)},nodebuffer:function(u){return n.newBufferFrom(new Uint8Array(u))}},w.uint8array={string:b,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return u.buffer},uint8array:g,nodebuffer:function(u){return n.newBufferFrom(u)}},w.nodebuffer={string:b,array:function(u){return h(u,new Array(u.length))},arraybuffer:function(u){return w.nodebuffer.uint8array(u).buffer},uint8array:function(u){return h(u,new Uint8Array(u.length))},nodebuffer:g},o.transformTo=function(u,m){if(m=m||"",!u)return m;o.checkSupport(u);var d=o.getTypeOf(m);return w[d][u](m)},o.resolve=function(u){for(var m=u.split("/"),d=[],k=0;k<m.length;k++){var S=m[k];S==="."||S===""&&k!==0&&k!==m.length-1||(S===".."?d.pop():d.push(S))}return d.join("/")},o.getTypeOf=function(u){return typeof u=="string"?"string":Object.prototype.toString.call(u)==="[object Array]"?"array":r.nodebuffer&&n.isBuffer(u)?"nodebuffer":r.uint8array&&u instanceof Uint8Array?"uint8array":r.arraybuffer&&u instanceof ArrayBuffer?"arraybuffer":void 0},o.checkSupport=function(u){if(!r[u.toLowerCase()])throw new Error(u+" is not supported by this platform")},o.MAX_VALUE_16BITS=65535,o.MAX_VALUE_32BITS=-1,o.pretty=function(u){var m,d,k="";for(d=0;d<(u||"").length;d++)k+="\\x"+((m=u.charCodeAt(d))<16?"0":"")+m.toString(16).toUpperCase();return k},o.delay=function(u,m,d){setImmediate(function(){u.apply(d||null,m||[])})},o.inherits=function(u,m){function d(){}d.prototype=m.prototype,u.prototype=new d},o.extend=function(){var u,m,d={};for(u=0;u<arguments.length;u++)for(m in arguments[u])Object.prototype.hasOwnProperty.call(arguments[u],m)&&d[m]===void 0&&(d[m]=arguments[u][m]);return d},o.prepareContent=function(u,m,d,k,S){return c.Promise.resolve(m).then(function(E){return r.blob&&(E instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(E))!==-1)&&typeof FileReader<"u"?new c.Promise(function(A,j){var O=new FileReader;O.onload=function(N){A(N.target.result)},O.onerror=function(N){j(N.target.error)},O.readAsArrayBuffer(E)}):E}).then(function(E){var A=o.getTypeOf(E);return A?(A==="arraybuffer"?E=o.transformTo("uint8array",E):A==="string"&&(S?E=l.decode(E):d&&k!==!0&&(E=function(j){return y(j,r.uint8array?new Uint8Array(j.length):new Array(j.length))}(E))),E):c.Promise.reject(new Error("Can't read the data of '"+u+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,s,o){var r=e("./reader/readerFor"),l=e("./utils"),n=e("./signature"),c=e("./zipEntry"),g=e("./support");function y(p){this.files=[],this.loadOptions=p}y.prototype={checkSignature:function(p){if(!this.reader.readAndCheckSignature(p)){this.reader.index-=4;var b=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+l.pretty(b)+", expected "+l.pretty(p)+")")}},isSignature:function(p,b){var h=this.reader.index;this.reader.setIndex(p);var w=this.reader.readString(4)===b;return this.reader.setIndex(h),w},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var p=this.reader.readData(this.zipCommentLength),b=g.uint8array?"uint8array":"array",h=l.transformTo(b,p);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var p,b,h,w=this.zip64EndOfCentralSize-44;0<w;)p=this.reader.readInt(2),b=this.reader.readInt(4),h=this.reader.readData(b),this.zip64ExtensibleData[p]={id:p,length:b,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var p,b;for(p=0;p<this.files.length;p++)b=this.files[p],this.reader.setIndex(b.localHeaderOffset),this.checkSignature(n.LOCAL_FILE_HEADER),b.readLocalPart(this.reader),b.handleUTF8(),b.processAttributes()},readCentralDir:function(){var p;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(n.CENTRAL_FILE_HEADER);)(p=new c({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(p);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var p=this.reader.lastIndexOfSignature(n.CENTRAL_DIRECTORY_END);if(p<0)throw this.isSignature(0,n.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(p);var b=p;if(this.checkSignature(n.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===l.MAX_VALUE_16BITS||this.diskWithCentralDirStart===l.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===l.MAX_VALUE_16BITS||this.centralDirRecords===l.MAX_VALUE_16BITS||this.centralDirSize===l.MAX_VALUE_32BITS||this.centralDirOffset===l.MAX_VALUE_32BITS){if(this.zip64=!0,(p=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(p),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,n.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(n.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var w=b-h;if(0<w)this.isSignature(b,n.CENTRAL_FILE_HEADER)||(this.reader.zero=w);else if(w<0)throw new Error("Corrupted zip: missing "+Math.abs(w)+" bytes.")},prepareReader:function(p){this.reader=r(p)},load:function(p){this.prepareReader(p),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},s.exports=y},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,s,o){var r=e("./reader/readerFor"),l=e("./utils"),n=e("./compressedObject"),c=e("./crc32"),g=e("./utf8"),y=e("./compressions"),p=e("./support");function b(h,w){this.options=h,this.loadOptions=w}b.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var w,u;if(h.skip(22),this.fileNameLength=h.readInt(2),u=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(u),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((w=function(m){for(var d in y)if(Object.prototype.hasOwnProperty.call(y,d)&&y[d].magic===m)return y[d];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+l.pretty(this.compressionMethod)+" unknown (inner file : "+l.transformTo("string",this.fileName)+")");this.decompressed=new n(this.compressedSize,this.uncompressedSize,this.crc32,w,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var w=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(w),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=r(this.extraFields[1].value);this.uncompressedSize===l.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===l.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===l.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===l.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var w,u,m,d=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<d;)w=h.readInt(2),u=h.readInt(2),m=h.readData(u),this.extraFields[w]={id:w,length:u,value:m};h.setIndex(d)},handleUTF8:function(){var h=p.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=g.utf8decode(this.fileName),this.fileCommentStr=g.utf8decode(this.fileComment);else{var w=this.findExtraFieldUnicodePath();if(w!==null)this.fileNameStr=w;else{var u=l.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(u)}var m=this.findExtraFieldUnicodeComment();if(m!==null)this.fileCommentStr=m;else{var d=l.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(d)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var w=r(h.value);return w.readInt(1)!==1||c(this.fileName)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var w=r(h.value);return w.readInt(1)!==1||c(this.fileComment)!==w.readInt(4)?null:g.utf8decode(w.readData(h.length-5))}return null}},s.exports=b},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,s,o){function r(w,u,m){this.name=w,this.dir=m.dir,this.date=m.date,this.comment=m.comment,this.unixPermissions=m.unixPermissions,this.dosPermissions=m.dosPermissions,this._data=u,this._dataBinary=m.binary,this.options={compression:m.compression,compressionOptions:m.compressionOptions}}var l=e("./stream/StreamHelper"),n=e("./stream/DataWorker"),c=e("./utf8"),g=e("./compressedObject"),y=e("./stream/GenericWorker");r.prototype={internalStream:function(w){var u=null,m="string";try{if(!w)throw new Error("No output type specified.");var d=(m=w.toLowerCase())==="string"||m==="text";m!=="binarystring"&&m!=="text"||(m="string"),u=this._decompressWorker();var k=!this._dataBinary;k&&!d&&(u=u.pipe(new c.Utf8EncodeWorker)),!k&&d&&(u=u.pipe(new c.Utf8DecodeWorker))}catch(S){(u=new y("error")).error(S)}return new l(u,m,"")},async:function(w,u){return this.internalStream(w).accumulate(u)},nodeStream:function(w,u){return this.internalStream(w||"nodebuffer").toNodejsStream(u)},_compressWorker:function(w,u){if(this._data instanceof g&&this._data.compression.magic===w.magic)return this._data.getCompressedWorker();var m=this._decompressWorker();return this._dataBinary||(m=m.pipe(new c.Utf8EncodeWorker)),g.createWorkerFrom(m,w,u)},_decompressWorker:function(){return this._data instanceof g?this._data.getContentWorker():this._data instanceof y?this._data:new n(this._data)}};for(var p=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],b=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<p.length;h++)r.prototype[p[h]]=b;s.exports=r},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,s,o){(function(r){var l,n,c=r.MutationObserver||r.WebKitMutationObserver;if(c){var g=0,y=new c(w),p=r.document.createTextNode("");y.observe(p,{characterData:!0}),l=function(){p.data=g=++g%2}}else if(r.setImmediate||r.MessageChannel===void 0)l="document"in r&&"onreadystatechange"in r.document.createElement("script")?function(){var u=r.document.createElement("script");u.onreadystatechange=function(){w(),u.onreadystatechange=null,u.parentNode.removeChild(u),u=null},r.document.documentElement.appendChild(u)}:function(){setTimeout(w,0)};else{var b=new r.MessageChannel;b.port1.onmessage=w,l=function(){b.port2.postMessage(0)}}var h=[];function w(){var u,m;n=!0;for(var d=h.length;d;){for(m=h,h=[],u=-1;++u<d;)m[u]();d=h.length}n=!1}s.exports=function(u){h.push(u)!==1||n||l()}}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,s,o){var r=e("immediate");function l(){}var n={},c=["REJECTED"],g=["FULFILLED"],y=["PENDING"];function p(d){if(typeof d!="function")throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,d!==l&&u(this,d)}function b(d,k,S){this.promise=d,typeof k=="function"&&(this.onFulfilled=k,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function h(d,k,S){r(function(){var E;try{E=k(S)}catch(A){return n.reject(d,A)}E===d?n.reject(d,new TypeError("Cannot resolve promise with itself")):n.resolve(d,E)})}function w(d){var k=d&&d.then;if(d&&(typeof d=="object"||typeof d=="function")&&typeof k=="function")return function(){k.apply(d,arguments)}}function u(d,k){var S=!1;function E(O){S||(S=!0,n.reject(d,O))}function A(O){S||(S=!0,n.resolve(d,O))}var j=m(function(){k(A,E)});j.status==="error"&&E(j.value)}function m(d,k){var S={};try{S.value=d(k),S.status="success"}catch(E){S.status="error",S.value=E}return S}(s.exports=p).prototype.finally=function(d){if(typeof d!="function")return this;var k=this.constructor;return this.then(function(S){return k.resolve(d()).then(function(){return S})},function(S){return k.resolve(d()).then(function(){throw S})})},p.prototype.catch=function(d){return this.then(null,d)},p.prototype.then=function(d,k){if(typeof d!="function"&&this.state===g||typeof k!="function"&&this.state===c)return this;var S=new this.constructor(l);return this.state!==y?h(S,this.state===g?d:k,this.outcome):this.queue.push(new b(S,d,k)),S},b.prototype.callFulfilled=function(d){n.resolve(this.promise,d)},b.prototype.otherCallFulfilled=function(d){h(this.promise,this.onFulfilled,d)},b.prototype.callRejected=function(d){n.reject(this.promise,d)},b.prototype.otherCallRejected=function(d){h(this.promise,this.onRejected,d)},n.resolve=function(d,k){var S=m(w,k);if(S.status==="error")return n.reject(d,S.value);var E=S.value;if(E)u(d,E);else{d.state=g,d.outcome=k;for(var A=-1,j=d.queue.length;++A<j;)d.queue[A].callFulfilled(k)}return d},n.reject=function(d,k){d.state=c,d.outcome=k;for(var S=-1,E=d.queue.length;++S<E;)d.queue[S].callRejected(k);return d},p.resolve=function(d){return d instanceof this?d:n.resolve(new this(l),d)},p.reject=function(d){var k=new this(l);return n.reject(k,d)},p.all=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,E=!1;if(!S)return this.resolve([]);for(var A=new Array(S),j=0,O=-1,N=new this(l);++O<S;)B(d[O],O);return N;function B(U,Q){k.resolve(U).then(function(x){A[Q]=x,++j!==S||E||(E=!0,n.resolve(N,A))},function(x){E||(E=!0,n.reject(N,x))})}},p.race=function(d){var k=this;if(Object.prototype.toString.call(d)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=d.length,E=!1;if(!S)return this.resolve([]);for(var A=-1,j=new this(l);++A<S;)O=d[A],k.resolve(O).then(function(N){E||(E=!0,n.resolve(j,N))},function(N){E||(E=!0,n.reject(j,N))});var O;return j}},{immediate:36}],38:[function(e,s,o){var r={};(0,e("./lib/utils/common").assign)(r,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),s.exports=r},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,s,o){var r=e("./zlib/deflate"),l=e("./utils/common"),n=e("./utils/strings"),c=e("./zlib/messages"),g=e("./zlib/zstream"),y=Object.prototype.toString,p=0,b=-1,h=0,w=8;function u(d){if(!(this instanceof u))return new u(d);this.options=l.assign({level:b,method:w,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},d||{});var k=this.options;k.raw&&0<k.windowBits?k.windowBits=-k.windowBits:k.gzip&&0<k.windowBits&&k.windowBits<16&&(k.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new g,this.strm.avail_out=0;var S=r.deflateInit2(this.strm,k.level,k.method,k.windowBits,k.memLevel,k.strategy);if(S!==p)throw new Error(c[S]);if(k.header&&r.deflateSetHeader(this.strm,k.header),k.dictionary){var E;if(E=typeof k.dictionary=="string"?n.string2buf(k.dictionary):y.call(k.dictionary)==="[object ArrayBuffer]"?new Uint8Array(k.dictionary):k.dictionary,(S=r.deflateSetDictionary(this.strm,E))!==p)throw new Error(c[S]);this._dict_set=!0}}function m(d,k){var S=new u(k);if(S.push(d,!0),S.err)throw S.msg||c[S.err];return S.result}u.prototype.push=function(d,k){var S,E,A=this.strm,j=this.options.chunkSize;if(this.ended)return!1;E=k===~~k?k:k===!0?4:0,typeof d=="string"?A.input=n.string2buf(d):y.call(d)==="[object ArrayBuffer]"?A.input=new Uint8Array(d):A.input=d,A.next_in=0,A.avail_in=A.input.length;do{if(A.avail_out===0&&(A.output=new l.Buf8(j),A.next_out=0,A.avail_out=j),(S=r.deflate(A,E))!==1&&S!==p)return this.onEnd(S),!(this.ended=!0);A.avail_out!==0&&(A.avail_in!==0||E!==4&&E!==2)||(this.options.to==="string"?this.onData(n.buf2binstring(l.shrinkBuf(A.output,A.next_out))):this.onData(l.shrinkBuf(A.output,A.next_out)))}while((0<A.avail_in||A.avail_out===0)&&S!==1);return E===4?(S=r.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===p):E!==2||(this.onEnd(p),!(A.avail_out=0))},u.prototype.onData=function(d){this.chunks.push(d)},u.prototype.onEnd=function(d){d===p&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=d,this.msg=this.strm.msg},o.Deflate=u,o.deflate=m,o.deflateRaw=function(d,k){return(k=k||{}).raw=!0,m(d,k)},o.gzip=function(d,k){return(k=k||{}).gzip=!0,m(d,k)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,s,o){var r=e("./zlib/inflate"),l=e("./utils/common"),n=e("./utils/strings"),c=e("./zlib/constants"),g=e("./zlib/messages"),y=e("./zlib/zstream"),p=e("./zlib/gzheader"),b=Object.prototype.toString;function h(u){if(!(this instanceof h))return new h(u);this.options=l.assign({chunkSize:16384,windowBits:0,to:""},u||{});var m=this.options;m.raw&&0<=m.windowBits&&m.windowBits<16&&(m.windowBits=-m.windowBits,m.windowBits===0&&(m.windowBits=-15)),!(0<=m.windowBits&&m.windowBits<16)||u&&u.windowBits||(m.windowBits+=32),15<m.windowBits&&m.windowBits<48&&!(15&m.windowBits)&&(m.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new y,this.strm.avail_out=0;var d=r.inflateInit2(this.strm,m.windowBits);if(d!==c.Z_OK)throw new Error(g[d]);this.header=new p,r.inflateGetHeader(this.strm,this.header)}function w(u,m){var d=new h(m);if(d.push(u,!0),d.err)throw d.msg||g[d.err];return d.result}h.prototype.push=function(u,m){var d,k,S,E,A,j,O=this.strm,N=this.options.chunkSize,B=this.options.dictionary,U=!1;if(this.ended)return!1;k=m===~~m?m:m===!0?c.Z_FINISH:c.Z_NO_FLUSH,typeof u=="string"?O.input=n.binstring2buf(u):b.call(u)==="[object ArrayBuffer]"?O.input=new Uint8Array(u):O.input=u,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new l.Buf8(N),O.next_out=0,O.avail_out=N),(d=r.inflate(O,c.Z_NO_FLUSH))===c.Z_NEED_DICT&&B&&(j=typeof B=="string"?n.string2buf(B):b.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,d=r.inflateSetDictionary(this.strm,j)),d===c.Z_BUF_ERROR&&U===!0&&(d=c.Z_OK,U=!1),d!==c.Z_STREAM_END&&d!==c.Z_OK)return this.onEnd(d),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&d!==c.Z_STREAM_END&&(O.avail_in!==0||k!==c.Z_FINISH&&k!==c.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=n.utf8border(O.output,O.next_out),E=O.next_out-S,A=n.buf2string(O.output,S),O.next_out=E,O.avail_out=N-E,E&&l.arraySet(O.output,O.output,S,E,0),this.onData(A)):this.onData(l.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(U=!0)}while((0<O.avail_in||O.avail_out===0)&&d!==c.Z_STREAM_END);return d===c.Z_STREAM_END&&(k=c.Z_FINISH),k===c.Z_FINISH?(d=r.inflateEnd(this.strm),this.onEnd(d),this.ended=!0,d===c.Z_OK):k!==c.Z_SYNC_FLUSH||(this.onEnd(c.Z_OK),!(O.avail_out=0))},h.prototype.onData=function(u){this.chunks.push(u)},h.prototype.onEnd=function(u){u===c.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=l.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},o.Inflate=h,o.inflate=w,o.inflateRaw=function(u,m){return(m=m||{}).raw=!0,w(u,m)},o.ungzip=w},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,s,o){var r=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";o.assign=function(c){for(var g=Array.prototype.slice.call(arguments,1);g.length;){var y=g.shift();if(y){if(typeof y!="object")throw new TypeError(y+"must be non-object");for(var p in y)y.hasOwnProperty(p)&&(c[p]=y[p])}}return c},o.shrinkBuf=function(c,g){return c.length===g?c:c.subarray?c.subarray(0,g):(c.length=g,c)};var l={arraySet:function(c,g,y,p,b){if(g.subarray&&c.subarray)c.set(g.subarray(y,y+p),b);else for(var h=0;h<p;h++)c[b+h]=g[y+h]},flattenChunks:function(c){var g,y,p,b,h,w;for(g=p=0,y=c.length;g<y;g++)p+=c[g].length;for(w=new Uint8Array(p),g=b=0,y=c.length;g<y;g++)h=c[g],w.set(h,b),b+=h.length;return w}},n={arraySet:function(c,g,y,p,b){for(var h=0;h<p;h++)c[b+h]=g[y+h]},flattenChunks:function(c){return[].concat.apply([],c)}};o.setTyped=function(c){c?(o.Buf8=Uint8Array,o.Buf16=Uint16Array,o.Buf32=Int32Array,o.assign(o,l)):(o.Buf8=Array,o.Buf16=Array,o.Buf32=Array,o.assign(o,n))},o.setTyped(r)},{}],42:[function(e,s,o){var r=e("./common"),l=!0,n=!0;try{String.fromCharCode.apply(null,[0])}catch{l=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{n=!1}for(var c=new r.Buf8(256),g=0;g<256;g++)c[g]=252<=g?6:248<=g?5:240<=g?4:224<=g?3:192<=g?2:1;function y(p,b){if(b<65537&&(p.subarray&&n||!p.subarray&&l))return String.fromCharCode.apply(null,r.shrinkBuf(p,b));for(var h="",w=0;w<b;w++)h+=String.fromCharCode(p[w]);return h}c[254]=c[254]=1,o.string2buf=function(p){var b,h,w,u,m,d=p.length,k=0;for(u=0;u<d;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),u++),k+=h<128?1:h<2048?2:h<65536?3:4;for(b=new r.Buf8(k),u=m=0;m<k;u++)(64512&(h=p.charCodeAt(u)))==55296&&u+1<d&&(64512&(w=p.charCodeAt(u+1)))==56320&&(h=65536+(h-55296<<10)+(w-56320),u++),h<128?b[m++]=h:(h<2048?b[m++]=192|h>>>6:(h<65536?b[m++]=224|h>>>12:(b[m++]=240|h>>>18,b[m++]=128|h>>>12&63),b[m++]=128|h>>>6&63),b[m++]=128|63&h);return b},o.buf2binstring=function(p){return y(p,p.length)},o.binstring2buf=function(p){for(var b=new r.Buf8(p.length),h=0,w=b.length;h<w;h++)b[h]=p.charCodeAt(h);return b},o.buf2string=function(p,b){var h,w,u,m,d=b||p.length,k=new Array(2*d);for(h=w=0;h<d;)if((u=p[h++])<128)k[w++]=u;else if(4<(m=c[u]))k[w++]=65533,h+=m-1;else{for(u&=m===2?31:m===3?15:7;1<m&&h<d;)u=u<<6|63&p[h++],m--;1<m?k[w++]=65533:u<65536?k[w++]=u:(u-=65536,k[w++]=55296|u>>10&1023,k[w++]=56320|1023&u)}return y(k,w)},o.utf8border=function(p,b){var h;for((b=b||p.length)>p.length&&(b=p.length),h=b-1;0<=h&&(192&p[h])==128;)h--;return h<0||h===0?b:h+c[p[h]]>b?h:b}},{"./common":41}],43:[function(e,s,o){s.exports=function(r,l,n,c){for(var g=65535&r|0,y=r>>>16&65535|0,p=0;n!==0;){for(n-=p=2e3<n?2e3:n;y=y+(g=g+l[c++]|0)|0,--p;);g%=65521,y%=65521}return g|y<<16|0}},{}],44:[function(e,s,o){s.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,s,o){var r=function(){for(var l,n=[],c=0;c<256;c++){l=c;for(var g=0;g<8;g++)l=1&l?3988292384^l>>>1:l>>>1;n[c]=l}return n}();s.exports=function(l,n,c,g){var y=r,p=g+c;l^=-1;for(var b=g;b<p;b++)l=l>>>8^y[255&(l^n[b])];return-1^l}},{}],46:[function(e,s,o){var r,l=e("../utils/common"),n=e("./trees"),c=e("./adler32"),g=e("./crc32"),y=e("./messages"),p=0,b=4,h=0,w=-2,u=-1,m=4,d=2,k=8,S=9,E=286,A=30,j=19,O=2*E+1,N=15,B=3,U=258,Q=U+B+1,x=42,D=113,a=1,H=2,et=3,F=4;function it(i,M){return i.msg=y[M],M}function P(i){return(i<<1)-(4<i?9:0)}function tt(i){for(var M=i.length;0<=--M;)i[M]=0}function T(i){var M=i.state,z=M.pending;z>i.avail_out&&(z=i.avail_out),z!==0&&(l.arraySet(i.output,M.pending_buf,M.pending_out,z,i.next_out),i.next_out+=z,M.pending_out+=z,i.total_out+=z,i.avail_out-=z,M.pending-=z,M.pending===0&&(M.pending_out=0))}function R(i,M){n._tr_flush_block(i,0<=i.block_start?i.block_start:-1,i.strstart-i.block_start,M),i.block_start=i.strstart,T(i.strm)}function X(i,M){i.pending_buf[i.pending++]=M}function J(i,M){i.pending_buf[i.pending++]=M>>>8&255,i.pending_buf[i.pending++]=255&M}function W(i,M){var z,v,f=i.max_chain_length,C=i.strstart,I=i.prev_length,q=i.nice_match,L=i.strstart>i.w_size-Q?i.strstart-(i.w_size-Q):0,$=i.window,G=i.w_mask,V=i.prev,Y=i.strstart+U,at=$[C+I-1],nt=$[C+I];i.prev_length>=i.good_match&&(f>>=2),q>i.lookahead&&(q=i.lookahead);do if($[(z=M)+I]===nt&&$[z+I-1]===at&&$[z]===$[C]&&$[++z]===$[C+1]){C+=2,z++;do;while($[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&$[++C]===$[++z]&&C<Y);if(v=U-(Y-C),C=Y-U,I<v){if(i.match_start=M,q<=(I=v))break;at=$[C+I-1],nt=$[C+I]}}while((M=V[M&G])>L&&--f!=0);return I<=i.lookahead?I:i.lookahead}function lt(i){var M,z,v,f,C,I,q,L,$,G,V=i.w_size;do{if(f=i.window_size-i.lookahead-i.strstart,i.strstart>=V+(V-Q)){for(l.arraySet(i.window,i.window,V,V,0),i.match_start-=V,i.strstart-=V,i.block_start-=V,M=z=i.hash_size;v=i.head[--M],i.head[M]=V<=v?v-V:0,--z;);for(M=z=V;v=i.prev[--M],i.prev[M]=V<=v?v-V:0,--z;);f+=V}if(i.strm.avail_in===0)break;if(I=i.strm,q=i.window,L=i.strstart+i.lookahead,$=f,G=void 0,G=I.avail_in,$<G&&(G=$),z=G===0?0:(I.avail_in-=G,l.arraySet(q,I.input,I.next_in,G,L),I.state.wrap===1?I.adler=c(I.adler,q,G,L):I.state.wrap===2&&(I.adler=g(I.adler,q,G,L)),I.next_in+=G,I.total_in+=G,G),i.lookahead+=z,i.lookahead+i.insert>=B)for(C=i.strstart-i.insert,i.ins_h=i.window[C],i.ins_h=(i.ins_h<<i.hash_shift^i.window[C+1])&i.hash_mask;i.insert&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[C+B-1])&i.hash_mask,i.prev[C&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=C,C++,i.insert--,!(i.lookahead+i.insert<B)););}while(i.lookahead<Q&&i.strm.avail_in!==0)}function ft(i,M){for(var z,v;;){if(i.lookahead<Q){if(lt(i),i.lookahead<Q&&M===p)return a;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),z!==0&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z)),i.match_length>=B)if(v=n._tr_tally(i,i.strstart-i.match_start,i.match_length-B),i.lookahead-=i.match_length,i.match_length<=i.max_lazy_match&&i.lookahead>=B){for(i.match_length--;i.strstart++,i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart,--i.match_length!=0;);i.strstart++}else i.strstart+=i.match_length,i.match_length=0,i.ins_h=i.window[i.strstart],i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+1])&i.hash_mask;else v=n._tr_tally(i,0,i.window[i.strstart]),i.lookahead--,i.strstart++;if(v&&(R(i,!1),i.strm.avail_out===0))return a}return i.insert=i.strstart<B-1?i.strstart:B-1,M===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?a:H}function st(i,M){for(var z,v,f;;){if(i.lookahead<Q){if(lt(i),i.lookahead<Q&&M===p)return a;if(i.lookahead===0)break}if(z=0,i.lookahead>=B&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),i.prev_length=i.match_length,i.prev_match=i.match_start,i.match_length=B-1,z!==0&&i.prev_length<i.max_lazy_match&&i.strstart-z<=i.w_size-Q&&(i.match_length=W(i,z),i.match_length<=5&&(i.strategy===1||i.match_length===B&&4096<i.strstart-i.match_start)&&(i.match_length=B-1)),i.prev_length>=B&&i.match_length<=i.prev_length){for(f=i.strstart+i.lookahead-B,v=n._tr_tally(i,i.strstart-1-i.prev_match,i.prev_length-B),i.lookahead-=i.prev_length-1,i.prev_length-=2;++i.strstart<=f&&(i.ins_h=(i.ins_h<<i.hash_shift^i.window[i.strstart+B-1])&i.hash_mask,z=i.prev[i.strstart&i.w_mask]=i.head[i.ins_h],i.head[i.ins_h]=i.strstart),--i.prev_length!=0;);if(i.match_available=0,i.match_length=B-1,i.strstart++,v&&(R(i,!1),i.strm.avail_out===0))return a}else if(i.match_available){if((v=n._tr_tally(i,0,i.window[i.strstart-1]))&&R(i,!1),i.strstart++,i.lookahead--,i.strm.avail_out===0)return a}else i.match_available=1,i.strstart++,i.lookahead--}return i.match_available&&(v=n._tr_tally(i,0,i.window[i.strstart-1]),i.match_available=0),i.insert=i.strstart<B-1?i.strstart:B-1,M===b?(R(i,!0),i.strm.avail_out===0?et:F):i.last_lit&&(R(i,!1),i.strm.avail_out===0)?a:H}function ot(i,M,z,v,f){this.good_length=i,this.max_lazy=M,this.nice_length=z,this.max_chain=v,this.func=f}function ht(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=k,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new l.Buf16(2*O),this.dyn_dtree=new l.Buf16(2*(2*A+1)),this.bl_tree=new l.Buf16(2*(2*j+1)),tt(this.dyn_ltree),tt(this.dyn_dtree),tt(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new l.Buf16(N+1),this.heap=new l.Buf16(2*E+1),tt(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new l.Buf16(2*E+1),tt(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ut(i){var M;return i&&i.state?(i.total_in=i.total_out=0,i.data_type=d,(M=i.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?x:D,i.adler=M.wrap===2?0:1,M.last_flush=p,n._tr_init(M),h):it(i,w)}function yt(i){var M=ut(i);return M===h&&function(z){z.window_size=2*z.w_size,tt(z.head),z.max_lazy_match=r[z.level].max_lazy,z.good_match=r[z.level].good_length,z.nice_match=r[z.level].nice_length,z.max_chain_length=r[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(i.state),M}function bt(i,M,z,v,f,C){if(!i)return w;var I=1;if(M===u&&(M=6),v<0?(I=0,v=-v):15<v&&(I=2,v-=16),f<1||S<f||z!==k||v<8||15<v||M<0||9<M||C<0||m<C)return it(i,w);v===8&&(v=9);var q=new ht;return(i.state=q).strm=i,q.wrap=I,q.gzhead=null,q.w_bits=v,q.w_size=1<<q.w_bits,q.w_mask=q.w_size-1,q.hash_bits=f+7,q.hash_size=1<<q.hash_bits,q.hash_mask=q.hash_size-1,q.hash_shift=~~((q.hash_bits+B-1)/B),q.window=new l.Buf8(2*q.w_size),q.head=new l.Buf16(q.hash_size),q.prev=new l.Buf16(q.w_size),q.lit_bufsize=1<<f+6,q.pending_buf_size=4*q.lit_bufsize,q.pending_buf=new l.Buf8(q.pending_buf_size),q.d_buf=1*q.lit_bufsize,q.l_buf=3*q.lit_bufsize,q.level=M,q.strategy=C,q.method=z,yt(i)}r=[new ot(0,0,0,0,function(i,M){var z=65535;for(z>i.pending_buf_size-5&&(z=i.pending_buf_size-5);;){if(i.lookahead<=1){if(lt(i),i.lookahead===0&&M===p)return a;if(i.lookahead===0)break}i.strstart+=i.lookahead,i.lookahead=0;var v=i.block_start+z;if((i.strstart===0||i.strstart>=v)&&(i.lookahead=i.strstart-v,i.strstart=v,R(i,!1),i.strm.avail_out===0)||i.strstart-i.block_start>=i.w_size-Q&&(R(i,!1),i.strm.avail_out===0))return a}return i.insert=0,M===b?(R(i,!0),i.strm.avail_out===0?et:F):(i.strstart>i.block_start&&(R(i,!1),i.strm.avail_out),a)}),new ot(4,4,8,4,ft),new ot(4,5,16,8,ft),new ot(4,6,32,32,ft),new ot(4,4,16,16,st),new ot(8,16,32,32,st),new ot(8,16,128,128,st),new ot(8,32,128,256,st),new ot(32,128,258,1024,st),new ot(32,258,258,4096,st)],o.deflateInit=function(i,M){return bt(i,M,k,15,8,0)},o.deflateInit2=bt,o.deflateReset=yt,o.deflateResetKeep=ut,o.deflateSetHeader=function(i,M){return i&&i.state?i.state.wrap!==2?w:(i.state.gzhead=M,h):w},o.deflate=function(i,M){var z,v,f,C;if(!i||!i.state||5<M||M<0)return i?it(i,w):w;if(v=i.state,!i.output||!i.input&&i.avail_in!==0||v.status===666&&M!==b)return it(i,i.avail_out===0?-5:w);if(v.strm=i,z=v.last_flush,v.last_flush=M,v.status===x)if(v.wrap===2)i.adler=0,X(v,31),X(v,139),X(v,8),v.gzhead?(X(v,(v.gzhead.text?1:0)+(v.gzhead.hcrc?2:0)+(v.gzhead.extra?4:0)+(v.gzhead.name?8:0)+(v.gzhead.comment?16:0)),X(v,255&v.gzhead.time),X(v,v.gzhead.time>>8&255),X(v,v.gzhead.time>>16&255),X(v,v.gzhead.time>>24&255),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,255&v.gzhead.os),v.gzhead.extra&&v.gzhead.extra.length&&(X(v,255&v.gzhead.extra.length),X(v,v.gzhead.extra.length>>8&255)),v.gzhead.hcrc&&(i.adler=g(i.adler,v.pending_buf,v.pending,0)),v.gzindex=0,v.status=69):(X(v,0),X(v,0),X(v,0),X(v,0),X(v,0),X(v,v.level===9?2:2<=v.strategy||v.level<2?4:0),X(v,3),v.status=D);else{var I=k+(v.w_bits-8<<4)<<8;I|=(2<=v.strategy||v.level<2?0:v.level<6?1:v.level===6?2:3)<<6,v.strstart!==0&&(I|=32),I+=31-I%31,v.status=D,J(v,I),v.strstart!==0&&(J(v,i.adler>>>16),J(v,65535&i.adler)),i.adler=1}if(v.status===69)if(v.gzhead.extra){for(f=v.pending;v.gzindex<(65535&v.gzhead.extra.length)&&(v.pending!==v.pending_buf_size||(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending!==v.pending_buf_size));)X(v,255&v.gzhead.extra[v.gzindex]),v.gzindex++;v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),v.gzindex===v.gzhead.extra.length&&(v.gzindex=0,v.status=73)}else v.status=73;if(v.status===73)if(v.gzhead.name){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.name.length?255&v.gzhead.name.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.gzindex=0,v.status=91)}else v.status=91;if(v.status===91)if(v.gzhead.comment){f=v.pending;do{if(v.pending===v.pending_buf_size&&(v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),T(i),f=v.pending,v.pending===v.pending_buf_size)){C=1;break}C=v.gzindex<v.gzhead.comment.length?255&v.gzhead.comment.charCodeAt(v.gzindex++):0,X(v,C)}while(C!==0);v.gzhead.hcrc&&v.pending>f&&(i.adler=g(i.adler,v.pending_buf,v.pending-f,f)),C===0&&(v.status=103)}else v.status=103;if(v.status===103&&(v.gzhead.hcrc?(v.pending+2>v.pending_buf_size&&T(i),v.pending+2<=v.pending_buf_size&&(X(v,255&i.adler),X(v,i.adler>>8&255),i.adler=0,v.status=D)):v.status=D),v.pending!==0){if(T(i),i.avail_out===0)return v.last_flush=-1,h}else if(i.avail_in===0&&P(M)<=P(z)&&M!==b)return it(i,-5);if(v.status===666&&i.avail_in!==0)return it(i,-5);if(i.avail_in!==0||v.lookahead!==0||M!==p&&v.status!==666){var q=v.strategy===2?function(L,$){for(var G;;){if(L.lookahead===0&&(lt(L),L.lookahead===0)){if($===p)return a;break}if(L.match_length=0,G=n._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++,G&&(R(L,!1),L.strm.avail_out===0))return a}return L.insert=0,$===b?(R(L,!0),L.strm.avail_out===0?et:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?a:H}(v,M):v.strategy===3?function(L,$){for(var G,V,Y,at,nt=L.window;;){if(L.lookahead<=U){if(lt(L),L.lookahead<=U&&$===p)return a;if(L.lookahead===0)break}if(L.match_length=0,L.lookahead>=B&&0<L.strstart&&(V=nt[Y=L.strstart-1])===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]){at=L.strstart+U;do;while(V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&V===nt[++Y]&&Y<at);L.match_length=U-(at-Y),L.match_length>L.lookahead&&(L.match_length=L.lookahead)}if(L.match_length>=B?(G=n._tr_tally(L,1,L.match_length-B),L.lookahead-=L.match_length,L.strstart+=L.match_length,L.match_length=0):(G=n._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++),G&&(R(L,!1),L.strm.avail_out===0))return a}return L.insert=0,$===b?(R(L,!0),L.strm.avail_out===0?et:F):L.last_lit&&(R(L,!1),L.strm.avail_out===0)?a:H}(v,M):r[v.level].func(v,M);if(q!==et&&q!==F||(v.status=666),q===a||q===et)return i.avail_out===0&&(v.last_flush=-1),h;if(q===H&&(M===1?n._tr_align(v):M!==5&&(n._tr_stored_block(v,0,0,!1),M===3&&(tt(v.head),v.lookahead===0&&(v.strstart=0,v.block_start=0,v.insert=0))),T(i),i.avail_out===0))return v.last_flush=-1,h}return M!==b?h:v.wrap<=0?1:(v.wrap===2?(X(v,255&i.adler),X(v,i.adler>>8&255),X(v,i.adler>>16&255),X(v,i.adler>>24&255),X(v,255&i.total_in),X(v,i.total_in>>8&255),X(v,i.total_in>>16&255),X(v,i.total_in>>24&255)):(J(v,i.adler>>>16),J(v,65535&i.adler)),T(i),0<v.wrap&&(v.wrap=-v.wrap),v.pending!==0?h:1)},o.deflateEnd=function(i){var M;return i&&i.state?(M=i.state.status)!==x&&M!==69&&M!==73&&M!==91&&M!==103&&M!==D&&M!==666?it(i,w):(i.state=null,M===D?it(i,-3):h):w},o.deflateSetDictionary=function(i,M){var z,v,f,C,I,q,L,$,G=M.length;if(!i||!i.state||(C=(z=i.state).wrap)===2||C===1&&z.status!==x||z.lookahead)return w;for(C===1&&(i.adler=c(i.adler,M,G,0)),z.wrap=0,G>=z.w_size&&(C===0&&(tt(z.head),z.strstart=0,z.block_start=0,z.insert=0),$=new l.Buf8(z.w_size),l.arraySet($,M,G-z.w_size,z.w_size,0),M=$,G=z.w_size),I=i.avail_in,q=i.next_in,L=i.input,i.avail_in=G,i.next_in=0,i.input=M,lt(z);z.lookahead>=B;){for(v=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[v+B-1])&z.hash_mask,z.prev[v&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=v,v++,--f;);z.strstart=v,z.lookahead=B-1,lt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,i.next_in=q,i.input=L,i.avail_in=I,z.wrap=C,h},o.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,s,o){s.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,s,o){s.exports=function(r,l){var n,c,g,y,p,b,h,w,u,m,d,k,S,E,A,j,O,N,B,U,Q,x,D,a,H;n=r.state,c=r.next_in,a=r.input,g=c+(r.avail_in-5),y=r.next_out,H=r.output,p=y-(l-r.avail_out),b=y+(r.avail_out-257),h=n.dmax,w=n.wsize,u=n.whave,m=n.wnext,d=n.window,k=n.hold,S=n.bits,E=n.lencode,A=n.distcode,j=(1<<n.lenbits)-1,O=(1<<n.distbits)-1;t:do{S<15&&(k+=a[c++]<<S,S+=8,k+=a[c++]<<S,S+=8),N=E[k&j];e:for(;;){if(k>>>=B=N>>>24,S-=B,(B=N>>>16&255)===0)H[y++]=65535&N;else{if(!(16&B)){if(!(64&B)){N=E[(65535&N)+(k&(1<<B)-1)];continue e}if(32&B){n.mode=12;break t}r.msg="invalid literal/length code",n.mode=30;break t}U=65535&N,(B&=15)&&(S<B&&(k+=a[c++]<<S,S+=8),U+=k&(1<<B)-1,k>>>=B,S-=B),S<15&&(k+=a[c++]<<S,S+=8,k+=a[c++]<<S,S+=8),N=A[k&O];i:for(;;){if(k>>>=B=N>>>24,S-=B,!(16&(B=N>>>16&255))){if(!(64&B)){N=A[(65535&N)+(k&(1<<B)-1)];continue i}r.msg="invalid distance code",n.mode=30;break t}if(Q=65535&N,S<(B&=15)&&(k+=a[c++]<<S,(S+=8)<B&&(k+=a[c++]<<S,S+=8)),h<(Q+=k&(1<<B)-1)){r.msg="invalid distance too far back",n.mode=30;break t}if(k>>>=B,S-=B,(B=y-p)<Q){if(u<(B=Q-B)&&n.sane){r.msg="invalid distance too far back",n.mode=30;break t}if(D=d,(x=0)===m){if(x+=w-B,B<U){for(U-=B;H[y++]=d[x++],--B;);x=y-Q,D=H}}else if(m<B){if(x+=w+m-B,(B-=m)<U){for(U-=B;H[y++]=d[x++],--B;);if(x=0,m<U){for(U-=B=m;H[y++]=d[x++],--B;);x=y-Q,D=H}}}else if(x+=m-B,B<U){for(U-=B;H[y++]=d[x++],--B;);x=y-Q,D=H}for(;2<U;)H[y++]=D[x++],H[y++]=D[x++],H[y++]=D[x++],U-=3;U&&(H[y++]=D[x++],1<U&&(H[y++]=D[x++]))}else{for(x=y-Q;H[y++]=H[x++],H[y++]=H[x++],H[y++]=H[x++],2<(U-=3););U&&(H[y++]=H[x++],1<U&&(H[y++]=H[x++]))}break}}break}}while(c<g&&y<b);c-=U=S>>3,k&=(1<<(S-=U<<3))-1,r.next_in=c,r.next_out=y,r.avail_in=c<g?g-c+5:5-(c-g),r.avail_out=y<b?b-y+257:257-(y-b),n.hold=k,n.bits=S}},{}],49:[function(e,s,o){var r=e("../utils/common"),l=e("./adler32"),n=e("./crc32"),c=e("./inffast"),g=e("./inftrees"),y=1,p=2,b=0,h=-2,w=1,u=852,m=592;function d(x){return(x>>>24&255)+(x>>>8&65280)+((65280&x)<<8)+((255&x)<<24)}function k(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new r.Buf16(320),this.work=new r.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(x){var D;return x&&x.state?(D=x.state,x.total_in=x.total_out=D.total=0,x.msg="",D.wrap&&(x.adler=1&D.wrap),D.mode=w,D.last=0,D.havedict=0,D.dmax=32768,D.head=null,D.hold=0,D.bits=0,D.lencode=D.lendyn=new r.Buf32(u),D.distcode=D.distdyn=new r.Buf32(m),D.sane=1,D.back=-1,b):h}function E(x){var D;return x&&x.state?((D=x.state).wsize=0,D.whave=0,D.wnext=0,S(x)):h}function A(x,D){var a,H;return x&&x.state?(H=x.state,D<0?(a=0,D=-D):(a=1+(D>>4),D<48&&(D&=15)),D&&(D<8||15<D)?h:(H.window!==null&&H.wbits!==D&&(H.window=null),H.wrap=a,H.wbits=D,E(x))):h}function j(x,D){var a,H;return x?(H=new k,(x.state=H).window=null,(a=A(x,D))!==b&&(x.state=null),a):h}var O,N,B=!0;function U(x){if(B){var D;for(O=new r.Buf32(512),N=new r.Buf32(32),D=0;D<144;)x.lens[D++]=8;for(;D<256;)x.lens[D++]=9;for(;D<280;)x.lens[D++]=7;for(;D<288;)x.lens[D++]=8;for(g(y,x.lens,0,288,O,0,x.work,{bits:9}),D=0;D<32;)x.lens[D++]=5;g(p,x.lens,0,32,N,0,x.work,{bits:5}),B=!1}x.lencode=O,x.lenbits=9,x.distcode=N,x.distbits=5}function Q(x,D,a,H){var et,F=x.state;return F.window===null&&(F.wsize=1<<F.wbits,F.wnext=0,F.whave=0,F.window=new r.Buf8(F.wsize)),H>=F.wsize?(r.arraySet(F.window,D,a-F.wsize,F.wsize,0),F.wnext=0,F.whave=F.wsize):(H<(et=F.wsize-F.wnext)&&(et=H),r.arraySet(F.window,D,a-H,et,F.wnext),(H-=et)?(r.arraySet(F.window,D,a-H,H,0),F.wnext=H,F.whave=F.wsize):(F.wnext+=et,F.wnext===F.wsize&&(F.wnext=0),F.whave<F.wsize&&(F.whave+=et))),0}o.inflateReset=E,o.inflateReset2=A,o.inflateResetKeep=S,o.inflateInit=function(x){return j(x,15)},o.inflateInit2=j,o.inflate=function(x,D){var a,H,et,F,it,P,tt,T,R,X,J,W,lt,ft,st,ot,ht,ut,yt,bt,i,M,z,v,f=0,C=new r.Buf8(4),I=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!x||!x.state||!x.output||!x.input&&x.avail_in!==0)return h;(a=x.state).mode===12&&(a.mode=13),it=x.next_out,et=x.output,tt=x.avail_out,F=x.next_in,H=x.input,P=x.avail_in,T=a.hold,R=a.bits,X=P,J=tt,M=b;t:for(;;)switch(a.mode){case w:if(a.wrap===0){a.mode=13;break}for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(2&a.wrap&&T===35615){C[a.check=0]=255&T,C[1]=T>>>8&255,a.check=n(a.check,C,2,0),R=T=0,a.mode=2;break}if(a.flags=0,a.head&&(a.head.done=!1),!(1&a.wrap)||(((255&T)<<8)+(T>>8))%31){x.msg="incorrect header check",a.mode=30;break}if((15&T)!=8){x.msg="unknown compression method",a.mode=30;break}if(R-=4,i=8+(15&(T>>>=4)),a.wbits===0)a.wbits=i;else if(i>a.wbits){x.msg="invalid window size",a.mode=30;break}a.dmax=1<<i,x.adler=a.check=1,a.mode=512&T?10:12,R=T=0;break;case 2:for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(a.flags=T,(255&a.flags)!=8){x.msg="unknown compression method",a.mode=30;break}if(57344&a.flags){x.msg="unknown header flags set",a.mode=30;break}a.head&&(a.head.text=T>>8&1),512&a.flags&&(C[0]=255&T,C[1]=T>>>8&255,a.check=n(a.check,C,2,0)),R=T=0,a.mode=3;case 3:for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.head&&(a.head.time=T),512&a.flags&&(C[0]=255&T,C[1]=T>>>8&255,C[2]=T>>>16&255,C[3]=T>>>24&255,a.check=n(a.check,C,4,0)),R=T=0,a.mode=4;case 4:for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.head&&(a.head.xflags=255&T,a.head.os=T>>8),512&a.flags&&(C[0]=255&T,C[1]=T>>>8&255,a.check=n(a.check,C,2,0)),R=T=0,a.mode=5;case 5:if(1024&a.flags){for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.length=T,a.head&&(a.head.extra_len=T),512&a.flags&&(C[0]=255&T,C[1]=T>>>8&255,a.check=n(a.check,C,2,0)),R=T=0}else a.head&&(a.head.extra=null);a.mode=6;case 6:if(1024&a.flags&&(P<(W=a.length)&&(W=P),W&&(a.head&&(i=a.head.extra_len-a.length,a.head.extra||(a.head.extra=new Array(a.head.extra_len)),r.arraySet(a.head.extra,H,F,W,i)),512&a.flags&&(a.check=n(a.check,H,W,F)),P-=W,F+=W,a.length-=W),a.length))break t;a.length=0,a.mode=7;case 7:if(2048&a.flags){if(P===0)break t;for(W=0;i=H[F+W++],a.head&&i&&a.length<65536&&(a.head.name+=String.fromCharCode(i)),i&&W<P;);if(512&a.flags&&(a.check=n(a.check,H,W,F)),P-=W,F+=W,i)break t}else a.head&&(a.head.name=null);a.length=0,a.mode=8;case 8:if(4096&a.flags){if(P===0)break t;for(W=0;i=H[F+W++],a.head&&i&&a.length<65536&&(a.head.comment+=String.fromCharCode(i)),i&&W<P;);if(512&a.flags&&(a.check=n(a.check,H,W,F)),P-=W,F+=W,i)break t}else a.head&&(a.head.comment=null);a.mode=9;case 9:if(512&a.flags){for(;R<16;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T!==(65535&a.check)){x.msg="header crc mismatch",a.mode=30;break}R=T=0}a.head&&(a.head.hcrc=a.flags>>9&1,a.head.done=!0),x.adler=a.check=0,a.mode=12;break;case 10:for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}x.adler=a.check=d(T),R=T=0,a.mode=11;case 11:if(a.havedict===0)return x.next_out=it,x.avail_out=tt,x.next_in=F,x.avail_in=P,a.hold=T,a.bits=R,2;x.adler=a.check=1,a.mode=12;case 12:if(D===5||D===6)break t;case 13:if(a.last){T>>>=7&R,R-=7&R,a.mode=27;break}for(;R<3;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}switch(a.last=1&T,R-=1,3&(T>>>=1)){case 0:a.mode=14;break;case 1:if(U(a),a.mode=20,D!==6)break;T>>>=2,R-=2;break t;case 2:a.mode=17;break;case 3:x.msg="invalid block type",a.mode=30}T>>>=2,R-=2;break;case 14:for(T>>>=7&R,R-=7&R;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if((65535&T)!=(T>>>16^65535)){x.msg="invalid stored block lengths",a.mode=30;break}if(a.length=65535&T,R=T=0,a.mode=15,D===6)break t;case 15:a.mode=16;case 16:if(W=a.length){if(P<W&&(W=P),tt<W&&(W=tt),W===0)break t;r.arraySet(et,H,F,W,it),P-=W,F+=W,tt-=W,it+=W,a.length-=W;break}a.mode=12;break;case 17:for(;R<14;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(a.nlen=257+(31&T),T>>>=5,R-=5,a.ndist=1+(31&T),T>>>=5,R-=5,a.ncode=4+(15&T),T>>>=4,R-=4,286<a.nlen||30<a.ndist){x.msg="too many length or distance symbols",a.mode=30;break}a.have=0,a.mode=18;case 18:for(;a.have<a.ncode;){for(;R<3;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.lens[I[a.have++]]=7&T,T>>>=3,R-=3}for(;a.have<19;)a.lens[I[a.have++]]=0;if(a.lencode=a.lendyn,a.lenbits=7,z={bits:a.lenbits},M=g(0,a.lens,0,19,a.lencode,0,a.work,z),a.lenbits=z.bits,M){x.msg="invalid code lengths set",a.mode=30;break}a.have=0,a.mode=19;case 19:for(;a.have<a.nlen+a.ndist;){for(;ot=(f=a.lencode[T&(1<<a.lenbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(ht<16)T>>>=st,R-=st,a.lens[a.have++]=ht;else{if(ht===16){for(v=st+2;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T>>>=st,R-=st,a.have===0){x.msg="invalid bit length repeat",a.mode=30;break}i=a.lens[a.have-1],W=3+(3&T),T>>>=2,R-=2}else if(ht===17){for(v=st+3;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}R-=st,i=0,W=3+(7&(T>>>=st)),T>>>=3,R-=3}else{for(v=st+7;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}R-=st,i=0,W=11+(127&(T>>>=st)),T>>>=7,R-=7}if(a.have+W>a.nlen+a.ndist){x.msg="invalid bit length repeat",a.mode=30;break}for(;W--;)a.lens[a.have++]=i}}if(a.mode===30)break;if(a.lens[256]===0){x.msg="invalid code -- missing end-of-block",a.mode=30;break}if(a.lenbits=9,z={bits:a.lenbits},M=g(y,a.lens,0,a.nlen,a.lencode,0,a.work,z),a.lenbits=z.bits,M){x.msg="invalid literal/lengths set",a.mode=30;break}if(a.distbits=6,a.distcode=a.distdyn,z={bits:a.distbits},M=g(p,a.lens,a.nlen,a.ndist,a.distcode,0,a.work,z),a.distbits=z.bits,M){x.msg="invalid distances set",a.mode=30;break}if(a.mode=20,D===6)break t;case 20:a.mode=21;case 21:if(6<=P&&258<=tt){x.next_out=it,x.avail_out=tt,x.next_in=F,x.avail_in=P,a.hold=T,a.bits=R,c(x,J),it=x.next_out,et=x.output,tt=x.avail_out,F=x.next_in,H=x.input,P=x.avail_in,T=a.hold,R=a.bits,a.mode===12&&(a.back=-1);break}for(a.back=0;ot=(f=a.lencode[T&(1<<a.lenbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(ot&&!(240&ot)){for(ut=st,yt=ot,bt=ht;ot=(f=a.lencode[bt+((T&(1<<ut+yt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}T>>>=ut,R-=ut,a.back+=ut}if(T>>>=st,R-=st,a.back+=st,a.length=ht,ot===0){a.mode=26;break}if(32&ot){a.back=-1,a.mode=12;break}if(64&ot){x.msg="invalid literal/length code",a.mode=30;break}a.extra=15&ot,a.mode=22;case 22:if(a.extra){for(v=a.extra;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.length+=T&(1<<a.extra)-1,T>>>=a.extra,R-=a.extra,a.back+=a.extra}a.was=a.length,a.mode=23;case 23:for(;ot=(f=a.distcode[T&(1<<a.distbits)-1])>>>16&255,ht=65535&f,!((st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(!(240&ot)){for(ut=st,yt=ot,bt=ht;ot=(f=a.distcode[bt+((T&(1<<ut+yt)-1)>>ut)])>>>16&255,ht=65535&f,!(ut+(st=f>>>24)<=R);){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}T>>>=ut,R-=ut,a.back+=ut}if(T>>>=st,R-=st,a.back+=st,64&ot){x.msg="invalid distance code",a.mode=30;break}a.offset=ht,a.extra=15&ot,a.mode=24;case 24:if(a.extra){for(v=a.extra;R<v;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}a.offset+=T&(1<<a.extra)-1,T>>>=a.extra,R-=a.extra,a.back+=a.extra}if(a.offset>a.dmax){x.msg="invalid distance too far back",a.mode=30;break}a.mode=25;case 25:if(tt===0)break t;if(W=J-tt,a.offset>W){if((W=a.offset-W)>a.whave&&a.sane){x.msg="invalid distance too far back",a.mode=30;break}lt=W>a.wnext?(W-=a.wnext,a.wsize-W):a.wnext-W,W>a.length&&(W=a.length),ft=a.window}else ft=et,lt=it-a.offset,W=a.length;for(tt<W&&(W=tt),tt-=W,a.length-=W;et[it++]=ft[lt++],--W;);a.length===0&&(a.mode=21);break;case 26:if(tt===0)break t;et[it++]=a.length,tt--,a.mode=21;break;case 27:if(a.wrap){for(;R<32;){if(P===0)break t;P--,T|=H[F++]<<R,R+=8}if(J-=tt,x.total_out+=J,a.total+=J,J&&(x.adler=a.check=a.flags?n(a.check,et,J,it-J):l(a.check,et,J,it-J)),J=tt,(a.flags?T:d(T))!==a.check){x.msg="incorrect data check",a.mode=30;break}R=T=0}a.mode=28;case 28:if(a.wrap&&a.flags){for(;R<32;){if(P===0)break t;P--,T+=H[F++]<<R,R+=8}if(T!==(4294967295&a.total)){x.msg="incorrect length check",a.mode=30;break}R=T=0}a.mode=29;case 29:M=1;break t;case 30:M=-3;break t;case 31:return-4;case 32:default:return h}return x.next_out=it,x.avail_out=tt,x.next_in=F,x.avail_in=P,a.hold=T,a.bits=R,(a.wsize||J!==x.avail_out&&a.mode<30&&(a.mode<27||D!==4))&&Q(x,x.output,x.next_out,J-x.avail_out)?(a.mode=31,-4):(X-=x.avail_in,J-=x.avail_out,x.total_in+=X,x.total_out+=J,a.total+=J,a.wrap&&J&&(x.adler=a.check=a.flags?n(a.check,et,J,x.next_out-J):l(a.check,et,J,x.next_out-J)),x.data_type=a.bits+(a.last?64:0)+(a.mode===12?128:0)+(a.mode===20||a.mode===15?256:0),(X==0&&J===0||D===4)&&M===b&&(M=-5),M)},o.inflateEnd=function(x){if(!x||!x.state)return h;var D=x.state;return D.window&&(D.window=null),x.state=null,b},o.inflateGetHeader=function(x,D){var a;return x&&x.state&&2&(a=x.state).wrap?((a.head=D).done=!1,b):h},o.inflateSetDictionary=function(x,D){var a,H=D.length;return x&&x.state?(a=x.state).wrap!==0&&a.mode!==11?h:a.mode===11&&l(1,D,H,0)!==a.check?-3:Q(x,D,H,H)?(a.mode=31,-4):(a.havedict=1,b):h},o.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,s,o){var r=e("../utils/common"),l=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],n=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],c=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],g=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];s.exports=function(y,p,b,h,w,u,m,d){var k,S,E,A,j,O,N,B,U,Q=d.bits,x=0,D=0,a=0,H=0,et=0,F=0,it=0,P=0,tt=0,T=0,R=null,X=0,J=new r.Buf16(16),W=new r.Buf16(16),lt=null,ft=0;for(x=0;x<=15;x++)J[x]=0;for(D=0;D<h;D++)J[p[b+D]]++;for(et=Q,H=15;1<=H&&J[H]===0;H--);if(H<et&&(et=H),H===0)return w[u++]=20971520,w[u++]=20971520,d.bits=1,0;for(a=1;a<H&&J[a]===0;a++);for(et<a&&(et=a),x=P=1;x<=15;x++)if(P<<=1,(P-=J[x])<0)return-1;if(0<P&&(y===0||H!==1))return-1;for(W[1]=0,x=1;x<15;x++)W[x+1]=W[x]+J[x];for(D=0;D<h;D++)p[b+D]!==0&&(m[W[p[b+D]]++]=D);if(O=y===0?(R=lt=m,19):y===1?(R=l,X-=257,lt=n,ft-=257,256):(R=c,lt=g,-1),x=a,j=u,it=D=T=0,E=-1,A=(tt=1<<(F=et))-1,y===1&&852<tt||y===2&&592<tt)return 1;for(;;){for(N=x-it,U=m[D]<O?(B=0,m[D]):m[D]>O?(B=lt[ft+m[D]],R[X+m[D]]):(B=96,0),k=1<<x-it,a=S=1<<F;w[j+(T>>it)+(S-=k)]=N<<24|B<<16|U|0,S!==0;);for(k=1<<x-1;T&k;)k>>=1;if(k!==0?(T&=k-1,T+=k):T=0,D++,--J[x]==0){if(x===H)break;x=p[b+m[D]]}if(et<x&&(T&A)!==E){for(it===0&&(it=et),j+=a,P=1<<(F=x-it);F+it<H&&!((P-=J[F+it])<=0);)F++,P<<=1;if(tt+=1<<F,y===1&&852<tt||y===2&&592<tt)return 1;w[E=T&A]=et<<24|F<<16|j-u|0}}return T!==0&&(w[j+T]=x-it<<24|64<<16|0),d.bits=et,0}},{"../utils/common":41}],51:[function(e,s,o){s.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,s,o){var r=e("../utils/common"),l=0,n=1;function c(f){for(var C=f.length;0<=--C;)f[C]=0}var g=0,y=29,p=256,b=p+1+y,h=30,w=19,u=2*b+1,m=15,d=16,k=7,S=256,E=16,A=17,j=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],U=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],Q=new Array(2*(b+2));c(Q);var x=new Array(2*h);c(x);var D=new Array(512);c(D);var a=new Array(256);c(a);var H=new Array(y);c(H);var et,F,it,P=new Array(h);function tt(f,C,I,q,L){this.static_tree=f,this.extra_bits=C,this.extra_base=I,this.elems=q,this.max_length=L,this.has_stree=f&&f.length}function T(f,C){this.dyn_tree=f,this.max_code=0,this.stat_desc=C}function R(f){return f<256?D[f]:D[256+(f>>>7)]}function X(f,C){f.pending_buf[f.pending++]=255&C,f.pending_buf[f.pending++]=C>>>8&255}function J(f,C,I){f.bi_valid>d-I?(f.bi_buf|=C<<f.bi_valid&65535,X(f,f.bi_buf),f.bi_buf=C>>d-f.bi_valid,f.bi_valid+=I-d):(f.bi_buf|=C<<f.bi_valid&65535,f.bi_valid+=I)}function W(f,C,I){J(f,I[2*C],I[2*C+1])}function lt(f,C){for(var I=0;I|=1&f,f>>>=1,I<<=1,0<--C;);return I>>>1}function ft(f,C,I){var q,L,$=new Array(m+1),G=0;for(q=1;q<=m;q++)$[q]=G=G+I[q-1]<<1;for(L=0;L<=C;L++){var V=f[2*L+1];V!==0&&(f[2*L]=lt($[V]++,V))}}function st(f){var C;for(C=0;C<b;C++)f.dyn_ltree[2*C]=0;for(C=0;C<h;C++)f.dyn_dtree[2*C]=0;for(C=0;C<w;C++)f.bl_tree[2*C]=0;f.dyn_ltree[2*S]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function ot(f){8<f.bi_valid?X(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function ht(f,C,I,q){var L=2*C,$=2*I;return f[L]<f[$]||f[L]===f[$]&&q[C]<=q[I]}function ut(f,C,I){for(var q=f.heap[I],L=I<<1;L<=f.heap_len&&(L<f.heap_len&&ht(C,f.heap[L+1],f.heap[L],f.depth)&&L++,!ht(C,q,f.heap[L],f.depth));)f.heap[I]=f.heap[L],I=L,L<<=1;f.heap[I]=q}function yt(f,C,I){var q,L,$,G,V=0;if(f.last_lit!==0)for(;q=f.pending_buf[f.d_buf+2*V]<<8|f.pending_buf[f.d_buf+2*V+1],L=f.pending_buf[f.l_buf+V],V++,q===0?W(f,L,C):(W(f,($=a[L])+p+1,C),(G=O[$])!==0&&J(f,L-=H[$],G),W(f,$=R(--q),I),(G=N[$])!==0&&J(f,q-=P[$],G)),V<f.last_lit;);W(f,S,C)}function bt(f,C){var I,q,L,$=C.dyn_tree,G=C.stat_desc.static_tree,V=C.stat_desc.has_stree,Y=C.stat_desc.elems,at=-1;for(f.heap_len=0,f.heap_max=u,I=0;I<Y;I++)$[2*I]!==0?(f.heap[++f.heap_len]=at=I,f.depth[I]=0):$[2*I+1]=0;for(;f.heap_len<2;)$[2*(L=f.heap[++f.heap_len]=at<2?++at:0)]=1,f.depth[L]=0,f.opt_len--,V&&(f.static_len-=G[2*L+1]);for(C.max_code=at,I=f.heap_len>>1;1<=I;I--)ut(f,$,I);for(L=Y;I=f.heap[1],f.heap[1]=f.heap[f.heap_len--],ut(f,$,1),q=f.heap[1],f.heap[--f.heap_max]=I,f.heap[--f.heap_max]=q,$[2*L]=$[2*I]+$[2*q],f.depth[L]=(f.depth[I]>=f.depth[q]?f.depth[I]:f.depth[q])+1,$[2*I+1]=$[2*q+1]=L,f.heap[1]=L++,ut(f,$,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(nt,mt){var Dt,wt,Mt,ct,oe,ui,_t=mt.dyn_tree,Vi=mt.max_code,gr=mt.stat_desc.static_tree,br=mt.stat_desc.has_stree,vr=mt.stat_desc.extra_bits,Zi=mt.stat_desc.extra_base,Ht=mt.stat_desc.max_length,ae=0;for(ct=0;ct<=m;ct++)nt.bl_count[ct]=0;for(_t[2*nt.heap[nt.heap_max]+1]=0,Dt=nt.heap_max+1;Dt<u;Dt++)Ht<(ct=_t[2*_t[2*(wt=nt.heap[Dt])+1]+1]+1)&&(ct=Ht,ae++),_t[2*wt+1]=ct,Vi<wt||(nt.bl_count[ct]++,oe=0,Zi<=wt&&(oe=vr[wt-Zi]),ui=_t[2*wt],nt.opt_len+=ui*(ct+oe),br&&(nt.static_len+=ui*(gr[2*wt+1]+oe)));if(ae!==0){do{for(ct=Ht-1;nt.bl_count[ct]===0;)ct--;nt.bl_count[ct]--,nt.bl_count[ct+1]+=2,nt.bl_count[Ht]--,ae-=2}while(0<ae);for(ct=Ht;ct!==0;ct--)for(wt=nt.bl_count[ct];wt!==0;)Vi<(Mt=nt.heap[--Dt])||(_t[2*Mt+1]!==ct&&(nt.opt_len+=(ct-_t[2*Mt+1])*_t[2*Mt],_t[2*Mt+1]=ct),wt--)}}(f,C),ft($,at,f.bl_count)}function i(f,C,I){var q,L,$=-1,G=C[1],V=0,Y=7,at=4;for(G===0&&(Y=138,at=3),C[2*(I+1)+1]=65535,q=0;q<=I;q++)L=G,G=C[2*(q+1)+1],++V<Y&&L===G||(V<at?f.bl_tree[2*L]+=V:L!==0?(L!==$&&f.bl_tree[2*L]++,f.bl_tree[2*E]++):V<=10?f.bl_tree[2*A]++:f.bl_tree[2*j]++,$=L,at=(V=0)===G?(Y=138,3):L===G?(Y=6,3):(Y=7,4))}function M(f,C,I){var q,L,$=-1,G=C[1],V=0,Y=7,at=4;for(G===0&&(Y=138,at=3),q=0;q<=I;q++)if(L=G,G=C[2*(q+1)+1],!(++V<Y&&L===G)){if(V<at)for(;W(f,L,f.bl_tree),--V!=0;);else L!==0?(L!==$&&(W(f,L,f.bl_tree),V--),W(f,E,f.bl_tree),J(f,V-3,2)):V<=10?(W(f,A,f.bl_tree),J(f,V-3,3)):(W(f,j,f.bl_tree),J(f,V-11,7));$=L,at=(V=0)===G?(Y=138,3):L===G?(Y=6,3):(Y=7,4)}}c(P);var z=!1;function v(f,C,I,q){J(f,(g<<1)+(q?1:0),3),function(L,$,G,V){ot(L),X(L,G),X(L,~G),r.arraySet(L.pending_buf,L.window,$,G,L.pending),L.pending+=G}(f,C,I)}o._tr_init=function(f){z||(function(){var C,I,q,L,$,G=new Array(m+1);for(L=q=0;L<y-1;L++)for(H[L]=q,C=0;C<1<<O[L];C++)a[q++]=L;for(a[q-1]=L,L=$=0;L<16;L++)for(P[L]=$,C=0;C<1<<N[L];C++)D[$++]=L;for($>>=7;L<h;L++)for(P[L]=$<<7,C=0;C<1<<N[L]-7;C++)D[256+$++]=L;for(I=0;I<=m;I++)G[I]=0;for(C=0;C<=143;)Q[2*C+1]=8,C++,G[8]++;for(;C<=255;)Q[2*C+1]=9,C++,G[9]++;for(;C<=279;)Q[2*C+1]=7,C++,G[7]++;for(;C<=287;)Q[2*C+1]=8,C++,G[8]++;for(ft(Q,b+1,G),C=0;C<h;C++)x[2*C+1]=5,x[2*C]=lt(C,5);et=new tt(Q,O,p+1,b,m),F=new tt(x,N,0,h,m),it=new tt(new Array(0),B,0,w,k)}(),z=!0),f.l_desc=new T(f.dyn_ltree,et),f.d_desc=new T(f.dyn_dtree,F),f.bl_desc=new T(f.bl_tree,it),f.bi_buf=0,f.bi_valid=0,st(f)},o._tr_stored_block=v,o._tr_flush_block=function(f,C,I,q){var L,$,G=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(V){var Y,at=4093624447;for(Y=0;Y<=31;Y++,at>>>=1)if(1&at&&V.dyn_ltree[2*Y]!==0)return l;if(V.dyn_ltree[18]!==0||V.dyn_ltree[20]!==0||V.dyn_ltree[26]!==0)return n;for(Y=32;Y<p;Y++)if(V.dyn_ltree[2*Y]!==0)return n;return l}(f)),bt(f,f.l_desc),bt(f,f.d_desc),G=function(V){var Y;for(i(V,V.dyn_ltree,V.l_desc.max_code),i(V,V.dyn_dtree,V.d_desc.max_code),bt(V,V.bl_desc),Y=w-1;3<=Y&&V.bl_tree[2*U[Y]+1]===0;Y--);return V.opt_len+=3*(Y+1)+5+5+4,Y}(f),L=f.opt_len+3+7>>>3,($=f.static_len+3+7>>>3)<=L&&(L=$)):L=$=I+5,I+4<=L&&C!==-1?v(f,C,I,q):f.strategy===4||$===L?(J(f,2+(q?1:0),3),yt(f,Q,x)):(J(f,4+(q?1:0),3),function(V,Y,at,nt){var mt;for(J(V,Y-257,5),J(V,at-1,5),J(V,nt-4,4),mt=0;mt<nt;mt++)J(V,V.bl_tree[2*U[mt]+1],3);M(V,V.dyn_ltree,Y-1),M(V,V.dyn_dtree,at-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,G+1),yt(f,f.dyn_ltree,f.dyn_dtree)),st(f),q&&ot(f)},o._tr_tally=function(f,C,I){return f.pending_buf[f.d_buf+2*f.last_lit]=C>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&C,f.pending_buf[f.l_buf+f.last_lit]=255&I,f.last_lit++,C===0?f.dyn_ltree[2*I]++:(f.matches++,C--,f.dyn_ltree[2*(a[I]+p+1)]++,f.dyn_dtree[2*R(C)]++),f.last_lit===f.lit_bufsize-1},o._tr_align=function(f){J(f,2,3),W(f,S,Q),function(C){C.bi_valid===16?(X(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,s,o){s.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,s,o){(function(r){(function(l,n){if(!l.setImmediate){var c,g,y,p,b=1,h={},w=!1,u=l.document,m=Object.getPrototypeOf&&Object.getPrototypeOf(l);m=m&&m.setTimeout?m:l,c={}.toString.call(l.process)==="[object process]"?function(E){process.nextTick(function(){k(E)})}:function(){if(l.postMessage&&!l.importScripts){var E=!0,A=l.onmessage;return l.onmessage=function(){E=!1},l.postMessage("","*"),l.onmessage=A,E}}()?(p="setImmediate$"+Math.random()+"$",l.addEventListener?l.addEventListener("message",S,!1):l.attachEvent("onmessage",S),function(E){l.postMessage(p+E,"*")}):l.MessageChannel?((y=new MessageChannel).port1.onmessage=function(E){k(E.data)},function(E){y.port2.postMessage(E)}):u&&"onreadystatechange"in u.createElement("script")?(g=u.documentElement,function(E){var A=u.createElement("script");A.onreadystatechange=function(){k(E),A.onreadystatechange=null,g.removeChild(A),A=null},g.appendChild(A)}):function(E){setTimeout(k,0,E)},m.setImmediate=function(E){typeof E!="function"&&(E=new Function(""+E));for(var A=new Array(arguments.length-1),j=0;j<A.length;j++)A[j]=arguments[j+1];var O={callback:E,args:A};return h[b]=O,c(b),b++},m.clearImmediate=d}function d(E){delete h[E]}function k(E){if(w)setTimeout(k,0,E);else{var A=h[E];if(A){w=!0;try{(function(j){var O=j.callback,N=j.args;switch(N.length){case 0:O();break;case 1:O(N[0]);break;case 2:O(N[0],N[1]);break;case 3:O(N[0],N[1],N[2]);break;default:O.apply(n,N)}})(A)}finally{d(E),w=!1}}}}function S(E){E.source===l&&typeof E.data=="string"&&E.data.indexOf(p)===0&&k(+E.data.slice(p.length))}})(typeof self>"u"?r===void 0?this:r:self)}).call(this,typeof St<"u"?St:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(mr);var Vr=mr.exports;const Ui=fr(Vr),ir="Blech Listen",Rt="metalSheetLists",ti=class ti extends Et{constructor(){super(),this.cleanup=new Lt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onMetalSheetList=t=>{if(!t)throw"no data!";for(;this.children.length>3;)this.removeChild(this.lastChild);for(const e of Or(t))this.appendChild(ne({primary:`
              ${e.format}
              <span style="font-size: 0.85rem;">
                ${e.data.press>-1?"[P"+e.data.press+"]":""}
              </span>
            `,secondary:`${e.toolID}`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(rt.metalSheetLists,o=>{o.ui.set(e)});const s=document.querySelector("pg-drawer");s.ui.open=!1},onDelete:()=>{confirm(`Delete "${e.format} - ${e.toolID} - ${e.date}"`)&&this.uiStore.ui.update(Rt,s=>{const o=gt(e);return s.filter(r=>gt(r)!==o)})}}).element)},this.onUpdate=t=>{li(this.uiStore,t,{storeDataKey:Rt,getKey:gt})},this.render()}render(){this.innerHTML=Z`
      <pg-drawer-item-import
        storegistkey="${rt.metalSheetLists}"
        title="${ir}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
      <pg-drawer-item-new type="${Rt}"></pg-drawer-item-new>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(jr),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Rt,[])}),t.ui.setExportHandler(async()=>{const e=new Ui;for(const o of this.uiStore.ui.get(Rt)){const r=Qi(o),l=JSON.stringify(o);e.file(r,l)}const s=await e.generateAsync({type:"blob"});$i.saveAs(s,`${rt.metalSheetLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=ir,this.cleanup.add(this.uiStore.ui.on("gist",t=>{Pi(this.querySelector("drawer-gist-item"),t,{storeGistKey:rt.metalSheetLists,storeDataKey:Rt,getFileName:Qi,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(Rt,this.onMetalSheetList))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ti,"register",()=>{customElements.define("pg-drawer-group-metal-sheet-lists",ti)});let zi=ti;const rr="Vis",Ot="vis",ei=class ei extends Et{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Lt,this.onVis=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ne({primary:`${e.title}`,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(rt.vis,o=>{o.ui.set(e)});const s=document.querySelector("pg-drawer");s.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(Ot,s=>{const o=ue(e);return s.filter(r=>ue(r)!==o)})}}).element)},this.onUpdate=t=>{li(this.uiStore,t,{storeDataKey:Ot,getKey:ue})},this.render()}render(){this.innerHTML=Z`
      <pg-drawer-item-import
        storegistkey="${rt.vis}"
        title="${rr}"
      ></pg-drawer-item-import>

      <drawer-gist-item></drawer-gist-item>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(Ir),t.ui.setUpdateHandler(this.onUpdate),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Ot,[])}),t.ui.setExportHandler(async()=>{const e=new Ui;for(const o of this.uiStore.ui.get(Ot)){const r=tr(o),l=JSON.stringify(o);e.file(r,l)}const s=await e.generateAsync({type:"blob"});$i.saveAs(s,`${rt.vis}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=rr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{Pi(this.querySelector("drawer-gist-item"),t,{storeGistKey:rt.vis,storeDataKey:Ot,getFileName:tr,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(Ot,this.onVis))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ei,"register",()=>{customElements.define("pg-drawer-group-vis",ei)});let Bi=ei;const sr="Vis Data",nr="visData",ii=class ii extends Et{constructor(){super(),this.cleanup=new Lt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onVisData=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ne({primary:`${e.title}`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(rt.visData);const s=document.querySelector("pg-drawer");s.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(nr,s=>s.filter(o=>o.title!==e.title))}}).element)},this.onUpdate=t=>{},this.render()}render(){this.innerHTML=Z`
      <pg-drawer-item-import
        storegistkey="${rt.visData}"
        title="${sr}"
        disabled
      ></pg-drawer-item-import>

      <ui-drawer-group-item>
        <ui-button name="new" variant="full" color="secondary" disabled>
          New Data
        </ui-button>
      </ui-drawer-group-item>
    `;const t=this.querySelector("pg-drawer-item-import"),e=this.querySelector("ui-button[name=new]");t.ui.setValidateHandler(Fr),t.ui.setUpdateHandler(this.onUpdate),e.ui.events.on("click",()=>{console.debug("[PGDrawerVisData.onClickNewData]");const s=new pe;document.body.appendChild(s),s.ui.events.on("close",()=>{document.body.removeChild(s)}),s.ui.open()})}connectedCallback(){super.connectedCallback(),this.ui.title=sr,this.cleanup.add(this.uiStore.ui.on(nr,this.onVisData))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ii,"register",()=>{customElements.define("pg-drawer-group-vis-data",ii)});let Oi=ii;const or="Vis Listen",Tt="visLists",ri=class ri extends Et{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new Lt,this.onVisLists=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ne({primary:e.name,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(rt.visLists,o=>{o.set(e)});const s=document.querySelector("pg-drawer");s.ui.open=!1},onDelete:e.allowDeletion?()=>{this.uiStore.ui.update(Tt,s=>{const o=ci(e);return s.filter(r=>ci(r)!==o)})}:null}).element)},this.onUpdate=t=>{li(this.uiStore,t,{storeDataKey:Tt,getKey:ci})},this.render()}render(){this.innerHTML=Z`
      <pg-drawer-item-import
        title="${or}"
        storegistkey="${Tt}"
      ></pg-drawer-item-import>

      <pg-drawer-item-new type="${Tt}"></pg-drawer-item-new>
    `;const t=this.querySelector("pg-drawer-item-import");t.ui.setValidateHandler(qr),t.ui.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Tt,[])}),t.ui.setUpdateHandler(this.onUpdate),t.ui.setExportHandler(async()=>{const e=new Ui;for(const o of this.uiStore.ui.get(Tt)){const r=$r(o),l=JSON.stringify(o);e.file(r,l)}const s=await e.generateAsync({type:"blob"});$i.saveAs(s,`${rt.visLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=or,this.cleanup.add(this.uiStore.ui.on(Tt,this.onVisLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};K(ri,"register",()=>{customElements.define("pg-drawer-group-vis-lists",ri)});let Di=ri;const Zr=Z`
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
`,Qt=class Qt extends Bt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.ui={...this.ui,root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=Z`
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
            ${Zr}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,s){switch(t){case"disabled":this.setDisabled(s);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new fe(this.ui.title);t.ui.events.on("submit",async e=>{if(!this.onValidate)throw new Error("onValidate callback missing");if(!this.onUpdate)throw new Error("onUpdate callback missing");if(!e){zr(async r=>{let l=null;try{l=await this.onValidate(r,null)}catch(n){alert(`Validation failed: ${n}`);return}l!==null&&await this.onUpdate(l)});return}if(this.ui.storegistkey===null)throw new Error("gist-key missing");const s=new Ni(e);let o;try{o=await s.get(),this.uiStore.ui.update("gist",r=>(r[`${this.ui.storegistkey}`]={id:e,revision:o.revision},r))}catch(r){alert(`Something went wrong: ${r}`);return}try{for(const r in o.files)o.files[r].content=await this.onValidate(o.files[r].content,s.id)}catch(r){alert(`Validation failed: ${r}`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const r of Object.values(o.files))await this.onUpdate(r.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};K(Qt,"register",()=>{customElements.define("pg-drawer-item-import",Qt)}),K(Qt,"observedAttributes",["disabled"]);let Mi=Qt;const te=class te extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.ui={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=Z`
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
    `,this.input=this.shadowRoot.querySelector("ui-search")}disconnectedCallback(){this.setActive(null)}attributeChangedCallback(t,e,s){switch(t){case"title":this.setTitle(s);break;case"active":this.setActive(s);break;case"prefix":this.setPrefix(s);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--search-bar-height","0rem"):(this.stackLayout.style.setProperty("--search-bar-height","4.5rem"),this.ui.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};K(te,"register",()=>{customElements.define("search-bar",te)}),K(te,"observedAttributes",["title","active","prefix"]);let Hi=te;const si=class si extends kt{constructor(){super(),this._data=null,this.uiStore=document.querySelector("ui-store"),this.render()}get data(){return this._data}set data(t){this._data=t,this.setAppBarTitle(),this.renderData()}render(){this.innerHTML=Z`
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
    `}set(t){this.data=t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.data?`Vis Listen - ${this.data.name}`:"Vis Listen")}renderData(){const t=this.querySelector(".list");for(;t.firstChild;)t.removeChild(t.firstChild);if(!this.data)return;const e=new pt;for(const s of this.data.data)t.appendChild(Fi({product:s,events:e,ripple:!0}).element)}};K(si,"register",()=>{customElements.define("vis-lists-page",si)});let Se=si;const Wr=Z`
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
`,Kr=Z`
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
`,Jr=Z`
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
`,Gr=Z`
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
`,ni=class ni extends ce{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=Z`
      <ui-app-bar-item name="menu" slot="left">
        <ui-icon-button ghost> ${Kr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="back" slot="left" style="display: none">
        <ui-icon-button ghost> ${Wr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="title" slot="center">
        <h4 class="title" style="white-space: nowrap;"></h4>
      </ui-app-bar-item>

      <ui-app-bar-item name="edit" slot="right">
        <ui-icon-button ghost> ${Jr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="share" slot="right">
        <ui-icon-button ghost> ${Gr} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="search" slot="right">
        <ui-icon-button ghost> ${lr} </ui-icon-button>
      </ui-app-bar-item>
    `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top")}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const s=this.uiStore.ui.get("edit").onClick;typeof s=="function"&&s()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var r;const s=((r=this.uiStore.ui.get("share"))==null?void 0:r())||null;if(!s)return;const o=async()=>{const l=document.createElement("a");for(const n of s.files)l.download=n.name,l.href="data:application/json;charset=utf-8,"+encodeURIComponent(await n.text()),l.click()};if(!navigator.canShare)return await o();if(navigator.canShare(s)){try{await navigator.share(s)}catch{await o()}return}await o()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",s=>({...s,active:!s.active}))),t}};K(ni,"register",()=>{customElements.define("pg-app-bar",ni)});let ji=ni;const oi=class oi extends HTMLElement{constructor(){super(),this.cleanup=new Lt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=Z`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){const t=new Date;this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visLists",[{date:t.getTime(),name:"Presse 0",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 2",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 3",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 4",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 5",allowDeletion:!1,data:[]}],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case rt.alertLists:this.setupAlertListsPage();break;case rt.alert:this.setupAlertPage();break;case rt.metalSheetLists:this.setupMetalSheetListsPage();break;case rt.vis:this.setupVisPage();break;case rt.product:this.setupProductPage();break;case rt.visData:break;default:this.setupNoPage()}}),this.stackLayout.ui.register(rt.alertLists,()=>new be),this.stackLayout.ui.register(rt.metalSheetLists,()=>new we),this.stackLayout.ui.register(rt.vis,()=>new _e),this.stackLayout.ui.register(rt.visLists,()=>new Se),this.stackLayout.ui.register(rt.visData,()=>new xe),this.stackLayout.ui.register(rt.product,()=>new ke)}setupAlertListsPage(){this.resetAppBar(),this.pgAppBar.items.search.ui.show()}setupAlertPage(){this.resetAppBar()}setupMetalSheetListsPage(){this.resetAppBar(),this.pgAppBar.items.edit.ui.show()}setupVisPage(){this.resetAppBar()}setupProductPage(){this.resetAppBar()}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide()}async onAppBarTitle(t){this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};K(oi,"register",()=>{customElements.define("pg-app",oi)});let Ii=oi;const ai=class ai extends Bt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=Z`
      <ui-button variant="full" color="secondary">Neu</ui-button>
    `,this.querySelector("ui-button").ui.events.on("click",()=>{switch(this.getAttribute("type")){case"metal-sheet-lists":case"metalSheetLists":this.newMetalSheetLists();break;case"vis-lists":case"visLists":this.newVisLists();break;case"vis-data":case"visData":this.newVisData();break;default:return}})}newMetalSheetLists(){const t=new se("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",s=>(s=[...s,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],s))}),document.body.appendChild(t),t.ui.open(!0)}newVisLists(){}newVisData(){}};K(ai,"register",()=>{customElements.define("pg-drawer-item-new",ai)});let qi=ai;Rr({onRegistered(_){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${dr}`),await _.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Cr();fe.register();pe.register();me.register();ge.register();be.register();se.register();ve.register();ye.register();Ai.register();we.register();ke.register();_e.register();xe.register();Se.register();Li.register();Ri.register();qi.register();Mi.register();Ti.register();zi.register();Bi.register();Di.register();Oi.register();Ei.register();Hi.register();ji.register();Ii.register();
