// components 
import Navbar from '../components/Navbar';
import HomePageMain from '../components/HomePageMain';
import HomePageAbout from '../components/HomePageAbout';

export default function Home() {
    return(
        <div>
            <Navbar />
            <HomePageMain />
            <HomePageAbout />
        </div>
    );
}