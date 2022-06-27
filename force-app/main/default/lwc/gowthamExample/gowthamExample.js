import { LightningElement } from 'lwc';
import {fetchUrlBasedOnKey} from 'c/utilityCmp';

export default class GowthamExample extends LightningElement {
    
   
    
    clickonButtonGotoTracker(){
        const trackersiteUrl = fetchUrlBasedOnKey('tracker');
        console.log('site url------------------------>', this.trackerssiteUrl );
        // window.location.href('siteUrl');
        window.location.href=trackersiteUrl;
        
    }

    
    
}