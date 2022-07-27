import { LightningElement } from 'lwc';

export default class Team4_hello extends LightningElement {

   message= "Eğitim Ailede Başlar";

   inputNameHandler(event){
    
    this.message=event.target.value;

   }
    }