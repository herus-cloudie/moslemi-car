import Image from 'next/image'
import Link from 'next/link'
import { CustomBtn } from '../module'

const Header = () => {
  return (
    <header className='w-full absolute z-10'>
        <nav className='max-w-[1440px] mx-auto flex justify-between items-center sm:px-16 px-6 py-4'>
            <Link href={'/'} className='justify-center items-center flex'>
                <Image src={'/logo.svg'} alt='car hub logo' width={118} height={18} className='object-contain'/>
            </Link>
            <CustomBtn type='submit' title='Sign up' style='text-primary-blue rounded-full bg-white min-w-[130px]'/>
        </nav>
    </header>
  )
}

export default Header