declare module "@salesforce/apex/ContactListSearchController.getContactList" {
  export default function getContactList(param: {searchKey: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactListSearchController.getAccountList" {
  export default function getAccountList(param: {name: any}): Promise<any>;
}
declare module "@salesforce/apex/ContactListSearchController.verifyUser" {
  export default function verifyUser(param: {username: any, password: any}): Promise<any>;
}
