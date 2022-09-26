export type ContainProps = {
  children : React.ReactNode
}

export type SingleListProps = {
  icon : any,
  text : string,
  path : string,
  badge : boolean,
  arrowdown : boolean,
  sublist ? : string[]
}

export type MainHeaderProps = {
  title : string,
}

export type CardsProps = {
  children : React.ReactNode,
  bg : string,
  width : string,
  wide? : string,
  height : string,
  pr? : boolean,
  link? : string,
  icon? : boolean,
  colorText ? : boolean
}

export type HeaderProps = {
  icon : any,
  title : string,
  select ? : boolean,
  colorText ? : boolean
}

export type OrderExtensionProps = {
  item : string,
  amount : string
}

export type ButtonPlayProps = {
  icon : any,
  text : string
}

export type CardBoxProps = {
  children : React.ReactNode,
  text : string,
  position ? : string,
  background : string
}

export type ProductProps = {
  id : number,
  category : string,
  image : string,
  description : string,
}