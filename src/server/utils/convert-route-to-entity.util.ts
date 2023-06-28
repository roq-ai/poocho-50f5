const mapping: Record<string, string> = {
  answers: 'answer',
  organizations: 'organization',
  questions: 'question',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
