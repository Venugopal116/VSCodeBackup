public class SPOONNACULRpROJECT1 
{   
    public static String RecipeSearch{get;set;}
    public static String title {set;get;}
    public static String image {set;get;}

    ApexPages.Message myMsg;
      public static void getValue()
      {
        
        // here we assigning thye values 
        map<id,WrapperClass.ResultResponse> value = spoonaculrProject.getrecipe();
       // System.debug(value.get(RecipeSearch));
       System.debug(value);

        ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity.INFO,value.get(RecipeSearch).toString());
       // Apexpages.addMessage(myMsg);

       // ApexPages.Message myMsg = new ApexPages.Message(ApexPages.Severity
        


    }
  }

/*
  if(RecipeSearch)
            {
              system.debug(skr.id);
              title=skr.title;
              image=skr.image;
              myMsg = new ApexPages.Message(ApexPages.severity.INFO,skr.title);
              ApexPages.addMessage(myMsg);
              system.debug('title'+skr.title);



*/