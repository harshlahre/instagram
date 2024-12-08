import { InstagramVideoForm } from "@/features/instagram/components/form";
import  Image  from "next/image"
import Script from "next/script"

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <p className="desc">Download Instagram Videos, Reels and IGTV</p>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <section className="section-text">
        <div className="section-text__card">
          <Image src="/images/main-image.webp" priority alt="Instagram Reels Download" width="289" height="220"/>
        <div className="section-text__content">
            <h2>Instagram Videos and Reels Downloader</h2>
            <p>iGram Saver is a free online tool that helps you to download instagram videos & reels at HD quality. You can download unlimited Instagram videos at no cost and without watermark.</p>
        </div>
       </div>
     </section>
      <section className="article">
        <hr/>
<h2 id="download1">How to Download Instagram Videos?</h2>
<ul className="down-steps">
    <li>
        <Image src="/images/steps-1.webp" loading="lazy" alt="Copy Instagram Video URL" width="312" height="198"/>
        <div>
            <h3>Copy the Link</h3>
            <p>Open the Instagram app or the website and copy the link of any video, reels, or IGTV.</p>
        </div>
    </li>
    <li>
        <Image src="/images/steps-2.webp" loading="lazy" alt="Paste video URL in the Box" width="312" height="198"/>
        <div>
            <h3>Paste on the Box</h3>
            <p>Open this page and paste the URL on the given box and click on the "Download" button.</p>
        </div>
    </li>
    <li>
        <Image src="/images/steps-3.webp" loading="lazy" alt="Click on download button" width="312" height="198"/>
        <div>
            <h3>Download</h3>
            <p>A new page will appear on the screen, where click on the three-dot and select the "Download" option.</p>
        </div>
    </li>
</ul>
<hr/>

<h2>FAQs for Instagram Downloader</h2>
<p>Here are some frequently asked questions about the Instagram Downloader and downloading stuff from Instagram. These questions generally come to the mind of most people who download Instagram videos or reels.
</p>

<section className="faq-questions" itemScope itemType="https://schema.org/FAQPage">
<div className="accordion" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <div className="accordion-header" itemProp="name">What is an Instagram Video Downloader?</div>
    <div className="accordion-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">Instagram video downloader is an online web-based tool that lets you download videos, reels, and IGTV from Instagram. It is the best solution for using those videos later offline. iGram Saver is the best tool for downloading any video from Instagram.</p>
    </div>
</div>
<div className="accordion" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <div className="accordion-header" itemProp="name">Do I need to sign in with my Instagram account?</div>
    <div className="accordion-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">No, you don't need to integrate or sign in with your Instagram account before downloading any video.</p>
    </div>
</div>
<div className="accordion" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <div className="accordion-header" itemProp="name">Can I save videos directly through Instagram App?</div>
    <div className="accordion-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">Yes, you can download public videos on the Instagram app, but only if the creator allows it. Even then, you will get the video with a watermark. That's why our tool helps you to download any Instagram video without any watermark.
        </p>
    </div>
</div>
<div className="accordion" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <div className="accordion-header" itemProp="name">Can I download private Instagram videos?</div>
    <div className="accordion-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">No, Instagram videos from any private account can't be downloaded with this tool. Due to some privacy concerns, we do not allow downloading private videos with our tool.</p>
    </div>
</div>
<div className="accordion" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
    <div className="accordion-header" itemProp="name">How many Instagram videos can I download??</div>
    <div className="accordion-content" itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
        <p itemProp="text">There are no limits on the number of videos downloaded, you can download as many videos as possible.</p>
    </div>
</div>
</section>
<script defer src="/xtra.js"></script>

      </section>
      <p className="disclaimer">*We are not affiliated with Instagram or Meta in any way.</p>
    </div>
    
  );
}
