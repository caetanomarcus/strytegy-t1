import React from "react";
import * as S from  './style'

const Footer = ({
    aboutUs,
    aboutText,
    slogo,
    copyright,
    firsti,
    cnpj,
    social,
    socialList,
    help,
    helpList
}) => {
    return (
       <S.Wrapper>
            <S.FooterContainer>
            <S.LeftBox>
                <S.Title>{aboutUs}</S.Title>
                <S.Text>{aboutText}</S.Text>
                <S.LeftBottomBox>
                    <S.Logo src={slogo} alt="logo" />
                    <S.Copyright>{copyright}</S.Copyright>
                </S.LeftBottomBox>
                <S.LittleP>{firsti}</S.LittleP>
                <S.LittleP>{cnpj}</S.LittleP>
            </S.LeftBox>
            <S.RightBox>
                <S.SocialMedia>
                    <S.Title>{social}</S.Title>
                    {socialList.map((item, index) => (
                        <S.ListItem key={index}>
                            {item}
                        </S.ListItem>
                    ))}
                </S.SocialMedia>
                <S.Help>
                    <S.Title>{help}</S.Title>
                    {helpList.map((item, index) => (
                        <S.ListItem key={index}>
                            {item}
                        </S.ListItem>
                    ))}
                </S.Help>
            </S.RightBox>
        </S.FooterContainer>
       </S.Wrapper>
    )
};

export default Footer;