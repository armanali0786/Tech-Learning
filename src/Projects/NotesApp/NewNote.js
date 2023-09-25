import React,{useState, useEffect} from 'react'
import { NoteStyle, Icons, DeleteIcon } from './NoteStyle'
import { BiAddToQueue } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
export default function NewNote({note, onClick,text,cardBg}) {
  const [newCardBg , setNewCardBg] = useState();
  
  useEffect(() => {
    !newCardBg && setNewCardBg(cardBg);
  }, [newCardBg]);

  return (
    <div className='pt-5'>
    <NoteStyle className={`card `}>
      <div className={`card-header text-right ${newCardBg}`}>
        <Icons>
          < BiAddToQueue />
          <DeleteIcon>
            <AiFillDelete onClick={()=> onClick(note.id)} />
          </DeleteIcon>
        </Icons>
      </div>
      <div className='card-body'>
         <textarea style={{border:"none", outline: "none"}}>{text}</textarea>
      </div>
    </NoteStyle>
    </div>
  )
}
