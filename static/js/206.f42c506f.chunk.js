"use strict";(self.webpackChunkcolor_code=self.webpackChunkcolor_code||[]).push([[206],{206:function(e,t,n){n.r(t),n.d(t,{default:function(){return T}});var r=n(572),s=n(885),i=n(791),a=n(405),c=n(694),o=n.n(c),u=n(843),d=n(853),l=function(e){for(var t in e){var n="user-code-field__item_".concat(e["".concat(t)]);document.getElementById("".concat(t)).classList.remove(n)}},f=function(e,t){var n=[],r=JSON.parse(JSON.stringify(t)),s=JSON.parse(JSON.stringify(e));for(var i in s)s["".concat(i)]===r["".concat(i)]&&(n.push("yes"),delete r["".concat(i)],delete s["".concat(i)]);for(var a in s){var c="no";for(var o in r)if(s["".concat(a)]===r["".concat(o)]){c="almost",delete r["".concat(o)];break}n.push(c)}return function(e){for(var t=e.length-1;t>0;t--){var n=Math.floor(Math.random()*(t+1)),r=[e[n],e[t]];e[t]=r[0],e[n]=r[1]}}(n),n};var m=function(e){return 4===e.filter((function(e){return"yes"===e})).length},_=n(184),v=function(e){var t=e.show,n=(0,a.I0)(),r=(0,a.v9)((function(e){return e.gameReducer.lifePower})),c=(0,a.v9)((function(e){return e.globalReducer.secretCode})),v=(0,a.v9)((function(e){return e.gameReducer.usersVariantCode})),x=(0,i.useState)(!1),g=(0,s.Z)(x,2),p=g[0],h=g[1],b=(0,a.v9)((function(e){return e.gameReducer.isCodeReady})),j=o()({"confirm-btn":!0,"confirm-btn_visibility":t,"confirm-btn_opacity":t,"confirm-btn_ready":b,"confirm-btn_press":p});return(0,_.jsx)("button",{className:j,disabled:!b,onClick:function(){h((function(e){return!e}));var e=f(v,c);setTimeout((function(){h((function(e){return!e})),l(v),n((0,u.o7)(v)),setTimeout((function(){n((0,u.we)(e)),n((0,u.V1)());var t=m(e);t&&n((0,u.Kr)()),t||15!==r||n((0,d.s5)("lose"))}),1e3)}),450)},children:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0445\u043e\u0434"})},x=function(e){var t=e.show,n=(0,a.v9)((function(e){return e.gameReducer.lifePower})),r=o()({counter:!0,counter_visibility:t,counter_opacity:t}),s=o()({counter__line:!0,counter__line_danger:!(n>60),counter__line_verydanger:!(n>30)}),i={width:n};return(0,_.jsxs)("div",{className:r,children:[(0,_.jsx)("span",{className:"counter__label",children:"\u0412\u0430\u0448\u0430 \u044d\u043d\u0435\u0440\u0433\u0438\u044f"}),(0,_.jsx)("div",{className:s,style:i})]})},g=function(e){var t=e.show,n=(0,a.I0)(),r=o()({"user-code-field":!0,"user-code-field_visibility":t,"user-code-field_opacity":t});return(0,_.jsxs)("div",{className:r,id:"user-code-field",onClick:function(e){return function(e){e.target!==e.currentTarget&&(n((0,u.L6)(e.target.id)),e.target.classList.add("user-code-field__item_pressed"),setTimeout((function(){e.target.classList.remove("user-code-field__item_pressed"),n((0,u.Mx)())}),400))}(e)},children:[(0,_.jsx)("div",{className:"user-code-field__item",id:"first"}),(0,_.jsx)("div",{className:"user-code-field__item",id:"second"}),(0,_.jsx)("div",{className:"user-code-field__item",id:"third"}),(0,_.jsx)("div",{className:"user-code-field__item",id:"fourth"})]})},p=function(){var e=(0,a.v9)((function(e){return e.gameReducer.isChooseColor})),t=(0,a.v9)((function(e){return e.gameReducer.codeItemId})),n=(0,a.v9)((function(e){return e.gameReducer.usersVariantCode})),r=(0,a.I0)(),c=(0,i.useState)(!1),d=(0,s.Z)(c,2),l=d[0],f=d[1],m=(0,i.useState)(!1),v=(0,s.Z)(m,2),x=v[0],g=v[1];(0,i.useEffect)((function(){if(!1!==e||!1!==l)return!0===e&&!1===l?(f((function(e){return!e})),void setTimeout((function(){g((function(e){return!e}))}),50)):void(!1===e&&!0===l&&(g((function(e){return!e})),setTimeout((function(){f((function(e){return!e}))}),350)))}),[e]);var p=o()({palitra:!0,palitra_display:l,palitra_opacity:x});return(0,_.jsx)("div",{className:p,children:(0,_.jsxs)("div",{className:"palitra__box",onClick:function(e){return function(e){if(e.target!==e.currentTarget)if("cancel"===e.target.id){r((0,u.z9)(""));var s="user-code-field__item_".concat(n["".concat(t)]);r((0,u.Rp)()),e.target.classList.add("palitra__box-item_pressed"),setTimeout((function(){e.target.classList.remove("palitra__box-item_pressed"),r((0,u.Mx)()),setTimeout((function(){document.getElementById("".concat(t)).classList.remove(s)}),500)}),350)}else{r((0,u.z9)(e.target.id));var i="user-code-field__item_".concat(n["".concat(t)]);r((0,u.Rp)()),e.target.classList.add("palitra__box-item_pressed"),setTimeout((function(){e.target.classList.remove("palitra__box-item_pressed"),r((0,u.Mx)()),setTimeout((function(){document.getElementById("".concat(t)).classList.remove(i);var n="user-code-field__item_".concat(e.target.id);document.getElementById("".concat(t)).classList.add(n)}),500)}),350)}}(e)},children:[(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_red",id:"red"}),(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_yellow",id:"yellow"}),(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_blue",id:"blue"}),(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_green",id:"green"}),(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_brown",id:"brown"}),(0,_.jsx)("div",{className:"palitra__box-item palitra__box-item_cancel",id:"cancel",children:"\u041e\u0442\u043c\u0435\u043d\u0438\u0442\u044c"})]})})},h=n(829),b=function(e){var t=e.classField;return(0,_.jsx)("div",{className:t})},j=function(e){var t=e.userCode,n=[];for(var r in t){var s="item-of-user-code item-of-user-code_".concat(t["".concat(r)]),i=(0,_.jsx)(b,{classField:s},(0,h.x0)());n.push(i)}return(0,_.jsx)("div",{className:"user-move",children:n})},y=function(e){var t=e.classField;return(0,_.jsx)("div",{className:t})},N=function(e){var t=e.answer.map((function(e){switch(e){case"yes":return(0,_.jsx)(y,{classField:"item-of-answer item-of-answer_yes"},(0,h.x0)());case"no":return(0,_.jsx)(y,{classField:"item-of-answer item-of-answer_no"},(0,h.x0)());case"almost":return(0,_.jsx)(y,{classField:"item-of-answer item-of-answer_almost"},(0,h.x0)());default:return"Unknown case"}}));return(0,_.jsx)("div",{className:"answer",children:t})},w=function(){var e,t=(0,a.v9)((function(e){return e.globalReducer.bgGame})),n=(0,a.v9)((function(e){return e.gameReducer.isWin})),c=(0,a.v9)((function(e){return e.gameReducer.usersMoves})),u=(0,a.v9)((function(e){return e.gameReducer.responsesToUserMoves})),l=(0,a.v9)((function(e){return e.gameReducer.winSpeech})),f=(0,i.useState)(null),m=(0,s.Z)(f,2),v=m[0],x=m[1],g=(0,i.useState)(null),p=(0,s.Z)(g,2),h=p[0],b=p[1],y=(0,i.useState)(!1),w=(0,s.Z)(y,2),R=w[0],C=w[1];(0,i.useEffect)((function(){null!=c[c.length-1]&&(x((0,_.jsx)(j,{userCode:c[c.length-1]})),b((0,_.jsx)(N,{answer:u[u.length-1]})),setTimeout((function(){C((function(e){return!e}))}),1e3),I((0,d.bz)()))}),[n]);var T=(0,i.useState)(!1),S=(0,s.Z)(T,2),M=S[0],Z=S[1],I=(0,a.I0)(),L=o()({"victory-message__btn-next":!0,"victory-message__btn-next_press":M}),k=o()((e={"victory-message":!0},(0,r.Z)(e,"victory-message_".concat(t),!0),(0,r.Z)(e,"victory-message_display",R),(0,r.Z)(e,"victory-message_opacity",R),e)),E=(0,i.useMemo)((function(){return l[Math.floor(Math.random()*(l.length-1+1))+1-1]}),[]);return(0,_.jsxs)("div",{className:k,children:[(0,_.jsx)("span",{className:"victory-message__words",children:E}),h,v,(0,_.jsx)("button",{className:L,onClick:function(){Z((function(e){return!e})),setTimeout((function(){Z((function(e){return!e})),setTimeout((function(){I((0,d.s5)("finish"))}),400)}),400)},children:"\u0414\u0430\u043b\u044c\u0448\u0435"})]})},R=function(){var e=(0,a.v9)((function(e){return e.gameReducer.usersMoves})),t=(0,a.v9)((function(e){return e.gameReducer.responsesToUserMoves})),n=e.map((function(e){return(0,_.jsx)(j,{userCode:e},(0,h.x0)())})),r=t.map((function(e){return(0,_.jsx)(N,{answer:e},(0,h.x0)())}));return(0,_.jsxs)("div",{className:"field-of-moves",children:[(0,_.jsx)("div",{className:"field-of-moves__responses",children:r}),(0,_.jsx)("div",{className:"field-of-moves__requests",children:n})]})},C=function(e){for(var t in e)if(""===e["".concat(t)])return!1;return!0},T=function(){var e=(0,a.I0)(),t=(0,a.v9)((function(e){return e.gameReducer.usersVariantCode})),n=(0,a.v9)((function(e){return e.gameReducer.isCodeReady})),c=(0,i.useState)(!1),d=(0,s.Z)(c,2),l=d[0],f=d[1];(0,i.useEffect)((function(){setTimeout((function(){f(!l)}),50)}),[]),(0,i.useEffect)((function(){var r=C(t);(r&&!n||!r&&n)&&e((0,u.BV)())}),[t]);var m=(0,a.v9)((function(e){return e.globalReducer.bgGame})),h=o()((0,r.Z)({"game-view":!0},"game-".concat(m),!0));return(0,_.jsxs)("div",{className:h,children:[(0,_.jsx)(R,{}),(0,_.jsx)(g,{show:l}),(0,_.jsx)(v,{show:l}),(0,_.jsx)(x,{show:l}),(0,_.jsx)(p,{}),(0,_.jsx)(w,{})]})}}}]);
//# sourceMappingURL=206.f42c506f.chunk.js.map