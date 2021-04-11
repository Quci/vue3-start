import {ref, Ref, reactive, UnwrapRef} from 'vue'

export function usePaging(searchFn :() => Promise<object>) {
  const conditions: UnwrapRef<{
    page: Ref<number>,
    pageSize: Ref<number>,
    totalCount: Ref<number>
  }> = reactive({
    page: ref(1),
    pageSize: ref(10),
    totalCount: ref(1000)
  })

  const handleSizeChange = (val: number) => {
    conditions.pageSize = val
  }

  const handleCurrentChange = (val: number) => {
    conditions.page = val
  }

  return {
    conditions,
    handleSizeChange,
    handleCurrentChange
  }
}
