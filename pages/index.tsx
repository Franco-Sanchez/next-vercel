import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import { DarkLayout } from "../components/layouts/DarkLayout";
import { ReactElement } from "react";

export default function Home() {
  return (
    <>
      <h1>Home Page</h1>

      <h2 className="title">
        Ir a <Link href="/about">About</Link>
      </h2>

      <p className="description">
        Get started by editing <code className="code">pages/index.jsx</code>
      </p>
    </>
  );
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
