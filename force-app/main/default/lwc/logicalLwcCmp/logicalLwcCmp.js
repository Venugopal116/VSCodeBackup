import { LightningElement,track,wire} from 'lwc'; // using wire here

import mapDemo from '@salesforce/apex/UtilityClassLwc.mapDemo'; //gettinng utility class here
import testName from '@salesforce/apex/UtilityClassLwc.testName';

export default class LogicalLwcCmp extends LightningElement {
    @track greeting ="Hey,Im Lightning Componnent";
    @track message="Logic applied here";

    @track mapData;
    @track errorDat;

    @track contacts=[
        {
            id:'51684586486568',
            Name:'venu'
        },
        {          
            id:'15162262',
            Name:'gopal'
        },
        {            
            id:'451666268626',
            Name:'krishna'
        }
    ];
   @wire(mapDemo) mapData;    //its 1st used method,Later improvise like below for getting errors

   @wire(mapDemo)
   wireData({error,data}){
       if(data){
        this.mapData=data;
        /*eslint.disable no-console */
        console.log("data-------->"+data); //checking data from backEnd
       }
       if(error){
        this.errorDat=error;
         /*eslint.disable no-console */
        console.log("data-------->"+this.errorDat);
       }
   }

   handleClick(){
    testName().then(result =>{
        //this.=errorDat
        console.log("results-------------------->"+result);
    }).catch(error => {
        this.error=errorDat; 
    })
   }

}