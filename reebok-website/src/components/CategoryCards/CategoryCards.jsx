import React from "react";
import "./CategoryCards.css";
import womenImg from "../../assets/images/women_img.jpg";
import menImg from "../../assets/images/men_img.jpg";
import kidsImg from "../../assets/images/kids_img.jpg";


const CategoryCards = () => {
    const categories = [
        { id: 1, name: "WOMEN", image: womenImg },
        { id: 2, name: "MEN", image: menImg },
        { id: 3, name: "KIDS", image: kidsImg },

    ];

    return (
        <div className="category-cards">
            {categories.map((category) => (
                <div key={(category.id)} className="card">
                    <img src={category.image} alt={category.name} />
                    <h2>{category.name}</h2>
                </div>
            ))}
        </div>
    );
};

export default CategoryCards;
