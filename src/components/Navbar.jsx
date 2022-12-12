// react router
import { Link } from 'react-router-dom';
// icons 
import { Bars3Icon } from '@heroicons/react/24/outline';

export default function Navbar() {
    return(
        <div className='w-screen flex items-center justify-between items-center py-5 px-16 select-none absolute'>
            {/* logo section */}
            <div>
                <span className='font-semibold'>Logo</span>
            </div>
            {/* navs section */}
            <div className='hidden lg:flex gap-x-10 font-semibold'>
                <Link to='/' className='hover:text-amber-400 transition-colors'>HOME</Link>
                <Link to='/about' className='hover:text-amber-400 transition-colors'>ABOUT</Link>
                <Link to='/portfolio' className='hover:text-amber-400 transition-colors'>PORTFOLIO</Link>
                <Link to='/contact' className='hover:text-amber-400 transition-colors'>CONTACT</Link>
            </div>
            {/* contact button & dropdown */}
            <div className='flex gap-x-10'>
                <div>
                    <button className='py-5 px-10 bg-blue-700 text-white font-semibold hover:bg-amber-400 transition-colors'>
                        <Link to='/contact'>CONTACT ME</Link>
                    </button>
                </div>
                {/* dropdown icon */}
                <div className='lg:hidden flex justify-center items-center'>
                    <Bars3Icon className='w-7 cursor-pointer hover:text-amber-400' />
                </div>
            </div>
        </div>
    );
}