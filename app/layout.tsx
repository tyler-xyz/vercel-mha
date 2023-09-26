import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "./fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";
import Loading from "@/components/home/loading-ui";

export const metadata = {
  title: "Chat with a Youth Peer Advocate",
  description:
    "Anonymous Chat with a Youth Peer Advocated provided by JustTellOne.org",
  metadataBase: new URL("https://justtellone.org"),
  themeColor: "#FFF",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
       {/* background listed div: orig code:bg-gradient-to-br from-indigo-50 via-white to-cyan-100 */}
        <div className="fixed h-screen w-full bg-white" />
        <Suspense fallback={<Loading />}>
          {/* @ts-expect-error Server Component */}
          <Nav />
        </Suspense>
        <main className="flex min-h-screen w-full flex-col items-center justify-center pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
