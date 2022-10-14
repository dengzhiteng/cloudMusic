<template>
  <!-- <a-layout class="layout"> -->
    <music-header></music-header>
    <div class="content">
      <router-view />
    </div>
    <music-footer></music-footer>
  <!-- </a-layout> -->
</template>
<script lang="ts">
import MusicHeader from "./MusicHeader.vue";
import MusicFooter from "./MusicFooter.vue";
// import MusicLogin from "./MusicLogin.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: {
    MusicHeader,
    MusicFooter,
    // MusicLogin,
  },
  setup() {},
});
</script>
<style lang="scss" scoped>
.content {
  min-height: calc(100vh - 140px);
  box-sizing: border-box;
  padding: 0 10px;
}
</style>
