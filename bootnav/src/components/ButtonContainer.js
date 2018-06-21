import React from 'react';

export default class ButtonContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div style={styles.container}>
                <button onClick={this.props._onTapCarBtn}>Car</button>
                <button onClick={this.props._onTapNoCarBtn}>No Car</button>
            </div>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'blue'
    }
}