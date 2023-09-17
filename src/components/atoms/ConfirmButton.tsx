import { Check } from '@phosphor-icons/react';
import React from 'react';

interface ConfirmButtonProps {
  title?: string;
  disabled?: boolean;
  icon?: boolean;
  callback?: () => void;
}

const ConfirmButton: React.FC<ConfirmButtonProps> = ({ disabled, title, icon, callback, ...props }) => {
  return (
    <div className="justify-center flex">
      <button
        className={`btn btn-outline btn-success btn-sm ${disabled ? 'btn-disabled' : ''} hover:scale-110`}
        onClick={callback}
        {...props}
      >
        {icon &&
          <Check className='mx-[-6px]' size={20} />
        }
        {title}
      </button>
    </div>
  );
}

ConfirmButton.defaultProps = {
  title: 'sim',
  disabled: false,
  icon: false
};

export default ConfirmButton;
