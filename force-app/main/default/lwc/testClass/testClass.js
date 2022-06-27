import { LightningElement,track } from 'lwc';

export default class TestClass extends LightningElement {
    result;
     firstVal;
     seconVal;
     //result = firstVal+seconVal;

    /*handleChange(event){
        this.firstVal = event.target.value;
        this.seconVal = event.target.value;
    }*/
    handleChange(event){ 
        const inputBoxName= event.target.name;
       // this.firstVal = event.target.value;
        if(inputBoxName == "first"){
            this.firstVal = event.target.value;
        }
        if(inputBoxName == "second"){
            this.seconVal = event.target.value;
        }
    }

    handleClick(event){
        //this.result = event.target.value;
        const f1 =  parseInt(this.firstVal);
        const s1 =  parseInt(this.seconVal);
         this.result = f1+s1;

        
     }
}