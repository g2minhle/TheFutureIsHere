import * as React from "react";
import {
    Route,
    Switch,
} from "react-router-dom";

import { IntroPage } from "./intro/introPage";

export class MainRoutes extends React.Component<any, any> {
    public render() {
        return (
            <Switch>
                <Route
                    path={`/`}
                    component={IntroPage}
                />
                <Route
                    path={`/the-second-route`}
                    component={IntroPage}
                />
            </Switch>
        );
    }
}
