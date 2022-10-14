import styles from "./account.module.css";
import React from "react";
import { Link } from "react-router-dom";

import MarcaImg from "../../../assets/icons/marca.png";
import SearchImg from "../../../assets/icons/search.png";
import AccountIcon from "../../../assets/icons/account.svg";

//hook
import { useForm } from '../../hooks/useForm';

//components
import { AutoComplete } from '../../components/autocomplete/AutoComplete';
import { InputWithIcon } from "../../components/inputWithIcon/InputWithIcon";
 

//data test 
const countries = [
  {id:'1', label:'colombia'},
  {id:'2', label:'united state'},
  {id:'3', label:'españa'},
  {id:'4', label:'mexico' } 
]

const languages = [
  {id:'1', label:'español'},
  {id:'2', label:'ingles'},
  {id:'3', label:'frances'},
  {id:'4', label:'portugués'} 
]

export const CreateAccount = () => {

  const { state, handleChange, handleChangeCheck } = useForm({
    email:'',
    password:'',
    passwordRetype:'',
    country:{ id:'', label:''},
    language:{ id:'', label:''},
    terms:false
 });

 const onSubmit = e => {
    e.preventDefault();
    console.log(state)
 }

  return (
    <div className="container pt-3">
      <div className="row justify-content-center pt-1">
        <div className="col-lg-4 col-sm-12">
          <div className="card border-0">
            <div className="card-body px-4">
              <div className="pt-3">
                <form onSubmit={onSubmit}>
                  <div className="d-flex justify-content-center pb-0">
                    <img src={MarcaImg} alt="mercurycash" />
                  </div>

                  <div className="d-flex justify-content-center pb-2 pt-3">
                    <h5 className={styles.welcome}>Create your account</h5>
                  </div>

                  <InputWithIcon 
                    name="email"
                    value={state.email}
                    handleChange={handleChange}
                    placeholder="Email" 
                    type="text"
                    Icon={AccountIcon} />

                  <InputWithIcon
                   name="password"
                   value={state.password}
                   handleChange={handleChange}
                   placeholder="Password" />

                  <InputWithIcon 
                    name="passwordRetype"
                    value={state.passwordRetype}
                    handleChange={handleChange}
                    placeholder="Retype Password" />

                  <div className="mb-4 mt-4 d-flex border p-2 rounded-pill">
                    <div className="mx-2">
                      <img className={styles.searchIcon} src={SearchImg} alt="search"/>
                    </div>

                    <AutoComplete 
                      name='country'
                      value={state.country}
                      handleChange={handleChange}
                      items={countries} />

                    <div className="mx-2">
                     <ChevronDownIcon/>
                    </div>
                  </div>


                  <div className="mb-3 d-flex align-items-center border p-2 rounded-pill">

                    <AutoComplete
                      name='language'
                      value={state.language}
                      handleChange={handleChange}
                      items={languages}
                      />

                    <div className="mx-2">
                     <ChevronDownIcon/>
                    </div>

                  </div>

                  <div className="row justify-content-between pt-3 pb-3 mb-3">
                    <div className="col-12">
                      <div className={styles.checkbox}>
                        <input
                          onChange={handleChangeCheck}
                          name="terms"
                          type="checkbox"
                          className={styles["input-assumpte"]}
                          id="input-confidencial"
                        />
                        <label htmlFor="input-confidencial">
                          <strong className={styles.terms}>
                            By continuing I agree to the &nbsp;
                            <Link>
                             Terms of <br />
                              Services
                            </Link>
                            &nbsp; and &nbsp;
                            <Link>Privacy Policy</Link>
                          </strong>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 pb-1">
                    <button
                      className={
                        "btn btn-primary rounded-pill " + styles.btnAuth
                      }
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr />

          <div className={"pb-3 "+ styles.containerNotAccount}>
            <strong>
              have an account ? &nbsp;
              <Link to="/" className={styles.colorPrimary}>Log in</Link>
              &nbsp; instead.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};


/*const SearchIcon = () => {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width="16"
    height="16"
    viewBox="0 0 16 16"
  >
    <path fill-rule="evenodd" stroke="#5d3ec2" stroke-width="2" d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
  </svg>
  )
}*/

const ChevronDownIcon = () => {
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#5d3ec2"  viewBox="0 0 16 16">
     <path stroke="#5d3ec2" strokeWidth="3" fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/> 
</svg>

  )
}