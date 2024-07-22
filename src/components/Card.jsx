import React, { useState } from 'react';
import EditNotes from '../modals/EditNotes';

const Card = ({taskObj, index, deleteNotes, updateListArray}) => {
  const [modal, setModal] = useState(false);

  const colors = [
    {
      primaryColor : "#5D93E1",
      secondaryColor : "#ECF3F9"
    },
    {
      primaryColor : "#F9D288",
      secondaryColor : "#FEFAD5"
    },
    {
      primaryColor : "#5DC250",
      secondaryColor : "#F2FAF8"
    },
    {
      primaryColor : "#F48687",
      secondaryColor : "#FDf1f1"
    },
    {
      primaryColor : "#B964F7",
      secondaryColor : "#F3F0FD"
    }
  ]

  const toggle = () => {
    setModal(!modal)
  }

  const update = (obj) => {
    updateListArray(obj, index)
  }

  const handleDelete = () => {
    deleteNotes(index)
  }

  return (
    <>
    <div className='card-wrapper mt-5'>
      <div className='card-top' style={{backgroundColor: colors[index%5].primaryColor}}></div>
      <div className='task-holder'>
        <span className='card-header' style={{backgroundColor: colors[index%5].secondaryColor, borderRadius: "10px"}}>{taskObj.Name}</span>
        <p className='ms-2 mt-2'>{taskObj.Desc}</p>
        
        <div style={{position: "absolute", right: "20px", bottom: "20px"}}>
          <i className='far fa-edit me-4' onClick={() => setModal(true)} style={{color: colors[index%5].primaryColor, cursor :"pointer"}}></i>
          <i className='fas fa-trash-alt' onClick={handleDelete} style={{color: colors[index%5].primaryColor, cursor :"pointer"}}></i>
        </div>
      </div>
    </div>
    <EditNotes modal={modal} toggle={toggle} update={update} taskObj={taskObj}/>
    </>
  );
};

export default Card;