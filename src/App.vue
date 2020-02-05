<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png">
    test
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
    <div>Mindenkinek annyi baja van és az annyi bajnak annyi baja van...</div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import { practice } from "./functions";

export default {
  name: "App",
  components: {
    HelloWorld
  },
  created () {
    practice(this)
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
