import axios from 'axios';
import icon from '../../assets/img/notification-icon.svg';
import { BASE_URL } from '../../utils/request';
import './styles.css';

type Props = {
    saledId: number;
}

function handleClick(id: number){
    axios(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        console.log("SUCESSO")
    })
}

function NotificationButton({saledId} : Props) {
    return (
        <div className="dsmeta-red-btn" onClick={()=> handleClick(saledId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton;