import React, { useEffect, useState } from "react";

const getStorageData = <T>(keyName: string, defaultValue: T): T => {
    const savedItem = localStorage.getItem(keyName);
    if(typeof savedItem === 'string') {
        const parsedItem = JSON.parse(savedItem);
        return parsedItem;
    }
    return defaultValue;
}

export const useLocalStorage = <T>(keyName: string, initialValue: T): [T, React.Dispatch<React.SetStateAction<T>>] => {
    const [value, setValue] = useState<T>(() => {
        return getStorageData<T>(keyName, initialValue);
    });

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(value));
    }, [keyName, value]);

    return [value, setValue];
}