(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03f2e7fe"],{"0418":function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"header"},[s("el-col",{attrs:{span:8}},[s("div",{staticStyle:{display:"flex"}},[s("img",{staticClass:"pointer",staticStyle:{width:"2rem"},attrs:{src:this.$store.state.user.userImg,alt:""},on:{click:function(t){return e.newWindow()}}}),s("div",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"center","margin-left":".5rem"}},[s("span",[e._v("Hi, "),s("span",{staticClass:"pointer",staticStyle:{"font-weight":"bold"}},[e._v(e._s(this.$store.state.user.userName)+"!")])])])])]),s("el-col",{attrs:{span:8}},[s("div",[s("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)]),s("el-col",{attrs:{span:8}},[s("div",[s("el-tooltip",{attrs:{effect:"dark",content:"Sign out",placement:"left"}},[s("svg-icon",{staticClass:"pointer",attrs:{id:"svg_loginOut","icon-class":"loginOut"},on:{click:function(t){return e.loginOut()}}})],1)],1)])],1)},o=[],i={name:"Header",computed:{},data:function(){return{}},created:function(){},methods:{toHome:function(){this.$router.push("/home")},loginOut:function(){this.$router.push("/")},newWindow:function(){window.open("https://github.com/ouchengle")}}},r=i,n=(s("5d19"),s("2877")),l=Object(n["a"])(r,a,o,!1,null,"1d41f76a",null);t["a"]=l.exports},"08c1":function(e,t,s){"use strict";var a=s("d3b8"),o=s.n(a);o.a},"109f":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{style:e.checkCLAClass,attrs:{id:"checkCLA"}},[s("div",{staticClass:"header"},[s("el-col",{attrs:{offset:8,span:8}},[s("div",[s("svg-icon",{staticClass:"pointer",attrs:{id:"svg_logo","icon-class":"logo_b"},on:{click:function(t){return e.toHome()}}})],1)])],1),s("div",{attrs:{id:"section"}},[e.isSendCode?e.isVerify?s("div",{staticClass:"content"},[s("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[s("p",{staticStyle:{"text-align":"center"}},[e._v(" "+e._s(e.passContent)+" ")])])],1):s("div",{staticClass:"content "},[s("el-col",{staticClass:"verifyClass",attrs:{offset:6,span:12}},[s("p",[e._v("请输入6位数验证码完成验证")]),s("el-row",[s("el-col",{staticStyle:{"margin-right":"2rem"},attrs:{span:6}},[s("el-input",{attrs:{size:"medium"},model:{value:e.verifyCode,callback:function(t){e.verifyCode=t},expression:"verifyCode"}})],1),s("el-col",{attrs:{span:6}},[s("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){return e.verify()}}},[e._v("确定")])],1)],1)],1)],1):s("div",{staticClass:"content"},[s("el-col",{attrs:{offset:6,span:12}},[s("p",{staticClass:"contentTitle"},[e._v("Please sign the CLA for "),s("span",[e._v(e._s(e.repo))])]),s("el-row",[s("span",{staticClass:"size_s"},[e._v("Version: 2020-06-17")]),s("el-select",{staticStyle:{width:"6rem","margin-left":"2rem"},attrs:{size:"small",value:""},on:{change:e.changeLanguage},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}},e._l(e.languageOptions,(function(e){return s("el-option",{key:e.value,attrs:{label:e.label,value:e.value}})})),1)],1),s("div",{staticClass:"marginTop1rem",staticStyle:{"white-space":"pre-wrap"},attrs:{id:"claBox"}}),s("el-row",{staticClass:"marginTop1rem"},[s("el-col",{staticClass:"borderClass",attrs:{span:8}},[s("el-radio",{attrs:{label:"0"},on:{change:function(t){return e.roleChange()}},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[e._v(e._s(e.desc.personalContributor))])],1),s("el-col",{staticClass:"borderClass",attrs:{span:8}},[s("el-radio",{attrs:{label:"1"},on:{change:function(t){return e.roleChange()}},model:{value:e.role,callback:function(t){e.role=t},expression:"role"}},[e._v(e._s(e.desc.comContributor))])],1)],1),s("el-row",{staticClass:"marginTop1rem"},[s("el-col",{attrs:{span:16}},[s("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"30%"}},[e._l(e.metadataArr,(function(t,a){return s("el-form-item",{attrs:{label:t.title,required:t.required,prop:t.githubKey}},[s("el-input",{attrs:{size:"small"},model:{value:e.ruleForm[t.githubKey],callback:function(s){e.$set(e.ruleForm,t.githubKey,s)},expression:"ruleForm[item.githubKey]"}})],1)})),s("p",{staticClass:"borderClass",staticStyle:{"font-size":".9rem"}},[e._v(e._s(e.desc.metadataDesc))]),s("div",{staticClass:"marginTop1rem"},[s("el-checkbox",{model:{value:e.isRead,callback:function(t){e.isRead=t},expression:"isRead"}},[e._v(e._s(e.metadata["category"].title))])],1),s("el-form-item",{staticClass:"marginTop1rem",attrs:{"label-width":"0"}},[s("el-button",{attrs:{disabled:!e.isRead,type:"primary"},on:{click:function(t){return e.submitForm("ruleForm")}}},[e._v(e._s(e.desc.sign)+" ")]),s("el-button",{on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v(e._s(e.desc.reset))])],1)],2)],1)],1)],1)],1)]),s("Footer"),s("el-dialog",{attrs:{title:"",top:"5vh",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[s("div",{staticStyle:{"margin-bottom":"2rem"}},[e._v(" 请在48小时内输入邮箱"+e._s(e.ruleForm.email)+"中的验证码进行验证 ")]),s("div",[s("el-button",{attrs:{type:"primary",size:"medium"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确定")])],1)])],1)},o=[],i=(s("99af"),s("4160"),s("b0c0"),s("159b"),s("0418")),r=s("fd2d"),n=s("615a"),l=s("221d"),c={name:"CheckCLA",components:{Header:i["a"],Footer:r["a"]},data:function(){var e=function(e,t,s){var a=t;console.log(a);var o=/^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;o.test(a)?s():s(new Error("邮箱格式有误"))},t=function(e,t,s){if(t){var a=/^1[3456789]\d{9}$/;a.test(t)?s():s(new Error("电话号码有误")),s()}else s()},s=function(e,t,s){t||s(new Error("请输入地址")),s()},a=function(e,t,s){t||s(new Error("请输入日期")),s()};return{desc:"",enDesc:{personalContributor:"Individual Contributor",comContributor:"Legal Entity Contributor",metadataDesc:"* require field. Please make sure the E-Mail is related with your gitee account.",sign:"SIGN",reset:"RESET"},cnDesc:{personalContributor:"个人贡献者",comContributor:"企业贡献者",metadataDesc:"*为必填项，请确保你的邮箱与gitee账号绑定",sign:"签署",reset:"重置"},passContent:"",isVerify:!1,isSendCode:!1,verifyCode:"",platform:this.$store.state.platform,dialogVisible:!1,repositoryOptions:[],repo:"",role:"0",ruleForm:{name:"",email:"",tel:"",date1:""},rules:{name:[{required:!0,message:"请输入姓名",trigger:"blur"},{min:2,max:10,message:"长度在 2 到 10 个字符",trigger:"blur"}],email:[{required:!0,message:"请输入邮箱",trigger:"blur"},{validator:e,trigger:"blur"}],phone:[{validator:t,trigger:"blur"}],address:[{validator:s,trigger:"blur"}],date:[{validator:a,trigger:"blur"}]},isRead:!1,value:0,languageOptions:[{value:0,label:"english"},{value:1,label:"chinese"}],claText:"          通过签署贡献协议（“本协议”），签署的“贡献者”同意接受“本协议”并受“本协议”约束。“本协议”适用于“贡献者”提交给openEuler社区 （“社区”）的全部项目（后称“项目”）的“贡献”，无论“贡献”是在签署日期之前，签署时还是之后提供。\n\n       “贡献” 是指受版权法保护的，由“贡献者”有意“提交”以包含在“项目”所分发软件中任何作品。“提交”是指以电子，口头或书面交流的任何形式送给“社区”管理方或其代表，包括但不限于“社区”管理方为管理的为讨论和改进项目所提供的电子邮件列表上的交流，源代码控制系统以及由“社区”管理方或其代表管理的问题跟踪系统，但不包括由“我”明确标记或以书面形式指定为“非贡献”的交流。\n\n       “贡献者”或“我”是指下面签名栏中标明的个人或法人实体。对于法人实体，做出“贡献”的实体以及由该实体控制、受其控制或受其共同控制的所有其他实体均被视为“贡献者”。就本定义而言，“控制”是指有受控方或共同受控方至少50%直接或间接的投票权，资金或其他有价证券。\n\n       “贡献者”授予“社区”管理方和由“项目”所分发的软件的每个接收者一个永久性的、全球性的、免费的、非独占的、不可撤销的、有分许可权的版权许可，供其复制、使用、修改、分发其“贡献”，不论修改与否。",metaData:[{label:"姓名",prop:"name",required:!0},{label:"邮箱",prop:"email",required:!0},{label:"电话",prop:"tel",required:!1}],metadata:{name:{title:"Name",type:"string",githubKey:"name",required:!0},email:{title:"E-Mail",type:"string",githubKey:"email",required:!0},phone:{title:"Telephone",type:"string",required:!1},faxnumber:{title:"Fax",type:"string",required:!1},address:{title:"Address",type:"string",required:!0},date:{title:"Date",type:"string",required:!0},category:{title:"I have read the Privacy Policy and hereby consent to the processing of my data by openLooKeng in Hong Kong",type:"boolean",required:!0}},metadataArr:[],checkCLAClass:{height:""}}},methods:{changeLanguage:function(){var e=this;this.changeDesc(),this.$axios({url:"/api"+l["f"],method:"post",data:{language:this.languageOptions[this.value].label},headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),e.claText=t.data.cla,e.metaData=t.data.metadata})).catch((function(e){console.log(e)}))},changeDesc:function(){0===this.value?this.desc=this.enDesc:1===this.value&&(this.desc=this.cnDesc)},getPersonalMetaAndCla:function(){var e=this;this.changeDesc(),this.$axios({url:"/api"+l["f"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),e.claText=t.data.cla,e.metaData=t.data.metadata})).catch((function(e){console.log(e)}))},getCompanyMetaAndCla:function(){var e=this;this.$axios({url:"/api"+l["f"],headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),200===t.status&&(e.claText=t.data.cla,e.metaData=t.data.metadata)})).catch((function(e){console.log(e)}))},roleChange:function(){switch(console.log(this.role),this.role){case"0":this.getPersonalMetaAndCla();break;case"1":this.getCompanyMetaAndCla();break}},toHome:function(){this.$router.push("/home")},verify:function(){var e=this;this.isVerify=!0;var t={code:this.verifyCode};this.$axios({url:"/api"+l["t"],method:"post",data:t,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),200===t.data.code?e.isVerify=!0:e.$message.error("验证码错误")})).catch((function(e){console.log(e)}))},signCla:function(){var e=this;this.$router.push("/verifyPage?role=1"),this.dialogVisible=!0,this.isSendCode=!0,console.log(n["a"](),document.getElementById("checkCLA").offsetHeight),this.checkCLAClass.height=n["a"]()+"px";var t="".concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())).concat(Math.floor(10*Math.random())),s={code:t,role:this.role,name:this.ruleForm.name,email:this.ruleForm.email,tel:this.ruleForm.tel};console.log(s),this.$axios({url:"/api"+l["p"],method:"post",data:s,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(t){console.log(t),e.dialogVisible=!0,e.isSendCode=!0})).catch((function(e){console.log(e)}))},submitForm:function(e){var t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;t.signCla()}))},getRepositoriesOfOrg:function(e,t){var s=this,a={access_token:this.$store.state.access_token,org:e,page:1,per_page:10};console.log("getRepositoriesOfOrg",a),this.$axios({url:"https://gitee.com/api/v5/orgs/".concat(e,"/repos"),params:a,headers:{"Access-Token":this.$store.state.access_token,"Refresh-Token":this.$store.state.refresh_token,User:"".concat(this.platform,"/").concat(this.$store.state.user.userName)}}).then((function(a){console.log(a),200===a.status&&(s.repositoryOptions=[],a.data.forEach((function(a,o){s.repositoryOptions.push({value:o,org:e,org_id:t,repoName:a.name,label:"".concat(e,"/").concat(a.name),id:a.id})})))})).catch((function(e){console.log(e)}))},resetForm:function(e){this.$refs[e].resetFields()},setClientHeight:function(){var e=this;this.$nextTick((function(){n["a"]()>document.getElementById("checkCLA").offsetHeight?e.checkCLAClass.height=n["a"]()+"px":e.checkCLAClass.height=document.getElementById("checkCLA").offsetHeight})),console.log(document.getElementById("checkCLA").offsetHeight)},setClaContent:function(){document.getElementById("claBox").innerHTML=this.claText},loadMetadata:function(){for(var e in console.log(this.metadata),this.metadataArr=[],this.metadata)console.log(e),"category"!==e&&(Object.assign(this.metadata[e],{githubKey:e}),this.metadataArr.push(this.metadata[e]));console.log(this.metadataArr)}},created:function(){this.getPersonalMetaAndCla(),this.loadMetadata()},mounted:function(){this.setClientHeight(),this.setClaContent()}};window.onresize=function(){n["a"]()>document.getElementById("checkCLA").offsetHeight&&(document.getElementById("checkCLA").style.height=n["a"]()+"px")};var u=c,h=(s("08c1"),s("2877")),d=Object(h["a"])(u,a,o,!1,null,"676d4810",null);t["default"]=d.exports},1460:function(e,t,s){"use strict";var a=s("cf23"),o=s.n(a);o.a},"5d19":function(e,t,s){"use strict";var a=s("a573"),o=s.n(a);o.a},"615a":function(e,t,s){"use strict";s.d(t,"a",(function(){return a}));var a=function(){return window.innerHeight}},a573:function(e,t,s){},cf23:function(e,t,s){},d3b8:function(e,t,s){},fd2d:function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("el-row",{staticClass:"footer"},[s("el-col",{staticClass:"left",attrs:{span:8}},[s("span",[e._v("© 2020 HUAWEI SE")])]),s("el-col",{staticClass:"center",attrs:{span:8}},[s("span",[e._v("Made with "),s("svg-icon",{attrs:{"icon-class":"heart"}}),e._v(" from the GitHub team at HUAWEI ")],1)]),s("el-col",{staticClass:"right",attrs:{span:8}},[s("div",[s("span",{staticClass:"pointer"},[e._v("Terms of Service & Privacy Policy")]),s("span",{staticClass:"pointer"},[s("svg-icon",{attrs:{id:"github_logo","icon-class":"github"}}),e._v("Open an issue")],1)])])],1)},o=[],i={name:"Footer"},r=i,n=(s("1460"),s("2877")),l=Object(n["a"])(r,a,o,!1,null,"bc0631b2",null);t["a"]=l.exports}}]);
//# sourceMappingURL=chunk-03f2e7fe.ba327e68.js.map