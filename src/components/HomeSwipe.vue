<template>
  <div class="home-swiper">
      <mt-swipe :auto="4000" >
            <mt-swipe-item v-for="(list,index) in swipeImg" :key="index">
                <img :src="list.img" alt="index">
            </mt-swipe-item>
      </mt-swipe>
  </div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
  export default {
    data () {
      return {
          swipeImg:[
              {
                  img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180418/20180418104131830678_original.jpg"
              },
              {
                  img:"https://shopstatic.vivo.com.cn/vivoshop/commodity/20180430/20180430232146894398_original.jpg"
              }
          ]
      };
    },
    components: {
        'mt-swipe':Swipe,
        'mt-swipe-item':SwipeItem
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='stylus' scoped>
    .home-swiper
        height 6.5rem;
        margin-top 1px;
        img
            width 100%;
            height 6.5rem
</style>