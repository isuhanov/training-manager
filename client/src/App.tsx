import * as S from './styles/components';

import Header from './components/Header';
import Main from './components/Main';
import { Direction, Justify } from './ts/enums/flex';


function App() {

    return (
        <S.Body direction={Direction.Column} justify={Justify.FlexStart}>
            <Header />
            <Main />
        </S.Body>
    );
}

export default App;
