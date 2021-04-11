interface PortService {
    [key: string]: Promise<{}>
}

const mockFetch = async (data = {}, delay = 700) => new Promise(resolve => {
    setTimeout(resolve, delay, data)
})

export const portService: PortService = {
    searchBd(page: number, size: number) {
        const res = {
            success: true,
            message: '',
            data: Array(size).fill(0).map((val,index) => ({
                index: page * size + index + 1,
                id: `zzw${page * size + index + 1}`,
                total: 1002
            }))
        }
        return mockFetch(res)
    }
}
