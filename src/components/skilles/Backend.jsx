import React from 'react'

export default function Backend() {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Web Design</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills_data">
                <i class='bx bxl-sketch' ></i>
                <div>
                    <h3 className="skills_name">
                        UI UX 
                    </h3>
                        <span className="skills__level">Intermediate</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bxl-figma' ></i>
                <div>
                    <h3 className="skills_name">
                        Figma
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bx-minus-front' ></i>
                <div>
                    <h3 className="skills_name">
                        Framer
                    </h3>
                        <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
            <div className="skills__group">
                <div className="skills_data">
                <i class='bx bx-badge-check'></i>
                <div>
                    <h3 className="skills_name">
                        Gsap
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills_data">
                <box-icon name='photo-album'></box-icon>
                <div>
                    <h3 className="skills_name">
                        Photoshop
                    </h3>
                        <span className="skills__level">Basic</span>
                </div>
                </div>
                <div className="skills_data">
                <i class='bx bx-video' ></i>
                <div>
                    <h3 className="skills_name">
                        VEditing
                    </h3>
                        <span className="skills__level">Intermediate</span>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}
