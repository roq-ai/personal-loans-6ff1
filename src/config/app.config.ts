interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Loan Officer', 'Financial Advisor', 'Customer Service Representative', 'Business Owner'],
  tenantName: 'Organization',
  applicationName: 'Personal Loans',
  addOns: ['chat', 'notifications', 'file'],
};
