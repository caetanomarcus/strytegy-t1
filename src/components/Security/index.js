import React from "react";
import * as S from './style'


const Security = ({
    secImg,
    secTitle,
    secList
}) => {

    return (
        <S.Container>
            <S.Title>{secTitle}</S.Title>
                <S.Image src={secImg} alt="strytegy logo" />
                <S.List>
                    {secList.map((item, index) => (
                        <S.Item key={index}>
                            {item}
                        </S.Item>
                    ))}
                </S.List>
        </S.Container>
    )
}
export default Security