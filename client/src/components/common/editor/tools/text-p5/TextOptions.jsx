import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './tabs.css';
import { TextStyleOptions } from './TextStyleOptions';
import { FontOptions } from './FontsOptions';
import { ColorText } from './ColorText';

export function TextOptions({ setFontFamily, setColorText }) {

    return (
        <div className='text-white grid grid-rows-2 text-center items-center ' id='text-options'>
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
                
            <div className='w-full mt-4 grid grid-cols-2'>
                <p className='text-xl'>Color: </p>
                <div className='mb-10' id='color-pick-text'></div>
            </div>

            <FontOptions setFontFamily={setFontFamily} />
            {/* </TabPanel>
                <TabPanel>
                    <ColorText setColorText={setColorText} />
                </TabPanel>
             </Tabs> */}
        </div>
    )
}