import '../styles/globals.css';
import InputComponent from '../components/input.component';
import FormComponent from '../components/form.component';
import HeaderComponent from '../components/header.component';
import Sidebar from '../components/sidebar.component';

const App = () => {
    return (
        <>
            <div className="flex bg-gray-100 min-w-screen min-h-screen">
                <Sidebar
                    title=""
                />
                <div className="flex flex-col justify-center w-full">
                    <HeaderComponent
                        id='home-header'
                        title='Pendura Aí'
                    />
                    <FormComponent
                        title="Login"
                        buttonTitle="Enter"
                    >
                        <div>
                            <InputComponent
                                id="email"
                                label="Email"
                                type="email"
                                placeholder="Digite seu email"
                                margin=""
                                required
                            />
                        </div>
                        <div>
                            <InputComponent
                                id="password"
                                label="Password"
                                type="password"
                                placeholder="Digite sua senha"
                                required
                            />
                        </div>
                    </FormComponent>
                </div>
            </div>
        </>
    );
  };
  
  export default App;
  