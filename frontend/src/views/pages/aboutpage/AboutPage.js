import React from 'react';

import './AboutPage.css';

const AboutPage = (props) => {
    return(
        <div className="about-page">
            <div className="top-container" >
                <img src="https://image.shutterstock.com/image-vector/cargo-ship-containers-transport-logistics-260nw-1987585067.jpg" alt="about-top-img"/>
            </div>
            <div className="mid-container" >
                <h1>Our Company</h1>
                <center>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestiae animi aliquam! Doloremque nihil autem veritatis illo mollitia? Ea doloribus fugit ipsum tempore. Dolor sapiente id consectetur aperiam dignissimos in.
                    Necessitatibus veniam voluptas alias, temporibus velit pariatur sed ducimus, recusandae neque qui libero. A, omnis perferendis? Inventore repellat accusantium vitae, amet iusto, odio earum, incidunt cumque fugit pariatur optio eligendi?</p>
                </center>
            </div>
            <div className="bottom-container" >
                <div className="card">
                    <img src="https://images.pexels.com/photos/7414038/pexels-photo-7414038.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="card1" />
                    <h3>Cooperation</h3>
                </div>
                
                <div className="card">
                    <img src="https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="card1" />
                    <h3>Teamwork Relationship</h3>
                </div>
                
                <div className="card">
                    <img src="https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="card1" />
                    <h3>Departments Relationship</h3>
                </div>

            </div>
        </div>
    );
}
export default AboutPage;