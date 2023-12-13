import{w as s,e as i}from"./index-f6f93707.js";import{H as B}from"./HeaderSection-9a4aa509.js";import"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const E={component:B,title:"components/atoms/HeaderSection",args:{}},t={args:{secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",primary:"Support Center",textCenter:!1},play:async({canvasElement:a,step:o})=>{const e=s(a);await i(e.getByText("Support Center")).toBeInTheDocument()}},n={args:{textCenter:!0,primary:"Buy Buy Buy!!!",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."},play:async({canvasElement:a,step:o})=>{const e=s(a);await i(e.getByText("Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.")).toBeInTheDocument()}},r={args:{textCenter:!1,primary:"Products",secondary:"Here are all your products"},play:async({canvasElement:a,step:o})=>{const e=s(a);await i(e.getByText("Buy Buy Buy!!!")).toBeInTheDocument()}};var u,c,m;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
} satisfies Story`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var d,p,l;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
} satisfies Story`,...(l=(p=n.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var y,g,f;r.parameters={...r.parameters,docs:{...(y=r.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
} satisfies Story`,...(f=(g=r.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const C=["Default","WithCenter","WithTitleOnly"];export{t as Default,n as WithCenter,r as WithTitleOnly,C as __namedExportsOrder,E as default};
