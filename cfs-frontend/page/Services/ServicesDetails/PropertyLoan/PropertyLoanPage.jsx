import React from 'react'
import PropertyBanner from './PropertyBanner'
import FinalCalculator from '@/components/Calculator/FinalCalculator'
import PropertyLoanFeatured from './PropertyLoanFeatured'
import PropertyTypes from './PropertyTypes'
import LoanProcessSection from './LoanProcessSection'
import EligibilitySection from './EligibilitySection'
import DocumentsRequired from './DocumentsRequired'
import WhyChooseUs from './WhyChooseUs'
import UseCases from './UseCases'
import FinalCTA from './FinalCTA'

const PropertyLoanPage = () => {
  return (
    <div className="bg-white">
        <PropertyBanner/>
        
        {/* We place the calculator right after the banner for high utility */}
        <div className="py-12 bg-slate-50 border-b border-gray-100">
          <FinalCalculator/>
        </div>

        <PropertyLoanFeatured />
        <PropertyTypes />
        <LoanProcessSection />
        <EligibilitySection />
        <DocumentsRequired />
        <WhyChooseUs />
        <UseCases />
        <FinalCTA />
    </div>
  ) 
}

export default PropertyLoanPage;
