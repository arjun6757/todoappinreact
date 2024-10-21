import {useState, useEffect} from "react";

export const useLocalStorage = (key, initialValue) => {
    
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log("error reading item from localStorage: ", error);
            return initialValue;
        }
    });

    //effect to update localstorage when the storedValue changes or the key changes (for now key is fixed)

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(storedValue));
        } catch (error) {
            console.error("error writing to localStorage: ", error);
        }
    }, [key, storedValue]);
    
   return [storedValue, setStoredValue];
};