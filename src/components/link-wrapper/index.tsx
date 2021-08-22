import React from "react"
import * as S from "./styles"
import Link from "next/link"

type LinkWrapperProps = {
  href: string
  children?: React.ReactNode
}

const LinkWrapper = ({ children, href }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href}>{children}</Link>
    </S.Wrapper>
  )
}

export default LinkWrapper
