type BaseRepository = {
  fetchItem?: (id: number) => Promise<any>
  saveItem?: (params: any) => void
  clearItem?: () => void
  fetchItems?: (params?: any) => Promise<any>
  saveItems?: (params?: any) => void
  clearItems?: () => void
}

export default BaseRepository
