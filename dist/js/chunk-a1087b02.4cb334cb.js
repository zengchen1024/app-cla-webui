(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a1087b02"],{"057f":function(t,e,n){var r=n("fc6a"),i=n("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(r(t))}},1130:function(t,e,n){},"42de":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-select",{attrs:{placeholder:"请选择",size:t.Size,value:t.value},on:{change:t.checked},model:{value:t.value,callback:function(e){t.value=e},expression:"value"}},t._l(t.Options,(function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)},i=[],a={name:"Select",props:["Options","Value","Size"],computed:{},data:function(){return{value:this.Value}},methods:{checked:function(t){console.log(t),this.$emit("change",t)}}},o=a,c=n("2877"),s=Object(c["a"])(o,r,i,!1,null,"6d22c5a0",null);e["a"]=s.exports},"4de4":function(t,e,n){"use strict";var r=n("23e7"),i=n("b727").filter,a=n("1dde"),o=n("ae40"),c=a("filter"),s=o("filter");r({target:"Array",proto:!0,forced:!c||!s},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5530:function(t,e,n){"use strict";n.d(e,"a",(function(){return a}));n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b");var r=n("ade3");function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(r["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}},"615a":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r=function(){return window.innerHeight}},6543:function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticClass:"headerBox",staticStyle:{"border-bottom":"2px solid #F2F2F2"}},[n("el-col",{staticClass:"header",attrs:{offset:3,span:18}},[n("div",{staticClass:"box"},[n("svg-icon",{staticClass:"icon",attrs:{"icon-class":"icon"}})],1),n("div",[n("div",{staticClass:"my_select_box"},[n("el-row",{staticClass:"my_select",on:{click:function(e){return t.clickSelect()}}},[n("el-col",{staticClass:"select_content",attrs:{span:20}},[t._v(" "+t._s(t.language)+" ")]),n("el-col",{staticClass:"select_content",attrs:{span:4}},[n("svg-icon",{attrs:{"icon-class":"arrow"}})],1)],1),n("div",{attrs:{id:"my_option"}},t._l(t.options,(function(e){return n("div",{key:e.value,attrs:{label:e.label,value:e.value}},[n("div",{staticStyle:{width:"100%"}},[n("div",[n("div",{staticClass:"mark"})]),n("div",[t._v(" "+t._s(e.label)+" ")])])])})),0)],1)])])],1)},i=[],a={name:"NewHeader",data:function(){return{language:"English",value:0,options:[{value:0,label:"English"},{value:1,label:"中文"},{value:2,label:"日语"}]}},methods:{clickSelect:function(){console.log("clickSelect"),document.getElementById("my_option").style.visibility="hidden"}}},o=a,c=(n("d4f8"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"195b2cb2",null);e["a"]=s.exports},"746f":function(t,e,n){var r=n("428f"),i=n("5135"),a=n("e538"),o=n("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},"74dc":function(t,e,n){"use strict";var r=n("fdb5"),i=n.n(r);i.a},"84ef":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",{staticStyle:{"border-top":"2px solid #F2F2F2"},attrs:{align:"middle"}},[n("el-col",{staticClass:"footer",attrs:{offset:3,span:18}},[n("div",{staticClass:"box"},[n("span",{staticClass:"join_us"},[t._v("JOIN US")])]),n("div",{staticClass:"box"},[n("span",{staticClass:"copyright"},[t._v("©2020 Draven.Designed by LA-Studio")])])])],1)},i=[],a={name:"NewFooter"},o=a,c=(n("92a0"),n("2877")),s=Object(c["a"])(o,r,i,!1,null,"476db065",null);e["a"]=s.exports},9041:function(t,e,n){},"92a0":function(t,e,n){"use strict";var r=n("9041"),i=n.n(r);i.a},a4d3:function(t,e,n){"use strict";var r=n("23e7"),i=n("da84"),a=n("d066"),o=n("c430"),c=n("83ab"),s=n("4930"),l=n("fdbf"),u=n("d039"),f=n("5135"),d=n("e8b5"),b=n("861d"),v=n("825a"),p=n("7b0b"),h=n("fc6a"),g=n("c04e"),y=n("5c6c"),m=n("7c73"),w=n("df75"),O=n("241c"),S=n("057f"),j=n("7418"),_=n("06cf"),C=n("9bf2"),P=n("d1e7"),E=n("9112"),k=n("6eeb"),x=n("5692"),D=n("f772"),N=n("d012"),F=n("90e3"),H=n("b622"),I=n("e538"),A=n("746f"),B=n("d44e"),$=n("69f3"),J=n("b727").forEach,L=D("hidden"),z="Symbol",T="prototype",V=H("toPrimitive"),M=$.set,Q=$.getterFor(z),U=Object[T],W=i.Symbol,Y=a("JSON","stringify"),q=_.f,G=C.f,K=S.f,R=P.f,X=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),nt=x("wks"),rt=i.QObject,it=!rt||!rt[T]||!rt[T].findChild,at=c&&u((function(){return 7!=m(G({},"a",{get:function(){return G(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=q(U,e);r&&delete U[e],G(t,e,n),r&&t!==U&&G(U,e,r)}:G,ot=function(t,e){var n=X[t]=m(W[T]);return M(n,{type:z,tag:t,description:e}),c||(n.description=e),n},ct=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof W},st=function(t,e,n){t===U&&st(Z,e,n),v(t);var r=g(e,!0);return v(n),f(X,r)?(n.enumerable?(f(t,L)&&t[L][r]&&(t[L][r]=!1),n=m(n,{enumerable:y(0,!1)})):(f(t,L)||G(t,L,y(1,{})),t[L][r]=!0),at(t,r,n)):G(t,r,n)},lt=function(t,e){v(t);var n=h(e),r=w(n).concat(vt(n));return J(r,(function(e){c&&!ft.call(n,e)||st(t,e,n[e])})),t},ut=function(t,e){return void 0===e?m(t):lt(m(t),e)},ft=function(t){var e=g(t,!0),n=R.call(this,e);return!(this===U&&f(X,e)&&!f(Z,e))&&(!(n||!f(this,e)||!f(X,e)||f(this,L)&&this[L][e])||n)},dt=function(t,e){var n=h(t),r=g(e,!0);if(n!==U||!f(X,r)||f(Z,r)){var i=q(n,r);return!i||!f(X,r)||f(n,L)&&n[L][r]||(i.enumerable=!0),i}},bt=function(t){var e=K(h(t)),n=[];return J(e,(function(t){f(X,t)||f(N,t)||n.push(t)})),n},vt=function(t){var e=t===U,n=K(e?Z:h(t)),r=[];return J(n,(function(t){!f(X,t)||e&&!f(U,t)||r.push(X[t])})),r};if(s||(W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=F(t),n=function(t){this===U&&n.call(Z,t),f(this,L)&&f(this[L],e)&&(this[L][e]=!1),at(this,e,y(1,t))};return c&&it&&at(U,e,{configurable:!0,set:n}),ot(e,t)},k(W[T],"toString",(function(){return Q(this).tag})),k(W,"withoutSetter",(function(t){return ot(F(t),t)})),P.f=ft,C.f=st,_.f=dt,O.f=S.f=bt,j.f=vt,I.f=function(t){return ot(H(t),t)},c&&(G(W[T],"description",{configurable:!0,get:function(){return Q(this).description}}),o||k(U,"propertyIsEnumerable",ft,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:W}),J(w(nt),(function(t){A(t)})),r({target:z,stat:!0,forced:!s},{for:function(t){var e=String(t);if(f(tt,e))return tt[e];var n=W(e);return tt[e]=n,et[n]=e,n},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(f(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!s,sham:!c},{create:ut,defineProperty:st,defineProperties:lt,getOwnPropertyDescriptor:dt}),r({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:bt,getOwnPropertySymbols:vt}),r({target:"Object",stat:!0,forced:u((function(){j.f(1)}))},{getOwnPropertySymbols:function(t){return j.f(p(t))}}),Y){var pt=!s||u((function(){var t=W();return"[null]"!=Y([t])||"{}"!=Y({a:t})||"{}"!=Y(Object(t))}));r({target:"JSON",stat:!0,forced:pt},{stringify:function(t,e,n){var r,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(r=e,(b(e)||void 0!==t)&&!ct(t))return d(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ct(e))return e}),i[1]=e,Y.apply(null,i)}})}W[T][V]||E(W[T],V,W[T].valueOf),B(W,z),N[L]=!0},ade3:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))},b64b:function(t,e,n){var r=n("23e7"),i=n("7b0b"),a=n("df75"),o=n("d039"),c=o((function(){a(1)}));r({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},d4f8:function(t,e,n){"use strict";var r=n("1130"),i=n.n(r);i.a},d504:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-row",[n("el-col",{staticClass:"index",style:t.transparentDiv,attrs:{id:"transparentDiv"}},[n("NewHeader"),n("el-row",{attrs:{id:"section"}},[n("el-col",{staticStyle:{height:"100%"},attrs:{offset:3,span:18}},[n("el-row",{staticStyle:{height:"100%"}},[n("el-col",{staticClass:"title",attrs:{span:12}},[n("div",[n("div",{staticClass:"name"},[n("div",[n("span",[t._v("CLA")])]),n("span",[t._v("SYSTEM")])]),n("p",{staticClass:"description"},[t._v("Easily handle Contributor License Agreements (CLAs)")])])]),n("el-col",{staticStyle:{height:"100%"},attrs:{span:12}},[n("router-view")],1)],1)],1)],1),n("NewFooter")],1)],1)},i=[],a=n("5530"),o=n("6543"),c=n("84ef"),s=(n("221d"),n("615a")),l=n("42de"),u=n("2f62");window.onresize=function(){console.log(s["a"]()),s["a"]()>document.getElementById("transparentDiv").offsetHeight&&(document.getElementById("transparentDiv").style.height=s["a"]()+"px")};var f={name:"Login",components:{Select:l["a"],NewHeader:o["a"],NewFooter:c["a"]},data:function(){return{transparentDiv:{height:""}}},methods:Object(a["a"])(Object(a["a"])({},Object(u["b"])(["setPlatformAct"])),{},{setClientHeight:function(){var t=this;this.$nextTick((function(){console.log(s["a"](),document.getElementById("transparentDiv").offsetHeight),s["a"]()>document.getElementById("transparentDiv").offsetHeight&&(t.transparentDiv.height=s["a"]()+"px")}))}}),created:function(){},mounted:function(){this.setClientHeight()}},d=f,b=(n("74dc"),n("2877")),v=Object(b["a"])(d,r,i,!1,null,"00c9dea9",null);e["default"]=v.exports},dbb4:function(t,e,n){var r=n("23e7"),i=n("83ab"),a=n("56ef"),o=n("fc6a"),c=n("06cf"),s=n("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,n,r=o(t),i=c.f,l=a(r),u={},f=0;while(l.length>f)n=i(r,e=l[f++]),void 0!==n&&s(u,e,n);return u}})},e439:function(t,e,n){var r=n("23e7"),i=n("d039"),a=n("fc6a"),o=n("06cf").f,c=n("83ab"),s=i((function(){o(1)})),l=!c||s;r({target:"Object",stat:!0,forced:l,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,n){var r=n("b622");e.f=r},fdb5:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a1087b02.4cb334cb.js.map