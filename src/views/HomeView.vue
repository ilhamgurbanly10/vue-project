<template>
  <div class="home yellow-box">
    Home Page   
  <font-awesome-icon icon="fa-solid fa-user-secret" />
  <font-awesome-icon icon="fa-brands fa-twitter" />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  }
}
</script>


<style lang="scss">

  $yellow: yellow;

  .yellow-box {
    color: $yellow;
  }

</style>
