import { LightningElement,track } from 'lwc';

export default class AccManagerLDSform extends LightningElement {

    @track recordId;
    
    successHandler(event){
        this.recordId = event.detail.id;
        console.log('record id ------------------> '+this.recordId);
    }
   

}