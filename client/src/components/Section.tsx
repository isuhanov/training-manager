import React from 'react';
import * as S from '../styles/components';

interface ISectionProps {
    children: React.ReactNode,
    title: string
}


const Section = ({ children, title }: ISectionProps) => {
    return (
        <>
            <S.SubTitle>{ title }</S.SubTitle>
            { children }
        </>
    );
}

export default Section;