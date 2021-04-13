<template>
    <div class="resourceNavigation">
      <resourceType/>
      <resourceContext style="display: none"/>
      <filterDOM style="display: none"/>
      <list style="display: none"/>
      <videoList/>
    </div>
</template>

<script>
  import resourceType from "./package/cardiovascular/resource/resourceType";
  import resourceContext from "./package/cardiovascular/resource/resourceContext";
  import filterDOM from "./package/cardiovascular/resource/filterDOM";
  import list from "./package/cardiovascular/resource/list";
  import videoList from "./package/cardiovascular/resource/videoList";
    export default {
      name: "resourceNavigation",

      data(){
        return{}
      },
      components:{
        resourceType,resourceContext,filterDOM,list,videoList
      }
    }
</script>

<style scoped>
.resourceNavigation{
  background-color: #f5f5f5;
  overflow: hidden;
}
</style>
