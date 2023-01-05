import React, { useState } from 'react';
import clsx from 'clsx';
import { CenteredLayout } from '~/components';

const buttons = ['fast', 'quality', 'cheap'] as const;
type ButtonType = typeof buttons[number];

interface ButtonProps {
  button: ButtonType;
  setSelectedButton: (value: ButtonType) => void;
  isActive: boolean;
}

const Button: React.FC<ButtonProps> = React.memo(({ button, setSelectedButton, isActive }) => {
  return (
    <button
      key={button}
      onClick={() => setSelectedButton(button)}
      className={clsx(
        'h-10 px-5 flex items-center justify-center rounded transition-colors',
        isActive ? 'bg-green-400' : 'bg-gray-300',
      )}
    >
      {button}
    </button>
  );
});

export const Refactor1 = () => {
  const [selectedButton, setSelectedButton] = useState<ButtonType | null>(null);
  return (
    <CenteredLayout className="gap-4">
      <div className="text-3xl">See the code</div>
      <div className="grid grid-cols-3 gap-2 w-60">
        {buttons.map((button, index) => (
          <Button
            key={`list-btn-${index}`}
            button={button}
            setSelectedButton={setSelectedButton}
            isActive={button === selectedButton}
          />
        ))}
      </div>
    </CenteredLayout>
  );
};
