<template>
  <div id="home" @click="hideNav">
    <k-header @showNav="showNav"></k-header>
    <div class="k-content">
      <k-nav :showLink="showLink"></k-nav>
      <div id="content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import kHeader from "./Header.vue";
import kNav from "./Nav.vue";
export default {
  components: { kHeader, kNav },
  data() {
    return {
      showLink: false
    };
  },
  methods: {
    showNav() {
      this.showLink = !this.showLink;
    },
    hideNav(e) {
      if (e.target.id !== "btnNav") this.showLink = false;
    }
  }
};
</script>

<style scoped>
#home {
  height: 100%;
  background: url(../assets/images/home/bg02.png) no-repeat 0 0;
  background-size: 100% 100%;
  display: flex;
  flex-direction: column;
}
.k-content {
  position: relative;
  flex-grow: 1;
}
#content {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}
#content > div {
  width: 100%;
  height: 100%;
}
</style>