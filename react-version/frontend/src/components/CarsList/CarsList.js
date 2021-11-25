import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllCarlist } from '../../redux/actions/carslistAC';
import './CarsList.css';
import Car from "../Car/Car";


function CarsList() {
    const carslist = useSelector((state) => state.carslist);
    const car = useSelector((state) => state.car);
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getAllCarlist(id));
      }, [id]);

    return (
        <div>
            <main>
                <div class="cars-list-heading-container">
                    <div class="test2">
                        <div class="line-heading">
                            <div class="vertical-line"></div>
                            <div class="cars-list-heading">
                                <h2>АВТОМОБИЛИ В НАЛИЧИИ</h2>
                            </div>
                        </div>
                        <div class="table-headers">
                            <p class="name-cell">Название</p>
                            <p class="year-cell">Год</p>
                            <p class="color-cell">Цвет</p>
                            <p class="status-cell">Статус</p>
                            <p class="price-cell">Цена</p>
                        </div>
                        <div class="list">
                            <ul class="posts">
                                {carslist.map((el) => (
                                    <>
                                        <Car 
                                            key={el.id} 
                                            id={el.id}
                                            title={el.title} 
                                            description={el.description}
                                            year={el.year}
                                            color={el.color}
                                            status={el.status}
                                            price={el.price}
                                            >
                                        </Car>
                                    </>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default CarsList;