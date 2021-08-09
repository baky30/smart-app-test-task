import React, { useState } from 'react'

export default function Search ({ setCity }) {
    function selectHandler (e) {
      let c = e.target.value;
      switch (c) {
        case 'new-york': setCity({ lat: 40.730610, lng: -73.935242 })
          break;
        case 'chicago': setCity({ lat: 41.881832, lng: -87.623177 })
          break;
        case 'boston': setCity({ lat: 42.361145, lng: -71.057083 })
          break;
        case 'oakland': setCity( {lat: 37.804363, lng: -122.271111 })
          break;
      }
    }

    return (
      <div className="search">
        <select name="city" onChange={selectHandler}>
            <option value="new-york">new-york</option> 
            <option value="boston">boston</option>
            <option value="chicago">chicago</option>
            <option value="oakland">oakland</option>
        </select>
      </div>
    )
}
