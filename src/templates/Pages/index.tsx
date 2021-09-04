import { CloseOutline } from "@styled-icons/evaicons-outline"
import LinkWrapper from "components/link-wrapper"
import React from "react"
import * as S from "./styles"

const PageTemplate = () => {
  return (
    <S.Content>
      <LinkWrapper href="/">
        <CloseOutline size={32} />
      </LinkWrapper>
      <S.Heading>My Trips</S.Heading>
      <S.Body>
        <p>
          orem oasdoaj sdomas odwmd oiamsod
          nakjlnioanjsiwoidejaosndaosmdoajsdoijawoidnaiosdnmaosndoia
        </p>
      </S.Body>
    </S.Content>
  )
}

export default PageTemplate
