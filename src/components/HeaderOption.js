import React from 'react'
import '../styles/HeaderOption.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {selectUser} from '../features/userSlice'
import { useSelector } from 'react-redux';


const HeaderOption = ({accountCircleIcon, Icon, title, onClick}) => {

  const user = useSelector(selectUser);

  return (
    <div onClick={onClick} className='headerOption'>
          {Icon && <Icon className="headerOption__icon" />}
        {accountCircleIcon &&  <AccountCircleIcon className="headerOption__icon me" src={user?.photoUrl} >
          {user?.email[0]}
        </AccountCircleIcon>
        
        }
      <h3 className='headerOption__title'>{title}</h3>
    </div>
  )
}

export default HeaderOption