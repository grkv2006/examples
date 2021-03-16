import { api, LightningElement } from 'lwc';

export default class LwcCmp extends LightningElement {
    @api
    recId;
    accFields = ['Name', 'Rating', 'Phone', 'Type', 'Industry'];
}