import { Box, Input } from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Addtodonew } from "../redux/action";

const Addtodo = () => {
  const dispatch = useDispatch();
  const store = useSelector((store) => {
    console.log(store.TodoReducer.todo);
  });
  const [todo, setTodo] = useState("");

  function addTodo(e) {
    e.preventDefault();
    dispatch(Addtodonew({todo , id: Date.now() , completed : false}));
    setTodo("");
  }

  return (
    <Box>
      <form onSubmit={addTodo}>
        <Input
          placeholder="Create a todo"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </form>
    </Box>
  );
};

export default Addtodo;
