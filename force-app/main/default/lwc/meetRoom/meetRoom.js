  import { LightningElement,api } from 'lwc';

export default class MeetRoom extends LightningElement {

    @api meetingRoomInfo = {roomName:'A-01',roomCapacity:'12'}

    @api showRoomInfo=false;

    titleClickHandler(){
         const titleClicked=new CustomEvent('titleClick',{detail:this.meetingRoomInfo}); 
         this.dispatchEvent(titleClicked);
    }
}