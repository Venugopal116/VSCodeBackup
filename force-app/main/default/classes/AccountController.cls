public without sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts() {

        return [SELECT id,Name,Phone FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
   
    public static List<Account> getAccountList() {

        return [SELECT id,Name,Phone FROM Account LIMIT 10];
    }

    @AuraEnabled(cacheable=true)    
    public static List<Account>  getAccountListForSearch2(string accSearch){    // for account search
        accSearch='%'+accSearch+'%';
          return[SELECT id,Name,Phone,Industry FROM Account WHERE Name =: accSearch ];
          
        
    }

    @AuraEnabled(cacheable=true)    
    public static List<Account>  getAccountListForSearch(string searchKey){    // for account search
          searchKey= '%'+searchKey+'%';
          return[SELECT id,Name,Phone,Industry FROM Account WHERE Name LIKE :searchKey OR Phone LIKE : searchKey OR Industry LIKE: searchKey];
          
        
    }
}
