"use client"

import Image from 'next/image'
import { SearchManufacturerType } from '@/types'
import { Combobox , Transition } from '@headlessui/react'
import { useState } from 'react'
import { manufacturers } from '@/constants'

const SearchManufacturer = ({manufacturer , setManufacturer} : SearchManufacturerType) => {
    let [query , setQuery] = useState('');
    let filtredManufaturers = query === '' 
    ? manufacturers
    : manufacturers.filter(item => item.toLowerCase().replace(/\s+/g,"").includes(query.toLowerCase().replace(/\s+/g,"")))
  return (
    <div className='search-manufacturer'>
        <Combobox>
            <div className='relative w-full'>
                <Combobox.Button className='absolute top-[14px]'>
                  <Image height={20} width={20} className='ml-4' alt='car logo'  src={'/car-logo.svg'}/>  
                </Combobox.Button>
                <Combobox.Input onChange={(e) => setQuery(e.target.value)} className={'search-manufacturer__input'} placeholder='Volkswagen' displayValue={(manufacturer : string) => manufacturer}/>
                <Transition
                as='div' 
                leave='transition ease-in duration-100'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'
                afterLeave={() => setQuery('')}
                >
                <Combobox.Options className='absolute top-[14px]'>
                  <Image height={20} width={20} className='ml-4' alt='car logo'  src={'/car-logo.svg'}/>  
                </Combobox.Options>
                </Transition>
            </div>
        </Combobox>
    </div>
    
  )
}

export default SearchManufacturer