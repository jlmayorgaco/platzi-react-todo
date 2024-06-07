import React from "react";
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  
  React.useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        try {
            setLoading(true);
      
            const localStorageItem = localStorage.getItem(itemName);
            let parsedItem;
      
            if (!localStorageItem) {
              localStorage.setItem(itemName, JSON.stringify(initialValue));
              parsedItem = initialValue;
            } else {
              parsedItem = JSON.parse(localStorageItem);
            }
            setItem(parsedItem);
            setError("");
            setLoading(false);
          } catch (e) {
            setError(e);
          }
    }, 5000)
  
  }, []);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };
  return [item, saveItem, loading, setLoading, error, setError];
}

export { useLocalStorage };
