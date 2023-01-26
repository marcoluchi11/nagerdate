import Image from "next/image";
import Link from "next/link";
import {
  AiFillLinkedin,
  AiOutlineMail,
  AiOutlineTwitter,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="flex justify-around items-center text-white m-4  ">
      <div>
        <a
          href="https://cafecito.app/marcoluchi11"
          rel="noopener noreferrer"
          target="_blank"
        >
          <Image
            width={170}
            height={170}
            srcset="https://cdn.cafecito.app/imgs/buttons/button_5.png 1x, https://cdn.cafecito.app/imgs/buttons/button_5_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_5_3.75x.png 3.75x"
            src="https://cdn.cafecito.app/imgs/buttons/button_5.png"
            alt="Invitame un café en cafecito.app"
          />
        </a>
      </div>
      <section>
        <section className="flex justify-around w-full">
          <Link
            href="https://www.linkedin.com/in/marcoluchi11"
            className="mx-5"
          >
            <AiFillLinkedin className="text-4xl text-white" />
          </Link>
          <Link href={`mailto:marcoaluchi@hotmail.com`} className="mx-5">
            <AiOutlineMail className="text-4xl text-white" />
          </Link>
          <Link href="https://twitter.com/marcoluchi11" className="mx-5">
            <AiOutlineTwitter className="text-4xl text-white" />
          </Link>
        </section>
      </section>
    </footer>
  );
};

export default Footer;
