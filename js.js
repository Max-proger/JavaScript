function Item(product, price) {
    this.product = product;
    this.price = price;
}

let catalog = []

function fetchCatalog() {
    catalog = [
        new Item('IPhone', 100000),
        new Item('Macbook', 150000),
        new Item('AppleWatch', 50000),
    ]
}

function drawItems() {
    catalog.forEach(function (item, i) {
        drawItem(item, i);
    })
}

const $catalog = document.querySelector('#catalog');
function drawItem(item, id) {
    $catalog.insertAdjacentHTML('beforeend',
        `<div id="item-${id}" class="prod_item">
            <div>${item.product}
                <div>Price: ${item.price}</div>
            </div>
        <button data-id="${id}" class="button">Buy</button>
    </div>`);
}

let shoppingCart = [];

let emptyCart = 'Cart is empty';

function basketItem(product, price) {
    this.product = product;
    this.price = price;
}

function totalSumm(shoppingCart) {
    return shoppingCart.reduce(function (acc, price) {
        return acc + price.price;
    }, 0);
}


function drawTotal(shoppingCart) {
    const $basket = document.querySelector('#basket');
    $basket.textContent = '';

    if (shoppingCart == 0) {
        $basket.insertAdjacentHTML('beforeend', `<div class="total">${emptyCart}</div>`);
    } else {
        $basket.insertAdjacentHTML('beforeend',
            `<div class="total">
            <p>In the basket: ${shoppingCart.length} pices in the amount of ${totalSumm(shoppingCart)} </p>
        </div>`);
    }
}

$catalog.addEventListener('click', function (e) {
    if (e.target.className === 'button') {
        const id = Number(e.target.getAttribute('data-id'));
        const choice = catalog[id];
        shoppingCart.push(new basketItem(choice.product, choice.price, choice.discount));
        drawTotal(shoppingCart);
    }
});

fetchCatalog()
drawItems(catalog);
drawTotal(shoppingCart);