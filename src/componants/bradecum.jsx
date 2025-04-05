const BreadcrumbSection = () => {
    return (
      <div
        className="breadcrumb-section bg-cover bg-center bg-no-repeat relative"
        style={{
          backgroundImage:
            "linear-gradient(270deg, rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.55)), url(assets/img/about-background.png)",
        }}
      >
        <div className="company-name text-white text-2xl font-bold p-4">Sparklin</div>
        <div className="container mx-auto px-6 lg:px-24">
          <div className="flex justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mb-4">Our Story</h1>
              <ul className="flex justify-center space-x-2 text-lg">
                <li>
                  <a href="index.html" className="text-gray-300 hover:text-white">Home</a>
                </li>
                <li className="text-gray-400">/</li>
                <li className="text-white">About Us</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default BreadcrumbSection;
  