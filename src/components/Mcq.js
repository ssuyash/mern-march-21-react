import React, { useState } from 'react'


//visted
const mcqs = [
    {
        queId: "a",
        title: "What is JS",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "visited",
        choosenAns: 0
    },

    {
        queId: "b",
        title: "What is PHP",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "",
        choosenAns: 0
    },

    {
        queId: "c",
        title: "What is non",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "",
        choosenAns: 0
    },

    {
        queId: "d",
        title: "What is java",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "",
        choosenAns: 0
    },

    {
        queId: "e",
        title: "What is ruby",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "",
        choosenAns: 0
    },

    {
        queId: "e",
        title: "What is ABC",
        answers: ["php", "javascript", "python", "none"],
        right_a: 1,
        status: "",
        choosenAns: 0
    },

]

let getClass = (status)=>{

    switch(status){
        case 'visited': return "btn rounded mx-2 btn-danger"
        case 'mforreview': return "btn rounded mx-2 btn-info"
        default : return "btn rounded mx-2 "        
    } 
}

let count = 0
export default function Mcq() {
    const [questions, setQuestions] = useState([...mcqs])
    const [activeQue, setActiveQuestion] = useState({...mcqs[count]})
    const [choosenAns, setChoosenAns] = useState(null)
    
    let handleSaveAndNext = ()=>{
        
        if(!choosenAns){
            alert('please select an answer')
            return ''
        }

        count = count < mcqs.length-1 ? count+1 : count;
        let allQuestions = [...questions]
        allQuestions[count-1].choosenAns = choosenAns
        let currentQue = {...questions[count]}
        console.log(currentQue)
        currentQue.status = "visited"        
        allQuestions[count] = currentQue
        setQuestions(allQuestions)
        setActiveQuestion({...mcqs[count]})
        setChoosenAns(null)



    }

    let handleQuesCountClick = (clickedIndex)=>{
        count = clickedIndex;
        let allQuestions = [...questions]
        let currentQue = {...questions[count]}
        console.log(currentQue)
        currentQue.status = "visited"
        allQuestions[count] = currentQue
        setQuestions(allQuestions)
        setActiveQuestion({...mcqs[count]})
    }

    let handleCheckBox = (e)=>{
        setChoosenAns(e.target.value)
    }

    

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                <h4>{activeQue.title}</h4>
                {activeQue.answers.map((ans, ind)=><><input onChange={handleCheckBox} type="radio" name="mcq-ans" value={ind}/>{ans}<br /></>)}
                 

                    <div class="btn-group mt-5" role="group" aria-label="Basic example">
                        <button 
                        className="btn btn-primary" 
                        onClick={()=>handleSaveAndNext()}                        
                        >Save and next</button>
                        <button className="btn btn-secondary">Save and mark for review</button>
                        <button className="btn btn-info">Clear</button>
                        <button className="btn btn-danger">mark for review and next</button>
                    </div>
                </div>




                <div className="col-md-6 mt-5">
                    {
                        questions.map((que, index)=><button 
                        className={`${getClass(que.status)}` }
                        onClick={()=>handleQuesCountClick(index)}
                        >{index+1}</button>)
                    }
                    
                </div>



            </div>
        </div>

    )
}
