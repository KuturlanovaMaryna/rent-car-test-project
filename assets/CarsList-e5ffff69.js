import{u as a,R as l,r as x,j as t,a as v,b as w,c as y,d as k}from"./index-2c7c7c0b.js";const C=a.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`,O=a.button`
  background-color: transparent;
  border: none;
  color: #3470ff;
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 150px;
  transition: color 300ms linear;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;var b={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},f=l.createContext&&l.createContext(b),N=["attr","size","title"];function P(e,r){if(e==null)return{};var i=z(e,r),n,o;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],!(r.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function z(e,r){if(e==null)return{};var i={},n=Object.keys(e),o,s;for(s=0;s<n.length;s++)o=n[s],!(r.indexOf(o)>=0)&&(i[o]=e[o]);return i}function p(){return p=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var i=arguments[r];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},p.apply(this,arguments)}function u(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter(function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable})),i.push.apply(i,n)}return i}function h(e){for(var r=1;r<arguments.length;r++){var i=arguments[r]!=null?arguments[r]:{};r%2?u(Object(i),!0).forEach(function(n){S(e,n,i[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):u(Object(i)).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))})}return e}function S(e,r,i){return r=E(r),r in e?Object.defineProperty(e,r,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[r]=i,e}function E(e){var r=L(e,"string");return typeof r=="symbol"?r:String(r)}function L(e,r){if(typeof e!="object"||e===null)return e;var i=e[Symbol.toPrimitive];if(i!==void 0){var n=i.call(e,r||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function j(e){return e&&e.map((r,i)=>l.createElement(r.tag,h({key:i},r.attr),j(r.child)))}function g(e){return r=>l.createElement(M,p({attr:h({},e.attr)},r),j(e.child))}function M(e){var r=i=>{var{attr:n,size:o,title:s}=e,m=P(e,N),d=o||i.size||"1em",c;return i.className&&(c=i.className),e.className&&(c=(c?c+" ":"")+e.className),l.createElement("svg",p({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},i.attr,n,m,{className:c,style:h(h({color:e.color||i.color},i.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&l.createElement("title",null,s),e.children)};return f!==void 0?l.createElement(f.Consumer,null,i=>r(i)):r(b)}function I(e){return g({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"},child:[]}]})(e)}const F=a.div`
  z-index: 1600;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  &:hover {
    cursor: pointer;
  }
`,B=a.div`
  width: 90%;
  max-width: 541px;
  min-height: 70%;
  background-color: white;
  border-radius: 24px;
  position: absolute;
  overflow: hidden;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  &:hover {
    cursor: auto;
  }
`,D=a.button`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: stroke 300ms linear;
  cursor: pointer;
  background-color: transparent;
  border: none;
`,_=a(I)`
  width: 24px;
  height: 24px;
  stroke: black;
`,R=a.div`
  padding: 40px;
  border-radius: 12px;
  width: 541px;

  img {
    border-radius: 14px;
    margin-bottom: 14px;
    width: 100%;
  }

  .more-info-container {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  .more-info-container span {
    margin-right: 6px;
  }

  .more-info-container span:not(:nth-child(5n + 1)) {
    margin-left: 6px;
  }

  .access span {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .access-title,
  .rent-title {
    color: #121417;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  .rent-positions-container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .rent-position {
    padding: 7px 14px;
    background-color: rgba(249, 249, 249, 1);
    font-size: 12px;
    line-height: 1.5;
    color: rgba(54, 53, 53, 1);
    border-radius: 35px;
  }

  .colorize {
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(52, 112, 255, 1);
  }
`,T=a.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 14px;
  max-width: 277px;

  .color-title {
    color: rgba(52, 112, 255, 1);

   h2,
   p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
  }
`,$=a.div`
  font-size: 14px;
  line-height: 1.43;
`,A=a.a`
  display: block;
  background-color: #3470ff;
  padding: 12px 50px;
  color: #ffffff;
  text-decoration: none;
  width: 168px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  margin-top: 24px;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`,W=({car:e,closeModal:r})=>{x.useEffect(()=>{const n=o=>{o.code==="Escape"&&r()};return window.addEventListener("keydown",n),document.body.style.overflow="hidden",()=>{window.removeEventListener("keydown",n),document.body.style.overflow="auto"}},[r]);const i=n=>{n.target===n.currentTarget&&r()};return t.jsx(F,{onClick:i,children:t.jsxs(B,{children:[t.jsx(D,{onClick:()=>r(!1),className:"closeBtn",children:t.jsx(_,{})}),t.jsxs(R,{children:[t.jsx("img",{src:e.img,alt:`${e.make} - ${e.model}`}),t.jsxs(T,{children:[t.jsxs("h2",{children:[e.make," ",t.jsxs("span",{className:"color-title",children:[e.model,","]})," ",e.year]}),t.jsxs("div",{className:"more-info-container",children:[t.jsx("span",{children:e.address.split(", ")[1]}),"|",t.jsx("span",{children:e.address.split(", ")[2]}),"|",t.jsxs("span",{children:["Id:",e.id]}),"|",t.jsxs("span",{children:["Year: ",e.year," "]})," |",t.jsxs("span",{children:["Type: ",e.type]})," ",t.jsxs("span",{children:["Fuel Consumption",e.fuelConsumption]}),"|",t.jsxs("span",{children:["Engine Size: ",e.engineSize]})]})]}),t.jsx($,{children:e.description}),t.jsxs("div",{className:"access-func",children:[t.jsx("h3",{className:"access-title",children:"Accessories and functionalities:"}),t.jsxs("div",{className:"access",children:[e.accessories.map((n,o,s)=>t.jsx("span",{children:o===s.length-1?n:`${n} | `},n)),e.functionalities.map((n,o,s)=>t.jsxs("span",{children:[o===s.length-1?n:`${n} | `," "]},n))]})]}),t.jsxs("div",{children:[t.jsx("h3",{className:"rent-title",children:"Rental Conditions "}),t.jsxs("div",{className:"rent-positions-container",children:[e.rentalConditions.split(`
`).map((n,o)=>o===0?t.jsxs("p",{className:"rent-position monserat",children:[n.split(" ")[0]," ",n.split(" ")[1]," ",t.jsx("span",{className:"colorize",children:n.split(" ")[2]})]},o):t.jsx("p",{className:"rent-position manrope",children:n},o)),t.jsxs("p",{className:"rent-position monserat",children:["Mileage:"," ",t.jsx("span",{className:"colorize",children:e.mileage.toLocaleString("ru-RU")})]}),t.jsxs("p",{className:"rent-position monserat",children:["Price: ",t.jsx("span",{className:"colorize",children:e.rentalPrice})]})]})]}),t.jsx(A,{href:"tel:++380730000000",children:"Rental car"})]})]})})};function K(e){return g({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M240,98a57.63,57.63,0,0,1-17,41L133.7,229.62a8,8,0,0,1-11.4,0L33,139a58,58,0,0,1,82-82.1L128,69.05l13.09-12.19A58,58,0,0,1,240,98Z"},child:[]}]})(e)}function Z(e){return g({tag:"svg",attr:{viewBox:"0 0 256 256",fill:"currentColor"},child:[{tag:"path",attr:{d:"M178,36c-21.44,0-39.92,10.19-50,27.07C117.92,46.19,99.44,36,78,36A58.07,58.07,0,0,0,20,94c0,28.59,18,58.47,53.4,88.79a333.81,333.81,0,0,0,52.7,36.73,4,4,0,0,0,3.8,0,333.81,333.81,0,0,0,52.7-36.73C218,152.47,236,122.59,236,94A58.07,58.07,0,0,0,178,36ZM128,211.42C114,203.46,28,152.07,28,94A50.06,50.06,0,0,1,78,44c21.11,0,38.85,11.31,46.3,29.51a4,4,0,0,0,7.4,0C139.15,55.31,156.89,44,178,44a50.06,50.06,0,0,1,50,50C228,152,142,203.46,128,211.42Z"},child:[]}]})(e)}const G=a.li`
  width: calc((100% - 87px) / 4);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .img-container {
    max-width: 100%;
    margin-bottom: 14px;
    position: relative;
  }

  .img-container img {
    width: 100%;
    height: 268px;
    background: linear-gradient(rgba(18, 20, 23, 0.5), rgba(18, 20, 23, 0));
    border-radius: 14px;
  }

  .favorite-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 14px;
    right: 14px;
  }

  .info-container {
    margin-bottom: 28px;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .title-container h2,
  .title-container p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 1);
  }

  .title-container span {
    color: rgba(52, 112, 255, 1);
  }

  .more-info {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  .more-info span {
    margin-right: 6px;
  }

  .more-info span:not(:nth-child(4n + 1)) {
    margin-left: 6px;
  }

  .learn-more-btn {
    margin-top: auto;
    background-color: #3470ff;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    transition: background-color 250ms linear;
  }

  .learn-more-btn:hover,
  .learn-more-btn:focus {
    background-color: #0b44cd;
  }
`,H=a(K)`
  width: 18px;
  height: 18px;
  color: #3470ff;
`,U=a(Z)`
  width: 18px;
  height: 18px;
  color: white;
`,Y=e=>e.favorites.favorites,q=({car:e})=>{const[r,i]=x.useState(!1),n=v(),o=w(Y),s=o==null?void 0:o.some(d=>d.id===e.id),m=()=>{n(s?y(e):k(e))};return t.jsxs(t.Fragment,{children:[t.jsxs(G,{children:[t.jsxs("div",{className:"img-container",children:[t.jsx("button",{className:"favorite-btn",onClick:m,children:s?t.jsx(H,{}):t.jsx(U,{size:18})}),t.jsx("img",{src:e.img,alt:`${e.make} - ${e.model}`})]}),t.jsxs("div",{className:"info-container",children:[t.jsxs("div",{className:"title-container",children:[t.jsxs("h2",{children:[e.make," ",t.jsxs("span",{children:[e.model,","]})," ",e.year]}),t.jsx("p",{children:e.rentalPrice})]}),t.jsxs("div",{className:"more-info",children:[t.jsx("span",{children:e.address.split(", ")[1]}),"|",t.jsx("span",{children:e.address.split(", ")[2]}),"|",t.jsx("span",{children:e.rentalCompany}),"|",t.jsx("span",{children:"Premium "}),t.jsx("span",{children:e.type}),"|",t.jsx("span",{children:e.model}),"|",t.jsx("span",{children:e.mileage}),"|",t.jsx("span",{children:e.functionalities[0]})]})]}),t.jsx("button",{className:"learn-more-btn",onClick:()=>i(!0),children:"Learn more"})]}),r&&t.jsx(W,{car:e,closeModal:i})]})},Q=({cars:e})=>{const[r,i]=x.useState(12),n=()=>{i(o=>o+12)};return t.jsxs(t.Fragment,{children:[t.jsx(C,{children:e==null?void 0:e.slice(0,r).map(o=>t.jsx(q,{car:o},o.id))}),t.jsx(O,{onClick:n,children:"Load more"})]})};export{Q as C,Y as s};
