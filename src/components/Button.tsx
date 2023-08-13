import { FunctionComponent, HTMLProps, useMemo } from 'react';

export interface ButtonProps
  extends Omit<HTMLProps<HTMLButtonElement>, 'size'> {
  type?: 'primary' | 'gradient';
  size?: 'small' | 'medium' | 'large';
}

export const Button: FunctionComponent<ButtonProps> = ({
  type = 'gradient',
  size = 'medium',
  className,
  children,
  ...restProps
}) => {
  const getSizeClasses = (): string => {
    switch (size) {
      case 'small': {
        return 'px-4 py-2.5 text-xs';
      }
      case 'large': {
        return 'px-6 py-3 text-base';
      }
      default: {
        return 'px-5 py-2.5 text-sm';
      }
    }
  };

  const getTypeClassess = (): string => {
    switch (type) {
      case 'primary': {
        return 'bg-blue-600 rounded-3xl transition-all duration-500 text-white font-bold';
      }
      default: {
        return 'bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl transition-all duration-500 bg-size-200 bg-pos-0 text-white font-bold  hover:bg-pos-100';
      }
    }
  };

  const computedClasses = useMemo(() => {
    const sizeClasses = getSizeClasses();
    const typeClasses = getTypeClassess();

    return [sizeClasses, typeClasses].join(' ');
  }, [type, size]);

  return (
    <button
      className={`${computedClasses} ${className}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
