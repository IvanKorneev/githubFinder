import {Container} from "./components/Container";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";
import {defaultUser} from './mock/index'
import {UserCard} from "./components/UserCard";


function App() {
    return (
        <Container>
            <TheHeader/>
            <Search hasError onSubmit={() => {
            }}/>
            <UserCard{...defaultUser}/>
        </Container>
    );
}

export default App;
