import React from 'react'

interface NavLinkProps {
  children: React.ReactNode;
  link: string;
}

const NavLink: React.FC<NavLinkProps> = ({children, link}) => {
  return (
    <a href={link} className='text-[20px] font-medium font-roboto leading-[175.7%] hover:underline'>
      {children}
    </a>
  )
}

export default NavLink;