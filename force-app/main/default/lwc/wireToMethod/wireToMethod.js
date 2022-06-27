import { LightningElement,wire} from 'lwc';
import getContactList from '@salesforce/apex/ContactListSearchController.getContactList';
export default class WireToMethod extends LightningElement {
    searchKey;
    contacts;
    
     error;

    @wire(getContactList,{searchKey:'$searchKey'})

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
     this.searchKey = this.template.querySelector('.searchKeyBtn')?.value||''; //pass class name or lightning input here
    }

    handleChange(event){
        this.searchKey=event.target.value;
    }
}