import React from 'react';
import ChromaGrid from './ChromaGrid'; 
import './Memories.css'

const Developers = () => {
  // Array of items to be displayed in the grid
  const items = [
    {
      image: "/Developers/harshit.png",
      title: "Harshit",
      subtitle: "Frontend Developer",
      handle: "@harshiii25",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #4d91ffff, #000)",
      url: "https://github.com/harshiii25"
    },
    {
      image: "/Developers/savar.png",
      title: "Savar",
      subtitle: "Frontend Developer",
      handle: "@savargit09",
      borderColor: "#f9f636ff",
      gradient: "linear-gradient(180deg, #eefa41ff, #000)",
      url: "https://github.com/savargit09"
    },
    {
      image: "/Developers/lakshya.png",
      title: "Lakshya",
      subtitle: "App Developer",
      handle: "@2005lakshya",
      borderColor: "#a23cf6ff",
      gradient: "linear-gradient(180deg, #7928d0ff, #000)",
      url: "https://github.com/2005lakshya"
    },
    {
      image: "/Developers/bhavya.png",
      title: "Bhavya",
      subtitle: "Backend Engineer",
      handle: "@bhavya-khatri-59",
      borderColor: "#4dfd3dff",
      gradient: "linear-gradient(180deg, #5ce939ff, #000)",
      url: "https://github.com/bhavya-khatri-59"
    },
    {
      image: "/Developers/tarush.png",
      title: "Tarush",
      subtitle: "Backend Engineer",
      handle: "@tarush10000",
      borderColor: "#fd3d3dff",
      gradient: "linear-gradient(180deg, #ff5050ff, #000)",
      url: "https://github.com/tarush10000"
    },
    {
      image: "/Developers/shrishti.png",
      title: "Shrishti",
      subtitle: "Backend Engineer",
      handle: "@shrishtib07",
      borderColor: "#3dfdfdff",
      gradient: "linear-gradient(180deg, #7de7ffff, #000)",
      url: "https://github.com/shrishtib07"
    }
  ];

  return (
    <div style={{ height: '800px', position: 'relative' }}>
        
      <ChromaGrid 
        items={items}
        radius={200}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
      />
    </div>
  );
};

export default Developers;