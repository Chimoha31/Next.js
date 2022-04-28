import Link from "next/link";
import { useRouter } from "next/router";

// SSG
export async function getStaticProps({ params }) {
  const req = await fetch(`http://localhost:3000/${params.id}.json`);
  const data = await req.json();

  return {
    props: {
      product: data,
    },
  };
}

const Product = ({ product }) => {
  const router = useRouter();
  //  console.log(router.query.id);
  const { id } = router.query;

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>{id} Page</h1>
        <img src={product.image} width="300" height="400" />
        <p>{product.name}</p>
        <br />
        <Link href="/products">
          <a>To Products List</a>
        </Link>
      </main>
    </div>
  );
};

export default Product;
