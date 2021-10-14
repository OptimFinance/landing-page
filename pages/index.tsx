import { useRef } from 'react';
import Navigator from '@/components/organism/Navigator';
import Header from '@/components/organism/Header';
import Products from '@/components/organism/Products';
import RoadMap from '@/components/organism/RoadMap';
import Team from '@/components/organism/Team';
// import Subscription from '@/components/organism/Subscription';
import Footer from '@/components/organism/Footer';
import FollowUs from '@/components/organism/FollowUs';

export default function Home() {
  const productRef = useRef<HTMLElement>(null);
  const roadMapRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const footerRef = useRef<HTMLElement>(null);

  const dispatchAnchor = (anchor: string) => {
    let ref;
    switch (anchor) {
      case 'product':
        ref = productRef.current;
        break;
      case 'roadmap':
        ref = roadMapRef.current;
        break;
      case 'team':
        ref = teamRef.current;
        break;
      case 'footer':
        ref = footerRef.current;
        break;
      default:
        break;
    }
    ref?.scrollIntoView?.({
      behavior: 'smooth',
    });
  };

  return (
    <div className='text-select'>
      <Navigator dispatchAnchor={dispatchAnchor} />
      <Header />
      <Products ref={productRef} />
      <RoadMap ref={roadMapRef} />
      <Team ref={teamRef} />
      <div className='flex justify-center px-5 mb-14'>
        <FollowUs />
      </div>
      {/* <Subscription /> */}
      <Footer ref={footerRef} />
    </div>
  );
}
