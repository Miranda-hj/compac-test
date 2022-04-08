import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./App.module.scss";
import { Table } from "./components/Table";

export default function App() {
  const [list, setList] = useState([]);
  useEffect(() => {
    fetch(
      "https://func-co-terminalservice-dev.azurewebsites.net/api/terminals?code=OTvy9V8paWOTtbs8dEKgSjFaPdnOya74lIHIEwBRU2ao0RHPmkVTKQ==",
    )
      .then((response) => response.json())
      .then((data) => setList(data));
  }, []);
  console.log(list);
  return (
    <div className={styles.basic}>
      <table>
        <tr className={styles.header}>
          <th>id</th>
          <th>customerId</th>
          <th>siteId</th>
          <th>registrationId</th>
          <th>name</th>
          <th>hardware variant</th>
          <th>authorisation mode</th>
          <th>authorisation timeout</th>
          <th>authorisation flags</th>
          <th>payment gateway address</th>
          <th>currency</th>
          <th>printer type</th>
          <th>passcode</th>
        </tr>

        {list.map((data, i) => (
          <tr className={styles.content}>
            <Table
              key={i}
              id={data.id}
              customerId={data.customerId}
              siteId={data.siteId}
              registrationId={data.registrationId}
              name={data.name}
              description={data.description}
              hardwareVariant={data.hardwareVariant}
              authorisationMode={data.authorisationMode}
              authorisationTimeout={data.authorisationTimeout}
              authorisationFlags={data.authorisationFlags}
              paymentGatewayAddress={data.paymentGatewayAddress}
              currency={data.currency}
              printerType={data.printerType}
              passcode={data.passcode}
            />
          </tr>
        ))}
      </table>
    </div>
  );
}
