<template>

  <header>
    <div>I am Header</div>
    <HeaderNavbar/>
  </header>
  
</template>

<script>

  import HeaderNavbar from './HeaderNavbar.vue'

  export default {
    name: 'PageHeader',
    components: {
      HeaderNavbar
    }
  }

</script>