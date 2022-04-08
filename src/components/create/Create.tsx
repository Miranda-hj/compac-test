import { useState } from "react";
import styles from "./Create.module.scss";
import { useForm } from "react-hook-form";
export const Create = (props: { onClick?: () => void }) => {
  const [active, setActive] = useState(false);
  const { register, handleSubmit, reset } = useForm();
  const newData = async () => {
    await fetch(
      "https://func-co-terminalservice-dev.azurewebsites.net/api/terminals?code=G8IbzSb1uq47bV2V0a/7W0uo68SzvcpbRpYxZgH757fK9OsrS7lbhw==",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name: "",
          description: "",
          hardwareVariant: "",
          authorisationMode: "",
          authorisationTimeout: "",
          PaymentGatewayAddress: "",
        }),
      },
    )
      .then((resp) => resp.json())
      .then(() => alert("successful!"));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(newData)}>
      <div className={styles.add} onClick={() => setActive(!active)}>
        Add
      </div>
      {active && (
        <div className={styles.modal}>
          <h3 className={styles.title}>Create New Terminal</h3>
          <div className={styles.inputGroup}>
            <label>Terminal Name</label>
            <input
              className={styles.input}
              placeholder={"Enter"}
              {...register("name")}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Description</label>
            <input
              className={styles.input}
              placeholder={"Enter description"}
              {...register("description")}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Hardware Variant</label>
            <select className={styles.select} {...register("hardwareVariant")}>
              <option>Select</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Authorisation Mode</label>
            <select
              className={styles.select}
              {...register("authorisationMode")}>
              <option>Select</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Authorisation Timeout</label>
            <input
              className={styles.input}
              placeholder={"Enter"}
              {...register("authorisationTimeout")}
            />
          </div>
          <div className={styles.inputGroup}>
            <label>Authorisation Flags</label>
            <select className={styles.select}>
              <option>Select</option>
              <option>1</option>
              <option>2</option>
            </select>
          </div>
          <div className={styles.inputGroup}>
            <label>Payment Gateway Address</label>
            <input
              className={styles.input}
              placeholder={"Enter"}
              {...register("PaymentGatewayAddress")}
            />
          </div>
          <div className={styles.buttonGroup}>
            <button
              className={styles.cancel}
              onClick={() => setActive(!active)}>
              Cancel
            </button>
            <button className={styles.save} type={"submit"}>
              Save & Exit
            </button>
          </div>
          <div>Curreny: NZD</div>
        </div>
      )}
    </form>
  );
};
