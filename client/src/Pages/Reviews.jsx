import React from 'react'
import review1 from "../Assets/images/review-1.png";
import review2 from "../Assets/images/review-2.png";
import review3 from "../Assets/images/review-3.png";
import quote from "../Assets/images/quote-img.png";
import "../Style/Reviews.css"

export default function Reviews() {
    return (
        <div className='review' id='review'>
            <h1 className="heading">Customer's Review</h1>

            <div className="box-container">

                <div className="box">
                    <img src={quote}  alt="" className="quote" />
                    <p>I've struggled with stubborn dandruff for years, trying countless shampoos with disappointing results. However, Ketoconazole Shampoo has been a game-changer for me. After just a few uses, I noticed a significant reduction in flakes and itchiness. I highly recommend this shampoo to anyone battling dandruff woes!</p>
                    <img src={review1} className="user" alt="" />
                    <h3>Rahul Mishra</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src={quote}  alt="IMG" className="quote" />
                    <p>I've been taking Bition gummies for a few weeks now, and I'm impressed with the results. Not only are they delicious, but I've noticed a significant improvement in my hair's health and thickness. Highly recommend!</p>
                    <img src={review2} className="user" alt="IMG" />
                    <h3>jenny white</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

                <div className="box">
                    <img src={quote} alt="IMG" className="quote" />
                    <p>I've struggled with severe hair fall for years, and nothing seemed to help until I tried this hair growth serum. It's lightweight, non-greasy, and has noticeably reduced my hair fall within just a few weeks of use. I'm thrilled with the results!</p>
                    <img src={review3} className="user" alt="IMG" />
                    <h3>Shanaya Kapoor</h3>
                    <div className="stars">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star-half-alt"></i>
                    </div>
                </div>

            </div>

        </div>
    )
}
