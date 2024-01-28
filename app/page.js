import React from 'react'
import Link from 'next/link'

export const Page = () => {
  return (
    <>
    <div>Page</div>
    <Link  href="/products"> Yönlendirme </Link>
    <Link href={{
      pathname: '/products',
      query: { 
        id: '123',
        name: 'osman' },
    }}> Yönlendirme2 </Link>
    </>
  )
}

export default Page
