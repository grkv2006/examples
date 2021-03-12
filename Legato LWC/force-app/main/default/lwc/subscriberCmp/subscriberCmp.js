import { LightningElement, wire } from 'lwc';
import {subscribe, MessageContext } from 'lightning/messageService';
import SAMPLE_MESSAGE from '@salesforce/messageChannel/record_msg__c';

export default class SubscriberLWC extends LightningElement {

    receivedMessage = '';
    receivedMessage2 = '';

    @wire(MessageContext)
    messageContext;

    connectedCallback(){
        console.log('inside connecteCallback');
        this.subscribeMessageChannel();
    }

    subscribeMessageChannel(){
        subscribe(this.messageContext, SAMPLE_MESSAGE, (result) => this.handleMessage(result));
    }
    
    handleMessage(result){
        this.receivedMessage = result.message;
    }
}