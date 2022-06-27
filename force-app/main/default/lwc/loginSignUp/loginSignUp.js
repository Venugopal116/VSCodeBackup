import { LightningElement,track } from 'lwc';
//import SIGN_UP_PAGE from './signUp.html';
//import LoginBg from '@salesforce/resourceUrl/loginBg';   //first pic
//import LoginBg from '@salesforce/resourceUrl/blueLogin';
import LoginBg from '@salesforce/resourceUrl/blue2';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import verifyUser from '@salesforce/apex/ContactListSearchController.verifyUser';
//import LOGINpage from './loginSignUp.html';

export default class LoginSignUp extends LightningElement {
@track username;
@track pass;
err;

@track showSignUpPage=false;
      
@track showInfoPage=false;

handleLoginCheck(){
      this.username=this.template.querySelector('.usrName')?.value;
      this.pass=this.template.querySelector('.pswrd')?.value;

      if(!this.username){
            this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'error',
                      message: 'please enter username',
                      variant: 'error'
                  }),
            );
              return false;
      }
      

      if(!this.pass){
            this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'error',
                      message: 'please enter password',
                      variant: 'error'
                  }),
            );
              return false;
      }

      verifyUser({username:this.username,password:this.pass})
     
      .then((result) =>{

            if(result){

                this.dispatchEvent(
                  new ShowToastEvent({
                      title: 'Success',
                      message: 'Valid User',
                      variant: 'Success'
                  }));

            }else{

              this.dispatchEvent(

                  new ShowToastEvent({

                      title: 'Error',

                      message: 'IN Valid User',

                      variant: 'warning'

                  }));

            }


      })

      .catch((error)=>{

          this.err=error;

      })

    }
      
//-------------------------------------------------------------------------------------------------------------------
     
       //displaySignUp;

      // render(){
      //        this.displaySignUp=LOGINpage;
      //        if(this.showSignUpPage==true){
      //         this.displaySignUp=SIGN_UP_PAGE;
      //        // console.log('button .......................>');
      //        }
      //        return this.displaySignUp;
      
      //  }

       clickedOnSignUp(){
             this.showSignUpPage=true;
             console.log('button clicked.......................>');
            
       }

       clickOnForgotButtonHandler(){
             this.showInfoPage=true;
       }

       get BackgroundImage() {

          return `height:50rem;background-image:url(${LoginBg})`;
    }
//     loginToastButtonClick() { //show toast on click
//       console.log('........................Login clicked............................................');
//       const toastEvent = new ShowToastEvent({
//           title: 'Logged In Successfully',
//           message: '............................',
//           variant: 'success',
//           mode: 'dismissable',

//       });
//       this.dispatchEvent(toastEvent); //Making Toast ready for use
//       console.log('........................Login clicked122222............................................');
//   }
}