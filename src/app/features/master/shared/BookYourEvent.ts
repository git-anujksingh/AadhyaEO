export class BookYourEvent {
    uid?: string;
    hostName?: string;
    contact?: number;
    eventType?: string;
    attendees?: number;
    eventStage?: string;
    catering?: boolean;
    eventDescription? : string;
    email?: string;
    createdDate?: Date;
  }
  
  export enum Status {
    Active = 'Active',
    InActive = 'InActive',
  }
  
  