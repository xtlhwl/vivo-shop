<template>
  <div class="HomeList">
    <ul>
        <li >
            <div>
                <img v-lazy="/static/img/xuangou.jpg" alt="选购">
            </div>
        </li>
        <li >
            <div>
                <img v-lazy="/static/img/peijian.jpg" alt="选购">
            </div>
        </li>
        <li >
            <div @click="btn">
                <img v-lazy="/static/img/pingbao.jpg" alt="选购">
            </div>
        </li>
        <li >
            <div @click="btn">
                <img v-lazy="/static/img/dingzhi.jpg" alt="选购">
            </div>
        </li>
    </ul>
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

    methods: {
        btn(){
            alert("选择碎屏宝or定制手机")
        },
    },

    watch: {}

  }

</script>
<style lang="stylus" scoped>
//rem 
.HomeList
    width 100%;
    height 2rem;
    background white;
    border-bottom 1px solid #f4f4f4;
    display: flex;
    justify-content: center;
    flex-direction: column;
    li
        width: 25%;
        height 100%;
        float: left;
        margin: auto;
        div
            width: 1.58rem;
            height: 1.59rem;
            margin: auto;
        img 
            display: block;
            width: 100%;
            height: 100%
</style>
