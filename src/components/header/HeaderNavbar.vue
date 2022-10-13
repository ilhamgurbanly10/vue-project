<template>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <router-link to="/greeting">Greeting</router-link>
    </nav>
  
    <h1>{{ $t('titles.welcome', {company: 'Lokalise'}) }}</h1>
  
    

    <LocaleSwitcher/>
  
</template>

<script>

  import LocaleSwitcher from '../LocaleSwitcher.vue'

  export default {
    name: 'HeaderNavbar',
    components: {
      LocaleSwitcher
    }
  }

</script>