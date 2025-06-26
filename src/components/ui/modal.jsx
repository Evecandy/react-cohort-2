const Modal = (props) => {
    return (
        <div className="Modal"
            style={{
                transform: props.show ? "translateY(0)":"translateY(-100vh)",
                opacity: props.show ? "1" : "0",
            }}>
            <div className="Children">{props.children}</div>
            <div className="Buttons"></div>

        </div>
    )
}
export default Modal;