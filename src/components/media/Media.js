import { useEffect, useState } from "react"
import Filters from "./Filters"
import Grid from "./Grid"

const Media = () => {
    const [mediaData, setMediaData] = useState(null)
    const [filteredMedia, setFilteredMedia] = useState(null)
    const [error, setError] = useState(null)

    const getData = async () => {
        try {
            // fetch all data
            const res = await fetch("https://raw.githubusercontent.com/HubSpotWebTeam/CodeExercise/main/src/js/data/data.json")
            const data = await res.json()
            // sort alphabetically
            data.media.sort((a, b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()))
            setMediaData(data.media);
            setFilteredMedia(data.media)
        } catch (err) {
            setError('Error fetching data')
            console.log(err)
        }
    }

    // Movies/Books filter
    const filterByType = (e) => {
        const filteredList = mediaData.filter(media => media.type === e.target.value)
        setFilteredMedia(filteredList)
    }

    // Reset results to original state
    const clearFilters = () => {
        setFilteredMedia(mediaData)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <section className="grid">
            <div className="media-container">
                <Filters
                    filterByType={filterByType}
                    clearFilters={clearFilters}
                />
                <Grid
                    filteredMedia={filteredMedia}
                    error={error}
                />
            </div>
        </section>
    );
}

export default Media;