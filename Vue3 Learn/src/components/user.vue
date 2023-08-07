<script>
export default {
  props: ['name', 'age', 'salary', 'id'],
  emits: ['channge'],
  data() {
    return {
      isEdit: false,
      newName: this.name,
      newSalary: this.salary,
    };
  },
  methods: {
    edit() {
      this.isEdit = true;
    },

    save() {
      this.isEdit = false;
      this.$emit('channge', this.id, this.newName, this.newSalary);
    },
  },
};
</script>

<template>
  <ul>
    <li>
      <template v-if="!isEdit">
        {{ name }}
        {{ salary }}
        <button @click="edit">edit</button>
      </template>
      <template v-else>
        <input v-model="newName" />
        <input v-model="newSalary" />
        <button @click="save">save</button>
      </template>
    </li>
  </ul>
</template>

<style scoped></style>
