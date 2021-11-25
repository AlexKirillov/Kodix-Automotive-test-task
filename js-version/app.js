async function getData() {
    let response = await fetch('https://rawgit.com/Varinetz/e6cbadec972e76a340c41a65fcc2a6b3/raw/90191826a3bac2ff0761040ed1d95c59f14eaf26/frontend_test_table.json');
    let content = await response.json();

    let list = document.querySelector('.posts');
        let key;
        let x = 0;

        for (key in content) {
            list.innerHTML += `<li class="post" id=id${x}>
                <div class="list-content">
                    <div class="name-cell top">
                        <div class="">${content[key].title}</div>
                        <div class="description">${content[key].description}</div>
                    </div>
                    <div class="year-cell top">${content[key].year}</div>
                    <div class="color-hap color-cell top" style="background: ${content[key].color}"></div>
                    <div class="status-cell top">${content[key].status}</div>
                    <div class="price-cell top">${content[key].price}</div>
                    <div class="delete top2">Удалить</div>
                </div>
            </li>`
            
            x++
            content[key]
        }

        list.onclick = function(e) {
            const btn = e.target.closest('.delete');
            if (!btn) {
              return;
            }
            
            btn.parentElement.remove();
          }
        
        let carsButton = document.querySelector('.cars-button');
        let carsInputName = document.querySelector('.cars-input-name');
        let carsInputYear = document.querySelector('.cars-input-year');
        let carsInputPrice = document.querySelector('.cars-input-price');
        let carsInputDescription = document.querySelector('.cars-input-description');
        let carsInputColor = document.getElementsByClassName('custom-radio');
        let carsInputSelect = document.querySelector('.select-input');
        
        carsButton.onclick = function(e) {
            e.preventDefault();
            
            let checkboxesChecked = []; 

            for (let i = 0; i < carsInputColor.length; i++) {
                if (carsInputColor[i].checked) {
                    checkboxesChecked.push(carsInputColor[i].value); 
            }
        }
            let carsInputColoValue = checkboxesChecked[0];

            let carsInputSelectValue = carsInputSelect.options[carsInputSelect.selectedIndex].value;

            list.innerHTML += `<li class="post" id=id${x}>
            <div class="list-content">
            <div class="name-cell">
                <div class="">${carsInputName.value}</div>
                <div class="description">${carsInputDescription.value}</div>
            </div>
            <div class="year-cell">${carsInputYear.value}</div>
            <div class="color-hap color-cell" style="background: ${carsInputColoValue}"></div>
            <div class="status-cell">${carsInputSelectValue}</div>
            <div class="price-cell">${carsInputPrice.value}</div>
            <div class="delete">Удалить</div>
            </div>
            </li>`;

            x++;

            carsInputName.value = '';
            carsInputYear.value = '';
            carsInputPrice.value = '';
            carsInputDescription.value = '';
        }
};
getData();

