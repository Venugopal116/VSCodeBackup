import { LightningElement,track } from 'lwc';

export default class PCmp extends LightningElement {
    @track showChild=false;

    handleChange (){
     this.showChild=!this.showChild;
    }


}