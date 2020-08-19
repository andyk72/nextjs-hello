import Link from "next/link";
import styles from './Navigation.module.css';

export default () => (
  <nav className={ styles.nav }>
    <Link href="/"><a className={ styles.navItem }>Home</a></Link><Link href="/about"><a className={ styles.navItem }>About</a></Link><Link href="/day"><a className={ styles.navItem }>Day</a></Link>
  </nav>
);
