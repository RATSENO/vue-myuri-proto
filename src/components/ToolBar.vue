<template>
  <div class="header">
    <router-link to="/">home</router-link> |
    <router-link to="/join">join</router-link> |
    <router-link to="/login">login</router-link> |
    <router-link to="/my">my</router-link>
  </div>
</template>

<style scoped>
.header {
  background-color: #42b883;
  color: white;
  padding: 8px 8px 8px 25px;
  display: flex;
  align-items: center;
}
.header a:visited {
  color: white;
}
.header a:active {
  color: #35495e;
}
.fixed {
  position: fixed;
  width: 100%;
  z-index: 999;
}
a {
  margin: 0 5px;
}

</style>
