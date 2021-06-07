'use strict'
import { IDomainEvent } from "../domain/events/i-domain-event";

export class DomainEventDispatcherSimple {

    public static Dispatch(domainEvent: IDomainEvent): void {
        try {
            domainEvent.handle(domainEvent);
        }
        catch(e){
            
        }
    }
}
