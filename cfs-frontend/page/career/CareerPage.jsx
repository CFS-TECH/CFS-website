import React from 'react'
import CareerBanner from './CareerBanner'
import InternshipSection from './InternshipSection'
import JobPostSection from './JobPostSection'
import CareerForm from './CareerForm'

const CareerPage = () => {
  return (
    <div>
        <CareerBanner/>
        <InternshipSection/>
        <JobPostSection/>
        <CareerForm/>
    </div>
  )
}

export default CareerPage