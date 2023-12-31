(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{16:function(e,t,c){},17:function(e,t,c){"use strict";c.r(t);var s,a=c(6),n=c.n(a),l=c(2),i=c(8),d=c(1),r=(c(13),c(14),c(7)),o=c.n(r),j=c(0),u=function(e){var t=e.todos,c=e.onClickModal,s=e.selectedTodo;return Object(j.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"#"}),Object(j.jsx)("th",{children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:"fas fa-check"})})}),Object(j.jsx)("th",{children:"Title"}),Object(j.jsx)("th",{children:" "})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){var t=(null===s||void 0===s?void 0:s.id)===e.id;return Object(j.jsxs)("tr",{"data-cy":"todo",children:[Object(j.jsx)("td",{className:"is-vcentered",children:e.id}),e.completed?Object(j.jsx)("td",{className:"is-vcentered",children:Object(j.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(j.jsx)("i",{className:"fas fa-check"})})}):Object(j.jsx)("td",{className:"is-vcentered"}),Object(j.jsx)("td",{className:"is-vcentered is-expanded",children:Object(j.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(j.jsx)("td",{className:"has-text-right is-vcentered",children:Object(j.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){return c(e)},children:Object(j.jsx)("span",{className:"icon",children:Object(j.jsx)("i",{className:o()("far",{"fa-eye":!t,"fa-eye-slash":t})})})})})]},e.id)}))})]})};!function(e){e.All="all",e.Active="active",e.Completed="completed"}(s||(s={}));var b=function(e){var t=e.onFilter,c=e.onQuery,a=e.query;return Object(j.jsxs)("form",{className:"field has-addons",children:[Object(j.jsx)("p",{className:"control",children:Object(j.jsx)("span",{className:"select",children:Object(j.jsx)("select",{"data-cy":"statusSelect",onChange:function(e){return t(e.target.value)},children:Object.keys(s).map((function(e){return Object(j.jsx)("option",{value:s[e],children:e})}))})})}),Object(j.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(j.jsx)("input",{"data-cy":"searchInput",type:"text",className:"input",placeholder:"Search...",value:a,onChange:function(e){return c(e.target.value)}}),Object(j.jsx)("span",{className:"icon is-left",children:Object(j.jsx)("i",{className:"fas fa-magnifying-glass"})}),a&&Object(j.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:Object(j.jsx)("button",{"data-cy":"clearSearchButton",type:"button",onClick:function(){return c("")},className:"delete"})})]})]})},h=(c(16),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})});function m(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var O=function(e){var t=e.todo,c=e.onSelected,s=Object(d.useState)(!0),a=Object(l.a)(s,2),n=a[0],i=a[1],r=Object(d.useState)(null),o=Object(l.a)(r,2),u=o[0],b=o[1];return Object(d.useEffect)((function(){var e;(e=t.userId,m("/users/".concat(e))).then((function(e){b(e)})).finally((function(){return i(!1)}))})),Object(j.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(j.jsx)("div",{className:"modal-background"}),n?Object(j.jsx)(h,{}):Object(j.jsxs)("div",{className:"modal-card",children:[Object(j.jsxs)("header",{className:"modal-card-head",children:[Object(j.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(t.id)}),Object(j.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){return c(null)}})]}),Object(j.jsxs)("div",{className:"modal-card-body",children:[Object(j.jsx)("p",{className:"block","data-cy":"modal-title",children:t.title}),Object(j.jsxs)("p",{className:"block","data-cy":"modal-user",children:[Object(j.jsx)("strong",{className:t.completed?"has-text-success":"has-text-danger",children:t.completed?"Done":"Planned"})," by ",u&&Object(j.jsx)("a",{href:"mailto:".concat(u.email),children:u.name})]})]})]})]})},x=function(e,t,c){var a=Object(i.a)(e);return a=a.filter((function(e){switch(t){case s.All:return!0;case s.Active:return!e.completed;case s.Completed:return e.completed;default:return!0}})),c&&(a=a.filter((function(e){return e.title.toLowerCase().includes(c.toLowerCase())}))),a},f=function(){var e=Object(d.useState)(!1),t=Object(l.a)(e,2),c=t[0],a=t[1],n=Object(d.useState)([]),i=Object(l.a)(n,2),r=i[0],o=i[1],f=Object(d.useState)(s.All),p=Object(l.a)(f,2),N=p[0],v=p[1],y=Object(d.useState)(""),g=Object(l.a)(y,2),k=g[0],C=g[1],S=Object(d.useState)(null),w=Object(l.a)(S,2),T=w[0],A=w[1];return Object(d.useEffect)((function(){a(!0),m("/todos").then(o).finally((function(){return a(!1)}))}),[]),Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"box",children:[Object(j.jsx)("h1",{className:"title",children:"Todos:"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsx)(b,{onFilter:v,onQuery:C,query:k})}),Object(j.jsxs)("div",{className:"block",children:[c&&Object(j.jsx)(h,{}),!c&&r.length>0&&Object(j.jsx)(u,{todos:x(r,N,k),onClickModal:A,selectedTodo:T})]})]})})}),T&&Object(j.jsx)(O,{todo:T,onSelected:A})]})};n.a.render(Object(j.jsx)(f,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a455444b.chunk.js.map