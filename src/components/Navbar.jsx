// react router
import { Link } from 'react-router-dom';
// icons 
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return(
        <div className='w-screen flex items-center justify-between py-10 px-16 lg:px-48 select-none'>
            {/* logo section */}
            <div>
                <span className='font-semibold'>Logo</span>
            </div>
            {/* navs section */}
            <div className='hidden lg:flex gap-x-10 font-semibold'>
                <Link to='/' className='hover:text-amber-400'>HOME</Link>
                <Link to='/about' className='hover:text-amber-400'>ABOUT</Link>
                <Link to='/portfolio' className='hover:text-amber-400'>PORTFOLIO</Link>
                <Link to='/contact' className='hover:text-amber-400'>CONTACT</Link>
            </div>
            {/* contact button & dropdown */}
            <div className='flex gap-x-10'>
                <div>
                    <button className='p-5 bg-blue-700 text-white font-semibold hover:bg-amber-400 transition-colors'>
                        <Link to='/contact'>CONTACT ME</Link>
                    </button>
                </div>
                {/* dropdown icon */}
                <div className='lg:hidden'>
                    <Bars3Icon className='w-7' />
                </div>
            </div>
        </div>
    );
}