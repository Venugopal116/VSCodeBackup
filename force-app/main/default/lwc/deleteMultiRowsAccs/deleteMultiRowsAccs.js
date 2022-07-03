import { LightningElement,wire,track,api } from 'lwc';
// call apex methods to use
import getAccounts from '@salesforce/apex/LWCuniversalController.getAccounts';
//import DeleteSelectedAccs from '@salesforce/apex/LWCuniversalController.deleteSelectedAccs';
import deleteSelectedAccounts from '@salesforce/apex/LWCuniversalController.deleteSelectedAccounts';

import getContactsByAccountId from '@salesforce/apex/ContactController.getContactsByAccountId';
import AccName from '@salesforce/schema/Account.Name';


// importing to refresh the apex after delete the records.
import {refreshApex} from '@salesforce/apex';

// importing to show toast notifictions
import {ShowToastEvent} from 'lightning/platformShowToastEvent';

// datatable columns

const columns = [ 
    {
        label: 'Name',
        fieldName: 'Name'
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone'
    }, {
        label: 'Industry',
        fieldName: 'Industry',
        
    }, {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    },
     
];

const columnsContact = [ 
    {
        label: 'First Name',
        fieldName: 'FirstName'
    }, {
        label: 'Last Name',
        fieldName: 'LastName',
    }, {
        label: 'Phone',
        fieldName: 'Phone',
        type: 'phone'
    }, {
        label: 'Email',
        fieldName: 'Email',
        type: 'email'
    },{
        label: 'AccountName',
        fieldName: 'Account_Name__c',
    },
];

export default class DeleteMultiRowsAccs extends LightningElement {

    cols=columns;
    ContactCols=columnsContact;

    accConRecs;
    errr;


    @api selectedAccountIdlist;
    @api errMsg;
    @api selectedRecCount; //optional
   // @api myId='0015i000005LpA5AAK';

     @wire (getAccounts) accounts;

    // @wire (getContactsByAccountId,{selectedAccountIdlist:'$selectedAccountIdlist'}) accRelatedContacts; 
     


     getSelectedAccRecId(event){   // method to get selected records for delete opertaion 

        const selectedRows = event.detail.selectedRows;
        console.log('selected rows====== ',selectedRows);
        this.selectedRecCount=event.detail.selectedRows.length;  //optional

        console.log('selected rows counttttttttttttt====== ',this.selectedRecCount);

        console.log('selectedRecordID'+JSON.stringify(selectedRows));

        this.selectedAccountIdlist=[]; //create array and push all acc recid's to this array

        for (let i = 0; i<selectedRows.length; i++){
            this.selectedAccountIdlist.push(selectedRows[i].Id);
        }
        console.log('Array list after push',this.selectedAccountIdlist);
    }

    handleDelAccRecords(event){
        deleteSelectedAccounts({
            accIdDelList:this.selectedAccountIdlist
        })
        .then(()=> {  //result we didnt use here,bcoz not assigning to any
           
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: this.selectedRecCount +'  Records Deleted Successfully!!',
                    variant: 'success'
                })
            );

            return refreshApex(this.accounts);  // wire property 'accounts'
        })
        .catch(error => {
            this.errMsg = error;
           console.log('error========= ',JSON.stringify(this.errMsg));

           this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error',
                message: JSON.stringify(this.errMsg),
                variant: 'error'
            })
        );
        
        });

    }
    //------------------------------------
    accRelContactBtnHandler(){

        getContactsByAccountId({
            selectedAccountIdlist:this.selectedAccountIdlist
        })
        .then((result)=> {       
             this.accConRecs=result;
             console,log('condata---------',this.accConRecs);
            return refreshApex(this.accRelatedContacts); 
        })
        .catch(error => {
            this.errr = error;
           console.log('error========= ',JSON.stringify(this.errr));
        
        });

        this.filterSelectedRecord();

    }
    //-------------------------------------------------------------

    // accRelContactBtnHandler(){
    //     console.log('-------------btnhandlerdata--------- ',JSON.stringify(this.accRelatedContacts));
        
    //     return refreshApex(this.accRelatedContacts);

    // }

    filterSelectedRecord(){
        value  = accounts;
        console.log('value'+value);


    }
     

     
    }



