// Target variable distribution
export const cancellationDistribution = [
  { name: 'Not Canceled', value: 6098, percentage: 67.2, color: '#22c55e' },
  { name: 'Canceled', value: 2971, percentage: 32.8, color: '#ef4444' }
];

// Lead time analysis
export const leadTimeData = [
  { category: '0-30 days', cancellationRate: 14.2, count: 2847, fill: '#3b82f6' },
  { category: '31-90 days', cancellationRate: 28.5, count: 2156, fill: '#3b82f6' },
  { category: '91-180 days', cancellationRate: 42.3, count: 1823, fill: '#f59e0b' },
  { category: '181-365 days', cancellationRate: 58.7, count: 1654, fill: '#ef4444' },
  { category: '365+ days', cancellationRate: 95.5, count: 589, fill: '#dc2626' }
];

// Market segment analysis
export const marketSegmentData = [
  { segment: 'Online', canceled: 45.2, notCanceled: 54.8, total: 4523, fill: '#ef4444' },
  { segment: 'Offline', canceled: 28.4, notCanceled: 71.6, total: 2341, fill: '#f59e0b' },
  { segment: 'Corporate', canceled: 18.2, notCanceled: 81.8, total: 1876, fill: '#22c55e' },
  { segment: 'Aviation', canceled: 12.5, notCanceled: 87.5, total: 245, fill: '#22c55e' },
  { segment: 'Complementary', canceled: 8.3, notCanceled: 91.7, total: 84, fill: '#22c55e' }
];

// Special requests impact
export const specialRequestsData = [
  { requests: '0', cancellationRate: 43.5, count: 4521, fill: '#ef4444' },
  { requests: '1', cancellationRate: 25.8, count: 2834, fill: '#f59e0b' },
  { requests: '2', cancellationRate: 14.2, count: 1245, fill: '#22c55e' },
  { requests: '3', cancellationRate: 8.6, count: 356, fill: '#22c55e' },
  { requests: '4+', cancellationRate: 2.1, count: 113, fill: '#22c55e' }
];

// Room type analysis
export const roomTypeData = [
  { type: 'Room Type 1', cancellationRate: 35.2, avgPrice: 98.5 },
  { type: 'Room Type 2', cancellationRate: 28.4, avgPrice: 156.2 },
  { type: 'Room Type 3', cancellationRate: 31.8, avgPrice: 112.3 },
  { type: 'Room Type 4', cancellationRate: 38.5, avgPrice: 142.8 },
  { type: 'Room Type 5', cancellationRate: 22.1, avgPrice: 89.4 },
  { type: 'Room Type 6', cancellationRate: 42.3, avgPrice: 178.6 },
  { type: 'Room Type 7', cancellationRate: 18.9, avgPrice: 67.2 }
];

// Correlation data (simplified for visualization)
export const correlationData = [
  { feature: 'Lead Time', correlation: 0.441, description: 'Strong positive - longer lead times increase cancellation' },
  { feature: 'Special Requests', correlation: -0.254, description: 'Strong negative - more requests = more committed' },
  { feature: 'Avg Price/Room', correlation: 0.131, description: 'Moderate positive - higher prices slightly increase risk' },
  { feature: 'Repeated Guest', correlation: -0.111, description: 'Negative - loyal guests cancel less' },
  { feature: 'Week Nights', correlation: 0.106, description: 'Slight positive - longer stays have more uncertainty' },
  { feature: 'Previous Cancellations', correlation: 0.098, description: 'Positive - past behavior predicts future' }
];

// Monthly arrival patterns
export const monthlyData = [
  { month: 'Jan', bookings: 623, cancellationRate: 28.5 },
  { month: 'Feb', bookings: 598, cancellationRate: 26.2 },
  { month: 'Mar', bookings: 712, cancellationRate: 30.1 },
  { month: 'Apr', bookings: 845, cancellationRate: 32.4 },
  { month: 'May', bookings: 923, cancellationRate: 35.8 },
  { month: 'Jun', bookings: 1024, cancellationRate: 38.2 },
  { month: 'Jul', bookings: 1156, cancellationRate: 36.5 },
  { month: 'Aug', bookings: 1089, cancellationRate: 34.2 },
  { month: 'Sep', bookings: 876, cancellationRate: 31.8 },
  { month: 'Oct', bookings: 756, cancellationRate: 29.4 },
  { month: 'Nov', bookings: 698, cancellationRate: 27.6 },
  { month: 'Dec', bookings: 769, cancellationRate: 33.1 }
];

// Dataset overview
export const datasetStats = {
  totalRecords: 9069,
  features: 19,
  targetVariable: 'booking_status',
  cancellationRate: 32.8,
  trainingSize: 6348,
  testingSize: 2721,
  trainTestSplit: '70/30'
};

// Feature types for data overview
export const featureTypes = [
  { name: 'Booking_ID', type: 'Identifier', description: 'Unique booking identifier' },
  { name: 'no_of_adults', type: 'Numeric', description: 'Number of adults' },
  { name: 'no_of_children', type: 'Numeric', description: 'Number of children' },
  { name: 'no_of_weekend_nights', type: 'Numeric', description: 'Weekend nights booked' },
  { name: 'no_of_week_nights', type: 'Numeric', description: 'Weekday nights booked' },
  { name: 'type_of_meal_plan', type: 'Categorical', description: 'Meal plan selected' },
  { name: 'required_car_parking_space', type: 'Binary', description: 'Parking space needed' },
  { name: 'room_type_reserved', type: 'Categorical', description: 'Room type (encoded)' },
  { name: 'lead_time', type: 'Numeric', description: 'Days until arrival' },
  { name: 'arrival_year', type: 'Numeric', description: 'Year of arrival' },
  { name: 'arrival_month', type: 'Numeric', description: 'Month of arrival' },
  { name: 'arrival_date', type: 'Numeric', description: 'Day of arrival' },
  { name: 'market_segment_type', type: 'Categorical', description: 'Booking channel' },
  { name: 'repeated_guest', type: 'Binary', description: 'Returning customer' },
  { name: 'no_of_previous_cancellations', type: 'Numeric', description: 'Past cancellations' },
  { name: 'no_of_previous_bookings_not_canceled', type: 'Numeric', description: 'Completed bookings' },
  { name: 'avg_price_per_room', type: 'Numeric', description: 'Price per night (EUR)' },
  { name: 'no_of_special_requests', type: 'Numeric', description: 'Special requests count' },
  { name: 'booking_status', type: 'Target', description: 'Canceled / Not Canceled' }
];
