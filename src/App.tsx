import {Container} from "./components/Container";
import {TheHeader} from "./components/TheHeader";
import {Search} from "./components/Search";
import {defaultUser} from './mock/index'
import {UserCard} from "./components/UserCard";
import {useState} from "react";
import {GithubError, GithubUser, LocalGithubUser} from "./types";
import {isGithubUser} from "./utils/typeguards";

const BASE_URL = 'https://api.github.com/users/'

function App() {
    const [user, setUser] = useState<LocalGithubUser | null>(defaultUser);
    const fetchUser = async (username: string) => {
        const url = BASE_URL + username;
        const res = await fetch(url)
        const user = await res.json() as GithubUser | GithubError;

        if (isGithubUser(user)) {

        } else {
            setUser(null)
        }
    };
    return (
        <Container>
            <TheHeader/>
            <Search hasError={!user} onSubmit={fetchUser}/>
            {user && (<UserCard{...defaultUser}/>)}
        </Container>
    );
}

export default App;
