import React from 'react'
import AboutHeroSection from '../../../components/about/aboutbanner'
import AboutCompanyOverview from '../../../components/about/aboutcompany'
import VisionMissionSection from '../../../components/about/aboutvisionmission'
import JourneyTimeline from '../../../components/about/aboutjourney'
import WhyChooseUsSection from '../../../components/about/aboutwhychoose'
import CTASection from '../../../components/about/cta'

function page() {
  return (
    <>
      <AboutHeroSection />
      <AboutCompanyOverview />
      <VisionMissionSection />
      <JourneyTimeline />
      <CTASection />
    </>
  )
}

export default page
