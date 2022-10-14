import React from 'react'

//assets
import EyeIcon from '../../../assets/icons/eye.svg';

//styles
import styles from './inputWithIcon.module.css';

/**
 * 
 * @param { {
 * placeholder:string,
 * name:string,
 * value:string,
 * handleChange:Function,
 * Icon:any
 * } } props
 */
export const InputWithIcon = ({ placeholder = '',  type = 'password', name='', value='', handleChange, Icon = undefined }) => {
  return (
    
   <div className="mb-3 d-flex border p-2 rounded">  

   <input
      placeholder={placeholder}
      autoComplete="on"
      type={type}
      name={name}
      value={value}
      onChange={handleChange}
      className={"form-control border-0 "+ styles.outlineNone}   
   />   
   
   <div className="mx-2 mt-1"> 
     <img className={styles.eyesIcon} src={Icon ? Icon: EyeIcon } alt="iconEye" />
   </div> 
 </div>
  )
}
