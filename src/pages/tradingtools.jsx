/* eslint-disable react/jsx-key */
import {
  FaChartBar,
  FaExchangeAlt,
  FaRobot,
  FaCogs,
  FaUserTie,
  FaClipboardList,
} from "react-icons/fa";
import SpotlightCard from '../componants/spotlightcard';

const tools = [
  {
    name: "MetaTrader 4 (MT4)",
    category: "Forex & CFD Trading",
    description:
      "Industry-leading trading platform with advanced charting, indicators, and algorithmic trading features.",
    icon: <FaChartBar className="text-green-500 text-6xl bg-transparent mb-[30px]" />,
  },
  {
    name: "TradingView",
    category: "Market Analysis & Charting",
    description:
      "A powerful web-based charting platform with real-time data, social trading, and custom indicators.",
    icon: <FaExchangeAlt className="text-blue-500 text-6xl bg-transparent mb-[30px]" />,
  },
  {
    name: "QuantConnect",
    category: "Algorithmic Trading",
    description:
      "Cloud-based algorithmic trading platform supporting multiple asset classes and programming languages.",
    icon: <FaRobot className="text-yellow-500 text-6xl bg-transparent mb-[30px]" />,
  },
  {
    name: "NinjaTrader",
    category: "Futures & Options Trading",
    description:
      "A professional-grade trading platform offering advanced order execution and analysis tools.",
    icon: <FaCogs className="text-purple-500 text-6xl bg-transparent mb-[30px]" />,
  },
  {
    name: "Interactive Brokers TWS",
    category: "Professional Trading Platform",
    description:
      "Advanced trading software offering multi-asset support, deep market access, and API integration.",
    icon: <FaUserTie className="text-red-500 text-6xl bg-transparent mb-[30px]" />,
  },
  {
    name: "cTrader",
    category: "Forex & CFD Trading",
    description:
      "A powerful trading platform offering fast execution, intuitive design, and advanced charting tools.",
    icon: <FaClipboardList className="text-teal-400 text-6xl bg-transparent mb-[30px]" />,
  },
];

const TradingTools = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">Trading Tools</h2>
        <p className="text-lg text-gray-400 mb-12">
          Unlock the power of trading with our advanced tools designed for
          market analysis, strategy execution, and performance optimization.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="#a3fd3540"
            >
              <div
                key={index}
                className="p-6 bg-transparent  text-left "
              >
                <div className="bg-transparent gap-4 mb-4">
                  {tool.icon}
                  <div className="bg-transparent">
                    <h3 className="text-xl font-semibold bg-transparent">{tool.name}</h3>
                    <p className="text-sm text-gray-500 bg-transparent">{tool.category}</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-4 bg-transparent">{tool.description}</p>
              </div>
            </SpotlightCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TradingTools;
