<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { bus } from '../../bus'
import type { IRoute } from '~/typings/route'
import { calcRoutes } from '~/calcRoutes'
export default defineComponent({
  setup() {
    const loading = ref(false)
    watch(
      () => bus.middle,
      () => {
        bus.routes = []
        if (bus.middle.size <= 7)
          updateRoutes()
      },
      {
        deep: true,
      },
    )
    watch(
      () => bus.position,
      () => {
        bus.routes = []
        if (bus.middle.size <= 7)
          updateRoutes()
      },
    )
    watch(
      () => bus.current,
      () => {
        if (bus.animateState)
          return
        bus.routes = []
        if (bus.middle.size <= 7)
          updateRoutes()
      },
    )
    function showPath(i: IRoute) {
      if (bus.animateState)
        return
      bus.activeRoute = i
    }
    async function moveAlongPath(i: IRoute) {
      bus.activeRoute = i
      bus.animateState = false
      bus.current = i.pointSeq[0]
      await nextTick()
      bus.animateState = true
    }
    async function updateRoutes() {
      if (!bus.current || !bus.position)
        return []

      loading.value = true
      bus.routes = await calcRoutes({
        map: bus.map,
        from: bus.current,
        to: bus.position,
        middle: bus.middle,
      })
      showPath(bus.routes[0])
      loading.value = false
    }
    return {
      bus,
      updateRoutes,
      loading,
      showPath,
      moveAlongPath,
    }
  },
})
</script>
<template>
  <section class="searchView">
    <el-select v-model="bus.type" class="typeBox">
      <el-option label="全部" value="" />
      <el-option label="物理位置" value="physic" />
      <el-option label="课程或时间" value="logic" />
    </el-select>
    <el-select v-model="bus.position" clearable class="searchBox" filterable placeholder="输入或搜索目的地">
      <template v-if="bus.type === ''">
        <template v-for="item in bus.map.logics" :key="item.id">
          <el-option :label="item.name + '(课程或时间)'" :value="item.id" />
        </template>
        <template v-for="item in bus.map.points" :key="item.id">
          <el-option v-if="!item.name.includes('路口')" :label="item.name" :value="item.id" />
        </template>
      </template>
      <template v-else-if="bus.type === 'physic'">
        <template v-for="item in bus.map.points" :key="item.id">
          <el-option v-if="!item.name.includes('路口')" :label="item.name" :value="item.id" />
        </template>
      </template>
      <template v-else>
        <template v-for="item in bus.map.logics" :key="item.id">
          <el-option :label="item.name + '(课程或时间)'" :value="item.id" />
        </template>
      </template>
    </el-select>
    <transition name="el-zoom-in-top">
      <el-card v-if="bus.position" class="operationCard">
        <div class="middle">
          <el-select
            model-value=""
            size="small"
            clearable
            filterable
            placeholder="输入或搜索途径点"
            @change="$event && bus.middle.add($event)"
          >
            <template v-for="item in bus.map.points" :key="item.id">
              <el-option
                v-if="!bus.middle.has(item.id) && !item.name.includes('路口')"
                :label="item.name"
                :value="item.id"
              />
            </template>
          </el-select>
          <el-tag
            v-for="one in bus.middle"
            :key="one"
            closable
            :disable-transitions="false"
            @close="bus.middle.delete(one)"
          >
            <fa-icon icon="map-marker-alt" />
            {{ bus.map.pointsMap[one].name }}
          </el-tag>
        </div>
        <ul v-loading="loading" class="routes">
          <li v-for="(i, a) in bus.routes" :key="a" @click="showPath(i)">
            <div class="name">
              {{ i.name }}
            </div>
            <div class="desc">
              {{ i.description }}
            </div>
            <el-button circle class="go-button" @click.stop.prevent="moveAlongPath(i)">
              <div i-carbon-direction-straight-right />
            </el-button>
          </li>
          <li v-if="bus.routes.length <= 0" class="not-calculated">
            <el-button @click="updateRoutes">
              计算路线
            </el-button>
          </li>
        </ul>
      </el-card>
    </transition>
  </section>
</template>

<style lang="scss" scoped>
.searchView {
    position: absolute;
    top: 25px;
    z-index: 2;
    width: 295px;
    min-height: 100px;
    text-align: center;
    .typeBox {
        width: 77px;
    }
    .operationCard {
        margin-top: 10px;
    }
    &::v-deep(.el-card__body) {
        padding: 0;
    }
    .middle {
        .el-select {
            margin: 10px 0;
        }
        .el-tag {
            display: block;
            text-align: left;
            padding: 0 15px;
            position: relative;
            &::v-deep(.el-tag__close) {
                position: absolute;
                right: 10px;
                top: 7px;
            }
        }
    }
    .routes {
        margin: 0;
        padding: 0;
        min-height: 70px;
        li {
            list-style: none;
            padding: 10px 15px;
            height: 70px;
            box-sizing: border-box;
            text-align: left;
            font-size: 20px;
            border-top: 1px solid #ddd;
            transition: all 0.2s;
            position: relative;
            .go-button {
                position: absolute;
                right: 15px;
                top: 15px;
            }
            &:hover {
                background: #f5f5f5;
            }
            &.not-calculated {
                text-align: center;
            }
        }
        .desc {
            font-size: 15px;
            color: #888;
        }
    }
}
</style>
