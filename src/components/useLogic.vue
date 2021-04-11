<template>
    <div>{{data.name}}</div>
</template>

<script>
// import {ref} from 'vue'
import useLogic from "@/common/useLogic";
export default {
    name: "useLogic",
    setup() {
        const {el, data} = useLogic();
        console.log('data', data);
        return {
            el,
            data
        }
    },
}
</script>

<style scoped lang='scss'>

</style>
