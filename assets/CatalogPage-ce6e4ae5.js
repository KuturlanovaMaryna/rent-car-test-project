import{u as s,r as n,j as e,a as h,b as p,g,L as u,F as b}from"./index-2c7c7c0b.js";import{C as f}from"./CarsList-e5ffff69.js";const m=s.div`
  max-width: 1440px;
  padding-left: 128px;
  padding-right: 128px;
  margin-left: auto;
  margin-right: auto;
`,w=t=>t.cars.carsData,C=t=>t.cars.isLoading,j=s.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 50px;
  position: relative;

  .dropDown {
    z-index: 1000;
    position: absolute;
    top: 70px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: white;
    width: 224px;
    height: 272px;
    overflow: auto;
    padding: 14px;
    scrollbar-width: thin;
  }

  .dropDown li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 4px 0;
    cursor: pointer;
  }

  .dropDown li:hover {
    color: black;
    background-color: rgba(52, 112, 255, 0.5);
    width: 100%;
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }
`,v=s.div`
  position: relative;
  border-radius: 14px;
  border: 1px solid #f7f7fb;
  background: #f7f7fb;
  width: 224px;
  height: 48px;
  padding: 14px 18px;
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`,k=s.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  padding-left: 14px;
  color: #8a8a89;
`,S=s.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
`,L=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Chrysler","Kia","Land"],y=({onClick:t})=>{const[r,a]=n.useState(""),[o,d]=n.useState(""),[l,c]=n.useState(!1),x=()=>{t(r)};return e.jsxs(j,{children:[e.jsxs("div",{onClick:()=>c(!l),children:[e.jsx(k,{children:"Car brand"}),e.jsx(v,{children:o||"Select a brand"}),e.jsx("ul",{className:`dropDown ${l?"visible":"hidden"}`,children:L.map(i=>e.jsx("li",{onClick:()=>{i.toLowerCase()!==o.toLowerCase()&&(d(i),c(!1),a(i))},children:i},i))})]}),e.jsx(S,{onClick:x,children:"Search"})]})},M=()=>{const t=h(),r=p(w),a=p(C);n.useEffect(()=>{t(g())},[t]);const o=d=>{t(b(d))};return e.jsx(m,{children:a?e.jsx(u,{}):e.jsxs(e.Fragment,{children:[e.jsx(y,{onClick:o}),e.jsx(f,{cars:r})]})})};export{M as default};
