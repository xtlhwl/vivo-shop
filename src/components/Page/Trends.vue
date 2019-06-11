<template>
  <div>
      <t-header name="咨询动态"></t-header>
      <t-content :News="News" ></t-content>   
    <t-footer></t-footer>
  </div>
</template>

<script>
import footer from '../HomeFooter.vue'
import header from '../header/Theader.vue'
import content from '../common/content.vue'
import  axios from 'axios'
  export default {
    data () {
      return {
          News:[]
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

    methods: {
        
    },

    watch: {},
    created(){
        axios.get('/static/ceshi.json').then((res) =>{
            this.News = res.data.data.news
        })
    }

  }

</script>
<style lang='' scoped>

</style>