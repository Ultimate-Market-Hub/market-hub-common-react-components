import{w as m,e as d}from"./index-f6f93707.js";import{D as l}from"./DarkHeaderSection-b6e5ca82.js";import"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const x={component:l,title:"components/atoms/DarkHeaderSection",args:{textCenter:!1,primary:"Support center",leading:"Get the help you need",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."}},a={args:{secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.",primary:"Support Center",textCenter:!1},play:async({canvasElement:t,step:p})=>{const n=m(t);await d(n.getByText("Support Center")).toBeInTheDocument()}},e={args:{textCenter:!0,primary:"Buy everthing you can",secondary:"Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua."},play:async({canvasElement:t,step:p})=>{const n=m(t);await d(n.getByText("Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.")).toBeInTheDocument()}};var i,r,u;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
} satisfies Story`,...(u=(r=a.parameters)==null?void 0:r.docs)==null?void 0:u.source}}};var o,s,c;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
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
} satisfies Story`,...(c=(s=e.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const h=["Default","WithCenter"];export{a as Default,e as WithCenter,h as __namedExportsOrder,x as default};
