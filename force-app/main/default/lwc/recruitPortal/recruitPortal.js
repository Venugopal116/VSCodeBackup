import { LightningElement,track,wire } from 'lwc';

import TREEpic from '@salesforce/resourceUrl/treePic';
import getAllRecFieldDataForResume from '@salesforce/apex/RecrutimentControllerLwc.getAllFieldDataToResume';
//import window from 'https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js';



export default class RecruitPortal extends LightningElement {

  recruitObjLisData;
  err;
  @track recordId; //='a045i000004B9oxAAC'

 

   defaultHomePage=true;
   showEnrollPage=false;
   previewResumePg=false;

  

  showenrollpagehandler(){
    
  this.showEnrollPage=true;
  this.defaultHomePage=false;
}
closeEnrollpagehandler(){
    
  this.showEnrollPage=false;
  this.defaultHomePage=true;
}

previewResumePgHandler(){
//   setTimeout(() => {
//     eval("$A.get('e.force:refreshView').fire();");
// }, 1000);

  this.showEnrollPage=false;
  this.defaultHomePage=false;
  this.previewResumePg=true;
}
closePreviewButtonHandler(){
  this.showEnrollPage=true;
  this.previewResumePg=false;
}

//---------------------capture record id-----------------------------------------------------------

handleSuccess_recordIdCapture(event){
    this.recordId=event.detail.id;
    console.log('record got created---------------------> '+this.recordId);
}

 //----------------get all fields data for resume-------------------
 @wire (getAllRecFieldDataForResume, { recordId : '$recordId'} )
 wiredRecObjList({error,data}){
   if(data){
     this.recruitObjLisData=data;
     console.JSON.stringify('RecObjFielddData-------> ',this.recruitObjLisData);
   }
   if(error){
     this.err=error;
     console.log('Error is------------------> ',this.err);
   }
   
 }

//  updateRecordView() {
//   setTimeout(() => {
//        eval("$A.get('e.force:refreshView').fire();");
//   }, 1000); 
// }

//----------------------------bg---------------------------------------------------
handlePDF(){
  window.print();
}

GeneratePDF() {
  let pdf = new jsPDF('p', 'pt', 'a4');
  pdf.html(document.body, {
    callback: function (pdf) {
        // pdf.save('test.pdf');
        window.open(output('bloburl'));
    }
  });
}
// generatePdfFile(){
//   window.onload = function(){
//     document.querySelector(".pdfDownload").addEventListener('click',()=>{
//       const resume =this.document.querySelector('resume');
//     })
//   }
// }


    get recruitPortalBg() {

        return ` width: 100%;
        background: linear-gradient(to top, rgba(0,0,0,0.5)50%,rgba(0,0,0,0.5)50%),url(${TREEpic});
        background-position: center;
        background-size: cover;
        height: 100vh; `;
            
  }
  
}