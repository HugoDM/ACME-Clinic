import { Button } from "../../Components/Button";
import { Input } from "../../Components/Input";
import './Home.css'

export const Home = () => {
    return (
        <div className="HomePage">
            <div className="CentralDiv">
                <Input label="Teste de Label" placeholder="Escreva" />
                <Button name="Buscar" onClick={() => { }} />
            </div>
        </div>
    );
};