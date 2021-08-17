function updateProductNumber(product, price, isIncreasing) {
    let productNumber = document.getElementById(product + '-number').value;

    if (isIncreasing == true) {
        productNumber = parseInt(productNumber) + 1;
    } else {
        if (productNumber == 0) {
            return;
        } else {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    document.getElementById(product + '-number').value = productNumber;

    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = parseInt(productNumber) * price;

    calculateTotal();
}

function getInputValue(product) {
    const productNumber = parseInt(document.getElementById(product + '-number').value);
    return productNumber;
};

function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;

    const subTotal = phoneTotal + caseTotal;
    document.getElementById('sub-total').innerText = subTotal;

    const taxAmount = subTotal / 10;
    document.getElementById('tax-amount').innerText = taxAmount;

    const totalPrice = subTotal + taxAmount;
    document.getElementById('total-price').innerText = totalPrice;
}


//handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, true);
});

document.getElementById('phone-minus').addEventListener('click', function () {
    updateProductNumber('phone', 1219, false);
});

//handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function () {
    updateProductNumber('case', 59, true);
});

document.getElementById('case-minus').addEventListener('click', function () {
    updateProductNumber('case', 59, false);
});