import { LightningElement } from 'lwc';
import matchingAccountName from '@salesforce/apex/accountNameSearch.matchingAccountName';

export default class AccountNameSearching extends LightningElement {
    result;
    error;
    strAccountName= '';
    columns = [
        {
            label : "Name",
            fieldName : "Name"
        },
        {
            label : "Annual Revenue",
            fieldName : "AnnualRevenue"
        },
        {
            label : "Rating",
            fieldName : "Rating"
        },
        {
            label : "Industry",
            fieldName : "Industry"
        }
    ];

    handleAccountName(event){
        this.strAccountName = event.detail.value;
    }

    handleReset(){
        this.result = false;
    }

    handleSearch(){
        matchingAccountName({accName : this.strAccountName})
            .then((result) => {
                this.result = result;
            }).catch((error) => {
                this.error = error;
            })
    }
}