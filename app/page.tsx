"use client"
import Image from "next/image"
import Curve from "@/app/components/Curve"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export default function Home() {
  const [showImage, setShowImage] = useState(0)
  const [stopShow, setStopShow] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const jobs = [
    {
      company: "Spark + Mint",
      role: "Design Engineer",
      time: "2023 –",
      logo: "/logos/teamspark.svg",
      link: "https://teamspark.xyz",
      hover: "hover:bg-[#e0e2da]/50",
    },
    {
      company: "ETHGlobal",
      role: "UX Engineer",
      time: "2022 – 2023",
      logo: "/logos/ethglobal.svg",
      link: "https://ethglobal.com",
      hover: "hover:bg-[#e0e2da]/50",
    },
    {
      company: "Devoteam",
      role: "Frontend Developer",
      time: "2021 – 2022",
      logo: "/logos/devoteam.svg",
      link: "https://devoteam.com",
      hover: "hover:bg-[#e0e2da]/80",
    },
    {
      company: "You X Ventures",
      role: "UX Developer",
      time: "2019 – 2021",
      logo: "/logos/youx.svg",
      link: "https://x.com/youxventures",
      hover: "hover:bg-[#dbddd4]/50",
    },
    {
      company: "Oakwood Creative ",
      role: "Frontend Developer",
      time: "2016 – 2018",
      logo: "/logos/oakwood.svg",
      link: "https://oakwood.se",
      hover: "hover:bg-[#d8dad1]/50",
    },
  ]

  const socials = [
    {
      url: "https://github.com/kvzivn",
      icon: "/github.svg",
    },
    {
      url: "mailto:hello@kevinivan.com",
      icon: "/mail.svg",
    },
  ]

  const handleHover = () => {
    if (stopShow) return
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }

    setShowImage(1)

    intervalRef.current = setInterval(() => {
      setShowImage((prevImage) => (prevImage % 25) + 1)
    }, 250)
  }

  const handleMouseLeave = () => {
    if (stopShow) return
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setShowImage(0)
  }

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    setShowImage((prevImage) => (prevImage % 26) + 1)
    setStopShow(true)
  }

  return (
    <Curve>
      <div className="min-h-screen font-sans">
        <motion.div
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{
            delay: 0.75,
            duration: 0.75,
            ease: [0.17, 0.84, 0.44, 1],
          }}
          className="fixed inset-x-0 top-0 bottom-0 overflow-auto"
        >
          <main className="relative max-w-[36rem] flex flex-col mx-auto pt-16 pb-12 sm:pt-32 sm:pb-24 px-8 sm:px-0">
            <div className="absolute top-16 sm:top-32 right-8 sm:right-0 flex gap-2 items-center justify-center">
              {socials.map((social) => (
                <a
                  key={social.url}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 hover:bg-[#ecede9] transition-colors rounded-xl"
                >
                  <Image
                    src={social.icon}
                    alt={social.url}
                    width={22}
                    height={22}
                    priority
                  />
                </a>
              ))}
            </div>

            <div
              className="relative w-[112px] h-[112px] rounded-xl cursor-pointer"
              onClick={handleClick}
              onMouseEnter={handleHover}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/kevin.webp"
                alt="Kevin"
                width={112}
                height={112}
                quality={100}
                priority
                className="relative rounded-xl z-10 animate-scale"
              />

              {Array.from({ length: 25 }, (_, i) => (
                <Image
                  key={i}
                  src={`/slideshow/${i + 1}.webp`}
                  alt="Kevin"
                  width={112}
                  height={112}
                  quality={100}
                  priority
                  className={cn(
                    "absolute top-0 rounded-xl",
                    showImage === i + 1 ? "opacity-100 z-20" : "opacity-0",
                    i === 17 && "opacity-100 animate-fan-right-1",
                    i === 10 && "opacity-100 animate-fan-right-2"
                  )}
                />
              ))}

              {stopShow && (
                <Image
                  src="/kevin.webp"
                  alt="Kevin"
                  width={112}
                  height={112}
                  quality={100}
                  className={cn(
                    "absolute top-0 rounded-xl transition-opacity duration-100",
                    showImage === 26 ? "opacity-100" : "opacity-0"
                  )}
                />
              )}
            </div>

            <h1 className="mt-8 text-2xl leading-10 font-serif subpixel-antialiased opacity-90">
              I'm a UX designer that loves to code.{" "}
              <br className="hidden sm:block" />
              Currently based in <s>Toronto</s> Malmö.
            </h1>

            <p className="mt-5 leading-7">
              I'm driven by creating joyful, intuitive interactions, with an
              obsession for small details. I love good copy and try to sprinkle
              humour into my work wherever I see fit. I'm also into really cool
              stuff like ultimate frisbee, yoga, and naps.
            </p>

            <div className="mt-10">
              <h6 className="font-mono uppercase font-medium tracking-widest text-[0.65rem]">
                work experience
              </h6>

              <div className="mt-1 divide-y divide-n2">
                {jobs.map((job) => (
                  <a
                    key={job.company}
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      `flex items-center gap-4 py-5 -mx-4 px-4 rounded-lg transition-colors`,
                      job.hover
                    )}
                  >
                    <Image
                      src={job.logo}
                      alt={job.company}
                      width={42}
                      height={42}
                      priority
                      className="opacity-80"
                    />

                    <div className="flex items-center justify-between w-full">
                      <div>
                        <div className="text-[0.85rem] sm:text-[0.925rem]">
                          {job.role}
                        </div>
                        <div className="mt-px text-[0.825rem] sm:text-sm text-n5">
                          {job.company}
                        </div>
                      </div>
                      <div className="text-n5 font-inter text-[0.825rem] sm:text-sm tabular-nums">
                        {job.time}
                        {job.time === "2023 –" ? (
                          <span className="opacity-0"> 2024</span>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </main>
        </motion.div>
      </div>
    </Curve>
  )
}
