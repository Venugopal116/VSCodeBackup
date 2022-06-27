import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/ContactController_Recipe.getContactList';
export default class ApexWireMethdToProperty extends LightningElement {

@wire(getContactList) contacts;  //here contacts is the source or host variabale for contacts list

}