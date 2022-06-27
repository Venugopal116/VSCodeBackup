import { LightningElement } from 'lwc';

export default class CCmp extends LightningElement {
    constructor(){
        super();
        console.log("<<<<<<<<<<<<<<<<<< Inside Child cmp-**Constructor** called here >>>>>>>>>>>>>>>>>>>>>>");
    }
    connectedCallback(){
       // this.name='LWC Learning';  
        
        console.log("<<<<<<<<<<<<<<<<<<< Inside Child cmp-**ConnectedCallBack** called here >>>>>>>>>>>>>>>");
    }







































    

    // templateUsing; //declared global variable

//render(){   // need to display some data,so we will import data from html file
        // without mention what to render,it deosnt show any data in browser,and only "render" executes.not renderedcallback in console
        // after defining data what to render,then  rendered call back works.
        //console.log("<<<<<<<<<<<<<<<< Inside Child cmp-**render** (displaying data) called here >>>>>>>>>>>>>>");
        //-----------------------------------------------------------------------------------------
        //   if(FORM_FACTOR=='Large'){
        //       this.templateUsing=DesktopTemplate;
        //   }
        //   if(FORM_FACTOR=='Medium'){
        //     this.templateUsing=TabletTemplate;
        //   }
        //   if(FORM_FACTOR=='Small'){
        //     this.templateUsing=MobileTemplate;
        // }
        // return this.templateUsing;

        //-------------------------------------------------------------------------------------------
       // console.log("<<<<<<<<<<<<<<<< Inside parent cmp-**render** (displaying data) called here >>>>>>>>>>>>>>");
       // return parentComponent; // we are defining what to render here
    //}
    renderedCallback(){
        console.log("<<<<<<<<<<<<<<<<<<<<<< Inside Child cmp-**renderedCallBack** called here >>>>>>>>>>>>>>>>");
    }
    disconnectedCallback(){
        console.log("<<<<<<<<<<<<<<<<<< Inside Child cmp-**disconnectedCallBack** called here >>>>>>>>>>>>>>>>");
    }
    errorCallback(){
        console.log("<<<<<<<<<<<<<<<<<<Inside Child cmp-**ErrorCallBack** called here >>>>>>>>>>>>>>>>>>>>>>>");
     
    }
    }
