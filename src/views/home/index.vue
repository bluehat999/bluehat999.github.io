<template>
  <div class='page'>
    <cIntro></cIntro>
    <cCatalog v-if="pullDown"></cCatalog>
  </div>
</template>

<script type='text/ecmascript-6'>
import cIntro from 'components/c-intro/index'
import cCatalog from 'components/c-catalog/index'

export default {
  data () {
    return {
      pullDown:false
    }
  },
  props: {
    name: String
  },
  components: {
    cIntro,
    cCatalog
  },
  mounted () {
    console.warn('home mouted')
  }
}
</script>

<style scoped lang='scss'>
</style>
