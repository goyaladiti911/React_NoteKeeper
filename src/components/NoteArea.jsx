import React, {useState} from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from "@material-ui/core/Fab";
import {Zoom} from "@material-ui/core";

function NoteArea(props){
    const [newNote, setNewNote] = useState({
        title: "",
        content: ""
    });
    const [expand, setExpand] = useState(false);
    function sendNote(event){
        props.onAdd(newNote);
        event.preventDefault();
        setNewNote({
            title: "",
            content: ""
        });
    }
    function createNewNote(event){
        const {value, name} = event.target;
        setNewNote(prevNotes => {
            return {
                ...prevNotes,
                [name]: value
            };
        });
    }
    function onExpansion(){
        setExpand(true);
    }
    return (
        <div>
            <form className="create-note">
                {expand && <input
                    name="title"
                    placeholder="Title"
                    value={newNote.title}
                    onChange={createNewNote}
                />}
                <textarea
                    onClick={onExpansion}
                    name="content"
                    placeholder="Take a note..."
                    value={newNote.content}
                    onChange={createNewNote}
                    rows={expand ? "3" : "1"}
                />
                <Zoom in={expand ? true : false}>
                    <Fab onClick={sendNote}>
                        <AddIcon />
                    </Fab>
                </Zoom>
            </form>
        </div>
    );
}

export default NoteArea;