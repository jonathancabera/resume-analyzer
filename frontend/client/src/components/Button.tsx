import { ButtonProps } from '../types'

export const Button = ({ 
  label, 
  onClick, 
  disabled = false,
  variant = 'primary' 
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-blue-500 hover:bg-blue-700',
    secondary: 'bg-gray-500 hover:bg-gray-700',
    danger: 'bg-red-500 hover:bg-red-700'
  }

  return (
    <button
      className={`px-4 py-2 text-white rounded ${variantClasses[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  )
}