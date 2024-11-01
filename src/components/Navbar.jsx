import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import logo from '../assets/logo.jpg'
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between p-4 bg-white text-gray-800">
            {/* Logo and Name */}
            <div className="flex items-center">
                <motion.img
                    src={logo}
                    alt="Logo"
                    className="h-20 w-20 rounded-full"
                    initial={{ x: -50, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    whileHover={{ scale: 1.2 }}
                />
                <motion.h1
                    className="text-xl hidden lg:flex  font-bold hover:scale-110 hover:text-[#ab8925] transition-transform duration-300 font-serif"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.1 }}
                    whileHover={{ scale: 1.1 }}
                >
                    DreamSpaceDesign
                </motion.h1>

            </div>

            {/* Navigation Links */}
            <motion.ul
                className={`flex space-x-6 items-center transition-transform ${isOpen ? 'flex' : 'hidden'
                    } md:flex`}

                initial={{ y: -50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {['Home', 'Services', 'Testimonials', 'About Us', 'Contact Us'].map(
                    (link) => (
                        <motion.li
                            key={link}
                            whileHover={{ scale: 1.1 }}
                            className="hover:text-[#ab8925] text-gray-800 font-bold text-lg transition duration-300 font-serif"
                        >
                            <a href={`#${link.toLowerCase()}`} className="">{link}</a>
                        </motion.li>

                    )
                )}
            </motion.ul>

            {/* WhatsApp Badge */}
            <motion.div
                className="flex items-center space-x-2 bg-[#ab8925] p-4 rounded-lg cursor-pointer "
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1.2, opacity: 1 }}
                transition={{ duration: 0.5 }}
            >
                <FaWhatsapp size={20} className='text-white' />
                <span className='text-white'>+123 456 7890</span>
            </motion.div>

            {/* Mobile Menu Toggle */}
            <div
                className="md:hidden flex flex-col space-y-1 cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-6 h-0.5 bg-white"></span>
            </div>
        </nav>
    );
}
