<template>
  <div class="Home">
    <div class="Homeheader"><i class="iconfont icon-VIVO"></i></div>
    <div class="official"><img src="/static/img/official.png" alt="图片" style="width:100%;height:100% "></div>
    <Home-Swipe ></Home-Swipe>
    <Home-List></Home-List>
    <Home-Container :items=items ></Home-Container>
    <Home-Footer></Home-Footer>
  </div>
</template>
<script>

import HomeList from './HomeList.vue'
import HomeSwipe from './HomeSwipe.vue'
import HomeFooter from '../HomeFooter.vue'
import HomeContainer from './HomeContainer.vue'
import axios from 'axios'

export default {
  data () {
    return {
      items:[]
    }
  },
  components: {
    HomeList,
    HomeSwipe,
    HomeFooter,
    HomeContainer, 
  },
  methods:{
    getData:function(){
      axios.get("/static/ceshi.json").then((res) =>{
        
        this.items = res.data.data.home
        console.log(this.items)
      })
    }
  },
  created(){
    this.getData()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .Home{
    border-bottom: 10px;
  }
  .Homeheader i{
    font-size: 0.55rem;
  }
   .Homeheader{
     position: fixed;
     width: 100%;
     top: 0;
     z-index: 1;
     height: 1.3rem;
     line-height: 1.3rem;
     font-size: 0.35rem;
     padding-left: 0.3rem;
     background: white;
   }
   .swipe{
     height: 6.5rem;
     margin-top: 1px;
   }
   .swipe img{
      width: 100%;
      height: 6.5rem;
  }
 
    .official{
      width: 100%;
      height: 0.8rem;
      background: white;
      margin-top: 1.33rem;
    }
</style>
