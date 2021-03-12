import { LightningElement, wire } from 'lwc';
import {publish, MessageContext } from 'lightning/messageService';

import SAMPLE_MESSAGE from '@salesforce/messageChannel/record_msg__c';

export default class publisherCmp extends LightningElement {
    msg;

    @wire(MessageContext)
    messageContext;

    handleChange(event){
        this.msg = event.target.value;
        console.log('msg: ', this.msg);
    }
    
    handleSubmit(){
        console.log('msg in handleSubmit: ', this.msg);
        publish(this.messageContext, SAMPLE_MESSAGE, {message: this.msg});
    }
}