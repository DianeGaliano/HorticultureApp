import { Card, CardImage, CardText, CardBody, CardTitle} from "reactstrap";

const DisplayCard = ({item}) => {
    const { image, name, description } = item;
    return (
        <Card>
            <CardImage src={image} alt={name}/>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    )
}

export default DisplayCard;