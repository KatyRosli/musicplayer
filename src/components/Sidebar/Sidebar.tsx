import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import { Home, Search } from '../../svg/svg';
import * as C from './styles';

type Props = {
    setGenre: (e: string) => void;
    setIsSearch:(e: boolean) => void;
    setIsFull:(e: boolean) => void;
    isSearch: boolean;
    isSidebar: boolean;
    setIsSidebar: (e: boolean) => void;  
}


export const Sidebar = ({ setGenre, setIsSearch, setIsFull, isSearch, isSidebar, setIsSidebar }: Props) => {
    return (
        <C.Container isSidebar={isSidebar}>  
            <Router>
            <div className='inicialSearch'>
                <div 
                onClick={() => {setGenre(''); setIsSearch(false); setIsFull(false); setIsSidebar(false)}} 
                className='iniSearDivs'>
                   <Link to='/'><p><Home/></p> All Songs
                   </Link>
                </div>

                <div 
                onClick={() => {setIsSearch(!isSearch); setIsSidebar(false)}}className='iniSearDivs'>
                    <Link to='/search'><p><Search /></p> Search
                    </Link>
                </div>
            </div>

            <div className='genres'>
                <h2>Genres</h2>
                <Link to='/pop'>
                <div 
                onClick={() => {setGenre('Pop'); setIsSidebar(false); setIsSearch(false)}}>
                    Pop
                </div>
                </Link>
                <Link to='/dance'>
                <div 
                onClick={() => {setGenre('Dance'); setIsSidebar(false); setIsSearch(false)}}>
                    Dance
                </div>
                </Link>
                <Link to='/classic'>
                <div 
                onClick={() => {setGenre('Classic'); setIsSidebar(false); setIsSearch(false)}}>
                    Classic
                </div>
                </Link>
                <Link to='/electronic'>
                <div 
                onClick={() => {setGenre('Electronic'); setIsSidebar(false); setIsSearch(false)}}>
                    Electronic
                </div>
                </Link>
            </div>
            </Router> 
        </C.Container>
    )
} 