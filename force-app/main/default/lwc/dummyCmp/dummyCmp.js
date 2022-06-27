import { LightningElement,wire,track } from 'lwc';
import ACCOUNTS from '@salesforce/apex/AccountController.getAccountList';
import CONLISTDATA from '@salesforce/apex/ContactLwcController_G.getContacts';
import getContactList from '@salesforce/apex/ContactController.getContactList';
import findContacts from '@salesforce/apex/ContactController.findContacts';
export default class DummyCmp extends LightningElement {

   //***************************** wire to property ********************************

    @wire (ACCOUNTS) accs;   // reg: wire to property

 //*********************************// wire to Method //************************************************ */
    Contacts;                   //reg: wire to Method  //Global level variabels(2),need to declare at start
    error;                      //reg: wire to Method     

    @wire(CONLISTDATA)          //reg: wire to Method (Function)

    wiredContacts({error,data}){
        if(data){

            this.contacts=data;
            console.JSON.stringify('Contacts data-------------> ',this.contacts);
        }
        if(error){

            this.error=error;
            console.log('-------error is------------> ',this.error);
        }
    }

 //-**********************************// wire to Method- with passing parameter //************************ */

    ContactsList;   //reg: wire to Method with passing parameter   //Global level variabels(3),need to declare at start
    err;      //reg: wire to Method with passing parameter
    searchKey;  //reg: wire to method with passing parameter

   @wire (CONLISTDATA,{searhKey : '$searchkey'})    // reg: wire to method (Function) --->passing Parameter

   wiredConlist({error,data}){
    if(data){
        this.ContactsList=data;
        console.JSON.stringify('Contacts data-------------> ',this.ContactsList);
    }
    if(error){
        this.err=error;
        console.log('-------error is------------> ',this.err);
    }
   }

   searchHandleChange(event){   // to handle input changed
    this.searhKey=event.target.value;
   }

   searchClickhandler(){  // to handle click action
    this.searchKey=this.template.querySelector('.srchInput');
   }

    //************************ Imperative Method ********************************************** */

    @track contacts;
    @track errorr;

    handleLoad() {

        getContactList()       
            .then(result => {
                this.contacts = result;
            })
            .catch(error => {
                this.error = error;
            });
    }
    //************************ Imperative Method with (passing Parameter)  ********************************************** */

    serchKey='';
    contsList;
    error2;

    handleinputChange(){
        this.serchKey=this.template.querySelector('.srchInput');
    }
    handleClick(){
        findContacts({searchKey : this.serchKey})
        .then(result=>{
            if(result){
                this.contsList=result;
                this.error2=undefined;
            }
        })
        .catch(error=>{
            if(error){
                this.error2=error;
                this.contsList=undefined;
            }
        })
    }


}