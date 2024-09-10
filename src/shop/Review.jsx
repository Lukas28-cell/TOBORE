import React, { useState } from 'react'
import Ratting from '../Component/Ratting';
import PopularPost from './PopularPost';

const reviwtitle = "Add a Review";

let ReviewList = [
    { 
    imgUrl: "/src/assets/images/instructor/01.jpg", 
    imgAlt: "Client thumb", 
    name: "Ganelon Boileau", 
    date: "Posted on August 25 , 2024 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { 
    imgUrl: "/src/assets/images/instructor/02.jpg", 
    imgAlt: "Client thumb", 
    name: "Morgana Cailot", 
    date: "Posted on August 25 , 2024 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { 
    imgUrl: "/src/assets/images/instructor/03.jpg", 
    imgAlt: "Client thumb", 
    name: "Telford Bois", 
    date: "Posted on August 25 , 2024 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", }, 
    { 
    imgUrl: "/src/assets/images/instructor/04.jpg", 
    imgAlt: "Client thumb", 
    name: "Cher Daviau", 
    date: "Posted on August 25, 2024 at 6:57 am", 
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.", },
    ];

const Review = () => {
    const [reviewShop, setReviewShop] = useState(true);

    const changeds = () =>{
        setReviewShop(!reviewShop)
    };
    const changed = () =>{
        setReviewShop(!reviewShop)
    };
    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShop ? "RevActive" : "DisActive"}`}>
                <li className='desc' onClick={changeds}>Description</li>
                <li className='rev' onClick={changed}>Reviews 4</li>
            </ul>
            {/* desc and review content */}
            <div className={`review-content ${reviewShop ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, i) =>(
                                <li key={i}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-mate'>
                                            <div className='posted-on'>
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    {/* add a review field */}
                    <div className='client-review'>
                        <div className='review-form'>
                            <div className='review-title'>
                                <h5>{reviwtitle}</h5>
                            </div>
                            <form action="action" className='row'>
                                <div className='col-md-4 col-12'>
                                    <input type="text" name="name" id="name" placeholder='Full Name *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <input type="email" name="email" id="name" placeholder='your Email *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                     <div className='rating'>
                                        <span className='mx-2'>Your Rating</span>
                                        <Ratting/>
                                     </div>
                                </div>
                                <div className='colmd-md-12 col-12'>
                                    <textarea name="message" id="message" rows="7.5" placeholder='Type Here'></textarea>
                                </div>
                                <div className='col-12'>
                                    <button type='submit' className='default-button'>
                                        <span>Submit Review</span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* description */}
                <div className='description'>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab,
                     veritatis omnis iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab, veritatis omnis
                     iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab, veritatis omnis
                     iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!</p>
                     <div className="post-item">
                        <div className="post-thumb">
                            <img src="/src/assets/images/shop/01.jpg" alt="" />
                        </div>
                        <div className='post-content'>
                            <ul className='lab-ul'>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>orem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus!</li>
                            </ul>
                        </div>
                     </div>
                     <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab,
                     veritatis omnis iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab, veritatis omnis
                     iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi possimus eaque excepturi ab, veritatis omnis
                     iste animi hic quasi nihil ex amet maiores unde impedit, corporis quos harum esse alias!</p>
                </div>
            </div>
        
        </>
    )
}

export default Review
