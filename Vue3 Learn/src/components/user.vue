<script>
export default {
  props: ['name', 'surn', 'id'],
  emits: ['remove', 'change', 'add'],
  data() {
    return {
      isEdit: false,
      newName: this.name,
      newSurn: this.surn,
      newNameV: '',
      newSurnV: '',
    };
  },
  methods: {
    edit() {
      this.isEdit = true;
    },
    // save() {
    //   this.isEdit = false;
    //   this.$emit('change', this.id, this.newName, this.newSurn);

    // },
    add() {
      this.$emit('add', this.newName, this.newSurn);
    },
  },
};
</script>

<template>
  <!-- <template v-if="!isEdit">
    <ul>
      <li>
        {{ name }}
        {{ surn }}
        <button @click="edit">edit</button>
      </li>
    </ul>
  </template>
  <template v-else>
    <input v-model="newName" />
    <input v-model="newSurn" />
    <button @click="save">save</button>
  </template> -->

  <input v-model="newName" />
  <input v-model="newSurn" />

  <button @click="add">save</button>
</template>

<style scoped></style>
