function calculatePrice() {
    const vehicleType = document.getElementById('vehicle').value;
    const miles = document.getElementById('miles').value;
    let pricePerMile = vehicleType === 'sedan' ? 1 : 2;
    let totalPrice = miles * pricePerMile;

    document.getElementById('result').innerHTML = `Total Price: $${totalPrice.toFixed(2)}`;
}
