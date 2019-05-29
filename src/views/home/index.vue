<template>
  <div class="page">
    <c-bg>
    </c-bg>
    home,??????
  </div>
</template>

<script type="text/ecmascript-6">
import cBg from 'components/c-bg'
export default {
  data() {
    return {

    }
  },
  props:{
   name:String
  },
  components: {
    cBg
  },
  mounted(){
    console.warn("home mouted")
  }
}
</script>

<style scoped lang="scss">
</style>
