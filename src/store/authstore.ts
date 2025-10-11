"use client";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  username: string | null;
  org: string | null;
  token: string | null;
  login: (data: { username: string; org: string; token: string }) => void;
  logout: () => void;
  //set username
  setUsername: (username: string) => void;
}
export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      username: null,
      org: null,
      token: null,

      login: (data) =>
        set({
          username: data.username,
          org: data.org,
          token: data.token,
        }),

      logout: () => set({ username: null, org: null, token: null }),
        setUsername: (username: string) => set({ username }),
    }),
    {
      name: "auth-storage", // localStorage key
    }
  )
);