export default function LowerSection(props) {
    const passwords = props.passwords;
    return (
        <>
            <div className="lower-section">
                <div className="generated-password" id="password1-el">
                    {passwords[0] ? passwords[0] : <i className="fa fa-ellipsis-h"></i>}
                </div>
                <div className="generated-password" id="password2-el">
                    {passwords[1] ? passwords[1] : <i className="fa fa-ellipsis-h"></i>}
                </div>
                <div className="generated-password" id="password3-el">
                    {passwords[2] ? passwords[2] : <i className="fa fa-ellipsis-h"></i>}
                </div>
                <div className="generated-password" id="password4-el">
                    {passwords[3] ? passwords[3] : <i className="fa fa-ellipsis-h"></i>}
                </div>
            </div>
        </>
    )
} 