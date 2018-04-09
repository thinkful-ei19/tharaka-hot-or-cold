import React from 'react';
import Header from './header';
import Game from './game';

export default function Main() {
    return (
        <div className="main">
            <Header /> 
            <Game />
        </div>
    )
}

// export default class Main extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             brand: "Learn React"
//         }
//     }

//     // toggleBrand = () => {
//     //     alert('tag');
//     //     let brand = 'Test';
//     //     this.setState({brand})
//     // }


//     render() {
//         return (
//             <div className="main">
//                 <Header brand={this.state.brand}/> 
//                 <button onClick={this.toggleBrand}>Toggle Brand</button>
//                 <Game />
//             </div>
//         )
//     }
// }