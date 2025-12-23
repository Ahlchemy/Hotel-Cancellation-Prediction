export const featureImportance = {
  'dt-full': [
    { feature: 'lead_time', importance: 0.379, label: 'Lead Time' },
    { feature: 'avg_price_per_room', importance: 0.182, label: 'Avg Price/Room' },
    { feature: 'market_segment_type', importance: 0.091, label: 'Market Segment' },
    { feature: 'arrival_month', importance: 0.088, label: 'Arrival Month' },
    { feature: 'no_of_special_requests', importance: 0.070, label: 'Special Requests' },
    { feature: 'no_of_week_nights', importance: 0.058, label: 'Week Nights' },
    { feature: 'room_type_reserved', importance: 0.042, label: 'Room Type' },
    { feature: 'no_of_weekend_nights', importance: 0.032, label: 'Weekend Nights' },
    { feature: 'arrival_date', importance: 0.028, label: 'Arrival Date' },
    { feature: 'no_of_adults', importance: 0.015, label: 'No. of Adults' },
  ],
  'dt-pruned': [
    { feature: 'lead_time', importance: 0.418, label: 'Lead Time' },
    { feature: 'avg_price_per_room', importance: 0.129, label: 'Avg Price/Room' },
    { feature: 'market_segment_type', importance: 0.128, label: 'Market Segment' },
    { feature: 'no_of_special_requests', importance: 0.102, label: 'Special Requests' },
    { feature: 'arrival_month', importance: 0.082, label: 'Arrival Month' },
    { feature: 'no_of_week_nights', importance: 0.048, label: 'Week Nights' },
    { feature: 'room_type_reserved', importance: 0.038, label: 'Room Type' },
    { feature: 'no_of_weekend_nights', importance: 0.025, label: 'Weekend Nights' },
    { feature: 'arrival_date', importance: 0.018, label: 'Arrival Date' },
    { feature: 'no_of_adults', importance: 0.012, label: 'No. of Adults' },
  ],
  'rf-full': [
    { feature: 'lead_time', importance: 0.347, label: 'Lead Time' },
    { feature: 'avg_price_per_room', importance: 0.180, label: 'Avg Price/Room' },
    { feature: 'no_of_special_requests', importance: 0.098, label: 'Special Requests' },
    { feature: 'arrival_month', importance: 0.094, label: 'Arrival Month' },
    { feature: 'no_of_week_nights', importance: 0.062, label: 'Week Nights' },
    { feature: 'market_segment_type', importance: 0.058, label: 'Market Segment' },
    { feature: 'room_type_reserved', importance: 0.045, label: 'Room Type' },
    { feature: 'arrival_date', importance: 0.042, label: 'Arrival Date' },
    { feature: 'no_of_weekend_nights', importance: 0.035, label: 'Weekend Nights' },
    { feature: 'no_of_adults', importance: 0.022, label: 'No. of Adults' },
  ],
  'rf-pruned': [
    { feature: 'lead_time', importance: 0.358, label: 'Lead Time' },
    { feature: 'avg_price_per_room', importance: 0.163, label: 'Avg Price/Room' },
    { feature: 'no_of_special_requests', importance: 0.113, label: 'Special Requests' },
    { feature: 'arrival_month', importance: 0.089, label: 'Arrival Month' },
    { feature: 'market_segment_type', importance: 0.065, label: 'Market Segment' },
    { feature: 'no_of_week_nights', importance: 0.058, label: 'Week Nights' },
    { feature: 'room_type_reserved', importance: 0.048, label: 'Room Type' },
    { feature: 'arrival_date', importance: 0.040, label: 'Arrival Date' },
    { feature: 'no_of_weekend_nights', importance: 0.032, label: 'Weekend Nights' },
    { feature: 'no_of_adults', importance: 0.020, label: 'No. of Adults' },
  ]
};

export const getTopFeatures = (modelId, n = 5) => {
  return featureImportance[modelId]?.slice(0, n) || [];
};

export const featureDescriptions = {
  lead_time: 'Number of days between booking date and arrival date',
  avg_price_per_room: 'Average price per day of the reservation (EUR)',
  no_of_special_requests: 'Total number of special requests made by the customer',
  market_segment_type: 'Channel through which booking was made (Online, Offline, Corporate)',
  arrival_month: 'Month of the arrival date',
  no_of_week_nights: 'Number of weeknight stays booked',
  room_type_reserved: 'Type of room reserved by the customer',
  no_of_weekend_nights: 'Number of weekend night stays booked',
  arrival_date: 'Day of the month of arrival',
  no_of_adults: 'Number of adults in the booking'
};
