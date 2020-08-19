import Template from "../../components/Template";

export default (props) => {
  return (
    <Template>
      <div>{ props.day || new Date().toUTCString() }</div>
    </Template>
  );
};
