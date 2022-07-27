import { LightningElement,track } from 'lwc';

export default class Createdecoratorexample extends LightningElement {
    @track contact={
    'FirstName':'Smith',
    'LastName':'Her'
  };
  textOnchangeHandler(event){
    console.log(event.target.name);
    console.log(event.target.value);
    if(event.target.name==='FirstName'){
        this.contact.FirstName=event.target.value;
    }else if(event.target.name==='LastName'){
        this.contact.LastName=event.target.value;
    }
  }
}