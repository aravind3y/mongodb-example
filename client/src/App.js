import React, { Component } from 'react'
import axios from 'axios'

class App extends Component{
    state = {
        name:'',
        year:0
    }
    handleGetSubmit = (e) =>{
        e.preventDefault();
        axios.get('http://localhost:5000/data').then(res =>{
            console.log(res)
        })
    }
    handlePostSubmit = (e) =>{
        e.preventDefault();
        const data ={ name : this.state.name, year : this.state.year}
        console.log(data) 
        axios.post('http://localhost:5000/data',data).then(res =>{
            console.log(res)
        })
    }
    render(){
        return (
            <div>
                <input type="text" placeholder='name' onChange={(e) => this.setState({name : e.target.value })}/>
                <input type="text" placeholder='year' onChange={(e) => this.setState({year : e.target.value })}/>
                <button onClick={(e) => this.handlePostSubmit(e)}>POST</button>
                <button onClick={(e) => this.handleGetSubmit(e)}>GET</button>
            </div>
        )
    }
}

export default App;