import { IDomainEvent } from "../../anvedi/domain/events/i-domain-event";

export class PermissionCreatedEvent implements IDomainEvent {
  
    public occurredAt: Date
    readonly args: any
    readonly handle: (e: this) => void;

    constructor (args: any | any) {
        this.occurredAt = new Date()
        this.args = args
        
        this.handle = (e: this) => {
          console.log(`Permission created at ${e.occurredAt}. Id: ${e.args.Id}`)
        }
    }

}

  