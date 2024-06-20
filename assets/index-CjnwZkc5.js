var ye=Object.defineProperty;var we=(o,t,e)=>t in o?ye(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var n=(o,t,e)=>(we(o,typeof t!="symbol"?t+"":t,e),e),ke=(o,t,e)=>{if(!t.has(o))throw TypeError("Cannot "+e)};var E=(o,t,e)=>(ke(o,t,"read from private field"),e?e.call(o):t.get(o)),ce=(o,t,e)=>{if(t.has(o))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(o):t.set(o,e)};(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();const xe="modulepreload",Ce=function(o){return"/pg-vis.github.io/"+o},ue={},Se=function(t,e,i){let r=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));r=Promise.all(e.map(d=>{if(d=Ce(d),d in ue)return;ue[d]=!0;const L=d.endsWith(".css"),p=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${p}`))return;const g=document.createElement("link");if(g.rel=L?"stylesheet":xe,L||(g.as="script",g.crossOrigin=""),g.href=d,l&&g.setAttribute("nonce",l),document.head.appendChild(g),L)return new Promise((c,u)=>{g.addEventListener("load",c),g.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${d}`)))})}))}return r.then(()=>t()).catch(s=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s})};function Le(o={}){const{immediate:t=!1,onNeedRefresh:e,onOfflineReady:i,onRegistered:r,onRegisteredSW:s,onRegisterError:l}=o;let d,L;const p=async(c=!0)=>{await L};async function g(){if("serviceWorker"in navigator){if(d=await Se(()=>import("./workbox-window.prod.es5-D5gOYdM7.js"),[]).then(({Workbox:c})=>new c("/pg-vis.github.io/sw.js",{scope:"/pg-vis.github.io/",type:"classic"})).catch(c=>{l==null||l(c)}),!d)return;d.addEventListener("activated",c=>{(c.isUpdate||c.isExternal)&&window.location.reload()}),d.addEventListener("installed",c=>{c.isUpdate||i==null||i()}),d.register({immediate:t}).then(c=>{s?s("/pg-vis.github.io/sw.js",c):r==null||r(c)}).catch(c=>{l==null||l(c)})}}return L=g(),p}var w;class v{constructor(){ce(this,w,{})}on(t,e){if(typeof e!="function")throw`invalid event listener passed for "${t.toString()}" event!`;return E(this,w)[t]||(E(this,w)[t]=[]),E(this,w)[t].push(e),()=>{this.off(t,e)}}off(t,e){if(!E(this,w)[t])throw`no listeners found for ${t.toString()}, there is nothing to delete`;let i=!1,r=0;for(const s of E(this,w)[t])s===e&&(E(this,w)[t].splice(r,1),i=!0),r++;if(!i)throw`listener not found for ${t.toString()}, there is nothing to delete`;return this}dispatch(t,e){if(e===void 0)throw"data is undefined!";if(E(this,w)[t])for(const i of E(this,w)[t])i(e);return this}}w=new WeakMap;function he(o,t){const e=document.createElement("div");e.classList.add("ripple"),e.style.position="absolute",e.style.color="inherit",e.style.borderRadius="50%",e.style.pointerEvents="none",e.style.width="100px",e.style.height="100px",e.style.marginTop="-50px",e.style.marginLeft="-50px",e.style.opacity=`${t.opacity}`,e.style.backgroundColor=t.color,e.style.transform="scale(0) translate(0, 0)",e.style.transition=`transform ${t.spreadDuration} ${t.spreadTiming} 0s,opacity ${t.clearDuration} ${t.clearTiming} 0s`,o.currentTarget.appendChild(e);const i=o.currentTarget.getBoundingClientRect();t.centered?(e.style.top=`${i.height/2}px`,e.style.left=`${i.width/2}px`):(e.style.top=`${o.clientY-i.top}px`,e.style.left=`${o.clientX-i.left}px`);const r=Math.max(i.width,i.height)*.02;return e.style.transform=`scale(${r}) translate(0, 0)`,e}function de(o){o&&(o.addEventListener("transitionend",t=>{t.propertyName==="opacity"&&o.remove()}),o.style.opacity="0")}const Ee={color:"var(--ui-ripple-color, currentColor)",opacity:"var(--ui-ripple-opacity, 0.2)",centered:!1,spreadDuration:".4s",spreadTiming:"linear",clearDuration:"1s",clearTiming:"ease-in-out",useClick:!1};function ae(o,t={}){t={...Ee,...t};let e;const i=s=>{e=he(s,t)},r=()=>{de(e)};return o.classList.add("ripple-container"),o.style.overflow="hidden",t.useClick===!0?o.addEventListener("click",s=>{e=he(s,t),de(e)}):(o.addEventListener("pointerdown",i),o.addEventListener("pointerup",r),o.addEventListener("pointerleave",r)),()=>{o.classList.remove("ripple-container"),o.removeEventListener("pointerdown",i),o.removeEventListener("pointerup",r),o.removeEventListener("pointerleave",r)}}const a=String.raw;class h{constructor(){this.callbacks=[]}add(t){this.callbacks.push(t)}run(){for(let t=0;t<this.callbacks.length;t++)if(this.callbacks[t]!==null)try{this.callbacks[t](),this.callbacks[t]=null}catch(e){console.error("cleanup error:",e)}this.callbacks=this.callbacks.filter(t=>t!==null)}}const Pt="1",Ae=a`
    <style></style>
    <slot></slot>
`,H=class H extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ae,this.cleanup=new h,this.ui={root:this,getFlex(){return this.root.hasAttribute("flex")?this.root.getAttribute("flex"):Pt},setFlex(t){t===null?this.root.removeAttribute("flex"):this.root.setAttribute("flex",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"flex":this.updateStyle({flex:i||Pt});break}}updateStyle({flex:t=Pt}={}){this.shadowRoot.querySelector("style").textContent=`
            :host {
                flex: ${t};
            }
        `}};n(H,"register",()=>{customElements.get("ui-flex-grid-item")||customElements.define("ui-flex-grid-item",H)}),n(H,"observedAttributes",["flex"]);let k=H;const Vt="0",Te=`
    <style></style>
    <slot></slot>
`,R=class R extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Te,this.cleanup=new h,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||Vt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Vt});break}}updateStyle({gap:t=Vt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(R,"register",()=>{customElements.get("ui-flex-grid-row")||customElements.define("ui-flex-grid-row",R)}),n(R,"observedAttributes",["gap"]);let A=R;const Jt="0",Me=`
    <style></style>
    <slot></slot>
`,q=class q extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Me,this.cleanup=new h,this.ui={root:this,getGap(){return this.root.getAttribute("gap")||Jt},setGap(t){t===null?this.root.removeAttribute("gap"):this.root.setAttribute("gap",t)}},this.updateStyle()}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"gap":this.updateStyle({gap:i||Jt});break}}updateStyle({gap:t=Jt}={}){this.shadowRoot.querySelector("style").textContent=`
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
        `}};n(q,"register",()=>{customElements.get("ui-flex-grid")||customElements.define("ui-flex-grid",q)}),n(q,"observedAttributes",["gap"]);let V=q;const $e=a`
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
`,rt=class rt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=$e,this.cleanup=new h,this.ui={getLeftSlot:()=>[...this.querySelectorAll('[slot="left"]')],getCenterSlot:()=>[...this.querySelectorAll('[slot="center"]')],getRightSlot:()=>[...this.querySelectorAll('[slot="right"]')]}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(rt,"register",()=>{A.register(),customElements.get("ui-app-bar")||customElements.define("ui-app-bar",rt)});let Zt=rt;const He=a`
    <style>
        * { box-sizing: border-box; }

        :host {
            display: flex;
            align-items: center;
            justify-content: center;
            flex: 1;
        }
    </style>

    <slot></slot>
`,st=class st extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=He,this.cleanup=new h,this.ui={root:this,enable(){this.root.style.display="flex"},disable(){this.root.style.display="none"},getItem(){return this.root.querySelector("*")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(st,"register",()=>{customElements.get("ui-app-bar-item")||customElements.define("ui-app-bar-item",st)});let Wt=st;const Re=a`
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
`,B=class B extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Re,this.setAttribute("role","button"),this.cleanup=new h,this.ui={root:this,events:new v,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getVariant(){return this.root.getAttribute("variant")},setVariant(t){this.root.setAttribute("variant",t)},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=ae(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(B,"register",()=>{customElements.get("ui-button")||customElements.define("ui-button",B)}),n(B,"observedAttributes",["no-ripple","color"]);let b=B;const qe=a`
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
`,N=class N extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=qe,this.setAttribute("role","button"),this.cleanup=new h,this.ui={root:this,events:new v,removeRipple:null,getColor(){return this.root.getAttribute("color")},setColor(t){this.root.setAttribute("color",t)},getGhost(){return this.root.hasAttribute("ghost")},setGhost(t){t?this.root.setAttribute("ghost",""):this.root.removeAttribute("ghost")},disable(){this.root.setAttribute("disabled","")},enable(){this.root.removeAttribute("disabled")},enableRipple(){this.removeRipple||(this.removeRipple=ae(this.root,{centered:!0}),this.root.removeAttribute("no-ripple"))},disableRipple(){this.removeRipple&&(this.removeRipple(),this.removeRipple=null,this.root.setAttribute("no-ripple",""))}}}connectedCallback(){!this.hasAttribute("no-ripple")&&!this.ui.removeRipple&&this.ui.enableRipple(),this.bindClickEvent()}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"no-ripple":i!==null?this.ui.disableRipple():this.ui.enableRipple();break;case"color":i!==null&&(["primary","secondary","destructive"].includes(i)?this.style.color=null:this.style.color=i);break}}bindClickEvent(){const t=async()=>{this.ui.events.dispatch("click",this)};this.addEventListener("click",t),this.cleanup.add(()=>{this.removeEventListener("click",t)})}};n(N,"register",()=>{customElements.get("ui-icon-button")||customElements.define("ui-icon-button",N)}),n(N,"observedAttributes",["no-ripple","color"]);let S=N;const Be=a`
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
`,ot=class ot extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Be,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(ot,"register",()=>{customElements.get("ui-container")||customElements.define("ui-container",ot)});let Xt=ot;const Ne=a`
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
`,nt=class nt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ne}};n(nt,"register",()=>{customElements.get("svg-back-arrow")||customElements.define("svg-back-arrow",nt)});let Yt=nt;const ze=a`
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
`,at=class at extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=ze}};n(at,"register",()=>{customElements.get("svg-close")||customElements.define("svg-close",at)});let Kt=at;const je=a`
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
`,lt=class lt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=je}};n(lt,"register",()=>{customElements.get("svg-recycle")||customElements.define("svg-recycle",lt)});let M=lt;const Oe=a`
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
`,ct=class ct extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Oe}};n(ct,"register",()=>{customElements.get("svg-search")||customElements.define("svg-search",ct)});let W=ct;const Fe=a`
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
`,ut=class ut extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Fe}};n(ut,"register",()=>{customElements.get("svg-menu")||customElements.define("svg-menu",ut)});let Qt=ut;const Pe=a`
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
`,ht=class ht extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Pe}};n(ht,"register",()=>{customElements.get("svg-share")||customElements.define("svg-share",ht)});let Dt=ht;const Ve=a`
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
`,dt=class dt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ve,this.cleanup=new h,this.ui={root:this,events:new v,h4:(()=>{const t=document.createElement("h4");return t.slot="title",this.appendChild(t),t})(),dialog:this.shadowRoot.querySelector("dialog"),getFullscreen(){return this.root.hasAttribute("fullscreen")},setFullscreen(t){t?this.root.setAttribute("fullscreen",""):this.root.removeAttribute("fullscreen")},getTitle(){return this.h4.innerText},setTitle(t){this.h4.innerText=t},getDialogElement(){return this.dialog},open(t=!1,e=!0){const i=this.dialog.inert;this.dialog.inert=e,t?this.dialog.showModal():this.dialog.show(),this.events.dispatch("open",null),this.dialog.inert=i},close(){this.dialog.close(),this.events.dispatch("close",null)}}}connectedCallback(){const t=this.shadowRoot.querySelector(".header ui-icon-button"),e=()=>{this.ui.close()};t.addEventListener("click",e);const i=this.shadowRoot.querySelector("dialog"),r=s=>{s.preventDefault()};i.addEventListener("cancel",r),this.cleanup.add(()=>{t.removeEventListener("click",e),i.removeEventListener("cancel",r)}),console.debug(this.shadowRoot.querySelector("svg-close"))}disconnectedCallback(){this.cleanup.run()}};n(dt,"register",()=>{Kt.register(),S.register(),A.register(),customElements.get("ui-dialog")||customElements.define("ui-dialog",dt)});let X=dt;const pe=150,Je=a`
    <style>
        * {
            box-sizing: border-box;
        }

        :host {
            display: block;

            position: absolute !important;
            z-index: ${pe};
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;

            overflow: hidden;

            transition: left 0s ease 0.5s;
        }

        :host([open]) {
            background-color: var(--ui-backdrop-bgColor);
            backdrop-filter: var(--ui-backdropFilter);

            left: 0;

            transition: none;
        }

        aside {
            position: absolute;
            z-index: ${pe};
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

            transition: left 0.5s ease;
        }

        :host([open]) aside {
            left: 0;
        }
    </style>

    <aside>
        <slot></slot>
    </aside>
`,z=class z extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Je,this.cleanup=new h,this.ui={root:this,aside:this.shadowRoot.querySelector("aside"),events:new v,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){const t=i=>{i.stopPropagation(),this.ui.setOpen(!1)},e=i=>{i.stopPropagation()};this.addEventListener("click",t),this.ui.aside.addEventListener("click",e),this.cleanup.add(()=>{this.ui.aside.removeEventListener("click",e),this.removeEventListener("click",t)})}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"open":i!==null?(this.classList.add("open"),this.ui.events.dispatch("open",this)):(this.classList.remove("open"),this.ui.events.dispatch("close",this));break}}};n(z,"register",()=>{customElements.get("ui-drawer")||customElements.define("ui-drawer",z)}),n(z,"observedAttributes",["open"]);let J=z;const Ze=a`
    <style>
        :host {
            font-size: 1.1rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-primary-fontVariation);
        }
    </style>

    <slot></slot>
`,pt=class pt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ze,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(pt,"register",()=>{customElements.get("ui-primary")||customElements.define("ui-primary",pt)});let T=pt;const We=a`
    <style>
        :host {
            font-size: 0.9rem;
            font-family: var(--ui-fontFamily);
            font-variation-settings: var(--ui-text-secondary-fontVariation);
        }
    </style>

    <slot></slot>
`,gt=class gt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=We,this.cleanup=new h,this.ui={}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(gt,"register",()=>{customElements.get("ui-secondary")||customElements.define("ui-secondary",gt)});let x=gt;const Xe=a`
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
`,mt=class mt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Xe,this.cleanup=new h,this.ui={root:this,getOpen(){return this.root.hasAttribute("open")},setOpen(t){t?this.root.setAttribute("open",""):this.root.removeAttribute("open")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(mt,"register",()=>{customElements.get("ui-drawer-group-item")||customElements.define("ui-drawer-group-item",mt)});let m=mt;const Ye=a`
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
`,j=class j extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ye,this.cleanup=new h,this.ui={root:this,getTitle(){return this.root.getAttribute("title")||null},setTitle(t){let e=this.root.shadowRoot.querySelector(".ui-drawer-group-title");e.classList.add("visible"),e.innerHTML=`
                    <span
                        style="
                            font-size: 1.5rem;
                            font-weight: 600;
                            font-variation-settings: var(--ui-heading-fontVariation);
                        "
                    >
                        ${t}
                    </span>
                `},removeTitle(){this.root.shadowRoot.querySelector(".ui-drawer-group-title").classList.remove("visible")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":i===""?this.removeAttribute("title"):i!==null?this.ui.setTitle(i):this.ui.removeTitle();break}}};n(j,"register",()=>{m.register(),T.register(),customElements.get("ui-drawer-group")||customElements.define("ui-drawer-group",j)}),n(j,"observedAttributes",["title"]);let C=j;const Ke=a`
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
`,O=class O extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ke,this.cleanup=new h,this.ui={root:this,input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type=this.getAttribute("type")||"text",t.oninput=()=>this.ui.events.dispatch("input",this.ui.getValue()),t.onchange=()=>this.ui.events.dispatch("change",this.ui.getValue()),t})(),events:new v,setTitle(t){if(t===null){this.root.removeAttribute("title");return}this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setType(t){if(t===null){this.root.removeAttribute("type");return}this.root.setAttribute("type",t)},getType(){return this.root.getAttribute("type")||"text"},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t.toString())},getValue(){const t=this.input.value;switch(this.getType()){case"number":return t?parseFloat(t):NaN;default:return t}},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.removeAttribute("invalid");return}this.root.setAttribute("invalid","")},getInvalid(){return this.root.hasAttribute("invalid")},setMin(t){if(t===null){this.root.removeAttribute("min");return}this.root.setAttribute("min",t.toString())},getMin(){const t=this.root.getAttribute("min");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}},setMax(t){t===null&&this.root.removeAttribute("max"),this.root.setAttribute("max",t.toString())},getMax(){const t=this.root.getAttribute("max");switch(this.input.type){case"number":return t?parseFloat(t):NaN;default:return t}}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');if(i===null&&r&&(this.removeChild(r),r=null),i===null)return;r||(r=new x,r.slot="title",this.appendChild(r)),r.innerHTML=i;break;case"type":this.ui.input.value=i||"text";break;case"value":this.ui.input.value=(i||"").toString();break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i;break;case"min":this.ui.input.min=i||"";break;case"max":this.ui.input.max=i||"";break}}};n(O,"register",()=>{x.register(),customElements.get("ui-input")||customElements.define("ui-input",O)}),n(O,"observedAttributes",["title","type","value","placeholder","invalid","min","max"]);let Gt=O;const Qe=a`
    <style>
        * {
            box-sizing: border-box;
        }

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
`,F=class F extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Qe,this.cleanup=new h,this.ui={root:this,submit:(()=>{const t=this.shadowRoot.querySelector("ui-icon-button");return t.ui.events.on("click",()=>{this.ui.events.dispatch("submit",this.ui.getValue())}),t})(),input:(()=>{const t=this.shadowRoot.querySelector("input");return t.type="text",t.onkeydown=e=>{e.key==="Enter"&&this.ui.submit.click()},t})(),events:new v,setTitle(t){t===null?this.root.removeAttribute("title"):this.root.setAttribute("title",t)},getTitle(){return this.root.getAttribute("title")},setValue(t){if(t===null){this.root.removeAttribute("value");return}this.root.setAttribute("value",t)},getValue(){return this.input.value},setPlaceholder(t){if(t===null){this.root.removeAttribute("placeholder");return}this.root.setAttribute("placeholder",t)},getPlaceholder(){return this.root.getAttribute("placeholder")},setInvalid(t){if(t===null||t===!1){this.root.setAttribute("invalid","");return}this.root.removeAttribute("invalid")},getInvalid(){return this.root.hasAttribute("invalid")}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}attributeChangedCallback(t,e,i){switch(t){case"title":let r=this.querySelector('[slot="title"]');i===null&&r&&(this.removeChild(r),r=null),r||(r=new x,r.slot="title",this.appendChild(r)),r.innerHTML=i||"";break;case"value":this.ui.input.value=i||"";break;case"placeholder":this.ui.input.placeholder=i||"";break;case"invalid":this.ui.input.ariaInvalid=i!==null?"":null;break}}};n(F,"register",()=>{x.register(),S.register(),W.register(),customElements.get("ui-search")||customElements.define("ui-search",F)}),n(F,"observedAttributes",["title","value","placeholder","invalid"]);let It=F;const De=a`
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
`,ft=class ft extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=De,this.cleanup=new h,this.ui={root:this,getName(){return this.root.getAttribute("name")},setName(t){t===null&&this.root.removeAttribute("name"),this.root.setAttribute("name",t)}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(ft,"register",()=>{customElements.get("ui-stack-layout-page")||customElements.define("ui-stack-layout-page",ft)});let f=ft;const Ge=a`
    <style>
        :host {
            display: block !important;
            position: relative !important;
            width: 100%;
            height: 100%;
        }
    </style>

    <slot></slot>
`,bt=class bt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ge,this.cleanup=new h,this.ui={root:this,pages:{},stack:[],events:new v,lock:!1,registerPage(t,e){this.pages[t]=e},unregisterPage(t){delete this.pages[t]},clearStack(){for(;this.stackSize()>0;)this.root.removeChild(this.stack.pop())},stackSize(){return this.stack.length},goBack(){if(!this.stack.length||this.lock)return;const t=this.root.removeChild(this.stack.pop());this.stack.length>0&&(this.stack[this.stack.length-1].parentElement||this.root.appendChild(this.stack[this.stack.length-1])),this.dispatchChangeEvent(t)},setPage(t,e=null,i=!1){if(this.lock)return;const r=this.pages[t]();this.stack.push(this.root.appendChild(r)),typeof e=="function"&&setTimeout(()=>e(r));let s=null;this.stack.length>1&&!i&&(s=this.stack[this.stack.length-2],s.parentElement.removeChild(s)),this.dispatchChangeEvent(s)},async dispatchChangeEvent(t){this.events.dispatch("change",{newPage:this.stack[this.stack.length-1]||null,oldPage:t||this.stack[this.stack.length-2]||null})}}}connectedCallback(){}disconnectedCallback(){this.cleanup.run()}};n(bt,"register",()=>{f.register(),customElements.get("ui-stack-layout")||customElements.define("ui-stack-layout",bt)});let Y=bt;const vt=class vt extends HTMLElement{constructor(){super(),this.ui={root:this,stores:{},events:new v,getLocalStoragePrefix(){return this.root.getAttribute("local-storage-prefix")},setLocalStoragePrefix(t){if(t===null){this.root.removeAttribute("local-storage-prefix");return}this.root.setAttribute("local-storage-prefix",t)},getEnableLocalStorage(){return this.root.hasAttribute("enable-local-storage")},setEnableLocalStorage(t){if(!t){this.root.removeAttribute("enable-local-storage");return}this.root.setAttribute("enable-local-storage","")},get(t){return this.stores[t]},set(t,e,i=!1){if(i&&this.getEnableLocalStorage()){const r=JSON.parse(localStorage.getItem(this.getLocalStoragePrefix()+t.toString())||"null");this.stores[t]=r??e}else this.stores[t]=e;this.getEnableLocalStorage()&&localStorage.setItem(this.getLocalStoragePrefix()+t.toString(),JSON.stringify(this.stores[t])),this.events.dispatch(t,this.stores[t])},update(t,e){if(typeof e!="function")throw"callback is not a function";this.set(t,e(this.stores[t]))},on(t,e,i=!1){if(typeof e!="function")throw"callback is not a function";return i&&e(this.get(t)),this.events.on(t,e)}}}};n(vt,"register",()=>{customElements.get("ui-store")||customElements.define("ui-store",vt)});let Z=vt;const P=class P extends HTMLElement{constructor(){super(),this.ui={media:null,currentTheme:null,themes:{},enableAutoMode(){if(this.removeMode(),this.media){this.mediaChangeHandler(this.media);return}this.media=window.matchMedia("(prefers-color-scheme: dark)"),this.media.addEventListener("change",this.mediaChangeHandler),this.mediaChangeHandler(this.media)},disableAutoMode(){this.removeMedia()},addTheme(t,e){this.themes[t]=e},loadTheme(t){var i;if(!this.themes[t])throw`theme "${t}" is missing in this.themes`;if(((i=this.currentTheme)==null?void 0:i.name)==t)return;{const r=document.getElementById("theme");r&&(document.head.removeChild(r),this.currentTheme=null)}const e=document.createElement("link");e.id="theme",e.rel="stylesheet",e.href=this.themes[t],document.head.appendChild(e),this.currentTheme={name:t,href:this.themes[t]}},mediaChangeHandler(t){t.matches?document.body.setAttribute("data-theme","dark"):document.body.setAttribute("data-theme","light")},removeMode(t=document.body){t.removeAttribute("data-theme")},setMode(t,e=document.body){switch(t){case"dark":e.setAttribute("data-theme",t);break;case"light":e.setAttribute("data-theme",t);break}},removeMedia(){this.media&&(this.media.removeEventListener("change",this.mediaChangeHandler),this.media=null)}}}attributeChangedCallback(t,e,i){switch(t){case"auto":i!==null?this.ui.enableAutoMode():this.ui.disableAutoMode();break;case"mode":i!==null?this.ui.setMode(i):this.ui.removeMode();break}}};n(P,"register",()=>{customElements.get("ui-theme-handler")||customElements.define("ui-theme-handler",P)}),n(P,"observedAttributes",["auto","mode"]);let Ut=P;const Ie=a`
    <ui-app-bar style="padding: 0 var(--ui-spacing);" position="top">
        <ui-app-bar-item name="menu" slot="left">
            <ui-icon-button ghost>
                <svg-menu></svg-menu>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="back" slot="left" style="display: none">
            <ui-icon-button ghost>
                <svg-back-arrow></svg-back-arrow>
            </ui-icon-button>
        </ui-app-bar-item>

        <ui-app-bar-item name="title" slot="center">
            <h4 class="title" style="white-space: nowrap;"></h4>
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
`,yt=class yt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=Ie,this.cleanup=new h,this.uiStore=document.querySelector("ui-store"),this.uiDrawer=document.querySelector("pg-drawer"),this.stackLayout=document.querySelector("ui-stack-layout"),this.itemMenu=this.shadowRoot.querySelector('[name="menu"]'),this.itemBack=this.shadowRoot.querySelector('[name="back"]'),this.itemTitle=this.shadowRoot.querySelector('[name="title"]'),this.itemShare=this.shadowRoot.querySelector('[name="share"]'),this.itemSearch=this.shadowRoot.querySelector('[name="search"]')}connectedCallback(){this.cleanup.add(this.itemMenu.ui.getItem().ui.events.on("click",async()=>this.uiDrawer.ui.setOpen(!0))),this.cleanup.add(this.itemBack.ui.getItem().ui.events.on("click",()=>this.stackLayout.ui.goBack())),this.cleanup.add(this.itemShare.ui.getItem().ui.events.on("click",async()=>{const t=this.uiStore.ui.get("share");if(!navigator.canShare){const e=document.createElement("a");for(const i of t.files)e.download=i.name,e.href="data:text/json;charset=utf-8,"+encodeURIComponent(await i.text()),e.click();return}navigator.canShare(t)&&await navigator.share(t)})),this.cleanup.add(this.itemSearch.ui.getItem().ui.events.on("click",()=>this.uiStore.ui.update("search",t=>({...t,active:!t.active}))))}disconnectedCallback(){this.cleanup.run()}};n(yt,"register",()=>{W.register(),Dt.register(),Yt.register(),Qt.register(),Wt.register(),Zt.register(),m.register(),S.register(),customElements.define("pg-app-bar",yt)});let _t=yt;function ge({alert:o,container:t,hasBorder:e=!0,hasRipple:i=!0,onClick:r=null}){const s=document.createElement(t);return s.className="alert flex row nowrap align-center justify-between",s.style.padding="var(--ui-spacing)",s.style.overflow="hidden",s.style.position="relative",e&&(s.style.borderBottom="1px solid var(--ui-borderColor)"),s.innerHTML=`
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
`)),s.setAttribute("data-note",o.note||""),s.onclick=r,i&&(ae(s),s.style.cursor="pointer",s.role="button"),s}const Ue=a`
    <ui-flex-grid style="width: 100%; height: 100%;">
        <ui-flex-grid-item class="alert" flex="0"> </ui-flex-grid-item>

        <ui-flex-grid-item class="desc"> </ui-flex-grid-item>
    </ui-flex-grid>
`,wt=class wt extends f{constructor(){super(),this.innerHTML=Ue,this.className="no-scrollbar",this.style.paddingTop="calc(var(--ui-app-bar-height) + var(--ui-spacing))",this.style.overflow="auto",this.ui.setName("alert"),this.alert=null,this.uiStore=document.querySelector("ui-store"),this.ui={...this.ui,root:this,set(t){this.root.alert=t,this.root.createAlertItem(),this.root.createDescItem()}}}connectedCallback(){super.connectedCallback(),this.shareBackup=this.uiStore.ui.get("share"),this.uiStore.ui.set("share",null),this.cleanup.add(()=>{this.uiStore.ui.set("share",this.shareBackup)})}createAlertItem(){const t=this.querySelector("ui-flex-grid-item.alert");for(;t.firstChild;)t.removeChild(t.firstChild);this.alert!==null&&t.appendChild(ge({alert:this.alert,container:"div",hasRipple:!1}))}createDescItem(){const t=this.querySelector("ui-flex-grid-item.desc");for(;t.firstChild;)t.removeChild(t.firstChild);if(this.alert===null)return;const e=document.createElement("p");e.style.padding="var(--ui-spacing)",e.innerText=this.alert.desc.join(`
`),t.appendChild(e)}};n(wt,"register",()=>{V.register(),k.register(),f.register(),customElements.define("alert-page",wt)});let K=wt;const me="4.5em",_e=a`
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
            height: ${me};
            display: none;
            padding: var(--ui-spacing);
            overflow: hidden;
        }
    </style>

    <ui-search title="Alarmsuche (RegEx Mode)"></ui-search>
`,kt=class kt extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.innerHTML=_e,this.input=this.shadowRoot.querySelector("ui-search"),this.stackLayout=document.querySelector("ui-stack-layout"),this.ui={root:this,input:this.input,isActive(){return this.root.style.display==="block"},setActive(t){if(t===!0){this.root.style.display="block",this.root.stackLayout.style.setProperty("--search-bar-height",me);return}this.root.style.display="none",this.root.stackLayout.style.setProperty("--search-bar-height","0rem")}}}};n(kt,"register",()=>{It.register(),customElements.define("search-bar",kt)});let te=kt;const ti=a`
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
`,xt=class xt extends f{constructor(){super(),this.innerHTML=ti,this.ui.setName("alert-lists"),this.uiStore=document.querySelector("ui-store"),this.alertList=null,this.stackLayout=document.querySelector("ui-stack-layout"),this.searchBar=this.querySelector("search-bar"),this.alertPage=new K,this.ui={...this.ui,root:this,get(){return this.root.alertList},set(t){var e;this.root.alertList=t||null,this.root.uiStore.ui.set("appBarTitle",((e=this.root.alertList)==null?void 0:e.title)||""),setTimeout(()=>this.root.renderList())}}}connectedCallback(){super.connectedCallback(),this.uiStore.ui.on("search",({active:e})=>{e===!0?this.searchBar.ui.setActive(!0):this.searchBar.ui.setActive(!1)});let t=null;this.cleanup.add(this.searchBar.ui.input.ui.events.on("input",async e=>{t!==null&&clearTimeout(t),t=setTimeout(async()=>{await this.search(e)},250)})),this.stackLayout.ui.registerPage("alert",()=>this.alertPage)}disconnectedCallback(){super.disconnectedCallback(),this.stackLayout.ui.unregisterPage("alert")}async renderList(){const t=this.querySelector("ul");for(;t.children.length>0;)t.removeChild(t.firstChild);const e=this.uiStore.ui.get("search"),i=new RegExp(this.searchBar.ui.input.ui.getValue().replaceAll(" ",".*"));for(let r=0;r<this.alertList.data.length;r++){if(e.active===!0&&!this.is(this.alertList.data[r],i))return;setTimeout(()=>this.renderListElement(t,this.alertList.data[r],r<this.alertList.data.length-1))}}renderListElement(t,e,i){t.appendChild(ge({alert:e,container:"li",hasBorder:i,onClick:this.onClick.bind(this)}))}getAlertFromElement(t){return{from:parseInt(t.getAttribute("data-from"),10),to:parseInt(t.getAttribute("data-to"),10),alert:t.getAttribute("data-alert"),desc:t.getAttribute("data-desc").split(`
`),note:t.getAttribute("data-note")}}is(t,e){return!!`${t.from}..${t.to} ${t.alert}`.match(e)}async onClick(t){const e=t.currentTarget,i=this.getAlertFromElement(e);this.alertPage.ui.set(i),this.stackLayout.ui.setPage(this.alertPage.ui.getName(),null,!0)}async search(t){const e=new RegExp(t.replaceAll(" ",".*"));[...this.querySelector("ul").children].forEach(i=>{if(this.searchBar.ui.isActive()){i.style.display="flex";return}if(this.is(this.getAlertFromElement(i),e)){i.style.display="flex";return}i.style.display="none"})}};n(xt,"register",()=>{Z.register(),Y.register(),f.register(),te.register(),K.register(),customElements.define("alert-lists-page",xt)});let Q=xt;const ei=a``,Ct=class Ct extends f{constructor(){super(),this.innerHTML=ei,this.ui.setName("metal-sheet-lists")}};n(Ct,"register",()=>{f.register(),customElements.define("metal-sheet-lists-page",Ct)});let D=Ct;const ii=a``,St=class St extends f{constructor(){super(),this.innerHTML=ii,this.ui.setName("vis")}};n(St,"register",()=>{f.register(),customElements.define("vis-page",St)});let G=St;const ri=a``,Lt=class Lt extends f{constructor(){super(),this.innerHTML=ri,this.ui.setName("vis-data")}};n(Lt,"register",()=>{f.register(),customElements.define("vis-data-page",Lt)});let I=Lt;const si="v0.0.1";function oi(o){const t=[],e=o.map(i=>`${i.title}`).sort();for(const i of e)t.push(o.find(r=>`${r.title}`===i));return t}function jt(o){const t=document.createElement("input");t.type="file",t.onchange=e=>{const i=e.currentTarget.files[0];if(!i)return;const r=new FileReader;r.onload=()=>{if(typeof r.result=="string")try{o(r.result,i)}catch(s){alert(`Parse data failed: ${s}`)}},r.onerror=()=>{alert(`Read file "${i.name}" failed!`)},r.readAsText(i)},t.click()}function ni(o,t,e){const i=`data:${t};charset=utf-8,${encodeURIComponent(e)}`,r=document.createElement("a");r.href=i,r.download=o,r.click()}const ai=a`
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
                <svg-recycle></svg-recycle>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Et=class Et extends m{constructor(){super(),this.innerHTML=ai,this.ui={...this.ui,events:new v},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Et,"register",()=>{M.register(),m.register(),A.register(),k.register(),b.register(),S.register(),T.register(),x.register(),customElements.define("pg-drawer-item-alert-list",Et)});let U=Et;const li=a`
    <ui-drawer-group title="Alarm Listen">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary">
                Import
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,At=class At extends C{constructor(){super(),this.innerHTML=li,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("alertLists",this.onAlertLists.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this))}async onAlertLists(t){if(!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const i of oi(t)){const r=new U;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("alert-lists",l=>{l.ui.set(i)}),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("alertLists",s=>s.filter(l=>l.title!==i.title))})),this.appendChild(r)}}onClickImport(){jt(e=>{const i=JSON.parse(e);if(typeof i.title!="string")throw'invalid "title"';if(!Array.isArray(i.data))throw'invalid "data" array';for(let s=0;s<i.data.length;s++){const l=i.data[s];if(typeof l.from!="number"||typeof l.to!="number")throw`data entry (index: ${s}): invalid from/to`;if(typeof l.alert!="string")throw`data entry (index: ${s}): invalid alert`;if(!Array.isArray(l.desc))throw`data entry (index: ${s}): invalid desc array`;if(l.desc.filter(d=>typeof d!="string").length)throw`data entry (index: ${s}): invalid desc`;if(typeof l.note!="string"&&l.note)throw`data entry (index: ${s}): invalid note`}const r=`${i.title}`;if(this.uiStore.ui.get("alertLists").find(s=>`${s.title}`===r)){if(!window.confirm(`Replace data: ${i.title}?`))return;this.uiStore.ui.update("alertLists",s=>s.map(l=>`${l.title}`===r?i:l));return}this.uiStore.ui.update("alertLists",s=>[...s,i])})}};n(At,"register",()=>{C.register(),m.register(),b.register(),U.register(),customElements.define("pg-drawer-alert-lists",At)});let ee=At;const ci=a`
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
                <svg-recycle></svg-recycle>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Tt=class Tt extends m{constructor(){super(),this.innerHTML=ci,this.ui={...this.ui,events:new v},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Tt,"register",()=>{M.register(),m.register(),A.register(),k.register(),b.register(),S.register(),T.register(),x.register(),customElements.define("pg-drawer-item-metal-sheet-list",Tt)});let _=Tt;const ui=a`
    <ui-drawer-group title="Blech Listen">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>

        <ui-drawer-group-item>
            <ui-button name="export" variant="full" color="primary" disabled>
                Export
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,Mt=class Mt extends C{constructor(){super(),this.innerHTML=ui,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("metalSheetLists",this.onMetalSheetLists.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickExport.bind(this))}onMetalSheetLists(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new _;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("metal-sheet-lists"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("metalSheetLists",s=>s.filter(l=>l.title!==i.title))})),this.appendChild(r)}}onClickImport(){jt(e=>{const i=JSON.parse(e);if(!Array.isArray(i))throw"invalid data";for(const r of i){if(typeof r.title!="string")throw'"title" needs to be from type "string"';if(!Array.isArray(r.header))throw'invalid data type for "header" entry';if(!Array.isArray(r.data))throw'invalid data type for "data" entry';for(const s of r.header)if(typeof s!="string")throw"header(s) needs to be from type string";for(const s of r.data){if(!Array.isArray(s))throw'invalid type for "data" item';for(const l of s)if(typeof l!="string")throw"data item(s) needs to be from type string"}}this.uiStore.ui.set("metalSheetLists",i)})}onClickExport(){const t=new Date,e=t.getFullYear(),i=(t.getMonth()+1).toString().padStart(2,"0"),r=t.getDate().toString().padStart(2,"0"),s=`BlechListen_${e}-${i}-${r}.json`;ni(s,"text/json",JSON.stringify(this.uiStore.ui.get("metalSheetLists")))}};n(Mt,"register",()=>{C.register(),m.register(),b.register(),_.register(),customElements.define("pg-drawer-metal-sheet-lists",Mt)});let ie=Mt;const hi=a`
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
                <svg-recycle></svg-recycle>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,$t=class $t extends m{constructor(){super(),this.innerHTML=hi,this.ui={...this.ui,events:new v},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n($t,"regsiter",()=>{M.register(),m.register(),A.register(),k.register(),b.register(),S.register(),T.register(),x.register(),customElements.define("pg-drawer-item-vis",$t)});let tt=$t;const di=a`
    <ui-drawer-group title="Vis">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,Ht=class Ht extends C{constructor(){super(),this.innerHTML=di,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("vis",this.onVis.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this))}onVis(t){if(!t)return;const e=[...this.children].slice(1);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new tt;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("vis",s=>s.filter(l=>l.title!==i.title))}))}}onClickImport(){jt((e,i)=>{const r=p=>{const[g,c]=p.split(/[xX]/),u=parseFloat(g),y=parseFloat(c);return!u||!y?`${u}x${y}`:`${u>y?u:y}x${u<y?u:y}`},s=p=>{let g="",c="";for(let u=0;u<p.length;u++)if(p[u].match(/^[0-9]+["]?[xX][0-9]+["]?$/)){c=r(p[u]),p=p.slice(u+1);break}else g+=p[u]+" ";return{productName:g.trim(),format:r(c),newRest:p.map(u=>u.trim()).filter(u=>!!u)}},l=(p,g)=>{if(!g)return;const c={title:p,data:[]},u=g.split(`
`);for(let y=0;y<u.length;y++){if(!u[y])continue;let[$,...fe]=u[y].trim().replace(/\t/g," ").split(" ");$=$.trim();const{productName:Ot,format:le,newRest:Ft}=s(fe);if(!le)throw`missing format for "${Ot}" (lotto: "${$}") in vis (txt) data!`;if(!(Ft[0]||"").match(/^[0-9]+[,]?[0-9]*$/))throw`thickness not found for "${Ot}" with lotto "${$}"!`;const be=Ft.shift()||"",ve=Ft.join(" ");c.data.push({lotto:$,name:Ot,format:le,thickness:parseFloat(be.replaceAll(",",".")),stamp:ve})}return c},d=i.name.replace(/\.vis\.txt$/i,"").replace(/\.txt$/i,"").replace(/^vis[_-]/i,""),L=l(d,e);this.uiStore.ui.update("vis",p=>(p.unshift(L),p))})}};n(Ht,"register",()=>{C.register(),m.register(),b.register(),tt.register(),customElements.define("pg-drawer-vis",Ht)});let re=Ht;const pi=a`
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
                <svg-recycle></svg-recycle>
            </ui-icon-button>
        </ui-flex-grid-item>
    </ui-flex-grid-row>
`,Rt=class Rt extends m{constructor(){super(),this.innerHTML=pi,this.ui={...this.ui,events:new v},this.data=null}connectedCallback(){super.connectedCallback();const t=this.querySelector("ui-button"),e=this.querySelector("ui-icon-button");this.cleanup.add(t.ui.events.on("click",()=>{this.ui.events.dispatch("click",this.data)})),this.cleanup.add(e.ui.events.on("click",()=>{this.ui.events.dispatch("delete",this.data)}))}set(t){this.data=t,this.setText(t.title,null)}setText(t,e=null){const i=document.createElement("span");i.innerHTML=a` <ui-primary>${t}</ui-primary> `,e!==null&&(i.innerHTML+=a`<ui-secondary>${e}</ui-secondary>`),this.querySelector("ui-button").appendChild(i)}};n(Rt,"regsiter",()=>{M.register(),m.register(),A.register(),k.register(),b.register(),S.register(),T.register(),x.register(),customElements.define("pg-drawer-item-vis-data",Rt)});let et=Rt;const gi=`
    <ui-flex-grid-item>
        <ui-input
            name="title"
            type="text"
            title="Vis Data Title"
        ></ui-input>
    </ui-flex-grid-item>
`,qt=class qt extends X{constructor(){super(),this.appendChild((()=>{const t=new V;return t.ui.setGap("0.5rem"),t.innerHTML=gi,t})()),this.ui.setTitle("New Vis Data"),this.uiStore=document.querySelector("ui-store"),this.name=this.querySelector('[name="title"]'),this.createCancelButton(),this.createSubmitButton()}connectedCallback(){super.connectedCallback(),this.resets()}resets(){this.name&&(this.name.ui.setInvalid(!1),this.name.ui.setValue(""))}createCancelButton(){const t=new k;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="secondary">Cancel</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{this.ui.close()}),this.appendChild(t)}createSubmitButton(){const t=new k;t.slot="actions",t.innerHTML=`
            <ui-button variant="full" color="primary">Submit</ui-button>
        `,t.querySelector("ui-button").ui.events.on("click",()=>{if(!this.name.ui.getValue()){this.name.ui.setInvalid(!0);return}this.uiStore.ui.update("visData",i=>(i.unshift({title:this.name.ui.getValue(),data:[]}),i)),this.ui.close()}),this.appendChild(t)}};n(qt,"register",()=>{V.register(),k.register(),Gt.register(),b.register(),Z.register(),X.register(),customElements.define("new-vis-data-dialog",qt)});let it=qt;const mi=a`
    <ui-drawer-group title="Vis Data">
        <ui-drawer-group-item>
            <ui-button name="import" variant="full" color="primary" disabled>
                Import
            </ui-button>
        </ui-drawer-group-item>

        <ui-drawer-group-item>
            <ui-button name="new" variant="full" color="secondary" disabled>
                New Data
            </ui-button>
        </ui-drawer-group-item>
    </ui-drawer-group>
`,Bt=class Bt extends C{constructor(){super(),this.innerHTML=mi,this.uiStore=document.querySelector("ui-store"),this.stackLayout=document.querySelector("ui-stack-layout")}connectedCallback(){super.connectedCallback(),this.cleanup.add(this.uiStore.ui.on("visData",this.onVisData.bind(this),!0)),this.querySelector('ui-button[name="import"]').ui.events.on("click",this.onClickImport.bind(this)),this.querySelector("ui-button[name=new]").ui.events.on("click",this.onClickNewData.bind(this))}onVisData(t){if(!t)return;const e=[...this.children].slice(2);for(;e.length>0;)this.removeChild(e.pop());for(const i of t){const r=new et;r.set(i),r.cleanup.add(r.ui.events.on("click",()=>{this.stackLayout.ui.clearStack(),this.stackLayout.ui.setPage("vis-data"),document.querySelector("pg-drawer").ui.setOpen(!1)})),r.cleanup.add(r.ui.events.on("delete",()=>{this.uiStore.ui.update("visData",s=>s.filter(l=>l.title!==i.title))}))}}onClickImport(){jt(e=>{const i=JSON.parse(e);if(typeof(i==null?void 0:i.key)=="string"&&!(i!=null&&i.title)&&(i.title=i.key,delete i.key),typeof i.title!="string")throw'Nope, wrong data, "title" is missing!';if(!Array.isArray(i.data))throw'Nope, wrong data, "data" from type array is missing!';for(const r of i.data){if(typeof r.key!="string"&&typeof r.value!="string")throw"Nope, wrong data for entry, key/value pair missing!";if(r.lotto!==null&&typeof r.lotto!="string")throw'Nope, wrong data for entry, "lotto" is missing!';if(r.format!==null&&typeof r.format!="string")throw'Nope, wrong data for entry, "format" is missing!';if(r.thickness!==null&&typeof r.thickness!="number")throw'Nope, wrong data for entry, "thickness" is missing!';if(r.stamp!==null&&typeof r.stamp!="string")throw'Nope, wrong data for entry, "stamp" is missing!'}this.uiStore.ui.update("visData",r=>(r.unshift(i),r))})}onClickNewData(){const t=new it;document.body.appendChild(t),t.ui.events.on("close",()=>{document.body.removeChild(t)}),t.ui.open()}};n(Bt,"register",()=>{C.register(),m.register(),b.register(),et.register(),it.register(),customElements.define("pg-drawer-vis-data",Bt)});let se=Bt;const fi=a`
    <ui-drawer open>
        <div
            style="
                font-size: 0.85rem;
                font-variation-settings: var(--ui-input-fontVariation);
            "
        >
            ${si}
        </div>

        <pg-drawer-alert-lists></pg-drawer-alert-lists>
        <pg-drawer-metal-sheet-lists></pg-drawer-metal-sheet-lists>
        <pg-drawer-vis></pg-drawer-vis>
        <pg-drawer-vis-data></pg-drawer-vis-data>
    </ui-drawer>
`,Nt=class Nt extends J{constructor(){super(),this.innerHTML=fi}getGroup(t){return this.querySelector(`pg-drawer-${t.toString()}`)}};n(Nt,"register",()=>{J.register(),ee.register(),ie.register(),re.register(),se.register(),customElements.define("pg-drawer",Nt)});let oe=Nt;const bi=a`
    <ui-store local-storage-prefix="pg-vis:" enable-local-storage></ui-store>
    <ui-theme-handler auto></ui-theme-handler>

    <ui-container style="width: 100%; height: 100%;">
        <ui-stack-layout style="--search-bar-height: 0rem;"></ui-stack-layout>
    </ui-container>

    <pg-app-bar></pg-app-bar>
    <pg-drawer></pg-drawer>
`,zt=class zt extends HTMLElement{constructor(){super(),this.innerHTML=bi,this.cleanup=new h,this.uiStore=this.querySelector("ui-store"),this.createStore(),this.stackLayout=this.querySelector("ui-stack-layout"),this.createStackLayout(),this.pgAppBar=this.querySelector("pg-app-bar"),this.pgDrawer=this.querySelector("pg-drawer")}connectedCallback(){this.pgDrawer.ui.setOpen(!0),this.cleanup.add(this.uiStore.ui.on("appBarTitle",this.onAppBarTitle.bind(this),!0)),this.cleanup.add(this.uiStore.ui.on("share",this.onShare.bind(this),!0)),this.setupNoPage()}disconnectedCallback(){this.cleanup.run()}createStore(){this.uiStore.ui.set("alertLists",[],!0),this.uiStore.ui.set("metalSheetLists",[],!0),this.uiStore.ui.set("vis",[],!0),this.uiStore.ui.set("visData",[],!0),this.uiStore.ui.set("appBarTitle","",!1),this.uiStore.ui.set("share",null,!1),this.uiStore.ui.set("search",{active:!1},!1)}createStackLayout(){this.stackLayout.ui.events.on("change",({newPage:t})=>{if(this.stackLayout.ui.stackSize()>1?this.pgAppBar.itemBack.ui.enable():this.pgAppBar.itemBack.ui.disable(),!t){this.setupNoPage();return}switch(t.ui.getName()){case"alert-lists":this.setupAlertListsPage();break;case"metal-sheet-lists":break;case"vis":break;case"vis-data":break;case"alert":this.setupAlertPage();break;default:this.setupNoPage()}}),this.stackLayout.ui.registerPage("alert-lists",()=>new Q),this.stackLayout.ui.registerPage("metal-sheet-lists",()=>new D),this.stackLayout.ui.registerPage("vis",()=>new G),this.stackLayout.ui.registerPage("vis-data",()=>new I)}setupAlertPage(){this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.disable()}setupAlertListsPage(){this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.enable()}setupNoPage(){this.uiStore.ui.set("appBarTitle","PG: Vis"),this.pgAppBar.itemShare.ui.disable(),this.pgAppBar.itemSearch.ui.disable()}async onAppBarTitle(t){this.pgAppBar.itemTitle.ui.getItem().innerHTML=t||""}async onShare(t){t!==null?this.pgAppBar.itemShare.ui.enable():this.pgAppBar.itemShare.ui.disable()}};n(zt,"register",()=>{M.register(),Z.register(),Ut.register(),A.register(),k.register(),Xt.register(),Y.register(),J.register(),C.register(),m.register(),b.register(),S.register(),T.register(),x.register(),_t.register(),oe.register(),Q.register(),D.register(),G.register(),I.register(),customElements.define("pg-app",zt)});let ne=zt;Le({onRegistered(o){setTimeout(async()=>{try{await o.update()}catch(t){console.warn(`Auto update failed: ${t}`)}})}});ne.register();
