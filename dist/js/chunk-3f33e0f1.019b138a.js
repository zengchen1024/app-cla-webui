(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f33e0f1"],{"6eed":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"tableStyle"},[n("el-table",{staticStyle:{width:"100%"},attrs:{data:t.tableData,align:"center"}},[n("el-table-column",{attrs:{prop:"repository",label:"Repository",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("svg-icon",{attrs:{"icon-class":"repository"}}),n("span",{staticClass:"pointer hoverUnderline",staticStyle:{"margin-left":"10px"},on:{click:function(e){return t.newWindow()}}},[t._v(t._s(e.row.repository))])]}}])}),n("el-table-column",{attrs:{prop:"cla",label:"CLA",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"pointer hoverUnderline",on:{click:function(e){return t.checkCla()}}},[t._v(t._s(e.row.cla))])]}}])}),n("el-table-column",{attrs:{prop:"gist",label:"Gist"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("svg-icon",{staticStyle:{cursor:"pointer"},attrs:{"icon-class":"github"}})]}}])}),n("el-table-column",{attrs:{prop:"sharedGist",label:"Shared Gist"}}),n("el-table-column",{attrs:{prop:"contributors",label:"Contributors",align:"center"}}),n("el-table-column",{attrs:{prop:"status",align:"center",label:"Status"},scopedSlots:t._u([{key:"default",fn:function(t){return[n("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"link_active"}})]}}])}),n("el-table-column",{attrs:{align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"Edit",placement:"bottom"}},[n("svg-icon",{staticClass:"pointer",staticStyle:{display:"inline-block","margin-right":".5rem"},attrs:{"icon-class":"edit"},on:{click:function(n){return t.editHandleClick(e)}}})],1),n("el-popover",{attrs:{width:"80",placement:"right"}},[n("div",{staticClass:"menuBT"},[n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Import")]),n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("ReCheck PRs")]),n("el-button",{attrs:{type:"primary",size:"medium"}},[t._v("Get Badge")]),n("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(e){t.unLinkDialogVisible=!0}}},[t._v("Unlink ")])],1),n("el-tooltip",{attrs:{slot:"reference",effect:"dark",content:"More..",placement:"bottom"},slot:"reference"},[n("svg-icon",{staticClass:"pointer",attrs:{"icon-class":"menu"}})],1)],1)]}}])})],1)],1),n("div",{staticClass:"paginationClass"},[n("el-pagination",{attrs:{background:"","page-size":5,"pager-count":5,"hide-on-single-page":!0,"current-page":t.currentPage,layout:"prev, pager, next",total:t.tableTotal},on:{"current-change":t.changePage}})],1)])},a=[],i=(n("99af"),{name:"linkedRepo",data:function(){return{editDialogVisible:!1,unLinkDialogVisible:!1,tableTotal:0,currentPage:1,tableData:[{repository:"ooo",cla:"test",sharedGist:"Yes",contributors:"0"},{repository:"ooo",cla:"test",sharedGist:"No",contributors:"0"}]}},methods:{editHandleClick:function(t){console.log(t),this.editDialogVisible=!0},checkCla:function(){console.log("checkCla"),this.$router.push("/checkCla")},newWindow:function(){window.open("https://github.com/ouchengle")},unLinkRepository:function(){var t=this;this.unLinkDialogVisible=!0;var e={repositoryValue:this.repositoryValue,claValue:this.claValue};this.$axios({url:url.unLinkRepository,methods:"post",data:e,headers:{"Access-Token":this.access_token,"Refresh-Token":this.refresh_token,User:"".concat(this.platform,"/").concat(this.user.userName)}}).then((function(e){console.log(e),200===e.data.code&&(t.repositoryOptions=e.data.data,t.$message.success("解绑成功"),t.unLinkDialogVisible=!1)})).catch((function(t){console.log(t)}))},changePage:function(t){console.log(t)}}}),s=i,r=(n("f004"),n("2877")),l=Object(r["a"])(s,o,a,!1,null,"ba84f3ae",null);e["default"]=l.exports},8418:function(t,e,n){"use strict";var o=n("c04e"),a=n("9bf2"),i=n("5c6c");t.exports=function(t,e,n){var s=o(e);s in t?a.f(t,s,i(0,n)):t[s]=n}},"99af":function(t,e,n){"use strict";var o=n("23e7"),a=n("d039"),i=n("e8b5"),s=n("861d"),r=n("7b0b"),l=n("50c4"),c=n("8418"),u=n("65f0"),p=n("1dde"),d=n("b622"),f=n("2d00"),h=d("isConcatSpreadable"),g=9007199254740991,b="Maximum allowed index exceeded",m=f>=51||!a((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),k=p("concat"),y=function(t){if(!s(t))return!1;var e=t[h];return void 0!==e?!!e:i(t)},v=!m||!k;o({target:"Array",proto:!0,forced:v},{concat:function(t){var e,n,o,a,i,s=r(this),p=u(s,0),d=0;for(e=-1,o=arguments.length;e<o;e++)if(i=-1===e?s:arguments[e],y(i)){if(a=l(i.length),d+a>g)throw TypeError(b);for(n=0;n<a;n++,d++)n in i&&c(p,d,i[n])}else{if(d>=g)throw TypeError(b);c(p,d++,i)}return p.length=d,p}})},af0a:function(t,e,n){},f004:function(t,e,n){"use strict";var o=n("af0a"),a=n.n(o);a.a}}]);
//# sourceMappingURL=chunk-3f33e0f1.019b138a.js.map