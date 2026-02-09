(self.webpackChunkapp=self.webpackChunkapp||[]).push([["3815"],{91962(e,t,a){"use strict";a.d(t,{W:()=>ee});var r=a(31085),n=a(14041),o=a(18690),i=a(82326),l=a(96872),s=a(11618),c=a(83380),d=a(14184),m=a(93285),u=a(42899),p=a(4387),h=a(13660),g=a(15246),f=a(91072),v=a(699),b=a(37281),y=a(14158),w=a(97214),x=a(78560),A=a(64398),E=a(79182),k=a(96170),T=a(96814),_=a(32585),S=a(56005),C=a.n(S),L=a(17749);let N=(0,r.jsx)(p.A,{animation:"wave",variant:"text",height:40}),R=e=>{let{children:t}=e,a=(0,s.YR)(),i=(0,k.gf)(T.U),l=(0,k.gf)(f.n),{"*":d=""}=(0,o.g)(),{title:p,setTitle:S,subtitle:R,setSubtitle:D,entityRef:O,metadata:{value:M,loading:I},entityMetadata:{value:j,loading:z}}=(0,c.V)();(0,n.useEffect)(()=>{M&&(S(M.site_name),D(()=>{let{site_description:e}=M;return e&&"None"!==e||(e=""),e}))},[M,S,D]);let H=i.getOptional("app.title")||"Backstage",{locationMetadata:B,spec:U}=j||{},$=U?.lifecycle,F=j?(0,v.t)(j,w.vv):[],P=(0,_.S)(L.rQ)(),V=(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(A.S,{label:C()(j?.kind||"entity"),value:(0,r.jsx)(b.z,{color:"inherit",entityRef:O,title:j?.metadata.title,defaultKind:"Component"})}),F.length>0&&(0,r.jsx)(A.S,{label:"Owner",value:(0,r.jsx)(y.i,{color:"inherit",entityRefs:F,defaultKind:"group"})}),$?(0,r.jsx)(A.S,{label:"Lifecycle",value:String($)}):null,B&&"dir"!==B.type&&"file"!==B.type?(0,r.jsx)(A.S,{label:"",value:(0,r.jsxs)(u.A,{container:!0,direction:"column",alignItems:"center",children:[(0,r.jsx)(u.A,{style:{padding:0},item:!0,children:(0,r.jsx)(h.default,{style:{marginTop:"-25px"}})}),(0,r.jsx)(u.A,{style:{padding:0},item:!0,children:"Source"})]}),url:B.target}):null]}),q=!I&&void 0===M;if(!z&&void 0===j||q)return null;let G=(0,x.U2)(O),W=l.forEntity(G).snapshot.primaryTitle,Y=[];""!==d&&(Y=d.replace(/\/$/,"").split("/").map(e=>e.replace(/[-_]/g," ").split(" ").map(C()).join(" ")));let K=[W,...Y,H].join(" | ");return(0,r.jsxs)(E.Y,{type:"Documentation",typeLink:P,title:p||N,subtitle:""===R?void 0:R||N,children:[(0,r.jsx)(m.A,{titleTemplate:"%s",children:(0,r.jsx)("title",{children:K})}),V,t,a.renderComponentsByLocation(g.e.Header)]})};var D=a(84893),O=a(76888),M=a(85408),I=a(12554),j=a(54290),z=a(64947),H=a(19976),B=a(60662),U=a(91042),$=a(76842),F=a(53317);function P(e){let{children:t,...a}=e,{Progress:o}=(0,j.n)().getComponents(),i=function(e){let{pluginId:t}=e??{},a=(0,k.gf)(H.a),r=(0,k.gf)(B.I),o=(0,n.useMemo)(()=>"BroadcastChannel"in window?new BroadcastChannel(`${t}-auth-cookie-expires-at`):null,[t]),[i,l]=(0,U.Y)(async()=>{let e=await r.getBaseUrl(t),n=`${e}/.backstage/auth/v1/cookie`,o=await a.fetch(`${n}`,{credentials:"include"});if(!o.ok){if(404===o.status)return{expiresAt:new Date(Date.now()+31536e6)};throw await F.o.fromResponse(o)}let i=await o.json();if(!i.expiresAt)throw Error("No expiration date found in response");return i});(0,$.u)(l.execute);let s=(0,n.useCallback)(()=>{l.execute()},[l]),c=(0,n.useCallback)(e=>{let t=(1+3*Math.random())*6e4,a=setTimeout(s,Date.parse(e.expiresAt)-Date.now()-t);return()=>clearTimeout(a)},[s]);return((0,n.useEffect)(()=>{if("success"!==i.status||!i.result)return()=>{};o?.postMessage({action:"COOKIE_REFRESH_SUCCESS",payload:i.result});let e=c(i.result),t=t=>{let{action:a,payload:r}=t.data;"COOKIE_REFRESH_SUCCESS"===a&&(e(),e=c(r))};return o?.addEventListener("message",t),()=>{e(),o?.removeEventListener("message",t)}},[i,c,o]),"not-executed"===i.status||"loading"===i.status&&!i.result||"loading"===i.status&&i.error)?{status:"loading"}:"error"===i.status&&i.error?{status:"error",error:i.error,retry:s}:{status:"success",data:i.result}}(a);return"loading"===i.status?(0,r.jsx)(o,{}):"error"===i.status?(0,r.jsx)(I.b,{error:i.error,children:(0,r.jsx)(z.A,{variant:"outlined",onClick:i.retry,children:"Retry"})}):(0,r.jsx)(r.Fragment,{children:t})}var V=a(60882),q=a(54917),G=a(41329),W=a(50868),Y=a(73466),K=a(30043),X=a(11642),Z=a(19108);let Q=e=>{let{withSearch:t,withHeader:a=!0}=e;return(0,r.jsxs)(i.Y,{themeId:"documentation",children:[a&&(0,r.jsx)(R,{}),(0,r.jsx)(D.Z,{}),(0,r.jsx)(d.p,{withSearch:t})]})},J=(0,V.A)(i.Y)({height:"inherit",overflowY:"visible"}),ee=e=>{let t,a,i,d,m,u,p,h,g=(0,q.A)(),f=(0,n.useMemo)(()=>(0,G.A)({...g,...e.overrideThemeOptions||{}}),[g,e.overrideThemeOptions]),{kind:v,name:b,namespace:y}=(0,O.K)(L.Oc),{children:w,entityRef:A={kind:v,name:b,namespace:y}}=e,E=(0,o.P1)(),T=(0,n.useMemo)(()=>({kind:A.kind,name:A.name,namespace:A.namespace}),[A.kind,A.name,A.namespace]),{shouldShowProgress:S}=(t=(0,k.gf)(K.v),a=(0,o.Zp)(),i=(0,_.S)(L.Oc),d=(0,x.U2)(T),u=(m=(0,n.useRef)(null)).current!==d,p=(0,Y.A)(async()=>{try{let e=await t.getEntityByRef(T);if(e?.metadata?.annotations?.[Z.GO])return(0,X.b1)(e,i)}catch(e){}},[d,t]),(0,n.useEffect)(()=>{!p.loading&&p.value&&a(p.value,{replace:!0}),p.loading||p.value||(m.current=d)},[p.loading,p.value,a,d]),h=u&&p.loading||!!p.value,{loading:p.loading,shouldShowProgress:h}),C=(0,n.useMemo)(()=>w?null:(E?n.Children.toArray(E.props.children):[]).flatMap(e=>e?.props?.children??[]).find(e=>!(0,M.E)(e,s.AF)&&!(0,M.E)(e,s.Wm)),[w,E]);return S?(0,r.jsx)(l.k,{}):w?(0,r.jsx)(W.A,{theme:f,children:(0,r.jsx)(P,{pluginId:"techdocs",children:(0,r.jsx)(c.R,{entityRef:T,children:({metadata:e,entityMetadata:t,onReady:a})=>(0,r.jsx)(J,{themeId:"documentation",className:"techdocs-reader-page",children:w instanceof Function?w({entityRef:T,techdocsMetadataValue:e.value,entityMetadataValue:t.value,onReady:a}):w})})})}):(0,r.jsx)(W.A,{theme:f,children:(0,r.jsx)(P,{pluginId:"techdocs",children:(0,r.jsx)(c.R,{entityRef:T,children:C||(0,r.jsx)(Q,{})})})})}},14184(e,t,a){"use strict";let r,n,o;a.d(t,{p:()=>tM});var i,l=a(31085),s=a(14041),c=a(42899),d=a(58837),m=a(83380),u=a(9394),p=a(91360),h=a(22856);let g="TECH_DOCS_SHADOW_DOM_STYLE_LOAD",f=e=>{let[t,a]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{if(!e)return()=>{};a(!0);let t=e.style;t.setProperty("opacity","0");let r=()=>{a(!1),t.setProperty("opacity","1")};return e.addEventListener(g,r),()=>{e.removeEventListener(g,r)}},[e]),t},v=e=>{let{element:t,onAppend:a,children:r}=e,[n,o]=(0,s.useState)((0,u.vt)({...(0,h.A)(),insertionPoint:void 0}));(0,s.useEffect)(()=>{if(!t)return()=>{};let e=t.querySelectorAll('head > link[rel="stylesheet"]'),a=e?.length??0,r=new CustomEvent(g);if(!a)return t.dispatchEvent(r),()=>{};let n=()=>{0==--a&&t.dispatchEvent(r)};return e?.forEach(e=>{e.addEventListener("load",n)}),()=>{e?.forEach(e=>{e.removeEventListener("load",n)})}},[t]);let i=(0,s.useCallback)(e=>{if(!t||!e)return;o((0,u.vt)({...(0,h.A)(),insertionPoint:t.querySelector("head")||void 0}));let r=e.shadowRoot;r||(r=e.attachShadow({mode:"open"})),r.replaceChildren(t),"function"==typeof a&&a(r)},[t,a]);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(p.Ay,{jss:n,sheetsManager:new Map,children:[(0,l.jsx)("div",{ref:i,"data-testid":"techdocs-native-shadowroot"}),r]})})};var b=a(85639),y=a(16454),w=a(96872),x=a(87437),A=a(78467),E=a(98312),k=a(33986);let T=(0,d.A)(e=>({loading:{right:e.spacing(1),position:"absolute"}})),_=()=>{let e=T();return(0,l.jsx)(A.A,{className:e.loading,"data-testid":"search-autocomplete-progressbar",color:"inherit",size:20})},S=(n=function(e){let{loading:t,value:a,onChange:r=()=>{},options:n=[],getOptionLabel:o=e=>String(e),inputPlaceholder:i,inputDebounceTime:c,freeSolo:d=!0,fullWidth:m=!0,clearOnBlur:u=!1,"data-testid":p="search-autocomplete",...h}=e,{setTerm:g}=(0,x.SQ)(),f=(0,s.useCallback)(e=>e?"string"==typeof e?e:o(e):"",[o]),v=(0,s.useMemo)(()=>f(a),[a,f]),b=(0,s.useCallback)((e,t,a,n)=>{g(f(t)),r(e,t,a,n)},[f,g,r]),y=(0,s.useCallback)(({InputProps:{ref:e,className:a,endAdornment:r},InputLabelProps:n,...o})=>(0,l.jsx)(k.I,{...o,ref:e,clearButton:!1,value:v,placeholder:i,debounceTime:c,endAdornment:t?(0,l.jsx)(_,{}):r,InputProps:{className:a}}),[t,v,i,c]);return(0,l.jsx)(E.Ay,{...h,"data-testid":p,value:a,onChange:b,options:n,getOptionLabel:o,renderInput:y,freeSolo:d,fullWidth:m,clearOnBlur:u})},e=>(0,l.jsx)(x.Lt,{inheritParentContextIfAvailable:!0,children:(0,l.jsx)(n,{...e})}));var C=a(18690),L=a(41472);let N=e=>{let{entityId:t,entityTitle:a,debounceTime:r=150,searchResultUrlMapper:n}=e,[o,i]=(0,s.useState)(!1),c=(0,C.Zp)(),{setFilters:d,term:m,result:{loading:u,value:p}}=(0,x.SQ)(),[h,g]=(0,s.useState)([]);(0,s.useEffect)(()=>(p&&g(p.results.slice(0,10)),()=>{}),[u,p]);let{kind:f,name:v,namespace:b}=t;return(0,s.useEffect)(()=>{d(e=>({...e,kind:f,namespace:b,name:v}))},[f,b,v,d]),(0,l.jsx)(S,{"data-testid":"techdocs-search-bar",size:"small",open:o&&!!m,getOptionLabel:()=>"",filterOptions:e=>e,onClose:()=>{i(!1)},onOpen:()=>{i(!0)},onChange:(e,t)=>{if(t?.document){let{location:e}=t.document;c(n?n(e):e)}},blurOnSelect:!0,noOptionsText:"No results found",value:null,options:h,renderOption:({document:e,highlight:t})=>(0,l.jsx)(L.TechDocsSearchResultListItem,{result:e,lineClamp:3,asListItem:!1,asLink:!1,title:e.title,highlight:t}),loading:u,inputDebounceTime:r,inputPlaceholder:`Search ${a||t.name} docs`,freeSolo:!1})},R=e=>{let t={term:"",types:["techdocs"],pageCursor:"",filters:e.entityId};return(0,l.jsx)(x.Lt,{initialState:t,children:(0,l.jsx)(N,{...e})})};var D=a(64947),O=a(48209),M=a(67296),I=a(73845),j=a(29365),z=a(72501),H=a(99703),B=a(32881);let U=(0,d.A)(e=>(0,H.A)({paper:{width:"100%",[e.breakpoints.up("sm")]:{width:"75%"},[e.breakpoints.up("md")]:{width:"50%"},padding:e.spacing(2.5)},root:{height:"100%",overflow:"hidden"},logs:{background:e.palette.background.default}})),$=({buildLog:e,onClose:t})=>{let a=U(),r=0===e.length?"Waiting for logs...":e.join("\n");return(0,l.jsxs)(c.A,{container:!0,direction:"column",className:a.root,spacing:0,wrap:"nowrap",children:[(0,l.jsxs)(c.A,{item:!0,container:!0,justifyContent:"space-between",alignItems:"center",spacing:0,wrap:"nowrap",children:[(0,l.jsx)(z.A,{variant:"h5",children:"Build Details"}),(0,l.jsx)(j.A,{title:"Close the drawer",onClick:t,color:"inherit",children:(0,l.jsx)(B.default,{})},"dismiss")]}),(0,l.jsx)(c.A,{item:!0,xs:!0,children:(0,l.jsx)(M.r,{text:r,classes:{root:a.logs}})})]})},F=({buildLog:e})=>{let t=U(),[a,r]=(0,s.useState)(!1);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(D.A,{color:"inherit",onClick:()=>r(!0),children:"Show Build Logs"}),(0,l.jsx)(I.Ay,{classes:{paper:t.paper},anchor:"right",open:a,onClose:()=>r(!1),children:(0,l.jsx)($,{buildLog:e,onClose:()=>r(!1)})})]})};var P=a(96170),V=a(96814),q=a(52262),G=a(90299);let W=({errorMessage:e})=>{let t=(0,P.gf)(V.U).getOptionalString("techdocs.builder"),a=(0,q.s)(),{entityRef:r}=(0,m.V)(),n=(0,C.zy)();(0,s.useEffect)(()=>{let{pathname:e,search:t,hash:o}=n;a.captureEvent("not-found",`${e}${t}${o}`,{attributes:r})},[a,r,n]);let o="";return[void 0,"local"].includes(t)||(o="Note that techdocs.builder is not set to 'local' in your config, which means this Backstage app will not generate docs if they are not found. Make sure the project's docs are generated and published by some external process (e.g. CI/CD pipeline). Or change techdocs.builder to 'local' to generate docs from this Backstage instance."),(0,l.jsx)(G.M,{status:"404",statusMessage:e||"Documentation not found",additionalInfo:o})};var Y=a(73466),K=a(28966),X=a(49707);function Z(e,t){let a={...e};switch(t.type){case"sync":"CHECKING"===t.state&&(a.buildLog=[]),a.activeSyncState=t.state,a.syncError=t.syncError;break;case"contentLoading":a.contentLoading=!0,a.contentError=void 0;break;case"content":"string"==typeof t.path&&(a.path=t.path),a.contentLoading=!1,a.content=t.content,a.contentError=t.contentError;break;case"buildLog":a.buildLog=a.buildLog.concat(t.log);break;default:throw Error()}return["BUILD_READY","BUILD_READY_RELOAD"].includes(a.activeSyncState)&&["contentLoading","content"].includes(t.type)&&(a.activeSyncState="UP_TO_DATE",a.buildLog=[]),a}let Q=(0,s.createContext)({}),J=()=>(0,s.useContext)(Q),ee=e=>{let{children:t}=e,{"*":a=""}=(0,C.g)(),{entityRef:r}=(0,m.V)(),{kind:n,namespace:o,name:i}=r,c=function(e,t,a,r){let[n,o]=(0,s.useReducer)(Z,{activeSyncState:"CHECKING",path:r,contentLoading:!0,buildLog:[]}),i=(0,P.gf)(X.s),{retry:l}=(0,K.A)(async()=>{o({type:"contentLoading"});try{let n=await i.getEntityDocs({kind:e,namespace:t,name:a},r);return o({type:"content",content:n,path:r}),n}catch(e){o({type:"content",contentError:e,path:r})}},[i,e,t,a,r]),c=(0,s.useRef)({content:void 0,reload:()=>{}});c.current={content:n.content,reload:l},(0,Y.A)(async()=>{o({type:"sync",state:"CHECKING"});let r=setTimeout(()=>{o({type:"sync",state:"BUILDING"})},1e3);try{switch(await i.syncEntityDocs({kind:e,namespace:t,name:a},e=>{o({type:"buildLog",log:e})})){case"updated":c.current.content?o({type:"sync",state:"BUILD_READY"}):(c.current.reload(),o({type:"sync",state:"BUILD_READY_RELOAD"}));break;case"cached":o({type:"sync",state:"UP_TO_DATE"});break;default:o({type:"sync",state:"ERROR",syncError:Error("Unexpected return state")})}}catch(e){o({type:"sync",state:"ERROR",syncError:e})}finally{clearTimeout(r)}},[e,a,t,i,o,c]);let d=(0,s.useMemo)(()=>(function({contentLoading:e,content:t,activeSyncState:a}){return e||"BUILD_READY_RELOAD"===a||!t&&"CHECKING"===a?"CHECKING":t||"BUILDING"!==a?t?"BUILDING"===a?"CONTENT_STALE_REFRESHING":"BUILD_READY"===a?"CONTENT_STALE_READY":"ERROR"===a?"CONTENT_STALE_ERROR":"CONTENT_FRESH":"CONTENT_NOT_FOUND":"INITIAL_BUILD"})({activeSyncState:n.activeSyncState,contentLoading:n.contentLoading,content:n.content}),[n.activeSyncState,n.content,n.contentLoading]);return(0,s.useMemo)(()=>({state:d,contentReload:l,path:n.path,content:n.content,contentErrorMessage:n.contentError?.toString(),syncErrorMessage:n.syncError?.toString(),buildLog:n.buildLog}),[d,l,n.path,n.content,n.contentError,n.syncError,n.buildLog])}(n,o,i,a);return(0,l.jsx)(Q.Provider,{value:c,children:t instanceof Function?t(c):t})},et=(0,d.A)(e=>({root:{marginBottom:e.spacing(2)},message:{wordBreak:"break-word",overflowWrap:"anywhere"}})),ea=()=>{let e=null,t=et(),{state:a,contentReload:r,contentErrorMessage:n,syncErrorMessage:o,buildLog:i}=J();return"INITIAL_BUILD"===a&&(e=(0,l.jsx)(O.A,{classes:{root:t.root},variant:"outlined",severity:"info",icon:(0,l.jsx)(A.A,{size:"24px"}),action:(0,l.jsx)(F,{buildLog:i}),children:"Documentation is accessed for the first time and is being prepared. The subsequent loads are much faster."})),"CONTENT_STALE_REFRESHING"===a&&(e=(0,l.jsx)(O.A,{variant:"outlined",severity:"info",icon:(0,l.jsx)(A.A,{size:"24px"}),action:(0,l.jsx)(F,{buildLog:i}),classes:{root:t.root},children:"A newer version of this documentation is being prepared and will be available shortly."})),"CONTENT_STALE_READY"===a&&(e=(0,l.jsx)(O.A,{variant:"outlined",severity:"success",action:(0,l.jsx)(D.A,{color:"inherit",onClick:()=>r(),children:"Refresh"}),classes:{root:t.root},children:"A newer version of this documentation is now available, please refresh to view."})),"CONTENT_STALE_ERROR"===a&&(e=(0,l.jsxs)(O.A,{variant:"outlined",severity:"error",action:(0,l.jsx)(F,{buildLog:i}),classes:{root:t.root,message:t.message},children:["Building a newer version of this documentation failed."," ",o]})),"CONTENT_NOT_FOUND"===a&&(e=(0,l.jsxs)(l.Fragment,{children:[o&&(0,l.jsxs)(O.A,{variant:"outlined",severity:"error",action:(0,l.jsx)(F,{buildLog:i}),classes:{root:t.root,message:t.message},children:["Building a newer version of this documentation failed."," ",o]}),(0,l.jsx)(W,{errorMessage:n})]})),e};var er=a(5893),en=a(54917),eo=a(59059);let{entries:ei,setPrototypeOf:el,isFrozen:es,getPrototypeOf:ec,getOwnPropertyDescriptor:ed}=Object,{freeze:em,seal:eu,create:ep}=Object,{apply:eh,construct:eg}="u">typeof Reflect&&Reflect;em||(em=function(e){return e}),eu||(eu=function(e){return e}),eh||(eh=function(e,t){for(var a=arguments.length,r=Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return e.apply(t,r)}),eg||(eg=function(e){for(var t=arguments.length,a=Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return new e(...a)});let ef=eN(Array.prototype.forEach),ev=eN(Array.prototype.lastIndexOf),eb=eN(Array.prototype.pop),ey=eN(Array.prototype.push),ew=eN(Array.prototype.splice),ex=eN(String.prototype.toLowerCase),eA=eN(String.prototype.toString),eE=eN(String.prototype.match),ek=eN(String.prototype.replace),eT=eN(String.prototype.indexOf),e_=eN(String.prototype.trim),eS=eN(Object.prototype.hasOwnProperty),eC=eN(RegExp.prototype.test),eL=(i=TypeError,function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return eg(i,t)});function eN(e){return function(t){t instanceof RegExp&&(t.lastIndex=0);for(var a=arguments.length,r=Array(a>1?a-1:0),n=1;n<a;n++)r[n-1]=arguments[n];return eh(e,t,r)}}function eR(e,t){let a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:ex;el&&el(e,null);let r=t.length;for(;r--;){let n=t[r];if("string"==typeof n){let e=a(n);e!==n&&(es(t)||(t[r]=e),n=e)}e[n]=!0}return e}function eD(e){let t=ep(null);for(let[a,r]of ei(e))eS(e,a)&&(Array.isArray(r)?t[a]=function(e){for(let t=0;t<e.length;t++)eS(e,t)||(e[t]=null);return e}(r):r&&"object"==typeof r&&r.constructor===Object?t[a]=eD(r):t[a]=r);return t}function eO(e,t){for(;null!==e;){let a=ed(e,t);if(a){if(a.get)return eN(a.get);if("function"==typeof a.value)return eN(a.value)}e=ec(e)}return function(){return null}}let eM=em(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),eI=em(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","enterkeyhint","exportparts","filter","font","g","glyph","glyphref","hkern","image","inputmode","line","lineargradient","marker","mask","metadata","mpath","part","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),ej=em(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),ez=em(["animate","color-profile","cursor","discard","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),eH=em(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover","mprescripts"]),eB=em(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),eU=em(["#text"]),e$=em(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","exportparts","face","for","headers","height","hidden","high","href","hreflang","id","inert","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","part","pattern","placeholder","playsinline","popover","popovertarget","popovertargetaction","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","slot","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","wrap","xmlns","slot"]),eF=em(["accent-height","accumulate","additive","alignment-baseline","amplitude","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","exponent","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","intercept","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","mask-type","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","slope","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","tablevalues","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),eP=em(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),eV=em(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),eq=eu(/\{\{[\w\W]*|[\w\W]*\}\}/gm),eG=eu(/<%[\w\W]*|[\w\W]*%>/gm),eW=eu(/\$\{[\w\W]*/gm),eY=eu(/^data-[\-\w.\u00B7-\uFFFF]+$/),eK=eu(/^aria-[\-\w]+$/),eX=eu(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|matrix):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),eZ=eu(/^(?:\w+script|data):/i),eQ=eu(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),eJ=eu(/^html$/i);var e0=Object.freeze({__proto__:null,ARIA_ATTR:eK,ATTR_WHITESPACE:eQ,CUSTOM_ELEMENT:eu(/^[a-z][.\w]*(-[.\w]+)+$/i),DATA_ATTR:eY,DOCTYPE_NAME:eJ,ERB_EXPR:eG,IS_ALLOWED_URI:eX,IS_SCRIPT_OR_DATA:eZ,MUSTACHE_EXPR:eq,TMPLIT_EXPR:eW});let e1=function(e,t){if("object"!=typeof e||"function"!=typeof e.createPolicy)return null;let a=null,r="data-tt-policy-suffix";t&&t.hasAttribute(r)&&(a=t.getAttribute(r));let n="dompurify"+(a?"#"+a:"");try{return e.createPolicy(n,{createHTML:e=>e,createScriptURL:e=>e})}catch(e){return console.warn("TrustedTypes policy "+n+" could not be created."),null}},e2=function(){return{afterSanitizeAttributes:[],afterSanitizeElements:[],afterSanitizeShadowDOM:[],beforeSanitizeAttributes:[],beforeSanitizeElements:[],beforeSanitizeShadowDOM:[],uponSanitizeAttribute:[],uponSanitizeElement:[],uponSanitizeShadowNode:[]}};var e5=function e(){let t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"u"<typeof window?null:window,r=t=>e(t);if(r.version="3.3.1",r.removed=[],!a||!a.document||9!==a.document.nodeType||!a.Element)return r.isSupported=!1,r;let{document:n}=a,o=n,i=o.currentScript,{DocumentFragment:l,HTMLTemplateElement:s,Node:c,Element:d,NodeFilter:m,NamedNodeMap:u=a.NamedNodeMap||a.MozNamedAttrMap,HTMLFormElement:p,DOMParser:h,trustedTypes:g}=a,f=d.prototype,v=eO(f,"cloneNode"),b=eO(f,"remove"),y=eO(f,"nextSibling"),w=eO(f,"childNodes"),x=eO(f,"parentNode");if("function"==typeof s){let e=n.createElement("template");e.content&&e.content.ownerDocument&&(n=e.content.ownerDocument)}let A="",{implementation:E,createNodeIterator:k,createDocumentFragment:T,getElementsByTagName:_}=n,{importNode:S}=o,C=e2();r.isSupported="function"==typeof ei&&"function"==typeof x&&E&&void 0!==E.createHTMLDocument;let{MUSTACHE_EXPR:L,ERB_EXPR:N,TMPLIT_EXPR:R,DATA_ATTR:D,ARIA_ATTR:O,IS_SCRIPT_OR_DATA:M,ATTR_WHITESPACE:I,CUSTOM_ELEMENT:j}=e0,{IS_ALLOWED_URI:z}=e0,H=null,B=eR({},[...eM,...eI,...ej,...eH,...eU]),U=null,$=eR({},[...e$,...eF,...eP,...eV]),F=Object.seal(ep(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),P=null,V=null,q=Object.seal(ep(null,{tagCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeCheck:{writable:!0,configurable:!1,enumerable:!0,value:null}})),G=!0,W=!0,Y=!1,K=!0,X=!1,Z=!0,Q=!1,J=!1,ee=!1,et=!1,ea=!1,er=!1,en=!0,eo=!1,el=!0,es=!1,ec={},ed=null,eu=eR({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),eh=null,eg=eR({},["audio","video","img","source","image","track"]),eN=null,eq=eR({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),eG="http://www.w3.org/1998/Math/MathML",eW="http://www.w3.org/2000/svg",eY="http://www.w3.org/1999/xhtml",eK=eY,eZ=!1,eQ=null,e5=eR({},[eG,eW,eY],eA),e4=eR({},["mi","mo","mn","ms","mtext"]),e3=eR({},["annotation-xml"]),e7=eR({},["title","style","font","a","script"]),e6=null,e8=["application/xhtml+xml","text/html"],e9=null,te=null,tt=n.createElement("form"),ta=function(e){return e instanceof RegExp||e instanceof Function},tr=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!te||te!==e){if(e&&"object"==typeof e||(e={}),e=eD(e),e9="application/xhtml+xml"===(e6=-1===e8.indexOf(e.PARSER_MEDIA_TYPE)?"text/html":e.PARSER_MEDIA_TYPE)?eA:ex,H=eS(e,"ALLOWED_TAGS")?eR({},e.ALLOWED_TAGS,e9):B,U=eS(e,"ALLOWED_ATTR")?eR({},e.ALLOWED_ATTR,e9):$,eQ=eS(e,"ALLOWED_NAMESPACES")?eR({},e.ALLOWED_NAMESPACES,eA):e5,eN=eS(e,"ADD_URI_SAFE_ATTR")?eR(eD(eq),e.ADD_URI_SAFE_ATTR,e9):eq,eh=eS(e,"ADD_DATA_URI_TAGS")?eR(eD(eg),e.ADD_DATA_URI_TAGS,e9):eg,ed=eS(e,"FORBID_CONTENTS")?eR({},e.FORBID_CONTENTS,e9):eu,P=eS(e,"FORBID_TAGS")?eR({},e.FORBID_TAGS,e9):eD({}),V=eS(e,"FORBID_ATTR")?eR({},e.FORBID_ATTR,e9):eD({}),ec=!!eS(e,"USE_PROFILES")&&e.USE_PROFILES,G=!1!==e.ALLOW_ARIA_ATTR,W=!1!==e.ALLOW_DATA_ATTR,Y=e.ALLOW_UNKNOWN_PROTOCOLS||!1,K=!1!==e.ALLOW_SELF_CLOSE_IN_ATTR,X=e.SAFE_FOR_TEMPLATES||!1,Z=!1!==e.SAFE_FOR_XML,Q=e.WHOLE_DOCUMENT||!1,et=e.RETURN_DOM||!1,ea=e.RETURN_DOM_FRAGMENT||!1,er=e.RETURN_TRUSTED_TYPE||!1,ee=e.FORCE_BODY||!1,en=!1!==e.SANITIZE_DOM,eo=e.SANITIZE_NAMED_PROPS||!1,el=!1!==e.KEEP_CONTENT,es=e.IN_PLACE||!1,z=e.ALLOWED_URI_REGEXP||eX,eK=e.NAMESPACE||eY,e4=e.MATHML_TEXT_INTEGRATION_POINTS||e4,e3=e.HTML_INTEGRATION_POINTS||e3,F=e.CUSTOM_ELEMENT_HANDLING||{},e.CUSTOM_ELEMENT_HANDLING&&ta(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(F.tagNameCheck=e.CUSTOM_ELEMENT_HANDLING.tagNameCheck),e.CUSTOM_ELEMENT_HANDLING&&ta(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(F.attributeNameCheck=e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),e.CUSTOM_ELEMENT_HANDLING&&"boolean"==typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(F.allowCustomizedBuiltInElements=e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),X&&(W=!1),ea&&(et=!0),ec&&(H=eR({},eU),U=[],!0===ec.html&&(eR(H,eM),eR(U,e$)),!0===ec.svg&&(eR(H,eI),eR(U,eF),eR(U,eV)),!0===ec.svgFilters&&(eR(H,ej),eR(U,eF),eR(U,eV)),!0===ec.mathMl&&(eR(H,eH),eR(U,eP),eR(U,eV))),e.ADD_TAGS&&("function"==typeof e.ADD_TAGS?q.tagCheck=e.ADD_TAGS:(H===B&&(H=eD(H)),eR(H,e.ADD_TAGS,e9))),e.ADD_ATTR&&("function"==typeof e.ADD_ATTR?q.attributeCheck=e.ADD_ATTR:(U===$&&(U=eD(U)),eR(U,e.ADD_ATTR,e9))),e.ADD_URI_SAFE_ATTR&&eR(eN,e.ADD_URI_SAFE_ATTR,e9),e.FORBID_CONTENTS&&(ed===eu&&(ed=eD(ed)),eR(ed,e.FORBID_CONTENTS,e9)),e.ADD_FORBID_CONTENTS&&(ed===eu&&(ed=eD(ed)),eR(ed,e.ADD_FORBID_CONTENTS,e9)),el&&(H["#text"]=!0),Q&&eR(H,["html","head","body"]),H.table&&(eR(H,["tbody"]),delete P.tbody),e.TRUSTED_TYPES_POLICY){if("function"!=typeof e.TRUSTED_TYPES_POLICY.createHTML)throw eL('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');if("function"!=typeof e.TRUSTED_TYPES_POLICY.createScriptURL)throw eL('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');A=(t=e.TRUSTED_TYPES_POLICY).createHTML("")}else void 0===t&&(t=e1(g,i)),null!==t&&"string"==typeof A&&(A=t.createHTML(""));em&&em(e),te=e}},tn=eR({},[...eI,...ej,...ez]),to=eR({},[...eH,...eB]),ti=function(e){let t=x(e);t&&t.tagName||(t={namespaceURI:eK,tagName:"template"});let a=ex(e.tagName),r=ex(t.tagName);return!!eQ[e.namespaceURI]&&(e.namespaceURI===eW?t.namespaceURI===eY?"svg"===a:t.namespaceURI===eG?"svg"===a&&("annotation-xml"===r||e4[r]):!!tn[a]:e.namespaceURI===eG?t.namespaceURI===eY?"math"===a:t.namespaceURI===eW?"math"===a&&e3[r]:!!to[a]:e.namespaceURI===eY?(t.namespaceURI!==eW||!!e3[r])&&(t.namespaceURI!==eG||!!e4[r])&&!to[a]&&(e7[a]||!tn[a]):"application/xhtml+xml"===e6&&!!eQ[e.namespaceURI])},tl=function(e){ey(r.removed,{element:e});try{x(e).removeChild(e)}catch(t){b(e)}},ts=function(e,t){try{ey(r.removed,{attribute:t.getAttributeNode(e),from:t})}catch(e){ey(r.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e)if(et||ea)try{tl(t)}catch(e){}else try{t.setAttribute(e,"")}catch(e){}},tc=function(e){let a=null,r=null;if(ee)e="<remove></remove>"+e;else{let t=eE(e,/^[\r\n\t ]+/);r=t&&t[0]}"application/xhtml+xml"===e6&&eK===eY&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");let o=t?t.createHTML(e):e;if(eK===eY)try{a=new h().parseFromString(o,e6)}catch(e){}if(!a||!a.documentElement){a=E.createDocument(eK,"template",null);try{a.documentElement.innerHTML=eZ?A:o}catch(e){}}let i=a.body||a.documentElement;return(e&&r&&i.insertBefore(n.createTextNode(r),i.childNodes[0]||null),eK===eY)?_.call(a,Q?"html":"body")[0]:Q?a.documentElement:i},td=function(e){return k.call(e.ownerDocument||e,e,m.SHOW_ELEMENT|m.SHOW_COMMENT|m.SHOW_TEXT|m.SHOW_PROCESSING_INSTRUCTION|m.SHOW_CDATA_SECTION,null)},tm=function(e){return e instanceof p&&("string"!=typeof e.nodeName||"string"!=typeof e.textContent||"function"!=typeof e.removeChild||!(e.attributes instanceof u)||"function"!=typeof e.removeAttribute||"function"!=typeof e.setAttribute||"string"!=typeof e.namespaceURI||"function"!=typeof e.insertBefore||"function"!=typeof e.hasChildNodes)},tu=function(e){return"function"==typeof c&&e instanceof c};function tp(e,t,a){ef(e,e=>{e.call(r,t,a,te)})}let th=function(e){let t=null;if(tp(C.beforeSanitizeElements,e,null),tm(e))return tl(e),!0;let a=e9(e.nodeName);if(tp(C.uponSanitizeElement,e,{tagName:a,allowedTags:H}),Z&&e.hasChildNodes()&&!tu(e.firstElementChild)&&eC(/<[/\w!]/g,e.innerHTML)&&eC(/<[/\w!]/g,e.textContent)||7===e.nodeType||Z&&8===e.nodeType&&eC(/<[/\w]/g,e.data))return tl(e),!0;if(!(q.tagCheck instanceof Function&&q.tagCheck(a))&&(!H[a]||P[a])){if(!P[a]&&tf(a)&&(F.tagNameCheck instanceof RegExp&&eC(F.tagNameCheck,a)||F.tagNameCheck instanceof Function&&F.tagNameCheck(a)))return!1;if(el&&!ed[a]){let t=x(e)||e.parentNode,a=w(e)||e.childNodes;if(a&&t){let r=a.length;for(let n=r-1;n>=0;--n){let r=v(a[n],!0);r.__removalCount=(e.__removalCount||0)+1,t.insertBefore(r,y(e))}}}return tl(e),!0}return e instanceof d&&!ti(e)||("noscript"===a||"noembed"===a||"noframes"===a)&&eC(/<\/no(script|embed|frames)/i,e.innerHTML)?(tl(e),!0):(X&&3===e.nodeType&&(t=e.textContent,ef([L,N,R],e=>{t=ek(t,e," ")}),e.textContent!==t&&(ey(r.removed,{element:e.cloneNode()}),e.textContent=t)),tp(C.afterSanitizeElements,e,null),!1)},tg=function(e,t,a){if(en&&("id"===t||"name"===t)&&(a in n||a in tt))return!1;if(W&&!V[t]&&eC(D,t));else if(G&&eC(O,t));else if(q.attributeCheck instanceof Function&&q.attributeCheck(t,e));else if(!U[t]||V[t]){if(!(tf(e)&&(F.tagNameCheck instanceof RegExp&&eC(F.tagNameCheck,e)||F.tagNameCheck instanceof Function&&F.tagNameCheck(e))&&(F.attributeNameCheck instanceof RegExp&&eC(F.attributeNameCheck,t)||F.attributeNameCheck instanceof Function&&F.attributeNameCheck(t,e))||"is"===t&&F.allowCustomizedBuiltInElements&&(F.tagNameCheck instanceof RegExp&&eC(F.tagNameCheck,a)||F.tagNameCheck instanceof Function&&F.tagNameCheck(a))))return!1}else if(eN[t]);else if(eC(z,ek(a,I,"")));else if(("src"===t||"xlink:href"===t||"href"===t)&&"script"!==e&&0===eT(a,"data:")&&eh[e]);else if(Y&&!eC(M,ek(a,I,"")));else if(a)return!1;return!0},tf=function(e){return"annotation-xml"!==e&&eE(e,j)},tv=function(e){tp(C.beforeSanitizeAttributes,e,null);let{attributes:a}=e;if(!a||tm(e))return;let n={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:U,forceKeepAttr:void 0},o=a.length;for(;o--;){let{name:i,namespaceURI:l,value:s}=a[o],c=e9(i),d="value"===i?s:e_(s);if(n.attrName=c,n.attrValue=d,n.keepAttr=!0,n.forceKeepAttr=void 0,tp(C.uponSanitizeAttribute,e,n),d=n.attrValue,eo&&("id"===c||"name"===c)&&(ts(i,e),d="user-content-"+d),Z&&eC(/((--!?|])>)|<\/(style|title|textarea)/i,d)||"attributename"===c&&eE(d,"href")){ts(i,e);continue}if(n.forceKeepAttr)continue;if(!n.keepAttr||!K&&eC(/\/>/i,d)){ts(i,e);continue}X&&ef([L,N,R],e=>{d=ek(d,e," ")});let m=e9(e.nodeName);if(!tg(m,c,d)){ts(i,e);continue}if(t&&"object"==typeof g&&"function"==typeof g.getAttributeType)if(l);else switch(g.getAttributeType(m,c)){case"TrustedHTML":d=t.createHTML(d);break;case"TrustedScriptURL":d=t.createScriptURL(d)}if(d!==s)try{l?e.setAttributeNS(l,i,d):e.setAttribute(i,d),tm(e)?tl(e):eb(r.removed)}catch(t){ts(i,e)}}tp(C.afterSanitizeAttributes,e,null)},tb=function e(t){let a=null,r=td(t);for(tp(C.beforeSanitizeShadowDOM,t,null);a=r.nextNode();)tp(C.uponSanitizeShadowNode,a,null),th(a),tv(a),a.content instanceof l&&e(a.content);tp(C.afterSanitizeShadowDOM,t,null)};return r.sanitize=function(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null,i=null,s=null,d=null;if((eZ=!e)&&(e="\x3c!--\x3e"),"string"!=typeof e&&!tu(e))if("function"==typeof e.toString){if("string"!=typeof(e=e.toString()))throw eL("dirty is not a string, aborting")}else throw eL("toString is not a function");if(!r.isSupported)return e;if(J||tr(a),r.removed=[],"string"==typeof e&&(es=!1),es){if(e.nodeName){let t=e9(e.nodeName);if(!H[t]||P[t])throw eL("root node is forbidden and cannot be sanitized in-place")}}else if(e instanceof c)1===(i=(n=tc("\x3c!----\x3e")).ownerDocument.importNode(e,!0)).nodeType&&"BODY"===i.nodeName||"HTML"===i.nodeName?n=i:n.appendChild(i);else{if(!et&&!X&&!Q&&-1===e.indexOf("<"))return t&&er?t.createHTML(e):e;if(!(n=tc(e)))return et?null:er?A:""}n&&ee&&tl(n.firstChild);let m=td(es?e:n);for(;s=m.nextNode();)th(s),tv(s),s.content instanceof l&&tb(s.content);if(es)return e;if(et){if(ea)for(d=T.call(n.ownerDocument);n.firstChild;)d.appendChild(n.firstChild);else d=n;return(U.shadowroot||U.shadowrootmode)&&(d=S.call(o,d,!0)),d}let u=Q?n.outerHTML:n.innerHTML;return Q&&H["!doctype"]&&n.ownerDocument&&n.ownerDocument.doctype&&n.ownerDocument.doctype.name&&eC(eJ,n.ownerDocument.doctype.name)&&(u="<!DOCTYPE "+n.ownerDocument.doctype.name+">\n"+u),X&&ef([L,N,R],e=>{u=ek(u,e," ")}),t&&er?t.createHTML(u):u},r.setConfig=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};tr(e),J=!0},r.clearConfig=function(){te=null,J=!1},r.isValidAttribute=function(e,t,a){return te||tr({}),tg(e9(e),e9(t),a)},r.addHook=function(e,t){"function"==typeof t&&ey(C[e],t)},r.removeHook=function(e,t){if(void 0!==t){let a=ev(C[e],t);return -1===a?void 0:ew(C[e],a,1)[0]}return eb(C[e])},r.removeHooks=function(e){C[e]=[]},r.removeAllHooks=function(){C=e2()},r}();let e4=/main\.[A-Fa-f0-9]{8}\.min\.css$/,e3=/^https:\/\/fonts\.googleapis\.com/,e7=/^https:\/\/fonts\.gstatic\.com/,e6=e=>{if(e.nodeType===Node.ELEMENT_NODE){let t,a,r,n;"LINK"!==e.nodeName||(a=(t=e?.getAttribute("href")||"").match(e4),r=t.match(e3),n=t.match(e7),a||r||n)||e.remove()}},e8=(e,t)=>{if(e.nodeType===Node.ELEMENT_NODE){let a,r;"meta"===t.tagName&&(a=e.getAttribute("http-equiv"),r=e.getAttribute("content"),"refresh"!==a||r?.includes("url=")!==!0)&&e.parentNode?.removeChild(e)}},e9=(e,t)=>{"META"!==e.tagName&&("http-equiv"===t.attrName||"content"===t.attrName)&&e.removeAttribute(t.attrName)};var te=a(65901),tt=a(268);let ta=["h1","h2","h3","h4","h5","h6"],tr=/(em)|(rem)/gi,tn=/var\(|\)/gi,to={dark:["#only-light","#gh-light-mode-only"],light:["#only-dark","#gh-dark-mode-only"]},ti=[({theme:e})=>`
/*==================  Variables  ==================*/
/*
  As the MkDocs output is rendered in shadow DOM, the CSS variable definitions on the root selector are not applied. Instead, they have to be applied on :host.
  As there is no way to transform the served main*.css yet (for example in the backend), we have to copy from main*.css and modify them.
*/

:host {
  /* FONT */
  --md-default-fg-color: ${e.palette.text.primary};
  --md-default-fg-color--light: ${e.palette.text.secondary};
  --md-default-fg-color--lighter: ${(0,tt.a)(e.palette.text.secondary,.7)};
  --md-default-fg-color--lightest: ${(0,tt.a)(e.palette.text.secondary,.3)};

  /* BACKGROUND */
  --md-default-bg-color:${e.palette.background.default};
  --md-default-bg-color--light: ${e.palette.background.paper};
  --md-default-bg-color--lighter: ${(0,tt.a)(e.palette.background.paper,.7)};
  --md-default-bg-color--lightest: ${(0,tt.a)(e.palette.background.paper,.3)};

  /* PRIMARY */
  --md-primary-fg-color: ${e.palette.primary.main};
  --md-primary-fg-color--light: ${e.palette.primary.light};
  --md-primary-fg-color--dark: ${e.palette.primary.dark};
  --md-primary-bg-color: ${e.palette.primary.contrastText};
  --md-primary-bg-color--light: ${(0,tt.a)(e.palette.primary.contrastText,.7)};

  /* ACCENT */
  --md-accent-fg-color: var(--md-primary-fg-color);
  --md-accent-fg-color--transparent: ${(0,tt.X4)(e.palette.primary.main,.1)};
  --md-accent-bg-color: var(--md-primary-bg-color);
  --md-accent-bg-color--light: var(--md-primary-bg-color--light);

  /* SHADOW */
  --md-shadow-z1: ${e.shadows[1]};
  --md-shadow-z2: ${e.shadows[2]};
  --md-shadow-z3: ${e.shadows[3]};

  /* EXTENSIONS */
  --md-admonition-fg-color: var(--md-default-fg-color);
  --md-admonition-bg-color: var(--md-default-bg-color);
  /* Admonitions and others are using SVG masks to define icons. These masks are defined as CSS variables. */
  --md-admonition-icon--note: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83 3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75L3 17.25z"/></svg>');
  --md-admonition-icon--abstract: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 5h16v2H4V5m0 4h16v2H4V9m0 4h16v2H4v-2m0 4h10v2H4v-2z"/></svg>');
  --md-admonition-icon--info: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 9h-2V7h2m0 10h-2v-6h2m-1-9A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10A10 10 0 0012 2z"/></svg>');
  --md-admonition-icon--tip: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17.55 11.2c-.23-.3-.5-.56-.76-.82-.65-.6-1.4-1.03-2.03-1.66C13.3 7.26 13 4.85 13.91 3c-.91.23-1.75.75-2.45 1.32-2.54 2.08-3.54 5.75-2.34 8.9.04.1.08.2.08.33 0 .22-.15.42-.35.5-.22.1-.46.04-.64-.12a.83.83 0 01-.15-.17c-1.1-1.43-1.28-3.48-.53-5.12C5.89 10 5 12.3 5.14 14.47c.04.5.1 1 .27 1.5.14.6.4 1.2.72 1.73 1.04 1.73 2.87 2.97 4.84 3.22 2.1.27 4.35-.12 5.96-1.6 1.8-1.66 2.45-4.32 1.5-6.6l-.13-.26c-.2-.46-.47-.87-.8-1.25l.05-.01m-3.1 6.3c-.28.24-.73.5-1.08.6-1.1.4-2.2-.16-2.87-.82 1.19-.28 1.89-1.16 2.09-2.05.17-.8-.14-1.46-.27-2.23-.12-.74-.1-1.37.18-2.06.17.38.37.76.6 1.06.76 1 1.95 1.44 2.2 2.8.04.14.06.28.06.43.03.82-.32 1.72-.92 2.27h.01z"/></svg>');
  --md-admonition-icon--success: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2m-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-admonition-icon--question: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.07 11.25l-.9.92C13.45 12.89 13 13.5 13 15h-2v-.5c0-1.11.45-2.11 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41a2 2 0 00-2-2 2 2 0 00-2 2H8a4 4 0 014-4 4 4 0 014 4 3.2 3.2 0 01-.93 2.25M13 19h-2v-2h2M12 2A10 10 0 002 12a10 10 0 0010 10 10 10 0 0010-10c0-5.53-4.5-10-10-10z"/></svg>');
  --md-admonition-icon--warning: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13 14h-2v-4h2m0 8h-2v-2h2M1 21h22L12 2 1 21z"/></svg>');
  --md-admonition-icon--failure: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2c5.53 0 10 4.47 10 10s-4.47 10-10 10S2 17.53 2 12 6.47 2 12 2m3.59 5L12 10.59 8.41 7 7 8.41 10.59 12 7 15.59 8.41 17 12 13.41 15.59 17 17 15.59 13.41 12 17 8.41 15.59 7z"/></svg>');
  --md-admonition-icon--danger: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.5 20l4.86-9.73H13V4l-5 9.73h3.5V20M12 2c2.75 0 5.1 1 7.05 2.95C21 6.9 22 9.25 22 12s-1 5.1-2.95 7.05C17.1 21 14.75 22 12 22s-5.1-1-7.05-2.95C3 17.1 2 14.75 2 12s1-5.1 2.95-7.05C6.9 3 9.25 2 12 2z"/></svg>');
  --md-admonition-icon--bug: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 12h-4v-2h4m0 6h-4v-2h4m6-6h-2.81a5.985 5.985 0 00-1.82-1.96L17 4.41 15.59 3l-2.17 2.17a6.002 6.002 0 00-2.83 0L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8z"/></svg>');
  --md-admonition-icon--example: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 13v-2h14v2H7m0 6v-2h14v2H7M7 7V5h14v2H7M3 8V5H2V4h2v4H3m-1 9v-1h3v4H2v-1h2v-.5H3v-1h1V17H2m2.25-7a.75.75 0 01.75.75c0 .2-.08.39-.21.52L3.12 13H5v1H2v-.92L4 11H2v-1h2.25z"/></svg>');
  --md-admonition-icon--quote: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 17h3l2-4V7h-6v6h3M6 17h3l2-4V7H5v6h3l-2 4z"/></svg>');
  --md-footnotes-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 7v4H5.83l3.58-3.59L8 6l-6 6 6 6 1.41-1.42L5.83 13H21V7h-2z"/></svg>');
  --md-details-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-tasklist-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/></svg>');
  --md-tasklist-icon--checked: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>');
  --md-nav-icon--prev: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11v2H8l5.5 5.5-1.42 1.42L4.16 12l7.92-7.92L13.5 5.5 8 11h12z"/></svg>');
  --md-nav-icon--next: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.59 16.58 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.42z"/></svg>');
  --md-toc-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 9h14V7H3v2m0 4h14v-2H3v2m0 4h14v-2H3v2m16 0h2v-2h-2v2m0-10v2h2V7h-2m0 6h2v-2h-2v2z"/></svg>');
  --md-clipboard-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1z"/></svg>');
  --md-search-result-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h7c-.41-.25-.8-.56-1.14-.9-.33-.33-.61-.7-.86-1.1H6V4h7v5h5v1.18c.71.16 1.39.43 2 .82V8l-6-6m6.31 16.9c1.33-2.11.69-4.9-1.4-6.22-2.11-1.33-4.91-.68-6.22 1.4-1.34 2.11-.69 4.89 1.4 6.22 1.46.93 3.32.93 4.79.02L22 23.39 23.39 22l-3.08-3.1m-3.81.1a2.5 2.5 0 0 1-2.5-2.5 2.5 2.5 0 0 1 2.5-2.5 2.5 2.5 0 0 1 2.5 2.5 2.5 2.5 0 0 1-2.5 2.5z"/></svg>');
  --md-source-forks-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z"/></svg>');
  --md-source-repositories-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 1 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 0 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 0 1 1-1h8zM5 12.25v3.25a.25.25 0 0 0 .4.2l1.45-1.087a.25.25 0 0 1 .3 0L8.6 15.7a.25.25 0 0 0 .4-.2v-3.25a.25.25 0 0 0-.25-.25h-3.5a.25.25 0 0 0-.25.25z"/></svg>');
  --md-source-stars-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.75.75 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694v.001z"/></svg>');
  --md-source-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 0 1 .25-.25h5.025a.25.25 0 0 1 .177.073l6.25 6.25a.25.25 0 0 1 0 .354l-5.025 5.025a.25.25 0 0 1-.354 0l-6.25-6.25a.25.25 0 0 1-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 0 1 0 2.474l-5.026 5.026a1.75 1.75 0 0 1-2.474 0l-6.25-6.25A1.75 1.75 0 0 1 1 7.775zM6 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/></svg>');
  --md-version-icon: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Free 6.0.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) Copyright 2022 Fonticons, Inc.--><path d="m310.6 246.6-127.1 128c-7.1 6.3-15.3 9.4-23.5 9.4s-16.38-3.125-22.63-9.375l-127.1-128C.224 237.5-2.516 223.7 2.438 211.8S19.07 192 32 192h255.1c12.94 0 24.62 7.781 29.58 19.75s3.12 25.75-6.08 34.85z"/></svg>');
  
  --md-status--updated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>cellphone-arrow-down</title><path d="M17,1H7A2,2 0 0,0 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3A2,2 0 0,0 17,1M17,19H7V5H17V19M16,13H13V8H11V13H8L12,17L16,13Z" /></svg>');
  --md-status: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2v6Z"/></svg>');
  --md-status--new: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="m23 12-2.44-2.78.34-3.68-3.61-.82-1.89-3.18L12 3 8.6 1.54 6.71 4.72l-3.61.81.34 3.68L1 12l2.44 2.78-.34 3.69 3.61.82 1.89 3.18L12 21l3.4 1.46 1.89-3.18 3.61-.82-.34-3.68L23 12m-10 5h-2v-2h2v2m0-4h-2V7h2v6Z"/></svg>');
  --md-status--deprecated: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 3v1H4v2h1v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V6h1V4h-5V3H9m0 5h2v9H9V8m4 0h2v9h-2V8Z"/></svg>');
  --md-status--encrypted: url('data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 1 3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4m0 6c1.4 0 2.8 1.1 2.8 2.5V11c.6 0 1.2.6 1.2 1.3v3.5c0 .6-.6 1.2-1.3 1.2H9.2c-.6 0-1.2-.6-1.2-1.3v-3.5c0-.6.6-1.2 1.2-1.2V9.5C9.2 8.1 10.6 7 12 7m0 1.2c-.8 0-1.5.5-1.5 1.3V11h3V9.5c0-.8-.7-1.3-1.5-1.3Z"/></svg>');
}

:host > * {
  /* CODE */
  --md-code-fg-color: ${e.palette.text.primary};
  --md-code-bg-color: ${e.palette.code?.background??e.palette.background.paper};
  --md-code-hl-color: ${(0,tt.X4)(e.palette.warning.main,.5)};
  --md-code-hl-color--light: var(--md-code-hl-color);
  --md-code-hl-keyword-color: ${"dark"===e.palette.type?e.palette.primary.light:e.palette.primary.dark};
  --md-code-hl-function-color: ${"dark"===e.palette.type?e.palette.secondary.light:e.palette.secondary.dark};
  --md-code-hl-string-color: ${"dark"===e.palette.type?e.palette.success.light:e.palette.success.dark};
  --md-code-hl-number-color: ${"dark"===e.palette.type?e.palette.error.light:e.palette.error.dark};
  --md-code-hl-constant-color: var(--md-code-hl-function-color);
  --md-code-hl-special-color: var(--md-code-hl-function-color);
  --md-code-hl-name-color: var(--md-code-fg-color);
  --md-code-hl-comment-color: var(--md-default-fg-color--light);
  --md-code-hl-generic-color: var(--md-default-fg-color--light);
  --md-code-hl-variable-color: var(--md-default-fg-color--light);
  --md-code-hl-operator-color: var(--md-default-fg-color--light);
  --md-code-hl-punctuation-color: var(--md-default-fg-color--light);

  /* TYPESET */
  --md-typeset-font-size: 1rem;
  --md-typeset-color: var(--md-default-fg-color);
  --md-typeset-a-color: ${e.palette.link};
  --md-typeset-table-color: ${e.palette.text.primary};
  --md-typeset-table-color--light: ${(0,tt.X4)(e.palette.text.primary,.05)};
  --md-typeset-del-color: ${"dark"===e.palette.type?(0,tt.X4)(e.palette.error.dark,.5):(0,tt.X4)(e.palette.error.light,.5)};
  --md-typeset-ins-color: ${"dark"===e.palette.type?(0,tt.X4)(e.palette.success.dark,.5):(0,tt.X4)(e.palette.success.light,.5)};
  --md-typeset-mark-color: ${"dark"===e.palette.type?(0,tt.X4)(e.palette.warning.dark,.5):(0,tt.X4)(e.palette.warning.light,.5)};
  --md-typeset-kbd-color: var(--md-code-bg-color);
  --md-typeset-kbd-accent-color var(--md-code-bg-color);
  --md-typeset-kbd-border-color: var(--md-default-fg-color--light);
}

@media screen and (max-width: 76.1875em) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .9rem;
  }
}

@media screen and (max-width: 600px) {
  :host > * {
    /* TYPESET */
    --md-typeset-font-size: .7rem;
  }
}

  --md-footer-bg-color: var(--md-default-bg-color);
  --md-footer-bg-color--dark: var(--md-default-bg-color);
`,({theme:e})=>`
/*==================  Reset  ==================*/

body {
  --md-text-color: var(--md-default-fg-color);
  --md-text-link-color: var(--md-accent-fg-color);
  --md-text-font-family: ${e.typography.fontFamily};
  font-family: var(--md-text-font-family);
  background-color: unset;
}
`,({theme:e,sidebar:t})=>`

/*==================  Layout  ==================*/

/* mkdocs material v9 compat */
.md-nav__title {
  color: var(--md-default-fg-color);
}

.md-grid {
  max-width: 100%;
  margin: 0;
}

.md-nav {
  font-size: calc(var(--md-typeset-font-size) * 0.9);
}
.md-nav__link:not(:has(svg)) {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.md-nav__link:has(svg) > .md-ellipsis {
  flex-grow: 1;
}
.md-nav__icon {
  height: 20px !important;
  width: 20px !important;
  margin-left:${e.spacing(1)}px;
}
.md-nav__icon svg {
  margin: 0;
  width: 20px !important;
  height: 20px !important;
}
.md-nav__icon:after {
  width: 20px !important;
  height: 20px !important;
}
.md-status--updated::after {
  -webkit-mask-image: var(--md-status--updated);
  mask-image: var(--md-status--updated);
}

.md-nav__item--active > .md-nav__link, a.md-nav__link--active {
  text-decoration: underline;
  color: var(--md-typeset-a-color);
}
.md-nav__link--active > .md-status:after {
  background-color: var(--md-typeset-a-color);
}
.md-nav__link[href]:hover > .md-status:after {
  background-color: var(--md-accent-fg-color);
}

.md-main__inner {
  margin-top: 0;
}

.md-sidebar {
  bottom: 75px;
  position: fixed;
  width: 16rem;
  overflow-y: auto;
  overflow-x: hidden;
  scrollbar-color: rgb(193, 193, 193) #eee;
  scrollbar-width: thin;
}
.md-sidebar .md-sidebar__scrollwrap {
  width: calc(16rem);
  overflow-y: hidden;
}
@supports selector(::-webkit-scrollbar) {
  [dir=ltr] .md-sidebar__inner {
      padding-right: calc(100% - 15.1rem);
  }
}
.md-sidebar--secondary {
  right: ${e.spacing(3)}px;
}
.md-sidebar::-webkit-scrollbar {
  width: 5px;
}
.md-sidebar::-webkit-scrollbar-button {
  width: 5px;
  height: 5px;
}
.md-sidebar::-webkit-scrollbar-track {
  background: #eee;
  border: 1 px solid rgb(250, 250, 250);
  box-shadow: 0px 0px 3px #dfdfdf inset;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb {
  width: 5px;
  background: rgb(193, 193, 193);
  border: transparent;
  border-radius: 3px;
}
.md-sidebar::-webkit-scrollbar-thumb:hover {
  background: rgb(125, 125, 125);
}

.md-content {
  max-width: calc(100% - 16rem * 2);
  margin-left: 16rem;
  margin-bottom: 50px;
}

.md-content > .md-sidebar {
  left: 16rem;
}

.md-footer {
  position: fixed;
  bottom: 0px;
  pointer-events: none;
}

.md-footer-nav__link, .md-footer__link {
  pointer-events: all;
}

.md-footer__title {
  background-color: unset;
}
.md-footer-nav__link, .md-footer__link {
  width: 16rem;
}

.md-dialog {
  background-color: unset;
}

@media screen and (min-width: 76.25em) {
  .md-sidebar {
    height: auto;
  }
}

@media screen and (max-width: 76.1875em) {
  .md-nav {
    transition: none !important;
    background-color: var(--md-default-bg-color)
  }
  .md-nav--primary .md-nav__title {
    cursor: auto;
    color: var(--md-default-fg-color);
    font-weight: 700;
    white-space: normal;
    line-height: 1rem;
    height: auto;
    display: flex;
    flex-flow: column;
    row-gap: 1.6rem;
    padding: 1.2rem .8rem .8rem;
    background-color: var(--md-default-bg-color);
  }
  .md-nav--primary .md-nav__title~.md-nav__list {
    box-shadow: none;
  }
  .md-nav--primary .md-nav__title ~ .md-nav__list > :first-child {
    border-top: none;
  }
  .md-nav--primary .md-nav__title .md-nav__button {
    display: none;
  }
  .md-nav--primary .md-nav__title .md-nav__icon {
    color: var(--md-default-fg-color);
    position: static;
    height: auto;
    margin: 0 0 0 -0.2rem;
  }
  .md-nav--primary > .md-nav__title [for="none"] {
    padding-top: 0;
  }
  .md-nav--primary .md-nav__item {
    border-top: none;
  }
  .md-nav--primary :is(.md-nav__title,.md-nav__item) {
    font-size : var(--md-typeset-font-size);
  }
  .md-nav .md-source {
    display: none;
  }

  .md-sidebar {
    height: 100%;
  }
  .md-sidebar--primary {
    width: 16rem !important;
    z-index: 200;
    left: ${t.isPinned?"calc(-16rem + 224px)":"calc(-16rem + 72px)"} !important;
  }
  .md-sidebar--secondary:not([hidden]) {
    display: none;
  }

  [data-md-toggle=drawer]:checked~.md-container .md-sidebar--primary {
    transform: translateX(16rem);
  }

  .md-content {
    max-width: 100%;
    margin-left: 0;
  }

  .md-header__button {
    margin: 0.4rem 0;
    margin-left: 0.4rem;
    padding: 0;
  }

  .md-overlay {
    left: 0;
  }

  .md-footer {
    position: static;
    padding-left: 0;
  }
  .md-footer-nav__link {
    /* footer links begin to overlap at small sizes without setting width */
    width: 50%;
  }
}

@media screen and (max-width: 600px) {
  .md-sidebar--primary {
    left: -16rem !important;
    width: 16rem;
  }
}


@media print {
  .md-sidebar,
  #toggle-sidebar {
    display: none;
  }

  .md-content {
    margin: 0;
    width: 100%;
    max-width: 100%;
  }
}
`,({theme:e})=>`
/*==================  Typeset  ==================*/

.md-typeset {
  font-size: var(--md-typeset-font-size);
}

${ta.reduce((t,a)=>{let r=e.typography.htmlFontSize??16,{lineHeight:n,fontFamily:o,fontWeight:i,fontSize:l}=e.typography[a],s=e=>{if("number"==typeof e)return s(`${e/r*.6}rem`);if("string"==typeof e){if(e.match(tn)){let t=window.getComputedStyle(document.body).getPropertyValue(e.replaceAll(tn,""));if(""!==t)return s(t)}else if(e.match(tr)){let t=e.replace(tr,"");return`calc(${t} * var(--md-typeset-font-size))`}}return e};return t.concat(`
    .md-typeset ${a} {
      color: var(--md-default-fg-color);
      line-height: ${n};
      font-family: ${o};
      font-weight: ${i};
      font-size: ${s(l)};
    }
  `)},"")}

.md-typeset .md-content__button {
  color: var(--md-default-fg-color);
}

.md-typeset hr {
  border-bottom: 0.05rem dotted ${e.palette.divider};
}

.md-typeset details {
  font-size: var(--md-typeset-font-size) !important;
}
.md-typeset details summary {
  padding-left: 2.5rem !important;
}
.md-typeset details summary:before,
.md-typeset details summary:after {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: rotate(0deg) translateY(-50%) !important;
}
.md-typeset details[open] > summary:after {
  transform: rotate(90deg) translateX(-50%) !important;
}

.md-typeset blockquote {
  color: var(--md-default-fg-color--light);
  border-left: 0.2rem solid var(--md-default-fg-color--light);
}

.md-typeset table:not([class]) {
  font-size: var(--md-typeset-font-size);
  border: 1px solid var(--md-default-fg-color);
  border-bottom: none;
  border-collapse: collapse;
  border-radius: ${e.shape.borderRadius}px;
}
.md-typeset table:not([class]) th {
  font-weight: bold;
}
.md-typeset table:not([class]) td, .md-typeset table:not([class]) th {
  border-bottom: 1px solid var(--md-default-fg-color);
}

.md-typeset pre > code::-webkit-scrollbar-thumb {
  background-color: hsla(0, 0%, 0%, 0.32);
}
.md-typeset pre > code::-webkit-scrollbar-thumb:hover {
  background-color: hsla(0, 0%, 0%, 0.87);
}

.md-typeset code {
  word-break: keep-all;
}
`,()=>`
/*==================  Animations  ==================*/
/*
  Disable CSS animations on link colors as they lead to issues in dark mode.
  The dark mode color theme is applied later and theirfore there is always an animation from light to dark mode when navigation between pages.
*/
.md-dialog, .md-nav__link, .md-footer__link, .md-typeset a, .md-typeset a::before, .md-typeset .headerlink {
  transition: none;
}
`,({theme:e})=>`
/*==================  Extensions  ==================*/

/* HIGHLIGHT */
.highlight .md-clipboard:after {
  content: unset;
}

.highlight .nx {
  color: ${"dark"===e.palette.type?"#ff53a3":"#ec407a"};
}

/* CODE HILITE */
.codehilite .gd {
  background-color: ${"dark"===e.palette.type?"rgba(248,81,73,0.65)":"#fdd"};
}

.codehilite .gi {
  background-color: ${"dark"===e.palette.type?"rgba(46,160,67,0.65)":"#dfd"};
}

/* TABBED */
.tabbed-set>input:nth-child(1):checked~.tabbed-labels>:nth-child(1),
.tabbed-set>input:nth-child(2):checked~.tabbed-labels>:nth-child(2),
.tabbed-set>input:nth-child(3):checked~.tabbed-labels>:nth-child(3),
.tabbed-set>input:nth-child(4):checked~.tabbed-labels>:nth-child(4),
.tabbed-set>input:nth-child(5):checked~.tabbed-labels>:nth-child(5),
.tabbed-set>input:nth-child(6):checked~.tabbed-labels>:nth-child(6),
.tabbed-set>input:nth-child(7):checked~.tabbed-labels>:nth-child(7),
.tabbed-set>input:nth-child(8):checked~.tabbed-labels>:nth-child(8),
.tabbed-set>input:nth-child(9):checked~.tabbed-labels>:nth-child(9),
.tabbed-set>input:nth-child(10):checked~.tabbed-labels>:nth-child(10),
.tabbed-set>input:nth-child(11):checked~.tabbed-labels>:nth-child(11),
.tabbed-set>input:nth-child(12):checked~.tabbed-labels>:nth-child(12),
.tabbed-set>input:nth-child(13):checked~.tabbed-labels>:nth-child(13),
.tabbed-set>input:nth-child(14):checked~.tabbed-labels>:nth-child(14),
.tabbed-set>input:nth-child(15):checked~.tabbed-labels>:nth-child(15),
.tabbed-set>input:nth-child(16):checked~.tabbed-labels>:nth-child(16),
.tabbed-set>input:nth-child(17):checked~.tabbed-labels>:nth-child(17),
.tabbed-set>input:nth-child(18):checked~.tabbed-labels>:nth-child(18),
.tabbed-set>input:nth-child(19):checked~.tabbed-labels>:nth-child(19),
.tabbed-set>input:nth-child(20):checked~.tabbed-labels>:nth-child(20) {
  color: var(--md-accent-fg-color);
  border-color: var(--md-accent-fg-color);
}

/* TASK-LIST */
.task-list-control .task-list-indicator::before {
  background-color: ${e.palette.action.disabledBackground};
}
.task-list-control [type="checkbox"]:checked + .task-list-indicator:before {
 background-color: ${e.palette.success.main};
}

/* ADMONITION */
.admonition {
  font-size: var(--md-typeset-font-size) !important;
}
.admonition .admonition-title {
  padding-left: 2.5rem !important;
}

.admonition .admonition-title:before {
  top: 50% !important;
  width: 20px !important;
  height: 20px !important;
  transform: translateY(-50%) !important;
}
`,({theme:e})=>`
/*==================  Palette  ==================*/
/*
  When color palette toggle is enabled in material theme for Mkdocs, there is a possibility to show conditionally 
  images by adding #only-dark or #only-light to resource hash. Backstage doesn't use mkdocs color palette mechanism,
  so there is a need to add css rules from palette*.css manually.
*/

${to[e.palette.type].map(e=>`img[src$="${e}"]`).join(", ")} {
  display: none;
}
`],tl=(e,t,a)=>{let r=new URL(t,"https://ignored.com").pathname,n="src"===e&&r.endsWith(".svg"),o=!t.match(/^([a-z]*:)?\/\//i),i=t.startsWith(a);return n&&(o||i)};var ts=a(82619),tc=a(90292),td=a(52536),tm=a.n(td);function tu(e,t){r.then(a=>{"createRoot"in a?a.createRoot(t).render(e):a.render(e,t)})}r=Promise.resolve().then(a.t.bind(a,25873,19));var tp=a(27326);function th(e){let t=new URL(e);return t.pathname.endsWith("/")||t.pathname.endsWith(".html")||(t.pathname+="/"),t.toString()}var tg=a(7031),tf=a(50868),tv=a(10437),tb=a(71677),ty=a(11688);let tw=(0,tg.A)(e=>({tooltip:{fontSize:"inherit",color:e.palette.text.primary,margin:0,padding:e.spacing(.5),backgroundColor:"transparent",boxShadow:"none"}}))(tb.Ay),tx=()=>(0,l.jsx)(tv.A,{children:(0,l.jsx)("path",{d:"M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"})}),tA=({text:e})=>{let[t,a]=(0,s.useState)(!1),[,r]=(0,ty.A)(),n=(0,s.useCallback)(()=>{r(e),a(!0)},[e,r]),o=(0,s.useCallback)(()=>{a(!1)},[a]);return(0,l.jsx)(tw,{title:"Copied to clipboard",placement:"left",open:t,onClose:o,leaveDelay:1e3,children:(0,l.jsx)(j.A,{style:{position:"absolute"},className:"md-clipboard md-icon",onClick:n,"aria-label":"Copy to clipboard",children:(0,l.jsx)(tx,{})})})},tE=({onLoading:e,onLoaded:t})=>a=>(e(),a.addEventListener(g,function e(){t(),a.removeEventListener(g,e)}),a),tk=async(e,t)=>{let a;if("string"==typeof e)a=new DOMParser().parseFromString(e,"text/html").documentElement;else if(e instanceof Element)a=e;else throw Error("dom is not a recognized type");for(let e of t)a=await e(a);return a};var tT=a(38097);let t_=(0,d.A)(e=>({button:{color:e.palette.primary.light,textDecoration:"underline"}})),tS=({message:e,handleButtonClick:t,autoHideDuration:a})=>{let r=t_(),[n,o]=(0,s.useState)(!0),i=()=>o(!1);return(0,l.jsx)(tT.A,{open:n,anchorOrigin:{vertical:"top",horizontal:"right"},autoHideDuration:a,color:"primary",onClose:i,message:e,action:(0,l.jsx)(D.A,{classes:{root:r.button},size:"small",onClick:()=>{i(),t()},children:"Redirect now"})})};var tC=a(41883),tL=a(11618),tN=a(15246);let tR=()=>{let e=(0,tL.YR)(),{shadowRoot:t}=(0,m.V)(),a=t?.querySelector('[data-md-component="content"]'),r=t?.querySelector('div[data-md-component="sidebar"][data-md-type="navigation"], div[data-md-component="navigation"]'),n=r?.querySelector('[data-techdocs-addons-location="primary sidebar"]');n||((n=document.createElement("div")).setAttribute("data-techdocs-addons-location","primary sidebar"),r?.prepend(n));let o=t?.querySelector('div[data-md-component="sidebar"][data-md-type="toc"], div[data-md-component="toc"]'),i=o?.querySelector('[data-techdocs-addons-location="secondary sidebar"]');return i||((i=document.createElement("div")).setAttribute("data-techdocs-addons-location","secondary sidebar"),o?.prepend(i)),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(tC.A,{container:n,children:e.renderComponentsByLocation(tN.e.PrimarySidebar)}),(0,l.jsx)(tC.A,{container:a,children:e.renderComponentsByLocation(tN.e.Content)}),(0,l.jsx)(tC.A,{container:i,children:e.renderComponentsByLocation(tN.e.SecondarySidebar)})]})};var tD=a(54290);let tO=(0,d.A)({search:{width:"100%","@media (min-width: 76.1875em)":{width:"calc(100% - 34.4rem)",margin:"0 auto"},"@media print":{display:"none"}}}),tM=(o=e=>{let{withSearch:t=!0,searchResultUrlMapper:a,onReady:r}=e,n=tO(),{entityMetadata:{value:o,loading:i},entityRef:d,setShadowRoot:u}=(0,m.V)(),{state:p}=J(),h=((e,t)=>{let a,r,n,o,i,c,d,m=(a=(0,s.useRef)((0,C.Zp)()),r=(0,P.gf)(V.U).getOptionalString("app.baseUrl"),(0,s.useCallback)(e=>{let t=e;if(r)try{let a,n,o,i;a=new URL(r),n=`${a.origin}${a.pathname.replace(/\/$/,"")}`,o=e.replace(n,"").replace(/^\/+/,""),i=new URL(`http://localhost/${o}`),t=`${i.pathname}${i.search}${i.hash}`}catch(e){}a.current(t)},[r])),u=(0,en.A)(),p=(0,er.A)("screen and (max-width: 76.1875em)"),h=(n=(0,P.gf)(V.U),o=(0,s.useMemo)(()=>n.getOptionalConfig("techdocs.sanitizer"),[n]),(0,s.useCallback)(async e=>{let t=o?.getOptionalStringArray("allowedIframeHosts");e5.addHook("beforeSanitizeElements",e6);let a=["link","meta"];t&&(a.push("iframe"),e5.addHook("beforeSanitizeElements",e=>{e.nodeType!==Node.ELEMENT_NODE||"IFRAME"!==e.nodeName||((e,t)=>{let a=e.getAttribute("src")||"";try{let{host:e}=new URL(a);return t.includes(e)}catch{return!1}})(e,t)||e.remove()}));e5.addHook("uponSanitizeElement",e8),e5.addHook("uponSanitizeAttribute",e9);let r=o?.getOptionalString("allowedCustomElementTagNameRegExp"),n=o?.getOptionalString("allowedCustomElementAttributeNameRegExp"),i=["callto","cid","ftp","ftps","http","https","mailto","matrix","sms","tel","xmpp",...o?.getOptionalStringArray("additionalAllowedURIProtocols")||[]].filter(Boolean),l=RegExp(`^(?:${i.join("|")}:|[^a-z]|[a-z+.-]+(?:[^a-z+.\\-:]|$))`,"i");return e5.sanitize(e.outerHTML,{ADD_TAGS:a,FORBID_TAGS:["style"],ADD_ATTR:["http-equiv","content","dominant-baseline"],WHOLE_DOCUMENT:!0,RETURN_DOM:!0,ALLOWED_URI_REGEXP:l,CUSTOM_ELEMENT_HANDLING:{tagNameCheck:r?new RegExp(r):void 0,attributeNameCheck:n?new RegExp(n):void 0}})},[o])),g=(i=(0,te.Ut)(),c=(0,en.A)(),d=(0,s.useMemo)(()=>{let e={theme:c,sidebar:i};return ti.reduce((t,a)=>t+a(e),"")},[c,i]),(0,s.useCallback)(e=>(e.getElementsByTagName("head")[0].insertAdjacentHTML("beforeend",`<style>${d}</style>`),e),[d])),v=(0,q.s)(),b=(0,P.gf)(X.s),y=(0,P.gf)(eo.Y),w=(0,P.gf)(V.U),{state:x,path:A,content:E}=J(),{"*":k=""}=(0,C.g)(),[T,_]=(0,s.useState)(null),S=f(T);(e=>{let t=(0,C.zy)(),a=(0,C.Zp)(),{"*":r=""}=(0,C.g)();(0,s.useLayoutEffect)(()=>{""===r&&e&&a(`${t.pathname}${e}`,{replace:!0})},[])})(t);let L=(0,s.useCallback)(()=>{T&&T.querySelectorAll(".md-sidebar").forEach(e=>{if(p)e.style.top="0px";else{let t=document?.querySelector(".techdocs-reader-page"),a=t?.getBoundingClientRect().top??0,r=T.getBoundingClientRect().top??0,n=T.querySelector(".md-container > .md-tabs"),o=n?.getBoundingClientRect().height??0;r<a&&(r=a);let i=Math.max(r,0)+o;e.style.top=`${i}px`;let l=T.querySelector(".md-container > .md-footer"),s=l?.getBoundingClientRect().top??window.innerHeight;e.style.height=`${s-i}px`}e.style.setProperty("opacity","1")})},[T,p]);(0,s.useEffect)(()=>(window.addEventListener("resize",L),window.addEventListener("scroll",L,!0),()=>{window.removeEventListener("resize",L),window.removeEventListener("scroll",L,!0)}),[T,L]);let N=(0,s.useCallback)(()=>{if(!T)return;let e=T.querySelector(".md-footer");e&&(e.style.width=`${T.getBoundingClientRect().width}px`)},[T]);(0,s.useEffect)(()=>(window.addEventListener("resize",N),()=>{window.removeEventListener("resize",N)}),[T,N]),(0,s.useEffect)(()=>{S||(N(),L())},[x,S,N,L]);let R=(0,s.useCallback)((t,a)=>tk(t,[h,(({techdocsStorageApi:e,entityId:t,path:a})=>async r=>{let n=await e.getApiOrigin(),o=async(r,o)=>{for(let i of r)if(i.hasAttribute(o)){let r=i.getAttribute(o);if(!r)return;let l=await e.getBaseUrl(r,t,a);if(tl(o,r,n))try{let e=await fetch(l,{credentials:"include"}),t=await e.text();i.setAttribute(o,`data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(t)))}`)}catch(e){i.setAttribute("alt",`Error: ${r}`)}else i.setAttribute(o,l)}};return await Promise.all([o(r.querySelectorAll("img"),"src"),o(r.querySelectorAll("script"),"src"),o(r.querySelectorAll("source"),"src"),o(r.querySelectorAll("link"),"href"),o(r.querySelectorAll("a[download]"),"href")]),r})({techdocsStorageApi:b,entityId:e,path:a}),e=>{var t,a;return t=Array.from(e.getElementsByTagName("a")),a="href",Array.from(t).filter(e=>e.hasAttribute(a)).forEach(e=>{let t=e.getAttribute(a);if(t){t.match(/^https?:\/\//i)&&e.setAttribute("target","_blank");try{let r=th(window.location.href);e.setAttribute(a,new URL(t,r).toString())}catch(a){e.replaceWith(e.textContent||t)}}}),e},e=>{let t=e.querySelector('.md-header label[for="__drawer"]'),a=e.querySelector("article");if(!t||!a)return e;let r=t.cloneNode();return tu((0,s.createElement)(tp.default),r),r.id="toggle-sidebar",r.title="Toggle Sidebar",r.classList.add("md-content__button"),r.style.setProperty("padding","0 0 0 5px"),r.style.setProperty("margin","0.4rem 0 0.4rem 0.4rem"),a?.prepend(r),e},e=>(e.querySelector(".md-header")?.remove(),e),e=>(e.querySelector(".md-footer .md-copyright")?.remove(),e.querySelector(".md-footer-copyright")?.remove(),e),e=>{let t=e.querySelector('[title="Edit this page"]');if(!t||!t.href)return e;let a=new URL(t.href),r=y.byUrl(a);if(r?.type!=="github"&&r?.type!=="gitlab")return e;let n=e.querySelector("article>h1")?.childNodes[0].textContent||"",o=encodeURIComponent(`Documentation Feedback: ${n}`),i=encodeURIComponent(`Page source:
${t.href}

Feedback:`),l=r?.type==="github"?(0,ts.F)(a.href,"blob"):a.href,c=tm()(l),d=`/${c.organization}/${c.name}`,m=t.cloneNode();switch(r?.type){case"gitlab":m.href=`${a.origin}${d}/issues/new?issue[title]=${o}&issue[description]=${i}`;break;case"github":m.href=`${a.origin}${d}/issues/new?title=${o}&body=${i}`;break;default:return e}return tu((0,s.createElement)(tc.default),m),m.style.paddingLeft="5px",m.title="Leave feedback for this page",m.id="git-feedback-link",t?.insertAdjacentElement("beforebegin",m),e},g]),[e,y,b,h,g]),D=(0,s.useCallback)(async t=>{var a;let r;return tk(t,[(a=e.name,r=e=>{let t=th(window.location.href),r=new URL(e,t);if(r.hostname!==window.location.hostname){let e=window.location.pathname,r=e.indexOf(a);return new URL(e.slice(0,r+a.length),t).href}return r.href},e=>{for(let t of Array.from(e.querySelectorAll("meta")))if("refresh"===t.getAttribute("http-equiv")){let a=t.getAttribute("content")?.split("url=");if(!a||a.length<2)return e;let n=r(a[1]);if(window.location.href===n)return e;let o=document.createElement("div");tu((0,l.jsx)(tS,{message:"This TechDocs page is no longer maintained. Will automatically redirect to the designated replacement.",handleButtonClick:()=>m(n),autoHideDuration:3e3}),o),document.body.appendChild(o),setTimeout(()=>{m(n)},3e3);break}return e}),e=>(setTimeout(()=>{let t=e?.querySelectorAll("li.md-nav__item--active");0!==t.length&&(t.forEach(e=>{let t=e?.querySelector("input");t?.checked||t?.click()}),t[t.length-1].scrollIntoView())},200),e),e=>{for(let t of e.querySelectorAll("pre > code")){let e=t.textContent||"",a=document.createElement("div");t?.parentElement?.prepend(a),tu((0,l.jsx)(tf.A,{theme:u,children:(0,l.jsx)(tA,{text:e})}),a)}return e},(({baseUrl:e,onClick:t})=>a=>(Array.from(a.getElementsByTagName("a")).forEach(a=>{a.addEventListener("click",r=>{let n=a.getAttribute("href");n&&n.startsWith(e)&&!a.hasAttribute("download")&&(r.preventDefault(),t(r,n))})}),a))({baseUrl:w.getOptionalString("app.baseUrl")||window.location.origin,onClick:(e,a)=>{let r=e.ctrlKey||e.metaKey,n=new URL(a),o=e.target?.innerText||a,i=a.replace(window.location.origin,"");v.captureEvent("click",o,{attributes:{to:i}}),n.hash?r?window.open(a,"_blank"):(window.location.pathname!==n.pathname?m(a):window.history.pushState(null,document.title,n.hash),t?.querySelector(`[id="${n.hash.slice(1)}"]`)?.scrollIntoView(),t?.querySelector(`[id="${n.hash.slice(1)}"]`)?.querySelector("a, button, [tabindex]")?.focus()):r?window.open(a,"_blank"):m(a)}}),tE({onLoading:()=>{},onLoaded:()=>{t.querySelector(".md-nav__title")?.removeAttribute("for")}}),tE({onLoading:()=>{Array.from(t.querySelectorAll(".md-sidebar")).forEach(e=>{e.style.setProperty("opacity","0")})},onLoaded:()=>{}}),e=>(e.querySelectorAll("label.md-nav__link[for]").forEach(t=>{t.setAttribute("tabIndex","0"),t.addEventListener("keydown",a=>{if("Enter"===a.key||" "===a.key){let r=t.getAttribute("for");if(!r)return;let n=e.querySelector(`#${r}`);n&&"checkbox"===n.type&&(n.checked=!n.checked,n.dispatchEvent(new Event("change",{bubbles:!0})),a.preventDefault(),a.stopPropagation())}})}),e)])},[u,m,v,e.name,w]);return(0,s.useEffect)(()=>{if(!E)return()=>{};let e=!0;return R(E,A).then(async t=>{t?.innerHTML&&e&&k===A&&(window.scroll({top:0}),_(await D(t)))}),()=>{e=!1}},[E,k,A,R,D]),T})(d,e.defaultPath),g=window.location.pathname,x=window.location.hash,A=f(h),[E]=(0,b.$r)([`[id="${x.slice(1)}"]`]),{NotFoundErrorPage:k}=(0,tD.n)().getComponents();(0,s.useEffect)(()=>{!A&&(x?E&&E.scrollIntoView():document?.querySelector("header")?.scrollIntoView())},[g,x,E,A]);let T=(0,s.useCallback)(e=>{u(e),r instanceof Function&&r()},[u,r]);return!1!==i||o?h?(0,l.jsx)(y.U,{children:(0,l.jsxs)(c.A,{container:!0,children:[(0,l.jsx)(c.A,{xs:12,item:!0,children:(0,l.jsx)(ea,{})}),t&&(0,l.jsx)(c.A,{className:n.search,xs:"auto",item:!0,children:(0,l.jsx)(R,{entityId:d,entityTitle:o?.metadata?.title,searchResultUrlMapper:a})}),(0,l.jsxs)(c.A,{xs:12,item:!0,children:[("CHECKING"===p||A)&&(0,l.jsx)(w.k,{}),(0,l.jsx)(v,{element:h,onAppend:T,children:(0,l.jsx)(tR,{})})]})]})}):(0,l.jsx)(y.U,{children:(0,l.jsx)(c.A,{container:!0,children:(0,l.jsx)(c.A,{xs:12,item:!0,children:(0,l.jsx)(ea,{})})})}):(0,l.jsx)(k,{})},e=>(0,l.jsx)(ee,{children:(0,l.jsx)(o,{...e})}))},84893(e,t,a){"use strict";a.d(t,{Z:()=>f});var r=a(31085),n=a(14041),o=a(58837),i=a(29365),l=a(75173),s=a(71677),c=a(37757),d=a(77125),m=a(9684),u=a(83380),p=a(11618),h=a(15246);let g=(0,o.A)(e=>({root:{gridArea:"pageSubheader",flexDirection:"column",minHeight:"auto",padding:e.spacing(3,3,0),"@media print":{display:"none"}}})),f=e=>{let t=g(),[a,o]=(0,n.useState)(null),f=(0,n.useCallback)(e=>{o(e.currentTarget)},[]),v=(0,n.useCallback)(()=>{o(null)},[]),{entityMetadata:{value:b,loading:y}}=(0,u.V)(),w=(0,p.YR)(),x=w.renderComponentsByLocation(h.e.Subheader),A=w.renderComponentsByLocation(h.e.Settings);return(x||A)&&(!1!==y||b)?(0,r.jsx)(l.A,{classes:t,...e.toolbarProps,children:(0,r.jsxs)(d.A,{display:"flex",justifyContent:"flex-end",width:"100%",flexWrap:"wrap",children:[x,A?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Ay,{title:"Settings",children:(0,r.jsx)(i.A,{"aria-controls":"tech-docs-reader-page-settings","aria-haspopup":"true",onClick:f,children:(0,r.jsx)(m.default,{})})}),(0,r.jsx)(c.A,{id:"tech-docs-reader-page-settings",getContentAnchorEl:null,anchorEl:a,anchorOrigin:{vertical:"bottom",horizontal:"right"},open:!!a,onClose:v,keepMounted:!0,children:(0,r.jsx)("div",{children:A})})]}):null]})}):null}},41472(e,t,a){"use strict";a.d(t,{TechDocsSearchResultListItem:()=>m});var r=a(31085),n=a(46423),o=a(5951),i=a(58837),l=a(72501),s=a(75202),c=a(51470);let d=(0,i.A)({flexContainer:{flexWrap:"wrap"},itemText:{width:"100%",marginBottom:"1rem"}}),m=e=>{let{result:t,highlight:a,lineClamp:i=5,asListItem:m=!0,asLink:u=!0,title:p,icon:h}=e,g=d(),f=({children:e})=>u?(0,r.jsx)(s.N_,{noTrack:!0,to:t.location,children:e}):(0,r.jsx)(r.Fragment,{children:e});return(0,r.jsx)(({children:e})=>m?(0,r.jsxs)(r.Fragment,{children:[h&&(0,r.jsx)(n.A,{children:"function"==typeof h?h(t):h}),(0,r.jsx)("div",{className:g.flexContainer,children:e})]}):(0,r.jsx)(r.Fragment,{children:e}),{children:(0,r.jsx)(()=>{let e=a?.fields.title?(0,r.jsx)(c.e,{text:a.fields.title,preTag:a.preTag,postTag:a.postTag}):t.title,n=a?.fields.entityTitle?(0,r.jsx)(c.e,{text:a.fields.entityTitle,preTag:a.preTag,postTag:a.postTag}):t.entityTitle,s=a?.fields.name?(0,r.jsx)(c.e,{text:a.fields.name,preTag:a.preTag,postTag:a.postTag}):t.name;return t?(0,r.jsx)(o.A,{className:g.itemText,primaryTypographyProps:{variant:"h6"},primary:(0,r.jsx)(f,{children:p||(0,r.jsxs)(r.Fragment,{children:[e," | ",n??s," docs"]})}),secondary:(0,r.jsx)(l.A,{component:"span",style:{display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:i,overflow:"hidden"},color:"textSecondary",variant:"body2",children:a?.fields.text?(0,r.jsx)(c.e,{text:a.fields.text,preTag:a.preTag,postTag:a.postTag}):t.text})}):null},{})})}},13660(e,t,a){"use strict";var r=a(4293),n=a(78920);t.default=void 0;var o=n(a(14041));t.default=(0,r(a(74044)).default)(o.createElement("path",{d:"M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"}),"Code")},90292(e,t,a){"use strict";var r=a(4293),n=a(78920);t.default=void 0;var o=n(a(14041));t.default=(0,r(a(74044)).default)(o.createElement("path",{d:"M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H5.17l-.59.59-.58.58V4h16v12zm-9-4h2v2h-2zm0-6h2v4h-2z"}),"FeedbackOutlined")},56005(e,t,a){var r=a(95243),n=a(5485);e.exports=function(e){return n(r(e).toLowerCase())}},91042(e,t,a){"use strict";a.d(t,{Y:()=>o});var r=a(14041),n=a(16261);function o(e,t){let[a,o]=(0,r.useState)({status:"not-executed",error:void 0,result:t}),i=(0,r.useRef)(),l=(0,r.useRef)(),s=(0,n.J)({execute(...t){l.current=t;let a=e(...t);return i.current=a,o(e=>({...e,status:"loading"})),a.then(e=>{a===i.current&&o(t=>({...t,status:"success",error:void 0,result:e}))},e=>{a===i.current&&o(t=>({...t,status:"error",error:e}))}),a},reset(){o({status:"not-executed",error:void 0,result:t}),i.current=void 0,l.current=void 0}});return[a,(0,r.useMemo)(()=>({reset(){s.current.reset()},execute:(...e)=>s.current.execute(...e)}),[]),{promise:i.current,lastArgs:l.current}]}}}]);
//# sourceMappingURL=3815.669f2ad1.chunk.js.map