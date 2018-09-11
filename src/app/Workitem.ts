export class Workitem{
    
    constructor(public identifier:number,
                public title:string,
                public Status:string,
                public GBU:string,
                public Organisation:string,
                public Project:string,
                public Ownedby:string,
                public DeliveryTeamInCharge:string){}
}