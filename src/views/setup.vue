<template>
    <div></div>
</template>

<script>
import {ref, reactive} from 'vue';

export default {
    props: {
        name: {
            type: String,
            default: 'Neo',
        },
    },
    setup(props) {
        const count = ref(0);
        const object = reactive({foo: 'bar'});
        console.log(count);
        console.log(props);
        console.log(object);

        return {
            count,
            object,
        }

    },


}
</script>
