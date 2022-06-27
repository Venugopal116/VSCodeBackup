import {
    LightningElement,track
} from 'lwc';
import {
    ShowToastEvent
} from 'lightning/platformShowToastEvent';

export default class ToastPlay extends LightningElement {
    title = 'Hey,Im Toast Title';
    message = 'Hey Im Toasat Message';
   @track variant = '';

    // get isOption1(){
    //      return variant =='success';
    //     }
    
    //  get isOption2(){
    //      return this.variant == 'error';
    //     }

    variantOptions = [{
            label: 'error',
            value: 'error'
        },
        {
            label: 'success',
            value: 'success'
        },
        {
            label: 'info',
            value: 'info'
        },
        {
            label: 'warning',
            value: 'warning'
        }
    ];
    titleChangeHandler(event) { // for title input
        this.title = event.target.value;
    }
    messageChangeHandler(event) { // for message input
        this.message = event.target.value;
    }
    toastVarientOptionHandler(event) { // for type of toast
        this.variant = event.target.value;
    }
    showToastButtonClickHandler() { //show toast on click
        const toastEvent = new ShowToastEvent({
            title: this.title,
            message: this.message,
            variant: this.variant,
            mode: 'sticky',

        });
        this.dispatchEvent(toastEvent); //Making Toast ready for use
    }
    //---------------------------------------------------------------------------------------------------------------------->

    radioToastHandler(event) {   //-----------------------main radio Handler------------try to implement if--------------------

        const selectedOption = event.detail.value;
        
        console.log('Radio clicked,'+selectedOption);
        if(selectedOption=='success'){
        const successEvent = new ShowToastEvent({
            title: 'Success!',
            message: 'Im success MESSAGE {0} Got It {1}!',
            variant:selectedOption,
            messageData: [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                },
            ],
        }); 

        this.dispatchEvent(successEvent);
    }
    if(selectedOption=='error'){
        const errorEvent = new ShowToastEvent({
            title: 'error!',
            message: 'Im error MESSAGE {0} Got It {1}!',
            variant:selectedOption,
            messageData: [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                },
            ],
        });
        this.dispatchEvent(errorEvent);
    }
    if(selectedOption=='warning'){
        const warningEvent = new ShowToastEvent({
            title: 'Warning!',
            message: 'Im Warning MESSAGE {0} Got It {1}!',
            variant:selectedOption,
            messageData: [
                'Salesforce',
                {
                    url: 'http://www.salesforce.com/',
                    label: 'here',
                },
            ],
        });
        this.dispatchEvent(warningEvent); 
    }
    if(selectedOption=='info'){
    const InfoEvent = new ShowToastEvent({
        title: 'info!',
        message: 'Im INFO MESSAGE {0} Got It {1}!',
        variant: selectedOption,
        messageData: [
            'Salesforce',
            {
                url: 'http://www.salesforce.com/',
                label: 'here',
            },
        ],
    });
    this.dispatchEvent(InfoEvent);
} 
      
        
     }

    //-------------------------------------------------------------------------------------------------------------->

}