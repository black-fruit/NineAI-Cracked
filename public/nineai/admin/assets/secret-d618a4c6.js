
/**
 * 由 Fantastic-admin 提供技术支持
 * Powered by Fantastic-admin
 * Gitee  https://gitee.com/hooray/fantastic-admin
 * Github https://github.com/hooray/fantastic-admin
 */
  
import{a as g}from"./config-5832de38.js";import{d as E,r as i,R,x as j,o as u,c as k,e as l,f as e,a as f,k as d,N as A,S as I,E as v,h as a,I as V,J as L,q as x}from"./index-614bd441.js";const M={class:"flex justify-between"},$=f("b",null,"key池管理",-1),D={class:"flex justify-between",style:{width:"100%"}},F=E({__name:"secret",setup(J){const o=i([]),_=R({chatGptKey:[]});i({chatGptKey:[{required:!0,trigger:"blur",message:"请填写您的chatGpt的key"}]});const p=i();async function m(){const t=await g.queryGptKeys();o.value=t.data.map(n=>({configKey:n.configKey,configVal:n.configVal,status:n.status})),t.data.length===0&&y(),_.chatGptKey=o.value}function y(){o.value.push({configKey:"",configVal:"",status:1})}function b(t){o.value.splice(t,1)}function w(){var t;(t=p.value)==null||t.validate(async n=>{if(n){try{await g.setGptKeys({configs:o.value}),v.success("变更配置信息成功")}catch{}m()}else v.error("请填写完整信息")})}return j(()=>{m()}),(t,n)=>{const c=a("el-button"),C=a("el-input"),K=a("el-switch"),G=a("el-form-item"),N=a("el-col"),U=a("el-row"),q=a("el-form"),B=a("el-card");return u(),k("div",null,[l(B,{style:{margin:"20px"}},{header:e(()=>[f("div",M,[$,l(c,{class:"button",text:"",onClick:w},{default:e(()=>[d(" 保存设置 ")]),_:1})])]),default:e(()=>[l(q,{ref_key:"formRef",ref:p,model:_,"label-width":"80px"},{default:e(()=>[l(U,null,{default:e(()=>[l(N,{xs:24,md:21,lg:16,xl:13},{default:e(()=>[(u(!0),k(A,null,I(o.value,(s,h)=>(u(),V(G,{key:s.configKey,label:`key-${h+1}`,prop:"chatGptKey"},{default:e(()=>[f("div",D,[l(C,{modelValue:s.configVal,"onUpdate:modelValue":r=>s.configVal=r,placeholder:"请填写您的ChatGpt-Key",clearable:"",class:"flex-1"},null,8,["modelValue","onUpdate:modelValue"]),o.value.length!==1?(u(),V(c,{key:0,type:"danger",plain:"",class:"ml-1",onClick:r=>b(h)},{default:e(()=>[d(" 删除 ")]),_:2},1032,["onClick"])):L("",!0),l(K,{modelValue:s.status,"onUpdate:modelValue":r=>s.status=r,class:"ml-5","active-value":1,"inactive-value":0},null,8,["modelValue","onUpdate:modelValue"])])]),_:2},1032,["label"]))),128))]),_:1})]),_:1}),l(c,{class:"mt-5",style:{"margin-left":"80px"},onClick:y},{default:e(()=>[d(" 添加key ")]),_:1})]),_:1},8,["model"])]),_:1})])}}});typeof x=="function"&&x(F);export{F as default};
