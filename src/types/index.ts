// src/types/index.ts

export interface RegistrationFormData {
  parentName:    string;
  childName:     string;
  grade:         string;
  subjects:      string[];
  phone:         string;
  whatsapp?:     string;
  sameWhatsApp:  boolean;
  tuitionMode:   'home' | 'online' | 'either';
  timing:        'morning' | 'afternoon' | 'evening' | 'flexible';
  interestType:  'demo' | 'admission' | 'info';
  message?:      string;
}

export interface StudentRegistrationData {
  fullName:      string;
  parentName:    string;
  grade:         string;
  phone:         string;
  whatsapp?:     string;
  subjects:      string[];
  tuitionMode:   'home' | 'online';
  batchTiming:   string;
  email:         string;
  password:      string;
  confirmPassword: string;
}

export interface LoginData {
  email:    string;
  password: string;
}

export interface NavLink {
  label: string;
  href:  string;
}

export interface FeeRow {
  label: string;
  price: number;
}

export interface Testimonial {
  parentName: string;
  childGrade: string;
  quote:      string;
  stars:      number;
  mode?:      'home' | 'online';
}
