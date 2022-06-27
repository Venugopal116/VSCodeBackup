import { LightningElement,track } from 'lwc';

export default class ConditionalRendering extends LightningElement {

@track displayDiv=false;

 @track CityList = ["Banglore","Hyderabad","Chennai","Pune","Mumbai"];
 
       showDivHandler(event){ 
    this.displayDiv = event.target.checked;

 }

} 