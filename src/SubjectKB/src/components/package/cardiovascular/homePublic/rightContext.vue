<template>
  <div class="rightContext">
    <h1 class="title">
      心血管知识图谱
    </h1>

    <div class="charts med_dom">
      <relationChart/>
    </div>

    <h1 class="title">
      推荐专家
    </h1>

    <div class="expert med_dom">
      <span v-for="(item,key) of 20" :key="key">
       <samp>杨慧霞</samp>
      </span>
    </div>

    <h1 class="title">
      推荐机构
    </h1>

    <ul class="mechanism med_dom">
      <li v-for="(item,key) of 5" :key="key">
        <span class="sort">{{key+1}}</span> <span class="name">中国人民解放军总医院</span> <span class="amount">{{key+50}}</span>
      </li>
    </ul>
    <h1 class="title">
      相关资源
    </h1>

    <ul class="resources med_dom">
      <span v-for="(item,key) of resources" :key="key" @click="resourcesFn(item)">
       <samp>{{item.txt}}</samp>
      </span>
    </ul>
  </div>
</template>

<script>
  import relationChart from "../charts/relationChart";

  export default {
    name: "rightContext",
    data() {
      return {
        resources: []
      }
    },
    methods: {
      resourcesListFn(data) {
        this.resources = data.list;
      },
      resourcesFn(item) {
        if (item.src != '') {
          window.location.href = item.src
        }

      }
    },
    components: {
      relationChart
    }
  }
</script>

<style scoped lang="less">
  .rightContext {
    width: 390px;
    margin: 0 0 0 20px;

    .title {
      font-family: MicrosoftYaHei;
      font-size: 16px;
      letter-spacing: 1px;
      color: #333333;
      height: 50px;
      line-height: 50px;
      text-indent: 12px;
      border-left: 6px solid #dddddd;
      background-color: #ffffff;
      margin: 0 0 5px 0;
    }

    .med_dom {
      background-color: #ffffff;
      margin: 0 0 20px 0;
    }

    .expert {
      padding: 20px 20px;

      span {
        display: inline-block;
        height: 50px;
        width: 85px;

        samp {
          display: inline-block;
          width: 80px;
          height: 35px;
          line-height: 35px;
          text-align: center;
          margin: 0 auto;
          background-color: #f5f5f5;
          border-radius: 5px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          letter-spacing: 1px;
          color: #333333;
          cursor: pointer;

          &:hover {
            background-color: #0f967b;
            color: #ffffff;
          }
        }
      }
    }

    .mechanism {
      padding: 10px 0;

      li {
        height: 38px;
        line-height: 38px;
        padding: 0 0 0 15px;

        &:hover {
          background-color: #f5f5f5;
        }

        span {
          display: inline-block;
          vertical-align: middle;
          margin: 0 15px 0 0;

          &.sort {
            width: 19px;
            height: 19px;
            background-color: #0f967b;
            border-radius: 3px;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            letter-spacing: 1px;
            color: #ffffff;
            text-align: center;
            line-height: 19px;
          }

          &.title {
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #333333;
          }

          &.amount {
            float: right;
            font-family: MicrosoftYaHei;
            font-size: 14px;
            letter-spacing: 1px;
            color: #999999;
          }
        }

      }

    }

    .resources {
      padding: 20px;

      span {
        display: inline-block;
        height: 68px;
        width: 115px;
        overflow: hidden;

        samp {
          display: block;
          height: 55px;
          width: 111px;
          line-height: 55px;
          text-align: center;
          margin: 0 auto;
          background-color: #f5f5f5;
          border-radius: 5px;
          font-family: MicrosoftYaHei;
          font-size: 14px;
          letter-spacing: 1px;
          color: #333333;
          cursor: pointer;

          &:hover {
            background-color: #0f967b;
            color: #ffffff;
          }
        }
      }
    }
  }
</style>
