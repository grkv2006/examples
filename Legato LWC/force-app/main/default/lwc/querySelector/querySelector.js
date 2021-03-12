import { LightningElement } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class QuerySelector extends LightningElement {
    objectApiName = ACCOUNT_OBJECT;

    handleSubmit(event){
        event.preventDefault();

        const fields = event.detail.fields;
        fields.Rating = "Hot";

        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleSuccess(event){
        const evt = new ShowToastEvent({
            title : 'Success',
            message: 'New Account Created ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);
    }
}