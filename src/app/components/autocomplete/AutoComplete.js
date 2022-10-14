import React, {useState} from 'react'
import Autocomplete from "react-autocomplete";

//styles
import styles from './autocomplete.module.css';

export function searchData(data = [], toSearch = '') {
  if (data.length === 0) return [];
  
  let filteredData = [];

  for (const key in data[0]) {
      filteredData.push(...data.filter(item => String(item[key]).toLowerCase().includes(toSearch.toLowerCase())))   
  }
  
  const noRepeat = new Set(filteredData);
  return Array.from(noRepeat);
}


/**
 * 
 * @param { {
 * items:[],
 * } } props
 */
export const AutoComplete = ({items = [], name = '', value, handleChange}) => {
  
  const [ arrayItems, setArrayItems ] = useState(items);
  

  const search = (text = '') =>{


     setArrayItems(searchData(items, text))

  }


  return (
   <Autocomplete
      menuStyle={{
      borderRadius: '3px',
      boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
      background: 'rgba(255, 255, 255, 0.9)',
      padding: '2px 2px',
      fontSize: '90%',
      position: 'fixed',
      overflow: 'auto',
       maxHeight: '50%',
      zIndex: 999}}
   wrapperStyle={{
     width: "100%",
     height: "100%",
   }}
   inputProps={{
     className: styles.autocomplete,
   }}
   getItemValue={(item) => item.label}
   items={arrayItems}
   renderItem={(item, isHighlighted) => (
     <div
       key={item.id}
       style={{
         background: isHighlighted ? "lightgray" : "white",
       }}
     >
       {item.label}
     </div>
   )}
   value={value.label}
   onChange={(e) => {
    search(e.target.value)
    handleChange({target:{name, value:{id:'', label:e.target.value}}})
  }
  }
   onSelect={(val, item) => handleChange({target:{name, value:item}})}
 />
  )
}
