import{u as e,b as i,j as r}from"./index-2c7c7c0b.js";import{s as o,C as a}from"./CarsList-e5ffff69.js";const s=e.section`
  padding-top: 10px;
  padding-bottom: 10px;
  min-height: 85vh;
`,n=e.div`
  max-width: 1440px;
  padding-left: 128px;
  padding-right: 128px;
  margin-left: auto;
  margin-right: auto;

  .li {
    border: 1px solid black;
    border-radius: 12px;
    padding: 4px;
  }
`,d=e.h1`
  text-align: center;
  font-size: 38px;
  line-height: 1.5;
  color: rgba(52, 112, 255, 1);
`,p=e.p`
  text-align: center;
  font-size: 34px;
  margin-top: 50px;
  color: rgba(52, 112, 255, 1);
`,c=()=>{const t=i(o);return r.jsx(s,{children:r.jsxs(n,{children:[r.jsx(d,{children:"Yours favorite cars:"}),t&&t.length===0&&r.jsxs(p,{children:["Sorry, but you do not have any favorite car.","😎"]}),t&&t.length>0&&r.jsx(a,{cars:t})]})})};export{c as default};
