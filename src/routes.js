import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/Home';
import Header from "./components/Header";
import Erro from "./pages/Erro";
import Favoritos from "./pages/Favoritos";
import Filme from "./pages/Filme";

const Routes = () => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route exact path="/filme" component={Filme} />
                <Route path="*" component={Erro} />
            </Switch>               
        </BrowserRouter>
    );
}
export default Routes;