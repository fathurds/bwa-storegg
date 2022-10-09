import Sidebar from "../../../components/organisms/Sidebar";
import TransactionContent from "../../../components/organisms/TransactionContent";
import Head from "next/head";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
      <Head>
        <title>Transaction - StoreGG</title>
      </Head>
      <Sidebar activeMenu="transactions" />
      <TransactionContent />
    </section>
  );
}

interface GetServerSideProps {
  req: {
    cookies: {
      token: string;
    };
  };
}

export async function getServerSideProps({ req }: GetServerSideProps) {
  const { token } = req.cookies;
  if (!token) {
    return {
      redirect: {
        destination: "../sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
