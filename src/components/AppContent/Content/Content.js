import Players from "./Players/Players";
import Teams from "./Teams/Teams";
import {Route} from "react-router-dom"

const Content = () => {
    return (
        <div id="content">
            <Route path="/teams" component={Teams}/>
            <Route path="/players" component={Players}/>
        </div>
    )
}

export default Content;