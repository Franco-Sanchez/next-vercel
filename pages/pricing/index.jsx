import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

export default function Pricing() {
  return (
    <>
      <h1>Pricing Page</h1>

      <h2 className="title">
        Ir a <Link href="/home">Home</Link>
      </h2>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/pricing/index.jsx</code>
      </p>
    </>
  );
}

Pricing.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
