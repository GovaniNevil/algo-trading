// Desc: Main App component
import './App.css';
import Header from './componants/header';
import Banner from './componants/banner';
import StockTicker from './componants/stockprice';
import ServiceGrid from './componants/services';
import ReviewSection from './componants/clientreview';
import CtaSection from './componants/cta';
import Footer from './componants/footer';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <StockTicker />
      <ServiceGrid />
      <ReviewSection />   
       <CtaSection />
      {/* <Footer />   */}
    </>
  );
}

export default App;
