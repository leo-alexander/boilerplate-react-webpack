import React from 'react'

const Style = props => {
  return (
    <div className="styles-list">
      <div className="style-wrapper">
          <span className="style-name">{props.name}</span>
          <span className="style-shortName">{props.shortName}</span>
          <span className="style-description"><img src={props.description} /></span>
      </div>
    </div>
  )
}


Style.propTypes = {
  name: React.PropTypes.string.isRequired,
  shortName: React.PropTypes.string.isRequired,
  description: React.PropTypes.string,
}

export default Style
