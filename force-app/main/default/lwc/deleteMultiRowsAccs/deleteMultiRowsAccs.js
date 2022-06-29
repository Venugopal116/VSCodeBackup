import { LightningElement,wire,track,api } from 'lwc';
// call apex methods to use
import getAccounts from '@salesforce/apex/LWCuniversalController.getAccounts';
//import DeleteSelectedAccs from '@salesforce/apex/LWCuniversalController.deleteSelectedAccs';
import deleteSelectedAccounts from '@salesforce/apex/LWCuniversalController.deleteSelectedAccounts';

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
    }
];

export default class DeleteMultiRowsAccs extends LightningElement {

    cols=columns;

    @api selectedAccountlist;
    @api errMsg;
    @api selectedRecCount; //optional

     @wire (getAccounts) accounts;

     getSelectedAccRecId(event){   // method to get selected records for delete opertaion 

        const selectedRows = event.detail.selectedRows;
        console.log('selected rows====== ',selectedRows);
        this.selectedRecCount=event.detail.selectedRows.length;  //optional

        console.log('selected rows counttttttttttttt====== ',this.selectedRecCount);

        console.log('selectedRecordID'+JSON.stringify(selectedRows));

        this.selectedAccountlist=[]; //create array and push all recid's to this array

        for (let i = 0; i<selectedRows.length; i++){
            this.selectedAccountlist.push(selectedRows[i].Id);
        }
        console.log('Array list after push',this.selectedAccountlist);
    }

    handleDelAccRecords(event){
        deleteSelectedAccounts({
            accIdDelList:this.selectedAccountlist
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
     

     
    }



