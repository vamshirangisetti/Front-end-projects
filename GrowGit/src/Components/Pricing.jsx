import React from 'react'
import Card from './Card'
import Single from "../assets/single.png"
import Double from "../assets/double.png"
import Triple from "../assets/triple.png"
const Pricing = () => {
  return (
    <div className='bg-white'>
      <div className='grid md:grid-cols-3 gap-20 max-w-[1240px] mx-auto py-32 px-6 text-center'>
        <Card image={Single} users="Individual Plan" cost="$49" line1="125 GB storage" line2="1 Granted User" line3="Send upto 2GB" />
        <Card image={Double} users="Partner Plan" cost="$99" line1="500 GB storage" line2="2 Granted Users" line3="Send upto 10GB" />
        <Card image={Triple} users="Team Plan" cost="$149" line1="1 TB storage" line2="5 Granted Users" line3="Send upto 24GB" />
      </div>
    </div>
  )
}

export default Pricing
