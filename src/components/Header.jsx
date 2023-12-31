// import React from 'react';

import { useEffect, useState } from "react";
const NAV_ITEMS = [
    { href: '#Locations', label: 'Locations' },
    { href: '#Stays', label: 'Stays' },
    { href: '#Faqs', label: 'FAQs' },
    { href: '#AboutUs', label: 'About Us' },
];

function Navigation() {
    return (
    <nav className="flex justify-center flex-wrap gap-4 transition-colors text-lg font-medium">
        {NAV_ITEMS.map((item) => (
        <a key={item.href} href={item.href} className="hover:text-black dark:hover:text-gray transition-colors">
            {item.label}
        </a>
        ))}
    </nav>
    );
}
function SearchBar() {
        const [theme, setTheme] = useState(localStorage.theme);

    useEffect(() => {
        const handleStorageChange = () => {
        setTheme(localStorage.theme);
        };

        window.addEventListener('storage', handleStorageChange);
        return () => {
        window.removeEventListener('storage', handleStorageChange);
        };
    }, []);

    const iconFill = theme  === 'dark' ? '#F2F2F2' : '#CC2D4A';
    return (
        <label htmlFor="mobileSearch" className="flex justify-center gap-1 bg-white dark:bg-dark2 rounded-3xl w-full max-w-md p-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0833 3.625C7.41192 3.625 3.625 7.41192 3.625 12.0833C3.625 16.7547 7.41192 20.5417 12.0833 20.5417C13.9832 20.5417 15.7368 19.9153 17.1489 18.8577L22.104 23.8128C22.5759 24.2847 23.341 24.2847 23.8128 23.8128C24.2847 23.341 24.2847 22.5759 23.8128 22.104L18.8577 17.1489C19.9153 15.7368 20.5417 13.9832 20.5417 12.0833C20.5417 7.41192 16.7547 3.625 12.0833 3.625ZM6.04167 12.0833C6.04167 8.74661 8.74661 6.04167 12.0833 6.04167C15.4201 6.04167 18.125 8.74661 18.125 12.0833C18.125 15.4201 15.4201 18.125 12.0833 18.125C8.74661 18.125 6.04167 15.4201 6.04167 12.0833Z" fill={iconFill}/>
            </svg>
            <input type="text" name="Search" id="mobileSearch" placeholder="San Francisco"  className="bg-transparent dark:text-white outline-transparent outline-0 w-24 focus:w-full focus:placeholder:opacity-50 transition-all ease-in"/>
        </label>
    );
}
const Header = () => {
    const [theme, setTheme] = useState(localStorage.theme);
    const iconFill = localStorage.theme  === 'dark' ? '#F2F2F2' : '#CC2D4A';
    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.theme = newTheme;
    };
    useEffect(() => {
        if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        } else {
        document.documentElement.classList.remove('dark');
        }
    }, [theme]);

    return (
        <header id="Search" className="bg-white dark:bg-dark1 relative">
        {/* Mobile Header */}
        <div className="md:hidden absolute z-10 flex items-center gap-5 flex-col p-4 w-full">
            {/* Dark Mode Button */}
            <button 
                onClick={toggleTheme}
                className="bg-white dark:bg-dark2 text-white rounded-full flex justify-center items-center self-end w-10 h-10"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                    <path d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748Z" fill={iconFill}/>
                </svg>
            </button>
            <SearchBar />
        </div>

        {/* Desktop Header */}
        <div className="hidden md:flex items-center justify-center text-primary dark:text-white">
            <div className="hidden md:grid grid-cols-3 justify-between items-center w-full max-w-7xl p-3">
                {/* Title */}
                <h1 className="text-2xl font-medium text-start">Platzi Travel</h1>

                {/* Navigation */}
                <Navigation />
                {/* Action Buttons */}
                <div className="flex justify-end gap-4">
                    {/* Search Button */}
                    <label htmlFor="mobileSearch" className="flex flex-row-reverse justify-center items-center gap-1 bg-gray dark:bg-dark2 rounded-3xl w-[150px] ">
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M12.0833 3.625C7.41192 3.625 3.625 7.41192 3.625 12.0833C3.625 16.7547 7.41192 20.5417 12.0833 20.5417C13.9832 20.5417 15.7368 19.9153 17.1489 18.8577L22.104 23.8128C22.5759 24.2847 23.341 24.2847 23.8128 23.8128C24.2847 23.341 24.2847 22.5759 23.8128 22.104L18.8577 17.1489C19.9153 15.7368 20.5417 13.9832 20.5417 12.0833C20.5417 7.41192 16.7547 3.625 12.0833 3.625ZM6.04167 12.0833C6.04167 8.74661 8.74661 6.04167 12.0833 6.04167C15.4201 6.04167 18.125 8.74661 18.125 12.0833C18.125 15.4201 15.4201 18.125 12.0833 18.125C8.74661 18.125 6.04167 15.4201 6.04167 12.0833Z" fill={iconFill}/>
                        </svg>
                        <input type="text" name="Search" id="mobileSearch" placeholder="San Francisco"  className="bg-transparent text-black dark:text-white outline-transparent outline-0 w-24 focus:placeholder:opacity-50 transition-all ease-in"/>
                    </label>
                    {/* Dark Mode Button */}
                    <button 
                        onClick={toggleTheme}
                        className="hover:bg-gray dark:hover:bg-dark2 rounded-full flex justify-center items-center w-10 h-10 transition-colors duration-500"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                            <path d="M25.0748 19.2748C22.9267 20.2465 20.5334 20.5405 18.214 20.1177C15.8945 19.6949 13.7589 18.5753 12.0918 16.9082C10.4246 15.241 9.30509 13.1055 8.88228 10.786C8.45946 8.46654 8.75347 6.0733 9.72512 3.92514C8.01494 4.69801 6.51777 5.87422 5.36208 7.35288C4.20638 8.83154 3.42666 10.5685 3.08979 12.4147C2.75293 14.261 2.86898 16.1614 3.428 17.9529C3.98702 19.7444 4.97232 21.3736 6.29935 22.7006C7.62639 24.0276 9.25556 25.0129 11.0471 25.572C12.8386 26.131 14.739 26.247 16.5852 25.9102C18.4315 25.5733 20.1684 24.7936 21.6471 23.6379C23.1257 22.4822 24.302 20.985 25.0748 19.2748Z" fill={iconFill}/>
                        </svg>
                    </button>
                    {/* User Button */}
                    <button className="hover:bg-gray dark:hover:bg-dark2 rounded-full flex justify-center items-center w-10 h-10 transition-colors duration-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="29" viewBox="0 0 28 29" fill="none">
                            <path fillRule="evenodd" clipRule="evenodd" d="M5.22261 18.379C6.75597 16.1651 9.47161 14.5 13.9998 14.5C18.528 14.5 21.2437 16.1651 22.777 18.379C24.259 20.5187 24.495 22.9711 24.4997 24.3281C24.5045 25.6927 23.3999 26.5834 22.2675 26.5834H5.73218C4.59972 26.5834 3.49515 25.6927 3.49989 24.3281C3.50461 22.9711 3.74064 20.5187 5.22261 18.379Z" fill={iconFill}/>
                            <path fillRule="evenodd" clipRule="evenodd" d="M13.9999 12.0834C16.5773 12.0834 18.6666 9.9194 18.6666 7.25002C18.6666 4.58064 16.5773 2.41669 13.9999 2.41669C11.4226 2.41669 9.33327 4.58064 9.33327 7.25002C9.33327 9.9194 11.4226 12.0834 13.9999 12.0834Z" fill={iconFill}/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        </header>
    );
};

export default Header;
