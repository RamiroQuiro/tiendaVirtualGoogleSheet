"use client";
import { create } from "zustand";



export const useFilterProduct = create((set, get) => ({
  filterSearch: "all",
  filterCategory: "all",
  filterSubCategory: "all",
  inputSearchPrimero: (name) => {
    set((state) => ({
      ...state,
      filterSearch: name,
      filterCategory: "all",
      filterSubCategory: "all",
    }));
  },
  inputSearch: (name) => {
    set((state) => ({
      ...state,
      filterCategory: name,
      filterSubCategory: "all",
    }));
  },
  inputSearchSubCategory: (name) => {
    set((state) => ({
      ...state,
      filterSubCategory: name,
    }));
  },
}));
