// Desc: Main App component
import './App.css';
import Header from './componants/header';
import Banner from './componants/banner';
import StockTicker from './componants/stockprice';
import ServiceGrid from './componants/services';
import ReviewSection from './componants/clientreview';
import Stockvideo from './componants/stockvideo';
import Footer from './componants/footer';
import Feature from './componants/feature';
import Contactus from './componants/contact-us';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <StockTicker />
      <ServiceGrid />
      <Stockvideo />
      <Feature />
      <ReviewSection />
      {/* <Contactus /> */}
      <Footer />  
    </>
  );
}

export default App;
