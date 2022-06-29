public with sharing class LWCuniversalController {
   
    
    @AuraEnabled(Cacheable = true)
    public static List<Account> getAccounts(){
        //to getting Accounts
        List<Account> acclist=[SELECT Id,Name, Phone,Industry FROM Account ORDER BY Name];
        return acclist;
    }

    @AuraEnabled
    public static List<Account> deleteSelectedAccounts(List<string> accIdDelList) {
        list<account> delAccList=new list<Account>();

       for(Account acc:[SELECT id from Account WHERE id IN:accIdDelList]){
        delAccList.add(acc);
       }
    If(delAccList.size()>0){
        try{
            delete delAccList;
          }catch(exception e){
             throw new AuraHandledException('Unable to delete Accounts '+e.getMessage());
          }
    }
      return getAccounts();
    }

    // @AuraEnabled
    // public static void deleteSelectedAccounts(List<Account> accDelList) {
    //     delete accDelList;
    // }

    // @AuraEnabled
    // public static void deleteSelectedAccs (List<id> SelectedAccIdsListToDel){  
    //         //for deleting selected Accounts
    //       List<Account> deleteAccsList=new List<Account>();

    //       for(id accDelId : SelectedAccIdsListToDel){

    //         deleteAccsList.add(new Account(Id=accDelId));

    //         // Account con=new Account();
    //         // Acc.id=accDelId;
    //         // deleteAccsList.add(acc);
    //       }

    //       if(!deleteAccsList.isEmpty()) {
    //         delete deleteAccsList;
    //     }

    // }
}
