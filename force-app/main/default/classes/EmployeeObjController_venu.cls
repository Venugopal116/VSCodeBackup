public with sharing class EmployeeObjController_venu {

     @AuraEnabled(cacheable=true)
    public static List<Employee__c> getEmployeeList(){

      return [SELECT Id,
                    Name,
                    Firstname__c,
                    Lastname__c,Email__c,
                    Mobile__c,DOB__c,Username__c,Password__c,
                    Nationality__c,Religious__c,OTP__c,PAN_No__c,Aadhaar_No__c
               FROM Employee__c];
    }

    @AuraEnabled(cacheable=true)
    public static List<Employee__c> employeeSearch(string searchKey){
        searchKey= '%'+searchKey+'%';
          
         return[ SELECT Id,Name,Firstname__c,Lastname__c,Email__c,Mobile__c
                 FROM Employee__c 
                 WHERE Name LIKE :searchKey OR
                 Firstname__c LIKE :searchKey OR
                 Lastname__c LIKE :searchKey OR
                 Email__c LIKE :searchKey OR
                 Mobile__c LIKE :searchKey 
                  ];
    }
    //------------------------------------------------------------------
    @AuraEnabled
    public static Employee__c insertEmp(Employee__c emp) {
        if(emp!= null){
            insert emp;
        }       
        return emp;
    }

    @AuraEnabled(cacheable=true)
    public static List<Employee__c> displayEmpRecordForDelete(){

           List<Employee__c> empList = [SELECT Id,Name,Email__c,Mobile__c,Aadhaar_No__c FROM Employee__c limit 8];                                     
                                 
        return empList;
    }

   

    @AuraEnabled
    public static void employeeDelete(String recordId){


        Employee__c emp=new Employee__c();
        emp.Id = recordId;

        delete emp;
 
    }

   

        @AuraEnabled(Cacheable = true)
        public static List<Employee__c> getEmpforEditSave() {
    
            List<Employee__c> empList = [SELECT Id,Name,Email__c,Mobile__c,Aadhaar_No__c FROM Employee__c WHERE Email__c != null AND Mobile__c != null ORDER BY CreatedDate DESC ];
    
            return empList;
        }    
    


}
