export class Workitem{
    
    constructor(public identifier:number,
                public summary:string,
                public status:string,
                public gbu:string,
                public organisation:string,
                public project:string,
                public ownedby:string,
                public description:string,
                public deliveryTeamInCharge:string){}
}