import React, { useEffect, useState } from 'react';
import '../App.css';
import CreateNotes from '../modals/CreateNotes';
import Card from './Card';

const Notes = () => {
  const [modal, setModal] = useState(false);
  const [noteList, setnoteList] = useState([])

  useEffect(() => {
    let arr = localStorage.getItem("noteList")
    
    if(arr) {
      let obj = JSON.parse(arr)
      setnoteList(obj)
    }
  }, [])

  const toggle = () => {
    setModal(!modal);
  }
  const saveNotes = (taskObj) => {
    let tempList = noteList
    tempList.push(taskObj)
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setModal(false)
    setnoteList(tempList)
    window.location.reload()
  }

  const deleteNotes = (index) => {
    let tempList = noteList
    tempList.splice(index, 1)
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setnoteList(tempList)
    window.location.reload()
  }

  const updateListArray = (obj, index) => {
    let tempList = noteList
    tempList[index] = obj
    localStorage.setItem("noteList", JSON.stringify(tempList))
    setnoteList(tempList)
    window.location.reload()
  }

  return (
    <>
      <div className='header'>
        <div>
          <h3 className='mt-3 mb-3'>Colorful Sticky Notes</h3>
        </div>
        <div>
          <button className='btn btn-primary btn-md' onClick={() => setModal(true)}>Create New Notes</button>
        </div>
      </div>
      <div className='task-container'>
        {noteList && noteList.map((obj, index) => <Card taskObj = {obj} index={index} deleteNotes={deleteNotes} updateListArray={updateListArray}/> )}
      </div> 
      <CreateNotes toggle={toggle} modal={modal} save={saveNotes}/>
    </>
  );
};

export default Notes;