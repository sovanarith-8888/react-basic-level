import React from 'react'
import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const NavbarNav = () => {
  return (
    <>
    <Navbar rounded className='bg-slate-700 text-slate-300 py-6'>
      <Navbar.Brand href="https://flowbite-react.com">
        <img src="https://istad.co/resources/img/CSTAD_120.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />
          }
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">name@flowbite.com</span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>

        <Navbar.Link as={Link} to="/" active>Home</Navbar.Link>
        <Navbar.Link as={Link} to="/service" className='text-slate-300'>Services</Navbar.Link>
        <Navbar.Link as={Link} to="/about" className='text-slate-300'>About</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
    <Outlet/>
    </>
  )
}

export default NavbarNav
