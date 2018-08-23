export class INotes{
  constructor(
  internalId:number,
  id:number,
  title:string,
  text:string,
  checklists:any,
  labels:any,
  isPinned:boolean
  ){}
}

interface checklist{
  ID : number,
  item:string
}

interface label{
  ID:number,
  name:string
}
