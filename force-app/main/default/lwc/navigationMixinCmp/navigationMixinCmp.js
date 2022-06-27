import { LightningElement,api } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';

export default class NavigationMixinCmp extends NavigationMixin (LightningElement) {
    @api recordId;
    actionToCreateAccountNavigation(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'new'
            },
        })
    }
    actionToAccountListViewNavigation(){
        this[NavigationMixin.Navigate]({
            type:'standard__objectPage',
            attributes:{
                objectApiName:'Account',
                actionName:'list'
            },state:{
                filteName:'Recent'
            }
        })
    }
    actionToContactHomeNav() {
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Contact",
                actionName: "home"
            }
        });
    }
     // Navigation to Contact related list of account
     navigateToContactRelatedList() {
        this[NavigationMixin.Navigate]({
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: this.recordId,
                objectApiName: 'Account',
                relationshipApiName: 'Contacts',
                actionName: 'view'
            },
        });
    }
    //Navigate to home page
    navigateToHomePage() {
        this[NavigationMixin.Navigate]({
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            },
        });
    }
    //Navigate to Reports
    navigateToReports() {
        this[NavigationMixin.Navigate]({
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            },
        });
    }
     // Navigation to web page 
     navigateToWebPage() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": 
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                
                "
            }
        });
    }
}