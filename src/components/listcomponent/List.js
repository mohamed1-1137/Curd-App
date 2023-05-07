import React, { Component } from "react"
import "./List.css"

class List extends Component{

    state={
        Editcourse:false
    }
    renderCourse=()=>{
        return(
            <li>
            <span>{this.props.detalils.name}</span> 
            <button onClick={()=>{this.switchfounctions()}}>Edit Course</button>
            <button onClick={()=>{this.props.deleteCourse(this.props.index)}}>Delete Course</button>
            </li>
        )
    }

    switchfounctions=()=>{
        let Editcourse=this.state.Editcourse
        this.setState({
            Editcourse :!Editcourse
        })
    }

    updateCourseItem=(e)=>{
        e.preventDefault();
        this.props.editCourse(this.props.index,this.input.value )
        this.switchfounctions();
    }

    editcourse=()=>{
        return(
            <form onSubmit={this.updateCourseItem}>
                <input dir="auto" ref={(v)=>{this.input= v}} type="text" defaultValue={this.props.detalils.name}/>
                <button>Upload Course</button>
            </form>
        )
    }
    render(){
    return(
        <div>
            {(this.state.Editcourse)?(this.editcourse()):(this.renderCourse())}
        </div>
        
    )
    }
}
    


export default List;