import React from "react";
import highways from "../../assets/highways.avif";
import { allSectorsData } from "../../data/Sectors";
import { useParams } from "react-router-dom";

const Sector = () => {
  const { sectorId } = useParams();
  const sector = allSectorsData.find((s) => s.id === sectorId);
  if (!sector) {
    return (
      <div className="p-6 text-center text-gray-500">No sector selected</div>
    );
  }

  return (
    <div className="relative w-full bg-gray-100">
      {/* Responsive heading */}
      <h2 className="text-start text-xl sm:text-2xl md:text-3xl font-bold py-4 px-4 sm:px-6 lg:px-8 leading-tight">
        {sector.title}
      </h2>

      {/* Image Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] flex justify-center items-center">
        <img
          src={sector.image}
          alt={sector.title}
          className="w-full sm:w-[100%] md:w-[96%] h-full object-cover"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = sector.image;
          }}
        />

        {/* Responsive Floating Text Card */}
        <div
          className="absolute -bottom-70 sm:-bottom-30 md:-bottom-80 lg:-bottom-80 
                        right-[-28vh] lg:right-[-61vh] md:right-[-42vh]
                        -translate-x-1/2
                        bg-white shadow-lg
                        p-3 sm:p-4 md:p-6 
                        w-[80%] sm:w-[60%] md:w-[70%] lg:w-[60%]
                        max-w-4xl lg:min-h-[400px]"
        >
          {/* Read time */}
          <p className="text-xs sm:text-sm text-gray-500 mb-2">8 min read</p>

          {/* Key takeaways heading */}
          <h2 className="text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed text-justify mb-3 sm:mb-4">
            Key <span className="text-amber-600">takeaways</span>
          </h2>

          {Array.isArray(sector.highlights) ? (
            sector.highlights.map((para, idx) => (
              <p
                key={idx}
                className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8"
              >
                {para}
              </p>
            ))
          ) : (
            <p className="text-sm xs:text-base sm:text-lg text-slate-700 mb-6 xs:mb-8">
              {sector.highlights}
            </p>
          )}
          
        </div>
      </div>

      {/* Extension section with responsive spacing */}
      <div
        className="bg-white w-full mt-60 sm:mt-32 md:mt-60 lg:mt-80 
                      rounded-t-xl shadow-inner p-4 sm:p-10 min-h-[60px]"
      >
        <p className="text-center text-gray-600 text-xs sm:text-sm">
          {/* Content can be added here if needed */}
        </p>
      </div>
    </div>
  );
};

export default Sector;
