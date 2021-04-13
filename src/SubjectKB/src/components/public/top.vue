<template>
  <div class="med_top">
    <ul>
      <li><router-link :to="'index'"> 心血管内科</router-link></li>
      <li><router-link :to="'index'"> 神经内科</router-link></li>
      <li><router-link :to="'index'"> 妇产科</router-link></li>
      <li><router-link :to="'index'"> 儿科</router-link></li>
      <li><router-link :to="'index'"> 内分泌科</router-link></li>
    </ul>
    <ul class="userInfo">
      <li><a href="http://med.wanfangdata.com.cn/">公司主页</a></li>
      <li><a href="http://tran.med.wanfangdata.com.cn/TimeResourceLimit/Page">订购</a></li>
      <li v-if="username != ''" @click="logOutFn">退出</li>
      <li v-if="username == ''" @click="logInFn">登录</li>
      <li v-if="username != ''">{{username}}</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "top",
    data(){
      return{
        username:'',
        development:'',
      }
    },
    methods:{
      logInFn(){
        let port = "";
        if(this.development == "debugger"){
          port = "http://login.test.med.wanfangdata.com.cn/Account/LogOn?ReturnUrl=";
        }else {
          port = "http://login.med.wanfangdata.com.cn/Account/LogOn?ReturnUrl=";
        }
        window.location.href = port + window.location.href;
      },
      logOutFn(){
        let port = "";
        if(this.development == "debugger"){
          port = "http://login.test.med.wanfangdata.com.cn/Account/LogOut";
        }else {
          port = "http://login.med.wanfangdata.com.cn/Account/LogOut";
        }
        window.location.href = port + window.location.href;
      },
      UserInfo(){
        let cName = '';
        this.development = this.utils_med.getSearchString("development");
        if(this.development == "debugger"){
          cName = "WFMed.Auth.Test";
        }else {
          cName = "WFMed.Auth";
        }
        let Auth = this.LocalStorage.getCookie(cName);
        if(Auth != ""){
          Auth = JSON.parse(Auth);
          if(Auth.Context.Data.length != 0){
            this.username = Auth.Context.Data[0]["Value"];
          }
        }
      }
    },
    mounted() {
      this.UserInfo();
    }
  }
</script>

<style lang="less">
  .med_top {
    height: 39px;
    line-height: 39px;
    background-color: #f5f5f5;
    padding: 0 50px;
    display: flex;
    ul {
      width: 50%;
      flex: 1;

      &.userInfo{
        li{
          float: right;
        }
      }

      li {
        float: left;
        margin: 0 23px 0 0;
        font-family: MicrosoftYaHei;
        font-size: 12px;
        color: #333333;
        cursor: pointer;
        a{
          font-family: MicrosoftYaHei;
          font-size: 12px;
          color: #333333;
        }
      }
    }
  }
</style>

