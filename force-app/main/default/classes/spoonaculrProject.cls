public with sharing class spoonaculrProject {
     
    private static final String spoonacular = 'https://api.spoonacular.com';
    private static final String key= '2c8f7115fd4c44069be7918359033122';
   
    


    public static map<id,WrapperClass.ResultResponse> getrecipe()
    {
        httpRequest req = new httpRequest();
        req.setEndPoint(spoonacular+'/recipes/complexSearch?apiKey='+key);
        req.setMethod('GET');

        //Response 
        HTTP http = new HTTP();
        httpResponse res = http.send(req);
        System.debug('Results   +' + res.getBody());
        WrapperClass wrp =(WrapperClass)JSON.deserialize(res.getBody(), WrapperClass.class);
       

        map<id,WrapperClass.ResultResponse> RecipeDetails =  new map<id,WrapperClass.ResultResponse>();
        for( WrapperClass.ResultResponse wrps : wrp.Results)
        {
             System.debug(wrps);
            
        }

        system.debug('RecipeDetails'+RecipeDetails);

        return  RecipeDetails;
    }


    

    public static void recipeInformation(String recipeID)
    {
        httpRequest req = new httpRequest();
        req.setEndPoint(spoonacular+'/recipes/recipeID/information?apiKey='+key);
        //https://api.spoonacular.com/recipes/{id}/information
        req.setMethod('GET');

        //Response 
        HTTP http = new HTTP();
        httpResponse res = http.send(req);
        if(res.getStatusCode()==200)
        {
            System.debug(res.getBody());
        }

    }

    public static void findByNutrients(Integer minCarbs,Integer maxCarbs,Integer Num)
    {
        httpRequest req = new httpRequest();
        req.setEndPoint(spoonacular+'/recipes/findByNutrients?apiKey='+key+'&minCarbs='+minCarbs+'&maxCarbs='+maxCarbs+'&number'+Num);
        //https://api.spoonacular.com/recipes/findByNutrients
        req.setMethod('GET');

        //Response 
        HTTP http = new HTTP();
        httpResponse res = http.send(req);
        if(res.getStatusCode()==200)
        {
            WrapperClass wrp =(WrapperClass)JSON.deserialize(res.getBody(), WrapperClass.class);

            System.debug(wrp);

            // for(person p : wrp.Results)
            // {
            //     system.debug(p.id);
            // }
        }

    }

    




}