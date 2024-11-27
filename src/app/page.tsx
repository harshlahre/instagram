import { InstagramVideoForm } from "@/features/instagram/components/form";
import  Image  from "next/image"

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <h1 className="text-balance mb-8 text-center text-4xl font-extrabold">
        Instagram Downloader
      </h1>
      <p className="desc">Download Instagram Videos, Reels and IGTV</p>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <section className="section-text">
        <div className="section-text__card">
          <Image src="/images/instagram-bg.webp" alt="Instagram Reels Download" width="289" height="220"/>
        <div className="section-text__content">
            <h2>Instagram Videos and Reels Download</h2>
            <p>Insta Load is a free online tool that helps you to download instagram videos & reels at high quality. Along with public videos, you can also downlaod instagram private videos at no cost and without watermark.</p>
        </div>
       </div>
     </section>
      <section className="article">
        <hr/>
<h2>How to Download Instagram Reels?</h2>
<ul className="down-steps">
    <li>
        <Image src="/images/media-steps1.webp" loading="lazy" alt="Copy the URL" width="312" height="198"/>
        <div>
            <h3>Copy the Link</h3>
            <p>Open the Instagram app or the website and copy the link of any video, reels, or IGTV.</p>
        </div>
    </li>
    <li>
        <Image src="/images/media-steps2.webp" loading="lazy" alt="Paste the link" width="312" height="198"/>
        <div>
            <h3>Paste on the Box</h3>
            <p>Open this page and paste the URL on the given box and click on the "Download" button.</p>
        </div>
    </li>
    <li>
        <Image src="/images/media-steps3.webp" loading="lazy" alt="Download" width="312" height="198"/>
        <div>
            <h3>Download</h3>
            <p>A new page will appear on the screen, where click on the three-dot and select the "Download" option.</p>
        </div>
    </li>
</ul>
<hr/>

<h2>Frequently Asked Questions for ODT 2021</h2>
<p>Here are some FAQs about the Microsoft Office Deployment Tool that will help you understand its installation process
    and resolve possible errors.</p>

<div>
<div className="accordion">
    <div className="accordion-header">What is the confuguration.xml file?</div>
    <div className="accordion-content">
        <p>The configuration.xml file contains instructions on customizing and installing the Microsoft 365 Apps for
            Office Deployment Tool such as MS Office version, language, and architechture (32bit or 64bit) of the
            windows.</p>
    </div>
</div>
<div className="accordion">
    <div className="accordion-header">Is the Office Deployment Tool compatible with Windows 10 or 11?</div>
    <div className="accordion-content">
        <p>Yes, the Office Deployment Tool is fully compatible with the current version of Windows 10 and Windows 11,
            provided it meets the minimum system requirements.</p>
    </div>
</div>
<div className="accordion">
    <div className="accordion-header">What are the minimum system requirements for ODT?</div>
    <div className="accordion-content">
        <p>The minimal system requirements to run the ODT tool are Windows 10 or 11 with a 1.7 GHz processor, at least
            4GB of hard disk space, and 2GB of RAM. A display resolution of 1024x768 will work well and it's recommended
            to have a DirectX 10 Graphics card.
        </p>
    </div>
</div>
<div className="accordion">
    <div className="accordion-header">Can I use ODT to deploy Office offline?</div>
    <div className="accordion-content">
        <p>Yes, There's an offline method for deploying Microsoft Office offline using ODT. You can download all
            required office files to your computer and perform the installation without an internet connection.</p>
    </div>
</div>
</div>
<script src="/xtra.js"></script>

      </section>
    </div>
    
  );
}
