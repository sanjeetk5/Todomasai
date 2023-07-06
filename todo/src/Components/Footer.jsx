import React, { useState } from "react";
import {
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Text,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { Clear} from "../redux/action";

const Footer = () => {
  const [value, setValue] = useState(0);
  //
  const store = useSelector((store) => store.TodoReducer.todo);
  const dispatch = useDispatch();
 
  const handleChange = (event) => {
    setValue(event);
  };

  const cleafun = () => {
    dispatch(Clear);
  };

  return (
    <Flex mt={5} justifyContent={"space-evenly"} alignItems={"center"}>
      <Button>{`${store.length} items left`}</Button>
      <Tabs value={value} onChange={handleChange}>
        <TabList fontWeight={"semibold"}>
          <Tab>All</Tab>
          <Tab>Active</Tab>
          <Tab>Completed</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Text textAlign={"center"}>All</Text>
          </TabPanel>
          <TabPanel>
            <Text textAlign={"center"}>Active</Text>
          </TabPanel>
          <TabPanel>
            <Text textAlign={"center"}>Completed</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
      <Button onClick={cleafun}>Clear Completed</Button>
    </Flex>
  );
};

export default Footer;