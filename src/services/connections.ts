import { Dispatch, SetStateAction } from "react";

import api from "./api";

function getConnectionsNumber(callBack: Dispatch<SetStateAction<number>>) {
  return api.get('connections')
    .then(async response => {
      const { connectionsNumbers } = await response.data;
      callBack(connectionsNumbers);
      return connectionsNumbers;
    });
}

async function insertConnectionTeacher(user_id: number) {
  return await api.post('connections', { user_id });
}

export { getConnectionsNumber, insertConnectionTeacher };