import React from 'react'

const Chinese = () => {
    return (
        <div className="tab-pane">
            <div className="row">
                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/dimsum.jpg')} alt="A food" />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Dimsum</span>
                                <span className="item-amt">$10</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/noodles.jpg')}  alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Noodles</span>
                                <span className="item-amt">$8</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/springRoll.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Spring Rolls</span>
                                <span className="item-amt">$12</span>
                            </div>
                            <span className="add-btn">Add</span>
                        </div>
                    </div>
                </div>

                <div className="col-sm-6">
                    <div className="menu-item">
                        <div className="menu-image">
                            <img src={require('./images/sushi.jpg')} alt='' />
                        </div>
                        <div className="image-caption">
                            <div className="caption-left-info">
                                <span className="item-name">Sushi</span>
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


export default Chinese