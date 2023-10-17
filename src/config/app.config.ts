
    interface AppConfigInterface {
      ownerRoles: string[],
      customerRoles: string[],
      tenantRoles: string[],
      tenantName: string,
      applicationName: string
      addOns: string[]
      ownerAbilities: string[],
      customerAbilities: string[],
      getQuoteUrl: string
    }
    export const appConfig: AppConfigInterface = {"ownerRoles":["Business Owner"],"customerRoles":["Guest"],"tenantRoles":["Business Owner","HR Manager","Payroll Administrator","Employee","Accountant"],"tenantName":"Company","applicationName":"HR Information System","addOns":["file upload","chat","notifications","file"],"customerAbilities":["View company information","View employee information","View vacation details","View payroll details"],"ownerAbilities":["Manage company information","Manage employee information","Manage payroll","Manage vacation requests"],"getQuoteUrl":"https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/67a321af-b773-41d9-a00d-68be5422db65"}
  