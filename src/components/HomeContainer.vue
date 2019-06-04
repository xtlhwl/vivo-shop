<template>
  <div class="main">
    <h2>爆款产品</h2>
    <div class="main-box">
        <ul>
            <img src="https://shopstatic.vivo.com.cn/vivoshop/commodity/20180405/20180405101609299910_original.jpg" width="100%">
            <li v-for="(item,index) in items" :key="index">
                <div class="list">
                    <div class="image">
                    <img :src="item.homeImg" >
                </div>
                <p class="name">{{item.homeName}}</p>
                <p class="nametwo">{{item.homeNametwo}}</p>
                <p class="Price">{{item.homePrice}}</p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>

  export default {
    props:{
        items:Array 
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
.main h2 {
  display: block;
  height: 1.3rem;
  background: white;
  font-size: 0.35rem;
  line-height: 1.3rem;
  padding-left: 0.3rem;
}

.main_box {
  height: 339px;
}

.list {
  height: 4.7rem;
  background: white;
  float: left;
  width: 50%;
  border-right: 1px solid #f4f4f4;
  border-top: 1px solid #f4f4f4;
}

.list span {
  display: block;
  color: red;
  padding-left: 0.5rem;
  padding-top: 0.1rem;
}

.main_box ul {
  overflow: hidden;
  margin-bottom: 1.5rem;
}

ul li {
  list-style: none;
}

.Price {
  font-size: 0.33rem;
  color: red;
  margin: auto;
  text-align: center;
  font-size: 0.3rem;
}

.name {
  width: 80%;
  height: 0.5rem;
  line-height: 0.5rem;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  margin: auto;
  font-size: 0.29rem;
  font-weight: 800;
  text-align: center;
}

.nametwo {
  height: 0.48rem;
  font-size: 0.1rem;
  text-align: center;
}

.image {
  width: 100%;
  background: white;

  img {
    width: 2.5rem;
    height: 2.3rem;
    display: block;
    margin: auto;
    margin-top: .5rem;
    margin-bottom .2rem
  }
}
</style>