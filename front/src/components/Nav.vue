<template>
  <transition name="fade">
    <div id="nav" v-show="showLink">
      <ul>
        <li
          v-for="(v,i) in navList"
          :key="'nav'+i"
          :class="{active:v.active}"
          @click="changeLink(v.id)"
        >
          <img :src="require('../assets/images/nav/'+v.id+(v.active?'-active':'')+'.png')" alt>
          {{v.name}}
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ["showLink"],
  data() {
    return {
      navList: [
        {
          id: "home", //首页
          name: "首页",
          active: false
        },
        {
          id: "watch", //运维监控
          name: "运维监控",
          active: false
        },
        {
          id: "table", //日常分析报表
          name: "日常分析报表",
          active: false
        },
        {
          id: "upload", //数据上传
          name: "数据上传",
          active: false
        },
        {
          id: "management", //白名单管理
          name: "白名单管理",
          active: false
        }
      ]
    };
  },
  created() {
    this.change();
  },
  computed: {
    currentPage() {
      return this.$store.state.currentPage;
    }
  },
  methods: {
    change() {
      this.navList.forEach(v => {
        if (v.id === this.currentPage) {
          v.active = true;
        } else {
          v.active = false;
        }
      });
    },
    changeLink(navName) {
      this.$store.commit("set_page", navName);
      this.change();
      this.$router.push({ path: "/" + (navName === "home" ? "" : navName) });
    }
  }
};
</script>

<style scoped>
#nav {
  width: 10%;
  height: calc(100% - 2px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  border: 1px solid #04307f;
  background-color: rgba(16, 34, 73, 0.93);
}
li {
  cursor: pointer;
  font-size: 13px;
  line-height: 2.7;
  margin: 8px 0;
  padding-left: 20px;
  border-left: 2px solid transparent;
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #6380aa;
  border-left: 3px solid rgba(16, 34, 73, 0.93);
}
li > img {
  position: absolute;
  left: 8px;
  width: 20px;
}
li:nth-child(3) > img {
  left: 10px;
  width: 16px;
}
li:nth-child(4) > img {
  left: 9px;
  width: 18px;
}
li.active {
  color: #2edfed;
  border-left: 3px solid #34c0f7;
  background-color: rgba(4, 48, 127, 0.77);
}
.fade-enter-active {
  transition: all 0.5s ease;
}
.fade-leave-active {
  transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateX(-10%);
  opacity: 0;
}
</style>