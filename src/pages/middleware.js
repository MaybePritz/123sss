import { NextResponse } from 'next/server'

export async function middleware(req) {


    const data = await (await fetch("http://localhost:3000/api/forecast")).json()
  console.log(data )

  const { pathname , origin} = req.nextUrl

  const redirect = data?.redirects?.find(i.oldUrl == pathname);

  return NextResponse.next()
}