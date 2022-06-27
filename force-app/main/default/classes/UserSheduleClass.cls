public with sharing class UserSheduleClass {
    @future
    public static void studentUpdate(map<id,id> usrd)
    {
            //set<id> ursd = usrdd;

            if(usrd.size()>0)
        {
            

            system.debug('Map'+usrd);


            list<Student__c> std = [select id,OwnerId FROM Student__c  where OwnerId in :usrd.keyset()];
            System.debug('std'+std);
            
            if(std!=null && std.size()>0)
            {
               for(Student__c str : std )
               {
                   str.OwnerId=usrd.get(str.OwnerId);
                   System.debug('str.OwnerId'+str.OwnerId);
               }


              try {
                   update std;
              } catch (Exception e) {
                  system.debug(e.getMessage());
              }

            }
        }

    }
}