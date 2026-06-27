import {Menu,MenuButton,MenuItem,MenuItems} from '@headlessui/react';

const themes = ['light','dark']

export default function DropdownTheme(){
  return(
    <Menu>
      <MenuButton className='btn py-3'>Тема</MenuButton>
      <MenuItems anchor="bottom">
        <MenuItem>
          <a href="#">Light</a>
        </MenuItem>
        <MenuItem>
          <a href="#">Dark</a>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}