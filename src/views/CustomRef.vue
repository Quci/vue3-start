<template>
    <div>
        <label>
            <input type="text" v-model="foo">
        </label>
    </div>
</template>

<script>
import {customRef} from 'vue'

function useDebouncedRef(value, delay) {
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                console.log('get value: ', value);
                return value;
            },
            set(newValue, oldValue) {
                console.log('newValue', newValue);
                value = newValue;
                trigger();
            }
        }
    })
}

export default {
    name: "CustomRef",
    setup() {
        const foo = useDebouncedRef('c.c');
        return {
            foo
        }
    },
}

</script>

<style scoped lang='scss'>

</style>
