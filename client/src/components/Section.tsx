import React from 'react';
import * as S from '../styles/components';

interface ISectionProps {
    children: React.ReactNode,
    title: string
}


const Section = ({ children, title }: ISectionProps) => {
    return (
        <>
            <S.SectionTitle>
                <S.SubTitle>{ title }</S.SubTitle>
            </S.SectionTitle>
            { children }
        </>
    );
}

export default Section;