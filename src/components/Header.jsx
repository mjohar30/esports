import React, { Component } from 'react';

class Header extends Component {
    

    render() {
        return (
            <div>
                <div class="brand_image">
                    <img src="" alt="Logo"/>
                </div>
                <div class="nav_options">
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Profile</a></li>
                        <li><a href="#">Messages</a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;