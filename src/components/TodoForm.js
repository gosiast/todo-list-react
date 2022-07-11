import React from 'react'

class TodoForm extends React.Component {
    state = {
        text: '',
    };

    handleOnChangeInput = (event) => {
        const letterPressed = event.target.value;
        this.setState({
            text: letterPressed
        });
    };

    handleOnClickAddButton = (event) => {
        event.preventDefault();


        if (this.state.text !== '') {
            this.props.returnedTask(this.state.text);
            this.setState({
                text: ''
            });
        }

    };

    render() {
        return (
            <form>
                <input
                    type="text"
                    value={this.state.text}
                    onChange={this.handleOnChangeInput}
                />
                <button
                    type="submit"
                    onClick={this.handleOnClickAddButton}
                >
                    Add
                </button>
            </form>
        )
    }
}

export default TodoForm;
