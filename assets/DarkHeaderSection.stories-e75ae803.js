import{w as p,e as g}from"./index-f6f93707.js";import{j as a}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function u({leading:e,secondary:n,primary:t,textCenter:y,backColor:x="bg-primary-hub"}){return a.jsx("div",{className:`${x} py-24 sm:py-32`,children:a.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:a.jsxs("div",{className:`mx-auto max-w-2xl ${y?"text-center":"lg:mx-0"}`,children:[e&&a.jsx("p",{className:"text-base font-semibold leading-7 text-white",children:e}),a.jsx("h2",{className:"mt-2 text-4xl font-bold font-branded tracking-tight text-primary-white sm:text-6xl",children:t}),n&&a.jsx("p",{className:"mt-6 text-lg leading-8 font-thin text-primary-white",children:n})]})})})}try{u.displayName="DarkHeaderSection",u.__docgenInfo={description:"",displayName:"DarkHeaderSection",props:{leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"string"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}},primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"string"}},textCenter:{defaultValue:null,description:"",name:"textCenter",required:!0,type:{name:"boolean"}},backColor:{defaultValue:{value:"bg-primary-hub"},description:"",name:"backColor",required:!1,type:{name:"string"}}}}}catch{}const C={component:u,title:"components/atoms/DarkHeaderSection",args:{textCenter:!1,primary:"Support center",leading:"Get the help you need",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}},i={args:{secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",primary:"Support Center",textCenter:!1},play:async({canvasElement:e,step:n})=>{const t=p(e);await g(t.getByText("Support Center")).toBeInTheDocument()}},r={args:{textCenter:!0,primary:"Buy everthing you can",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."},play:async({canvasElement:e,step:n})=>{const t=p(e);await g(t.getByText("Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.")).toBeInTheDocument()}};var s,o,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.',
    primary: 'Support Center',
    textCenter: false
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Support Center')).toBeInTheDocument();
  }
} satisfies Story`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,d,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    textCenter: true,
    primary: 'Buy everthing you can',
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.')).toBeInTheDocument();
  }
} satisfies Story`,...(l=(d=r.parameters)==null?void 0:d.docs)==null?void 0:l.source}}};const w=["Default","WithCenter"];export{i as Default,r as WithCenter,w as __namedExportsOrder,C as default};
