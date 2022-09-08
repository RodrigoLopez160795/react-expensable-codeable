import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

export function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem(key)) || initialValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value, key]);

  return [value, setValue];
}

export function useLocalSearchParams(key, defaultValue) {
  const initialValue = JSON.parse(localStorage.getItem(key)) || defaultValue;

  const [searchParams, setSearchParams] = useSearchParams(initialValue);

  useEffect(() => {
    const params = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }

    localStorage.setItem(key, JSON.stringify(params));
  }, [searchParams, key]);

  return [searchParams, setSearchParams];
}
