import { Menu } from "@headlessui/react";
import SOCIAL_LINKS from "config/social";
import Dropdown from "../atom/Dropdown";
import {
  BookOutlined,
  CloseOutlined,
  DiscordFilled,
  GithubFilled,
  MediumFilled,
  RedditFilled,
  TwitterFilled,
} from "../atom/Icon";
import { ChevronDownIcon } from "@heroicons/react/solid";

interface INavigatorProps {
  dispatchAnchor: (anchor: string) => void;
}

const Navigator = ({ dispatchAnchor }: INavigatorProps) => {
  const SocialsComponent = socials.map((social) => (
    <li
      key={social.text}
      className="hover:text-white hover:opacity-60 flex items-center"
    >
      {social.link ? (
        <a
          href={social.link}
          className="flex items-center"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="mr-2 mt-[-4px]">{social.icon}</span>
          <span>{social.text}</span>
        </a>
      ) : (
        <>
          <span className="mr-2 mt-[-4px]">{social.icon}</span>
          <span>{social.text}</span>
        </>
      )}
    </li>
  ));

  return (
    <div className="relative">
      <div className="">
        <div className="md:container h-16 md:h-20 md:mx-auto flex items-center justify-center md:justify-between">
          <img
            width="118"
            height="24"
            className="w-[118px]"
            src="/assets/logo.svg"
            alt="optim"
          />
          <div className="hidden md:block">
            <ul className="text-sm flex space-x-3 lg:space-x-10">
              <li
                className="hover:text-white hover:opacity-60 cursor-pointer"
                onClick={() => dispatchAnchor("product")}
              >
                Products
              </li>
              <li
                className="hover:text-white hover:opacity-60 cursor-pointer"
                onClick={() => dispatchAnchor("roadmap")}
              >
                Roadmap
              </li>
              <li
                className="hover:text-white hover:opacity-60 cursor-pointer"
                onClick={() => dispatchAnchor("team")}
              >
                Team
              </li>
              <li>
                <Dropdown
                  trigger={
                    <Menu.Button className="inline-block hover:text-white hover:opacity-60 font-normal">
                      Docs
                    </Menu.Button>
                  }
                >
                  <div className="hover:text-white hover:opacity-60 w-max">
                    <a
                      href="/whitepaper.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Whitepaper
                    </a>
                  </div>
                </Dropdown>
              </li>
              <li>
                <Dropdown
                  trigger={
                    <Menu.Button className="inline-block">
                      <span className="hover:text-white hover:opacity-60 font-normal">
                        Follow Us
                      </span>
                      <ChevronDownIcon
                        className="ml-1 h-5 w-5"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  }
                >
                  <ul className="w-max space-y-2">{SocialsComponent}</ul>
                </Dropdown>
              </li>
            </ul>
          </div>
          <div className="hidden md:block">
            <div className="bg-optim-dark py-2 px-4 flex items-center rounded-sm border border-white border-opacity-10 text-sm">
              <span>
                <BookOutlined />
              </span>
              <span className="leading-6 ml-1 gradient-text">Coming soon</span>
            </div>
          </div>
          <label
            htmlFor="optim-nav-checkbox"
            className="md:hidden absolute left-5 top-5"
          >
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
              <g
                stroke="#FFF"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                fillRule="evenodd"
              >
                <path d="M20.357 17.5H3.643M20.357 12.5H3.643M20.357 7.5H3.643" />
              </g>
            </svg>
          </label>
        </div>
      </div>
      <input id="optim-nav-checkbox" className="hidden" type="checkbox" />
      {/* Overlay */}
      <label
        htmlFor="optim-nav-checkbox"
        className="md:hidden optim-nav-overlay animate-fade-in hidden fixed bg-white bg-opacity-25 top-0 left-0 right-0 bottom-0"
      />
      {/* Nagigation */}
      <nav className="md:hidden optim-nav -translate-x-full fixed top-0 left-0 bottom-0 w-[320px] max-w-full bg-optim-dark transition-transform">
        <div className="p-5 border-b border-white border-opacity-10 bg-black relative">
          <img
            width="118"
            height="24"
            className="w-[118px] mx-auto"
            src="/assets/logo.svg"
            alt="optim"
          />
          <label htmlFor="optim-nav-checkbox" className="absolute left-5 top-5">
            <CloseOutlined />
          </label>
        </div>
        <div className="p-5 ">
          <ul className="space-y-4">
            <li>
              <label
                htmlFor="optim-nav-checkbox"
                onClick={() => dispatchAnchor("product")}
              >
                Products
              </label>
            </li>
            <li>
              <label
                htmlFor="optim-nav-checkbox"
                onClick={() => dispatchAnchor("roadmap")}
              >
                Roadmap
              </label>
            </li>
            <li>
              <label
                htmlFor="optim-nav-checkbox"
                onClick={() => dispatchAnchor("team")}
              >
                Team
              </label>
            </li>
            <li>Docs</li>
            <li>
              <a
                href="/whitepaper.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Whitepaper
              </a>
            </li>
            <li>Follow Us</li>
            {SocialsComponent}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navigator;

const socials = [
  {
    text: "Twitter",
    icon: <TwitterFilled />,
    link: SOCIAL_LINKS.twitter,
  },
  {
    text: "Discord",
    icon: <DiscordFilled />,
    link: SOCIAL_LINKS.discord,
  },
  {
    text: "GitHub",
    icon: <GithubFilled />,
    link: SOCIAL_LINKS.github,
  },
  {
    text: "Medium",
    icon: <MediumFilled />,
    link: "",
  },
  {
    text: "Reddit",
    icon: <RedditFilled />,
    link: "",
  },
];
