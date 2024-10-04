import React from "react";
import "./FeatureCards.css";
import barbieImg from "../../assets/images/barbie-product-img.webp";
import angelImg from "../../assets/images/angel-reese-img.webp";
import nanoImg from "../../assets/images/nano-gym-img.webp";
import recessImg from "../../assets/images/recess_img.webp";


const FeatureCards = () => {
    const features = [
        {
            id: 1,
            image: barbieImg,
            name: "Reebok X Barbie",
            description: "This Barbie achieves her dreams. Shop the Reebok & Barbie Dream Gap Project collection, featuring bold and vibrant styles inspired by the limitless potential of women everywhere.",
        },
        {
            id: 2,
            image: angelImg,
            name: "Reebok X Angel Reese",
            description: "Bring on the cold. The Reebok x Angel Reese collection is out now. Featuring a custom Premier Road Run, BB 4000 ll, Classic Leather and Angel-inspired Lux Apparel.",
        },
        {
            id: 3,
            image: nanoImg,
            name: "Nano Gym",
            description: "Hit the dumbbells, cardio machines and workout classes in the all-new Nano Gym. Designed with a zoned rubber outsole for treadmill work, stability cradle for bodyweight exercises and flex grooves to adapt to multiple types of movements, you can comfortably work out any way in the gym.",
        },
        {
            id: 4,
            image: recessImg,
            name: "Reebok X Recess",
            description: "Look great, play hard. Serve up classic, vintage-inspired footwear in our latest collab with Recess.",
        },
    ];

    return (
        <div className="feature-cards">
            <h2>FEATURING THE BEST</h2>
            <div className="f-cards">
                {features.map((feature, index) => (
                    index < 4 && (
                        <div key={((feature.id))} className="feature-card-container">
                            <div className="feature-card">
                                <img src={feature.image} alt={feature.name} />
                            </div>
                            <h5>{feature.name}</h5>
                            <p>{feature.description}</p>
                        </div>
                    )
                ))}

            </div>
        </div>

    );
};

export default FeatureCards;
