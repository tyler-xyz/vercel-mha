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
          className="animate-fade-up bg-gradient-to-br from-stone-500 to-white bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-white opacity-0 drop-shadow-sm md:text-6xl md:leading-[3.5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          <Balancer>Be Heard.</Balancer><br></br>
          <Balancer>Be Helped.</Balancer>
        </h3>
        {/* second paragraph start */}
        <p
          className="mt-6 animate-fade-up text-center font-display text-white opacity-0 md:text-xl"
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
        {/* Third paragraph start */}
        <p
          className="mt-6 animate-fade-up text-center font-display text-white opacity-0 md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          <Balancer>
          <strong>Monday through Friday</strong>
          </Balancer>
          <br></br>
          <Balancer>
          from 2pm to 8pm EST
          </Balancer>
        </p>
      {/* terms  */}
       <div>
        <EulaButton />
       </div>
       {/* navigation warning  */}
        {/*<NavWarning />*/}
       <div
          className="mx-auto mt-1 flex animate-fade-up items-center justify-center space-x-2 opacity-0"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-white shrink-0 w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <p className="font-display text-xxsm text-white">Please note that while you chat with us you must remain on the app.<br></br>If you navigate away from the chat window your connection may be lost.</p>        
       </div>
      </div>
      <Footer/>
  </ReCaptchaProvider>
    </>
  );
}

