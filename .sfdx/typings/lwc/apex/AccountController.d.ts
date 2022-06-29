declare module "@salesforce/apex/AccountController.getAccounts" {
  export default function getAccounts(): Promise<any>;
}
declare module "@salesforce/apex/AccountController.getAccountList" {
  export default function getAccountList(): Promise<any>;
}
declare module "@salesforce/apex/AccountController.getAccountListForSearch" {
  export default function getAccountListForSearch(param: {searchKey: any}): Promise<any>;
}
