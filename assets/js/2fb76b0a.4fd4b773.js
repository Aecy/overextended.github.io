"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[212],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var a=n(9496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(n),c=l,k=d["".concat(u,".").concat(c)]||d[c]||p[c]||i;return n?a.createElement(k,r(r({ref:t},m),{},{components:n})):a.createElement(k,r({ref:t},m))}));function c(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=n.length,r=new Array(i);r[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:l,r[1]=o;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6489:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(9496),l=n(5924);const i="tabItem_De_A";function r(e){let{children:t,hidden:n,className:r}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:n},t)}},3408:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(4250),l=n(9496),i=n(5924),r=n(6704),o=n(8876),u=n(4138),s=n(2509);const m="tabList_V3hT",p="tabItem_B35_";function d(e){var t;const{lazy:n,block:r,defaultValue:d,values:c,groupId:k,className:b}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=c??h.map((e=>{let{props:{value:t,label:n,attributes:a}}=e;return{value:t,label:n,attributes:a}})),N=(0,o.l)(g,((e,t)=>e.value===t.value));if(N.length>0)throw new Error(`Docusaurus error: Duplicate values "${N.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==v&&!g.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:x}=(0,u.U)(),[y,C]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,s.o5)();if(null!=k){const e=f[k];null!=e&&e!==y&&g.some((t=>t.value===e))&&C(e)}const _=e=>{const t=e.currentTarget,n=w.indexOf(t),a=g[n].value;a!==y&&(T(t),C(a),null!=k&&x(k,String(a)))},E=e=>{var t;let n=null;switch(e.key){case"Enter":_(e);break;case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;n=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;n=w[t]??w[w.length-1];break}}null==(t=n)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},b)},g.map((e=>{let{value:t,label:n,attributes:r}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:E,onClick:_},r,{className:(0,i.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":y===t})}),n??t)}))),n?(0,l.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function c(e){const t=(0,r.Z)();return l.createElement(d,(0,a.Z)({key:String(t)},e))}},5841:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(4250),l=(n(9496),n(9613)),i=n(3408),r=n(6489);const o={title:"Context Menu"},u=void 0,s={unversionedId:"ox_lib/Interface/Client/context",id:"ox_lib/Interface/Client/context",title:"Context Menu",description:"lib.registerContext",source:"@site/docs/ox_lib/Interface/Client/context.md",sourceDirName:"ox_lib/Interface/Client",slug:"/ox_lib/Interface/Client/context",permalink:"/docs/ox_lib/Interface/Client/context",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_lib/Interface/Client/context.md",tags:[],version:"current",lastUpdatedAt:1677341685,formattedLastUpdatedAt:"Feb 25, 2023",frontMatter:{title:"Context Menu"},sidebar:"ox_lib",previous:{title:"Clipboard",permalink:"/docs/ox_lib/Interface/Client/clipboard"},next:{title:"Input Dialog",permalink:"/docs/ox_lib/Interface/Client/input"}},m={},p=[{value:"lib.registerContext",id:"libregistercontext",level:3},{value:"lib.showContext",id:"libshowcontext",level:3},{value:"lib.hideContext",id:"libhidecontext",level:3},{value:"lib.getOpenContextMenu",id:"libgetopencontextmenu",level:3},{value:"Usage Example",id:"usage-example",level:3}],d={toc:p};function c(e){let{components:t,...n}=e;return(0,l.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"libregistercontext"},"lib.registerContext"),(0,l.kt)("p",null,"Used for registering a context menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext(context)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerContext(context)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Unique menu identifier, will be used to open the menu."))),(0,l.kt)("li",{parentName:"ul"},"title: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Title display in the menu; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier - if defined there will be a back arrow next to the menu title that will take you to the menu you defined."))),(0,l.kt)("li",{parentName:"ul"},"canClose: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If set to false the user won't be able to exit the menu without pressing one of the buttons."))),(0,l.kt)("li",{parentName:"ul"},"onExit?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user closes their context menu with ESC."))),(0,l.kt)("li",{parentName:"ul"},"onBack?: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that will be ran when the user presses the back button to return to a previous menu."))),(0,l.kt)("li",{parentName:"ul"},"options: ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"item: ",(0,l.kt)("inlineCode",{parentName:"li"},"key")," (",(0,l.kt)("inlineCode",{parentName:"li"},"string"),") or ",(0,l.kt)("inlineCode",{parentName:"li"},"table")," (",(0,l.kt)("inlineCode",{parentName:"li"},"object"),")",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"title?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"If not using keys then sets the title for the button; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"disabled?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Grays out the button and makes it unclickable."))),(0,l.kt)("li",{parentName:"ul"},"menu?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Menu identifier that the button will take you to, when defined an arrow."))),(0,l.kt)("li",{parentName:"ul"},"onSelect: ",(0,l.kt)("inlineCode",{parentName:"li"},"function"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Function that's ran when the button is clicked."))),(0,l.kt)("li",{parentName:"ul"},"icon?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"FontAwesome icon that will be displayed on the left side, works the same as notification and textui icons."),(0,l.kt)("li",{parentName:"ul"},"Also supports image urls, png and webp files but are not recommend to use over font awesome icons."))),(0,l.kt)("li",{parentName:"ul"},"iconColor?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Colour of the displayed icon."))),(0,l.kt)("li",{parentName:"ul"},"progress?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Adds a progress bar filled to this percentage"))),(0,l.kt)("li",{parentName:"ul"},"colorScheme?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Sets the color scheme of the progress bar. Current options can be found here:",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://mantine.dev/theming/colors/#default-colors"},"https://mantine.dev/theming/colors/#default-colors")),(0,l.kt)("li",{parentName:"ul"},"For example: ",(0,l.kt)("inlineCode",{parentName:"li"},"blue")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"teal")))))),(0,l.kt)("li",{parentName:"ul"},"arrow?: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Shows an arrow on the right side like ",(0,l.kt)("inlineCode",{parentName:"li"},"menu")," does, useful when you are opening a menu from an event. Can be set to false to hide it."))),(0,l.kt)("li",{parentName:"ul"},"description?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Description that will appear under the button title that is defined as a key; has markdown support."))),(0,l.kt)("li",{parentName:"ul"},"image?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Url to an image that will be displayed in the button's metadata."))),(0,l.kt)("li",{parentName:"ul"},"metadata?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string[]")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"object")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"array"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Information that will display on the side upon hovering a button."),(0,l.kt)("li",{parentName:"ul"},"label: ",(0,l.kt)("inlineCode",{parentName:"li"},"string")),(0,l.kt)("li",{parentName:"ul"},"value: ",(0,l.kt)("inlineCode",{parentName:"li"},"any")),(0,l.kt)("li",{parentName:"ul"},"progress?: ",(0,l.kt)("inlineCode",{parentName:"li"},"number"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Display a progress bar in the metadata."))))),(0,l.kt)("li",{parentName:"ul"},"event?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"serverEvent?: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Server event that the button is going to trigger."))),(0,l.kt)("li",{parentName:"ul"},"args?: ",(0,l.kt)("inlineCode",{parentName:"li"},"any"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Arguments that will be sent to the events or onSelect function.")))))))),(0,l.kt)("p",null,"You can register as many context menus in one ",(0,l.kt)("inlineCode",{parentName:"p"},"lib.registerContext")," function\nas you'd like."),(0,l.kt)("p",null,"The menu can be either in the order you write it in, or sorted alphabetically.",(0,l.kt)("br",{parentName:"p"}),"\n","To sort the menu alphabetically the buttons (and/or metadata) need to be defined as keys, otherwise not using keys and instead using tables will make the menu be in the order you define it as."),(0,l.kt)("h3",{id:"libshowcontext"},"lib.showContext"),(0,l.kt)("p",null,"Opens a registered context menu by it's id."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.showContext(id)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.showContext(id)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"id: ",(0,l.kt)("inlineCode",{parentName:"li"},"string"))),(0,l.kt)("h3",{id:"libhidecontext"},"lib.hideContext"),(0,l.kt)("p",null,"Hides any currently visible context menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.hideContext(onExit)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.hideContext(onExit)\n")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"onExit: ",(0,l.kt)("inlineCode",{parentName:"li"},"boolean"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Defines whether the onExit function for the menu should be ran or not.")))),(0,l.kt)("h3",{id:"libgetopencontextmenu"},"lib.getOpenContextMenu"),(0,l.kt)("p",null,"Returns the id of the currently open context menu."),(0,l.kt)("p",null,"If no context menu is open returns ",(0,l.kt)("inlineCode",{parentName:"p"},"nil"),"."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.getOpenContextMenu()\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.getOpenContextMenu()\n")))),(0,l.kt)("h3",{id:"usage-example"},"Usage Example"),(0,l.kt)("p",null,"First we register the menu with our specified options then we call the show function in the command."),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"Avoid constantly re-registering a menu that does not depend on any outside values (A.K.A a static menu).")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n  id = 'some_menu',\n  title = 'Some context menu',\n  options = {\n    {\n      title = 'Empty button',\n    },\n    {\n      title = 'Disabled button',\n      description = 'This button is disabled',\n      icon = 'hand',\n      disabled = true\n    },\n    {\n      title = 'Example button',\n      description = 'Example button description',\n      icon = 'circle',\n      onSelect = function()\n        print(\"Pressed the button!\")\n      end,\n      metadata = {\n        {label = 'Value 1', value = 'Some value'},\n        {label = 'Value 2', value = 300}\n      },\n    },\n    {\n      title = 'Menu button',\n      description = 'Takes you to another menu!',\n      menu = 'other_menu',\n      icon = 'bars'\n    },\n    {\n      title = 'Event button',\n      description = 'Open a menu from the event and send event data',\n      icon = 'check',\n      event = 'test_event',\n      arrow = true,\n      args = {\n        someValue = 500\n      }\n    }\n  }\n})\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import lib from '@overextended/ox_lib/client'\n\nlib.registerContext({\n  id: 'some_menu',\n  title: 'Some context menu',\n  options: [\n    {\n      title: 'Empty button',\n    },\n    {\n      title: 'Disabled button',\n      description: 'This button is disabled',\n      icon: 'hand',\n      disabled: true\n    },\n    {\n      title: 'Example button',\n      description: 'Example button description',\n      icon: 'circle',\n      onSelect: () => {\n        console.log(\"Pressed the button!\")\n      },\n      metadata: [\n        {label: 'Value 1', value: 'Some value'},\n        {label: 'Value 2', value: 300}\n      ],\n    },\n    {\n      title: 'Menu button',\n      description: 'Takes you to another menu!',\n      menu: 'other_menu',\n      icon: 'bars'\n    },\n    {\n      title: 'Event button',\n      description: 'Open a menu from the event and send event data',\n      icon: 'check',\n      event: 'test_event',\n      arrow: true,\n      args: {\n        someValue: 500\n      }\n    }\n  ]\n})\n")))),(0,l.kt)("p",null,"Then we can also register our second menu called ",(0,l.kt)("inlineCode",{parentName:"p"},"other_menu")),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"lib.registerContext({\n  id = 'other_menu',\n  title = 'Other context menu',\n  menu = 'some_menu',\n  onBack = function()\n    print('Went back!')\n  end,\n  options = {\n    {\n      title = 'Nothing here'\n    }\n  }\n})\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"lib.registerContext({\n  id: 'other_menu',\n  title: 'Other context menu',\n  menu: 'some_menu',\n  onBack: () => {\n    console.log('Went back!')\n  },\n  options: [\n    {\n      title: 'Nothing here'\n    }\n  ]\n})\n")))),(0,l.kt)("p",null,"And the event that we are going to run from the ",(0,l.kt)("inlineCode",{parentName:"p"},"some_menu")," menu, which is going to open another menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterNetEvent('test_event', function(args)\n  lib.registerContext({\n    id = 'event_menu',\n    title = 'Event menu',\n    menu = 'some_menu',\n    options = {\n      {\n        title = 'Event value: '..args.someValue,\n      }\n    }\n  })\n\n  lib.showContext('event_menu')\nend)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"onNet('test_event', (args: {someValue: number}) => {\n  lib.registerContext({\n    id:'event_menu',\n    title:'Event menu',\n    menu:'some_menu',\n    options: [\n      {\n        title: `Event value: ${args.someValue}`,\n      }\n    ]\n  })\n\n  lib.showContext('event_menu')\n})\n")))),(0,l.kt)("p",null,"Lastly we register a test command to show the ",(0,l.kt)("inlineCode",{parentName:"p"},"some_menu")," menu."),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(r.Z,{value:"Lua",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-lua"},"RegisterCommand('testcontext', function()\n  lib.showContext('some_menu')\nend)\n"))),(0,l.kt)(r.Z,{value:"JS/TS",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"RegisterCommand('testcontext', () => {\n  lib.showContext('some_menu')\n})\n")))),(0,l.kt)("p",null,"The data from the ",(0,l.kt)("inlineCode",{parentName:"p"},"args")," table in the menu is passed as a first argument to the event you register."),(0,l.kt)("p",null,"Using this event we also register a new context menu with it's own options."),(0,l.kt)("p",null,"By defining a ",(0,l.kt)("inlineCode",{parentName:"p"},"menu")," param to be the id of the first menu we can get the back arrow button next to the menu title that will take us back."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/TkaH2P9.png",alt:"menu_example"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/0mMmwgi.png",alt:"metadata"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/RbT1tKX.png",alt:"sub_menu"}),"\n",(0,l.kt)("img",{parentName:"p",src:"https://i.imgur.com/zjIiROj.png",alt:"event_menu"})))}c.isMDXComponent=!0}}]);