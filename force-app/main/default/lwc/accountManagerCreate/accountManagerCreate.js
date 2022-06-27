import { LightningElement,track,wire } from 'lwc';
import { createRecord,getRecord } from "lightning/uiRecordApi";
                /// getRecord is a wire method,so we use wire here
const fieldArray=['Account.Name','Account.Phone','Account.Website'];

export default class AccountManagerCreate extends LightningElement {   //LDS   ??read Comments
    @track accountName;
    @track accountPhone;
    @track accountWebsite;

    @track recordId; //when ever account ceated,it needs to capture record id and view the record view form with record details

    @wire(getRecord,{recordId:'$recordId',fields : fieldArray})  
    accountRecord; 
    //assigning wire service respnse to this variable( accountRecord )  
    // we need to pass field array in fields key,then  only it shows fields in Ui    
    //if we use this.recordId instead of '$recordId',it makes wire service non reactive,
    //that means in future record id changes then also this wire service need to get data from salesforce server and give new data.
    //for that reason we using dollar symbol '$recordId',it makes wire service reactive always when changes done.
    accountNameChangeHandler(event){
        this.accountName = event.target.value;
    }

    accountPhoneChangeHandler(event){
        this.accountPhone = event.target.value;
    }

    accountWebsiteChangeHandler(event){
        this.accountWebsite = event.target.value;
    }

    createAccount(){
        const fields = {'Name' : this.accountName, 'Phone' : this.accountPhone, 'Website': this.accountWebsite};
        const recordInput = {apiName : 'Account', fields};

        createRecord(recordInput).then(response => {
            console.log('Account has been created : ', response.id);
            this.recordId=response.id; //assign created recId to variable recordId for view form
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
    }

    get retAccName(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Name.value; 
        }
        return undefined; 
    }
    get retAccPhone(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Phone.value; 
        }
        return undefined; 
    }
    get retAccSite(){
        if(this.accountRecord.data){
            return this.accountRecord.data.fields.Website.value; 
        }
        return undefined; 
    }
}