// Route definitions for AgentCortex application
export const routes = {
  home: '/',
  features: '/features',
  technology: '/technology',
  pricing: '/pricing',
  about: '/about',
  signIn: '/signin',
  startTrial: '/start-trial'
};

export const navigationLinks = [
  { path: routes.features, label: 'Features' },
  { path: routes.technology, label: 'Technology' },
  { path: routes.pricing, label: 'Pricing' },
  { path: routes.about, label: 'About' }
];