<template>
  <div class="bottom">
    <router-link to="/home" tag="li">
        <div class="index">
            <i class="iconfont icon-shouve xuanzhong" style="color:#179dfe" ></i>
            <i class="iconfont icon-showye2"></i>
        </div>
        <span>首页</span>
    </router-link>
    <router-link></router-link>
    <router-link></router-link>
    <router-link></router-link>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
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
  #bottom
    width: 100%;
    // height: 1.4rem;
    background: yellow;
    position: fixed;
    bottom: 0;
    color: #666
    background white
    .bottom-ul
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.45rem;
      li
        width 25%
        display: flex;
        justify-content: center;
        flex-direction: column;
        text-align center
        span
          font-size .3rem
        i 
          font-size .55rem
      .router-link:hover,.router-link-active
        color: #25b5fe;

</style>