import React, { useEffect, useState } from "react";
import styles from "./App.module.scss";
import { Panel } from "./components/panel/panel";
import { Arrow } from "./components/icon/arrow/Arrow";
import { Create } from "./components/create/Create";

export default function App() {
  const [list, setList] = useState<any[]>([]);
  const [expend, setExpend] = useState(false);
  useEffect(() => {
    fetch(
      "https://func-co-terminalservice-dev.azurewebsites.net/api/terminals?code=OTvy9V8paWOTtbs8dEKgSjFaPdnOya74lIHIEwBRU2ao0RHPmkVTKQ==",
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  const totalNumber = list.length;
  return (
    <div className={styles.basic}>
      <div className={styles.title}>
        <h2>Your sites</h2>
        <Create />
      </div>
      <div className={styles.content}>
        <div className={styles.total} onClick={() => setExpend(!expend)}>
          <h2>({totalNumber})</h2>
          <Arrow transform={expend ? "rotate(0)" : "rotate(270)"} />
        </div>
        <div className={styles.panel}>
          {list.map(
            (data, i) =>
              expend && (
                <Panel
                  key={i}
                  siteId={data.siteId}
                  name={data.name}
                  description={data.description}
                  hardwareVariant={data.hardwareVariant}
                  authorisationMode={data.authorisationMode}
                />
              ),
          )}
        </div>
      </div>
    </div>
  );
}
