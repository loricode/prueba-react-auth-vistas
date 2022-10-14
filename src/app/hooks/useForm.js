import { useState } from 'react';


/**
 * 
 * @param {any} stateValue
 * @returns {{ state:{}, setState:Function, handleChange:Function, handleChangeCheck:Function }}
 */
export const useForm = (stateValue) => {

    const [state, setState] = useState(stateValue);

    const handleChange = e => {

        const { name, value } = e.target;
  
        setState(prev => ({
            ...prev,
            [name]: value
        }));

    };

    const handleChangeCheck = e => {

      const { name, checked } = e.target;
  
      setState(prev => ({
          ...prev,
          [name]: checked
      }));

    };

    return { state, setState, handleChange, handleChangeCheck };

}