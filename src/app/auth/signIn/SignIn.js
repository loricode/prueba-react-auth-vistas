import styles from "./signin.module.css";
import React from "react";
import { Link } from "react-router-dom";

//hook
import { useForm } from "../../hooks/useForm";
import { useLoading } from "../../hooks/useLoading";
//components
import { InputWithIcon } from "../../components/inputWithIcon/InputWithIcon";

//assets
import MarcaImg from "../../../assets/icons/marca.png";

export const SignIn = () => {

  const { loading } = useLoading();

  const { state, handleChange, handleChangeCheck } = useForm({
    email: "",
    password: "",
    remember: false,
  });

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(state);
  };

  if (loading) {
    return <div>cargando...</div>;
  }

  return (
    <div className="container pt-3">
      <div className="row justify-content-center pt-1">
        <div className="col-lg-4 col-sm-12">
          <div className="card border-0">
            <div className="card-body px-4">
              <div className="py-3">
                <form onSubmit={onSubmit}>
                  <div className="d-flex justify-content-center pb-0">
                    <img src={MarcaImg} alt="mercurycash" />
                  </div>

                  <div className="d-flex justify-content-center pb-2 pt-3">
                    <h5 className={styles.welcome}>Welcome back</h5>
                  </div>

                  <div className="mb-3 d-flex border p-2 rounded">
                    <input
                      name="email"
                      placeholder="Email"
                      type="text"
                      onChange={handleChange}
                      className={"form-control border-0 " + styles.outlineNone}
                    />
                  </div>

                  <InputWithIcon
                    name="password"
                    placeholder="Password"
                    value={state.password}
                    handleChange={handleChange}
                  />

                  <div className="d-flex flex-row-reverse pb-3">
                    <Link className={styles.fogotPassword}>
                      Forgot password?
                    </Link>
                  </div>

                  <div className="row justify-content-between pb-3">
                    <div className="col-12">
                      <div className={styles.checkbox}>
                        <input
                          type="checkbox"
                          name="remember"
                          onChange={handleChangeCheck}
                          className={styles["input-assumpte"]}
                          id="idconfidencial"
                        />
                        <label htmlFor="idconfidencial">
                          <strong className={styles.remember}>
                            Remember Me
                          </strong>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-grid gap-2 pb-3">
                    <button
                      className={
                        "btn btn-primary rounded-pill " + styles.btnAuth
                      }
                    >
                      Log in
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <hr />

          <div className={styles.containerNotAccount}>
            <strong>
              Don't have an account ? &nbsp;
              <Link className={styles.colorPrimary} to={"/createAccount"}>
                Log in
              </Link>
              &nbsp; instead.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};
