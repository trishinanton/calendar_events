import React, {useEffect} from 'react';
import './App.css';
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {Layout} from "antd";
import {useActions} from "./hooks/useActions";
import {IUser} from "./models/IUser";

function App() {
    const {setUser, setIsAuth} = useActions()

    useEffect(()=> {
        if(localStorage.getItem('auth')){
            setUser({username: localStorage.getItem('username' || '')} as IUser)
            setIsAuth(true)
        }
    }, [])
  return (
    <div>
        <Navbar />
        <Layout.Content>
            <AppRouter />
        </Layout.Content>
    </div>
  );
}

export default App;
