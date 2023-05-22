import { React, useState } from "react";
import { awesomePassword, genericPassword } from "./Brain";
import LowerSection from "./components/LowerSection";
import UpperSection from "./components/UpperSection";


function App() {
    
    const [ strength, setStrength ] = useState(8);
    const [ passwords, setPasswords ] = useState([]);

    function handleSliderChange(event) {
        setStrength(event.target.value);
    }

    function generatePasswords() {
        let password1 = genericPassword(strength);
        let password2 = awesomePassword(strength);
        setPasswords([password1, password2]);
    }
 

    return (
        <>
            <main className="flex">
                <div className="container">
                    <UpperSection
                        handleClick={generatePasswords}
                        handleSliderChange={handleSliderChange}
                        strength={strength}
                    />
                    <hr />
                    <LowerSection passwords={passwords} />
                </div>
            </main>
        </>
    );
}

export default App;
