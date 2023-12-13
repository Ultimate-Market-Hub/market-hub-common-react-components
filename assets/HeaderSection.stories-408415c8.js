import{w as u,e as c}from"./index-f6f93707.js";import{j as t}from"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";function o({leading:e,secondary:n,primary:a,textCenter:q,tightSecondary:v,bgColor:B}){return t.jsx("div",{className:`${B??""} py-24 sm:py-32`,children:t.jsx("div",{className:"mx-auto max-w-7xl px-6 lg:px-8",children:t.jsxs("div",{className:`mx-auto max-w-2xl ${q?"text-center":"lg:mx-0"}`,children:[e&&t.jsx("p",{className:"text-base font-semibold leading-7 text-indigo-600",children:e}),t.jsx("h2",{className:"mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl",children:a}),n&&t.jsx("p",{className:`${v?"mt-2":"mt-6"} text-lg leading-8 text-gray-600`,children:n})]})})})}try{o.displayName="HeaderSection",o.__docgenInfo={description:"",displayName:"HeaderSection",props:{primary:{defaultValue:null,description:"",name:"primary",required:!0,type:{name:"string"}},textCenter:{defaultValue:null,description:"",name:"textCenter",required:!0,type:{name:"boolean"}},tightSecondary:{defaultValue:null,description:"",name:"tightSecondary",required:!0,type:{name:"boolean"}},bgColor:{defaultValue:null,description:"",name:"bgColor",required:!1,type:{name:"string"}},leading:{defaultValue:null,description:"",name:"leading",required:!1,type:{name:"string"}},secondary:{defaultValue:null,description:"",name:"secondary",required:!1,type:{name:"string"}}}}}catch{}const w={component:o,title:"components/atoms/HeaderSection",args:{}},r={args:{secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",primary:"Support Center",textCenter:!1},play:async({canvasElement:e,step:n})=>{const a=u(e);await c(a.getByText("Support Center")).toBeInTheDocument()}},i={args:{textCenter:!0,primary:"Buy Buy Buy!!!",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."},play:async({canvasElement:e,step:n})=>{const a=u(e);await c(a.getByText("Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.")).toBeInTheDocument()}},s={args:{textCenter:!1,primary:"Products",secondary:"Here are all your products"},play:async({canvasElement:e,step:n})=>{const a=u(e);await c(a.getByText("Buy Buy Buy!!!")).toBeInTheDocument()}};var m,l,d;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
} satisfies Story`,...(d=(l=r.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,y,g;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    textCenter: true,
    primary: 'Buy Buy Buy!!!',
    secondary: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.')).toBeInTheDocument();
  }
} satisfies Story`,...(g=(y=i.parameters)==null?void 0:y.docs)==null?void 0:g.source}}};var x,f,h;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    textCenter: false,
    primary: 'Products',
    secondary: 'Here are all your products'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Buy Buy Buy!!!')).toBeInTheDocument();
  }
} satisfies Story`,...(h=(f=s.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _=["Default","WithCenter","WithTitleOnly"];export{r as Default,i as WithCenter,s as WithTitleOnly,_ as __namedExportsOrder,w as default};
