import { LightningElement,api } from 'lwc';

export default class ChildSalesforceCourse extends LightningElement {


    @api cohortName; // Property= variable

    onPassDataToParentComponent(){
        // custom event to pass data from child component to parent comp.

        const sendMsg = new CustomEvent('messagefromchild',// onclick gibi sendMsg isimli CustomEvent()tanımladık.
        {
            detail:'hello I am your child' // mesajın içeriği
        }

        );
       
        this.dispatchEvent(sendMsg); // dispatchEvent(sendMsg) ile yayınladık parente sevkettik.
    }
}

// child den parente veri göndereceğiz.