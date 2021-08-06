(this["webpackJsonpgoit-react-hw-08-phonebook"]=this["webpackJsonpgoit-react-hw-08-phonebook"]||[]).push([[0],{19:function(e,t,n){e.exports={form:"ContactForm_form__2m6Ay",label:"ContactForm_label__11ePl",input:"ContactForm_input__1NCQz",button:"ContactForm_button__1Q3ic"}},24:function(e,t,n){e.exports={list:"ContactList_list__2tdgR",item:"ContactList_item__R-ixi",text:"ContactList_text__2GN3x",span:"ContactList_span__XSJUy",button:"ContactList_button__1BMDt"}},44:function(e,t,n){e.exports={container:"Container_container__3ra1G"}},45:function(e,t,n){e.exports={input:"Filter_input__1Tr7X"}},53:function(e,t,n){},78:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),a=n(26),o=n.n(a),i=(n(53),n(2)),s=n(44),u=n.n(s),l=n(0);var b=function(e){var t=e.children;return Object(l.jsx)("div",{className:u.a.container,children:t})},j=n(28),d=function(e){return e.contacts.items},h=function(e){return e.contacts.filter},O=Object(j.a)([d,h],(function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))})),f=n(18),p=n(15),g=n(12),x=n.n(g),m=n(5),v=Object(m.b)("phonebook/addContactRequest"),y=Object(m.b)("phonebook/addContactSuccsess"),k=Object(m.b)("phonebook/addContactError"),C=Object(m.b)("phonebook/deleteContactRequest"),w=Object(m.b)("phonebook/deleteContactSuccsess"),_=Object(m.b)("phonebook/deleteContactError"),L=Object(m.b)("phonebook/fetchContactRequest"),S=Object(m.b)("phonebook/fetchContactSuccsess"),I=Object(m.b)("phonebook/fetchContactError"),R=Object(m.b)("phonebook/changeFilter");x.a.defaults.baseURL="http://localhost:4040";var N=n(19),F=n.n(N);var U=function(){var e=Object(i.c)(d),t=Object(i.b)(),n=function(e,n){return t(function(e,t){return function(n){var c={name:e,number:t};n(v()),x.a.post("/contacts",c).then((function(e){var t=e.data;return n(y(t))})).catch((function(e){return n(k(e))}))}}(e,n))},r=Object(c.useState)(""),a=Object(p.a)(r,2),o=a[0],s=a[1],u=Object(c.useState)(""),b=Object(p.a)(u,2),j=b[0],h=b[1];return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),s(""),h(""),function(){var t=e.reduce((function(e,t){return[].concat(Object(f.a)(e),[t.name])}),[]),n=e.reduce((function(e,t){return[].concat(Object(f.a)(e),[t.number])}),[]);(t.includes(o)||n.includes(j))&&alert("".concat(o).concat(j," is already in contacts")),""!==o&&""!==j||alert("Enter all data, please")}()||n(o,j)},className:F.a.form,children:[Object(l.jsxs)("label",{className:F.a.label,children:["Name:",Object(l.jsx)("input",{type:"text",name:"name",value:o,placeholder:"Jack Sparrow",onChange:function(e){return s(e.currentTarget.value)},className:F.a.input})]}),Object(l.jsxs)("label",{className:F.a.label,children:["Number:",Object(l.jsx)("input",{type:"tel",name:"number",value:j,placeholder:"111-11-11",onChange:function(e){return h(e.currentTarget.value)},className:F.a.input})]}),Object(l.jsx)("button",{type:"submit",className:F.a.button,children:"Add contact"})]})},E=n(45),z=n.n(E);var D=function(){var e=Object(i.b)(),t=Object(i.c)(h);return Object(l.jsxs)("label",{children:[Object(l.jsx)("p",{children:"Find contact:"}),Object(l.jsx)("input",{className:z.a.input,type:"text",value:t,onChange:function(t){return e(R(t.target.value))}})]})},W=n(24),B=n.n(W);var A=function(){var e=Object(i.c)(O),t=Object(i.b)(),n=function(e){return t((n=e,function(e){e(C()),x.a.delete("./contacts/".concat(n)).then((function(){return e(w(n))})).catch((function(t){return e(_(t))}))}));var n};return Object(l.jsx)("ul",{className:B.a.list,children:e.map((function(e){var t=e.id,c=e.name,r=e.number;return Object(l.jsxs)("li",{className:B.a.item,children:[Object(l.jsxs)("p",{className:B.a.text,children:[c,": ",r]}),Object(l.jsx)("button",{type:"button",onClick:function(){return n(t)},className:B.a.button,children:"Delete"})]},t)}))})},P={section:{color:"white",border:" 2px solid white",padding:10,borderRadius:10,background:"#5d8aa8"}};function T(){var e=Object(i.c)(O).length;return Object(l.jsxs)(b,{children:[Object(l.jsx)("h1",{children:"Phonebook"}),Object(l.jsx)(U,{}),Object(l.jsxs)("div",{style:P.section,children:[Object(l.jsx)("h2",{children:"Contacts:"}),Object(l.jsxs)("p",{children:["Total number: ",e]}),Object(l.jsx)(D,{}),Object(l.jsx)(A,{})]})]})}var J=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("h1",{children:"PHONE BOOK"})})},q=n(16),G=n.n(q),H=n(25);x.a.defaults.baseURL="https://goit-phonebook-api.herokuapp.com";var M=function(e){x.a.defaults.headers.common.Authorization="Bearer ".concat(e)},Q=function(){x.a.defaults.headers.common.Authorization=""},X={register:Object(m.c)("auth/register",function(){var e=Object(H.a)(G.a.mark((function e(t){var n,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("credentials ".concat(t)),e.prev=1,e.next=4,x.a.post("/users/signup",t);case 4:return n=e.sent,c=n.data,M(c.token),e.abrupt("return",c);case 10:e.prev=10,e.t0=e.catch(1),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(t){return e.apply(this,arguments)}}()),logIn:Object(m.c)("auth/login",function(){var e=Object(H.a)(G.a.mark((function e(t){var n,c;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("/users/login",t);case 3:return n=e.sent,c=n.data,M(c.token),e.abrupt("return",c);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}()),logOut:Object(m.c)("auth/logout",Object(H.a)(G.a.mark((function e(){return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("users/logout");case 3:Q(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})))),fetchCurrentUser:Object(m.c)("auth/refresh",function(){var e=Object(H.a)(G.a.mark((function e(t,n){var c,r,a,o;return G.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=n.getState(),null!==(r=c.auth.token)){e.next=4;break}return e.abrupt("return",n.rejectWithValue());case 4:return M(r),e.prev=5,e.next=8,x.a.get("users/current");case 8:return a=e.sent,o=a.data,e.abrupt("return",o);case 13:e.prev=13,e.t0=e.catch(5),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[5,13]])})));return function(t,n){return e.apply(this,arguments)}}())},K={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},section:{color:"white",border:" 2px solid white",padding:10,borderRadius:10,background:"#5d8aa8"},button:{fontSize:15,fontWeight:700,border:" 2px solid white",borderRadius:10,color:"#5d8aa8",padding:10,background:"white",cursor:"pointer"}};function V(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(p.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),s=Object(p.a)(o,2),u=s[0],b=s[1],j=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"email":return a(c);case"password":return b(c);default:return}};return Object(l.jsxs)("div",{style:K.section,children:[Object(l.jsx)("h2",{children:"Log in"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X.logIn({email:r,password:u})),a(""),b("")},style:K.form,autoComplete:"on",children:[Object(l.jsxs)("label",{style:K.label,children:["E-mail",Object(l.jsx)("input",{type:"email",name:"email",value:r,onChange:j})]}),Object(l.jsxs)("label",{style:K.label,children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:u,onChange:j})]}),Object(l.jsx)("button",{type:"submit",style:K.button,children:"Enter"})]})]})}var Y={form:{width:320},label:{display:"flex",flexDirection:"column",marginBottom:15},section:{color:"white",border:"2px solid white",padding:10,borderRadius:10,background:"#5d8aa8"},button:{fontSize:15,fontWeight:700,borderRadius:10,border:" 2px solid white",color:"#5d8aa8",padding:10,background:"white",cursor:"pointer"}};function Z(){var e=Object(i.b)(),t=Object(c.useState)(""),n=Object(p.a)(t,2),r=n[0],a=n[1],o=Object(c.useState)(""),s=Object(p.a)(o,2),u=s[0],b=s[1],j=Object(c.useState)(""),d=Object(p.a)(j,2),h=d[0],O=d[1],f=function(e){var t=e.target,n=t.name,c=t.value;switch(n){case"name":return a(c);case"email":return b(c);case"password":return O(c);default:return}};return Object(l.jsxs)("div",{style:Y.section,children:[Object(l.jsx)("h1",{children:"Create an account"}),Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(X.register({name:r,email:u,password:h})),a(""),b(""),O("")},style:Y.form,autoComplete:"on",children:[Object(l.jsxs)("label",{style:Y.label,children:["Name",Object(l.jsx)("input",{type:"text",name:"name",value:r,onChange:f})]}),Object(l.jsxs)("label",{style:Y.label,children:["E-mail",Object(l.jsx)("input",{type:"email",name:"email",value:u,onChange:f})]}),Object(l.jsxs)("label",{style:Y.label,children:["Password",Object(l.jsx)("input",{type:"password",name:"password",value:h,onChange:f})]}),Object(l.jsx)("button",{type:"submit",style:Y.button,children:"Register now"})]})]})}var $,ee=n(14),te={getIsLoggedIn:function(e){return e.auth.isLoggedIn},getUserName:function(e){return e.auth.user.name},getIsFetchingCurrent:function(e){return e.auth.isFetchingCurrentUser}},ne={link:{fontSize:"20px",display:"inline-block",textDecoration:"none",marginLeft:25,padding:12,fontWeight:700,color:"white"},activeLink:{color:"#5d8aa8"}},ce=function(){var e=Object(i.c)(te.getIsLoggedIn);return Object(l.jsxs)("nav",{children:[Object(l.jsx)(ee.b,{to:"/",exact:!0,style:ne.link,activeStyle:ne.activeLink,children:"Home page"}),e&&Object(l.jsx)(ee.b,{to:"/contacts",exact:!0,style:ne.link,activeStyle:ne.activeLink,children:"Contacts"})]})},re=n(3),ae=Object(m.e)({name:"auth",initialState:{user:{name:null,email:null},token:null,isLoggedIn:!1,isFetchingCurrentUser:!1},extraReducers:($={},Object(re.a)($,X.register.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(re.a)($,X.logIn.fulfilled,(function(e,t){e.user=t.payload.user,e.token=t.payload.token,e.isLoggedIn=!0})),Object(re.a)($,X.logOut.fulfilled,(function(e,t){e.user={name:null,email:null},e.token=null,e.isLoggedIn=!1})),Object(re.a)($,X.fetchCurrentUser.pending,(function(e){e.isFetchingCurrentUser=!0})),Object(re.a)($,X.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isLoggedIn=!1})),Object(re.a)($,X.fetchCurrentUser.fulfilled,(function(e,t){e.user=t.payload,e.isLoggedIn=!0,e.isFetchingCurrentUser=!1})),Object(re.a)($,X.fetchCurrentUser.rejected,(function(e){e.isFetchingCurrentUser=!1})),$)}).reducer,oe=n.p+"static/media/default-avatar.10691648.png",ie={container:{display:"flex",alignItems:"center",marginRight:25,color:"white,"},avatar:{marginRight:4},name:{fontWeight:700,marginRight:12},button:{fontSize:15,fontWeight:700,borderRadius:10,border:" 2px solid white",color:"#5d8aa8",padding:10,background:"white",cursor:"pointer"}};function se(){var e=Object(i.b)(),t=Object(i.c)(te.getUserName),n=oe;return Object(l.jsxs)("div",{style:ie.container,children:[Object(l.jsx)("img",{src:n,alt:"",width:"32",style:ie.avatar}),Object(l.jsxs)("span",{style:ie.name,children:["\u041f\u0440\u0438\u0432\u0435\u0442, ",t]}),Object(l.jsx)("button",{type:"button",style:ie.button,onClick:function(){return e(X.logOut())},children:"\u0412\u044b\u0439\u0442\u0438"})]})}var ue={link:{display:"inline-block",textDecoration:"none",padding:12,marginRight:20,fontSize:20,fontWeight:700,color:"white"},activeLink:{color:"#5d8aa8"}};function le(){return Object(l.jsxs)("div",{children:[Object(l.jsx)(ee.b,{to:"/register",exact:!0,style:ue.link,activeStyle:ue.activeLink,children:"Registration"}),Object(l.jsx)(ee.b,{to:"/login",exact:!0,style:ue.link,activeStyle:ue.activeLink,children:"Enter"})]})}var be={header:{display:"flex",justifyContent:"space-between",alignItems:"center",background:"transparent",border:0,borderRadius:"10px"}};function je(){var e=Object(i.c)(te.getIsLoggedIn);return Object(l.jsxs)("header",{style:be.header,children:[Object(l.jsx)(ce,{}),e?Object(l.jsx)(se,{}):Object(l.jsx)(le,{})]})}var de=n(6),he=n(21),Oe=n(30),fe=["children"];function pe(e){var t=e.children,n=Object(Oe.a)(e,fe),c=Object(i.c)(te.getIsLoggedIn);return Object(l.jsx)(de.b,Object(he.a)(Object(he.a)({},n),{},{children:c?t:Object(l.jsx)(de.a,{to:"/login"})}))}var ge=["children","restricted"];function xe(e){var t=e.children,n=e.restricted,c=void 0!==n&&n,r=Object(Oe.a)(e,ge),a=Object(i.c)(te.getIsLoggedIn)&&c;return Object(l.jsx)(de.b,Object(he.a)(Object(he.a)({},r),{},{children:a?Object(l.jsx)(de.a,{to:"/contacts"}):t}))}n(78);function me(){var e=Object(i.b)(),t=Object(i.c)(te.getIsFetchingCurrent);return Object(c.useEffect)((function(){e(X.fetchCurrentUser())}),[e]),!t&&Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(je,{}),Object(l.jsx)(b,{children:Object(l.jsxs)(de.d,{children:[Object(l.jsx)(xe,{exact:!0,path:"/",children:Object(l.jsx)(J,{})}),Object(l.jsx)(xe,{exact:!0,path:"/register",restricted:!0,children:Object(l.jsx)(Z,{})}),Object(l.jsx)(xe,{exact:!0,path:"/login",restricted:!0,children:Object(l.jsx)(V,{})}),Object(l.jsx)(pe,{children:Object(l.jsx)(T,{path:"/contacts"})})]})})]})}var ve,ye,ke,Ce=n(46),we=n(47),_e=n.n(we),Le=n(17),Se=n(48),Ie=n.n(Se),Re=n(7),Ne=Object(m.d)([],(ve={},Object(re.a)(ve,S,(function(e,t){return t.payload})),Object(re.a)(ve,y,(function(e,t){var n=t.payload;return[].concat(Object(f.a)(e),[n])})),Object(re.a)(ve,w,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),ve)),Fe=Object(m.d)(!1,(ye={},Object(re.a)(ye,L,(function(){return!0})),Object(re.a)(ye,S,(function(){return!1})),Object(re.a)(ye,I,(function(){return!1})),Object(re.a)(ye,v,(function(){return!0})),Object(re.a)(ye,y,(function(){return!1})),Object(re.a)(ye,k,(function(){return!1})),Object(re.a)(ye,C,(function(){return!0})),Object(re.a)(ye,w,(function(){return!1})),Object(re.a)(ye,_,(function(){return!1})),ye)),Ue=Object(m.d)("",Object(re.a)({},R,(function(e,t){return t.payload}))),Ee=Object(m.d)(null,(ke={},Object(re.a)(ke,I,(function(e,t){return t.payload})),Object(re.a)(ke,L,(function(){return null})),Object(re.a)(ke,v,(function(){return null})),Object(re.a)(ke,C,(function(){return null})),Object(re.a)(ke,_,(function(e,t){return t.payload})),Object(re.a)(ke,k,(function(e,t){return t.payload})),ke)),ze=Object(Re.b)({items:Ne,filter:Ue,loading:Fe,error:Ee}),De=[].concat(Object(f.a)(Object(m.f)({serializableCheck:{ignoredActions:[Le.a,Le.f,Le.b,Le.c,Le.d,Le.e]}})),[_e.a]),We={key:"auth",storage:Ie.a,whitelist:["token"]},Be=Object(m.a)({reducer:{auth:Object(Le.g)(We,ae),contacts:ze},middleware:De,devTools:!1}),Ae=Object(Le.h)(Be);o.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(i.a,{store:Be,children:Object(l.jsx)(Ce.a,{loading:null,persistor:Ae,children:Object(l.jsx)(ee.a,{children:Object(l.jsx)(me,{})})})})}),document.getElementById("root"))}},[[81,1,2]]]);
//# sourceMappingURL=main.8ef1adc7.chunk.js.map