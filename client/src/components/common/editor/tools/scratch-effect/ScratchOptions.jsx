import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { ChooseGround } from './ChooseGround';
import { ChooseStamp } from './ChooseStamp';

export function ScratchOptions()
{


    return (
        <div className='text-white' id='scratch-brushes'>
            {/* <Tabs>
                <TabList>
                    <Tab><i className='bx bx-minus-back'></i></Tab>
                    <Tab><i className='bx bxs-brush' ></i></Tab>
                </TabList>

                <TabPanel>
                    <ChooseGround />
                </TabPanel>
                <TabPanel> */}
                    <ChooseStamp />
                {/* </TabPanel>
            </Tabs> */}
        </div>
    )
}