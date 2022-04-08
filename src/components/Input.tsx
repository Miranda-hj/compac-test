import styles from "./Input.module.scss";

export const Input = (props: JSX.IntrinsicElements["input"]) => {
  return (
    <div className={styles.basic}>
      <label>customerId</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>siteId</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>registrationId</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>name</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>description</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>hardware variant</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>authorisation mode</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>name</label>
      <input placeholder={props.placeholder} type={props.type} />
      <label>name</label>
      <input placeholder={props.placeholder} type={props.type} />
      <input placeholder={props.placeholder} type={props.type} />
      <input placeholder={props.placeholder} type={props.type} />
      <input placeholder={props.placeholder} type={props.type} />
      <input placeholder={props.placeholder} type={props.type} />

      <Input label={"description"} />
      <Input label={"hardware variant"} />
      <Input label={"authorisation mode"} />
      <Input label={"authorisation timeout"} />
      <Input label={"authorisation flags"} />
      <Input label={"payment gateway flags"} />
      <Input label={"payment gateway address"} />
      <Input label={"currency"} />
      <Input label={"printer type"} />
      <Input label={"passcode"} />
    </div>
  );
};
