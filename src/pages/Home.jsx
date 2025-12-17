import React from "react";
import HomeBanner from "../components/Home/HomeBanner";
import Ourservices from "../components/Home/Ourservices";
import Testimonials from "../components/Home/Testimonials";
import BlogDetails from "../components/Home/Blog";
import OurApproach from "../components/Home/ OurApproach";
import ServicesAtAGlance from "../components/Home/ServicesAtAGlance";
import JourneyTimeline from "../components/Home/JourneyTimeline";
import CompanyIntro from "../components/Home/CompanyIntro";


export default function Home() {
  return (
    <>
    


      <main className="bg-white-50">
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
          <HomeBanner />
          <OurApproach />
          <CompanyIntro />
          <JourneyTimeline />
          <Ourservices />
          <ServicesAtAGlance /> 
          <BlogDetails />
          <Testimonials />
        
        </div>
      </main>
    </>
  );
}
