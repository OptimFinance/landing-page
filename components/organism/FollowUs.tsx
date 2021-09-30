import SOCIAL_LINKS from 'config/social';

const FollowUs = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex justify-center items-center'>
        <div className='w-10 h-10 rounded-full mr-2 overflow-hidden'>
          <img
            className='w-full'
            src='/assets/optim_400x400.jpg'
            alt='optim logo'
          />
        </div>
        <span className='flex-1 text-white text-base font-light'>
          Follow Us on Twitter{' '}
          <a
            href={SOCIAL_LINKS.twitter}
            className='gradient-text hover:underline'
            target='_blank'
            rel='noopener noreferrer'
          >
            @OptimFi
          </a>{' '}
          for Updates
        </span>
      </div>
    </div>
  );
};

export default FollowUs;
