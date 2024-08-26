import Image from "next/image";
import Link from "next/link";

// Sections
import Hero from "@/components/sections/Hero";
import PictureBetween from "@/components/sections/PictureBetween";
import History from "@/components/sections/History";
import GalleryOne from "@/components/sections/GalleryOne";
import AfterGallery from "@/components/sections/AfterGallery";
import GalleryTwo from "@/components/sections/GalleryTwo";
import AfterGallerytwo from "@/components/sections/AfterGallerytwo";
import AllGallerry from "@/components/sections/AllGallerry";
import Lastpicture from "@/components/sections/Lastpicture";

export default function page() {
  return (
    <main className="bg-white">
      {/* <div className=" flex md:flex-row flex-col justify-between items-center bg-blue-900">
        <div className="object-cover max-w-full md:max-w-[50%]">
          <img
            className="w-full h-full"
            src="/images/4.jpg"
            alt="image description"
          />
        </div>

        
        <div className="items-center flex-1">
          <div className="bg-blue-900 p-10">
            <div className=" w-full items-center ">
              <div className=" text-center ">
                <h1 className="text-blue-100 text-4xl font-extrabold ">
                  Yamamoto Foundation
                </h1>
                <p className="text-xl text-blue-300 pt-5">
                  Since 1983, we have welcomed more than 57,000 Chevening
                  Scholars and Fellows to the UK. To celebrate our 40th
                  anniversary, we’re reflecting on the outstanding impact
                  they’ve had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <Hero />

      {/* picture between */}
      <PictureBetween />

      {/* <section className="section video bg-white">
        <div className="video items-center">
          <video className=" w-[60%] p-5 mx-auto rounded-lg" controls autoPlay>
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </section> */}
      <History />

      {/* gallery houp1 */}
      <GalleryOne />

      <AfterGallery />

      {/* gallery houp2 */}
      <GalleryTwo />

      <AfterGallerytwo />

      {/* three photo Get involved */}
      {/* 40th anniversary */}
      <AllGallerry />

      {/* LastPic */}
      <Lastpicture />

      {/* <section className="section white2 bg-white">
        <div className="bg-white m-10">
          <div className="text">
            <h2 className="text-yellow-500 text-4xl text-center py-5 italic font-extrabold">
              Get involved
            </h2>
          </div>
        </div>
      </section> */}

      {/* <section className="w-full h-[500px] flex items-center justify-between">
        <div className="flex-1 h-full text-center">Left</div>
        <div className="flex-1 h-full bg-sky-950">
          <div className=" bg-sky-950 translate-x-[-45%] w-[350px] h-full rounded-full" />
        </div>
      </section> */}
    </main>
  );
}
