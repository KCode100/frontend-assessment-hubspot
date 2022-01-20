const Dropdown = ({ dropdownType }) => {
    const options = {
        year: ['1870', '1892', '1895', '1963', '1971', '1973', '1974'],
        genre: ['action', 'adventure', 'animation', 'biography', 'classics', 'comedy', 'crime']
    }

    return (
        <div className="checkbox-container">
            {options[dropdownType].map(option => (
                <div className="option">
                    <input type="checkbox" id={option} value={option} />
                    <label htmlFor={option}>{option}</label>
                </div>
            ))}
        </div>
    );
}

export default Dropdown;