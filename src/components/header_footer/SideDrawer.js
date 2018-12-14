import React from 'react';
import { Drawer, List, ListItem} from '@material-ui/core';
import { scroller } from 'react-scroll';

const SideDrawer = (props) => {
    const scrollToElement = (element) => {
        scroller.scrollTo(element, {
            duration: 1500,
            delay: 100,
            smooth: true,
            offset: -88
        });
        props.onClose(false)
    }

    return (
        <Drawer 
            anchor="right" 
            open={props.open} 
            onClose={() => props.onClose(false)}
        >
          
            <List component='nav'>
                <ListItem button onClick={()=>scrollToElement('Featured')}>
                    Event starts in
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('VenueInfo')}>
                    Venue INFO
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('Highlights')}>
                    Highlights
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('Pricing')}>
                    Pricing
                </ListItem>
                <ListItem button onClick={()=>scrollToElement('Location')}>
                    Location
                </ListItem>
            </List>

        </Drawer>
    );
};

export default SideDrawer;