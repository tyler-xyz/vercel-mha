import Modal from "@/components/shared/modal";
import {
  useState,
  Dispatch,
  SetStateAction,
  useCallback,
  useMemo,
} from "react";
import Image from "next/image";

const DemoModal = ({
  showDemoModal,
  setShowDemoModal,
}: {
  showDemoModal: boolean;
  setShowDemoModal: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <Modal showModal={showDemoModal} setShowModal={setShowDemoModal}>
      <div className="w-full overflow-hidden md:max-w-md md:rounded-2xl md:border md:border-gray-100 md:shadow-xl">
        <div className="flex flex-col items-center justify-center space-y- bg-white px-4 py-6 pt-4 text-center md:px-8">
          <a href="https://justtellone.org">
            <Image
              src="/logo.png"
              alt="JustTellOne.org"
              width={110}
              height={60}
            />
          </a>
          <p className="font-display text-xl font-bold">End-User License Agreement</p>
          <p className="text-xsm text-gray-500 text-left overflow-y">
          This End-User License Agreement (this “EULA”) is a legal agreement between you (“Licensee”) and
Mental Health Advocates of WNY (“Licensor”), the author of JustTellOne, including all HTML files, XML
files, Java files, graphics files, animation files, data files, technology, development tools, scripts and
programs, both in object code and source code (the “Software”), the deliverables provided pursuant to
this EULA, which may include associated media, printed materials, and “online” or electronic
documentation.
<br></br>
By installing, copying, or otherwise using the Software, Licensee agrees to be bound by the terms and
conditions set forth in this EULA. If Licensee does not agree to the terms and conditions set forth in this
EULA, then Licensee may not download, install, or use the Software.
<br></br>
<ol className="normal">
  <li><b>Grant of License.</b> </li>
  <ol className="nested">
        <li><b>Scope of License.</b> Subject to the terms of this EULA, Licensor hereby grants to Licensee a royalty-free, non-exclusive license to possess and to use a copy of the Software.</li>
        <li><b>Installation and Use.</b> Licensee may install and use a maximum of nineteen (19) copies of the Software solely for Licensee's business use.</li>
    </ol>
  <li><b>Description of Rights and Limitations.</b> </li>
  <ol className="nested">
        <li><b>Limitations.</b> Licensee and third parties may not reverse engineer, decompile, or disassemble the Software, except and only to the extent that such activity is expressly permitted by applicable law notwithstanding the limitation.</li>
        <li><b>Update and Maintenance.</b> Licensor shall provide updates and maintenance on the Software on an as needed basis.</li>
        <li><b>Separation of Components.</b> The Software is licensed as a single product. Its components may not be separated for use on more than one computer.</li>
        </ol>
  <li><b>Title to Software.</b> Licensor represents and warrants that it has the legal right to enter into and perform its obligations under this EULA, and that use by the Licensee of the Software, in accordance with the terms of this EULA, will not infringe upon the intellectual property rights of any third parties.</li>
  <li><b>Intellectual Property.</b> All now known or hereafter known tangible and intangible rights, title, interest,copyrights and moral rights in and to the Software, including but not limited to all images, photographs,animations, video, audio, music, text, data, computer code, algorithms, and information, are owned by Licensor. The Software is protected by all applicable copyright laws and international treaties.</li>
  <li><b>Support.</b> Licensor will provide phone support, available during normal business hours for a time period of 10 months.</li>
  <li><b>Duration.</b> This EULA is effective for 10 months or until:</li>
  <ol className="nested">
        <li>Automatically terminated or suspended if Licensee fails to comply with any of the terms and conditions set forth in this EULA; or</li>
        <li>Terminated or suspended by Licensor, with or without cause.In the event this EULA is terminated, you must cease use of the Software and destroy all copies of the Software.</li>
  </ol>
  <li><b>Jurisdiction.</b> This EULA shall be deemed to have been made in, and shall be construed pursuant to the laws of the State of New York, without regard to conflicts of laws provisions thereof. Any legal action or proceeding relating to this EULA shall be brought exclusively in courts located in Buffalo, NY, and each party consents to the jurisdiction thereof. The prevailing party in any action to enforce this EULA shall be entitled to recover costs and expenses including, without limitation, attorneys’ fees. This EULA is made within the exclusive jurisdiction of the United States, and its jurisdiction shall supersede any other jurisdiction of either party’s election.</li>
  <li><b>Non-Transferable.</b> This EULA is not assignable or transferable by Licensee, and any attempt to do so would be void.</li>
  <li><b>Severability.</b> No failure to exercise, and no delay in exercising, on the part of either party, any privilege, any power or any rights hereunder will operate as a waiver thereof, nor will any single or partial exercise of any right or power hereunder preclude further exercise of any other right hereunder. If any provision of this EULA shall be adjudged by any court of competent jurisdiction to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that this EULA shall otherwise remain in full force and effect and enforceable.</li>
  <li><b>WARRANTY DISCLAIMER.</b> LICENSOR, AND AUTHOR OF THE SOFTWARE, HEREBY EXPRESSLY DISCLAIM ANY WARRANTY FOR THE SOFTWARE. THE SOFTWARE AND ANY RELATED DOCUMENTATION IS PROVIDED “AS IS” WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. LICENSEE ACCEPTS ANY AND ALL RISK ARISING OUT OF USE OR PERFORMANCE OF THE SOFTWARE.</li>
  <li><b>LIMITATION OF LIABILITY.</b> LICENSOR SHALL NOT BE LIABLE TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH LICENSEE ANY LOSS OF PROFITS, INCOME, SAVINGS, OR ANY OTHER CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE, DIRECT OR INDIRECT DAMAGE, WHETHER ARISING IN CONTRACT, TORT, WARRANTY, OR OTHERWISE. THESE LIMITATIONS SHALL APPLY REGARDLESS OF THE ESSENTIAL PURPOSE OF ANY LIMITED REMEDY. UNDER NO CIRCUMSTANCES SHALL LICENSOR’S AGGREGATE LIABILITY TO LICENSEE, OR ANY OTHER PERSON OR ENTITY CLAIMING THROUGH LICENSEE, EXCEED THE FINANCIAL AMOUNT ACTUALLY PAID BY LICENSEE TO LICENSOR FOR THE SOFTWARE.</li>
  <li><b>Entire Agreement.</b> This EULA constitutes the entire agreement between Licensor and Licensee and supersedes all prior understandings of Licensor and Licensee, including any prior representation, statement, condition, or warranty with respect to the subject matter of this EULA.</li>
</ol>
<br></br>
For additional information regarding this EULA, please contact:<br></br>
<b>Mental Health Advocates of WNY<br></br>
Attn: Melinda DuBois<br></br>
1021 Broadway<br></br>
Buffalo, NY 14209<br></br>
(716) 886-1242</b>
          </p>
        </div>
      </div>
    </Modal>
  );
};

export function useDemoModal() {
  const [showDemoModal, setShowDemoModal] = useState(false);

  const DemoModalCallback = useCallback(() => {
    return (
      <DemoModal
        showDemoModal={showDemoModal}
        setShowDemoModal={setShowDemoModal}
      />
    );
  }, [showDemoModal, setShowDemoModal]);

  return useMemo(
    () => ({ setShowDemoModal, DemoModal: DemoModalCallback }),
    [setShowDemoModal, DemoModalCallback],
  );
}
