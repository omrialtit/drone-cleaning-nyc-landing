export interface IntakeFormData {
  address: string;
  service: 'Facade Cleaning' | 'Window Cleaning' | 'Soft-Wash' | 'Exterior Rinse';
  timeline: 'ASAP (Urgent)' | 'Next 30 Days' | 'Next 90 Days';
  email: string;
  phone?: string;
  notes?: string;
  timestamp?: number;
}

export interface NavItem {
  label: string;
  href: string; // anchor ID or route
  type: 'anchor' | 'route';
}
