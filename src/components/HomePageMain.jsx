// media 
import img from '../media/profile-pic-mask.png';

export default function HomePageMain() {
    return(
        <div className='w-screen h-screen pt-32 lg:pt-0 lg:h-screen flex flex-col-reverse lg:flex-row'>
            {/* text section */}
            <div className='h-full w-full lg:w-[50%] bg-white flex justify-center items-center lg:items-end px-16 py-10 lg:py-0'>
                <div className='lg:mb-32'>
                    <h1 className='text-3xl lg:text-5xl font-semibold pb-5'>I'll give you the best solution in the shortest time.</h1>
                    <p className='mb-5 text-sm lg:text-md'>
                        I'm Adrian, a Full Stack Web Developer and Innvation Engineer focused on crafting functional and 
                        aesthetic informative and e-commerce sites for small and medium businesses.
                    </p>
                    <button className='py-2 lg:py-5 px-10 bg-blue-700 text-white font-semibold hover:bg-amber-400 transition-colors shadow-lg'>
                        MORE ABOUT ME
                    </button>
                </div>
            </div>
            {/* picture section */}
            <div className='h-auto lg:h-full bg-slate-100 lg:w-[50%] flex justify-center items-end'>
                <img src={img} alt="" className='h-[60%] lg:h-[80%] object-cover lg:w-auto' />
            </div>
        </div>
    )
}