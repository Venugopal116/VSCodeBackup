import { LightningElement,wire } from 'lwc';
import ACCOUNTRECORDS from '@salesforce/apex/AccountController.getAccounts';

export default class AccountList extends LightningElement {
    accountId;

    // columns = [
    //     { label: 'Name', fieldName: 'name' },
    //     { label: 'Industry', fieldName: 'Industry', type: 'email' },
    //     { label: 'Phone', fieldName: 'Phone', type: 'phone' },
          
    // ]; 

  @wire (ACCOUNTRECORDS)  accounts;

  handleAccountClick(event){
    event.preventDefault();
    this.accountId=event.target.dataset.accountid;
    // this.accountId=event.target.value;
  
    console.log('=============accid.......',this.accountId);

  }

}