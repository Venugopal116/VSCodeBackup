import { LightningElement,track , api} from 'lwc';
import {fetchUrlBasedOnKey} from 'c/utilityCmp';

export default class Grids extends LightningElement {
    @track meetingRoomsInfo;
     @api siteUrl;
    meetingRoomsInfo=[
        {roomName:'A-01',roomCapacity:'12'},
        {roomName:'A-02',roomCapacity:'10'},
        {roomName:'A-03',roomCapacity:'15'},
        {roomName:'B-01',roomCapacity:'8'},
        {roomName:'B-02',roomCapacity:'6'},
        {roomName:'B-03',roomCapacity:'4'},
        {roomName:'C-01',roomCapacity:'7'},
    ];
    connectedCallback(){
        this.siteUrl = fetchUrlBasedOnKey('homeUrl');
        window.location.href('siteUrl');
        console.log('site url------------------------>', this.siteUrl );
    }
}