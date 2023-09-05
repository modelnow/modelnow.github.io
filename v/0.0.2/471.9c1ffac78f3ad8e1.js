"use strict";(self.webpackChunk_modelnow_proto=self.webpackChunk_modelnow_proto||[]).push([[471],{2655:(C,g,l)=>{l.d(g,{k:()=>p});var a=l(9059),r=l(2036),m=l(5879),h=l(4221);let p=(()=>{class d{constructor(u){this.store=u,this.state=this.store.selectSignal(a.W.selectLocationState),this.state$=this.store.select(a.W.selectLocationState),this.current=this.store.selectSignal(a.W.selectCurrent),this.current$=this.store.select(a.W.selectCurrent),this.currentLabel=this.store.selectSignal(a.W.selectCurrentLabel),this.currentLabel$=this.store.select(a.W.selectCurrentLabel),this.error=this.store.selectSignal(a.W.selectError),this.error$=this.store.select(a.W.selectError),this.progressing=this.store.selectSignal(a.W.selectProgressing),this.progressing$=this.store.select(a.W.selectProgressing),this.query=this.store.selectSignal(a.W.selectQuery),this.query$=this.store.select(a.W.selectQuery),this.recents=this.store.selectSignal(a.W.selectRecents),this.recents$=this.store.select(a.W.selectRecents),this.result=this.store.selectSignal(a.W.selectResult),this.result$=this.store.select(a.W.selectResult)}cancelSearch(){this.store.dispatch(r.L.cancelSearch())}confirm({feat:u}){this.store.dispatch(r.L.confirm({feat:u}))}geolocate(){this.store.dispatch(r.L.geolocate())}search({query:u}){u!==this.query()&&this.store.dispatch(r.L.search({query:u}))}}return d.\u0275fac=function(u){return new(u||d)(m.LFG(h.yh))},d.\u0275prov=m.Yz7({token:d,factory:d.\u0275fac,providedIn:"root"}),d})()},1137:(C,g,l)=>{l.d(g,{x:()=>r});var a=l(2495);function r(){return function(h,p){const d=Object.getOwnPropertyDescriptor(h,p),f=d?.set;if(f)return{...d,set(v){f.call(this,(0,a.Ig)(v))}};const u=`_${p}`;return Object.defineProperty(h,u,{enumerable:!1,configurable:!0,writable:!0}),{enumerable:!1,configurable:!0,get(){return this[u]},set(v){this[u]=(0,a.Ig)(v)}}}}},6404:(C,g,l)=>{l.d(g,{Y:()=>r});var a=l(2495);function r(){return function(h,p){const d=Object.getOwnPropertyDescriptor(h,p),f=d?.set;if(f)return{...d,set(v){f.call(this,(0,a.su)(v))}};const u=`_${p}`;return Object.defineProperty(h,u,{enumerable:!1,configurable:!0,writable:!0}),{enumerable:!1,configurable:!0,get(){return this[u]},set(v){this[u]=(0,a.su)(v)}}}}},7667:(C,g,l)=>{l.d(g,{l:()=>m});var a=l(5879),r=l(8341);let m=(()=>{class h{get icon(){return this._icon}set icon(d){this.setIcon(d)}constructor(d,f){this.elementRef=d,this.iconRegistry=f,this.svgElement=null}ngOnDestroy(){this.removeSvgElement()}setIcon(d){d!==this._icon&&(this.removeSvgElement(),d&&(this.svgElement=this.iconRegistry.getSvg(d),this.elementRef.nativeElement.appendChild(this.svgElement)),this._icon=d)}removeSvgElement(){this.svgElement?.parentElement&&this.elementRef.nativeElement.removeChild(this.svgElement),this.svgElement=null}}return h.\u0275fac=function(d){return new(d||h)(a.Y36(a.SBq),a.Y36(r.g))},h.\u0275dir=a.lG2({type:h,selectors:[["","ui-icon",""]],hostAttrs:[1,"ui-icon"],inputs:{icon:["ui-icon","icon"]},exportAs:["uiIcon"],standalone:!0}),h})()},372:(C,g,l)=>{l.d(g,{N:()=>b});var a=l(7582),r=l(5879),m=l(2831);l(6028);var k=l(2495);class ee{constructor(e,t,i,s=!1){this._renderer=e,this.element=t,this.config=i,this._animationForciblyDisabledThroughCss=s,this.state=3}fadeOut(){this._renderer.fadeOutRipple(this)}}const x=(0,m.i$)({passive:!0,capture:!0});class te{constructor(){this._events=new Map,this._delegateEventHandler=e=>{const t=(0,m.sA)(e);t&&this._events.get(e.type)?.forEach((i,s)=>{(s===t||s.contains(t))&&i.forEach(o=>o.handleEvent(e))})}}addHandler(e,t,i,s){const o=this._events.get(t);if(o){const c=o.get(i);c?c.add(s):o.set(i,new Set([s]))}else this._events.set(t,new Map([[i,new Set([s])]])),e.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,x)})}removeHandler(e,t,i){const s=this._events.get(e);if(!s)return;const o=s.get(t);o&&(o.delete(i),0===o.size&&s.delete(t),0===s.size&&(this._events.delete(e),document.removeEventListener(e,this._delegateEventHandler,x)))}}const R={enterDuration:225,exitDuration:150},S=(0,m.i$)({passive:!0,capture:!0}),w=["mousedown","touchstart"],N=["mouseup","mouseleave","touchend","touchcancel"];class I{constructor(e,t,i,s){this._target=e,this._ngZone=t,this._platform=s,this._isPointerDown=!1,this._activeRipples=new Map,this._pointerUpEventsRegistered=!1,s.isBrowser&&(this._containerElement=(0,k.fI)(i))}fadeInRipple(e,t,i={}){const s=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),o={...R,...i.animation};i.centered&&(e=s.left+s.width/2,t=s.top+s.height/2);const c=i.radius||function ne(n,e,t){const i=Math.max(Math.abs(n-t.left),Math.abs(n-t.right)),s=Math.max(Math.abs(e-t.top),Math.abs(e-t.bottom));return Math.sqrt(i*i+s*s)}(e,t,s),M=e-s.left,U=t-s.top,D=o.enterDuration,_=document.createElement("div");_.classList.add("mat-ripple-element"),_.style.left=M-c+"px",_.style.top=U-c+"px",_.style.height=2*c+"px",_.style.width=2*c+"px",null!=i.color&&(_.style.backgroundColor=i.color),_.style.transitionDuration=`${D}ms`,this._containerElement.appendChild(_);const ae=window.getComputedStyle(_),ce=ae.transitionDuration,B="none"===ae.transitionProperty||"0s"===ce||"0s, 0s"===ce||0===s.width&&0===s.height,E=new ee(this,_,i,B);_.style.transform="scale3d(1, 1, 1)",E.state=0,i.persistent||(this._mostRecentTransientRipple=E);let le=null;return!B&&(D||o.exitDuration)&&this._ngZone.runOutsideAngular(()=>{const de=()=>this._finishRippleTransition(E),ue=()=>this._destroyRipple(E);_.addEventListener("transitionend",de),_.addEventListener("transitioncancel",ue),le={onTransitionEnd:de,onTransitionCancel:ue}}),this._activeRipples.set(E,le),(B||!D)&&this._finishRippleTransition(E),E}fadeOutRipple(e){if(2===e.state||3===e.state)return;const t=e.element,i={...R,...e.config.animation};t.style.transitionDuration=`${i.exitDuration}ms`,t.style.opacity="0",e.state=2,(e._animationForciblyDisabledThroughCss||!i.exitDuration)&&this._finishRippleTransition(e)}fadeOutAll(){this._getActiveRipples().forEach(e=>e.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(e=>{e.config.persistent||e.fadeOut()})}setupTriggerEvents(e){const t=(0,k.fI)(e);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,w.forEach(i=>{I._eventManager.addHandler(this._ngZone,i,t,this)}))}handleEvent(e){"mousedown"===e.type?this._onMousedown(e):"touchstart"===e.type?this._onTouchStart(e):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{N.forEach(t=>{this._triggerElement.addEventListener(t,this,S)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(e){0===e.state?this._startFadeOutTransition(e):2===e.state&&this._destroyRipple(e)}_startFadeOutTransition(e){const t=e===this._mostRecentTransientRipple,{persistent:i}=e.config;e.state=1,!i&&(!t||!this._isPointerDown)&&e.fadeOut()}_destroyRipple(e){const t=this._activeRipples.get(e)??null;this._activeRipples.delete(e),this._activeRipples.size||(this._containerRect=null),e===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),e.state=3,null!==t&&(e.element.removeEventListener("transitionend",t.onTransitionEnd),e.element.removeEventListener("transitioncancel",t.onTransitionCancel)),e.element.remove()}_onMousedown(e){const t=function G(n){return 0===n.buttons||0===n.offsetX&&0===n.offsetY}(e),i=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+800;!this._target.rippleDisabled&&!t&&!i&&(this._isPointerDown=!0,this.fadeInRipple(e.clientX,e.clientY,this._target.rippleConfig))}_onTouchStart(e){if(!this._target.rippleDisabled&&!function z(n){const e=n.touches&&n.touches[0]||n.changedTouches&&n.changedTouches[0];return!(!e||-1!==e.identifier||null!=e.radiusX&&1!==e.radiusX||null!=e.radiusY&&1!==e.radiusY)}(e)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;const t=e.changedTouches;for(let i=0;i<t.length;i++)this.fadeInRipple(t[i].clientX,t[i].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(e=>{!e.config.persistent&&(1===e.state||e.config.terminateOnPointerUp&&0===e.state)&&e.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){const e=this._triggerElement;e&&(w.forEach(t=>I._eventManager.removeHandler(t,e,this)),this._pointerUpEventsRegistered&&N.forEach(t=>e.removeEventListener(t,this,S)))}}I._eventManager=new te;const se=new r.OlP("mat-ripple-global-options");var P=l(1137),jt=l(6404);class b{get disabled(){return this._disabled}set disabled(e){e&&this.fadeOutAllNonPersistent(),this._disabled=e,this._setupTriggerEventsIfEnabled()}get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(e){this._trigger=e,this._setupTriggerEventsIfEnabled()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:{...this._globalOptions.animation,..."NoopAnimations"===this._animationMode?{enterDuration:0,exitDuration:0}:{},...this.animation},terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}constructor(e,t,i,s,o){this._elementRef=e,this._animationMode=o,this._disabled=!1,this.radius=0,this._isInitialized=!1,this._globalOptions=s||{},this._rippleRenderer=new I(this,t,e,i)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}launch(e,t,i){let s;typeof e<"u"&&("number"==typeof e?s=e:i=e);const o=this._elementRef.nativeElement.getBoundingClientRect();return typeof s>"u"&&(s=o.width/2),typeof t>"u"&&(t=o.height/2),s+=o.x,this._rippleRenderer.fadeInRipple(s,t+=o.y,{...this.rippleConfig,...i})}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}}b.\u0275fac=function(e){return new(e||b)(r.Y36(r.SBq),r.Y36(r.R0b),r.Y36(m.t4),r.Y36(se,8),r.Y36(r.QbO,8))},b.\u0275dir=r.lG2({type:b,selectors:[["","ui-ripple",""]],hostAttrs:[1,"ui-ripple"],hostVars:4,hostBindings:function(e,t){2&e&&r.ekj("ui-ripple-centered",t.centered)("ui-ripple-unbounded",t.unbounded)},inputs:{animation:["ui-ripple-animation","animation"],centered:["ui-ripple-centered","centered"],color:["ui-ripple-color","color"],disabled:["ui-ripple-disabled","disabled"],radius:["ui-ripple-radius","radius"],trigger:["ui-ripple-trigger","trigger"],unbounded:["ui-ripple-unbounded","unbounded"]},exportAs:["uiRipple"],standalone:!0}),(0,a.gn)([(0,P.x)()],b.prototype,"centered",void 0),(0,a.gn)([(0,P.x)()],b.prototype,"disabled",null),(0,a.gn)([(0,jt.Y)()],b.prototype,"radius",void 0),(0,a.gn)([(0,P.x)()],b.prototype,"unbounded",void 0)},6028:(C,g,l)=>{l.d(g,{JU:()=>d,K5:()=>p,MW:()=>Q,b2:()=>oe,jx:()=>f,zL:()=>u});const p=13,d=16,f=17,u=18,Q=91,oe=224}}]);