import React, { Component } from 'react'

export default class ClassCounter3 extends Component {
    constructor(props){
        super(props)

        this.state = {
            count: 0,
            name: '',
        }
    }

    componentDidMount(){
        console.log('did mount');
        document.title = `Clicked ${this.state.count} times`
    }

    componentDidUpdate(prevProps, prevState){
        if(prevState.count !== this.state.count) {
            console.log('did update');
            document.title = `Clicked ${this.state.count} times` 
        }
    }

    render() {
        return (
            <div>
                <p> Usa os métodos de estado da classe do componente</p>
                <input type="text" value={this.state.name} onChange={ e => this.setState({name: e.target.value})}/>
                <button onClick={ () => this.setState({count: this.state.count + 1})}>
                    Click {this.state.count} times
                </button>
            </div>
        )
    }
}
