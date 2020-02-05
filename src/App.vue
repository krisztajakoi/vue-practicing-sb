<template>
  <div id="app">
    <img width="25%" src="./assets/logo.png" data>
    testelek
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
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
  created() {
    console.log("béla");
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
