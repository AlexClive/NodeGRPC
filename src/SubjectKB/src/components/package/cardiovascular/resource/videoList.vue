<template>
    <div class="videoList">
      <div class="list_info">
        <span class="count">共105条结果</span>
        <div class="statebar">
          <span>排序方式</span>
          <ul>
            <li :class="sort==0?'active':''" @click="sortFn(0)">默认</li>
            <li :class="sort==1?'active':''" @click="sortFn(1)">IF(SCI)</li>
            <li :class="sort==2?'active':''" @click="sortFn(2)">IF(中信所)</li>
          </ul>
        </div>
      </div>
      <ul class="videoList_list">
        <li v-for="(item,key) of 12" :key="key">
          <div class="cont">
            <div>
              <img src="http://img.wanfangmed.com.cn/video/V000150.jpg" alt="视频">
            </div>
            <p class="title">
              <span>【专题】 方剂学</span>
            </p>
            <p class="subtitle">
              <span>邓中甲   成都中医药大学</span>
            </p>
          </div>

        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "videoList",
        data(){
          return{
            sort:0
          }
        },
      methods:{
        sortFn(el){
          this.sort = el;
        }
      }
    }
</script>

<style scoped lang="less">
  .videoList{
    width: 1200px;
    background-color: #ffffff;
    margin: 20px auto;
    .list_info {
      height: 48px;
      line-height: 48px;
      padding: 0 20px;
      background-color: #ffffff;
      box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);

      span.count {
        font-family: MicrosoftYaHei;
        font-size: 14px;
        letter-spacing: 1px;
        color: #999999;
      }

      .statebar {
        float: right;
        display: flex;

        ul {
          display: flex;
          margin: 10px 0 0 10px;
          background-color: #ffffff;
          border: 1px solid #ebebeb;
          height: 26px;
          line-height: 26px;

          li {
            background-color: #ebebeb;
            border: 1px solid #ffffff;
            padding: 0 5px;
            cursor: pointer;

            &.active {
              background-color: #68c598;
              color: #ffffff;
            }
          }
        }
      }
    }
    ul.videoList_list{
      overflow: hidden;
      li{
        width: 290px;
        float: left;

        .cont{
          margin: 20px 0 0 20px;
          width: 272px;
          height: 211px;
          img{
            width: 272px;
            height: 164px;
          }

        }

        .title{
          font-size: 12px;
          color: #333333;
        }

        .subtitle{
          color: #999999;
          padding: 5px 0 0 5px;
        }
      }
    }
  }
</style>
