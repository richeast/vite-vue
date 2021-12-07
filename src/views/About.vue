<script setup>
import { useStore } from "vuex"
import { ElButton } from "element-plus"

const store = useStore()

function increment() {
  store.commit("increment")
  console.log(store.state.count)
}
</script>

<template>
  <div>This is about pages</div>
  <p>count: {{ store.state.count }}</p>
  <el-button type="primary" @click="increment">increment</el-button>
</template>

<style></style>
