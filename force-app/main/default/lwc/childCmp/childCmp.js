import { LightningElement,api } from 'lwc';

export default class ChildCmp extends LightningElement {
    @api message;
    changeMessage(strString){
        this.message=strString.toUpperecase();
    }
}