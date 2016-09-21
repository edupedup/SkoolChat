import React, {Component} from 'react';

class MessageInput extends Component {
    constructor(props) {
        super(props)
        this.state = { text: ''};
    }

    changeHandler(e) {
        this.setState({ text : e.target.value});
    }

    handleSubmit(e) {

        this.setState({ text : ''});
    }

    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Nouveau message : <input
                        onChange={this.changeHandler}
                        value={this.state.text}
                    />
                </form>
            </div>
        )
    }
}

export default MessageInput;
