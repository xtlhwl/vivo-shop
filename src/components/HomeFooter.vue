<template>
  <div class="bottom">
    <ul class="bottom-ul">
      <router-link to="/" tag="li">
        <div class="index">
            <!-- <i class="iconfont icon-shouye_xuanzhong" style="color:#179dfe" ></i> -->
            <i class="iconfont icon-shouye2"></i>
        </div>
        <span>首页</span>
    </router-link>
    <router-link to="/class" tag="li">
        <div class="index">
            <!-- <i class="iconfont icon-fenleixuanzhong" style="color:#179dfe" ></i> -->
            <i class="iconfont icon-fenlei-copy"></i>
        </div>
        <span>分类</span>
    </router-link>
    <router-link to="/trends" tag="li">
      <div class="index">
            <!-- <i class="iconfont icon-dongtaixuanzhong" style="color:#179dfe" ></i> -->
            <i class="iconfont icon-dongtai"></i>
        </div>
        <span>动态</span>
    </router-link>
    <router-link to="/mine" tag="li" >
      <div class="index">
            <!-- <i class="iconfont icon-wode-" style="color:#179dfe" ></i> -->
            <i class="iconfont icon-wode"></i>
        </div>
        <span>我的</span>
    </router-link>
    </ul>
  </div>
</template>
<script>

  export default {
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
  .bottom
    width: 100%;
    height: 1.65rem;
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
      // router-link:hover,router-link-active
      //   color: #25b5fe;

</style>