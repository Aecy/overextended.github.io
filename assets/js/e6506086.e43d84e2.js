"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3813],{9613:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var l=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},i=Object.keys(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(l=0;l<i.length;l++)n=i[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,k=m["".concat(s,".").concat(c)]||m[c]||d[c]||i;return n?l.createElement(k,r(r({ref:t},p),{},{components:n})):l.createElement(k,r({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,r[1]=o;for(var u=2;u<i;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>r});var l=n(9496),a=n(5924);const i="tabItem_De_A";function r(e){let{children:t,hidden:n,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,r),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>c});var l=n(4250),a=n(9496),i=n(5924),r=n(6704),o=n(8876),s=n(4138),u=n(2509);const p="tabList_V3hT",d="tabItem_B35_";function m(e){var t;const{lazy:n,block:r,defaultValue:m,values:c,groupId:k,className:b}=e,h=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??h.map((e=>{let{props:{value:t,label:n,attributes:l}}=e;return{value:t,label:n,attributes:l}})),g=(0,o.l)(N,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!N.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:v,setTabGroupChoices:y}=(0,s.U)(),[C,x]=(0,a.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=k){const e=v[k];null!=e&&e!==C&&N.some((t=>t.value===e))&&x(e)}const I=e=>{const t=e.currentTarget,n=w.indexOf(t),l=N[n].value;l!==C&&(T(t),x(l),null!=k&&y(k,String(l)))},S=e=>{var t;let n=null;switch(e.key){case"Enter":I(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},N.map((e=>{let{value:t,label:n,attributes:r}=e;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:e=>w.push(e),onKeyDown:S,onClick:I},r,{className:(0,i.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":C===t})}),n??t)}))),n?(0,a.cloneElement)(h.filter((e=>e.props.value===C))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})))))}function c(e){const t=(0,r.Z)();return a.createElement(m,(0,l.Z)({key:String(t)},e))}},2439:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var l=n(4250),a=(n(9496),n(9613)),i=n(3408),r=n(6489);const o={title:"Menu"},s=void 0,u={unversionedId:"ox_lib/Interface/Client/menu",id:"ox_lib/Interface/Client/menu",title:"Menu",description:"Keyboard navigation menu with specific event functions.",source:"@site/docs/ox_lib/Interface/Client/menu.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/menu",permalink:"/docs/ox_lib/Interface/Client/menu",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/menu.md",tags:[],version:"current",lastUpdatedAt:1677341685,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{title:"Menu"},sidebar:"ox_lib",previous:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"},next:{title:"Notifications",permalink:"/docs/ox_lib/Interface/Client/notify"}},p={},d=[{value:"lib.registerMenu",id:"libregistermenu",level:3},{value:"lib.showMenu",id:"libshowmenu",level:3},{value:"lib.hideMenu",id:"libhidemenu",level:3},{value:"lib.getOpenMenu",id:"libgetopenmenu",level:3},{value:"lib.setMenuOptions",id:"libsetmenuoptions",level:3},{value:"Usage Example",id:"usage-example",level:3}],m={toc:d};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Keyboard navigation menu with specific event functions."),(0,a.kt)("h3",{id:"libregistermenu"},"lib.registerMenu"),(0,a.kt)("p",null,"Registers and caches a menu under the specified id."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerMenu(data, cb)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerMenu(data, cb)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"data: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"title: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"options: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"array"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"label: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"progress?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"colorScheme?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"icon?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons."),(0,a.kt)("li",{parentName:"ul"},"Also supports image urls, png and webp files but are not recommend to use over font awesome icons."))),(0,a.kt)("li",{parentName:"ul"},"iconColor?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"values?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"Array<string | {label: string; description: string}>"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If provided creates a side scrollable list."),(0,a.kt)("li",{parentName:"ul"},"When using object and setting description, the set description will be displayed in the menu tooltip."))),(0,a.kt)("li",{parentName:"ul"},"checked?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Setting either true or false will make the button a checkbox, if ",(0,a.kt)("inlineCode",{parentName:"li"},"values")," is also provided the button will be a\nscrollable list."))),(0,a.kt)("li",{parentName:"ul"},"description?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Displays tooltip below menu on hovered item with provided description."))),(0,a.kt)("li",{parentName:"ul"},"defaultIndex?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Sets the current index for the list to specified number."))),(0,a.kt)("li",{parentName:"ul"},"args?: {","[key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"}",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Allows you to pass any arguments through the button."),(0,a.kt)("li",{parentName:"ul"},"If the button has ",(0,a.kt)("inlineCode",{parentName:"li"},"values")," then ",(0,a.kt)("inlineCode",{parentName:"li"},"isScroll")," is automatically passed."),(0,a.kt)("li",{parentName:"ul"},"If the button has ",(0,a.kt)("inlineCode",{parentName:"li"},"checked")," to either true or false then ",(0,a.kt)("inlineCode",{parentName:"li"},"isCheck")," is automatically passed."))),(0,a.kt)("li",{parentName:"ul"},"close?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If set to false, it won't close the menu upon interacting with this option."))))),(0,a.kt)("li",{parentName:"ul"},"position?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-right'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-left'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'bottom-right'"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"'top-left'")))),(0,a.kt)("li",{parentName:"ul"},"disableInput?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Default: ",(0,a.kt)("inlineCode",{parentName:"li"},"false")))),(0,a.kt)("li",{parentName:"ul"},"canClose: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If set to false the user won't be able to exit the menu without pressing one of the buttons."))),(0,a.kt)("li",{parentName:"ul"},"onClose: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(keyPressed?: ",(0,a.kt)("inlineCode",{parentName:"li"},"'Escape' | 'Backspace'"),")",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Function that runs when the menu is exited via ESC/Backspace."))),(0,a.kt)("li",{parentName:"ul"},"onSelected: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(selected: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", secondary: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," | ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", args: {","[key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"})",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Function being ran when the selected button in the menu changes."))),(0,a.kt)("li",{parentName:"ul"},"onSideScroll: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(selected: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", scrollIndex: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", args: {","[key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"})",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Function ran whenever a scroll list item is changed."))),(0,a.kt)("li",{parentName:"ul"},"onCheck: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(selected: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", checked: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),", args: {","[key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"})"))),(0,a.kt)("li",{parentName:"ul"},"cb: ",(0,a.kt)("inlineCode",{parentName:"li"},"function"),"(selected: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", scrollIndex: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),", args: {","[key: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"]",": ",(0,a.kt)("inlineCode",{parentName:"li"},"any"),"})",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Callback function when the menu item is pressed.")))),(0,a.kt)("h3",{id:"libshowmenu"},"lib.showMenu"),(0,a.kt)("p",null,"Displays the menu with the provided id."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showMenu(id)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showMenu(id)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("h3",{id:"libhidemenu"},"lib.hideMenu"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideMenu(onExit)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.hideMenu(onExit)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"onExit?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If true runs the menu's ",(0,a.kt)("inlineCode",{parentName:"li"},"onClose")," function.")))),(0,a.kt)("h3",{id:"libgetopenmenu"},"lib.getOpenMenu"),(0,a.kt)("p",null,"Returns the id of the currently open menu."),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getOpenMenu()\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.getOpenMenu()\n")))),(0,a.kt)("h3",{id:"libsetmenuoptions"},"lib.setMenuOptions"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.setMenuOptions(id, options, index)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.setMenuOptions(id, options, index)\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"options: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," (",(0,a.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"array"),")"),(0,a.kt)("li",{parentName:"ul"},"index?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If specified only sets the options table on the specified options index.")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("p",null,"Replaces the 3rd index option of the specified menu"),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.setMenuOptions('some_menu_id', {label = 'New option', icon = 'plus'}, 3)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.setMenuOptions('some_menu_id', {label: 'New option', icon: 'plus'}, 3)\n")))),(0,a.kt)("h3",{id:"usage-example"},"Usage Example"),(0,a.kt)("p",null,"First we register the menu with our specified options then we call the show function in the command."),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).")),(0,a.kt)(i.Z,{mdxType:"Tabs"},(0,a.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerMenu({\n    id = 'some_menu_id',\n    title = 'Menu title',\n    position = 'top-right',\n    onSideScroll = function(selected, scrollIndex, args)\n        print(\"Scroll: \", selected, scrollIndex, args)\n    end,\n    onSelected = function(selected, secondary, args)\n        if not secondary then\n            print(\"Normal button\")\n        else\n            if args.isCheck then\n                print(\"Check button\")\n            end\n\n            if args.isScroll then\n                print(\"Scroll button\")\n            end\n        end\n        print(selected, secondary, json.encode(args, {indent=true}))\n    end,\n    onCheck = function(selected, checked, args)\n        print(\"Check: \", selected, checked, args)\n    end,\n    onClose = function(keyPressed)\n        print('Menu closed')\n        if keyPressed then\n            print(('Pressed %s to close the menu'):format(keyPressed))\n        end\n    end,\n    options = {\n        {label = 'Simple button', description = 'It has a description!'},\n        {label = 'Checkbox button', checked = true},\n        {label = 'Scroll button with icon', icon = 'arrows-up-down-left-right', values={'hello', 'there'}},\n        {label = 'Button with args', args = {someArg = 'nice_button'}},\n        {label = 'List button', values = {'You', 'can', 'side', 'scroll', 'this'}, description = 'It also has a description!'},\n        {label = 'List button with default index', values = {'You', 'can', 'side', 'scroll', 'this'}, defaultIndex = 5},\n        {label = 'List button with args', values = {'You', 'can', 'side', 'scroll', 'this'}, args = {someValue = 3, otherValue = 'value'}},\n    }\n}, function(selected, scrollIndex, args)\n    print(selected, scrollIndex, args)\nend)\n\nRegisterCommand('testmenu', function()\n    lib.showMenu('some_menu_id')\nend)\n"))),(0,a.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerMenu({\n  id: 'some_menu_id',\n  title: 'Menu title',\n  position: 'top-right',\n  onSideScroll: (selected, scrollIndex, args) => {\n    console.log(\"Scroll: \", selected, scrollIndex, args)\n  },\n  onSelected: (selected, secondary, args) => {\n    if (!secondary) {\n      console.log(\"Normal button\")\n    } else {\n      if (args.isCheck) {\n        console.log(\"Check button\")\n      }\n\n      if (args.isScroll) {\n        console.log(\"Scroll button\")\n      }\n    }\n    console.log(selected, secondary, JSON.stringify(args, null, 2))\n  },\n  onCheck: (selected, checked, args) => {\n    console.log(\"Check: \", selected, checked, args)\n  },\n  onClose: (keyPressed) => {\n    console.log('Menu closed')\n    if (keyPressed) {\n      console.log(`Pressed ${keyPressed} to close the menu`)\n    }\n  },\n  options: [\n    {label: 'Simple button', description: 'It has a description!'},\n    {label: 'Checkbox button', checked: true},\n    {label: 'Scroll button with icon', icon: 'arrows-up-down-left-right', values: ['hello', 'there']},\n    {label: 'Button with args', args: {someArg: 'nice_button'}},\n    {label: 'List button', values: ['You', 'can', 'side', 'scroll', 'this'], description: 'It also has a description!'},\n    {label: 'List button with default index', values: ['You', 'can', 'side', 'scroll', 'this'], defaultIndex: 5},\n    {label: 'List button with args', values: ['You', 'can', 'side', 'scroll', 'this'], args: {someValue: 3, otherValue: 'value'}},\n  ]\n}, (selected, scrollIndex, args) => {\n  console.log(selected, scrollIndex, args)\n})\n\nRegisterCommand('testmenu', () => {\n  lib.showMenu('some_menu_id')\n}, false)\n")))),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/2zxbsnN.png",alt:"Example"})))}c.isMDXComponent=!0}}]);