import React from 'react'
import '../App.css';
import InboxIcon from '@mui/icons-material/Inbox';
import { Badge } from "@mui/material";
import CascadingText from "../components/CascadingText"
import ClickableBadgeModal from '../components/ClickableBadgeModal';


export default function Home() {
  return (
    <div className='HomeDiv'>  
    <ClickableBadgeModal />
    <CascadingText/>
        </div>
  )
}
