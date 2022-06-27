import { LightningElement ,track, wire,api} from 'lwc';
import GET_EMPLOYEELIST from '@salesforce/apex/employeeObjController_venu.getEmployeeList';
import Emp_Insert from '@salesforce/apex/employeeObjController_venu.insertEmp';
import DisplyEMP_Delete from '@salesforce/apex/employeeObjController_venu.displayEmpRecordForDelete';
import GetEmpsForEditSave from '@salesforce/apex/employeeObjController_venu.getEmpforEditSave'; 
import { deleteRecord } from 'lightning/uiRecordApi';
import { updateRecord } from 'lightning/uiRecordApi';

import {ShowToastEvent} from 'lightning/platformShowToastEvent';

import {refreshApex} from '@salesforce/apex';

import EmpPic from '@salesforce/resourceUrl/CoEmp';


import empObj from '@salesforce/schema/Employee__c';
import nameField from '@salesforce/schema/Employee__c.Name';
import phoneField from '@salesforce/schema/Employee__c.Mobile__c';
import emaiField from '@salesforce/schema/Employee__c.Email__c';
import aadharField from '@salesforce/schema/Employee__c.Aadhaar_No__c';
 //import EMPLOYEE_SEARCH from '@salesforce/apex/employeeObjController_venu.employeeSearch';
 //import EMPLOYEE_CREATE from '@salesforce/apex/employeeObjController_venu.employeeCreate';
// import EMPLOYEE_DELETE from '@salesforce/apex/employeeObjController_venu.employeeDelete';
import { NavigationMixin } from 'lightning/navigation';


export default class EmployeePg_Venu extends NavigationMixin (LightningElement) {

    // @wire (DisplyEMP_Delete) getEmp;
    // @track recordId;

    @track columns = [
        { label: 'ID', fieldName:'Id',type:'id', editable: true },
        { label: 'Emp-Name', fieldName: 'Name', type: 'text', editable: true },
        { label: 'Phone', fieldName: 'Mobile__c', type: 'phone', editable: true },
        { label: 'Email', fieldName: 'Email__c', type: 'email', editable: true },
        
    ];


    //@track columns = columns2;    // this 3 variables for edit save emp
    @track empObj;
    fldsItemValues = [];

     //-------------------emp edit save section 1- start-----------------------------------------------------------------------------------
 @track columns2 = [
    { label: 'ID', fieldName:'Id',type:'id', editable: true },
    { label: 'Emp-Name', fieldName: 'Name', type: 'text', editable: true },
    { label: 'Phone', fieldName: 'Mobile__c', type: 'phone', editable: true },
    { label: 'Email', fieldName: 'Email__c', type: 'email', editable: true },
    
];

//-------------------emp edit save section 1- end--------------------------------------------------------------------------------------------

                

//-------------------emp create section 1 start-----------------------------------------------------------------------------------
    @track empName=nameField;
    @track empPhone=phoneField;
    @track empEmail=emaiField;
    @track empAaadhar=aadharField;

    empObj={
        Name : this.empName,
        Mobile__c : this.empPhone,
        Email__c : this.empEmail,
        Aadhaar_No__c : this.empAaadhar,

    }

      
    //-------------------emp create section 1 end------------------------------------------------------------------------------------


    searchKey;
    contacts;
    error;

    @track employees;

   @api recordId;

   @track defaultMainPage=true;
   @track employeeListPg=false;
   @track newEmployeePg=false;
   @track editEmployeePg=false;
   @track deleteEmployeePg=false;

   //-------------------emp create section 2   start-------------------------------------------------------------------------------------------------



   empNameHandleChange(event){
    this.empObj.Name = event.target.value;
   }
   empPhoneHandleChange(event){
     this.empObj.Mobile__c = event.target.value;
   }
   empEmailHandleChange(event){
     this.empObj.Email__c = event.target.value;
   }
   empAaadharHandleChange(event){
     this.empObj.Aadhaar_No__c = event.target.value;
    } 

    //-------------------emp create section 2    end------------------------------------------------------------------------------------------

   

   defaultPgkHandler(){
    this.defaultMainPage=true;
    this.employeeListPg=false;
    this.newEmployeePg=false;
    this.editEmployeePg=false;
    this.deleteEmployeePg=false;
    
   }

   employeeListPgHandler(){
      this.defaultMainPage=false;
      this.employeeListPg=true;
      this.newEmployeePg=false;
      this.editEmployeePg=false;
      this.deleteEmployeePg=false;
    console.log('button clicked 1.......................>');
   
   }
   newEmployeePgHandler(){
      this.defaultMainPage=false;
      this.employeeListPg=false;
      this.newEmployeePg=true;
      this.editEmployeePg=false;
      this.deleteEmployeePg=false;
    console.log('button clicked 2......................>');
   
   }

   editEmployeePgHandler(){
      this.defaultMainPage=false;
      this.employeeListPg=false;
      this.newEmployeePg=false;
      this.editEmployeePg=true;
      this.deleteEmployeePg=false;
   }

   deleteEmployeePgHandler(){
      this.defaultMainPage=false;
    this.employeeListPg=false;
    this.newEmployeePg=false;
    this.editEmployeePg=false;
    this.deleteEmployeePg=true;
   }

   

   // ============================================

 searchHandle(){
    GET_EMPLOYEELIST ({searchKey:'$searchKey'})
    .then((result) => {
        if(result.length === 0){
            this.error = '-----------No Record Found----------';
            this.employees = '';

        }else{
            this.employees = result;
            this.error = '';
        }
    })
    .catch((error) => {
        console.log('error',error);
        this.error = error;
        this.employees = undefined;
    });
}

    //  this.searchKey = this.template.querySelector('.searchKeyBtn')?.value||''; //pass class name or lightning input here

    handleChange(event){
        this.searchKey=event.target.value;
    }
   // ============================================

   //-----------------------------new empoyee enroll start----------------------------------------------------------------------------------
   empNewInsertHandle(){

   Emp_Insert({ emp : this.empObj })

      .then(result => {
          this.message = result;
          this.error = undefined;
          if(this.message != undefined) {  
             
            this.empObj.Name='';
            this.empObj.Mobile__c='';
            this.empObj.Email__c='';
            this.empObj.Aadhaar_No__c='';
          
            this.dispatchEvent(
                new ShowToastEvent({
                    title: 'Success',
                    message: 'Record created',
                    variant: 'success',
                })
            );
           
          }         
          console.log(JSON.stringify(result));
          console.log("result", this.message);
      
      })
    .catch(error => {
	
        this.message = undefined;
        this.error = error;
        
        this.dispatchEvent(
            new ShowToastEvent({
                title: 'Error creating record',
                message: error.body.message,
                variant: 'error',
            }),
        );
        
        console.log("error", JSON.stringify(this.error));
    });
  }

   //----------------------------------------new employee enroll end----------------------------------------------------------------------


    //----------------------------------------Delete employee  start-----------------------------------------------------------------------
    @wire (DisplyEMP_Delete) getEmp;
    @track recordId;

    handleEmpDelete(event){

        this.recordId = event.target.value;
        //window.console.log('recordId# ' + this.recordId);
        deleteRecord(this.recordId) 
        .then(() =>{
    
           const toastEvent = new ShowToastEvent({
               title:'Record Deleted',
               message:'Record deleted successfully',
               variant:'success',
           })  
           this.dispatchEvent(toastEvent);
    
           return refreshApex(this.getEmp);
           
        })
        .catch(error =>{
            window.console.log('Unable to delete record due to ' + error.body.message);
        });
     }
    
     //----------------------------------------Delete employee  end--------------------------------------------------------------------------

     //----------------------------------------backround Image start----------------------------------------------------------------------

     get empBackgroundImage() {

        return `background-image:url(${EmpPic});
        background-size: cover !important;
        overflow: hidden;
        height:70vh;
        width: 100%;
        background-size: contain !important;
        background-size: 100% 80% !important;`;
        //background-size: contain;
       // background-size: contain !important;

       //background-position: center center !important;
       //background-repeat: no-repeat !important; 
       //position: absolute !important;
       // width: 100%;     
  }

  //----------------------------------------backround Image end-------------------------------------------------------------------------

  //---------------------------edit save emp table start------------------------------------------------------------------------------------
  @wire(GetEmpsForEditSave)
  cons(result) {
      this.empObj = result;
      if (result.error) {
          this.empObj = undefined;
      }
  };

  saveHandleAction(event) {
      this.fldsItemValues = event.detail.draftValues;
      const inputsItems = this.fldsItemValues.slice().map(draft => {
          const fields = Object.assign({}, draft);
          return { fields };
      });

     
      const promises = inputsItems.map(recordInput => updateRecord(recordInput));
      Promise.all(promises).then(res => {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: 'Success',
                  message: 'Records Updated Successfully!!',
                  variant: 'success'
              })
          );
          this.fldsItemValues = [];
          return this.refresh();
      }).catch(error => {
          this.dispatchEvent(
              new ShowToastEvent({
                  title: 'Error',
                  message: 'An Error Occured!!',
                  variant: 'error'
              })
          );
        }).finally(() => {
            this.fldsItemValues = [];
        });
    }
 
   
    async refresh() {
        await refreshApex(this.empObj);
    }
    //---------------------------edit save emp table end--------------------------------------------------------------------------------------


    // =========================Navigation Mixin============================
   //navigate new employee page
   newEmpNavigation(){
    console.log("NAvigation mixin clickeeed");
     this[NavigationMixin.Navigate]({
         type:'standard__objectPage',
         attributes:{
             objectApiName:'Employee__c',
             actionName:'new'
         },
     })
 }
 //navigate view employee home page
 viewEmpNavigation(){
     this[NavigationMixin.Navigate]({
         type:'standard__objectPage',
         attributes:{
             objectApiName:'Employee__c',
             actionName:'list'
         },state:{
             filteName:'All'
         }
     })
 }
 //navigate edit employee page
 editEmpNavigation() {
     this[NavigationMixin.Navigate]({
         type: "standard__objectPage",
         attributes: {
             objectApiName: "Employee__c",
             actionName: "home"
         }
     });
 }
//navigate to community Login Page
 communityPgAuthNavigation() {
    this[NavigationMixin.Navigate]({
        type: "comm__loginPage",
        attributes: {
          
            actionName: "login"
        }
    });
}

communityPgNavigation() {
 this[NavigationMixin.Navigate]({
     type: "comm__home",
     attributes: {
       //   actionName: "Home"
     }
 });
}

navigateToExternalUrl() {
 this[NavigationMixin.Navigate]({
     "type": "standard__webPage",
     "attributes": {
         "url": "https://www.w3web.net/navitate-to-different-page-types-in-lwc/"
     }
 });
}
 // ============================================naviagtion mixin end=====================================

}