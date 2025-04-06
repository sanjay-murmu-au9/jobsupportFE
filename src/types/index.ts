export interface User {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  education: string;
  skills: string[];
  experience: string;
  currentStatus: 'student' | 'unemployed' | 'recently_laid_off' | 'looking_for_change';
  location: string;
  cvUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface FormData {
  fullName: string;
  email: string;
  phone: string;
  education: string;
  skills: string;
  experience: string;
  currentStatus: string;
  location: string;
  message?: string;
  cvFile?: File;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  status: number;
}

export interface ErrorResponse {
  message: string;
  status: number;
  errors?: Record<string, string[]>;
} 