import React from "react";
// import './style.scss'

const FoodTruckModal = ()=>{
    return (
        <div class="modal" id="modal">
          <h2>Modal Window</h2>
          <div class="content">{this.props.children}</div>
          <div class="actions">
            <button class="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
}

export default FoodTruckModal;