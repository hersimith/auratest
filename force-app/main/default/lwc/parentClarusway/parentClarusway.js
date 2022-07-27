import { LightningElement } from 'lwc';

export default class ParentClarusway extends LightningElement {

    childCohortNum=1;
    childCohortName;

    cohortlist;
    /* HTML de butona tıklandığında (onclick) 
    assignChildCohortNameHandler() metodu çalışacak*/
         
        assignChildCohortNameHandler(){
            /*  butona her tıklandığında   1 artıracak 
            */
            this.childCohortName='Cohort ' + this.childCohortNum;
            this.childCohortNum+=1;

        }
        ifMessageFromChild(event){
            this.cohortlist=event.detail; // child.js de olan mesaj 
        }
               
    }
