import{aR as O,d as b,c8 as h,a2 as y,aS as _,e as u,a7 as B,a4 as m,aE as g,aa as a,bj as S,ch as R,E as P,aK as w,aN as I,a0 as C,aB as f,$ as x,a6 as j,r as $,ci as E,cj as F,as as K,ck as U,cG as V,aj as k,b3 as q}from"./index-12f140ef.js";const N=O("n-popconfirm"),z={positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},onPositiveClick:{type:Function,required:!0},onNegativeClick:{type:Function,required:!0}},T=R(z),L=b({name:"NPopconfirmPanel",props:z,setup(e){const{localeRef:t}=h("Popconfirm"),{inlineThemeDisabled:s}=y(),{mergedClsPrefixRef:n,mergedThemeRef:p,props:l}=_(N),d=u(()=>{const{common:{cubicBezierEaseInOut:i},self:{fontSize:c,iconSize:v,iconColor:r}}=p.value;return{"--n-bezier":i,"--n-font-size":c,"--n-icon-size":v,"--n-icon-color":r}}),o=s?B("popconfirm-panel",void 0,d,l):void 0;return Object.assign(Object.assign({},h("Popconfirm")),{mergedClsPrefix:n,cssVars:s?void 0:d,localizedPositiveText:u(()=>e.positiveText||t.value.positiveText),localizedNegativeText:u(()=>e.negativeText||t.value.negativeText),positiveButtonProps:m(l,"positiveButtonProps"),negativeButtonProps:m(l,"negativeButtonProps"),handlePositiveClick(i){e.onPositiveClick(i)},handleNegativeClick(i){e.onNegativeClick(i)},themeClass:o==null?void 0:o.themeClass,onRender:o==null?void 0:o.onRender})},render(){var e;const{mergedClsPrefix:t,showIcon:s,$slots:n}=this,p=g(n.action,()=>this.negativeText===null&&this.positiveText===null?[]:[this.negativeText!==null&&a(P,Object.assign({size:"small",onClick:this.handleNegativeClick},this.negativeButtonProps),{default:()=>this.localizedNegativeText}),this.positiveText!==null&&a(P,Object.assign({size:"small",type:"primary",onClick:this.handlePositiveClick},this.positiveButtonProps),{default:()=>this.localizedPositiveText})]);return(e=this.onRender)===null||e===void 0||e.call(this),a("div",{class:[`${t}-popconfirm__panel`,this.themeClass],style:this.cssVars},S(n.default,l=>s||l?a("div",{class:`${t}-popconfirm__body`},s?a("div",{class:`${t}-popconfirm__icon`},g(n.icon,()=>[a(w,{clsPrefix:t},{default:()=>a(I,null)})])):null,l):null),p?a("div",{class:[`${t}-popconfirm__action`]},p):null)}}),M=C("popconfirm",[f("body",`
 font-size: var(--n-font-size);
 display: flex;
 align-items: center;
 flex-wrap: nowrap;
 position: relative;
 `,[f("icon",`
 display: flex;
 font-size: var(--n-icon-size);
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 margin: 0 8px 0 0;
 `)]),f("action",`
 display: flex;
 justify-content: flex-end;
 `,[x("&:not(:first-child)","margin-top: 8px"),C("button",[x("&:not(:last-child)","margin-right: 8px;")])])]),W=Object.assign(Object.assign(Object.assign({},j.props),U),{positiveText:String,negativeText:String,showIcon:{type:Boolean,default:!0},trigger:{type:String,default:"click"},positiveButtonProps:Object,negativeButtonProps:Object,onPositiveClick:Function,onNegativeClick:Function}),G=b({name:"Popconfirm",props:W,__popover__:!0,setup(e){const{mergedClsPrefixRef:t}=y(),s=j("Popconfirm","-popconfirm",M,V,e,t),n=$(null);function p(o){const{onPositiveClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&k(c,!1))})}function l(o){const{onNegativeClick:i,"onUpdate:show":c}=e;Promise.resolve(i?i(o):!0).then(v=>{var r;v!==!1&&((r=n.value)===null||r===void 0||r.setShow(!1),c&&k(c,!1))})}return q(N,{mergedThemeRef:s,mergedClsPrefixRef:t,props:e}),Object.assign(Object.assign({},{setShow(o){var i;(i=n.value)===null||i===void 0||i.setShow(o)},syncPosition(){var o;(o=n.value)===null||o===void 0||o.syncPosition()}}),{mergedTheme:s,popoverInstRef:n,handlePositiveClick:p,handleNegativeClick:l})},render(){const{$slots:e,$props:t,mergedTheme:s}=this;return a(K,F(t,T,{theme:s.peers.Popover,themeOverrides:s.peerOverrides.Popover,internalExtraClass:["popconfirm"],ref:"popoverInstRef"}),{trigger:e.activator||e.trigger,default:()=>{const n=E(t,T);return a(L,Object.assign(Object.assign({},n),{onPositiveClick:this.handlePositiveClick,onNegativeClick:this.handleNegativeClick}),e)}})}});export{G as N};
