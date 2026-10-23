import ErrorPage from "@/components/ErrorPage";
import Layout from "@/components/Layout";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";
import Avatar from "@/assets/avatar.png";
import { DOMAIN } from "@/constants";
import CustomHead from "@/utils/CustomHead";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <CustomHead
        {...{
          title: "Rizzy Personal Website",
          description:
            "Rizky Verandi is a Backend Engineer specializing in Node.js, TypeScript, Clean Architecture, CQRS, and event-driven microservices. Explore his skills and projects.",
          imageUrl: Avatar.src,
          slug: "/",
          keywords: ["personal", "website", "portfolio", "skills"],
          type: "website",
          robots: "follow, index",
          locale: "id_ID",
          canonicalUrl: `${DOMAIN}`,
        }}
      />
      <ErrorBoundary errorComponent={ErrorPage}>
        <Component {...pageProps} />
      </ErrorBoundary>
    </Layout>
  );
}
