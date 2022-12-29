import React from "react";
// import './style.scss'

const FoodTruckModal = ()=>{
    return (
        <div className="modal" id="modal">
          <h2>Modal Window</h2>
          <div className="content">{this.props.children}</div>
          <div className="actions">
            <button className="toggle-button" onClick={this.onClose}>
              close
            </button>
          </div>
        </div>
      );
}

export default FoodTruckModal;