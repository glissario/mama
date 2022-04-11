<template>
  <nav>
    <div v-if="!mobileNavigation">
      <router-link :to="{ name: 'home' }">Home</router-link>
      <router-link :to="{ name: 'about' }">Über mich</router-link>
      <router-link :to="{ name: 'offer' }">Leistungen</router-link>
      <router-link :to="{ name: 'contact' }">Kontakt</router-link>
    </div>
    <div v-if="mobileNavigation" @click="openOverhead = !openOverhead">
      <i class="burgermenu pi pi-bars"></i>
      <div class="overhead" v-if="openOverhead">
        <router-link :to="{ name: 'home' }">Home</router-link>
        <router-link :to="{ name: 'about' }">Über mich</router-link>
        <router-link :to="{ name: 'offer' }">Leistungen</router-link>
        <router-link :to="{ name: 'contact' }">Kontakt</router-link>
      </div>
    </div>
  </nav>
  <div class="overhead"></div>
</template>

<script>
import "primeicons/primeicons.css";
export default {
  data() {
    return {
      mobileNavigation: String,
      openOverhead: false,
    };
  },
  created() {
    window.addEventListener("resize", this.checkMobileNavigation);
    this.checkMobileNavigation();
  },
  computed() {
    this.mobileNavigation = window.matchMedia(
      screen && "(max-width:650px)"
    ).matches;
  },
  methods: {
    checkMobileNavigation() {
      this.mobileNavigation = window.matchMedia(
        screen && "(max-width:550px)"
      ).matches;
    },
  },
};
</script>

<style lang="scss">
nav {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 3rem;
  padding: 1rem;
  border: 3px solid var(--background-color);
  background-color: var(--primary-color);
  .burgermenu {
    color: var(--background-color);
  }
  .overhead {
    display: flex;
    flex-direction: column;
  }
}
a {
  text-decoration: none;
  color: var(--background-color);
  margin: 0 2rem;
  font-size: 1.5rem;
  transition: 3s;
}
a:visited {
  text-decoration: none;
}
a:hover {
  color: var(--white-color);
  transition: 3s;
}

@media screen and (max-width: 700px) {
  a {
    margin: 0 0.5rem;
  }
}
</style>
