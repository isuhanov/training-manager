import * as S from './styles/components';

import Header from './components/Header';
import Main from './components/Main';


function App() {

    return (
        <S.Body direction='column' justify='space-between'>
            <Header />
            <Main />
        </S.Body>
    );
}

export default App;
