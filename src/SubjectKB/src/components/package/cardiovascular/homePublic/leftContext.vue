<template>
  <div class="leftContext">
    <div class="recommend">
      <div class="tabs_med_item">
        <h1>推荐阅读</h1>
        <div class="tabs_med_menu">
          <ul class="tabs_med_list" :style="{'margin-left': marginLeft}">
            <li v-for="(item,key) of 20" :key="key" @click="handleClick(key)" :class="activeIdx == key ? 'active' : ''">
              高血压{{item}}
            </li>
          </ul>
        </div>
        <div class="btn-group">
          <button @click="smoothClick('right')" type="button" class="btn">
            <el-icon class="el-icon-arrow-left"></el-icon>
          </button>
          <button @click="smoothClick('left')" type="button" class="btn">
            <el-icon class="el-icon-arrow-right"></el-icon>
          </button>
        </div>
      </div>
      <ul class="document_list">
        <li v-for="(item,key) of 6" :key="key">
          <p class="title">
            <em>文献</em>
            高血压合并房颤患者血清AngⅡ、ALD、hs-CRP及RDW的变化及其意义
          </p>
          <span>
          目的：探索原发性高血压合并房颤患者血清血管紧张素Ⅱ（AngⅡ）、血清超敏C反应蛋白（hs-CRP）、红细胞分布宽度（RDW）的变化鱼患者病情的相关性。方法：巴拉巴拉
        </span>
        </li>
      </ul>
    </div>

    <div class="Video">
      <h1>视频与直播</h1>
      <ul class="Video_item">
        <li v-for="(item,key) of videoLis" :key="key" @click="LinkTo(item)">
          <div class="video_med">
            <div class="mask"></div>
            <img :src="item.img" :alt="item.title" class="img">
            <div class="broadcast">
              <img src="../../../../assets/broadcast.png" alt="播放">
            </div>
          </div>
          <span>{{item.title}}</span>
        </li>
      </ul>

    </div>


  </div>
</template>

<script>
  export default {
    name: "leftContext",
    data() {
      return {
        marginLeft: 0,
        idx: 0,
        activeIdx: 0,
        videoLis:[]
      };
    },
    methods: {
      handleClick(key) {
        this.activeIdx = key
      },
      smoothClick(el) {
        if (el == 'left') {
          this.idx -= 1;
          if (this.idx > -(20 + this.idx)) {
            this.marginLeft = this.idx * 60 + "px";
          } else {
            this.idx += 1;
          }
        } else {
          this.idx += 1;
          if (this.idx >= 0) {
            this.idx = 0;
            this.marginLeft = 0;
          } else {
            this.marginLeft = this.idx * 60 + "px";
          }

        }
      },
      videoListFn(data){
        this.videoLis = data.list;
      },
      LinkTo(item){
        window.location.href = item.src;
      }
    }
  }
</script>

<style scoped lang="less">
  .leftContext {
    width: 791px;

    .recommend {
      background-color: #ffffff;
      padding: 0 0 35px 0;

      .tabs_med_item {
        display: flex;
        height: 48px;
        padding: 0 20px;
        background-color: #ffffff;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);

        h1 {
          width: 90px;
          margin: 0 15px 0 0;
          line-height: 48px;
          text-align: center;
          font-family: MicrosoftYaHei;
          font-size: 16px;
          font-weight: bold;
          letter-spacing: 1px;
          color: #333333;
        }

        .tabs_med_menu {
          height: 50px;
          overflow: hidden;
          width: 100%;

          .tabs_med_list {

            li {
              float: left;
              height: 45px;
              line-height: 48px;
              display: inline-block;
              font-family: MicrosoftYaHei;
              font-size: 16px;
              color: #333333;
              margin: 0 10px;
              cursor: pointer;

              &.active {
                border-bottom: 3px solid #0f967b;
              }
            }

          }
        }

        .btn-group {
          display: flex;

          .btn {
            margin: 12px 0 0 10px;
            width: 22px;
            height: 23px;
            border-radius: 3px;
            border: solid 1px #999999;
            background-color: #ffffff;
            cursor: pointer;
          }
        }

      }

      .document_list {
        margin: 5px 0 0 0;

        li {
          padding: 22px 20px;
          border-bottom: dotted 1px #cccccc;

          .title {
            margin: 0 0 10px 0;

            em {
              font-style: normal;
              display: inline-block;
              width: 31px;
              height: 17px;
              line-height: 17px;
              text-align: center;
              background-image: linear-gradient(#ebaf2e,
              #ebaf2e),
              linear-gradient(#178cb4,
              #178cb4);
              background-blend-mode: normal,
              normal;
              border-radius: 3px;
              font-family: SimHei;
              font-size: 12px;
              color: #ffffff;
              letter-spacing: 1px;
            }

            font-family: MicrosoftYaHei;
            font-size: 14px;
            font-weight: bold;
            letter-spacing: 1px;
            color: #0f967b;
          }

          span {
            font-family: MicrosoftYaHei;
            font-size: 14px;
            line-height: 24px;
            letter-spacing: 1px;
            color: #666666;
          }
        }
      }
    }

    .Video{
      margin: 20px 0 20px 0;
      background-color: #ffffff;
      overflow: hidden;
      padding: 0 0 20px 0;
      h1{
        height: 48px;
        line-height: 48px;
        text-indent: 25px;
        font-family: MicrosoftYaHei;
        font-size: 16px;
        font-weight: bold;
        color: #333333;
        box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
      }

      .Video_item{
        overflow: hidden;
        li{
          float: left;
          margin: 32px 0 0 20px;
          width: 236px;

          div.video_med{
            border-radius: 5px;
            overflow: hidden;
            position: relative;
            .mask{
              position: absolute;
              top: 0;
              left: 0;
              width: 236px;
              height: 178px;
              background: rgba(0, 0, 0, .6);
            }

            .img{
              width: 236px;
              height: 178px;
            }

            .broadcast{
              width: 40px;
              height: 40px;
              line-height: 40px;
              border-radius: 50%;
              background: rgba(0, 0, 0, .6);
              position: absolute;
              left: 0;  /* 注意不要漏了上下左右为0，否则不会成功 */
              right: 0;
              top: 0;
              bottom: 0;
              margin: auto;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
            }
          }

          span{
            font-family: MicrosoftYaHei;
            font-size: 14px;
            color: #666666;
            display: inline-block;
            margin: 5px 0 0 0;
          }
        }
      }

    }

  }
</style>
