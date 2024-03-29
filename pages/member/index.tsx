import OverviewContent from "../../components/organisms/OverviewContent";
import Sidebar from "../../components/organisms/Sidebar";
import Head from "next/head";

export default function Member() {
  return (
    <section className="overview overflow-auto">
      <Head>
        <title>Dashboard - StoreGG</title>
      </Head>
      <Sidebar activeMenu="overview" />
      <OverviewContent />
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
        destination: "./sign-in",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
