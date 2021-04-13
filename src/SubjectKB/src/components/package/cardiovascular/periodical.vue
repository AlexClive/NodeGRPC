<template>
    <div class="periodical">
      <ul class="periodical_item">
          <li v-for="(item,key) of list" :key="key" @click="linkTo(item)">
            <img :src="item.img" :alt="item.title">
            <span>{{item.title}}</span>
          </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "periodical",
        data(){
          return{
            list:[]
          }
        },
      mounted() {

      },
      methods:{
          listFn(data){
            this.list = data.list
          },
        linkTo(item){
          window.location.href = item.src
        }
      }
    }
</script>

<style scoped lang="less">
.periodical{
  width: 1200px;
  margin: 0 auto;
  height: 310px;
  background-color: #ffffff;
  .periodical_item{
    padding: 25px 0;
    display: flex;
    li{
      width: 180px;
      margin: 0 36px;
      cursor: pointer;
      text-align: center;
      img{
        width: 100%;
        display: block;
      }
      span{
        display: inline-block;
        margin: 5px 0 0 0;
        font-family: MicrosoftYaHei;
        font-weight: bold;
        font-size: 13px;
        color: #666666;
      }
    }
  }
}
</style>
