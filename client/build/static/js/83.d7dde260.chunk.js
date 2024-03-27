"use strict";(self.webpackChunkclient360=self.webpackChunkclient360||[]).push([[83],{58707:function(e,a,t){t.r(a),t.d(a,{default:function(){return k}});t(70816);var l=t(47313),n=t(47825),i=t(42832),r=t(61113),s=t(41806),o=t(61682),d=t(2e3),c=t(14298),h=t(10306),u=t(7894),p=t(85582),x=t(17551),m=t(31095),g=t(51405),j=t(5211),Z=t(29428),v=t(46417);const C=(0,u.Z)((e=>(0,v.jsx)(p.Z,{elevation:0,anchorOrigin:{vertical:"bottom",horizontal:"right"},transformOrigin:{vertical:"top",horizontal:"right"},...e})))((e=>{let{theme:a}=e;return{"& .MuiPaper-root":{borderRadius:6,marginTop:a.spacing(1),minWidth:100,boxShadow:"rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px","& .MuiMenu-list":{padding:"4px 0"},"& .MuiMenuItem-root":{"& .MuiSvgIcon-root":{fontSize:18,color:a.palette.text.secondary,marginRight:a.spacing(1.5)},"&:active":{backgroundColor:(0,x.Fq)(a.palette.primary.main,a.palette.action.selectedOpacity)}}}}}));var y=e=>{const[a,t]=(0,l.useState)(null),n=Boolean(a);return(0,v.jsx)("div",{children:(0,v.jsxs)(i.Z,{direction:"row",spacing:2,justifyContent:"flex-end",children:[(0,v.jsx)(m.Z,{id:"action","aria-controls":n?"action":void 0,"aria-haspopup":"true","aria-expanded":n?"true":void 0,variant:"contained",color:"primary",disableElevation:!0,onClick:e=>{t(e.currentTarget)},endIcon:(0,v.jsx)(Z.Z,{}),children:"Add New"}),(0,v.jsxs)(C,{id:"demo-customized-menu",MenuListProps:{"aria-labelledby":"action"},anchorEl:a,open:n,onClose:()=>{t(null)},children:[(0,v.jsxs)(g.Z,{onClick:e.handleOpenTask,disableRipple:!0,children:[(0,v.jsx)(j.Z,{}),"Add Task"]}),(0,v.jsxs)(g.Z,{onClick:e.handleOpenMeeting,disableRipple:!0,children:[(0,v.jsx)(j.Z,{}),"Add Meeting"]}),(0,v.jsxs)(g.Z,{onClick:e.handleOpenCall,disableRipple:!0,children:[(0,v.jsx)(j.Z,{}),"Add Call"]})]})]})})},b=t(6210),f=t(48769),D=t(14974),w=t(2270);t(78830);function T(e){return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("b",{children:e.timeText}),(0,v.jsx)("i",{children:e.event.title})]})}var k=()=>{localStorage.getItem("_id"),localStorage.getItem("role");const[e,a]=(0,l.useState)(!1),[t,u]=(0,l.useState)(!1),[p,x]=(0,l.useState)(!1),[m,g]=(0,l.useState)([]),j=async()=>(await(0,b.ac)("api/task/viewalltasks")).data.taskData.map((e=>({title:e.title,start:e.start,end:e.end}))),Z=async()=>{try{return(await(0,b.ac)("api/meeting/viewallmeetings")).data.map((e=>({title:e.agenda,start:e.dateTime})))}catch(e){console.log(e)}},C=async()=>{const e=await(0,b.ac)("api/phoneCall/viewallcalls");return console.log(e.data,"call data"),e.data.map((e=>({title:e.callNotes,start:e.startDate,end:e.endDate})))};return(0,l.useEffect)((()=>{(async()=>{try{const[e,a,t]=await Promise.all([j(),Z(),C()]),l=[...e,...a,...t];g(l)}catch(e){console.error("Error fetching calendar data",e)}})()}),[]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w.Z,{open:e,handleClose:()=>a(!1),lead:"lead",contact:"contact"}),(0,v.jsx)(f.Z,{open:t,handleClose:()=>u(!1)}),(0,v.jsx)(D.Z,{open:p,handleClose:()=>x(!1)}),(0,v.jsxs)(n.Z,{children:[(0,v.jsxs)(i.Z,{direction:"row",alignItems:"center",justifyContent:"space-between",mb:5,children:[(0,v.jsx)(r.Z,{variant:"h4",children:"Calendar"}),(0,v.jsx)(y,{handleOpenTask:()=>a(!0),handleOpenMeeting:()=>u(!0),handleOpenCall:()=>x(!0)})]}),(0,v.jsx)(s.Z,{sx:{background:"white"},children:(0,v.jsx)(o.Z,{plugins:[d.Z,c.Z,h.ZP],initialView:"dayGridMonth",minHeight:"400px",height:"600px",events:m,eventContent:T,headerToolbar:{left:"prev,next today",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},views:{listWeek:{buttonText:"List"},multiMonthFourMonth:{type:"multiMonth",buttonText:"multiMonth",duration:{months:4}}},buttonText:{today:"Today",dayGridMonth:"Month",timeGridWeek:"Week",timeGridDay:"Day"},eventClassNames:"custom-fullcalendar"})})]})]})}},14974:function(e,a,t){var l=t(47313),n=t(31095),i=t(66149),r=t(9019),s=t(1550),o=t(5178),d=t(55685),c=t(74268),h=t(88797),u=t(51405),p=t(24631),x=t(4117),m=t(96467),g=t(97762),j=t(33604),Z=t(61113),v=t(23195),C=t(83929),y=t(7410),b=(t(3463),t(82036)),f=t(35460),D=t(6210),w=t(78830),T=t(46417);a.Z=e=>{const{open:a,handleClose:t}=e,[k,S]=(0,l.useState)([]),[M,N]=(0,l.useState)([]),A=JSON.parse(localStorage.getItem("user"));(0,l.useEffect)((()=>{(async()=>{try{const e=await(0,D.ac)("admin"===A.role?"api/contact/viewallcontacts":`api/contact/viewusercontacts/${A._id}`);"admin"===A.role?S(e.data.contactDetails):S(e.data)}catch(e){console.log(e)}})(),(async()=>{try{const e=await(0,D.ac)("admin"===A.role?"api/lead/viewallleads":`api/lead/viewuserleads/${A._id}`);N(null===e||void 0===e?void 0:e.data)}catch(e){console.log(e)}})()}),[]);const W=(0,y.TA)({initialValues:{recipient:"default",callDuration:"",startDate:"",endDate:"",callNotes:"",category:"lead"},validationSchema:w.Fv,onSubmit:async(e,a)=>{let{resetForm:l}=a;(async(e,a)=>{e.sender=JSON.parse(localStorage.getItem("user"))._id;try{"contact"===e.category?e.createBy=e.recipient:e.createByLead=e.recipient,200===(await(0,D.Fv)("api/phoneCall/add",e)).status?(b.Am.success("Call Added successfully"),t(),a()):(b.Am.error("Cannot Add Call"),a())}catch(l){b.Am.error("Cannot Add Call"),a()}})(e,l)}});return(0,T.jsx)("div",{children:(0,T.jsxs)(i.Z,{open:a,onClose:t,"aria-labelledby":"scroll-dialog-title","aria-describedby":"scroll-dialog-description",children:[(0,T.jsxs)(j.Z,{id:"scroll-dialog-title",style:{display:"flex",justifyContent:"space-between"},children:[(0,T.jsx)(Z.Z,{variant:"h6",children:"Create Call"}),(0,T.jsx)(Z.Z,{children:(0,T.jsx)(v.Z,{onClick:t,style:{cursor:"pointer"}})})]}),(0,T.jsx)(m.Z,{dividers:!0,sx:{width:"100%",minWidth:"600px"},children:(0,T.jsx)("form",{children:(0,T.jsxs)(g.Z,{id:"scroll-dialog-description",tabIndex:-1,children:[(0,T.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:6,children:(0,T.jsxs)(s.Z,{fullWidth:!0,children:[(0,T.jsx)(o.Z,{sx:{marginTop:"2px"},children:"Related To"}),(0,T.jsxs)(d.Z,{row:!0,"aria-label":"category",name:"category",value:W.values.category,onChange:W.handleChange,children:[(0,T.jsx)(C.Z,{value:"contact",control:(0,T.jsx)(c.Z,{}),label:"Contact"}),(0,T.jsx)(C.Z,{value:"lead",control:(0,T.jsx)(c.Z,{}),label:"Lead"})]})]})}),(0,T.jsx)(r.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:(0,T.jsxs)(s.Z,{fullWidth:!0,children:[(0,T.jsx)(o.Z,{children:"contact"===W.values.category?"Recipient ( contact )":"Recipient ( lead )"}),(0,T.jsx)(h.Z,{id:"recipient",name:"recipient",label:"",size:"small",fullWidth:!0,value:W.values.recipient,onChange:W.handleChange,error:W.touched.recipient&&Boolean(W.errors.recipient),children:"contact"===W.values.category?[(0,T.jsx)(u.Z,{value:"default",disabled:!0,children:"Assignment To"},"default"),...k.map((e=>(0,T.jsx)(u.Z,{value:e._id,children:e.firstName},e._id)))]:[(0,T.jsx)(u.Z,{value:"default",disabled:!0,children:"Assignment To"},"default"),...M.map((e=>(0,T.jsx)(u.Z,{value:e._id,children:e.leadName},e._id)))]})]})}),(0,T.jsxs)(r.ZP,{item:!0,xs:12,sm:4,md:4,sx:{marginTop:"3px"},children:[(0,T.jsx)(o.Z,{children:"Start Date"}),(0,T.jsx)(p.Z,{id:"startDate",name:"startDate",label:"",type:"date",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:W.values.startDate,onChange:W.handleChange,error:W.touched.startDate&&Boolean(W.errors.startDate),helperText:W.touched.startDate&&W.errors.startDate})]}),(0,T.jsxs)(r.ZP,{item:!0,xs:12,sm:4,md:4,sx:{marginTop:"3px"},children:[(0,T.jsx)(o.Z,{children:"End Date"}),(0,T.jsx)(p.Z,{id:"endDate",name:"endDate",label:"",type:"date",size:"small",fullWidth:!0,InputLabelProps:{shrink:!0},value:W.values.endDate,onChange:W.handleChange,error:W.touched.endDate&&Boolean(W.errors.endDate),helperText:W.touched.endDate&&W.errors.endDate})]}),(0,T.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:[(0,T.jsx)(o.Z,{children:"Call Duration"}),(0,T.jsx)(p.Z,{id:"callDuration",name:"callDuration",label:"",size:"small",fullWidth:!0,placeholder:"Enter call duration",value:W.values.callDuration,onChange:W.handleChange,error:W.touched.callDuration&&Boolean(W.errors.callDuration),helperText:W.touched.callDuration&&W.errors.callDuration})]}),(0,T.jsxs)(r.ZP,{item:!0,xs:12,sm:12,md:12,sx:{marginTop:"3px"},children:[(0,T.jsx)(o.Z,{children:"Notes"}),(0,T.jsx)(p.Z,{id:"callNotes",name:"callNotes",label:"",size:"small",multiline:!0,rows:5,fullWidth:!0,placeholder:"Enter Call notes",value:W.values.callNotes,onChange:W.handleChange,error:W.touched.callNotes&&Boolean(W.errors.callNotes),helperText:W.touched.callNotes&&W.errors.callNotes})]})]})})}),(0,T.jsx)(x.Z,{children:(0,T.jsx)(n.Z,{onClick:W.handleSubmit,variant:"contained",style:{backgroundColor:f.Z.info,color:"#fff"},children:"Add Call"})})]})})}}}]);