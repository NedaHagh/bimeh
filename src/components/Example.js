// import React,{useState} from "react";
// import Modal from 'react-bootstrap/Modal';

// const Example=()=> {
//     const [show, setShow] = useState(false);
  
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
  
//     return (
//       <div className="example">
//         <button variant="primary" onClick={handleShow}>
//           Launch demo modal
//         </button>
  
//         <Modal show={show} onHide={handleClose}>
//           <Modal.Header closeButton>
//             <Modal.Title>Modal heading</Modal.Title>
//           </Modal.Header>
//           <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
//           <Modal.Footer>
//             <button variant="secondary" onClick={handleClose}>
//               Close
//             </button>
//             <button variant="primary" onClick={handleClose}>
//               Save Changes
//             </button>
//           </Modal.Footer>
//         </Modal>
//       </div>
//     );
//   }
  
//  export default Example;
import React, { useState } from 'react';
import Modal from "./Modal";

const Example =()=> {
  const [isShowing, setIsShowing] = useState(false);

  const toggle = ()=> {
    setIsShowing(!isShowing);
  }
  return (
    <div className="App">
      <button className="button-default" onClick={toggle}>Show Modal</button>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}

export default Example;