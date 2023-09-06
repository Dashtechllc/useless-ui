import { useState, FunctionComponent, useMemo } from 'react';
import { OptionType } from './types';

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

export interface SelectProps {
  options: OptionType[];
  onChange: (option: string) => void;
  defaultValue?: string | null;
  placeholder?: string;
  className?: string;
  size: 'small' | 'medium';
}

export const Select: FunctionComponent<SelectProps> = ({
  options,
  onChange,
  defaultValue,
  className = '',
  size = 'medium',
  placeholder = 'Choose',
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const defaultOption = options.find((option) => option.value === defaultValue);
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(
    defaultOption || null,
  );

  const handleOptionClick = (option: OptionType) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option.value);
  };

  const sizeClass = useMemo(() => getSizeClasses(size), [size]);
  return (
    <div
      tabIndex={-1}
      onBlur={() => setIsOpen(false)}
      className={`relative w-60 min-w-max max-w-md ${className}`}
    >
      <button
        className={` ${sizeClass} border border-neutral-100 w-inherit truncate rounded-lg text-left hover:border-brand-500 transition-all duration-300 focus:border-brand-500 text-neutral-700`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {selectedOption ? selectedOption.label : placeholder}
      </button>
      {isOpen && (
        <div className="absolute w-inherit max-w-48 mt-2 border rounded-lg border-neutral-100 shadow-sm">
          {options.map((option) => (
            <div
              key={option.value}
              className={`p-2 w-inherit truncate hover:bg-neutral-100 cursor-pointer ${
                option.value === selectedOption?.value
                  ? 'bg-neutral-100 text-brand-500 font-semibold'
                  : 'text-neutral-700'
              } ${sizeClass}`}
              onClick={() => handleOptionClick(option)}
              onMouseDown={(e) => e.preventDefault()}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
