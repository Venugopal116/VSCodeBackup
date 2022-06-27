public with sharing class ContactTriggerHandler {
    public static void ContactTriggerHandler1() {
            //return type ll be list<Sobject>
            // if we writittring a trigger in method , we need to list<Contact> triggernew = (list<Contact>)trigger.new 
            list<Contact> triggernew = (list<Contact>)trigger.new;
            list<Contact> triggerold = (list<Contact>)trigger.old;
            
            set<id> accid = new set<id>();
            for(Contact con : trigger.isDelete?triggerold:triggernew)
            {
                 if(con.AccountId!=null )
                 {
                    accid.add(con.AccountId);
                 }
            }
            system.debug('Accountid'+accid);
            if(accid.size()>0)
            {
               
                  list<Contact> con = [select AccountId , MailingCountry FROM Contact where AccountId in : accid and MailingCountry='USA'];

                  
                  system.debug('contact'+con);
                  integer Count = 0;
                  
                  map<id,integer> accs = new map<id,integer>();
                  for (Contact Cons:con)
                  {
                       if(accs.containsKey(Cons.AccountId))
                       {
                            Count = accs.get(Cons.AccountId)+1;
                            accs.put(Cons.AccountId,Count);
                       }else {
                           accs.put(Cons.AccountId,1);
                       }
        
                       
                  }
        
                  System.debug('Count'+Count);
                  System.debug('Map of Account'+accs);
        
                 
                 if(accid.size()>0)
                 {
                       list<Account> accd = new List<Account>();
                       for (id ac : accid )
                       {
                            Account acc = new Account();
                            acc.id=ac;
                            acc.NumberofLocations__c = accs.get(ac);        
                            accd.add(acc);           
                       }
        
        
                       try
                       {
                            update accd;
                       }catch(Exception e)
                       {
                            system.debug(e.getMessage());
                       }
                 }
                  
           }

     }
    //using SUBQuery , how can we achieve the requriment
    public static void subQueryMehtod()
    {
            list<Contact> triggernew = (list<Contact>)trigger.new;
            list<Contact> triggerold = (list<Contact>)trigger.old;
            map<id,Contact> triggeroldmap=(map<id,Contact>)Trigger.OldMap;
            set<id> accid = new set<id>();
            for(Contact con : trigger.isDelete?triggerold:triggernew)
            {
                 if(con.AccountId!=null )
                 {
                    accid.add(con.AccountId);
                 }

                 if(trigger.isUpdate&& con.AccountId!=triggeroldmap.get(con.id).AccountId)// here we feeding the contact id 
                 {
                    if(con.AccountId!=null )
                    {
                       accid.add(triggeroldmap.get(con.id).AccountId);
                       system.debug('contactAccount'+con.AccountId);
                    }
                 }
            }
            system.debug('Accountid'+accid);
            if(accid.size()>0)
            {
                list<Account> Acc =  [select id,NumberofLocations__c ,(select AccountId , MailingCountry FROM Contacts where MailingCountry='USA')FROM Account 
                                      where Id in : accid ];
                system.debug('Account'+Acc);

                for (Account Ac : Acc)
                {
                    Ac.NumberofLocations__c= Ac.Contacts.size();
                }
                update Acc;
            }
    }public static void aggregrateResultMethod()
    {
        list<Contact> triggernew = (list<Contact>)trigger.new;
        list<Contact> triggerold = (list<Contact>)trigger.old;
        
        set<id> accid = new set<id>();
        for(Contact con : trigger.isDelete?triggerold:triggernew)
        {
             if(con.AccountId!=null )
             {
                accid.add(con.AccountId);
             }
        }
        system.debug('Accountid'+accid);
        
        if(accid.size()>0)
        {
            list<AggregateResult> aggres=[select Count(id),AccountId  FROM Contact where AccountId in:accid AND MailingCountry ='USA' GROUP BY AccountId];
            System.debug('Aggregate Results'+aggres);

            if(aggres!=null && aggres.size()>0)
            {
                list<Account> ac = new List<Account>();
                for(AggregateResult agr: aggres)
                {
                    Account acc = new Account();
                    acc.id=(Id)agr.get('AccountId');
                    acc.NumberofLocations__c=(integer)agr.get('expr0');
                    ac.add(acc); 
                }
                update ac;
            }

        }



    }


}