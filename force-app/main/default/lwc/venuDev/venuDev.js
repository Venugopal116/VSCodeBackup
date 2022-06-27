import { LightningElement,api,track } from 'lwc';
import id from  '@salesforce/user/Id';
export default class VenuDev extends LightningElement {
    @api Name ="Venugopal";
    @track title ="SFDC Devloper";
    phone = "7660975569";
    email="venugopalvemula9@gmail.com";
    userId=id;  //no html code for this

    handleClick(){
        this.Name="Mr.A²";
        this.title="Senior Devloper";
        this.email="123456789";
        this.email="cloudOdyssey@uk.com"
    }
}