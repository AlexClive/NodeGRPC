<template>
    <ul class="resourceType">
      <li v-for="(item,key) of typeList" :key="key" :class="type==item?'active':''"  @click="typeFn(item)">{{item}}</li>
    </ul>
</template>

<script>
    export default {
        name: "resourceType",
        data(){
          return{
            type: this.$route.query.type,
            typeList:["期刊","推荐阅读","知识库","图书","视频","知识图谱"]
          }
        },
      methods:{
        typeFn(item){
          this.$router.push({
            path:"resourceNavigation",
            query:{type:item}
          })
        }
      },
      watch: {
        $route(to, from){
          this.type= this.$route.query.type
        }
      }
    }
</script>

<style scoped lang="less">
.resourceType{
  width: 1200px;
  height: 48px;
  line-height: 45px;
  background-color: #ffffff;
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  margin: 20px auto 0;
  overflow: hidden;
    li{
      float: left;
      font-family: MicrosoftYaHei;
      font-size: 16px;
      color: #333333;
      margin: 0 54px 0 20px;
      cursor: pointer;

      &.active{
        border-bottom: 3px solid #0f967b;
      }
    }

}
</style>
