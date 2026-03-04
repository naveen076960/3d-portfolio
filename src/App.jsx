import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      {/* Starry night background */}
      <div className="fixed inset-0 bg-black z-[-1]">
        {/* Stars with blinking animation */}
        <style>{`
          @keyframes blink {
            0%, 100% { opacity: 0.6; }
            50% { opacity: 1; }
          }
        `}</style>
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() > 0.5 ? "2px" : "1px",
                height: Math.random() > 0.5 ? "2px" : "1px",
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.7 + 0.3,
                animation: `blink ${Math.random() * 3 + 1.5}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      <div className="relative z-0 bg-primary">
        <Navbar />
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        {/*<Experience />*/}
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
