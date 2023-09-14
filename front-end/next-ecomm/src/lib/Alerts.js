import { writable } from "svelte/store";

// creates alerts store
function initializeAlertStore() {
    // sets the values to be empty messages and types
  const defaultValue = { message: null, type: null }
  const { subscribe, set } = writable(defaultValue);

  return {
    subscribe,
    setAlert: (message, type) => set({ message, type }),

    // not working
    // clearAlert: () => set(defaultValue)
  };
}

export const alerts = initializeAlertStore();


