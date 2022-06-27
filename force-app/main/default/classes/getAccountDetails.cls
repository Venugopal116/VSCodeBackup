public with sharing class getAccountDetails {
    
    @AuraEnabled(cacheable=true)
    public static list<Account> getaccountDetails(){
          return [Select Id , Name From Account Limit 10];
     }
     @AuraEnabled(cacheable=true)
     public static list<Account> getaccountDetails(String Name){
          return [Select Id , Name From Account Where Name =: Name Limit 10];
     }
}