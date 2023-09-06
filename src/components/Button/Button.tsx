import { FunctionComponent, HTMLProps, useMemo } from 'react';

const getSizeClasses = (size: string): string => {
  switch (size) {
    case 'small': {
      return 'form-padding-sm text-xs';
    }
    case 'large': {
      return 'form-padding-lg text-base';
    }
    default: {
      return 'form-padding-md text-sm';
    }
  }
};

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
  const getTypeClassess = (): string => {
    switch (type) {
      case 'primary': {
        return 'bg-brand-500 rounded-3xl transition-all duration-500 text-white font-bold';
      }
      default: {
        return 'bg-gradient-to-r from-brand-600 to-brand-500 rounded-3xl transition-all duration-500 bg-size-200 bg-pos-50 text-white font-bold  hover:bg-pos-0';
      }
    }
  };

  const computedClasses = useMemo(() => {
    const sizeClasses = getSizeClasses(size);
    const typeClasses = getTypeClassess();

    return [sizeClasses, typeClasses].join(' ');
  }, [type, size]);

  return (
    <button
      className={`${computedClasses} ${className ?? ''}`}
      type="button"
      {...restProps}
    >
      {children}
    </button>
  );
};
