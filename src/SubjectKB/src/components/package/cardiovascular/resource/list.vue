<template>
  <div class="list">
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

    <ul class="list_med">
      <li>
        <div class="periodicalInfo">
          <h1><span>1.</span><a href="">中华脑科疾病与康复杂志（电子版）</a></h1>
          <ul class="info">
            <li>
              <em></em>SCIE<i>·</i>
            </li>
            <li>
              <em></em>SCIE<i>·</i>
            </li>
          </ul>
          <div class="text_info">
            <div class="evaluate">
              <p class="first">
                <span>【中信所核心影响因子】</span><span>0.737</span>
              </p>
              <p>
                <span>【综合评价】</span>
                <el-rate
                  v-model="value"
                  disabled
                  :colors=['#666666']>
                </el-rate>
              </p>
            </div>
            <p><span>【CN】</span><span>32-1337/R</span></p>
            <p><span>【ISSN】</span><span>1004-1648</span></p>
            <p><span>【主办单位】</span><span>南京医科大学附属脑科医院</span></p>
            <p><span>【主题】</span><span>脑梗死； 急性脑梗死</span></p>
          </div>
        </div>
        <div class="photo">
          <p class="collect">
            <em class="el-icon-star-on"></em>
            <span>收藏</span>
          </p>
          <p>
            <img src="http://img.wanfangmed.com.cn/imgs/qkindeximg/xfxgbzz/xfxgbzz.jpg" alt="期刊名称">
          </p>
        </div>
      </li>
      <li>
        <div class="periodicalInfo">
          <h1><span>1.</span><a href="">中华脑科疾病与康复杂志（电子版）</a></h1>
          <ul class="info">
            <li>
              <em></em>SCIE<i>·</i>
            </li>
            <li>
              <em></em>SCIE<i>·</i>
            </li>
          </ul>
          <div class="text_info">
            <div class="evaluate">
              <p class="first">
                <span>【中信所核心影响因子】</span><span>0.737</span>
              </p>
              <p>
                <span>【综合评价】</span>
                <el-rate
                  v-model="value"
                  disabled
                  :colors=['#666666']>
                </el-rate>
              </p>
            </div>
            <p><span>【CN】</span><span>32-1337/R</span></p>
            <p><span>【ISSN】</span><span>1004-1648</span></p>
            <p><span>【主办单位】</span><span>南京医科大学附属脑科医院</span></p>
            <p><span>【主题】</span><span>脑梗死； 急性脑梗死</span></p>
          </div>
        </div>
        <div class="photo">
          <p class="collect">
            <em class="el-icon-star-on"></em>
            <span>收藏</span>
          </p>
          <p>
            <img src="http://img.wanfangmed.com.cn/imgs/qkindeximg/xfxgbzz/xfxgbzz.jpg" alt="期刊名称">
          </p>
        </div>
      </li>
      <li class="pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000">
        </el-pagination>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    data() {
      return {
        sort: 0,
        value: 3.7
      }
    },
    methods: {
      sortFn(el) {
        this.sort = el;
      }
    }
  }
</script>

<style scoped lang="less">
  .list {
    width: 1200px;
    margin: 20px auto;
    background-color: #ffffff;

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

    .list_med {
      overflow: hidden;
      li {
        display: flex;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);

        .periodicalInfo {
          flex: 1;
          h1 {
            padding: 10px;

            span {
              color: #666;
              font-size: 14px;
              padding: 0 6px 0 10px;
            }

            a {
              color: #333;
              font-size: 14px;
              font-weight: 700;
            }
          }

          .info {
            background-color: #f5f5f5;
            border: 1px #ffffff solid;
            color: #3ab176;
            margin-top: 6px;
            height: 34px;
            line-height: 34px;
            display: flex;
            padding: 0 20px;

            li {
              box-shadow: none;

              em {
                display: inline-block;
                height: 14px;
              }

              i {
                padding: 0 10px;
              }
            }
          }

          .text_info {
            padding: 20px;
            .evaluate{
                display: flex;
              p{
                flex: 1;
                display: flex;
              }
            }
          }

          p{
            padding: 0 0 14px 0;
            font-size: 12px;
            font-family: "microsoft yahei";
            color: #666666;
          }
        }

        .photo{
          padding: 20px;

          .collect{
            width: 62px;
            height: 24px;
            background-color: #ed9c00;
            border-radius: 2px;
            color: #fff;
            margin: 0 0 10px 0;
            cursor: pointer;
            em{
              margin: 1px 0 0 5px;
              vertical-align: middle;
              font-size: 20px;
            }
            span{
              vertical-align: middle;
            }
          }
        }
      }

      .pagination{
        box-shadow: none;
        float: right;
        margin: 10px auto;
      }
    }
  }
</style>
<style>
  .el-pagination.is-background .el-pager li:not(.disabled).active{
    background-color: #68c598 !important;
  }
  .el-pagination.is-background .el-pager li:not(.disabled):hover{
    color: #68c598;
  }
</style>
