<template>
  <header class="topbar">
    <div class="wrap">
      <router-link to="/discover">
        <h1 class="logo"></h1>
      </router-link>
      <ul class="menu">
        <li :class="{ 'active': current == item.path }" v-for="item in menuList" :key="item.path">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
      <div class="loginBtn">登录</div>
    </div>
  </header>
</template>
    
<script  lang='ts'>
import { useStore } from "vuex";
import { defineComponent, ref } from "vue";
import { onBeforeRouteUpdate, useRouter } from "vue-router";
export default defineComponent({
  setup() {
    const store = useStore();
    const router = useRouter();
    let current = ref<string>(router.currentRoute.value.path);
    console.log(current.value);

    const menuList = ref([
      {
        path: "/discover",
        name: "发现音乐",
      },
      {
        path: "/my",
        name: "我的音乐",
      },
      {
        path: "/friend",
        name: "关注",
      },
    ]);
    onBeforeRouteUpdate((to) => {
      current.value = to.path;
      console.log("current", current);
    });
    function login() {
      store.commit("getLoginVisible", true);
    }
    return {
      login,
      current,
      menuList,
      onBeforeRouteUpdate,
    };
  },
});
</script>
<style lang="scss" scoped>
.topbar {
  background: #242424;
  border-bottom: 1px solid #000;
  position: relative;
  z-index: 1000;
  height: 70px;
  box-sizing: border-box;
  color: #ccc;
  .wrap {
    width: 1100px;
    margin: 0 auto;
    line-height: 70px;
    .logo {
      background: url("../../assets/images/sprite.png") no-repeat 0 9999px;
      float: left;
      width: 176px;
      height: 69px;
      background-position: 0 0;
      a {
        float: left;
        width: 157px;
        height: 100%;
        padding-right: 20px;
        text-indent: -9999px;
      }
    }
    ul.menu {
      overflow: hidden;
      float: left;
      li {
        float: left;
        text-align: center;
        cursor: pointer;
        a {
          color: #ccc;
          display: inline-block;
          height: 100%;
          line-height: 70px;
          padding: 0 19px;
        }
        &.active {
          background: #000;
          a {
            color: #fff;
          }
        }
      }
    }
    .loginBtn {
      float: right;
      cursor: pointer;
    }
  }
}
</style>