import { Align, Direction, Justify, Wrap } from "../../enums/flex";

export interface IFlexContainer {
    $direction?: Direction;
    $align?: Align;
    $wrap?: Wrap;
    $justify?: Justify;
    $gap?: string;
    $padding?: string;
}