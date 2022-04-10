<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link>
    <router-link :to="{ name: 'about' }">Über mich</router-link>
    <router-link :to="{ name: 'offer' }">Leistungen</router-link>
    <router-link :to="{ name: 'contact' }">Kontakt</router-link>
  </nav>
</template>

<style lang="scss">
nav {
  padding: 1rem;
  border: 3px solid var(--background-color);
  background-color: var(--primary-color);
}
a {
  text-decoration: none;
  color: var(--background-color);
  margin: 0 2rem;
  font-size: 1.5rem;
}
a:visited {
  text-decoration: none;
}
</style>
