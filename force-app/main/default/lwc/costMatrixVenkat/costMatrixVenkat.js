import { LightningElement } from 'lwc';

export default class CostMatrixVenkat extends LightningElement {
    value = 'None';

    get options() {
        return [
            { label: 'None', value: 'None' },
            { label: 'No Knowledge', value: 'noKnowledge' },
            { label: 'Therotical knowledge', value: 'Theroticalknowledge' },
            { label: 'Need Guidence to implement', value: 'ngti' },
          
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }
}