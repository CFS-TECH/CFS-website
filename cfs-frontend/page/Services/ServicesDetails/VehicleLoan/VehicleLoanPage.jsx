import React from 'react'
import VehicleBanner from './VehicleBanner'
import FinalCalculator from '@/components/Calculator/FinalCalculator'
import VehicleLoanFeatured from './VehicleLoanFeatured'
import VehicleTypes from './VehicleTypes'
import LoanProcessSection from './LoanProcessSection'
import EligibilitySection from './EligibilitySection'
import DocumentsRequired from './DocumentsRequired'
import WhyChooseUs from './WhyChooseUs'
import UseCases from './UseCases'
import FinalCTA from './FinalCTA'

const VehicleLoanPage = () => {
  return (
    <div className="bg-white">
        <VehicleBanner/>
        
        {/* We place the calculator right after the banner for high utility */}
        <div className="py-12 bg-slate-50 border-b border-gray-100">
          <FinalCalculator/>
        </div>

        <VehicleLoanFeatured />
        <VehicleTypes />
        <LoanProcessSection />
        <EligibilitySection />
        <DocumentsRequired />
        <WhyChooseUs />
        <UseCases />
        <FinalCTA />
    </div>
  ) 
}

export default VehicleLoanPage;
