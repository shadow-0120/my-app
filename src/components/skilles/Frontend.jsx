import React from 'react'

export default function Frontend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Front-End Devloper</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                <i class='bx bxl-html5'></i>
                <div>
                    <h3 className="skills_name">
                        HTML
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-css3'></i>
                <div>
                    <h3 className="skills_name">
                        CSS
                    </h3>
                        <span className="skills__level">Advenced</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-javascript' ></i>
                <div>
                    <h3 className="skills_name">
                        JavaScript
                    </h3>
                        <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills_data">
                <i class='bx bxl-react' ></i>
                <div>
                    <h3 className="skills_name">
                        React
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-git' ></i>
                <div>
                    <h3 className="skills_name">
                        Git
                    </h3>
                        <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-tailwind-css' ></i>
                <div>
                    <h3 className="skills_name">
                        Tailwind
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
