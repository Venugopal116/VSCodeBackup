public with sharing class ContactController_Recipe {
   
        @AuraEnabled(cacheable=true)
        public static List<Contact> getContactList() {
            return [select id,Name,FirstName,LastName,Title,Phone,Email FROM Contact LIMIT 10];
        }

    }