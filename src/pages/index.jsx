import Banner from '../componants/banner';
import StockTicker from '../componants/stockprice';
import ServiceGrid from '../componants/services';
import ReviewSection from '../componants/clientreview';
import Stockvideo from '../componants/stockvideo';
import Feature from '../componants/feature';

function Home() {
  return (
    <>
      
      <Banner />
      <StockTicker />
      <ServiceGrid />
      <Stockvideo />
      <Feature />
      <ReviewSection />
        
    </>
  );
}

export default Home;