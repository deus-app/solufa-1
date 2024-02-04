(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6419)}])},6419:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return index_page}});var s=t(5893),n=t(5332),l=t(6758),i=t(7294),c=t(6147),r=t.n(c);let ElapsedTime=e=>{let[a,t]=(0,i.useState)("");return(0,i.useEffect)(()=>{let a;let s=Date.now(),n=(s-e.createdTime)/1e3;if(n<60)a="".concat(Math.round(n),"s");else if(n<3600)a="".concat(Math.round(n/60),"m");else if(n<=86400)a="".concat(Math.round(n/3600),"h");else{let t=new Date(e.createdTime),s=t.getDate(),n=t.toLocaleString("en-US",{month:"short"}),l=t.getFullYear()===new Date().getFullYear()?"":" ".concat(t.getFullYear());a="".concat(n," ").concat(s).concat(l)}t(a)},[e.createdTime]),(0,s.jsx)("span",{className:r().date,children:a})};var u=t(7829),d=t(2058),o=t(6961),p=t.n(o);let PrivateTask=e=>{let{task:a}=e,[t,n]=(0,i.useState)(),[l,c]=(0,i.useState)(""),r=t===a.id,toggleDone=async()=>{await u.x.private.tasks._taskId(a.id).patch({body:{done:!a.done,label:a.label}}).catch(d.F),await e.fetchTasks()},deleteTask=async()=>{await u.x.private.tasks._taskId(a.id).delete().catch(d.F),await e.fetchTasks()},updateTaskLabel=async()=>{await u.x.private.tasks._taskId(a.id).patch({body:{done:a.done,label:l}}).catch(d.F),n(void 0),c(""),await e.fetchTasks()};return(0,s.jsxs)("label",{children:[(0,s.jsxs)("div",{className:p().editGroup,children:[(0,s.jsx)("input",{type:"checkbox",checked:a.done,onChange:toggleDone}),r?(0,s.jsx)("input",{type:"text",value:l,className:p().labelInput,onChange:e=>{c(e.target.value)}}):(0,s.jsx)("span",{children:a.label})]}),(0,s.jsxs)("div",{className:p().btnGroup,children:[(0,s.jsx)("input",{type:"button",value:"DELETE",className:p().btn,onClick:deleteTask}),r?(0,s.jsx)("input",{type:"button",value:"SAVE",className:p().btn,onClick:updateTaskLabel}):(0,s.jsx)("input",{type:"button",value:"EDIT",className:p().btn,onClick:()=>{n(a.id),c(a.label)}})]})]})};var _=t(8583),h=t(2430),k=t.n(h),index_page=()=>{let[e]=(0,_.KO)(n.L),a=(0,i.useRef)(null),[t,c]=(0,i.useState)(),[r,o]=(0,i.useState)(""),[p,h]=(0,i.useState)(),[x,b]=(0,i.useState)(""),isPrivateTask=a=>(null==e?void 0:e.id)===a.author.id,m=(0,i.useCallback)(async()=>{await u.x.public.tasks.$get().then(c).catch(d.F)},[]),createTask=async e=>{e.preventDefault(),r&&a.current&&(await u.x.private.tasks.$post({body:{label:r,image:p}}).catch(d.F),o(""),h(void 0),b(""),a.current.value="",await m())};return(0,i.useEffect)(()=>{let e=window.setInterval(m,3e3);return m(),()=>clearInterval(e)},[m]),(0,i.useEffect)(()=>{if(!p)return;let e=URL.createObjectURL(p);return b(e),()=>{URL.revokeObjectURL(e)}},[p]),(0,s.jsx)("div",{className:k().container,children:(0,s.jsxs)("ul",{className:k().tasks,children:[null!==e&&(0,s.jsxs)("li",{className:k().createTask,children:[(0,s.jsx)("input",{type:"text",placeholder:"What is happening?!",value:r,onChange:e=>{o(e.target.value)},className:k().createTaskInput}),p&&(0,s.jsx)("img",{src:x,className:k().taskImage}),(0,s.jsx)("input",{type:"file",ref:a,accept:".png,.jpg,.jpeg,.gif,.webp,.svg",onChange:e=>{var a;h(null===(a=e.target.files)||void 0===a?void 0:a[0])}}),(0,s.jsx)("button",{onClick:createTask,className:k().postBtn,children:"POST"})]}),null==t?void 0:t.map(e=>(0,s.jsxs)("div",{children:[(0,s.jsxs)("li",{className:k().taskHeader,children:[(0,s.jsxs)("div",{className:k().author,children:[(0,s.jsx)(l.t,{size:24,photoURL:e.author.photoURL}),(0,s.jsx)("div",{className:k().authorName,children:e.author.name})]}),(0,s.jsx)(ElapsedTime,{createdTime:e.createdTime})]}),(0,s.jsxs)("li",{className:k().label,children:[isPrivateTask(e)?(0,s.jsx)(PrivateTask,{task:e,fetchTasks:m}):(0,s.jsx)("span",{children:e.label}),e.image&&(0,s.jsx)("img",{src:e.image.url,alt:e.label,className:k().taskImage})]})]},e.id))]})})}},6147:function(e){e.exports={date:"ElapsedTime_date__qL0LA"}},6961:function(e){e.exports={editGroup:"PrivateTask_editGroup__xoety",btnGroup:"PrivateTask_btnGroup__JTjoN",labelInput:"PrivateTask_labelInput__ggUpU",btn:"PrivateTask_btn__xsAtt"}},2430:function(e){e.exports={container:"index_container__Wxv5N",tasks:"index_tasks__ED65X",createTask:"index_createTask__O5k4C",createTaskInput:"index_createTaskInput__O99sP",taskHeader:"index_taskHeader__a_EhZ",author:"index_author__mk62Q",authorName:"index_authorName__fm0g6",label:"index_label___38bH",postBtn:"index_postBtn__KNOX_",taskImage:"index_taskImage__T32vB",labelInput:"index_labelInput__LuC0b"}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);