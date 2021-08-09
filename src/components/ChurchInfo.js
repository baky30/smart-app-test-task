import React from 'react'

export default function ChurchInfo({ church }) {
    return (
        <div className="church-info">
            <h4>{church.name}</h4>
            <p><span>&#9962;</span> {church.church_address_street_address}</p>
            <p><span>&#9742;</span> {church.phone_number}</p>
            <p><span>&#127760;</span> <a href={church.url}>{church.url}</a></p>
            
        </div>
    )
}
