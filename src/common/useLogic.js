import {ref, reactive, onMounted, watchEffect} from 'vue';

function useLogic(){
    const el = ref(null)
    const data = reactive({name:''})
    let count = ref(0);
    function handleClick() {
        count.value++;
    }

    watchEffect(() => {
        console.log('watchEffect', data.name);
        // console.log('watchEffect', count.value);
    })
    onMounted(()=>{
        data.name = 'shown'
        el.value.style.backgroundColor = 'red'
    })
    return {
        el,
        data,
        count,
        handleClick,
    }
}

export default useLogic;
