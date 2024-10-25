// src/components/GridLoaderComponent.js
import React from "react";
import { GridLoader } from "react-spinners";

const GridLoaderComponent = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-blue-50">
      <GridLoader
        color={"#4645F6"} // Change color as desired
        loading={true}
        size={30} // Size of the loader
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default GridLoaderComponent;
