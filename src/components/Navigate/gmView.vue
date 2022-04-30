<script lang="ts">
import { defineComponent } from 'vue'
import { bus } from '../../bus'

export default defineComponent({
  setup() {
    return bus
  },
})
</script>
<template>
  <el-popover placement="left" title="上帝模式" :width="300" trigger="click">
    <div class="gm">
      <el-form label-position="top">
        <el-form-item label="传送">
          <el-select model-value="" filterable placeholder="请选择传送点" @change="current = $event">
            <el-option v-for="item in map.points" :key="item.id" :label="item.name" :value="item.id" />
          </el-select>
        </el-form-item>
      </el-form>
    </div>
    <template #reference>
      <el-button class="gmButton">
        GM
      </el-button>
    </template>
  </el-popover>
</template>

<style lang="scss" scoped>
.gmButton {
    position: absolute;
    padding: 0;
    width: 40px;
    right: 30px;
    top: 240px;
    z-index: 3;
}
</style>
