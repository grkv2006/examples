import { api, LightningElement, wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import {getRecord, getFieldValue } from 'lightning/uiRecordApi'; // important if fetching data using wire adapters
import NAME_FIELD from '@salesforce/schema/Account.Name';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';

export default class RecordViewGetRecord extends LightningElement {
    @api recordId;

    accountObject = ACCOUNT_OBJECT;

    @wire(getRecord, {recordId: '$recordId', fields: [NAME_FIELD, RATING_FIELD, INDUSTRY_FIELD] })
    record;

    get nameValue(){
        return this.record.data ? getFieldValue(this.record.data , NAME_FIELD): ' ';
    }
    get ratingValue(){
        return this.record.data ? getFieldValue(this.record.data , RATING_FIELD): ' ';
    }
    get industryValue(){
        return this.record.data ? getFieldValue(this.record.data , INDUSTRY_FIELD): ' ';
    }
}