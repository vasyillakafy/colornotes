import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateNotes = ({modal, toggle, save}) => {
  const [notesName, setNotesName] = useState('');
  const [desc, setDesc] = useState('');

  const handleChange = (e) => {
    const {name,value} = e.target
    if(name === "notesName"){
      setNotesName(value)
    } else {
      setDesc(value)
    }
  }

  const handleSave = () => {
    let taskObj = {}
    taskObj["Name"] = notesName
    taskObj["Desc"] = desc
    save(taskObj)
  }
  return (
    <>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create Notes</ModalHeader>
        <ModalBody>
          <form action="">
            <div className='form-group mb-4'>
              <label>Notes</label>
              <input type="text" className='form-control' value={notesName} onChange={handleChange} name='notesName'/>
            </div>
            <div className='form-group'>
              <label>Description</label>
              <textarea rows="4" className='form-control' value={desc} onChange={handleChange} name='desc'></textarea>
            </div>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color='primary' onClick={handleSave}>Create</Button>{'  '}
          <Button color='secondary' onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </>
  );
};

export default CreateNotes;