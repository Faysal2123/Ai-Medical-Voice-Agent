import { AlDoctorAgents } from '@/shared/list'
import React from 'react'
import DoctorAgentCard from './DoctorAgentCard'

function DoctorsAgentList() {
  return (
    <div className='mt-10'>
        <h2 className='font-bold text-xl'>Ai Specialist Doctors Agent</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 border p-4 rounded-lg mt-5 hover:shadow-lg cursor-pointer'>
            {AlDoctorAgents.map((doctor, index) => (
              <div key={index}>
                <DoctorAgentCard doctorAgent={doctor} />
              </div>
          ))}
        </div>
    </div>
  )
}

export default DoctorsAgentList