public  class AccountHelperClass {
    
   public void bibu()
   {

   }
   public void bd()
   {
 
   }
   public  void aiau(list<Account> newList, Map<Id,Account> oldMap , Boolean isUpdate )
   {

       if(isUpdate)
       {
           Map<Id,Id> changeMapId = new Map<Id,Id>();
            
          
           for(Account acc : newList)
           {
                if(acc.OwnerId != oldMap.get(acc.Id).OwnerId)
                {
                    changeMapId.put(acc.Id,acc.OwnerId);
                }
           }
           
           if(changeMapId!= null)
           {   
				list<Account> updateOwnerId = new list<Account>();
                //getting a parentAccountRecord
                for (Account upaccHier : [Select 
                                                Id,OwnerId,
                                                ParentId,Parent.OwnerId,//Ist Level
                                                Parent.ParentId,Parent.Parent.OwnerId,//2ndLevel
                                                Parent.Parent.ParentId,Parent.Parent.Parent.OwnerId,//3rd Level
                                                Parent.Parent.Parent.parentId,Parent.Parent.Parent.Parent.OwnerId,//4th Level
                                                Parent.Parent.Parent.Parent.ParentId,Parent.Parent.Parent.Parent.Parent.OwnerId //5th Level
                                            From 
                                                Account
                                            Where 
                                                Id in :changeMapId.keySet()])
                {
                    
                      if(upaccHier.ParentId != null)
                      {    
                          system.debug('upaccHier.ParentId'+upaccHier.ParentId);
                           Account updateParentAcc = new Account();
                           updateParentAcc.Id = upaccHier.ParentId;
                           updateParentAcc.OwnerId = upaccHier.OwnerId;
                           updateOwnerId.add(updateParentAcc);
                          
                      }
                      if(upaccHier.Parent.ParentId != null)
                      {    
                          system.debug('upaccHier.Parent.ParentId'+upaccHier.Parent.ParentId);
                           Account updateParentAcc = new Account();
                           updateParentAcc.Id = upaccHier.Parent.ParentId;
                           updateParentAcc.OwnerId = upaccHier.OwnerId;
                           updateOwnerId.add(updateParentAcc);
                          
                      }
                      if(upaccHier.Parent.Parent.ParentId != null)
                      {    system.debug('upaccHier.Parent.Parent.ParentId'+upaccHier.Parent.Parent.ParentId);
                           Account updateParentAcc = new Account();
                           updateParentAcc.Id = upaccHier.Parent.Parent.ParentId;
                           updateParentAcc.OwnerId = upaccHier.OwnerId;
                           updateOwnerId.add(updateParentAcc);
                          
                      }
                      if(upaccHier.Parent.Parent.Parent.ParentId != null)
                      {
                           Account updateParentAcc = new Account();
                           updateParentAcc.Id = upaccHier.Parent.Parent.Parent.ParentId;
                           updateParentAcc.OwnerId = upaccHier.OwnerId;
                           updateOwnerId.add(updateParentAcc);
                          
                      }
                      if(upaccHier.Parent.Parent.Parent.Parent.ParentId != null)
                      {
                           Account updateParentAcc = new Account();
                           updateParentAcc.Id = upaccHier.Parent.Parent.Parent.Parent.ParentId;
                           updateParentAcc.OwnerId = upaccHier.OwnerId;
                           updateOwnerId.add(updateParentAcc);
                          
                      }

               try
               {   
                   system.debug(updateOwnerId);
                   Update updateOwnerId;
                   
               }
               catch(Exception e)
               {
                     system.debug(e.getMessage());
               }



                }

            }


       }


   }
   public void ad()
   {

   }
   public void aud()
   {

   }
}