import Card from "@/components/home/card";
import Balancer from "react-wrap-balancer";
import { ReCaptchaProvider } from "next-recaptcha-v3";
import EulaButton from "@/components/home/terms-button";
import NavWarning from "@/components/home/nav-warning";
import Footer from "@/components/layout/footer";
import LetsChat from "@/components/home/chat-button";
export default async function Home() {
  return (
    <>
  <ReCaptchaProvider reCaptchaKey="6Lc2qS4oAAAAACIcdUjUVeeviZGRFaLVvN_aIUL1">
    {/* begin orig code */}
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
        <h3
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-3xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Be Heard.</Balancer>
          <Balancer>Be Helped.</Balancer>
        </h3>
        {/* second paragraph start */}
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          Connect with a Youth Peer Advocate.
          </Balancer>
        </p>
        {/* begin chat button */}
        <div
          className="mx-auto mt-6 flex animate-fade-up items-center justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <LetsChat />
        </div>
      {/* terms  */}
      <div>
        <EulaButton />
      </div>
       {/* navigation warning  */}
        <NavWarning />
      </div>
      <Footer/>
  </ReCaptchaProvider>
    </>
  );
}

