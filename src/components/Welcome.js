import React from 'react'

class Welcome extends React.Component{

    // constructor(props){
    //     super(props)
    //     this.state = {
    //         firstName: "Fatma",
    //         lastName: "AbdelHadi"
    //     }
    // } // Another way of declaring state

    state = {
        firstName: "Fatma",
        lastName: "AbdelHadi"
    }

    render(){
        console.log(this.state);
        return(
            <>
                <h1>Hello Class Component, {this.props.name}</h1>
                <p>age: {this.props.age}</p>
                <p>title: {this.props.title}</p>
                <button onClick={() => {
                    this.setState({
                        lastName: "Mohamed"
                    })
                }}>Change My Name</button>
                <h6>created by, {this.state.firstName} {this.state.lastName}</h6>
            </>
        )
    }
}

export default Welcome