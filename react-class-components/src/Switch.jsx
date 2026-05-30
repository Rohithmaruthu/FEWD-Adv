import { Component } from 'react';

class Switch extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOn: false
        };
    }

    toggle = () => {
        this.setState({ isOn: !this.state.isOn });
    }

    render() {
        return (
            <div>
                <button
                    onClick={this.toggle}
                    style={{ backgroundColor: this.state.isOn ? 'yellow' : 'grey' }}
                >
                    {this.state.isOn ? 'Turn OFF' : 'Turn On'}
                </button>
            </div>
        )
    }


}

export default Switch;