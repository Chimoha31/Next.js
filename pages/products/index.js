import Link from 'next/link';
import styles from '../../styles/Home.module.css';

const ProductsList = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className={styles.title}>Products List</h2>

        <ul>
          <li>
            <Link href="/products/smartphone">
              <a>SmartPhone</a>
            </Link>
          </li>
          <li>
            <Link href="/products/pc">
              <a>Laptop</a>
            </Link>
          </li>
          <li>
            <Link href="/products/headphone">
              <a>HeadPhone</a>
            </Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default ProductsList;