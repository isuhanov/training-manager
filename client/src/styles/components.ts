import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { Direction, Wrap } from "../ts/enums/flex";
import { IFlexContainer } from "../ts/interfaces/styles/flex-container";
import { IButton } from "../ts/interfaces/styles/button";
import { IIcon } from "../ts/interfaces/styles/icon";

export const Container = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1199px) {
        & {
            max-width: 991px;
        }
    }
`;

export const FlexContainer = styled.div<IFlexContainer>`
    width: 100%;
    display: flex;
    flex-direction: ${({ direction = Direction.Row }) => direction};
    align-items: ${({ align = 'center' }) => align};
    flex-wrap: ${({ wrap = Wrap.Nowrap }) => wrap};
    justify-content: ${({ justify = 'center' }) => justify};
    gap: ${({ gap = '0px' }) => gap};
    padding: ${({ padding = '0px' }) => padding};
`;

export const Body = styled(FlexContainer)`
    height: 100vh;
`;

export const Header = styled(FlexContainer)`
    width: 100%;
    height: 100px;
    min-height: 100px;
    box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.33);
    background-color: ${({ theme }) => theme.colors.bg};
`;

export const Title = styled.h1`
    font-size: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;

export const SubTitle = styled.h2`
    font-size: 25px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;

export const  Nav = styled.nav`
    background-color: inherit;
`;

export const NavMenu = styled.ul<IFlexContainer>`
    display: flex;
    flex-direction: ${({ direction = Direction.Row }) => direction};
    align-items: ${({ align = 'center' }) => align};
    flex-wrap: ${({ wrap = Wrap.Nowrap }) => wrap};
    justify-content: ${({ justify = 'center' }) => justify};
    gap: ${({ gap = '0px' }) => gap};
    padding: ${({ padding = '0px' }) => padding};
`;

export const NavItem = styled.li`
    cursor: pointer;
`;

export const NavItemLink = styled(NavLink)`
    font-size: 17px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};

    transition: color .1s linear;
    
    &:hover { color: ${({ theme }) => theme.colors.secondary}; }

    &.active { color: ${({ theme }) => theme.colors.primary}; }
`;


export const Button = styled.button<IButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ padding = '10px' }) => padding};
    border-radius: 5px;
    font-size: ${({ size = '15px' }) => size};
    font-weight: ${({ weight = 'normal' }) => weight};
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.primary};

    transition: background-color .1s linear;


    &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }
    &:active { background-color: ${({ theme }) => theme.colors.primaryActive}; }
`;

export const Icon = styled.span<IIcon>`
    svg {
        width: ${({ width = '30px'}) => width};
        height: ${({ height = '30px'}) => height};
        fill: ${({ theme }) => theme.colors.font};
    }
`;

export const Main = styled.main`
    width: 100%;
    padding: 30px 0 20px;
    flex-grow: 2; 
    overflow: auto;
`;

export const Record = styled(FlexContainer)`
    width: 45%;
    height: 120px;
    border-radius: 5px;
    box-shadow: 8px 8px 20px 0px #1E1E1E;
    background-color: ${({ theme }) => theme.colors.bg};
`;