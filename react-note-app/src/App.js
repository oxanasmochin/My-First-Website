import React, {useState} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-modal';
import { MDBBtn } from 'mdb-react-ui-kit';

function App () {
const [modalIsOpen, setModalIsOpen] = useState(false);

const [noteText, setNoteText] =useState('');


const handleChange = (event) => {
  setNoteText(event.target.value);
}

Modal.setAppElement('#root')

  return (
      <div className="App">
        <button onClick = {() => setModalIsOpen(true)}>Open note</button>

        <Modal isOpen={modalIsOpen} 
        onRequestClose={() => setModalIsOpen(false)}

        style ={{
          overlay: {
            width:'400px'
          },

          content: {
            background: '#FFFF00',
            width: '400px',
            borderRadius: '4px'
          }

        }}
        >
          <div>
            <MDBBtn className="btn-close" color="none" aria-label="Close" onClick = {() => setModalIsOpen(false)}/>
          </div>

          <div className="notes">
          <textarea className="anteckningstyp" 
          placeholder='Anteckningstyp'
          value={noteText}
          onChange = {handleChange}
          ></textarea>

          <p><em>Eva Cabisi (fysioterapeut), Mölndal vårdcentral</em></p>

          <textarea className="details" placeholder='Kontaktorsak'></textarea>
          <textarea className="details" placeholder='Aktuell'></textarea>
          <textarea className="details" placeholder='Åtgärd'></textarea>
          <textarea className="details" placeholder='Planering'></textarea>
          </div>
          <div className="note-footer">
          <small>28/09/2022 14:00</small>
          </div>
          <div className="btn save">
          <button >Save</button>
          </div>
        </Modal>
        </div>
  );
};

export default App;