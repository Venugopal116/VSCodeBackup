public with sharing class ContactLwcController_G {

  @AuraEnabled(cacheable=true)
 
  public static List<Contact> getContactsByAccountId(string accountId){

    return [SELECT id,FirstName,LastName,Phone,Email FROM Contact  WITH SECURITY_ENFORCED]; 
    

  }
 
  @AuraEnabled(cacheable=true)
 
  public static List<Contact> getContacts(){

    list<Contact>conList=new List<Contact>();
    conList=[SELECT id,Name,Phone,Email FROM Contact  WITH SECURITY_ENFORCED
    LIMIT 10]; 
    return conList;

  }
  @AuraEnabled(cacheable=true)
  public static List<Contact> getcontactList (){
    return [
          SELECT
          Id,
          Name,
          FirstName,
          LastName,
          Title,
          Phone,
          Email
          FROM Contact  WITH SECURITY_ENFORCED
          LIMIT 10
  ];
  }

  // @AuraEnabled
  // public static void  verifyUser(string username,string password){//string name
    
  //   List<Contact> verifyConList = [SELECT id,Name,Phone,Email FROM Contact WHERE Email =:username AND Phone=:password];

  //      if(verifyConList.size()>0){
  //       return true;
  //      }
      
  // }

  // @AuraEnabled(cacheable=true)
  // public static List<Contact> getContactList() {
  //     return [
  //         SELECT Id, Name, Title, Phone, Email, Picture__c
  //         FROM Contact
  //        // WHERE Picture__c != NULL
  //         //WITH SECURITY_ENFORCED
  //         LIMIT 10
  //     ];
  // }

  @AuraEnabled(cacheable=true)
  public static List<Contact> findContacts(String searchKey) {
      String key = '%' + searchKey + '%';
      return [
          SELECT Id, Name, Title, Phone, Email
          FROM Contact
          WHERE Name LIKE :key 
          WITH SECURITY_ENFORCED
          LIMIT 10
      ];
  }
//export data controller method

}
