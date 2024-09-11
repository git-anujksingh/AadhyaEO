export class BookYourEvent {
    uid?: string;
    eventType?: string;
    attendees?: number;
    eventStage?: string;
    catering?: boolean;
    eventDescription? : string;
    createdDate?: Date;
  }
  
  export enum Status {
    Active = 'Active',
    InActive = 'InActive',
  }
  
  