import{j as e}from"./jsx-runtime-6eef64cc.js";import{r}from"./index-c013ead5.js";import{X as q}from"./XMarkIcon-577f9ab8.js";import{t as i}from"./transition-a03fafff.js";import{_ as l}from"./dialog-dfdaf664.js";import{M as Q}from"./MagnifyingGlassIcon-1dc8750c.js";import{S as E}from"./ShoppingBagIcon-792ab204.js";import{k as p}from"./popover-d801835d.js";import{C as g,Q as j}from"./QuestionMarkCircleIcon-cb99968d.js";import{C as u}from"./ClockIcon-f7828d53.js";import{X as P}from"./XMarkIcon-e81b8eaf.js";import"./_commonjsHelpers-725317a4.js";import"./use-is-mounted-b8dc6585.js";import"./use-owner-3c26545a.js";import"./hidden-e72868fd.js";import"./index-169ee69c.js";import"./use-resolve-button-type-f97b0eac.js";const R=[{id:1,name:"Zip Tote Basket",href:"#",color:"White and black",price:"$140.00",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-03.jpg",imageAlt:"Front of zip tote bag with white canvas, black canvas straps and handle, and black zipper pulls."},{id:2,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."}];function I(){const[s,t]=r.useState(!0);return e.jsx(i.Root,{show:s,as:r.Fragment,children:e.jsxs(l,{as:"div",className:"relative z-10",onClose:t,children:[e.jsx(i.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"hidden sm:fixed sm:inset-0 sm:block sm:bg-gray-500 sm:bg-opacity-75 sm:transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center sm:items-center sm:px-6 lg:px-8",children:e.jsx(i.Child,{as:r.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 scale-105",enterTo:"opacity-100 scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-105",children:e.jsx(l.Panel,{className:"flex w-full max-w-3xl transform text-left text-base transition sm:my-8",children:e.jsxs("form",{className:"relative flex w-full flex-col overflow-hidden bg-white pb-8 pt-6 sm:rounded-lg sm:pb-6 lg:py-8",children:[e.jsxs("div",{className:"flex items-center justify-between px-4 sm:px-6 lg:px-8",children:[e.jsx("h2",{className:"text-lg font-medium text-gray-900",children:"Shopping Cart"}),e.jsxs("button",{type:"button",className:"text-gray-400 hover:text-gray-500",onClick:()=>t(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(q,{className:"h-6 w-6","aria-hidden":"true"})]})]}),e.jsxs("section",{"aria-labelledby":"cart-heading",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 px-4 sm:px-6 lg:px-8",children:R.map((a,h)=>e.jsxs("li",{className:"flex py-8 text-sm sm:items-center",children:[e.jsx("img",{src:a.imageSrc,alt:a.imageAlt,className:"h-24 w-24 flex-none rounded-lg border border-gray-200 sm:h-32 sm:w-32"}),e.jsxs("div",{className:"ml-4 grid flex-auto grid-cols-1 grid-rows-1 items-start gap-x-5 gap-y-3 sm:ml-6 sm:flex sm:items-center sm:gap-0",children:[e.jsxs("div",{className:"row-end-1 flex-auto sm:pr-6",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:e.jsx("a",{href:a.href,children:a.name})}),e.jsx("p",{className:"mt-1 text-gray-500",children:a.color})]}),e.jsx("p",{className:"row-span-2 row-end-2 font-medium text-gray-900 sm:order-1 sm:ml-6 sm:w-1/3 sm:flex-none sm:text-right",children:a.price}),e.jsxs("div",{className:"flex items-center sm:block sm:flex-none sm:text-center",children:[e.jsxs("label",{htmlFor:`quantity-${h}`,className:"sr-only",children:["Quantity, ",a.name]}),e.jsxs("select",{id:`quantity-${h}`,name:`quantity-${h}`,className:"focus:ring-primary-hub-500500 block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx("button",{type:"button",className:"ml-4 font-medium text-primary-hub-700 hover:text-primary-hub-500 sm:ml-0 sm:mt-2",children:e.jsx("span",{children:"Remove"})})]})]})]},a.id))})]}),e.jsx("section",{"aria-labelledby":"summary-heading",className:"mt-auto sm:px-6 lg:px-8",children:e.jsxs("div",{className:"bg-gray-50 p-6 sm:rounded-lg sm:p-8",children:[e.jsx("h2",{id:"summary-heading",className:"sr-only",children:"Order summary"}),e.jsx("div",{className:"flow-root",children:e.jsxs("dl",{className:"-my-4 divide-y divide-gray-200 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$262.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Shipping"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Tax"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$53.40"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$320.40"})]})]})})]})}),e.jsx("div",{className:"mt-8 flex justify-end px-4 sm:px-6 lg:px-8",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 rounded-md border border-transparent bg-primary-hub-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Continue to Payment"})})]})})})})})]})})}const L=[{name:"Women",href:"#"},{name:"Men",href:"#"},{name:"Company",href:"#"},{name:"Stores",href:"#"}],_=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}];function X(){return e.jsx("header",{className:"relative bg-white",children:e.jsx("nav",{"aria-label":"Top",className:"mx-auto max-w-7xl sm:px-6 lg:px-8",children:e.jsx("div",{className:"relative border-b border-gray-200 px-4 pb-14 sm:static sm:px-0 sm:pb-0",children:e.jsxs("div",{className:"flex h-16 items-center justify-between",children:[e.jsx("div",{className:"flex flex-1",children:e.jsxs("a",{href:"#",children:[e.jsx("span",{className:"sr-only",children:"Your Company"}),e.jsx("img",{className:"h-8 w-auto",src:"https://tailwindui.com/img/logos/mark.svg?color=primary-hub&shade=600",alt:""})]})}),e.jsx("div",{className:"absolute inset-x-0 bottom-0 overflow-x-auto border-t sm:static sm:border-t-0",children:e.jsx("div",{className:"flex h-14 items-center space-x-8 px-4 sm:h-auto",children:L.map(s=>e.jsx("a",{href:s.href,className:"text-sm font-medium text-gray-700 hover:text-gray-800",children:s.name},s.name))})}),e.jsxs("div",{className:"flex flex-1 items-center justify-end",children:[e.jsxs("a",{href:"#",className:"p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Search"}),e.jsx(Q,{className:"h-6 w-6","aria-hidden":"true"})]}),e.jsxs(p,{className:"ml-4 flow-root text-sm lg:relative lg:ml-8",children:[e.jsxs(p.Button,{className:"group -m-2 flex items-center p-2",children:[e.jsx(E,{className:"h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),e.jsx("span",{className:"ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800",children:"0"}),e.jsx("span",{className:"sr-only",children:"items in cart, view bag"})]}),e.jsx(i,{as:r.Fragment,enter:"transition ease-out duration-200",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition ease-in duration-150",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsxs(p.Panel,{className:"absolute inset-x-0 top-16 mt-px bg-white pb-6 shadow-lg sm:px-2 lg:left-auto lg:right-0 lg:top-full lg:-mr-1.5 lg:mt-3 lg:w-80 lg:rounded-lg lg:ring-1 lg:ring-black lg:ring-opacity-5",children:[e.jsx("h2",{className:"sr-only",children:"Shopping Cart"}),e.jsxs("form",{className:"mx-auto max-w-2xl px-4",children:[e.jsx("ul",{role:"list",className:"divide-y divide-gray-200",children:_.map(s=>e.jsxs("li",{className:"flex items-center py-6",children:[e.jsx("img",{src:s.imageSrc,alt:s.imageAlt,className:"h-16 w-16 flex-none rounded-md border border-gray-200"}),e.jsxs("div",{className:"ml-4 flex-auto",children:[e.jsx("h3",{className:"font-medium text-gray-900",children:e.jsx("a",{href:s.href,children:s.name})}),e.jsx("p",{className:"text-gray-500",children:s.color})]})]},s.id))}),e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 w-full rounded-md border border-transparent bg-primary-hub-700 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Checkout"}),e.jsx("p",{className:"mt-6 text-center",children:e.jsx("a",{href:"#",className:"text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"View Shopping Bag"})})]})]})})]})]})]})})})})}const H=[{id:1,name:"Artwork Tee",href:"#",price:"$32.00",color:"Mint",size:"Medium",inStock:!0,imageSrc:"https://tailwindui.com/img/ecommerce-images/checkout-page-03-product-04.jpg",imageAlt:"Front side of mint cotton t-shirt with wavey lines pattern."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Charcoal",inStock:!1,leadTime:"7-8 years",size:"Large",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",imageAlt:"Front side of charcoal cotton t-shirt."}];function D(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:px-0",children:[e.jsx("h1",{className:"text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12",children:[e.jsxs("section",{"aria-labelledby":"cart-heading",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-b border-t border-gray-200",children:H.map(s=>e.jsxs("li",{className:"flex py-6",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{src:s.imageSrc,alt:s.imageAlt,className:"h-24 w-24 rounded-md object-cover object-center sm:h-32 sm:w-32"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col sm:ml-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h4",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})}),e.jsx("p",{className:"ml-4 text-sm font-medium text-gray-900",children:s.price})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.color}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.size})]}),e.jsxs("div",{className:"mt-4 flex flex-1 items-end justify-between",children:[e.jsxs("p",{className:"flex items-center space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(g,{className:"h-5 w-5 flex-shrink-0 text-green-500","aria-hidden":"true"}):e.jsx(u,{className:"h-5 w-5 flex-shrink-0 text-gray-300","aria-hidden":"true"}),e.jsx("span",{children:s.inStock?"In stock":`Will ship in ${s.leadTime}`})]}),e.jsx("div",{className:"ml-4",children:e.jsx("button",{type:"button",className:"text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:e.jsx("span",{children:"Remove"})})})]})]})]},s.id))})]}),e.jsxs("section",{"aria-labelledby":"summary-heading",className:"mt-10",children:[e.jsx("h2",{id:"summary-heading",className:"sr-only",children:"Order summary"}),e.jsxs("div",{children:[e.jsx("dl",{className:"space-y-4",children:e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Subtotal"}),e.jsx("dd",{className:"ml-2 text-base font-medium text-gray-900",children:"$96.00"})]})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:"Shipping and taxes will be calculated at checkout."})]}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 w-full rounded-md border border-transparent bg-primary-hub-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Checkout"})}),e.jsxs("div",{className:"mt-6 text-center text-sm",children:["m",e.jsxs("p",{children:["or",e.jsxs("a",{href:"#",className:"ml-2 font-medium text-primary-hub-700 hover:text-primary-hub-500",children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})]})]})]})]})})}const G=[{id:1,name:"Throwback Hip Bag",href:"#",color:"Salmon",price:"$90.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",imageAlt:"Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."},{id:2,name:"Medium Stuff Satchel",href:"#",color:"Blue",price:"$32.00",quantity:1,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",imageAlt:"Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch."}];function V(){const[s,t]=r.useState(!0);return e.jsx(i.Root,{show:s,as:r.Fragment,children:e.jsxs(l,{as:"div",className:"relative z-10",onClose:t,children:[e.jsx(i.Child,{as:r.Fragment,enter:"ease-in-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),e.jsx("div",{className:"fixed inset-0 overflow-hidden",children:e.jsx("div",{className:"absolute inset-0 overflow-hidden",children:e.jsx("div",{className:"pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10",children:e.jsx(i.Child,{as:r.Fragment,enter:"transform transition ease-in-out duration-500 sm:duration-700",enterFrom:"translate-x-full",enterTo:"translate-x-0",leave:"transform transition ease-in-out duration-500 sm:duration-700",leaveFrom:"translate-x-0",leaveTo:"translate-x-full",children:e.jsx(l.Panel,{className:"pointer-events-auto w-screen max-w-md",children:e.jsxs("div",{className:"flex h-full flex-col overflow-y-scroll bg-white shadow-xl",children:[e.jsxs("div",{className:"flex-1 overflow-y-auto px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex items-start justify-between",children:[e.jsx(l.Title,{className:"text-lg font-medium text-gray-900",children:"Shopping cart"}),e.jsx("div",{className:"ml-3 flex h-7 items-center",children:e.jsxs("button",{type:"button",className:"relative -m-2 p-2 text-gray-400 hover:text-gray-500",onClick:()=>t(!1),children:[e.jsx("span",{className:"absolute -inset-0.5"}),e.jsx("span",{className:"sr-only",children:"Close panel"}),e.jsx(q,{className:"h-6 w-6","aria-hidden":"true"})]})})]}),e.jsx("div",{className:"mt-8",children:e.jsx("div",{className:"flow-root",children:e.jsx("ul",{role:"list",className:"-my-6 divide-y divide-gray-200",children:G.map(a=>e.jsxs("li",{className:"flex py-6",children:[e.jsx("div",{className:"h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",children:e.jsx("img",{src:a.imageSrc,alt:a.imageAlt,className:"h-full w-full object-cover object-center"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("h3",{children:e.jsx("a",{href:a.href,children:a.name})}),e.jsx("p",{className:"ml-4",children:a.price})]}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:a.color})]}),e.jsxs("div",{className:"flex flex-1 items-end justify-between text-sm",children:[e.jsxs("p",{className:"text-gray-500",children:["Qty ",a.quantity]}),e.jsx("div",{className:"flex",children:e.jsx("button",{type:"button",className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"Remove"})})]})]})]},a.id))})})})]}),e.jsxs("div",{className:"border-t border-gray-200 px-4 py-6 sm:px-6",children:[e.jsxs("div",{className:"flex justify-between text-base font-medium text-gray-900",children:[e.jsx("p",{children:"Subtotal"}),e.jsx("p",{children:"$262.00"})]}),e.jsx("p",{className:"mt-0.5 text-sm text-gray-500",children:"Shipping and taxes calculated at checkout."}),e.jsx("div",{className:"mt-6",children:e.jsx("a",{href:"#",className:"flex items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700",children:"Checkout"})}),e.jsx("div",{className:"mt-6 flex justify-center text-center text-sm text-gray-500",children:e.jsxs("p",{children:["or",e.jsxs("button",{type:"button",className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",onClick:()=>t(!1),children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})})]})]})})})})})})]})})}const Y=[{id:1,name:"Basic Tee",href:"#",price:"$32.00",color:"Sienna",inStock:!0,size:"Large",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",imageAlt:"Front of men's Basic Tee in sienna."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Black",inStock:!1,leadTime:"3–4 weeks",size:"Large",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-02.jpg",imageAlt:"Front of men's Basic Tee in black."},{id:3,name:"Nomad Tumbler",href:"#",price:"$35.00",color:"White",inStock:!0,imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",imageAlt:"Insulated bottle with white base and black snap lid."}];function Z(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 lg:max-w-7xl lg:px-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12 lg:grid lg:grid-cols-12 lg:items-start lg:gap-x-12 xl:gap-x-16",children:[e.jsxs("section",{"aria-labelledby":"cart-heading",className:"lg:col-span-7",children:[e.jsx("h2",{id:"cart-heading",className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-b border-t border-gray-200",children:Y.map((s,t)=>e.jsxs("li",{className:"flex py-6 sm:py-10",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{src:s.imageSrc,alt:s.imageAlt,className:"h-24 w-24 rounded-md object-cover object-center sm:h-48 sm:w-48"})}),e.jsxs("div",{className:"ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[e.jsxs("div",{className:"relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0",children:[e.jsxs("div",{children:[e.jsx("div",{className:"flex justify-between",children:e.jsx("h3",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})})}),e.jsxs("div",{className:"mt-1 flex text-sm",children:[e.jsx("p",{className:"text-gray-500",children:s.color}),s.size?e.jsx("p",{className:"ml-4 border-l border-gray-200 pl-4 text-gray-500",children:s.size}):null]}),e.jsx("p",{className:"mt-1 text-sm font-medium text-gray-900",children:s.price})]}),e.jsxs("div",{className:"mt-4 sm:mt-0 sm:pr-9",children:[e.jsxs("label",{htmlFor:`quantity-${t}`,className:"sr-only",children:["Quantity, ",s.name]}),e.jsxs("select",{id:`quantity-${t}`,name:`quantity-${t}`,className:"focus:ring-primary-hub-500500 max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx("div",{className:"absolute right-0 top-0",children:e.jsxs("button",{type:"button",className:"-m-2 inline-flex p-2 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Remove"}),e.jsx(P,{className:"h-5 w-5","aria-hidden":"true"})]})})]})]}),e.jsxs("p",{className:"mt-4 flex space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(g,{className:"h-5 w-5 flex-shrink-0 text-green-500","aria-hidden":"true"}):e.jsx(u,{className:"h-5 w-5 flex-shrink-0 text-gray-300","aria-hidden":"true"}),e.jsx("span",{children:s.inStock?"In stock":`Ships in ${s.leadTime}`})]})]})]},s.id))})]}),e.jsxs("section",{"aria-labelledby":"summary-heading",className:"mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8",children:[e.jsx("h2",{id:"summary-heading",className:"text-lg font-medium text-gray-900",children:"Order summary"}),e.jsxs("dl",{className:"mt-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("dt",{className:"text-sm text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$99.00"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsxs("dt",{className:"flex items-center text-sm text-gray-600",children:[e.jsx("span",{children:"Shipping estimate"}),e.jsxs("a",{href:"#",className:"ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Learn more about how shipping is calculated"}),e.jsx(j,{className:"h-5 w-5","aria-hidden":"true"})]})]}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsxs("dt",{className:"flex text-sm text-gray-600",children:[e.jsx("span",{children:"Tax estimate"}),e.jsxs("a",{href:"#",className:"ml-2 flex-shrink-0 text-gray-400 hover:text-gray-500",children:[e.jsx("span",{className:"sr-only",children:"Learn more about how tax is calculated"}),e.jsx(j,{className:"h-5 w-5","aria-hidden":"true"})]})]}),e.jsx("dd",{className:"text-sm font-medium text-gray-900",children:"$8.32"})]}),e.jsxs("div",{className:"flex items-center justify-between border-t border-gray-200 pt-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$112.32"})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 w-full rounded-md border border-transparent bg-primary-hub-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Checkout"})})]})]})]})})}const J=[{id:1,name:"Nomad Tumbler",href:"#",price:"$35.00",color:"White",inStock:!0,leadTime:"3 weeks",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-03.jpg",imageAlt:"Insulated bottle with white base and black snap lid."},{id:2,name:"Basic Tee",href:"#",price:"$32.00",color:"Sienna",leadTime:"2 weeks",inStock:!0,size:"Large",imageSrc:"https://tailwindui.com/img/ecommerce-images/shopping-cart-page-01-product-01.jpg",imageAlt:"Front of men's Basic Tee in sienna."}];function K(){return e.jsx("div",{className:"bg-white",children:e.jsxs("div",{className:"mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8",children:[e.jsx("h1",{className:"text-3xl font-bold tracking-tight text-gray-900",children:"Shopping Cart"}),e.jsxs("form",{className:"mt-12",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"sr-only",children:"Items in your shopping cart"}),e.jsx("ul",{role:"list",className:"divide-y divide-gray-200 border-b border-t border-gray-200",children:J.map((s,t)=>e.jsxs("li",{className:"flex py-6 sm:py-10",children:[e.jsx("div",{className:"flex-shrink-0",children:e.jsx("img",{src:s.imageSrc,alt:s.imageAlt,className:"h-24 w-24 rounded-lg object-cover object-center sm:h-32 sm:w-32"})}),e.jsxs("div",{className:"relative ml-4 flex flex-1 flex-col justify-between sm:ml-6",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex justify-between sm:grid sm:grid-cols-2",children:[e.jsxs("div",{className:"pr-6",children:[e.jsx("h3",{className:"text-sm",children:e.jsx("a",{href:s.href,className:"font-medium text-gray-700 hover:text-gray-800",children:s.name})}),e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.color}),s.size?e.jsx("p",{className:"mt-1 text-sm text-gray-500",children:s.size}):null]}),e.jsx("p",{className:"text-right text-sm font-medium text-gray-900",children:s.price})]}),e.jsxs("div",{className:"mt-4 flex items-center sm:absolute sm:left-1/2 sm:top-0 sm:mt-0 sm:block",children:[e.jsxs("label",{htmlFor:`quantity-${t}`,className:"sr-only",children:["Quantity, ",s.name]}),e.jsxs("select",{id:`quantity-${t}`,name:`quantity-${t}`,className:"focus:ring-primary-hub-500500 block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-primary-hub-500 focus:outline-none focus:ring-1 sm:text-sm",children:[e.jsx("option",{value:1,children:"1"}),e.jsx("option",{value:2,children:"2"}),e.jsx("option",{value:3,children:"3"}),e.jsx("option",{value:4,children:"4"}),e.jsx("option",{value:5,children:"5"}),e.jsx("option",{value:6,children:"6"}),e.jsx("option",{value:7,children:"7"}),e.jsx("option",{value:8,children:"8"})]}),e.jsx("button",{type:"button",className:"ml-4 text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500 sm:ml-0 sm:mt-3",children:e.jsx("span",{children:"Remove"})})]})]}),e.jsxs("p",{className:"mt-4 flex space-x-2 text-sm text-gray-700",children:[s.inStock?e.jsx(g,{className:"h-5 w-5 flex-shrink-0 text-green-500","aria-hidden":"true"}):e.jsx(u,{className:"h-5 w-5 flex-shrink-0 text-gray-300","aria-hidden":"true"}),e.jsx("span",{children:s.inStock?"In stock":`Ships in ${s.leadTime}`})]})]})]},s.id))})]}),e.jsxs("div",{className:"mt-10 sm:ml-32 sm:pl-6",children:[e.jsxs("div",{className:"rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:p-8",children:[e.jsx("h2",{className:"sr-only",children:"Order summary"}),e.jsx("div",{className:"flow-root",children:e.jsxs("dl",{className:"-my-4 divide-y divide-gray-200 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Subtotal"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$99.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Shipping"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$5.00"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-gray-600",children:"Tax"}),e.jsx("dd",{className:"font-medium text-gray-900",children:"$8.32"})]}),e.jsxs("div",{className:"flex items-center justify-between py-4",children:[e.jsx("dt",{className:"text-base font-medium text-gray-900",children:"Order total"}),e.jsx("dd",{className:"text-base font-medium text-gray-900",children:"$112.32"})]})]})})]}),e.jsx("div",{className:"mt-10",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 w-full rounded-md border border-transparent bg-primary-hub-700 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Checkout"})}),e.jsx("div",{className:"mt-6 text-center text-sm text-gray-500",children:e.jsxs("p",{children:["or",e.jsxs("a",{href:"#",className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",children:["Continue Shopping",e.jsx("span",{"aria-hidden":"true",children:" →"})]})]})})]})]})]})})}const ve={title:"Components/Store/Carts",component:I,argTypes:{}},U=()=>e.jsx(I,{}),ee=()=>e.jsx(X,{}),se=()=>e.jsx(D,{}),ae=()=>e.jsx(V,{}),te=()=>e.jsx(Z,{}),re=()=>e.jsx(K,{}),n=U.bind({}),m=ee.bind({}),c=se.bind({}),o=ae.bind({}),d=te.bind({}),x=re.bind({});var f,y,b;n.parameters={...n.parameters,docs:{...(f=n.parameters)==null?void 0:f.docs,source:{originalSource:"() => <Modal />",...(b=(y=n.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var N,v,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:"() => <PopOver />",...(w=(v=m.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var S,k,T;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:"() => <SingleColumn />",...(T=(k=c.parameters)==null?void 0:k.docs)==null?void 0:T.source}}};var $,C,F;o.parameters={...o.parameters,docs:{...($=o.parameters)==null?void 0:$.docs,source:{originalSource:"() => <SlideOver />",...(F=(C=o.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var z,A,O;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:"() => <TwoColumnWithQuantityDropdown />",...(O=(A=d.parameters)==null?void 0:A.docs)==null?void 0:O.source}}};var B,M,W;x.parameters={...x.parameters,docs:{...(B=x.parameters)==null?void 0:B.docs,source:{originalSource:"() => <WithExtendedSummary />",...(W=(M=x.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};const we=["Modals","PopOvers","Single","SlideOverEx","TwoColumnWithQuantity","WithExtended"];export{n as Modals,m as PopOvers,c as Single,o as SlideOverEx,d as TwoColumnWithQuantity,x as WithExtended,we as __namedExportsOrder,ve as default};