public with sharing class accountNameSearch {
    public accountNameSearch() {

    }
    @AuraEnabled
    public static List<Account> matchingAccountName(String accName){
        accName = '%' + accName + '%';
        List<Account> accList = [SELECT Id, Name, AnnualRevenue, Rating, Industry FROM Account
                                    WHERE Name LIKE :accName];
        return accList;
    }
}
