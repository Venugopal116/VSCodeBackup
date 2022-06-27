import { LightningElement } from 'lwc';

export default class GetterSetter extends LightningElement {
    enteredNumberToConvert;
    SelectedOptionByUser;
    convertedValue;

    get getOneOptionFrmList(){
        return[
            { label: '--None--', value: '' },
            { label: 'Second', value: '1000' },
            { label: 'Minute', value: '60000' },
            { label: 'Hour', value: '3.6e+6' },
            { label: 'Day', value: '8.64e+7' }
              ];
    }
    set convertMethod(val){
        this.convertedValue=val;
    }

    inputhandleChange(event){
       this.enterNumberToConvert=event.detail.value;
    }
    optionHandleChange(event){
        console.log('log data'+event);
        console.log('log 2'+event.detail.value);
        // if(getOneOptionFrmList.Label==='Second'){
        //     getOneOptionFrmList.value*
        // }
        this.SelectedOptionByUser=event.detail.value;
    }
    handleConvertButtonClick(){
        this.convertMethod=(this.enteredNumberToConvert && this.SelectedOptionByUser ? this.enteredNumberToConvert*this.SelectedOptionByUser:'');
        this.something=flag?'abc':1234;
        if(flag=true){
            return 'Abc';
        }
        else{
            return 1234;
        }
    }

}