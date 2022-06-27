import { LightningElement ,wire,track,api } from 'lwc';
import fetchdetails from '@salesforce/apex/certificationDetails.getCertificationDetails';
export default class Communitycertificationpage extends LightningElement {
    
    @track certificationMaster=[];
    @track certificateToAdd = {};

    @wire(fetchdetails, {})
    fetchAccountDetails(Result) {
         if (Result.data) {
            this.certificationMaster = [];
            console.log('@Result',Result);
            Result.data.forEach(certiRecords=>{
                this.certificationMaster.push({label : certiRecords.Name, value : certiRecords.Id }) // here pushing the certiRecords.name and CertiRecords.Id in Array
                console.log('@certification',this.certificationMaster);
            })
        }
    }

    handleCertificationSelection(event){
        this.certificateToAdd={};
        console.log(JSON.stringify(event.target.options));//this will display optioned Clicked data
        console.log(JSON.stringify(event.detail.value));
        console.log('@event.target.option',JSON.stringify(event.target.options.find(opt=>opt.value===event.detail.value)));
        this.certificateToAdd.Name=event.target.options.find(opt=>opt.value===event.detail.value).label;
        this.certificateToAdd.Certification__c=event.target.value;
        console.log('@Certification',JSON.stringify(this.certificateToAdd));
    }


    updateCerficateDate(event){
        if(this.certificateToAdd.Name){
            var field = this.template.querySelector("[data-name='completionDate']");
            console.log('@field',JSON.stringify(field));  
            console.log(new Date()); // returns the current value
            if(new Date(event.currentTarget.value) > new Date()){
                field.setCustomValidity("Certification completion date cannot be in future.");
            }else{
                field.setCustomValidity("");
                console.log('@event.currentTarget.value',event.currentTarget.value);
                this.certificateToAdd.Date_of_Expiry__c = event.currentTarget.value;
            }
            //field.reportValidity();
        }else{
            event.currentTarget.value = null;
            console.log('@Inside Outer else Statement',event.currentTarget.value);
            showToast(this,'error','Error', 'Please first select a certificate.');
        }

    }
    addCertificate(event){
        if(checkFormValidity(this)){
            if (this.certificationList.some(e => e.Name === this.certificateToAdd.Name)) {
                showToast(this,'warning','Warning','Alert!! '+ this.certificateToAdd.Name + ' is already added.');
                return;
            }
            this.certificateToAdd.sobjectType = "Certification_Matrix__c";
            this.certificateToAdd.Contact__c = this.contactDetails.data.Id;
            this.showSpinner = true;
            upsertRecords({
                sObjList : [this.certificateToAdd]
            }).then(result =>{
                console.log('Certificate inserted');
                this.certificateToAdd = {};
                this.processCertifications();
                this.showSpinner = false;
            }).catch(error => {
                this.showSpinner = false;
                console.log('error--'+JSON.stringify(error));
            })
        }
    }
    deleteCertificate(event) {
        var index = event.target.dataset.id;
        if(this.certificationList[index].Id){
            this.showSpinner = true;
            deleteCertification({
                obj : this.certificationList[index]
            }).then(result =>{
                this.showSpinner = false;
                this.processCertifications();
                console.log('Cert deleted');
            }).catch(error => {
                console.log('error--'+JSON.stringify(error));
            })
        }
    }

    @api
    saveCertification(event){
        sendSaveEvent(this, {isSuccess : true});
    }  
}