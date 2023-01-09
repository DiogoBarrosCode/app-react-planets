import React from "react";
import { Link } from "react-router-dom";

const NotFoundScreen = () => {
    return (
        <div>
            <h3>ERROR 404! Page Not Found.</h3>
            <Link to='/'>Voltar a listagem</Link>
        </div>
    )
}

export default NotFoundScreen;