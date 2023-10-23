//welcome
function UserGreeting(props) {
    return <h1>welcome back!</h1>;
}

// sign in
function GuestGreeting(props) {
    return <h1>Please sign up</h1>;
}

// choose greetings
function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}