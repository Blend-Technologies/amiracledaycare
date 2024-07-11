import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row  bg-yellow-500">
      {/* <div className="hero-map" /> */}

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-20  lg:bold-88  text-purple-600">Welcome to A Miracles Daycare</h1>
        <p className="regular-16 mt-6 text-white xl:max-w-[520px]">
          We offer quality services tailored to your needs
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5).fill(1).map((_, index) => (
              <Image 
                src="/star.svg"
                key={index}
                alt="star"
                width={24}
                height={24}
              />
            ))}
          </div>

          <p className="bold-16 lg:bold-20 text-white">
            10
            <span className="regular-16 lg:regular-20 ml-1 text-white">Excellent Reviews</span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-5 sm:flex-row">
          <Button 
            type="button" 
            title="Join us" 
            variant="btn_purple" 
          />
        
        </div>
      </div>

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image 
          src="/heart.svg"
          alt="heart"
          width={500}
          height={500}
          className="absolute left-[75px] top-[180px] w-10 lg:w-[200px]"
/>
          <Image 
          src="/teddybear.svg"
          alt="teddybear"
          width={500}
          height={500}
          className="absolute left-[275px] top-[100px] right-[200px] w-20 lg:w-[100px]"
        />

   <Image 
          src="/kidsglasses.svg"
          alt="kidsglasses"
          width={500}
          height={500}
          className="absolute left-[400px] top-[275px] right-[500px] w-20 lg:w-[200px]"
        />

<Image 
          src="/girl.svg"
          alt="girl"
          width={500}
          height={500}
          className="absolute right-[-25px] top-[-50px] w-20 lg:w-[200px]"
        />

        </div>

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-[350px] flex-col gap-8 rounded-3xl bg-purple-500 px-10 py-8">

           <div className="flex flex-col">
            <div className="flexBetween">
              <p className="regular-16 text-white">Location</p>
              <Image src="/close.svg" alt="close" width={24} height={24} />
            </div>
            <p className="bold-20 text-white">Chicago, IL</p>
          </div>

          <div className="flexBetween space-x-5">
            <div className="flex flex-col">
              <p className="regular-16 block text-white ">Qualified Teachers</p>
              <p className="bold-20 text-white text-center">5</p>
            </div>
            <div className="flex flex-col ">
              <p className="regular-16 block text-white ">Years of Experience</p>
              <p className="bold-20 text-white text-center">2</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-white">Students Enrolled</p>
              <p className="bold-20 text-white text-center">10</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero