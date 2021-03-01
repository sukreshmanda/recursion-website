import React from 'react'
class Services extends React.Component {
    render() {
        return (
            <div className="bg-primary services">
                <div className="row">
                    <div className="col">
                        <div className="services-title mt-5 mb-2">
                            Our Services
                        </div>
                        <div className="services-desc mb-5">
                            Stop wasting money in investing into unknown stocks, learn from Recursion Stock Advisor!
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md card mr-1 mb-2 mb-md-0">
                        <div className="row">
                            <div className="col">
                                Text Title
                            </div>
                            <div className="col">

                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                Text desc
                            </div>
                        </div>
                    </div>
                    <div className="col-md card mr-1 mb-2 mb-md-0">
                        second
                    </div>
                    <div className="col-md card mb-2 mb-md-0">
                        third
                    </div>
                </div>
            </div>
        )
    }
}
export default Services;