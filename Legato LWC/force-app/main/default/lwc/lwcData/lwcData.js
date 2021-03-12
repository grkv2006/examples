import { api, LightningElement } from 'lwc';

export default class LwcData extends LightningElement {

    connectedCallback(){
        alert('This is lwcData Component');
    }
}