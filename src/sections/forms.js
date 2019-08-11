import React, {Component} from 'react'

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            inputName: '',
            inputTwitterAccount: '@',
            inputTerms: true
        }
    }


    handleMouseMove = (e) => {
        const {clientX, clientY} = e;
        this.setState({mouseX: clientX, mouseY: clientY});
    }

    handleFormClick = (e) => {
        e.preventDefault();
        // const name = document.getElementById('name').value;

        // const name = this.inputName.value;
        // const twitterAccount = document.getElementById('twitterAccount').value;
        // console.log({name, twitterAccount});

        console.log(this.state);
    }

    handleChange = (e) => {
        console.log('handleChange');
        console.log(e.target.checked);
        this.setState({ inputTerms: e.target.checked });
    }

    render() {
        return (
            <div>
                <h4>Forms</h4>
                <form onSubmit = {this.handleFormClick}>
                    <p>
                        <label htmlFor = 'name'>Full name: </label>
                        <input id='name' 
                            name = 'userName' 
                            onChange = {e => this.setState({ inputName: e.target.value })}
                            placeholder = 'Type your name' 
                            ref = {inputElement => this.inputName = inputElement} 
                            value = {this.state.inputName}/>
                    </p>

                    <p>
                        <label htmlFor = 'twitterAccount'>Twitter account: </label>
                        <input id = 'twitterAccount' 
                            name = 'twitterAccount' 
                            onChange = {e => this.setState({ inputTwitterAccount: e.target.value })}
                            placeholder = 'Type your Twitter account'
                            ref = {inputElement => this.inputTwitterAccount = inputElement}
                            value = {this.state.inputTwitterAccount} />
                    </p>

                    <p>
                        <label>
                            <input checked = {this.state.inputTerms}
                                onChange = {this.handleChange}
                                type = 'checkbox'  />
                            Accepted terms
                        </label>
                    </p>
                    {/* <button onClick = {this.handleFormClick}>Send</button> */}
                    <button>Send</button>
                    </form>
            </div>
        )
    }
}