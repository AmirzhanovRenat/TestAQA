<script>
export default {
  emits: ['add'],
  data() {
    return {
      newName: '',
      newSurn: '',
      visible: true,
    };
  },
  methods: {
    save() {
      this.$emit('add', this.newName, this.newSurn);
    },
    vis() {
      this.visible = false;
    },
  },
};
</script>

<template>
  <template v-if="visible">
    <input v-model="newName" />
    <input v-model="newSurn" />

    <button @click="save">save</button>
  </template >

  
  <div>
    <button @click="vis">add</button>
  </div>
</template>

<style scoped></style>
