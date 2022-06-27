// Syntax: list<datatype> usg = new list<datatype>();
public  class Listusaged
{
   list<String> rk ;

   public  void addData()
   {    rk = new list<String>();
        rk.add('Vikranth');
        rk.add('Raghu');
        rk.add('vamshi');
        rk.add('Gautam');
   }

   public list<String> sortData()
   {
        // sort the data in descending order

        rk.sort();
        list<String> tjm ;

        // i want data in descending order
        tjm= new list<String>();
        for (integer i=rk.size()-1;i>=0;i--)
        {
                tjm.add(rk[i]);
        }

        return tjm;
   }

   public void cloneData()
   {

        addData();
        sortData();
       list<String> Name = rk.clone();
       list<String> Name1 = new list<String>();
       Name1.addall(Name);
       
       System.debug('cLONEdATA'+Name);
       system.debug('Sorted Data'+rk);

   }

   
}


//new Listusaged().cloneData();