import { useState } from 'react'
import data from '../mockdata/data.json'

export default function DataTable() {
const [data, setdata] = useState(data)

console.log(data)
  return (
    <div>

    </div>
  )
}

DataTable.defaultProps = {
  title: "No Title"
}
