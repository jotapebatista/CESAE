import CheckBox from "./CheckBox"

export default function Task({ name, index }) {

    return (
        <div className="task">
            <CheckBox />
            {name}
            <button>edit</button>
            <button>delete</button>
        </div>

    )
}

