<template>
  <div>
    <v-header title="商品分类"></v-header>
    <div class="calssify-con">
        <div class="calssify-left">
            <ul class="calssify-left-ul">
                <li v-for="(item,index) in items.left" :key="index" @click="selectSort(index)" :class="{action: index===calssifyIndex}">
                   {{item.name}}
                </li>
            </ul>
        </div>
        <div class="calssify-right">
            <ul class="calssify-left-ul">
                <li>

                </li>
            </ul>
        </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>
<script>
import footer from '../HomeFooter'
import header from '../header/header'
import axios from 'axios'
  export default {
    props:[''],
    data () {
      return {
          items:[],
          calssifyIndex:''
      };
    },

    components: {
        'v-footer':footer,
        'v-header':header
    },

    computed: {},

    beforeMount() {},

    mounted() {
        
    },

    methods: {
        selectSort(index){
            this.calssifyIndex = index
        }
    },

    watch: {},
    created(){
        axios.get('/static/ceshi.json').then((res) =>{
            this.items = res.data.data.classify
            console.log(this.items)
        })
    }

  }

</script>
<style lang='stylus' scoped>
.active {
    border-left: 2px solid;
    background: #ffffff;
    color: #199cfe;
}

.calssify-con {
    display: flex;
    overflow: hidden;
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
    padding-top: 1.45rem;

    .calssify-left {
        flex: 0 0 2.9rem;
        width: 4rem;
        height: 100%;
        background: #f6f6f6;
        // border-right: 10px solid #f6f6f6;
        margin-bottom: 1.51rem;
        font-size 0.35rem

        li {
            height: 1.3rem;
            line-height: 1.3rem;
            text-align: center;
        }
    }

    .calssify-rigth {
        flex: 1;
        height: 100%;
        background: white;
        margin-bottom: 1.51rem;

        ul {
            display: flex;
            flex-wrap: wrap;

            li {
                display: flex;
                flex-direction: column;
                text-align: center;
                width: 33%;
                margin-top: 0.3rem;
                font-size: 0.34rem;
                float: left;

                img {
                    width: 1.98rem;
                    display: block;
                    margin: auto;
                }

                span {
                    color: #999;
                    line-height: 0.9rem;
                    font-size: 0.34rem;
                }
            }
        }
    }
}

</style>