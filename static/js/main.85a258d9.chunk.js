(this.webpackJsonpanime_search=this.webpackJsonpanime_search||[]).push([[0],{57:function(e,a,t){e.exports=t(69)},69:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(9),c=t.n(i),o=t(19),l=t(107),s=t(116),m=t(117),d=t(106),u=t(118),h=t(48),g=t.n(h),E=t(37);function b(e){return function(a,t){t().searchTerm!==e&&(a({type:"New_Search_Term",term:e}),fetch("https://api.jikan.moe/v3/search/anime?q="+e+"&limit=16").then((function(e){return e.json()})).then((function(e){a({type:"Fetch_Data_Success",data:e.results,lastPage:e.last_page,currentPageNumber:1})})).catch((function(e){a({type:"Fetch_Data_Error"})})))}}var p=Object(o.b)()((function(e){var a=e.dispatch,t="",r=function(e){(13===e.which||void 0===e.which)&&a(b(t))};return n.a.createElement("div",{style:{width:"100%",backgroundColor:"lightBlue",zIndex:2,position:"fixed",top:0,left:0,overflow:"hidden"}},n.a.createElement(u.a,{style:{left:"50%",transform:"translate(-50%,0)",margin:10},variant:"outlined"},n.a.createElement(m.a,{htmlFor:"standard-adornment-search"},"Search Anime"),n.a.createElement(s.a,{id:"standard-adornment-search",type:"text",onKeyPress:r,onChange:function(e){t=e.target.value},endAdornment:n.a.createElement(d.a,{position:"end"},n.a.createElement(l.a,{"aria-label":"search",onClick:r},n.a.createElement(g.a,null))),labelWidth:100})))})),f=t(112),v=t(50),y=t(119),_=t(108),j=t(110),w=t(109),P=t(52),L=t(115),N=t(111),O=t(71),D=t(113);var k=function(e){var a=Object(r.useState)(!1),t=Object(v.a)(a,2),i=t[0],c=t[1];return n.a.createElement("div",null,n.a.createElement(y.a,{style:{width:300}},n.a.createElement(_.a,{onClick:function(e){c(!0)}},n.a.createElement(w.a,{style:{height:400},image:e.imageURL,title:e.title}),n.a.createElement(j.a,null,n.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title)))),n.a.createElement(L.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",style:{maxWidth:"70%",display:"flex",alignItems:"center",justifyContent:"center",margin:"auto"},open:i,onClose:function(){c(!1)},closeAfterTransition:!0,BackdropComponent:N.a,BackdropProps:{timeout:500}},n.a.createElement(O.a,{in:i},n.a.createElement("div",{style:{backgroundColor:"white",border:"1px solid #000",boxShadow:5,padding:1}},n.a.createElement(f.a,{container:!0,direction:"row",justify:"center",alignItems:"center",spacing:1},n.a.createElement(f.a,{item:!0,xs:6},n.a.createElement("img",{src:e.imageURL,style:{width:"100%"},alt:"Not Found"})),n.a.createElement(f.a,{item:!0,xs:6},n.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.title),n.a.createElement(P.a,{variant:"body2",component:"div"},e.description,n.a.createElement("br",null),n.a.createElement(D.a,{target:"_blank",href:e.detailsURL},"More Details..."))))))))},T=t(114);var x=Object(o.b)((function(e){var a=e.isLoading,t=e.data,r=e.currentPageNumber,n=e.lastPageNumber,i=e.isError,c=e.searchTerm,o=!e.isLoadingAdditionalData;return r===n&&(o=!1),{isLoading:a,isError:i,showMoreEnable:o,data:t,searchTerm:c}}))((function(e){var a=function(e){return n.a.createElement("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)"}},n.a.createElement(P.a,{gutterBottom:!0,variant:"h5",component:"h2"},e))};return n.a.createElement("div",{style:{marginTop:"90px"}},""===e.searchTerm?a("Enter a Search Term"):"",""!==e.searchTerm&&e.isLoading?a("Data Loading...."):"",""!==e.searchTerm&&e.isError?a("Error loading data...."):"",e.isLoading||e.isError||""===e.searchTerm?"":n.a.createElement("div",null,0===e.data.length?a("No results found. Search Again."):"",n.a.createElement(f.a,{container:!0,style:{flexGrow:1},spacing:1},n.a.createElement(f.a,{item:!0,xs:12},n.a.createElement(f.a,{container:!0,justify:"center",spacing:1},e.data.map((function(e,a){return n.a.createElement(f.a,{key:a,item:!0},n.a.createElement(k,{title:e.title,imageURL:e.image_url,detailsURL:e.url,description:e.synopsis}))}))))),e.showMoreEnable?n.a.createElement(T.a,{color:"secondary",onClick:function(a){e.dispatch((function(e,a){var t=a();t.currentPageNumber!==t.lastPageNumber&&(e({type:"Fetch_Additional_Data"}),fetch("https://api.jikan.moe/v3/search/anime?q="+t.searchTerm+"&limit=16&page="+(t.currentPageNumber+1)).then((function(e){return e.json()})).then((function(a){e({type:"Fetch_Data_Success",data:[].concat(Object(E.a)(t.data),Object(E.a)(a.results)),lastPage:a.last_page,currentPageNumber:t.currentPageNumber+1})})).catch((function(a){e({type:"Fetch_Data_Success",data:Object(E.a)(t.data),lastPage:t.lastPageNumber,currentPageNumber:t.currentPageNumber})})))}))},style:{margin:"10px",left:"50%",transform:"translate(-50%,0)"}},"Load More..."):""))}));var A=function(){return n.a.createElement("div",null,n.a.createElement(p,null),n.a.createElement(x,null))},S=t(46),F=t(14),C={searchTerm:"",data:[],currentPageNumber:1,lastPageNumber:1,isLoading:!0,isError:!1,isLoadingAdditionalData:!1};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"New_Search_Term":return Object(F.a)(Object(F.a)({},e),{},{searchTerm:a.term,isError:!1,isLoading:!0,isLoadingAdditionalData:!1});case"Fetch_Data_Success":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,isError:!1,data:a.data,lastPageNumber:a.lastPage,isLoadingAdditionalData:!1,currentPageNumber:a.currentPageNumber});case"Fetch_Data_Error":return Object(F.a)(Object(F.a)({},e),{},{isLoading:!1,isError:!0,data:[],isLoadingAdditionalData:!1});case"Fetch_Additional_Data":return Object(F.a)(Object(F.a)({},e),{},{isLoadingAdditionalData:!0});default:return e}},R=t(49),U=Object(S.c)(B,Object(S.a)(R.a));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(o.a,{store:U},n.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.85a258d9.chunk.js.map