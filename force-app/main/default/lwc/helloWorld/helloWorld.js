import { LightningElement,track } from 'lwc';

export default class HelloWorld extends LightningElement {

    @track dynamicGreeting =  "Mr.LWC Learner";

    greetingChangeHandler(event){
        this.dynamicGreeting = event.target.value;
    }


}