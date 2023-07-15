import { styled } from "styled-components";

import { IFlexContainer } from "./interface";

export const FlexContainer = styled.div<IFlexContainer>`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction = 'row' }) => direction};
    align-items: ${({ align = 'center' }) => align};
    justify-content: ${({ justify = 'center' }) => justify};
    gap: ${({ gap = '0px' }) => gap};
    padding: ${({ padding = '0px' }) => padding};
`;

export const Header = styled(FlexContainer)`
    width: 100%;
    height: 100px;
    background-color: ${({ theme }) => theme.colors.bg};
`;