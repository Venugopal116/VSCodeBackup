public with sharing class ContactListSearchController {
   // public ContactListSearchController() {

   // }
    @AuraEnabled(cacheable=true)
    public static List<Contact>  getContactList(string searchKey){//string name
      searchKey= '%'+searchKey+'%';
          //string conQuery='SELECT id,name,phone,Email FROM Contact WHERE name LIKE :key';
         // system.debug('query--------->'+conQuery); // WHERE name LIKE :key
          //return database.query(ConQuery);
         // system.debug('query--------->'+ return database.query(ConQuery));
         return[SELECT id,Name,Phone,Email FROM Contact WHERE name LIKE :searchKey];
    }
    @AuraEnabled(cacheable=true)
    public static List<sObject>  getAccountList(string name){
          string key= '%'+name+'%';
          string accQuery='SELECT id,name,Industry FROM Account WHERE name LIKE :key';
          return database.query(accQuery);
        
    }


    @AuraEnabled
    public static Boolean verifyUser(string username,string password){//string name
      
      List<Contact> verifyConList = [SELECT id,Name,Phone,Email FROM Contact WHERE Email=:username AND Phone=:password];

         if(verifyConList.size()>0){
          return true;
         
        
    }else{
      return false;
    }

}
}
