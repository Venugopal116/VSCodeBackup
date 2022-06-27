import { LightningElement , track } from 'lwc';
import logo from '@salesforce/resourceUrl/co';

export default class LoginPgHead extends LightningElement {
    @track img;
    img = logo;
}