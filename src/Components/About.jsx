import Image from "next/image";
import aboutImage from "../../public/images/about.png";

function About() {
  return (
    <div>
      <h2 className="text-left text-primary text-[32px] mb-5">About Me</h2>
      <div className="flex flex-col gap-3">
        <Image
          src={aboutImage}
          alt="image of cartoon character coding"
          width={500}
          height={500}
          className="w-full"
        />
        <div className="flex flex-col gap-4 text-left text-secondary text-2xl">
          <p>
            During the 2020 lockdown, I developed a passion for web programming,
            which stoked my curiosity.{" "}
          </p>
          <p>
            I am an enthusiastic web developer that is always seeking new things
            to learn. I love to create and innovate. For me, creating beautiful,
            user-focused interfaces is a calling, not simply a job. I enjoy
            being ahead of the curve and utilizing the newest technology in the
            always changing field of web development.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
