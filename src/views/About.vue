<template>
    <div>
        <div ref="el">{{ data.name }}</div>
        <button @click="handleClick">click</button>
        <div>{{count}}</div>
    </div>
</template>
<script>
import useLogic from "@/common/useLogic";

export default {
    name: 'some component',
    setup() {
        const {data, el, count, handleClick} = useLogic()

        return {
            data,
            el,
            count,
            handleClick
        }
    }
}
</script>

<style scoped lang='scss'>

</style>
