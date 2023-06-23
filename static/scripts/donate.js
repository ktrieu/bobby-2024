document.addEventListener("DOMContentLoaded", () => {
    const paymentForm = document.getElementById('payment-form');
    const methodSelect = document.getElementById("payment-method");
    const paymentMethodError = document.getElementById("payment-method-error");
    const paymentInfo = document.getElementById("payment-info");

    const submitError = document.getElementById("submit-error");

    paymentForm.addEventListener("submit", (ev) => {
        ev.preventDefault();
        submitError.hidden = false;
        return false;
    })

    methodSelect.addEventListener("change", (ev) => {
        if (ev.currentTarget.value === 'bobbypay') {
            paymentMethodError.hidden = true;
            paymentInfo.hidden = false;
        }
        else {
            paymentMethodError.hidden = false;
            paymentInfo.hidden = true;
        }
    })

})