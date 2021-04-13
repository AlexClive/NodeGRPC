<template>
    <div class="resourceContext">
      <div class="keyword_med">
          <h1>科室</h1>

        <ul class="keyword_list">
          <li v-for="(item,key) of 30" :key="key"> 放射性白内障 </li>
        </ul>
      </div>
    </div>
</template>

<script>
    export default {
        name: "resourceContext"
    }
</script>

<style scoped lang="less">
.resourceContext{
  width: 1200px;
  margin: 20px auto 0;
  padding: 16px 0;
  background-color: #ffffff;
  .keyword_med{
    padding: 0 20px;

    h1{
      font-family: MicrosoftYaHei;
      font-size: 16px;
      font-weight: bold;
      color: #666666;
      text-indent: 10px;
      border-left: 3px solid #008b67;
    }

    .keyword_list{
      margin: 20px 0;
      overflow: hidden;
      li{
        width: 125px;
        float: left;
        font-family: MicrosoftYaHei;
        font-size: 14px;
        color: #333333;
        height: 36px;
        line-height: 36px;
        cursor: pointer;

        &:hover{
          color: #666666;
        }
      }
    }
  }
}
</style>
