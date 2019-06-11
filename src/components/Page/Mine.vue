<template>
  <div class="my">
    <m-header name="个人中心"></m-header>
    <m-MyContainer></m-MyContainer>
    <m-footer></m-footer>
  </div>
</template>

<script>
import footer from '../HomeFooter'
import header from '../header/Theader.vue'
import MyContainer from '../common/MyContainer'
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
        'm-footer':footer,
        'm-header':header,
        'm-MyContainer':MyContainer
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='stylus' scoped>
   .myHeader{
        height: 1.3rem;
        line-height: 1.3rem;
        font-size: 0.35rem;
        padding-left: 0.3rem;
        background: white;
        font-size: 0.41rem;
   }
   
   .myMain{
       height: 100%;
       background: white;
       margin-top: 10px;
       width: 100%;
       
   }
    .MyBox{
        width: 100%;
        height: 110px;
        background: white;
    }
    .myOrder,.myCollection{
        height: 50%;
    }
   .Main, .Order{
       height: 100%;
       /* background: red; */
       margin-left: 10px;
       border-bottom: 1px solid #cccccc;
   }
   .myMain img{
       display: block;
       width: 60px;
       height: 60px;
       padding: 7px;
       float: left;
   }
    .myMain p{
        line-height: 75px;
    }
  
   .Order i , .Order p{
       display: block;
       line-height: 55px;
       float: left;
       padding-left: 10px;
   }

</style>