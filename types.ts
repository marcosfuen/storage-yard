
// Added React import to resolve the 'Cannot find namespace React' error
import React from 'react';

export interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface InquiryFormState {
  name: string;
  email: string;
  phone: string;
  address: string;
  storageType: 'boat' | 'rv' | 'truck' | 'other';
  totalSpaces: string;
  vehicleDetails: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
