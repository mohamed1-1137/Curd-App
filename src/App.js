import React , { Component } from 'react';
import './App.css';
import Form from "./components/formcomponent/Form"
import List from "./components/listcomponent/List";
class App extends Component{
  state={
    course:[
      {name:"Html"},
      {name:"css"},
      {name:"javascript"}
    ],
    current:""
  }
  UpdateCourse=(e)=>{
      this.setState({
          current:e.target.value
        })
    }

  AddCourse=(e)=>{
    e.preventDefault()
    if(this.state.current ===""){
      return false
    }
    else{
      let current =this.state.current
      let course=this.state.course
      course.push({name:current})
      this.setState({course,
      current:""
    })
    }}

    deleteCourse=(index)=>{
      let courses=this.state.course
      courses.splice(index,1)
      this.setState({courses})
    }

    editCourse=(index,value)=>{
      let courses=this.state.course
      let course=courses[index]
      course["name"]=value
      this.setState({courses})
    }
  render(){
    let courses=this.state.course
    let course=courses.map((course,index)=>{
      return (
        <>
        <List detalils={course} key={index} index={index} deleteCourse={this.deleteCourse} editCourse={this.editCourse} />
        </>
      ) 
    })
    return (
    <div className="App ">
      <h2>Add Course</h2>
      <Form current={this.state.current}UpdateCourse={this.UpdateCourse} AddCourse={this.AddCourse} />
      <ul>
        {course}
      </ul>
    </div>
      );
    }
}

export default App;
