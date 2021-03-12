import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class UseCase2 extends LightningElement {
    isVisible = false;
    name = '';
    phone = '';
    email = '';
    handleClick() {
        this.isVisible = true; 
        const evt = new ShowToastEvent({
            title : 'Hurray !!',
            message : 'Button is clicked',
            variant : 'destructive'
        });
        this.dispatchEvent(evt);
    }

    handleChangeName(xyz) {
        this.name = xyz.target.value;
    }
    handleChangePhone(event) {
        this.phone = event.target.value;
    }
    handleChangeEmail(event) {
        this.email = event.target.value;
    }
}