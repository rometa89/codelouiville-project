import React from 'react'

const Mexican = () => {
    return (
        <div className="tab-pane">
            <div className="row">
                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('../images/tacoBeefFood.jpg')} alt="A food" />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Taco Beef Food</span>
                                <span className="item-amt">$10</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('../images/enchilada.jpg')}  alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Enchilada</span>
                                <span className="item-amt">$8</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('../images/mexicanBurrito.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Mexican Burrito</span>
                                <span className="item-amt">$12</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('../images/nachosChips.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Nachos Chips</span>
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


export default Mexican