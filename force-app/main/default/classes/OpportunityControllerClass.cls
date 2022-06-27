public with sharing class OpportunityControllerClass
{
     //Write a trigger/validation rule Allow to create only one opportunity for account.
      
        public static  Void  onlyOneOpportunityAllowed(list <Opportunity> acclst)
        {   
                   
                    Set <Id> accId = new Set<Id>(); 
                     for(Opportunity acc : acclst)
                     {
                                
                            if(acc.AccountId!=null)
                            {
                                   accId.add(acc.AccountId);
                            }

                     }
                        
                        
                              
                        if(accId.Size()>0)
                        {
                            list<Account>  acclist = 
                            [  Select Id ,
                                  (Select Id , AccountId From Opportunities)
                                  from Account
                                  where  Id  in  : accId ] ;  
                            
                            list<Opportunity> opps = new list<Opportunity>();
                                for(Account acc : acclist)
                                {
                                    for (Opportunity opp : acc.Opportunities)
                                    {
                                            opps.add(opp);
                                    }
                                }
                             if(opps.Size()>0)
                             {
                                   
                                 acclst[0].addError(' can create only one opportunity for account. ') ;
                                    
                                 }

            
                                
                             
                             

                       }
                        
         }


         
         public static void   CheckOpportunityAccount(list<Opportunity> newList )
            {
                      set<Id>  setStoreAccountId = new set<Id>();
                      set<Id> checkOppList = new set<Id>();
                     
                    for (Opportunity oppAcc : newList)
                    {
                                if(oppAcc.AccountId != null)
                                {
                                    setStoreAccountId.add(oppAcc.AccountId);
                                    checkOppList.add(oppAcc.Id);
                                }
                    }

                    if(setStoreAccountId!=null && setStoreAccountId.Size()>0)
                    {
                             Map <Id ,  Account>  mapGetAccount =  new Map <Id,Account>(
                                 [ Select Id , (Select Id , Name , StageName From Opportunities Where Id NOT IN: checkOppList) From Account  Where Id IN : setStoreAccountId ]
                             );

                             system.debug('mapGetAccount @@@@@ Map'+mapGetAccount);

                            if(mapGetAccount!=null)
                            {     
                                 List<Account> accTypeList =  new list<Account>();
                                    Account accType = New Account();
                                    system.debug(accType);
                                     for (Account Acc : mapGetAccount.values())
                                     {       
                                           
                                              for(Opportunity Opp : Acc.Opportunities)
                                              {      
                                                    
                                                      if(Opp.StageName.equals(  'Closed Won - Recurring' ) || Opp.StageName.equals ('Closed Won - Recurring'  ) ||  Opp.StageName.equals ( 'Closed Won')){
                                                            //accTypeList.clear();
                                                           
                                                            accType.Id = Acc.Id;
                                                             accType.Type = 'Customer';    
                                                    }else
                                                      {    
                                                            //accTypeList.clear();
                                                          
                                                            accType.Id = Acc.Id;
                                                            accType.Type = 'Prospect';  
                                                           
                                                    }

                                                      
                                              }
                                     }
                                     accTypeList.add( accType);

                                                      if(accTypeList.size()>0)
                                                      {
                                                           // update  accTypeList;
                                                            system.debug('@ update of accTypeList ');
                                                      }
                            }

                            

                            
                                 System.debug( mapGetAccount );

                             
                    }

            }

        public static void opportunityRollUpSummary(set <Id> accIdSet)
        {
                        //here we are getting the account id

                    list<Opportunity >  oppList = [select Id , AccountId , DeliveryInstallationStatus__c from Opportunity Where DeliveryInstallationStatus__c  =  'In progres' And  AccountId In : accIdSet  ];

                    Map <String, Integer> accMap = new Map<String , Integer>();
                    for(Opportunity eOpp : oppList )
                    {
                           
                             if(accMap.containsKey(eOpp.accountId))
                             {
                                    Integer Count =  accMap.get(eOpp.Id) +1;
                                    accMap.put(eOpp.Id,Count);
                             }
                             else
                             {
                                        accMap.put(eOpp.Id,1);

                             }

                    
                }


                list<Account>   updateAccLIST = new list<Account>();
                for(String eAcc : accMap.keySet())
                {
                        Account updateAcc = new Account();
                        updateAcc.Id = eAcc;
                        updateAcc.NumberofLocations__c = accMap.get(eAcc);
                        updateAccLIST.add(updateAcc);
                }

                update updateAccLIST;


        }

 }