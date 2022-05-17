import './Home.css'
// import Stack from '@mui/material/Stack'
// import Grid from '@mui/material/Grid'
// import Box from '@mui/material/Box'
import Transparencia from '../../components/web/transparencia/Transparencia';
import Login from '../../components/web/login/Login';

export default function Hello() {
    return (
        <div id="Hello">
            <div id="helloTransparencia">
                <Transparencia/>
            </div>
            <div id="helloPrincipal">
                <Login />
            </div>
        </div>
    );
}