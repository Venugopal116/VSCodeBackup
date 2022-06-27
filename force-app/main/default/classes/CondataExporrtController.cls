public with sharing class CondataExporrtController {
    @AuraEnabled(cacheable=true)
    public static List<Contact> getContactDataToExport(){
        List<Contact> lstContacts = [SELECT Id, FirstName, LastName, Email 
FROM Contact ]; //LIMIT 10
        return lstContacts;
    }
}


trigger OpportunityListItemInsert on Opportunity (after insert){
    //List of Opportunity related OpportunityLineItem
    List<OpportunityLineItem> oppProdList =new List<OpportunityLineItem>();
    for(Opportunity oppObj:Trigger.new){
    OpportunityLineItem oppProdObj=new OpportunityLineItem();
    //Assign only the Manditory fields for OpportunityLineItem
    //Making OpportunityLineItem related to Opportunity
    oppProdObj.OpportunityId=oppObj.Id;
    //To get id of Product2 and its related PricebookEntry
    //You can enter this query in Query Editor "SELECT Id,Product2Id FROM PricebookEntry"
    //And copy paste that Product and its PricebookEntry Ids here
    //Adding Product
    //check whether this Id is present in your data else take some other Id by executing the above query given
    oppProdObj.Product2Id='01t5g000004nsWXAAY';
    oppProdObj.Quantity=1;
    //Adding PriceBookEntry
    oppProdObj.PricebookEntryId='01u5g000004osOfAAI';
    oppProdObj.TotalPrice=50000;
    oppProdList.add(oppProdObj);
    }
    if(oppProdList.size()>0){
    insert oppProdList;
    }
    }
    