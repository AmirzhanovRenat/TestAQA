<script>
export default {
  data() {
    return {
      text: 'hello',
    };
  },
  methods: {
    func(par) {
      this.text = par;
    },
    addPar() {
      this.text = 'UUUU';
    },
  },
};
</script>

<template>
  <div>
    <p>{{ text }}</p>
  </div>

  <button v-on:click="func('miruMir')">ClickHere</button>

  <button @click="addPar">Click88</button>
  <div>
    <a :href="text">text</a>
  </div>
</template>

<style scoped></style>
