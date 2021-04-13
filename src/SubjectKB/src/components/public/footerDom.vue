<template>
<div class="footerDom">
  <div class="context">
    <div class="sort">
      <!--万方logo-->
      <a href="http://med.wanfangdata.com.cn/"><img src="../../assets/logo-MED-lg.png" alt="万方医学"></a>
    </div>
    <div class="sort">
      <el-breadcrumb separator="|">
        <el-breadcrumb-item v-for="(item,key) of friendshipLink" :key="key"><a :href="item.src">{{item.txt}}</a></el-breadcrumb-item>
      </el-breadcrumb>
      <div class="copyright">
        <p>互联网出版许可证 新出网证(京)字042号 </p>
        <p>互联网药品信息服务资格证书号：(京)-经营性-2011-0017</p>
      </div>
      <div class="copyright">
        <p>信息网络传播视听节目许可证</p>
        <p>京公网安备11010802020237号</p>
      </div>
      <div class="copyright">
        <p>京ICP证010071号</p>
      </div>

    </div>
    <div class="sort">
     <p class="customerService">客服热线：4000-115-888 转3 (周一至周五：8:00至17:00)  </p>
     <p class="customerService">客服邮箱：yiyao@wanfangdata.com.cn</p>
    </div>
  </div>
</div>
</template>

<script>
    export default {
      name: "footerDom",
      data(){
          return{
              friendshipLink:[
                {
                  txt:'关于我们',
                  src:'http://med.wanfangdata.com.cn/Home/AboutUs'
                },
                {
                  txt:'联系我们',
                  src:'http://med.wanfangdata.com.cn/Home/Contact'
                },
                {
                  txt:'网站地图',
                  src:'http://med.wanfangdata.com.cn/Home/Sitemap'
                },
                {
                  txt:'主要产品',
                  src:'http://med.wanfangdata.com.cn/Home/Products'
                },
                {
                  txt:'主要服务',
                  src:'http://med.wanfangdata.com.cn/Home/Services'
                },
                {
                  txt:'使用帮助',
                  src:'http://med.wanfangdata.com.cn/Home/FAQ?type=helpdocument'
                },
                {
                  txt:'服务承诺',
                  src:'http://med.wanfangdata.com.cn/Home/FAQ?type=helpdocument'
                },
                {
                  txt:'诚聘英才',
                  src:'http://med.wanfangdata.com.cn/Home/FAQ?type=helpdocument'
                },
                {
                  txt:'友情链接',
                  src:'http://med.wanfangdata.com.cn/Home/FAQ?type=helpdocument'
                },
                {
                  txt:'知识产权',
                  src:'http://med.wanfangdata.com.cn/Home/FAQ?type=helpdocument'
                }
              ]
          }
      }
    }
</script>

<style lang="less">
.footerDom{
  width: 100%;
  margin: 0 auto;
  background-color: #086351;
  font-family: MicrosoftYaHei;
  font-size: 12px;
  color: #b5d5cf;
  padding: 15px 0;
  .context{
    width: 1200px;
    margin: 0 auto;
    display: flex;

    .sort{
      margin: 0 23px 0 0;

      &:last-child{
        margin: 0;
      }

      .copyright{
        display: flex;
        margin: 10px 0 0 0;
      }

      .customerService{
        margin: -1px 0 10px 0;
      }
    }
    a{
      font-size: 12px !important;
      color: #b5d5cf !important;
      font-weight: normal !important;
      cursor: pointer !important;
    }

    .el-breadcrumb__separator{
      margin: 0 5px;
    }
  }
}
</style>
