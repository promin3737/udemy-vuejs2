<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー2</router-link>
    <hr />
    <h1>User No. {{ id }}</h1>
  </div>
</template>

<script>
export default {
  props: ["id"]
};
</script>
