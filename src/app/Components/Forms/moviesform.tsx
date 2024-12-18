import React, { useState } from 'react'

export default function Moviesform() {
    const [image, setImage] = useState('')
    const [genre, setGenre] = useState('')
    const [trailer, setTrailer] = useState('')

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // Call API to add movie
        console.log({ image, genre, trailer })
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Image URL:
                <input type="text" className='bg-transparent' value={image} onChange={e => setImage(e.target.value)} />
            </label>
            <br />
            <label>
                Genre:
                <input type="text" value={genre} onChange={e => setGenre(e.target.value)} />
            </label>
            <br />
            <label>
                Trailer Link:
                <input type="text" value={trailer} onChange={e => setTrailer(e.target.value)} />
            </label>
            <br />
            <button type="submit">Add Movie</button>
        </form>
    )
}

