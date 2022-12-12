// components 
import Navbar from '../components/Navbar';
import HomePageMain from '../components/HomePageMain';
import HomePageAbout from '../components/HomePageAbout';
// icons
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function Home() {
    return(
        <div>
            <Navbar />
            <HomePageMain />
            <div className='w-screen flex justify-center items-center lg:hidden'>
                <ChevronDownIcon className='w-10 mb-10' />
            </div>
            <HomePageAbout />
        </div>
    );
}