global class ContactNmae 
{
    webservice static String  getContactOb(String ContactName)
    {       
              String mes ;
               Contact con = new Contact(
               Description='Account Successfully Created',    
               lastName=ContactName);
            
            try
            {
                insert con;
                mes = 'inserted Succusfully +'+con.id;          
            }Catch(Exception e)
            {
                System.debug(e.getMessage());
            }
            
            return mes;
            
    }

}