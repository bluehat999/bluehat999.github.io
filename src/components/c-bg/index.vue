<template>
  <div class="bg" :style="{'background-image': image?image:'#336633'}">
    <div class="change" @click="change()" v-if="showChange">
      change
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import bgImage from './assets'
export default {
  name:"c-bg",
  data() {
    return {
      image:null,
      name1:"name"
    }
  },
  props:{
    name:{
        type:String,
        default:""
    },
    showChange:{
        type:Boolean,
        default:false
    },
  },
  methods:{
    change(){
      let index = Math.floor(Math.random() * bgImage.length) ;
      this.image = bgImage[index]
      console.warn(index,this.$data)
    }
  },
  components: {

  },
  mounted(){
    // console.warn(bgImage)
    this.change()
  }
}
</script>

<style scoped lang="scss">
.bg{
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1000;
    background-size:100% 100%;
    & .change{
      position:fixed;
      top:1em;
      right:0;
      color:#336633;
      transform:rotate(45deg)
    
    }
}
</style>
