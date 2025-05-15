import React from 'react';
import './Faculty.css';

const Faculty = () => {
    return (
        <section id="Faculty">
            <br /><br />
            <h2 style={{ textAlign: 'center', color: 'white' }}>
                <span
                    style={{
                        backgroundImage: 'linear-gradient(to right, transparent 10%, green 10%, green 90%, transparent 90%)',
                        backgroundSize: '100% 5px',
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: '0 100%',
                    }}
                >
                    <strong style={{ fontSize: '1.3em' }}>Faculty Coordinators</strong>
                </span>
            </h2>
            <div className="container2">
                <div className="card2">
                    <div className="card__2 card-color__2">
                        <div className="image2">
                            <img
                                src="Coordinator/Venugopal.webp"
                                className="card-img2"
                                alt="Dr. Venugopal, IEEE TEMS Vellore"
                            />
                        </div>
                        <div className="content2">
                            <div className="card-heading" id="board-name">
                                <p style={{ color: 'white', textAlign:"center" }}>Dr. Venugopal P</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card2">
                    <div className="card__2 card-color__2">
                        <div className="image2">
                            <img
                                src="Coordinator/Subashini.webp"
                                className="card-img2"
                                alt="Mrs. Subashini, IEEE TEMS Vellore"
                            />
                        </div>
                        <div className="content2">
                            <div className="card-heading" id="board-name">
                                <p style={{ color: 'white' , textAlign:"center"}}>Dr. Subashini R</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faculty;
