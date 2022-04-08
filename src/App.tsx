import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { useForm } from "react-hook-form";
import { Panel } from "./components/panel/panel";
import { Arrow } from "./components/icon/arrow/Arrow";

export default function App() {
  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    fetch(
      "https://func-co-terminalservice-dev.azurewebsites.net/api/terminals?code=OTvy9V8paWOTtbs8dEKgSjFaPdnOya74lIHIEwBRU2ao0RHPmkVTKQ==",
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  return (
    <div className={styles.basic}>
      <h2 className={styles.title}>Your sites</h2>
      <div className={styles.total}>
        <h2>()</h2>
      </div>
      <Arrow />
      {list.map((data, i) => (
        <Panel
          siteId={data.siteId}
          name={data.name}
          description={data.description}
          hardwareVariant={data.hardwareVariant}
          authorisationMode={data.authorisationMode}
        />
      ))}
    </div>
  );
}
