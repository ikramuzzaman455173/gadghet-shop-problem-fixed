
// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const Product = () => {
    const loacation = useLocation()
    let product=loacation.state
    console.log({ product });
    useEffect(() => {
          fetch("/feature.json").then(response => response.json()).then(data => {
            //   console.log(data)
              const mobile = data.filter(item => item.name == 'mobile')
              console.log(mobile);
              const adapter = data.filter(item => item.name == 'adapter')
              console.log(adapter);
          }).catch(error=>console.log(`404 page not found ${error}`))
    }, [])

    return (
        <Tabs>
            <TabList className="grid sm:grid-cols-5 lg:grid-cols-10">
                <Tab>Mobile</Tab>
                <Tab>Adapter</Tab>
                <Tab>Mackbook</Tab>
                <Tab>Airpods</Tab>
            </TabList>


           mobile&&(
            <TabPanel>
                <h2>Any content 1</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 2</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 3</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 4</h2>
            </TabPanel>
           )
           adapter&&(
            <TabPanel>
                <h2>Any content 5</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 6</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 7</h2>
            </TabPanel>
            <TabPanel>
                <h2>Any content 8</h2>
            </TabPanel>
           )
        </Tabs>
    );
};

export default Product;




// import { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
// import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';

// const Product = () => {
//     const location = useLocation();
//     const [mobileData, setMobileData] = useState([]);
//     const [adapterData, setAdapterData] = useState([]);
//     const [mackbook, setmackbookData] = useState([]);
//     let product = location.state
//     useEffect(() => {
//         fetch("/feature.json")
//             .then(response => response.json())
//             .then(data => {
//                 const mobile = data.filter(item => item.name === 'mobile');
//                 console.log();

//                 const mobileData = mobile[0]?.name === product
//                 setMobileData(mobileData);
//                 console.log({ mobileData });

//                 const adapter = data.filter(item => item.name === 'adapter');
//                 const adapterData =  adapter[0]?.name === product
//                 setAdapterData(adapterData);
//                 console.log({ adapterData });

//                 const mackbook = data.filter(item => item.name === 'mackbook');
//                 const mackbookData =  mackbook[0]?.name === product

//                 setmackbookData(mackbookData);
//                 console.log({ mackbookData });


//             })
//             .catch(error => console.log(`404 page not found ${error}`));
//     }, [product]);

//     return (
//         <Tabs>
//             <TabList className="grid sm:grid-cols-5 lg:grid-cols-10">
//                 {mobileData && <>
//                     <Tab>Mobile1</Tab>
//                     <Tab>Mobile2</Tab>
//                     <Tab>Mobile3</Tab>
//                     <Tab>Mobile4</Tab>
//                     <Tab>Mobile5</Tab>
//                 </> || adapterData && <>
//                     <Tab>Adapter1</Tab>
//                     <Tab>Adapter2</Tab>
//                     <Tab>Adapter3</Tab>
//                     <Tab>Adapter4</Tab>
//                     <Tab>Adapter5</Tab>
//                 </> || mackbook && <>
//                     <Tab>Mackbook1</Tab>
//                     <Tab>Mackbook2</Tab>
//                     <Tab>Mackbook3</Tab>
//                     <Tab>Mackbook4</Tab>
//                     <Tab>Mackbook5</Tab>
//                 </>}
//             </TabList>

//             {mobileData && <>
//                 <TabPanel>
//                     <h2>Mobile data 1</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mobile data 2</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mobile data 3</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mobile data 4</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mobile data 5</h2>
//                 </TabPanel>
//             </>}

//             {adapterData && <>
//                 <TabPanel>
//                     <h2>Adapter data 1</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Adapter data 2</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Adapter data 3</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Adapter data 4</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Adapter data 5</h2>
//                 </TabPanel>
//             </>}

//             {mackbook && <>
//                 <TabPanel>
//                     <h2>Mackbooks data 1</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mackbooks data 2</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mackbooks data 3</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mackbooks data 4</h2>
//                 </TabPanel>
//                 <TabPanel>
//                     <h2>Mackbooks data 5</h2>
//                 </TabPanel>
//             </>}
//         </Tabs>
//     );
// };

// export default Product;
