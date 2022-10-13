<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <LocaleSwitcher/>
    </div>
</template>
  
<script>

  import LocaleSwitcher from './LocaleSwitcher.vue'

  export default {
    name: 'GreetingEveryone',
    props: {
      msg: String
    },
    components: {
      LocaleSwitcher
    }
  }
</script>
  
<style scoped>
  h3 {
      margin: 40px 0 0;
  }
  ul {
      list-style-type: none;
      padding: 0;
  }
  li {
      display: inline-block;
      margin: 0 10px;
  }
  a {
      color: #42b983;
  }
</style>
  