export const Table = (
  props: JSX.IntrinsicElements["input"] & {
    id?: string;
    customerId?: string;
    siteId?: string;
    registrationId?: string;
    name?: string;
    description?: string;
    hardwareVariant?: string;
    authorisationMode?: string;
    authorisationTimeout?: string;
    authorisationFlags?: string;
    paymentGatewayAddress?: string;
    currency?: string;
    printerType?: string;
    passcode?: string;
  },
) => {
  return (
    <>
      <td>{props.id}</td>
      <td>{props.customerId}</td>
      <td>{props.siteId}</td>
      <td>{props.registrationId}</td>
      <td>{props.description}</td>
      <td>{props.name}</td>
      <td>{props.hardwareVariant}</td>
      <td>{props.authorisationMode}</td>
      <td>{props.authorisationTimeout}</td>
      <td>{props.authorisationFlags}</td>
      <td>{props.paymentGatewayAddress}</td>
      <td>{props.currency}</td>
      <td>{props.printerType}</td>
      <td>{props.passcode}</td>
    </>
  );
};
