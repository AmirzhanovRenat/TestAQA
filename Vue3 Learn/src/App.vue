<script>
import User from './components/user.vue';

export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'name1',
          surn: 'surn1',
        },
        {
          id: 2,
          name: 'name2',
          surn: 'surn2',
        },
        {
          id: 3,
          name: 'name3',
          surn: 'surn3',
        },
      ],
    };
  },
  methods: {
    remove(id) {
      this.users = this.users.filter((user) => {
        return user.id !== id;
      });
    },

    change(id, name, surn) {
      this.users = this.users.map((user) => {
        if (user.id == id) {
          user.name = name;
          user.surn = surn;
        }
        return user;
      });
    },
    add(name, surn) {
      let id = this.users.length + 1;

      this.users.push({ id, name, surn });
    },
  },
  components: { User },
};
</script>

<template>
  <User
    v-for="el in users"
    :key="el.id"
    :name="el.name"
    :surn="el.surn"
    :id="el.id"
    @remove="remove"
    @change="change"
    @add="add"
  />
</template>

<style scoped></style>
