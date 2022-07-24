import { LightningElement ,wire,track} from 'lwc';
import getAccountList from '@salesforce/apex/AccountController.getAccountList';
import getAccountList2 from '@salesforce/apex/AccountController.getAccountListForSearch2';
export default class WireToProperty extends LightningElement {
     @track accSearch ='';

    
    @wire(getAccountList) accounts; 

    @wire(getAccountList2, {accSearch : '$accSearch'}) accounts2;


    inputHandle(event){
        const searchkey=event.target.value;
        this.accSearch=searchkey;
        console.log('button clicked ,accasearch value is========      ',this.accSearch);
        console.log('acc2 data========      ',this.accounts2);
        console.log('local search key========      ',searchkey);
    }
}