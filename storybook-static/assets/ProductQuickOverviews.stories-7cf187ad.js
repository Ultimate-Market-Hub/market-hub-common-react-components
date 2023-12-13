import{j as e}from"./jsx-runtime-6eef64cc.js";import{r as t}from"./index-c013ead5.js";import{X as S}from"./XMarkIcon-577f9ab8.js";import{S as C}from"./StarIcon-6f1f0789.js";import{t as n}from"./transition-a03fafff.js";import{_ as u}from"./dialog-dfdaf664.js";import{y as a}from"./radio-group-effd6538.js";import{C as E,Q as _}from"./QuestionMarkCircleIcon-cb99968d.js";import{S as G}from"./ShieldCheckIcon-0c7a444f.js";import"./_commonjsHelpers-725317a4.js";import"./use-is-mounted-b8dc6585.js";import"./use-owner-3c26545a.js";import"./hidden-e72868fd.js";import"./index-169ee69c.js";import"./label-6040683b.js";import"./use-tree-walker-f069dc07.js";const d={name:"Basic Tee 6-Pack ",price:"$192",rating:3.9,reviewCount:117,href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-quick-preview-02-detail.jpg",imageAlt:"Two each of gray, white, and black shirts arranged on table.",colors:[{name:"White",class:"bg-white",selectedClass:"ring-gray-400"},{name:"Gray",class:"bg-gray-200",selectedClass:"ring-gray-400"},{name:"Black",class:"bg-gray-900",selectedClass:"ring-gray-900"}],sizes:[{name:"XXS",inStock:!0},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"XXL",inStock:!0},{name:"XXXL",inStock:!1}]};function y(...i){return i.filter(Boolean).join(" ")}function W(){const[i,o]=t.useState(!1),[g,f]=t.useState(d.colors[0]),[r,m]=t.useState(d.sizes[2]);return e.jsx(n.Root,{show:i,as:t.Fragment,children:e.jsxs(u,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:e.jsx(u.Panel,{className:"flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",className:"absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8",onClick:()=>o(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(S,{className:"h-6 w-6","aria-hidden":"true"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsx("div",{className:"aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5",children:e.jsx("img",{src:d.imageSrc,alt:d.imageAlt,className:"object-cover object-center"})}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:d.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-2",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"text-2xl text-gray-900",children:d.price}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(s=>e.jsx(C,{className:y(d.rating>s?"text-gray-900":"text-gray-200","h-5 w-5 flex-shrink-0"),"aria-hidden":"true"},s))}),e.jsxs("p",{className:"sr-only",children:[d.rating," out of 5 stars"]}),e.jsxs("a",{href:"#",className:"ml-3 text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:[d.reviewCount," reviews"]})]})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-10",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Color"}),e.jsxs(a,{value:g,onChange:f,className:"mt-4",children:[e.jsx(a.Label,{className:"sr-only",children:"Choose a color"}),e.jsx("span",{className:"flex items-center space-x-3",children:d.colors.map(s=>e.jsxs(a.Option,{value:s,className:({active:c,checked:h})=>y(s.selectedClass,c&&h?"ring ring-offset-1":"",!c&&h?"ring-2":"","relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"),children:[e.jsx(a.Label,{as:"span",className:"sr-only",children:s.name}),e.jsx("span",{"aria-hidden":"true",className:y(s.class,"h-8 w-8 rounded-full border border-black border-opacity-10")})]},s.name))})]})]}),e.jsxs("div",{className:"mt-10",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Size"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"Size guide"})]}),e.jsxs(a,{value:r,onChange:m,className:"mt-4",children:[e.jsx(a.Label,{className:"sr-only",children:"Choose a size"}),e.jsx("div",{className:"grid grid-cols-4 gap-4",children:d.sizes.map(s=>e.jsx(a.Option,{value:s,disabled:!s.inStock,className:({active:c})=>y(s.inStock?"cursor-pointer bg-white text-gray-900 shadow-sm":"cursor-not-allowed bg-gray-50 text-gray-200",c?"ring-2 ring-primary-hub-500":"","group relative flex items-center justify-center rounded-md border px-4 py-3 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1"),children:({active:c,checked:h})=>e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{as:"span",children:s.name}),s.inStock?e.jsx("span",{className:y(c?"border":"border-2",h?"border-primary-hub-500":"border-transparent","pointer-events-none absolute -inset-px rounded-md"),"aria-hidden":"true"}):e.jsx("span",{"aria-hidden":"true",className:"pointer-events-none absolute -inset-px rounded-md border-2 border-gray-200",children:e.jsx("svg",{className:"absolute inset-0 h-full w-full stroke-2 text-gray-200",viewBox:"0 0 100 100",preserveAspectRatio:"none",stroke:"currentColor",children:e.jsx("line",{x1:0,y1:100,x2:100,y2:0,vectorEffect:"non-scaling-stroke"})})})]})},s.name))})]})]}),e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-8 py-3 text-base font-medium text-white hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2",children:"Add to bag"})]})]})]})]})]})})})})})]})})}const x={name:"Zip Tote Basket",price:"$220",rating:3.9,href:"#",description:"The Zip Tote Basket is the perfect midpoint between shopping tote and comfy backpack. With convertible straps, you can hand carry, should sling, or backpack this convenient and spacious bag. The zip top and durable canvas construction keeps your goods protected for all-day use.",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-page-03-product-04.jpg",imageAlt:"Back angled view with bag open and handles to the side.",colors:[{name:"Washed Black",bgColor:"bg-gray-700",selectedColor:"ring-gray-700"},{name:"White",bgColor:"bg-white",selectedColor:"ring-gray-400"},{name:"Washed Gray",bgColor:"bg-gray-500",selectedColor:"ring-gray-500"}]};function k(...i){return i.filter(Boolean).join(" ")}function M(){const[i,o]=t.useState(!1),[g,f]=t.useState(x.colors[0]);return e.jsx(n.Root,{show:i,as:t.Fragment,children:e.jsxs(u,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:e.jsx(u.Panel,{className:"flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",className:"absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8",onClick:()=>o(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(S,{className:"h-6 w-6","aria-hidden":"true"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsx("div",{className:"sm:col-span-4 lg:col-span-5",children:e.jsx("div",{className:"aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100",children:e.jsx("img",{src:x.imageSrc,alt:x.imageAlt,className:"object-cover object-center"})})}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:x.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-3",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"text-2xl text-gray-900",children:x.price}),e.jsxs("div",{className:"mt-3",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(r=>e.jsx(C,{className:k(x.rating>r?"text-gray-400":"text-gray-200","h-5 w-5 flex-shrink-0"),"aria-hidden":"true"},r))}),e.jsxs("p",{className:"sr-only",children:[x.rating," out of 5 stars"]})]})]}),e.jsxs("div",{className:"mt-6",children:[e.jsx("h4",{className:"sr-only",children:"Description"}),e.jsx("p",{className:"text-sm text-gray-700",children:x.description})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-6",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm text-gray-600",children:"Color"}),e.jsxs(a,{value:g,onChange:f,className:"mt-2",children:[e.jsx(a.Label,{className:"sr-only",children:"Choose a color"}),e.jsx("div",{className:"flex items-center space-x-3",children:x.colors.map(r=>e.jsxs(a.Option,{value:r,className:({active:m,checked:s})=>k(r.selectedColor,m&&s?"ring ring-offset-1":"",!m&&s?"ring-2":"","relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"),children:[e.jsx(a.Label,{as:"span",className:"sr-only",children:r.name}),e.jsx("span",{"aria-hidden":"true",className:k(r.bgColor,"h-8 w-8 rounded-full border border-black border-opacity-10")})]},r.name))})]})]}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-8 py-3 text-base font-medium text-white hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Add to bag"})}),e.jsx("p",{className:"absolute left-4 top-4 text-center sm:static sm:mt-6",children:e.jsx("a",{href:x.href,className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"View full details"})})]})]})]})]})]})})})})})]})})}const l={name:"Women's Basic Tee",price:"$32",rating:3.9,reviewCount:512,href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg",imageAlt:"Back of women's Basic Tee in black.",colors:[{name:"Black",bgColor:"bg-gray-900",selectedColor:"ring-gray-900"},{name:"Heather Grey",bgColor:"bg-gray-400",selectedColor:"ring-gray-400"}],sizes:[{name:"XXS",inStock:!0},{name:"XS",inStock:!0},{name:"S",inStock:!0},{name:"M",inStock:!0},{name:"L",inStock:!0},{name:"XL",inStock:!0},{name:"XXL",inStock:!1}]};function j(...i){return i.filter(Boolean).join(" ")}function Q(){const[i,o]=t.useState(!1),[g,f]=t.useState(l.colors[0]),[r,m]=t.useState(l.sizes[2]);return e.jsx(n.Root,{show:i,as:t.Fragment,children:e.jsxs(u,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsxs("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:[e.jsx("span",{className:"hidden md:inline-block md:h-screen md:align-middle","aria-hidden":"true",children:"​"}),e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:e.jsx(u.Panel,{className:"flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",className:"absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8",onClick:()=>o(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(S,{className:"h-6 w-6","aria-hidden":"true"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:items-center lg:gap-x-8",children:[e.jsx("div",{className:"aspect-h-3 aspect-w-2 overflow-hidden rounded-lg bg-gray-100 sm:col-span-4 lg:col-span-5",children:e.jsx("img",{src:l.imageSrc,alt:l.imageAlt,className:"object-cover object-center"})}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-xl font-medium text-gray-900 sm:pr-12",children:l.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-1",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsx("p",{className:"font-medium text-gray-900",children:l.price}),e.jsxs("div",{className:"mt-4",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsxs("p",{className:"text-sm text-gray-700",children:[l.rating,e.jsx("span",{className:"sr-only",children:" out of 5 stars"})]}),e.jsx("div",{className:"ml-1 flex items-center",children:[0,1,2,3,4].map(s=>e.jsx(C,{className:j(l.rating>s?"text-yellow-400":"text-gray-200","h-5 w-5 flex-shrink-0"),"aria-hidden":"true"},s))}),e.jsxs("div",{className:"ml-4 hidden lg:flex lg:items-center",children:[e.jsx("span",{className:"text-gray-300","aria-hidden":"true",children:"·"}),e.jsxs("a",{href:"#",className:"ml-4 text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:["See all ",l.reviewCount," reviews"]})]})]})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-8",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Color"}),e.jsxs(a,{value:g,onChange:f,className:"mt-2",children:[e.jsx(a.Label,{className:"sr-only",children:"Choose a color"}),e.jsx("div",{className:"flex items-center space-x-3",children:l.colors.map(s=>e.jsxs(a.Option,{value:s,className:({active:c,checked:h})=>j(s.selectedColor,c&&h?"ring ring-offset-1":"",!c&&h?"ring-2":"","relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none"),children:[e.jsx(a.Label,{as:"span",className:"sr-only",children:s.name}),e.jsx("span",{"aria-hidden":"true",className:j(s.bgColor,"h-8 w-8 rounded-full border border-black border-opacity-10")})]},s.name))})]})]}),e.jsxs("div",{className:"mt-8",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-sm font-medium text-gray-900",children:"Size"}),e.jsx("a",{href:"#",className:"text-sm font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"Size guide"})]}),e.jsxs(a,{value:r,onChange:m,className:"mt-2",children:[e.jsx(a.Label,{className:"sr-only",children:"Choose a size"}),e.jsx("div",{className:"grid grid-cols-7 gap-2",children:l.sizes.map(s=>e.jsx(a.Option,{value:s,className:({active:c,checked:h})=>j(s.inStock?"cursor-pointer focus:outline-none":"cursor-not-allowed opacity-25",c?"ring-2 ring-primary-hub-500 ring-offset-2":"",h?"border-transparent bg-primary-hub-700 text-white hover:bg-primary-hub-700":"border-gray-200 bg-white text-gray-900 hover:bg-gray-50","flex items-center justify-center rounded-md border px-3 py-3 text-sm font-medium uppercase sm:flex-1"),disabled:!s.inStock,children:e.jsx(a.Label,{as:"span",children:s.name})},s.name))})]})]}),e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-8 py-3 text-base font-medium text-white hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2",children:"Add to bag"}),e.jsx("p",{className:"absolute left-4 top-4 text-center sm:static sm:mt-8",children:e.jsx("a",{href:l.href,className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"View full details"})})]})]})]})]})]})})})]})})]})})}const p={name:"Everyday Ruck Snack",price:"$220",rating:3.9,href:"#",imageSrc:"https://tailwindui.com/img/ecommerce-images/product-quick-preview-03-detail.jpg",imageAlt:"Interior of light green canvas bag with padded laptop sleeve and internal organization pouch.",sizes:[{name:"18L",description:"Perfect for a reasonable amount of snacks."},{name:"20L",description:"Enough room for a serious amount of snacks."}]};function z(...i){return i.filter(Boolean).join(" ")}function V(){const[i,o]=t.useState(!1),[g,f]=t.useState(p.sizes[0]);return e.jsx(n.Root,{show:i,as:t.Fragment,children:e.jsxs(u,{as:"div",className:"relative z-10",onClose:o,children:[e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:e.jsx("div",{className:"fixed inset-0 hidden bg-gray-500 bg-opacity-75 transition-opacity md:block"})}),e.jsx("div",{className:"fixed inset-0 z-10 w-screen overflow-y-auto",children:e.jsx("div",{className:"flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4",children:e.jsx(n.Child,{as:t.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",enterTo:"opacity-100 translate-y-0 md:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 md:scale-100",leaveTo:"opacity-0 translate-y-4 md:translate-y-0 md:scale-95",children:e.jsx(u.Panel,{className:"flex w-full transform text-left text-base transition md:my-8 md:max-w-2xl md:px-4 lg:max-w-4xl",children:e.jsxs("div",{className:"relative flex w-full items-center overflow-hidden bg-white px-4 pb-8 pt-14 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8",children:[e.jsxs("button",{type:"button",className:"absolute right-4 top-4 text-gray-400 hover:text-gray-500 sm:right-6 sm:top-8 md:right-6 md:top-6 lg:right-8 lg:top-8",onClick:()=>o(!1),children:[e.jsx("span",{className:"sr-only",children:"Close"}),e.jsx(S,{className:"h-6 w-6","aria-hidden":"true"})]}),e.jsxs("div",{className:"grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8",children:[e.jsxs("div",{className:"sm:col-span-4 lg:col-span-5",children:[e.jsx("div",{className:"aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100",children:e.jsx("img",{src:p.imageSrc,alt:p.imageAlt,className:"object-cover object-center"})}),e.jsx("p",{className:"absolute left-4 top-4 text-center sm:static sm:mt-6",children:e.jsx("a",{href:p.href,className:"font-medium text-primary-hub-700 hover:text-primary-hub-500",children:"View full details"})})]}),e.jsxs("div",{className:"sm:col-span-8 lg:col-span-7",children:[e.jsx("h2",{className:"text-2xl font-bold text-gray-900 sm:pr-12",children:p.name}),e.jsxs("section",{"aria-labelledby":"information-heading",className:"mt-4",children:[e.jsx("h3",{id:"information-heading",className:"sr-only",children:"Product information"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("p",{className:"text-lg text-gray-900 sm:text-xl",children:p.price}),e.jsxs("div",{className:"ml-4 border-l border-gray-300 pl-4",children:[e.jsx("h4",{className:"sr-only",children:"Reviews"}),e.jsxs("div",{className:"flex items-center",children:[e.jsx("div",{className:"flex items-center",children:[0,1,2,3,4].map(r=>e.jsx(C,{className:z(p.rating>r?"text-yellow-400":"text-gray-300","h-5 w-5 flex-shrink-0"),"aria-hidden":"true"},r))}),e.jsxs("p",{className:"sr-only",children:[p.rating," out of 5 stars"]})]})]})]}),e.jsxs("div",{className:"mt-6 flex items-center",children:[e.jsx(E,{className:"h-5 w-5 flex-shrink-0 text-green-500","aria-hidden":"true"}),e.jsx("p",{className:"ml-2 font-medium text-gray-500",children:"In stock and ready to ship"})]})]}),e.jsxs("section",{"aria-labelledby":"options-heading",className:"mt-6",children:[e.jsx("h3",{id:"options-heading",className:"sr-only",children:"Product options"}),e.jsxs("form",{children:[e.jsx("div",{className:"sm:flex sm:justify-between",children:e.jsxs(a,{value:g,onChange:f,children:[e.jsx(a.Label,{className:"block text-sm font-medium text-gray-700",children:"Size"}),e.jsx("div",{className:"mt-1 grid grid-cols-1 gap-4 sm:grid-cols-2",children:p.sizes.map(r=>e.jsx(a.Option,{as:"div",value:r,className:({active:m})=>z(m?"ring-2 ring-primary-hub-500":"","relative block cursor-pointer rounded-lg border border-gray-300 p-4 focus:outline-none"),children:({active:m,checked:s})=>e.jsxs(e.Fragment,{children:[e.jsx(a.Label,{as:"p",className:"text-base font-medium text-gray-900",children:r.name}),e.jsx(a.Description,{as:"p",className:"mt-1 text-sm text-gray-500",children:r.description}),e.jsx("div",{className:z(m?"border":"border-2",s?"border-primary-hub-500":"border-transparent","pointer-events-none absolute -inset-px rounded-lg"),"aria-hidden":"true"})]})},r.name))})]})}),e.jsx("div",{className:"mt-4 flex",children:e.jsxs("a",{href:"#",className:"group flex text-sm text-gray-500 hover:text-gray-700",children:[e.jsx("span",{children:"What size should I buy?"}),e.jsx(_,{className:"ml-2 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"})]})}),e.jsx("div",{className:"mt-6",children:e.jsx("button",{type:"submit",className:"focus:ring-primary-hub-500500 flex w-full items-center justify-center rounded-md border border-transparent bg-primary-hub-700 px-8 py-3 text-base font-medium text-white hover:bg-primary-hub-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50",children:"Add to bag"})}),e.jsx("div",{className:"mt-6 text-center",children:e.jsxs("a",{href:"#",className:"group inline-flex text-base font-medium",children:[e.jsx(G,{className:"mr-2 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500","aria-hidden":"true"}),e.jsx("span",{className:"text-gray-500 group-hover:text-gray-700",children:"Lifetime Guarantee"})]})})]})]})]})]})]})})})})})]})})}const he={title:"Components/Store/Product Quick Overviews",component:W,argTypes:{}},q=()=>e.jsx(W,{}),Z=()=>e.jsx(M,{}),H=()=>e.jsx(Q,{}),J=()=>e.jsx(V,{}),b=q.bind({}),N=Z.bind({}),v=H.bind({}),w=J.bind({});var F,T,L;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:"() => <ColourAndSize />",...(L=(T=b.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};var A,X,P;N.parameters={...N.parameters,docs:{...(A=N.parameters)==null?void 0:A.docs,source:{originalSource:"() => <ColourSelectorAndDescription />",...(P=(X=N.parameters)==null?void 0:X.docs)==null?void 0:P.source}}};var B,O,R;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:"() => <ColourSizeAndDetails />",...(R=(O=v.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,$,I;w.parameters={...w.parameters,docs:{...(D=w.parameters)==null?void 0:D.docs,source:{originalSource:"() => <LargeSizeSelector />",...(I=($=w.parameters)==null?void 0:$.docs)==null?void 0:I.source}}};const pe=["ColorSize","SelectorAndDescription","SizeAndDetails","SizeSelectorLarge"];export{b as ColorSize,N as SelectorAndDescription,v as SizeAndDetails,w as SizeSelectorLarge,pe as __namedExportsOrder,he as default};