import React from 'react';
import Link from "next/link";

const NavLink = ({href, title}) => {
    return (
        <Link href={href} className = "text-[#ADB7BE] mx-1 hover:text-white lg:mx-2 text-xs lg:text-base"> 
        {title}
        </Link>
    );
};
export default NavLink;