<template>
  <MainNavigation />
  <router-view />
</template>

<script>
import MainNavigation from "@/components/MainNavigation.vue";
export default {
  components: {
    MainNavigation,
  },
};
</script>
<style>
:root {
  background-color: var(--white-color);
  --font-color: #fafafa;
  --primary-color: #ffcdb2;
  --secondary-color: #ffb4a2;
  --third-color: #e5989b;
  --fourth-color: #b5838d;
  --background-color: #6d6875;
  --white-color: #fafafa;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 16px;
  min-height: 20rem;
  width: 100%;
  max-width: 50rem;
  margin: 3rem auto;
  background-color: var(--white-color);
  border: 15px solid var(--primary-color);
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
