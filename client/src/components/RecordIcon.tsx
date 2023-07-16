import * as S from '../styles/components';

import { ReactComponent as Swimming } from '../assets/icons/swimming.svg';
import { ReactComponent as Running } from '../assets/icons/running.svg';
import { ReactComponent as Cycling } from '../assets/icons/cycling.svg';
import { ReactComponent as Strength } from '../assets/icons/strength.svg';

interface IRecordIconProprs {
    type: string
} 

const RecordIcon = ({ type }: IRecordIconProprs) => {
    return (
        <S.Icon width='80px' height='80px'>
            { type === 'running' ? <Running />
                : type === 'swimming' ? <Swimming />
                : type === 'cycling' ? <Cycling />
                : <Strength />
            }
        </S.Icon>
    );
}

export default RecordIcon;