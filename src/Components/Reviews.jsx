import React from 'react';
import 'aos/dist/aos.css'
import './Reviews.css'
import { Link } from 'react-router-dom';

function Reviews(props) {
    return (
        < >
            <h1 data-aos="fade-up">Opinie</h1>
            <div className="reviews-container" data-aos="fade-up">
                <iframe title="review1"
                    src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fizabella.pabjan%2Fposts%2F2709830829082406&width=500"
                    width="500"
                    height="230"
                    style={{ boderd: "none", overflow: "hidden" }}
                    scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title="review2" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Falicja.jenda.16%2Fposts%2F697398764436594&width=500&show_text=true&height=206&appId"
                    width="500" height="206" style={{ boderd: "none", overflow: "hidden" }} scrolling="no" frameborder="0"
                    allowFullScreen allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title="review3" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fgrzesczerw%2Fposts%2F1777982799015551&width=500&show_text=true&height=225&appId" width="500" height="225" style={{ boderd: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <iframe title="review4" src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fagnieszka.mazur.35%2Fposts%2F3284895784930954&width=500&show_text=true&height=206&appId" width="500" height="206" style={{ boderd: "none", overflow: "hidden" }} scrolling="no" frameborder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                <div className="link-to-reviews">Przeczytaj wszystkie opinie <a href="https://www.facebook.com/English-Empowering-105936414259466/reviews/">tutaj:</a> </div>
            </div>

        </>
    );
}

export default Reviews;