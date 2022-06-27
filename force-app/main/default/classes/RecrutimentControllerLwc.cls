public with sharing class RecrutimentControllerLwc {
    // public RecrutimentControllerLwc() {

    // }

    @AuraEnabled
    public static Recrutiment__c insertCandidate(Recrutiment__c candidate) {
        if(candidate!= null){
            insert candidate;
        }       
        return candidate;
    }
    @AuraEnabled(cacheable=true)
    public static List<Recrutiment__c> getAllFieldDataToResume(id recordId) {
        
        list<Recrutiment__c> getAllfieldsDataRecObj=[SELECT Id, 
                                                            Name, 
                                                            Candidate_Name__c, 
                                                            Phone__c, 
                                                            Email__c,
                                                            Years_Of_Exp__c,
                                                            Notice_Period_Days__c,
                                                            Current_Location__c,
                                                            Primary_Skill__c,
                                                            Secondary_Skill__c, 
                                                            Choose_Skill_Set__c
                                                       FROM Recrutiment__c
                                                      WHERE id=:recordId 
                                                      LIMIT 100];

        return getAllfieldsDataRecObj;
    }

}
