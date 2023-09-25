import React, { useState } from 'react'
import NewNote from './NewNote'
import Button from '../../components/Button'
import Title from '../../components/Title'
import { v4 as uuidv9 } from 'uuid'
export default function NotesApp() {
    const [notes, setNotes] = useState([]);

    const addNewNote = (newNote) => {
        const newNotes = [...notes, newNote];
        newNotes.filter((note) => !note.id && (note.id = uuidv9()))
        setNotes(newNotes)
    }

    const deleteNote = (id) => {
        setNotes(notes.filter((note) => note.id !== id));
    }
    const cards = [
        "bg-info",
        "bg-success",
        "bg-primary",
        "bg-warning",
        "bg-danger",
    ];
    const randomizeBg = () => {
        const random = Math.floor(Math.random() * cards.length);
        return cards[random];
    }
    return (
        <>
        <div className="container pt-5">
            <Button btnClass={"btn-success"} text={"+ New note"} onClick={addNewNote} />
            <div className="container container-sm d-flex" style={{
                gap: 25,
                flexWrap: "wrap"
            }} >

                {notes.map((note) => (
                    <NewNote
                        key={note.id}
                        note={note}
                        onClick={deleteNote}
                        cardBg={randomizeBg}
                    />
                ))}

            </div>
        </div>
        </>
    )
}
