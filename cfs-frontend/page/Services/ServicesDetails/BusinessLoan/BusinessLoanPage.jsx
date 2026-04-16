"use client";
import React from 'react'
import BusinessBanner from './BusinessBanner'
import FinalCalculator from '@/components/Calculator/FinalCalculator'
import BusinessLoanFeatured from './BusinessLoanFeatured'
import BusinessTypes from './BusinessTypes'
import LoanProcessSection from './LoanProcessSection'
import EligibilitySection from './EligibilitySection'
import DocumentsRequired from './DocumentsRequired'
import WhyChooseUs from './WhyChooseUs'
import UseCases from './UseCases'
import FinalCTA from './FinalCTA'

const BusinessLoanPage = () => {
  return (
    <div className="bg-white">
        <BusinessBanner />
        
        {/* We place the calculator right after the banner for high utility */}
        <div className="py-12 bg-slate-50 border-b border-gray-100">
          <FinalCalculator />
        </div>

        <BusinessLoanFeatured />
        <BusinessTypes />
        <LoanProcessSection />
        <EligibilitySection />
        <DocumentsRequired />
        <WhyChooseUs />
        <UseCases />
        <FinalCTA />
    </div>
  ) 
}

export default BusinessLoanPage;