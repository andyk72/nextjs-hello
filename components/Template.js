import Navigation from "../components/Navigation";
import styles from './Template.module.css';

export default props => (
  <div className={ styles.root }>
    <Navigation />
    <main className={ styles.main }>{props.children}</main>
  </div>
);
