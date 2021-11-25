import './CarsForm.css';
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getNewCar } from "../../redux/actions/carslistAC";

function CarsForm() {

    const [carsInputName, setCarsInputName] = useState("");
    const [carsInputDescription, setCarsInputDescription] = useState("");
    const [carsInputYear, setCarsInputYear] = useState("");
    const [carsInputColor, setCarsInputColor] = useState("");
    const [carsInputSelect, setCarsInputSelect] = useState("");
    const [carsInputPrice, setCarsInputPrice] = useState("");

    const dispatch = useDispatch();

    const inputNameHandler = (e) => {
        setCarsInputName(e.target.value);
      };
    
    const inputDescriptionHandler = (e) => {
        setCarsInputDescription(e.target.value);
      };

    const inputYearHandler = (e) => {
        setCarsInputYear(e.target.value);
      };

    const inputSelectHandler = (e) => {
        setCarsInputSelect(e.target.value);
      };

    const inputPriceHandler = (e) => {
        setCarsInputPrice(e.target.value);
      };
    
    const inputColorPriceHandler = (e) => {
        setCarsInputColor(e.target.value);
      };

    const submitHandler = (e) => {
        e.preventDefault();
        let id = Math.random();
        dispatch(getNewCar(id, carsInputName, carsInputDescription, carsInputYear, carsInputColor, carsInputSelect, carsInputPrice));
      };

    return (
        <div>
            <header class="header">
                <div class="captain-img"></div>
            </header>
            <main>
                <div class="heading">¡Ay caramba!</div>
                <form class="cars-form" onSubmit={submitHandler}>
                    <div class="input-block">
                        <input class="cars-input-name" type="text" placeholder="Название" onChange={inputNameHandler} value={carsInputName}/>
                        <input class="cars-input-year" type="text" placeholder="Год" onChange={inputYearHandler} value={carsInputYear}/>
                        <input class="cars-input-price" type="text" placeholder="Цена" onChange={inputPriceHandler} value={carsInputPrice}/>
                    </div>
                    <div class="input-block">
                        <input class="cars-input-description" type="text" placeholder="Описание" onChange={inputDescriptionHandler} value={carsInputDescription}/>
                    </div>
                    <div class="input-block therd-string">
                        <div class="test">
                            <div class="color-container">
                                <p>Цвет</p>
                                <div class="color-block" onChange={inputColorPriceHandler}>
                                    <input  id="happy1" class="custom-radio" name="happy" value="white" type="radio"/>
                                    <label for="happy1"></label>
                                    <input  id="happy2" class="custom-radio" name="happy" value="black" type="radio"/>
                                    <label for="happy2"></label>
                                    <input  id="happy3" class="custom-radio" name="happy" value="gray" type="radio"/>
                                    <label for="happy3"></label>
                                    <input  id="happy4" class="custom-radio" name="happy" value="red" type="radio"/>
                                    <label for="happy4"></label>
                                    <input  id="happy5" class="custom-radio" name="happy" value="green" type="radio"/>
                                    <label for="happy5"></label>
                                </div>
                            </div>
                            <label>
                                <select class="select-input" name="select" onChange={inputSelectHandler} value={carsInputSelect}>
                                    <option value="in_stock">В наличии</option>
                                    <option value="pednding">Ожидается</option>
                                    <option value="out_of_stock">Нет в наличии</option>
                                </select>
                            </label>      
                        <button class="cars-button" type="submit">ОТПРАВИТЬ</button>
                    </div>
                    </div>
                </form>
            </main>
        </div>
    )
  }
  
  export default CarsForm;