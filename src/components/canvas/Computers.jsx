import React from "react";

const ComputersCanvas = () => {
  return (
    // A <mesh> is a basic 3D object. This creates a cool wireframe box
    // so your site doesn't crash while you build the real models!
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial color="#00f7ff" wireframe={true} />
    </mesh>
  );
};

export default ComputersCanvas;
