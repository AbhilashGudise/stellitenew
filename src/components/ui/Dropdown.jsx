import React, { useState } from 'react';

const Dropdown = ({ 
  placeholder = "Enter Your Email",
  onSubmit,
  className = ''
}) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && value.trim()) {
      onSubmit(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`flex items-center border border-secondary rounded-lg bg-transparent ${className}`}>
      <div className="flex items-center px-4 py-4">
        <img 
          src="/images/img_mailsendenvelopestreamlinecoresvg.svg" 
          alt="Email icon"
          className="w-5 h-5 mr-3"
        />
        <input
          type="email"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          className="bg-transparent text-global-1 font-satoshi font-medium text-sm leading-5 outline-none flex-1 min-w-0"
        />
      </div>
      <button 
        type="submit"
        className="p-4 hover:bg-global-2 rounded-r-lg transition-colors"
      >
        <img 
          src="/images/img_sendemailstreamlinecoresvg.svg" 
          alt="Send email"
          className="w-5 h-5"
        />
      </button>
    </form>
  );
};

export default Dropdown;