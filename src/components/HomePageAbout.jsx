// icons 
import { RocketLaunchIcon } from "@heroicons/react/24/outline";
// media 
import firebase from '../media/firebase.svg';
import nextjs from '../media/next.png';
import nodejs from '../media/nodejs.png';
import postgresql from '../media/postgresql.png';
import react from '../media/react.png';
import tailwindcss from '../media/tailwindcss.png';
import typescript from '../media/typescript.svg';

export default function HomePageAbout() {
    return(
        <div className='flex flex-col lg:flex-row w-screen h-auto lg:h-screen'>
            {/* image section */}
            <div className='lg:w-[50%] h-screen'>
                <div className='w-full h-screen bg-slate-100 relative'>
                    <div className='absolute w-[100px] h-[100px] bg-white rounded-full shadow-lg left-[20%] top-[20%] flex justify-center items-center'>
                        <img src={firebase} alt="" className='w-[50px]' />
                    </div>
                    <div className='absolute w-[150px] h-[150px] bg-white rounded-full shadow-lg right-[20%] top-[15%] flex justify-center items-center'>
                        <img src={nextjs} alt="" className='w-[80px]' />
                    </div>
                    <div className='absolute w-[120px] h-[120px] bg-white rounded-full shadow-lg left-[10%] top-[50%] flex justify-center items-center'>
                        <img src={nodejs} alt="" className='w-[50px]' />
                    </div>
                    <div className='absolute w-[100px] h-[100px] bg-white rounded-full shadow-lg left-[45%] top-[45%] flex justify-center items-center'>
                        <img src={typescript} alt="" className='w-[40px]' />
                    </div>
                    <div className='absolute w-[70px] h-[70px] bg-white rounded-full shadow-lg right-[10%] top-[55%] flex justify-center items-center'>
                        <img src={postgresql} alt="" className='w-[30px]' />
                    </div>
                    <div className='absolute w-[70px] h-[70px] bg-white rounded-full shadow-lg left-[30%] top-[80%] flex justify-center items-center'>
                        <img src={tailwindcss} alt="" className='w-[30px]' />
                    </div>
                    <div className='absolute w-[180px] h-[180px] bg-white rounded-full shadow-lg right-[15%] top-[70%] flex justify-center items-center'>
                        <img src={react} alt="" className='w-[90px]' />
                    </div>
                </div>
            </div>
            {/* text section */}
            <div className='w-screen lg:w-[50%] flex items-center'>
                <div className='w-full px-16 py-48'>
                    <h2 className='font-bold text-amber-400 mb-5'>01. ABOUT ME</h2>
                    <h1 className='font-semibold text-5xl mb-5'>I'll help you digitalize your business.</h1>
                    <div className='flex items-center gap-x-5 mb-5'>
                        <RocketLaunchIcon className='w-8' />
                        <span className='font-semibold'>+1 years of experience in this game, Full Stack Web Development.</span>
                    </div>
                    <p className='text-gray-700'>
                        I have aknowledged the quick potential growth of e-commerce services and the need for businesses to 
                        digitalize their sales and corporate identity. 
                    </p>
                </div>
            </div>
        </div>
    );
}