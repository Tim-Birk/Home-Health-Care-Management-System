import Head from "next/head";

export const MainHead = ({ title }: { title: string }) => (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta
        name="description"
        content="A complete solution for Home Health Care Providers."
      />
      <meta name="author" content="Tim Birkmire" />
      <meta
        name="keyword"
        content="home, health, care, software, payroll, scheduling, billing, authorizations, evv"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="https://www.hms.com" />
      <meta property="og:image" content="/logo.svg" />
      <meta
        property="og:description"
        content="A complete solution for Home Health Care Providers."
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </Head>
  );