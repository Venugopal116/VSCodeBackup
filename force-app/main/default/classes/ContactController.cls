public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
 
    public static List<Contact> getContactsByAccountId(List<id> selectedAccountIdlist ){
  
      return [SELECT id,AccountId,Account_Name__c,FirstName,LastName,Phone,Email FROM Contact WHERE AccountId IN:selectedAccountIdlist]; 
      
  
    }
    // public static List<Contact> getContactsByAccountId(List<id> selectedAccountIdlist ){

    //   List<contact>conlist=new List<contact>();

    //   for(Contact con:[SELECT id,AccountId,FirstName,LastName,Phone,Email FROM Contact WHERE AccountId IN:selectedAccountIdlist]){
    //     conlist.add(con);
    //   }
  
    //   return conlist;
      
  
    // }
}
