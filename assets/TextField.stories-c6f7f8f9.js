import{T as A}from"./TextField-df2fd3e1.js";import{f as O,w as r,e as s,u as D}from"./index-f6f93707.js";import"./jsx-runtime-ffb262ed.js";import"./index-76fb7be0.js";import"./_commonjsHelpers-de833af9.js";import"./index-e131923d.js";import"./ExclamationTriangleIcon-7a525c68.js";import"./ExclamationTriangleIcon-8f577149.js";const K={component:A,title:"components/atoms/TextField",args:{id:"input-id",onChange:O()}},o={play:async({args:e,canvasElement:t})=>{const a=r(t);await s(a.getByRole("textbox")).toHaveAttribute("id","input-id"),await D.type(a.getByRole("textbox"),"hello world"),await s(e.onChange).toHaveBeenCalled()}},i={args:{"data-testid":"this is a testId"}},c={args:{hint:"this is a hint"},play:async({canvasElement:e})=>{const t=r(e);await s(t.getByRole("note")).toHaveTextContent("this is a hint")}},n={args:{label:"this is a label"}},l={args:{...n.args,required:!0},play:async({canvasElement:e})=>{const a=r(e).getByLabelText(/this is a label/);await s(a).toBeRequired()}},p={args:{error:"this is an error"},play:async({canvasElement:e,step:t})=>{const a=r(e);await s(a.getByRole("alert")).toHaveTextContent("this is an error"),await t("hint is not shown",async()=>{await s(a.queryByRole("note")).not.toBeInTheDocument()})}},d={args:{isLoading:!0},play:async({canvasElement:e,step:t})=>{const a=r(e);await s(a.getByRole("textbox")).toHaveAttribute("readOnly")}};var m,y,h;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).toHaveAttribute('id', 'input-id');
    await userEvent.type(canvas.getByRole('textbox'), 'hello world');
    await expect(args.onChange).toHaveBeenCalled();
  }
} satisfies Story`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var u,g,v;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  //@ts-ignore
  args: {
    'data-testid': 'this is a testId'
  }
} satisfies Story`,...(v=(g=i.parameters)==null?void 0:g.docs)==null?void 0:v.source}}};var x,w,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    hint: 'this is a hint'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('note')).toHaveTextContent('this is a hint');
  }
} satisfies Story`,...(b=(w=c.parameters)==null?void 0:w.docs)==null?void 0:b.source}}};var B,R,E;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    label: 'this is a label'
  }
} satisfies Story`,...(E=(R=n.parameters)==null?void 0:R.docs)==null?void 0:E.source}}};var S,T,W;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    ...WithLabel.args,
    required: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(/this is a label/);
    await expect(label).toBeRequired();
  }
} satisfies Story`,...(W=(T=l.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var f,H,C;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    error: 'this is an error'
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('alert')).toHaveTextContent('this is an error');
    await step('hint is not shown', async () => {
      await expect(canvas.queryByRole('note')).not.toBeInTheDocument();
    });
  }
} satisfies Story`,...(C=(H=p.parameters)==null?void 0:H.docs)==null?void 0:C.source}}};var L,q,I;d.parameters={...d.parameters,docs:{...(L=d.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    isLoading: true
  },
  play: async ({
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('textbox')).toHaveAttribute('readOnly');
  }
} satisfies Story`,...(I=(q=d.parameters)==null?void 0:q.docs)==null?void 0:I.source}}};const M=["Playground","WithTestId","WithHint","WithLabel","WithRequired","WithError","WithLoading"];export{o as Playground,p as WithError,c as WithHint,n as WithLabel,d as WithLoading,l as WithRequired,i as WithTestId,M as __namedExportsOrder,K as default};
