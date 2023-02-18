import React from 'react'
import DataCard from './components/DataCard/DataCard'
import { Searchbar } from './components/Searchbar/Searchbar'

export default function App() {
  return (
    <><div style={{ fontSize: "36px", textAlign: "center", height: '100%', color: "white", padding: "25px" }}> Eth Lookup</div><Searchbar /><DataCard /></>
  )
}
