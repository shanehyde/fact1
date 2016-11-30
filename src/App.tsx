import * as React from 'react';
import Counter from './Counter';
import colors from './colors';
import SideBar from "./SideBar";
import Plan from "./Plan";

export default class App extends React.Component<{}, {}> {
    render() {
        return (
            <div>
                <SideBar/>
                <Counter increment={1} color={colors.NICE} />
                <Counter increment={5} color={colors.SUPER_NICE} />
                <Plan width="600"/>
            </div>
        );
    }
}