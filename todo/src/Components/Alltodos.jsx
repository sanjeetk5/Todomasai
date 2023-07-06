import { Box, Flex, Input, Text } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CloseIcon, EditIcon } from "@chakra-ui/icons";
import { Clear, Delete, Toggle } from "../redux/action";

const Alltodos = () => {
  const AllTodos = useSelector((store) => store.TodoReducer.todo);
  const dispatch = useDispatch();

  const deletefunction = (id) => {
    dispatch(Delete(id));
  };

  const togglefun = (id) => {
    dispatch(Toggle(id))
  }

 

  return (
    <Box>
      {AllTodos.map((el, i) => {
        return (
          <Flex mt={2} justifyContent={"space-evenly"}>
            <input type= "checkbox" checked={el.completed} onChange={() => togglefun(el.id)} />
            <Text fontSize={20}> {el.todo} </Text>
            <Flex gap={30} justifyContent={"space-evenly"}>
              <EditIcon cursor={"pointer"} boxSize={7} />
              <CloseIcon boxSize={7} cursor={"pointer"} onClick={() => deletefunction(el.id)} />
            </Flex>
          </Flex>
        );
      })}
    </Box>
  );
};

export default Alltodos;
