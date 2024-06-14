var ge=Object.defineProperty;var fe=(r,t,e)=>t in r?ge(r,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[t]=e;var a=(r,t,e)=>(fe(r,typeof t!="symbol"?t+"":t,e),e),Wt=(r,t,e)=>{if(!t.has(r))throw TypeError("Cannot "+e)};var n=(r,t,e)=>(Wt(r,t,"read from private field"),e?e.call(r):t.get(r)),p=(r,t,e)=>{if(t.has(r))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(r):t.set(r,e)},m=(r,t,e,i)=>(Wt(r,t,"write to private field"),i?i.call(r,e):t.set(r,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const h of o.addedNodes)h.tagName==="LINK"&&h.rel==="modulepreload"&&i(h)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();var f;class L{constructor(){p(this,f,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return n(this,f)[t]||(n(this,f)[t]=[]),n(this,f)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!n(this,f)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,s=0;for(const o of n(this,f)[t])o===e&&(n(this,f)[t].splice(s,1),i=!0),s++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(n(this,f)[t])for(const i of n(this,f)[t])i(e);return this}}f=new WeakMap;function Ut(r,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,r.currentTarget.appendChild(e);const i=r.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${r.clientY-i.top}px`,e.style.left=`${r.clientX-i.left}px`);const s=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${s}) translate(0, 0)`,e}function _t(r){r&&(r.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&r.remove()}),r.style.opacity="0")}const be={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function Kt(r,t={}){t={...be,...t};let e;const i=o=>{e=Ut(o,t)},s=()=>{_t(e)};return r.classList.add("ripple-container"),r.style.overflow="hidden",t.useClick===!0?r.addEventListener("click",o=>{e=Ut(o,t),_t(e)}):(r.addEventListener("pointerdown",i),r.addEventListener("pointerup",s),r.addEventListener("pointerleave",s)),()=>{r.classList.remove("ripple-container"),r.removeEventListener("pointerdown",i),r.removeEventListener("pointerup",s),r.removeEventListener("pointerleave",s)}}const l=String.raw;class c{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}async run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{await this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Mt="1",ve=l`
<style></style>
<slot></slot>
`;let we=class{constructor(t){this.root=t}get flex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Mt}set flex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}};const D=class D extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ve,this.cleanup=new c,this.ui=new we(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Mt});break}}updateStyle({flex:t=Mt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};a(D,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",D)}),a(D,"observedAttributes",["flex"]);let H=D;const At="0",ye=l`
<style></style>
<slot></slot>
`;let ke=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||At}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const z=class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ye,this.cleanup=new c,this.ui=new ke(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||At});break}}updateStyle({gap:t=At}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(z,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",z)}),a(z,"observedAttributes",["gap"]);let Z=z;const Tt="0",xe=l`
<style></style>
<slot></slot>
`;let Ce=class{constructor(t){this.root=t}get gap(){return this.root.getAttribute("gap")||Tt}set gap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}};const B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=xe,this.cleanup=new c,this.ui=new Ce(this),this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Tt});break}}updateStyle({gap:t=Tt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};a(B,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",B)}),a(B,"observedAttributes",["gap"]);let K=B;const Le=l`
<style>
    * { box-sizing: border-box; }

    :host {
        display: flex !important;
        position: absolute !important;
        z-index: 100;
        background-color: var(--ui-backdrop-bgColor);
        backdrop-filter: var(--ui-backdropFilter);
        overflow: hidden;
        user-select: none;
    }

    :host([position="top"]) {
        top: 0;
        left: 0;
        width: 100%;
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
`;var M,ie;let Se=(ie=class{constructor(t){p(this,M,void 0);m(this,M,t)}getLeftSlot(){return[...n(this,M).querySelectorAll('[slot="left"]')]}getCenterSlot(){return[...n(this,M).querySelectorAll('[slot="center"]')]}getRightSlot(){return[...n(this,M).querySelectorAll('[slot="right"]')]}},M=new WeakMap,ie);const it=class it extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Le,this.cleanup=new c,this.ui=new Se(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(it,"register",()=>{Z.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",it)});let Ht=it;const Ee=l`
<style>
    * { box-sizing: border-box; }

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
`;let Me=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new L,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get variant(){return this.root.getAttribute("variant")}set variant(t){this.root.setAttribute("variant",t)}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Kt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ee,this.setAttribute("role","button"),this.cleanup=new c,this.ui=new Me(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};a(j,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",j)}),a(j,"observedAttributes",["no-ripple","color"]);let Q=j;const Ae=l`
<style>
    * { box-sizing: border-box; }

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
`;let Te=class{constructor(t){this.root=t,this.removeRipple=null,this.events=new L,this.root.onclick=()=>this.events.dispatch("click",this.root)}get color(){return this.root.getAttribute("color")}set color(t){this.root.setAttribute("color",t)}get ghost(){return this.root.hasAttribute("ghost")}set ghost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")}disable(){this.root.setAttribute("disabled","")}enable(){this.root.removeAttribute("disabled")}enableRipple(){this.removeRipple||(this.removeRipple=Kt(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))}disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}};const F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ae,this.setAttribute("role","button"),this.cleanup=new c,this.ui=new Te(this)}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}};a(F,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",F)}),a(F,"observedAttributes",["no-ripple","color"]);let J=F;const He=l`
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
`,st=class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=He,this.cleanup=new c}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(st,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",st)});let $t=st;const $e=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
>

    <g id="Complete">
        <g data-name="add" id="add">
            <g>
                <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2" x1="12" x2="12" y1="19" y2="5"
                />

                <line
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2" x1="5" x2="19" y1="12" y2="12"
                />
            </g>
        </g>
    </g>
</svg>
`,rt=class rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=$e}};a(rt,"register",()=>{customElements.get("svg-add")||customElements.define("svg-add",rt)});let Rt=rt;const Re=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 52 52"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M50,24H6.83L27.41,3.41a2,2,0,0,0,0-2.82,2,2,0,0,0-2.82,0l-24,24a1.79,1.79,0,0,0-.25.31A1.19,1.19,0,0,0,.25,25c0,.07-.07.13-.1.2l-.06.2a.84.84,0,0,0,0,.17,2,2,0,0,0,0,.78.84.84,0,0,0,0,.17l.06.2c0,.07.07.13.1.2a1.19,1.19,0,0,0,.09.15,1.79,1.79,0,0,0,.25.31l24,24a2,2,0,1,0,2.82-2.82L6.83,28H50a2,2,0,0,0,0-4Z"
    />
</svg>
`,ot=class ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Re}};a(ot,"register",()=>{customElements.get("svg-back-arrow")||customElements.define("svg-back-arrow",ot)});let qt=ot;const qe=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <g clip-path="url(#clip0_429_11083)">
        <path
            d="M7 7.00006L17 17.0001M7 17.0001L17 7.00006"
            stroke="currentColor"
            stroke-width="2.5"
            stroke-linecap="round"
            stroke-linejoin="round"
        />
    </g>
    <defs>
        <clipPath id="clip0_429_11083">
            <rect width="24" height="24" fill="none" />
        </clipPath>
    </defs>
</svg>
`,nt=class nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=qe}};a(nt,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",nt)});let Nt=nt;const Ne=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M20.1497 7.93997L8.27971 19.81C7.21971 20.88 4.04971 21.3699 3.27971 20.6599C2.50971 19.9499 3.06969 16.78 4.12969 15.71L15.9997 3.84C16.5478 3.31801 17.2783 3.03097 18.0351 3.04019C18.7919 3.04942 19.5151 3.35418 20.0503 3.88938C20.5855 4.42457 20.8903 5.14781 20.8995 5.90463C20.9088 6.66146 20.6217 7.39189 20.0997 7.93997H20.1497Z"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
    <path
        d="M21 21H12"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>;
`,at=class at extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ne}};a(at,"register",()=>{customElements.get("svg-edit")||customElements.define("svg-edit",at)});let Dt=at;const De=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 1024 1024"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M960 160h-291.2a160 160 0 0 0-313.6 0H64a32 32 0 0 0 0 64h896a32 32 0 0 0 0-64zM512 96a96 96 0 0 1 90.24 64h-180.48A96 96 0 0 1 512 96zM844.16 290.56a32 32 0 0 0-34.88 6.72A32 32 0 0 0 800 320a32 32 0 1 0 64 0 33.6 33.6 0 0 0-9.28-22.72 32 32 0 0 0-10.56-6.72zM832 416a32 32 0 0 0-32 32v96a32 32 0 0 0 64 0v-96a32 32 0 0 0-32-32zM832 640a32 32 0 0 0-32 32v224a32 32 0 0 1-32 32H256a32 32 0 0 1-32-32V320a32 32 0 0 0-64 0v576a96 96 0 0 0 96 96h512a96 96 0 0 0 96-96v-224a32 32 0 0 0-32-32z"
        fill="currentColor"
    />
    <path
        d="M384 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM544 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0zM704 768V352a32 32 0 0 0-64 0v416a32 32 0 0 0 64 0z"
        fill="currentColor"
    />
</svg>
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=De}};a(lt,"register",()=>{customElements.get("svg-recycle")||customElements.define("svg-recycle",lt)});let zt=lt;const ze=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M11 6C13.7614 6 16 8.23858 16 11M16.6588 16.6549L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ze}};a(ut,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",ut)});let Bt=ut;const Be=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        d="M4 6H20M4 12H20M4 18H20"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
    />
</svg>
`,ct=class ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Be}};a(ct,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",ct)});let jt=ct;const je=l`
<style>
    :host {
        width: 100%;
        height: 100%;
        color: inherit;
    }
</style>

<svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
>
    <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M15 6.75C15 5.50736 16.0074 4.5 17.25 4.5C18.4926 4.5 19.5 5.50736 19.5 6.75C19.5 7.99264 18.4926 9 17.25 9C16.0074 9 15 7.99264 15 6.75ZM17.25 3C15.1789 3 13.5 4.67893 13.5 6.75C13.5 7.00234 13.5249 7.24885 13.5724 7.48722L9.77578 9.78436C9.09337 8.85401 7.99222 8.25 6.75 8.25C4.67893 8.25 3 9.92893 3 12C3 14.0711 4.67893 15.75 6.75 15.75C8.10023 15.75 9.28379 15.0364 9.9441 13.9657L13.5866 16.4451C13.5299 16.7044 13.5 16.9737 13.5 17.25C13.5 19.3211 15.1789 21 17.25 21C19.3211 21 21 19.3211 21 17.25C21 15.1789 19.3211 13.5 17.25 13.5C15.9988 13.5 14.8907 14.1128 14.2095 15.0546L10.4661 12.5065C10.4884 12.3409 10.5 12.1718 10.5 12C10.5 11.7101 10.4671 11.4279 10.4049 11.1569L14.1647 8.88209C14.8415 9.85967 15.971 10.5 17.25 10.5C19.3211 10.5 21 8.82107 21 6.75C21 4.67893 19.3211 3 17.25 3ZM15 17.25C15 16.0074 16.0074 15 17.25 15C18.4926 15 19.5 16.0074 19.5 17.25C19.5 18.4926 18.4926 19.5 17.25 19.5C16.0074 19.5 15 18.4926 15 17.25ZM4.5 12C4.5 10.7574 5.50736 9.75 6.75 9.75C7.99264 9.75 9 10.7574 9 12C9 13.2426 7.99264 14.25 6.75 14.25C5.50736 14.25 4.5 13.2426 4.5 12Z"
        fill="currentColor"
    />
</svg>
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=je}};a(ht,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",ht)});let Ft=ht;const Fe=l`
<style>
    * { box-sizing: border-box; }

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
        height: calc(100% - (env(safe-area-inset-top, 0) + env(safe-area-inset-bottom, 0) + (var(--ui-spacing) * 2)));

        margin: var(--ui-spacing);
        margin-top: calc(env(safe-area-inset-top, 0) + var(--ui-spacing));
        margin-bottom: calc(env(safe-area-inset-bottom, 0) + var(--ui-spacing));
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
            <span style="white-space: nowrap;"><slot name="title"></slot></span>

            <ui-icon-button style="width: var(--ui-dialog-header-height); height: 100%;" ghost>
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
`;var k,b,x,se;let Pe=(se=class{constructor(t,e){p(this,k,void 0);p(this,b,void 0);p(this,x,void 0);m(this,k,t),m(this,b,e),this.events=new L,m(this,x,document.createElement("h4")),n(this,x).slot="title",n(this,k).appendChild(n(this,x))}get fullscreen(){return n(this,k).hasAttribute("fullscreen")}set fullscreen(t){t?n(this,k).setAttribute("fullscreen",""):n(this,k).removeAttribute("fullscreen")}get title(){return n(this,x).innerText}set title(t){n(this,x).innerText=t}getDialogElement(){return n(this,b)}open(t=!1,e=!0){const i=n(this,b).inert;n(this,b).inert=e,t?n(this,b).showModal():n(this,b).show(),this.events.dispatch("open",null),n(this,b).inert=i}close(){n(this,b).close(),this.events.dispatch("close",null)}},k=new WeakMap,b=new WeakMap,x=new WeakMap,se);const dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Fe,this.cleanup=new c,this.ui=new Pe(this,this.shadowRoot.querySelector("dialog"))}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),s=o=>{o.preventDefault()};i.addEventListener("cancel",s),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",s)})}disconnectedCallback(){this.cleanup.run()}};a(dt,"register",()=>{J.register(),Nt.register(),Z.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",dt)});let Pt=dt;const te=150,ae=document.createElement("template");ae.innerHTML=`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: block;

            position: absolute;
            z-index: ${te};
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;

            overflow: hidden;

            transition: left 0s ease .5s;
        }

        :host([open]) {
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);

            left: 0;

            transition: none;
        }

        aside {
            position: absolute;
            z-index: ${te};
            top: 0;
            left: -100%;
            width: 18em;
            max-width: 100%;
            height: 100%;

            overflow-x: hidden;
            overflow-y: auto;

            -ms-overflow-style: none;
            scrollbar-width: none;

            background-color: var(--ui-card-bgColor);
            color: var(--ui-card-color);
            border-right: 1px solid var(--ui-card-borderColor);
            /*
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);
            */

            transition: left .5s ease;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`;let Ie=class{constructor(t){this.root=t,this.aside=this.root.shadowRoot.querySelector("aside"),this.events=new L}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const P=class P extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ae.content.cloneNode(!0)),this.cleanup=new c,this.ui=new Ie(this)}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.open=!1},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};a(P,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",P)}),a(P,"observedAttributes",["open"]);let It=P;const Oe=l`
<style>
    :host {
        font-size: 1.1rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-primary-fontVariation);
    }
</style>

<slot></slot>
`,pt=class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Oe,this.cleanup=new c}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(pt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",pt)});let Ot=pt;const Ve=l`
<style>
    :host {
        font-size: 0.9rem;
        font-family: var(--ui-fontFamily);
        font-variation-settings: var(--ui-text-secondary-fontVariation);
    }
</style>

<slot></slot>
`,mt=class mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ve,this.cleanup=new c}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(mt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",mt)});let q=mt;const le=document.createElement("template");le.innerHTML=`
    <style>
        * { box-sizing: border-box; }

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
`;let Ge=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get open(){return this.root.hasAttribute("open")}set open(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}};const gt=class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(le.content.cloneNode(!0)),this.cleanup=new c,this.ui=new Ge(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(gt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",gt)});let X=gt;const ue=document.createElement("template");ue.innerHTML=`
    <style>
        * { box-sizing: border-box; }

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
`;let Ze=class{constructor(t){this.root=t,this.outside=this.root.querySelector(".outside"),this.aside=this.root.shadowRoot.querySelector("aside")}get title(){return this.root.getAttribute("title")||null}set title(t){t?this.root.setAttribute("title",t):this.root.removeAttribute("title")}setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
            <span
                style="
                    font-size: 1.5rem;
                    font-weight: 600;
                    font-variation-settings: var(--ui-heading-fontVariation);
                "
            >
                ${t}
            </span>
        `}removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}};const I=class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ue.content.cloneNode(!0)),this.cleanup=new c,this.ui=new Ze(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};a(I,"register",()=>{X.register(),Ot.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",I)}),a(I,"observedAttributes",["title"]);let Vt=I;const ce=document.createElement("template");ce.innerHTML=`
    <style>
        :host {
            display: block;
            position: relative;
            width: 100%;
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
            border-bottom: 1px solid var(--ui-borderColor);
            border-radius: 0;
            transition: border-color 0.25s linear;
        }

        .container:has(input:focus) {
            border-color: var(--ui-primary-bgColor);
        }

        .container:has(input[aria-invalid]) {
            border-color: hsl(var(--ui-destructive-bgColor));
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
        <input>
    </div>
`;let Je=class{constructor(t){this.root=t,this.events=new L,this.input=this.root.shadowRoot.querySelector("input"),this.input.type=this.root.getAttribute("type")||"text",this.input.oninput=()=>this.events.dispatch("input",this.value),this.input.onchange=()=>this.events.dispatch("change",this.value)}set title(t){let e=this.root.querySelector('[slot="title"]');t===null&&e&&(this.root.removeChild(e),e=null),e||(e=new q,e.slot="title",this.root.appendChild(e)),e.innerHTML=t||""}get title(){var t;return((t=this.root.querySelector('[slot="title"]'))==null?void 0:t.innerHTML)||null}set type(t){this.input.type=t}get type(){return this.input.type||"text"}set value(t){this.input.value=t}get value(){switch(this.input.type){case"number":return this.input.value?new Number(this.input.value):NaN;default:return this.input.value}}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){this.input.ariaInvalid=t?"":null}get invalid(){return this.input.ariaInvalid!==null}set min(t){this.input.min=t}get min(){switch(this.input.type){case"number":return this.input.min?new Number(this.input.min):NaN;default:return this.input.min}}set max(t){this.input.max=t}get max(){switch(this.input.type){case"number":return this.input.max?new Number(this.input.max):NaN;default:return this.input.max}}};const O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(ce.content.cloneNode(!0)),this.cleanup=new c,this.ui=new Je(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":this.ui.title=i;break;case"type":i===null?this.ui.type="text":this.ui.type=i;break;case"value":this.ui.value=this.parseNewValue(i);break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.invalid=i!==null;break;case"min":this.ui.min=this.parseNewValue(i);break;case"max":this.ui.max=this.parseNewValue(i);break}}parseNewValue(t){switch(this.ui.type){case"number":return t?new Number(t):NaN;default:return t||""}}};a(O,"register",()=>{q.register(),customElements.get("ui-input")||customElements.define("ui-input",O)}),a(O,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Gt=O;const Xe=l`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: block;
            position: relative;
            width: 100%;
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
            backdrop-filter: var(--ui-backdropFilter);
        }

        .container:has(input:focus) {
            border-color: var(--ui-primary-bgColor);
        }

        .container:has(input[aria-invalid]) {
            border-color: hsl(var(--ui-destructive-bgColor));
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
        <input />
        <ui-icon-button ghost>
            <svg-search></svg-search>
        </ui-icon-button>
    </div>
`;let Ye=class{constructor(t){this.root=t,this.events=new L,this.submit=this.root.shadowRoot.querySelector("ui-icon-button"),this.submit.ui.events.on("click",()=>{this.events.dispatch("submit",this.value)}),this.input=this.root.shadowRoot.querySelector("input"),this.input.type="text",this.input.onkeydown=e=>{e.key==="Enter"&&this.submit.click()}}set title(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)}get title(){return this.root.getAttribute("title")}set value(t){this.input.value=t}get value(){return this.input.value}set placeholder(t){this.input.placeholder=t}get placeholder(){return this.input.placeholder}set invalid(t){t?this.root.setAttribute("invalid",""):this.root.removeAttribute("invalid")}get invalid(){return this.input.ariaInvalid!==null}};const V=class V extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Xe,this.cleanup=new c,this.ui=new Ye(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let s=this.querySelector('[slot="title"]');i===null&&s&&(this.removeChild(s),s=null),s||(s=new q,s.slot="title",this.appendChild(s)),s.innerHTML=i||"";break;case"value":this.ui.value=i||"";break;case"placeholder":i===null?this.ui.placeholder="":this.ui.placeholder=i;break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break}}};a(V,"register",()=>{q.register(),J.register(),Bt.register(),customElements.get("ui-search")||customElements.define("ui-search",V)}),a(V,"observedAttributes",["title","value","placeholder","invalid"]);let Zt=V;const Ke=l`
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
`;var $,re;let Qe=(re=class{constructor(t){p(this,$,void 0);m(this,$,t)}get name(){return n(this,$).getAttribute("name")}set name(t){n(this,$).setAttribute("name",t)}},$=new WeakMap,re);const ft=class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ke,this.cleanup=new c,this.ui=new Qe(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(ft,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",ft)});let T=ft;const We=l`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`;var C,A,R,oe;let Ue=(oe=class{constructor(t){p(this,C,void 0);p(this,A,!1);p(this,R,{});m(this,C,t),this.events=new L,this.stack=[]}registerPage(t,e){n(this,R)[t]=e}unregisterPage(t){delete n(this,R)[t]}lock(){m(this,A,!0)}unlock(){m(this,A,!1)}clearStack(){for(;this.stackSize()>0;)n(this,C).removeChild(this.stack.pop())}stackSize(){return this.stack.length}goBack(){if(!this.stack.length||n(this,A))return;const t=this.stack.pop(),e=n(this,C).removeChild(t);this.stack.length&&n(this,C).appendChild(this.stack[this.stack.length-1]),this.dispatchChangeEvent(e)}setPage(t){if(!n(this,A)){if(this.stack.push(n(this,C).appendChild(n(this,R)[t]())),this.stack.length>1){const e=this.stack[this.stack.length-2];e.parentElement.removeChild(e)}this.dispatchChangeEvent(null)}}async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}},C=new WeakMap,A=new WeakMap,R=new WeakMap,oe);const bt=class bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=We,this.cleanup=new c,this.ui=new Ue(this)}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};a(bt,"register",()=>{T.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",bt)});let Jt=bt;var w,y,ne;let _e=(ne=class{constructor(t){p(this,w,void 0);p(this,y,{});m(this,w,t),this.events=new L}get localStoragePrefix(){return n(this,w).getAttribute("local-storage-prefix")}set localStoragePrefix(t){n(this,w).setAttribute("local-storage-prefix",t)}get enableLocalStorage(){return n(this,w).hasAttribute("enable-local-storage")}set enableLocalStorage(t){t?n(this,w).setAttribute("enable-local-storage",""):n(this,w).removeAttribute("enable-local-storage")}get(t){return n(this,y)[t]}set(t,e,i=!1){if(i&&this.enableLocalStorage){const s=JSON.parse(localStorage.getItem(this.localStoragePrefix+t.toString())||"null");n(this,y)[t]=s??e}else n(this,y)[t]=e;this.enableLocalStorage&&localStorage.setItem(this.localStoragePrefix+t.toString(),JSON.stringify(n(this,y)[t])),this.events.dispatch(t,n(this,y)[t])}update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(n(this,y)[t]))}on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}},w=new WeakMap,y=new WeakMap,ne);const vt=class vt extends HTMLElement{constructor(){super(),this.ui=new _e(this)}};a(vt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",vt)});let Y=vt;var v;class ti{constructor(){p(this,v,null);this.currentTheme=null,this.themes={}}enableAutoMode(){if(this.removeMode(),n(this,v)){this.mediaChangeHandler(n(this,v));return}m(this,v,window.matchMedia("(prefers-color-scheme: dark)")),n(this,v).addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(n(this,v))}disableAutoMode(){this.removeMedia()}addTheme(t,e){this.themes[t]=e}loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const s=document.getElementById("theme");s&&(document.head.removeChild(s),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}}mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")}removeMode(t=document.body){t.removeAttribute("data-theme")}setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}}removeMedia(){n(this,v)&&(n(this,v).removeEventListener("change",this.mediaChangeHandler),m(this,v,null))}}v=new WeakMap;const G=class G extends HTMLElement{constructor(){super(),this.ui=new ti}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};a(G,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",G)}),a(G,"observedAttributes",["auto","mode"]);let Xt=G;const wt=class wt extends Pt{constructor(){super(),this.ui.title="New Vis Data",this.uiStore=document.querySelector("ui-store"),this.name,this.createContent(),this.createActions()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.invalid=!1,this.name.ui.value="")}createContent(){const t=new K;t.ui.gap="0.5",t.innerHTML=`
            <ui-flex-grid-item>
                <ui-input
                    name="title"
                    type="text"
                    title="Vis Data Title"
                ></ui-input>
            </ui-flex-grid-item>
        `,this.name=t.querySelector('ui-input[name="title"]'),this.appendChild(t)}createActions(){let t=new H;t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="secondary"
                variant="full"
            >Cancel</ui-button>
        `;let e=t.querySelector("ui-button");e.ui.events.on("click",()=>{this.ui.close()}),t=new H,t.slot="actions",this.appendChild(t),t.innerHTML=`
            <ui-button 
                color="primary"
            >Submit</ui-button>
        `,e=t.querySelector("ui-button"),e.ui.events.on("click",()=>{if(this.name.ui.value){this.name.ui.invalid=!0;return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.value,data:[]}),i)),this.ui.close()})}};a(wt,"register",()=>{K.register(),H.register(),Gt.register(),Q.register(),Y.register(),customElements.define("new-vis-data-dialog",wt)});let W=wt;const ee="3.5em",ei=l`
    <div
        class="no-scrollbar"
        style="
            width: 100%;
            height: 100%;
            padding-top: var(--ui-app-bar-height);
            padding-bottom: ${ee};
            overflow: auto;
            scroll-behavior: smooth;
        "
    >
        <ul></ul>
    </div>

    <div
        style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: ${ee};
        "
    >
        <ui-search
            title="Alarmsuche (RegEx Mode)"
        ></ui-search>
    </div>
`,yt=class yt extends T{constructor(t){super(),this.innerHTML=ei,this.ui.name="alert-lists",this.uiStore=t,this._alertList=null,this.search=this.querySelector("ui-search")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.search.ui.events.on("submit",t=>{[...this.querySelector("ul").children].forEach(e=>{const i=this.getAlertFromLI(e);this.is(i,new RegExp(t.replaceAll(" ",".*")))?e.style.display="flex":e.style.display="none"})}))}get alertList(){return this._alertList}set alertList(t){this._alertList=t||null,setTimeout(()=>this.renderList())}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);this.alertList.data.forEach((e,i)=>{setTimeout(()=>{const s=document.createElement("li");s.className="alert flex row nowrap align-center justify-between",s.style.overflow="hidden",s.style.position="relative",i<this.alertList.data.length-1&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
                    <div class="title">${e.alert}</div>

                    <div
                        class="number"
                        style="
                            color: var(--ui-primary-bgColor, red);
                            font-weight: bold;
                        "
                    >
                        ${e.from===e.to?e.from:`${e.from}..${e.to}`}
                    </div>
                `,s.setAttribute("data-from",e.from.toString()),s.setAttribute("data-to",e.to.toString()),s.setAttribute("data-alert",e.alert),s.setAttribute("data-desc",e.desc.join(`
`)),s.onclick=this.onClick.bind(this),Kt(s),t.appendChild(s)})})}getAlertFromLI(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`)}}is(t,e){return!!`${t.from}..${t.to} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromLI(e);console.warn(i)}};a(yt,"register",()=>{Y.register(),Zt.register(),customElements.define("alert-lists-page",yt)});let U=yt;const ii=l`
`,kt=class kt extends T{constructor(){super(),this.innerHTML=ii,this.ui.name="metal-sheet-lists"}};a(kt,"register",()=>{customElements.define("metal-sheet-lists-page",kt)});let _=kt;const si=l`
`,xt=class xt extends T{constructor(){super(),this.innerHTML=si,this.ui.name="vis"}};a(xt,"register",()=>{customElements.define("vis-page",xt)});let tt=xt;const ri=l`
`,Ct=class Ct extends T{constructor(){super(),this.innerHTML=ri,this.ui.name="vis-data"}};a(Ct,"register",()=>{customElements.define("vis-data-page",Ct)});let et=Ct;const oi=l`
    <ui-store
        local-storage-prefix="pg-vis:"
        enable-local-storage
    ></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout></ui-stack-layout>
    </ui-container>

    <ui-app-bar
        style="padding: 0 var(--ui-spacing);"
        position="top"
    >
        <ui-flex-grid-item
            name="menu"
            slot="left"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-menu></svg-menu>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="back"
            slot="left"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-back-arrow></svg-back-arrow>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="title"
            slot="center"
            class="flex align-center justify-center"
        >
            <h4 class="title" style="white-space: nowrap;"></h4>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="share"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-share></svg-share>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="edit"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-edit></svg-edit>
            </ui-icon-button>
        </ui-flex-grid-item>

        <ui-flex-grid-item
            name="add"
            slot="right"
            class="flex align-center justify-center"
        >
            <ui-icon-button ghost>
                <svg-add></svg-add>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-app-bar>

    <ui-drawer open>
        <ui-drawer-group
            name="alert-lists"
            title="Alarm Listen"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                >Import</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="metal-sheet-lists"
            title="Blech Listen"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="export"
                    variant="full"
                    color="primary"
                >Export</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="vis"
            title="Vis"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                >Import</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>

        <ui-drawer-group
            name="vis-data"
            title="Vis Data"
        >
            <ui-drawer-group-item>
                <ui-button
                    name="import"
                    variant="full"
                    color="primary"
                >Import</ui-button>
            </ui-drawer-group-item>

            <ui-drawer-group-item>
                <ui-button
                    name="new"
                    variant="full"
                    color="secondary"
                >New Data</ui-button>
            </ui-drawer-group-item>
        </ui-drawer-group>
    </ui-drawer>
`,Lt=class Lt extends HTMLElement{constructor(){super(),this.innerHTML=oi,this.cleanup=new c,this.createStore(),this.createStackLayout(),this.uiAppBarItems={menu:this.querySelector('ui-app-bar [name="menu"] ui-icon-button'),back:this.querySelector('ui-app-bar [name="back"] ui-icon-button'),title:this.querySelector('ui-app-bar [name="title"] .title'),share:this.querySelector('ui-app-bar [name="share"] ui-icon-button'),edit:this.querySelector('ui-app-bar [name="edit"] ui-icon-button'),add:this.querySelector('ui-app-bar [name="add"] ui-icon-button')},this.uiDrawer=this.querySelector("ui-drawer"),this.uiDrawerGroups={alertLists:this.querySelector('ui-drawer [name="alert-lists"]'),metalSheetLists:this.querySelector('ui-drawer [name="metal-sheet-lists"]'),vis:this.querySelector('ui-drawer [name="vis"]'),visData:this.querySelector('ui-drawer [name="vis-data"]')},this.uiButtonImportAlertList=this.uiDrawerGroups.alertLists.querySelector('ui-button[name="import"]'),this.uiButtonImportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="import"]'),this.uiButtonExportMetalSheetLists=this.uiDrawerGroups.metalSheetLists.querySelector('ui-button[name="export"]'),this.uiButtonImportVis=this.uiDrawerGroups.vis.querySelector('ui-button[name="import"]'),this.uiButtonImportVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="import"]'),this.uiButtonNewVisData=this.uiDrawerGroups.visData.querySelector('ui-button[name="new"]')}connectedCallback(){this.setupNoPage(),this.uiDrawer.ui.open=!0,this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.cleanup.add(this.uiAppBarItems.menu.ui.events.on("click",()=>{this.uiDrawer.ui.open=!0})),this.cleanup.add(this.uiButtonImportAlertList.ui.events.on("click",async()=>{this.import(ni)})),this.cleanup.add(this.uiButtonImportMetalSheetLists.ui.events.on("click",async()=>{this.import(ai)})),this.cleanup.add(this.uiButtonExportMetalSheetLists.ui.events.on("click",async()=>{this.export(this.getFileName("metalSheetLists"),"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))})),this.cleanup.add(this.uiButtonImportVis.ui.events.on("click",async()=>{this.import(li)})),this.cleanup.add(this.uiButtonImportVisData.ui.events.on("click",async()=>{this.import(ui)})),this.cleanup.add(this.uiButtonNewVisData.ui.events.on("click",async()=>{const t=new W;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}))}disconnectedCallback(){this.cleanup.run()}setupNoPage(){this.uiAppBarItems.title.innerHTML="PG: Vis (v0.0.3)",this.uiAppBarItems.back.parentElement.style.display="none",this.uiAppBarItems.share.parentElement.style.display="none",this.uiAppBarItems.edit.parentElement.style.display="none",this.uiAppBarItems.add.parentElement.style.display="none"}createStore(){this.uiStore=this.querySelector("ui-store"),this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0)}createStackLayout(){this.stackLayout=this.querySelector("ui-stack-layout"),this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.uiAppBarItems.back.parentElement.style.display="none":this.uiAppBarItems.back.parentElement.style.display="block",!t){this.setupNoPage();return}switch(t.ui.name){case"alert-lists-page":break;case"metal-sheet-lists-page":break;case"vis-page":break;case"vis-data-page":break;default:this.setupNoPage()}}),this.pages={alertLists:new U(this.uiStore),metalSheetLists:new _,vis:new tt,visData:new et},this.stackLayout.ui.registerPage(this.pages.alertLists.ui.name,()=>this.pages.alertLists),this.stackLayout.ui.registerPage(this.pages.metalSheetLists.ui.name,()=>this.pages.metalSheetLists),this.stackLayout.ui.registerPage(this.pages.vis.ui.name,()=>this.pages.vis),this.stackLayout.ui.registerPage(this.pages.visData.ui.name,()=>this.pages.visData)}createDrawerItem(t,e,i){const s=new X;s.innerHTML=`
            <ui-flex-grid-row>
                <ui-flex-grid-item>
                    <ui-button
                        style="justify-content: flex-start;"
                        variant="ghost"
                        color="primary"
                    >
                        ${t}
                    </ui-button>
                </ui-flex-grid-item>

                <ui-flex-grid-item
                    class="flex align-center justify-center"
                    flex="0"
                >
                    <ui-icon-button color="destructive" ghost>
                        <svg-recycle></svg-recycle>
                    </ui-icon-button>
                </ui-flex-grid-item>
            </ui-flex-grid-row>
        `;const o=s.querySelector("ui-button");e?o.ui.events.on("click",()=>{this.uiDrawer.ui.open=!1,e&&e()}):o.ui.disable();const h=s.querySelector("ui-icon-button");return i?h.ui.events.on("click",()=>{s.parentElement.removeChild(s),i&&i()}):h.ui.disable(),s}export(t,e,i){const s=`data:${e};charset=utf-8,${encodeURIComponent(i)}`,o=document.createElement("a");o.href=s,o.download=t,o.click()}import(t){const e=document.createElement("input");e.type="file",e.onchange=i=>{const s=i.currentTarget.files[0];if(!s)return;const o=new FileReader;o.onload=()=>{if(typeof o.result=="string")try{t(s,o.result,this.uiStore)}catch(h){alert(`Parse data failed: ${h}`)}},o.onerror=()=>{alert(`Read file "${s.name}" failed!`)},o.readAsText(s)},e.click()}getFileName(t){const e=new Date,i=e.getFullYear(),s=(e.getMonth()+1).toString().padStart(2,"0"),o=e.getDate().toString().padStart(2,"0");switch(t){case"metalSheetLists":return`BlechListen_${i}-${s}-${o}.json`;default:return t}}onAlertLists(t){const e=[...this.uiDrawerGroups.alertLists.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.alertLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.alertLists.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.pages.alertLists.alertList=i,this.stackLayout.ui.setPage(this.pages.alertLists.ui.name)},()=>{this.uiStore.ui.update("alertLists",s=>s.filter(o=>o.title!==i.title))}))}onMetalSheetLists(t){const e=[...this.uiDrawerGroups.metalSheetLists.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.metalSheetLists.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.metalSheetLists.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.metalSheetLists.ui.name)},()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(o=>o.title!==i.title))}))}onVis(t){const e=[...this.uiDrawerGroups.vis.children].slice(1);for(;e.length>0;)this.uiDrawerGroups.vis.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.vis.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.vis.ui.name)},()=>{this.uiStore.ui.update("vis",s=>s.filter(o=>o.title!==i.title))}))}onVisData(t){const e=[...this.uiDrawerGroups.visData.children].slice(2);for(;e.length>0;)this.uiDrawerGroups.visData.removeChild(e.pop());for(const i of t)this.uiDrawerGroups.visData.appendChild(this.createDrawerItem(i.title,()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage(this.pages.visData.ui.name)},()=>{this.uiStore.ui.update("visData",s=>s.filter(o=>o.title!==i.title))}))}};a(Lt,"register",()=>{jt.register(),qt.register(),Ft.register(),Dt.register(),Rt.register(),zt.register(),Y.register(),Xt.register(),Ht.register(),Z.register(),H.register(),$t.register(),Jt.register(),It.register(),Vt.register(),X.register(),Q.register(),J.register(),W.register(),U.register(),_.register(),tt.register(),et.register(),customElements.define("pg-app",Lt)});let Yt=Lt;function ni(r,t,e){const i=JSON.parse(t);if(typeof i.timestamp!="number")throw"invalid timestamp";if(typeof i.title!="string")throw"invalid title";if(typeof i.value!="string"||!i.value)throw"invalid value";if(!Array.isArray(i.data))throw"invalid data array";for(let s=0;s<i.data.length;s++){const o=i.data[s];if(typeof o.from!="number"||typeof o.to!="number")throw`data entry (index: ${s}): invalid from/to`;if(typeof o.alert!="string")throw`data entry (index: ${s}): invalid alert`;if(!Array.isArray(o.desc))throw`data entry (index: ${s}): invalid desc array`;if(o.desc.filter(h=>typeof h!="string").length)throw`data entry (index: ${s}): invalid desc`}e.ui.update("alertLists",s=>[...s,i])}function ai(r,t,e){const i=JSON.parse(t);if(!Array.isArray(i))throw"invalid data";for(const s of i){if(typeof s.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(s.header))throw'invalid data type for "header" entry';if(!Array.isArray(s.data))throw'invalid data type for "data" entry';for(const o of s.header)if(typeof o!="string")throw"header(s) needs to be from type string";for(const o of s.data){if(!Array.isArray(o))throw'invalid type for "data" item';for(const h of o)if(typeof h!="string")throw"data item(s) needs to be from type string"}}e.ui.set("metalSheetLists",i)}function li(r,t,e){const i=d=>{const[S,E]=d.split(/[xX]/),u=parseFloat(S),g=parseFloat(E);return!u||!g?`${u}x${g}`:`${u>g?u:g}x${u<g?u:g}`},s=d=>{let S="",E="";for(let u=0;u<d.length;u++)if(d[u].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){E=i(d[u]),d=d.slice(u+1);break}else S+=d[u]+" ";return{productName:S.trim(),format:i(E),newRest:d.map(u=>u.trim()).filter(u=>!!u)}},o=(d,S)=>{if(!S)return;const E={title:d,data:[]},u=S.split(`
`);for(let g=0;g<u.length;g++){if(!u[g])continue;let[N,...de]=u[g].trim().replace(/\t/g," ").split(" ");N=N.trim();const{productName:St,format:Qt,newRest:Et}=s(de);if(!Qt)throw`missing format for "${St}" (lotto: "${N}") in vis (txt) data!`;if(!(Et[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${St}" with lotto "${N}"!`;const pe=Et.shift()||"",me=Et.join(" ");E.data.push({lotto:N,name:St,format:Qt,thickness:parseFloat(pe.replaceAll(",",".")),stamp:me})}return E},h=r.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),he=o(h,t);e.ui.update("vis",d=>(d.unshift(he),d))}function ui(r,t,e){const i=JSON.parse(t);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const s of i.data){if(typeof s.key!="string"&&typeof s.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(s.lotto!==null&&typeof s.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(s.format!==null&&typeof s.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(s.thickness!==null&&typeof s.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(s.stamp!==null&&typeof s.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}e.ui.update("visData",s=>(s.unshift(i),s))}Yt.register();
