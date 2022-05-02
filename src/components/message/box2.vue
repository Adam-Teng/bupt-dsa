<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { student2MessageBox } from '~/bus'

export default defineComponent({
  setup() {
    const logbox = ref(null)
    watch(
      () => student2MessageBox,
      async() => {
        if (!logbox.value)
          return
        await nextTick()
        const ul = (logbox.value as unknown) as HTMLUListElement
        ul.scrollTop = ul.scrollHeight * 100
      },
      {
        deep: true,
      },
    )
    return {
      student2MessageBox,
      logbox,
    }
  },
})
</script>
<template>
  <el-popover placement="right" title="学生2收件箱" :width="300" trigger="click">
    <div class="log">
      <el-empty v-show="student2MessageBox.length <= 0" description="暂无日志" />
      <ul v-show="student2MessageBox.length > 0" ref="logbox" class="logbox">
        <li v-for="(i, a) in student2MessageBox" :key="a">
          {{ i }}
        </li>
      </ul>
    </div>
    <template #reference>
      <el-button class="logButton">
        <div i-carbon-catalog />
      </el-button>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
.logButton {
    position: absolute;
    padding: 0;
    width: 40px;
    right: 530px;
    top: 587px;
    z-index: 3;
}
.log {
    height: 200px;
    .el-empty,
    .logbox {
        margin: 0;
        height: 170px;
    }
    &::v-deep(.el-form-item) {
        margin-bottom: 0;
    }
    &::v-deep(.el-form-item__label) {
        padding-bottom: 0 !important;
        line-height: 20px;
    }
    .logbox {
        margin: 0;
        padding: 0;
        list-style: none;
        overflow-y: scroll;
        li {
            padding: 5px;
            border-bottom: 1px solid #eee;
        }
    }
}
</style>
