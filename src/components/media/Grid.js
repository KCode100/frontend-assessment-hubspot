const Grid = ({ filteredMedia, error }) => {
    const addDefaultSource = (e) => {
        e.target.src = "/No-Image-Placeholder.svg"
    }

    return (
        <div className="content">
            {error && <div>{error}</div>}
            {!error && !filteredMedia && <div>Loading...</div>}
            {filteredMedia && filteredMedia.length < 1 && <p>Sorry, no matching results</p>}
            {filteredMedia && !error && filteredMedia.map(media => (
                <div className="media">
                    <img className="media__image" onError={addDefaultSource} src={media.poster} alt={`cover image of ${media.title}`} />
                    <h3 className="media__title">{media.title} ({media.year})</h3>
                    <p className="media__genres">
                        Genres:
                        {media.genre.map(category => (
                            <span> {category}, </span>
                        ))}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default Grid;