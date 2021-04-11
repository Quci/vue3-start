<template>
  <div>
    <Dsd></Dsd>
    <label>
      <input type="text" v-model="foo" @input="handleInput">
      {{ foo }}
    </label>
  </div>
</template>

<script>
import {customRef} from 'vue'
import Dsd from "@/components/Dsd";

function useDebouncedRef(value, delay = 2000) {
  let timeout
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          console.log(111);
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

// function useDebouncedRef(value, delay) {
//     return customRef((track, trigger) => {
//         return {
//             get() {
//                 track();
//                 console.log('get value: ', value);
//                 return value;
//             },
//             set(newValue, oldValue) {
//                 console.log('newValue', newValue);
//                 value = newValue;
//                 trigger();
//             }
//         }
//     })
// }

export default {
  name: "CustomRef",
  components: {Dsd},
  setup() {
    const foo = useDebouncedRef('');

    function handleInput(val) {
      console.log('222', val);
    }

    return {
      foo,
      handleInput
    }
  }
}

</script>

<style scoped lang='scss'>

</style>
