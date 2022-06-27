public with sharing class UtilityClassLwc {
   // public UtilityClassLwc() {

   // }
    @AuraEnabled
    public static Map<integer,string> mapDemo(){
        Map<integer,string> testMap= new Map<integer,string> ();
        testMap.put(1,'Annie MArie');
        testMap.put(2,'Bellie Elliesh');
        testMap.put(3,'Marshmellow');
        testMap.put(4,'Sandhu');
        return testMap;
    }
        @AuraEnabled
        public static string testName(){
           return 'test string';
        }

       
    
}
