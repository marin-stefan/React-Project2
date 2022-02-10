import React from "react";
import {Link} from 'react-router-dom';

function HomeCategory(props) {

    const { image, title, description, routeName,} = props;
    
    return (
        <div className="col-12 col-md-6 mb-4">
            <Link to={`/category/${routeName}`} className="text-decoration-none text-center text-warning" >
                <img
                    className="w-100 border border-danger" 
                    src={image} 
                    alt="" 
                />
                <h2>{title}</h2>
                <h5>{description}</h5>
            </Link>
        </div>
    )
}

export default HomeCategory;