interface Model<T> {
  key: string
  set(val: T): void
  get(parse?: boolean): T
  remove(): void
  update(cb: (arg: T) => T, defaultValue?: object): void
}

// 本地存储
const storageMap = new Map()

// 管理本地存储的键值数据
export default function createStorageModel<T>(key: string, storage = localStorage): Model<T> {
  // 相同key返回单例
  if (storageMap.has(key)) {
    return storageMap.get(key)
  }
  const model = {
    key,
    set(val: T) {
      storage.setItem(this.key, JSON.stringify(val || ''))
    },
    get(): T {
      const val = storage.getItem(this.key)
      return val ? JSON.parse(val) : ''
    },
    remove() {
      storage.removeItem(this.key)
    },
    // 针对保存长json的数据进行更新，在cb中对val进行更新
    update(cb: (arg: T) => T, defaultValue = {}) {
      const val = (this.get() || defaultValue) as T
      const updated = cb(val)
      this.set(updated)
      return updated
    }
  }
  storageMap.set(key, model)
  return model
}

// export const svgModal = createStorageModel<string[]>('test_modal')