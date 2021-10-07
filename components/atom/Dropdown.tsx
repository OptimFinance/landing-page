import { Fragment, ReactNode, useState } from 'react';
import { Menu, Transition } from '@headlessui/react';

interface IDropdownProps {
  trigger: ReactNode | string;
  children: ReactNode;
}

const Dropdown = ({ trigger, children }: IDropdownProps) => {
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>{trigger}</div>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-center transform -translate-x-2/4 left-2/4 absolute mt-2 rounded-sm bg-optim-dark border border-white border-opacity-10 px-5 py-4'>
          <div>{children}</div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
