import { ref, Ref, reactive } from '@vue/composition-api'

export function usePaging () {
  const conditions = reactive({
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
