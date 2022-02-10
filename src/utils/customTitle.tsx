import React from 'react'
import { Helmet } from 'react-helmet'

export const CustomTitle = ({ titleStr }: { titleStr: string }) => {
  return (
    <>
      <Helmet>
        <title>{titleStr} | farm.c4ei.net</title>
      </Helmet>
    </>
  )
}
