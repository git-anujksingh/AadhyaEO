export class BookYourEvent {
    uid?: string;
    name?: string;
    referenceId?: string;
    status?: Status.Active;
    createdDate?: Date;
  }
  
  export enum Status {
    Active = 'Active',
    InActive = 'InActive',
  }
  
  