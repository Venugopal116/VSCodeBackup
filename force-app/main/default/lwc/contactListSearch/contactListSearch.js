import { LightningElement, wire,track } from 'lwc';
import getContactList from '@salesforce/apex/ContactListSearchController.getContactList';
export default class ContactListSearch extends LightningElement {
    @track searchKey;
    @track contacts;
    @track error;
   @track searchResult;
    
    @wire(getContactList,{name:'$searchResult'}) //method 2 '$searchKey'

   // @wire(getContactList) contacts; //method 1
  
  wiredContact ({error,data}){
      if(data){
         this.contacts=data;
         console.log('conlist---------->  '+this.contacts);
         console.log(JSON.stringify(this.contacts));
      }
      if(error){
        this.error=error; 
         console.log('Errorrrrrrrrrrrr------------>  '+error);
      }
  }
  searchHandle(){
      this.searchResult = this.template.querySelector('lightning-input')?.value ||'';
      console.log('search key-------->  '+this.searchResult);
  }
    //contact come up with both data and error
    //contacts.data
    //contacts.error
    /*eslint.disable no-console */
    handleChange(event){
        event.preventDefault();
        console.log('value......>'+event.target.value);
       console.log('conlist---------->  '+this.contacts);
    }
}