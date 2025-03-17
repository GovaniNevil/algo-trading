import React from "react";

const stocks = [
    { symbol: "RELIANCE", price: 2850.75, change: 1.25, percent: 0.95 },
    { symbol: "TCS", price: 3750.10, change: -12.5, percent: -0.33 },
    { symbol: "HDFCBANK", price: 1520.65, change: 8.25, percent: 0.55 },
    { symbol: "INFY", price: 1650.30, change: 6.8, percent: 0.42 },
    { symbol: "WIPRO", price: 410.20, change: -2.3, percent: -0.56 },
    { symbol: "ICICIBANK", price: 960.85, change: 5.15, percent: 0.54 },
    { symbol: "SBIN", price: 680.45, change: 3.6, percent: 0.53 },
];

// Duplicate stocks for a seamless loop
const loopStocks = [...stocks, ...stocks];

const StockTicker = () => {
    return (
        <section className="py-12 bg-black">
            <div className="container mx-auto px-6 text-center">
                {/* <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-8">
                    Supported by many companies <span className="primary-color">around the globe</span>
                </h2> */}
            </div>
            <div className="ticker-container">
                <div className="ticker-wrapper">
                    <div className="ticker">
                        {loopStocks.map((stock, index) => (
                            <div key={index} className="stock-item">
                                <span className="symbol">{stock.symbol}</span>
                                <span className="price">{stock.price.toFixed(2)}</span>
                                <span
                                    className={`change ${stock.change >= 0 ? "up" : "down"}`}
                                >
                                    {stock.change >= 0 ? "▲" : "▼"} {stock.percent.toFixed(2)}% ({stock.change.toFixed(2)})
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>

    );
};

export default StockTicker;
