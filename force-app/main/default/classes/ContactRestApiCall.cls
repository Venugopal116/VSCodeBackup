@restResource(urlMapping='/accounts/*')
global class ContactRestApiCall 
{
		@HttpGet
    	global static Account getAccount()
        {
            //endpointurl:https://rajagopaltypreslimitted-dev-ed.my.salesforce.com/services/apexrest/accounts/0015g00000ZZeXMAA1*	
            RestRequest req = RestContext.request;
            String AccNumber= req.requestURI.substring(req.requestURI.lastIndexOf('/')+1);
            return [select id,Name,AccountNumber FROM Account where AccountNumber =: AccNumber];
            
            
            
            
        }
        @HttpPost
    	global static id insertAccount(String Name , String AccountNumber , integer AnnualRevenue)
        {
            Account Acc = new Account();
            acc.Name=Name;
            acc.AccountNumber=AccountNumber;
            acc.AnnualRevenue=AnnualRevenue;
            
            try
            {
                insert Acc;
                
            }catch(Exception e)
            {
                System.debug('Error'+e.getMessage());
            }
            
            return Acc.id;
            
        }
        @HttpPatch
    //endpointurl:https://rajagopaltypreslimitted-dev-ed.my.salesforce.com/services/apexrest/accounts/0015g00000ZZeXMAA1*
        global Static id updateRecord()
        {
            
            RestRequest req = RestContext.request;
            String Accnum =req.requestURI.SubString(req.requestURI.lastIndexOf('/')+1);
            Account acc = [select id,Name,AccountNumber FROM Account where AccountNumber=:Accnum];
            
            map<string,Object> acc1 = (map<string,Object>)JSON.deserializeUntyped(req.requestBody.toString());
            system.debug('acc1'+acc1);
            
            
            
            for(String acc2 : acc1.keySet())
            {
                system.debug('acc1.keySet()'+acc2);
                acc.put(acc2,acc1.get(acc2));
                system.debug('acc'+acc1.get(acc2));
            }
            
              try
            {
                update acc;
                
            }catch(Exception e)
            {
                System.debug('Error'+e.getMessage());
            }
            
            return Acc.id;
            
        }
    	@HttpDelete
    	global static void deleteRecord()
        {
           RestRequest req = RestContext.request;
           String Acc= req.requestURI.SubString(req.requestURI.lastIndexOf('/')+1);
           Account Acc2 = [select id,Name,AccountNumber FROM Account where AccountNumber =: Acc];
               
             try
            {
                delete Acc2;
                
            }catch(Exception e)
            {
                System.debug('Error'+e.getMessage());
            }
            
            
        }
    	 
        
     
}