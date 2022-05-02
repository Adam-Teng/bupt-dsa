<script setup lang="ts">
import { student1MessageBox, student2MessageBox, student3MessageBox } from '~/bus'
const managerInput1 = $ref('')
const managerInput2 = $ref('')
const managerInput3 = $ref('')
const managerInput4 = $ref('')
function pushStudentMessage(str: string) {
  student1MessageBox.push(`管理员：${str}`)
  student2MessageBox.push(`管理员：${str}`)
  student3MessageBox.push(`管理员：${str}`)
}
function sendMessage(str1: string[], x: number, str2: string) {
  str1.push(`学生${x}：${str2}`)
}
</script>

<template>
  <p>
    <a text-2xl rel="noreferrer" target="_blank">
      管理员
    </a>
  </p>
  <div py-4 />
  <el-input
    id="input"
    v-model="managerInput1"
    placeholder="请输入你要发送的信息"
    type="text"
    autocomplete="false"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    style="width:300px"
    clearable
  />
  <div py-2 />
  <div>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput1"
      @click="pushStudentMessage(managerInput1)"
    >
      sendMessage
    </button>
  </div>
  <div py-6 />
  <p>
    <a text-2xl rel="noreferrer" target="_blank">
      学生1
    </a>
  </p>
  <div py-4 />
  <el-input
    id="input"
    v-model="managerInput2"
    placeholder="请输入你要发送的信息"
    type="text"
    autocomplete="false"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    style="width:300px"
    clearable
  />
  <div py-2 />
  <div>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput2"
      @click="sendMessage(student2MessageBox, 1, managerInput2)"
    >
      sendMessage2
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput2"
      @click="sendMessage(student3MessageBox, 1, managerInput2)"
    >
      sendMessage3
    </button>
  </div>
  <div py-6 />
  <p>
    <a text-2xl rel="noreferrer" target="_blank">
      学生2
    </a>
  </p>
  <div py-4 />
  <el-input
    id="input"
    v-model="managerInput3"
    placeholder="请输入你要发送的信息"
    type="text"
    autocomplete="false"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    style="width:300px"
    clearable
  />
  <div py-2 />
  <div>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput3"
      @click="sendMessage(student1MessageBox, 2, managerInput3)"
    >
      sendMessage1
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput3"
      @click="sendMessage(student3MessageBox, 2, managerInput3)"
    >
      sendMessage3
    </button>
  </div>
  <div py-6 />
  <p>
    <a text-2xl rel="noreferrer" target="_blank">
      学生3
    </a>
  </p>
  <div py-4 />
  <el-input
    id="input"
    v-model="managerInput4"
    placeholder="请输入你要发送的信息"
    type="text"
    autocomplete="false"
    p="x-4 y-2"
    w="250px"
    text="center"
    bg="transparent"
    border="~ rounded gray-200 dark:gray-700"
    outline="none active:none"
    style="width:300px"
    clearable
  />
  <div py-2 />
  <div>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput4"
      @click="sendMessage(student1MessageBox, 3, managerInput4)"
    >
      sendMessage1
    </button>
    <button
      class="m-3 text-sm btn"
      :disabled="!managerInput4"
      @click="sendMessage(student2MessageBox, 3, managerInput4)"
    >
      sendMessage2
    </button>
  </div>
</template>
