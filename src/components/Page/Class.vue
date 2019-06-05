<template>
  <div>
      <v-header></v-header>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from '../HomeFooter'
import header from '../header/header'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
        'v-footer':footer,
        'v-header':header
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='' scoped>

</style>