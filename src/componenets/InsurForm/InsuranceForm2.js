import React from 'react'
import './insu2.css'
const InsuranceForm2 = () => {
  return (
    <> <div className='bod'>


    <div class="bg-img"><button type="butto" class="sp text-light border-0">Price Calculater</button>
        <form action="/action_page.php" class="contais cc position-absolute top-50 start-50 translate-middle">
            <div class="row g-3 text-start">
                <div class="col-sm-4">
                    <label for="validationTooltip04" class="form-label carmodel">Car Brand</label>
                    <select class="form-select " id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm">
                    <label for="validationTooltip04" class="form-label carmodel">Car model</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm">
                    <label for="validationTooltip04" class="form-label carmodel">Manufacturing Year

                    </label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
            </div>




            <div class="row g-3 ">
                <div class="col-sm-4 text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Currency Value</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Car Brand</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Phone No</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
            </div>
            <div class="row g-3 ">
                <div class="col-sm-4 text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Currency Value</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Car Brand</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
                <div class="col-sm text-start">
                    <label for="validationTooltip04" class="form-label carmodel">Phone No</label>
                    <select class="form-select" id="validationTooltip04" required>
                        <option selected disabled value="">Car Name</option>
                        <option>...</option>
                    </select>
                    <div class="invalid-tooltip">
                        Please select a valid state.
                    </div>
                </div>
            </div>

            <button type="submit" class="blt text-center  mt-3">Calculate Price</button>
        </form>
    </div>
</div></>
  )
}

export default InsuranceForm2