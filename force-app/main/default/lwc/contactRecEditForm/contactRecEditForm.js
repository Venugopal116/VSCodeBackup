import { LightningElement } from 'lwc';
import Contact_obj from '@salesforce/schema/Contact';
import Account_Field from '@salesforce/schema/Contact.AccountId';
import Name_Field from '@salesforce/schema/Contact.name';
import Title_Field from '@salesforce/schema/Contact.title';
import Phone_Field from '@salesforce/schema/Contact.phone';
export default class ContactRecEditForm extends LightningElement {
    objName=Contact_obj;

    conFields={
        accfield   : Account_Field,
        nameField  : Name_Field,
        titleField : Title_Field,
        phoneField : Phone_Field
    }
    handleClick(){
        const inputFields=this.template.querySelectorAll('lightning-input-field'); //remove semi colon
        if(inputFields){
            Array.from(inputFields).forEach(field=>{field.reset()});   //remove semi colon
        }
    }

    
}