import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <header>
                <div>
                    <h1>Universal</h1>
                    <p>Hablá de tu hobbie, más que tranquilo.</p>
                </div>
                <div>
                    <p><a>Ingresá</a></p>
                    <p><a>Registrate</a></p>
                </div>
            </header>
        )
    }
}

export default Header;