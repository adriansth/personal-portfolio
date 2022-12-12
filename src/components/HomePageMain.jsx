// media 
import img from '../media/profile-pic-mask.png';

export default function HomePageMain() {
    return(
        <div className='w-screen h-screen flex'>
            {/* text section */}
            <div className='h-full w-[50%] bg-white flex justify-center items-end px-16'>
                <div className='mb-32'>
                    <h1 className='text-5xl font-semibold pb-5'>I'll give you the best solution in the shortest time.</h1>
                    <p className='mb-5'>
                        I'm Adrian, a Full Stack Web Developer and Innvation Engineer focused on crafting functional and 
                        aesthetic informative and e-commerce sites for small and medium businesses.
                    </p>
                    <button className='py-5 px-10 bg-blue-700 text-white font-semibold hover:bg-amber-400 transition-colors'>
                        MORE ABOUT ME
                    </button>
                </div>
            </div>
            {/* picture section */}
            <div className='bg-slate-100 w-[50%] flex justify-center items-end'>
                <img src={img} alt="" />
            </div>
        </div>
    )
}