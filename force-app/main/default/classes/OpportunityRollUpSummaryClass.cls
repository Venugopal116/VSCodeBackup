public with sharing class OpportunityRollUpSummaryClass implements Database.Batchable<Sobject> {

        public Database.QueryLocator start(Database.BatchableContext bc)
        {
                    String query = 'Select Id , Name , Description from Account Where Description = null ';

                 return Database.getQueryLocator(query);
        }

        public void execute( Database.BatchableContext bc, list<Sobject> scope)
        {   
                set<Id>  accIdSet = new set<Id>();
                for (sObject acclist : scope)
                {
                        accIdSet.add(acclist.Id);
                }
                OpportunityControllerClass.opportunityRollUpSummary( accIdSet);
        }
        public void finish(Database.BatchableContext bc)
        {

        }


        
}