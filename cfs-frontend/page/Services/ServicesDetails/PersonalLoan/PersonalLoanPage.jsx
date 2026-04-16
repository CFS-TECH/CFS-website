import React from 'react'
import PersonalBanner from './PersonalBanner'
import FinalCalculator from '@/components/Calculator/FinalCalculator'
import PersonalLoanFeatured from './PersonalLoanFeatured'
import LoanProcessSection from './LoanProcessSection'
import EligibilitySection from './EligibilitySection'
import DocumentsRequired from './DocumentsRequired'
import WhyChooseUs from './WhyChooseUs'
import UseCases from './UseCases'
import Testimonial from './Testimonial'
import FinalCTA from './FinalCTA'

const PersonalLoanPage = () => {
  return (
    <div className="bg-white">
        <PersonalBanner/>
        
        {/* We place the calculator right after the banner for high utility */}
        <div className="py-12 bg-slate-50 border-b border-gray-100">
          <FinalCalculator/>
        </div>

        <PersonalLoanFeatured />
        <LoanProcessSection />
        <EligibilitySection />
        <DocumentsRequired />
        <WhyChooseUs />
        <UseCases />
        <Testimonial />
        <FinalCTA />
    </div>
  ) 
}

export default PersonalLoanPage
