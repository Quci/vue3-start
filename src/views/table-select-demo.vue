<template>
  <div>
    <tableSelectBd v-model:visible="tableBd.visible" :defaultRows="defaultRows">
      <template v-slot:header="{gift=[2,3,4], im='433xz' }">
        <p>gift={{gift}}</p>
        <p>im={{im}}</p>
        <div>v-slot 只能添加在 &lt;template&gt; 上<a :href="href" target="_blank">(只有一种例外情况)</a></div>
      </template>
    </tableSelectBd>
  </div>
</template>

<script>
import {reactive} from 'vue'
import tableSelectBd from '@/components/table-select-bd'

export default {
  name: "table-select-demo.vue",
  components: {
    tableSelectBd
  },
  setup() {
    const tableBd = reactive({visible: false})
    const defaultRows = reactive([{id: 123}, {id: 33}])
    return {
      tableBd,
      defaultRows
    }
  },
  data() {
    return {
      href: 'https://v3.cn.vuejs.org/guide/component-slots.html#%E7%8B%AC%E5%8D%A0%E9%BB%98%E8%AE%A4%E6%8F%92%E6%A7%BD%E7%9A%84%E7%BC%A9%E5%86%99%E8%AF%AD%E6%B3%95'
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
