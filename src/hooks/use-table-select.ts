import {ref, Ref, toRefs, reactive, computed, SetupContext} from 'vue'

interface Data {
    [key: string]: unknown
}

export default function useTableSelect(props: Data, context: SetupContext) {
    const {emit} = context
    const visibleComputed = computed({
        get: () => props.visible,
        set: val => {
            emit('update:visible', val)
        }
    })
    const close = () => {
        visibleComputed.value = !visibleComputed.value
    }

    return {
        visibleComputed,
        close
    }
}
