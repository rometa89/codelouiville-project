import React from 'react'

class Pizza extends React.Component {
    render (){
        return (
        
            <div className="tab-pane">
                <div className="row">
                    <div className="col-sm-6">
                        <div className="menu-item">
                            <div className="menu-image">
                                <img src={require('../../images/cheesePizza.jpg')} alt="A Pizza" />
                            </div>
                            <div className="image-caption">
                                <div className="caption-left-info">
                                    <span className="item-name">Cheese Pizza</span>
                                    <span className="item-amt">$10</span>
                                </div>
                                <span className="add-btn">Add</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-6">
                        <div className="menu-item">
                            <div className="menu-image">
                                <img src={require('../../images/miniPizza.jpg')}  alt='' />
                            </div>
                            <div className="image-caption">
                                <div className="caption-left-info">
                                    <span className="item-name">Mini Pizza</span>
                                    <span className="item-amt">$8</span>
                                </div>
                                <span className="add-btn">Add</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-6">
                        <div className="menu-item">
                            <div className="menu-image">
                                <img src={require('../../images/woodFried.jpg')} alt='' />
                            </div>
                            <div className="image-caption">
                                <div className="caption-left-info">
                                    <span className="item-name">Wood Fried</span>
                                    <span className="item-amt">$12</span>
                                </div>
                                <span className="add-btn">Add</span>
                            </div>
                        </div>
                    </div>
    
                    <div className="col-sm-6">
                        <div className="menu-item">
                            <div className="menu-image">
                                <img src={require('../../images/italianCheesePizza.jpg')} alt='' />
                            </div>
                            <div className="image-caption">
                                <div className="caption-left-info">
                                    <span className="item-name">Italian Cheese Pizza</span>
                                    <span className="item-amt">$15</span>
                                </div>
                                <span className="add-btn">Add</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>   
        );    
    
    }
    
}


export default Pizza;