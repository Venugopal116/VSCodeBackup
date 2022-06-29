import { LightningElement,wire,api } from 'lwc';
import CONTACTRECORDLISTByAccountId from '@salesforce/apex/ContactController.getContactsByAccountId';

export default class ContactList extends LightningElement {

    @api accountId; 

    columns = [
        { label: 'Name', fieldName: 'name' },
        { label: 'Email', fieldName: 'Email', type: 'email' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
          
    ]; 

@wire(CONTACTRECORDLISTByAccountId,{accountId : '$accountId'}) contacts;


}