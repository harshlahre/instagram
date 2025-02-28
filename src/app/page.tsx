import { InstagramVideoForm } from "@/features/instagram/components/form";
import Image from "next/image";
import AdSense from "@/components/AdSense";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <AdSense />
      <h1 className="mb-8 text-balance text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <p className="desc">Save Instagram Videos, Reels and IGTV to gallery</p>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <div className="content">
        <section className="section-text">
          <div className="section-text_card">
            <Image
              src="/images/main-image.webp"
              priority
              alt="Instagram Reels Download"
              width="289"
              height="220"
            />
            <div className="section-text_content">
              <h2>iGram Saver - Instagram Downloader</h2>
              <p>
                iGram Saver is a free online tool that helps you to download
                instagram videos & reels at HD quality. You can download
                unlimited Instagram videos at no cost and without watermark.
              </p>
            </div>
          </div>
        </section>
      </div>
      <p className="disclaimer">
        *We are not affiliated with Instagram or Meta in any way. We do not host
        Instagram videos on our website, all the content rights belogs to their
        respective owners.
      </p>
    </div>
  );
}
