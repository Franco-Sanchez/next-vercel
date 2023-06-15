import Link from "next/link";
import { MainLayout } from "../../components/layouts/MainLayout";
import { DarkLayout } from "../../components/layouts/DarkLayout";

export default function Contact() {
  return (
    <>
      <h1>Contact Page</h1>

      <h2 className="title">
        Ir a <Link href="/">Home</Link>
      </h2>

      <p className="description">
        Get started by editing{" "}
        <code className="code">pages/contact/index.jsx</code>
      </p>
    </>
  );
}

Contact.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
