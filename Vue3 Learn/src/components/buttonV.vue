<script>
export default {
  emits: ['addV'],
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <button @click="$emit('addV')">
    <b>Click</b>
  </button>
</template>

<style scoped>
button {
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  background-color: aqua;
  font-style: oblique;
}
b {
  font-weight: 700;
}
</style>
