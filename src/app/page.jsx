import Image from "next/image";
import Link from "next/link";

export default function page() {
  return (
    <main className="bg-white">
      <div className=" flex md:flex-row flex-col justify-between items-center bg-red-800">
        <div className="object-cover max-w-full md:max-w-[50%]">
          <img
            className="w-full h-full"
            src="/images/4.jpg"
            alt="image description"
          />
        </div>

        {/* Yamamoto first page */}
        <div className="items-center flex-1">
          <div className="bg-red-800 p-10">
            <div className=" w-full items-center ">
              <div className=" text-center ">
                <h1 className="text-white text-4xl font-extrabold ">
                  Yamamoto Foundation
                </h1>
                <p className="text-xl text-red-300 pt-5">
                  Since 1983, we have welcomed more than 57,000 Chevening
                  Scholars and Fellows to the UK. To celebrate our 40th
                  anniversary, we’re reflecting on the outstanding impact
                  they’ve had.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* picture between */}
      <div>
        <div className=" bg-white items-center m-5">
          <div className=" flex justify-center">
            <div className="max-w-full md:max-w-[40%]">
              <img
                className="w-full h-full md:p-5"
                src="/images/1.jpg"
                alt="image description"
              />
            </div>
            <div className="max-w-full md:max-w-[40%]">
              <img
                className="w-full h-full md:p-5"
                src="/images/2.jpg"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </div>

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

      <section>
        <div className=" bg-blue-900 p-10 items-center flex">
          <div className=" md:m-10">
            <div className="md:max-w-[50%] mx-auto ">
              <div className="title">
                <h2 className="text-yellow-500 text-4xl text-center italic font-extrabold ">
                  40 years of impact
                </h2>
              </div>
              <p className="text-center text-xl text-blue-290 pt-5">
                In honour of our 40th anniversary, we sat down with some of our
                most extraordinary alumni to hear about the impact they've had
                since their Chevening year. From foregrounding the human
                dimensions of climate change to helping women and girls to find
                their voice, their stories are an inspiring reminder that there
                is no limit to what you can achieve with a Chevening Scholarship
                or Fellowship.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-red-900">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-3xl">
              Introducing the climate warrior: Anote Tong journey
            </h2>
            <p className="pt-5 text-xl text-red-200">
              In September 2004, President Anote Tong of Kiribati made history
              at the United Nations General Assembly by highlighting the urgent
              need for action on climate change, sparking a global movement for
              climate justice and earning him the title of climate warrior.
            </p>
          </div>
          <div>
            <img
              className=" w-full h-full"
              src="/images/5.jpg"
              alt="image description"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-900 ">
        <div className="flex flex-col md:flex-row md:justify-between items-center">
          <div className="max-w-full flex justify-between">
            <img
              className="w-full h-full"
              src="/images/3.jpg"
              alt="image description"
            />
          </div>
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-3xl">
              Leaving conflict and finding community with Chevening in the 1990s
            </h2>
            <p className="pt-5 text-xl text-blue-200">
              Dr Mina Brajovic is the Head of the World Health Organisation
              (WHO) Country Office in Montenegro. She became a Chevening Scholar
              in 1999, studying Law at the University of Cambridge at a time
              when her country was recovering from conflict. Almost 25 years on,
              Mina reflects on how her aspirations for building a better world
              have changed over time, as well as the key learnings that have
              stayed with her from her Chevening year.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-red-900">
        <div className="flex flex-col-reverse md:flex-row md:justify-between items-center">
          <div className="max-w-full md:max-w-[50%] text-left p-10 ">
            <h2 className="italic font-extrabold text-3xl">
              Building a better future for women and girls in India
            </h2>
            <p className="pt-5 text-xl text-red-200">
              Kanta Singh has dedicated her whole career to tackling issues of
              gender inequality. In 2019, she embarked on the Chevening Gurukul
              Fellowship for Leadership and Excellence. The programme allowed
              her to expand her network and capacity even further to help her on
              her mission to build a more equal India, one girl and one voice at
              a time.
            </p>
          </div>
          <div className="flex justify-between">
            <img
              className="w-full h-full"
              src="/images/19.jpg"
              alt="image description"
            />
          </div>
        </div>
      </section>

      {/* gallery houp1 */}
      <section className=" bg-white">
        <div className=" grid-flow-col">
          <div className="md:flex m-5">
            <div className="w-full md:h-full ">
              <img
                className="w-full h-full p-5"
                src="/images/5.jpg"
                alt="image description"
              />
            </div>

            <div className="w-full h-full">
              <img
                className=" w-full h-full p-5"
                src="/images/6.jpg"
                alt="image description"
              />
            </div>

            <div className="w-full h-full">
              <img
                className=" w-full h-full p-5"
                src="/images/7.jpg"
                alt="image description"
              />
            </div>

            <div className="w-full h-full">
              <img
                className=" hero-image w-full h-full p-5"
                src="/images/8.jpg"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-blue-900 p-10 items-center flex">
          <div className=" md:m-10">
            <div className="md:max-w-[50%] mx-auto flex flex-col justify-center">
              <div className="title">
                <h2 className=" text-yellow-500 text-4xl text-center italic font-extrabold ">
                  Through the decades
                </h2>
              </div>
              <p className="text-center text-xl text-blue-290 pt-5">
                In the early 1980s, a new scholarship programme emerged to
                provide talented international students with the opportunity to
                further their education in the UK. This programme, which was
                announced by the Foreign Secretary Francis Pym in 1983, would
                become known as Chevening. Initially, the programme was funded
                for just three years, but 40 years and 57,000 alumni later, its
                legacy continues.
              </p>
              <button class="bg-white w-auto hover:bg-red-500 text-blue-900 font-bold mt-8 py-3 px-20 rounded-full mx-auto">
                EXPLORE OUR HISTORY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* gallery houp2 */}
      <section className=" bg-white">
        <div>
          <div className="md:flex m-5">
            <div className="w-full h-full p-5 ">
              <img src="/images/9.jpg" alt="image description" />
            </div>
            <div className=" w-full h-full p-5">
              <img src="/images/10.jpg" alt="image description" />
            </div>
            <div className="w-full h-full p-5">
              <img src="/images/11.jpg" alt="image description" />
            </div>
            <div className="w-full h-full p-5">
              <img src="/images/12.jpg" alt="image description" />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className=" bg-blue-900 p-10">
          <div className="md:m-10">
            <div className="md:max-w-[50%] mx-auto flex flex-col">
              <div>
                <h2 className=" text-yellow-500 text-4xl text-center italic font-extrabold ">
                  Photos from the archive
                </h2>
              </div>
              <p className="text-center text-xl text-blue-290 pt-5">
                A lot has changed over the past 40 years, but at the heart of it
                all, Chevening’s commitment to provide exceptional individuals
                with the opportunity to reach their career goals and make a
                positive impact has remained the same. From 1983 to 2023, here
                are some of the faces that have made Chevening what it is.
              </p>
              <button
                className="bg-white w-auto hover:bg-blue-500 
              text-blue-900 font-bold mt-8 py-3 px-20 
              rounded-full mx-auto"
              >
                EXPLORE OUR GALLERY
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* three photo Get involved */}
      <section>
        <div className=" bg-white p-5 items-center md:flex grid-flow-col">
          <div className="m-5">
            <div className="md:max-w-[80%] mx-auto flex flex-col justify-center">
              <div className="title">
                <h2 className=" text-yellow-600 text-5xl text-center italic font-extrabold ">
                  Get Involved
                </h2>

                <div className="md:flex gap-10 m-5">
                  <div className="1 w-full h-full ">
                    <img
                      className="w-full h-full p-3"
                      src="/images/13.jpg"
                      alt="image description"
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          RECONNECT WITH CHEVENING ALUMNI
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        Were you a Chevening Scholar or Fellow? Find out how to
                        stay in touch with us and how to make the most of being
                        part of a global alumni community like no other.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full">
                    <img
                      className="w-full h-full p-3"
                      src="/images/14.jpg"
                      alt="image description"
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          SUPPORT THE NEXT GENERATION OF LEADERS
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        Over the next 40 years, we would like another 57,000
                        exceptional individuals to have the opportunity to make
                        a positive global impact. To do this, we rely on the
                        support of organisations that share our vision of
                        investing in the education of future leaders.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full">
                    <img
                      className="w-full h-full p-3"
                      src="/images/15.jpg"
                      alt="image description"
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          ENJOY THE GROBAL CELEBRATIONS
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        round the world, British embassies, high commissions,
                        and alumni associations have been hosting celebratory
                        40th anniversary events, bringing together alumni from
                        the past 40 years.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 40th anniversary */}
      <section>
        <div className=" bg-white p-5 items-center md:flex grid-flow-col">
          <div>
            <div className="max-w-[80%] mx-auto flex flex-col justify-center">
              <div>
                <h2 className=" text-yellow-600 text-5xl text-center italic font-extrabold ">
                  40th Anniversary news
                </h2>

                <div className="md:flex gap-10 m-5">
                  <div className="4 w-full h-full ">
                    <img
                      className="w-full h-full p-3"
                      src="/images/16.jpg"
                      alt="image description"
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          40 YEARS OF EXCELLENCE: CHEVENING MARKS HISTORIC
                          MILESTONE
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        On 24 October 2023, friends of Chevening attended a
                        special reception at Lancaster House to celebrate 40
                        years of Chevening.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full">
                    <img
                      className="w-full h-full p-3"
                      src="/images/17.jpg"
                      alt="image description"
                    />
                    <div>
                      <div>
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          MEET OUR 40TH COHORT!
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        Across the UK, our 40th cohort of Cheveners are settling
                        into their university courses! We caught up with some
                        scholars to find out how it feels to be part of such a
                        historic year.
                      </p>
                    </div>
                  </div>

                  <div className="w-full h-full">
                    <img
                      className="w-full h-full p-3"
                      src="/images/18.jpg"
                      alt="image description"
                    />
                    <div>
                      <div className="title">
                        <h2 className=" text-red-700 text-3xl text-center font-extrabold pt-5 ">
                          GLOBAL ALUMNI COME TOGETHER TO CELEBRATE 40 YEARS OF
                          CHEVENING
                        </h2>
                      </div>
                      <p className="text-center text-lg text-black pt-3">
                        Around the world, British embassies, high commissions,
                        and alumni associations have been hosting celebratory
                        events!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className=" bg-white items-center">
          <div className="flex justify-center">
            <div className="max-w-full md:max-w-[40%]">
              <img
                className="w-full h-full md:p-5"
                src="/images/20.jpg"
                alt="image description"
              />
            </div>
            <div className="max-w-full md:max-w-[40%]">
              <img
                className="w-full h-full md:p-5"
                src="/images/sit.jpg"
                alt="image description"
              />
            </div>
          </div>
        </div>
      </div>

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
