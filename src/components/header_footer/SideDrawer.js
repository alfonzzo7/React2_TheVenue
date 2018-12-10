import React from 'react';
import { Drawer, List, ListItem} from '@material-ui/core';

const SideDrawer = (props) => {
    return (
        <Drawer 
            anchor="right" 
            open={props.open} 
            onClose={() => props.onClose(false)}
        >
          
            <List component='nav'>
                <ListItem button onClick={()=>console.log('Feature')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={()=>console.log('Venue INFO')}>
                    Venue INFO
                </ListItem>
                <ListItem button onClick={()=>console.log('Highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>console.log('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>console.log('Location')}>
                    Location
                </ListItem>
            </List>

        </Drawer>
    );
};

export default SideDrawer;