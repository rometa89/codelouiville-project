import React from 'react'

const Desert = () => {
    return (
        <div className="tab-pane">
            <div className="row">
                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/sundae.jpg')} alt="A food" />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Sundae</span>
                                <span className="item-amt">$10</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/bananasStraberry.jpg')}  alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Banana Strawberry</span>
                                <span className="item-amt">$8</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/iceCreamFruits.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">iceCream Fruits</span>
                                <span className="item-amt">$12</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/applePie.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Apple Pie</span>
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


export default Desert