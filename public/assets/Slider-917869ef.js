import{r as x,az as We,$ as V,a0 as n,aA as v,aB as P,a1 as se,aC as Ge,aD as qe,d as Je,a2 as Qe,a6 as ve,a3 as Ze,e as w,a4 as ea,a5 as aa,w as de,P as oa,a7 as ce,a8 as ta,a9 as G,aa as h,ab as na,ac as ra,aE as la,ae as ia,T as sa,aF as da,aG as j,aH as N,at as W,aj as ue}from"./index-12f140ef.js";function he(t){return window.TouchEvent&&t instanceof window.TouchEvent}function fe(){const t=x(new Map),i=T=>p=>{t.value.set(T,p)};return We(()=>t.value.clear()),[t,i]}const ca=V([n("slider",`
 display: block;
 padding: calc((var(--n-handle-size) - var(--n-rail-height)) / 2) 0;
 position: relative;
 z-index: 0;
 width: 100%;
 cursor: pointer;
 user-select: none;
 -webkit-user-select: none;
 `,[v("reverse",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(50%, -50%);
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(50%, -50%);
 `)]),v("vertical",[n("slider-handles",[n("slider-handle-wrapper",`
 transform: translate(-50%, -50%);
 `)]),n("slider-marks",[n("slider-mark",`
 transform: translateY(calc(-50% + var(--n-dot-height) / 2));
 `)]),n("slider-dots",[n("slider-dot",`
 transform: translateX(-50%) translateY(0);
 `)])])]),v("vertical",`
 padding: 0 calc((var(--n-handle-size) - var(--n-rail-height)) / 2);
 width: var(--n-rail-width-vertical);
 height: 100%;
 `,[n("slider-handles",`
 top: calc(var(--n-handle-size) / 2);
 right: 0;
 bottom: calc(var(--n-handle-size) / 2);
 left: 0;
 `,[n("slider-handle-wrapper",`
 top: unset;
 left: 50%;
 transform: translate(-50%, 50%);
 `)]),n("slider-rail",`
 height: 100%;
 `,[P("fill",`
 top: unset;
 right: 0;
 bottom: unset;
 left: 0;
 `)]),v("with-mark",`
 width: var(--n-rail-width-vertical);
 margin: 0 32px 0 8px;
 `),n("slider-marks",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 22px;
 font-size: var(--n-mark-font-size);
 `,[n("slider-mark",`
 transform: translateY(50%);
 white-space: nowrap;
 `)]),n("slider-dots",`
 top: calc(var(--n-handle-size) / 2);
 right: unset;
 bottom: calc(var(--n-handle-size) / 2);
 left: 50%;
 `,[n("slider-dot",`
 transform: translateX(-50%) translateY(50%);
 `)])]),v("disabled",`
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `,[n("slider-handle",`
 cursor: not-allowed;
 `)]),v("with-mark",`
 width: 100%;
 margin: 8px 0 32px 0;
 `),V("&:hover",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),v("active",[n("slider-rail",{backgroundColor:"var(--n-rail-color-hover)"},[P("fill",{backgroundColor:"var(--n-fill-color-hover)"})]),n("slider-handle",{boxShadow:"var(--n-handle-box-shadow-hover)"})]),n("slider-marks",`
 position: absolute;
 top: 18px;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[n("slider-mark",`
 position: absolute;
 transform: translateX(-50%);
 white-space: nowrap;
 `)]),n("slider-rail",`
 width: 100%;
 position: relative;
 height: var(--n-rail-height);
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 border-radius: calc(var(--n-rail-height) / 2);
 `,[P("fill",`
 position: absolute;
 top: 0;
 bottom: 0;
 border-radius: calc(var(--n-rail-height) / 2);
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-fill-color);
 `)]),n("slider-handles",`
 position: absolute;
 top: 0;
 right: calc(var(--n-handle-size) / 2);
 bottom: 0;
 left: calc(var(--n-handle-size) / 2);
 `,[n("slider-handle-wrapper",`
 outline: none;
 position: absolute;
 top: 50%;
 transform: translate(-50%, -50%);
 cursor: pointer;
 display: flex;
 `,[n("slider-handle",`
 height: var(--n-handle-size);
 width: var(--n-handle-size);
 border-radius: 50%;
 overflow: hidden;
 transition: box-shadow .2s var(--n-bezier), background-color .3s var(--n-bezier);
 background-color: var(--n-handle-color);
 box-shadow: var(--n-handle-box-shadow);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-hover);
 `)]),V("&:focus",[n("slider-handle",`
 box-shadow: var(--n-handle-box-shadow-focus);
 `,[V("&:hover",`
 box-shadow: var(--n-handle-box-shadow-active);
 `)])])])]),n("slider-dots",`
 position: absolute;
 top: 50%;
 left: calc(var(--n-handle-size) / 2);
 right: calc(var(--n-handle-size) / 2);
 `,[v("transition-disabled",[n("slider-dot","transition: none;")]),n("slider-dot",`
 transition:
 border-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 transform: translate(-50%, -50%);
 height: var(--n-dot-height);
 width: var(--n-dot-width);
 border-radius: var(--n-dot-border-radius);
 overflow: hidden;
 box-sizing: border-box;
 border: var(--n-dot-border);
 background-color: var(--n-dot-color);
 `,[v("active","border: var(--n-dot-border-active);")])])]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[se()]),n("slider-handle-indicator",`
 font-size: var(--n-font-size);
 padding: 6px 10px;
 border-radius: var(--n-indicator-border-radius);
 color: var(--n-indicator-text-color);
 background-color: var(--n-indicator-color);
 box-shadow: var(--n-indicator-box-shadow);
 `,[v("top",`
 margin-bottom: 12px;
 `),v("right",`
 margin-left: 12px;
 `),v("bottom",`
 margin-top: 12px;
 `),v("left",`
 margin-right: 12px;
 `),se()]),Ge(n("slider",[n("slider-dot","background-color: var(--n-dot-color-modal);")])),qe(n("slider",[n("slider-dot","background-color: var(--n-dot-color-popover);")]))]),ua=0,ha=Object.assign(Object.assign({},ve.props),{to:G.propTo,defaultValue:{type:[Number,Array],default:0},marks:Object,disabled:{type:Boolean,default:void 0},formatTooltip:Function,keyboard:{type:Boolean,default:!0},min:{type:Number,default:0},max:{type:Number,default:100},step:{type:[Number,String],default:1},range:Boolean,value:[Number,Array],placement:String,showTooltip:{type:Boolean,default:void 0},tooltip:{type:Boolean,default:!0},vertical:Boolean,reverse:Boolean,"onUpdate:value":[Function,Array],onUpdateValue:[Function,Array]}),va=Je({name:"Slider",props:ha,setup(t){const{mergedClsPrefixRef:i,namespaceRef:T,inlineThemeDisabled:p}=Qe(t),f=ve("Slider","-slider",ca,da,t,i),d=x(null),[M,C]=fe(),[me,be]=fe(),ge=x(new Set),q=Ze(t),{mergedDisabledRef:D}=q,J=w(()=>{const{step:e}=t;if(e<=0||e==="mark")return 0;const a=e.toString();let o=0;return a.includes(".")&&(o=a.length-a.indexOf(".")-1),o}),U=x(t.defaultValue),we=ea(t,"value"),O=aa(we,U),m=w(()=>{const{value:e}=O;return(t.range?e:[e]).map(ne)}),Q=w(()=>m.value.length>2),pe=w(()=>t.placement===void 0?t.vertical?"right":"top":t.placement),Z=w(()=>{const{marks:e}=t;return e?Object.keys(e).map(parseFloat):null}),b=x(-1),ee=x(-1),y=x(-1),R=x(!1),$=x(!1),_=w(()=>{const{vertical:e,reverse:a}=t;return e?a?"top":"bottom":a?"right":"left"}),xe=w(()=>{if(Q.value)return;const e=m.value,a=B(t.range?Math.min(...e):t.min),o=B(t.range?Math.max(...e):e[0]),{value:r}=_;return t.vertical?{[r]:`${a}%`,height:`${o-a}%`}:{[r]:`${a}%`,width:`${o-a}%`}}),ke=w(()=>{const e=[],{marks:a}=t;if(a){const o=m.value.slice();o.sort((c,u)=>c-u);const{value:r}=_,{value:l}=Q,{range:s}=t,g=l?()=>!1:c=>s?c>=o[0]&&c<=o[o.length-1]:c<=o[0];for(const c of Object.keys(a)){const u=Number(c);e.push({active:g(u),label:a[c],style:{[r]:`${B(u)}%`}})}}return e});function ye(e,a){const o=B(e),{value:r}=_;return{[r]:`${o}%`,zIndex:a===b.value?1:0}}function ae(e){return t.showTooltip||y.value===e||b.value===e&&R.value}function Re(e){return R.value?!(b.value===e&&ee.value===e):!0}function ze(e){var a;~e&&(b.value=e,(a=M.value.get(e))===null||a===void 0||a.focus())}function Se(){me.value.forEach((e,a)=>{ae(a)&&e.syncPosition()})}function oe(e){const{"onUpdate:value":a,onUpdateValue:o}=t,{nTriggerFormInput:r,nTriggerFormChange:l}=q;o&&ue(o,e),a&&ue(a,e),U.value=e,r(),l()}function te(e){const{range:a}=t;if(a){if(Array.isArray(e)){const{value:o}=m;e.join()!==o.join()&&oe(e)}}else Array.isArray(e)||m.value[0]!==e&&oe(e)}function L(e,a){if(t.range){const o=m.value.slice();o.splice(a,1,e),te(o)}else te(e)}function K(e,a,o){const r=o!==void 0;o||(o=e-a>0?1:-1);const l=Z.value||[],{step:s}=t;if(s==="mark"){const u=I(e,l.concat(a),r?o:void 0);return u?u.value:a}if(s<=0)return a;const{value:g}=J;let c;if(r){const u=Number((a/s).toFixed(g)),k=Math.floor(u),X=u>k?k:k-1,Y=u<k?k:k+1;c=I(a,[Number((X*s).toFixed(g)),Number((Y*s).toFixed(g)),...l],o)}else{const u=Ce(e);c=I(e,[...l,u])}return c?ne(c.value):a}function ne(e){return Math.min(t.max,Math.max(t.min,e))}function B(e){const{max:a,min:o}=t;return(e-o)/(a-o)*100}function Te(e){const{max:a,min:o}=t;return o+(a-o)*e}function Ce(e){const{step:a,min:o}=t;if(a<=0||a==="mark")return e;const r=Math.round((e-o)/a)*a+o;return Number(r.toFixed(J.value))}function I(e,a=Z.value,o){if(!(a!=null&&a.length))return null;let r=null,l=-1;for(;++l<a.length;){const s=a[l]-e,g=Math.abs(s);(o===void 0||s*o>0)&&(r===null||g<r.distance)&&(r={index:l,distance:g,value:a[l]})}return r}function re(e){const a=d.value;if(!a)return;const o=he(e)?e.touches[0]:e,r=a.getBoundingClientRect();let l;return t.vertical?l=(r.bottom-o.clientY)/r.height:l=(o.clientX-r.left)/r.width,t.reverse&&(l=1-l),Te(l)}function Ve(e){if(D.value||!t.keyboard)return;const{vertical:a,reverse:o}=t;switch(e.key){case"ArrowUp":e.preventDefault(),H(a&&o?-1:1);break;case"ArrowRight":e.preventDefault(),H(!a&&o?-1:1);break;case"ArrowDown":e.preventDefault(),H(a&&o?1:-1);break;case"ArrowLeft":e.preventDefault(),H(!a&&o?1:-1);break}}function H(e){const a=b.value;if(a===-1)return;const{step:o}=t,r=m.value[a],l=o<=0||o==="mark"?r:r+o*e;L(K(l,r,e>0?1:-1),a)}function Me(e){var a,o;if(D.value||!he(e)&&e.button!==ua)return;const r=re(e);if(r===void 0)return;const l=m.value.slice(),s=t.range?(o=(a=I(r,l))===null||a===void 0?void 0:a.index)!==null&&o!==void 0?o:-1:0;s!==-1&&(e.preventDefault(),ze(s),De(),L(K(r,m.value[s]),s))}function De(){R.value||(R.value=!0,j("touchend",document,E),j("mouseup",document,E),j("touchmove",document,A),j("mousemove",document,A))}function F(){R.value&&(R.value=!1,N("touchend",document,E),N("mouseup",document,E),N("touchmove",document,A),N("mousemove",document,A))}function A(e){const{value:a}=b;if(!R.value||a===-1){F();return}const o=re(e);L(K(o,m.value[a]),a)}function E(){F()}function $e(e){b.value=e,D.value||(y.value=e)}function Be(e){b.value===e&&(b.value=-1,F()),y.value===e&&(y.value=-1)}function Ie(e){y.value=e}function He(e){y.value===e&&(y.value=-1)}de(b,(e,a)=>void W(()=>ee.value=a)),de(O,()=>{if(t.marks){if($.value)return;$.value=!0,W(()=>{$.value=!1})}W(Se)}),oa(()=>{F()});const le=w(()=>{const{self:{markFontSize:e,railColor:a,railColorHover:o,fillColor:r,fillColorHover:l,handleColor:s,opacityDisabled:g,dotColor:c,dotColorModal:u,handleBoxShadow:k,handleBoxShadowHover:X,handleBoxShadowActive:Y,handleBoxShadowFocus:Fe,dotBorder:Ae,dotBoxShadow:Ee,railHeight:Pe,railWidthVertical:je,handleSize:Ne,dotHeight:Ue,dotWidth:Oe,dotBorderRadius:_e,fontSize:Le,dotBorderActive:Ke,dotColorPopover:Xe},common:{cubicBezierEaseInOut:Ye}}=f.value;return{"--n-bezier":Ye,"--n-dot-border":Ae,"--n-dot-border-active":Ke,"--n-dot-border-radius":_e,"--n-dot-box-shadow":Ee,"--n-dot-color":c,"--n-dot-color-modal":u,"--n-dot-color-popover":Xe,"--n-dot-height":Ue,"--n-dot-width":Oe,"--n-fill-color":r,"--n-fill-color-hover":l,"--n-font-size":Le,"--n-handle-box-shadow":k,"--n-handle-box-shadow-active":Y,"--n-handle-box-shadow-focus":Fe,"--n-handle-box-shadow-hover":X,"--n-handle-color":s,"--n-handle-size":Ne,"--n-opacity-disabled":g,"--n-rail-color":a,"--n-rail-color-hover":o,"--n-rail-height":Pe,"--n-rail-width-vertical":je,"--n-mark-font-size":e}}),z=p?ce("slider",void 0,le,t):void 0,ie=w(()=>{const{self:{fontSize:e,indicatorColor:a,indicatorBoxShadow:o,indicatorTextColor:r,indicatorBorderRadius:l}}=f.value;return{"--n-font-size":e,"--n-indicator-border-radius":l,"--n-indicator-box-shadow":o,"--n-indicator-color":a,"--n-indicator-text-color":r}}),S=p?ce("slider-indicator",void 0,ie,t):void 0;return{mergedClsPrefix:i,namespace:T,uncontrolledValue:U,mergedValue:O,mergedDisabled:D,mergedPlacement:pe,isMounted:ta(),adjustedTo:G(t),dotTransitionDisabled:$,markInfos:ke,isShowTooltip:ae,shouldKeepTooltipTransition:Re,handleRailRef:d,setHandleRefs:C,setFollowerRefs:be,fillStyle:xe,getHandleStyle:ye,activeIndex:b,arrifiedValues:m,followerEnabledIndexSet:ge,handleRailMouseDown:Me,handleHandleFocus:$e,handleHandleBlur:Be,handleHandleMouseEnter:Ie,handleHandleMouseLeave:He,handleRailKeyDown:Ve,indicatorCssVars:p?void 0:ie,indicatorThemeClass:S==null?void 0:S.themeClass,indicatorOnRender:S==null?void 0:S.onRender,cssVars:p?void 0:le,themeClass:z==null?void 0:z.themeClass,onRender:z==null?void 0:z.onRender}},render(){var t;const{mergedClsPrefix:i,themeClass:T,formatTooltip:p}=this;return(t=this.onRender)===null||t===void 0||t.call(this),h("div",{class:[`${i}-slider`,T,{[`${i}-slider--disabled`]:this.mergedDisabled,[`${i}-slider--active`]:this.activeIndex!==-1,[`${i}-slider--with-mark`]:this.marks,[`${i}-slider--vertical`]:this.vertical,[`${i}-slider--reverse`]:this.reverse}],style:this.cssVars,onKeydown:this.handleRailKeyDown,onMousedown:this.handleRailMouseDown,onTouchstart:this.handleRailMouseDown},h("div",{class:`${i}-slider-rail`},h("div",{class:`${i}-slider-rail__fill`,style:this.fillStyle}),this.marks?h("div",{class:[`${i}-slider-dots`,this.dotTransitionDisabled&&`${i}-slider-dots--transition-disabled`]},this.markInfos.map(f=>h("div",{key:f.label,class:[`${i}-slider-dot`,{[`${i}-slider-dot--active`]:f.active}],style:f.style}))):null,h("div",{ref:"handleRailRef",class:`${i}-slider-handles`},this.arrifiedValues.map((f,d)=>{const M=this.isShowTooltip(d);return h(na,null,{default:()=>[h(ra,null,{default:()=>h("div",{ref:this.setHandleRefs(d),class:`${i}-slider-handle-wrapper`,tabindex:this.mergedDisabled?-1:0,style:this.getHandleStyle(f,d),onFocus:()=>this.handleHandleFocus(d),onBlur:()=>this.handleHandleBlur(d),onMouseenter:()=>this.handleHandleMouseEnter(d),onMouseleave:()=>this.handleHandleMouseLeave(d)},la(this.$slots.thumb,()=>[h("div",{class:`${i}-slider-handle`})]))}),this.tooltip&&h(ia,{ref:this.setFollowerRefs(d),show:M,to:this.adjustedTo,enabled:this.showTooltip&&!this.range||this.followerEnabledIndexSet.has(d),teleportDisabled:this.adjustedTo===G.tdkey,placement:this.mergedPlacement,containerClass:this.namespace},{default:()=>h(sa,{name:"fade-in-scale-up-transition",appear:this.isMounted,css:this.shouldKeepTooltipTransition(d),onEnter:()=>{this.followerEnabledIndexSet.add(d)},onAfterLeave:()=>{this.followerEnabledIndexSet.delete(d)}},{default:()=>{var C;return M?((C=this.indicatorOnRender)===null||C===void 0||C.call(this),h("div",{class:[`${i}-slider-handle-indicator`,this.indicatorThemeClass,`${i}-slider-handle-indicator--${this.mergedPlacement}`],style:this.indicatorCssVars},typeof p=="function"?p(f):f)):null}})})]})})),this.marks?h("div",{class:`${i}-slider-marks`},this.markInfos.map(f=>h("div",{key:f.label,class:`${i}-slider-mark`,style:f.style},f.label))):null))}});export{va as N};
