import React from "react";
import {
  DiscordFilled,
  GithubFilled,
  MediumFilled,
  RedditFilled,
  TwitterFilled,
} from "../atom/Icon";
import SOCIAL_LINKS from "config/social";

const Footer = React.forwardRef<HTMLElement>((_, ref) => {
  return (
    <footer ref={ref}>
      <div className="px-5 mb-5 md:px-0">
        <div className="md:container">
          <div className="flex border-t border-opacity-30 border-white pt-7 md:flex-row-reverse">
            <div className="flex-1 space-x-6 md:text-right">
              <a
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterFilled />
              </a>
              <a
                href={SOCIAL_LINKS.discord}
                target="_blank"
                rel="noopener noreferrer"
              >
                <DiscordFilled />
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubFilled />
              </a>
              <a href="#">
                <MediumFilled />
              </a>
              <a href="#">
                <RedditFilled />
              </a>
            </div>
            <div className="w-6">
              <img
                width="24"
                height="48"
                className="w-full"
                src="/assets/optim-logo-footer.svg"
                alt="optim logo footer"
              />
            </div>
            <div className="hidden md:block md:flex-1 font-extralight text-sm">
              Copyright © <span className="font-mono">2021</span> Optim. All
              rights reserved.
            </div>
          </div>
          <div className="md:hidden">
            <div className="font-extralight text-sm">
              Copyright © <span className="font-mono">2021</span> Optim. All
              rights reserved.
            </div>
          </div>
        </div>
      </div>
      <div className="bg-footer-dots bg-center h-16"></div>
    </footer>
  );
});

export default Footer;
