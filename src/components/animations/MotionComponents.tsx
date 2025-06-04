import React from 'react';

// Simple motion component implementation without external dependencies
// In a production app, you might want to use framer-motion or react-spring

interface MotionProps {
  initial?: Record<string, any>;
  whileInView?: Record<string, any>;
  transition?: Record<string, any>;
  viewport?: Record<string, any>;
  children: React.ReactNode;
  className?: string;
}

export const motion = {
  div: ({ initial, whileInView, transition, viewport, children, className = '' }: MotionProps) => {
    const [isInView, setIsInView] = React.useState(false);
    const ref = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (!ref.current) return;
      
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            if (viewport?.once) {
              observer.disconnect();
            }
          } else if (!viewport?.once) {
            setIsInView(false);
          }
        },
        { threshold: 0.1 }
      );
      
      observer.observe(ref.current);
      return () => observer.disconnect();
    }, [viewport]);

    const style = React.useMemo(() => {
      if (!initial || !whileInView) return {};
      
      const baseStyle = {
        opacity: initial.opacity ?? 1,
        transform: `
          translateX(${initial.x ?? 0}px) 
          translateY(${initial.y ?? 0}px)
          scale(${initial.scale ?? 1})
        `,
        transition: `all ${transition?.duration ?? 0.3}s ease-out ${transition?.delay ?? 0}s`
      };
      
      if (isInView) {
        return {
          ...baseStyle,
          opacity: whileInView.opacity ?? 1,
          transform: `
            translateX(${whileInView.x ?? 0}px) 
            translateY(${whileInView.y ?? 0}px)
            scale(${whileInView.scale ?? 1})
          `
        };
      }
      
      return baseStyle;
    }, [initial, whileInView, transition, isInView]);

    return (
      <div ref={ref} className={className} style={style}>
        {children}
      </div>
    );
  }
};