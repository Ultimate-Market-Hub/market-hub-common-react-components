import{j as e}from"./jsx-runtime-6eef64cc.js";import{f as g}from"./index-f6f93707.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const r=({options:n,onChange:m,ariaLabel:h,value:f,placeholder:s,fullWidth:b=!0})=>e.jsx("select",{className:`text-16 focus:ring-primary-hub-500500 block rounded-[6px] border-primary-light-grey py-2 pl-4 pr-14 focus:border-primary-hub-500 focus:outline-none sm:text-sm ${b?"w-full":""}`,onChange:m,"aria-label":h,value:f??"",children:e.jsxs(e.Fragment,{children:[s&&e.jsx("option",{value:"",disabled:!0,hidden:!0,children:s}),n.map(l=>e.jsx("option",{value:l.value,children:l.name},l.value))]})});try{r.displayName="Select",r.__docgenInfo={description:"",displayName:"Select",props:{options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"SelectOption<string, string>[]"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!0,type:{name:"(event: ChangeEvent<HTMLSelectElement>) => void"}},ariaLabel:{defaultValue:null,description:"",name:"ariaLabel",required:!0,type:{name:"string"}},value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},fullWidth:{defaultValue:{value:"true"},description:"",name:"fullWidth",required:!1,type:{name:"boolean"}}}}}catch{}const W={component:r,title:"components/atoms/Select",args:{onChange:g(),fullWidth:!1}},a={args:{options:[{name:"test",value:"checked",disabled:!1},{name:"test 2",value:"checked 2",disabled:!0}],ariaLabel:"with-disabled"}},t={args:{options:[{name:"test",value:"checked",disabled:!1},{name:"test 2",value:"checked 2",disabled:!1}],placeholder:"Select Mew!!",ariaLabel:"with-disabled",fullWidth:!0}};var i,d,o;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    options: [{
      name: 'test',
      value: 'checked',
      disabled: false
    }, {
      name: 'test 2',
      value: 'checked 2',
      disabled: true
    }],
    ariaLabel: 'with-disabled'
  }
} satisfies Story`,...(o=(d=a.parameters)==null?void 0:d.docs)==null?void 0:o.source}}};var u,c,p;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    options: [{
      name: 'test',
      value: 'checked',
      disabled: false
    }, {
      name: 'test 2',
      value: 'checked 2',
      disabled: false
    }],
    placeholder: 'Select Mew!!',
    ariaLabel: 'with-disabled',
    fullWidth: true
  }
} satisfies Story`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const _=["WithDisabled","WithFullWidth"];export{a as WithDisabled,t as WithFullWidth,_ as __namedExportsOrder,W as default};
