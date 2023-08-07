<script>
import User from './components/user.vue';
import UserForm from './components/UserForm.vue';
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'name1',
          salary: 100,
          age: 30,
        },
        {
          id: 2,
          name: 'name2',
          salary: 200,
          age: 40,
        },
        {
          id: 3,
          name: 'name3',
          salary: 300,
          age: 50,
        },
      ],
    };
  },
  methods: {
    channge(id, name, salary) {
      this.users = this.users.map((user) => {
        if (user.id == id) {
          user.name = name;
          user.salary = salary;
        }
        return user;
      });
    },

    add(name, surn) {
      let id = this.users.length + 1;

      this.users.push({
        id,
        name,
        surn,
      });
    },
  },
  components: { User, UserForm },
};
</script>

<template>
  <User
    v-for="el in users"
    :key="el.id"
    :name="el.name"
    :salary="el.salary"
    :age="el.age"
    :id="el.id"
    @channge="channge"
  />
  <UserForm @add="add" />
</template>

<style scoped></style>
