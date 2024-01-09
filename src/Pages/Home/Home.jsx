import Category from '../Category/Category';
import NextTrip from '../NextTrip/NextTrip';
import TopDestinations from '../TopDestinations/TopDestinations';
import TravelEnjoy from '../TravelEnjoy/TravelEnjoy';
import Testimonials from '../Testimonials/Testimonials';
import Subscribe from '../Subscribe/Subscribe';
import Footer from '../Footer/Footer';
import Scroll from '../../Scroll/Scroll';
const Home = () => {
  return (
    <>
    <div>
<Scroll/>
<TravelEnjoy/>
<Category/>
<TopDestinations/>
<NextTrip/>
<Testimonials/>
<Subscribe/>
<Footer/>
    </div>
    </>
  )
}

export default Home;