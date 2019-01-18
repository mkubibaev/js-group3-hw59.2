import React, {Component} from 'react';
import Joke from "../../components/Joke/Joke";
import Button from "../../components/UI/Button/Button";

class Jokes extends Component {
    state = {
        jokes: []
    };

    getJokes = () => {
        const urls = [];

        for (let i = 0; i < 5; i++) {
            urls.push('https://api.chucknorris.io/jokes/random');
        }

        Promise.all(urls.map(url =>
            fetch(url)
                .then(response => {
                    if (response.ok) {
                        return response.json();
                    }

                    throw new Error ('Error');
                })
        )).then(jokes => {
            this.setState({jokes})
        }).catch(error => {
            console.log(error);
        });
    };

    render() {
        return (
            <div className="container">
                <Button
                    label="Get joke"
                    onClick={this.getJokes}
                />

                {this.state.jokes.map(joke => (
                    <Joke
                        key={joke.id}
                        value={joke.value}
                        icon={joke.icon_url}
                    />
                ))}
            </div>
        );
    }
}

export default Jokes;