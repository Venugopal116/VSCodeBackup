import { LightningElement,track} from 'lwc';
import parentComponent from './parentComponent.html';
import DesktopTemplate from './DesktopTemplate.html';
import TabletTemplate from './TabletTemplate.html';
import MobileTemplate from './MobileTemplate.html';
import FORM_FACTOR from '@salesforce/client/formFactor' //form factor
export default class ParentComponent extends LightningElement {
      @track name;
 
     constructor(){
        super();
        console.log("<<<<<<<<<<<<<<<<<< Inside parent cmp-**Constructor** called here >>>>>>>>>>>>>>>>>>>>>>");
    }
    connectedCallback(){
        this.name='LWC Learning';  
        
        console.log("<<<<<<<<<<<<<<<<<<< Inside parent cmp-**ConnectedCallBack** called here >>>>>>>>>>>>>>>");
    } 

    templateUsing; //declared global variable

    render(){   // need to display some data,so we will import data from html file
    //     // without mention what to render,it deosnt show any data in browser,and only "render" executes.not renderedcallback in console
    //     // after defining data what to render,then  rendered call back works.
         console.log("<<<<<<<<<<<<<<<< Inside parent cmp-**render** (displaying data) called here >>>>>>>>>>>>>>");
    //     //-----------------------------------------------------------------------------------------
          if(FORM_FACTOR=='Large'){
              this.templateUsing=DesktopTemplate;
          }
          if(FORM_FACTOR=='Medium'){
            this.templateUsing=TabletTemplate;
          }
          if(FORM_FACTOR=='Small'){
            this.templateUsing=MobileTemplate;
        } 


        return this.templateUsing;

    //     //-------------------------------------------------------------------------------------------
    //    // console.log("<<<<<<<<<<<<<<<< Inside parent cmp-**render** (displaying data) called here >>>>>>>>>>>>>>");
       // return parentComponent; // we are defining what to render here
       // return this.name;
    }
    renderedCallback(){
        console.log("<<<<<<<<<<<<<<<<<<<<<< Inside parent cmp-**renderedCallBack** called here >>>>>>>>>>>>>>>>");
    }
    // disconnectedCallback(){
    //     console.log("<<<<<<<<<<<<<<<<<< Inside parent cmp-**disconnectedCallBack** called here >>>>>>>>>>>>>>>>");
    // }
    // errorCallback(){
    //     console.log("<<<<<<<<<<<<<<<<<<Inside parent cmp-**ErrorCallBack** called here >>>>>>>>>>>>>>>>>>>>>>>");
     
    // }

}
