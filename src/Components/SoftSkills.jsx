import learn from "../../public/images/Learn.png";
import innovate from "../../public/images/innovation.png";
import wrench from "../../public/images/wrench.png";
import Image from "next/image";

function softSkills() {
  return (
    <div>
      <h2 className="my-10 p-10 text-3xl text-primary text-center underline underline-offset-4">
        Why Me?
      </h2>
      <div className="grid gap-6">
        {/* Block 1 */}
        <div>
          <Image
            src={learn}
            alt="continious learning graphics"
            width={700}
            height={700}
            className="w-60 mx-auto"
          />
          <div>
            <h3 className="text-2xl text-secondary text-center">Continuous Learner</h3>
            <p className="text-xl text-white text-center">
              I enjoy keeping up with the newest developments in technology and
              the industry. Which guarantees that my skill set is constantly at
              the forefront{" "}
            </p>
          </div>
        </div>
        {/* Block 2 */}
        <div>
          <Image
            src={innovate}
            alt="technological innovation"
            width={700}
            height={700}            
            className="w-60 mx-auto"
          />
          <div>
            <h3 className="text-2xl text-secondary text-center">Innovator at Heart</h3>
            <p className="text-xl text-white text-center">
              I find chances to innovate and improve user experiences between
              the lines of code. digital experiences that make an impression.
            </p>
          </div>
        </div>
        {/* Block 3 */}
        <div>
          <Image
            src={wrench}
            alt="picture of a wrench"
            width={700}
            height={700}
            className="w-60 mx-auto"
          />
          <div>
            <h3 className="text-2xl text-secondary text-center">Problem Solver</h3>
            <p className="text-xl text-white text-center">
              Every project is an enigma that needs to be cracked. I can tackle
              problems creatively and come up with solutions because to my
              analytical attitude.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default softSkills;
