import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './tabs.css';
import { TextStyleOptions } from './TextStyleOptions';
import { FontOptions } from './FontsOptions';
import { ColorText } from './ColorText';

export function TextOptions({setFontFamily, setColorText}) {

    return (
        <div className='text-white' id='text-options'>
            {/* <Tabs>
                <TabList>
                    <Tab><i className='bx bxs-hot'></i></Tab>
                    <Tab><i className='bx bx-font-family'></i></Tab>
                    <Tab><i className='bx bxs-color'></i></Tab>
                </TabList>

                <TabPanel>
                    <TextStyleOptions />
                </TabPanel> 
                <TabPanel> */}
                <div id='color-pick-text'></div>
                    <FontOptions setFontFamily={setFontFamily} />
                {/* </TabPanel>
                <TabPanel>
                    <ColorText setColorText={setColorText} />
                </TabPanel>
             </Tabs> */}
        </div>
    )
}