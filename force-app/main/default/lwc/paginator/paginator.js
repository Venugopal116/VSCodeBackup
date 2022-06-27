import { LightningElement } from 'lwc';

export default class Paginator extends LightningElement {

    handleNext(){
        const nextEvent=new CustomEvent('next'); //create custom event
        this.dispatchEvent(nextEvent);  // fire an event
    }
    handlePrevious(){
        const previousEvent=new CustomEvent('previous');//previous event name in quotes and in braces
        this.dispatchEvent(previousEvent);
    }
}