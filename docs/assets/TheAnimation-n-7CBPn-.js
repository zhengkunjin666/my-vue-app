import{d as B,r as F,o as I,a as $,b as j,n as L,c as R,e as g,f as i,g as n,w as p,h as A,u,i as E,v as w,j as D,E as M,k as U,l as h,F as O,m as q,p as H,t as J}from"./index-CEC_VKyM.js";import{_ as P,E as G,a as K}from"./el-image-viewer-pz7DMaDT.js";import{E as Q,_ as W,a as X}from"./search-C5UUtQni.js";import{E as k}from"./el-message-BQ2o_2St.js";const Y={class:"z-flex-1 z-flex-col",style:{height:"10%"}},Z={class:"z-m-t-15"},ee={id:"scrollbar",class:"z-flex-1 z-m-t-20 z-p-b-20",style:{height:"10%"}},te={class:"list","infinite-scroll-distance":500},se=["onClick"],oe=i("i",null,null,-1),le={class:"z-m-t-10 z-m-b-20"},ae=["title"],_e=B({__name:"TheAnimation",setup(ne){const e=F({pageNum:1,pageSize:40,key:"",list:[],scrollTopValue:0,height:"",isFirst:!0});I(()=>{S(),m(),window.addEventListener("resize",m)}),$(()=>{window.removeEventListener("resize",m)}),j(()=>{v.value.setScrollTop(e.scrollTopValue)});const m=()=>{L(()=>{const t=document.getElementById("scrollbar");e.height=(t==null?void 0:t.getBoundingClientRect().height)+"px"})},z=()=>{e.isFirst||(e.pageNum++,e.key?y(e.key,e.pageNum):S())},S=()=>{const t=`/pgc/season/index/result?st=4&order=0&season_version=-1&is_finish=-1&copyright=-1&season_status=-1&year=-1&style_id=-1&sort=0&page=${e.pageNum}&season_type=4&pagesize=${e.pageSize}&type=1`;fetch(t).then(s=>s.json()).then(s=>{console.log("Success:",s),e.pageNum===1&&(e.list=[],f()),e.isFirst=!1;const r=s.data.list;e.list=e.list.concat(r)}).catch(s=>{console.error("Error:",s),k.error({message:s,offset:100})})},y=(t,s)=>{if(s||(e.pageNum=1),t){const r=`/search/all?spm_id_from=333.976.0.0&keyword=${t}&search_type=&page=${e.pageNum}&page_size=${e.pageSize}`;fetch(r,{referrer:""}).then(o=>o.json()).then(o=>{if(console.log("Success:",o),o.code===0){e.pageNum===1&&(e.list=[],f());const _=[];Object.keys(o.data.result).forEach(d=>{o.data.result[d]&&o.data.result[d].length>0&&o.data.result[d].forEach(a=>{a.title=a.title&&a.title.replace(/<(.+?)>/g,"")||a.title,e.list.length>0?e.list.filter(c=>c.url&&c.url===a.url||c.arcurl&&c.arcurl===a.arcurl).length===0&&_.push(a):_.push(a)})}),e.list=e.list.concat(_)}else k.error({message:"已经到底，没有数据了！",offset:100})}).catch(o=>{console.error("Error:",o),k.error({message:o,offset:100})})}else e.pageNum=0,z()},T=t=>{e.scrollTopValue=t.scrollTop},v=R(),f=()=>{e.scrollTopValue>0&&(window.requestAnimationFrame(f),v.value.setScrollTop(0))},N=D(),V=t=>{console.log(t);const s={title:t.title,playUrl:t.link||t.url||t.arcurl},r=JSON.stringify(s);console.log(t.link||t.url||t.arcurl),N.push({name:"play",state:{params:r,type:"bilibili"}})};return(t,s)=>{const r=W,o=M,_=X,d=H,a=Q,b=G,c=U,x=P,C=K;return h(),g("div",Y,[i("div",Z,[n(a,{onSubmit:s[3]||(s[3]=A(()=>{},["prevent"]))},{default:p(()=>[n(d,{modelValue:u(e).key,"onUpdate:modelValue":s[1]||(s[1]=l=>u(e).key=l),placeholder:"请输入剧名搜索",clearable:!0,onChange:s[2]||(s[2]=l=>y(l,0))},{append:p(()=>[n(_,{type:"primary",onClick:s[0]||(s[0]=l=>y(u(e).key,0))},{default:p(()=>[n(o,null,{default:p(()=>[n(r)]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})]),i("div",ee,[n(c,{ref_key:"scrollbarRef",ref:v,class:"z-p-l-20 z-p-r-20",height:u(e).height,always:"",onScroll:T},{default:p(()=>[E((h(),g("div",te,[(h(!0),g(O,null,q(u(e).list,l=>E((h(),g("div",{class:"item",key:l.title},[i("div",{class:"image",onClick:re=>V(l)},[n(b,{src:l.cover||l.pic,referrerpolicy:"no-referrer",lazy:""},null,8,["src"]),oe],8,se),i("div",le,[i("span",{class:"z-line-1",title:l.title},J(l.title),9,ae)])])),[[w,l.title]])),128))])),[[C,z]])]),_:1},8,["height"])]),E(i("div",{class:"to-top",onClick:f},[n(o,null,{default:p(()=>[n(x)]),_:1})],512),[[w,u(e).scrollTopValue>600]])])}}});export{_e as default};
