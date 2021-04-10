<template>
  <div>
    <slot name="header" :gift="gift">
      <h2>sssshhhh</h2>
    </slot>
    <p>visible={{visibleComputed}}</p>
    <button @click="close">click me to change visible state</button>
  </div>
</template>

<script>
import useTableSelect from '@/hooks/use-table-select'
import {ref, toRefs, reactive} from 'vue'

export default {
  name: "table-select-bd.vue",
  props: {
    visible: Boolean,
    defaultRows: Array,
  },
  setup(props, context) {
    const {visibleComputed, close } = useTableSelect(props, context)

    const gift = reactive([1,2,3,4,5])
    console.log(context.slots);
    return {
      visibleComputed,
      close,
      gift
    }
  },
  methods: {}
}
</script>

<style scoped lang='scss'>

</style>
