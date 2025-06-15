import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import './Tooltip.css';

type TooltipProps = {
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
  children: React.ReactNode;
  delay?: number;
};

const Tooltip: React.FC<TooltipProps> = ({ 
  content, 
  position = 'top', 
  children, 
  delay = 300 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const wrapperRef = useRef<HTMLDivElement>(null);

  const calculatePosition = () => {
    if (!wrapperRef.current) return;
    
    const rect = wrapperRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
    
    let top = 0;
    let left = 0;
    
    const offset = 8; // Distância do elemento
    
    switch (position) {
      case 'top':
        top = rect.top + scrollTop - offset;
        left = rect.left + scrollLeft + rect.width / 2;
        break;
      case 'bottom':
        top = rect.bottom + scrollTop + offset;
        left = rect.left + scrollLeft + rect.width / 2;
        break;
      case 'left':
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.left + scrollLeft - offset;
        break;
      case 'right':
        top = rect.top + scrollTop + rect.height / 2;
        left = rect.right + scrollLeft + offset;
        break;
    }
    
    setTooltipPosition({ top, left });
  };

  const showTooltip = () => {
    calculatePosition();
    const id = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    setTimeoutId(id);
  };

  const hideTooltip = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsVisible(false);
  };

  // Recalcular posição quando o scroll ou resize acontecer
  useEffect(() => {
    if (isVisible) {
      const handleScroll = () => calculatePosition();
      const handleResize = () => calculatePosition();
      
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isVisible, position]);

  const tooltip = isVisible ? (
    <div 
      className={`tooltip tooltip-portal tooltip-${position}`}
      style={{
        position: 'fixed',
        top: tooltipPosition.top,
        left: tooltipPosition.left,
        zIndex: 10000,
      }}
    >
      <div className="tooltip-content">
        {content}
      </div>
      <div className={`tooltip-arrow tooltip-arrow-${position}`} />
    </div>
  ) : null;

  return (
    <>
      <div 
        ref={wrapperRef}
        className="tooltip-wrapper"
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
      >
        {children}
      </div>
      {tooltip && createPortal(tooltip, document.body)}
    </>
  );
};

export default Tooltip; 