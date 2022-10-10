import { useState } from 'react'
import { SCard } from "../styled.components"

const Card = ({ author, quote }: { author: string, quote: string }) => {
    const [canEdit, setCanEdit] = useState(false)
    const [authorInput, setAuthorInput] = useState(author)

    const toggleCanEdit = () => setCanEdit(!canEdit)

    const handleAuthorInput = (e: any) => setAuthorInput(e.target.value)

    const updateAuthorName = () => {
        alert(author + ' is updated to ' + authorInput)
        setCanEdit(false)
    }

    return (
        <SCard>
            <div className="header">
                {canEdit ? (
                    <input
                        defaultValue={author}
                        onChange={handleAuthorInput}
                        value={authorInput}
                    />
                ) : (<h3 className="title">{author ?? "Author"}</h3>)}
                <span onClick={canEdit ? updateAuthorName : toggleCanEdit}>{canEdit ? "Save" : "Edit"}</span>
            </div>
            <div className="quote">{quote ?? "Quotes"}</div>
        </SCard>
    )
}

export default Card