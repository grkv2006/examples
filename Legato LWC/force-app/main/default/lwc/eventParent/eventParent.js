import { LightningElement } from 'lwc';

export default class EventParent extends LightningElement {
    page = 1;
    message="";
    message1 ="";
    handPrev(event){
        if(this.page > 1){
            this.page = this.page -1;
            this.message = event.detail.param;
            this.message1 = event.detail.param1;
        }
    }

    handNext(event){
        this.page = this.page + 1;
        this.message = event.detail.param1;
    }
}