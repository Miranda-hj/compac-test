import React, { useState } from "react";
import { StartIcon } from "../icon/start/Start";
import styles from "./panel.module.scss";

export const Panel = (
  props: JSX.IntrinsicElements["input"] & {
    siteId?: string;
    name?: string;
    description?: string;
    hardwareVariant?: string;
    authorisationMode?: string;
  },
) => {
  return (
    <div className={styles.basic}>
      <div className={styles.title}>
        <label className={styles.label}>{props.name}</label>
        <p className={styles.name}>{props.description}</p>
      </div>
      <div className={styles.content}>
        <label className={styles.label}>Hardware Variant</label>
        <div className={styles.light}>
          <div
            className={
              props.hardwareVariant === "dispenser" ? styles.green : styles.red
            }></div>
          <p>{props.hardwareVariant}</p>
        </div>
      </div>
      <div className={styles.content}>
        <label className={styles.label}>Authorisation Mode</label>
        <div className={styles.light}>
          <div
            className={
              props.authorisationMode === "none" ? styles.red : styles.green
            }></div>
          <p>{props.authorisationMode}</p>
        </div>
      </div>
      <div className={styles.content}>
        <label className={styles.label}>Site ID</label>
        <p className={styles.siteId}>{props.siteId}</p>
      </div>
      <StartIcon />
    </div>
  );
};
