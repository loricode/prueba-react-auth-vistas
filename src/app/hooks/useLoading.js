import { useState, useEffect } from "react";

export const useLoading = () => {

   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
        setLoading(false);
      }, 5000);
    }, []);

   return { loading };
    
}



