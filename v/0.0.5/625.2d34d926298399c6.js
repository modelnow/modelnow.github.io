"use strict";(self.webpackChunk_modelnow_proto=self.webpackChunk_modelnow_proto||[]).push([[625],{1137:(X,T,d)=>{d.d(T,{x:()=>a});var _=d(2495);function a(){return function(m,v){const I=Object.getOwnPropertyDescriptor(m,v),C=I?.set;if(C)return{...I,set(D){C.call(this,(0,_.Ig)(D))}};const f=`_${v}`;return Object.defineProperty(m,f,{enumerable:!1,configurable:!0,writable:!0}),{enumerable:!1,configurable:!0,get(){return this[f]},set(D){this[f]=(0,_.Ig)(D)}}}}},9625:(X,T,d)=>{d.d(T,{N:()=>p});var _=d(7582),a=d(5879),u=d(2831);function P(s){return 0===s.buttons||0===s.offsetX&&0===s.offsetY}function U(s){const e=s.touches&&s.touches[0]||s.changedTouches&&s.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}d(6028);var b=d(2495);class j{constructor(e,t,i,n=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=n,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const H=(0,u.i$)({passive:!0,capture:!0});class ce{constructor(){this._events=new Map,this._delegateEventHandler=e=>{const t=(0,u.sA)(e);t&&this._events.get(e.type)?.forEach((i,n)=>{(n===t||n.contains(t))&&i.forEach(o=>o.handleEvent(e))})}}addHandler(e,t,i,n){const o=this._events.get(t);if(o){const r=o.get(i);r?r.add(n):o.set(i,new Set([n]))}else this._events.set(t,new Map([[i,new Set([n])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,H)})}removeHandler(e,t,i){const n=this._events.get(e);if(!n)return;const o=n.get(t);o&&(o.delete(i),0===o.size&&n.delete(t),0===n.size&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,H)))}}const V={enterDuration:225,exitDuration:150},K=(0,u.i$)({passive:!0,capture:!0}),$=["mousedown","touchstart"],Y=["mouseup","mouseleave","touchend","touchcancel"];class O{constructor(e,t,i,n){this._target=e,this._ngZone=t,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=(0,b.fI)(i))}fadeInRipple(e,t,i={}){const n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o={...V,...i.animation};i.centered&&(e=n.left+n.width/2,t=n.top+n.height/2);const r=i.radius||function de(s,e,t){const i=Math.max(Math.abs(s-t.left),Math.abs(s-t.right)),n=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+n*n)}(e,t,n),h=e-n.left,F=t-n.top,g=o.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=h-r+"px",c.style.top=F-r+"px",c.style.height=2*r+"px",c.style.width=2*r+"px",null!=i.color&&(c.style.backgroundColor=i.color),c.style.transitionDuration=`${g}ms`,this._containerElement.appendChild(c);const R=window.getComputedStyle(c),x=R.transitionDuration,M="none"===R.transitionProperty||"0s"===x||"0s, 0s"===x||0===n.width&&0===n.height,l=new j(this,c,i,M);c.style.transform="scale3d(1, 1, 1)",l.state=0,i.persistent||(this._mostRecentTransientRipple=l);let w=null;return!M&&(g||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const N=()=>this._finishRippleTransition(l),S=()=>this._destroyRipple(l);c.addEventListener("transitionend",N),c.addEventListener("transitioncancel",S),w={onTransitionEnd:N,onTransitionCancel:S}}),this._activeRipples.set(l,w),(M||!g)&&this._finishRippleTransition(l),l}fadeOutRipple(e){if(2===e.state||3===e.state)return;const t=e.element,i={...V,...e.config.animation};t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=(0,b.fI)(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,$.forEach(i=>{O._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{Y.forEach(t=>{this._triggerElement.addEventListener(t,this,K)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){0===e.state?this._startFadeOutTransition(e):2===e.state&&this._destroyRipple(e)}_startFadeOutTransition(e){const t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=1,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){const t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,null!==t&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel)),e.element.remove()}_onMousedown(e){const t=P(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!U(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{!e.config.persistent&&(1===e.state||e.config.terminateOnPointerUp&&0===e.state)&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const e=this._triggerElement;e&&($.forEach(t=>O._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&Y.forEach(t=>e.removeEventListener(t,this,K)))}}O._eventManager=new ce;const ue=new a.OlP("mat-ripple-global-options");var G=d(1137);const pe=(0,u.i$)({passive:!0,capture:!0}),_e={enterDuration:225,exitDuration:150},fe=(0,u.i$)({passive:!0,capture:!0}),ge=["mousedown","touchstart"],ve=["mouseup","mouseleave","touchend","touchcancel"];class k{constructor(e,t,i,n){this._target=e,this._ngZone=t,this._platform=n,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,n.isBrowser&&(this._containerElement=(0,b.fI)(i))}fadeInRipple(e,t,i={}){const n=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o={..._e,...i.animation};i.centered&&(e=n.left+n.width/2,t=n.top+n.height/2);const r=i.radius||function Xt(s,e,t){const i=Math.max(Math.abs(s-t.left),Math.abs(s-t.right)),n=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+n*n)}(e,t,n),h=e-n.left,F=t-n.top,g=o.enterDuration,c=document.createElement("div");c.classList.add("mat-ripple-element"),c.style.left=h-r+"px",c.style.top=F-r+"px",c.style.height=2*r+"px",c.style.width=2*r+"px",null!=i.color&&(c.style.backgroundColor=i.color),c.style.transitionDuration=`${g}ms`,this._containerElement.appendChild(c);const R=window.getComputedStyle(c),x=R.transitionDuration,M="none"===R.transitionProperty||"0s"===x||"0s, 0s"===x||0===n.width&&0===n.height,l=new j(this,c,i,M);c.style.transform="scale3d(1, 1, 1)",l.state=0,i.persistent||(this._mostRecentTransientRipple=l);let w=null;return!M&&(g||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const N=()=>this._finishRippleTransition(l),S=()=>this._destroyRipple(l);c.addEventListener("transitionend",N),c.addEventListener("transitioncancel",S),w={onTransitionEnd:N,onTransitionCancel:S}}),this._activeRipples.set(l,w),(M||!g)&&this._finishRippleTransition(l),l}fadeOutRipple(e){if(2===e.state||3===e.state)return;const t=e.element,i={..._e,...e.config.animation};t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=(0,b.fI)(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,ge.forEach(i=>{k._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{ve.forEach(t=>{this._triggerElement.addEventListener(t,this,fe)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){0===e.state?this._startFadeOutTransition(e):2===e.state&&this._destroyRipple(e)}_startFadeOutTransition(e){const t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=1,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){const t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,null!==t&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel)),e.element.remove()}_onMousedown(e){const t=P(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!U(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;if(t)for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{!e.config.persistent&&(1===e.state||e.config.terminateOnPointerUp&&0===e.state)&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const e=this._triggerElement;e&&(ge.forEach(t=>k._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&ve.forEach(t=>e.removeEventListener(t,this,fe)))}}k._eventManager=new class Gt{constructor(){this._events=new Map,this._delegateEventHandler=e=>{const t=(0,u.sA)(e);t&&this._events.get(e.type)?.forEach((i,n)=>{(n===t||n.contains(t))&&i.forEach(o=>o.handleEvent(e))})}}addHandler(e,t,i,n){const o=this._events.get(t);if(o){const r=o.get(i);r?r.add(n):o.set(i,new Set([n]))}else this._events.set(t,new Map([[i,new Set([n])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,pe)})}removeHandler(e,t,i){const n=this._events.get(e);if(!n)return;const o=n.get(t);o&&(o.delete(i),0===o.size&&n.delete(t),0===n.size&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,pe)))}};class p{get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}constructor(e,t,i,n,o){this._elementRef=e,this._animationMode=o,this._disabled=!1,this.radius=0,this._isInitialized=!1,this._globalOptions=n||{},this._rippleRenderer=new k(this,t,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}launch(e,t,i){let n;typeof e<"u"&&("number"==typeof e?n=e:i=e);const o=this._elementRef.nativeElement.getBoundingClientRect();return typeof n>"u"&&(n=o.width/2),typeof t>"u"&&(t=o.height/2),n+=o.x,this._rippleRenderer.fadeInRipple(n,t+=o.y,{...this.rippleConfig,...i})}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}}p.\u0275fac=function(e){return new(e||p)(a.Y36(a.SBq),a.Y36(a.R0b),a.Y36(u.t4),a.Y36(ue,8),a.Y36(a.QbO,8))},p.\u0275dir=a.lG2({type:p,selectors:[["","ui-ripple",""]],hostAttrs:[1,"ui-ripple"],hostVars:4,hostBindings:function(e,t){2&e&&a.ekj("ui-ripple-centered",t.centered)("ui-ripple-unbounded",t.unbounded)},inputs:{animation:["ui-ripple-animation","animation"],centered:["ui-ripple-centered","centered"],color:["ui-ripple-color","color"],disabled:["ui-ripple-disabled","disabled"],radius:["ui-ripple-radius","radius"],trigger:["ui-ripple-trigger","trigger"],unbounded:["ui-ripple-unbounded","unbounded"]},exportAs:["uiRipple"],standalone:!0}),(0,_.gn)([(0,G.x)()],p.prototype,"centered",void 0),(0,_.gn)([(0,G.x)()],p.prototype,"disabled",null),(0,_.gn)([function Wt(){return function(e,t){const i=Object.getOwnPropertyDescriptor(e,t),n=i?.set;if(n)return{...i,set(r){n.call(this,(0,b.su)(r))}};const o=`_${t}`;return Object.defineProperty(e,o,{enumerable:!1,configurable:!0,writable:!0}),{enumerable:!1,configurable:!0,get(){return this[o]},set(r){this[o]=(0,b.su)(r)}}}}()],p.prototype,"radius",void 0),(0,_.gn)([(0,G.x)()],p.prototype,"unbounded",void 0)},6028:(X,T,d)=>{d.d(T,{JU:()=>I,K5:()=>v,MW:()=>oe,b2:()=>he,jx:()=>C,zL:()=>f});const v=13,I=16,C=17,f=18,oe=91,he=224}}]);