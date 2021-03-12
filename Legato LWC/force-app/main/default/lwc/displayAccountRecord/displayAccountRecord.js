import { LightningElement, wire } from 'lwc';
import getAccountRecords from '@salesforce/apex/accountController.getAccountRecords';

export default class DisplayAccountRecord extends LightningElement {

    @wire(getAccountRecords)
    property;
}