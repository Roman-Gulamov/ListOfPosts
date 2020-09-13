import Leanne from '../../assets/images/Leanne.png';
import Ervin from '../../assets/images/Ervin.png';
import Clementine from '../../assets/images/Clementine.png';
import Patricia from '../../assets/images/Patricia.png';
import Chelsey from '../../assets/images/Chelsey.png';
import Dennis from '../../assets/images/Dennis.png';
import Kurtis from '../../assets/images/Kurtis.png';
import Nicholas from '../../assets/images/Nicholas.png';
import Glenna from '../../assets/images/Glenna.png';
import Clementina from '../../assets/images/Clementina.png';
import Anonim from '../../assets/images/Anonim.png';


const findUserImg = (id) => {
    switch (id) {
        case 1:
            return Leanne
        case 2:
            return Ervin
        case 3:
            return Clementine
        case 4:
            return Patricia
        case 5:
            return Chelsey
        case 6:
            return Dennis
        case 7:
            return Kurtis
        case 8:
            return Nicholas
        case 9:
            return Glenna
        case 10:
            return Clementina
        default:
            return Anonim
    }
}

export default findUserImg;
