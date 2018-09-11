import { Workitem } from "./Workitem";
import { Injectable } from "@angular/core";

@Injectable()
export class WorkitemService{

    workitems: Workitem[] = [];

    constructor(){
        let w1:Workitem = new Workitem(737583,"Synchronisation temps réel des WAPITI","In Design","GBU france","FR Equipe LDC Casablanca","FR LDC Nantes - CNP","Abdellatif SAHLALI","FR Equipe LDC Casablanca");
        let w2:Workitem = new Workitem(851912,"Evolution programme cooptation RH","On Hold","GBU france","FR Equipe LDC Casablanca","FR LDC Nantes - CNP","Abdellatif SAHLALI","FR Equipe LDC Casablanca");
        let w3:Workitem = new Workitem(677919,"Monitoring des logs de la synchro","In Production","GBU france","FR Equipe LDC Casablanca","FR LDC Nantes - CNP","Abdellatif SAHLALI","FR Equipe LDC Casablanca");
        this.workitems.push(w1);
        this.workitems.push(w2);
        this.workitems.push(w3);
    }

    getWorkitem(){
        return this.workitems;
    }
}