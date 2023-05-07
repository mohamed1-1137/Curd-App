import React , {Component} from "react"
import "./Form.css"
let  Form =(props)=>{
        return(
            <form className="AddForm" onSubmit={props.AddCourse}>
                <input dir="auto" type="text" value={props.current} placeholder="Enter your course.." onChange={props.UpdateCourse} />
                <button>Add Course</button>
            </form>
        )
    }


export default Form;