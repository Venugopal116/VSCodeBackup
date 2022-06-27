public class BankingJsonClass 
{
    public static void assignNonPrimative()
    {	
        list<Account> acclist = [Select Id,Name, Rating, NumberofLocations__c From Account];
       
        list<WrapperClass> wrklist = new list<WrapperClass>();
        for(Account eAcc : acclist)
        {
            WrapperClass wrks = new WrapperClass();
             wrks.Name=eAcc.Name;
        	 wrks.NumberofLocations=eAcc.NumberofLocations__c;
        	 wrks.Rating=eAcc.Rating;
          	wrklist.add(wrks);  
        }
        
       String lst = JSON.serialize(wrklist);
       FutureClass.myFutureMethod(lst);
         system.debug('@Future');
        
        
       
        
        
        // WrapperClass wrk = new WrapperClass();
        
        //wrk.Name=acclist[1].Name;
        //wrk.NumberofLocations=9;
        //wrk.Rating='Hot';

        
        
        
        // String Acc =JSON.serialize(acclist);
        
        
        //FutureClass.myFutureMethod(Acc);
        
     	//String wrapper1 = JSON.serialize(wrk);
        
        //FutureClass.myFutureMethod(wrapper1);
        
       
    }
}