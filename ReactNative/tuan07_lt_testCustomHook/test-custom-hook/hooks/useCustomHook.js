import { useState, useEffect } from "react";

export function useTextInput(initValue) {

  const [text, setText] = useState(initValue);

  const onTextChange = (newText) => {
    setText(newText);
  }
  return { text, onTextChange };
}

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(JSON.stringify(data));
        setLoading(false);
      });
  }, [url]);

  return { data, loading };
}