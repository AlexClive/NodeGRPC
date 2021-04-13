<template>
    <div class="barren">
      <el-carousel trigger="click" indicator-position="none" height="449px">
        <el-carousel-item  v-for="(item,key) of barrenList" :key="key">
          <img :src="item.img" alt="">
        </el-carousel-item>
      </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "barren",
        data(){
          return{
            barrenList:[
              {
                img:require('../../../assets/banner.png'),
                src:''
              }
            ]
          }
        }
    }
</script>

<style scoped>

</style>
