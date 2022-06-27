import { LightningElement } from 'lwc';
export const fetchUrlBasedOnKey = (key) => {
    let urlMap = {
        tracker :'https://docs.google.com/spreadsheets/d/1eqOFdDiS4Rpr8Hd1Tcu4O6EUGNvslfb56lyS0auEHLY/edit#gid=0',
        employeeUrl :'www.salesfforce.com/home/employee',
        notificationUrl :'www.salesfforce.com/notification',
        projectUrl :'www.salesfforce.com/projects',
      }
      return urlMap[key]?urlMap[key]:'';
}
// export {fetchUrlBasedOnKey};
  

   
