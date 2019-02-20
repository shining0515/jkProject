<template>
  <k-tpl>
    <template>
      <div class="content">
        <div class="top">
          <div class="left">
            <div class="pointDiv">
              <p class="title">{{point.title}}</p>
              <e-point></e-point>
            </div>
          </div>
          <div class="mid"></div>
          <div class="right"></div>
        </div>
        <div class="bottom"></div>
      </div>
    </template>
  </k-tpl>
</template>

<script>
import kTpl from "./Tpl.vue";
import ePoint from "./homeView/Point";
export default {
  components: { kTpl, ePoint },
  data() {
    return {
      point: {
        title:'北京联通被举报率月度排名'
      }
    }
  },
};
</script>

<style scoped>
.top {
  height: 66%;
  display: flex;
}
.top > .left {
  height: 100%;
  width: 24%;
}
.top > .right {
  height: 100%;
  width: 29%;
}
.top > .mid {
  height: 100%;
  width: 47%;
}
.bottom {
  height: 32%;
}
.top > .left .pointDiv {
  width: 100%;
  height: 53%;
}
p.title{
  margin: 0;
  text-align: center;
  font-size: 16px;
  color: #2eecff;
  font-family:'微软雅黑';
}
</style>