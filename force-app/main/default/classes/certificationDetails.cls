public with sharing class certificationDetails {
    
    
    @AuraEnabled(cacheable=true) 
     public static list<Certification__c> getCertificationDetails(){
         return [SELECT ID , Name FROM Certification__c where Active__c=true  ORDER BY  Sequence__c ASC];
     }

    @AuraEnabled(cacheable=true)
    public static list<Contact> getAccountDetails(String searchaccount){

       string name = '%'+searchaccount+'%';

        return [Select Id ,Name,FirstName,LastName,Email,Phone,Birthdate,Account.Name FROM Contact WHERE Name =: searchaccount];
    }
}