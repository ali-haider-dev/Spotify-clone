import React from 'react'
import "./style.css"
function SideBarOption({ title, Icon }) {
    return (
        <div className="sidebaroption">
            {Icon && <Icon className="sidebaroption__Icons" />}
            {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        </div>
    )
}

export default SideBarOption
