import React from 'react';

interface CardContentProps {
  className?: string;
  children: React.ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ className, children }) => {
  return (
    <div className={`p-6 ${className}`}>
      {children}
    </div>
  );
};

export default CardContent;
