import { LightningElement,track,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountListForSearch';
export default class W_P_AccountSearch extends LightningElement {
     
    searchKeys;

   @wire(getAccountList,{searchKey:'$searchKeys'}) accounts;

//    handleChange(event){
//        this.searchKey=event.target.value;

//    }
searchHandle(){
    this.searchKeys = this.template.querySelector('.searchKeyButton')?.value||'';
   }

}