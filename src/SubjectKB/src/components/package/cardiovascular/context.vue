<template>
  <div class="context">
    <leftContext ref="leftContext"/>
    <rightContext ref="rightContext"/>
  </div>
</template>

<script>
  import leftContext from "./homePublic/leftContext";
  import rightContext from "./homePublic/rightContext";

  export default {
    name: "context",
    data(){
      return{}
    },
    mounted() {
      this.videoList();
      this.relatedResources();
    },
    methods:{
      videoList(){
        this.Service.post(this.reqCon.recommendedVideo,{}).then(res=>{
          this.$refs.leftContext.videoListFn(res)
        })
      },
      relatedResources(){
        this.Service.post(this.reqCon.relatedResources,{}).then(res=>{
          this.$refs.rightContext.resourcesListFn(res)
        })
      }
    },
    components: {
      leftContext, rightContext
    }
  }
</script>

<style scoped lang="less">
  .context {
    width: 1200px;
    margin: 27px auto;
    display: flex;
  }
</style>
