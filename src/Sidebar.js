import React from 'react'
import './Sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import AddToDriveIcon from '@mui/icons-material/AddToDrive';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import RestoreIcon from '@mui/icons-material/Restore';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

function Sidebar() {

  return (
    <div className='sidebar'>
<div className='sidebar2'>
 <div className='sidebar1'>
  <HomeIcon />
  <p>Orgin</p>
  </div>
  <div className='sidebar1'>
  <AddToDriveIcon />
   <p>Shorts</p>
   </div>
   <div className='sidebar1'>
   <SubscriptionsIcon />
   <p>Subscriptions</p>
   </div>
   </div>
   <div className='sidebar3'>
   <div className='sidebar1'>
   <LibraryMusicIcon />
   <p>House Music</p>
   </div>
   <div className='sidebar1'>
  <RestoreIcon />
  <p>History</p>
  </div>
  <div className='sidebar1'>
<WatchLaterIcon />
<p>See Later</p>
</div>
<div className='sidebar1'>
<ThumbUpOffAltIcon />
<p>Favorite videos</p>
</div>
</div>

        </div>
  )
}

export default Sidebar