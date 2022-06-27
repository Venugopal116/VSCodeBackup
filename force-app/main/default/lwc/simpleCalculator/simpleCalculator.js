import { LightningElement,track } from 'lwc';


export default class SimpleCalculator extends LightningElement {

    @track currentResult;

    firstNumber;
    secondNumber;

    numberChangeHandler(event){ 
        const inputBoxName=event.target.name;
        if(inputBoxName=="First Number"){
          this.firstNumber=event.target.value;
        }

        if(inputBoxName=="Second Number"){
            this.secondNumber=event.target.value;
          }
    }

    addHandler(event){
        const firstNUM=parseInt(this.firstNumber);
        const secndNum=parseInt(this.secondNumber);
       this.currentResult = (firstNUM+secndNum);
    }

    substHandler(){
        const firstNUM=parseInt(this.firstNumber);
        const secndNum=parseInt(this.secondNumber);
        this.currentResult = (firstNUM-secndNum);
    }

    mltplyHandler(){
        const firstNUM=parseInt(this.firstNumber);
        const secndNum=parseInt(this.secondNumber);
        this.currentResult = (firstNUM*secndNum);
    }

    divideHandler(){
        const firstNUM=parseInt(this.firstNumber);
        const secndNum=parseInt(this.secondNumber);
        this.currentResult = (firstNUM/secndNum);
    }
    
}


