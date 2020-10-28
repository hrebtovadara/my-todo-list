<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav__item" to="/">TODO</router-link>
      <router-link class="nav__item" to="/done">DONE</router-link>

    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background-color: #2c3e50;
  width: 768px;
  min-height: 768px;
  border-radius: 10px;
  margin: 50px auto;
}

#nav {
  padding: 30px;
  background-color: #405871;
  border-radius: 10px 10px 0 0;

  display: flex;
  justify-content: space-around;
  align-items: center;

  a {
    font-weight: bold;
    color: #ffffff;
    text-decoration: none;
    font-size: 25px;

    &.router-link-exact-active {
      background-color: #488e87;
    }
  }
}

.nav__item {
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  width: 290px;
  height: 60px;
  border-radius: 10px;
}

.nav__item:hover {
  background-color: #2c3e50;
}

</style>
