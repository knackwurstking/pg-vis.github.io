var Ir=Object.defineProperty;var hr=p=>{throw TypeError(p)};var Fr=(p,t,e)=>t in p?Ir(p,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[t]=e;var W=(p,t,e)=>Fr(p,typeof t!="symbol"?t+"":t,e),$r=(p,t,e)=>t.has(p)||hr("Cannot "+e);var Ct=(p,t,e)=>($r(p,t,"read from private field"),e?e.call(p):t.get(p)),dr=(p,t,e)=>t.has(p)?hr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(p):t.set(p,e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const n of s)if(n.type==="childList")for(const o of n.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const n={};return s.integrity&&(n.integrity=s.integrity),s.referrerPolicy&&(n.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?n.credentials="include":s.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function i(s){if(s.ep)return;s.ep=!0;const n=e(s);fetch(s.href,n)}})();class zt{constructor(){this.callbacks=[]}add(...t){this.callbacks.push(...t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}function Cr(p,{onDragEnd:t=null,onDragStart:e=null}={}){let i=null,s=null,n=null,o=null,a=null,d=!1,b=null,w=null;const m=u=>{!i&&Array.from(u.currentTarget.classList).includes("draggable")&&(n=u.clientX,o=u.clientY,s=new Date().getTime(),i=u.currentTarget,a||clearTimeout(a),a=setTimeout(()=>{b=i.style.color,w=i.style.backgroundColor,i.style.color="var(--ui-primary-color)",i.style.backgroundColor="var(--ui-primary-bgColor)",p.classList.add("dragging"),d=!0,e&&e()},200))},v=u=>{if(!s||!i)return;if(!d&&new Date().getTime()-s<200){const A=Math.abs(n-u.clientX),E=Math.abs(o-u.clientY);if((A>E?A:E)<24)return;h();return}u.preventDefault(),d||(d=!0,e&&e());const x=!!u.targetTouches&&u.targetTouches[0]||u;let S=document.elementFromPoint(x.clientX,x.clientY);for(;!S.classList.contains("draggable")&&S.parentElement;)S=S.parentElement;S.classList.contains("draggable")&&k(i,S)},h=()=>{a!==null&&(clearTimeout(a),a=null),i&&(i.style.color=b,i.style.backgroundColor=w,i=null),s=null,p.classList.remove("dragging"),d&&(t&&t(),d=!1)};function k(u,x){c(u,x)?p.insertBefore(u,x):p.insertBefore(u,x.nextElementSibling)}function c(u,x){let S=u.previousElementSibling;for(;S;){if(S===x)return!0;S=S.previousElementSibling}return!1}return(()=>{Array.from(p.children).forEach(u=>{u.classList.add("draggable"),u.onmousedown=m,u.ontouchstart=m,u.onmousemove=v,u.ontouchmove=v,u.onmouseup=h,u.ontouchend=h})})(),{update:u=>{Object.hasOwn(u,"onDragStart")&&(e=u.onDragStart),Object.hasOwn(u,"onDragEnd")&&(t=u.onDragEnd)},destroy:()=>{Array.from(p.children).forEach(u=>{u.classList.remove("draggable"),u.onmousedown=null,u.ontouchstart=null,u.onmousemove=null,u.ontouchmove=null,u.onmouseup=null,u.ontouchend=null})}}}var wt;class vt{constructor(){dr(this,wt,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return Ct(this,wt)[t]||(Ct(this,wt)[t]=[]),Ct(this,wt)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!Ct(this,wt)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,s=0;for(const n of Ct(this,wt)[t])n===e&&(Ct(this,wt)[t].splice(s,1),i=!0),s++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(Ct(this,wt)[t])for(const i of Ct(this,wt)[t])i(e);return this}}wt=new WeakMap;const Nr={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Tt(p,t={}){t={...Nr,...t};let e;const i=a=>{e=fr(a,t)},s=()=>{pr(e)},n=()=>{p.classList.add("ripple-container"),p.style.overflow="hidden",t.useClick===!0?p.addEventListener("click",a=>{e=fr(a,t),pr(e)}):(p.addEventListener("pointerdown",i),p.addEventListener("pointerup",s),p.addEventListener("pointerleave",s))},o=()=>{p.classList.remove("ripple-container"),p.removeEventListener("pointerdown",i),p.removeEventListener("pointerup",s),p.removeEventListener("pointerleave",s)};return n(),{update:a=>{t={...t,...a},o(),n()},destroy:o}}function fr(p,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,p.currentTarget.appendChild(e);const i=p.currentTarget.getBoundingClientRect();if(t.centered)e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`;else{const n=!!p.targetTouches&&p.targetTouches[0]||p;e.style.top=`${n.clientY-i.top}px`,e.style.left=`${n.clientX-i.left}px`}const s=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function pr(p){p&&(p.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&p.remove()}),p.style.opacity="0")}const F=String.raw,rr=String.raw;function At(...p){return p.join(";")+";"}const De=class De extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get leftSlot(){return[...this.root.querySelectorAll('[slot="left"]')]},get centerSlot(){return[...this.root.querySelectorAll('[slot="center"]')]},get rightSlot(){return[...this.root.querySelectorAll('[slot="right"]')]},get position(){return this.root.getAttribute("position")},set position(t){if(!t){this.root.removeAttribute("position");return}this.root.setAttribute("position",t)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}};W(De,"register",()=>{customElements.get("ui-app-bar")||customElements.define("ui-app-bar",De)});let ge=De;const Me=class Me extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get child(){return this.root.querySelector("*")},show(t=null){this.root.style.display=t},hide(){this.root.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}};W(Me,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",Me)});let Ci=Me;const Nt=class Nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ripple=null,this.ui={root:this,events:new vt,get noripple(){return!this.root.removeRippleCallback},set noripple(t){if(!t){if(this.root.removeRippleCallback)return;this.root.removeRippleCallback=Tt(this.root)}this.root.removeRippleCallback&&(this.root.ripple.destroy(),this.root.removeRippleCallback=null)},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get variant(){return this.root.getAttribute("variant")},set variant(t){if(!t){this.root.removeAttribute("variant");return}this.root.setAttribute("variant",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this)),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"noripple":this.ui.noripple=i!==null;break}}};W(Nt,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",Nt)}),W(Nt,"observedAttributes",["noripple"]);let Ei=Nt;const Pt=class Pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ripple=null,this.ui={root:this,events:new vt,get noripple(){return!this.root.removeRippleCallback},set noripple(t){if(!t){if(this.root.removeRippleCallback)return;this.root.removeRippleCallback=Tt(this.root)}this.root.removeRippleCallback&&(this.root.ripple.destroy(),this.root.removeRippleCallback=null)},get color(){return this.root.getAttribute("color")},set color(t){if(!t){this.root.removeAttribute("color");return}this.root.setAttribute("color",t)},get ghost(){return this.root.hasAttribute("ghost")},set ghost(t){if(!t){this.root.removeAttribute("ghost");return}this.root.setAttribute("ghost","")},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `,typeof this.removeRippleCallback!="function"&&(this.removeRippleCallback=Tt(this,{centered:!0})),this.addEventListener("click",()=>{this.ui.events.dispatch("click",this)})}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"noripple":this.ui.noripple=i!==null;break}}};W(Pt,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",Pt)}),W(Pt,"observedAttributes",["noripple"]);let Ai=Pt;const He=class He extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}};W(He,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",He)});let Li=He;const Pr=F`
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
`,Ut=class Ut extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),this.shadowRenderCleanUp=new zt,this._title=t||"",this.ui={root:this,events:new vt,get title(){return this.root.shadowRoot.querySelector('[name="title"]').innerHTML},set title(e){const i=this.root.shadowRoot.querySelector('[name="title"]');this.root._title=i.innerHTML=e||""},get fullscreen(){return this.root.hasAttribute("fullscreen")},set fullscreen(e){if(!e){this.root.removeAttribute("fullscreen");return}this.root.setAttribute("fullscreen","")},get nofooter(){return this.root.hasAttribute("nofooter")},set nofooter(e){if(!e){this.root.removeAttribute("nofooter");return}this.root.setAttribute("nofooter","")},open(e=!1,i=!0){const s=this.root.shadowRoot.querySelector("dialog"),n=s.inert;s.inert=i,e?s.showModal():s.show(),this.events.dispatch("open",null),s.inert=n},close(){this.events.dispatch("close",null),this.root.shadowRoot.querySelector("dialog").close()}},this.shadowRender()}shadowRender(){this.shadowRenderCleanUp.run(),this.shadowRoot.innerHTML=F`
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

        :host([nofooter]) .content {
          bottom: var(--ui-spacing);
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

        :host([nofooter]) .footer {
          display: none;
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
              ${Pr}
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
    `,this.ui.title=this._title;const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>this.ui.close();t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),s=n=>n.preventDefault();i.addEventListener("cancel",s),this.shadowRenderCleanUp.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",s)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break}}};W(Ut,"register",()=>{customElements.get("ui-dialog")||customElements.define("ui-dialog",Ut)}),W(Ut,"observedAttributes",["title"]);let bt=Ut;const qe=class qe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new vt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open"),this.events.dispatch("close",this.root);return}this.root.setAttribute("open",""),this.events.dispatch("open",this.root)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `,this.shadowRoot.querySelector("aside").addEventListener("click",t=>t.stopPropagation()),this.addEventListener("click",()=>this.ui.open=!1)}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};W(qe,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",qe)});let be=qe;const Er=F`
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
`,Vt=class Vt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get title(){return this.root.shadowRoot.querySelector(".title").innerHTML},set title(t){let e=this.root.shadowRoot.querySelector(".title");if(!t){e.classList.remove("visible");return}e.classList.add("visible"),e.innerHTML=F`
          <span
            style="
              font-size: 1.5rem;
              font-weight: 600;
              font-variation-settings: var(--ui-heading-fontVariation);
            "
          >
            ${t}
          </span>
        `},get fold(){return this.root.hasAttribute("fold")},set fold(t){if(!t){this.root.removeAttribute("fold");return}this.root.setAttribute("fold","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        * {
          box-sizing: border-box;
        }

        ul {
          margin: 0;
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
                ${Er}
              </ui-svg>
            </ui-flex-grid-item>
          </ui-flex-grid-row>
        </ui-drawer-group-item>

        <slot></slot>
      </ul>
    `;const t=this.shadowRoot.querySelector("ui-drawer-group-item");t.addEventListener("click",()=>{this.ui.fold=!this.ui.fold}),Tt(t)}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break}}};W(Vt,"register",()=>{customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",Vt)}),W(Vt,"observedAttributes",["title"]);let Bt=Vt;const je=class je extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}};W(je,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",je)});let Mt=je;const Zt=class Zt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.flex="1",this.ui={root:this,get flex(){return this.root.flex},set flex(t){this.root.flex=t||"1";const e=this.root.shadowRoot.querySelector('style[name="flex"]');e.textContent=rr`
          :host {
            flex: ${this.root.flex};
          }
        `}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"flex":this.ui.flex=i;break}}};W(Zt,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",Zt)}),W(Zt,"observedAttributes",["flex"]);let ht=Zt;const Wt=class Wt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.gap="0",this.ui={root:this,get gap(){return this.root.gap},set gap(t){this.root.gap=t||"0";const e=this.root.shadowRoot.querySelector('style[name="gap"]');e.textContent=rr`
          :host > ::slotted(*) {
            margin: 0 ${this.root.gap} !important;
          }
        `},get justify(){return this.root.style.justifyContent},set justify(t){this.root.style.justifyContent=t},get align(){return this.root.style.alignItems},set align(t){this.root.style.alignItems=t}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"gap":this.ui.gap=i;break;case"justify":this.ui.justify=i;break;case"align":this.ui.align=i;break}}};W(Wt,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",Wt)}),W(Wt,"observedAttributes",["gap","justify","align"]);let ve=Wt;const Kt=class Kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.gap="0",this.ui={root:this,get gap(){return this.root.gap},set gap(t){this.root.gap=t||"0";const e=this.root.shadowRoot.querySelector('style[name="gap"]');e.textContent=rr`
          :host > ::slotted(*) {
            margin: ${this.root.gap} 0 !important;
          }
        `}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"gap":this.ui.gap=i;break}}};W(Kt,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",Kt)}),W(Kt,"observedAttributes",["gap"]);let Rt=Kt;const Jt=class Jt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={label:null,input:null,get primary(){return this.label.ui.primary},set primary(t){this.label.ui.primary=t},get secondary(){return this.label.ui.secondary},set secondary(t){this.label.ui.secondary=t},get value(){return this.input.value},set value(t){this.input.value=t},get checked(){return this.input.checked},set checked(t){this.input.checked=t}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <ui-label ripple>
        <input slot="input" type="checkbox"></input>
      </ui-label>
    `,this.ui.label=this.shadowRoot.querySelector("ui-label"),this.ui.input=this.shadowRoot.querySelector("input")}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"primary":this.ui.primary=i;break;case"secondary":this.ui.primary=i;break;case"value":this.ui.value=i;break;case"checked":this.ui.checked=i!==null;break}}};W(Jt,"register",()=>{customElements.get("ui-check")||customElements.define("ui-check",Jt)}),W(Jt,"observedAttributes",["primary","secondary","value","checked"]);let Ti=Jt;const Yt=class Yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ripple=null,this.running=!1,this.onClick=async()=>{this.ui.inputSlot.forEach(t=>t.click())},this.onInputClick=async t=>{t.stopPropagation()},this.ui={root:this,get ripple(){return this.root.running},set ripple(t){if(!t){this.root.disableRipple();return}this.root.enableRipple()},get primary(){return this.root.shadowRoot.querySelector("ui-primary").innerHTML},set primary(t){this.root.shadowRoot.querySelector("ui-primary").innerHTML=t||""},get secondary(){return this.root.shadowRoot.querySelector("ui-secondary").innerHTML},set secondary(t){this.root.shadowRoot.querySelector("ui-secondary").innerHTML=t||""},get inputSlot(){return[...this.root.querySelectorAll('[slot="input"]')]}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"ripple":this.ui.ripple=i!==null;break;case"primary":this.ui.primary=i;break;case"secondary":this.ui.secondary=i;break}}enableRipple(){if(this.ripple||(this.ripple=Tt(this),this.style.cursor="pointer",this.running))return;this.addEventListener("click",this.onClick),[...this.querySelectorAll('[slot="input"]')].forEach(e=>{e.addEventListener("click",this.onInputClick)}),this.running=!0}disableRipple(){this.running&&(this.ripple&&this.ripple.destroy(),this.removeEventListener("click",this.onClick),this.ui.inputSlot.forEach(t=>{t.removeEventListener("click",this.onInputClick)}),this.running=!1)}};W(Yt,"register",()=>{customElements.get("ui-label")||customElements.define("ui-label",Yt)}),W(Yt,"observedAttributes",["ripple","secondary","primary"]);let Ri=Yt;const Ie=class Ie extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        :host {
          font-size: 1.1rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-primary-fontVariation);
          overflow-wrap: anywhere;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};W(Ie,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",Ie)});let zi=Ie;const Fe=class Fe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        :host {
          font-size: 0.9rem;
          font-family: var(--ui-fontFamily);
          font-variation-settings: var(--ui-text-secondary-fontVariation);
          overflow-wrap: anywhere;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};W(Fe,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",Fe)});let qt=Fe;const Xt=class Xt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new vt,input:null,get title(){return this.root.getAttribute("title")},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new qt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get type(){return this.input.type},set type(t){this.input.type=t||""},get value(){return this.input.value},set value(t){this.input.value=t},get placeholder(){return this.input.placeholder},set placeholder(t){this.input.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get min(){return this.input.min},set min(t){this.input.min=t},get max(){return this.input.max},set max(t){this.input.max=t},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `,this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type=this.getAttribute("type")||"text",this.ui.input.oninput=()=>{this.ui.events.dispatch("input",this.ui.input.value)},this.ui.input.onchange=()=>{this.ui.events.dispatch("change",this.ui.input.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"type":this.ui.type=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"min":this.ui.min=i;break;case"max":this.ui.max=i;break}}};W(Xt,"register",()=>{customElements.get("ui-input")||customElements.define("ui-input",Xt)}),W(Xt,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Bi=Xt;const Ar=F`
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
`,Gt=class Gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.storagekey="",this.ui={root:this,events:new vt,input:null,submit:this.querySelector('[name="submit"]'),get title(){return this.root.querySelector('[slot="title"]').innerHTML},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new qt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get value(){return this.input.value},set value(t){this.input.value=t},get placeholder(){return this.input.placeholder},set placeholder(t){this.input.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get nosubmit(){return this.submit.style.display==="none"},set nosubmit(t){if(!t){this.submit.style.display=null;return}this.submit.style.display="none"},get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get storagekey(){return this.root.storagekey},set storagekey(t){this.root.storagekey=t,this.storage&&(this.value=localStorage.getItem(this.storageprefix+this.root.storagekey)||"",this.events.dispatch("storage",this.value))},focus(t=null){this.root.shadowRoot.querySelector("input").focus(t)},blur(){this.root.shadowRoot.querySelector("input").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
        <ui-icon-button name="submit" ghost>${Ar}</ui-icon-button>
      </div>
    `,this.ui.submit=this.shadowRoot.querySelector('[name="submit"]'),this.ui.input=this.shadowRoot.querySelector("input"),this.ui.input.type="search",this.ui.input.addEventListener("keydown",async e=>{this.ui.nosubmit||e.key==="Enter"&&this.ui.submit.click()});let t=null;this.ui.input.addEventListener("input",async()=>{this.ui.storage&&(t!==null&&clearTimeout(t),t=setTimeout(()=>{localStorage.setItem(this.ui.storageprefix+this.ui.storagekey,this.ui.input.value),t=null},250)),this.ui.events.dispatch("input",this.ui.input.value)}),this.shadowRoot.querySelector("ui-icon-button").addEventListener("click",()=>{this.ui.events.dispatch("submit",this.ui.input.value)})}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break;case"nosubmit":this.ui.nosubmit=i!==null;break;case"storagekey":this.ui.storagekey=i;break}}};W(Gt,"register",()=>{customElements.get("ui-search")||customElements.define("ui-search",Gt)}),W(Gt,"observedAttributes",["title","value","placeholder","invalid","nosubmit","storage","storageprefix","storagekey"]);let Oi=Gt;const $e=class $e extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get value(){return this.root.getAttribute("value")},set value(t){if(!t){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},get selected(){return this.root.hasAttribute("selected")},set selected(t){if(!t){this.root.removeAttribute("selected");return}this.root.setAttribute("selected","")}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){this.setAttribute("role","button")}disconnectedCallback(){}};W($e,"register",()=>{customElements.get("ui-select-option")||customElements.define("ui-select-option",$e)});let oe=$e;const Ne=class Ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new vt,get open(){return this.root.hasAttribute("open")},set open(t){if(!t){this.root.removeAttribute("open");return}this.root.setAttribute("open","")},options(){return[...this.root.children].filter(t=>t instanceof oe)},selected(){try{return this.options().find(t=>t.ui.selected)||null}catch{return null}}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
        <div class="icon"><ui-svg>${Er}</ui-svg></div>

        <slot></slot>
      </div>
    `;const t=i=>{const s=async n=>{(n.composedPath()||[]).forEach(o=>{o instanceof oe&&([...this.querySelectorAll("ui-select-option")].forEach(a=>a.removeAttribute("selected")),o.setAttribute("selected",""),this.ui.events.dispatch("change",o))})};this.classList.toggle("open")?(i.stopPropagation(),this.addEventListener("click",s)):setTimeout(()=>this.removeEventListener("click",s))};this.shadowRoot.querySelector(".options").addEventListener("click",t),this.style.setProperty("--items-length",this.querySelectorAll("ui-select-option").length.toString())}connectedCallback(){}disconnectedCallback(){}};W(Ne,"register",()=>{customElements.get("ui-select")||customElements.define("ui-select",Ne)});let Di=Ne;const Qt=class Qt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,events:new vt,textarea:null,get title(){return this.root.getAttribute("title")},set title(t){let e=this.root.querySelector('[slot="title"]');!t&&e&&this.root.removeChild(e),t&&(e||(e=new qt,e.slot="title",this.root.appendChild(e)),e.innerHTML=t)},get value(){return this.textarea.value},set value(t){this.textarea.value=t},get placeholder(){return this.textarea.placeholder},set placeholder(t){this.textarea.placeholder=t||""},get invalid(){return this.root.hasAttribute("invalid")},set invalid(t){if(!t){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},get rows(){return this.textarea.rows},set rows(t){this.textarea.rows=t},get cols(){return this.textarea.cols},set cols(t){this.textarea.cols=t},focus(t=null){this.root.shadowRoot.querySelector("textarea").focus(t)},blur(){this.root.shadowRoot.querySelector("textarea").blur()}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `,this.ui.textarea=this.shadowRoot.querySelector("textarea"),this.ui.textarea.oninput=()=>{this.ui.events.dispatch("input",this.ui.textarea.value)},this.ui.textarea.onchange=()=>{this.ui.events.dispatch("change",this.ui.textarea.value)}}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"value":this.ui.value=i;break;case"placeholder":this.ui.placeholder=i;break;case"invalid":this.ui.textarea.ariaInvalid=i!==null?"":null;break;case"rows":this.ui.rows=i!==null?parseFloat(i):null;break;case"cols":this.ui.cols=i!==null?parseFloat(i):null;break}}};W(Qt,"register",()=>{customElements.get("ui-textarea")||customElements.define("ui-textarea",Qt)}),W(Qt,"observedAttributes",["title","value","placeholder","invalid","rows","cols"]);let Mi=Qt;const te=class te extends HTMLElement{constructor(){super(),this.ui={root:this,data:{},events:new vt,get current(){return this.root.getAttribute("current")},set current(t){this.root.setCurrent(t||"")},fallback(){return this.root.querySelector("ui-lang-type[fallback]")},get(t,e){var i,s;return((s=(i=this.data)==null?void 0:i[t])==null?void 0:s[e])||null}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"current":this.ui.current=i;break}}async setCurrent(t){const e=this.querySelector(`ui-lang-type[name="${t}"]`)||this.ui.fallback();if(e){if(!e.ui.href)throw"Missing href attribute!";try{this.data=(await fetch(e.ui.href)).json()}catch(i){console.error(i)}this.ui.events.dispatch("change",e)}}};W(te,"register",()=>{customElements.get("ui-lang")||customElements.define("ui-lang",te)}),W(te,"observedAttributes",["current"]);let Hi=te;const Pe=class Pe extends HTMLElement{constructor(){super(),this.ui={root:this,get name(){return this.root.getAttribute("name")},set name(t){if(!t){this.root.removeAttribute("name");return}this.root.setAttribute("name",t)},get href(){return this.root.getAttribute("href")},set href(t){if(!t){this.root.removeAttribute("href");return}this.root.setAttribute("href",t)},get fallback(){return this.root.hasAttribute("fallback")},set fallback(t){if(!t){this.root.removeAttribute("fallback");return}this.root.setAttribute("fallback","")}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};W(Pe,"register",()=>{customElements.get("ui-lang-type")||customElements.define("ui-lang-type",Pe)});let qi=Pe;const ee=class ee extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={root:this,get nobg(){return this.root.hasAttribute("nobg")},set nobg(t){const e=this.root.shadowRoot.querySelector(".background");if(!t){e.style.display=null;return}e.style.display="none"}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        :host {
          position: absolute !important;
          top: 0;
          right: 0;
          bottom: 0;
          left: 0;
        }

        .background {
          z-index: 999;
          position: absolute !important;
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
          position: absolute !important;
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"nobg":this.ui.nobg=i!==null;break}}};W(ee,"register",()=>{customElements.get("ui-spinner")||customElements.define("ui-spinner",ee)}),W(ee,"observedAttributes",["nobg"]);let ae=ee;const ie=class ie extends HTMLElement{constructor(t){super(),this.attachShadow({mode:"open"}),this._name=t,this.ui={root:this,get name(){return this.root._name},set name(e){this.name=e||""}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
    `}connectedCallback(){}disconnectedCallback(){}attributeChangedCallback(t,e,i){switch(t){case"name":this.ui.name=i;break}}};W(ie,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",ie)}),W(ie,"observedAttributes",["name"]);let kt=ie;const Ue=class Ue extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.pages={},this.stack=[],this.onpopstate=()=>this.goBack(),this.ui={root:this,events:new vt,lock:!1,size(){return this.root.stack.length},clear(){for(;this.size()>0;)this.root.removeChild(this.root.stack.pop())},goBack(){if(!(!this.size()||this.lock)){if(this.root.onpopstate!==null){history.back();return}this.root.goBack()}},register(t,e){this.root.pages[t]=e},unregister(t){delete this.root.pages[t]},set(t,e=null,i=!1){if(this.lock)return;const s=this.root.pages[t]();this.root.stack.push(this.root.appendChild(s)),typeof e=="function"&&e(s);let n=null;this.size()>1&&!i&&(n=this.root.stack[this.root.stack.length-2],n.parentElement.removeChild(n)),this.root.dispatchChangeEvent(n),this.root.onpopstate!==null&&history.pushState(null,document.title,location.href)}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        :host {
          display: block !important;
          position: relative !important;
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){window.addEventListener("popstate",this.onpopstate)}disconnectedCallback(){window.removeEventListener("popstate",this.onpopstate)}goBack(){const t=this.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)}async dispatchChangeEvent(t){this.ui.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}};W(Ue,"register",()=>{customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",Ue)});let ji=Ue;const Ve=class Ve extends HTMLElement{constructor(){super(),this.stores={},this.ui={root:this,events:new vt,get storage(){return this.root.hasAttribute("storage")},set storage(t){if(!t){this.root.removeAttribute("storage");return}this.root.setAttribute("storage","")},get storageprefix(){return this.root.getAttribute("storageprefix")},set storageprefix(t){if(!t){this.root.removeAttribute("storageprefix");return}this.root.setAttribute("storageprefix",t)},get(t){return this.root.stores[t]},set(t,e,i=!1){if(i&&this.storageprefix){const s=JSON.parse(localStorage.getItem((this.storageprefix||"")+t.toString())||"null");this.root.stores[t]=s??e}else this.root.stores[t]=e;this.storage&&localStorage.setItem((this.storageprefix||"")+t.toString(),JSON.stringify(this.root.stores[t])),this.events.dispatch(t,this.root.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.root.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}},this.shadowRender()}shadowRender(){}connectedCallback(){}disconnectedCallback(){}};W(Ve,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",Ve)});let Ii=Ve;const re=class re extends HTMLElement{constructor(){super(),this.mediaHandler=null,this.themes={},this.currentTheme=null,this.mode="",this.ui={root:this,get auto(){return!!this.root.media},set auto(t){this.root.setAuto(t)},get mode(){return this.root.mode},set mode(t){this.root.setMode(t)},add(t,e){this.root.themes[t]=e},set(t){var i;if(!this.root.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.root.currentTheme)==null?void 0:i.name)==t)return;{const s=document.getElementById("theme");s&&(document.head.removeChild(s),this.root.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.root.themes[t],document.head.appendChild(e),this.root.currentTheme={name:t,href:this.root.themes[t]}}},this.shadowRender()}shadowRender(){}attributeChangedCallback(t,e,i){switch(t){case"auto":this.ui.auto=i!==null;break;case"mode":this.ui.mode=i;break}}setAuto(t,e=document.body){if(!t){if(!this.media)return;this.media.removeEventListener("change",this.mediaHandler),this.media=null,this.mediaHandler=null;return}if(this.setMode(null,e),this.media){this.mediaHandler(this.media);return}this.mediaHandler=i=>{i.matches?e.setAttribute("data-theme","dark"):e.setAttribute("data-theme","light")},this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaHandler),this.mediaHandler(this.media)}setMode(t,e=document.body){this.mode=t,this.mode?e.setAttribute("data-theme",t):e.removeAttribute("data-theme")}};W(re,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",re)}),W(re,"observedAttributes",["auto","mode"]);let Fi=re;const Ze=class Ze extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.ui={},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
      <style>
        :host {
          display: block;
          width: 100%;
          height: 100%;
          color: inherit;
        }

        ::slotted(svg) {
          width: 100%;
          height: 100%;
        }
      </style>

      <slot></slot>
    `}connectedCallback(){}disconnectedCallback(){}};W(Ze,"register",()=>{customElements.get("ui-svg")||customElements.define("ui-svg",Ze)});let $i=Ze;function Ur(){Ci.register(),ge.register(),Ei.register(),Ai.register(),Li.register(),bt.register(),Mt.register(),Bt.register(),be.register(),ht.register(),ve.register(),Rt.register(),Ti.register(),Bi.register(),Oi.register(),oe.register(),Di.register(),Mi.register(),qi.register(),Hi.register(),ae.register(),ji.register(),kt.register(),Ii.register(),$i.register(),Ri.register(),zi.register(),qt.register(),Fi.register()}const Vr="modulepreload",Zr=function(p){return"/pg-vis.github.io/"+p},mr={},Wr=function(t,e,i){let s=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const n=document.querySelector("meta[property=csp-nonce]"),o=(n==null?void 0:n.nonce)||(n==null?void 0:n.getAttribute("nonce"));s=Promise.all(e.map(a=>{if(a=Zr(a),a in mr)return;mr[a]=!0;const d=a.endsWith(".css"),b=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${b}`))return;const w=document.createElement("link");if(w.rel=d?"stylesheet":Vr,d||(w.as="script",w.crossOrigin=""),w.href=a,o&&w.setAttribute("nonce",o),document.head.appendChild(w),d)return new Promise((m,v)=>{w.addEventListener("load",m),w.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${a}`)))})}))}return s.then(()=>t()).catch(n=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=n,window.dispatchEvent(o),!o.defaultPrevented)throw n})};function Kr(p={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:s,onRegisteredSW:n,onRegisterError:o}=p;let a,d;const b=async(m=!0)=>{await d};async function w(){if("serviceWorker"in navigator){if(a=await Wr(async()=>{const{Workbox:m}=await import("./workbox-window.prod.es5-D5gOYdM7.js");return{Workbox:m}},[]).then(({Workbox:m})=>new m("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(m=>{o==null||o(m)}),!a)return;a.addEventListener("activated",m=>{(m.isUpdate||m.isExternal)&&window.location.reload()}),a.addEventListener("installed",m=>{m.isUpdate||i==null||i()}),a.register({immediate:t}).then(m=>{n?n("/pg-vis.github.io/sw.js",m):s==null||s(m)}).catch(m=>{o==null||o(m)})}}return d=w(),b}const We=class We extends bt{constructor(t){super(`Import "${t}"`),this.gistID=null,this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",t.innerHTML=F`
      <ui-flex-grid-item>
        <ui-label
          secondary="Zum Importieren einer Datei leer lassen"
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="gistID" type="text" title="Gist ID"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.gistID=this.querySelector('ui-input[name="gistID"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback()}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.gistID.ui.value),this.ui.close()}),this.appendChild(t)}};W(We,"register",()=>{customElements.define("import-dialog",We)});let ye=We;const Jr=F`
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
`,Lr="v1.0.0.rc",Ni=6,Yr=F`
  <ui-container
    class="no-scrollbar info-dialog"
    style="height: 100%; overflow: hidden; overflow-y: auto;"
  >
    <h2>v1.0.0 — [work-in-progress]</h2>

    <p>
      <a
        href="https://github.com/knackwurstking/pg-vis.github.io/blob/main/CHANGELOG.md"
      >
        CHANGELOG.md
      </a>
    </p>

    <p>
      <a href="https://github.com/knackwurstking/ui">ui version v0.2.16</a>
    </p>

    <p><strong>General</strong>:</p>

    <ul>
      <li>Added validation for <code>VisData</code> files</li>

      <li>
        Changed <code>&lt;ul&gt;</code> click handling for
        &quot;alert-lists&quot;
      </li>

      <li>
        Changed <code>&lt;ul&gt;</code> click handling for &quot;vis&quot;
      </li>

      <li>
        Changed <code>&lt;ul&gt;</code> click handling for &quot;vis-lists&quot;
      </li>

      <li>
        Changed <code>&lt;ul&gt;</code> click handling for &quot;vis-data&quot;
      </li>

      <li>Added some German translations</li>
      <li>Enabled edit icon for vis-data (rename lists)</li>
      <li>Added the vis product page to vis-data</li>
      <li>Added gist handler for the vis-data group (drawer)</li>
      <li>Checking for build numbers after each app start</li>
      <li>Added some preview for active vis-data &quot;filters&quot;</li>
      <li>Added sorting for vis-data (drawer and page)</li>
      <li>Changed vis filenames (download)</li>
      <li>Added drag and drop for vis-lists</li>
      <li>Code clean up</li>
    </ul>

    <p><strong>Fixes</strong>:</p>

    <ul>
      <li>Fixed error handling for gist push</li>

      <li>
        Fixed <code>VisDataEntryPage</code> submit, original entries will now be
        removed
      </li>

      <li>Fixed product page rendering</li>
      <li>Fixed drag and drop for metal-sheets</li>
    </ul>
  </ui-container>
`;function Tr({alert:p,container:t,hasBorder:e=!0,hasRipple:i=!0}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.role="button",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=F`
    <div class="title">${p.alert}</div>

    <div
      class="number"
      style="${At("color: var(--ui-primary-bgColor, red)","font-weight: bold")}"
    >
      ${p.from===p.to?p.from:`${p.from}..${p.to}`}
    </div>
  `,s.setAttribute("data-json",JSON.stringify(p)),s.setAttribute("data-alert-item",""),i&&(Tt(s),s.style.cursor="pointer",s.role="button"),s}function sr({product:p,events:t=null,hasRipple:e=!0}){const i=document.createElement("li");return i.classList.add("vis-item"),i.role="button",i.setAttribute("data-value",p.lotto+" "+p.name+" "+p.format+" "+p.stamp+" "+p.thickness+"mm"),i.setAttribute("data-json",JSON.stringify(p)),i.setAttribute("data-vis-item",""),i.style.display="block",i.style.position="relative",i.style.overflow="hidden",i.style.borderTop="1px solid var(--ui-borderColor)",i.style.borderBottom="1px solid var(--ui-borderColor)",i.style.margin="var(--ui-spacing) 0",i.innerHTML=F`
    <ui-flex-grid>
      <ui-flex-grid-row style="font-size: 1.1rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div
            name="lotto"
            style="font-weight: bold; padding: var(--ui-spacing);"
            align="right"
          >
            ${p.lotto}
          </div>

          <div
            name="name"
            style="font-weight: lighter; padding: var(--ui-spacing);"
          >
            ${p.name}
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>

      <ui-flex-grid-row style="font-size: 0.95rem;">
        <ui-flex-grid-item class="flex justify-center align-center">
          <div name="format" style="padding: var(--ui-spacing);" align="right">
            ${p.format}
          </div>

          <div name="stamp" style="padding: var(--ui-spacing);">
            ${p.stamp}
          </div>

          <div name="thickness" style="padding: var(--ui-spacing);">
            ${p.thickness}mm
          </div>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    </ui-flex-grid>
  `,e&&(Tt(i,{useClick:!0}),i.style.cursor="pointer"),t&&(i.onclick=()=>{t.dispatch("click",p)}),i}function ue({primary:p,secondary:t=null,onClick:e=null,onDelete:i=null}){const s=new Mt;s.innerHTML=F`
    <ui-flex-grid-row>
      <ui-flex-grid-item>
        <ui-button
          name="item"
          style="justify-content: flex-start;"
          color="primary"
          variant="ghost"
        >
          <span>
            <ui-primary>${p}</ui-primary>
            ${t?F`
                  <br />
                  <ui-secondary>${t}</ui-secondary>
                `:""}
          </span>
        </ui-button>
      </ui-flex-grid-item>

      ${i?F`<ui-flex-grid-item
            name="delete"
            class="flex align-center justify-center"
            flex="0"
          >
            <ui-icon-button color="destructive" ghost>
              ${Jr}
            </ui-icon-button>
          </ui-flex-grid-item>`:""}
    </ui-flex-grid-row>
  `;const n=s.querySelector('[name="delete"]');n&&n.addEventListener("click",i);const o=s.querySelector('[name="item"]');return o&&o.addEventListener("click",e),s}function Rr({index:p,entry:t,events:e=null,hasRipple:i=!0,disableFilters:s=!1}){const n=document.createElement("li");n.classList.add("vis-data-item"),n.role="button",n.style.display="block",n.style.position="relative",n.style.overflow="hidden",n.style.borderTop="1px solid var(--ui-borderColor)",n.style.borderBottom="1px solid var(--ui-borderColor)",n.style.margin="var(--ui-spacing) 0",n.innerHTML=F` <ui-label></ui-label> `,n.setAttribute("data-index",p.toString()),n.setAttribute("data-json",JSON.stringify(t)),n.setAttribute("data-vis-data-item",""),s||(t.lotto&&(n.innerHTML+=F`
        <code style="margin: 0.25rem;">Lotto: ${t.lotto}</code><br />
      `),(t.format||t.stamp||t.thickness)&&(n.innerHTML+='<ui-flex-grid-row gap="0.25rem">'),t.format&&(n.innerHTML+=F`
        <code style="margin: 0.25rem;">Format: ${t.format}</code>
      `),t.stamp&&(n.innerHTML+=F`
        <code style="margin: 0.25rem;">Stempel: ${t.stamp}</code>
      `),t.thickness&&(n.innerHTML+=F`
        <code style="margin: 0.25rem;">Stärke: ${t.thickness}</code>
      `),(t.format||t.stamp||t.thickness)&&(n.innerHTML+="</ui-flex-grid-row>"));const o=n.querySelector("ui-label");return o.ui.primary=t.key.replaceAll(" ","&nbsp;"),o.ui.secondary=t.value.replaceAll(" ","&nbsp;").replaceAll(`
`,"<br />"),i&&(n.style.cursor="pointer",Tt(n,{useClick:!0})),e&&(n.onclick=()=>{e.dispatch("click",{index:p,entry:t})}),n}function Xr(){const p=new bt("Changelog");p.innerHTML=Yr,p.ui.fullscreen=!0,p.ui.nofooter=!0,p.ui.events.on("close",()=>{document.body.removeChild(p)}),document.body.appendChild(p),p.ui.open(!0)}function Gr(p){const t=document.createElement("input");t.type="file",t.multiple=!0,t.onchange=async e=>{for(const i of e.currentTarget.files){const s=new FileReader;s.onload=()=>{if(typeof s.result=="string")try{p(s.result,i)}catch(n){alert(`Datenanalyse fehlgeschlagen: "${n}"`)}},s.onerror=()=>{alert(`Lesen der Datei "${i.name}" ist fehlgeschlagen!`)},s.readAsText(i)}},t.click()}function Qr(p){const t=[],e=p.map(i=>`${i.title}`).sort();for(const i of e)t.push(p.find(s=>`${s.title}`===i));return t}function ts(p){const t=[],e=p.map(i=>gt(i)).sort();for(const i of e)t.push(p.find(s=>gt(s)===i));return t}function es(p){const t=[],e=p.map(i=>Lt(i)).sort();for(const i of e)t.push(p.find(s=>Lt(s)===i));return t}function zr(p){const t=[],e=p.map(i=>pt(i)).sort();for(const i of e)t.push(p.find(s=>pt(s)===i));return t}function nr(p){const t=[],e=p.data.map(i=>vr(i)).sort();for(const i of e)t.push(p.data.find(s=>vr(s)===i));return p.data=t,p}class or{constructor(t,e=null){this.id=t,this.token=e,this.data=null}async get(){if(!this.id)return null;const t=`https://api.github.com/gists/${this.id}`,e=await fetch(t);if(!e.ok)throw`request to "${t}" failed with "${e.statusText}"!`;const i=await e.json();this.data={revision:i.history.length,files:{},owner:{login:i.owner.login}};for(const[s,n]of Object.entries(i.files))this.data.files[s]={filename:n.filename,content:JSON.parse(n.content)};return this.data}async patch(t){if(!this.id||this.token===null)return null;const e=`https://api.github.com/gists/${this.id}`,i=await fetch(e,{method:"PATCH",headers:{Authorization:`Bearer ${this.token}`},body:JSON.stringify({files:t})}),s=await i.json();if(!i.ok)throw`${s.status} - ${s.message}`;return s}}async function is(p,t,{beforeUpdate:e=null,update:i,updateRevision:s}){const o=await new or(p).get();let a=!1;o.revision>t?a=confirm(`Upgrade auf Revision "${o.revision}"`):o.revision<t?a=confirm(`Downgrade auf Revision "${o.revision}"`):a=confirm(`Schon auf dem neuesten Stand! Neu laden? (Revision: ${o.revision})`),a&&(typeof e=="function"&&await e(),Object.values(o.files).forEach(d=>i(d.content)),s(o.revision))}async function rs(p,t,e,{getFileName:i,updateRevision:s}){const n=new ke;n.ui.events.on("close",()=>{document.body.removeChild(n)}),n.ui.events.on("submit",async o=>{const a=new or(p,o),d=await a.get();if(d.revision>t){alert(`Lokale Revision ist zu alt (Revision: "${t}"), Revision "${d.revision}" erforderlich`);return}const b=Object.values(d.files).map(v=>JSON.stringify(v.content)).sort(),w=Object.values(e).map(v=>JSON.stringify(v)).sort();if(JSON.stringify(b)===JSON.stringify(w)){alert("Gist-Repo bereits auf dem neuesten Stand");return}const m={};e.forEach(v=>{m[i(v)]={content:JSON.stringify(v)}});for(const v of Object.keys(d.files))Object.hasOwn(m,v)||(m[v]=null);try{console.table(await a.patch(m))}catch(v){alert(`Update fehlgeschlagen:
"${v}"`);return}s(t+1)}),document.body.appendChild(n),n.ui.open(!0)}function ki(p,t,{storeGistKey:e,storeDataKey:i,getFileName:s,onUpdate:n}){if(!t)return;const o=document.querySelector("ui-store"),a=t[e];if(!a){p.set(null,null),p.pg.onPull=null,p.pg.onPush=null;return}p.set(a.id,a.revision);let d;const b=()=>{d&&p.removeChild(d),d=new ae,p.appendChild(d)},w=()=>{d&&(p.removeChild(d),d=void 0)};p.pg.onPull=async(m,v)=>{b();try{await is(m,v,{beforeUpdate:async()=>{o.ui.set(i,[])},update:n,updateRevision:h=>{o.ui.update("gist",k=>(k[e]={id:m,revision:h},k))}})}finally{w()}},p.pg.onPush=async(m,v)=>{b();try{const h=o.ui.get(i);if(!Array.isArray(h)){alert(`Keine Daten zum Pushen für Store-Schlüssel "${i}"`);return}await rs(m,v,h,{getFileName:s,updateRevision:k=>{o.ui.update("gist",c=>(c[e]={id:m,revision:k},c))}})}finally{w()}}}function ce(p,t,{storeDataKey:e,getKey:i}){const s=i(t);if(p.ui.get(e).find(n=>i(n)===s)){p.ui.update(e,n=>n.map(o=>i(o)===s?t:o));return}p.ui.update(e,n=>[...n,t])}function ss(p){const t=e=>new Error(`invalid data for "alert":
${JSON.stringify(e,null,4)}`);if(typeof(p==null?void 0:p.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(p==null?void 0:p.title)!="string")throw new Error('invalid data: missing "title" from type "string"');Object.hasOwn(p,"data")||(p.data=[]);for(let e=0;e<p.data.length;e++){const i=p.data[e];if(typeof i.from!="number"||typeof i.to!="number"||typeof i.alert!="string"||!Array.isArray(i.desc)||(typeof i.desc=="string"&&(i.desc=i.desc.split(`
`)),i.desc.filter(s=>typeof s!="string").length))throw t(i)}return p}function ns(p){if(typeof(p==null?void 0:p.date)!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof(p==null?void 0:p.format)!="string")throw new Error('invalid data: missing "format" from type "string"');return typeof(p==null?void 0:p.toolID)!="string"&&(p.toolID=""),Object.hasOwn(p,"data")||(p.data={}),typeof p.data.press!="number"&&(p.data.press=-1),Object.hasOwn(p.data,"table")?(Object.hasOwn(p.data.table,"header")||(p.data.table.header=[]),Object.hasOwn(p.data.table,"data")||(p.data.table.data=[])):p.data.table={header:[],data:[]},p}function os(p){if(typeof p=="string")try{p=JSON.parse(p)}catch{return cs(p)}else p=p;if(typeof p.date!="number")throw new Error('invalid data: missing "date" from type "number"');if(typeof p.title!="string")throw new Error('invalid data: missing "title" from type "string"');if(!Array.isArray(p.data))throw new Error('invalid data: "data" not from type "array"');for(const t of p.data)ls(t);return p}function as(p){if(typeof p.title!="string")throw new Error('invalid data: missing "title" from type "string"');for(const t of p.data)us(t);return p}function ls(p){const t=e=>new Error(`invalid data for product:
${JSON.stringify(e,null,4)}`);if(typeof p.lotto!="string"||typeof p.name!="string"||typeof p.format!="string"||typeof p.thickness!="number"||typeof p.stamp!="string")throw t(p);return p}function us(p){const t=e=>new Error(`invalid data for "entry":
${JSON.stringify(e,null,4)}`);if(typeof p.key!="string"||typeof p.value!="string"||typeof p.lotto!="string"&&p.lotto!==null||typeof p.format!="string"&&p.format!==null||typeof p.thickness!="string"&&p.thickness!==null||typeof p.stamp!="string"&&p.stamp!==null)throw t(p);return p}function cs(p){const t=a=>{const[d,b]=a.split(/[xX]/),w=parseFloat(d),m=parseFloat(b);return!w||!m?`${w}x${m}`:`${w>m?w:m}x${w<m?w:m}`},e=new Date,i=(e.getMonth()+1).toString().padStart(2,"0"),s=e.getDate().toString().padStart(2,"0"),n={date:e.getTime(),title:`${e.getFullYear()}-${i}-${s}`,data:[]},o=p.split(`
`);for(let a=0;a<o.length;a++){if(!o[a])continue;let[d,...b]=o[a].trim().replace(/\t/g," ").split(" ");d=d.trim();const{productName:w,format:m,newRest:v}=(()=>{let c="",g="";for(let u=0;u<b.length;u++)if(b[u].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){g=t(b[u]),b=b.slice(u+1);break}else c+=b[u]+" ";return{productName:c.trim(),format:t(g),newRest:b.map(u=>u.trim()).filter(u=>!!u)}})();if(!m)throw`missing format for "${w}" (lotto: "${d}") in vis (txt) data!`;if(!(v[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${w}" with lotto "${d}"!`;const h=v.shift()||"",k=v.join(" ");n.data.push({lotto:d,name:w,format:m,thickness:parseFloat(h.replaceAll(",",".")),stamp:k})}return n}function xi(p,t,e,i){const s=n=>{const o=hs(n.target,e);o&&i(n,o)};return p.addEventListener(t,s),()=>{p.removeEventListener(t,s)}}function hs(p,t){for(;!p.matches(t);){if(!p.parentElement)return null;p=p.parentElement}return p}function ds(p){return`AlarmListen_${p.title}.json`}function Br(p){return`${p.title}`}function gr(p){return`BlechListen_${p.format}_${p.toolID}.json`}function gt(p){return`${p.format}:${p.toolID}`}function br(p){return`Vis_${p.title}.json`}function pe(p){return`${p.title}`}function Lt(p){return`${p.name}`}function fs(p){return`VisData_${p.title}.json`}function pt(p){return`${p.title}`}function vr(p){let t="";return p.lotto&&(t+="+"+p.lotto),p.format&&(t+="+"+p.format),p.stamp&&(t+="+"+p.stamp),p.thickness&&(t+="+"+p.thickness),`${p.key}
${t}
${p.value}`}const Ke=class Ke extends bt{constructor(){super("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=null,this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",t.innerHTML=F`
      <ui-flex-grid-item>
        <ui-input name="title" type="text" title="Vis Data Title"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.value){this.name.ui.invalid=!0;return}const i=pt({title:this.name.ui.value});if(!!this.uiStore.ui.get("visData").find(n=>pt(n)===i)){this.name.ui.invalid=!0;return}this.name.ui.invalid=!1,this.ui.events.dispatch("submit",{title:this.name.ui.value}),this.ui.close()}),this.appendChild(t)}};W(Ke,"register",()=>{customElements.define("new-vis-data-dialog",Ke)});let we=Ke;const Je=class Je extends bt{constructor(){super("Gist Token"),this.token=null,this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",t.innerHTML=F`
      <ui-flex-grid-item>
        <ui-label
          secondary="Für Schreibzugriff ist ein Token erforderlich."
        ></ui-label>
      </ui-flex-grid-item>

      <ui-flex-grid-item>
        <ui-input name="token" type="text" title="Gist Token"></ui-input>
      </ui-flex-grid-item>
    `,this.appendChild(t),this.token=this.querySelector('ui-input[name="token"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback()}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.token.ui.value){this.token.ui.invalid=!0;return}this.token.ui.invalid=!1,this.ui.events.dispatch("submit",this.token.ui.value),this.ui.close()}),this.appendChild(t)}};W(Je,"register",()=>{customElements.define("push-dialog",Je)});let ke=Je;const Ye=class Ye extends bt{constructor(){super("Vis Listen"),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=F``;for(const t of this.uiStore.ui.get("visLists")){const e=Lt(t);this.innerHTML+=F`
        <ui-check primary="${t.name}" value="${e}"></ui-check>
      `}this.ui.nofooter=!0}set(t){[...this.querySelectorAll("ui-check")].forEach(e=>{let i=this.getList(e.ui.value);e.ui.checked=this.isBookmark(i,t),e.oninput=()=>{e.ui.checked?i=this.addBookmark(i,t):i=this.removeBookmark(i,t),this.uiStore.ui.update("visLists",s=>s)}})}getList(t){const e=this.uiStore.ui.get("visLists").find(i=>Lt(i)===t);if(!e)throw new Error(`list "${t}" not found`);return e}isBookmark(t,e){return!!(t!=null&&t.data.find(i=>i.name===e.name&&i.lotto===e.lotto&&i.stamp===e.stamp&&i.format===e.format&&i.thickness===e.thickness))}addBookmark(t,e){return this.isBookmark(t,e)||t.data.push(e),t}removeBookmark(t,e){return this.isBookmark(t,e)&&(t.data=t.data.filter(i=>i.name!==e.name||i.lotto!==e.lotto||i.stamp!==e.stamp||i.format!==e.format||i.thickness!==e.thickness)),t}};W(Ye,"register",()=>{customElements.define("bookmark-dialog",Ye)});let xe=Ye;const Xe=class Xe extends bt{constructor(t){let e="";switch(t){case"create":e="Neue Liste";break;case"edit":e="Liste Bearbeiten";break}super(e),this.mode=t,this.uiStore=document.querySelector("ui-store"),this.originFormat="",this.originToolID="",this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",t.innerHTML=F`
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
    `,this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}set(t,e,i=-1){const s=this.querySelector('[name="format"] ui-input');s.ui.value=t;const n=this.querySelector('[name="toolID"] ui-input');n.ui.value=e,this.querySelector('[name="press"] ui-select').ui.options().forEach(a=>{a.ui.selected=parseInt(a.ui.value)===i}),this.originFormat=t,this.originToolID=e}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=this.getData();i!==null&&(this.ui.events.dispatch("submit",i),this.ui.close())}),this.appendChild(t)}getData(){var d;const t={format:"",toolID:"",press:-1},e=this.querySelector('[name="format"] ui-input');t.format=e.ui.value;const i=this.querySelector('[name="toolID"] ui-input');t.toolID=i.ui.value;const s=this.querySelector('[name="press"] ui-select');if(t.press=parseInt(((d=s.ui.selected())==null?void 0:d.ui.value)||"-1",10),t.format==="")return e.ui.invalid=!0,null;const n=gt({format:this.originFormat,toolID:this.originToolID}),o=gt(t),a=this.uiStore.ui.get("metalSheetLists").find(b=>this.mode==="edit"&&n===o?!1:gt(b)===o);return a?(e.ui.invalid=a.format===t.format&&a.toolID!==t.toolID,i.ui.invalid=a.toolID===t.toolID,null):t}};W(Xe,"register",()=>{customElements.define("metal-sheet-create-dialog",Xe)});let le=Xe;const Q={alert:"alert",alertLists:"alert-lists",metalSheetLists:"metal-sheet-lists",vis:"vis",product:"product",visLists:"vis-lists",visData:"vis-data",visDataEntry:"vis-data-entry"},Ge=class Ge extends kt{constructor(){super(Q.alert),this.uiStore=document.querySelector("ui-store"),this.alert=null,this.render()}render(){this.innerHTML=F`
      <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto"}set(t){this.alert=t,this.createAlertItem(),this.createDescItem()}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(Tr({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerHTML=this.alert.desc.join(`
`),t.appendChild(e)}};W(Ge,"register",()=>{customElements.define("alert-page",Ge)});let _e=Ge;const Qe=class Qe extends kt{constructor(){super(Q.alertLists),this.cleanup=new zt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.render()}render(){this.innerHTML=F`
      <pg-search-bar title="Alarmsuche (RegEx Mode)"></pg-search-bar>

      <div
        class="no-scrollbar"
        style="${At("width: 100%","height: 100%","padding-top: calc(var(--ui-app-bar-height) + var(--pg-search-bar-height))","overflow: auto","scroll-behavior: smooth")}"
      >
        <ul class="list"></ul>
      </div>
    `,this.searchBar=this.querySelector("pg-search-bar"),xi(this.querySelector("ul.list"),"click","[data-alert-item]",(t,e)=>{this.stackLayout.ui.set(Q.alert,i=>{i.set(JSON.parse(e.getAttribute("data-json")))},!0)})}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("search",async({active:e})=>{this.searchBar.pg.active=e,await this.search(e?this.searchBar.pg.input().ui.value:"")}));let t=null;this.cleanup.add(this.searchBar.pg.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}))}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregister(Q.alert)}set(t){const e=(t==null?void 0:t.title)||"";this.list=t||null,this.uiStore.ui.set("appBarTitle",e),this.searchBar.pg.input().ui.storagekey=Br(this.list),this.renderList()}async search(t){const e=new RegExp(t.replaceAll(" ",".*"),"i");[...this.querySelector("ul").children].forEach(i=>{if(!this.searchBar.pg.active){i.style.display="flex";return}if(this.is(JSON.parse(i.getAttribute("data-json")),e)){i.style.display="flex";return}i.style.display="none"})}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.searchBar.pg.input().ui.value.replaceAll(" ",".*"));for(let s=0;s<this.list.data.length;s++)(n=>{setTimeout(()=>{e.active===!0&&!this.is(this.list.data[n],i)||this.renderListElement(t,this.list.data[n],n<this.list.data.length-1)},1)})(s)}renderListElement(t,e,i){t.appendChild(Tr({alert:e,container:"li",hasBorder:i}))}is(t,e){const i=[];for(let s=t.from;s<=t.to;s++)i.push(s);return!!`${i.join(",")} ${t.alert}`.match(e)}};W(Qe,"register",()=>{customElements.define("alert-lists-page",Qe)});let Se=Qe;const ti=class ti extends bt{constructor(){super("Eintrag bearbeiten"),this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createDeleteButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback()}set({header:t,data:e=null}){const i=this.querySelector("ui-flex-grid");for(;i.firstChild;)i.removeChild(i.firstChild);for(let s=0;s<t.length;s++){const n=new ht;n.innerHTML=F`
        <ui-input title="${t[s]}" value="${(e==null?void 0:e[s])||""}"></ui-input>
      `,i.appendChild(n)}}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createDeleteButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="destructive">Delete</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.events.dispatch("delete",null),this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=[],s=this.querySelector("ui-flex-grid");for(const n of[...s.children]){const o=n.querySelector("ui-input");i.push(o.ui.value)}this.ui.events.dispatch("submit",i),this.ui.close()}),this.appendChild(t)}};W(ti,"register",()=>{customElements.define("metal-sheet-modify-entry-dialog",ti)});let Ce=ti;const ei=class ei extends bt{constructor(){super("Neuer Eintrag"),this.render()}render(){const t=new Rt;t.ui.gap="0.5rem",this.appendChild(t),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback()}set({header:t,data:e=null}){const i=this.querySelector("ui-flex-grid");for(;i.firstChild;)i.removeChild(i.firstChild);for(let s=0;s<t.length;s++){const n=new ht;n.innerHTML=F`
        <ui-input title="${t[s]}" value="${(e==null?void 0:e[s])||""}"></ui-input>
      `,i.appendChild(n)}}createCancelButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=[],s=this.querySelector("ui-flex-grid");for(const n of[...s.children]){const o=n.querySelector("ui-input");i.push(o.ui.value)}this.ui.events.dispatch("submit",i),this.ui.close()}),this.appendChild(t)}};W(ei,"register",()=>{customElements.define("metal-sheet-new-entry-dialog",ei)});let Ee=ei;const ii=class ii extends ve{constructor(){super(),this.events=new vt,this.render()}render(){this.innerHTML=F`
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
    `,this.querySelector('[name="new-entry"]').addEventListener("click",()=>{this.events.dispatch("new-entry",null)})}};W(ii,"register",()=>{customElements.define("metal-sheet-actions",ii)});let Pi=ii;const ri=class ri extends kt{constructor(){super(Q.metalSheetLists),this.uiStore=document.querySelector("ui-store"),this.list=null,this.render()}render(){this.innerHTML=F`
      <div
        class="no-scrollbar"
        style="${At("width: 100%","padding-top: var(--ui-app-bar-height)","overflow-x: auto")}"
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
    `,this.style.overflow="hidden",this.style.overflowY="auto",this.className="no-scrollbar",this.createMetalSheetActions();const t=this.querySelector("thead > tr"),e=this.querySelector("tbody");for(;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)e.removeChild(e.firstChild);if(this.list){for(const i of this.list.data.table.header){const s=document.createElement("th");s.style.textAlign="center",s.innerHTML=i,t.appendChild(s)}for(let i=0;i<this.list.data.table.data.length;i++){const s=document.createElement("tr");s.style.cursor="pointer",s.role="button",s.onclick=()=>this.createModifyEntryDialog(i),s.setAttribute("data-json",JSON.stringify(this.list.data.table.data[i])),e.appendChild(s);for(const n of this.list.data.table.data[i]){const o=document.createElement("td");o.style.textAlign="center",o.innerHTML=n,s.appendChild(o)}}Cr(e,{onDragEnd:()=>{this.list.data.table.data=[...e.children].map(i=>JSON.parse(i.getAttribute("data-json"))),this.updateStore(this.list),this.set(this.list)}})}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:async()=>{const t=new le("edit");t.set(this.list.format,this.list.toolID,this.list.data.press),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.deleteStore(gt(this.list)),this.list.format=e.format,this.list.toolID=e.toolID,this.list.data.press=e.press,this.set(this.list),this.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}})}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("edit",null)}set(t){if(this.list=t,t===null){this.uiStore.ui.set("appBarTitle","");return}let e=t.format;t.toolID&&(e=`${e} - ${t.toolID}`),t.data.press>-1&&(e=`${e} [P${t.data.press}]`),this.uiStore.ui.set("appBarTitle",e),this.render()}updateStore(t){this.uiStore.ui.update("metalSheetLists",e=>{t.date=new Date().getTime();const i=gt(t);return e=[...e.filter(s=>gt(s)!==i),t],e})}deleteStore(t){this.uiStore.ui.update("metalSheetLists",e=>(e=e.filter(i=>gt(i)!==t),e))}createMetalSheetActions(){this.querySelector("metal-sheet-actions").events.on("new-entry",()=>this.createNewEntryDialog())}createModifyEntryDialog(t){const e=new Ce;e.set({header:this.list.data.table.header,data:this.list.data.table.data[t]}),e.ui.events.on("close",()=>{document.body.removeChild(e)}),e.ui.events.on("submit",i=>{this.list.data.table.data[t]=i,this.set(this.list),this.updateStore(this.list)}),e.ui.events.on("delete",()=>{this.list.data.table.data=[...this.list.data.table.data.slice(0,t),...this.list.data.table.data.slice(t+1)],this.set(this.list),this.updateStore(this.list)}),document.body.appendChild(e),e.ui.open(!0)}createNewEntryDialog(){const t=new Ee;t.set({header:this.list.data.table.header,data:null}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.list.data.table.data.push(e),this.set(this.list),this.updateStore(this.list)}),document.body.appendChild(t),t.ui.open(!0)}};W(ri,"register",()=>{Ce.register(),Ee.register(),Pi.register(),customElements.define("metal-sheet-lists-page",ri)});let Ae=ri;const si=class si extends kt{constructor(){super(Q.product),this.uiStore=document.querySelector("ui-store"),this.pgAppBar=document.querySelector("pg-app-bar"),this.render()}shadowRender(){super.shadowRender(),this.shadowRoot.innerHTML+=F`
      <style>
        :host {
          display: block;
          padding-top: var(--ui-app-bar-height);
        }
      </style>
    `}render(){this.innerHTML=F`
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
    `}disconnectedCallback(){super.disconnectedCallback(),this.uiStore.ui.set("bookmark",{active:!1})}set(t){const e=this.querySelector(".placeholder");e.parentElement.replaceChild(sr({product:t,hasRipple:!1}),e),this.uiStore.ui.set("bookmark",{active:this.isBookmark(t)}),this.pgAppBar.items.bookmark.ui.child.onclick=()=>{const o=new xe;o.set(t),o.ui.events.on("close",()=>{document.body.removeChild(o),this.uiStore.ui.set("bookmark",{active:this.isBookmark(t)})}),document.body.appendChild(o),o.ui.open(!0)};const i=this.querySelector(".list"),s=zr(this.uiStore.ui.get("visData"));let n=!1;for(let o of s){n=!1,o=nr(o),i.appendChild(this.createTitleItem(o.title));for(let a=0;a<o.data.length;a++){const d=o.data[a];d.lotto!==null&&!t.lotto.match(new RegExp(d.lotto,"i"))||d.format!==null&&!t.format.match(new RegExp(d.format,"i"))||d.stamp!==null&&!t.stamp.match(new RegExp(d.stamp,"i"))||d.thickness!==null&&!t.thickness.toString().match(new RegExp(d.thickness,"i"))||(n=!0,i.appendChild(Rr({index:a,entry:d,events:null,hasRipple:!1,disableFilters:!0})))}n||i.removeChild(i.lastChild)}}isBookmark(t){const e=this.uiStore.ui.get("visLists");for(const i of e)for(const s of i.data)if(s.name===t.name&&s.lotto===t.lotto&&s.stamp===t.stamp&&s.format===t.format&&s.thickness===t.thickness)return!0;return!1}createTitleItem(t){const e=document.createElement("li");return e.style.textDecoration="underline",e.style.textAlign="center",e.innerHTML=F` <h3>${t}</h3> `,e}};W(si,"register",()=>{customElements.define("product-page",si)});let Le=si;const ni=class ni extends kt{constructor(){super(Q.vis),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.list=null,this.render()}render(){this.innerHTML=F`
      <pg-search-bar title="Suche... (RegEx Mode)" active></pg-search-bar>

      <div
        class="no-scrollbar container"
        style="${At("position: relative","width: 100%","height: 100%","padding-top: calc(var(--ui-app-bar-height) + var(--pg-search-bar-height))","overflow: auto","scroll-behavior: smooth")}"
      >
        <ul class="list"></ul>
      </div>
    `,this.searchBar=this.querySelector("pg-search-bar");let t=null;this.searchBar.pg.input().ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)}),this.searchBar.pg.input().ui.events.on("storage",async e=>{this.update(this.getRegExp(e))}),xi(this.querySelector("ul.list"),"click","[data-vis-item]",(e,i)=>{this.stackLayout.ui.set(Q.product,s=>{s.set(JSON.parse(i.getAttribute("data-json")))},!0)})}connectedCallback(){super.connectedCallback(),this.setAppBarTitle()}disconnectedCallback(){super.disconnectedCallback()}set(t){if(this.list=t,this.setAppBarTitle(),t===null){this.searchBar.pg.input().ui.storagekey=null;return}this.searchBar.pg.input().ui.storagekey=pe(t)}async update(t=null){const e=new ae;e.ui.nobg=!0;const i=this.querySelector(".container");i.appendChild(e);const s=this.querySelector(".list");for(;s.firstChild;)s.removeChild(s.firstChild);if(this.list)for(let n=0;n<this.list.data.length;n++)(o=>{setTimeout(()=>{const a=sr({product:this.list.data[o]});this.checkItem(a,t),(o>=this.list.data.length-1||a.style.display!=="none")&&e.parentElement&&i.removeChild(e),s.appendChild(a)},1)})(n)}async search(t){const e=this.getRegExp(t),i=this.querySelector(".list");for(const s of[...i.children])this.checkItem(s,e)}getRegExp(t){return new RegExp(t.replaceAll(" ",".*"),"i")}checkItem(t,e){return e?t.getAttribute("data-value").match(e)?t.style.display="block":t.style.display="none":t.style.display="block",t}setAppBarTitle(){this.uiStore.ui.set("appBarTitle",this.list?`Vis - ${this.list.title}`:"Vis")}};W(ni,"register",()=>{customElements.define("vis-page",ni)});let Te=ni;const oi=class oi extends bt{constructor(t){super("Liste Bearbeiten"),this.uiStore=document.querySelector("ui-store"),this.originTitle=t||"",this.render()}render(){this.innerHTML=F`
      <ui-flex-grid gap="0.5rem">
        <ui-flex-grid-item name="format">
          <ui-input
            name="title"
            type="text"
            title="Title"
            value="${this.originTitle}"
          ></ui-input>
        </ui-flex-grid-item>
      </ui-flex-grid>
    `,this.createCancel(),this.createSubmit()}getData(){const t={},e=this.querySelector('ui-input[name="title"]');return e.ui.value?(e.ui.invalid=!1,t.title=e.ui.value,t):(e.ui.invalid=!0,null)}createCancel(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="secondary">Cancel</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmit(){const t=new ht;t.ui.flex="0",t.slot="actions",t.innerHTML=F`
      <ui-button variant="full" color="primary">Submit</ui-button>
    `,t.querySelector("ui-button").ui.events.on("click",()=>{const i=this.getData();i!==null&&(this.ui.events.dispatch("submit",i),this.ui.close())}),this.appendChild(t)}};W(oi,"register",()=>{customElements.define("vis-data-edit-dialog",oi)});let Re=oi;const yr="visData",ai=class ai extends kt{constructor(){super(Q.visData),this.cleanup=new zt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.data=null,this.onVisData=t=>{this.set(t)},this.render()}render(){this.style.paddingTop="var(--ui-app-bar-height)",this.innerHTML=F`
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
        class="no-scrollbar list"
        style="${At("overflow: hidden","overflow-y: auto","width: 100%","height: calc(100% - 1rem - var(--ui-app-bar-height))","margin: 0")}"
      ></ul>
    `,this.uiStore.ui.set("appBarTitle","Vis Data"),this.querySelector('[name="new-entry"]').ui.events.on("click",()=>{this.stackLayout.ui.set(Q.visDataEntry,e=>{e.set(this.data.title,-1,{key:"",value:"",lotto:null,format:null,thickness:null,stamp:null})},!0)}),xi(this.querySelector("ul.list"),"click","[data-vis-data-item]",(e,i)=>{this.stackLayout.ui.set(Q.visDataEntry,s=>{s.set(this.data.title,parseInt(i.getAttribute("data-index")),JSON.parse(i.getAttribute("data-json")))},!0)})}connectedCallback(){super.connectedCallback(),this.uiStore.ui.set("edit",{onClick:()=>{const t=new Re(this.data.title);document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)});const e=pt(this.data);t.ui.events.on("submit",i=>{this.uiStore.ui.update(yr,s=>s.map(n=>(pt(n)===e&&(n.title=i.title||this.data.title),n)))}),t.ui.open(!0)}}),this.cleanup.add(this.uiStore.ui.on(yr,t=>{const e=pt(this.data);for(const i of t)if(pt(i)===e){this.onVisData(i);return}}))}disconnectedCallback(){this.cleanup.run(),this.uiStore.ui.set("edit",null)}set(t){this.data=nr(t),this.uiStore.ui.set("appBarTitle",`Vis Data - ${this.data.title}`);const e=this.querySelector("ul.list");for(;e.firstChild;)e.removeChild(e.firstChild);for(let i=0;i<this.data.data.length;i++)(s=>{setTimeout(()=>{const n=Rr({index:s,entry:this.data.data[s]});e.appendChild(n)},1)})(i)}};W(ai,"register",()=>{Re.register(),customElements.define("vis-data-page",ai)});let ze=ai;const wr="visData",li=class li extends kt{constructor(){super(Q.visDataEntry),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.listTitle,this.listEntry,this.listIndex,this.render()}render(){this.style.paddingTop="var(--ui-app-bar-height)",this.style.height="100%",this.innerHTML=F`
      <div
        class="inputs"
        style="${At("width: 100%","height: calc(100% - 3rem)","overflow: hidden")}"
      >
        <div
          class="no-scrollbar"
          style="${At("overflow: auto","width: 100%","height: 100%")}"
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

          <ui-input name="stamp" type="string" title="Stempel"></ui-input>

          <br />

          <ui-input name="thickness" type="string" title="Stärke"></ui-input>
        </div>
      </div>

      <div
        class="actions"
        style="${At("width: 100%","height: 2.5rem","padding-top: var(--ui-spacing)")}"
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
    `,this.querySelector('ui-button[name="submit"]').ui.events.on("click",()=>{const i=this.getData();i&&(this.uiStore.ui.update(wr,s=>{const n=pt({title:this.listTitle});return s.map(o=>pt(o)===n?(this.listIndex>-1&&(o.data=o.data.filter((a,d)=>d!==this.listIndex)),{...o,data:[...o.data,i]}):o)}),this.stackLayout.ui.goBack())}),this.querySelector('ui-button[name="delete"]').ui.events.on("click",async()=>{this.uiStore.ui.update(wr,i=>{const s=pt({title:this.listTitle});return i.map(n=>(pt(n)===s&&(n.data=n.data.filter((o,a)=>a!==this.listIndex)),n))}),this.stackLayout.ui.goBack()})}set(t,e,i){var o,a,d,b;this.listTitle=t,this.listEntry=i,this.listIndex=e;let s;s=this.querySelector('ui-input[name="key"]'),s.ui.value=i.key,s=this.querySelector('ui-textarea[name="value"]'),s.ui.value=i.value,s=this.querySelector('ui-input[name="lotto"]'),s.ui.value=((o=i.lotto)==null?void 0:o.replaceAll(".*"," "))||null,s=this.querySelector('ui-input[name="format"]'),s.ui.value=((a=i.format)==null?void 0:a.replaceAll(".*"," "))||null,s=this.querySelector('ui-input[name="stamp"]'),s.ui.value=((d=i.stamp)==null?void 0:d.replaceAll(".*"," "))||null,s=this.querySelector('ui-input[name="thickness"]'),s.ui.value=((b=i.thickness)==null?void 0:b.replaceAll(".*"," "))||null;const n=this.querySelector('ui-button[name="delete"]');n.ui.disabled=!i.key}getData(){var i,s,n,o;const t={key:"",value:"",lotto:null,format:null,thickness:null,stamp:null};let e;return e=this.querySelector('ui-input[name="key"]'),t.key=e.ui.value,!t.key||(e=this.querySelector('ui-textarea[name="value"]'),t.value=e.ui.value,!t.value)?(e.ui.invalid=!0,null):(e=this.querySelector('ui-input[name="lotto"]'),t.lotto=((i=e.ui.value)==null?void 0:i.trim().replace(" ",".*"))||null,e=this.querySelector('ui-input[name="format"]'),t.format=((s=e.ui.value)==null?void 0:s.trim().replace(" ",".*"))||null,e=this.querySelector('ui-input[name="stamp"]'),t.stamp=((n=e.ui.value)==null?void 0:n.trim().replace(" ",".*"))||null,e=this.querySelector('ui-input[name="thickness"]'),t.thickness=((o=e.ui.value)==null?void 0:o.trim().replace(" ",".*"))||null,t)}};W(li,"register",()=>{customElements.define("vis-data-entry-page",li)});let Be=li;const ps="visLists",ui=class ui extends kt{constructor(){super(Q.visLists),this.data=null,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=F`
      <div
        class="no-scrollbar container"
        style="
          position: relative;
          width: 100%;
          height: 100%;
          padding-top: calc(var(--ui-app-bar-height) + var(--pg-search-bar-height));
          overflow: auto;
          scroll-behavior: smooth;
        "
      >
        <ul class="list"></ul>
      </div>
    `,xi(this.querySelector("ul.list"),"click","[data-vis-item]",(t,e)=>{this.stackLayout.ui.set(Q.product,i=>{i.set(JSON.parse(e.getAttribute("data-json")))})})}set(t){this.data=t,this.uiStore.ui.set("appBarTitle",this.data?`Vis Listen - ${this.data.name}`:"Vis Listen"),this.renderList()}renderList(){const t=this.querySelector("ul.list");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.data){for(const e of this.data.data)t.appendChild(sr({product:e,hasRipple:!0}));Cr(t,{onDragEnd:()=>{this.data.data=[...t.children].map(e=>JSON.parse(e.getAttribute("data-json"))),this.uiStore.ui.update(ps,e=>{this.data.date=new Date().getTime();const i=Lt(this.data);return e=[...e.filter(s=>Lt(s)!==i),this.data],e})}})}}};W(ui,"register",()=>{customElements.define("vis-lists-page",ui)});let Oe=ui;const ms=F`
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
`,gs=F`
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
`,bs=F`
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
`,vs=F`
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
`,ys=F`
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
`,ci=class ci extends ge{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.render()}render(){this.innerHTML=F`
      <ui-app-bar-item name="menu" slot="left">
        <ui-icon-button ghost> ${bs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="back" slot="left" style="display: none">
        <ui-icon-button ghost> ${gs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="title" slot="center">
        <h4 class="title" style="white-space: nowrap;"></h4>
      </ui-app-bar-item>

      <ui-app-bar-item name="edit" slot="right">
        <ui-icon-button ghost> ${vs} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="share" slot="right">
        <ui-icon-button ghost> ${ys} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="search" slot="right">
        <ui-icon-button ghost> ${Ar} </ui-icon-button>
      </ui-app-bar-item>

      <ui-app-bar-item name="bookmark" slot="right">
        <ui-icon-button ghost> ${ms} </ui-icon-button>
      </ui-app-bar-item>
    `,this.items={menu:this.createMenuItem(),back:this.createBackItem(),title:this.createTitleItem(),edit:this.createEditItem(),share:this.createShareItem(),search:this.createSearchItem(),bookmark:this.createBookmark()}}connectedCallback(){super.connectedCallback(),this.setAttribute("position","top"),this.uiStore.ui.events.on("bookmark",t=>{t.active?this.items.bookmark.ui.child.style.color="orange":this.items.bookmark.ui.child.style.color=null})}createMenuItem(){const t=this.querySelector('[name="menu"]');return t.ui.child.ui.events.on("click",async()=>{this.uiDrawer.ui.open=!0}),t}createBackItem(){const t=this.querySelector('[name="back"]');return t.ui.child.ui.events.on("click",async()=>this.stackLayout.ui.goBack()),t}createTitleItem(){return this.querySelector('[name="title"]')}createEditItem(){const t=this.querySelector('[name="edit"]');return t.ui.child.ui.events.on("click",()=>{const i=this.uiStore.ui.get("edit").onClick;typeof i=="function"&&i()}),t}createShareItem(){const t=this.querySelector('[name="share"]');return t.ui.child.ui.events.on("click",async()=>{var n;const i=((n=this.uiStore.ui.get("share"))==null?void 0:n())||null;if(!i)return;const s=async()=>{const o=document.createElement("a");for(const a of i.files)o.download=a.name,o.href="data:application/json;charset=utf-8,"+encodeURIComponent(await a.text()),o.click()};if(!navigator.canShare)return await s();if(navigator.canShare(i)){try{await navigator.share(i)}catch{await s()}return}await s()}),t}createSearchItem(){const t=this.querySelector('[name="search"]');return t.ui.child.ui.events.on("click",()=>this.uiStore.ui.update("search",i=>({...i,active:!i.active}))),t}createBookmark(){return this.querySelector('[name="bookmark"]')}};W(ci,"register",()=>{customElements.define("pg-app-bar",ci)});let Ui=ci;const kr="Alarm Listen",$t="alertLists",hi=class hi extends Bt{constructor(){super(),this.cleanup=new zt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onAlertLists=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of Qr(t))this.appendChild(ue({primary:e.title,secondary:null,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(Q.alertLists,s=>{s.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{confirm(`Löschen "${e.title} - ${e.date}"?`)&&this.uiStore.ui.update($t,i=>i.filter(s=>s.title!==e.title))}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:$t,getKey:Br})},this.render()}render(){this.innerHTML=F`
      <pg-drawer-item-import
        storegistkey="${Q.alertLists}"
        title="${kr}"
      ></pg-drawer-item-import>

      <pg-drawer-item-gist></pg-drawer-item-gist>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.pg.setValidateHandler(ss),t.pg.setUpdateHandler(this.onUpdate),t.pg.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set($t,[])})}connectedCallback(){super.connectedCallback(),this.ui.title=kr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{ki(this.querySelector("pg-drawer-item-gist"),t,{storeGistKey:Q.alertLists,storeDataKey:$t,getFileName:ds,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on($t,this.onAlertLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};W(hi,"register",()=>{customElements.define("pg-drawer-group-alert-lists",hi)});let Vi=hi;var Et=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Or(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var Dr={exports:{}};(function(p,t){(function(e,i){i()})(Et,function(){function e(b,w){return typeof w>"u"?w={autoBom:!1}:typeof w!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),w={autoBom:!w}),w.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(b.type)?new Blob(["\uFEFF",b],{type:b.type}):b}function i(b,w,m){var v=new XMLHttpRequest;v.open("GET",b),v.responseType="blob",v.onload=function(){d(v.response,w,m)},v.onerror=function(){console.error("could not download file")},v.send()}function s(b){var w=new XMLHttpRequest;w.open("HEAD",b,!1);try{w.send()}catch{}return 200<=w.status&&299>=w.status}function n(b){try{b.dispatchEvent(new MouseEvent("click"))}catch{var w=document.createEvent("MouseEvents");w.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),b.dispatchEvent(w)}}var o=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof Et=="object"&&Et.global===Et?Et:void 0,a=o.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),d=o.saveAs||(typeof window!="object"||window!==o?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,w,m){var v=o.URL||o.webkitURL,h=document.createElement("a");w=w||b.name||"download",h.download=w,h.rel="noopener",typeof b=="string"?(h.href=b,h.origin===location.origin?n(h):s(h.href)?i(b,w,m):n(h,h.target="_blank")):(h.href=v.createObjectURL(b),setTimeout(function(){v.revokeObjectURL(h.href)},4e4),setTimeout(function(){n(h)},0))}:"msSaveOrOpenBlob"in navigator?function(b,w,m){if(w=w||b.name||"download",typeof b!="string")navigator.msSaveOrOpenBlob(e(b,m),w);else if(s(b))i(b,w,m);else{var v=document.createElement("a");v.href=b,v.target="_blank",setTimeout(function(){n(v)})}}:function(b,w,m,v){if(v=v||open("","_blank"),v&&(v.document.title=v.document.body.innerText="downloading..."),typeof b=="string")return i(b,w,m);var h=b.type==="application/octet-stream",k=/constructor/i.test(o.HTMLElement)||o.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||h&&k||a)&&typeof FileReader<"u"){var g=new FileReader;g.onloadend=function(){var S=g.result;S=c?S:S.replace(/^data:[^;]*;/,"data:attachment/file;"),v?v.location.href=S:location=S,v=null},g.readAsDataURL(b)}else{var u=o.URL||o.webkitURL,x=u.createObjectURL(b);v?v.location=x:location.href=x,v=null,setTimeout(function(){u.revokeObjectURL(x)},4e4)}});o.saveAs=d.saveAs=d,p.exports=d})})(Dr);var ws=Dr.exports;const ar=Or(ws);function fe(p){throw new Error('Could not dynamically require "'+p+'". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.')}var Mr={exports:{}};/*!

JSZip v3.10.1 - A JavaScript class for generating and reading zip files
<http://stuartk.com/jszip>

(c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.

JSZip uses the library pako released under the MIT license :
https://github.com/nodeca/pako/blob/main/LICENSE
*/(function(p,t){(function(e){p.exports=e()})(function(){return function e(i,s,n){function o(b,w){if(!s[b]){if(!i[b]){var m=typeof fe=="function"&&fe;if(!w&&m)return m(b,!0);if(a)return a(b,!0);var v=new Error("Cannot find module '"+b+"'");throw v.code="MODULE_NOT_FOUND",v}var h=s[b]={exports:{}};i[b][0].call(h.exports,function(k){var c=i[b][1][k];return o(c||k)},h,h.exports,e,i,s,n)}return s[b].exports}for(var a=typeof fe=="function"&&fe,d=0;d<n.length;d++)o(n[d]);return o}({1:[function(e,i,s){var n=e("./utils"),o=e("./support"),a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";s.encode=function(d){for(var b,w,m,v,h,k,c,g=[],u=0,x=d.length,S=x,A=n.getTypeOf(d)!=="string";u<d.length;)S=x-u,m=A?(b=d[u++],w=u<x?d[u++]:0,u<x?d[u++]:0):(b=d.charCodeAt(u++),w=u<x?d.charCodeAt(u++):0,u<x?d.charCodeAt(u++):0),v=b>>2,h=(3&b)<<4|w>>4,k=1<S?(15&w)<<2|m>>6:64,c=2<S?63&m:64,g.push(a.charAt(v)+a.charAt(h)+a.charAt(k)+a.charAt(c));return g.join("")},s.decode=function(d){var b,w,m,v,h,k,c=0,g=0,u="data:";if(d.substr(0,u.length)===u)throw new Error("Invalid base64 input, it looks like a data url.");var x,S=3*(d=d.replace(/[^A-Za-z0-9+/=]/g,"")).length/4;if(d.charAt(d.length-1)===a.charAt(64)&&S--,d.charAt(d.length-2)===a.charAt(64)&&S--,S%1!=0)throw new Error("Invalid base64 input, bad content length.");for(x=o.uint8array?new Uint8Array(0|S):new Array(0|S);c<d.length;)b=a.indexOf(d.charAt(c++))<<2|(v=a.indexOf(d.charAt(c++)))>>4,w=(15&v)<<4|(h=a.indexOf(d.charAt(c++)))>>2,m=(3&h)<<6|(k=a.indexOf(d.charAt(c++))),x[g++]=b,h!==64&&(x[g++]=w),k!==64&&(x[g++]=m);return x}},{"./support":30,"./utils":32}],2:[function(e,i,s){var n=e("./external"),o=e("./stream/DataWorker"),a=e("./stream/Crc32Probe"),d=e("./stream/DataLengthProbe");function b(w,m,v,h,k){this.compressedSize=w,this.uncompressedSize=m,this.crc32=v,this.compression=h,this.compressedContent=k}b.prototype={getContentWorker:function(){var w=new o(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new d("data_length")),m=this;return w.on("end",function(){if(this.streamInfo.data_length!==m.uncompressedSize)throw new Error("Bug : uncompressed data size mismatch")}),w},getCompressedWorker:function(){return new o(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize",this.compressedSize).withStreamInfo("uncompressedSize",this.uncompressedSize).withStreamInfo("crc32",this.crc32).withStreamInfo("compression",this.compression)}},b.createWorkerFrom=function(w,m,v){return w.pipe(new a).pipe(new d("uncompressedSize")).pipe(m.compressWorker(v)).pipe(new d("compressedSize")).withStreamInfo("compression",m)},i.exports=b},{"./external":6,"./stream/Crc32Probe":25,"./stream/DataLengthProbe":26,"./stream/DataWorker":27}],3:[function(e,i,s){var n=e("./stream/GenericWorker");s.STORE={magic:"\0\0",compressWorker:function(){return new n("STORE compression")},uncompressWorker:function(){return new n("STORE decompression")}},s.DEFLATE=e("./flate")},{"./flate":7,"./stream/GenericWorker":28}],4:[function(e,i,s){var n=e("./utils"),o=function(){for(var a,d=[],b=0;b<256;b++){a=b;for(var w=0;w<8;w++)a=1&a?3988292384^a>>>1:a>>>1;d[b]=a}return d}();i.exports=function(a,d){return a!==void 0&&a.length?n.getTypeOf(a)!=="string"?function(b,w,m,v){var h=o,k=v+m;b^=-1;for(var c=v;c<k;c++)b=b>>>8^h[255&(b^w[c])];return-1^b}(0|d,a,a.length,0):function(b,w,m,v){var h=o,k=v+m;b^=-1;for(var c=v;c<k;c++)b=b>>>8^h[255&(b^w.charCodeAt(c))];return-1^b}(0|d,a,a.length,0):0}},{"./utils":32}],5:[function(e,i,s){s.base64=!1,s.binary=!1,s.dir=!1,s.createFolders=!0,s.date=null,s.compression=null,s.compressionOptions=null,s.comment=null,s.unixPermissions=null,s.dosPermissions=null},{}],6:[function(e,i,s){var n=null;n=typeof Promise<"u"?Promise:e("lie"),i.exports={Promise:n}},{lie:37}],7:[function(e,i,s){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Uint32Array<"u",o=e("pako"),a=e("./utils"),d=e("./stream/GenericWorker"),b=n?"uint8array":"array";function w(m,v){d.call(this,"FlateWorker/"+m),this._pako=null,this._pakoAction=m,this._pakoOptions=v,this.meta={}}s.magic="\b\0",a.inherits(w,d),w.prototype.processChunk=function(m){this.meta=m.meta,this._pako===null&&this._createPako(),this._pako.push(a.transformTo(b,m.data),!1)},w.prototype.flush=function(){d.prototype.flush.call(this),this._pako===null&&this._createPako(),this._pako.push([],!0)},w.prototype.cleanUp=function(){d.prototype.cleanUp.call(this),this._pako=null},w.prototype._createPako=function(){this._pako=new o[this._pakoAction]({raw:!0,level:this._pakoOptions.level||-1});var m=this;this._pako.onData=function(v){m.push({data:v,meta:m.meta})}},s.compressWorker=function(m){return new w("Deflate",m)},s.uncompressWorker=function(){return new w("Inflate",{})}},{"./stream/GenericWorker":28,"./utils":32,pako:38}],8:[function(e,i,s){function n(h,k){var c,g="";for(c=0;c<k;c++)g+=String.fromCharCode(255&h),h>>>=8;return g}function o(h,k,c,g,u,x){var S,A,E=h.file,q=h.compression,O=x!==b.utf8encode,N=a.transformTo("string",x(E.name)),B=a.transformTo("string",b.utf8encode(E.name)),V=E.comment,tt=a.transformTo("string",x(V)),_=a.transformTo("string",b.utf8encode(V)),D=B.length!==E.name.length,l=_.length!==V.length,H="",it="",$="",rt=E.dir,P=E.date,et={crc32:0,compressedSize:0,uncompressedSize:0};k&&!c||(et.crc32=h.crc32,et.compressedSize=h.compressedSize,et.uncompressedSize=h.uncompressedSize);var R=0;k&&(R|=8),O||!D&&!l||(R|=2048);var T=0,G=0;rt&&(T|=16),u==="UNIX"?(G=798,T|=function(K,lt){var ft=K;return K||(ft=lt?16893:33204),(65535&ft)<<16}(E.unixPermissions,rt)):(G=20,T|=function(K){return 63&(K||0)}(E.dosPermissions)),S=P.getUTCHours(),S<<=6,S|=P.getUTCMinutes(),S<<=5,S|=P.getUTCSeconds()/2,A=P.getUTCFullYear()-1980,A<<=4,A|=P.getUTCMonth()+1,A<<=5,A|=P.getUTCDate(),D&&(it=n(1,1)+n(w(N),4)+B,H+="up"+n(it.length,2)+it),l&&($=n(1,1)+n(w(tt),4)+_,H+="uc"+n($.length,2)+$);var J="";return J+=`
\0`,J+=n(R,2),J+=q.magic,J+=n(S,2),J+=n(A,2),J+=n(et.crc32,4),J+=n(et.compressedSize,4),J+=n(et.uncompressedSize,4),J+=n(N.length,2),J+=n(H.length,2),{fileRecord:m.LOCAL_FILE_HEADER+J+N+H,dirRecord:m.CENTRAL_FILE_HEADER+n(G,2)+J+n(tt.length,2)+"\0\0\0\0"+n(T,4)+n(g,4)+N+H+tt}}var a=e("../utils"),d=e("../stream/GenericWorker"),b=e("../utf8"),w=e("../crc32"),m=e("../signature");function v(h,k,c,g){d.call(this,"ZipFileWorker"),this.bytesWritten=0,this.zipComment=k,this.zipPlatform=c,this.encodeFileName=g,this.streamFiles=h,this.accumulate=!1,this.contentBuffer=[],this.dirRecords=[],this.currentSourceOffset=0,this.entriesCount=0,this.currentFile=null,this._sources=[]}a.inherits(v,d),v.prototype.push=function(h){var k=h.meta.percent||0,c=this.entriesCount,g=this._sources.length;this.accumulate?this.contentBuffer.push(h):(this.bytesWritten+=h.data.length,d.prototype.push.call(this,{data:h.data,meta:{currentFile:this.currentFile,percent:c?(k+100*(c-g-1))/c:100}}))},v.prototype.openedSource=function(h){this.currentSourceOffset=this.bytesWritten,this.currentFile=h.file.name;var k=this.streamFiles&&!h.file.dir;if(k){var c=o(h,k,!1,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);this.push({data:c.fileRecord,meta:{percent:0}})}else this.accumulate=!0},v.prototype.closedSource=function(h){this.accumulate=!1;var k=this.streamFiles&&!h.file.dir,c=o(h,k,!0,this.currentSourceOffset,this.zipPlatform,this.encodeFileName);if(this.dirRecords.push(c.dirRecord),k)this.push({data:function(g){return m.DATA_DESCRIPTOR+n(g.crc32,4)+n(g.compressedSize,4)+n(g.uncompressedSize,4)}(h),meta:{percent:100}});else for(this.push({data:c.fileRecord,meta:{percent:0}});this.contentBuffer.length;)this.push(this.contentBuffer.shift());this.currentFile=null},v.prototype.flush=function(){for(var h=this.bytesWritten,k=0;k<this.dirRecords.length;k++)this.push({data:this.dirRecords[k],meta:{percent:100}});var c=this.bytesWritten-h,g=function(u,x,S,A,E){var q=a.transformTo("string",E(A));return m.CENTRAL_DIRECTORY_END+"\0\0\0\0"+n(u,2)+n(u,2)+n(x,4)+n(S,4)+n(q.length,2)+q}(this.dirRecords.length,c,h,this.zipComment,this.encodeFileName);this.push({data:g,meta:{percent:100}})},v.prototype.prepareNextSource=function(){this.previous=this._sources.shift(),this.openedSource(this.previous.streamInfo),this.isPaused?this.previous.pause():this.previous.resume()},v.prototype.registerPrevious=function(h){this._sources.push(h);var k=this;return h.on("data",function(c){k.processChunk(c)}),h.on("end",function(){k.closedSource(k.previous.streamInfo),k._sources.length?k.prepareNextSource():k.end()}),h.on("error",function(c){k.error(c)}),this},v.prototype.resume=function(){return!!d.prototype.resume.call(this)&&(!this.previous&&this._sources.length?(this.prepareNextSource(),!0):this.previous||this._sources.length||this.generatedError?void 0:(this.end(),!0))},v.prototype.error=function(h){var k=this._sources;if(!d.prototype.error.call(this,h))return!1;for(var c=0;c<k.length;c++)try{k[c].error(h)}catch{}return!0},v.prototype.lock=function(){d.prototype.lock.call(this);for(var h=this._sources,k=0;k<h.length;k++)h[k].lock()},i.exports=v},{"../crc32":4,"../signature":23,"../stream/GenericWorker":28,"../utf8":31,"../utils":32}],9:[function(e,i,s){var n=e("../compressions"),o=e("./ZipFileWorker");s.generateWorker=function(a,d,b){var w=new o(d.streamFiles,b,d.platform,d.encodeFileName),m=0;try{a.forEach(function(v,h){m++;var k=function(x,S){var A=x||S,E=n[A];if(!E)throw new Error(A+" is not a valid compression method !");return E}(h.options.compression,d.compression),c=h.options.compressionOptions||d.compressionOptions||{},g=h.dir,u=h.date;h._compressWorker(k,c).withStreamInfo("file",{name:v,dir:g,date:u,comment:h.comment||"",unixPermissions:h.unixPermissions,dosPermissions:h.dosPermissions}).pipe(w)}),w.entriesCount=m}catch(v){w.error(v)}return w}},{"../compressions":3,"./ZipFileWorker":8}],10:[function(e,i,s){function n(){if(!(this instanceof n))return new n;if(arguments.length)throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");this.files=Object.create(null),this.comment=null,this.root="",this.clone=function(){var o=new n;for(var a in this)typeof this[a]!="function"&&(o[a]=this[a]);return o}}(n.prototype=e("./object")).loadAsync=e("./load"),n.support=e("./support"),n.defaults=e("./defaults"),n.version="3.10.1",n.loadAsync=function(o,a){return new n().loadAsync(o,a)},n.external=e("./external"),i.exports=n},{"./defaults":5,"./external":6,"./load":11,"./object":15,"./support":30}],11:[function(e,i,s){var n=e("./utils"),o=e("./external"),a=e("./utf8"),d=e("./zipEntries"),b=e("./stream/Crc32Probe"),w=e("./nodejsUtils");function m(v){return new o.Promise(function(h,k){var c=v.decompressed.getContentWorker().pipe(new b);c.on("error",function(g){k(g)}).on("end",function(){c.streamInfo.crc32!==v.decompressed.crc32?k(new Error("Corrupted zip : CRC32 mismatch")):h()}).resume()})}i.exports=function(v,h){var k=this;return h=n.extend(h||{},{base64:!1,checkCRC32:!1,optimizedBinaryString:!1,createFolders:!1,decodeFileName:a.utf8decode}),w.isNode&&w.isStream(v)?o.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")):n.prepareContent("the loaded zip file",v,!0,h.optimizedBinaryString,h.base64).then(function(c){var g=new d(h);return g.load(c),g}).then(function(c){var g=[o.Promise.resolve(c)],u=c.files;if(h.checkCRC32)for(var x=0;x<u.length;x++)g.push(m(u[x]));return o.Promise.all(g)}).then(function(c){for(var g=c.shift(),u=g.files,x=0;x<u.length;x++){var S=u[x],A=S.fileNameStr,E=n.resolve(S.fileNameStr);k.file(E,S.decompressed,{binary:!0,optimizedBinaryString:!0,date:S.date,dir:S.dir,comment:S.fileCommentStr.length?S.fileCommentStr:null,unixPermissions:S.unixPermissions,dosPermissions:S.dosPermissions,createFolders:h.createFolders}),S.dir||(k.file(E).unsafeOriginalName=A)}return g.zipComment.length&&(k.comment=g.zipComment),k})}},{"./external":6,"./nodejsUtils":14,"./stream/Crc32Probe":25,"./utf8":31,"./utils":32,"./zipEntries":33}],12:[function(e,i,s){var n=e("../utils"),o=e("../stream/GenericWorker");function a(d,b){o.call(this,"Nodejs stream input adapter for "+d),this._upstreamEnded=!1,this._bindStream(b)}n.inherits(a,o),a.prototype._bindStream=function(d){var b=this;(this._stream=d).pause(),d.on("data",function(w){b.push({data:w,meta:{percent:0}})}).on("error",function(w){b.isPaused?this.generatedError=w:b.error(w)}).on("end",function(){b.isPaused?b._upstreamEnded=!0:b.end()})},a.prototype.pause=function(){return!!o.prototype.pause.call(this)&&(this._stream.pause(),!0)},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(this._upstreamEnded?this.end():this._stream.resume(),!0)},i.exports=a},{"../stream/GenericWorker":28,"../utils":32}],13:[function(e,i,s){var n=e("readable-stream").Readable;function o(a,d,b){n.call(this,d),this._helper=a;var w=this;a.on("data",function(m,v){w.push(m)||w._helper.pause(),b&&b(v)}).on("error",function(m){w.emit("error",m)}).on("end",function(){w.push(null)})}e("../utils").inherits(o,n),o.prototype._read=function(){this._helper.resume()},i.exports=o},{"../utils":32,"readable-stream":16}],14:[function(e,i,s){i.exports={isNode:typeof Buffer<"u",newBufferFrom:function(n,o){if(Buffer.from&&Buffer.from!==Uint8Array.from)return Buffer.from(n,o);if(typeof n=="number")throw new Error('The "data" argument must not be a number');return new Buffer(n,o)},allocBuffer:function(n){if(Buffer.alloc)return Buffer.alloc(n);var o=new Buffer(n);return o.fill(0),o},isBuffer:function(n){return Buffer.isBuffer(n)},isStream:function(n){return n&&typeof n.on=="function"&&typeof n.pause=="function"&&typeof n.resume=="function"}}},{}],15:[function(e,i,s){function n(E,q,O){var N,B=a.getTypeOf(q),V=a.extend(O||{},w);V.date=V.date||new Date,V.compression!==null&&(V.compression=V.compression.toUpperCase()),typeof V.unixPermissions=="string"&&(V.unixPermissions=parseInt(V.unixPermissions,8)),V.unixPermissions&&16384&V.unixPermissions&&(V.dir=!0),V.dosPermissions&&16&V.dosPermissions&&(V.dir=!0),V.dir&&(E=u(E)),V.createFolders&&(N=g(E))&&x.call(this,N,!0);var tt=B==="string"&&V.binary===!1&&V.base64===!1;O&&O.binary!==void 0||(V.binary=!tt),(q instanceof m&&q.uncompressedSize===0||V.dir||!q||q.length===0)&&(V.base64=!1,V.binary=!0,q="",V.compression="STORE",B="string");var _=null;_=q instanceof m||q instanceof d?q:k.isNode&&k.isStream(q)?new c(E,q):a.prepareContent(E,q,V.binary,V.optimizedBinaryString,V.base64);var D=new v(E,_,V);this.files[E]=D}var o=e("./utf8"),a=e("./utils"),d=e("./stream/GenericWorker"),b=e("./stream/StreamHelper"),w=e("./defaults"),m=e("./compressedObject"),v=e("./zipObject"),h=e("./generate"),k=e("./nodejsUtils"),c=e("./nodejs/NodejsStreamInputAdapter"),g=function(E){E.slice(-1)==="/"&&(E=E.substring(0,E.length-1));var q=E.lastIndexOf("/");return 0<q?E.substring(0,q):""},u=function(E){return E.slice(-1)!=="/"&&(E+="/"),E},x=function(E,q){return q=q!==void 0?q:w.createFolders,E=u(E),this.files[E]||n.call(this,E,null,{dir:!0,createFolders:q}),this.files[E]};function S(E){return Object.prototype.toString.call(E)==="[object RegExp]"}var A={load:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},forEach:function(E){var q,O,N;for(q in this.files)N=this.files[q],(O=q.slice(this.root.length,q.length))&&q.slice(0,this.root.length)===this.root&&E(O,N)},filter:function(E){var q=[];return this.forEach(function(O,N){E(O,N)&&q.push(N)}),q},file:function(E,q,O){if(arguments.length!==1)return E=this.root+E,n.call(this,E,q,O),this;if(S(E)){var N=E;return this.filter(function(V,tt){return!tt.dir&&N.test(V)})}var B=this.files[this.root+E];return B&&!B.dir?B:null},folder:function(E){if(!E)return this;if(S(E))return this.filter(function(B,V){return V.dir&&E.test(B)});var q=this.root+E,O=x.call(this,q),N=this.clone();return N.root=O.name,N},remove:function(E){E=this.root+E;var q=this.files[E];if(q||(E.slice(-1)!=="/"&&(E+="/"),q=this.files[E]),q&&!q.dir)delete this.files[E];else for(var O=this.filter(function(B,V){return V.name.slice(0,E.length)===E}),N=0;N<O.length;N++)delete this.files[O[N].name];return this},generate:function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},generateInternalStream:function(E){var q,O={};try{if((O=a.extend(E||{},{streamFiles:!1,compression:"STORE",compressionOptions:null,type:"",platform:"DOS",comment:null,mimeType:"application/zip",encodeFileName:o.utf8encode})).type=O.type.toLowerCase(),O.compression=O.compression.toUpperCase(),O.type==="binarystring"&&(O.type="string"),!O.type)throw new Error("No output type specified.");a.checkSupport(O.type),O.platform!=="darwin"&&O.platform!=="freebsd"&&O.platform!=="linux"&&O.platform!=="sunos"||(O.platform="UNIX"),O.platform==="win32"&&(O.platform="DOS");var N=O.comment||this.comment||"";q=h.generateWorker(this,O,N)}catch(B){(q=new d("error")).error(B)}return new b(q,O.type||"string",O.mimeType)},generateAsync:function(E,q){return this.generateInternalStream(E).accumulate(q)},generateNodeStream:function(E,q){return(E=E||{}).type||(E.type="nodebuffer"),this.generateInternalStream(E).toNodejsStream(q)}};i.exports=A},{"./compressedObject":2,"./defaults":5,"./generate":9,"./nodejs/NodejsStreamInputAdapter":12,"./nodejsUtils":14,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31,"./utils":32,"./zipObject":35}],16:[function(e,i,s){i.exports=e("stream")},{stream:void 0}],17:[function(e,i,s){var n=e("./DataReader");function o(a){n.call(this,a);for(var d=0;d<this.data.length;d++)a[d]=255&a[d]}e("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data[this.zero+a]},o.prototype.lastIndexOfSignature=function(a){for(var d=a.charCodeAt(0),b=a.charCodeAt(1),w=a.charCodeAt(2),m=a.charCodeAt(3),v=this.length-4;0<=v;--v)if(this.data[v]===d&&this.data[v+1]===b&&this.data[v+2]===w&&this.data[v+3]===m)return v-this.zero;return-1},o.prototype.readAndCheckSignature=function(a){var d=a.charCodeAt(0),b=a.charCodeAt(1),w=a.charCodeAt(2),m=a.charCodeAt(3),v=this.readData(4);return d===v[0]&&b===v[1]&&w===v[2]&&m===v[3]},o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return[];var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},i.exports=o},{"../utils":32,"./DataReader":18}],18:[function(e,i,s){var n=e("../utils");function o(a){this.data=a,this.length=a.length,this.index=0,this.zero=0}o.prototype={checkOffset:function(a){this.checkIndex(this.index+a)},checkIndex:function(a){if(this.length<this.zero+a||a<0)throw new Error("End of data reached (data length = "+this.length+", asked index = "+a+"). Corrupted zip ?")},setIndex:function(a){this.checkIndex(a),this.index=a},skip:function(a){this.setIndex(this.index+a)},byteAt:function(){},readInt:function(a){var d,b=0;for(this.checkOffset(a),d=this.index+a-1;d>=this.index;d--)b=(b<<8)+this.byteAt(d);return this.index+=a,b},readString:function(a){return n.transformTo("string",this.readData(a))},readData:function(){},lastIndexOfSignature:function(){},readAndCheckSignature:function(){},readDate:function(){var a=this.readInt(4);return new Date(Date.UTC(1980+(a>>25&127),(a>>21&15)-1,a>>16&31,a>>11&31,a>>5&63,(31&a)<<1))}},i.exports=o},{"../utils":32}],19:[function(e,i,s){var n=e("./Uint8ArrayReader");function o(a){n.call(this,a)}e("../utils").inherits(o,n),o.prototype.readData=function(a){this.checkOffset(a);var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},i.exports=o},{"../utils":32,"./Uint8ArrayReader":21}],20:[function(e,i,s){var n=e("./DataReader");function o(a){n.call(this,a)}e("../utils").inherits(o,n),o.prototype.byteAt=function(a){return this.data.charCodeAt(this.zero+a)},o.prototype.lastIndexOfSignature=function(a){return this.data.lastIndexOf(a)-this.zero},o.prototype.readAndCheckSignature=function(a){return a===this.readData(4)},o.prototype.readData=function(a){this.checkOffset(a);var d=this.data.slice(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},i.exports=o},{"../utils":32,"./DataReader":18}],21:[function(e,i,s){var n=e("./ArrayReader");function o(a){n.call(this,a)}e("../utils").inherits(o,n),o.prototype.readData=function(a){if(this.checkOffset(a),a===0)return new Uint8Array(0);var d=this.data.subarray(this.zero+this.index,this.zero+this.index+a);return this.index+=a,d},i.exports=o},{"../utils":32,"./ArrayReader":17}],22:[function(e,i,s){var n=e("../utils"),o=e("../support"),a=e("./ArrayReader"),d=e("./StringReader"),b=e("./NodeBufferReader"),w=e("./Uint8ArrayReader");i.exports=function(m){var v=n.getTypeOf(m);return n.checkSupport(v),v!=="string"||o.uint8array?v==="nodebuffer"?new b(m):o.uint8array?new w(n.transformTo("uint8array",m)):new a(n.transformTo("array",m)):new d(m)}},{"../support":30,"../utils":32,"./ArrayReader":17,"./NodeBufferReader":19,"./StringReader":20,"./Uint8ArrayReader":21}],23:[function(e,i,s){s.LOCAL_FILE_HEADER="PK",s.CENTRAL_FILE_HEADER="PK",s.CENTRAL_DIRECTORY_END="PK",s.ZIP64_CENTRAL_DIRECTORY_LOCATOR="PK\x07",s.ZIP64_CENTRAL_DIRECTORY_END="PK",s.DATA_DESCRIPTOR="PK\x07\b"},{}],24:[function(e,i,s){var n=e("./GenericWorker"),o=e("../utils");function a(d){n.call(this,"ConvertWorker to "+d),this.destType=d}o.inherits(a,n),a.prototype.processChunk=function(d){this.push({data:o.transformTo(this.destType,d.data),meta:d.meta})},i.exports=a},{"../utils":32,"./GenericWorker":28}],25:[function(e,i,s){var n=e("./GenericWorker"),o=e("../crc32");function a(){n.call(this,"Crc32Probe"),this.withStreamInfo("crc32",0)}e("../utils").inherits(a,n),a.prototype.processChunk=function(d){this.streamInfo.crc32=o(d.data,this.streamInfo.crc32||0),this.push(d)},i.exports=a},{"../crc32":4,"../utils":32,"./GenericWorker":28}],26:[function(e,i,s){var n=e("../utils"),o=e("./GenericWorker");function a(d){o.call(this,"DataLengthProbe for "+d),this.propName=d,this.withStreamInfo(d,0)}n.inherits(a,o),a.prototype.processChunk=function(d){if(d){var b=this.streamInfo[this.propName]||0;this.streamInfo[this.propName]=b+d.data.length}o.prototype.processChunk.call(this,d)},i.exports=a},{"../utils":32,"./GenericWorker":28}],27:[function(e,i,s){var n=e("../utils"),o=e("./GenericWorker");function a(d){o.call(this,"DataWorker");var b=this;this.dataIsReady=!1,this.index=0,this.max=0,this.data=null,this.type="",this._tickScheduled=!1,d.then(function(w){b.dataIsReady=!0,b.data=w,b.max=w&&w.length||0,b.type=n.getTypeOf(w),b.isPaused||b._tickAndRepeat()},function(w){b.error(w)})}n.inherits(a,o),a.prototype.cleanUp=function(){o.prototype.cleanUp.call(this),this.data=null},a.prototype.resume=function(){return!!o.prototype.resume.call(this)&&(!this._tickScheduled&&this.dataIsReady&&(this._tickScheduled=!0,n.delay(this._tickAndRepeat,[],this)),!0)},a.prototype._tickAndRepeat=function(){this._tickScheduled=!1,this.isPaused||this.isFinished||(this._tick(),this.isFinished||(n.delay(this._tickAndRepeat,[],this),this._tickScheduled=!0))},a.prototype._tick=function(){if(this.isPaused||this.isFinished)return!1;var d=null,b=Math.min(this.max,this.index+16384);if(this.index>=this.max)return this.end();switch(this.type){case"string":d=this.data.substring(this.index,b);break;case"uint8array":d=this.data.subarray(this.index,b);break;case"array":case"nodebuffer":d=this.data.slice(this.index,b)}return this.index=b,this.push({data:d,meta:{percent:this.max?this.index/this.max*100:0}})},i.exports=a},{"../utils":32,"./GenericWorker":28}],28:[function(e,i,s){function n(o){this.name=o||"default",this.streamInfo={},this.generatedError=null,this.extraStreamInfo={},this.isPaused=!0,this.isFinished=!1,this.isLocked=!1,this._listeners={data:[],end:[],error:[]},this.previous=null}n.prototype={push:function(o){this.emit("data",o)},end:function(){if(this.isFinished)return!1;this.flush();try{this.emit("end"),this.cleanUp(),this.isFinished=!0}catch(o){this.emit("error",o)}return!0},error:function(o){return!this.isFinished&&(this.isPaused?this.generatedError=o:(this.isFinished=!0,this.emit("error",o),this.previous&&this.previous.error(o),this.cleanUp()),!0)},on:function(o,a){return this._listeners[o].push(a),this},cleanUp:function(){this.streamInfo=this.generatedError=this.extraStreamInfo=null,this._listeners=[]},emit:function(o,a){if(this._listeners[o])for(var d=0;d<this._listeners[o].length;d++)this._listeners[o][d].call(this,a)},pipe:function(o){return o.registerPrevious(this)},registerPrevious:function(o){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.streamInfo=o.streamInfo,this.mergeStreamInfo(),this.previous=o;var a=this;return o.on("data",function(d){a.processChunk(d)}),o.on("end",function(){a.end()}),o.on("error",function(d){a.error(d)}),this},pause:function(){return!this.isPaused&&!this.isFinished&&(this.isPaused=!0,this.previous&&this.previous.pause(),!0)},resume:function(){if(!this.isPaused||this.isFinished)return!1;var o=this.isPaused=!1;return this.generatedError&&(this.error(this.generatedError),o=!0),this.previous&&this.previous.resume(),!o},flush:function(){},processChunk:function(o){this.push(o)},withStreamInfo:function(o,a){return this.extraStreamInfo[o]=a,this.mergeStreamInfo(),this},mergeStreamInfo:function(){for(var o in this.extraStreamInfo)Object.prototype.hasOwnProperty.call(this.extraStreamInfo,o)&&(this.streamInfo[o]=this.extraStreamInfo[o])},lock:function(){if(this.isLocked)throw new Error("The stream '"+this+"' has already been used.");this.isLocked=!0,this.previous&&this.previous.lock()},toString:function(){var o="Worker "+this.name;return this.previous?this.previous+" -> "+o:o}},i.exports=n},{}],29:[function(e,i,s){var n=e("../utils"),o=e("./ConvertWorker"),a=e("./GenericWorker"),d=e("../base64"),b=e("../support"),w=e("../external"),m=null;if(b.nodestream)try{m=e("../nodejs/NodejsStreamOutputAdapter")}catch{}function v(k,c){return new w.Promise(function(g,u){var x=[],S=k._internalType,A=k._outputType,E=k._mimeType;k.on("data",function(q,O){x.push(q),c&&c(O)}).on("error",function(q){x=[],u(q)}).on("end",function(){try{var q=function(O,N,B){switch(O){case"blob":return n.newBlob(n.transformTo("arraybuffer",N),B);case"base64":return d.encode(N);default:return n.transformTo(O,N)}}(A,function(O,N){var B,V=0,tt=null,_=0;for(B=0;B<N.length;B++)_+=N[B].length;switch(O){case"string":return N.join("");case"array":return Array.prototype.concat.apply([],N);case"uint8array":for(tt=new Uint8Array(_),B=0;B<N.length;B++)tt.set(N[B],V),V+=N[B].length;return tt;case"nodebuffer":return Buffer.concat(N);default:throw new Error("concat : unsupported type '"+O+"'")}}(S,x),E);g(q)}catch(O){u(O)}x=[]}).resume()})}function h(k,c,g){var u=c;switch(c){case"blob":case"arraybuffer":u="uint8array";break;case"base64":u="string"}try{this._internalType=u,this._outputType=c,this._mimeType=g,n.checkSupport(u),this._worker=k.pipe(new o(u)),k.lock()}catch(x){this._worker=new a("error"),this._worker.error(x)}}h.prototype={accumulate:function(k){return v(this,k)},on:function(k,c){var g=this;return k==="data"?this._worker.on(k,function(u){c.call(g,u.data,u.meta)}):this._worker.on(k,function(){n.delay(c,arguments,g)}),this},resume:function(){return n.delay(this._worker.resume,[],this._worker),this},pause:function(){return this._worker.pause(),this},toNodejsStream:function(k){if(n.checkSupport("nodestream"),this._outputType!=="nodebuffer")throw new Error(this._outputType+" is not supported by this method");return new m(this,{objectMode:this._outputType!=="nodebuffer"},k)}},i.exports=h},{"../base64":1,"../external":6,"../nodejs/NodejsStreamOutputAdapter":13,"../support":30,"../utils":32,"./ConvertWorker":24,"./GenericWorker":28}],30:[function(e,i,s){if(s.base64=!0,s.array=!0,s.string=!0,s.arraybuffer=typeof ArrayBuffer<"u"&&typeof Uint8Array<"u",s.nodebuffer=typeof Buffer<"u",s.uint8array=typeof Uint8Array<"u",typeof ArrayBuffer>"u")s.blob=!1;else{var n=new ArrayBuffer(0);try{s.blob=new Blob([n],{type:"application/zip"}).size===0}catch{try{var o=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);o.append(n),s.blob=o.getBlob("application/zip").size===0}catch{s.blob=!1}}}try{s.nodestream=!!e("readable-stream").Readable}catch{s.nodestream=!1}},{"readable-stream":16}],31:[function(e,i,s){for(var n=e("./utils"),o=e("./support"),a=e("./nodejsUtils"),d=e("./stream/GenericWorker"),b=new Array(256),w=0;w<256;w++)b[w]=252<=w?6:248<=w?5:240<=w?4:224<=w?3:192<=w?2:1;b[254]=b[254]=1;function m(){d.call(this,"utf-8 decode"),this.leftOver=null}function v(){d.call(this,"utf-8 encode")}s.utf8encode=function(h){return o.nodebuffer?a.newBufferFrom(h,"utf-8"):function(k){var c,g,u,x,S,A=k.length,E=0;for(x=0;x<A;x++)(64512&(g=k.charCodeAt(x)))==55296&&x+1<A&&(64512&(u=k.charCodeAt(x+1)))==56320&&(g=65536+(g-55296<<10)+(u-56320),x++),E+=g<128?1:g<2048?2:g<65536?3:4;for(c=o.uint8array?new Uint8Array(E):new Array(E),x=S=0;S<E;x++)(64512&(g=k.charCodeAt(x)))==55296&&x+1<A&&(64512&(u=k.charCodeAt(x+1)))==56320&&(g=65536+(g-55296<<10)+(u-56320),x++),g<128?c[S++]=g:(g<2048?c[S++]=192|g>>>6:(g<65536?c[S++]=224|g>>>12:(c[S++]=240|g>>>18,c[S++]=128|g>>>12&63),c[S++]=128|g>>>6&63),c[S++]=128|63&g);return c}(h)},s.utf8decode=function(h){return o.nodebuffer?n.transformTo("nodebuffer",h).toString("utf-8"):function(k){var c,g,u,x,S=k.length,A=new Array(2*S);for(c=g=0;c<S;)if((u=k[c++])<128)A[g++]=u;else if(4<(x=b[u]))A[g++]=65533,c+=x-1;else{for(u&=x===2?31:x===3?15:7;1<x&&c<S;)u=u<<6|63&k[c++],x--;1<x?A[g++]=65533:u<65536?A[g++]=u:(u-=65536,A[g++]=55296|u>>10&1023,A[g++]=56320|1023&u)}return A.length!==g&&(A.subarray?A=A.subarray(0,g):A.length=g),n.applyFromCharCode(A)}(h=n.transformTo(o.uint8array?"uint8array":"array",h))},n.inherits(m,d),m.prototype.processChunk=function(h){var k=n.transformTo(o.uint8array?"uint8array":"array",h.data);if(this.leftOver&&this.leftOver.length){if(o.uint8array){var c=k;(k=new Uint8Array(c.length+this.leftOver.length)).set(this.leftOver,0),k.set(c,this.leftOver.length)}else k=this.leftOver.concat(k);this.leftOver=null}var g=function(x,S){var A;for((S=S||x.length)>x.length&&(S=x.length),A=S-1;0<=A&&(192&x[A])==128;)A--;return A<0||A===0?S:A+b[x[A]]>S?A:S}(k),u=k;g!==k.length&&(o.uint8array?(u=k.subarray(0,g),this.leftOver=k.subarray(g,k.length)):(u=k.slice(0,g),this.leftOver=k.slice(g,k.length))),this.push({data:s.utf8decode(u),meta:h.meta})},m.prototype.flush=function(){this.leftOver&&this.leftOver.length&&(this.push({data:s.utf8decode(this.leftOver),meta:{}}),this.leftOver=null)},s.Utf8DecodeWorker=m,n.inherits(v,d),v.prototype.processChunk=function(h){this.push({data:s.utf8encode(h.data),meta:h.meta})},s.Utf8EncodeWorker=v},{"./nodejsUtils":14,"./stream/GenericWorker":28,"./support":30,"./utils":32}],32:[function(e,i,s){var n=e("./support"),o=e("./base64"),a=e("./nodejsUtils"),d=e("./external");function b(c){return c}function w(c,g){for(var u=0;u<c.length;++u)g[u]=255&c.charCodeAt(u);return g}e("setimmediate"),s.newBlob=function(c,g){s.checkSupport("blob");try{return new Blob([c],{type:g})}catch{try{var u=new(self.BlobBuilder||self.WebKitBlobBuilder||self.MozBlobBuilder||self.MSBlobBuilder);return u.append(c),u.getBlob(g)}catch{throw new Error("Bug : can't construct the Blob.")}}};var m={stringifyByChunk:function(c,g,u){var x=[],S=0,A=c.length;if(A<=u)return String.fromCharCode.apply(null,c);for(;S<A;)g==="array"||g==="nodebuffer"?x.push(String.fromCharCode.apply(null,c.slice(S,Math.min(S+u,A)))):x.push(String.fromCharCode.apply(null,c.subarray(S,Math.min(S+u,A)))),S+=u;return x.join("")},stringifyByChar:function(c){for(var g="",u=0;u<c.length;u++)g+=String.fromCharCode(c[u]);return g},applyCanBeUsed:{uint8array:function(){try{return n.uint8array&&String.fromCharCode.apply(null,new Uint8Array(1)).length===1}catch{return!1}}(),nodebuffer:function(){try{return n.nodebuffer&&String.fromCharCode.apply(null,a.allocBuffer(1)).length===1}catch{return!1}}()}};function v(c){var g=65536,u=s.getTypeOf(c),x=!0;if(u==="uint8array"?x=m.applyCanBeUsed.uint8array:u==="nodebuffer"&&(x=m.applyCanBeUsed.nodebuffer),x)for(;1<g;)try{return m.stringifyByChunk(c,u,g)}catch{g=Math.floor(g/2)}return m.stringifyByChar(c)}function h(c,g){for(var u=0;u<c.length;u++)g[u]=c[u];return g}s.applyFromCharCode=v;var k={};k.string={string:b,array:function(c){return w(c,new Array(c.length))},arraybuffer:function(c){return k.string.uint8array(c).buffer},uint8array:function(c){return w(c,new Uint8Array(c.length))},nodebuffer:function(c){return w(c,a.allocBuffer(c.length))}},k.array={string:v,array:b,arraybuffer:function(c){return new Uint8Array(c).buffer},uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(c)}},k.arraybuffer={string:function(c){return v(new Uint8Array(c))},array:function(c){return h(new Uint8Array(c),new Array(c.byteLength))},arraybuffer:b,uint8array:function(c){return new Uint8Array(c)},nodebuffer:function(c){return a.newBufferFrom(new Uint8Array(c))}},k.uint8array={string:v,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return c.buffer},uint8array:b,nodebuffer:function(c){return a.newBufferFrom(c)}},k.nodebuffer={string:v,array:function(c){return h(c,new Array(c.length))},arraybuffer:function(c){return k.nodebuffer.uint8array(c).buffer},uint8array:function(c){return h(c,new Uint8Array(c.length))},nodebuffer:b},s.transformTo=function(c,g){if(g=g||"",!c)return g;s.checkSupport(c);var u=s.getTypeOf(g);return k[u][c](g)},s.resolve=function(c){for(var g=c.split("/"),u=[],x=0;x<g.length;x++){var S=g[x];S==="."||S===""&&x!==0&&x!==g.length-1||(S===".."?u.pop():u.push(S))}return u.join("/")},s.getTypeOf=function(c){return typeof c=="string"?"string":Object.prototype.toString.call(c)==="[object Array]"?"array":n.nodebuffer&&a.isBuffer(c)?"nodebuffer":n.uint8array&&c instanceof Uint8Array?"uint8array":n.arraybuffer&&c instanceof ArrayBuffer?"arraybuffer":void 0},s.checkSupport=function(c){if(!n[c.toLowerCase()])throw new Error(c+" is not supported by this platform")},s.MAX_VALUE_16BITS=65535,s.MAX_VALUE_32BITS=-1,s.pretty=function(c){var g,u,x="";for(u=0;u<(c||"").length;u++)x+="\\x"+((g=c.charCodeAt(u))<16?"0":"")+g.toString(16).toUpperCase();return x},s.delay=function(c,g,u){setImmediate(function(){c.apply(u||null,g||[])})},s.inherits=function(c,g){function u(){}u.prototype=g.prototype,c.prototype=new u},s.extend=function(){var c,g,u={};for(c=0;c<arguments.length;c++)for(g in arguments[c])Object.prototype.hasOwnProperty.call(arguments[c],g)&&u[g]===void 0&&(u[g]=arguments[c][g]);return u},s.prepareContent=function(c,g,u,x,S){return d.Promise.resolve(g).then(function(A){return n.blob&&(A instanceof Blob||["[object File]","[object Blob]"].indexOf(Object.prototype.toString.call(A))!==-1)&&typeof FileReader<"u"?new d.Promise(function(E,q){var O=new FileReader;O.onload=function(N){E(N.target.result)},O.onerror=function(N){q(N.target.error)},O.readAsArrayBuffer(A)}):A}).then(function(A){var E=s.getTypeOf(A);return E?(E==="arraybuffer"?A=s.transformTo("uint8array",A):E==="string"&&(S?A=o.decode(A):u&&x!==!0&&(A=function(q){return w(q,n.uint8array?new Uint8Array(q.length):new Array(q.length))}(A))),A):d.Promise.reject(new Error("Can't read the data of '"+c+"'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"))})}},{"./base64":1,"./external":6,"./nodejsUtils":14,"./support":30,setimmediate:54}],33:[function(e,i,s){var n=e("./reader/readerFor"),o=e("./utils"),a=e("./signature"),d=e("./zipEntry"),b=e("./support");function w(m){this.files=[],this.loadOptions=m}w.prototype={checkSignature:function(m){if(!this.reader.readAndCheckSignature(m)){this.reader.index-=4;var v=this.reader.readString(4);throw new Error("Corrupted zip or bug: unexpected signature ("+o.pretty(v)+", expected "+o.pretty(m)+")")}},isSignature:function(m,v){var h=this.reader.index;this.reader.setIndex(m);var k=this.reader.readString(4)===v;return this.reader.setIndex(h),k},readBlockEndOfCentral:function(){this.diskNumber=this.reader.readInt(2),this.diskWithCentralDirStart=this.reader.readInt(2),this.centralDirRecordsOnThisDisk=this.reader.readInt(2),this.centralDirRecords=this.reader.readInt(2),this.centralDirSize=this.reader.readInt(4),this.centralDirOffset=this.reader.readInt(4),this.zipCommentLength=this.reader.readInt(2);var m=this.reader.readData(this.zipCommentLength),v=b.uint8array?"uint8array":"array",h=o.transformTo(v,m);this.zipComment=this.loadOptions.decodeFileName(h)},readBlockZip64EndOfCentral:function(){this.zip64EndOfCentralSize=this.reader.readInt(8),this.reader.skip(4),this.diskNumber=this.reader.readInt(4),this.diskWithCentralDirStart=this.reader.readInt(4),this.centralDirRecordsOnThisDisk=this.reader.readInt(8),this.centralDirRecords=this.reader.readInt(8),this.centralDirSize=this.reader.readInt(8),this.centralDirOffset=this.reader.readInt(8),this.zip64ExtensibleData={};for(var m,v,h,k=this.zip64EndOfCentralSize-44;0<k;)m=this.reader.readInt(2),v=this.reader.readInt(4),h=this.reader.readData(v),this.zip64ExtensibleData[m]={id:m,length:v,value:h}},readBlockZip64EndOfCentralLocator:function(){if(this.diskWithZip64CentralDirStart=this.reader.readInt(4),this.relativeOffsetEndOfZip64CentralDir=this.reader.readInt(8),this.disksCount=this.reader.readInt(4),1<this.disksCount)throw new Error("Multi-volumes zip are not supported")},readLocalFiles:function(){var m,v;for(m=0;m<this.files.length;m++)v=this.files[m],this.reader.setIndex(v.localHeaderOffset),this.checkSignature(a.LOCAL_FILE_HEADER),v.readLocalPart(this.reader),v.handleUTF8(),v.processAttributes()},readCentralDir:function(){var m;for(this.reader.setIndex(this.centralDirOffset);this.reader.readAndCheckSignature(a.CENTRAL_FILE_HEADER);)(m=new d({zip64:this.zip64},this.loadOptions)).readCentralPart(this.reader),this.files.push(m);if(this.centralDirRecords!==this.files.length&&this.centralDirRecords!==0&&this.files.length===0)throw new Error("Corrupted zip or bug: expected "+this.centralDirRecords+" records in central dir, got "+this.files.length)},readEndOfCentral:function(){var m=this.reader.lastIndexOfSignature(a.CENTRAL_DIRECTORY_END);if(m<0)throw this.isSignature(0,a.LOCAL_FILE_HEADER)?new Error("Corrupted zip: can't find end of central directory"):new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html");this.reader.setIndex(m);var v=m;if(this.checkSignature(a.CENTRAL_DIRECTORY_END),this.readBlockEndOfCentral(),this.diskNumber===o.MAX_VALUE_16BITS||this.diskWithCentralDirStart===o.MAX_VALUE_16BITS||this.centralDirRecordsOnThisDisk===o.MAX_VALUE_16BITS||this.centralDirRecords===o.MAX_VALUE_16BITS||this.centralDirSize===o.MAX_VALUE_32BITS||this.centralDirOffset===o.MAX_VALUE_32BITS){if(this.zip64=!0,(m=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR))<0)throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");if(this.reader.setIndex(m),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_LOCATOR),this.readBlockZip64EndOfCentralLocator(),!this.isSignature(this.relativeOffsetEndOfZip64CentralDir,a.ZIP64_CENTRAL_DIRECTORY_END)&&(this.relativeOffsetEndOfZip64CentralDir=this.reader.lastIndexOfSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.relativeOffsetEndOfZip64CentralDir<0))throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir),this.checkSignature(a.ZIP64_CENTRAL_DIRECTORY_END),this.readBlockZip64EndOfCentral()}var h=this.centralDirOffset+this.centralDirSize;this.zip64&&(h+=20,h+=12+this.zip64EndOfCentralSize);var k=v-h;if(0<k)this.isSignature(v,a.CENTRAL_FILE_HEADER)||(this.reader.zero=k);else if(k<0)throw new Error("Corrupted zip: missing "+Math.abs(k)+" bytes.")},prepareReader:function(m){this.reader=n(m)},load:function(m){this.prepareReader(m),this.readEndOfCentral(),this.readCentralDir(),this.readLocalFiles()}},i.exports=w},{"./reader/readerFor":22,"./signature":23,"./support":30,"./utils":32,"./zipEntry":34}],34:[function(e,i,s){var n=e("./reader/readerFor"),o=e("./utils"),a=e("./compressedObject"),d=e("./crc32"),b=e("./utf8"),w=e("./compressions"),m=e("./support");function v(h,k){this.options=h,this.loadOptions=k}v.prototype={isEncrypted:function(){return(1&this.bitFlag)==1},useUTF8:function(){return(2048&this.bitFlag)==2048},readLocalPart:function(h){var k,c;if(h.skip(22),this.fileNameLength=h.readInt(2),c=h.readInt(2),this.fileName=h.readData(this.fileNameLength),h.skip(c),this.compressedSize===-1||this.uncompressedSize===-1)throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");if((k=function(g){for(var u in w)if(Object.prototype.hasOwnProperty.call(w,u)&&w[u].magic===g)return w[u];return null}(this.compressionMethod))===null)throw new Error("Corrupted zip : compression "+o.pretty(this.compressionMethod)+" unknown (inner file : "+o.transformTo("string",this.fileName)+")");this.decompressed=new a(this.compressedSize,this.uncompressedSize,this.crc32,k,h.readData(this.compressedSize))},readCentralPart:function(h){this.versionMadeBy=h.readInt(2),h.skip(2),this.bitFlag=h.readInt(2),this.compressionMethod=h.readString(2),this.date=h.readDate(),this.crc32=h.readInt(4),this.compressedSize=h.readInt(4),this.uncompressedSize=h.readInt(4);var k=h.readInt(2);if(this.extraFieldsLength=h.readInt(2),this.fileCommentLength=h.readInt(2),this.diskNumberStart=h.readInt(2),this.internalFileAttributes=h.readInt(2),this.externalFileAttributes=h.readInt(4),this.localHeaderOffset=h.readInt(4),this.isEncrypted())throw new Error("Encrypted zip are not supported");h.skip(k),this.readExtraFields(h),this.parseZIP64ExtraField(h),this.fileComment=h.readData(this.fileCommentLength)},processAttributes:function(){this.unixPermissions=null,this.dosPermissions=null;var h=this.versionMadeBy>>8;this.dir=!!(16&this.externalFileAttributes),h==0&&(this.dosPermissions=63&this.externalFileAttributes),h==3&&(this.unixPermissions=this.externalFileAttributes>>16&65535),this.dir||this.fileNameStr.slice(-1)!=="/"||(this.dir=!0)},parseZIP64ExtraField:function(){if(this.extraFields[1]){var h=n(this.extraFields[1].value);this.uncompressedSize===o.MAX_VALUE_32BITS&&(this.uncompressedSize=h.readInt(8)),this.compressedSize===o.MAX_VALUE_32BITS&&(this.compressedSize=h.readInt(8)),this.localHeaderOffset===o.MAX_VALUE_32BITS&&(this.localHeaderOffset=h.readInt(8)),this.diskNumberStart===o.MAX_VALUE_32BITS&&(this.diskNumberStart=h.readInt(4))}},readExtraFields:function(h){var k,c,g,u=h.index+this.extraFieldsLength;for(this.extraFields||(this.extraFields={});h.index+4<u;)k=h.readInt(2),c=h.readInt(2),g=h.readData(c),this.extraFields[k]={id:k,length:c,value:g};h.setIndex(u)},handleUTF8:function(){var h=m.uint8array?"uint8array":"array";if(this.useUTF8())this.fileNameStr=b.utf8decode(this.fileName),this.fileCommentStr=b.utf8decode(this.fileComment);else{var k=this.findExtraFieldUnicodePath();if(k!==null)this.fileNameStr=k;else{var c=o.transformTo(h,this.fileName);this.fileNameStr=this.loadOptions.decodeFileName(c)}var g=this.findExtraFieldUnicodeComment();if(g!==null)this.fileCommentStr=g;else{var u=o.transformTo(h,this.fileComment);this.fileCommentStr=this.loadOptions.decodeFileName(u)}}},findExtraFieldUnicodePath:function(){var h=this.extraFields[28789];if(h){var k=n(h.value);return k.readInt(1)!==1||d(this.fileName)!==k.readInt(4)?null:b.utf8decode(k.readData(h.length-5))}return null},findExtraFieldUnicodeComment:function(){var h=this.extraFields[25461];if(h){var k=n(h.value);return k.readInt(1)!==1||d(this.fileComment)!==k.readInt(4)?null:b.utf8decode(k.readData(h.length-5))}return null}},i.exports=v},{"./compressedObject":2,"./compressions":3,"./crc32":4,"./reader/readerFor":22,"./support":30,"./utf8":31,"./utils":32}],35:[function(e,i,s){function n(k,c,g){this.name=k,this.dir=g.dir,this.date=g.date,this.comment=g.comment,this.unixPermissions=g.unixPermissions,this.dosPermissions=g.dosPermissions,this._data=c,this._dataBinary=g.binary,this.options={compression:g.compression,compressionOptions:g.compressionOptions}}var o=e("./stream/StreamHelper"),a=e("./stream/DataWorker"),d=e("./utf8"),b=e("./compressedObject"),w=e("./stream/GenericWorker");n.prototype={internalStream:function(k){var c=null,g="string";try{if(!k)throw new Error("No output type specified.");var u=(g=k.toLowerCase())==="string"||g==="text";g!=="binarystring"&&g!=="text"||(g="string"),c=this._decompressWorker();var x=!this._dataBinary;x&&!u&&(c=c.pipe(new d.Utf8EncodeWorker)),!x&&u&&(c=c.pipe(new d.Utf8DecodeWorker))}catch(S){(c=new w("error")).error(S)}return new o(c,g,"")},async:function(k,c){return this.internalStream(k).accumulate(c)},nodeStream:function(k,c){return this.internalStream(k||"nodebuffer").toNodejsStream(c)},_compressWorker:function(k,c){if(this._data instanceof b&&this._data.compression.magic===k.magic)return this._data.getCompressedWorker();var g=this._decompressWorker();return this._dataBinary||(g=g.pipe(new d.Utf8EncodeWorker)),b.createWorkerFrom(g,k,c)},_decompressWorker:function(){return this._data instanceof b?this._data.getContentWorker():this._data instanceof w?this._data:new a(this._data)}};for(var m=["asText","asBinary","asNodeBuffer","asUint8Array","asArrayBuffer"],v=function(){throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.")},h=0;h<m.length;h++)n.prototype[m[h]]=v;i.exports=n},{"./compressedObject":2,"./stream/DataWorker":27,"./stream/GenericWorker":28,"./stream/StreamHelper":29,"./utf8":31}],36:[function(e,i,s){(function(n){var o,a,d=n.MutationObserver||n.WebKitMutationObserver;if(d){var b=0,w=new d(k),m=n.document.createTextNode("");w.observe(m,{characterData:!0}),o=function(){m.data=b=++b%2}}else if(n.setImmediate||n.MessageChannel===void 0)o="document"in n&&"onreadystatechange"in n.document.createElement("script")?function(){var c=n.document.createElement("script");c.onreadystatechange=function(){k(),c.onreadystatechange=null,c.parentNode.removeChild(c),c=null},n.document.documentElement.appendChild(c)}:function(){setTimeout(k,0)};else{var v=new n.MessageChannel;v.port1.onmessage=k,o=function(){v.port2.postMessage(0)}}var h=[];function k(){var c,g;a=!0;for(var u=h.length;u;){for(g=h,h=[],c=-1;++c<u;)g[c]();u=h.length}a=!1}i.exports=function(c){h.push(c)!==1||a||o()}}).call(this,typeof Et<"u"?Et:typeof self<"u"?self:typeof window<"u"?window:{})},{}],37:[function(e,i,s){var n=e("immediate");function o(){}var a={},d=["REJECTED"],b=["FULFILLED"],w=["PENDING"];function m(u){if(typeof u!="function")throw new TypeError("resolver must be a function");this.state=w,this.queue=[],this.outcome=void 0,u!==o&&c(this,u)}function v(u,x,S){this.promise=u,typeof x=="function"&&(this.onFulfilled=x,this.callFulfilled=this.otherCallFulfilled),typeof S=="function"&&(this.onRejected=S,this.callRejected=this.otherCallRejected)}function h(u,x,S){n(function(){var A;try{A=x(S)}catch(E){return a.reject(u,E)}A===u?a.reject(u,new TypeError("Cannot resolve promise with itself")):a.resolve(u,A)})}function k(u){var x=u&&u.then;if(u&&(typeof u=="object"||typeof u=="function")&&typeof x=="function")return function(){x.apply(u,arguments)}}function c(u,x){var S=!1;function A(O){S||(S=!0,a.reject(u,O))}function E(O){S||(S=!0,a.resolve(u,O))}var q=g(function(){x(E,A)});q.status==="error"&&A(q.value)}function g(u,x){var S={};try{S.value=u(x),S.status="success"}catch(A){S.status="error",S.value=A}return S}(i.exports=m).prototype.finally=function(u){if(typeof u!="function")return this;var x=this.constructor;return this.then(function(S){return x.resolve(u()).then(function(){return S})},function(S){return x.resolve(u()).then(function(){throw S})})},m.prototype.catch=function(u){return this.then(null,u)},m.prototype.then=function(u,x){if(typeof u!="function"&&this.state===b||typeof x!="function"&&this.state===d)return this;var S=new this.constructor(o);return this.state!==w?h(S,this.state===b?u:x,this.outcome):this.queue.push(new v(S,u,x)),S},v.prototype.callFulfilled=function(u){a.resolve(this.promise,u)},v.prototype.otherCallFulfilled=function(u){h(this.promise,this.onFulfilled,u)},v.prototype.callRejected=function(u){a.reject(this.promise,u)},v.prototype.otherCallRejected=function(u){h(this.promise,this.onRejected,u)},a.resolve=function(u,x){var S=g(k,x);if(S.status==="error")return a.reject(u,S.value);var A=S.value;if(A)c(u,A);else{u.state=b,u.outcome=x;for(var E=-1,q=u.queue.length;++E<q;)u.queue[E].callFulfilled(x)}return u},a.reject=function(u,x){u.state=d,u.outcome=x;for(var S=-1,A=u.queue.length;++S<A;)u.queue[S].callRejected(x);return u},m.resolve=function(u){return u instanceof this?u:a.resolve(new this(o),u)},m.reject=function(u){var x=new this(o);return a.reject(x,u)},m.all=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=u.length,A=!1;if(!S)return this.resolve([]);for(var E=new Array(S),q=0,O=-1,N=new this(o);++O<S;)B(u[O],O);return N;function B(V,tt){x.resolve(V).then(function(_){E[tt]=_,++q!==S||A||(A=!0,a.resolve(N,E))},function(_){A||(A=!0,a.reject(N,_))})}},m.race=function(u){var x=this;if(Object.prototype.toString.call(u)!=="[object Array]")return this.reject(new TypeError("must be an array"));var S=u.length,A=!1;if(!S)return this.resolve([]);for(var E=-1,q=new this(o);++E<S;)O=u[E],x.resolve(O).then(function(N){A||(A=!0,a.resolve(q,N))},function(N){A||(A=!0,a.reject(q,N))});var O;return q}},{immediate:36}],38:[function(e,i,s){var n={};(0,e("./lib/utils/common").assign)(n,e("./lib/deflate"),e("./lib/inflate"),e("./lib/zlib/constants")),i.exports=n},{"./lib/deflate":39,"./lib/inflate":40,"./lib/utils/common":41,"./lib/zlib/constants":44}],39:[function(e,i,s){var n=e("./zlib/deflate"),o=e("./utils/common"),a=e("./utils/strings"),d=e("./zlib/messages"),b=e("./zlib/zstream"),w=Object.prototype.toString,m=0,v=-1,h=0,k=8;function c(u){if(!(this instanceof c))return new c(u);this.options=o.assign({level:v,method:k,chunkSize:16384,windowBits:15,memLevel:8,strategy:h,to:""},u||{});var x=this.options;x.raw&&0<x.windowBits?x.windowBits=-x.windowBits:x.gzip&&0<x.windowBits&&x.windowBits<16&&(x.windowBits+=16),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new b,this.strm.avail_out=0;var S=n.deflateInit2(this.strm,x.level,x.method,x.windowBits,x.memLevel,x.strategy);if(S!==m)throw new Error(d[S]);if(x.header&&n.deflateSetHeader(this.strm,x.header),x.dictionary){var A;if(A=typeof x.dictionary=="string"?a.string2buf(x.dictionary):w.call(x.dictionary)==="[object ArrayBuffer]"?new Uint8Array(x.dictionary):x.dictionary,(S=n.deflateSetDictionary(this.strm,A))!==m)throw new Error(d[S]);this._dict_set=!0}}function g(u,x){var S=new c(x);if(S.push(u,!0),S.err)throw S.msg||d[S.err];return S.result}c.prototype.push=function(u,x){var S,A,E=this.strm,q=this.options.chunkSize;if(this.ended)return!1;A=x===~~x?x:x===!0?4:0,typeof u=="string"?E.input=a.string2buf(u):w.call(u)==="[object ArrayBuffer]"?E.input=new Uint8Array(u):E.input=u,E.next_in=0,E.avail_in=E.input.length;do{if(E.avail_out===0&&(E.output=new o.Buf8(q),E.next_out=0,E.avail_out=q),(S=n.deflate(E,A))!==1&&S!==m)return this.onEnd(S),!(this.ended=!0);E.avail_out!==0&&(E.avail_in!==0||A!==4&&A!==2)||(this.options.to==="string"?this.onData(a.buf2binstring(o.shrinkBuf(E.output,E.next_out))):this.onData(o.shrinkBuf(E.output,E.next_out)))}while((0<E.avail_in||E.avail_out===0)&&S!==1);return A===4?(S=n.deflateEnd(this.strm),this.onEnd(S),this.ended=!0,S===m):A!==2||(this.onEnd(m),!(E.avail_out=0))},c.prototype.onData=function(u){this.chunks.push(u)},c.prototype.onEnd=function(u){u===m&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=u,this.msg=this.strm.msg},s.Deflate=c,s.deflate=g,s.deflateRaw=function(u,x){return(x=x||{}).raw=!0,g(u,x)},s.gzip=function(u,x){return(x=x||{}).gzip=!0,g(u,x)}},{"./utils/common":41,"./utils/strings":42,"./zlib/deflate":46,"./zlib/messages":51,"./zlib/zstream":53}],40:[function(e,i,s){var n=e("./zlib/inflate"),o=e("./utils/common"),a=e("./utils/strings"),d=e("./zlib/constants"),b=e("./zlib/messages"),w=e("./zlib/zstream"),m=e("./zlib/gzheader"),v=Object.prototype.toString;function h(c){if(!(this instanceof h))return new h(c);this.options=o.assign({chunkSize:16384,windowBits:0,to:""},c||{});var g=this.options;g.raw&&0<=g.windowBits&&g.windowBits<16&&(g.windowBits=-g.windowBits,g.windowBits===0&&(g.windowBits=-15)),!(0<=g.windowBits&&g.windowBits<16)||c&&c.windowBits||(g.windowBits+=32),15<g.windowBits&&g.windowBits<48&&!(15&g.windowBits)&&(g.windowBits|=15),this.err=0,this.msg="",this.ended=!1,this.chunks=[],this.strm=new w,this.strm.avail_out=0;var u=n.inflateInit2(this.strm,g.windowBits);if(u!==d.Z_OK)throw new Error(b[u]);this.header=new m,n.inflateGetHeader(this.strm,this.header)}function k(c,g){var u=new h(g);if(u.push(c,!0),u.err)throw u.msg||b[u.err];return u.result}h.prototype.push=function(c,g){var u,x,S,A,E,q,O=this.strm,N=this.options.chunkSize,B=this.options.dictionary,V=!1;if(this.ended)return!1;x=g===~~g?g:g===!0?d.Z_FINISH:d.Z_NO_FLUSH,typeof c=="string"?O.input=a.binstring2buf(c):v.call(c)==="[object ArrayBuffer]"?O.input=new Uint8Array(c):O.input=c,O.next_in=0,O.avail_in=O.input.length;do{if(O.avail_out===0&&(O.output=new o.Buf8(N),O.next_out=0,O.avail_out=N),(u=n.inflate(O,d.Z_NO_FLUSH))===d.Z_NEED_DICT&&B&&(q=typeof B=="string"?a.string2buf(B):v.call(B)==="[object ArrayBuffer]"?new Uint8Array(B):B,u=n.inflateSetDictionary(this.strm,q)),u===d.Z_BUF_ERROR&&V===!0&&(u=d.Z_OK,V=!1),u!==d.Z_STREAM_END&&u!==d.Z_OK)return this.onEnd(u),!(this.ended=!0);O.next_out&&(O.avail_out!==0&&u!==d.Z_STREAM_END&&(O.avail_in!==0||x!==d.Z_FINISH&&x!==d.Z_SYNC_FLUSH)||(this.options.to==="string"?(S=a.utf8border(O.output,O.next_out),A=O.next_out-S,E=a.buf2string(O.output,S),O.next_out=A,O.avail_out=N-A,A&&o.arraySet(O.output,O.output,S,A,0),this.onData(E)):this.onData(o.shrinkBuf(O.output,O.next_out)))),O.avail_in===0&&O.avail_out===0&&(V=!0)}while((0<O.avail_in||O.avail_out===0)&&u!==d.Z_STREAM_END);return u===d.Z_STREAM_END&&(x=d.Z_FINISH),x===d.Z_FINISH?(u=n.inflateEnd(this.strm),this.onEnd(u),this.ended=!0,u===d.Z_OK):x!==d.Z_SYNC_FLUSH||(this.onEnd(d.Z_OK),!(O.avail_out=0))},h.prototype.onData=function(c){this.chunks.push(c)},h.prototype.onEnd=function(c){c===d.Z_OK&&(this.options.to==="string"?this.result=this.chunks.join(""):this.result=o.flattenChunks(this.chunks)),this.chunks=[],this.err=c,this.msg=this.strm.msg},s.Inflate=h,s.inflate=k,s.inflateRaw=function(c,g){return(g=g||{}).raw=!0,k(c,g)},s.ungzip=k},{"./utils/common":41,"./utils/strings":42,"./zlib/constants":44,"./zlib/gzheader":47,"./zlib/inflate":49,"./zlib/messages":51,"./zlib/zstream":53}],41:[function(e,i,s){var n=typeof Uint8Array<"u"&&typeof Uint16Array<"u"&&typeof Int32Array<"u";s.assign=function(d){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var w=b.shift();if(w){if(typeof w!="object")throw new TypeError(w+"must be non-object");for(var m in w)w.hasOwnProperty(m)&&(d[m]=w[m])}}return d},s.shrinkBuf=function(d,b){return d.length===b?d:d.subarray?d.subarray(0,b):(d.length=b,d)};var o={arraySet:function(d,b,w,m,v){if(b.subarray&&d.subarray)d.set(b.subarray(w,w+m),v);else for(var h=0;h<m;h++)d[v+h]=b[w+h]},flattenChunks:function(d){var b,w,m,v,h,k;for(b=m=0,w=d.length;b<w;b++)m+=d[b].length;for(k=new Uint8Array(m),b=v=0,w=d.length;b<w;b++)h=d[b],k.set(h,v),v+=h.length;return k}},a={arraySet:function(d,b,w,m,v){for(var h=0;h<m;h++)d[v+h]=b[w+h]},flattenChunks:function(d){return[].concat.apply([],d)}};s.setTyped=function(d){d?(s.Buf8=Uint8Array,s.Buf16=Uint16Array,s.Buf32=Int32Array,s.assign(s,o)):(s.Buf8=Array,s.Buf16=Array,s.Buf32=Array,s.assign(s,a))},s.setTyped(n)},{}],42:[function(e,i,s){var n=e("./common"),o=!0,a=!0;try{String.fromCharCode.apply(null,[0])}catch{o=!1}try{String.fromCharCode.apply(null,new Uint8Array(1))}catch{a=!1}for(var d=new n.Buf8(256),b=0;b<256;b++)d[b]=252<=b?6:248<=b?5:240<=b?4:224<=b?3:192<=b?2:1;function w(m,v){if(v<65537&&(m.subarray&&a||!m.subarray&&o))return String.fromCharCode.apply(null,n.shrinkBuf(m,v));for(var h="",k=0;k<v;k++)h+=String.fromCharCode(m[k]);return h}d[254]=d[254]=1,s.string2buf=function(m){var v,h,k,c,g,u=m.length,x=0;for(c=0;c<u;c++)(64512&(h=m.charCodeAt(c)))==55296&&c+1<u&&(64512&(k=m.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(k-56320),c++),x+=h<128?1:h<2048?2:h<65536?3:4;for(v=new n.Buf8(x),c=g=0;g<x;c++)(64512&(h=m.charCodeAt(c)))==55296&&c+1<u&&(64512&(k=m.charCodeAt(c+1)))==56320&&(h=65536+(h-55296<<10)+(k-56320),c++),h<128?v[g++]=h:(h<2048?v[g++]=192|h>>>6:(h<65536?v[g++]=224|h>>>12:(v[g++]=240|h>>>18,v[g++]=128|h>>>12&63),v[g++]=128|h>>>6&63),v[g++]=128|63&h);return v},s.buf2binstring=function(m){return w(m,m.length)},s.binstring2buf=function(m){for(var v=new n.Buf8(m.length),h=0,k=v.length;h<k;h++)v[h]=m.charCodeAt(h);return v},s.buf2string=function(m,v){var h,k,c,g,u=v||m.length,x=new Array(2*u);for(h=k=0;h<u;)if((c=m[h++])<128)x[k++]=c;else if(4<(g=d[c]))x[k++]=65533,h+=g-1;else{for(c&=g===2?31:g===3?15:7;1<g&&h<u;)c=c<<6|63&m[h++],g--;1<g?x[k++]=65533:c<65536?x[k++]=c:(c-=65536,x[k++]=55296|c>>10&1023,x[k++]=56320|1023&c)}return w(x,k)},s.utf8border=function(m,v){var h;for((v=v||m.length)>m.length&&(v=m.length),h=v-1;0<=h&&(192&m[h])==128;)h--;return h<0||h===0?v:h+d[m[h]]>v?h:v}},{"./common":41}],43:[function(e,i,s){i.exports=function(n,o,a,d){for(var b=65535&n|0,w=n>>>16&65535|0,m=0;a!==0;){for(a-=m=2e3<a?2e3:a;w=w+(b=b+o[d++]|0)|0,--m;);b%=65521,w%=65521}return b|w<<16|0}},{}],44:[function(e,i,s){i.exports={Z_NO_FLUSH:0,Z_PARTIAL_FLUSH:1,Z_SYNC_FLUSH:2,Z_FULL_FLUSH:3,Z_FINISH:4,Z_BLOCK:5,Z_TREES:6,Z_OK:0,Z_STREAM_END:1,Z_NEED_DICT:2,Z_ERRNO:-1,Z_STREAM_ERROR:-2,Z_DATA_ERROR:-3,Z_BUF_ERROR:-5,Z_NO_COMPRESSION:0,Z_BEST_SPEED:1,Z_BEST_COMPRESSION:9,Z_DEFAULT_COMPRESSION:-1,Z_FILTERED:1,Z_HUFFMAN_ONLY:2,Z_RLE:3,Z_FIXED:4,Z_DEFAULT_STRATEGY:0,Z_BINARY:0,Z_TEXT:1,Z_UNKNOWN:2,Z_DEFLATED:8}},{}],45:[function(e,i,s){var n=function(){for(var o,a=[],d=0;d<256;d++){o=d;for(var b=0;b<8;b++)o=1&o?3988292384^o>>>1:o>>>1;a[d]=o}return a}();i.exports=function(o,a,d,b){var w=n,m=b+d;o^=-1;for(var v=b;v<m;v++)o=o>>>8^w[255&(o^a[v])];return-1^o}},{}],46:[function(e,i,s){var n,o=e("../utils/common"),a=e("./trees"),d=e("./adler32"),b=e("./crc32"),w=e("./messages"),m=0,v=4,h=0,k=-2,c=-1,g=4,u=2,x=8,S=9,A=286,E=30,q=19,O=2*A+1,N=15,B=3,V=258,tt=V+B+1,_=42,D=113,l=1,H=2,it=3,$=4;function rt(r,M){return r.msg=w[M],M}function P(r){return(r<<1)-(4<r?9:0)}function et(r){for(var M=r.length;0<=--M;)r[M]=0}function R(r){var M=r.state,z=M.pending;z>r.avail_out&&(z=r.avail_out),z!==0&&(o.arraySet(r.output,M.pending_buf,M.pending_out,z,r.next_out),r.next_out+=z,M.pending_out+=z,r.total_out+=z,r.avail_out-=z,M.pending-=z,M.pending===0&&(M.pending_out=0))}function T(r,M){a._tr_flush_block(r,0<=r.block_start?r.block_start:-1,r.strstart-r.block_start,M),r.block_start=r.strstart,R(r.strm)}function G(r,M){r.pending_buf[r.pending++]=M}function J(r,M){r.pending_buf[r.pending++]=M>>>8&255,r.pending_buf[r.pending++]=255&M}function K(r,M){var z,y,f=r.max_chain_length,C=r.strstart,j=r.prev_length,I=r.nice_match,L=r.strstart>r.w_size-tt?r.strstart-(r.w_size-tt):0,U=r.window,Y=r.w_mask,Z=r.prev,X=r.strstart+V,at=U[C+j-1],nt=U[C+j];r.prev_length>=r.good_match&&(f>>=2),I>r.lookahead&&(I=r.lookahead);do if(U[(z=M)+j]===nt&&U[z+j-1]===at&&U[z]===U[C]&&U[++z]===U[C+1]){C+=2,z++;do;while(U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&U[++C]===U[++z]&&C<X);if(y=V-(X-C),C=X-V,j<y){if(r.match_start=M,I<=(j=y))break;at=U[C+j-1],nt=U[C+j]}}while((M=Z[M&Y])>L&&--f!=0);return j<=r.lookahead?j:r.lookahead}function lt(r){var M,z,y,f,C,j,I,L,U,Y,Z=r.w_size;do{if(f=r.window_size-r.lookahead-r.strstart,r.strstart>=Z+(Z-tt)){for(o.arraySet(r.window,r.window,Z,Z,0),r.match_start-=Z,r.strstart-=Z,r.block_start-=Z,M=z=r.hash_size;y=r.head[--M],r.head[M]=Z<=y?y-Z:0,--z;);for(M=z=Z;y=r.prev[--M],r.prev[M]=Z<=y?y-Z:0,--z;);f+=Z}if(r.strm.avail_in===0)break;if(j=r.strm,I=r.window,L=r.strstart+r.lookahead,U=f,Y=void 0,Y=j.avail_in,U<Y&&(Y=U),z=Y===0?0:(j.avail_in-=Y,o.arraySet(I,j.input,j.next_in,Y,L),j.state.wrap===1?j.adler=d(j.adler,I,Y,L):j.state.wrap===2&&(j.adler=b(j.adler,I,Y,L)),j.next_in+=Y,j.total_in+=Y,Y),r.lookahead+=z,r.lookahead+r.insert>=B)for(C=r.strstart-r.insert,r.ins_h=r.window[C],r.ins_h=(r.ins_h<<r.hash_shift^r.window[C+1])&r.hash_mask;r.insert&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[C+B-1])&r.hash_mask,r.prev[C&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=C,C++,r.insert--,!(r.lookahead+r.insert<B)););}while(r.lookahead<tt&&r.strm.avail_in!==0)}function ft(r,M){for(var z,y;;){if(r.lookahead<tt){if(lt(r),r.lookahead<tt&&M===m)return l;if(r.lookahead===0)break}if(z=0,r.lookahead>=B&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),z!==0&&r.strstart-z<=r.w_size-tt&&(r.match_length=K(r,z)),r.match_length>=B)if(y=a._tr_tally(r,r.strstart-r.match_start,r.match_length-B),r.lookahead-=r.match_length,r.match_length<=r.max_lazy_match&&r.lookahead>=B){for(r.match_length--;r.strstart++,r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart,--r.match_length!=0;);r.strstart++}else r.strstart+=r.match_length,r.match_length=0,r.ins_h=r.window[r.strstart],r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+1])&r.hash_mask;else y=a._tr_tally(r,0,r.window[r.strstart]),r.lookahead--,r.strstart++;if(y&&(T(r,!1),r.strm.avail_out===0))return l}return r.insert=r.strstart<B-1?r.strstart:B-1,M===v?(T(r,!0),r.strm.avail_out===0?it:$):r.last_lit&&(T(r,!1),r.strm.avail_out===0)?l:H}function st(r,M){for(var z,y,f;;){if(r.lookahead<tt){if(lt(r),r.lookahead<tt&&M===m)return l;if(r.lookahead===0)break}if(z=0,r.lookahead>=B&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),r.prev_length=r.match_length,r.prev_match=r.match_start,r.match_length=B-1,z!==0&&r.prev_length<r.max_lazy_match&&r.strstart-z<=r.w_size-tt&&(r.match_length=K(r,z),r.match_length<=5&&(r.strategy===1||r.match_length===B&&4096<r.strstart-r.match_start)&&(r.match_length=B-1)),r.prev_length>=B&&r.match_length<=r.prev_length){for(f=r.strstart+r.lookahead-B,y=a._tr_tally(r,r.strstart-1-r.prev_match,r.prev_length-B),r.lookahead-=r.prev_length-1,r.prev_length-=2;++r.strstart<=f&&(r.ins_h=(r.ins_h<<r.hash_shift^r.window[r.strstart+B-1])&r.hash_mask,z=r.prev[r.strstart&r.w_mask]=r.head[r.ins_h],r.head[r.ins_h]=r.strstart),--r.prev_length!=0;);if(r.match_available=0,r.match_length=B-1,r.strstart++,y&&(T(r,!1),r.strm.avail_out===0))return l}else if(r.match_available){if((y=a._tr_tally(r,0,r.window[r.strstart-1]))&&T(r,!1),r.strstart++,r.lookahead--,r.strm.avail_out===0)return l}else r.match_available=1,r.strstart++,r.lookahead--}return r.match_available&&(y=a._tr_tally(r,0,r.window[r.strstart-1]),r.match_available=0),r.insert=r.strstart<B-1?r.strstart:B-1,M===v?(T(r,!0),r.strm.avail_out===0?it:$):r.last_lit&&(T(r,!1),r.strm.avail_out===0)?l:H}function ot(r,M,z,y,f){this.good_length=r,this.max_lazy=M,this.nice_length=z,this.max_chain=y,this.func=f}function dt(){this.strm=null,this.status=0,this.pending_buf=null,this.pending_buf_size=0,this.pending_out=0,this.pending=0,this.wrap=0,this.gzhead=null,this.gzindex=0,this.method=x,this.last_flush=-1,this.w_size=0,this.w_bits=0,this.w_mask=0,this.window=null,this.window_size=0,this.prev=null,this.head=null,this.ins_h=0,this.hash_size=0,this.hash_bits=0,this.hash_mask=0,this.hash_shift=0,this.block_start=0,this.match_length=0,this.prev_match=0,this.match_available=0,this.strstart=0,this.match_start=0,this.lookahead=0,this.prev_length=0,this.max_chain_length=0,this.max_lazy_match=0,this.level=0,this.strategy=0,this.good_match=0,this.nice_match=0,this.dyn_ltree=new o.Buf16(2*O),this.dyn_dtree=new o.Buf16(2*(2*E+1)),this.bl_tree=new o.Buf16(2*(2*q+1)),et(this.dyn_ltree),et(this.dyn_dtree),et(this.bl_tree),this.l_desc=null,this.d_desc=null,this.bl_desc=null,this.bl_count=new o.Buf16(N+1),this.heap=new o.Buf16(2*A+1),et(this.heap),this.heap_len=0,this.heap_max=0,this.depth=new o.Buf16(2*A+1),et(this.depth),this.l_buf=0,this.lit_bufsize=0,this.last_lit=0,this.d_buf=0,this.opt_len=0,this.static_len=0,this.matches=0,this.insert=0,this.bi_buf=0,this.bi_valid=0}function ut(r){var M;return r&&r.state?(r.total_in=r.total_out=0,r.data_type=u,(M=r.state).pending=0,M.pending_out=0,M.wrap<0&&(M.wrap=-M.wrap),M.status=M.wrap?_:D,r.adler=M.wrap===2?0:1,M.last_flush=m,a._tr_init(M),h):rt(r,k)}function xt(r){var M=ut(r);return M===h&&function(z){z.window_size=2*z.w_size,et(z.head),z.max_lazy_match=n[z.level].max_lazy,z.good_match=n[z.level].good_length,z.nice_match=n[z.level].nice_length,z.max_chain_length=n[z.level].max_chain,z.strstart=0,z.block_start=0,z.lookahead=0,z.insert=0,z.match_length=z.prev_length=B-1,z.match_available=0,z.ins_h=0}(r.state),M}function yt(r,M,z,y,f,C){if(!r)return k;var j=1;if(M===c&&(M=6),y<0?(j=0,y=-y):15<y&&(j=2,y-=16),f<1||S<f||z!==x||y<8||15<y||M<0||9<M||C<0||g<C)return rt(r,k);y===8&&(y=9);var I=new dt;return(r.state=I).strm=r,I.wrap=j,I.gzhead=null,I.w_bits=y,I.w_size=1<<I.w_bits,I.w_mask=I.w_size-1,I.hash_bits=f+7,I.hash_size=1<<I.hash_bits,I.hash_mask=I.hash_size-1,I.hash_shift=~~((I.hash_bits+B-1)/B),I.window=new o.Buf8(2*I.w_size),I.head=new o.Buf16(I.hash_size),I.prev=new o.Buf16(I.w_size),I.lit_bufsize=1<<f+6,I.pending_buf_size=4*I.lit_bufsize,I.pending_buf=new o.Buf8(I.pending_buf_size),I.d_buf=1*I.lit_bufsize,I.l_buf=3*I.lit_bufsize,I.level=M,I.strategy=C,I.method=z,xt(r)}n=[new ot(0,0,0,0,function(r,M){var z=65535;for(z>r.pending_buf_size-5&&(z=r.pending_buf_size-5);;){if(r.lookahead<=1){if(lt(r),r.lookahead===0&&M===m)return l;if(r.lookahead===0)break}r.strstart+=r.lookahead,r.lookahead=0;var y=r.block_start+z;if((r.strstart===0||r.strstart>=y)&&(r.lookahead=r.strstart-y,r.strstart=y,T(r,!1),r.strm.avail_out===0)||r.strstart-r.block_start>=r.w_size-tt&&(T(r,!1),r.strm.avail_out===0))return l}return r.insert=0,M===v?(T(r,!0),r.strm.avail_out===0?it:$):(r.strstart>r.block_start&&(T(r,!1),r.strm.avail_out),l)}),new ot(4,4,8,4,ft),new ot(4,5,16,8,ft),new ot(4,6,32,32,ft),new ot(4,4,16,16,st),new ot(8,16,32,32,st),new ot(8,16,128,128,st),new ot(8,32,128,256,st),new ot(32,128,258,1024,st),new ot(32,258,258,4096,st)],s.deflateInit=function(r,M){return yt(r,M,x,15,8,0)},s.deflateInit2=yt,s.deflateReset=xt,s.deflateResetKeep=ut,s.deflateSetHeader=function(r,M){return r&&r.state?r.state.wrap!==2?k:(r.state.gzhead=M,h):k},s.deflate=function(r,M){var z,y,f,C;if(!r||!r.state||5<M||M<0)return r?rt(r,k):k;if(y=r.state,!r.output||!r.input&&r.avail_in!==0||y.status===666&&M!==v)return rt(r,r.avail_out===0?-5:k);if(y.strm=r,z=y.last_flush,y.last_flush=M,y.status===_)if(y.wrap===2)r.adler=0,G(y,31),G(y,139),G(y,8),y.gzhead?(G(y,(y.gzhead.text?1:0)+(y.gzhead.hcrc?2:0)+(y.gzhead.extra?4:0)+(y.gzhead.name?8:0)+(y.gzhead.comment?16:0)),G(y,255&y.gzhead.time),G(y,y.gzhead.time>>8&255),G(y,y.gzhead.time>>16&255),G(y,y.gzhead.time>>24&255),G(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),G(y,255&y.gzhead.os),y.gzhead.extra&&y.gzhead.extra.length&&(G(y,255&y.gzhead.extra.length),G(y,y.gzhead.extra.length>>8&255)),y.gzhead.hcrc&&(r.adler=b(r.adler,y.pending_buf,y.pending,0)),y.gzindex=0,y.status=69):(G(y,0),G(y,0),G(y,0),G(y,0),G(y,0),G(y,y.level===9?2:2<=y.strategy||y.level<2?4:0),G(y,3),y.status=D);else{var j=x+(y.w_bits-8<<4)<<8;j|=(2<=y.strategy||y.level<2?0:y.level<6?1:y.level===6?2:3)<<6,y.strstart!==0&&(j|=32),j+=31-j%31,y.status=D,J(y,j),y.strstart!==0&&(J(y,r.adler>>>16),J(y,65535&r.adler)),r.adler=1}if(y.status===69)if(y.gzhead.extra){for(f=y.pending;y.gzindex<(65535&y.gzhead.extra.length)&&(y.pending!==y.pending_buf_size||(y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),R(r),f=y.pending,y.pending!==y.pending_buf_size));)G(y,255&y.gzhead.extra[y.gzindex]),y.gzindex++;y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),y.gzindex===y.gzhead.extra.length&&(y.gzindex=0,y.status=73)}else y.status=73;if(y.status===73)if(y.gzhead.name){f=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),R(r),f=y.pending,y.pending===y.pending_buf_size)){C=1;break}C=y.gzindex<y.gzhead.name.length?255&y.gzhead.name.charCodeAt(y.gzindex++):0,G(y,C)}while(C!==0);y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),C===0&&(y.gzindex=0,y.status=91)}else y.status=91;if(y.status===91)if(y.gzhead.comment){f=y.pending;do{if(y.pending===y.pending_buf_size&&(y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),R(r),f=y.pending,y.pending===y.pending_buf_size)){C=1;break}C=y.gzindex<y.gzhead.comment.length?255&y.gzhead.comment.charCodeAt(y.gzindex++):0,G(y,C)}while(C!==0);y.gzhead.hcrc&&y.pending>f&&(r.adler=b(r.adler,y.pending_buf,y.pending-f,f)),C===0&&(y.status=103)}else y.status=103;if(y.status===103&&(y.gzhead.hcrc?(y.pending+2>y.pending_buf_size&&R(r),y.pending+2<=y.pending_buf_size&&(G(y,255&r.adler),G(y,r.adler>>8&255),r.adler=0,y.status=D)):y.status=D),y.pending!==0){if(R(r),r.avail_out===0)return y.last_flush=-1,h}else if(r.avail_in===0&&P(M)<=P(z)&&M!==v)return rt(r,-5);if(y.status===666&&r.avail_in!==0)return rt(r,-5);if(r.avail_in!==0||y.lookahead!==0||M!==m&&y.status!==666){var I=y.strategy===2?function(L,U){for(var Y;;){if(L.lookahead===0&&(lt(L),L.lookahead===0)){if(U===m)return l;break}if(L.match_length=0,Y=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++,Y&&(T(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===v?(T(L,!0),L.strm.avail_out===0?it:$):L.last_lit&&(T(L,!1),L.strm.avail_out===0)?l:H}(y,M):y.strategy===3?function(L,U){for(var Y,Z,X,at,nt=L.window;;){if(L.lookahead<=V){if(lt(L),L.lookahead<=V&&U===m)return l;if(L.lookahead===0)break}if(L.match_length=0,L.lookahead>=B&&0<L.strstart&&(Z=nt[X=L.strstart-1])===nt[++X]&&Z===nt[++X]&&Z===nt[++X]){at=L.strstart+V;do;while(Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&Z===nt[++X]&&X<at);L.match_length=V-(at-X),L.match_length>L.lookahead&&(L.match_length=L.lookahead)}if(L.match_length>=B?(Y=a._tr_tally(L,1,L.match_length-B),L.lookahead-=L.match_length,L.strstart+=L.match_length,L.match_length=0):(Y=a._tr_tally(L,0,L.window[L.strstart]),L.lookahead--,L.strstart++),Y&&(T(L,!1),L.strm.avail_out===0))return l}return L.insert=0,U===v?(T(L,!0),L.strm.avail_out===0?it:$):L.last_lit&&(T(L,!1),L.strm.avail_out===0)?l:H}(y,M):n[y.level].func(y,M);if(I!==it&&I!==$||(y.status=666),I===l||I===it)return r.avail_out===0&&(y.last_flush=-1),h;if(I===H&&(M===1?a._tr_align(y):M!==5&&(a._tr_stored_block(y,0,0,!1),M===3&&(et(y.head),y.lookahead===0&&(y.strstart=0,y.block_start=0,y.insert=0))),R(r),r.avail_out===0))return y.last_flush=-1,h}return M!==v?h:y.wrap<=0?1:(y.wrap===2?(G(y,255&r.adler),G(y,r.adler>>8&255),G(y,r.adler>>16&255),G(y,r.adler>>24&255),G(y,255&r.total_in),G(y,r.total_in>>8&255),G(y,r.total_in>>16&255),G(y,r.total_in>>24&255)):(J(y,r.adler>>>16),J(y,65535&r.adler)),R(r),0<y.wrap&&(y.wrap=-y.wrap),y.pending!==0?h:1)},s.deflateEnd=function(r){var M;return r&&r.state?(M=r.state.status)!==_&&M!==69&&M!==73&&M!==91&&M!==103&&M!==D&&M!==666?rt(r,k):(r.state=null,M===D?rt(r,-3):h):k},s.deflateSetDictionary=function(r,M){var z,y,f,C,j,I,L,U,Y=M.length;if(!r||!r.state||(C=(z=r.state).wrap)===2||C===1&&z.status!==_||z.lookahead)return k;for(C===1&&(r.adler=d(r.adler,M,Y,0)),z.wrap=0,Y>=z.w_size&&(C===0&&(et(z.head),z.strstart=0,z.block_start=0,z.insert=0),U=new o.Buf8(z.w_size),o.arraySet(U,M,Y-z.w_size,z.w_size,0),M=U,Y=z.w_size),j=r.avail_in,I=r.next_in,L=r.input,r.avail_in=Y,r.next_in=0,r.input=M,lt(z);z.lookahead>=B;){for(y=z.strstart,f=z.lookahead-(B-1);z.ins_h=(z.ins_h<<z.hash_shift^z.window[y+B-1])&z.hash_mask,z.prev[y&z.w_mask]=z.head[z.ins_h],z.head[z.ins_h]=y,y++,--f;);z.strstart=y,z.lookahead=B-1,lt(z)}return z.strstart+=z.lookahead,z.block_start=z.strstart,z.insert=z.lookahead,z.lookahead=0,z.match_length=z.prev_length=B-1,z.match_available=0,r.next_in=I,r.input=L,r.avail_in=j,z.wrap=C,h},s.deflateInfo="pako deflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./messages":51,"./trees":52}],47:[function(e,i,s){i.exports=function(){this.text=0,this.time=0,this.xflags=0,this.os=0,this.extra=null,this.extra_len=0,this.name="",this.comment="",this.hcrc=0,this.done=!1}},{}],48:[function(e,i,s){i.exports=function(n,o){var a,d,b,w,m,v,h,k,c,g,u,x,S,A,E,q,O,N,B,V,tt,_,D,l,H;a=n.state,d=n.next_in,l=n.input,b=d+(n.avail_in-5),w=n.next_out,H=n.output,m=w-(o-n.avail_out),v=w+(n.avail_out-257),h=a.dmax,k=a.wsize,c=a.whave,g=a.wnext,u=a.window,x=a.hold,S=a.bits,A=a.lencode,E=a.distcode,q=(1<<a.lenbits)-1,O=(1<<a.distbits)-1;t:do{S<15&&(x+=l[d++]<<S,S+=8,x+=l[d++]<<S,S+=8),N=A[x&q];e:for(;;){if(x>>>=B=N>>>24,S-=B,(B=N>>>16&255)===0)H[w++]=65535&N;else{if(!(16&B)){if(!(64&B)){N=A[(65535&N)+(x&(1<<B)-1)];continue e}if(32&B){a.mode=12;break t}n.msg="invalid literal/length code",a.mode=30;break t}V=65535&N,(B&=15)&&(S<B&&(x+=l[d++]<<S,S+=8),V+=x&(1<<B)-1,x>>>=B,S-=B),S<15&&(x+=l[d++]<<S,S+=8,x+=l[d++]<<S,S+=8),N=E[x&O];i:for(;;){if(x>>>=B=N>>>24,S-=B,!(16&(B=N>>>16&255))){if(!(64&B)){N=E[(65535&N)+(x&(1<<B)-1)];continue i}n.msg="invalid distance code",a.mode=30;break t}if(tt=65535&N,S<(B&=15)&&(x+=l[d++]<<S,(S+=8)<B&&(x+=l[d++]<<S,S+=8)),h<(tt+=x&(1<<B)-1)){n.msg="invalid distance too far back",a.mode=30;break t}if(x>>>=B,S-=B,(B=w-m)<tt){if(c<(B=tt-B)&&a.sane){n.msg="invalid distance too far back",a.mode=30;break t}if(D=u,(_=0)===g){if(_+=k-B,B<V){for(V-=B;H[w++]=u[_++],--B;);_=w-tt,D=H}}else if(g<B){if(_+=k+g-B,(B-=g)<V){for(V-=B;H[w++]=u[_++],--B;);if(_=0,g<V){for(V-=B=g;H[w++]=u[_++],--B;);_=w-tt,D=H}}}else if(_+=g-B,B<V){for(V-=B;H[w++]=u[_++],--B;);_=w-tt,D=H}for(;2<V;)H[w++]=D[_++],H[w++]=D[_++],H[w++]=D[_++],V-=3;V&&(H[w++]=D[_++],1<V&&(H[w++]=D[_++]))}else{for(_=w-tt;H[w++]=H[_++],H[w++]=H[_++],H[w++]=H[_++],2<(V-=3););V&&(H[w++]=H[_++],1<V&&(H[w++]=H[_++]))}break}}break}}while(d<b&&w<v);d-=V=S>>3,x&=(1<<(S-=V<<3))-1,n.next_in=d,n.next_out=w,n.avail_in=d<b?b-d+5:5-(d-b),n.avail_out=w<v?v-w+257:257-(w-v),a.hold=x,a.bits=S}},{}],49:[function(e,i,s){var n=e("../utils/common"),o=e("./adler32"),a=e("./crc32"),d=e("./inffast"),b=e("./inftrees"),w=1,m=2,v=0,h=-2,k=1,c=852,g=592;function u(_){return(_>>>24&255)+(_>>>8&65280)+((65280&_)<<8)+((255&_)<<24)}function x(){this.mode=0,this.last=!1,this.wrap=0,this.havedict=!1,this.flags=0,this.dmax=0,this.check=0,this.total=0,this.head=null,this.wbits=0,this.wsize=0,this.whave=0,this.wnext=0,this.window=null,this.hold=0,this.bits=0,this.length=0,this.offset=0,this.extra=0,this.lencode=null,this.distcode=null,this.lenbits=0,this.distbits=0,this.ncode=0,this.nlen=0,this.ndist=0,this.have=0,this.next=null,this.lens=new n.Buf16(320),this.work=new n.Buf16(288),this.lendyn=null,this.distdyn=null,this.sane=0,this.back=0,this.was=0}function S(_){var D;return _&&_.state?(D=_.state,_.total_in=_.total_out=D.total=0,_.msg="",D.wrap&&(_.adler=1&D.wrap),D.mode=k,D.last=0,D.havedict=0,D.dmax=32768,D.head=null,D.hold=0,D.bits=0,D.lencode=D.lendyn=new n.Buf32(c),D.distcode=D.distdyn=new n.Buf32(g),D.sane=1,D.back=-1,v):h}function A(_){var D;return _&&_.state?((D=_.state).wsize=0,D.whave=0,D.wnext=0,S(_)):h}function E(_,D){var l,H;return _&&_.state?(H=_.state,D<0?(l=0,D=-D):(l=1+(D>>4),D<48&&(D&=15)),D&&(D<8||15<D)?h:(H.window!==null&&H.wbits!==D&&(H.window=null),H.wrap=l,H.wbits=D,A(_))):h}function q(_,D){var l,H;return _?(H=new x,(_.state=H).window=null,(l=E(_,D))!==v&&(_.state=null),l):h}var O,N,B=!0;function V(_){if(B){var D;for(O=new n.Buf32(512),N=new n.Buf32(32),D=0;D<144;)_.lens[D++]=8;for(;D<256;)_.lens[D++]=9;for(;D<280;)_.lens[D++]=7;for(;D<288;)_.lens[D++]=8;for(b(w,_.lens,0,288,O,0,_.work,{bits:9}),D=0;D<32;)_.lens[D++]=5;b(m,_.lens,0,32,N,0,_.work,{bits:5}),B=!1}_.lencode=O,_.lenbits=9,_.distcode=N,_.distbits=5}function tt(_,D,l,H){var it,$=_.state;return $.window===null&&($.wsize=1<<$.wbits,$.wnext=0,$.whave=0,$.window=new n.Buf8($.wsize)),H>=$.wsize?(n.arraySet($.window,D,l-$.wsize,$.wsize,0),$.wnext=0,$.whave=$.wsize):(H<(it=$.wsize-$.wnext)&&(it=H),n.arraySet($.window,D,l-H,it,$.wnext),(H-=it)?(n.arraySet($.window,D,l-H,H,0),$.wnext=H,$.whave=$.wsize):($.wnext+=it,$.wnext===$.wsize&&($.wnext=0),$.whave<$.wsize&&($.whave+=it))),0}s.inflateReset=A,s.inflateReset2=E,s.inflateResetKeep=S,s.inflateInit=function(_){return q(_,15)},s.inflateInit2=q,s.inflate=function(_,D){var l,H,it,$,rt,P,et,R,T,G,J,K,lt,ft,st,ot,dt,ut,xt,yt,r,M,z,y,f=0,C=new n.Buf8(4),j=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15];if(!_||!_.state||!_.output||!_.input&&_.avail_in!==0)return h;(l=_.state).mode===12&&(l.mode=13),rt=_.next_out,it=_.output,et=_.avail_out,$=_.next_in,H=_.input,P=_.avail_in,R=l.hold,T=l.bits,G=P,J=et,M=v;t:for(;;)switch(l.mode){case k:if(l.wrap===0){l.mode=13;break}for(;T<16;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(2&l.wrap&&R===35615){C[l.check=0]=255&R,C[1]=R>>>8&255,l.check=a(l.check,C,2,0),T=R=0,l.mode=2;break}if(l.flags=0,l.head&&(l.head.done=!1),!(1&l.wrap)||(((255&R)<<8)+(R>>8))%31){_.msg="incorrect header check",l.mode=30;break}if((15&R)!=8){_.msg="unknown compression method",l.mode=30;break}if(T-=4,r=8+(15&(R>>>=4)),l.wbits===0)l.wbits=r;else if(r>l.wbits){_.msg="invalid window size",l.mode=30;break}l.dmax=1<<r,_.adler=l.check=1,l.mode=512&R?10:12,T=R=0;break;case 2:for(;T<16;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(l.flags=R,(255&l.flags)!=8){_.msg="unknown compression method",l.mode=30;break}if(57344&l.flags){_.msg="unknown header flags set",l.mode=30;break}l.head&&(l.head.text=R>>8&1),512&l.flags&&(C[0]=255&R,C[1]=R>>>8&255,l.check=a(l.check,C,2,0)),T=R=0,l.mode=3;case 3:for(;T<32;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.head&&(l.head.time=R),512&l.flags&&(C[0]=255&R,C[1]=R>>>8&255,C[2]=R>>>16&255,C[3]=R>>>24&255,l.check=a(l.check,C,4,0)),T=R=0,l.mode=4;case 4:for(;T<16;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.head&&(l.head.xflags=255&R,l.head.os=R>>8),512&l.flags&&(C[0]=255&R,C[1]=R>>>8&255,l.check=a(l.check,C,2,0)),T=R=0,l.mode=5;case 5:if(1024&l.flags){for(;T<16;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.length=R,l.head&&(l.head.extra_len=R),512&l.flags&&(C[0]=255&R,C[1]=R>>>8&255,l.check=a(l.check,C,2,0)),T=R=0}else l.head&&(l.head.extra=null);l.mode=6;case 6:if(1024&l.flags&&(P<(K=l.length)&&(K=P),K&&(l.head&&(r=l.head.extra_len-l.length,l.head.extra||(l.head.extra=new Array(l.head.extra_len)),n.arraySet(l.head.extra,H,$,K,r)),512&l.flags&&(l.check=a(l.check,H,K,$)),P-=K,$+=K,l.length-=K),l.length))break t;l.length=0,l.mode=7;case 7:if(2048&l.flags){if(P===0)break t;for(K=0;r=H[$+K++],l.head&&r&&l.length<65536&&(l.head.name+=String.fromCharCode(r)),r&&K<P;);if(512&l.flags&&(l.check=a(l.check,H,K,$)),P-=K,$+=K,r)break t}else l.head&&(l.head.name=null);l.length=0,l.mode=8;case 8:if(4096&l.flags){if(P===0)break t;for(K=0;r=H[$+K++],l.head&&r&&l.length<65536&&(l.head.comment+=String.fromCharCode(r)),r&&K<P;);if(512&l.flags&&(l.check=a(l.check,H,K,$)),P-=K,$+=K,r)break t}else l.head&&(l.head.comment=null);l.mode=9;case 9:if(512&l.flags){for(;T<16;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(R!==(65535&l.check)){_.msg="header crc mismatch",l.mode=30;break}T=R=0}l.head&&(l.head.hcrc=l.flags>>9&1,l.head.done=!0),_.adler=l.check=0,l.mode=12;break;case 10:for(;T<32;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}_.adler=l.check=u(R),T=R=0,l.mode=11;case 11:if(l.havedict===0)return _.next_out=rt,_.avail_out=et,_.next_in=$,_.avail_in=P,l.hold=R,l.bits=T,2;_.adler=l.check=1,l.mode=12;case 12:if(D===5||D===6)break t;case 13:if(l.last){R>>>=7&T,T-=7&T,l.mode=27;break}for(;T<3;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}switch(l.last=1&R,T-=1,3&(R>>>=1)){case 0:l.mode=14;break;case 1:if(V(l),l.mode=20,D!==6)break;R>>>=2,T-=2;break t;case 2:l.mode=17;break;case 3:_.msg="invalid block type",l.mode=30}R>>>=2,T-=2;break;case 14:for(R>>>=7&T,T-=7&T;T<32;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if((65535&R)!=(R>>>16^65535)){_.msg="invalid stored block lengths",l.mode=30;break}if(l.length=65535&R,T=R=0,l.mode=15,D===6)break t;case 15:l.mode=16;case 16:if(K=l.length){if(P<K&&(K=P),et<K&&(K=et),K===0)break t;n.arraySet(it,H,$,K,rt),P-=K,$+=K,et-=K,rt+=K,l.length-=K;break}l.mode=12;break;case 17:for(;T<14;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(l.nlen=257+(31&R),R>>>=5,T-=5,l.ndist=1+(31&R),R>>>=5,T-=5,l.ncode=4+(15&R),R>>>=4,T-=4,286<l.nlen||30<l.ndist){_.msg="too many length or distance symbols",l.mode=30;break}l.have=0,l.mode=18;case 18:for(;l.have<l.ncode;){for(;T<3;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.lens[j[l.have++]]=7&R,R>>>=3,T-=3}for(;l.have<19;)l.lens[j[l.have++]]=0;if(l.lencode=l.lendyn,l.lenbits=7,z={bits:l.lenbits},M=b(0,l.lens,0,19,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid code lengths set",l.mode=30;break}l.have=0,l.mode=19;case 19:for(;l.have<l.nlen+l.ndist;){for(;ot=(f=l.lencode[R&(1<<l.lenbits)-1])>>>16&255,dt=65535&f,!((st=f>>>24)<=T);){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(dt<16)R>>>=st,T-=st,l.lens[l.have++]=dt;else{if(dt===16){for(y=st+2;T<y;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(R>>>=st,T-=st,l.have===0){_.msg="invalid bit length repeat",l.mode=30;break}r=l.lens[l.have-1],K=3+(3&R),R>>>=2,T-=2}else if(dt===17){for(y=st+3;T<y;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}T-=st,r=0,K=3+(7&(R>>>=st)),R>>>=3,T-=3}else{for(y=st+7;T<y;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}T-=st,r=0,K=11+(127&(R>>>=st)),R>>>=7,T-=7}if(l.have+K>l.nlen+l.ndist){_.msg="invalid bit length repeat",l.mode=30;break}for(;K--;)l.lens[l.have++]=r}}if(l.mode===30)break;if(l.lens[256]===0){_.msg="invalid code -- missing end-of-block",l.mode=30;break}if(l.lenbits=9,z={bits:l.lenbits},M=b(w,l.lens,0,l.nlen,l.lencode,0,l.work,z),l.lenbits=z.bits,M){_.msg="invalid literal/lengths set",l.mode=30;break}if(l.distbits=6,l.distcode=l.distdyn,z={bits:l.distbits},M=b(m,l.lens,l.nlen,l.ndist,l.distcode,0,l.work,z),l.distbits=z.bits,M){_.msg="invalid distances set",l.mode=30;break}if(l.mode=20,D===6)break t;case 20:l.mode=21;case 21:if(6<=P&&258<=et){_.next_out=rt,_.avail_out=et,_.next_in=$,_.avail_in=P,l.hold=R,l.bits=T,d(_,J),rt=_.next_out,it=_.output,et=_.avail_out,$=_.next_in,H=_.input,P=_.avail_in,R=l.hold,T=l.bits,l.mode===12&&(l.back=-1);break}for(l.back=0;ot=(f=l.lencode[R&(1<<l.lenbits)-1])>>>16&255,dt=65535&f,!((st=f>>>24)<=T);){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(ot&&!(240&ot)){for(ut=st,xt=ot,yt=dt;ot=(f=l.lencode[yt+((R&(1<<ut+xt)-1)>>ut)])>>>16&255,dt=65535&f,!(ut+(st=f>>>24)<=T);){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}R>>>=ut,T-=ut,l.back+=ut}if(R>>>=st,T-=st,l.back+=st,l.length=dt,ot===0){l.mode=26;break}if(32&ot){l.back=-1,l.mode=12;break}if(64&ot){_.msg="invalid literal/length code",l.mode=30;break}l.extra=15&ot,l.mode=22;case 22:if(l.extra){for(y=l.extra;T<y;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.length+=R&(1<<l.extra)-1,R>>>=l.extra,T-=l.extra,l.back+=l.extra}l.was=l.length,l.mode=23;case 23:for(;ot=(f=l.distcode[R&(1<<l.distbits)-1])>>>16&255,dt=65535&f,!((st=f>>>24)<=T);){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(!(240&ot)){for(ut=st,xt=ot,yt=dt;ot=(f=l.distcode[yt+((R&(1<<ut+xt)-1)>>ut)])>>>16&255,dt=65535&f,!(ut+(st=f>>>24)<=T);){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}R>>>=ut,T-=ut,l.back+=ut}if(R>>>=st,T-=st,l.back+=st,64&ot){_.msg="invalid distance code",l.mode=30;break}l.offset=dt,l.extra=15&ot,l.mode=24;case 24:if(l.extra){for(y=l.extra;T<y;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}l.offset+=R&(1<<l.extra)-1,R>>>=l.extra,T-=l.extra,l.back+=l.extra}if(l.offset>l.dmax){_.msg="invalid distance too far back",l.mode=30;break}l.mode=25;case 25:if(et===0)break t;if(K=J-et,l.offset>K){if((K=l.offset-K)>l.whave&&l.sane){_.msg="invalid distance too far back",l.mode=30;break}lt=K>l.wnext?(K-=l.wnext,l.wsize-K):l.wnext-K,K>l.length&&(K=l.length),ft=l.window}else ft=it,lt=rt-l.offset,K=l.length;for(et<K&&(K=et),et-=K,l.length-=K;it[rt++]=ft[lt++],--K;);l.length===0&&(l.mode=21);break;case 26:if(et===0)break t;it[rt++]=l.length,et--,l.mode=21;break;case 27:if(l.wrap){for(;T<32;){if(P===0)break t;P--,R|=H[$++]<<T,T+=8}if(J-=et,_.total_out+=J,l.total+=J,J&&(_.adler=l.check=l.flags?a(l.check,it,J,rt-J):o(l.check,it,J,rt-J)),J=et,(l.flags?R:u(R))!==l.check){_.msg="incorrect data check",l.mode=30;break}T=R=0}l.mode=28;case 28:if(l.wrap&&l.flags){for(;T<32;){if(P===0)break t;P--,R+=H[$++]<<T,T+=8}if(R!==(4294967295&l.total)){_.msg="incorrect length check",l.mode=30;break}T=R=0}l.mode=29;case 29:M=1;break t;case 30:M=-3;break t;case 31:return-4;case 32:default:return h}return _.next_out=rt,_.avail_out=et,_.next_in=$,_.avail_in=P,l.hold=R,l.bits=T,(l.wsize||J!==_.avail_out&&l.mode<30&&(l.mode<27||D!==4))&&tt(_,_.output,_.next_out,J-_.avail_out)?(l.mode=31,-4):(G-=_.avail_in,J-=_.avail_out,_.total_in+=G,_.total_out+=J,l.total+=J,l.wrap&&J&&(_.adler=l.check=l.flags?a(l.check,it,J,_.next_out-J):o(l.check,it,J,_.next_out-J)),_.data_type=l.bits+(l.last?64:0)+(l.mode===12?128:0)+(l.mode===20||l.mode===15?256:0),(G==0&&J===0||D===4)&&M===v&&(M=-5),M)},s.inflateEnd=function(_){if(!_||!_.state)return h;var D=_.state;return D.window&&(D.window=null),_.state=null,v},s.inflateGetHeader=function(_,D){var l;return _&&_.state&&2&(l=_.state).wrap?((l.head=D).done=!1,v):h},s.inflateSetDictionary=function(_,D){var l,H=D.length;return _&&_.state?(l=_.state).wrap!==0&&l.mode!==11?h:l.mode===11&&o(1,D,H,0)!==l.check?-3:tt(_,D,H,H)?(l.mode=31,-4):(l.havedict=1,v):h},s.inflateInfo="pako inflate (from Nodeca project)"},{"../utils/common":41,"./adler32":43,"./crc32":45,"./inffast":48,"./inftrees":50}],50:[function(e,i,s){var n=e("../utils/common"),o=[3,4,5,6,7,8,9,10,11,13,15,17,19,23,27,31,35,43,51,59,67,83,99,115,131,163,195,227,258,0,0],a=[16,16,16,16,16,16,16,16,17,17,17,17,18,18,18,18,19,19,19,19,20,20,20,20,21,21,21,21,16,72,78],d=[1,2,3,4,5,7,9,13,17,25,33,49,65,97,129,193,257,385,513,769,1025,1537,2049,3073,4097,6145,8193,12289,16385,24577,0,0],b=[16,16,16,16,17,17,18,18,19,19,20,20,21,21,22,22,23,23,24,24,25,25,26,26,27,27,28,28,29,29,64,64];i.exports=function(w,m,v,h,k,c,g,u){var x,S,A,E,q,O,N,B,V,tt=u.bits,_=0,D=0,l=0,H=0,it=0,$=0,rt=0,P=0,et=0,R=0,T=null,G=0,J=new n.Buf16(16),K=new n.Buf16(16),lt=null,ft=0;for(_=0;_<=15;_++)J[_]=0;for(D=0;D<h;D++)J[m[v+D]]++;for(it=tt,H=15;1<=H&&J[H]===0;H--);if(H<it&&(it=H),H===0)return k[c++]=20971520,k[c++]=20971520,u.bits=1,0;for(l=1;l<H&&J[l]===0;l++);for(it<l&&(it=l),_=P=1;_<=15;_++)if(P<<=1,(P-=J[_])<0)return-1;if(0<P&&(w===0||H!==1))return-1;for(K[1]=0,_=1;_<15;_++)K[_+1]=K[_]+J[_];for(D=0;D<h;D++)m[v+D]!==0&&(g[K[m[v+D]]++]=D);if(O=w===0?(T=lt=g,19):w===1?(T=o,G-=257,lt=a,ft-=257,256):(T=d,lt=b,-1),_=l,q=c,rt=D=R=0,A=-1,E=(et=1<<($=it))-1,w===1&&852<et||w===2&&592<et)return 1;for(;;){for(N=_-rt,V=g[D]<O?(B=0,g[D]):g[D]>O?(B=lt[ft+g[D]],T[G+g[D]]):(B=96,0),x=1<<_-rt,l=S=1<<$;k[q+(R>>rt)+(S-=x)]=N<<24|B<<16|V|0,S!==0;);for(x=1<<_-1;R&x;)x>>=1;if(x!==0?(R&=x-1,R+=x):R=0,D++,--J[_]==0){if(_===H)break;_=m[v+g[D]]}if(it<_&&(R&E)!==A){for(rt===0&&(rt=it),q+=l,P=1<<($=_-rt);$+rt<H&&!((P-=J[$+rt])<=0);)$++,P<<=1;if(et+=1<<$,w===1&&852<et||w===2&&592<et)return 1;k[A=R&E]=it<<24|$<<16|q-c|0}}return R!==0&&(k[q+R]=_-rt<<24|64<<16|0),u.bits=it,0}},{"../utils/common":41}],51:[function(e,i,s){i.exports={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"}},{}],52:[function(e,i,s){var n=e("../utils/common"),o=0,a=1;function d(f){for(var C=f.length;0<=--C;)f[C]=0}var b=0,w=29,m=256,v=m+1+w,h=30,k=19,c=2*v+1,g=15,u=16,x=7,S=256,A=16,E=17,q=18,O=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],N=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],B=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],V=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],tt=new Array(2*(v+2));d(tt);var _=new Array(2*h);d(_);var D=new Array(512);d(D);var l=new Array(256);d(l);var H=new Array(w);d(H);var it,$,rt,P=new Array(h);function et(f,C,j,I,L){this.static_tree=f,this.extra_bits=C,this.extra_base=j,this.elems=I,this.max_length=L,this.has_stree=f&&f.length}function R(f,C){this.dyn_tree=f,this.max_code=0,this.stat_desc=C}function T(f){return f<256?D[f]:D[256+(f>>>7)]}function G(f,C){f.pending_buf[f.pending++]=255&C,f.pending_buf[f.pending++]=C>>>8&255}function J(f,C,j){f.bi_valid>u-j?(f.bi_buf|=C<<f.bi_valid&65535,G(f,f.bi_buf),f.bi_buf=C>>u-f.bi_valid,f.bi_valid+=j-u):(f.bi_buf|=C<<f.bi_valid&65535,f.bi_valid+=j)}function K(f,C,j){J(f,j[2*C],j[2*C+1])}function lt(f,C){for(var j=0;j|=1&f,f>>>=1,j<<=1,0<--C;);return j>>>1}function ft(f,C,j){var I,L,U=new Array(g+1),Y=0;for(I=1;I<=g;I++)U[I]=Y=Y+j[I-1]<<1;for(L=0;L<=C;L++){var Z=f[2*L+1];Z!==0&&(f[2*L]=lt(U[Z]++,Z))}}function st(f){var C;for(C=0;C<v;C++)f.dyn_ltree[2*C]=0;for(C=0;C<h;C++)f.dyn_dtree[2*C]=0;for(C=0;C<k;C++)f.bl_tree[2*C]=0;f.dyn_ltree[2*S]=1,f.opt_len=f.static_len=0,f.last_lit=f.matches=0}function ot(f){8<f.bi_valid?G(f,f.bi_buf):0<f.bi_valid&&(f.pending_buf[f.pending++]=f.bi_buf),f.bi_buf=0,f.bi_valid=0}function dt(f,C,j,I){var L=2*C,U=2*j;return f[L]<f[U]||f[L]===f[U]&&I[C]<=I[j]}function ut(f,C,j){for(var I=f.heap[j],L=j<<1;L<=f.heap_len&&(L<f.heap_len&&dt(C,f.heap[L+1],f.heap[L],f.depth)&&L++,!dt(C,I,f.heap[L],f.depth));)f.heap[j]=f.heap[L],j=L,L<<=1;f.heap[j]=I}function xt(f,C,j){var I,L,U,Y,Z=0;if(f.last_lit!==0)for(;I=f.pending_buf[f.d_buf+2*Z]<<8|f.pending_buf[f.d_buf+2*Z+1],L=f.pending_buf[f.l_buf+Z],Z++,I===0?K(f,L,C):(K(f,(U=l[L])+m+1,C),(Y=O[U])!==0&&J(f,L-=H[U],Y),K(f,U=T(--I),j),(Y=N[U])!==0&&J(f,I-=P[U],Y)),Z<f.last_lit;);K(f,S,C)}function yt(f,C){var j,I,L,U=C.dyn_tree,Y=C.stat_desc.static_tree,Z=C.stat_desc.has_stree,X=C.stat_desc.elems,at=-1;for(f.heap_len=0,f.heap_max=c,j=0;j<X;j++)U[2*j]!==0?(f.heap[++f.heap_len]=at=j,f.depth[j]=0):U[2*j+1]=0;for(;f.heap_len<2;)U[2*(L=f.heap[++f.heap_len]=at<2?++at:0)]=1,f.depth[L]=0,f.opt_len--,Z&&(f.static_len-=Y[2*L+1]);for(C.max_code=at,j=f.heap_len>>1;1<=j;j--)ut(f,U,j);for(L=X;j=f.heap[1],f.heap[1]=f.heap[f.heap_len--],ut(f,U,1),I=f.heap[1],f.heap[--f.heap_max]=j,f.heap[--f.heap_max]=I,U[2*L]=U[2*j]+U[2*I],f.depth[L]=(f.depth[j]>=f.depth[I]?f.depth[j]:f.depth[I])+1,U[2*j+1]=U[2*I+1]=L,f.heap[1]=L++,ut(f,U,1),2<=f.heap_len;);f.heap[--f.heap_max]=f.heap[1],function(nt,mt){var jt,_t,It,ct,he,_i,St=mt.dyn_tree,ur=mt.max_code,Hr=mt.stat_desc.static_tree,qr=mt.stat_desc.has_stree,jr=mt.stat_desc.extra_bits,cr=mt.stat_desc.extra_base,Ft=mt.stat_desc.max_length,de=0;for(ct=0;ct<=g;ct++)nt.bl_count[ct]=0;for(St[2*nt.heap[nt.heap_max]+1]=0,jt=nt.heap_max+1;jt<c;jt++)Ft<(ct=St[2*St[2*(_t=nt.heap[jt])+1]+1]+1)&&(ct=Ft,de++),St[2*_t+1]=ct,ur<_t||(nt.bl_count[ct]++,he=0,cr<=_t&&(he=jr[_t-cr]),_i=St[2*_t],nt.opt_len+=_i*(ct+he),qr&&(nt.static_len+=_i*(Hr[2*_t+1]+he)));if(de!==0){do{for(ct=Ft-1;nt.bl_count[ct]===0;)ct--;nt.bl_count[ct]--,nt.bl_count[ct+1]+=2,nt.bl_count[Ft]--,de-=2}while(0<de);for(ct=Ft;ct!==0;ct--)for(_t=nt.bl_count[ct];_t!==0;)ur<(It=nt.heap[--jt])||(St[2*It+1]!==ct&&(nt.opt_len+=(ct-St[2*It+1])*St[2*It],St[2*It+1]=ct),_t--)}}(f,C),ft(U,at,f.bl_count)}function r(f,C,j){var I,L,U=-1,Y=C[1],Z=0,X=7,at=4;for(Y===0&&(X=138,at=3),C[2*(j+1)+1]=65535,I=0;I<=j;I++)L=Y,Y=C[2*(I+1)+1],++Z<X&&L===Y||(Z<at?f.bl_tree[2*L]+=Z:L!==0?(L!==U&&f.bl_tree[2*L]++,f.bl_tree[2*A]++):Z<=10?f.bl_tree[2*E]++:f.bl_tree[2*q]++,U=L,at=(Z=0)===Y?(X=138,3):L===Y?(X=6,3):(X=7,4))}function M(f,C,j){var I,L,U=-1,Y=C[1],Z=0,X=7,at=4;for(Y===0&&(X=138,at=3),I=0;I<=j;I++)if(L=Y,Y=C[2*(I+1)+1],!(++Z<X&&L===Y)){if(Z<at)for(;K(f,L,f.bl_tree),--Z!=0;);else L!==0?(L!==U&&(K(f,L,f.bl_tree),Z--),K(f,A,f.bl_tree),J(f,Z-3,2)):Z<=10?(K(f,E,f.bl_tree),J(f,Z-3,3)):(K(f,q,f.bl_tree),J(f,Z-11,7));U=L,at=(Z=0)===Y?(X=138,3):L===Y?(X=6,3):(X=7,4)}}d(P);var z=!1;function y(f,C,j,I){J(f,(b<<1)+(I?1:0),3),function(L,U,Y,Z){ot(L),G(L,Y),G(L,~Y),n.arraySet(L.pending_buf,L.window,U,Y,L.pending),L.pending+=Y}(f,C,j)}s._tr_init=function(f){z||(function(){var C,j,I,L,U,Y=new Array(g+1);for(L=I=0;L<w-1;L++)for(H[L]=I,C=0;C<1<<O[L];C++)l[I++]=L;for(l[I-1]=L,L=U=0;L<16;L++)for(P[L]=U,C=0;C<1<<N[L];C++)D[U++]=L;for(U>>=7;L<h;L++)for(P[L]=U<<7,C=0;C<1<<N[L]-7;C++)D[256+U++]=L;for(j=0;j<=g;j++)Y[j]=0;for(C=0;C<=143;)tt[2*C+1]=8,C++,Y[8]++;for(;C<=255;)tt[2*C+1]=9,C++,Y[9]++;for(;C<=279;)tt[2*C+1]=7,C++,Y[7]++;for(;C<=287;)tt[2*C+1]=8,C++,Y[8]++;for(ft(tt,v+1,Y),C=0;C<h;C++)_[2*C+1]=5,_[2*C]=lt(C,5);it=new et(tt,O,m+1,v,g),$=new et(_,N,0,h,g),rt=new et(new Array(0),B,0,k,x)}(),z=!0),f.l_desc=new R(f.dyn_ltree,it),f.d_desc=new R(f.dyn_dtree,$),f.bl_desc=new R(f.bl_tree,rt),f.bi_buf=0,f.bi_valid=0,st(f)},s._tr_stored_block=y,s._tr_flush_block=function(f,C,j,I){var L,U,Y=0;0<f.level?(f.strm.data_type===2&&(f.strm.data_type=function(Z){var X,at=4093624447;for(X=0;X<=31;X++,at>>>=1)if(1&at&&Z.dyn_ltree[2*X]!==0)return o;if(Z.dyn_ltree[18]!==0||Z.dyn_ltree[20]!==0||Z.dyn_ltree[26]!==0)return a;for(X=32;X<m;X++)if(Z.dyn_ltree[2*X]!==0)return a;return o}(f)),yt(f,f.l_desc),yt(f,f.d_desc),Y=function(Z){var X;for(r(Z,Z.dyn_ltree,Z.l_desc.max_code),r(Z,Z.dyn_dtree,Z.d_desc.max_code),yt(Z,Z.bl_desc),X=k-1;3<=X&&Z.bl_tree[2*V[X]+1]===0;X--);return Z.opt_len+=3*(X+1)+5+5+4,X}(f),L=f.opt_len+3+7>>>3,(U=f.static_len+3+7>>>3)<=L&&(L=U)):L=U=j+5,j+4<=L&&C!==-1?y(f,C,j,I):f.strategy===4||U===L?(J(f,2+(I?1:0),3),xt(f,tt,_)):(J(f,4+(I?1:0),3),function(Z,X,at,nt){var mt;for(J(Z,X-257,5),J(Z,at-1,5),J(Z,nt-4,4),mt=0;mt<nt;mt++)J(Z,Z.bl_tree[2*V[mt]+1],3);M(Z,Z.dyn_ltree,X-1),M(Z,Z.dyn_dtree,at-1)}(f,f.l_desc.max_code+1,f.d_desc.max_code+1,Y+1),xt(f,f.dyn_ltree,f.dyn_dtree)),st(f),I&&ot(f)},s._tr_tally=function(f,C,j){return f.pending_buf[f.d_buf+2*f.last_lit]=C>>>8&255,f.pending_buf[f.d_buf+2*f.last_lit+1]=255&C,f.pending_buf[f.l_buf+f.last_lit]=255&j,f.last_lit++,C===0?f.dyn_ltree[2*j]++:(f.matches++,C--,f.dyn_ltree[2*(l[j]+m+1)]++,f.dyn_dtree[2*T(C)]++),f.last_lit===f.lit_bufsize-1},s._tr_align=function(f){J(f,2,3),K(f,S,tt),function(C){C.bi_valid===16?(G(C,C.bi_buf),C.bi_buf=0,C.bi_valid=0):8<=C.bi_valid&&(C.pending_buf[C.pending++]=255&C.bi_buf,C.bi_buf>>=8,C.bi_valid-=8)}(f)}},{"../utils/common":41}],53:[function(e,i,s){i.exports=function(){this.input=null,this.next_in=0,this.avail_in=0,this.total_in=0,this.output=null,this.next_out=0,this.avail_out=0,this.total_out=0,this.msg="",this.state=null,this.data_type=2,this.adler=0}},{}],54:[function(e,i,s){(function(n){(function(o,a){if(!o.setImmediate){var d,b,w,m,v=1,h={},k=!1,c=o.document,g=Object.getPrototypeOf&&Object.getPrototypeOf(o);g=g&&g.setTimeout?g:o,d={}.toString.call(o.process)==="[object process]"?function(A){process.nextTick(function(){x(A)})}:function(){if(o.postMessage&&!o.importScripts){var A=!0,E=o.onmessage;return o.onmessage=function(){A=!1},o.postMessage("","*"),o.onmessage=E,A}}()?(m="setImmediate$"+Math.random()+"$",o.addEventListener?o.addEventListener("message",S,!1):o.attachEvent("onmessage",S),function(A){o.postMessage(m+A,"*")}):o.MessageChannel?((w=new MessageChannel).port1.onmessage=function(A){x(A.data)},function(A){w.port2.postMessage(A)}):c&&"onreadystatechange"in c.createElement("script")?(b=c.documentElement,function(A){var E=c.createElement("script");E.onreadystatechange=function(){x(A),E.onreadystatechange=null,b.removeChild(E),E=null},b.appendChild(E)}):function(A){setTimeout(x,0,A)},g.setImmediate=function(A){typeof A!="function"&&(A=new Function(""+A));for(var E=new Array(arguments.length-1),q=0;q<E.length;q++)E[q]=arguments[q+1];var O={callback:A,args:E};return h[v]=O,d(v),v++},g.clearImmediate=u}function u(A){delete h[A]}function x(A){if(k)setTimeout(x,0,A);else{var E=h[A];if(E){k=!0;try{(function(q){var O=q.callback,N=q.args;switch(N.length){case 0:O();break;case 1:O(N[0]);break;case 2:O(N[0],N[1]);break;case 3:O(N[0],N[1],N[2]);break;default:O.apply(a,N)}})(E)}finally{u(A),k=!1}}}}function S(A){A.source===o&&typeof A.data=="string"&&A.data.indexOf(m)===0&&x(+A.data.slice(m.length))}})(typeof self>"u"?n===void 0?this:n:self)}).call(this,typeof Et<"u"?Et:typeof self<"u"?self:typeof window<"u"?window:{})},{}]},{},[10])(10)})})(Mr);var me=Mr.exports;const lr=Or(me),xr="Blech Listen",Ot="metalSheetLists",di=class di extends Bt{constructor(){super(),this.cleanup=new zt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onMetalSheetList=t=>{if(!t)throw"no data!";for(;this.children.length>3;)this.removeChild(this.lastChild);for(const e of ts(t))this.appendChild(ue({primary:`
              ${e.format}
              <span style="font-size: 0.85rem;">
                ${e.data.press>-1?"[P"+e.data.press+"]":""}
              </span>
            `,secondary:`${e.toolID}`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(Q.metalSheetLists,s=>{s.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{confirm(`Löschen "${e.format} - ${e.toolID} - ${e.date}"?`)&&this.uiStore.ui.update(Ot,i=>{const s=gt(e);return i.filter(n=>gt(n)!==s)})}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Ot,getKey:gt})},this.render()}render(){this.innerHTML=F`
      <pg-drawer-item-import
        storegistkey="${Q.metalSheetLists}"
        title="${xr}"
      ></pg-drawer-item-import>

      <pg-drawer-item-gist></pg-drawer-item-gist>
      <pg-drawer-item-new type="${Ot}"></pg-drawer-item-new>
    `,this.style.position="relative";const t=this.querySelector("pg-drawer-item-import");t.pg.setValidateHandler(ns),t.pg.setUpdateHandler(this.onUpdate),t.pg.setBeforeUpdateHandler(async()=>{this.uiStore.ui.set(Ot,[])}),t.pg.setExportHandler(async()=>{const e=new lr;for(const s of this.uiStore.ui.get(Ot)){const n=gr(s),o=JSON.stringify(s);e.file(n,o)}const i=await e.generateAsync({type:"blob"});ar.saveAs(i,`${Q.metalSheetLists}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=xr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{ki(this.querySelector("pg-drawer-item-gist"),t,{storeGistKey:Q.metalSheetLists,storeDataKey:Ot,getFileName:gr,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(Ot,this.onMetalSheetList))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};W(di,"register",()=>{customElements.define("pg-drawer-group-metal-sheet-lists",di)});let Zi=di;const _r="Vis",Ht="vis",fi=class fi extends Bt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new zt,this.onVis=t=>{if(!t)throw"no data!";for(;this.children.length>2;)this.removeChild(this.lastChild);for(const e of t)this.appendChild(ue({primary:`${e.title}`,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(Q.vis,s=>{s.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(Ht,i=>{const s=pe(e);return i.filter(n=>pe(n)!==s)})}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Ht,getKey:pe})},this.render()}render(){this.innerHTML=F`
      <pg-drawer-item-import
        storegistkey="${Q.vis}"
        title="${_r}"
      ></pg-drawer-item-import>

      <pg-drawer-item-gist></pg-drawer-item-gist>
    `;const t=this.querySelector("pg-drawer-item-import");t.pg.setValidateHandler(os),t.pg.setUpdateHandler(this.onUpdate),t.pg.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Ht,[])}),t.pg.setExportHandler(async()=>{const e=new lr;for(const s of this.uiStore.ui.get(Ht)){const n=br(s),o=JSON.stringify(s);e.file(n,o)}const i=await e.generateAsync({type:"blob"});ar.saveAs(i,`${Q.vis}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=_r,this.cleanup.add(this.uiStore.ui.on("gist",t=>{ki(this.querySelector("pg-drawer-item-gist"),t,{storeGistKey:Q.vis,storeDataKey:Ht,getFileName:br,onUpdate:this.onUpdate})},!0),this.uiStore.ui.on(Ht,this.onVis))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};W(fi,"register",()=>{customElements.define("pg-drawer-group-vis",fi)});let Wi=fi;const Sr="Vis Data",Dt="visData",pi=class pi extends Bt{constructor(){super(),this.cleanup=new zt,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.onVisData=t=>{if(!t)throw"no data!";for(;this.children.length>3;)this.removeChild(this.lastChild);for(let e of zr(t))e=nr(e),this.appendChild(ue({primary:`${e.title}`,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(Q.visData,s=>{s.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:()=>{this.uiStore.ui.update(Dt,i=>i.filter(s=>s.title!==e.title))}}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Dt,getKey:pt})},this.render()}render(){this.innerHTML=F`
      <pg-drawer-item-import
        storegistkey="${Q.visData}"
        title="${Sr}"
      ></pg-drawer-item-import>

      <pg-drawer-item-gist></pg-drawer-item-gist>
      <pg-drawer-item-new type="${Dt}"></pg-drawer-item-new>
    `;const t=this.querySelector("pg-drawer-item-import");t.pg.setValidateHandler(as),t.pg.setUpdateHandler(this.onUpdate),t.pg.setBeforeUpdateHandler(()=>{this.uiStore.ui.set(Dt,[])}),t.pg.setExportHandler(async()=>{const e=new lr;for(const s of this.uiStore.ui.get(Dt)){const n=fs(s),o=JSON.stringify(s);e.file(n,o)}const i=await e.generateAsync({type:"blob"});ar.saveAs(i,`${Q.visData}-${new Date().getTime()}.zip`)})}connectedCallback(){super.connectedCallback(),this.ui.title=Sr,this.cleanup.add(this.uiStore.ui.on("gist",t=>{ki(this.querySelector("pg-drawer-item-gist"),t,{storeGistKey:Q.visData,storeDataKey:Dt,getFileName:pt,onUpdate:this.onUpdate})}),this.uiStore.ui.on(Dt,this.onVisData))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};W(pi,"register",()=>{customElements.define("pg-drawer-group-vis-data",pi)});let Ki=pi;const ks="Vis Listen",Si="visLists",mi=class mi extends Bt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout"),this.cleanup=new zt,this.onVisLists=t=>{if(!t)throw"no data!";for(;this.children.length>0;)this.removeChild(this.lastChild);for(const e of es(t))this.appendChild(ue({primary:e.name,secondary:`${e.data.length} Einträge`,onClick:()=>{this.stackLayout.ui.clear(),this.stackLayout.ui.set(Q.visLists,s=>{s.set(e)});const i=document.querySelector("pg-drawer");i.ui.open=!1},onDelete:e.allowDeletion?()=>{this.uiStore.ui.update(Si,i=>{const s=Lt(e);return i.filter(n=>Lt(n)!==s)})}:null}))},this.onUpdate=t=>{ce(this.uiStore,t,{storeDataKey:Si,getKey:Lt})},this.render()}render(){this.innerHTML=F``}connectedCallback(){super.connectedCallback(),this.ui.title=ks,this.cleanup.add(this.uiStore.ui.on(Si,this.onVisLists))}disconnectedCallback(){super.disconnectedCallback(),this.cleanup.run()}};W(mi,"register",()=>{customElements.define("pg-drawer-group-vis-lists",mi)});let Ji=mi;const gi=class gi extends Mt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.pullButton=null,this.pushButton=null,this.pg={onPull:null,onPush:null},this.render()}render(){this.innerHTML=F`
      <ui-flex-grid gap="0.25rem">
        <ui-flex-grid-item style="position: relative;" gap="0.25rem">
          <div class="flex row align-center justify-between">
            <ui-primary>GistID</ui-primary>
            <pg-drawer-revision></pg-drawer-revision>
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
    `,this.style.display="none",this.style.position="relative",this.pullButton=this.querySelector('[name="pull"]'),this.pushButton=this.querySelector('[name="push"]')}set(t,e){const i=this.querySelector("ui-secondary"),s=this.querySelector("pg-drawer-revision");t?(this.style.display="block",i.innerHTML=t,s.innerHTML=F`Revision: ${e}`):(this.style.display="none",i.innerHTML=F`&nbsp;`,s.innerHTML=F`Revision: -`),this.pullButton.onclick=()=>{this.pg.onPull&&this.pg.onPull(t,e)},this.pushButton.onclick=()=>{this.pg.onPush&&this.pg.onPush(t,e)}}};W(gi,"register",()=>{customElements.define("pg-drawer-item-gist",gi)});let Yi=gi;const xs=F`
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
`,se=class se extends Mt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.importButton=null,this.exportButton=null,this.beforeUpdate=null,this.onValidate=null,this.onUpdate=null,this.pg={root:this,get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get storegistkey(){return this.root.getAttribute("storegistkey")},set storegistkey(t){if(!t){this.root.removeAttribute("storegistkey");return}this.root.setAttribute("storegistkey",t)},get disabled(){return this.root.hasAttribute("disabled")},set disabled(t){if(!t){this.root.removeAttribute("disabled");return}this.root.setAttribute("disabled","")},setBeforeUpdateHandler(t){this.root.beforeUpdate=t},setValidateHandler(t){this.root.onValidate=t},setUpdateHandler(t){this.root.onUpdate=t},setExportHandler(t){if(t===null){this.root.exportButton.parentElement.style.display="none";return}this.root.exportButton.parentElement.style.display="flex",this.root.exportButton.onclick=()=>t()}},this.render()}render(){this.innerHTML=F`
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
            ${xs}
          </ui-icon-button>
        </ui-flex-grid-item>
      </ui-flex-grid-row>
    `,this.importButton=this.querySelector("ui-button"),this.importButton.ui.events.on("click",()=>this.import()),this.exportButton=this.querySelector("ui-icon-button")}attributeChangedCallback(t,e,i){switch(t){case"disabled":this.setDisabled(i);break}}setDisabled(t){if(t===null){this.importButton.ui.disabled=!1,this.exportButton.ui.disabled=!1;return}this.importButton.ui.disabled=!0,this.importButton.ui.disabled=!0,this.exportButton.ui.disabled=!0}async import(){const t=new ye(this.pg.title);t.ui.events.on("submit",async e=>{if(!this.onValidate)throw new Error('missing callback: "onValidate"');if(!this.onUpdate)throw new Error('missing callback: "onValidate"');if(!e){Gr(async n=>{let o=null;try{o=await this.onValidate(n,null)}catch(a){alert(`Validierung fehlgeschlagen:
"${a}"`);return}o!==null&&await this.onUpdate(o)});return}if(this.pg.storegistkey===null)throw new Error('missing "storegistkey"');const i=new or(e);let s;try{s=await i.get(),this.uiStore.ui.update("gist",n=>(n[`${this.pg.storegistkey}`]={id:e,revision:s.revision},n))}catch(n){alert(`Etwas ist schiefgelaufen:
"${n}"`);return}try{for(const n in s.files)s.files[n].content=await this.onValidate(s.files[n].content,i.id)}catch(n){alert(`Validierung fehlgeschlagen:
"${n}"`);return}typeof this.beforeUpdate=="function"&&await this.beforeUpdate();for(const n of Object.values(s.files))await this.onUpdate(n.content)}),t.ui.events.on("close",()=>{document.body.removeChild(t)}),document.body.appendChild(t),t.ui.open(!0)}};W(se,"register",()=>{customElements.define("pg-drawer-item-import",se)}),W(se,"observedAttributes",["disabled"]);let Xi=se;const bi=class bi extends Mt{constructor(){super(),this.uiStore=document.querySelector("ui-store"),this.render()}render(){this.innerHTML=F`
      <ui-button variant="full" color="secondary">Neue Liste</ui-button>
    `,this.querySelector("ui-button").ui.events.on("click",()=>{switch(this.getAttribute("type")){case"metal-sheet-lists":case"metalSheetLists":this.newMetalSheetLists();break;case"vis-data":case"visData":this.newVisData();break;default:return}})}newMetalSheetLists(){const t=new le("create");t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{e!==null&&this.uiStore.ui.update("metalSheetLists",i=>(i=[...i,{date:new Date().getTime(),format:e.format,toolID:e.toolID,data:{press:e.press,table:{header:["Stärke","Marke (Höhe)","Blech Stempel","Blech Marke","Stf. P2-5","Stf. P0"],data:[]}}}],i))}),document.body.appendChild(t),t.ui.open(!0)}newVisData(){const t=new we;t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.events.on("submit",e=>{this.uiStore.ui.update("visData",i=>(i.unshift({...e,data:[]}),i))}),document.body.appendChild(t),t.ui.open(!0)}};W(bi,"register",()=>{customElements.define("pg-drawer-item-new",bi)});let Gi=bi;const vi=class vi extends HTMLElement{constructor(){super(),this.style.fontSize="0.85rem",this.style.fontVariationSettings="var(--ui-input-fontVariation)"}};W(vi,"register",()=>{customElements.define("pg-drawer-revision",vi)});let Qi=vi;const yi=class yi extends be{constructor(){super(),this.render()}render(){this.innerHTML=F`
      <ui-button
        class="version flex justify-start"
        style="${At("font-size: 0.85rem","padding: 0.25rem","margin-bottom: var(--ui-spacing)","font-weight: normal","text-transform: none;")}"
        variant="ghost"
        color="primary"
      >
        ${Lr} - [Build: ${Ni}]
      </ui-button>

      <pg-drawer-group-alert-lists fold></pg-drawer-group-alert-lists>

      <pg-drawer-group-metal-sheet-lists fold>
      </pg-drawer-group-metal-sheet-lists>

      <pg-drawer-group-vis fold></pg-drawer-group-vis>

      <pg-drawer-group-vis-lists fold></pg-drawer-group-vis-lists>

      <pg-drawer-group-vis-data fold></pg-drawer-group-vis-data>
    `,this.querySelector("ui-button.version").ui.events.on("click",()=>{Xr()})}};W(yi,"register",()=>{Vi.register(),Zi.register(),Ki.register(),Ji.register(),Wi.register(),Yi.register(),Xi.register(),Gi.register(),Qi.register(),customElements.define("pg-drawer",yi)});let tr=yi;const ne=class ne extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.stackLayout=document.querySelector("ui-stack-layout"),this.input=null,this.pg={root:this,get active(){return this.root.hasAttribute("active")},set active(t){if(!t){this.root.removeAttribute("active");return}this.root.setAttribute("active","")},get title(){return this.root.getAttribute("title")},set title(t){if(!t){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},get prefix(){return this.root.getAttribute("prefix")},set prefix(t){if(!t){this.root.removeAttribute("prefix");return}this.root.setAttribute("prefix",t)},input(){return this.root.input}},this.shadowRender()}shadowRender(){this.shadowRoot.innerHTML=F`
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
          height: var(--pg-search-bar-height);
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
    `,this.input=this.shadowRoot.querySelector("ui-search")}disconnectedCallback(){this.setActive(null)}attributeChangedCallback(t,e,i){switch(t){case"title":this.setTitle(i);break;case"active":this.setActive(i);break;case"prefix":this.setPrefix(i);break}}setTitle(t){this.input.ui.title=t||""}setActive(t){t===null?this.stackLayout.style.setProperty("--pg-search-bar-height","0rem"):(this.stackLayout.style.setProperty("--pg-search-bar-height","4.5rem"),this.pg.input().ui.focus())}setPrefix(t){this.input.ui.storageprefix="pg-vis:search:"+t||""}};W(ne,"register",()=>{customElements.define("pg-search-bar",ne)}),W(ne,"observedAttributes",["title","active","prefix"]);let er=ne;const wi=class wi extends HTMLElement{constructor(){super(),this.cleanup=new zt,this.uiStore=null,this.stackLayout=null,this.pgAppBar=null,this.pgDrawer=null,this.render()}render(){this.innerHTML=F`
      <ui-store storageprefix="pg-vis:" storage></ui-store>
      <ui-theme-handler auto></ui-theme-handler>

      <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout
          style="--pg-search-bar-height: 0rem;"
        ></ui-stack-layout>
      </ui-container>

      <pg-app-bar></pg-app-bar>
      <pg-drawer></pg-drawer>
    `,this.uiStore=this.querySelector("ui-store"),this.stackLayout=this.querySelector("ui-stack-layout"),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer"),this.createStore(),this.createStackLayout()}connectedCallback(){this.pgDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0),this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage(),this.handleVersion()}disconnectedCallback(){this.cleanup.run()}handleVersion(){const t=localStorage.getItem("pg-vis:version");t!==me.version&&(localStorage.setItem("pg-vis:version",me.version),console.log(`Updated from "${t}" to version "${me.version}"`)),parseInt(localStorage.getItem("pg-vis:build")||"0")!==Ni&&localStorage.setItem("pg-vis:build",Ni.toString())}createStore(){const t=new Date;this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visLists",[{date:t.getTime(),name:"Presse 0",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 2",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 3",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 4",allowDeletion:!1,data:[]},{date:t.getTime(),name:"Presse 5",allowDeletion:!1,data:[]}],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("gist",{},!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("edit",null,!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1),this.uiStore.ui.set("bookmark",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.size()>1?this.pgAppBar.items.back.ui.show():this.pgAppBar.items.back.ui.hide(),!t){this.setupNoPage();return}switch(t.ui.name){case Q.alertLists:case Q.alert:case Q.metalSheetLists:case Q.vis:case Q.product:case Q.visLists:case Q.visData:case Q.visDataEntry:this.resetAppBar()}switch(t.ui.name){case Q.alertLists:this.pgAppBar.items.search.ui.show();break;case Q.metalSheetLists:this.pgAppBar.items.edit.ui.show();break;case Q.product:this.pgAppBar.items.bookmark.ui.show();break;case Q.visData:this.pgAppBar.items.edit.ui.show();break}}),this.stackLayout.ui.register(Q.alertLists,()=>new Se),this.stackLayout.ui.register(Q.alert,()=>new _e),this.stackLayout.ui.register(Q.metalSheetLists,()=>new Ae),this.stackLayout.ui.register(Q.vis,()=>new Te),this.stackLayout.ui.register(Q.visLists,()=>new Oe),this.stackLayout.ui.register(Q.visData,()=>new ze),this.stackLayout.ui.register(Q.product,()=>new Le),this.stackLayout.ui.register(Q.visDataEntry,()=>new Be)}setupNoPage(){this.resetAppBar(),this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgDrawer.ui.open=!0}resetAppBar(){this.pgAppBar.items.edit.ui.hide(),this.pgAppBar.items.share.ui.hide(),this.pgAppBar.items.search.ui.hide(),this.pgAppBar.items.bookmark.ui.hide()}async onAppBarTitle(t){this.pgAppBar.items.title.ui.child.innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.items.share.ui.show():this.pgAppBar.items.share.ui.hide()}};W(wi,"register",()=>{customElements.define("pg-app",wi)});let ir=wi;Kr({onRegistered(p){setTimeout(async()=>{try{console.debug(`[main] Update service... (currentVersion: ${Lr})`),await p.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});Ur();xe.register();ye.register();le.register();we.register();ke.register();_e.register();Se.register();Ae.register();Le.register();Te.register();ze.register();Be.register();Oe.register();tr.register();er.register();Ui.register();ir.register();
