import React, { Component } from 'react'

class PostForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: ''
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body
        }

        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(post),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json));
    }


    render() {
        return (
            <div>
                <h1>PostForms</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title</label><br />
                        <input type="text" name="title" onChange={this.onChange} value={this.state.title}></input>
                    </div>
                    <br />
                    <div>
                        <label>Body</label><br />
                        <textarea type="text" name="body" onChange={this.onChange} value={this.state.body}></textarea>
                    </div>
                    <br />
                    <button type="submit">
                        Submit
                    </button>


                </form>
            </div>
        )
    }
}

export default PostForm
