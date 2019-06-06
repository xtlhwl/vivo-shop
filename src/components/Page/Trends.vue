<template>
  <div>
      <t-header></t-header>
      <t-content></t-content>   
    <t-footer></t-footer>
  </div>
</template>

<script>
import footer from '../HomeFooter.vue'
import header from '../header/Theader.vue'
import content from '../common/content.vue'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
        't-footer':footer,
        't-header':header,
        't-content':content
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