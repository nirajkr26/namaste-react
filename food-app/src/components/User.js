import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            userInfo: {
                name: "Dummy",
                location: "default",
                avatar_url: ""
            }
        }
    }

    async componentDidMount() {
        const data = await fetch("https://api.github.com/users/nirajkr26")

        const json = await data.json();

        this.setState({
            userInfo: json,
        })
    }

    render() {
        const { name, location, avatar_url } = this.state.userInfo;
        return (
            <div className="flex justify-center">

                <div className="border-2 flex flex-col items-center p-3 rounded -lg">
                    <img className="w-80 rounded-full" src={avatar_url} />
                    <h2 className="text-lg">Name: {name}</h2>
                    <h3 className="text-lg">Location: {(location) ? location : "NA"} </h3>
                </div>
            </div>
        )
    }
}

export default User;