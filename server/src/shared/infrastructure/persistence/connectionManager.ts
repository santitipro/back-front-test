export interface DBConnection<T> {
  client(): T
  connect(): void
  destroy(): void
}
