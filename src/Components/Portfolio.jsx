import Image from "next/image";
import coderz from "../../public/images/coderz.png";
import aiWebsite from "../../public/images/ai.png";
import huddle from "../../public/images/huddle.jpg";
import sunnySide from "../../public/images/sunnyside.jpg";
import clipboard from "../../public/images/clipboard.jpg";
import Link from "next/link";

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
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              Coderzwave landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              AI consulting landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              Huddle landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              clipboard landing page
            </p>
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
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
          <div className="flex flex-col items-center gap-2">
            <p className="text-white text-xl text-center pt-5">
              sunnyside landing page
            </p>{" "}
            <div className="text-white flex gap-4 text-3xl">
              <Link href="#">
                <i className="fa-solid fa-link"></i>
              </Link>
              <Link href="#">
                <i className="fa-brands fa-github"></i>
              </Link>
            </div>
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
