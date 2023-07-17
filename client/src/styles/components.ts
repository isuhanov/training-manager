import { css, styled } from "styled-components";
import { NavLink } from "react-router-dom";

import { Direction, Wrap } from "../ts/enums/flex";
import { IFlexContainer } from "../ts/interfaces/styles/flex-container";
import { IButton } from "../ts/interfaces/styles/button";
import { IIcon } from "../ts/interfaces/styles/icon";
import { TimePicker } from "@mui/x-date-pickers";

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

export const Main = styled.main`
    width: 100%;
    padding: 30px 0 20px;
    flex-grow: 2; 
    overflow: auto;
`;



export const Title = styled.h1`
    font-size: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;

export const SubTitle = styled.h2`
    font-size: 27px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;

export const SectionTitle = styled.div`
    margin: 20px 0 10px;
    text-align: center;
`;

export const Button = styled.button<IButton>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: ${({ padding = '10px' }) => padding};
    border-radius: 5px;
    font-size: ${({ size = '15px' }) => size};
    font-weight: ${({ weight = '700' }) => weight};
    color: ${({ theme }) => theme.colors.font};
    background-color: ${({ theme }) => theme.colors.primary};

    transition: background-color .1s linear;


    &:hover { background-color: ${({ theme }) => theme.colors.primaryHover}; }
    &:active { background-color: ${({ theme }) => theme.colors.primaryActive}; }
`;

export const Icon = styled.span<IIcon>`
    svg {
        width: ${({ width = '35px'}) => width};
        height: ${({ height = '35px'}) => height};
        fill: ${({ theme }) => theme.colors.font};
    }
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
    
    &:hover { color: ${({ theme }) => theme.colors.primaryHover}; }

    &.active { color: ${({ theme }) => theme.colors.primary}; }
`;



export const Record = styled(FlexContainer)`
    width: 40%;
    height: 120px;
    padding: 8px 10px;
    border-radius: 5px;
    box-shadow: 8px 8px 20px 0px #1E1E1E;
    background-color: ${({ theme }) => theme.colors.bg};
`;

export const RecordParametrContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 10px;
`;

export const RecordParametr = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
`;

export const RecordParametrVal = styled.span`
    font-size: 16px;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.font};
`;



export const Form = styled.form`
    width: 45%;
    margin: 20px auto;
    background-color: inherit;
`;

export const Field = styled.div`
    width: 100%;
    margin: 15px auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
`;

export const Label = styled.label`
    margin-left: 15px;
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.font};
`;  

const inputStyles = css`
    height: 40px;
    width: 100%;
    padding: 10px;
    font-size: 18px;
    font-weight: 500;
    border-radius: 5px;
    color:  ${({ theme }) => theme.colors.bg};
    background-color: white;
`;

export const Input = styled.input`  
    ${inputStyles}
`;

export const Select = styled.select`
    ${inputStyles}
`; 

export const StyledTimePicker = styled(TimePicker)`  
    width: 100%;
    border-radius: 5px;
    background-color: white;

    input {
        height: 40px;
        padding: 0 10px;
        font-size: 18px;
        font-weight: 500;
        color:  ${({ theme }) => theme.colors.bg};
    }
`;