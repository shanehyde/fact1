import * as React from "react";

interface IPlan {
    width: string;
}

export default class Plan extends React.Component<IPlan, {}> {
    constructor(props) {
        super(props);
        console.log(document.getElementById('plan'))
    }

    render() {
        return <svg className="plan" width={this.props.width} height={this.props.width} id="plan"><circle cx={50} cy={50} r={20} className="fred"/></svg>
    }
}