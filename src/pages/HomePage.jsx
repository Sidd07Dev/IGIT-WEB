import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

import CourseHighlights from '../components/CourseHighlights';
import Features from '../components/Features';
import LatestUpdates from '../components/LatestUpdates';

import Testimonials from '../components/Testimonials';
import DownloadOurApp from '../components/DownloadOurApp';
import DevelopmentTeam from '../components/DevelopmentTeam';


function HomePage() {


  return( 
    <>
    <Hero/>
   
    <LatestUpdates/>
 
   <DownloadOurApp/>

 

 
   <Features/>
   <DevelopmentTeam/>
   <Testimonials/>
  
    </>
  );
}

export default HomePage;