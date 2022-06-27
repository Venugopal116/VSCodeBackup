import { LightningElement,track } from 'lwc';

export default class TempConvertion extends LightningElement {
     @track convertedResult;

    FtempValue;

    tempChangeHandler(event){
     const tempinputbox=event.target.name;
     if(tempinputbox=="TempConvert") {
         this.ftempValue=event.target.value;
     } 

    }
    tempConversion(){
        const ftemp=parseInt(this.ftempValue);
        //this.convertedResult=ftemp+30;
        this.convertedResult= 5/9 * (ftemp- 32);
    }
}