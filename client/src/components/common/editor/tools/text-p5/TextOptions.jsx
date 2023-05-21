import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { TextStyleOptions } from './TextStyleOptions';
import { FontOptions } from './FontsOptions';

export function TextOptions() {

    return (
        <div className='text-white'>
            <Tabs>
                <TabList>
                    <Tab><i className='bx bxs-hot'></i></Tab>
                    <Tab><i className='bx bx-font-family'></i></Tab>
                </TabList>

                <TabPanel>
                    <TextStyleOptions />
                </TabPanel>
                <TabPanel>
                    <FontOptions />
                </TabPanel>
            </Tabs>
        </div>
    )
}