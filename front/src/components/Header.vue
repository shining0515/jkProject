<template>
  <header>
    <div class="nav">
      <img id="btnNav" @click="handleNav" src="../assets/images/home/nav.png" width="100%" alt>
    </div>
    <div>
      <img src="../assets/images/login/topHead.png" width="100%" alt>
    </div>
  </header>
</template>

<script>
export default {
  methods: {
    handleNav(){
      this.$emit('showNav')
    }
  },
};
</script>

<style scoped>
header {
  display: flex;
  align-items: center;
}
.nav {
  margin-left: 1%;
  cursor: pointer;
}
</style>