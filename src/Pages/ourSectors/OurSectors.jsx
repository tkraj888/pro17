import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Zap,
  Leaf,
  Heart,
  Construction,
  Factory,
  Hotel,
  Building2,
  Building,
  Train,
  Home,
  ArrowRight,
  X,
} from "lucide-react";

// Import images
import Sector from "./Sector"
import { useNavigate } from "react-router-dom";
import { allSectorsData } from "../../data/Sectors";

const SectorCard = ({ sector, onCardClick }) => (
  <motion.div
    layoutId={`card-${sector.id}`}
    className="group flex flex-col bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer transform hover:-translate-y-2"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
  >
    <div
      className="h-50 xs:h-44 sm:h-48 relative"
      onClick={() => onCardClick(sector)}
    >
      <img
        src={sector.image}
        alt={sector.title}
        className="w-full h-full object-cover"
        loading="lazy"
        onError={(e) => (e.target.src = "/fallback-image.jpg")} // Fallback image
      />
    </div>
    <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
      <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-800 mb-2">
        {sector.title}
      </h3>
      <p className={`text-slate-600 text-sm xs:text-base sm:text-lg leading-relaxed flex-grow justify-center ${
    (sector.id === "health" || sector.id === "innovation" || sector.id === "collaborative_approatch" || sector.id === "wealth_experience" || sector.id === "joint_ventures" || sector.id=== "delivering_value") ? "mb-11" : "mb-4"
  }`}>
        {sector.description}
      </p>
      <div className="flex items-center justify-between mt-auto">
        <div
          className="flex items-center text-blue-600 font-semibold group-hover:text-blue-700 transition-colors cursor-pointer"
          onClick={() => onCardClick(sector)}
        >
          <span className="text-sm xs:text-base">View Details</span>
          <ArrowRight className="w-4 xs:w-5 h-4 xs:h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </div>
  </motion.div>
);

const SectorDetailModal = ({ sector, onClose ,handleLearnMore}) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 xs:p-5 sm:p-6"
    onClick={onClose}
  >
    <motion.div
      layoutId={`card-${sector.id}`}
      onClick={(e) => e.stopPropagation()}
      className="bg-gray-50 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] flex flex-col overflow-hidden"
    >
      <div className="h-48 xs:h-56 sm:h-64 relative">
        <img
          src={sector.image}
          alt={sector.title}
          className="w-full h-full object-cover"
          loading="lazy"
          onError={(e) => (e.target.src = "/fallback-image.jpg")} 
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-4 xs:p-5 sm:p-6">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl font-bold flex gap-[10px]">
            <sector.icon className="w-12 h-12 inline-block text-black-500" />
            {sector.title}
          </h2>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 xs:top-5 right-4 xs:right-5 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
        >
          <X className="w-5 xs:w-6 h-5 xs:h-6" />
        </button>
      </div>
      <div className="p-4 xs:p-6 sm:p-8 overflow-y-auto">
         
        {/* <p className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8">
          {sector.highlights}
        </p> */}

        {Array.isArray(sector.highlights) ? (
  sector.highlights.map((para, idx) => (
    <p key={idx} className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8">
      {para}
    </p>
  ))
) : (
  <p className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8">{sector.highlights}</p>
)}
        
        <div className="py-2 flex justify-between items-center">
            <button
              onClick={() => handleLearnMore(sector.id)}
              className="mt-auto text-lg font-semibold text-indigo-600 hover:text-indigo-800 transition-colors self-start inline-flex items-center group/button"
            >
              Learn More...
            </button>
        </div> 
      </div>
    </motion.div>
  </motion.div>
);

const OurSectors = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const navigate = useNavigate();

  const handleLearnMore = (sectorId) => {
  setSelectedSector(null); 
  setTimeout(() => navigate(`/sector/${sectorId}`), 100); 
};


  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-[#002147] to-[#003366] text-white text-center py-16 xs:py-20 sm:py-24 px-4 xs:px-5 sm:px-6 relative overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.05) 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
        <div className="relative z-10">
          <motion.h1
            className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Sectors
          </motion.h1>
        </div>
      </section>

      <motion.section
        className="-mt-12 xs:-mt-16 sm:-mt-20 relative z-10 mx-auto max-w-4xl bg-white rounded-2xl shadow-xl text-center px-4 xs:px-5 sm:px-6 py-8 xs:py-10 sm:py-12"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-xl xs:text-2xl sm:text-3xl font-semibold text-slate-800">
          Building a Better World,{" "}
          <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
            Across Every Sector
          </span>
        </h2>
        <p className="text-slate-600 text-base xs:text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mt-4">
          Our expertise spans a wide range of industries, delivering innovative
          and sustainable projects from design and construction to facilities
          management.
        </p>
      </motion.section>

      <main className="container mx-auto px-4 xs:px-5 sm:px-6 py-12 xs:py-16 sm:py-20 lg:py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 xs:gap-8">
          {allSectorsData.map((sector,idx) => (
            <div key={idx} className="h-full">
            <SectorCard
              key={sector.id}
              sector={sector}
              onCardClick={setSelectedSector}
            />
            </div>
          ))}
        </div>
      </main>

      <AnimatePresence>
        {selectedSector && (
          <SectorDetailModal
            sector={selectedSector}
            onClose={() => setSelectedSector(null)}
            handleLearnMore={() => handleLearnMore(selectedSector.id)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default OurSectors;
