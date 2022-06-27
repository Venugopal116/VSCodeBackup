import { LightningElement,track } from 'lwc';
//now im giving "Hard reference" here,to give the object fields through salesforce schema,then when ever modifications or changes 
//done on existing fields then automatically pickup the changes

// import NAME_FIELD from '@salesforce/schema/Account.Name';   //version 2 data95,6,7 lines
// import PHONE_FIELD from '@salesforce/schema/Account.Phone';
// import WEBSITE_FIELD from '@salesforce/schema/Account.Website'; //commented due to usage of layout type="full" in html file

export default class Acc_RecordForm extends LightningElement {
@track recordId;

// fieldArray=['Name','Phone','Website'];      // version 1

// fieldArray=[NAME_FIELD,PHONE_FIELD,WEBSITE_FIELD];  // version 2

//layout-type='Full';  // version 3 (this is using in Html file)

handleSuccess_recordIdCapture(event){
    this.recordId=event.detail.id;
    console.log('record got created---------------------> '+this.recordId);
}
}