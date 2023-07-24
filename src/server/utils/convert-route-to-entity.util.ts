const mapping: Record<string, string> = {
  'cashback-offers': 'cashback_offer',
  'customer-inquiries': 'customer_inquiry',
  'loan-applications': 'loan_application',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
