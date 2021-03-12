import { api, LightningElement } from 'lwc';

export default class dynamicExample extends LightningElement {
    @api
    recordId;

    @api
    objectApiName;

    fields = ['AccountId', 'Name', 'Title', 'Phone', 'Email'];
    
}