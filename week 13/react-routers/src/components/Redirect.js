import React from 'react';

class Redirect extends React.Component {
    handleRedirectClick = () => {
        const {customHistory} = this.props
        if (customHistory) customHistory.push("/")
        else console.log("History not found in props")
    }

    render() {
        return (
            <div>
                <button onClick={() => this.handleRedirectClick()}>Redirect</button>
            </div>
        )
    }
}

export default Redirect