public  class FoodandBeverages {
    
    private static String api = 'https://api.spoonacular.com'; 
    private static String key ='9c76c68216b2b4c7b212faf3bbb444202cb6e0fb';
    public static String RecipeSearch{get;set;}
    public static String Image{get;set;}
    public static String protein{get;set;}
    
    public static WrapperClass Recipe()
    {
        HttpRequest req = new HttpRequest();
        req.setEndPoint(api+'/recipes/complexSearch?apiKey='+key);
        req.setMethod('GET');

        http https = new http();
        HttpResponse res=https.send(req);
        //re.getBody();
        WrapperClass wrp  = (WrapperClass)JSON.deserialize(res.getBody(),WrapperClass.class);
        system.debug(wrp);

        return wrp;



    }

    public static  void getRecipe()
    {
        WrapperClass wr = Recipe();
        map<id,FoodandBeverageHelper> cls = new map<id,FoodandBeverageHelper>();
       // RecipeSearch = res;
        for (FoodandBeverageHelper wkr : wr.results)
        {
              
              //System.debug(wkr.id);
                if(RecipeSearch.equals(wkr.id))
                {
                                
                    System.debug(RecipeSearch);
                    cls.put(wkr.id,wkr);

                    break;

                }
            

        }
        system.debug(cls);

    }


 


}