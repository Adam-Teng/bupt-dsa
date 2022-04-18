<script lang="ts">
import { defineComponent, nextTick, ref, watch } from 'vue'
import { bus, currentPoint } from '../../bus'
import { dijkstra } from '../../algorithm/Dij'
import { SA } from '../../algorithm/SA'
import { Ha } from '../../algorithm/Ha_byDij'
import type { mapPoint } from '../../typings/map'
import type { IRoute } from '../../typings/route'

export default defineComponent({
  setup() {
    const loading = ref(false)
    async function calcRoutes() {
      loading.value = true
      await nextTick()
      console.log(bus.middle.size)
      if (bus.middle.size <= 7 && bus.middle.size > 0) {
        const wayPointList: mapPoint[] = []
        for (const wayPoint of bus.middle)
          wayPointList.push(bus.map.pointsMap[wayPoint])

        const timeRoute = Ha(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          wayPointList,
          1,
        )
        const timeRouteObj = {
          name: '最短时间',
          description: `约${(timeRoute[0] / bus.speed.walk / 60).toFixed(0)}分钟`,
          avgDistance: timeRoute[0],
          pointSeq: timeRoute[1],
          edgeSeq: timeRoute[2],
        }
        if (timeRouteObj.edgeSeq.includes('benbu_to_shahe')) {
          const counts = (arr: string[], value: string) =>
            arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
          timeRouteObj.description = `约${(
            (timeRoute[0] / bus.speed.walk
                            + (-bus.map.edgeMap.benbu_to_shahe.length / bus.speed.walk
                                + bus.map.edgeMap.benbu_to_shahe.length / bus.speed.bus)
                                * counts(timeRouteObj.edgeSeq, 'benbu_to_shahe'))
                        / 60
          ).toFixed(0)}分钟`
        }
        const distanceRoute = Ha(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          wayPointList,
          0,
        )
        const distanceRouteObj = {
          name: '最短路程',
          description: `约${Math.round(distanceRoute[0])}米`,
          avgDistance: distanceRoute[0],
          pointSeq: distanceRoute[1],
          edgeSeq: distanceRoute[2],
        }
        if (distanceRoute[0] > 1000)
          distanceRouteObj.description = `约${(distanceRoute[0] / 1000).toFixed(2)}千米`

        bus.routes.push(timeRouteObj)
        bus.routes.push(distanceRouteObj)
      }
      else if (bus.middle.size > 7) {
        const wayPointList: mapPoint[] = []
        for (const wayPoint of bus.middle)
          wayPointList.push(bus.map.pointsMap[wayPoint])

        const timeRoute = SA(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          wayPointList,
          1,
        )
        const timeRouteObj = {
          name: '最短时间',
          description: `约${(timeRoute[0] / bus.speed.walk / 60).toFixed(0)}分钟`,
          avgDistance: timeRoute[0],
          pointSeq: timeRoute[1],
          edgeSeq: timeRoute[2],
        }
        if (timeRouteObj.edgeSeq.includes('benbu_to_shahe')) {
          const counts = (arr: string[], value: string) =>
            arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
          timeRouteObj.description = `约${(
            (timeRoute[0] / bus.speed.walk
                            + (-bus.map.edgeMap.benbu_to_shahe.length / bus.speed.walk
                                + bus.map.edgeMap.benbu_to_shahe.length / bus.speed.bus)
                                * counts(timeRouteObj.edgeSeq, 'benbu_to_shahe'))
                        / 60
          ).toFixed(0)}分钟`
        }
        const distanceRoute = SA(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          wayPointList,
          0,
        )
        const distanceRouteObj = {
          name: '最短路程',
          description: `约${Math.round(distanceRoute[0])}米`,
          avgDistance: distanceRoute[0],
          pointSeq: distanceRoute[1],
          edgeSeq: distanceRoute[2],
        }
        if (distanceRoute[0] > 1000)
          distanceRouteObj.description = `约${(distanceRoute[0] / 1000).toFixed(2)}千米`

        bus.routes.push(timeRouteObj)
        bus.routes.push(distanceRouteObj)
      }
      else {
        const timeRoute = dijkstra(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          1,
        )
        const timeRouteObj = {
          name: '最短时间',
          description: `约${(timeRoute[0] / bus.speed.walk / 60).toFixed(0)}分钟`,
          avgDistance: timeRoute[0],
          pointSeq: timeRoute[1],
          edgeSeq: timeRoute[2],
        }
        if (timeRouteObj.edgeSeq.includes('benbu_to_shahe')) {
          const counts = (arr: string[], value: string) =>
            arr.reduce((a, v) => (v === value ? a + 1 : a + 0), 0)
          timeRouteObj.description = `约${(
            (timeRoute[0] / bus.speed.walk
                            + (-bus.map.edgeMap.benbu_to_shahe.length / bus.speed.walk
                                + bus.map.edgeMap.benbu_to_shahe.length / bus.speed.bus)
                                * counts(timeRouteObj.edgeSeq, 'benbu_to_shahe'))
                        / 60
          ).toFixed(0)}分钟`
        }
        const distanceRoute = dijkstra(
          bus.map.edgeMap,
          bus.map.pointsMap,
          currentPoint.value,
          bus.map.pointsMap[bus.position],
          0,
        )
        const distanceRouteObj = {
          name: '最短路程',
          description: `约${Math.round(distanceRoute[0])}米`,
          avgDistance: distanceRoute[0],
          pointSeq: distanceRoute[1],
          edgeSeq: distanceRoute[2],
        }
        if (distanceRoute[0] > 1000)
          distanceRouteObj.description = `约${(distanceRoute[0] / 1000).toFixed(2)}千米`

        bus.routes.push(timeRouteObj)
        bus.routes.push(distanceRouteObj)
      }
      loading.value = false
    }
    watch(
      () => bus.middle,
      () => {
        bus.routes = []
        if (bus.middle.size <= 7)
          calcRoutes()
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
          calcRoutes()
      },
    )
    function showPath(i: IRoute) {
      bus.activeRoute = i
    }
    function moveAlongPath(i: any) {}
    return {
      bus,
      calcRoutes,
      loading,
      showPath,
      moveAlongPath,
    }
  },
})
</script>
<template>
  <section class="searchView">
    <el-select v-model="bus.position" clearable class="searchBox" filterable placeholder="输入或搜索目的地">
      <div v-for="item in bus.map.points" :key="item.id">
        <el-option v-if="!item.name.includes('路口')" :label="item.name" :value="item.id" />
      </div>
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
            <div v-for="item in bus.map.points" :key="item.id">
              <el-option
                v-if="!bus.middle.has(item.id) && !item.name.includes('路口')"
                :label="item.name"
                :value="item.id"
              />
            </div>
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
            <el-button circle class="go-button">
              <fa-icon icon="directions" />
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
