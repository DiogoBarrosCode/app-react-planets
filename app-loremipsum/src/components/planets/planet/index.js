import React, {Fragment} from "react";
import DescriptionWhitLink from "../../shared/DescriptionWithLink";
import GrayImg from "../../shared/gray_img";


const Planet = (props) => {

    let title;
    if(props.title_with_underline){
        title = <h4><u>{props.name}</u></h4>
    } else {
        title = <h4>{props.name}</h4>
    }

    return (
        <div onClick={() => props.clickOnPlanet(props.name)}>
            {title}
            <DescriptionWhitLink description={props.description} link={props.link}/>
            <GrayImg img_url={props.img_url} gray={props.gray}/>
            <hr/>
        </div>
    )
}

export default Planet;