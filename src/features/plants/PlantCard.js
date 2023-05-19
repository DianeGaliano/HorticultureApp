import { Card, CardImg, CardImgOverlay, CardTitle  } from "reactstrap";
import { Link } from "react-router-dom";

const PlantCard = ({plant}) => {
    const { id, image, name } = plant;
    return (
        <Link>
            <Card>
                <CardImg
                    width="100%"
                    src={image}
                    alt={name}
                />
            </Card>
        </Link>
        
    )
}

export default PlantCard;