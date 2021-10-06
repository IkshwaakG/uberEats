import React,{ useState, useEffect } from 'react'
import SideBar from './SideBar'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
import * as TiIcons from "react-icons/ti"
import * as BiIcons from "react-icons/bi"
import * as FaIcons from "react-icons/fa"
import {getsearchRestaurantResults,getAllRestaurants} from '../actions/restaurantActions'
const Header = () => {
    const [keyword, setKeyWord] = useState('')
    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin
    const adminLogin = useSelector(state => state.adminLogin)
    const { adminInfo } = adminLogin
    const dispatch = useDispatch()
    useEffect(() => {
       
            if(keyword.trim() !== ''){
                dispatch(getsearchRestaurantResults(keyword.trim()))
            }
            else{
                dispatch(getAllRestaurants())
            }
               
    }, [keyword,dispatch])


    return (
        < div className="header">
            <div className="row">
                <div className="col-md-1"><SideBar /></div>
                <div className="col-md-3">
                    <div className="logo">
                        {adminInfo ?
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/adminHome"><h1>Uber <span>Eats</span></h1></Link>
                            :
                            <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h1>Uber <span>Eats</span></h1></Link>
                        }

                    </div>
                </div>
                {(userInfo || adminInfo) ?
                    <>
                        <div className="col-md-2 ">
                            <TiIcons.TiLocation />
                            <select className="header-location-after" >
                                <option>San Jose</option>
                                <option> San Fransisco</option>
                            </select>
                        </div>
                        <div className="col-md-3 header-search">
                            <BiIcons.BiSearch />
                            <input type="text" className="header-search-after" onChangeCapture={(e) => setKeyWord(e.target.value)} placeholder="What are you craving?"></input>
                        </div>
                        <div className="col-md-2">
                            <button className="cartbutton"><FaIcons.FaShoppingCart/> &nbsp; <span>cart <b>.</b> 0</span></button>
                        </div>
                    </>
                    :
                    <>
                    <div className="col-md-2 searchBar">
                        <button className="header-signIn"> <Link className="header-signIn" to="/login"> Sign In</Link></button>
                    </div>
                    </>
                }


            </div>

            {/*<SideBar />
                {adminInfo ?
                    <div className="logo">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/adminHome"><h1>Uber <span>Eats</span></h1></Link>
                    </div>
                    :
                    <div className="logo">
                        <Link style={{ textDecoration: 'none', color: 'black' }} to="/"><h1>Uber <span>Eats</span></h1></Link>
                    </div>
                }

                {!(userInfo || adminInfo) ?
                    <Link style={{ textDecoration: 'none', color: 'black' }} to="/login">
                        <div className="header-option">
                            <a><span className="header-sign-in-button">Sign in</span> </a>
                        </div>
                    </Link>
                    :
                    <div className="row">
                        <input style={{ margin: '2px' }} type="text" className="form-control" placeholder="What are you craving today"></input>

                    </div>

                } */}



        </div>
    )
}

export default Header
