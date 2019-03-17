import React from 'react';
import Aux from './../../hoc/Aux'

const layoutStyles = {
 marginTop: '16px',
}

const layout = (props) => (
 <Aux>
   <div className="Content">Toolbar, SideDrawer, BackDrop</div>
   <main style={layoutStyles}> 
    {props.children}
   </main>
 </Aux>
 
);


export default layout;