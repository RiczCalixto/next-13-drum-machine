"use client";
import * as React from "react";

export const SoundContext = React.createContext();

function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = React.useState(true);

  return (
    <SoundContext.Provider
      value={{
        soundEnabled,
        toggleSound: () => setSoundEnabled((prev) => !prev),
      }}
    >
      {children}
    </SoundContext.Provider>
  );
}

export default SoundProvider;
