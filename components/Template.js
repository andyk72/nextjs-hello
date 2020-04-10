import Navigation from "../components/Navigation";
export default props => (
  <div>
    <Navigation />
    <main className="main">{props.children}</main>
  </div>
);
