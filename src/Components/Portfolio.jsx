import Image from "next/image";
import coderz from "../../public/images/coderz.png";
import aiWebsite from "../../public/images/ai.png";
import huddle from "../../public/images/huddle.jpg";
import sunnySide from "../../public/images/sunnyside.jpg";
import clipboard from "../../public/images/clipboard.jpg";

function portfolio() {
  return (
    <div className="mt-10">
      <h2 className="mb-5 text-3xl text-center text-primary">
        My Recent Works
      </h2>

      <div className="flex flex-col gap-10">
        {/* block 1 */}
        <div>
          <Image
            src={coderz}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p className="text-white text-xl text-center pt-5">
              Coderzwave landing page
            </p>
          </div>
        </div>
        {/* block 2 */}
        <div>
          <Image
            src={aiWebsite}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p className="text-white text-xl text-center pt-5">
              AI consulting landing page
            </p>
          </div>
        </div>
        {/* block 3 */}
        <div>
          <Image
            src={huddle}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p>Huddle landing page</p>
          </div>
        </div>
        {/* block 4 */}
        <div>
          <Image
            src={clipboard}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p>clipboard landing page</p>
          </div>
        </div>
        {/* block 5 */}
        <div>
          <Image
            src={sunnySide}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p>sunnyside landing page</p>
          </div>
        </div>
        {/* block 6 */}
        {/* <div>
          <Image
            src={coderz}
            alt="coderzwave website"
            width={500}
            height={500}
          />
          <div>
            <p>Coderzwave landing page</p>
          </div>
        </div> */}

      </div>
    </div>
  );
}

export default portfolio;
