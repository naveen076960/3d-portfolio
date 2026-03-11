import React from "react";
import { Html } from "@react-three/drei";

const Loader = () => {
  return (
    <Html as="div" center>
      <div className="flex flex-col items-center justify-center">
        <span className="w-8 h-8 border-4 border-[#00f7ff] border-t-transparent rounded-full animate-spin"></span>
        <p className="text-[#00f7ff] font-mono text-sm mt-4 font-bold tracking-widest">
          LOADING_ASSETS...
        </p>
      </div>
    </Html>
  );
};

export default Loader;
