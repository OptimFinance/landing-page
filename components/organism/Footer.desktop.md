import { DiscordFilled, GithubFilled, MediumFilled, RedditFilled, TwitterFilled } from "../atom/Icon"

const Footer = () => {
return <footer>

<div className='optim-container'>
<div className='flex justify-between flex-wrap py-10 border-t border-opacity-30 border-white'>
<div className="font-extralight text-sm flex-1 md:flex-[100%] md:order-3">
Copyright © <span className="font-mono">2021</span> Optim. All rights reserved.
</div>
<div className="w-6 md:order-2">
<img className="w-full" src="/assets/optim-logo-footer.png" alt="optim logo footer" />
</div>
<div className='flex flex-1 justify-end space-x-3 md:justify-start md:flex-grow-0 md:order-1'>
{/_ md:w-[calc(100vw-24px)] _/}
<a href="#">
<TwitterFilled />
</a>
<a href="#">
<DiscordFilled />
</a>
<a href="#">
<GithubFilled />
</a>
<a href="#">
<MediumFilled />
</a>
<a href="#">
<RedditFilled />
</a>
</div></div>
</div>
<div className='bg-footer-dots bg-center h-36 md:h-16'></div>
</footer>
}

export default Footer
