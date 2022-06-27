import { LightningElement } from 'lwc';

export default class InputsRichV2 extends LightningElement {
   
    val = 50;  // for volume 
    myVal = '<b>Hello!</b>';
    loaded = false;

    handleChange(event) {  // for rich text
        this.myVal = event.target.value;
    }
    handleCodeBlockButtonClick() {  // for button toor bar (rich text)
        const inputRichText = this.template.querySelector(
            'lightning-input-rich-text'
        );
        let format = inputRichText.getFormat();

        // Set or unset code-block format based on format on current selection
        if (format['code-block']) {
            inputRichText.setFormat({ 'code-block': false });
        } else {
            inputRichText.setFormat({ 'code-block': true });
        }
    }

    handleClick() {  // for spinner or loader
        this.loaded = !this.loaded;
    }

    //input address js logic starts here ..........................................-->
    
    address = {
        street: '121 Spear St.',
        city: 'San Francisco',
        province: 'CA',
        postalCode: '94105',
        country: 'US',
    };

    _country = 'US';

    countryProvinceMap = {
        US: [
            { label: 'California', value: 'CA' },
            { label: 'Texas', value: 'TX' },
            { label: 'Washington', value: 'WA' },
        ],
        CN: [
            { label: 'GuangDong', value: 'GD' },
            { label: 'GuangXi', value: 'GX' },
            { label: 'Sichuan', value: 'SC' },
        ],
        VA: [],
    };

    countryOptions = [
        { label: 'United States', value: 'US' },
        { label: 'China', value: 'CN' },
        { label: 'Vatican', value: 'VA' },
    ];

    get getProvinceOptions() {
        return this.countryProvinceMap[this._country];
    }
    get getCountryOptions() {
        return this.countryOptions;
    }

    handleChange(event) {
        this._country = event.detail.country;
    }


    //input address js logic Ends here ..........................................-->
}