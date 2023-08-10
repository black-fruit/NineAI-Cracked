import{d as Ue,r as h,cH as yt,cI as Ct,f as Ge,at as Xe,aa as a,cJ as Ot,cK as Ft,$ as re,a0 as m,aB as R,bh as Ke,aA as te,a6 as Te,a4 as ne,cL as Tt,e as A,w as Fe,aY as St,a7 as Ze,cM as Rt,cN as Mt,W as Le,as as Pt,F as It,cA as Oe,aQ as He,a1 as _t,a2 as Bt,a5 as Qe,c8 as At,cO as $t,a3 as zt,a8 as kt,a9 as je,ab as Et,ac as Dt,ae as Wt,T as Vt,af as Lt,bp as Nt,ag as Ye,cP as jt,ai as Ut,cQ as Kt,aj as j}from"./index-12f140ef.js";import{u as Ht,N as Qt,c as Yt,b as qt,p as Ne,f as Jt,h as qe,a as Gt}from"./utils-3ec95cc7.js";function Xt(e){switch(typeof e){case"string":return e||void 0;case"number":return String(e);default:return}}const J="v-hidden",Zt=Ft("[v-hidden]",{display:"none!important"}),Je=Ue({name:"Overflow",props:{getCounter:Function,getTail:Function,updateCounter:Function,onUpdateOverflow:Function},setup(e,{slots:F}){const O=h(null),v=h(null);function b(){const{value:I}=O,{getCounter:i,getTail:_}=e;let f;if(i!==void 0?f=i():f=v.value,!I||!f)return;f.hasAttribute(J)&&f.removeAttribute(J);const{children:T}=I,B=I.offsetWidth,P=[],S=F.tail?_==null?void 0:_():null;let g=S?S.offsetWidth:0,x=!1;const k=I.children.length-(F.tail?1:0);for(let w=0;w<k-1;++w){if(w<0)continue;const D=T[w];if(x){D.hasAttribute(J)||D.setAttribute(J,"");continue}else D.hasAttribute(J)&&D.removeAttribute(J);const V=D.offsetWidth;if(g+=V,P[w]=V,g>B){const{updateCounter:W}=e;for(let C=w;C>=0;--C){const $=k-1-C;W!==void 0?W($):f.textContent=`${$}`;const L=f.offsetWidth;if(g-=P[C],g+L<=B||C===0){x=!0,w=C-1,S&&(w===-1?(S.style.maxWidth=`${B-L}px`,S.style.boxSizing="border-box"):S.style.maxWidth="");break}}}}const{onUpdateOverflow:y}=e;x?y!==void 0&&y(!0):(y!==void 0&&y(!1),f.setAttribute(J,""))}const E=yt();return Zt.mount({id:"vueuc/overflow",head:!0,anchorMetaName:Ct,ssr:E}),Ge(b),{selfRef:O,counterRef:v,sync:b}},render(){const{$slots:e}=this;return Xe(this.sync),a("div",{class:"v-overflow",ref:"selfRef"},[Ot(e,"default"),e.counter?e.counter():a("span",{style:{display:"inline-block"},ref:"counterRef"}),e.tail?e.tail():null])}}),en=re([m("base-selection",`
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `,[m("base-loading",`
 color: var(--n-loading-color);
 `),m("base-selection-tags","min-height: var(--n-height);"),R("border, state-border",`
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `),R("state-border",`
 z-index: 1;
 border-color: #0000;
 `),m("base-suffix",`
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `,[R("arrow",`
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]),m("base-selection-overlay",`
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `,[R("wrapper",`
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]),m("base-selection-placeholder",`
 color: var(--n-placeholder-color);
 `,[R("inner",`
 max-width: 100%;
 overflow: hidden;
 `)]),m("base-selection-tags",`
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `),m("base-selection-label",`
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `,[m("base-selection-input",`
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `,[R("content",`
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]),R("render-label",`
 color: var(--n-text-color);
 `)]),Ke("disabled",[re("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]),te("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]),te("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `),m("base-selection-label","background-color: var(--n-color-active);"),m("base-selection-tags","background-color: var(--n-color-active);")])]),te("disabled","cursor: not-allowed;",[R("arrow",`
 color: var(--n-arrow-color-disabled);
 `),m("base-selection-label",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `,[m("base-selection-input",`
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `),R("render-label",`
 color: var(--n-text-color-disabled);
 `)]),m("base-selection-tags",`
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `),m("base-selection-placeholder",`
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]),m("base-selection-input-tag",`
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `,[R("input",`
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `),R("mirror",`
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]),["warning","error"].map(e=>te(`${e}-status`,[R("state-border",`border: var(--n-border-${e});`),Ke("disabled",[re("&:hover",[R("state-border",`
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]),te("active",[R("state-border",`
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `),m("base-selection-label",`background-color: var(--n-color-active-${e});`),m("base-selection-tags",`background-color: var(--n-color-active-${e});`)]),te("focus",[R("state-border",`
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),m("base-selection-popover",`
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `),m("base-selection-tag-wrapper",`
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `,[re("&:last-child","padding-right: 0;"),m("tag",`
 font-size: 14px;
 max-width: 100%;
 `,[R("content",`
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),tn=Ue({name:"InternalSelection",props:Object.assign(Object.assign({},Te.props),{clsPrefix:{type:String,required:!0},bordered:{type:Boolean,default:void 0},active:Boolean,pattern:{type:String,default:""},placeholder:String,selectedOption:{type:Object,default:null},selectedOptions:{type:Array,default:null},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},multiple:Boolean,filterable:Boolean,clearable:Boolean,disabled:Boolean,size:{type:String,default:"medium"},loading:Boolean,autofocus:Boolean,showArrow:{type:Boolean,default:!0},inputProps:Object,focused:Boolean,renderTag:Function,onKeydown:Function,onClick:Function,onBlur:Function,onFocus:Function,onDeleteOption:Function,maxTagCount:[String,Number],onClear:Function,onPatternInput:Function,onPatternFocus:Function,onPatternBlur:Function,renderLabel:Function,status:String,inlineThemeDisabled:Boolean,ignoreComposition:{type:Boolean,default:!0},onResize:Function}),setup(e){const F=h(null),O=h(null),v=h(null),b=h(null),E=h(null),I=h(null),i=h(null),_=h(null),f=h(null),T=h(null),B=h(!1),P=h(!1),S=h(!1),g=Te("InternalSelection","-internal-selection",en,Tt,e,ne(e,"clsPrefix")),x=A(()=>e.clearable&&!e.disabled&&(S.value||e.active)),k=A(()=>e.selectedOption?e.renderTag?e.renderTag({option:e.selectedOption,handleClose:()=>{}}):e.renderLabel?e.renderLabel(e.selectedOption,!0):Oe(e.selectedOption[e.labelField],e.selectedOption,!0):e.placeholder),y=A(()=>{const n=e.selectedOption;if(n)return n[e.labelField]}),w=A(()=>e.multiple?!!(Array.isArray(e.selectedOptions)&&e.selectedOptions.length):e.selectedOption!==null);function D(){var n;const{value:l}=F;if(l){const{value:p}=O;p&&(p.style.width=`${l.offsetWidth}px`,e.maxTagCount!=="responsive"&&((n=f.value)===null||n===void 0||n.sync()))}}function V(){const{value:n}=T;n&&(n.style.display="none")}function W(){const{value:n}=T;n&&(n.style.display="inline-block")}Fe(ne(e,"active"),n=>{n||V()}),Fe(ne(e,"pattern"),()=>{e.multiple&&Xe(D)});function C(n){const{onFocus:l}=e;l&&l(n)}function $(n){const{onBlur:l}=e;l&&l(n)}function L(n){const{onDeleteOption:l}=e;l&&l(n)}function oe(n){const{onClear:l}=e;l&&l(n)}function U(n){const{onPatternInput:l}=e;l&&l(n)}function G(n){var l;(!n.relatedTarget||!(!((l=v.value)===null||l===void 0)&&l.contains(n.relatedTarget)))&&C(n)}function z(n){var l;!((l=v.value)===null||l===void 0)&&l.contains(n.relatedTarget)||$(n)}function le(n){oe(n)}function se(){S.value=!0}function ue(){S.value=!1}function X(n){!e.active||!e.filterable||n.target!==O.value&&n.preventDefault()}function de(n){L(n)}function Z(n){if(n.key==="Backspace"&&!Y.value&&!e.pattern.length){const{selectedOptions:l}=e;l!=null&&l.length&&de(l[l.length-1])}}const Y=h(!1);let K=null;function ce(n){const{value:l}=F;if(l){const p=n.target.value;l.textContent=p,D()}e.ignoreComposition&&Y.value?K=n:U(n)}function Se(){Y.value=!0}function Re(){Y.value=!1,e.ignoreComposition&&U(K),K=null}function Me(n){var l;P.value=!0,(l=e.onPatternFocus)===null||l===void 0||l.call(e,n)}function Pe(n){var l;P.value=!1,(l=e.onPatternBlur)===null||l===void 0||l.call(e,n)}function he(){var n,l;if(e.filterable)P.value=!1,(n=I.value)===null||n===void 0||n.blur(),(l=O.value)===null||l===void 0||l.blur();else if(e.multiple){const{value:p}=b;p==null||p.blur()}else{const{value:p}=E;p==null||p.blur()}}function fe(){var n,l,p;e.filterable?(P.value=!1,(n=I.value)===null||n===void 0||n.focus()):e.multiple?(l=b.value)===null||l===void 0||l.focus():(p=E.value)===null||p===void 0||p.focus()}function q(){const{value:n}=O;n&&(W(),n.focus())}function N(){const{value:n}=O;n&&n.blur()}function ve(n){const{value:l}=i;l&&l.setTextContent(`+${n}`)}function ee(){const{value:n}=_;return n}function Ie(){return O.value}let ie=null;function ae(){ie!==null&&window.clearTimeout(ie)}function _e(){e.disabled||e.active||(ae(),ie=window.setTimeout(()=>{w.value&&(B.value=!0)},100))}function Be(){ae()}function Ae(n){n||(ae(),B.value=!1)}Fe(w,n=>{n||(B.value=!1)}),Ge(()=>{St(()=>{const n=I.value;n&&(n.tabIndex=e.disabled||P.value?-1:0)})}),Ht(v,e.onResize);const{inlineThemeDisabled:be}=e,ge=A(()=>{const{size:n}=e,{common:{cubicBezierEaseInOut:l},self:{borderRadius:p,color:pe,placeholderColor:$e,textColor:ze,paddingSingle:ke,paddingMultiple:Ee,caretColor:me,colorDisabled:we,textColorDisabled:xe,placeholderColorDisabled:De,colorActive:We,boxShadowFocus:ye,boxShadowActive:Q,boxShadowHover:t,border:o,borderFocus:r,borderHover:c,borderActive:s,arrowColor:d,arrowColorDisabled:u,loadingColor:M,colorActiveWarning:Ce,boxShadowFocusWarning:Ve,boxShadowActiveWarning:et,boxShadowHoverWarning:tt,borderWarning:nt,borderFocusWarning:ot,borderHoverWarning:lt,borderActiveWarning:it,colorActiveError:at,boxShadowFocusError:rt,boxShadowActiveError:st,boxShadowHoverError:ut,borderError:dt,borderFocusError:ct,borderHoverError:ht,borderActiveError:ft,clearColor:vt,clearColorHover:bt,clearColorPressed:gt,clearSize:pt,arrowSize:mt,[He("height",n)]:wt,[He("fontSize",n)]:xt}}=g.value;return{"--n-bezier":l,"--n-border":o,"--n-border-active":s,"--n-border-focus":r,"--n-border-hover":c,"--n-border-radius":p,"--n-box-shadow-active":Q,"--n-box-shadow-focus":ye,"--n-box-shadow-hover":t,"--n-caret-color":me,"--n-color":pe,"--n-color-active":We,"--n-color-disabled":we,"--n-font-size":xt,"--n-height":wt,"--n-padding-single":ke,"--n-padding-multiple":Ee,"--n-placeholder-color":$e,"--n-placeholder-color-disabled":De,"--n-text-color":ze,"--n-text-color-disabled":xe,"--n-arrow-color":d,"--n-arrow-color-disabled":u,"--n-loading-color":M,"--n-color-active-warning":Ce,"--n-box-shadow-focus-warning":Ve,"--n-box-shadow-active-warning":et,"--n-box-shadow-hover-warning":tt,"--n-border-warning":nt,"--n-border-focus-warning":ot,"--n-border-hover-warning":lt,"--n-border-active-warning":it,"--n-color-active-error":at,"--n-box-shadow-focus-error":rt,"--n-box-shadow-active-error":st,"--n-box-shadow-hover-error":ut,"--n-border-error":dt,"--n-border-focus-error":ct,"--n-border-hover-error":ht,"--n-border-active-error":ft,"--n-clear-size":pt,"--n-clear-color":vt,"--n-clear-color-hover":bt,"--n-clear-color-pressed":gt,"--n-arrow-size":mt}}),H=be?Ze("internal-selection",A(()=>e.size[0]),ge,e):void 0;return{mergedTheme:g,mergedClearable:x,patternInputFocused:P,filterablePlaceholder:k,label:y,selected:w,showTagsPanel:B,isComposing:Y,counterRef:i,counterWrapperRef:_,patternInputMirrorRef:F,patternInputRef:O,selfRef:v,multipleElRef:b,singleElRef:E,patternInputWrapperRef:I,overflowRef:f,inputTagElRef:T,handleMouseDown:X,handleFocusin:G,handleClear:le,handleMouseEnter:se,handleMouseLeave:ue,handleDeleteOption:de,handlePatternKeyDown:Z,handlePatternInputInput:ce,handlePatternInputBlur:Pe,handlePatternInputFocus:Me,handleMouseEnterCounter:_e,handleMouseLeaveCounter:Be,handleFocusout:z,handleCompositionEnd:Re,handleCompositionStart:Se,onPopoverUpdateShow:Ae,focus:fe,focusInput:q,blur:he,blurInput:N,updateCounter:ve,getCounter:ee,getTail:Ie,renderLabel:e.renderLabel,cssVars:be?void 0:ge,themeClass:H==null?void 0:H.themeClass,onRender:H==null?void 0:H.onRender}},render(){const{status:e,multiple:F,size:O,disabled:v,filterable:b,maxTagCount:E,bordered:I,clsPrefix:i,onRender:_,renderTag:f,renderLabel:T}=this;_==null||_();const B=E==="responsive",P=typeof E=="number",S=B||P,g=a(Mt,null,{default:()=>a(Rt,{clsPrefix:i,loading:this.loading,showArrow:this.showArrow,showClear:this.mergedClearable&&this.selected,onClear:this.handleClear},{default:()=>{var k,y;return(y=(k=this.$slots).arrow)===null||y===void 0?void 0:y.call(k)}})});let x;if(F){const{labelField:k}=this,y=z=>a("div",{class:`${i}-base-selection-tag-wrapper`,key:z.value},f?f({option:z,handleClose:()=>this.handleDeleteOption(z)}):a(Le,{size:O,closable:!z.disabled,disabled:v,onClose:()=>this.handleDeleteOption(z),internalCloseIsButtonTag:!1,internalCloseFocusable:!1},{default:()=>T?T(z,!0):Oe(z[k],z,!0)})),w=()=>(P?this.selectedOptions.slice(0,E):this.selectedOptions).map(y),D=b?a("div",{class:`${i}-base-selection-input-tag`,ref:"inputTagElRef",key:"__input-tag__"},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",tabindex:-1,disabled:v,value:this.pattern,autofocus:this.autofocus,class:`${i}-base-selection-input-tag__input`,onBlur:this.handlePatternInputBlur,onFocus:this.handlePatternInputFocus,onKeydown:this.handlePatternKeyDown,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),a("span",{ref:"patternInputMirrorRef",class:`${i}-base-selection-input-tag__mirror`},this.pattern)):null,V=B?()=>a("div",{class:`${i}-base-selection-tag-wrapper`,ref:"counterWrapperRef"},a(Le,{size:O,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,onMouseleave:this.handleMouseLeaveCounter,disabled:v})):void 0;let W;if(P){const z=this.selectedOptions.length-E;z>0&&(W=a("div",{class:`${i}-base-selection-tag-wrapper`,key:"__counter__"},a(Le,{size:O,ref:"counterRef",onMouseenter:this.handleMouseEnterCounter,disabled:v},{default:()=>`+${z}`})))}const C=B?b?a(Je,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,getTail:this.getTail,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:V,tail:()=>D}):a(Je,{ref:"overflowRef",updateCounter:this.updateCounter,getCounter:this.getCounter,style:{width:"100%",display:"flex",overflow:"hidden"}},{default:w,counter:V}):P?w().concat(W):w(),$=S?()=>a("div",{class:`${i}-base-selection-popover`},B?w():this.selectedOptions.map(y)):void 0,L=S?{show:this.showTagsPanel,trigger:"hover",overlap:!0,placement:"top",width:"trigger",onUpdateShow:this.onPopoverUpdateShow,theme:this.mergedTheme.peers.Popover,themeOverrides:this.mergedTheme.peerOverrides.Popover}:null,U=(this.selected?!1:this.active?!this.pattern&&!this.isComposing:!0)?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)):null,G=b?a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-tags`},C,B?null:D,g):a("div",{ref:"multipleElRef",class:`${i}-base-selection-tags`,tabindex:v?void 0:0},C,g);x=a(It,null,S?a(Pt,Object.assign({},L,{scrollable:!0,style:"max-height: calc(var(--v-target-height) * 6.6);"}),{trigger:()=>G,default:$}):G,U)}else if(b){const k=this.pattern||this.isComposing,y=this.active?!k:!this.selected,w=this.active?!1:this.selected;x=a("div",{ref:"patternInputWrapperRef",class:`${i}-base-selection-label`},a("input",Object.assign({},this.inputProps,{ref:"patternInputRef",class:`${i}-base-selection-input`,value:this.active?this.pattern:"",placeholder:"",readonly:v,disabled:v,tabindex:-1,autofocus:this.autofocus,onFocus:this.handlePatternInputFocus,onBlur:this.handlePatternInputBlur,onInput:this.handlePatternInputInput,onCompositionstart:this.handleCompositionStart,onCompositionend:this.handleCompositionEnd})),w?a("div",{class:`${i}-base-selection-label__render-label ${i}-base-selection-overlay`,key:"input"},a("div",{class:`${i}-base-selection-overlay__wrapper`},f?f({option:this.selectedOption,handleClose:()=>{}}):T?T(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):null,y?a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-overlay__wrapper`},this.filterablePlaceholder)):null,g)}else x=a("div",{ref:"singleElRef",class:`${i}-base-selection-label`,tabindex:this.disabled?void 0:0},this.label!==void 0?a("div",{class:`${i}-base-selection-input`,title:Xt(this.label),key:"input"},a("div",{class:`${i}-base-selection-input__content`},f?f({option:this.selectedOption,handleClose:()=>{}}):T?T(this.selectedOption,!0):Oe(this.label,this.selectedOption,!0))):a("div",{class:`${i}-base-selection-placeholder ${i}-base-selection-overlay`,key:"placeholder"},a("div",{class:`${i}-base-selection-placeholder__inner`},this.placeholder)),g);return a("div",{ref:"selfRef",class:[`${i}-base-selection`,this.themeClass,e&&`${i}-base-selection--${e}-status`,{[`${i}-base-selection--active`]:this.active,[`${i}-base-selection--selected`]:this.selected||this.active&&this.pattern,[`${i}-base-selection--disabled`]:this.disabled,[`${i}-base-selection--multiple`]:this.multiple,[`${i}-base-selection--focus`]:this.focused}],style:this.cssVars,onClick:this.onClick,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onKeydown:this.onKeydown,onFocusin:this.handleFocusin,onFocusout:this.handleFocusout,onMousedown:this.handleMouseDown},x,I?a("div",{class:`${i}-base-selection__border`}):null,I?a("div",{class:`${i}-base-selection__state-border`}):null)}}),nn=re([m("select",`
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `),m("select-menu",`
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `,[_t({originalTransition:"background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"})])]),on=Object.assign(Object.assign({},Te.props),{to:je.propTo,bordered:{type:Boolean,default:void 0},clearable:Boolean,clearFilterAfterSelect:{type:Boolean,default:!0},options:{type:Array,default:()=>[]},defaultValue:{type:[String,Number,Array],default:null},value:[String,Number,Array],placeholder:String,menuProps:Object,multiple:Boolean,size:String,filterable:Boolean,disabled:{type:Boolean,default:void 0},remote:Boolean,loading:Boolean,filter:Function,placement:{type:String,default:"bottom-start"},widthMode:{type:String,default:"trigger"},tag:Boolean,onCreate:Function,fallbackOption:{type:[Function,Boolean],default:void 0},show:{type:Boolean,default:void 0},showArrow:{type:Boolean,default:!0},maxTagCount:[Number,String],consistentMenuWidth:{type:Boolean,default:!0},virtualScroll:{type:Boolean,default:!0},labelField:{type:String,default:"label"},valueField:{type:String,default:"value"},childrenField:{type:String,default:"children"},renderLabel:Function,renderOption:Function,renderTag:Function,"onUpdate:value":[Function,Array],inputProps:Object,nodeProps:Function,ignoreComposition:{type:Boolean,default:!0},showOnFocus:Boolean,onUpdateValue:[Function,Array],onBlur:[Function,Array],onClear:[Function,Array],onFocus:[Function,Array],onScroll:[Function,Array],onSearch:[Function,Array],onUpdateShow:[Function,Array],"onUpdate:show":[Function,Array],displayDirective:{type:String,default:"show"},resetMenuOnOptionsChange:{type:Boolean,default:!0},status:String,showCheckmark:{type:Boolean,default:!0},onChange:[Function,Array],items:Array}),rn=Ue({name:"Select",props:on,setup(e){const{mergedClsPrefixRef:F,mergedBorderedRef:O,namespaceRef:v,inlineThemeDisabled:b}=Bt(e),E=Te("Select","-select",nn,jt,e,F),I=h(e.defaultValue),i=ne(e,"value"),_=Qe(i,I),f=h(!1),T=h(""),B=A(()=>{const{valueField:t,childrenField:o}=e,r=Gt(t,o);return Yt(z.value,r)}),P=A(()=>qt(U.value,e.valueField,e.childrenField)),S=h(!1),g=Qe(ne(e,"show"),S),x=h(null),k=h(null),y=h(null),{localeRef:w}=At("Select"),D=A(()=>{var t;return(t=e.placeholder)!==null&&t!==void 0?t:w.value.placeholder}),V=$t(e,["items","options"]),W=[],C=h([]),$=h([]),L=h(new Map),oe=A(()=>{const{fallbackOption:t}=e;if(t===void 0){const{labelField:o,valueField:r}=e;return c=>({[o]:String(c),[r]:c})}return t===!1?!1:o=>Object.assign(t(o),{value:o})}),U=A(()=>$.value.concat(C.value).concat(V.value)),G=A(()=>{const{filter:t}=e;if(t)return t;const{labelField:o,valueField:r}=e;return(c,s)=>{if(!s)return!1;const d=s[o];if(typeof d=="string")return Ne(c,d);const u=s[r];return typeof u=="string"?Ne(c,u):typeof u=="number"?Ne(c,String(u)):!1}}),z=A(()=>{if(e.remote)return V.value;{const{value:t}=U,{value:o}=T;return!o.length||!e.filterable?t:Jt(t,G.value,o,e.childrenField)}});function le(t){const o=e.remote,{value:r}=L,{value:c}=P,{value:s}=oe,d=[];return t.forEach(u=>{if(c.has(u))d.push(c.get(u));else if(o&&r.has(u))d.push(r.get(u));else if(s){const M=s(u);M&&d.push(M)}}),d}const se=A(()=>{if(e.multiple){const{value:t}=_;return Array.isArray(t)?le(t):[]}return null}),ue=A(()=>{const{value:t}=_;return!e.multiple&&!Array.isArray(t)?t===null?null:le([t])[0]||null:null}),X=zt(e),{mergedSizeRef:de,mergedDisabledRef:Z,mergedStatusRef:Y}=X;function K(t,o){const{onChange:r,"onUpdate:value":c,onUpdateValue:s}=e,{nTriggerFormChange:d,nTriggerFormInput:u}=X;r&&j(r,t,o),s&&j(s,t,o),c&&j(c,t,o),I.value=t,d(),u()}function ce(t){const{onBlur:o}=e,{nTriggerFormBlur:r}=X;o&&j(o,t),r()}function Se(){const{onClear:t}=e;t&&j(t)}function Re(t){const{onFocus:o,showOnFocus:r}=e,{nTriggerFormFocus:c}=X;o&&j(o,t),c(),r&&q()}function Me(t){const{onSearch:o}=e;o&&j(o,t)}function Pe(t){const{onScroll:o}=e;o&&j(o,t)}function he(){var t;const{remote:o,multiple:r}=e;if(o){const{value:c}=L;if(r){const{valueField:s}=e;(t=se.value)===null||t===void 0||t.forEach(d=>{c.set(d[s],d)})}else{const s=ue.value;s&&c.set(s[e.valueField],s)}}}function fe(t){const{onUpdateShow:o,"onUpdate:show":r}=e;o&&j(o,t),r&&j(r,t),S.value=t}function q(){Z.value||(fe(!0),S.value=!0,e.filterable&&xe())}function N(){fe(!1)}function ve(){T.value="",$.value=W}const ee=h(!1);function Ie(){e.filterable&&(ee.value=!0)}function ie(){e.filterable&&(ee.value=!1,g.value||ve())}function ae(){Z.value||(g.value?e.filterable?xe():N():q())}function _e(t){var o,r;!((r=(o=y.value)===null||o===void 0?void 0:o.selfRef)===null||r===void 0)&&r.contains(t.relatedTarget)||(f.value=!1,ce(t),N())}function Be(t){Re(t),f.value=!0}function Ae(t){f.value=!0}function be(t){var o;!((o=x.value)===null||o===void 0)&&o.$el.contains(t.relatedTarget)||(f.value=!1,ce(t),N())}function ge(){var t;(t=x.value)===null||t===void 0||t.focus(),N()}function H(t){var o;g.value&&(!((o=x.value)===null||o===void 0)&&o.$el.contains(Ut(t))||N())}function n(t){if(!Array.isArray(t))return[];if(oe.value)return Array.from(t);{const{remote:o}=e,{value:r}=P;if(o){const{value:c}=L;return t.filter(s=>r.has(s)||c.has(s))}else return t.filter(c=>r.has(c))}}function l(t){p(t.rawNode)}function p(t){if(Z.value)return;const{tag:o,remote:r,clearFilterAfterSelect:c,valueField:s}=e;if(o&&!r){const{value:d}=$,u=d[0]||null;if(u){const M=C.value;M.length?M.push(u):C.value=[u],$.value=W}}if(r&&L.value.set(t[s],t),e.multiple){const d=n(_.value),u=d.findIndex(M=>M===t[s]);if(~u){if(d.splice(u,1),o&&!r){const M=pe(t[s]);~M&&(C.value.splice(M,1),c&&(T.value=""))}}else d.push(t[s]),c&&(T.value="");K(d,le(d))}else{if(o&&!r){const d=pe(t[s]);~d?C.value=[C.value[d]]:C.value=W}we(),N(),K(t[s],t)}}function pe(t){return C.value.findIndex(r=>r[e.valueField]===t)}function $e(t){g.value||q();const{value:o}=t.target;T.value=o;const{tag:r,remote:c}=e;if(Me(o),r&&!c){if(!o){$.value=W;return}const{onCreate:s}=e,d=s?s(o):{[e.labelField]:o,[e.valueField]:o},{valueField:u}=e;V.value.some(M=>M[u]===d[u])||C.value.some(M=>M[u]===d[u])?$.value=W:$.value=[d]}}function ze(t){t.stopPropagation();const{multiple:o}=e;!o&&e.filterable&&N(),Se(),o?K([],[]):K(null,null)}function ke(t){!qe(t,"action")&&!qe(t,"empty")&&t.preventDefault()}function Ee(t){Pe(t)}function me(t){var o,r,c,s,d;switch(t.key){case" ":if(e.filterable)break;t.preventDefault();case"Enter":if(!(!((o=x.value)===null||o===void 0)&&o.isComposing)){if(g.value){const u=(r=y.value)===null||r===void 0?void 0:r.getPendingTmNode();u?l(u):e.filterable||(N(),we())}else if(q(),e.tag&&ee.value){const u=$.value[0];if(u){const M=u[e.valueField],{value:Ce}=_;e.multiple&&Array.isArray(Ce)&&Ce.some(Ve=>Ve===M)||p(u)}}}t.preventDefault();break;case"ArrowUp":if(t.preventDefault(),e.loading)return;g.value&&((c=y.value)===null||c===void 0||c.prev());break;case"ArrowDown":if(t.preventDefault(),e.loading)return;g.value?(s=y.value)===null||s===void 0||s.next():q();break;case"Escape":g.value&&(Kt(t),N()),(d=x.value)===null||d===void 0||d.focus();break}}function we(){var t;(t=x.value)===null||t===void 0||t.focus()}function xe(){var t;(t=x.value)===null||t===void 0||t.focusInput()}function De(){var t;g.value&&((t=k.value)===null||t===void 0||t.syncPosition())}he(),Fe(ne(e,"options"),he);const We={focus:()=>{var t;(t=x.value)===null||t===void 0||t.focus()},blur:()=>{var t;(t=x.value)===null||t===void 0||t.blur()}},ye=A(()=>{const{self:{menuBoxShadow:t}}=E.value;return{"--n-menu-box-shadow":t}}),Q=b?Ze("select",void 0,ye,e):void 0;return Object.assign(Object.assign({},We),{mergedStatus:Y,mergedClsPrefix:F,mergedBordered:O,namespace:v,treeMate:B,isMounted:kt(),triggerRef:x,menuRef:y,pattern:T,uncontrolledShow:S,mergedShow:g,adjustedTo:je(e),uncontrolledValue:I,mergedValue:_,followerRef:k,localizedPlaceholder:D,selectedOption:ue,selectedOptions:se,mergedSize:de,mergedDisabled:Z,focused:f,activeWithoutMenuOpen:ee,inlineThemeDisabled:b,onTriggerInputFocus:Ie,onTriggerInputBlur:ie,handleTriggerOrMenuResize:De,handleMenuFocus:Ae,handleMenuBlur:be,handleMenuTabOut:ge,handleTriggerClick:ae,handleToggle:l,handleDeleteOption:p,handlePatternInput:$e,handleClear:ze,handleTriggerBlur:_e,handleTriggerFocus:Be,handleKeydown:me,handleMenuAfterLeave:ve,handleMenuClickOutside:H,handleMenuScroll:Ee,handleMenuKeydown:me,handleMenuMousedown:ke,mergedTheme:E,cssVars:b?void 0:ye,themeClass:Q==null?void 0:Q.themeClass,onRender:Q==null?void 0:Q.onRender})},render(){return a("div",{class:`${this.mergedClsPrefix}-select`},a(Et,null,{default:()=>[a(Dt,null,{default:()=>a(tn,{ref:"triggerRef",inlineThemeDisabled:this.inlineThemeDisabled,status:this.mergedStatus,inputProps:this.inputProps,clsPrefix:this.mergedClsPrefix,showArrow:this.showArrow,maxTagCount:this.maxTagCount,bordered:this.mergedBordered,active:this.activeWithoutMenuOpen||this.mergedShow,pattern:this.pattern,placeholder:this.localizedPlaceholder,selectedOption:this.selectedOption,selectedOptions:this.selectedOptions,multiple:this.multiple,renderTag:this.renderTag,renderLabel:this.renderLabel,filterable:this.filterable,clearable:this.clearable,disabled:this.mergedDisabled,size:this.mergedSize,theme:this.mergedTheme.peers.InternalSelection,labelField:this.labelField,valueField:this.valueField,themeOverrides:this.mergedTheme.peerOverrides.InternalSelection,loading:this.loading,focused:this.focused,onClick:this.handleTriggerClick,onDeleteOption:this.handleDeleteOption,onPatternInput:this.handlePatternInput,onClear:this.handleClear,onBlur:this.handleTriggerBlur,onFocus:this.handleTriggerFocus,onKeydown:this.handleKeydown,onPatternBlur:this.onTriggerInputBlur,onPatternFocus:this.onTriggerInputFocus,onResize:this.handleTriggerOrMenuResize,ignoreComposition:this.ignoreComposition},{arrow:()=>{var e,F;return[(F=(e=this.$slots).arrow)===null||F===void 0?void 0:F.call(e)]}})}),a(Wt,{ref:"followerRef",show:this.mergedShow,to:this.adjustedTo,teleportDisabled:this.adjustedTo===je.tdkey,containerClass:this.namespace,width:this.consistentMenuWidth?"target":void 0,minWidth:"target",placement:this.placement},{default:()=>a(Vt,{name:"fade-in-scale-up-transition",appear:this.isMounted,onAfterLeave:this.handleMenuAfterLeave},{default:()=>{var e,F,O;return this.mergedShow||this.displayDirective==="show"?((e=this.onRender)===null||e===void 0||e.call(this),Lt(a(Qt,Object.assign({},this.menuProps,{ref:"menuRef",onResize:this.handleTriggerOrMenuResize,inlineThemeDisabled:this.inlineThemeDisabled,virtualScroll:this.consistentMenuWidth&&this.virtualScroll,class:[`${this.mergedClsPrefix}-select-menu`,this.themeClass,(F=this.menuProps)===null||F===void 0?void 0:F.class],clsPrefix:this.mergedClsPrefix,focusable:!0,labelField:this.labelField,valueField:this.valueField,autoPending:!0,nodeProps:this.nodeProps,theme:this.mergedTheme.peers.InternalSelectMenu,themeOverrides:this.mergedTheme.peerOverrides.InternalSelectMenu,treeMate:this.treeMate,multiple:this.multiple,size:"medium",renderOption:this.renderOption,renderLabel:this.renderLabel,value:this.mergedValue,style:[(O=this.menuProps)===null||O===void 0?void 0:O.style,this.cssVars],onToggle:this.handleToggle,onScroll:this.handleMenuScroll,onFocus:this.handleMenuFocus,onBlur:this.handleMenuBlur,onKeydown:this.handleMenuKeydown,onTabOut:this.handleMenuTabOut,onMousedown:this.handleMenuMousedown,show:this.mergedShow,showCheckmark:this.showCheckmark,resetMenuOnOptionsChange:this.resetMenuOnOptionsChange}),{empty:()=>{var v,b;return[(b=(v=this.$slots).empty)===null||b===void 0?void 0:b.call(v)]},action:()=>{var v,b;return[(b=(v=this.$slots).action)===null||b===void 0?void 0:b.call(v)]}}),this.displayDirective==="show"?[[Nt,this.mergedShow],[Ye,this.handleMenuClickOutside,void 0,{capture:!0}]]:[[Ye,this.handleMenuClickOutside,void 0,{capture:!0}]])):null}})})]}))}});export{rn as N};
