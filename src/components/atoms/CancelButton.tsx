import { X } from '@phosphor-icons/react';
import React from 'react';

interface CancelButtonProps {
  title?: string;
  disabled?: boolean;
  callback?: () => void;
  icon?: boolean;
}

const CancelButton: React.FC<CancelButtonProps> = ({ disabled, title, icon, callback, ...props }) => {
  return (
    <div className="justify-center flex">
      <button
        className={`btn btn-outline btn-error btn-sm ${disabled ? 'btn-disabled' : ''} hover:scale-110`}
        onClick={callback}
        {...props}
      >
        { icon && 
          <X className='mx-[-6px]' size={20} />
        }
        {title}
      </button>
    </div>
  );
}

CancelButton.defaultProps = {
  title: 'não',
  disabled: false,
  icon: false
};

export default CancelButton;
