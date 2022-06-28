public with sharing class ContactController {
    @AuraEnabled(cacheable=true)
 
    public static List<Contact> getContactsByAccountId(string accountId){
  
      return [SELECT id,FirstName,LastName,Phone,Email FROM Contact  WITH SECURITY_ENFORCED]; 
      
  
    }
}
