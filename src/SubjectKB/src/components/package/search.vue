<template>
    <div class="search">
      <div class="logo_title">
        <a href="http://med.wanfangdata.com.cn/"><img src="../../assets/med_logo.png" alt="万方医学网"></a>

        <img src="../../assets/dividingLine.png" alt="分割" class="dividingLine">

        <router-link class="title" to="/">{{title}}</router-link>
      </div>
      <div class="searchArea">
        <ul>
          <li v-for="(item,key) of typeList" :key="key" :class="typeIdx == key ?'active':''" @click="typeFn(key)">{{item}}</li>
        </ul>
        <div class="searchInp">
          <input type="text"><button>检索</button> <span>高级检索</span>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "search",
        data(){
          return{
            title:'心血管疾病学科知识库',
            typeList:[
              "论文","期刊","图书","知识库"
            ],
            typeIdx:0
          }
        },
      methods:{
        typeFn(key){
          this.typeIdx = key
        }
      }
    }
</script>

<style scoped lang="less">
  .search{
    width: 1200px;
    margin: 0 auto;
    height: 108px;
    display: flex;
    .logo_title{
      flex: 1;
      line-height: 108px;
      img{
        vertical-align: middle;
      }

      .dividingLine{
        margin: 0 14px;
      }

      .title{
        font-family: AdobeHeitiStd-Regular;
        font-size: 24px;
        color: #666666;
        vertical-align: middle;
      }
    }

    .searchArea{
      margin: 15px 0 0 0;
      ul{
        display: flex;
        li{
          font-family: AdobeHeitiStd-Regular;
          font-size: 14px;
          color: #666666;
          margin: 0 0 0 15px;
          cursor: pointer;
          padding: 5px 10px 7px 10px;
          border-radius: 5px 5px 0 0;

          &.active{
            background-image: -webkit-gradient(linear, left top, left bottom, from(#0f967b), to(#0f967b)), -webkit-gradient(linear, left top, left bottom, from(#034147), to(#034147));
            background-image: linear-gradient(#0f967b, #0f967b), linear-gradient(#034147, #034147);
            background-blend-mode: normal, normal;
            color: #ffffff;
          }
        }
      }
      .searchInp{
        position: relative;
        input[type=text]{
          width: 355px;
          height: 40px;
          padding: 0 90px 0 20px;
          background-image: linear-gradient(#ffffff,#ffffff),
          linear-gradient(  #fdf2c7, #fdf2c7);
          background-blend-mode: normal, normal;
          border-radius: 5px;
          border: solid 1px #cccccc;
        }
        button{
          position: absolute;
          right: 70px;
          width: 80px;
          height: 41px;
          background-image: linear-gradient(#0f967b, #0f967b),
          linear-gradient(  #034147,  #034147);
          background-blend-mode: normal, normal;
          border-radius: 0px 5px 5px 0px;
          border: none;
          font-family: AdobeHeitiStd-Regular;
          font-size: 16px;
          color: #ffffff;
        }

        span{
          font-family: MicrosoftYaHei;
          font-size: 14px;
          color: #333333;
          margin: 0 0 0 16px;
        }
      }

    }
  }
</style>
