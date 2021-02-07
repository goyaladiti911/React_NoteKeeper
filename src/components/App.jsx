import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import NoteArea from "./NoteArea";

function App(){
    const [notes, getNotes] = useState([]);
    function removeNote(id){
        getNotes((prevNotes) => {
            return prevNotes.filter((note, index) => {
                return index !== id;
            });
        });
    }
    function displayNote(note){
        getNotes(prevNotes => {return [...prevNotes, note]})
    }
    return(
        <div>
            <Header/>
            <NoteArea onAdd={displayNote}/>
           { notes.map (
               (newNote, index) => (
                    <Note
                        key={index}
                        id={index}
                        title={newNote.title}
                        content={newNote.content}
                        onDelete={removeNote}
                    />
                ))
            }
            <Footer/>            
        </div>        
    );
}
export default App;