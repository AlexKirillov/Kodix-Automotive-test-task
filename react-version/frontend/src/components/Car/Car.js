import './Car.css';
import { useDispatch } from "react-redux";
import { removeCar } from "../../redux/actions/carslistAC";

function Car({ id, title, description, year, color, status, price }) {

    const dispatch = useDispatch();
    const handleDelet = () => {
        console.log(id);
        dispatch(removeCar(id));
      };


    return (
        <li class="post" id={id}>
                <div class="list-content">
                    <div class="name-cell top">
                        <div class="">{title}</div>
                        <div class="description">{description}</div>
                    </div>
                    <div class="year-cell top">{year}</div>
                    <div class="color-hap color-cell top" style={{background: `${color}`}}></div>
                    <div class="status-cell top">{status}</div>
                    <div class="price-cell top">{price}</div>
                    <div class="delete top2" onClick={handleDelet}>Удалить</div>
                </div>
            </li>
    )
}

export default Car;