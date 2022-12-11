"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2948],{9613:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>k});var r=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=u(n),k=a,c=d["".concat(p,".").concat(k)]||d[k]||s[k]||o;return n?r.createElement(c,i(i({ref:t},m),{},{components:n})):r.createElement(c,i({ref:t},m))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4010:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(4250),a=(n(9496),n(9613));const o={},i=void 0,l={unversionedId:"ox_inventory/Functions/Server/Hooks",id:"ox_inventory/Functions/Server/Hooks",title:"Hooks",description:"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly.",source:"@site/docs/ox_inventory/Functions/Server/Hooks.md",sourceDirName:"ox_inventory/Functions/Server",slug:"/ox_inventory/Functions/Server/Hooks",permalink:"/docs/ox_inventory/Functions/Server/Hooks",draft:!1,editUrl:"https://github.com/overextended/overextended.github.io/tree/main/docs/ox_inventory/Functions/Server/Hooks.md",tags:[],version:"current",lastUpdatedAt:1670720949,formattedLastUpdatedAt:"Dec 11, 2022",frontMatter:{},sidebar:"ox_inventory",previous:{title:"useSlot",permalink:"/docs/ox_inventory/Functions/Client/useSlot"},next:{title:"AddItem",permalink:"/docs/ox_inventory/Functions/Server/Inventory/AddItem"}},p={},u=[{value:"swapItems",id:"swapitems",level:2},{value:"openInventory",id:"openinventory",level:2},{value:"createItem",id:"createitem",level:2},{value:"removeHooks",id:"removehooks",level:2}],m={toc:u};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Event hooks allow 3rd party resources to define new behaviour without modifying the inventory code directly."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:registerHook(eventName, function(payload) end, options)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"eventName: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"payload: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"options?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"print?: ",(0,a.kt)("inlineCode",{parentName:"li"},"boolean"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Print to the console when triggering the event."))),(0,a.kt)("li",{parentName:"ul"},"itemFilter?: ",(0,a.kt)("inlineCode",{parentName:"li"},"{ [string]: true }"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The event will only trigger for items defined as keys in a set."))),(0,a.kt)("li",{parentName:"ul"},"inventoryFilter?: ",(0,a.kt)("inlineCode",{parentName:"li"},"string[]"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The event will only trigger for inventories that match one of the ",(0,a.kt)("a",{parentName:"li",href:"http://www.easyuo.com/openeuo/wiki/index.php/Lua_Patterns_and_Captures_(Regular_Expressions)"},"patterns")," in the array.")))))),(0,a.kt)("h2",{id:"swapitems"},"swapItems"),(0,a.kt)("p",null,'Triggered when moving any item from one slot to another, or when "giving" an item.\nBy returning ',(0,a.kt)("inlineCode",{parentName:"p"},"false"),", you can cancel the action and revert the inventory state."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"action: ",(0,a.kt)("inlineCode",{parentName:"li"},"'move'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'stack'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'swap'")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"'give'")),(0,a.kt)("li",{parentName:"ul"},"fromInventory: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"toInventory:",(0,a.kt)("inlineCode",{parentName:"li"}," number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"fromType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"toType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"fromSlot: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"toSlot?: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Example:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('swapItems', function(payload)\n    print(json.encode(payload, { indent = true }))\n    return false\nend, {\n    print = true,\n    itemFilter = {\n        water = true,\n    },\n    inventoryFilter = {\n        '^glove[%w]+',\n        '^trunk[%w]+',\n    }\n})\n")),(0,a.kt)("p",null,'Blacklists "water" from being moved into or from gloveboxes and trunks.'),(0,a.kt)("h2",{id:"openinventory"},"openInventory"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"source: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")),(0,a.kt)("li",{parentName:"ul"},"inventoryId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"inventoryType: ",(0,a.kt)("inlineCode",{parentName:"li"},"string"))),(0,a.kt)("p",null,"Return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Triggered when a player tries to open a secondary inventory.\nBy returning ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),", you can cancel the action and keep the player's inventory closed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('openInventory', function(payload)\n    print(json.encode(payload, { indent = true }))\n    return false\nend, {\n    print = true,\n    inventoryFilter = {\n        '^glove[%w]+',\n        '^trunk[%w]+',\n    }\n})\n")),(0,a.kt)("p",null,"Disables gloveboxes and trunks."),(0,a.kt)("h2",{id:"createitem"},"createItem"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Payload:")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"inventoryId?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"string")),(0,a.kt)("li",{parentName:"ul"},"metadata: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"item: ",(0,a.kt)("inlineCode",{parentName:"li"},"table")),(0,a.kt)("li",{parentName:"ul"},"count: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Return:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"hookId: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Triggered when an item is created, either by buying it, using AddItem, or when converting inventory data.\nBy returning a table you can modify or replace the metadata given to an item."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"local hookId = exports.ox_inventory:registerHook('createItem', function(payload)\n    print(json.encode(payload, { indent = true }))\n    local metadata = payload.metadata\n    metadata.label = 'Mineral Water'\n    return metadata\nend, {\n    print = true,\n    itemFilter = {\n        water = true\n    }\n})\n")),(0,a.kt)("p",null,'Sets the label for "water" to "Mineral Water".'),(0,a.kt)("h2",{id:"removehooks"},"removeHooks"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},"exports.ox_inventory:removeHooks(id)\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"id?: ",(0,a.kt)("inlineCode",{parentName:"li"},"number"))),(0,a.kt)("p",null,"Removes a hook created by the invoking resource with the the specified id.\nIf no id is specified then all hooks are removed."))}s.isMDXComponent=!0}}]);