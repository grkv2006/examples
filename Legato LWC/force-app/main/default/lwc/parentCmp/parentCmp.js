import { LightningElement } from 'lwc';

export default class ParentCmp extends LightningElement {
    parentValue="Legato";

    handleChange(event){
        this.parentValue = event.target.value;
    }
}