import { Clock, TrendingDown, Users, Building2, History } from 'lucide-react';

export const keyInsights = [
  {
    id: 1,
    title: 'Lead Time is the #1 Predictor',
    icon: 'Clock',
    color: 'primary',
    importance: '35%',
    finding: 'Bookings made far in advance have dramatically higher cancellation rates.',
    stats: [
      { label: '0-30 days', value: '14.2%', trend: 'low' },
      { label: '365+ days', value: '95.5%', trend: 'high' }
    ],
    recommendation: 'Implement tiered cancellation policies based on lead time. Require deposits for bookings >90 days in advance.',
    impact: 'High'
  },
  {
    id: 2,
    title: 'Special Requests = Commitment',
    icon: 'TrendingDown',
    color: 'success',
    importance: '10%',
    finding: 'Customers who make special requests are significantly less likely to cancel.',
    stats: [
      { label: '0 requests', value: '43.5%', trend: 'high' },
      { label: '4+ requests', value: '2.1%', trend: 'low' }
    ],
    recommendation: 'Encourage customers to specify preferences during booking. Create engagement touchpoints pre-arrival.',
    impact: 'High'
  },
  {
    id: 3,
    title: 'Online Bookings are High Risk',
    icon: 'Building2',
    color: 'danger',
    importance: '6%',
    finding: 'Online market segment shows the highest cancellation rates compared to other channels.',
    stats: [
      { label: 'Online', value: '45.2%', trend: 'high' },
      { label: 'Corporate', value: '18.2%', trend: 'low' }
    ],
    recommendation: 'Apply stricter cancellation policies for online bookings. Offer non-refundable rate discounts.',
    impact: 'Medium'
  },
  {
    id: 4,
    title: 'History Predicts Behavior',
    icon: 'History',
    color: 'warning',
    importance: '~10%',
    finding: 'Customers with previous cancellations are much more likely to cancel again.',
    stats: [
      { label: 'No history', value: '28.4%', trend: 'low' },
      { label: 'Has history', value: '67.8%', trend: 'high' }
    ],
    recommendation: 'Implement customer risk scoring. Flag repeat cancellers for stricter deposit requirements.',
    impact: 'High'
  },
  {
    id: 5,
    title: 'Loyal Guests Stay Committed',
    icon: 'Users',
    color: 'success',
    importance: '~11%',
    finding: 'Repeated guests have significantly lower cancellation rates than first-time bookers.',
    stats: [
      { label: 'First-time', value: '34.2%', trend: 'high' },
      { label: 'Repeat guest', value: '12.8%', trend: 'low' }
    ],
    recommendation: 'Invest in loyalty programs. Offer flexible terms to reward customer history.',
    impact: 'Medium'
  }
];

export const businessRecommendations = [
  {
    phase: 'Phase 1',
    title: 'Pilot Program',
    timeline: '3 months',
    cost: '$45,000',
    items: [
      'Deploy model for scoring at 2 pilot properties',
      'Track predictions vs actual cancellations (no policy changes)',
      'Validate model accuracy against 80% threshold',
      'Document operational integration requirements'
    ],
    expectedReturn: 'Validation data for go/no-go decision',
    resources: '1 Data Analyst, IT support (part-time)'
  },
  {
    phase: 'Phase 2',
    title: 'Full Deployment',
    timeline: '6 weeks',
    cost: '$80,000',
    items: [
      'System integration across all 12 properties',
      'Staff training (front desk, revenue management)',
      'Implement tiered deposit policy for high-risk bookings',
      'Set up automated alerts for bookings >70% probability'
    ],
    expectedReturn: '$201,000 annual revenue recovery',
    resources: 'IT integration team, Training coordinator'
  },
  {
    phase: 'Phase 3',
    title: 'Optimization',
    timeline: 'Ongoing',
    cost: '$15,000/quarter',
    items: [
      'Quarterly model retraining with fresh data',
      'A/B testing of intervention strategies',
      'Integration with revenue management system',
      'Monthly performance reporting to leadership'
    ],
    expectedReturn: 'Maintain 85%+ accuracy, continuous improvement',
    resources: '0.25 FTE Data Analyst for monitoring'
  }
];

export const expectedBenefits = [
  { metric: 'Revenue Loss Reduction', value: '10-20%', description: 'From better cancellation prediction' },
  { metric: 'Inventory Utilization', value: '+15%', description: 'Through smart overbooking' },
  { metric: 'Customer Retention', value: '+8%', description: 'Via targeted engagement' },
  { metric: 'Operational Efficiency', value: '+25%', description: 'With automated risk alerts' }
];

export const recommendations = [
  {
    title: 'Dynamic Deposit Policy',
    description: 'Require 20% non-refundable deposit for bookings >90 days lead time OR online channel bookings with no loyalty status.',
    impact: '$156,000 annual recovery',
    cost: '$15,000 implementation',
    timeline: '6 weeks',
    risk: 'May reduce conversion rate by 3-5% on long-lead bookings'
  },
  {
    title: 'Pre-Arrival Engagement Campaign',
    description: 'Automated email/SMS sequence at 30, 14, and 3 days before arrival. Include room upgrade offers and special requests prompts.',
    impact: '$45,000 annual recovery',
    cost: '$8,000 setup + $200/month',
    timeline: '4 weeks',
    risk: 'Minimal - builds relationship regardless of cancellation'
  },
  {
    title: 'Real-Time Risk Scoring',
    description: 'Deploy ML model to score every booking at creation. Flag high-risk (>70% probability) for manual review or auto-apply deposit.',
    impact: '$542,000 at-risk revenue identified',
    cost: '$25,000 integration',
    timeline: '8 weeks',
    risk: 'Requires IT resources and booking system access'
  },
  {
    title: 'Channel-Specific Policies',
    description: 'Apply stricter cancellation terms for OTA bookings (45% cancel rate) vs direct bookings (22% cancel rate). Offer loyalty rewards for direct.',
    impact: '12% shift from OTA to direct',
    cost: '$5,000 policy update',
    timeline: '2 weeks',
    risk: 'OTA relationship management needed'
  },
  {
    title: 'Repeat Canceller Flagging',
    description: 'Identify customers with previous cancellation history (67.8% cancel rate). Require full prepayment or exclude from promotional rates.',
    impact: '$28,000 annual recovery',
    cost: '$3,000 CRM update',
    timeline: '1 week',
    risk: 'Customer service training needed'
  }
];

export const projectStory = {
  context: `INN Hotels Group, a chain of hotels in Portugal, was facing significant revenue losses due to high booking cancellation rates.
  With online booking platforms making it easier than ever to cancel reservations, the hotel needed a data-driven approach to predict
  and mitigate cancellations before they impacted the bottom line.`,

  challenge: `The challenge was threefold: identify the key factors driving cancellations, build accurate predictive models,
  and translate insights into actionable business strategies. With 32.8% of bookings being canceled, even small improvements
  could translate to significant revenue recovery.`,

  approach: `I approached this as a classification problem, analyzing 9,069 historical bookings across 19 features.
  The methodology included comprehensive exploratory data analysis to understand cancellation patterns, feature engineering
  to capture booking characteristics, and comparison of multiple machine learning models to find the optimal predictor.`,

  solution: `The final solution is a Random Forest classifier achieving 87.9% accuracy with a ROC AUC of 0.92.
  The model identifies lead time, average room price, and number of special requests as the top predictors.
  This enables the hotel to proactively flag high-risk bookings and implement targeted interventions.`
};
