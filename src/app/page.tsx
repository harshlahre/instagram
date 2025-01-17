import { InstagramVideoForm } from "@/features/instagram/components/form";
import Image from "next/image";
import AdBanner from "@/components/AdBanner";

export default function HomePage() {
  return (
    <div className="flex flex-col py-8">
      <div className="pisco">
      <AdBanner
        adClient="ca-pub-2008420195999107" // Replace with your AdSense Client ID
        adSlot="3897612512" // Replace with your AdSense Slot ID
        adFormat="auto"
        fullWidthResponsive={true}
      />
      </div>
      <h1 className="mb-8 text-balance text-center text-4xl font-extrabold">
        Instagram Video Downloader
      </h1>
      <p className="desc">Save Instagram Videos, Reels and IGTV to gallery</p>
      <section className="flex flex-col items-center justify-center gap-4">
        <InstagramVideoForm />
      </section>
      <section className="article pt-6">
          <Image
            className="center"
            src="/images/main-image.webp"
            priority
            alt="Instagram Reels Download"
            width="289"
            height="220"
          />
            <h2>iGram Saver - Instagram Downloader</h2>
            <p>
              iGram Saver is a free online tool that helps you to download
              instagram videos & reels at HD quality. You can download unlimited
              Instagram videos at no cost and without watermark.
            </p>

        <h2 id="download1">How to Download Instagram Videos?</h2>
        <ol className="list">
          <li>Open the Instagram app, or website.</li>
          <li>Go to any video or reels and click on share icon.</li>
          <li>Now, click on "Copy Link" option.</li>
          <li>Comeback to our Instagram Downloader and paste the link on the box.</li>
          <li>A new page will open, where click on the three dot then on the "Download" option.</li>
        </ol>

        <h2>Features of iGram Saver</h2>
        <p>iGram Saver offers various options to download any video content from Instagram. This section provides information about our free exclusive services.</p>
        <h3>Video Downloader</h3>
        <p>First of all, iGram Saver is all about downloading videos from Instagram. It can download multiple types of videos, not only from singulars but also from carousel sets. Remember that some people mark their videos as private and those can't be downloaded, because we respect every user's privacy.</p>
        <h3>Reels Downloader</h3>
        <p>You know, popular video content platforms are switching from long and boring videos to short and zestful videos, thus Instagram introduced Reels. iGram Saver works best when you download any Reels from it, and it'll serve the video to you in its original quality.</p>
        <h3>IGTV Downloader</h3>
        <p>We all know that IGTV was retired by Instagram's parent company, Meta, in 2022, but if you have an old IGTV video URL, it will still work. You just need to put the IGTV video URL on the box and click on the 'Download' button and your video will be downloaded in seconds.</p>

        <div className="why-choose">
          <h2>Why to Choose iGram Saver Video Downloader:</h2>
          <ul>
            <li>✅ Download any public Instagram video within few clicks.</li>
            <li>✅ Login to you Instagram account is not required.</li>
            <li>
              ✅ We offer unlimited downloads to our users. Yes, there's no
              limits.
            </li>
            <li>
              ✅ Watch and Save your favorite Instagram video in original
              quality.
            </li>
            <li>
              ✅ High Speed Network: iGram Saver has the fastest server to
              download Instagram videos.
            </li>
            <li>
              ✅ Compatible with all types of devices, such as Android, iOS,
              tablets and desktop.
            </li>
          </ul>
        </div>

        <h2>FAQs for Instagram Downloader</h2>
        <p>
          Here are some frequently asked questions about the iGram Saver and
          downloading stuff from Instagram. These questions generally come to
          the mind of most people who download Instagram videos or reels.
        </p>

        <section
          className="faq-questions"
          itemScope
          itemType="https://schema.org/FAQPage"
        >
          <div
            className="accordion"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="accordion-header" itemProp="name">
              What is an Instagram Video Downloader?
            </div>
            <div
              className="accordion-content"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">
                Instagram video downloader is an online web-based tool that lets
                you download videos, reels, and IGTV from Instagram. It is the
                best solution for using those videos later offline. iGram Saver
                is the best tool for downloading any video from Instagram.
              </p>
            </div>
          </div>
          <div
            className="accordion"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="accordion-header" itemProp="name">
              Do I need to sign in with my Instagram account?
            </div>
            <div
              className="accordion-content"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">
                No, you don't need to integrate or sign in with your Instagram
                account before downloading any video.
              </p>
            </div>
          </div>
          <div
            className="accordion"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="accordion-header" itemProp="name">
              Can I save videos directly through Instagram App?
            </div>
            <div
              className="accordion-content"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">
                Yes, you can download public videos on the Instagram app, but
                only if the creator allows it. Even then, you will get the video
                with a watermark. That's why our tool helps you to download any
                Instagram video without any watermark.
              </p>
            </div>
          </div>
          <div
            className="accordion"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="accordion-header" itemProp="name">
              Can I download private Instagram videos?
            </div>
            <div
              className="accordion-content"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">
                No, Instagram videos from any private account can't be
                downloaded with this tool. Due to some privacy concerns, we do
                not allow downloading private videos with our tool.
              </p>
            </div>
          </div>
          <div
            className="accordion"
            itemScope
            itemProp="mainEntity"
            itemType="https://schema.org/Question"
          >
            <div className="accordion-header" itemProp="name">
              How many Instagram videos can I download??
            </div>
            <div
              className="accordion-content"
              itemScope
              itemProp="acceptedAnswer"
              itemType="https://schema.org/Answer"
            >
              <p itemProp="text">
                There are no limits on the number of videos downloaded, you can
                download as many videos as possible.
              </p>
            </div>
          </div>
        </section>

        <div>
          <p>
            In today's digital world, Instagram has become such a social network
            in which the number of users is increasing at an incredible rate. If
            you are using this tool, it means that you are also an Instagram
            user. When we use Instagram, sometimes we get to see some videos
            which we feel like saving, the save feature is also there in
            Instagram but saving in the phone's gallery is considered better.
            This is where our Instagram downloader comes in handy.
          </p>
          <p>
            Let's see from a different perspective when our Instagram downloader
            can be most useful to you.
          </p>
          <p>
            "You are a PC gamer who enjoys playing different types of games, and
            suddenly, you find a video in your feed that is a tutorial for
            building a good PC. In such a situation, if you bookmark it, then it
            is possible that the video may get deleted later. If you save that
            video with the save feature of Instagram, then later you may have
            trouble finding the same video. But if you download that video and
            keep it in the phone's gallery, then you can access that video
            anytime later."
          </p>
          <p>or</p>
          <p>
            "You are fond of making different types of dishes with different
            recipes and you find a great cooking video in your Instagram feed
            which has a specific type of recipe. In this situation also,
            downloading and saving that video is a better solution. Then later
            you can cook by watching that video."
          </p>
          <p>
            So now you must have understood which method is best for you.
            Downloading the video is better than saving it in any other way.
            When we share a link to a video on WhatsApp or any other platform,
            most people don't even open it and watch it. But when we share the
            video itself, there are more chances that people will watch it.
          </p>
          <p>
            Along with this, our Instagram video downloader tool provides better
            services than any other Instagram downloader available on the
            internet. Because to download any Instagram video, you only need the
            link of that video. After that you can easily download that
            Instagram video and save it in your phone, tablet or computer.
          </p>
          <p>
            <strong>
              Errors you may encounter while downloading Instagram videos
            </strong>
          </p>
          <p>
            One of the most common errors you may encounter while downloading
            any Instagram video with iGram Saver is "The video link for this
            post is not public." This error occurs when you try to download
            private Instagram videos, which our tool does not allow.
          </p>
        </div>
      </section>
      <p className="disclaimer">
        *We are not affiliated with Instagram or Meta in any way. We do not host
        Instagram videos on our website, all the content rights belogs to their
        respective owners.
      </p>
    </div>
  );
}
