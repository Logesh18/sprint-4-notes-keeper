import { useState } from "react";
export const CreateArea=()=>{
    const [items,setInputData]=useState([]); 
    const [title,setTitle]=useState("");
    const [desc,setDesc]=useState("");
    const getInput=(e)=>{
        e.preventDefault();
        if(title!=="" && desc!=="" &&!items.find((item)=>item.title===title)){
            setInputData([...items,{
                id:items.length,
                title:title,
                desc:desc
            }])
        }
        else{
            alert("Please provide data to make note.....")
        }
        setTitle("");
        setDesc("");
    }
    function removeContent (index) {
        let clone = [...items]
        clone.splice(index, 1)
        setInputData(clone);
    }
    return(
        <>
            <div className="formContainer">
                <div id="content">
                    <form id="form">
                        <input type="text" data-testid="title" id="title" placeholder="Title" value={title} onChange={(e)=>setTitle(e.target.value)} required/><br/> 
                        <input type="text" data-testid="desc" id="desc" placeholder="Take a note..." value={desc} onChange={(e)=>setDesc(e.target.value)}/><br/> 
                        <div id="addButton">
                          <button onClick={getInput} id="addNotes" data-testid="addNotes">Add</button>
                        </div>
                        
                    </form>
                </div>
            </div>
            <div id="cardContainer">
                {items.map((item,i)=><div key={item.id} id="resultContainer"><Note item={item} index={i} removeItem={removeContent}/></div>)}
            </div>
        </>
    )
}
const Note=(props,index)=>{
    const item=props.item;
    return(
        <>
            <div data-testid={item.title} id="card">
                <div id="detailsContainer">
                    <div id="titlename"><b>{item.title}</b></div>
                    <div data-testid="description" id="description">{item.desc}</div><br/>
                </div>
                <div id="deleteButton">
                     <button id="delete" data-testid="delete" onClick={() => props.removeItem(index)}>Delete</button>
                </div>
                
            </div>
        </>
    )
}
export const Header=()=>{
    return (
        <div id="header">Keeper</div>
    )
}
export const Footer=()=>{
    return (
        <div id="footer">Copyright &copy; {new Date().getFullYear()}</div>
    )
}