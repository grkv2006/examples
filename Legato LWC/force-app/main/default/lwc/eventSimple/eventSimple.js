import { LightningElement } from 'lwc';

export default class EventSimple extends LightningElement {
    handlePrevious(){
        const prevEvent = new CustomEvent('previous', {detail: {param : "Previous is Clicked", param1: "Another message"}});
        this.dispatchEvent(prevEvent);
    }
    handleNext(){
        const nextEvent = new CustomEvent('next', {detail: {param1 : "Next is Clicked"}});
        this.dispatchEvent(nextEvent);
    }
}