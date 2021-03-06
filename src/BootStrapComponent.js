import React from 'react'
import './bootstrap.min.css'

// For bootstrap, make sure the boot strap theme css file is in your project, and import it to the component

const BootStrapComponent = () => {
    return (
        <div>
            <div class="card text-white bg-primary mb-3">
            <div class="card-header">Header</div>
            <div class="card-bodyart">
                <h4 class="card-title">Primary card title</h4>
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            </div>
            </div>

            <div className="card-body"></div>
        </div>
    )
}

export default BootStrapComponent