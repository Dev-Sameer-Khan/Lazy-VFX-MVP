import React from "react";
import { atom, useAtom } from "jotai";
import { selectedEffectAtom } from "../../main";
import { useEffect } from "react";



// Move atom export to its own file to avoid Fast Refresh warning.
// If that's not feasible now, at least avoid extra e

const EFFECTS = [
    { id: "default", name: "Default" },
  { id: "void", name: "Void" },
  { id: "fire", name: "Fire" },
  { id: "ice", name: "Ice" },
  { id: "lightray", name: "Light Ray" },
  // Add more effects if needed
];

const SidebarUI = ({ selectedEffect, onSelectEffect }) => {
  return (
    <aside
      style={{
        width: 220,
        borderRight: "1px solid #27272a",
        boxShadow: "2px 0 6px 0 rgba(0,0,0,0.13)",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center ",
        alignItems: "center",
        padding: "30px 20px",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 20,
        minWidth: 175,
      }}
    >
      <nav style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {EFFECTS.map(effect => (
          <button
            key={effect.id}
            onClick={() => onSelectEffect(effect.id)}
            style={{
              padding: "12px 16px",
              border: "none",
              borderRadius: 7,
              background: selectedEffect === effect.id ? "#4ade80" : "transparent",
              color: selectedEffect === effect.id ? "#fff" : "#e3e3e7",
              fontWeight: selectedEffect === effect.id ? 700 : 400,
              fontSize: 17,
              cursor: "pointer",
              transition: "background 0.14s",
            }}
          >
            {effect.name}
          </button>
        ))}
      </nav>
    </aside>
  );
};

export default function UI({ onEffectChange }) {
  const [selectedEffect, setSelectedEffect] = useAtom(selectedEffectAtom);

  const handleSelect = (effectId) => {
    setSelectedEffect(effectId);
    if (onEffectChange) {
      onEffectChange(effectId);
    }
  };


  return (
    <SidebarUI selectedEffect={selectedEffect} onSelectEffect={handleSelect} />
  );
}
