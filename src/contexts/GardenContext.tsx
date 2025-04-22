
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Plant = {
  id: number;
  name: string;
  image: string;
  care: string;
  wateringSchedule?: string;
};

interface GardenContextType {
  gardenPlants: Plant[];
  addPlantToGarden: (plant: Plant) => void;
}

const GardenContext = createContext<GardenContextType | undefined>(undefined);

export function GardenProvider({ children }: { children: ReactNode }) {
  const [gardenPlants, setGardenPlants] = useState<Plant[]>([]);

  const addPlantToGarden = (plant: Plant) => {
    setGardenPlants((prev) => [...prev, { ...plant, wateringSchedule: 'Weekly' }]);
  };

  return (
    <GardenContext.Provider value={{ gardenPlants, addPlantToGarden }}>
      {children}
    </GardenContext.Provider>
  );
}

export const useGarden = () => {
  const context = useContext(GardenContext);
  if (undefined === context) {
    throw new Error('useGarden must be used within a GardenProvider');
  }
  return context;
};
