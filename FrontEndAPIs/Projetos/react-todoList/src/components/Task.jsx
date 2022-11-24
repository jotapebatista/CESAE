import CheckBox from "./CheckBox"

export default function Task(name, key) {

   console.log(name)
   console.log(key)

    return (
        <div className="task">
            <CheckBox />
            <p>{name}</p>
        </div>

    )
}

