// icons 
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function HomePageAbout() {
    return(
        <div className='flex w-screen h-screen'>
            {/* image section */}
            <div className='w-[50%] bg-slate-100'>
            </div>
            {/* text section */}
            <div className='w-[50%] flex items-center'>
                <div className='w-full px-16'>
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