import React from 'react';
import { useNavigate } from 'react-router-dom';

const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  size = 'md', 
  disabled = false,
  to,
  className = ''
}) => {
  const navigate = useNavigate();

  const variants = {
    primary: 'bg-global-2 text-global-3 border border-primary hover:bg-global-3',
    secondary: 'bg-global-3 text-global-3 shadow-custom hover:bg-global-2'
  };

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-4 text-base',
    lg: 'px-8 py-5 text-lg'
  };

  const handleClick = (e) => {
    if (disabled) return;
    
    if (to) {
      navigate(to);
    }
    
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      onClick={handleClick}
      disabled={disabled}
      className={`rounded-lg font-satoshi font-medium leading-6 ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;