
export default function Button(props) {
    return (
            <div>
                <button onClick={props.onClickFunction}>{props.button_name}</button>
            </div>
        )
}