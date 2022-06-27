import { LightningElement,track } from 'lwc';

export default class MeetingRooms extends LightningElement {
    @track meetingRoomsInfo;

    meetingRoomsInfo=[
        {roomName:'A-01',roomCapacity:'12'},
        {roomName:'A-02',roomCapacity:'10'},
        {roomName:'A-03',roomCapacity:'15'},
        {roomName:'B-01',roomCapacity:'8'},
        {roomName:'B-02',roomCapacity:'6'},
        {roomName:'B-03',roomCapacity:'4'},
        {roomName:'C-01',roomCapacity:'7'},
    ];
}