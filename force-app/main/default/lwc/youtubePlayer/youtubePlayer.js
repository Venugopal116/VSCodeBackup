import { LightningElement,track } from 'lwc';
import getYouTubeVideos from '@salesforce/apex/YoutubeIntegrationController.getYouTubeVideos';

export default class YoutubePlayer extends LightningElement {
    @track finalresult = [];
    @track finalError = '';
    @track searchInput = 'Giet Engineering College,Rajahmundry';
    @track videoResults = [];
    @track viewUrl = '';

  //Below method will be called on load of component 
    connectedCallback(){
         this.handleSubmit();
    }
  // If you wanted to do something when user is entering the string
    handleSearch(event){
         this.searchInput = event.target.value;
         console.log('This is searchInput::'+ this.searchInput);
    }
  //To map the videoResults to iframe and related list 
    handleSubmit(){
        getYouTubeVideos({searchKey:this.searchInput})
         .then ((results)=>{
              this.videoResults = results;
              console.log('This is final video results ::'+ JSON.stringify(this.videoResults));

              if (this.videoResults.length > 0) {
                   this.showVideoInIframe(this.videoResults[0].videoId);
              }
         })
         .catch((error)=>{
              this.finalError = error.body.message;
              console.log('This is final video error results ::'+ this.finalError);
         })

    }

    //To show youtube video
    showVideoInIframe(videoId){   // ! how video id works here
         this.viewUrl = 'https://www.youtube.com/embed/'+videoId;
     }
     // Play video from related results
    watchVideo(event){    // ! i-frame catching current video id and passing it and play it.Above method and this method both are in Sync
         let slt = event.currentTarget.dataset.id;
         console.log('This is selected video:'+ slt);
         this.viewUrl = 'https://www.youtube.com/embed/'+slt;
    }
}