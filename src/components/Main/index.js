import React from 'react'
import * as S from './style'

export function Main({
    title,
    paragraph,
    btnstart,
    image,
    bottomtitle,
    bottomparagraph,
    imagemain,
    imgmain
}) {
    return (
        <>
            <S.Container>

                <S.Wrapper>
                    <S.Title>{title}</S.Title>
                    <S.Paragraph>{paragraph}</S.Paragraph>
                    <S.BtnStart>{btnstart}</S.BtnStart>
                </S.Wrapper>

                <S.MainImg src={image} alt="figure header" />
            </S.Container>

            <S.BoxMain>
                <S.WrapperMain>
                    <S.TitleMain>For you, for your team and your organization</S.TitleMain>
                    <S.ParagraphMain>Strytegy is a valuable tool to make you and your team more efficient in project management and new business development.</S.ParagraphMain>
                </S.WrapperMain>
            </S.BoxMain>
        </>
    )
}
