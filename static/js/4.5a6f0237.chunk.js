(this.webpackJsonplebenslauf=this.webpackJsonplebenslauf||[]).push([[4],{55:function(e,t,c){"use strict";c.r(t);var a=c(2),n=c(5),r=c(7),s=c.n(r),o=c(0),i=c(19),l=c(8),m=c(29),j=o.createContext({});j.displayName="AccordionContext";var d=j,b=c(1),u=["as","bsPrefix","className","children","eventKey"],y=o.forwardRef((function(e,t){var c=e.as,r=void 0===c?"div":c,i=e.bsPrefix,j=e.className,y=e.children,x=e.eventKey,O=Object(n.a)(e,u),v=Object(o.useContext)(d).activeEventKey;return i=Object(l.a)(i,"accordion-collapse"),Object(b.jsx)(m.a,Object(a.a)(Object(a.a)({ref:t,in:v===x},O),{},{className:s()(j,i),children:Object(b.jsx)(r,{children:o.Children.only(y)})}))}));y.displayName="AccordionCollapse";var x=y,O=o.createContext({eventKey:""});O.displayName="AccordionItemContext";var v=O,f=["as","bsPrefix","className"],h=o.forwardRef((function(e,t){var c=e.as,r=void 0===c?"div":c,i=e.bsPrefix,m=e.className,j=Object(n.a)(e,f);i=Object(l.a)(i,"accordion-body");var d=Object(o.useContext)(v).eventKey;return Object(b.jsx)(x,{eventKey:d,children:Object(b.jsx)(r,Object(a.a)(Object(a.a)({ref:t},j),{},{className:s()(m,i)}))})}));h.displayName="AccordionBody";var N=h,I=["as","bsPrefix","className","onClick"];var P=o.forwardRef((function(e,t){var c=e.as,r=void 0===c?"button":c,i=e.bsPrefix,m=e.className,j=e.onClick,u=Object(n.a)(e,I);i=Object(l.a)(i,"accordion-button");var y=Object(o.useContext)(v).eventKey,x=function(e,t){var c=Object(o.useContext)(d),a=c.activeEventKey,n=c.onSelect;return function(c){n&&n(e===a?null:e,c),t&&t(c)}}(y,j),O=Object(o.useContext)(d).activeEventKey;return"button"===r&&(u.type="button"),Object(b.jsx)(r,Object(a.a)(Object(a.a)({ref:t,onClick:x},u),{},{"aria-expanded":y===O,className:s()(m,i,y!==O&&"collapsed")}))}));P.displayName="AccordionButton";var p=P,C=["as","bsPrefix","className","children","onClick"],K=o.forwardRef((function(e,t){var c=e.as,r=void 0===c?"h2":c,o=e.bsPrefix,i=e.className,m=e.children,j=e.onClick,d=Object(n.a)(e,C);return o=Object(l.a)(o,"accordion-header"),Object(b.jsx)(r,Object(a.a)(Object(a.a)({ref:t},d),{},{className:s()(i,o),children:Object(b.jsx)(p,{onClick:j,children:m})}))}));K.displayName="AccordionHeader";var T=K,k=["as","bsPrefix","className","eventKey"],w=o.forwardRef((function(e,t){var c=e.as,r=void 0===c?"div":c,i=e.bsPrefix,m=e.className,j=e.eventKey,d=Object(n.a)(e,k);i=Object(l.a)(i,"accordion-item");var u=Object(o.useMemo)((function(){return{eventKey:j}}),[j]);return Object(b.jsx)(v.Provider,{value:u,children:Object(b.jsx)(r,Object(a.a)(Object(a.a)({ref:t},d),{},{className:s()(m,i)}))})}));w.displayName="AccordionItem";var R=w,g=["as","activeKey","bsPrefix","className","onSelect","flush"],A=o.forwardRef((function(e,t){var c=Object(i.a)(e,{activeKey:"onSelect"}),r=c.as,m=void 0===r?"div":r,j=c.activeKey,u=c.bsPrefix,y=c.className,x=c.onSelect,O=c.flush,v=Object(n.a)(c,g),f=Object(l.a)(u,"accordion"),h=Object(o.useMemo)((function(){return{activeEventKey:j,onSelect:x}}),[j,x]);return Object(b.jsx)(d.Provider,{value:h,children:Object(b.jsx)(m,Object(a.a)(Object(a.a)({ref:t},v),{},{className:s()(y,f,O&&"".concat(f,"-flush"))}))})}));A.displayName="Accordion";var S=Object.assign(A,{Button:p,Collapse:x,Item:R,Header:T,Body:N}),B=function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("div",{children:Object(b.jsx)("h2",{children:e.menuName})}),Object(b.jsx)("div",{children:Object(b.jsx)(D,{entries:e.entryItem})})]})},D=function(e){return Object(b.jsx)(b.Fragment,{children:e.entries.map((function(e){return Object(b.jsx)("div",{children:Object(b.jsx)(S,{children:Object(b.jsxs)(R,{eventKey:e.entryItemName,children:[Object(b.jsxs)(S.Header,{children:[e.entryItemDatum," - ",e.entryItemName]}),Object(b.jsx)(S.Body,{children:e.entryItemText})]})})})}))})},E=[{entryItemName:"Placeholder",entryItemDatum:"2021-09",entryItemText:"PlaceholderText",entryItemTechnology:"React"},{entryItemName:"Placeholder",entryItemDatum:"2021-09",entryItemText:"PlaceholderText",entryItemTechnology:"React"},{entryItemName:"Placeholder",entryItemDatum:"2021-09",entryItemText:"PlaceholderText",entryItemTechnology:"React"},{entryItemName:"Placeholder",entryItemDatum:"2021-09",entryItemText:"PlaceholderText",entryItemTechnology:"React"},{entryItemName:"Placeholder",entryItemDatum:"2021-09",entryItemText:"PlaceholderText",entryItemTechnology:"React"}];t.default=function(){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(B,{menuName:"Aktuell",entryItem:E}),Object(b.jsx)(B,{menuName:"bisherige Projekte",entryItem:E}),Object(b.jsx)(B,{menuName:"Backend",entryItem:E}),Object(b.jsx)(B,{menuName:"Middleware",entryItem:E}),Object(b.jsx)(B,{menuName:"Schwerpunkte",entryItem:E}),Object(b.jsx)(B,{menuName:"Schwerpunkte",entryItem:E})]})}}}]);
//# sourceMappingURL=4.5a6f0237.chunk.js.map