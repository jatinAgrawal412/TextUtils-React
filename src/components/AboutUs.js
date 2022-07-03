import React, { useState } from 'react'

function AboutUs(props) {

    // const [myStyle , setMyStyle] = useState({
    //     color:'black',
    //     backgroundColor : 'white'
    // })
    // const [btnText ,setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () =>{
    //    if( myStyle.color ==='white'){
    //        setMyStyle({
    //         color:'black',
    //         backgroundColor : 'white'
    //     });
    //     setBtnText("Enable Dark Mode");
    // }
    // else{
    //     setMyStyle({
    //         color:'white',
    //         backgroundColor : 'black',
    //         border : '1px solid white'
    //        });
    //        setBtnText("Enable Light Mode");

    //    }
    // }

    let myStyle = {
        color: props.mode === 'dark'?'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)' : 'white'
    }



    return (
        <div className='container my-3' style={myStyle}>
            <h2>About Us</h2>
            <div className="accordion" id="accordionExample" style={myStyle}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={myStyle}>
                            <strong>Analyze Your Text</strong>

                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count etc.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={myStyle}>
                            <strong>Free to use</strong>

                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            TextUtils is a free character counter tool that provides instant character count & word count section for a given text. TextUtils reports the number of words and character. thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={myStyle}>
                            <strong>Brouser Compatibile</strong>

                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This word counter software works in any web browserr such as Chrom, FireFox, Internet Explorer, Safari, Opera. It suits to count character in Facebook. blog,books, excel documents, pdf documents, essays, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container">
                <button type='button' className='btn btn-primary my-2' onClick={toggleStyle}>{btnText}</button>
            </div> */}
        </div>
    )
}
export default AboutUs;