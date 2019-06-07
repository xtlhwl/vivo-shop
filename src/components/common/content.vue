<template>
  <div class="container">
    <div class="container-box" v-for="(list,index) in News" :key="index" >
        <div class="container-title" >{{list.newsTitle}}</div>
        <div class="container-img" ><img :src="list.newsImg" alt=""></div>
        <div class="container-con" >{{list.newsCon}}</div>
        <div class="container-time" >{{list.newsTime}}</div>
    </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
        News:Array
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='stylus' scoped>
.container
        width 100%;
        height 100%
        padding-top 1.45rem
        padding-bottom 1.45rem
        // position absolute
       
        .container-box
            width 100%
            height 8.4rem
            background white
            border-bottom: 1px dotted #CCCCCC;
        .container-title
            color: #505b63
            width: 95%
            margin: auto
            text-align: left
            font-size: 0.5rem
            height: 1.5rem
            line-height: 1.5rem
        .container-img
            width 95%
            height 4.3rem
            margin auto
            img 
                width 100%
                height 100%
        .container-con
            width 95%;
            margin auto;
            line-height .5rem
            padding-top .3rem
            color #696969
            text-align justify
            font-size .3rem
        .container-time
            width: 95%;
            margin: auto;
            padding-top: .2rem
            font-size .3rem
            color #696969

</style>