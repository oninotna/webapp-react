import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as starSolid} from "@fortawesome/free-solid-svg-icons";
import { faStar as starRegular } from "@fortawesome/free-regular-svg-icons";

export default function StarsReviewComponent ({vote}) {
    const starsVote = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= vote) starsVote.push(<FontAwesomeIcon icon={starSolid} style={{color: "#FFD43B",}}/>);
        else starsVote.push(<FontAwesomeIcon icon={starRegular} style={{color: "#FFD43B",}}/>);
    };

    return <div>{starsVote}</div>;
};