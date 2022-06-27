public class FutureClass
{
    @future
    public static void myFutureMethod(String Acc)
    {   
        
        System.debug('@@ String '+  Acc);
        
        list<WrapperClass> wrplist = (list<WrapperClass>)JSON.deserialize(Acc,list<WrapperClass>.Class);
        System.debug('@ list of WrapperClass'+wrplist);
         
        //List<Account> acclist = (list<Account>)JSON.deserialize(Acc, list<Account>.class);
        
        //System.Debug('@@ After Deserialize'+acclist);
        
        
       // WrapperClass  deWrapper = (WrapperClass)JSON.deserialize(Acc,WrapperClass.Class);
        
        //System.debug('@ deWrapper'+ deWrapper);
        
        //list of wrapperclass
        
        
        
       
        
    }
    
    
}