import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./App.module.scss";
import { Input } from "./components/Input";

export default function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://func-co-terminalservice-dev.azurewebsites.net/api/terminals?code=OTvy9V8paWOTtbs8dEKgSjFaPdnOya74lIHIEwBRU2ao0RHPmkVTKQ==",
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm();
  // const onSubmit = (data: any) => console.log(data);
  return (
    <div className={styles.basic}>
      {/* <form onSubmit={handleSubmit(onSubmit)}> */}
      {list.map((data, i) => (
        <>
          <Input label={data} key={i} />
        </>
      ))}

      {/* <input type="submit" /> */}
      {/* </form> */}
    </div>
  );
}
