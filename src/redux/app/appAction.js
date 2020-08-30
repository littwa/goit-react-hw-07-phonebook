import { v4 as uuidv4 } from "uuid";
import { ADD_ITEMS, DEL_ITEMS, FILTER, ITEMS_LOCAL_STOR } from "./appTypes";
import { createAction } from "@reduxjs/toolkit";

const addItemsFromLocalStor = createAction(ITEMS_LOCAL_STOR);

const itemsAdd = createAction(ADD_ITEMS, (name, number) => ({ payload: { items: { id: uuidv4(), name, number } } }));

const itemsDel = createAction(DEL_ITEMS);

const filter = createAction(FILTER);

export default { filter, itemsAdd, itemsDel, addItemsFromLocalStor };
