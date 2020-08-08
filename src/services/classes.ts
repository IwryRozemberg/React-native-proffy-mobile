import api from "./api"
import { Dispatch, SetStateAction } from "react";


interface IClassParams {
  week_day: number;
  time: string;
  subject: string;
}

interface ITeacherItem {
  id: number;
  name: string;
  avatar: string;
  bio: string;
  subject: string;
  cost: number;
  whatsapp: string;
}

async function getClassesByParams(params: IClassParams, callBack: Dispatch<SetStateAction<ITeacherItem[]>>) {
  const response = await api.get('classes', { params })
    .then(res => {
      return res.data;
    })
    .catch(err => { console.log(err); });
  callBack(response);
}

export { IClassParams, getClassesByParams, ITeacherItem }