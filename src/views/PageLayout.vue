<template>

    <PageHeader/>
    <router-view/>
    <PageFooter/>
  
</template>

<script>

  import PageHeader from '../components/header/PageHeader.vue'
  import PageFooter from '../components/footer/PageFooter.vue'

  export default {
    name: 'PageLayout',
    components: {
        PageHeader,
        PageFooter
    }
  }

</script>