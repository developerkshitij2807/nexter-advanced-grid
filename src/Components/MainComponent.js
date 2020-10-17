import React from 'react';
import Features from './FeaturesComponent';
import Footer from './FooterComponent';
import Gallery from './GalleryComponent';
import Header from './HeaderComponent';
import Homes from './HomesComponent';
import Realtors from './RealtorsCompnent';
import Sidebar from './SidebarComponent';
import SCPictures from './StoryCompnent-Pictures';
 
import SCContent from './StoryComponent-Conent';

const Main = () => {
  return (
    <div className='container'>
      <Sidebar />
      <Header />
      <Realtors />
      <Features />
      <SCPictures />
      <SCContent />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
};
export default Main;
