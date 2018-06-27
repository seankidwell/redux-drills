import React from 'react';
import './components/EditGuest/EditGuest.css'

export default function EditGuest(props) {
  return (
    <div className="modal-bg">
      <div className="modal">
        <input className="modal-input"/>
        <button className="modal-btn">Update</button>
        <button className="modal-btn">Cancel</button>
      </div>
    </div>
  )
}