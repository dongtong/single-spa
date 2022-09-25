import Parcel from "single-spa-react/parcel";

export default function Root(props) {
  return (<section>
    <Parcel config={System.import("@dong/nav")}></Parcel>
    <hr />
    {props.name} is mounted!
  </section>);
}
