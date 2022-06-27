public with sharing class LeadHandleClass {
    /*
    When inserting a lead if it already exits then automatically create a new contact opportunity 
    and account and delete the existing record (you can use email id for de-dupe)
    */

    public static void checkForExitingRecord(List <Lead> newList)
    {
           set<string> collectEmailSet = new set<string>();
           for(Lead elead : newList)
           {
                collectEmailSet.add(elead.email);
           } 

           system.debug('@collectEmailSet'+collectEmailSet);
        
        
            // check for the existing record

            if(collectEmailSet.size()>0)
            {

                map<String ,Lead> duplicateEmailMap = new map<String ,Lead>();
                for(Lead eLead : [SELECT 
                                        Id, 
                                        Name, 
                                        Email,
                                        IsConverted, 
                                        ConvertedDate,                  // here we checking the exisitng record name
                                        ConvertedAccountId,
                                        ConvertedContactId, 
                                        ConvertedOpportunityId 
                                FROM 
                                        Lead 
                                where 
                                    IsConverted = true
                                and 
                                    Email in : collectEmailSet] )
                {
                    if(duplicateEmailMap.containsKey(eLead.email)) //true
                    {
                         duplicateEmailMap.put(eLead.email,elead);  // putting all the values
                    }
                    duplicateEmailMap.put(elead.email,elead); 
                }
                try
                    {
                        list<Database.DeleteResult> drList = Database.delete(duplicateEmailMap.values(), true);

                        for(Database.DeleteResult edelete : drList)
                        {
                            if (edelete.isSuccess()) {
                                // Operation was successful, so get the ID of the record that was processed
                                System.debug('Successfully deleted account with ID: '+ edelete.getId());
                            }
                            else {
                                // Operation failed, so get all errors                
                                for(Database.Error err : edelete.getErrors()) {
                                    System.debug('The following error has occurred.');                    
                                    System.debug(err.getStatusCode() + ': '+ err.getMessage());
                                    System.debug('Account fields that affected this error: ' + err.getFields());
                                }
                            }
                        }

                    }
                    catch(exception e)
                    {
                        system.debug('error');
                    }

                
            }
        
    }
}