(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3477"],{2861:function(e,r,t){"use strict";t.r(r);var o=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("el-row",[t("el-col",{attrs:{offset:8,span:8}},[t("el-form",{ref:"ruleForm",staticClass:"demo-ruleForm",staticStyle:{padding:"2rem"},attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"账号",prop:"account"}},[t("el-input",{attrs:{autocomplete:"off"},model:{value:e.ruleForm.userName,callback:function(r){e.$set(e.ruleForm,"userName",r)},expression:"ruleForm.userName"}})],1),t("el-form-item",{attrs:{label:"密码",prop:"pass"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.pwd,callback:function(r){e.$set(e.ruleForm,"pwd",r)},expression:"ruleForm.pwd"}})],1),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(r){return e.submitForm("ruleForm")}}},[e._v("提交")]),t("el-button",{on:{click:function(r){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)],1)},l=[],u=t("221d"),n={name:"SignedRepoLogin",data:function(){var e=function(e,r,t){""===r&&t(new Error("请输入账号")),t()},r=function(e,r,t){""===r&&t(new Error("请输入密码")),t()};return{rules:{userName:[{validator:e,trigger:"blur"}],pwd:[{validator:r,trigger:"blur"}]},ruleForm:{userName:"",pwd:""}}},methods:{login:function(e,r){var t=this;this.$router.push("/rootManager");var o={userName:e,pwd:r};this.$axios({url:"/api"+u["l"],method:"post",data:o}).then((function(e){console.log(e),"root"===e.data.role?t.$router.push("/rootManager"):t.$router.push("/signedRepo")})).catch((function(e){console.log(e)}))},submitForm:function(e){var r=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;r.login(r.ruleForm.userName,r.ruleForm.pwd)}))},resetForm:function(e){this.$refs[e].resetFields()}}},s=n,a=t("2877"),i=Object(a["a"])(s,o,l,!1,null,"223e0a71",null);r["default"]=i.exports}}]);
//# sourceMappingURL=chunk-2d0b3477.b1d486d4.js.map