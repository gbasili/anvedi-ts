export interface IDomainEvent {
    occurredAt: Date
    args: any
    handle: (e: this) => void
}