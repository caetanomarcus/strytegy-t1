import React from 'react'
import * as S from './style'

export function Header({
    blog,
    faq,
    enter,
    lang,
    image
}) {
    return (
        <S.ContainerHeader>
           <S.Contender>
           <S.ImageLogo src={image} alt="" />
            <div>
            <S.BtnsInfo>{blog}</S.BtnsInfo>
            <S.BtnsInfo>{faq}</S.BtnsInfo>
            <S.BtnsInfo>{enter}</S.BtnsInfo>
            <S.BtnsInfo>{lang}</S.BtnsInfo>
            </div>
           </S.Contender>
        </S.ContainerHeader>
    )
}
