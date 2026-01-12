// Component props interface
export interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary' | 'danger'
}

// User type
export interface User {
  id: number
  name: string
  email: string
  age?: number
}

// API response type
export interface ApiResponse<T> {
  data: T
  status: number
  message: string
}