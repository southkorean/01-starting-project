export default function TabButton({ children, onSelect }) {
    // function handleClick() {
    //     console.log('Hello World!');
    // }
    console.log("TABBUTTON COMPONENT EXECUTING");
    return (
        <li>
            <button onClick={onSelect}>{children}</button>
        </li>
    );
}