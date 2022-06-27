import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    handleChangeEvent(event){
        this.template.querySelector('c-child-cmp').changeMessage(event.target.value);

    }
}