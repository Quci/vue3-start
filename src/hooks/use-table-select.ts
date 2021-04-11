import {ref, Ref, toRefs, reactive, computed, SetupContext} from 'vue'

interface Data {
    [key: string]: unknown
}

interface UseTableSelect {
    visibleComputed: Object,
    close: () => void
}

export default function useTableSelect(props: Data, context: SetupContext) : UseTableSelect{
    const {emit} = context
    const visibleComputed = computed({
        get: () => props.visible,
        set: val => {
            emit('update:visible', val)
        }
    })
    const close = () => {
        visibleComputed.value = !visibleComputed.value
        return 123
    }

    return {
        visibleComputed,
        close
    }
}
