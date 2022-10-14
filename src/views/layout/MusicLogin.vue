<template>
  <div>
    <a-modal
      v-model:visible="loginVisible"
      title="登录网易云音乐"
      @cancel="handleCancel"
      @ok="handleOk"
      okText="确定"
      cancelText="取消"
    >
    </a-modal>
  </div>
</template>
<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, computed, reactive, toRefs } from "vue";
export default defineComponent({
  setup() {
    const store = useStore();
    const handleOk = (e: MouseEvent) => {
      store.commit("getLoginVisible", false);
    };
    const handleCancel = () => {
      store.commit("getLoginVisible", false);
    };
    let loginVisible = computed(() => store.state.loginVisible);
    return {
      loginVisible,
      handleOk,
      handleCancel,
    };
  },
});
</script>

